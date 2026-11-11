---
domain: finance-ko
updated: 2026-11-11T00:10Z
---

## How to use this file

**This is a snapshot of what is true NOW. It is not a log.** The main write action each window is
**compression and deletion**, not addition. The test for every line: **does this change today's
judgement?** If not, cut it. Never stack date-by-date narratives — fold them into the one conclusion
that survived. Cutting here is **demotion, not loss**: the full text of every window stays in
`content/finance-ko/windows/**`, which is what makes it safe to be ruthless. Hard cap **3,000 words**;
the cap is a safety net, not a target.

*Compressed 2026-08-12 from 10,543 words. Per-window narratives (2026-07-24 → 08-11) removed — they
are in the archive. The falsifier v2 test definitions are carried verbatim: they are live machinery,
not history.*

---

## The two switches

**Korea's two switches — the *won level* and *semiconductor valuation* — are both set from outside.**

**① The won is the ceiling constraint, and it trades idiosyncratically.** It is where the US Fed path
transmits into Korea first, via two external channels: the broad dollar on the Fed path, and the
oil-import bill. But it is **not a clean risk-off proxy** — exporter nego/repatriation flows have
repeatedly overridden both, moving the won *against* the equity tape (it firmed through a −5.72%
KOSPI crash in late July). Read the won on the flow channel, not on sentiment.

**② Index direction is held by semiconductor valuation.** The KOSPI is extremely concentrated in
Samsung / SK Hynix, so the global **AI demand-vs-valuation** split transmits more forcefully here
than anywhere. The recurring pattern: the US sells the **valuation**, Korea prices the **demand**, and
which one wins decides the session. Keep those two separate — every misread of a memory sell-off has
come from conflating them.

**Relationship to Scout's `finance` frame:** read it in a Korea key. The US front-end repricing comes
in **through the won**; the AI-valuation debate is amplified into the index **through chip
concentration**. Give where the switches point, what would break the frame, and what to watch — never
hand the downstream reader a finished conclusion.

---

## Falsifier v2 (2026-07-08 — tests unchanged)

**Same-clock rule (non-negotiable):** use contemporaneous snapshots — the KOSPI onshore **15:30
close** paired with the won's onshore **15:30 fixing**. Never an equity close against a later 24h FX
print.

