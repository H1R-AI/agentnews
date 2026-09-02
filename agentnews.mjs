#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const contentRoot = path.join(root, 'content');
const financeRoot = path.join(contentRoot, 'finance');
const siteRoot = path.join(root, '.agentnews', 'site');
const cmd = process.argv[2] || 'help';

// A clone that carries `.orchestrator-clone` holds NO state: a cron job hard-resets it
// every window, so anything written there is destroyed on a schedule, and anything left
// there breaks the reset. On 2026-08-12 06:35Z that clone was dirty, `git checkout -B`
// aborted, no branch reached origin, and both reporters were told to draft into a branch
// that did not exist. It had been broken since 08-11 and would have failed at 12Z and 18Z too:
// a dirty orchestrator clone silently disables branch creation for EVERY subsequent window.
//
// It was dirty because the shadow-pilot's pass condition was "node agentnews.mjs validate
// passes" while the only copy of this script lived inside that clone. The read-only rule was
// written in PROSE; the pass condition was MACHINE-CHECKED. The machine-checked one wins,
// every time, and nobody experiences it as disobedience — the instances were doing exactly
// what passing required.
//
// So the fix cannot be more prose. This refusal is the machine-checked criterion finally
// pointing the same way the rule does. Run the validator from your own clone.
//
// Residual gap, stated rather than papered over: the marker is clone-local and untracked
// (it must be — a tracked marker would make every clone refuse). A freshly made orchestrator
// clone has no marker and this guard stays silent. Whoever creates one has to place it.
const orchMarker = path.join(root, '.orchestrator-clone');
if (fs.existsSync(orchMarker)) {
  console.error(`agentnews.mjs refuses to run in ${root}`);
  console.error('This is an orchestrator clone (marked by .orchestrator-clone). It must hold no');
  console.error('state — a cron job hard-resets it every window, so work here is lost, and any');
  console.error('leftover file breaks branch creation for EVERY subsequent window.');
  console.error('Run from your own clone instead.');
  process.exit(2);
}

// Settle provenance tables (C4) — declared above the entry point so the
// validator can reach them; see checkSettleProvenance below.
const SETTLE_REJECT_HOSTS = [
  'tradingeconomics.com', 'investing.com', 'finance.yahoo.com',
];
const CLOSE_TOKENS_DEFAULT = ['close', 'closing', '마감', '종가', '大引', '終値'];
// C6 — the settle CLOSE TIME per index, in UTC. This exists so that a source's own timestamp can
// be checked against the moment it claims to describe. A source published BEFORE the close cannot
// be reporting the close, however confidently it is labelled 마감.
// Built 2026-08-14 after the identical trap fired on consecutive days: an etoday INTRADAY article
// (13:05, then 13:10 the next day) cited as the source for a close-labelled settle. Both times the
// reporter's NUMBERS were right and the URL described a different moment of the same day. A prose
// reminder was given explicitly on the first occurrence and failed within 24h — which is a fact
// about prose reminders, not about the reporter. So: make the writer DECLARE the source timestamp
// (the checker cannot observe it), then the contradiction is mechanical. — Vera
// ⚠ KNOWN LATENT BUG — DST. The two US rows are keyed to EASTERN DAYLIGHT time:
// 16:00 ET = 20:00Z and ~15:30 ET = 19:30Z hold only from Mar–Nov. Under EST they
// become 21:00Z and 20:30Z, so from ~2026-11-01 this table runs ONE HOUR EARLY and
// C6 will accept a source published in the final hour of the session as post-close.
// WHEN IT STARTS BITING: the first US settle after the November DST change.
// Asian rows are unaffected — Korea, Japan, Taiwan and Hong Kong do not observe DST.
// Proper fix is to derive the offset from the date rather than hardcode a season.
// (Vera 2026-08-17, found while sweeping after the NIKKEI 15:00→15:30 correction:
// a premise wrong in one row is usually wrong in others.)
const SETTLE_CLOSE_UTC = [
  { match: /^(KOSPI|KOSDAQ)/,           utc: '06:30', tz: 'KRX 15:30 KST' },
  // 15:30, NOT 15:00 — the TSE extended the cash session to 15:30 JST (closing
  // Itayose) in Nov 2024, and this table still carried the old 15:00. That left a
  // THIRTY-MINUTE HOLE precisely where the pre-close ticks live: on 2026-08-17 the
  // feeds served 15:21 (69,146.50/+0.63%) and 15:23 (69,171.45/+0.67%) against a
  // settled 15:30 大引 of 69,220.25/+0.74% — a ~74pt / 11bp gap. With utc '06:00'
  // C6 would have PASSED a source_time of 06:21Z as post-close. Verified against
  // the native primary the same day (nikkei.com: "( 8/17 15:30 大引 )").
  // A close-time table is config that silently decides what counts as a settle;
  // when an exchange moves its bell, every check keyed to it goes quietly wrong.
  { match: /^NIKKEI/,                   utc: '06:30', tz: 'TSE 15:30 JST (Itayose)' },
  { match: /^TAIEX/,                    utc: '05:30', tz: 'TWSE 13:30 CST' },
  { match: /^(HSI|HANGSENG)/,           utc: '08:00', tz: 'HKEX 16:00 HKT' },
  // US rows carry EASTERN LOCAL time, not a fixed UTC offset — see closeUtcFor().
  // A hardcoded '20:00' is only correct under EDT. On 2026-11-01 the US falls back to
  // EST and 16:00 ET becomes 21:00Z, so a fixed 20:00 would declare a 20:15Z source
  // "post-close" for a close that had not happened yet — a SIXTY-MINUTE hole in exactly
  // the place the TSE bug above put a thirty-minute one. Same defect, same table, found
  // by asking of every remaining row: what makes this number true, and when does it stop?
  { match: /^(SPX|SP500|NASDAQ|NDX|DOW|DJIA)/, et: '16:00', tz: 'US cash 16:00 ET' },
  { match: /^(UST|TREASURY|CMT)/,       et: '15:30', tz: 'CMT ~15:30 ET' },
  // The onshore KRW session closes with the KRX cash session; the settle is the
  // dated daily row, and the finality test is a LATER DATED ROW sitting on top of
  // it, not a later timestamp on a live endpoint. Without this row C6 could not
  // tell an intraday won tick from the settle — which is the exact discrimination
  // gate 5 turns on.
  { match: /^(USDKRW|KRW)/,             utc: '06:30', tz: 'Seoul onshore FX 15:30 KST' },
];
const C6_HARD_FAIL_FROM = '2026-08-21';   // adoption grace: warn first, then hard-fail

// ── C8: is the DESK's own frame.md keeping up with the windows it is quoted against? ─────
// Every other check in this file watches the REPORTERS' output. Nothing watched mine, and on
// 2026-08-24 frame.md turned out to be TWELVE DAYS unwritten — its Korea section asserting the
// OPPOSITE of what both editions had published all week. The reporters flagged it in most windows;
// a flag delivered to the owner is not a mechanism, it is a request competing with everything else.
// The frame declares `updated:`, so a checker CAN see this one — so measure it rather than
// resolving to be more attentive.
// Measured against the newest PUBLISHED WINDOW, not wall-clock: a quiet weekend is not drift.
const C8_WARN_DAYS = 3;                   // ~12 windows of drift at 4/day
const C8_HARD_FAIL_FROM = '2026-09-01';   // adoption grace, same warn-then-fail pattern as C5/C6/C7

function frameUpdatedAt(frameFile) {
  if (!fs.existsSync(frameFile)) return null;
  const head = fs.readFileSync(frameFile, 'utf8').slice(0, 2000);
  const m = head.match(/^updated:\s*(\S+)\s*$/m);
  return m ? m[1] : null;
}

function checkFrameFreshness(domain, frameFile, windows, errors, warnings) {
  const dated = windows.filter((w) => w.status !== 'example' && w.window_start);
  if (!dated.length) return;
  const newest = dated.map((w) => String(w.window_start)).sort().slice(-1)[0];
  const stamp = frameUpdatedAt(frameFile);
  if (!stamp) {
    // Never let an unreadable stamp pass as fresh.
    warnings.push(`${domain}/frame.md: no \`updated:\` field — frame freshness NOT CHECKED. The desk's own file is the one nothing else watches; give it a stamp so this check can run.`);
    return;
  }
  const t = new Date(stamp);
  const n = new Date(newest);
  if (isNaN(t.getTime()) || isNaN(n.getTime())) {
    warnings.push(`${domain}/frame.md: \`updated: ${stamp}\` is not a parseable timestamp — frame freshness NOT CHECKED.`);
    return;
  }
  const days = (n - t) / 86400000;
  if (days <= C8_WARN_DAYS) return;
  const hard = newest.slice(0, 10) >= C8_HARD_FAIL_FROM;
  const msg = `${domain}/frame.md: C8 — the frame is ${days.toFixed(1)} days behind the newest published window (frame updated ${stamp}, newest window ${newest}). The frame is a SNAPSHOT and it is quoted with authority — including against the reporters, who score their claims by it, so desk drift silently becomes everyone's standard. A stale frame is worse than no frame. ${hard ? `[hard fail since ${C8_HARD_FAIL_FROM}]` : `[warn · hard fail from ${C8_HARD_FAIL_FROM}]`}`;
  (hard ? errors : warnings).push(msg);
}

// ── Close time for an index ON A GIVEN DATE. ─────────────────────────────────────────
// Asian exchanges here do not observe DST, so their rows stay fixed UTC. US rows are
// declared in Eastern LOCAL time and converted per-date, because the UTC offset of the
// US close is not a constant: EDT is UTC-4, EST is UTC-5.
// US DST runs from the 2nd Sunday in March to the 1st Sunday in November. The switch
// happens at 02:00 local, and no settle occurs at 02:00, so a date-level test is exact
// for our purposes.
function usEasternIsDst(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  if (m < 3 || m > 11) return false;
  if (m > 3 && m < 11) return true;
  const firstOfMonth = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();      // 0 = Sunday
  if (m === 3) {
    const secondSunday = 1 + ((7 - firstOfMonth) % 7) + 7;
    return d >= secondSunday;
  }
  const firstSunday = 1 + ((7 - firstOfMonth) % 7);
  return d < firstSunday;
}

function closeUtcFor(index, dateStr) {
  const key = index.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const rule = SETTLE_CLOSE_UTC.find((r) => r.match.test(key));
  if (!rule) return null;
  if (rule.utc) return { utc: rule.utc, tz: rule.tz };
  const [h, min] = rule.et.split(':').map(Number);
  const offset = usEasternIsDst(dateStr) ? 4 : 5;                        // EDT : EST
  const utcH = String(h + offset).padStart(2, '0');
  return { utc: `${utcH}:${String(min).padStart(2, '0')}`, tz: `${rule.tz} (${offset === 4 ? 'EDT' : 'EST'})` };
}

// Fixtures for closeUtcFor — the DST boundary is the whole point, so both sides of both
// 2026 transitions are pinned. Verified independently: US DST 2026 runs 03-08 -> 11-01.
const C6_CLOSETIME_FIXTURES = [
  ['SP500 mid-summer (EDT)',        'SP500',  '2026-08-20', '20:00'],
  ['SP500 day before fall-back',    'SP500',  '2026-10-31', '20:00'],
  ['SP500 ON the fall-back Sunday', 'SP500',  '2026-11-01', '21:00'],
  ['SP500 after fall-back (EST)',   'SP500',  '2026-11-02', '21:00'],
  ['SP500 day before spring-fwd',   'SP500',  '2026-03-07', '21:00'],
  ['SP500 ON spring-forward',       'SP500',  '2026-03-08', '20:00'],
  ['NASDAQ deep winter (EST)',      'NASDAQ', '2026-01-15', '21:00'],
  ['UST CMT summer (EDT)',          'UST2Y',  '2026-08-20', '19:30'],
  ['UST CMT winter (EST)',          'UST2Y',  '2026-12-15', '20:30'],
  ['KOSPI does not observe DST',    'KOSPI',  '2026-12-15', '06:30'],
  ['NIKKEI does not observe DST',   'NIKKEI', '2026-12-15', '06:30'],
  ['unconfigured index -> no rule', 'FTSE100','2026-08-20', null],
];

function runC6CloseTimeSelfTest() {
  let failed = 0;
  for (const [name, index, date, expected] of C6_CLOSETIME_FIXTURES) {
    const got = closeUtcFor(index, date);
    const gotUtc = got ? got.utc : null;
    if (gotUtc !== expected) {
      failed += 1;
      console.error(`  FAIL ${name}: closeUtcFor(${index}, ${date}) = ${gotUtc}, expected ${expected}`);
    }
  }
  if (failed) {
    console.error(`${failed}/${C6_CLOSETIME_FIXTURES.length} C6 close-time fixture(s) failed.`);
    process.exit(1);
  }
  console.log(`OK — ${C6_CLOSETIME_FIXTURES.length} C6 close-time fixtures passed.`);
}


const SETTLE_SOURCES = [
  { match: /^(KOSPI|KOSDAQ)/, hosts: ['krx.co.kr','yna.co.kr','sedaily.com','mt.co.kr','edaily.co.kr','hankyung.com','mk.co.kr','fnnews.com','etoday.co.kr','asiae.co.kr'], tokens: ['마감','종가'] },
  { match: /^NIKKEI/,         hosts: ['jpx.co.jp','nikkei.com','reuters.com','bloomberg.com'], tokens: ['大引','終値'] },
  { match: /^TAIEX/,          hosts: ['twse.com.tw','cna.com.tw'] },
  { match: /^(HSI|HANGSENG)/, hosts: ['hkex.com.hk','scmp.com'] },
  { match: /^(SSE|CSI|SHANGHAI)/, hosts: ['sse.com.cn','csindex.com.cn'] },
  { match: /^(SPX|SP500|NASDAQ|NDX|DOW|DJIA)/, hosts: ['nyse.com','nasdaq.com','cmegroup.com','apnews.com','reuters.com','bloomberg.com','wsj.com','cnbc.com'] },
  { match: /^(UST|TREASURY|CMT)/, hosts: ['home.treasury.gov','fred.stlouisfed.org'] },
  { match: /^(BRENT|WTI|OIL)/, hosts: ['ice.com','theice.com','cmegroup.com','apnews.com','reuters.com'], roll: true },
  // FX — added 2026-09-02 WITH C11, not after it. C11 tells a reporter to declare
  // the won settle it flags; before this row the only declaration path warned
  // "no host allowlist" and SILENTLY SKIPPED C6 for that instrument. A gate whose
  // demanded remedy is half-checked teaches people the remedy is theatre. Naver is
  // the native primary already cited for the won's dated daily series in
  // finance-ko; the 종가 row on the exchange series is the settle.
  { match: /^(USDKRW|KRW|DXY|USDCNH|CNH|USDJPY)/, hosts: ['stock.naver.com','api.stock.naver.com','m.stock.naver.com','finance.naver.com','koreaexim.go.kr','bok.or.kr'], tokens: ['close','closing','종가','마감'] },
];

// C5 close-assertion detection — same reason as above: declared before the
// entry point so the validator can reach them. See checkUndeclaredCloseAssertions.
const C5_CLOSE_CONTEXT = /clos(?:e|ed|ing)|settled?|finish(?:ed)?|ended|jong-?ga/i;
const C5_INDEX = 'KOSPI';
// Only the edition that OWNS the index is gated. finance-ko sources the KOSPI
// jong-ga and sets the continuity base, so it must declare. finance (global)
// only cross-references the KOSPI in a watch line — it never declares a KOSPI
// block, so scanning it would warn "none declared yet" on every KOSPI-mentioning
// window forever, and that noise buries the warn-window monitoring it exists to
// support. (Vera, scope decision 2026-07-29.)
const C5_OWNER_DOMAIN = 'finance-ko';
const C5_CONTEXT_CHARS = 200;
// Forward-looking: the policy asks reporters to declare from here on. Windows
// published before it were written under no such rule and will not be
// retro-declared, so scanning them produces noise, not findings.
const C5_EFFECTIVE_FROM = '2026-07-29';
// C5 warn→error promotion date. Pre-registered 2026-07-29, adopted 2026-07-31 (first clean TN).
// Date-gated rather than a code flip so the promotion is auditable and reversible by one constant.
const C5_HARD_FAIL_FROM = '2026-08-03';
// A real index session does not move this far. Anything outside the band next
// to a KOSPI mention is a different instrument (an ADR price, an ETF, a point
// count), not the index level.
const C5_LEVEL_BAND = 0.25;
// The close-label narrows to close CONTEXT, but a sentence can be about a
// non-close level and still contain the word "close" ("the breaker tripped at
// 6,213.51 before the close"). These words, immediately before the figure, say
// what the figure IS — and it is not a settle.
const C5_NOT_A_CLOSE = /breaker|sidecar|intraday|session (?:low|high)|day range|opened?|open tick|gap(?:ped)?|futures?|premarket|pre-market|target|proxy|ADR/i;
const C5_LOOKBEHIND_CHARS = 50;

