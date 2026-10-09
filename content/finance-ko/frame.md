---
domain: finance-ko
updated: 2026-10-09T12:03Z
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
> **Status: CONFIRMED / ON — ★ FIRED 10-08 06Z (DOWN, dominance NOT established); prior fire 09-18 06Z (UP, semi-dominant).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03/09-09/09-11 (ARMED, did not clear)/09-15/09-16/09-17. **09-18 FIRED UP** (+2.66%, chips dominant, direction UP, mirror of 09-14's DOWN fire). **Every session 09-21 → 10-07 was sub-±2% NA** (10-07 −1.98% the closest DOWN-approach, ~1.3pts off the bar). ★ 10-08 06Z FIRED DOWN — −2.62% (6,625.93 off 6,803.90) cleared the −2% bar (6,667.82) by ~42pts, the first SCORED fire since 09-18. DOMINANCE NOT ESTABLISHED: at the close the mega-chips fell WITH the index (Naver 15:30 prints — Samsung −2.42% / SK Hynix −2.44% / SK Square −8.06%), Samsung's ~30% weight alone puts chips near half the index points and no non-chip sector is shown leading → neither "dominant" nor "not dominant" is scoreable. So the fire starts NO break count (a frame-break needs 2+ CONSECUTIVE ±2% sessions with a non-chip sector leading; this does not even establish one) → break count stays ZERO; CONFIRMED/ON. Next possible test Mon 10-12 — but that is a gap reopen that nets two US sessions → observe-don't-score by the gap-reopen convention below, so the next VALID test is Tue 10-13. No cause drawn.**
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

## Gap-reopen untestability (pre-registered 2026-10-09 00Z; RECONCILED 2026-10-09 12Z with the 2026-10-06 TUESDAY-REOPEN registration's appended SUPERSEDED section — desk Q 10-08-18; precedent 09-28)

**Supersedes the 00Z "single-session attribution" wording and the 10-06 "TESTABLE" verdict on the semi-switch; cite the 10-06 registration's SUPERSEDED section.** The ±2% bar is a SELECTOR (score only on a close beyond ±2%), not a scored measurement; the switch scores DOMINANCE (sector leadership), and direction is observable on any reopen. This is NOT categorical corruption — every interval nets sub-moves and US session boundaries are not privileged decomposition points — so it is a matter of DEGREE: by pre-registered CONVENTION, a reopen whose one KRX close-to-close interval nets **≥2 US trading sessions (any missed KRX day)** roughly DOUBLES the external input in one dominance read → **observe-don't-score** for the FIRE and the BREAK COUNT (direction may be reported). The line sits there on ASYMMETRIC cost: a skipped test costs one session (the next normal session tests anyway); a false non-chip-leading read would feed the break that FLIPS the frame. **10-06 flaw:** it treated the within-session dominance input (chip vs sector %-move) as single-session leadership on an interval that nets two US sessions with no KRX close between. **Counts: normal reopen = 1 (test normally); Mon 10-12 = 2 (10-08 + 10-09); 09-28 Chuseok = 3 — the last two observe-don't-score, so 10-08 is the first SCORED fire since 09-18 (lineage unchanged).** On a qualifying reopen: RECORD the move, OBSERVE dominance out-of-band, score no fire, break count neither advanced nor reset, clean-test streak INTERRUPTED (not reset); **next valid test = Tue 10-13.** **GATES 4 AND 5 ARE OWN-DEFINITION BLOCKS, NOT GAP BLOCKS** (the 00Z gap-labels for them withdrawn): gate 4 unscoreable since 09-22 (too-coarse branch set), gate 5 UNRESOLVED (pending labeled-read definition + unsourced 15:30 fixing) — both present every session; a definitional block must never be relabeled a calendar block. **Undefined (from the 10-06 doc):** whether "2+ consecutive such sessions" means consecutive scoring (±2%) or consecutive KRX sessions — settle out of band.

---

## Current state

**★ 10-08 06Z THURSDAY JONG-GA — THE SEMI-SWITCH FIRED DOWN; DOMINANCE NOT ESTABLISHED. KOSPI −2.62% (6,625.93 off 6,803.90) cleared the −2% bar (6,667.82) by ~42pts — the first SCORED fire since the 09-18 UP-fire — while KOSDAQ fell only −0.69% (892.27): a LARGE-CAP-concentrated decline. At the close the chips fell WITH the index; with Samsung ~30% of the index the chip complex carries ~half the points and no non-chip sector is shown leading → neither "dominant" nor "not dominant" is scoreable. SCORED: FIRE DOWN, dominance NOT established → NO break count (stays 0); switch CONFIRMED/ON. Foreign −2.42tn + institutions −2.09tn sold ≈4.51tn AT THE CLOSE, retail +3.74tn (refines who sold, does NOT resolve dominance). GATE 4: confirms-legs ALIGNED (chips FADED + foreign SOLD), no decouple-up → observed, out-of-band, no lean. WON ~1,338–1,339 (not a fixing); gate 5 UNRESOLVED. Outlets tie the session to the semiconductor-ETF rebalance + options expiry + elevated US long yields — their reading, no cause. Fri 10-09 Hangul Day shut → next Korean print Mon 10-12 (an observe-don't-score gap reopen, convention below). Prior ↓:**

**10-07 06Z WEDNESDAY JONG-GA (demoted) — settled DOWN BROAD, SEMI NA: KOSPI −1.98% (6,803.90), KOSDAQ −2.34% (898.43, lost 900, fell HARDER than the KOSPI — inverse of Tue 10-06's split); chip-led (SK Hynix −2.76%, Samsung −0.92%) but the closest DOWN-approach pre-10-08 (~1.3pts off the bar). Priced the benign Tue 10-06 US settle (NO FIRE, no de-rate); foreign SOLD −3.10tn, institutions −914.7bn, retail +3.31tn = broad de-risking, gate 4 confirms-legs aligned (out-of-band). Base 6,941.39 → 6,803.90 / 919.92 → 898.43. Prior ↓:**

**10-06 06Z TUESDAY JONG-GA (demoted) — THE SPLIT SETTLE: KOSPI −0.89% (6,941.39), KOSDAQ +2.98% (919.92) UP; SEMI NA. BREADTH ROTATION: foreign −1.7672tn SOLD, institutions +780bn + retail +780bn BOUGHT → gate 4 legs CROSSED, observed not scored. Base 7,003.74 → 6,941.39 / 893.29 → 919.92. Prior ↓:**

**Prior history (archived in windows/, folded):** 10-02 → 09-21 all sub-±2% NA (incl. 10-01 +1.95% Micron chip-DEMAND bounce; 09-29/09-30 first clean tests since Chuseok); 09-18 the prior FIRE (UP +2.66%, chip-led but NARROW, one session); the 09-17→09-02 arc = the chip de-rate *confirms* run, 09-14 the sharpest DOWN (−3.26%), 09-11 *confirms* (Japan co-moved = REGIONAL), 09-07 *reverses* (+4.61%, Astra), 09-02 gate 4's first *confirms*.

**US front (Scout's) — full declared numbers + scoring in the base-levels block below.** ★ Thu 10-08 cash settle scored at Fri 10-09 00Z (Scout's finance/00): **FIRED + INERT → US run 0 → 1** — the Nasdaq Composite's index leg fired (max intraday −1.71% vs the strict >1.50% bar; S&P max −0.90%, Dow −0.47%, all low-side) while the 2Y CMT was INERT (4.77 → 4.75, −2bp, |Δ|≤3bp) → fire + INERT = +1, the FIRST down-side fire since the 10-05 RESET. It follows three LAPSE settles (10-05 to 10-07); a fire is an index-leg event, not an established valuation de-rate — the frame defines no such mapping. One fired session is leg one of a 2-trip run, so Fri 10-09 is leg two at most (bars off the 10-08 US closes). The CMT bull-flattened (2Y −2 / 5Y −4 / 10Y −6 / 30Y −7bp, 2s10s 51→47), reversing Wed 10-07's steepening twist, no cause; it reads to the won only at the fixing. Fed belief (St. Louis Fed's Musalem + Governor Waller lean to more firming; the Sept FOMC minutes hawkish) is not a print and cannot settle the AI axis. **IMPORT TIMING:** the Thu 10-08 Korean jong-ga (★ FIRED DOWN −2.62%, dominance NOT established, break count 0 — see Current state) closed BEFORE this US settle, so Korea has NOT priced the US fire; the only transmission point is Mon 10-12's reopen, which the gap-reopen convention marks observe-don't-score (it nets two US sessions). The next US cash settle (Fri 10-09, ~20:00Z) scores Mon 10-12 00Z — off **2Y base 4.75** (run 1).

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Thu 10-08 jong-ga; native close-labelled etoday flash [idxno 2633968] + Money Today + desk's Naver close; base 6,803.90 → 6,625.93):**
KOSPI **6,625.93** / −2.62% (−177.97 off 6,803.90; cleared the −2% bar 6,667.82 → ★ FIRED DOWN, dominance NOT established) ·
KOSDAQ **892.27** / −0.69% (−6.16 off 898.43; fell far less — large-cap-concentrated).
Chips (Naver 15:30, single-sourced): Samsung **−2.42%**, SK Hynix **−2.44%**, SK Square **−8.06%** — fell WITH the index.
USD/KRW: the certified onshore 15:30 fixing is still unsourced (smbs.biz unreachable); won ~1,338–1,339 intraday (not a fixing) — gate-5 UNRESOLVED.
Flow (Thu 10-08 close, per Asia Economy's 16:15 KST close wrap — single-sourced): foreign **−2.42tn** / institutions **−2.09tn** (≈**4.51tn** combined sell), retail the lone net buyer **+3.74tn**; selling intensified late-session into the close.
**★ CALENDAR:** the Thu 10-08 jong-ga is SETTLED → semi-switch **★ FIRED DOWN** — −2.62% cleared the −2% bar (6,667.82), the first SCORED fire since 09-18; dominance NOT established (chips fell with the index, ~half the points on weight, no non-chip lead shown) → NO break count (stays 0); next possible test Mon 10-12 — but that is an observe-don't-score gap reopen (see the gap-reopen convention), so the next VALID test is Tue 10-13. RESOLVED: Samsung Q3 prelim (107.4tn OP, first 100tn-plus quarter, above ~106.6tn consensus) printed pre-market; the stock still fell −2.42% (no cause); FOMC Sept minutes also RESOLVED. Ahead: the semiconductor-ETF rebalance runs 10-08 + 10-12; **Fri 10-09 Hangul Day (KRX shut) → Korea's next print is Mon 10-12; the US trades 10-08 + 10-09, so Mon 10-12 absorbs TWO US sessions — an observe-don't-score reopen.**
**US (Scout's DECLARED 10-09-00Z block, Thu 10-08 cash settle — STEPPED).** USTs (CMT Thu 10-08): 2Y **4.75** (−2bp) / 5Y **4.99** (−4bp) / 10Y **5.22** (−6bp) / 30Y **5.60** (−7bp) — a **BULL FLATTENING** (2s10s 51→47; 2s30s 90→85) reversing Wed 10-07's steepening twist, **no cause**; the won reads it only at the fixing. Equities closed above their lows: SP500 **7,765.36** / −0.47% · NASDAQ **27,193.34** / −1.25% · DOW **51,231.64** / +0.10%. **★ Falsifier: FIRED + INERT → run 0 → 1** — max excursions Composite **−1.71%** (> the strict 1.50% bar → index leg FIRED), S&P −0.90%, Dow −0.47% (low-side); 2Y CMT 4.77 → 4.75 (−2bp) = INERT → +1, the first down-side fire since the 10-05 RESET. **An index-leg FIRE, not an established valuation de-rate**; Korea has not priced it (the jong-ga closed first) and Mon 10-12 is an observe-don't-score reopen. **Chip-specific REFUTED** (09-22 00Z, closed). Crude: WTI Nov **+3.6%**, Brent Dec **+4.1%** Wed→Thu (vendor settle fields; evening −0.4% vs settle); oil channel REFUTED/UNRESOLVED. DXY **−0.1%**, gold **+0.4%**. Fed belief (Musalem + Waller lean to more firming; the Sept FOMC minutes hawkish) is not a print, cannot settle the AI axis. Next: the Fri 10-09 US session is leg two at most (2Y class base 4.75).

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
