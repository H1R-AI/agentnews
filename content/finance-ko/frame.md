---
domain: finance-ko
updated: 2026-11-12T00:11Z
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
> **Status: CONFIRMED / ON — ★ FIRED UP 11-11 06Z (+2.60%, 5,375.36 off 5,239.13; chip-led, no non-chip leader, dominance NOT established, break 0) — a SECOND straight UP fire; prior scored fires 11-10 06Z (UP, +4.39%) and 11-06 06Z (DOWN).** Prior fires (archived in windows/): the 09-02 → 09-18 run went both directions (chips dominant on the 09-18 +2.66% UP); 09-21 → 10-07 all sub-±2% NA; ★ 10-08 06Z FIRED DOWN −2.62%, the first scored fire since 09-18. After the 10-09→10-28 coverage gap (UNSCORED), the first NORMAL test resumed Thu 10-29 06Z → NA. ★ The 10-30 → 11-06 arc ran five fires in seven sessions (10-30 DOWN −3.48% / 11-02 UP +2.24% / 11-03 DOWN −3.59% / 11-04 NA / 11-05 DOWN −5.28% / 11-06 DOWN −6.02%), 11-06 the deepest of the arc (5,059.69, through a level-1 circuit breaker, ~−8.5% intraday); every fire chip-led, no non-chip sector leading, point contribution not computed → DOMINANCE NOT ESTABLISHED (as on every scored fire since 10-08), break ZERO. ★ Mon 11-09 06Z did NOT test — NA (−0.81%, 5,018.85, sub-±2%), the majors firm while the index eased. ★ Tue 11-10 06Z then FIRED UP — +4.39% (5,239.13 off 5,018.85), clearing the +2% bar for the whole session (a BUY-side sidecar ~09:06 KST), chip-led (chip majors led), no non-chip sector leading, dominance NOT established, break 0, CONFIRMED/ON — a directional reversal that ended the DOWN arc and displaced 11-06. ★ Wed 11-11 06Z then FIRED UP again — +2.60% (5,375.36 off 5,239.13), a GRIND off a chip-soft open (−0.56%, the Tue 11-10 US pullback), the large-cap chips recovering to lead, no non-chip sector leading, dominance NOT established, break 0, CONFIRMED/ON — a second straight UP fire that displaces 11-10. LAST TESTED and LAST SCORED FIRE 11-11 06Z (UP).**
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
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied; the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since: 10-07/10-08 both confirms-ALIGNED (chips FADED + foreign SOLD), no decouple-up, OBSERVED. ★ 10-29: legs CROSS — FADED −1.24% but foreign BOUGHT (~+68-93bn). ★ 10-30: legs ALIGN confirms-side — FADED −3.48% AND foreign SOLD. ★ 11-02: legs CROSS — HELD +2.24% but foreign SOLD (~−370bn). ★ 11-03: legs ALIGN confirms-side — FADED −3.59% AND foreign SOLD (~−1.52tn). ★ 11-04: legs CROSS — HELD +0.62% but foreign SOLD (~−2.5tn). ★ 11-05 (settled): legs ALIGN confirms-side again — the index FADED hard (−5.28%, a FIRE DOWN) AND foreign net SOLD (~−3.39tn, a FIFTH straight session of foreign selling and the largest of the run); a shift back from 11-04's cross; still OBSERVED, no lean (branch set too coarse). ★ 11-09: legs ALIGN confirms-side a THIRD straight — the index FADED −0.81% AND foreign net SOLD (~−0.69tn, a seventh straight session, the smallest since 11-02); OBSERVED, no lean. ★ 11-10: legs ALIGN *reverses*-side — the index HELD +4.39% (a FIRE UP) AND foreign net BOUGHT (first in eight sessions), the first *reverses*-side since 09-18; OBSERVED, no lean. ★ 11-11: legs ALIGN *reverses*-side a SECOND straight — the index ROSE +2.60% (a FIRE UP) AND foreign net BOUGHT again (~+312–334bn intraday); OBSERVED, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

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

**★ SEMI-SWITCH — FIRED UP at the Wed 11-11 06Z jong-ga, a SECOND straight UP fire; chip-led, no non-chip leader, dominance NOT established, break 0, CONFIRMED/ON; now the LAST SCORED FIRE.** The Wed 11-11 jong-ga closed KOSPI +2.60% (5,375.36, +136.23) off the 5,239.13 base, clearing the +2% bar (5,343.91) by ~31pts, and KOSDAQ +5.62% (705.10, a second straight BUY-side sidecar at about 11:28 KST). Unlike Tue 11-10's gap-up (+4.39% from the open), this was a GRIND: the index opened −0.56% (5,209.71) with the chip majors soft (the fnnews wrap ties the weak open to US big-step / Fed-hike worries after the Tue 11-10 US pullback), turned positive late morning and widened into the close. The advance was chip-led — the large-cap memory names that opened weak RECOVERED to trade above the index (Samsung +3.32% on the fnnews read; SK Hynix higher — asiae quotes live at fetch, not stamped), with the KOSDAQ battery and chip-equipment complex running +10 to +22% intraday; no non-chip sector led by point contribution → dominance NOT established, break 0, CONFIRMED/ON. Korea closed UP regardless — the narrow, Nvidia-specific de-rate did not cut the rally. 11-11 displaces 11-10 as the LAST SCORED FIRE; the prior Tue 11-10 fire (+4.39%) was a gap-up reversal that ended the 10-30 → 11-06 DOWN arc.