// ── C7: undeclared US index close assertions ────────────────────────────────
// WHY THIS EXISTS (Vera, 2026-08-17). Window 08-17-00 printed Friday's US closes
// (S&P 7,785.76 / Nasdaq 26,729.16 / Dow 53,732.41) and cited them to a page
// headlined "Stock Market Midday", datePublished AND dateModified both 16:35Z,
// whose body read "as of 11:39 AM ET ... 7,782.65". An INTRADAY article cited for
// a SETTLE — the exact defect C6 was built for.
//
// C6 did not fire. Not because it was wrong: SETTLE_CLOSE_UTC already matches
// SPX|SP500|NASDAQ|NDX|DOW|DJIA at 20:00Z, and SETTLE_SOURCES already allowlists
// the US-index hosts. Had those closes been DECLARED, finance.yahoo.com would
// have failed the host allowlist and 16:35Z would have failed the predates-close
// rule. TWO armed checks, both pointed the right way, and prose walked past both
// — because every one of them inspects the settles: block, and the closes were
// never put in it. The reporter's own note said "Only CMT in the settles block."
//
// THE RULE: A CHECK YOU CAN OPT OUT OF BY NOT DECLARING IS OPTIONAL. Not
// declaring is not a neutral act — it is the way past the gate. This is the
// sibling of "a check that cannot fail is decoration": that one passes BY
// CONSTRUCTION, this one is NEVER INVOKED. Both come back green.
//
// So the companion to a declare-rule is a detector for the UNDECLARED ASSERTION,
// which makes OMISSION ITSELF the error. C5 already does exactly this for the
// KOSPI in finance-ko; C7 is that same shape for the US indices in finance.
// Deliberately reuses C5_CLOSE_CONTEXT / C5_NOT_A_CLOSE / stripUrls so the two
// detectors cannot drift apart in what they consider "a close".
const C7_OWNER_DOMAIN = 'finance';
// finance has never declared a US settles block, so unlike C5 there is no prior
// close to derive a band from on the first pass. A STATIC plausibility range does
// that job instead: wide enough to never argue with a real session, narrow enough
// to reject a different instrument sitting next to the index name (a share price,
// a point count, a year). Once a window declares, the prior close also exempts
// continuity references, exactly as in C5.
const C7_US_INDICES = [
  // Bare "S&P" must match: the editions write "S&P 7,785.76", not "S&P 500
  // 7,785.76". Requiring the 500 made the detector catch nothing on real content.
  // "SP500" (no ampersand) is a THIRD surface form the editions actually use — it
  // is how the settles KEY is spelled, and prose copies the key. It defeated this
  // regex silently: measured 2026-09-01, the form appears in 14 published files.
  // It cost nothing so far only because every finance window using it also DECLARES
  // SP500 (so C7 correctly skips); the first one that asserts it in prose undeclared
  // would have got silence. Enumerate the surface forms, do not patch one at a time.
  { key: 'SP500',  mention: /S&P(?:\s*500)?|\bSPX\b|\bSP500\b/i,     min: 1000,  max: 20000 },
  { key: 'NASDAQ', mention: /\bNasdaq(?:\s+Composite)?\b/i,           min: 5000,  max: 60000 },
  { key: 'DOW',    mention: /\bDow(?:\s+Jones)?(?:\s+Industrials?)?\b/i, min: 10000, max: 100000 },
];
// Forward-looking, same rationale as C5_EFFECTIVE_FROM: windows written before
// the rule existed will not be retro-declared, and scanning them yields noise.
// Set to the day the defect was found so the detector is exercised against the
// REAL case, not only fixtures — a detector that has only ever seen synthetic
// input is written-but-unproven.
const C7_EFFECTIVE_FROM = '2026-08-17';
// Aligned with C6_HARD_FAIL_FROM so reporters have ONE adoption date to hold,
// not two. Date-gated so the promotion is auditable and reversible by a constant.
const C7_HARD_FAIL_FROM = '2026-08-21';
// How far BACK of the index mention still counts as close context. Sized to span
// a lead clause ("US stocks closed mild-RED Friday, off Thursday record — S&P
// 7,785.76") without reaching into an unrelated neighbouring sentence.
const C7_CONTEXT_LOOKBACK = 160;

// ---- C9: cross-domain close AGREEMENT -------------------------------------
// Found 2026-08-26. finance asserted "KOSPI settled 6,808.21" in prose while
// finance-ko DECLARED KOSPI in its settles block for the same window. C5 and C7
// are both scoped to a single owner domain, so neither looks at the other
// edition: nothing mechanical checked that the two agreed. My own read was the
// only gate, and a desk read is exactly what fails on the cross-edition class —
// each edition is internally correct and the contradiction is CREATED by
// publishing them together.
//
// The checker CAN see both sides, so this is measurable rather than a prose rule.
// C9 asks one question: when one edition ASSERTS a close for an index the other
// edition DECLARES in the same window, do the two numbers match?
//
// Deliberately NOT a "you must declare it" rule. Quoting the sibling's settle is
// correct practice and C7 already governs declaring. C9 only fires on DISAGREEMENT.
const C9_CROSS_INDICES = [
  { key: 'KOSPI',  mention: /\bKOSPI\b/i,                              min: 1000,  max: 20000 },
  { key: 'KOSDAQ', mention: /\bKOSDAQ\b/i,                             min: 100,   max: 5000  },
  { key: 'NIKKEI', mention: /\bNikkei(?:\s*225)?\b/i,                   min: 10000, max: 100000 },
  { key: 'SP500',  mention: /S&P(?:\s*500)?|\bSPX\b/i,                  min: 1000,  max: 20000 },
  { key: 'NASDAQ', mention: /\bNasdaq(?:\s+Composite)?\b/i,             min: 5000,  max: 60000 },
  { key: 'DOW',    mention: /\bDow(?:\s+Jones)?(?:\s+Industrials?)?\b/i, min: 10000, max: 100000 },
];
// Same rationale as C5/C7: do not retro-scan windows written before the rule.
const C9_EFFECTIVE_FROM = '2026-08-26';
// A declared close and a prose quote of it should be the SAME number. The only
// slack is decimal rendering, so this is the rounding tolerance used elsewhere,
// not an analytic band.
const C9_TOLERANCE = 0.011;

