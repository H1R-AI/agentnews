---
domain: finance-ko
updated: 2026-11-17T07:14Z
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
> **Status: CONFIRMED / ON — ★ FIRED DOWN 11-17 06Z (−2.59%, 4,968.48 off 5,100.50; large-cap-led but NOT chip-concentrated — Samsung ~−3.30% steeper, SK Hynix ~−1.96% and KOSDAQ −2.34% shallower, the memory majors SPLIT, no non-chip leader, dominance NOT established, break 0) — a SECOND straight DOWN fire, displacing 11-16; prior scored fires 11-16 06Z (DOWN, −3.59%), 11-11 06Z (UP, +2.60%), 11-10 06Z (UP, +4.39%).** Prior fires (archived in windows/): the 09-02 → 09-18 run went both directions; 09-21 → 10-07 all sub-±2% NA; ★ 10-08 06Z FIRED DOWN −2.62%; after the 10-09→10-28 coverage gap (UNSCORED) the first NORMAL test resumed Thu 10-29 06Z → NA. ★ The 10-30 → 11-06 arc ran five DOWN-dominant fires in seven sessions (11-06 the deepest, through a level-1 circuit breaker, ~−8.5% intraday); every fire chip-led, dominance NOT ESTABLISHED, break ZERO. ★ 11-09 NA (−0.81%). ★ Tue 11-10 06Z FIRED UP +4.39% (chip-led, a BUY-side sidecar) and ★ Wed 11-11 06Z FIRED UP +2.60% (a second straight), dominance NOT established, break 0, ending the DOWN arc. ★ 11-12 (−0.61%) and 11-13 (−0.98%, 5,290.53) NA, two straight non-tests. ★ Mon 11-16 06Z FIRED DOWN −3.59% (5,100.50 off 5,290.53), chip-led but broad (KOSDAQ −4.86% harder), dominance NOT established, break 0, resuming the DOWN side after the 11-10/11-11 UP fires. ★ Tue 11-17 06Z FIRED DOWN again — −2.59% (4,968.48 off 5,100.50), large-cap-led but NOT chip-concentrated (Samsung ~−3.30% steeper, SK Hynix ~−1.96% and KOSDAQ −2.34% shallower — the memory majors SPLIT), no non-chip leader, dominance NOT established, break 0, CONFIRMED/ON — a SECOND straight DOWN fire, displacing 11-16; the KOSPI's first close below 5,000 in ~9 months. LAST SCORED FIRE 11-17 06Z (DOWN); LAST TESTED 11-17.**
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
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied; the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since: 10-07/10-08 both confirms-ALIGNED (chips FADED + foreign SOLD), no decouple-up, OBSERVED. ★ 10-29: legs CROSS — FADED −1.24% but foreign BOUGHT (~+68-93bn). ★ 10-30: legs ALIGN confirms-side — FADED −3.48% AND foreign SOLD. ★ 11-02: legs CROSS — HELD +2.24% but foreign SOLD (~−370bn). ★ 11-03: legs ALIGN confirms-side — FADED −3.59% AND foreign SOLD (~−1.52tn). ★ 11-04: legs CROSS — HELD +0.62% but foreign SOLD (~−2.5tn). ★ 11-05: legs ALIGN confirms-side — FADED −5.28% (a FIRE DOWN) AND foreign SOLD (~−3.39tn, the largest of the run); OBSERVED, no lean. ★ 11-09: legs ALIGN confirms-side a THIRD straight — the index FADED −0.81% AND foreign net SOLD (~−0.69tn, a seventh straight session); OBSERVED, no lean. ★ 11-10: legs ALIGN *reverses*-side — the index HELD +4.39% (a FIRE UP) AND foreign net BOUGHT (first in eight sessions), the first *reverses*-side since 09-18; OBSERVED, no lean. ★ 11-11: legs ALIGN *reverses*-side a SECOND straight — the index ROSE +2.60% (a FIRE UP) AND foreign net BOUGHT again (~+312–334bn intraday); OBSERVED, no lean. ★ 11-12: legs CROSS — the index FADED −0.61% (NA) BUT foreign net BOUGHT (a third straight foreign net-buy day; institutions the heavy seller), ending the two-session *reverses*-side run; OBSERVED, no lean. ★ 11-13: legs ALIGN confirms-side — the index FADED −0.98% (NA) AND foreign net SOLD (ending the three-session net-buy run); OBSERVED, no lean. ★ 11-16: legs ALIGN confirms-side a SECOND straight — the index FADED −3.59% (a FIRE DOWN) AND foreign net SOLD (~−1.4 to −1.5tn). ★ 11-17: legs ALIGN confirms-side a THIRD straight — the index FADED −2.59% (a FIRE DOWN) AND foreign net SOLD (~−1.45tn the main driver; institutions and individuals bought); OBSERVED, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

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

**★ SEMI-SWITCH — FIRED DOWN at the Tue 11-17 06Z jong-ga, a SECOND straight; large-cap-led but NOT chip-concentrated, no non-chip leader, dominance NOT established, break 0, CONFIRMED/ON; now the LAST SCORED FIRE.** The Tue 11-17 jong-ga closed KOSPI −2.59% (4,968.48) off the 5,100.50 base — below the −2% down bar (4,998.49), large-cap-led but the leadership SPLIT: Samsung ~−3.30% steeper than the index while SK Hynix ~−1.96% and KOSDAQ −2.34% (650.06) fell shallower — the memory majors diverged, so the fall read less chip-concentrated than Monday's; no non-chip leader and point contribution uncomputed (no sourced weights) → dominance NOT established, break 0, CONFIRMED/ON. It is the KOSPI's first close below 5,000 in ~9 months (carried attributed). 11-17 displaces the Mon 11-16 FIRED-DOWN as the LAST SCORED FIRE — two straight DOWN fires (−3.59% then −2.59%) now sit on the switch. ★ The prior Mon 11-16 jong-ga FIRED DOWN −3.59% (5,100.50 off 5,290.53), chip-led on the KOSPI but broad (KOSDAQ −4.86% harder); the close wraps tied that fall to AI-valuation unease (sedaily) and a regional Nvidia-fallout framing (CNBC via Scout), carried attributed.

