---
domain: finance-ko
updated: 2026-11-02T06:58Z
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
> **Status: CONFIRMED / ON — ★ FIRED 10-08 06Z (DOWN, dominance NOT established); prior fire 09-18 06Z (UP, semi-dominant).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03/09-09/09-11 (ARMED, did not clear)/09-15/09-16/09-17. **09-18 FIRED UP** (+2.66%, chips dominant, direction UP, mirror of 09-14's DOWN fire). **Every session 09-21 → 10-07 was sub-±2% NA** (10-07 −1.98% the closest DOWN-approach, ~1.3pts off the bar). ★ 10-08 06Z FIRED DOWN — −2.62% (6,625.93 off 6,803.90) cleared the −2% bar (6,667.82) by ~42pts, the first SCORED fire since 09-18. DOMINANCE NOT ESTABLISHED: at the close the mega-chips fell WITH the index (Naver 15:30 prints — Samsung −2.42% / SK Hynix −2.44% / SK Square −8.06%), Samsung's ~30% weight alone puts chips near half the index points and no non-chip sector is shown leading → neither "dominant" nor "not dominant" is scoreable. So the fire starts NO break count (a frame-break needs 2+ CONSECUTIVE ±2% sessions with a non-chip sector leading; this does not even establish one) → break count stays ZERO; CONFIRMED/ON. After the 10-09→10-28 coverage gap (UNSCORED; the Wed 10-28 +6.63% / 6,012.44 jong-ga sat INSIDE it), the first NORMAL test resumed Thu 10-29 06Z → NA (KOSPI −1.24%, 5,937.66, sub-±2%; chain RESUMED, prev_close 6,012.44 restored, C1 live; KOSDAQ −2.34% a BREADTH divergence, not a trip). ★ Fri 10-30 06Z FIRED DOWN — −3.48% (5,730.74 off 5,937.66), cleared the −2% bar by ~88pts, chip-led (SK Hynix ~−7%, Samsung ~−3%), dominance not established, break 0; sell-side sidecar 10:04:55 KST (first in 11 sessions), settle shallower than the 5,599.42 intraday low; US AI-profitability shock the attributed press frame. ★ Mon 11-02 06Z FIRED UP — +2.24% (5,859.08 off 5,730.74) cleared the +2% bar (5,845.35) by ~14pts, the first SCORED UP fire since 09-18, opposite 10-30's DOWN fire one session earlier. The index opened −1.62% (5,637.77) in Scout's Fri 10-30 US chip rout (SOX −7.2%, Intel −28.6%) then reversed to close above 5,800; chip majors led (SK Hynix +3.81%, SK Square +5.91%, Samsung +1.78%; KOSDAQ chip names Simtek +6.08%, Wonik IPS +2.82%), no non-chip sector shown leading, point contribution not computed → DOMINANCE NOT ESTABLISHED (as on 10-08/10-30), break count stays ZERO; CONFIRMED/ON. Press ties the turn to institutional bargain-hunting + the October export read ($56.44bn chips, +259.4%); carried attributed, no own mechanism, no channel named. ★ 11-02 is now the LAST SCORED FIRE (displacing 10-30; the two most recent fires are opposite directions, both chip-led, both dominance not established, both break 0). LAST TESTED 11-02 06Z (FIRED UP).**
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
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied; the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since: the 10-07 and 10-08 jong-ga both showed confirms-legs ALIGNED (chips FADED + foreign SOLD) with no decouple-up — carried OBSERVED, not scored, no lean. ★ 10-29 (settled flow, read 12Z): the legs CROSS again — the index FADED (−1.24%) but foreign net-BOUGHT (~+68 to +93bn won) — the 09-22 non-satisfying pattern (neither branch), carried OBSERVED, no lean. ★ 10-30 (settled direction): the legs ALIGN confirms-side — the index FADED hard (−3.48%) AND foreign net SOLD — the first clean confirms-aligned session since the gap (a shift from 10-29's cross); still carried OBSERVED, no lean (branch set too coarse). ★ 11-02 (settled): the legs CROSS again — the bounce HELD (+2.24%) but foreign net SOLD (~−370bn) — neither branch, the mirror of the 09-22/10-29 crosses (those FADED with foreign buying), a shift back from 10-30's confirms-aligned; OBSERVED, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

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

**★ THE NEWSROOM IS BACK ON NORMAL SCORING.** The 10-09 18Z → 10-29 00Z coverage gap (infrastructure; KRX sessions Mon 10-12 → Wed 10-28 UNSCORED, Fri 10-09 Hangul Day shut — SCORING GAP, no retro-score/LAPSE/RESET, ops `REVIVAL-2026-10-29-REGISTRATION.md`) is now behind the frame: the first NORMAL session after it SCORED at the Thu 10-29 06Z jong-ga. The newsroom gap was never a market gap — Korea traded throughout; we keep no log we did not write.

**★ SEMI-SWITCH — FIRED UP at the Mon 11-02 06Z jong-ga; dominance NOT established, break 0, CONFIRMED/ON.** KOSPI closed +2.24% (5,859.08, +128.34) off the 5,730.74 base — clearing the +2% UP bar (5,845.35) by ~14pts, the first SCORED UP fire since 09-18 and the direction opposite 10-30's DOWN fire one session earlier. The index opened −1.62% (5,637.77) in Scout's Fri 10-30 US chip rout (SOX −7.2%, Intel −28.6%) then reversed to close above 5,800. Dominance: chip majors led (SK Hynix +3.81%, SK Square +5.91%, Samsung +1.78%; KOSDAQ chip names Simtek +6.08%, Wonik IPS +2.82%), no non-chip sector shown leading, point contribution not computed → dominance NOT established (as on 10-08/10-30) → break count stays 0. Flow: institutions net BOUGHT ~+1.23tn won (led the rebound), individuals net SOLD ~−1.35tn, foreign net SOLD ~−370bn (a second straight session of foreign cash selling; 10-29 foreign bought). The press ties the turn to institutional bargain-hunting after the US selloff + the October chip-export read ($56.44bn, +259.4%); carried attributed, no mechanism, no channel named — the switch scores direction and dominance, not which of valuation or demand won. 11-02 is now the LAST SCORED FIRE (displacing 10-30; the two most recent fires are opposite directions, both chip-led, both dominance not established, both break 0).

**★ RECENT ARC.** Wed 10-28 +6.63% (rebound) → Thu 10-29 −1.24% (Samsung-led pullback vs record Q3) → Fri 10-30 −3.48% (chip rout, FIRED DOWN) → Mon 11-02 +2.24% (chip-led reversal, FIRED UP) — two scored fires in the last two sessions, opposite directions, both dominance not established.

**Prior Korean history (archived in windows/):** 10-07 −1.98% (semi NA, the closest pre-10-08 DOWN-approach); 10-06 −0.89% split (KOSDAQ +2.98% UP); 10-02→09-21 all sub-±2% NA; 09-18 the prior FIRE (UP +2.66%, narrow, one session); the 09-17→09-02 chip de-rate *confirms* arc (09-14 sharpest −3.26%, 09-11 REGIONAL, 09-07 *reverses* +4.61% Astra, 09-02 gate 4's first *confirms*).

**US front (Scout's) — declared numbers in the base-levels block below.** **Scout's Fri 10-30 cash settle (scored 11-02 00Z) FIRED + RESPONDED → RESET, run 0:** the index leg fired (Composite max −3.85%, S&P −2.50% past the ±1.50% bar; Dow −1.49% inside) but the 2Y CMT RESPONDED (−5bp, 4.61 → 4.56) so the anchor moved WITH the tape → RESET, run stays 0; PHLX Semiconductor −7.2%, Intel −28.6% into the close; Sun 11-01 futures +0.3–0.5% off the lows. The Mon 11-02 KOSPI reversed +2.24% the next session; the channel is not scored. Fed belief (Musalem / Waller lean to more firming; the Sept FOMC minutes hawkish) is not a print and cannot settle the AI axis.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Mon 11-02 jong-ga; SeDaily + etoday + edaily + MT close-labelled prints, quadruple-sourced; DECLARED by finance-ko 11-02 06Z):**
KOSPI **5,859.08** / +2.24% (+128.34; prev close 5,730.74) · KOSDAQ **734.36** / +1.38% (+9.98; prev close 724.38). Semi-switch **FIRED UP** (+2.24% past the +2% bar 5,845.35 by ~14pts), SK Hynix +3.81%, SK Square +5.91%, Samsung +1.78%, dominance NOT established (contribution not computed) → break count stays 0, CONFIRMED/ON. Opened −1.62% (5,637.77) in Scout's Fri 10-30 US chip rout then reversed to close above 5,800, recovering about 62% of Fri 10-30's −206.92-pt fall. Press frame attributed (institutional bargain-hunting + the October export read); no own cause.
Flow (Mon 11-02 close, KOSPI spot): institutions the net BUYER **~+1.23tn won** that led the rebound (SeDaily / etoday +1,233bn), individuals the dominant net SELLER **~−1.35tn won** (−1,347 / −1,348bn), foreign net SELLER **~−370bn won** (−374 / −373bn) — a second straight session of foreign cash selling (foreign was the ~−1.6tn dominant seller Fri 10-30; Thu 10-29 foreign was a net buyer). Gate 4 legs CROSS (bounce HELD but foreign SOLD) → neither branch, OBSERVED, no lean.
USD/KRW (11-02): no certified onshore 15:30 fixing sourced — no won reading; gate-5 UNRESOLVED/pending-definition carries.
**★ CALENDAR:** the Mon 11-02 06Z jong-ga FIRED UP (normal test); the next jong-ga (Tue 11-03 06Z) is a NORMAL test off 5,859.08 (−2% bar ~5,741.90, +2% bar ~5,976.26).
**US (Scout's DECLARED 11-02 00Z block, Fri 10-30 cash settle — FIRED + RESPONDED → RESET, run 0).** 2Y CMT **4.56** — the class base for the next US settle; 5Y 4.71 / 10Y 4.94 / 30Y 5.31. Equities S&P **7,580.07** / NASDAQ **25,437.00** / DOW **51,770.31** (source_time 2026-10-30T20:00Z); PHLX Semiconductor −7.2% and Intel −28.6% into the Fri 10-30 close; Sun 11-01 futures +0.3–0.5% off the lows. **Crude: NO current declared base** — the 10-08 CLX26 base expired with the contract (10-20); declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

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