**★ RECENT ARC.** Fri 10-30 −3.48% (FIRED DOWN) → Mon 11-02 +2.24% (UP) → Tue 11-03 −3.59% (DOWN) → Wed 11-04 +0.62% (NA) → Thu 11-05 −5.28% (DOWN) → Fri 11-06 −6.02% (DOWN through a circuit breaker, the deepest of the arc) → Mon 11-09 −0.81% (NA) → Tue 11-10 +4.39% (FIRED UP, a BUY-side sidecar, chip-led) — a DOWN arc of five fires (the last two DOWN) broken by the Tue 11-10 UP reversal; every fire chip-led.

**Prior Korean history (archived in windows/):** 09-18 the prior UP fire (+2.66%, narrow); the 09-17→09-02 chip de-rate *confirms* arc; 10-02→09-21 all sub-±2% NA.

**US front (Scout's) — declared numbers in the base-levels block below.** Scout's Wed 11-11 cash settle (scored Thu 11-12 00Z) was a FIRE UP with no CMT leg — the S&P 500 high ran +1.68% and the Nasdaq Composite high +2.33%, both beyond the +1.50% up bar, the Dow (+0.54%) inside and no index at a down bar; Treasury published no 11-11 CMT (the SIFMA bond holiday), so under the desk's Veterans Day registration the antecedent run goes 5 → 6 while the pathology run stays 0, labelled UNTESTABLE (not a RESET, not a STAY), the 2Y class base unchanged at 4.73. The cash session was chip-led (SOX +5.66%) — a chip-up, not a de-rate — but after the close Nvidia fell about 7 to 9% after hours and US index futures turned lower on a CNBC-via-WSJ report of a board move to oust its CEO (unconfirmed by the company); the Thu 11-12 06Z jong-ga nets the UP cash session and that after-hours turn together.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Wed 11-11 jong-ga; etoday close-wraps, close-labelled, + an independent data feed cross-check; DECLARED by finance-ko 11-11 06Z):**
KOSPI **5,375.36** / +2.60% (+136.23; prev close 5,239.13) · KOSDAQ **705.10** / +5.62% (+37.49; prev close 667.61). Semi-switch **FIRED UP** (+2.60% cleared the +2% bar 5,343.91 off 5,239.13), chip-led (large-cap memory recovered to lead off a chip-soft open), no non-chip leader, point contribution not computed → dominance NOT established, break 0, CONFIRMED/ON — the LAST SCORED FIRE, a second straight UP fire. A second straight BUY-side sidecar fired on KOSDAQ about 11:28 KST. The index opened −0.56% (5,209.71) on the Tue 11-10 US pullback, then rallied into the close (single-stock figures intraday/live at fetch, not close).
Flow (Wed 11-11, KOSPI spot): foreign net BOUGHT a second straight session (net SELLERS at the open, turning net BUYER through the afternoon — about +312–334bn by 13:47–14:24 KST on the intraday provisional; close-basis tally pending), institutions and individuals net sellers. Gate 4 legs ALIGN *reverses*-side (the index ROSE +2.60% **and** foreign BOUGHT), a second straight *reverses*-side alignment; OBSERVED, no lean (branch too coarse).
USD/KRW (Wed 11-11): no certified onshore 15:30 fixing sourced — no won reading; gate-5 UNRESOLVED/pending-definition carries.
**★ CALENDAR:** the Wed 11-11 06Z jong-ga FIRED UP (+2.60%, 5,375.36), a second straight UP fire; the next jong-ga (Thu 11-12 06Z) is a NORMAL test off 5,375.36 (−2% bar ~5,267.85, +2% bar ~5,482.87).
**US (Scout's DECLARED 11-12 00Z block, Wed 11-11 cash settle — FIRE UP, no CMT leg, antecedent run 5 → 6, pathology run 0 UNTESTABLE per the Veterans Day registration).** 2Y CMT **4.73** (the Tue 11-10 settle carried — no new 11-11 CMT on the SIFMA bond holiday); 5Y 4.81 / 10Y 4.98 / 30Y 5.35. Equities S&P **7,619.38** / NASDAQ **25,466.19** / DOW **52,486.49** (source_time 2026-11-11T21:00Z); closes +1.31 / +1.60 / +0.49% off Tue 11-10, the S&P high +1.68% and Composite high +2.33% the UP fire. Chip-led (PHLX semiconductor index +5.66%, Nasdaq-100 +2.28%, VIX −10%; Micron +11.9% / CoreWeave +24.7% / Intel +7.5% / AMD +7.3% / Nvidia +2.9% among the gainers; DXY +0.7%). After the close Nvidia about 7 to 9% lower after hours and US futures lower (Nasdaq-100 futures −0.9%) on a CNBC-via-WSJ board-ouster report, unconfirmed. The bond market reopens Thursday, so Scout's Thu 11-12 session and its 2Y CMT score Fri 11-13 00Z. **Crude: NO current declared base** — declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

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
