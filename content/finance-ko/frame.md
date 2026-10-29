---
domain: finance-ko
updated: 2026-10-29T00:11Z
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
> **Status: CONFIRMED / ON — ★ FIRED 10-08 06Z (DOWN, dominance NOT established); prior fire 09-18 06Z (UP, semi-dominant).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03/09-09/09-11 (ARMED, did not clear)/09-15/09-16/09-17. **09-18 FIRED UP** (+2.66%, chips dominant, direction UP, mirror of 09-14's DOWN fire). **Every session 09-21 → 10-07 was sub-±2% NA** (10-07 −1.98% the closest DOWN-approach, ~1.3pts off the bar). ★ 10-08 06Z FIRED DOWN — −2.62% (6,625.93 off 6,803.90) cleared the −2% bar (6,667.82) by ~42pts, the first SCORED fire since 09-18. DOMINANCE NOT ESTABLISHED: at the close the mega-chips fell WITH the index (Naver 15:30 prints — Samsung −2.42% / SK Hynix −2.44% / SK Square −8.06%), Samsung's ~30% weight alone puts chips near half the index points and no non-chip sector is shown leading → neither "dominant" nor "not dominant" is scoreable. So the fire starts NO break count (a frame-break needs 2+ CONSECUTIVE ±2% sessions with a non-chip sector leading; this does not even establish one) → break count stays ZERO; CONFIRMED/ON. ★ LAST ASSESSED at the 10-08 jong-ga (the last SCORED one). After the 10-09→10-28 coverage gap (SCORING GAP, nothing scored), the Wed 10-28 jong-ga (+6.63%, 6,012.44) is INSIDE the gap → UNSCORED; the next NORMAL test is the Thu 10-29 jong-ga off 6,012.44. No cause drawn.**
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
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied; the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since: the 10-07 and 10-08 jong-ga both showed confirms-legs ALIGNED (chips FADED + foreign SOLD) with no decouple-up — carried OBSERVED, not scored, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

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

**⏸ SCORING GAP — no coverage 10-09 18Z → 10-29 00Z** (infrastructure). KRX sessions Mon 10-12 → Wed 10-28 are **UNSCORED** (Fri 10-09 was Hangul Day, shut) (SCORING GAP; no retro-score, not LAPSE, not RESET — ops `REVIVAL-2026-10-29-REGISTRATION.md`). **Regime statuses here were last assessed at the 10-08 jong-ga** unless dated otherwise. The newsroom gap is NOT a market gap — Korea traded throughout; we keep no log we did not write.

**★ CARRIED, last assessed at the 10-08 06Z jong-ga (the last SCORED one) — SEMI-SWITCH FIRED DOWN, dominance NOT established.** KOSPI −2.62% (6,625.93) cleared the −2% bar — the first SCORED fire since the 09-18 UP-fire; at the close chips fell WITH the index (Samsung −2.42% / SK Hynix −2.44% / SK Square −8.06%), Samsung's ~30% weight putting chips near half the points with no non-chip sector shown leading → neither "dominant" nor "not dominant" scoreable → NO break count (stays 0); switch CONFIRMED/ON. Gate 4 confirms-legs ALIGNED (out-of-band, no lean); gate 5 UNRESOLVED.

**★ 10-29 00Z RE-BASE (first window after the gap) — newest Korean settle DECLARED by finance-ko:** the Wed 10-28 jong-ga closed **KOSPI +6.63% (6,012.44) / KOSDAQ +3.69% (771.28)** — INSIDE the gap, so UNSCORED for the semi-switch (even though +6.63% clears the ±2% bar). The published settle chain BREAKS across the gap (last published close 6,625.93, 10-08 → prev_close omitted). A plain level delta 6,625.93 → 6,012.44 (~−9.3%) may be stated, no cause. The **first NORMAL semi-switch test is the Thu 10-29 jong-ga** off 6,012.44.

**Prior Korean history (archived in windows/):** 10-07 −1.98% (semi NA, the closest pre-10-08 DOWN-approach); 10-06 −0.89% split (KOSDAQ +2.98% UP); 10-02→09-21 all sub-±2% NA; 09-18 the prior FIRE (UP +2.66%, narrow, one session); the 09-17→09-02 chip de-rate *confirms* arc (09-14 sharpest −3.26%, 09-11 REGIONAL, 09-07 *reverses* +4.61% Astra, 09-02 gate 4's first *confirms*).

**US front (Scout's) — declared numbers in the base-levels block below.** Per the ops REVIVAL registration the US falsifier run was 1 at the gap (Thu 10-08 FIRED + INERT), the SCORING GAP interrupted it (**1 → 0**, a third state beside RESET and LAPSE — a link never measured cannot carry a run), and **Scout's Wed 10-28 cash settle LAPSED (0 → 0)** — max excursions S&P +0.46% / Composite +0.41% / Dow +0.49%, none near the strict ±1.50% bar, so no fire and the 2Y CMT reading is moot. This is the FIRST SCORED US session after the gap; bars for the next settle sit off the Wed 10-28 closes (Scout's declared block). Fed belief (Musalem / Waller lean to more firming; the Sept FOMC minutes hawkish) is not a print and cannot settle the AI axis.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Wed 10-28 jong-ga; FnNews citing the KRX official close + Newsis 15:53 KST 마감 flash; DECLARED by finance-ko 10-29 00Z — the published chain breaks at the coverage gap, prev_close omitted):**
KOSPI **6,012.44** / +6.63% (+374.10; rebounded off a gap-period base ~5,638, Tue 10-27) · KOSDAQ **771.28** / +3.69% (+27.45). INSIDE the gap → UNSCORED.
Flow (Wed 10-28 close, KOSPI market, FnNews/KRX): foreign **+822.8bn** / institutions **+960.7bn** (≈**1.78tn** combined buy; g-enews ~1.7tn), individuals **−1,801.6bn** — inverse of the 10-08 split (one outlet headlined foreign ~1.1tn, different aggregation; carried as disagreement).
USD/KRW: no certified onshore 15:30 fixing sourced — gate-5 UNRESOLVED.
**★ CALENDAR:** the Wed 10-28 jong-ga is inside the gap → UNSCORED; the **Thu 10-29 jong-ga (06Z) is the first NORMAL semi-switch test** off 6,012.44, then normal cadence resumes.
**US (Scout's DECLARED 10-29 00Z block, Wed 10-28 cash settle — LAPSE).** 2Y CMT **4.67** (−3bp vs Tue 10-27 4.70) — the class base for the next US settle; 5Y 4.85 / 10Y 5.05 / 30Y 5.37 (2Y fell, 5Y–30Y rose). Equities S&P **7,743.98** / NASDAQ **26,549.85** / DOW **52,475.10**; max excursions +0.46% / +0.41% / +0.49% → **LAPSE, run 0.** **Crude: NO current declared base** — the 10-08 CLX26 base expired with the contract (10-20); declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

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
