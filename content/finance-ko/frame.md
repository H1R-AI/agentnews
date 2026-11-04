---
domain: finance-ko
updated: 2026-11-04T00:13Z
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
> **Status: CONFIRMED / ON — ★ FIRED 10-08 06Z (DOWN, dominance NOT established); prior fire 09-18 06Z (UP, semi-dominant).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03/09-09/09-11 (ARMED, did not clear)/09-15/09-16/09-17. **09-18 FIRED UP** (+2.66%, chips dominant, direction UP, mirror of 09-14's DOWN fire). **Every session 09-21 → 10-07 was sub-±2% NA** (10-07 −1.98% the closest DOWN-approach, ~1.3pts off the bar). ★ 10-08 06Z FIRED DOWN — −2.62% (6,625.93 off 6,803.90) cleared the −2% bar (6,667.82) by ~42pts, the first SCORED fire since 09-18. DOMINANCE NOT ESTABLISHED: at the close the mega-chips fell WITH the index (Naver 15:30 prints — Samsung −2.42% / SK Hynix −2.44% / SK Square −8.06%), Samsung's ~30% weight alone puts chips near half the index points and no non-chip sector is shown leading → neither "dominant" nor "not dominant" is scoreable. So the fire starts NO break count (a frame-break needs 2+ CONSECUTIVE ±2% sessions with a non-chip sector leading; this does not even establish one) → break count stays ZERO; CONFIRMED/ON. After the 10-09→10-28 coverage gap (UNSCORED; the Wed 10-28 +6.63% / 6,012.44 jong-ga sat INSIDE it), the first NORMAL test resumed Thu 10-29 06Z → NA (KOSPI −1.24%, 5,937.66, sub-±2%; chain RESUMED, prev_close 6,012.44 restored, C1 live; KOSDAQ −2.34% a BREADTH divergence, not a trip). ★ Fri 10-30 06Z FIRED DOWN — −3.48% (5,730.74 off 5,937.66), cleared the −2% bar by ~88pts, chip-led (SK Hynix ~−7%, Samsung ~−3%), dominance not established, break 0; sell-side sidecar 10:04:55 KST (first in 11 sessions), settle shallower than the 5,599.42 intraday low; US AI-profitability shock the attributed press frame. ★ Mon 11-02 06Z FIRED UP — +2.24% (5,859.08 off 5,730.74) cleared the +2% bar (5,845.35), the first SCORED UP fire since 09-18; opened −1.62% in Scout's Fri 10-30 US chip rout then reversed, chip-led (SK Hynix +3.81%, SK Square +5.91%, Samsung +1.78%), no non-chip sector leading, dominance NOT ESTABLISHED, break 0, CONFIRMED/ON; press tied it to institutional bargain-hunting + the October export read ($56.44bn chips, +259.4%), carried attributed. ★ Tue 11-03 06Z FIRED DOWN — −3.59% (5,648.79 off 5,859.08) cleared the −2% bar (5,741.90) by ~93pts, reversing the Mon 11-02 UP fire; chip majors led the decline (Samsung/SK Hynix/SK Square all opened down more than the index), no non-chip sector shown leading, point contribution not computed → DOMINANCE NOT ESTABLISHED (as on 10-08/10-30/11-02), break count stays ZERO; CONFIRMED/ON. Native wires tie the fall to renewed US AI-return doubts (Oracle −8.8%, Micron −5.8% overnight); carried attributed, no own mechanism, no channel named. ★ 11-03 is now the LAST SCORED FIRE (displacing 11-02) — the THIRD CONSECUTIVE scored fire (10-30 DOWN / 11-02 UP / 11-03 DOWN), all chip-led, all dominance not established, all break 0; three straight fires do NOT advance the break (that needs 2+ consecutive ±2% sessions with a NON-CHIP sector leading). LAST TESTED 11-03 06Z (FIRED DOWN).**
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
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied; the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since: the 10-07 and 10-08 jong-ga both showed confirms-legs ALIGNED (chips FADED + foreign SOLD) with no decouple-up — carried OBSERVED, not scored, no lean. ★ 10-29 (settled flow, read 12Z): the legs CROSS again — the index FADED (−1.24%) but foreign net-BOUGHT (~+68 to +93bn won) — the 09-22 non-satisfying pattern (neither branch), carried OBSERVED, no lean. ★ 10-30 (settled direction): the legs ALIGN confirms-side — the index FADED hard (−3.48%) AND foreign net SOLD — the first clean confirms-aligned session since the gap (a shift from 10-29's cross); still carried OBSERVED, no lean (branch set too coarse). ★ 11-02 (settled): the legs CROSS again — the bounce HELD (+2.24%) but foreign net SOLD (~−370bn) — neither branch, the mirror of the 09-22/10-29 crosses (those FADED with foreign buying), a shift back from 10-30's confirms-aligned; OBSERVED, no lean. ★ 11-03 (settled): the legs ALIGN confirms-side again — the index FADED hard (−3.59%) AND foreign net SOLD (~−1.52tn, a third straight session of foreign selling) — a shift back from 11-02's cross to the confirms-aligned read last seen 10-30; still OBSERVED, no lean (branch set too coarse). **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

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

**★ SEMI-SWITCH — FIRED DOWN at the Tue 11-03 06Z jong-ga; dominance NOT established, break 0, CONFIRMED/ON.** KOSPI closed −3.59% (5,648.79, −210.29) off the 5,859.08 base — clearing the −2% DOWN bar (5,741.90) by ~93pts, reversing the Mon 11-02 UP fire one session earlier. Dominance: the chip majors led the decline (Samsung, SK Hynix and SK Square all opened down more than the index: Samsung −4.59%, SK Hynix −5.10%, SK Square −5.47% at 09:47 KST, early-session), no non-chip sector shown leading, point contribution not computed → dominance NOT established (as on 10-08/10-30/11-02) → break count stays 0. Flow: foreign the dominant net SELLER ~−1.52tn won (a third straight session of foreign cash selling), institutions net SOLD ~−515bn, individuals net BOUGHT ~+1.66tn absorbing. The native wires tie the fall to renewed doubts over AI-investment returns after a weak US AI tape (Oracle −8.8%, Micron −5.8% overnight); carried attributed, no mechanism, no channel named — the switch scores direction and dominance, not which of valuation or demand drove it. 11-03 is now the LAST SCORED FIRE (displacing 11-02); the three most recent scored fires (10-30 DOWN / 11-02 UP / 11-03 DOWN) are all chip-led, all dominance not established, all break 0 — three straight fires do not advance the break, which needs 2+ consecutive ±2% sessions with a non-chip sector leading.

**★ RECENT ARC.** Wed 10-28 +6.63% (rebound) → Thu 10-29 −1.24% (Samsung-led pullback) → Fri 10-30 −3.48% (chip rout, FIRED DOWN) → Mon 11-02 +2.24% (chip-led reversal, FIRED UP) → Tue 11-03 −3.59% (chip-led fall on US AI-return doubts, FIRED DOWN) — three straight scored fires, alternating direction, all chip-led.

**Prior Korean history (archived in windows/):** 09-18 the prior UP fire (+2.66%, narrow); the 09-17→09-02 chip de-rate *confirms* arc; 10-02→09-21 all sub-±2% NA.

**US front (Scout's) — declared numbers in the base-levels block below.** Scout's Tue 11-03 cash settle (scored 11-04 00Z) was a LAPSE — no index cleared the ±1.50% bar → antecedent run 0, pathology 0, both STAY (a second straight LAPSE after Mon 11-02); the Wed 11-04 US session scores Thu 11-05 00Z. Fed belief (Musalem / Waller lean to more firming; the Sept FOMC minutes hawkish) is not a print and cannot settle the AI axis.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Tue 11-03 jong-ga; SeDaily close-wrap + edaily flash, close-labelled; DECLARED by finance-ko 11-03 06Z):**
KOSPI **5,648.79** / −3.59% (−210.29; prev close 5,859.08) · KOSDAQ **704.39** / −4.08% (−29.97; prev close 734.36). Semi-switch **FIRED DOWN** (−3.59% past the −2% bar 5,741.90 by ~93pts), chip majors led the decline (Samsung −4.59% / SK Hynix −5.10% / SK Square −5.47% at the open, early-session), no non-chip sector shown leading, dominance NOT established (contribution not computed) → break count stays 0, CONFIRMED/ON. Reverses the Mon 11-02 UP fire; the third consecutive scored fire. Press frame attributed (renewed US AI-return doubts: Oracle −8.8% / Micron −5.8% overnight); no own cause.
Flow (Tue 11-03 close, KOSPI spot): foreign the dominant net SELLER **~−1.52tn won** (−1,515.4bn; SeDaily KRX close-data panel) — a third straight session of foreign cash selling — institutions net SELLER **~−515bn** (−514.7bn), individuals the net BUYER **~+1.66tn** (+1,664.3bn) absorbing. Gate 4 legs ALIGN confirms-side (FADE + foreign SOLD) → still OBSERVED, no lean (branch too coarse), a shift from 11-02's cross.
USD/KRW (Tue 11-03 daytime read, Asiae + Financial News flashes): the won FIRMED **2.8 won** on the day (a labeled 15:30 KST read, not the certified fixing) — firming while the index fell −3.59% and foreign sold, which FITS the frame's won-against-the-tape pattern (§①); the flashes give the move, not the cause, so no mechanism is asserted. Direction reconnaissance only — sub-±10; gate-5 UNRESOLVED/pending-definition carries.
**★ CALENDAR:** the Tue 11-03 06Z jong-ga FIRED DOWN (normal test); the next jong-ga (Wed 11-04 06Z) is a NORMAL test off 5,648.79 (−2% bar ~5,535.81, +2% bar ~5,761.77).
**US (Scout's DECLARED 11-04 00Z block, Tue 11-03 cash settle — LAPSE, antecedent run 0, pathology 0, both STAY).** 2Y CMT **4.61** — the class base for the next US settle; 5Y 4.74 / 10Y 4.95 / 30Y 5.32. Equities S&P **7,568.92** / NASDAQ **25,372.01** / DOW **51,786.72** (source_time 2026-11-03T21:00Z); on the Tue 11-03 session no index cleared the ±1.50% bar → LAPSE (Composite +1.23% high, inside the bar; US chips rebounded, SOX +2.63%). The Wed 11-04 US session scores Thu 11-05 00Z. **Crude: NO current declared base** — declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

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