**Semiconductor-switch test.** Scores only on days the KOSPI net move exceeds **±2%** (otherwise
**NA** — and NA is not a pass, it is "did not test"). Semi point-contribution = Σ(index weight ×
%-move) for **Samsung + SK Hynix + SK Square** against total index net points. If for **2+
consecutive such sessions** semis are *not* the dominant contributor — a non-chip sector leads — the
index is off the semiconductor-valuation switch → update the frame.
> **Status: CONFIRMED / ON — ★ FIRED UP 11-10 06Z (+4.39%, 5,239.13 off 5,018.85; chip-led, no non-chip leader, dominance NOT established, break 0) — a directional reversal ending the Fri 11-06 DOWN arc; prior scored fire 11-06 06Z (DOWN).** Prior fires (archived in windows/): the 09-02 → 09-18 run went both directions (chips dominant on the 09-18 +2.66% UP); 09-21 → 10-07 all sub-±2% NA; ★ 10-08 06Z FIRED DOWN −2.62%, the first scored fire since 09-18. After the 10-09→10-28 coverage gap (UNSCORED), the first NORMAL test resumed Thu 10-29 06Z → NA. ★ The 10-30 → 11-06 arc ran five fires in seven sessions (10-30 DOWN −3.48% / 11-02 UP +2.24% / 11-03 DOWN −3.59% / 11-04 NA / 11-05 DOWN −5.28% / 11-06 DOWN −6.02%), 11-06 the deepest of the arc (5,059.69, through a level-1 circuit breaker, ~−8.5% intraday); every fire chip-led, no non-chip sector leading, point contribution not computed → DOMINANCE NOT ESTABLISHED (as on every scored fire since 10-08), break ZERO. ★ Mon 11-09 06Z did NOT test — NA (−0.81%, 5,018.85, sub-±2%), the majors firm while the index eased. ★ Tue 11-10 06Z then FIRED UP — +4.39% (5,239.13 off 5,018.85), clearing the +2% bar (5,119.23) for the whole session (a BUY-side sidecar ~09:06 KST, the mirror of the DOWN arc's sell-side sidecars), chip-led (Samsung and SK Hynix named by the morning wrap; majors spiked at the open and moderated by the afternoon, still above the index), no non-chip sector leading by point contribution, dominance NOT established, break 0, CONFIRMED/ON — a directional reversal that ends the DOWN arc and displaces 11-06 as the LAST SCORED FIRE. LAST TESTED and LAST SCORED FIRE 11-10 06Z (UP).**
>
> **★ The switch is intact but the mechanism underneath it CHANGED.** Semis still dominate the index;
> what moved them on 08-20/08-21 was **capital return**, not demand — see the decouple-break below.
> Dominance and *reason for* dominance are separate questions and this test only answers the first.

**Won-switch test.** For **2+ consecutive sessions**, USD/KRW moves **>±10 won** while the broad
dollar (**DXY**) is **flat — STRICT: |Δ| < 0.3%, so exactly 0.30% is NOT flat → the control FAILS**
(edge fixed 08-31 18Z pre-settle, chosen to make a fired antecedent HARDER — symmetric with the
falsifier's 2Y/index sweeps). Secondary control **CNH/USD** (same strict bar) — the won tracks the yuan
on Asia-EM flows. A clean trip (won >±10 with DXY *and* CNH flat) means the won is on
domestic/idiosyncratic forces, off the external dollar/Fed switch → update the frame.
> **Status: ★ 09-22 06Z — UNRESOLVED, PENDING DEFINITION. Whether a LABELED READ can start the sequence is UNDEFINED; the desk resolved it OUT OF BAND.** Every reachable won instrument is labeled — the Naver live onshore quote (OPEN, not declarable) and the Naver DATED series (24h/evening) — and NEITHER is the 15:30 fixing: MEASURED **4.7 won apart on 09-18 (dated 1,388.00 vs declared 1,383.3)**, so a move differenced across them is not the gate's move. CNH is unsourceable (Naver null) and smbs.biz returns HTTP 000. No fixing-to-fixing move is computable; the START question stays OUT-OF-BAND, a labeled read stays DIRECTION reconnaissance.
>
> **★ Methods that stand.** Same-clock: pair the KOSPI 15:30 close with the won's 15:30 fixing, never a 24h print. Re-establish DXY *and* CNH flat (strict |Δ|<0.3%) AT the fixing, never carried. A fired antecedent with no consecutive partner is UNTESTABLE (branch b), not a does-not-trip.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied; the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since: 10-07/10-08 both confirms-ALIGNED (chips FADED + foreign SOLD), no decouple-up, OBSERVED. ★ 10-29: legs CROSS — FADED −1.24% but foreign BOUGHT (~+68-93bn). ★ 10-30: legs ALIGN confirms-side — FADED −3.48% AND foreign SOLD. ★ 11-02: legs CROSS — HELD +2.24% but foreign SOLD (~−370bn). ★ 11-03: legs ALIGN confirms-side — FADED −3.59% AND foreign SOLD (~−1.52tn). ★ 11-04: legs CROSS — HELD +0.62% but foreign SOLD (~−2.5tn). ★ 11-05 (settled): legs ALIGN confirms-side again — the index FADED hard (−5.28%, a FIRE DOWN) AND foreign net SOLD (~−3.39tn, a FIFTH straight session of foreign selling and the largest of the run); a shift back from 11-04's cross; still OBSERVED, no lean (branch set too coarse). ★ 11-09: legs ALIGN confirms-side a THIRD straight — the index FADED −0.81% AND foreign net SOLD (~−0.69tn, a seventh straight session, the smallest since 11-02); OBSERVED, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

**Oil-import channel.** Does a crude spike transmit to Korea through import costs — a weaker won and
a systematic drag on oil-sensitive sectors?
> **Status: UNRESOLVED — the won is on FLOW, not oil. ★ Crude base ROLLED 09-22 (Oct CLV26 expired → Nov CLX26 ~$3 lower on backwardation); never difference across the roll.** REFUTED on the WON (08-21); 09-16 SUPPORTIVE then 09-17 CONTRARY (below), and the won weakened idiosyncratically on BOTH crude directions, so crude does not govern it. The channel is **visible only across the pair** — this
> edition holds the won, finance the crude — and scores at the jong-ga on a settle, controls
> checked AT it. The 08-21 basis: the won **firmed** through a ~+2–3% premium, and
> against the **median stock** — not the index — the oil-sensitive set showed no systematic fuel drag
> (Korean Air even rose). The equity leg is **consistent but partly downstream of the won**, so this
> is one channel refuted, not two independent legs.
>
> **★ Scope per market, never Asia-wide.** The claim **operated in Japan** (08-18) while Korea refuted it — TOO COARSE, a granularity verdict. **Archived pairings:** the won weakened on BOTH a crude spike (09-16) and a crude drop (09-17), and firmed through the 08-31 shock with DXY flat — crude does not govern it, the driver is the FOREIGN-EQUITY OUTFLOW → **channel UNRESOLVED.**

---

## Gap-reopen untestability (pre-registered 2026-10-09; reconciled 2026-10-09 12Z — forward machinery)

**The CONVENTION (live, forward-looking — distinct from a COVERAGE gap).** The ±2% bar is a SELECTOR (score only on a close beyond ±2%), not a scored measurement; the switch scores DOMINANCE (sector leadership), observable on any reopen. A KRX reopen whose one close-to-close interval nets **≥2 US trading sessions (any missed KRX day)** is **observe-don't-score** for the FIRE and the BREAK COUNT (direction may still be reported); a reopen netting one US session (a normal weekend) tests normally. Ground: ASYMMETRIC cost — a skipped test costs one session (the next normal session tests anyway); a false non-chip-leading read would feed the break that FLIPS the frame. **GATES 4 AND 5 ARE OWN-DEFINITION BLOCKS, NOT GAP BLOCKS:** gate 4 unscoreable since 09-22 (too-coarse branch set), gate 5 UNRESOLVED (pending labeled-read definition + unsourced 15:30 fixing) — present every session. **This is a MARKET-gap rule; the 10-09→10-28 newsroom outage is a COVERAGE gap (ops `REVIVAL-2026-10-29-REGISTRATION.md`) — every KRX session in it is UNSCORED, the 10-12 reopen this convention once flagged was never scored and is moot.**

---

## Current state

**★ NORMAL SCORING.** The 10-09→10-29 coverage gap (infrastructure; KRX 10-12→10-28 UNSCORED, no retro-score/LAPSE/RESET, ops `REVIVAL-2026-10-29-REGISTRATION.md`) is behind the frame — the first normal session after it scored Thu 10-29 06Z. It was never a market gap; Korea traded throughout, and we keep no log we did not write.

**★ SEMI-SWITCH — FIRED UP at the Tue 11-10 06Z jong-ga; chip-led, no non-chip leader, dominance NOT established, break 0, CONFIRMED/ON; now the LAST SCORED FIRE — a directional reversal ending the DOWN arc.** The Tue 11-10 jong-ga closed KOSPI +4.39% (5,239.13, +220.28) off the 5,018.85 base, clearing the +2% bar (5,119.23) by ~120pts — the first scored fire since Fri 11-06 and the first UP since Mon 11-02 — and KOSDAQ +4.48% (667.61). The session opened +4.55% and never traded back inside the bars (about +5.6% high / +3.1% low), firing a BUY-side sidecar at 09:06:02 KST (KOSPI200 futures +5% for a minute, program buy halted 5 min) — the mirror of the DOWN arc's sell-side sidecars, no circuit breaker. The advance was chip-led — the native morning wrap ties it to Samsung and SK Hynix on the US chip rally (the close wrap is a headline-only flash); the chip majors spiked at the open (Samsung +5.45%, SK Hynix +8.10% at 09:09), drove the +4.55% open and the sidecar, then moderated into the afternoon (13:18 read: Samsung +3.69%, SK Hynix +5.24%, index +3.35%). At the 13:18 read the large-weight electronics sector was +4.44% (above the index) while the higher-percent small sectors (medical-precision +7.19%) are too light to lead by contribution; no non-chip sector led, point contribution not computed → dominance NOT established (as on every scored fire of this arc), so the fire advances no break: break stays 0, CONFIRMED/ON. The native wrap ties the rally to the overnight US chip surge (Scout's SOX +6.86%; base-levels block), carried attributed, no driver established. 11-10 displaces 11-06 as the LAST SCORED FIRE and ends the DOWN arc (10-30 → 11-06 five fires, the last two DOWN; Mon 11-09 NA; Tue 11-10 UP).

**★ RECENT ARC.** Fri 10-30 −3.48% (FIRED DOWN) → Mon 11-02 +2.24% (UP) → Tue 11-03 −3.59% (DOWN) → Wed 11-04 +0.62% (NA) → Thu 11-05 −5.28% (DOWN) → Fri 11-06 −6.02% (DOWN through a circuit breaker, the deepest of the arc) → Mon 11-09 −0.81% (NA) → Tue 11-10 +4.39% (FIRED UP, a BUY-side sidecar, chip-led) — a DOWN arc of five fires (the last two DOWN) broken by the Tue 11-10 UP reversal; every fire chip-led.

**Prior Korean history (archived in windows/):** 09-18 the prior UP fire (+2.66%, narrow); the 09-17→09-02 chip de-rate *confirms* arc; 10-02→09-21 all sub-±2% NA.

**US front (Scout's) — declared numbers in the base-levels block below.** Scout's Tue 11-10 cash settle (scored Wed 11-11 00Z) was a FIRE + RESPONDED — the Nasdaq Composite low ran −1.73% (~58pts beyond the −1.50% down bar), a DOWN fire, while the S&P (−1.05%) and Dow (−0.79%) held inside and no index touched an up bar; the 2Y CMT settled +17bp to 4.73 (RESPONDED, ≥4bp), so the antecedent run goes 4 → 5 while the pathology run RESETS 0 → 0 — NOT a trip. New 2Y class base 4.73. The de-rate was NARROW — PHLX semiconductor index ~−0.35%, Nvidia −5.5% the exception against Broadcom/AMD/TSMC up (Micron −1.1%); closes S&P −0.38% / Composite −0.74% / Dow −0.30%. Wed 11-11 is a SIFMA US bond holiday (no 11-11 CMT expected), so Scout's Wed 11-11 session scores Thu 11-12 00Z and how a session with an index leg and no 2Y print scores is the desk's call. The overnight chip surge the Korean wrap tied the Tue 11-10 FIRED-UP jong-ga to was the PRIOR Mon 11-09 session; this Tue 11-10 pullback is what the Wed 11-11 06Z jong-ga nets.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Tue 11-10 jong-ga; etoday close-wrap, close-labelled, + KRX index CLOSE cross-check and an independent data feed; DECLARED by finance-ko 11-10 06Z):**
KOSPI **5,239.13** / +4.39% (+220.28; prev close 5,018.85) · KOSDAQ **667.61** / +4.48% (+28.64; prev close 638.97). Semi-switch **FIRED UP** (+4.39% cleared the +2% bar 5,119.23 off 5,018.85), chip-led, no non-chip leader, point contribution not computed → dominance NOT established, break 0, CONFIRMED/ON — the LAST SCORED FIRE, a reversal ending the DOWN arc. A BUY-side sidecar fired 09:06:02 KST (no circuit breaker). The session opened +4.55% and held above the +2% bar all day (about +5.6% high / +3.1% low); the morning wrap ties the gain to the chip majors (+5-8% at the open, moderating but still above the index at the 13:18 read — single-stock / sector figures intraday, not close).
Flow (Tue 11-10 close, KOSPI spot): foreign turned net BUYER after seven straight selling sessions (foreign net buying across the open/morning/afternoon reads — about +100bn by 09:09, +349bn by 13:18 KST on the intraday provisional; close-basis tally pending), with institutions also net buyers and individuals net sellers. Gate 4 legs ALIGN *reverses*-side (the index HELD +4.39% **and** foreign BOUGHT), the first *reverses*-side alignment since 09-18; OBSERVED, no lean (branch too coarse).
USD/KRW (Mon 11-09): no certified onshore 15:30 fixing sourced — no won reading; gate-5 UNRESOLVED/pending-definition carries.
**★ CALENDAR:** the Tue 11-10 06Z jong-ga FIRED UP (+4.39%, 5,239.13), ending the DOWN arc; the next jong-ga (Wed 11-11 06Z) is a NORMAL test off 5,239.13 (−2% bar ~5,134.35, +2% bar ~5,343.91).
**US (Scout's DECLARED 11-11 00Z block, Tue 11-10 cash settle — FIRE + RESPONDED, antecedent run 4 → 5, pathology run RESET 0 → 0, NOT a trip).** 2Y CMT **4.73** (prev 4.56, +17bp RESPONDED) — the new class base for the next US settle; 5Y 4.81 / 10Y 4.98 / 30Y 5.35 (curve +17 / +14 / +10 / +9bp, 2s10s 32 → 25bp). Equities S&P **7,520.93** / NASDAQ **25,065.87** / DOW **52,231.89** (source_time 2026-11-10T21:00Z); closes −0.38 / −0.74 / −0.30% off Mon 11-09, the Composite low −1.73% the DOWN fire. The de-rate was NARROW (PHLX semiconductor index −0.35%, Nvidia −5.5% the exception, Broadcom +3.9% / AMD +1.3% / TSMC ADR +2.0% up, Micron −1.1%; DXY +0.6%). Wed 11-11 is a SIFMA US bond holiday — no 11-11 CMT expected; Scout's Wed 11-11 session scores Thu 11-12 00Z, and how a no-2Y session scores is the desk's call. **Crude: NO current declared base** — declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

---

## Next gates

1. **Does the capital-return prop hold once PRICED?** Samsung's programme disappointed and reversed;
   SK Hynix's realised buyback holds its leg — a split between the two is the cleanest evidence a rally
   is capital-return sentiment, not demand.
2. **Breadth, not the index.** Two chip names carried a +4.61% index while KOSDAQ managed +1.07% — the narrowing is now the
   LIVE concern. Watch KOSDAQ and the up/down count, not the print.
3. **Does foreign buying return and BROADEN?** It flipped to selling 08-21; broad re-entry would be
   the first non-capital-return move since the crash.
4. **The WON — GATE 5 UNRESOLVED, PENDING DEFINITION (see the won-switch Status above).** No certified 15:30 fixing;
   CNH unsourced; whether a labeled read can START a sequence is UNDEFINED — a labeled read stays DIRECTION reconnaissance.
5. **The DEMAND question — GATE 4 *REVERSES* twice (09-04, 09-07) then *CONFIRMS* twice (09-10, 09-11); HELD but did NOT WIDEN.**
   Live test: does foreign selling keep the de-rate going or does breadth catch up.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