**★ RECENT ARC.** Fri 10-30 −3.48% (FIRED DOWN) → Mon 11-02 +2.24% (UP) → Tue 11-03 −3.59% (DOWN) → Wed 11-04 +0.62% (NA) → Thu 11-05 −5.28% (DOWN) → Fri 11-06 −6.02% (DOWN through a circuit breaker, the deepest of the arc) → Mon 11-09 −0.81% (NA) → Tue 11-10 +4.39% (FIRED UP, chip-led) → Wed 11-11 +2.60% (FIRED UP, a second straight, chip-led) → Thu 11-12 −0.61% (NA) → Fri 11-13 −0.98% (NA) → Mon 11-16 −3.59% (FIRED DOWN, chip-led but broad — KOSDAQ harder) → Tue 11-17 −2.59% (FIRED DOWN, a second straight, large-cap-led but NOT chip-concentrated — the memory majors split) — the 11-16/11-17 pair a two-straight DOWN resumption after the 11-10/11-11 UP reversals; every fire chip-led except 11-17's split leadership.

**Prior Korean history (archived in windows/):** 09-18 the prior UP fire (+2.66%, narrow); the 09-17→09-02 chip de-rate *confirms* arc; 10-02→09-21 all sub-±2% NA.

**US front (Scout's) — declared numbers in the base-levels block below.** Scout's Mon 11-16 cash settle (scored Tue 11-17 00Z) FIRED + RESPONDED — all three indices fired DOWN off the Fri 11-13 closes (the Nasdaq Composite low −2.69% the robust fire past its −1.50% down bar, the S&P and Dow lows past theirs narrowly) while the Mon 11-16 2Y CMT settled 4.83 against 4.88 (−5bp), RESPONDED under the forward rule — the anchor moved WITH the falling tape, so the pathology leg did NOT print. The pathology run that stood at 1 RESETS 1 → 0 (no trip — the potential first trip did not happen) and the antecedent run advances 8 → 9, the 2Y class base now 4.83. Scout's Tue 11-17 session scores Wed 11-18 00Z; with the pathology run back at 0 it is a leg one at most (a FIRED + INERT there is leg one, not a trip), a ≥4bp 2Y move RESETs, a no-fire session LAPSEs both runs. Nvidia reports Tue 11-17 after the US bell, outside Tuesday's settle.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Tue 11-17 jong-ga; asiae close-wraps, close-labelled; DECLARED by finance-ko 11-17 06Z):**
KOSPI **4,968.48** / −2.59% (−132.02; prev close 5,100.50) · KOSDAQ **650.06** / −2.34% (−15.59; prev close 665.65). Semi-switch **FIRED DOWN** (−2.59% past the −2% down bar 4,998.49) — large-cap-led but NOT chip-concentrated (Samsung ~−3.30% steeper than the index, SK Hynix ~−1.96% and KOSDAQ −2.34% shallower — the memory majors split); no non-chip leader, dominance NOT established, break 0, CONFIRMED/ON; the KOSPI's first close below 5,000 in ~9 months (carried attributed). 11-17 is now the LAST SCORED FIRE, displacing Mon 11-16, a SECOND straight DOWN fire.
Flow (Tue 11-17, KOSPI spot): foreign net SOLD ~1.45tn (the main driver), institutions net BOUGHT ~544bn, individuals ~422bn. Gate 4 legs ALIGN confirms-side (the index FADED −2.59% **and** foreign SOLD), a THIRD straight confirms-align; OBSERVED, no lean (branch too coarse).
USD/KRW (Tue 11-17): no certified onshore 15:30 fixing sourced — gate-5 UNRESOLVED/pending-definition carries; a 15:30-labeled asiae print (1,338.2, +2.5 won, won weaker) is now sourceable, carried as DIRECTION reconnaissance only.
**★ CALENDAR:** the Tue 11-17 06Z jong-ga FIRED DOWN (−2.59%, 4,968.48); the next jong-ga (Wed 11-18 06Z) is a NORMAL test off 4,968.48 (−2% bar 4,869.11, +2% bar 5,067.85).
**US (Scout's DECLARED 11-17 00Z block, Mon 11-16 cash settle — FIRED + RESPONDED, antecedent run 8 → 9, pathology run 1 → 0 (RESET) per the forward rule, 2Y class base 4.83).** 2Y CMT **4.83** (prev 4.88, −5bp — RESPONDED); 5Y 4.93 / 10Y 5.12 / 30Y 5.46 (−5 / −3 / −1bp). Equities S&P **7,416.59** / NASDAQ **24,509.76** / DOW **51,608.17** (source_time 2026-11-16T21:00Z); the Composite session low −2.69% the robust DOWN fire. Scout's Tue 11-17 session scores Wed 11-18 00Z; with the pathology run back at 0 it is a leg one at most. **Crude: NO current declared base** — declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

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