// ---- C10: a frame's BASE LEVELS must match the newest declared settle --------
// Found 2026-08-26. finance-ko's frame carried "Base levels for the next window"
// from Friday 08-21 while the stamp said 08-24 and three sessions had settled
// since: KOSPI 6,912.95 against an actual 6,808.21, Samsung off by ~7%. My own
// finance frame had the same defect the night before.
//
// This is the gap in C8, and C8 is mine. C8 measures the frame's STAMP — a proxy
// for currency. The proxy is gameable BY ACCIDENT: edit the prose, re-stamp, and
// a frame whose numbers are a week old passes forever. Worse, here the stamp was
// itself newer than the numbers, so the proxy actively overstated freshness.
//
// The thing that matters is measurable directly. A "base levels for the next
// window" line makes a checkable claim: these are the levels the next window
// should start from. The newest DECLARED settle for that index is what they
// should equal, and the checker can see both sides.
//
// Scoped hard to the base-levels block. An index level quoted in frame PROSE is
// usually historical narration ("the week ran 6,471 -> 6,852") and must not fire.
const C10_BASE_BLOCK = /\*\*Base levels[^*]*\*\*([\s\S]*?)(?=\n\s*\n|\n## |\n---|$)/i;
const C10_INDICES = [
  { key: 'KOSPI',  label: /KOSPI/i },
  { key: 'KOSDAQ', label: /KOSDAQ/i },
  { key: 'NIKKEI', label: /Nikkei/i },
  { key: 'SP500',  label: /S&P(?:\s*500)?/i },
  { key: 'NASDAQ', label: /Nasdaq/i },
  { key: 'DOW',    label: /Dow/i },
  // Yields print to 1bp and the frame's whole front-end argument is built on 1bp
  // differences, so these carry their own tolerance — the default 0.011 would
  // swallow exactly the difference the check exists to see.
  { key: 'UST2Y',  label: /\b2Y\b/i,  tol: 0.001 },
  { key: 'UST5Y',  label: /\b5Y\b/i,  tol: 0.001 },
  { key: 'UST10Y', label: /\b10Y\b/i, tol: 0.001 },
  { key: 'UST30Y', label: /\b30Y\b/i, tol: 0.001 },
];
const C10_EFFECTIVE_FROM = '2026-08-26';
const C10_TOLERANCE = 0.011;

// C10 fixtures. Both directions, and the NOT-CHECKED case, because a frame with
// no base-levels block must report that rather than pass silently.
const C10_FIXTURES = [
  ['matching base level is not a finding',
   '**Base levels for the next window.** KOSPI **6,808.21** · KOSDAQ **826.87**.', { KOSPI: 6808.21, KOSDAQ: 826.87 }, 0],
  ['stale base level IS a finding',
   '**Base levels for the next window.** KOSPI **6,912.95** · KOSDAQ **801.94**.', { KOSPI: 6808.21, KOSDAQ: 826.87 }, 2],
  ['prose narration outside the block must NOT fire',
   'The week ran 6,471.17 then 6,852.58 for the KOSPI.\n\n**Base levels for the next window.** KOSPI **6,808.21**.', { KOSPI: 6808.21 }, 0],
  ['an index with no declared settle is skipped, not guessed',
   '**Base levels for the next window.** KOSPI **6,808.21** · Nikkei **66,262.16**.', { KOSPI: 6808.21 }, 0],
  ['no base-levels block at all parses to null (reported NOT CHECKED, never a pass)',
   'A frame with no such block.', { KOSPI: 6808.21 }, null],
  // --- regression: the real frame shape, which C10 could not read until 2026-08-27 ---
  ['REAL SHAPE: continuation lines starting with ** must not end the block',
   '**Base levels for the next window — each as of its OWN market\'s last settle, not one date.**\n' +
   '**US (Wed 08-26 close, 20:00Z):** UST **2Y 4.19 / 5Y 4.37 / 10Y 4.66 / 30Y 5.18** ·\n' +
   'S&P **7,675.70** / Nasdaq **26,130.20** / Dow **53,463.88** · VIX **15.21**.\n' +
   '**Asia (Wed 08-26 jong-ga, 06:30Z):** KOSPI **6,808.21** · KOSDAQ **826.87** · Nikkei **66,262.16**.\n\n' +
   'Next paragraph.',
   { UST2Y: 4.19, SP500: 7675.70, KOSPI: 6808.21, NIKKEI: 66262.16 }, 0],
  ['REAL SHAPE: a stale UST tenor IS a finding at 1bp',
   '**Base levels for the next window.**\n**US:** UST **2Y 4.17 / 10Y 4.64**.\n\nend',
   { UST2Y: 4.19, UST10Y: 4.66 }, 2],
  ['a 1bp yield gap must NOT be swallowed by the index-points tolerance',
   '**Base levels for the next window.**\n**US:** UST **2Y 4.18**.\n\nend',
   { UST2Y: 4.19 }, 1],
  ['block present but body EMPTY reports zero coverage, never a pass',
   '**Base levels for the next window.**\n\nSomething else entirely.',
   { KOSPI: 6808.21 }, 'EMPTY'],
  ['block present with prose but no recognised pair reports zero coverage',
   '**Base levels for the next window.**\nCarried forward unchanged from yesterday.\n\nend',
   { KOSPI: 6808.21 }, 'EMPTY'],
];


// Pull "NAME **6,808.21**" / "NAME 6,808.21" pairs out of the base-levels block.
// Returns [{key, value}]. A name with no number after it is skipped rather than
// guessed at.
function parseFrameBaseLevels(frameText) {
  const m = frameText.match(C10_BASE_BLOCK);
  if (!m) return null;                       // no block at all -> NOT CHECKED, not a pass
  const block = m[1];
  const out = [];
  for (const spec of C10_INDICES) {
    const re = new RegExp(spec.label.source + '[^0-9\\n]{0,24}?(\\d{1,3}(?:,\\d{3})*(?:\\.\\d{1,2})?)', 'i');
    const hit = block.match(re);
    if (!hit) continue;
    out.push({ key: spec.key, value: Number(hit[1].replace(/,/g, '')), tol: spec.tol ?? C10_TOLERANCE });
  }
  return out;
}


// C9 fixtures. Both directions, because a detector that has only been shown the
// catch case ships its false positives to production.
const C9_FIXTURES = [
  ['agreeing quote is NOT a finding',
   "Korea's KOSPI settled **6,808.21 / +0.97% (jong-ga)** — a calm advance.", 'KOSPI', 6808.21, 6742.74, false],
  ['DISAGREEING quote IS a finding',
   "Korea's KOSPI settled **6,807.21 / +0.97% (jong-ga)** — a calm advance.", 'KOSPI', 6808.21, 6742.74, true],
  ['quoting the sibling PREV close is continuity, not a finding',
   "KOSPI chains to its prior close of 6,742.74 before today's move.", 'KOSPI', 6808.21, 6742.74, false],
  ['a non-close mention is not an assertion',
   "KOSPI futures pointed to 6,700.00 before the open.", 'KOSPI', 6808.21, 6742.74, false],
  ['out-of-band number near the name is ignored',
   "KOSPI closed higher; the KOSDAQ 100 sub-index is a different instrument.", 'KOSPI', 6808.21, 6742.74, false],
];

// Fixtures are the cases this detector must get right, in BOTH directions. The
// first is the REAL 2026-08-17 defect verbatim; the rest are the false positives
// a number-near-a-name rule invites. Testing only the catch direction would ship
// a detector that fires on every point-move and gets muted within a week.
// Declared HERE, above the entry point, because these are `const`: defining them
// below the CLI switch parses cleanly and then dies at runtime in the temporal
// dead zone — node --check passed and the self-test threw. Parsing is not
// exercising.
const C7_FIXTURES = [
  ['real 08-17 defect — asserted close, no settles block',
    'US stocks closed mild-RED Friday, off Thursday record — S&P 7,785.76 / −0.17%, Nasdaq 26,729.16 / −0.28%.',
    'SP500', null, true],
  ['same body, NASDAQ leg', 'US stocks closed mild-RED Friday — Nasdaq 26,729.16 / −0.28%.', 'NASDAQ', null, true],
  // A POINT move is the false positive this rule invites most: "closed up 107.58
  // points" puts a decimal number in close context right beside the index name.
  // The static band is what rejects it, and it must keep rejecting it.
  ['point move, not a level', 'The Dow closed up 107.58 points on the session.', 'DOW', null, false],
  ['futures are not the cash close', 'S&P 500 futures closed at 7,790.00 overnight.', 'SP500', null, false],
  ['intraday tick in close context', 'Before the close the S&P 500 printed an intraday 7,782.65.', 'SP500', null, false],
  ['continuity reference to our own last close', 'Off Thursday close of 7,798.99, the S&P 500 slipped.', 'SP500', 7798.99, false],
  ['a share price is not the index', 'A Nasdaq-listed name closed at $26,729.16 on the day.', 'NASDAQ', null, false],
  ['numbers inside a URL are not prose', 'The S&P 500 closed lower ([wrap](https://x.com/sp-500-7785.76-close)).', 'SP500', null, false],
  ['no close context at all', 'The S&P 500 is trading around 7,785.76 right now.', 'SP500', null, false],
  ['DOW leg of the real body', 'US stocks closed mild-RED Friday — Dow 53,732.41 / −0.20%.', 'DOW', null, true],
  // The lookback lets close context precede the mention; these guard what that
  // widening newly risks.
  ['cross-index binding — Nasdaq must not take the S&P level',
    'US stocks closed lower — S&P 7,785.76 / −0.17%, Nasdaq 26,729.16 / −0.28%.', 'NASDAQ', 26729.16, false],
  ['continuity exemption with the number AFTER the mention',
    'US stocks closed flat — the S&P 500 finished at 7,798.99 again.', 'SP500', 7798.99, false],
  // "S&P Dow Jones Indices" is a COMPANY, not the index — the cost of allowing a
  // bare "S&P". Close context can legitimately sit nearby; nothing in band should
  // bind to it.
  ['company name, not the index',
    'Reddit closed higher after S&P Dow Jones Indices said it would join the index.', 'SP500', null, false],
  // FORWARD cross-index binding. The fixture above guards the BACKWARD direction
  // only, and passes for a reason that does not generalise: numSlice never looks
  // back, so the S&P level is simply out of view. Forward is the direction that
  // was actually broken. Same construction as the backward case — lastClose strips
  // the CORRECT hit via the continuity exemption, so any surviving hit can only be
  // the neighbour's. That is exactly C9's live shape: it filters out the matching
  // value, leaving the mis-attributed one as the sole survivor.
  ['cross-index binding FORWARD — Nasdaq must not take the Dow level',
    'US stocks closed lower — Nasdaq 26,370.89 / -0.12%, Dow 53,185.90 / -0.70%.', 'NASDAQ', 26370.89, false],
  // (An SP500-takes-the-Nasdaq-level fixture was drafted here and DELETED: it
  // passes against the broken code too, because 26,370.89 is above SP500's 20,000
  // band ceiling, so the band rejects it and the cut is never what saves us. It
  // would have been a guard that cannot fail, padding the fixture count with
  // coverage we do not have. The two directions are not symmetric because the
  // BANDS are not: NASDAQ's 5,000-60,000 swallows Dow levels, SP500's does not.)
  // The third surface form must actually reach the detector.
  ['SP500 surface form (no ampersand) is an assertion',
    'US stocks closed lower Monday — SP500 7,686.14 / -0.33%.', 'SP500', null, true],
];

// parseSettles fixtures. A SILENT parser failure hid four ghost UST blocks for a
// week (2026-08-11 → 08-17); nothing but a fixture makes a parser loud forever.
// Declared above the entry point deliberately — these are `const`, and defining
// them below the CLI switch dies in the temporal dead zone at runtime while
// node --check still passes.
const SETTLES_FIXTURES = [
  ['block form parses', '---\nsettles:\n  SP500:\n    close: 7745.06\n    prev_close: 7785.76\n---\n', 'SP500', 7745.06, 0],
  // The exact shape of the four ghosts.
  ['inline-flow form parses', '---\nsettles:\n  UST2Y: {close: 4.17, prev_close: 4.15, close_label: close}\n---\n', 'UST2Y', 4.17, 0],
  ['malformed line is reported, not swallowed', '---\nsettles:\n  UST2Y: [close 4.19]\n---\n', null, null, 1],
  // A comma inside a quoted URL must not shear the value in half.
  ['quoted comma survives', '---\nsettles:\n  KOSPI: {close: 6977.94, source: "https://x.co/a,b?c=1"}\n---\n', 'KOSPI', 6977.94, 0],
];

function runSettlesSelfTest() {
  let failed = 0;
  for (const [name, raw, key, close, nUnparsed] of SETTLES_FIXTURES) {
    const out = parseSettles(raw) || {};
    const bad = (out.__unparsed || []).length;
    const gotClose = key ? (out[key] || {}).close : null;
    if (bad !== nUnparsed || (key && gotClose !== close)) {
      failed += 1;
      console.error(`  FAIL ${name}: unparsed=${bad} (want ${nUnparsed}), ${key || 'n/a'}.close=${gotClose} (want ${close})`);
    }
  }
  if (failed) { console.error(`${failed}/${SETTLES_FIXTURES.length} settles fixture(s) failed.`); process.exit(1); }
  console.log(`OK — ${SETTLES_FIXTURES.length} settles-parser fixtures passed.`);
}

const C5_FIXTURES = [
  // [name, body, lastClose, expectHit]
  ['close assertion — plain', 'KOSPI closed at 6,023.66 / −10.84% (native jong-ga).', 6607.53, true],
  ['close assertion — settled', 'The KOSPI settled 6,023.66, a −10.84% fall.', 6607.53, true],
  ['close assertion — ended', 'KOSPI ended the session at 6,023.66.', 6607.53, true],
  ['continuity reference — equal close', 'Off Monday\'s 6,607.53 KOSPI close, futures imply a gap.', 6607.53, false],
  ['no close context — open/intraday', 'KOSPI opened 6,806.27 and traded down to 6,364.10 intraday.', 6607.53, false],
  ['circuit-breaker level, not a close', 'The KOSPI breaker tripped at 6,213.51 before the close.', 6607.53, false],
  ['URL slug carrying a number', 'See [report](https://x.com/kospi-swings-but-holds-6800-close-up-3) for detail.', 6607.53, false],
  ['other instrument priced in USD', 'KOSPI proxy: the SK Hynix ADR closed at $169.18 overnight.', 6607.53, false],
  ['other instrument, out of band', 'KOSPI read-through: Samsung closed 220,000 won, −13.39%.', 6607.53, false],
  // FN found by Vera reviewing #246: a continuity reference standing before the
  // real assertion in the same slice used to swallow it.
  ['assertion behind a continuity reference', 'Off Monday\'s 6,607.53, KOSPI closed 6,023.66 / −8.83%.', 6607.53, true],
  ['two references, no assertion', 'Both legs price off the 6,607.53 KOSPI close; 6,607.53 remains the base.', 6607.53, false],
];


// ── C11: unowned instrument assertions — FX · UST yields · commodities ──────
// BUILT 2026-09-02, replacing the placeholder that had reported its own absence
// since 09-01. WHAT IT CHECKS CHANGED DURING THE BUILD, and the change is the
// finding. The placeholder described a CROSS-DOMAIN hole (a KOSPI close inside
// finance) because that is the instance I happened to find. Enumerating the
// ownership table off THIS FILE instead — every instrument TYPE an edition can
// assert, against the container that owns it — says the cross-domain half is
// the small half:
//
//   US indices SP500/NASDAQ/DOW   prose: C7 (finance only)     cross: C9
//   KOSPI                         prose: C5 (finance-ko only)  cross: C9
//   KOSDAQ / NIKKEI               prose: none                  cross: C9
//   UST 2Y/5Y/10Y/30Y             prose: NONE                  cross: NONE
//   FX  USD/KRW · DXY · CNH       prose: NONE                  cross: NONE
//   Commodities Brent/WTI/gold    prose: NONE                  cross: NONE
//
// USTs are asserted in nearly every finance window, about finance's OWN
// load-bearing instrument, and no container has ever looked at them. That is
// not cross-domain at all. So C11 is scoped by INSTRUMENT TYPE, not by domain,
// and priority inverts to FX and USTs first. A patch aimed at the trigger would
// have built the cross-domain half and left the yields hole standing — which is
// the design doc's own constraint 3 landing on the document that states it.
// Design + all four constraints: agentnews-ops/DESIGN-cross-domain-assertion-container.md
//
// THE RULE: a window that asserts a SETTLED level for one of these instruments
// must RESOLVE it — against its own declared settles block, or against the
// sibling edition's block for the SAME window_start, matching instrument AND
// VALUE. Attribution as free text ("per finance-ko") is not resolution: the
// cheapest way to pass a gate must not be writing a phrase (constraint 1).
//
// THREE OUTCOMES, NOT TWO (constraint 2). Nothing declares the instrument at
// this window_start AND the sibling edition has no window there yet => the
// attribution CANNOT resolve, which is COULD-NOT-MEASURE — counted on its own
// row, never folded into the pass. An unmeasured window and a verified one must
// not print the same green.
const C11_EFFECTIVE_FROM = '2026-09-02';
// INHERITED from the placeholder, deliberately. The self-imposed deadline was
// for a container that GATES, not one that merely exists — shipping the code
// and resetting the clock would be the check passing itself. Same warn-then-
// fail adoption as C5 (5 days) and C7 (4 days): 6 days of live traffic first.
const C11_HARD_FAIL_FROM = '2026-09-08';
const C11_TOL = { yield: 0.0051, fx: 0.011, usd: 0.011 };
// Values are quoted differently per instrument type and the differences are
// load-bearing, not cosmetic: a $ prefix means the LEVEL for crude and a
// different security for an index; a % suffix means the UNIT for a yield and a
// CHANGE for everything else. One generic number rule cannot hold both.
const C11_INSTRUMENTS = [
  { key: 'USDKRW', label: 'USD/KRW', unit: 'fx',    mention: /USD\s*\/\s*KRW|\bUSDKRW\b|\bwon\b/i,      min: 900,  max: 2000 },
  { key: 'DXY',    label: 'DXY',     unit: 'fx',    mention: /\bDXY\b|\bdollar index\b/i,               min: 70,   max: 130 },
  { key: 'USDCNH', label: 'USD/CNH', unit: 'fx',    mention: /\bCNH\b|USD\s*\/\s*CNH/i,                 min: 5.5,  max: 8.5 },
  { key: 'UST2Y',  label: 'UST 2Y',  unit: 'yield', mention: /\b2Y\b|\b2-year\b|\btwo-year\b/i,         min: 2.0,  max: 8.0 },
  { key: 'UST5Y',  label: 'UST 5Y',  unit: 'yield', mention: /\b5Y\b|\b5-year\b|\bfive-year\b/i,        min: 2.0,  max: 8.0 },
  { key: 'UST10Y', label: 'UST 10Y', unit: 'yield', mention: /\b10Y\b|\b10-year\b|\bten-year\b/i,       min: 2.0,  max: 8.0 },
  { key: 'UST30Y', label: 'UST 30Y', unit: 'yield', mention: /\b30Y\b|\b30-year\b|\bthirty-year\b/i,    min: 2.0,  max: 8.0 },
  { key: 'BRENT',  label: 'Brent',   unit: 'usd',   mention: /\bBrent\b/i,                              min: 20,   max: 250 },
  { key: 'WTI',    label: 'WTI',     unit: 'usd',   mention: /\bWTI\b/i,                                min: 20,   max: 250 },
  { key: 'GOLD',   label: 'gold',    unit: 'usd',   mention: /\bgold\b/i,                               min: 800,  max: 6000 },
];
// Every instrument name that can END another instrument's number scan. C7's
// ATTRIBUTION CUT, generalised: a plausibility band that admits a NEIGHBOUR's
// value is not an attribution, and the C11 bands overlap far more than C7's did
// (every yield shares one 0.5–9.99 band, so 2Y's scan running into "5Y 4.55"
// would bind the 5Y level to the 2Y and the band could never catch it).
const C11_CUT_MENTIONS = [
  ...C11_INSTRUMENTS.map((s) => s.mention),
  /\bS&P\b|\bSP500\b|\bS&P 500\b/i, /\bNasdaq\b|\bNDX\b/i, /\bDow\b|\bDJIA\b/i,
  /\bKOSPI\b/i, /\bKOSDAQ\b/i, /\bNIKKEI\b/i, /\bVIX\b/i,
  // TENORS WE DO NOT TRACK still end an attribution. Measured over 382 published
  // windows: the dominant false positive was "2Y 4.25 (−3bp), 3Y 4.32 (−2)" — the
  // 3Y is not a C11 instrument, so nothing stopped the 2Y scan and 4.32 was
  // reported as prose contradicting the declared 2Y. Every tenor in the band is a
  // cut, tracked or not; a cut list built only from the instruments we OWN is
  // blind to exactly the neighbour most likely to be quoted beside them.
  /\b1Y\b/i, /\b3Y\b/i, /\b7Y\b/i, /\b20Y\b/i, /\b3M\b/i, /\b6M\b/i, /\b1M\b/i,
];
// What the figure IS, when it is not a settle. Extends C5_NOT_A_CLOSE with the
// LIVE/APPROXIMATE vocabulary this desk actually writes — read off published
// windows, not invented: "10Y ~4.78%", "WTI to ~$90", "Wednesday 09-02 LIVE
// 1,372.70", "opened −3.09%". Every one of those is correctly NOT a settle, and
// a container that flagged them would be untrue to the desk's own discipline.
const C11_NOT_A_SETTLE = /breaker|sidecar|intraday|session (?:low|high)|day range|open(?:ed|ing|s)?\b|open tick|gap(?:ped)?|futures?|pre-?market|pre-?open|target|proxy|ADR|\blive\b|\btick\b|estimate|forecast|consensus|approx|roughly|\babout\b|\baround\b|\bnear\b|\bold\b|\bformer\b|\bprior\b|\bprevious\b|\bback (?:in|at)\b|\bcentre\b|\bcenter\b|\bversus\b|\bvs\.?\b|\bfrom\b|\d+-?(?:yr|year)s?\s+(?:high|low)/i;
// TIGHT, and cut at the clause. C5 looks back 50 chars flat; at that width the
// real sentence "the settle printed and confirmed the intraday lean. Full CMT
// curve 2Y 4.39" disqualifies a genuine settle on the word "intraday" from the
// PREVIOUS clause. A disqualifier has to be about THIS figure.
const C11_RANGE = /\d+\.\d{1,3}\s+(?:to|-|\u2013|\u2212)\s*$/;
const C11_CURVE_TUPLE = /\d+\.\d{1,3}\s*\/\s*\d+\.\d{1,3}\s*\/\s*\d+\.\d{1,3}/;
const C11_LOOKBEHIND_CHARS = 30;
const C11_CONTEXT_CHARS = 200;
const C11_CONTEXT_LOOKBACK = 160;

function c11ClauseBefore(text, idx) {
  const raw = text.slice(Math.max(0, idx - C11_LOOKBEHIND_CHARS), idx);
  const cut = raw.search(/[.;\n—·]|\*\*(?![^*]*$)/);
  const lastStop = Math.max(raw.lastIndexOf('. '), raw.lastIndexOf('\n'), raw.lastIndexOf('; '), raw.lastIndexOf('— '), raw.lastIndexOf(' · '));
  return lastStop === -1 ? raw : raw.slice(lastStop + 1);
}

// Same two-signal design as C5/C7 — the close LABEL narrows to settle context,
// the BAND and the unit grammar decide which figure belongs to this instrument.
function findAssertedLevels(body, spec) {
  const found = [];
  const text = stripUrls(body);
  const mention = new RegExp(spec.mention.source, 'gi');
  let m;
  while ((m = mention.exec(text)) !== null) {
    const ctxSlice = text.slice(Math.max(0, m.index - C11_CONTEXT_LOOKBACK), m.index + C11_CONTEXT_CHARS);
    if (!C5_CLOSE_CONTEXT.test(ctxSlice)) continue;
    let slice = text.slice(m.index, m.index + C11_CONTEXT_CHARS);
    // SENTENCE CUT, on top of C7's attribution cut. C5/C7 scan a flat 200 chars
    // forward, which in this desk's prose runs clean into the NEXT sentence about
    // a different subject: the 2Y mention in "…2Y +5bp). This is the settle-and-
    // score window… no big-three index cleared the strict ±1.5%" reached "1.5"
    // and reported the falsifier's THRESHOLD as a contradicting 2Y yield. The
    // neighbouring-instrument cut cannot see it — "big-three index" names no
    // instrument. A number in a later sentence is not bound to this mention.
    // Clause separators count, not just sentence ones: "30Y 5.25; Friday Aug 7:
    // 4.19 / 4.35 / 4.65 / 5.19" is a labelled level followed by a POSITIONAL
    // curve tuple for four different tenors, and proximity attributed all four to
    // the 30Y. A semicolon or colon ends the attribution the same way a full stop
    // does — the clause is the unit a figure belongs to.
    // NOT the em dash, and the reason is measured, not stylistic. Adding it for
    // symmetry with c11ClauseBefore removed 1 false positive and 13 correctly
    // RESOLVED detections — this desk writes "2Y 4.39 — up 5bp" mid-clause, so an
    // em dash is not a subject boundary here. A guard is not free: it buys quiet
    // on the firing side and pays for it on the side that reports nothing, which
    // is the invisible one. 13:1 against is a bad trade, so the FP it was aimed
    // at (a 2Y settle quoted next to a 10Y) is fixed at the root instead — see
    // the cross-tenor continuity exemption below.
    const stop = slice.slice(1).search(/(?:[.!?;:](?:\s|\*)|\n)/);
    if (stop !== -1) slice = slice.slice(0, stop + 2);
    for (const other of C11_CUT_MENTIONS) {
      if (other.source === spec.mention.source) continue;
      const om = new RegExp(other.source, 'gi');
      let o;
      while ((o = om.exec(slice)) !== null) {
        if (o.index > 0) { slice = slice.slice(0, o.index); break; }
      }
    }
    const re = /([$₩€£~≈±><+\u2212\u2013-]?)\s?(\d{1,3}(?:,\d{3})+(?:\.\d{1,3})?|\d+\.\d{1,3})\s?(%|bps?\b)?/g;
    let n;
    while ((n = re.exec(slice)) !== null) {
      const [, prefix, digits, pct] = n;
      if (prefix === '~' || prefix === '≈') continue;            // approximate: a live read, not a settle
      if (prefix === '±' || prefix === '>' || prefix === '<') continue;  // a BAR the tape must clear, not a level it printed
      // A SIGNED figure is a move, not a level: "30Y +4.9", "10Y +3.6" are bp
      // moves whose bare numbers sit squarely inside the yield band, so no band
      // can separate them — only the sign can. Same for an explicit bp unit.
      if (prefix === '+' || prefix === '-' || prefix === '\u2212' || prefix === '\u2013') continue;
      if (pct && /^bp/.test(pct)) continue;
      if (pct === '%' && spec.unit !== 'yield') continue;        // a % on FX or crude is a CHANGE, not a level
      if (prefix === '$' && spec.unit !== 'usd') continue;       // a $ figure next to a yield is a different instrument
      if (prefix === '₩' || prefix === '€' || prefix === '£') continue;
      if (C11_NOT_A_SETTLE.test(c11ClauseBefore(slice, n.index))) continue;
      // A POSITIONAL CURVE TUPLE — "(4.19/4.39/4.69/5.23)", "off Friday
      // 4.34/4.48/4.73/5.22" — is four tenors in fixed order with no labels at
      // all. Proximity binds every one of them to whichever tenor was named
      // before the tuple, and each value is inside the shared yield band, so
      // neither the band nor the neighbour cut can see it. Attribution here is
      // POSITIONAL, which this detector does not do, so it must decline rather
      // than guess: three or more slash-separated numbers is a tuple.
      if (C11_CURVE_TUPLE.test(slice.slice(Math.max(0, n.index - 24), n.index + 24))) continue;
      // A RANGE ("30Y 5.1 to 5.21", "10Y 4.61 to 4.69") states a span, and both
      // endpoints are in band. Neither endpoint is the settle.
      if (C11_RANGE.test(slice.slice(Math.max(0, n.index - 20), n.index + 1))) continue;
      const value = Number(digits.replace(/,/g, ''));
      if (value < spec.min || value > spec.max) continue;
      found.push({ key: spec.key, value, snippet: slice.split('\n')[0].trim().slice(0, 120) });
    }
  }
  return found;
}

// The classification, shared by the validator and the fixtures so they cannot
// drift. Returns one of six states — and the two that are NOT findings and NOT
// passes are the whole point of constraint 2.
function classifyC11Hit(value, { own, sib, prior, siblingWindowExists }, tol) {
  const near = (a, b) => a != null && b != null && Math.abs(a - b) <= tol;
  // ORDER IS THE LOGIC, and getting it wrong is not a tuning miss. Nesting the
  // continuity test INSIDE each declaration branch — the obvious shape — means a
  // window that declares the instrument can never reach the history exemption, so
  // the arc line "4.20 → 4.34 → 4.34 → 4.39" was reported as prose contradicting
  // its own block on 4.20: a value THIS REPOSITORY published as a settle twice.
  // Every RESOLUTION first, then every CONTINUITY, and only then a contradiction.
  if (own && near(value, own.close)) return 'declared';
  if (sib && near(value, sib.close)) return 'attributed';
  if (own && near(value, own.prev)) return 'continuity';
  if (sib && near(value, sib.prev)) return 'continuity';
  // ANY close we have already published, not just the most recent. The frame and
  // the windows name old levels constantly ("three settles away from the old 4.19
  // centre"), and with 1bp quantisation a yield reference repeats often. Exempting
  // only the LAST close reported every historical reference as a contradiction.
  // This DOES weaken the yield rows — a genuinely new assertion that happens to
  // equal an old close is exempted too — so the exemption is COUNTED on the
  // continuity row rather than being silently applied.
  if (prior && prior.some((c) => near(value, c))) return 'continuity';
  if (own && own.close != null) return 'contradicts-own';
  if (sib && sib.close != null) return 'contradicts-sibling';
  return siblingWindowExists ? 'unowned' : 'unmeasurable';
}

const C11_FIXTURES = [
  // ── PASS PATH — the half people skip (constraint 4). All from live traffic. ──
  ['09-02 finance: own settle, declared', 'The CMT 2Y settled **4.39, +5bp off Monday’s 4.34**.', 'UST2Y', true],
  ['09-02 finance-ko: quotes the sibling’s declared block', 'his DECLARED Tuesday 09-01 settle: SP500 7,631.47 / 2Y 4.39 (all lower)', 'UST2Y', true],
  ['09-02 finance-ko: the won settle nothing owns', 'the Tuesday won SETTLED 1,375.50 / +6.00 / +0.44%', 'USDKRW', true],
  ['09-02 finance: crude settles nothing owns', 'WTI settled **$90.78 (+5.85%)**', 'WTI', true],
  // ── NO-HIT PATH — every one of these is correct desk practice ──────────────
  ['18Z intraday tilde is not a settle', 'Yields intraday UP: 10Y ~4.78%, a ~20-month high', 'UST10Y', false],
  ['18Z approximate crude is not a settle', 'pushed **WTI to ~$90 (+~5%)** up hard from 12Z', 'WTI', false],
  ['a LIVE row is not a settle', 'Wednesday 09-02 LIVE 1,372.70 / −2.80 (won firming, OPEN, pulled 00:03Z)', 'USDKRW', false],
  ['a change figure is not a level', 'the won closed +6.00 on the session', 'USDKRW', false],
  ['no settle context at all', 'the won is idiosyncratic, not a risk-off proxy, and 1,375.50 is beside the point', 'USDKRW', false],
  // ── THRESHOLD / NEXT-SENTENCE REGRESSION — the FP this container shipped with ──
  ['a falsifier bar in the next sentence is not a 2Y yield', 'the 2Y answered +5bp. This is the settle-and-score window: no big-three index cleared the strict ±1.5% intraday bar', 'UST2Y', false],
  ['a bare threshold is not a level', 'the 2Y settles within ±0.03 of the anchor', 'UST2Y', false],
  ['a named OLD level is a reference, not an assertion', 'the 2Y settled 4.39, three settles away from the old 4.19 centre', 'UST2Y', true],
  // ── WORD-BOUNDARY REGRESSION — the \bDOW\b-inside-WIN-DOW class ────────────
  ['“won” the verb does not summon an FX level', 'Samsung won the contract; the KOSPI closed 6,835.80', 'USDKRW', false],
  ['“gold” must not match “golden”', 'a golden cross printed and the index closed 6,835.80', 'GOLD', false],
  // ── ATTRIBUTION CUT — the neighbour’s value must not bind to this key ──
  // Real 09-02 00Z sentence, kept VERBATIM: it also carries “intraday” in the
  // PREVIOUS clause, which a flat 50-char lookbehind reads as a disqualifier and
  // drops a genuine settle. That false negative is why c11ClauseBefore cuts.
  ['the 5Y level does not bind to the 2Y', 'Changed since 18Z — the settle printed and confirmed the intraday lean. Full CMT curve 2Y 4.39 / 5Y 4.55 / 10Y 4.79 / 30Y 5.27 (+5 / +6 / +4 / +2).', 'UST2Y', true],
];

function runC11SelfTest() {
  let failed = 0;
  for (const [name, body, key, expectHit] of C11_FIXTURES) {
    const spec = C11_INSTRUMENTS.find((s) => s.key === key);
    const hits = findAssertedLevels(body, spec);
    const got = hits.length > 0;
    if (got !== expectHit) {
      failed += 1;
      console.error(`  FAIL ${name}: expected ${expectHit ? 'a hit' : 'no hit'}, got ${JSON.stringify(hits)}`);
    }
  }
  // The attribution cut needs its VALUE checked, not just its hit count: binding
  // 5Y's 4.55 to the 2Y produces a hit either way, so a hit/no-hit fixture is
  // blind to exactly the defect the cut exists to prevent.
  const cut = findAssertedLevels('Changed since 18Z — the settle printed and confirmed the intraday lean. Full CMT curve 2Y 4.39 / 5Y 4.55 / 10Y 4.79 / 30Y 5.27 (+5 / +6 / +4 / +2).', C11_INSTRUMENTS.find((s) => s.key === 'UST2Y'));
  if (!cut.length || cut.some((h) => Math.abs(h.value - 4.39) > 0.0051)) {
    failed += 1;
    console.error(`  FAIL attribution cut binds a neighbour's level to UST2Y: ${JSON.stringify(cut)}`);
  }
  // Hit/no-hit is blind here too: 4.39 is a real assertion in the same sentence,
  // so the fixture passes whether or not 4.19 was also picked up. Check the VALUES.
  const hist = findAssertedLevels('the 2Y settled 4.39, three settles away from the old 4.19 centre', C11_INSTRUMENTS.find((s) => s.key === 'UST2Y'));
  if (hist.some((h) => Math.abs(h.value - 4.19) < 0.0051)) {
    failed += 1;
    console.error(`  FAIL a named OLD level was read as an assertion: ${JSON.stringify(hist)}`);
  }
  // Classification fixtures — six states, each exercised, because a three-outcome
  // check whose third outcome is never tested has two outcomes.
  const T = 0.0051;
  const cases = [
    ['declared',            4.39, { own: { close: 4.39, prev: 4.34 }, siblingWindowExists: true }],
    ['continuity',          4.34, { own: { close: 4.39, prev: 4.34 }, siblingWindowExists: true }],
    ['contradicts-own',     4.41, { own: { close: 4.39, prev: 4.34 }, siblingWindowExists: true }],
    // The ordering regression: a declaring window must still reach the history
    // exemption. Nested-branch ordering returns 'contradicts-own' here.
    ['continuity',          4.20, { own: { close: 4.39, prev: 4.34 }, prior: [4.19, 4.20, 4.34], siblingWindowExists: true }],
    ['attributed',          4.39, { sib: { close: 4.39, prev: 4.34 }, siblingWindowExists: true }],
    ['contradicts-sibling', 4.41, { sib: { close: 4.39, prev: 4.34 }, siblingWindowExists: true }],
    ['unowned',          1375.50, { siblingWindowExists: true }],
    ['unmeasurable',     1375.50, { siblingWindowExists: false }],
  ];
  for (const [expected, value, ctx] of cases) {
    const got = classifyC11Hit(value, ctx, expected === 'unowned' || expected === 'unmeasurable' ? 0.011 : T);
    if (got !== expected) { failed += 1; console.error(`  FAIL classify ${expected}: got ${got}`); }
  }
  if (failed) {
    console.error(`${failed} C11 fixture(s) failed.`);
    process.exit(1);
  }
  console.log(`OK — ${C11_FIXTURES.length + 10} C11 fixtures passed.`);
}

// SURVEY MODE. The validator only ever sees windows on or after C11_EFFECTIVE_FROM
// — two of them the day it shipped — and a detector measured on two windows has an
// evidence set two cases wide. This runs the SAME detector over any date range and
// prints every hit with its state, so the false-positive rate is measured against
// 380 published windows instead of asserted from the ones I happened to read.
// `node agentnews.mjs c11-scan 2026-01-01`
function c11Scan(since) {
  const domains = listDomains();
  const windowsByDomain = {};
  for (const domain of domains) windowsByDomain[domain] = listWindows(domain);
  const rows = [];
  const counts = {};
  const saved = C11_SCAN_SINCE.value;
  C11_SCAN_SINCE.value = since;
  C11_SCAN_SINCE.sink = rows;
  checkUnownedInstrumentAssertions(windowsByDomain, [], []);
  C11_SCAN_SINCE.value = saved;
  C11_SCAN_SINCE.sink = null;
  for (const r of rows) counts[r.state] = (counts[r.state] || 0) + 1;
  for (const r of rows) console.log(`${r.state.padEnd(20)} ${r.rel} ${r.key} ${r.value}  "${r.snippet.slice(0, 90)}"`);
  console.log(`\n${rows.length} candidate(s) since ${since} across ${domains.reduce((n, d) => n + windowsByDomain[d].length, 0)} window(s):`);
  for (const k of Object.keys(counts).sort()) console.log(`  ${k.padEnd(20)} ${counts[k]}`);
}
// Scan mode overrides the effective-from date and captures every classified hit.
// A plain object, not a parameter, so the validator's call site stays untouched —
// the surveyed detector and the gating detector must be the SAME code path or the
// survey measures something the gate does not run.
const C11_SCAN_SINCE = { value: null, sink: null };

function checkUnownedInstrumentAssertions(windowsByDomain, errors, warnings) {
  const domains = Object.keys(windowsByDomain);
  // window_start -> key -> {close, prev, domain}
  const declared = new Map();
  const windowStarts = new Map();   // window_start -> Set(domain)
  // Newest close per key BEFORE a given window, for the continuity exemption.
  const history = [];
  for (const domain of domains) {
    for (const win of windowsByDomain[domain]) {
      if (win.status === 'example' || !win.window_start) continue;
      if (!windowStarts.has(win.window_start)) windowStarts.set(win.window_start, new Set());
      windowStarts.get(win.window_start).add(domain);
      if (!win.settles) continue;
      if (!declared.has(win.window_start)) declared.set(win.window_start, new Map());
      for (const spec of C11_INSTRUMENTS) {
        const d = win.settles[spec.key];
        if (!d || d.close == null) continue;
        const rec = { close: Number(d.close), prev: d.prev_close == null ? null : Number(d.prev_close), domain };
        if (!declared.get(win.window_start).has(spec.key)) declared.get(win.window_start).set(spec.key, rec);
        history.push({ key: spec.key, at: String(win.window_start), close: Number(d.close) });
      }
    }
  }
  // CROSS-TENOR for yields. "10Y 4.649 (+1bp) — holding the dovish 4.17-settle
  // level" quotes the 2Y's published settle beside a 10Y mention, and a per-key
  // history calls it an unowned 10Y assertion. A yield level THIS REPOSITORY has
  // published for any tenor is a published number, not a new base. Weakens the
  // yield rows a little more, and like the same-key exemption it is COUNTED on
  // the continuity row rather than applied in silence.
  const yieldKeys = new Set(C11_INSTRUMENTS.filter((s) => s.unit === 'yield').map((s) => s.key));
  const priorCloses = (key, at) => history
    .filter((h) => h.at < at && (yieldKeys.has(key) ? yieldKeys.has(h.key) : h.key === key))
    .map((h) => h.close);

  // THE BANDS ARE AN ERA ASSUMPTION, AND ERAS END. Every band here was drawn
  // around 2026 levels — yields 2.0–8.0, USD/KRW 900–2000, crude 20–250. If the
  // tape leaves a band, this detector does not fail: it goes SILENT on that
  // instrument, and silence is the one outcome no reader can distinguish from
  // clean. So the corpus audits the constant, not a comment asking someone to
  // remember. A DECLARED close outside its own band is proof the band aged out.
  // (Leo flagged the same shape in pane-state.sh's EMPTY_HINT list, and my own
  // DONE_RE verb literal was this exact failure caught only by traffic — a
  // literal that ages is worth mechanising the moment you notice it, not noting.)
  for (const spec of C11_INSTRUMENTS) {
    const out = history.filter((h) => h.key === spec.key && (h.close < spec.min || h.close > spec.max));
    if (!out.length) continue;
    warnings.push(`C11 — BAND AGED OUT for ${spec.label}: ${out.length} DECLARED close(s) sit outside the detector's own band [${spec.min}, ${spec.max}] (e.g. ${out[0].close} at ${out[0].at}). Outside its band C11 does not fail on this instrument, it goes SILENT — indistinguishable from clean. Widen the band and re-measure the false-positive rate; do not widen it without re-measuring, because the band is what separates a level from a percentage.`);
  }
  const rows = { declared: 0, attributed: 0, continuity: 0, 'contradicts-own': 0, 'contradicts-sibling': 0, unowned: 0, unmeasurable: 0 };
  let mentionsScanned = 0;
  let windowsInScope = 0;
  const reported = new Set();
  for (const domain of domains) {
    for (const win of windowsByDomain[domain]) {
      if (win.status === 'example' || !win.window_start) continue;
      if (String(win.window_start).slice(0, 10) < (C11_SCAN_SINCE.value || C11_EFFECTIVE_FROM)) continue;
      windowsInScope += 1;
      const sibs = windowStarts.get(win.window_start) || new Set();
      const siblingWindowExists = [...sibs].some((d) => d !== domain);
      for (const spec of C11_INSTRUMENTS) {
        const hits = findAssertedLevels(win.body, spec);
        mentionsScanned += hits.length;
        const byStart = declared.get(win.window_start);
        const decl = byStart ? byStart.get(spec.key) : null;
        const own = win.settles && win.settles[spec.key] && win.settles[spec.key].close != null
          ? { close: Number(win.settles[spec.key].close), prev: win.settles[spec.key].prev_close == null ? null : Number(win.settles[spec.key].prev_close) }
          : null;
        const sib = decl && decl.domain !== domain ? decl : null;
        const prior = priorCloses(spec.key, String(win.window_start));
        const tol = C11_TOL[spec.unit];
        for (const hit of hits) {
          const state = classifyC11Hit(hit.value, { own, sib, prior, siblingWindowExists }, tol);
          rows[state] += 1;
          if (C11_SCAN_SINCE.sink) { C11_SCAN_SINCE.sink.push({ state, rel: win.rel, key: spec.key, value: hit.value, snippet: hit.snippet }); continue; }
          const tag = `${win.rel}:${spec.key}:${state}`;
          if (reported.has(tag)) continue;
          const day = String(win.window_start).slice(0, 10);
          const hard = day >= C11_HARD_FAIL_FROM;
          const note = hard ? `[hard fail since ${C11_HARD_FAIL_FROM}]` : `[warn · hard fail from ${C11_HARD_FAIL_FROM}]`;
          if (state === 'unowned') {
            reported.add(tag);
            const msg = `${domain}/${win.rel}: C11 — asserts a SETTLED ${spec.label} level (${hit.value}) that NO settles block declares — not this window's, not the sibling edition's for this window_start. C1 cannot chain it, C6 never checks its source_time, the host allowlist never runs: it is unchecked while the window validates clean. Declare it, or write it as the intraday/live read it is. ${note} — "${hit.snippet}"`;
            (hard ? errors : warnings).push(msg);
          } else if (state === 'contradicts-own' || state === 'contradicts-sibling') {
            reported.add(tag);
            const src = state === 'contradicts-own' ? 'this window’s own settles block' : `the sibling edition (${sib.domain})`;
            const val = state === 'contradicts-own' ? own.close : sib.close;
            const msg = `${domain}/${win.rel}: C11 — prose asserts ${spec.label} ${hit.value} but ${src} declares ${val}. A prose figure and a declared figure for one instrument at one moment cannot both be right; the declared block is the machine-checked copy, so the prose is the one to fix — unless the block is wrong, in which case adjudicate against the PRIMARY, never by picking a reporter. ${note} — "${hit.snippet}"`;
            (hard ? errors : warnings).push(msg);
          } else if (state === 'unmeasurable') {
            reported.add(tag);
            warnings.push(`${domain}/${win.rel}: C11 — COULD NOT MEASURE ${spec.label} ${hit.value}: nothing declares it at this window_start and the sibling edition has no window there, so the attribution cannot resolve either way. This is NOT a pass — it is the row that keeps an unmeasured window from printing the same green as a verified one. — "${hit.snippet}"`);
          }
        }
      }
    }
  }
  // Constraint 6: "cleared" hides two different things. Resolved-against-a-block
  // and resolved-by-continuity are both legitimate and are not the same evidence.
  // And zero findings over zero candidates is zero COVERAGE — the C10 empty-block
  // shape, which read green over both live frames for two days.
  if (windowsInScope === 0) {
    warnings.push(`C11 — NOTHING IN SCOPE: no window is dated on or after ${C11_EFFECTIVE_FROM}, so the container ran over nothing. Zero findings here means zero coverage, not zero defects.`);
  } else if (mentionsScanned === 0) {
    warnings.push(`C11 — NO CANDIDATE FOUND in ${windowsInScope} window(s) in scope. Across ${C11_INSTRUMENTS.length} instruments this desk asserts constantly, zero candidates is far more likely to be a broken detector than a clean corpus. Zero findings here means zero coverage, not zero defects — this is NOT a pass.`);
  } else {
    warnings.push(`C11 — coverage: ${mentionsScanned} asserted level(s) across ${windowsInScope} window(s) since ${C11_EFFECTIVE_FROM} · resolved-by-own-block ${rows.declared} · resolved-by-sibling-attribution ${rows.attributed} · continuity-reference ${rows.continuity} · CONTRADICTION ${rows['contradicts-own'] + rows['contradicts-sibling']} · UNOWNED ${rows.unowned} · could-not-measure ${rows.unmeasurable}. Warn-only until ${C11_HARD_FAIL_FROM}. This container has NEVER BITTEN in production traffic: sample size on its findings is what these rows say it is, and a clean run is unknown, not proven.`);
  }
}

switch (cmd) {
  case 'init-finance':
    initFinance();
    break;
  case 'compose':
    composeAll();
    break;
  case 'validate':
    validateAll({ exit: true });
    break;
  case 'c5-selftest':
    runC5SelfTest();
    break;
  case 'c7-selftest':
    runC7SelfTest();
    break;
  case 'c11-selftest':
    runC11SelfTest();
    break;
  case 'c11-scan':
    c11Scan(process.argv[3] || '2026-01-01');
    break;
  case 'check':
    checkAll();
    break;
  case 'launch-check':
    launchCheckAll();
    break;
  case 'brief':
    printBrief(process.argv[3] || 'finance');
    break;
  case 'sources':
    printDomainDoc(process.argv[3] || 'finance', 'sources.md');
    break;
  case 'queries':
    printDomainDoc(process.argv[3] || 'finance', 'queries.md');
    break;
  case 'source-check':
    sourceCheck(process.argv[3]);
    break;
  case 'window-path':
    printWindowPath(process.argv[3]);
    break;
  case 'help':
  default:
    printHelp();
}

function initFinance() {
  writeIfMissing('content/finance/domain.yml', `domain: finance
title: "Finance / Macro"
cadence: 6h
homepage_windows: 1
required_publishable_windows: 4
confidence_emoji: [corroborated, developing, signal]
evidence_labels: [verified report, market interpretation, watch signal, needs confirmation]
sources:
  wire: [reuters.com/markets, apnews.com, bloomberg.com/markets]
  primary: [federalreserve.gov, eia.gov]
  social: ["x: curated finance lists", "reddit: r/investing"]
`);

  writeIfMissing('content/finance/frame.md', `---
domain: finance
updated: 2026-06-21T12:00Z
---
**Geopolitics is the switch, not the data.** Until escalation risk stabilizes,
treat it as the lead variable above ordinary economic-calendar noise.
`);

  const windows = [
    ['2026/06/20/12.md', '2026-06-20T12:00Z', '2026-06-20T18:00Z', 'First reports of talks friction surfaced.', 'developing report', '🟡'],
    ['2026/06/20/18.md', '2026-06-20T18:00Z', '2026-06-21T00:00Z', 'Ceasefire held overnight.', 'corroborated reports', '🟢'],
    ['2026/06/21/00.md', '2026-06-21T00:00Z', '2026-06-21T06:00Z', 'Oil options chatter picked up.', 'watch signal', '🔵'],
    ['2026/06/21/06.md', '2026-06-21T06:00Z', '2026-06-21T12:00Z', 'US-Iran talks reported stalled.', 'corroborated reports', '🟢'],
  ];
  for (const [rel, start, end, title, evidence, emoji] of windows) {
    writeIfMissing(`content/finance/windows/${rel}`, `---
domain: finance
window_start: ${start}
window_end: ${end}
reporter: finance-reporter
created: ${end.replace('Z', 'Z')}
---
- ${emoji} **${title}** Illustrative item for the first generated board; replace with a real reporter window before launch.
  - evidence: ${evidence}
  - uncertainty: example content; not for live publication.
  - follow: \`finance macro dominant frame\`
  - sources: [Example source](https://example.com/)

**Watch** — threads: dominant macro frame · source disagreement · next official catalyst · keywords: \`macro risk premium\` · \`policy signal\`
`);
  }

  writeIfMissing('content/finance/week/2026-W25.md', `---
domain: finance
period: 2026-W25
updated: 2026-06-21T12:00Z
---
# Finance week frame

Authored weekly context goes here. This is perspective, not a concatenation of windows.
`);
  writeIfMissing('content/finance/month/2026-06.md', `---
domain: finance
period: 2026-06
updated: 2026-06-21T12:00Z
---
# Finance monthly frame

Authored structural context goes here. This is slower-moving perspective.
`);
  console.log('Initialized finance content under content/finance.');
}

function composeAll() {
  ensureDir(siteRoot);
  emptyDir(siteRoot);

  const domains = listDomains();
  writeFile(path.join(siteRoot, 'index.md'), renderIndex(domains));
  writeFile(path.join(siteRoot, 'about.md'), renderAbout());
  for (const domain of domains) composeDomain(domain);
  writeFile(path.join(root, 'public', 'sitemap.xml'), renderSitemap(domains));
  console.log(`Composed ${domains.length} domain(s) into ${path.relative(root, siteRoot)}.`);
}

function composeDomain(domain) {
  const dir = path.join(contentRoot, domain);
  const config = readDomainConfig(path.join(dir, 'domain.yml'));
  const title = config.title || domain;
  const homepageWindows = Number(config.homepage_windows || config.windows_per_board || 1);
  const frame = readMarkdownBody(path.join(dir, 'frame.md'));
  const windows = listWindows(domain).filter((win) => win.status !== 'example').sort((a, b) => b.id.localeCompare(a.id));
  const latest = windows.slice(0, homepageWindows);
  const newest = latest[0];

  let board = frontmatter({
    title: `${title} — agentnews context board`,
    name: `agentnews-${domain}`,
    namespace: 'agentnews',
    type: 'app',
    version: '0.1.0',
    description: `${title} context board for working AI agents.`,
    domain,
    updated: newest ? getPublishedAt(newest) : '',
    next_update: newest ? addHours(newest.window_end, Number(config.cadence?.replace(/h$/, '') || 6)) : '',
  });
  board += `# ${title} — what an agent should know before answering\n\n`;
  board += `This is the current now board for working AI agents: current frame, latest update, watch threads, and sources to pull. It is not a conclusion engine.\n\n`;
  board += `## How to read this board\n\n`;
  board += `- Use it as a priority map for current context, not as a conclusion.\n`;
  board += `- Keep evidence labels and uncertainty attached to each item.\n`;
  board += `- Treat watch threads and follow queries as starting points for further source work.\n\n`;
  board += `## The frame right now\n\n${frame}\n\n`;
  board += `## Current now board\n\n`;
  for (const win of latest) {
    board += `### ▸ ${formatWindowTitle(win)}\n\n${win.body}\n\n`;
  }
  board += `## Go deeper\n\n`;
  board += `- [Archive](/${domain}/archive.md)\n`;
  board += `\n---\n\n## For AI agents\n\n`;
  board += `Read this board directly at \`https://agentnews.md/${domain}.md\`; humans can read the same content at \`https://agentnews.md/${domain}\`.\n\n`;
  board += `String is an agent-native web/app runtime for opening markdown sites and installing them as apps. In String, open this page and run \`/install\` to keep it as \`app:agentnews-${domain}\`. Docs: <https://www.string-os.org/index.md>.\n`;
  writeFile(path.join(siteRoot, `${domain}.md`), board);

  for (const win of windows) {
    writeFile(path.join(siteRoot, domain, 'updates', `${win.id}.md`), renderWindowPage(title, win));
  }
  writeFile(path.join(siteRoot, domain, 'archive.md'), renderArchive(title, domain, windows));
  // TODO: add weekly and monthly synthesis pages after the desk process is defined.
}

function composePeriodPage(domain, title, kind) {
  const dir = path.join(contentRoot, domain, kind);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort().reverse() : [];
  if (!files.length) return;
  const latest = files[0];
  const body = fs.readFileSync(path.join(dir, latest), 'utf8');
  writeFile(path.join(siteRoot, domain, `${kind}.md`), normalizePage(body, `${title} — ${kind}`));
  for (const file of files) {
    const id = file.replace(/\.md$/, '');
    writeFile(path.join(siteRoot, domain, kind, `${id}.md`), normalizePage(fs.readFileSync(path.join(dir, file), 'utf8'), `${title} — ${kind} ${id}`));
  }
}

// --- Settle continuity (C1/C2/C3) -------------------------------------------
// Arithmetic backstop for published index settles. This does NOT replace the
// native close-label rule in PUBLISH-PROCESS.md §3a — it only catches numbers
// that contradict each other. Same-wrong-base on consecutive days still passes.
//
// Frontmatter shape (reporter-filled, data not prose):
//   settles:
//     KOSPI:
//       close: 6237.54
//       pct: -7.67
//       prev_close: 6755.75
//       cb_level: 6213.51        # optional, KRX level-1 breaker
function parseSettles(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const lines = m[1].split('\n');
  const start = lines.findIndex((l) => /^settles:\s*$/.test(l));
  if (start === -1) return null;
  const out = {};
  const unparsed = [];
  let current = null;
  for (const line of lines.slice(start + 1)) {
    if (/^\S/.test(line)) break;                       // dedent ends the block
    if (!line.trim()) continue;
    // INLINE-FLOW form: `  UST2Y: {close: 4.17, prev_close: 4.15, source: "..."}`.
    // This existed in four published windows and parsed to NOTHING — see the
    // GHOST-BLOCK note below. Handled first because its key line also has a
    // trailing value, which the block-form regex deliberately forbids.
    const flow = line.match(/^\s{2}([A-Za-z0-9_.-]+):\s*\{(.*)\}\s*,?\s*$/);
    if (flow) {
      current = flow[1];
      out[current] = {};
      for (const part of splitTopLevel(flow[2])) {
        const kv = part.match(/^\s*([a-z_]+)\s*:\s*(.+?)\s*$/);
        if (!kv) { if (part.trim()) unparsed.push(line); continue; }
        const v = kv[2].replace(/^["']|["']$/g, '');
        out[current][kv[1]] = /^-?[\d.]+$/.test(v) ? Number(v) : v;
      }
      continue;
    }
    const idx = line.match(/^\s{2}([A-Za-z0-9_.-]+):\s*$/);
    if (idx) { current = idx[1]; out[current] = {}; continue; }
    // Values may be numeric (close, pct) or text (source, close_label); keep
    // numbers numeric so the arithmetic checks can use them directly.
    const kv = line.match(/^\s{4}([a-z_]+):\s*(.+?)\s*$/);
    if (kv && current) {
      const raw = kv[2].replace(/^["']|["']$/g, '');
      out[current][kv[1]] = /^-?[\d.]+$/.test(raw) ? Number(raw) : raw;
      continue;
    }
    // ── THE ROOT DEFECT THIS CLOSES ──────────────────────────────────────────
    // Previously any line matching neither shape was SILENTLY SKIPPED, so a
    // settles: block written in an unsupported form parsed to {} — identical to
    // declaring nothing at all, with no signal anywhere. Four published finance
    // 00Z windows (08-11, 08-13, 08-14, 08-17) carried inline-flow UST blocks
    // that were GHOSTS: C1 never chained them, C6 never checked their
    // source_time, the host allowlist never ran. The block LOOKED declared and
    // the gate LOOKED green. Found 2026-08-18 only because Scout hit a BASE
    // MISMATCH citing a close older than the immediately-prior window — and
    // refused to bend prev_close to silence it.
    // Silence on unrecognised input is what let this hide, so it is now LOUD:
    // a future format we do not handle becomes an error, not a ghost.
    unparsed.push(line);
  }
  if (unparsed.length) {
    Object.defineProperty(out, '__unparsed', { value: unparsed, enumerable: false });
  }
  return out;
}

// Split an inline-flow body on top-level commas only — a quoted URL may contain
// commas, and splitting naively would shear a source in half and then report the
// fragment as malformed.
function splitTopLevel(s) {
  const parts = [];
  let buf = '', q = null;
  for (const ch of s) {
    if (q) { buf += ch; if (ch === q) q = null; continue; }
    if (ch === '"' || ch === "'") { q = ch; buf += ch; continue; }
    if (ch === ',') { parts.push(buf); buf = ''; continue; }
    buf += ch;
  }
  if (buf.trim()) parts.push(buf);
  return parts;
}

// --- C4: settle provenance ---------------------------------------------------
// Both 2026-07-27/28 close errors had one shape: a DERIVED representation was read
// instead of the primary — an aggregator's close label on Monday, a search summary
// on Tuesday. Derived-ness is checkable by host, so this mechanizes the native
// close-label gate that until now depended on a human remembering it.
// Allowlist owned by the desk (Vera, 2026-07-28).

function hostOf(url) {
  const m = String(url).match(/^https?:\/\/([^/?#]+)/i);
  return m ? m[1].toLowerCase().replace(/^www\./, '') : null;
}
function hostMatches(host, allowed) {
  return allowed.some((a) => host === a || host.endsWith('.' + a));
}

function checkSettleProvenance(win, index, s, errors, warnings) {
  const rule = SETTLE_SOURCES.find((r) => r.match.test(index.toUpperCase().replace(/[^A-Z0-9]/g, '')));

  // Missing provenance is a FAILURE, never a skip: a settle without a source is
  // exactly the state both of today's errors were published in.
  if (!s.source) {
    errors.push(`${win.rel}: settles.${index} has no source — a settle value may not publish without a native close-labelled primary URL`);
    return;
  }
  const host = hostOf(s.source);
  if (!host) {
    errors.push(`${win.rel}: settles.${index}.source is not a URL (${s.source})`);
    return;
  }
  if (hostMatches(host, SETTLE_REJECT_HOSTS)) {
    errors.push(`${win.rel}: settles.${index}.source is ${host} — aggregators and search summaries are never a settle source; open the native close-labelled primary`);
    return;
  }
  if (!s.close_label) {
    errors.push(`${win.rel}: settles.${index} has no close_label — record the close token that actually appears in the source (e.g. 마감, 大引, "closing")`);
    return;
  }
  const tokens = (rule && rule.tokens) || CLOSE_TOKENS_DEFAULT;
  const label = String(s.close_label).toLowerCase();
  if (!tokens.some((tok) => label.includes(tok.toLowerCase()))) {
    errors.push(`${win.rel}: settles.${index}.close_label "${s.close_label}" is not a close token for this index (expected one of: ${tokens.join(', ')})`);
    return;
  }
  if (!rule) {
    // KNOWN QUIET PATH (Vera, 2026-08-17). This RETURNS, so everything below it —
    // including the C6 source_time check — is silently skipped for any index with
    // no SETTLE_SOURCES entry. Coverage is therefore defined by a list someone has
    // to remember to extend: opt-in wearing a config file.
    // WHEN IT STARTS BITING: the first time we publish an index nobody added here.
    // Every index we currently publish has an entry, so it does not bite today.
    // Fix when it does: warn but FALL THROUGH to the timestamp checks that do not
    // depend on the host allowlist — a missing allowlist should not disable the
    // checks it has nothing to do with.
    // FALL THROUGH, as this comment pre-registered. C11 makes an unlisted index
    // reachable in ONE STEP — a reporter declaring the crude or FX settle it flags
    // — so "it does not bite today" expired. A missing host allowlist now warns and
    // the timestamp checks below, which have nothing to do with hosts, still run.
    warnings.push(`${win.rel}: settles.${index} has no host allowlist for this index — the HOST was not checked (the source may be an aggregator or a re-publisher); add an entry to SETTLE_SOURCES. The timestamp checks below still ran.`);
  }
  if (rule && !hostMatches(host, rule.hosts)) {
    errors.push(`${win.rel}: settles.${index}.source host ${host} is not a native primary for ${index} (allowed: ${rule.hosts.join(', ')})`);
    return;
  }
  // ── C6: does the SOURCE's own timestamp predate the close it claims to describe? ──
  // The checker cannot observe when a page was published, so the writer declares it; then the
  // contradiction is mechanical and needs no judgement. Adoption is warn-then-hard-fail so the
  // existing archive does not fail en masse — but a DECLARED source_time that predates the close is
  // an ERROR immediately, because that is a genuine contradiction rather than a missing field.
  const winDayForRule = win.rel.slice(0, 10).replace(/\//g, '-');
  const closeRule = closeUtcFor(index, winDayForRule);
  if (!s.source_time) {
    const hard = win.rel.slice(0, 10).replace(/\//g, '-') >= C6_HARD_FAIL_FROM;
    const msg = `${win.rel}: settles.${index} has no source_time — declare when the SOURCE was published (ISO, e.g. 2026-08-14T15:42+09:00). Without it, an intraday article and a close wrap are indistinguishable, which is how a 13:05 piece was cited for a 마감 close on two consecutive days. ${hard ? `[hard fail since ${C6_HARD_FAIL_FROM}]` : `[warn · hard fail from ${C6_HARD_FAIL_FROM}]`}`;
    (hard ? errors : warnings).push(msg);
  } else if (closeRule) {
    const t = new Date(s.source_time);
    if (isNaN(t.getTime())) {
      errors.push(`${win.rel}: settles.${index}.source_time "${s.source_time}" is not a parseable timestamp`);
    } else {
      const hhmm = t.toISOString().slice(11, 16);
      const day = t.toISOString().slice(0, 10);
      const winDay = win.rel.slice(0, 10).replace(/\//g, '-');
      // Same UTC day and stamped before the close = the source cannot be describing the close.
      if (day === winDay && hhmm < closeRule.utc) {
        errors.push(`${win.rel}: settles.${index}.source_time ${s.source_time} PREDATES the close (${closeRule.utc}Z, ${closeRule.tz}) — a source published before the close is not reporting the close, whatever its label says. Cite the post-close wrap, not the intraday piece.`);
      }
    }
  } else {
    // s.source_time exists but no SETTLE_CLOSE_UTC row matches this index, so the
    // predates-the-close test CANNOT RUN. It used to fall through in silence, which is
    // the worst outcome: the window shows a declared source_time and a clean validator,
    // and nothing anywhere says the timestamp was never compared to anything. Say it.
    warnings.push(`${win.rel}: settles.${index}.source_time NOT CHECKED against a close time — no SETTLE_CLOSE_UTC rule matches "${index}", so an intraday stamp cannot be distinguished from a post-close one for this index. Add a row to SETTLE_CLOSE_UTC (an unconfigured index is unguarded, not exempt).`);
  }

  // Not a check, a prompt at the moment of use: the continuous feed is a derived
  // series, and mistaking it for the settle is the same shape as the errors above.
  if (rule && rule.roll) {
    warnings.push(`${win.rel}: settles.${index} — confirm this is the front-month settle, not the continuous series (roll gap)`);
  }
}

function checkSettles(windows, domain, errors, warnings) {
  const dated = windows
    .filter((w) => w.status !== 'example' && w.window_start)
    .sort((a, b) => String(a.window_start).localeCompare(String(b.window_start)));
  const declared = dated.filter((w) => w.settles && Object.keys(w.settles).length);

  // A settles: block whose lines the parser did not recognise used to vanish
  // silently — see the GHOST-BLOCK note in parseSettles. A ghost parses to {},
  // so it is not even in `declared`; it must be caught against `dated`.
  for (const w of dated) {
    const bad = w.settles && w.settles.__unparsed;
    if (bad && bad.length) {
      errors.push(`${w.rel}: settles: block has ${bad.length} UNRECOGNISED line(s) — these were silently ignored, so anything declared on them is NOT under any check (no C1 chain, no C6 source_time, no host allowlist). A block that does not parse is indistinguishable from no block at all. First: ${bad[0].trim().slice(0, 90)}`);
    }
  }

  if (dated.length && !declared.length) {
    warnings.push(`${domain}: settle-continuity CHECK NOT RUN — no window declares a settles: block (add one so C1 can compare data to data)`);
    return;
  }

  for (let i = 0; i < declared.length; i += 1) {
    const win = declared[i];
    for (const [index, s] of Object.entries(win.settles)) {
      if (!Object.keys(s).length) {
        warnings.push(`${win.rel}: settles.${index} is empty — CHECK NOT RUN for this index`);
        continue;
      }
      // C4 — provenance. Runs before the arithmetic: a number from the wrong
      // place can be perfectly self-consistent (Tue 07-28 was).
      checkSettleProvenance(win, index, s, errors, warnings);
      // C2 — self-consistency of close / pct / prev_close (warn first).
      if (s.close != null && s.pct != null && s.prev_close != null) {
        const implied = s.close / (1 + s.pct / 100);
        if (Math.abs(implied - s.prev_close) > Math.max(0.05, s.prev_close * 0.0002)) {
          warnings.push(`${win.rel}: settles.${index} self-inconsistent — close ${s.close} with pct ${s.pct}% implies prev_close ${implied.toFixed(2)}, declared ${s.prev_close}`);
        }
      }
      // C3 — KRX level-1 circuit breaker fires at -8% of the official prev close.
      if (s.cb_level != null && s.prev_close != null) {
        const implied = s.cb_level / 0.92;
        if (Math.abs(implied - s.prev_close) > Math.max(0.5, s.prev_close * 0.001)) {
          warnings.push(`${win.rel}: settles.${index} breaker math — cb_level ${s.cb_level} implies prev_close ${implied.toFixed(2)}, declared ${s.prev_close}`);
        }
      }
      // C1 — HARD: this window's prev_close must equal the last close we published.
      if (s.prev_close == null) continue;
      let prior = null;
      for (let j = i - 1; j >= 0; j -= 1) {
        const cand = declared[j].settles[index];
        if (cand && cand.close != null) { prior = { win: declared[j], close: cand.close }; break; }
      }
      if (!prior) {
        warnings.push(`${win.rel}: settles.${index} has no earlier published close to compare — C1 not applicable (first window for this index)`);
        continue;
      }
      // A mismatch against a NON-ADJACENT prior is a GAP artifact, not a data
      // error. If a same-hour sibling window sits between the two declarations
      // and did not declare this index, the intervening session's close was
      // never published, so C1 is comparing across a hole it cannot see into.
      // 2026-08-18: 08/13/00 declared prev_close 4.22 (the true 08/12 settle,
      // confirmed against the CMT primary) and C1 chained it back to 08/11/00's
      // 4.25 because 08/12/00 declared nothing — reporting a BASE MISMATCH whose
      // only "fix" was writing a FALSE prev_close to silence the gate. Scout hit
      // exactly that and refused to bend the number, which is the correct call
      // and the reason this branch exists: a check that can only be satisfied by
      // falsifying data is worse than no check.
      const hour = String(win.window_start).slice(11, 13);
      const skipped = dated.filter((w) =>
        String(w.window_start).slice(11, 13) === hour &&
        String(w.window_start) > String(prior.win.window_start) &&
        String(w.window_start) < String(win.window_start));
      if (Math.abs(prior.close - s.prev_close) > 0.011) {
        if (skipped.length) {
          warnings.push(`${win.rel}: settles.${index} continuity UNVERIFIABLE across a gap — prev_close ${s.prev_close} vs ${prior.win.rel}'s close ${prior.close}, but ${skipped.length} intervening ${hour}Z window(s) (${skipped.map((w) => w.rel).join(', ')}) declared no ${index}, so the sessions between were never published. NOT a mismatch — do NOT change prev_close to silence this; declare the missing window(s) instead.`);
        } else {
          errors.push(`${win.rel}: settles.${index} BASE MISMATCH — prev_close ${s.prev_close} but ${prior.win.rel} published close ${prior.close}. One of the two is wrong; resolve against the native close-labelled source before publishing.`);
        }
      }
    }
  }
}

// C5 — undeclared close assertion.
//
// Policy (Vera, desk owner, 2026-07-29): a window that ASSERTS a fresh KOSPI
// close — a close-labelled figure that becomes the new continuity base — MUST
// declare a settles block. A window that merely REFERENCES the prior close as
// continuity asserts nothing new and is exempt.
//
// Why this exists: C1 compares declared settles to declared settles. A domain
// that declares none is not protected by C1 at all, yet validate passes — the
// gate looks present and is absent. finance-ko was in exactly that state.
//
// Two signals, two jobs — neither alone is sufficient:
//   - the close LABEL narrows candidates to close context. A number-only rule
//     false-positives on intraday ticks, futures and circuit-breaker levels:
//     the 2026-07-28 KRX breaker level 6,213.51 sits in the finance-ko body and
//     differs from every published close.
//   - the NUMBER judges assertion vs reference, and it is language-neutral:
//     differs from the last close we published => new base => settles required;
//     equal => continuity => exempt. Judgment stays with the number.
//
// finance-ko publishes in ENGLISH (Korean primaries are internal sourcing), so
// the label set here is English. The Korean tokens live only inside
// settles.close_label as provenance — matching them in the body would produce a
// gate that never fires.
// URLs carry index names and numbers inside slugs ("kospi-swings-but-holds-6800")
// and are not prose. Strip link targets before scanning so a citation cannot be
// read as an assertion.
function stripUrls(body) {
  return body.replace(/\]\((https?:\/\/[^)]*)\)/g, '](#)').replace(/https?:\/\/\S+/g, ' ');
}

function findAssertedCloses(body, lastClose) {
  const found = [];
  const text = stripUrls(body);
  const mention = new RegExp(C5_INDEX, 'gi');
  let m;
  while ((m = mention.exec(text)) !== null) {
    const slice = text.slice(m.index, m.index + C5_CONTEXT_CHARS);
    if (!C5_CLOSE_CONTEXT.test(slice)) continue;
    // Candidates bound to this mention, nearest first. A currency mark means a
    // security price (an ADR, an ETF), not the index.
    const re = /(.?)\b(\d{1,2},\d{3}\.\d{1,2}|\d{3,5}\.\d{1,2})\b/g;
    let n;
    while ((n = re.exec(slice)) !== null) {
      if (/[$₩€£]/.test(n[1])) continue;
      const before = slice.slice(Math.max(0, n.index - C5_LOOKBEHIND_CHARS), n.index);
      if (C5_NOT_A_CLOSE.test(before)) continue;
      const value = Number(n[2].replace(/,/g, ''));
      if (lastClose != null && Math.abs(value - lastClose) / lastClose > C5_LEVEL_BAND) continue;
      // Every in-band candidate, not just the first. Taking only the first hid a
      // real assertion whenever a continuity reference preceded it in the same
      // slice — "off Monday's 6,607.53, KOSPI closed 6,023.66" stopped at the
      // reference, matched it as continuity, and missed the close. (Vera, code
      // review of #246.) The caller skips a window only when EVERY candidate is
      // the prior close.
      found.push({ value, snippet: slice.split('\n')[0].trim() });
    }
  }
  return found;
}

// Fixtures are the false positives this detector actually produced against live
// content on 2026-07-29, plus the assertions it must keep catching. Vera will
// report FPs/FNs during the warn window (2026-07-31 → 08-03) and the token list
// will be tuned before the hard-fail flip — tuning these regexes without a test
// is how C1 gets broken by accident.

function runC5SelfTest() {
  let failed = 0;
  for (const [name, body, lastClose, expectHit] of C5_FIXTURES) {
    const hits = assertedNewCloses(body, lastClose);
    const got = hits.length > 0;
    if (got !== expectHit) {
      failed += 1;
      console.error(`  FAIL ${name}: expected ${expectHit ? 'a hit' : 'no hit'}, got ${JSON.stringify(hits)}`);
    }
  }
  if (failed) {
    console.error(`${failed}/${C5_FIXTURES.length} C5 fixture(s) failed.`);
    process.exit(1);
  }
  console.log(`OK — ${C5_FIXTURES.length} C5 fixtures passed.`);
}

// The novelty decision, shared by the validator and the fixtures so they cannot
// drift: a candidate equal to the close we last published is a continuity
// reference, not an assertion.
function assertedNewCloses(body, lastClose) {
  return findAssertedCloses(body, lastClose)
    .filter((hit) => lastClose == null || Math.abs(hit.value - lastClose) > 0.011);
}

function checkUndeclaredCloseAssertions(windows, domain, errors, warnings) {
  if (domain !== C5_OWNER_DOMAIN) return;
  const dated = windows
    .filter((w) => w.status !== 'example' && w.window_start)
    .sort((a, b) => String(a.window_start).localeCompare(String(b.window_start)));

  let lastClose = null;
  for (const win of dated) {
    const declared = win.settles && win.settles[C5_INDEX];
    if (declared && declared.close != null) {
      // Declared windows are C1's job, not C5's; they only move the baseline.
      lastClose = declared.close;
      continue;
    }
    if (declared) continue; // declared but closeless — C1 already reports it
    if (String(win.window_start).slice(0, 10) < C5_EFFECTIVE_FROM) continue;
    for (const hit of assertedNewCloses(win.body, lastClose)) {
      const base = lastClose == null ? 'none declared yet' : String(lastClose);
      {
        const day = String(win.window_start).slice(0, 10);
        const hard = day >= C5_HARD_FAIL_FROM;
        const note = hard ? `[hard fail since ${C5_HARD_FAIL_FROM}]` : `[warn · hard fail from ${C5_HARD_FAIL_FROM}]`;
        const msg = `${domain}/${win.rel}: C5 — asserts a ${C5_INDEX} close (${hit.value}) that differs from our last published close (${base}) but declares no settles.${C5_INDEX} block, so C1 cannot check it. A window that sets a new continuity base must declare it. ${note} — "${hit.snippet.slice(0, 120)}"`;
        (hard ? errors : warnings).push(msg);
      }
      break; // one finding per window is enough to act on
    }
  }
}

// C7 detection. Same two-signal design as C5 — the close LABEL narrows to close
// context, the NUMBER decides assertion vs reference — with the band supplied
// statically per index rather than from the prior close.
function findAssertedUsCloses(body, spec, lastClose) {
  const found = [];
  const text = stripUrls(body);
  const mention = new RegExp(spec.mention.source, 'gi');
  let m;
  while ((m = mention.exec(text)) !== null) {
    // TWO WINDOWS, deliberately different sizes — C5 used one and it could not
    // see this defect. C5 slices FORWARD only, which fits Korean-desk phrasing
    // ("KOSPI closed 6,023.66"): the close token follows the index. US phrasing
    // puts it FIRST — "US stocks closed mild-RED Friday — S&P 7,785.76" — so a
    // forward-only window finds no close token and the detector catches nothing.
    //   ctxSlice (looks BACKWARD too) answers: is this close CONTEXT?
    //   numSlice (forward only) answers: which number belongs to THIS index?
    // They must stay separate. Widening the number search backward would let
    // "S&P 7,785.76, Nasdaq 26,729.16" bind the S&P level to the Nasdaq — 7785.76
    // sits inside the Nasdaq band, so the band would not catch the swap.
    const ctxSlice = text.slice(Math.max(0, m.index - C7_CONTEXT_LOOKBACK), m.index + C5_CONTEXT_CHARS);
    if (!C5_CLOSE_CONTEXT.test(ctxSlice)) continue;
    // ATTRIBUTION CUT — stop the forward scan at the NEXT index's mention. The
    // comment above reasoned about the BACKWARD direction of this swap and
    // stopped there; FORWARD has the identical property and was unguarded, so
    // "NASDAQ 26,370.89 / DOW 53,185.90" bound the DOW level to NASDAQ (53,185.9
    // sits inside NASDAQ's 5,000-60,000 band, so the band cannot catch it). Live
    // consequence was in C9, which FILTERS hits by distance from the sibling's
    // declared close: the correct hit matches and is filtered OUT, so the only
    // SURVIVOR is the mis-attributed neighbour — C9 fires a contradiction its own
    // parser manufactured, naming a real number under the wrong index's name.
    // A plausibility band that admits a neighbour's values is not an attribution.
    // (Vera, 2026-09-01, after Leo's credential-check sweep.)
    let slice = text.slice(m.index, m.index + C5_CONTEXT_CHARS);
    for (const other of C7_US_INDICES) {
      if (other.key === spec.key) continue;
      const om = new RegExp(other.mention.source, 'gi');
      let o;
      while ((o = om.exec(slice)) !== null) {
        if (o.index > 0) { slice = slice.slice(0, o.index); break; }
      }
    }
    const re = /(.?)\b(\d{1,3},\d{3}\.\d{1,2}|\d{4,5}\.\d{1,2})\b/g;
    let n;
    while ((n = re.exec(slice)) !== null) {
      if (/[$₩€£]/.test(n[1])) continue;
      const before = slice.slice(Math.max(0, n.index - C5_LOOKBEHIND_CHARS), n.index);
      if (C5_NOT_A_CLOSE.test(before)) continue;
      const value = Number(n[2].replace(/,/g, ''));
      if (value < spec.min || value > spec.max) continue;
      // A figure equal to the close we last published is a continuity reference,
      // not a new assertion — same exemption C5 grants.
      if (lastClose != null && Math.abs(value - lastClose) <= 0.011) continue;
      found.push({ value, snippet: slice.split('\n')[0].trim() });
    }
  }
  return found;
}

function runC7SelfTest() {
  let failed = 0;
  for (const [name, body, key, lastClose, expectHit] of C7_FIXTURES) {
    const spec = C7_US_INDICES.find((s) => s.key === key);
    const hits = findAssertedUsCloses(body, spec, lastClose);
    const got = hits.length > 0;
    if (got !== expectHit) {
      failed += 1;
      console.error(`  FAIL ${name}: expected ${expectHit ? 'a hit' : 'no hit'}, got ${JSON.stringify(hits)}`);
    }
  }
  if (failed) {
    console.error(`${failed}/${C7_FIXTURES.length} C7 fixture(s) failed.`);
    process.exit(1);
  }
  console.log(`OK — ${C7_FIXTURES.length} C7 fixtures passed.`);
}

function runC9SelfTest() {
  let failed = 0;
  for (const [name, body, key, declaredClose, declaredPrev, expectHit] of C9_FIXTURES) {
    const spec = C9_CROSS_INDICES.find((x) => x.key === key);
    const hits = findAssertedUsCloses(body, spec, declaredPrev)
      .filter((h) => Math.abs(h.value - declaredClose) > C9_TOLERANCE);
    const got = hits.length > 0;
    if (got !== expectHit) {
      failed += 1;
      console.error(`  FAIL ${name}: expected ${expectHit ? 'a hit' : 'no hit'}, got ${JSON.stringify(hits)}`);
    }
  }
  if (failed) {
    console.error(`${failed}/${C9_FIXTURES.length} C9 fixture(s) failed.`);
    process.exit(1);
  }
  console.log(`OK — ${C9_FIXTURES.length} C9 fixtures passed.`);
}

// Runs ONCE over every domain, not per-domain: the whole point is the comparison
// BETWEEN editions, so a per-domain hook could never see it.
function runC10SelfTest() {
  let failed = 0;
  for (const [name, frameText, declared, expected] of C10_FIXTURES) {
    const parsed = parseFrameBaseLevels(frameText);
    let got;
    if (parsed === null) {
      got = null;
    } else if (parsed.length === 0) {
      got = 'EMPTY';                      // zero coverage — must never read as zero findings
    } else {
      got = parsed.filter((b) => declared[b.key] != null && Math.abs(b.value - declared[b.key]) > b.tol).length;
    }
    if (got !== expected) {
      failed += 1;
      console.error(`  FAIL ${name}: expected ${expected}, got ${got} (parsed ${JSON.stringify(parsed)})`);
    }
  }
  if (failed) {
    console.error(`${failed}/${C10_FIXTURES.length} C10 fixture(s) failed.`);
    process.exit(1);
  }
  console.log(`OK — ${C10_FIXTURES.length} C10 fixtures passed.`);
}

function checkFrameBaseLevels(windowsByDomain, frameTextByDomain, errors, warnings) {
  // Newest declared close per index, across ALL domains, with the window it came from.
  const newest = new Map();
  for (const domain of Object.keys(windowsByDomain)) {
    for (const win of windowsByDomain[domain]) {
      if (win.status === 'example' || !win.window_start || !win.settles) continue;
      for (const spec of C10_INDICES) {
        const d = win.settles[spec.key];
        if (!d || d.close == null) continue;
        const cur = newest.get(spec.key);
        if (!cur || String(win.window_start) > cur.window_start) {
          newest.set(spec.key, { close: Number(d.close), window_start: String(win.window_start), domain });
        }
      }
    }
  }
  const newestWindow = Object.values(windowsByDomain).flat()
    .filter((w) => w.status !== 'example' && w.window_start)
    .map((w) => String(w.window_start)).sort().pop();
  if (!newestWindow || newestWindow.slice(0, 10) < C10_EFFECTIVE_FROM) return;

  for (const domain of Object.keys(frameTextByDomain)) {
    const parsed = parseFrameBaseLevels(frameTextByDomain[domain]);
    if (parsed === null) {
      warnings.push(`${domain}/frame.md: C10 — no "Base levels" block found, so the frame's carried levels were NOT CHECKED against the newest settle. This is not a pass.`);
      continue;
    }
    if (parsed.length === 0) {
      warnings.push(`${domain}/frame.md: C10 — a "Base levels" block was found but NO index/value pair was recognised inside it, so NOTHING was checked. Zero findings here means zero coverage, not zero defects — this is the shape that let C10 report green over both live frames from 2026-08-26 to 08-27 while parsing an empty body. This is not a pass.`);
      continue;
    }
    for (const b of parsed) {
      const n = newest.get(b.key);
      if (!n) continue;                                  // never declared -> nothing to compare
      if (Math.abs(b.value - n.close) <= b.tol) continue;
      warnings.push(
        `${domain}/frame.md: C10 — base level ${b.key} ${b.value} does not match the newest DECLARED settle ${n.close} (${n.domain}, window ${n.window_start}). A frame's base levels are what the next window starts from, so a stale one propagates into every window that reads it. Note the frame STAMP can be newer than its NUMBERS — C8 measures the stamp and cannot see this.`
      );
    }
  }
}

function checkCrossDomainCloseAgreement(windowsByDomain, errors, warnings) {
  const domains = Object.keys(windowsByDomain);
  if (domains.length < 2) return;   // nothing to cross-check; silent by design
  // window_start -> index -> {close, prev, domain}
  const declared = new Map();
  for (const domain of domains) {
    for (const win of windowsByDomain[domain]) {
      if (win.status === 'example' || !win.window_start || !win.settles) continue;
      if (!declared.has(win.window_start)) declared.set(win.window_start, new Map());
      const byIndex = declared.get(win.window_start);
      for (const spec of C9_CROSS_INDICES) {
        const d = win.settles[spec.key];
        if (!d || d.close == null) continue;
        const close = Number(d.close);
        const existing = byIndex.get(spec.key);
        if (existing && existing.domain !== domain && Math.abs(existing.close - close) > C9_TOLERANCE) {
          errors.push(
            `${win.window_start}: C9 — BOTH editions DECLARE ${spec.key} for this window and they disagree: ${existing.domain} ${existing.close} vs ${domain} ${close}. Two settles blocks for one index at one moment cannot both be right, and because each edition is internally consistent NO per-edition check can see it — C1 chains within a domain and C6 only checks source_time. Adjudicate against the PRIMARY, never by picking a reporter.`
          );
        }
        if (!existing) byIndex.set(spec.key, { close, prev: d.prev_close == null ? null : Number(d.prev_close), domain });
      }
    }
  }
  for (const domain of domains) {
    for (const win of windowsByDomain[domain]) {
      if (win.status === 'example' || !win.window_start) continue;
      if (String(win.window_start).slice(0, 10) < C9_EFFECTIVE_FROM) continue;
      const byIndex = declared.get(win.window_start);
      if (!byIndex) continue;
      for (const spec of C9_CROSS_INDICES) {
        const d = byIndex.get(spec.key);
        if (!d || d.domain === domain) continue;              // only CROSS-domain
        // This edition declares it too, so the PROSE-vs-sibling scan below does not
        // apply. The declared-vs-declared disagreement is caught at collection time
        // above — NOT by C1/C6, which are per-domain and never see both editions.
        if (win.settles && win.settles[spec.key]) continue;
        const hits = findAssertedUsCloses(win.body, spec, d.prev)
          .filter((h) => Math.abs(h.value - d.close) > C9_TOLERANCE);
        if (!hits.length) continue;
        warnings.push(
          `${domain}/${win.rel}: C9 — asserts a ${spec.key} close of ${hits[0].value}, but ${d.domain} DECLARES ${d.close} for the same window. Both editions publish together, so this contradiction is created by publishing, not by either edition alone — and per-edition review cannot see it. Quote the sibling's settle rather than reconstructing it. — "${hits[0].snippet.slice(0, 120)}"`
        );
      }
    }
  }
}

function checkUndeclaredUsCloseAssertions(windows, domain, errors, warnings) {
  if (domain !== C7_OWNER_DOMAIN) return;
  const dated = windows
    .filter((w) => w.status !== 'example' && w.window_start)
    .sort((a, b) => String(a.window_start).localeCompare(String(b.window_start)));

  const lastClose = {};
  for (const win of dated) {
    for (const spec of C7_US_INDICES) {
      const declared = win.settles && win.settles[spec.key];
      if (declared && declared.close != null) {
        lastClose[spec.key] = declared.close;   // declared → C1/C6's job, not C7's
        continue;
      }
      if (declared) continue;                   // declared but closeless → C1 reports it
      if (String(win.window_start).slice(0, 10) < C7_EFFECTIVE_FROM) continue;
      const hits = findAssertedUsCloses(win.body, spec, lastClose[spec.key] ?? null);
      if (!hits.length) continue;
      const day = String(win.window_start).slice(0, 10);
      const hard = day >= C7_HARD_FAIL_FROM;
      const note = hard ? `[hard fail since ${C7_HARD_FAIL_FROM}]` : `[warn · hard fail from ${C7_HARD_FAIL_FROM}]`;
      (hard ? errors : warnings).push(
        `${domain}/${win.rel}: C7 — asserts a ${spec.key} close (${hits[0].value}) but declares no settles.${spec.key} block, so the source is never checked. An asserted close in PROSE bypasses the host allowlist AND the C6 source_time rule that guard a declared one — declaring is what puts it under the gate. ${note} — "${hits[0].snippet.slice(0, 120)}"`
      );
    }
  }
}

function validateAll({ exit = false, requireWindowCount = false } = {}) {
  // The detectors verify THEMSELVES before they are trusted to verify content.
  // These were CLI-only subcommands, which made running them opt-in — the same
  // defect C7 exists to close, one level up: a self-test nobody is obliged to run
  // is a self-test that stops being run. Cheap (pure string matching, no I/O), so
  // there is no reason for it to be optional. Both exit non-zero on failure.
  runSettlesSelfTest();
  runC5SelfTest();
  runC7SelfTest();
  runC6CloseTimeSelfTest();
  runC9SelfTest();
  runC10SelfTest();
  runC11SelfTest();
  const errors = [];
  const warnings = [];
  // A pass must state its SCOPE. With no domain.yml anywhere, listDomains() returns [], the loop
  // below never runs, its own "no windows found" check never runs either, and this function prints
  // "OK — agentnews content validation passed." over ZERO windows — identical to a clean corpus.
  // That is not hypothetical: on 2026-08-20 I built a sandbox without domain.yml and read a green
  // pass over an empty tree as evidence my fix had not fired. The corpus comes from process.cwd(),
  // so running from the wrong directory produces exactly this. Refuse to pass over nothing.
  const domains = listDomains();
  if (domains.length === 0) {
    errors.push(`no domains found under ${contentRoot} (a domain needs a domain.yml) — refusing to report a pass over an empty corpus; check the working directory`);
  }
  let scannedWindows = 0;
  const windowsByDomain = {};
  const frameTextByDomain = {};
  for (const domain of domains) {
    const dir = path.join(contentRoot, domain);
    if (!fs.existsSync(path.join(dir, 'domain.yml'))) errors.push(`${domain}: missing domain.yml`);
    if (!fs.existsSync(path.join(dir, 'frame.md'))) errors.push(`${domain}: missing frame.md`);
    const config = readDomainConfig(path.join(dir, 'domain.yml'));
    const windows = listWindows(domain);
    windowsByDomain[domain] = windows;   // kept for the cross-domain pass below
    try { frameTextByDomain[domain] = fs.readFileSync(path.join(dir, 'frame.md'), 'utf8'); } catch { /* missing frame.md already errored above */ }
    scannedWindows += windows.length;
    checkFrameFreshness(domain, path.join(dir, 'frame.md'), windows, errors, warnings);
    const publishableWindows = windows.filter((win) => win.status !== 'example');
    const requiredWindows = Number(config.required_publishable_windows || 4);
    if (windows.length === 0) errors.push(`${domain}: no windows found`);
    if (requireWindowCount && publishableWindows.length < requiredWindows) {
      errors.push(`${domain}: only ${publishableWindows.length}/${requiredWindows} publishable windows; example windows do not count`);
    }
    for (const win of windows) {
      if (!win.window_start || !win.window_end || !win.reporter) {
        errors.push(`${win.rel}: missing required frontmatter keys`);
      }
      if (!win.published_at && !win.created) {
        errors.push(`${win.rel}: missing published_at or legacy created frontmatter key`);
      }
      const expected = expectedWindowRel(win.window_start);
      if (expected && expected !== win.rel) warnings.push(`${win.rel}: path does not match window_start; expected ${expected}`);
      if (win.status === 'example') {
        if (requireWindowCount) {
          warnings.push(`${win.rel}: example window skipped for publication checks`);
        }
        continue;
      }
      const itemLines = win.body.split('\n').filter((line) => /^-\s+[🟢🟡🔵]\s+\*\*/u.test(line));
      if (itemLines.length === 0) errors.push(`${win.rel}: no item with leading confidence emoji`);
      for (const item of itemLines) {
        const after = win.body.slice(win.body.indexOf(item));
        const next = after.split('\n- ')[0];
        if (!/sources:\s*\[.+?\]\(https?:\/\//s.test(next)) errors.push(`${win.rel}: item missing at least one real source URL`);
      }
      const sourceIssues = inspectSourceText(win.body);
      for (const issue of sourceIssues.errors) errors.push(`${win.rel}: ${issue}`);
      for (const issue of sourceIssues.warnings) warnings.push(`${win.rel}: ${issue}`);
      // Desk frame block (gaze/bias layer) — lenient checks, warn-not-fail.
      // Only fire when the optional field is present; absent fields never warn,
      // so existing windows without a Desk frame block are untouched.
      const fieldEnd = /(?=\n- \*\*|\n\n|\n## |$)/;
      const suppressed = win.body.match(new RegExp(`- \\*\\*Suppressed:\\*\\*([\\s\\S]*?)${fieldEnd.source}`));
      if (suppressed && !/revive if/i.test(suppressed[1])) {
        warnings.push(`${win.rel}: Suppressed line has no "revive if <trigger>" — add a concrete revival trigger or cut the line`);
      }
      const contested = win.body.match(new RegExp(`- \\*\\*Contested:\\*\\*([\\s\\S]*?)${fieldEnd.source}`));
      if (contested) {
        const links = (contested[1].match(/\[[^\]]*\]\(https?:\/\//g) || []).length;
        if (links < 2) warnings.push(`${win.rel}: Contested line has ${links} sourced side(s); needs two sourced sides (one per side) or cut the line`);
      }
    }
    checkSettles(windows, domain, errors, warnings);
    checkUndeclaredCloseAssertions(windows, domain, errors, warnings);
    checkUndeclaredUsCloseAssertions(windows, domain, errors, warnings);
  }
  checkCrossDomainCloseAgreement(windowsByDomain, errors, warnings);
  checkFrameBaseLevels(windowsByDomain, frameTextByDomain, errors, warnings);
  checkUnownedInstrumentAssertions(windowsByDomain, errors, warnings);
  if (warnings.length) {
    console.log(`${warnings.length} warning(s):`);
    for (const warning of warnings) console.log(`  ! ${warning}`);
  }
  if (errors.length) {
    console.error(`${errors.length} error(s):`);
    for (const error of errors) console.error(`  - ${error}`);
    if (exit) process.exit(1);
  } else {
    console.log(`OK — agentnews content validation passed (${domains.length} domain(s), ${scannedWindows} window(s) scanned, ${warnings.length} warning(s)).`);
  }
  return { errors, warnings };
}

function checkAll() {
  const result = validateAll();
  if (result.errors.length) process.exit(1);
  composeAll();
  const build = spawnSync('npm', ['run', 'build'], { cwd: root, stdio: 'inherit' });
  if (build.status !== 0) process.exit(build.status || 1);
  const required = ['dist/index.html', 'dist/index.md', 'dist/finance/index.html', 'dist/finance.md'];
  const missing = required.filter((rel) => !fs.existsSync(path.join(root, rel)));
  if (missing.length) {
    console.error(`Missing expected build outputs:\n${missing.map((m) => `  - ${m}`).join('\n')}`);
    process.exit(1);
  }
  console.log('OK — build produced HTML + .md route twins.');
}

function launchCheckAll() {
  const result = validateAll({ requireWindowCount: true });
  if (result.errors.length) process.exit(1);
  checkAll();
}

function printBrief(domain) {
  const domainDir = path.join(contentRoot, domain);
  if (!fs.existsSync(domainDir)) {
    console.error(`Unknown domain: ${domain}`);
    process.exit(1);
  }
  const config = readDomainConfig(path.join(domainDir, 'domain.yml'));
  const windows = listWindows(domain).sort((a, b) => b.id.localeCompare(a.id)).slice(0, 4);
  console.log(`# ${config.title || domain} reporter brief\n`);
  console.log('## Current frame\n');
  console.log(readMarkdownBody(path.join(domainDir, 'frame.md')));
  console.log('\n## Latest now board updates\n');
  for (const win of windows) {
    const firstItem = win.body.split('\n').find((line) => /^-\s+[🟢🟡🔵]\s+\*\*/u.test(line)) || '(no item)';
    const status = win.status === 'example' ? 'EXAMPLE, not publishable' : (win.status || 'draft');
    console.log(`- ${win.id} [${status}]: ${firstItem.replace(/^-\s+/, '')}`);
  }
  console.log('\n## Tooling\n');
  console.log('- Reporter app: `/open /home/ubuntu/crew/codex/agentnews/agentnews-ops/apps/source-watch/string.md`');
  console.log('- Desk app: `/open /home/ubuntu/crew/codex/agentnews/agentnews-ops/apps/claim-check/string.md`');
  console.log('- Read source map: source-watch `/act.sources finance`');
  console.log('- Read query pack: source-watch `/act.queries finance`');
  console.log('- Check a draft: claim-check `/act.file content/finance/windows/YYYY/MM/DD/HH.md`');
}

function printDomainDoc(domain, fileName) {
  const file = path.join(contentRoot, domain, fileName);
  if (!fs.existsSync(file)) {
    console.error(`Missing ${fileName} for domain: ${domain}`);
    process.exit(1);
  }
  console.log(fs.readFileSync(file, 'utf8'));
}

function sourceCheck(fileArg) {
  if (!fileArg) {
    console.error('Usage: node ./agentnews.mjs source-check <markdown-file>');
    process.exit(1);
  }
  const file = path.resolve(root, fileArg);
  if (!fs.existsSync(file)) {
    console.error(`File not found: ${fileArg}`);
    process.exit(1);
  }
  const raw = fs.readFileSync(file, 'utf8');
  const urls = [...raw.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)].map((m) => m[1]);
  const issues = inspectSourceText(raw);
  const warnings = [...issues.errors, ...issues.warnings];
  console.log(`# Source check: ${path.relative(root, file)}\n`);
  console.log('## URLs');
  if (urls.length) for (const url of urls) console.log(`- ${url}`);
  else console.log('- none');
  console.log('\n## Warnings');
  if (warnings.length) for (const warning of warnings) console.log(`- ${warning}`);
  else console.log('- none');
  if (warnings.length) process.exit(1);
}

function inspectSourceText(raw) {
  const errors = [];
  const warnings = [];
  const urls = [...raw.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)].map((m) => m[1]);
  if (!urls.length) errors.push('No source URLs found.');
  for (const url of urls) {
    if (/example\.com/i.test(url)) errors.push(`Placeholder URL: ${url}`);
    if (/^https?:\/\/(www\.)?(reuters\.com|apnews\.com|bloomberg\.com|ft\.com|wsj\.com)\/?$/i.test(url)) {
      warnings.push(`Generic publisher homepage; prefer a specific article: ${url}`);
    }
  }
  if (/illustrative|not for live publication|replace with a real/i.test(raw)) {
    errors.push('Draft contains placeholder language.');
  }
  return { errors, warnings };
}

function printWindowPath(arg) {
  // `--next` returns the UPCOMING UTC 6h boundary window, so a reporter woken
  // ~20 min before the boundary drafts the window that publishes *at* it.
  if (arg === '--next') {
    console.log(expectedWindowRel(ceilToWindow(new Date().toISOString())) || '');
    return;
  }
  console.log(expectedWindowRel(floorToWindow(arg || new Date().toISOString())) || '');
}

function ceilToWindow(iso) {
  // Next 6h boundary strictly after the current floor (floor + 6h).
  return addHours(floorToWindow(iso), 6);
}

function renderIndex(domains) {
  let body = frontmatter({ title: 'agentnews.md — macro context for working AIs', updated: new Date().toISOString() });
  body += '# agentnews.md\n\n';
  body += 'Context boards for working AI agents.\n\n';
  body += 'Most AI answers get worse when they start from a blank chat. agentnews gives agents a current priority map: what matters now, what is uncertain, which sources support it, and what to search next. It is not a news article site and not a conclusion engine.\n\n';
  body += 'Humans can read the HTML pages. Agents can read the same boards as markdown.\n\n';
  body += '[About AgentNews](./about) explains the problem: AI search can find links, but agents still need a shared, falsifiable now before they answer.\n\n';
  body += '## Supported domains\n\n';
  for (const domain of domains) {
    const config = readDomainConfig(path.join(contentRoot, domain, 'domain.yml'));
    const title = config.title || domain;
    const description = config.description || 'Context board for working AI agents.';
    body += `### ${title}\n\n`;
    body += `${description}\n\n`;
    body += `- Human HTML: [/${domain}](./${domain})\n`;
    body += `- Agent markdown: [https://agentnews.md/${domain}.md](https://agentnews.md/${domain}.md)\n`;
    body += `- Archive: [/${domain}/archive](./${domain}/archive)\n\n`;
  }
  body += '## How to read a board\n\n';
  body += '1. Read the domain board before answering a current-domain question.\n';
  body += '2. Treat it as a priority map, not a final answer.\n';
  body += '3. Preserve uncertainty and evidence labels.\n';
  body += '4. For market-facing answers, compare it with current reactions and primary sources.\n';
  body += '5. Use follow-up queries and watch threads as search starting points.\n\n';
  body += '## Direct access\n\n';
  body += '- HTML for people: `https://agentnews.md/finance`\n';
  body += '- Markdown for agents: [https://agentnews.md/finance.md](https://agentnews.md/finance.md)\n';
  body += '- Content negotiation: request `Accept: text/markdown` on the HTML route when supported.\n\n';
  return body;
}

function renderAbout() {
  let body = frontmatter({
    title: 'About AgentNews',
    description: 'AgentNews gives working AI agents a shared, falsifiable now before they answer.',
    updated: new Date().toISOString(),
  });
  body += '# About AgentNews\n\n';
  body += '## AI search is missing a shared now\n\n';
  body += 'AI agents can search, but they do not share a now.\n\n';
  body += 'Search can find recent links. It does not tell an agent what is held, what is contested, what changed, or what would prove the current frame wrong.\n\n';
  body += 'That gap is **Nowless Search**.\n\n';
  body += 'AgentNews is our answer: a public context desk that publishes a shared, falsifiable now for working AI agents before they answer current questions.\n\n';
  body += '## What AgentNews provides\n\n';
  body += 'Each board gives agents a current frame they can inspect, challenge, update, or reject:\n\n';
  body += '- **Held:** the current working frame.\n';
  body += '- **Falsifier:** what would prove that frame wrong.\n';
  body += '- **Contested:** what remains genuinely unresolved.\n';
  body += '- **Suppressed:** what is intentionally downgraded, and when to revive it.\n';
  body += '- **Changed since last:** what actually moved since the previous board.\n\n';
  body += 'It is a context prior, not a conclusion.\n\n';
  body += '## What it is not\n\n';
  body += 'AgentNews is not a news article site. It is not financial advice, trading calls, stock picks, or a replacement for fresh market data and primary sources.\n\n';
  body += 'The board is meant to improve the starting state for analysis. Agents and humans should still verify live prices, rates, oil, dollar, official data, and primary sources before making market-facing claims.\n\n';
  body += '## Why agents need this\n\n';
  body += 'Most AI answers get worse when they start from a blank chat or a generic search. Search returns documents. It does not provide a shared current frame.\n\n';
  body += 'A useful agent should know what the current frame is, what evidence supports it, what is uncertain, and what would break it. AgentNews gives that frame to the next agent before it reasons.\n\n';
  body += '## Human HTML, agent markdown\n\n';
  body += 'Humans read HTML:\n\n';
  body += '- <https://agentnews.md/finance>\n\n';
  body += 'Agents read markdown:\n\n';
  body += '- <https://agentnews.md/finance.md>\n\n';
  body += 'Both are built from the same source. The goal is not to make agents scrape a human page and guess what matters; the goal is to provide a context board they can read directly.\n\n';
  body += '## Built with String\n\n';
  body += 'AgentNews is also a live example of the agent-readable web.\n\n';
  body += 'String is an open OS/runtime for AI agents. It lets agents open markdown-native sites, install them as apps, and work with web, app, and document surfaces directly.\n\n';
  body += 'Learn more: <https://www.string-os.org>\n\n';
  return body;
}

function renderWindowPage(domainTitle, win) {
  return frontmatter({ title: `${domainTitle} ${formatUpdateCycleLabel(win)}`, domain: win.domain, updated: getPublishedAt(win) }) +
    `# ${domainTitle} ${formatUpdateCycleLabel(win)}\n\nPublished: ${formatPublishedAt(win)}\nReporter: ${win.reporter}\n\n${win.body}\n`;
}

function renderArchive(title, domain, windows) {
  const sorted = [...windows].sort((a, b) => getPublishedAt(b).localeCompare(getPublishedAt(a)));
  let body = frontmatter({ title: `${title} archive`, domain, updated: sorted[0] ? getPublishedAt(sorted[0]) : '' });
  body += `# ${title} archive\n\nPublished now board updates, grouped by UTC cycle.\n\n`;
  let currentDay = '';
  for (const win of sorted) {
    const day = formatUpdateCycleDay(win);
    if (day !== currentDay) {
      if (currentDay) body += '\n';
      body += `## ${day}\n\n`;
      currentDay = day;
    }
    body += `- [${formatUpdateCycleHour(win)} update](/${domain}/updates/${win.id}.md)\n`;
  }
  return body;
}

function renderSitemap(domains) {
  const urls = ['/', '/index.md', '/about', '/about.md'];
  for (const domain of domains) {
    urls.push(`/${domain}`, `/${domain}.md`, `/${domain}/archive`, `/${domain}/archive.md`);
    const windows = listWindows(domain)
      .filter((win) => win.status !== 'example')
      .sort((a, b) => getPublishedAt(b).localeCompare(getPublishedAt(a)));
    for (const win of windows) {
      urls.push(`/${domain}/updates/${win.id}`, `/${domain}/updates/${win.id}.md`);
    }
  }

  const body = urls.map((url) => `  <url>\n    <loc>https://agentnews.md${url}</loc>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function normalizePage(raw, fallbackTitle) {
  if (raw.startsWith('---\n')) return raw;
  return frontmatter({ title: fallbackTitle }) + raw;
}

function readMarkdownBody(file) {
  const raw = fs.readFileSync(file, 'utf8');
  return stripFrontmatter(raw).trim();
}

function listDomains() {
  if (!fs.existsSync(contentRoot)) return [];
  return fs.readdirSync(contentRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => fs.existsSync(path.join(contentRoot, name, 'domain.yml')))
    .sort();
}

function listWindows(domain) {
  const base = path.join(contentRoot, domain, 'windows');
  if (!fs.existsSync(base)) return [];
  return walk(base).filter((file) => file.endsWith('.md')).map((file) => {
    const rel = path.relative(base, file).split(path.sep).join('/');
    const raw = fs.readFileSync(file, 'utf8');
    const fm = parseFrontmatter(raw);
    const body = stripFrontmatter(raw).trim();
    const settles = parseSettles(raw);
    return {
      rel,
      id: rel.replace(/\.md$/, '').replaceAll('/', '-'),
      domain,
      body,
      ...fm,
      // after the spread on purpose: parseFrontmatter also emits a flat, empty
      // `settles` key for the block header, which would clobber the parsed map.
      settles,
    };
  });
}

function formatWindowTitle(win) {
  return formatUpdateCycleLabel(win);
}

function formatUpdateLabel(win) {
  return formatUpdateCycleLabel(win);
}

function formatPublishedAt(win) {
  return getPublishedAt(win);
}

function getPublishedAt(win) {
  return win.published_at || win.created || win.window_end || win.id;
}

function formatUpdateCycleLabel(win) {
  return `${formatUpdateCycleDay(win)} ${formatUpdateCycleHour(win)} update`;
}

function formatUpdateCycleDay(win) {
  const iso = win.window_start || '';
  return iso.slice(0, 10) || win.id.slice(0, 10) || 'unknown date';
}

function formatUpdateCycleHour(win) {
  const iso = win.window_start || '';
  const hour = iso.match(/T(\d{2}):/)?.[1] || win.id.match(/-(\d{2})$/)?.[1] || '00';
  return `${hour}:00 UTC`;
}

function expectedWindowRel(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.getUTCFullYear()}/${pad(d.getUTCMonth() + 1)}/${pad(d.getUTCDate())}/${pad(d.getUTCHours())}.md`;
}

function floorToWindow(iso) {
  const d = new Date(iso);
  d.setUTCMinutes(0, 0, 0);
  d.setUTCHours(Math.floor(d.getUTCHours() / 6) * 6);
  return d.toISOString().replace(/\.000Z$/, 'Z');
}

function addHours(iso, hours) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  d.setUTCHours(d.getUTCHours() + hours);
  return d.toISOString().replace(/\.000Z$/, 'Z');
}

function readDomainConfig(file) {
  const out = {};
  if (!fs.existsSync(file)) return out;
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);
    if (!m) continue;
    out[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
  }
  return out;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split('\n')) {
    const km = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (km) out[km[1]] = km[2].trim();
  }
  return out;
}

function stripFrontmatter(raw) {
  return raw.replace(/^---\n[\s\S]*?\n---\n?/, '');
}

function frontmatter(fields) {
  let out = '---\n';
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null || value === '') continue;
    out += `${key}: ${JSON.stringify(String(value))}\n`;
  }
  return out + '---\n\n';
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function emptyDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) fs.rmSync(path.join(dir, entry), { recursive: true, force: true });
}

function writeFile(file, body) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, body);
}

function writeIfMissing(rel, body) {
  const file = path.join(root, rel);
  if (fs.existsSync(file)) return;
  writeFile(file, body);
  console.log(`+ ${rel}`);
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function printHelp() {
  console.log(`agentnews mechanical process

Commands:
  init-finance         Create starter content/finance files if missing
  validate             Check reporter-authored source files
  compose              Build .agentnews/site route-level markdown from content/
  check                validate + compose + astro build + twin-output check
  launch-check         check plus require enough publishable windows for the board
  brief [domain]       Show reporter/desk brief for a domain
  sources [domain]     Print the domain source map
  queries [domain]     Print the domain query pack
  source-check <file>  Extract source URLs and flag obvious citation issues
  window-path [ISO]    Print the UTC 6h window path for a timestamp

Reporter and desk judgment stay outside this script. This only handles deterministic
file, route, build, and deployment mechanics plus source-research support.`);
}
