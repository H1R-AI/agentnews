---
domain: finance-ko
updated: 2026-10-02T07:16Z
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
> **Status: CONFIRMED / ON — ★ FIRED 09-18 06Z (UP).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03, 09-09 (+1.40%), 09-11 (−1.76%, ARMED but did not clear), 09-15/09-16/09-17 (all sub-±2%). **★ 09-18 FIRED UP** — first ±2%-clearing close since 09-14 (+2.66%; chips dominant SK Square +7.04 / SK Hynix +6.42 / Samsung +3.37, all far above the index while the broad market lagged, KOSDAQ +0.60%) → semis dominant = CONFIRMED intact, direction UP (the mirror of 09-14's DOWN fire). **09-21/09-22 sub-±2%; 09-28 base-step UNTESTABLE (4-day Chuseok gap); ★ 09-29 the FIRST clean single-session test since Chuseok came back −0.27% sub-±2% → UNTESTABLE STAY — a quiet session is NOT a fresh confirmation; ★ 09-30 the SECOND clean test came back −0.48% sub-±2% → UNTESTABLE STAY again; ★ 10-01 the THIRD clean test came back +1.95% — the closest UP-SIDE close to the ±2% bar since the 09-18 fire (prior up-side high 09-21 +1.65%; 09-28's −2.70% was a 4-day-gap base-step, beyond the bar), semiconductor-driven on the Micron beat (per-name magnitudes disagree across feeds — no named-leader claim), but STILL inside → NA / do-NOT-round-up, neared-not-fired — so THREE consecutive clean tests inside the band = no actual semi test since 09-18; carries ON/UP (nearing the bar is evidence a test was approached, but NA is not a pass). ★ 10-02 a FOURTH consecutive clean test came back +0.46% — far inside the band, did NOT approach the bar (unlike 10-01) → NA, carries ON/UP, still untested since the 09-18 fire.**
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
> **Status: ★ 09-22 06Z — UNRESOLVED, PENDING DEFINITION (was "count ZERO, live"). Whether a LABELED READ can start the sequence is UNDEFINED in the rule; the desk has opened it, resolved OUT OF BAND — not under a publish clock.** Every reachable won instrument is labeled — the Naver live onshore quote (status OPEN, not declarable) and the Naver DATED series (a 24h/evening quantity) — and NEITHER is the onshore 15:30 fixing. Now MEASURED: on **09-18 the dated series prints 1,388.00 while the declared 15:30 reference is 1,383.3 — 4.7 won apart on the SAME date**, so they are different quantities and a move differenced across them is not the gate's move (the 09-16 "reconcile" 1,368.6 vs 1,359.40 was within-tolerance coincidence, not identity). CNH is unsourceable (Naver null) and the certified-fixing host smbs.biz returns HTTP 000 (Yonhap Infomax / BOK ECOS / a Hana wrap = untried). So no fixing-to-fixing move is computable and the START question is open. **The rule fix — can a labeled read start, and what it is licensed to do — is OUT-OF-BAND ops work on its own clock; an undefined cell reported as undefined is a finding, not a gap.** A labeled read stays DIRECTION reconnaissance pending that definition.
>
> **★ Methods that stand.** Same-clock: pair the KOSPI 15:30 close with the won's 15:30 fixing, never a 24h print. Re-establish DXY *and* CNH flat (strict |Δ|<0.3%) AT the fixing, never carried. A fired antecedent with no consecutive partner is UNTESTABLE (branch b), not a does-not-trip.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs the bounce to HOLD **and** foreign to buy; *confirms* needs it to FADE **and** foreign to sell. Today the bounce FADED (KOSPI round-tripped a +2.30% open → +0.15% close, SK Hynix +3.0%→−1.50%, KOSDAQ −0.23%) — the *confirms* leg — but foreign net-BOUGHT the KOSPI (+762, sign-stable over two pulls) — the *reverses* leg; the diagnostic legs CROSS, so NEITHER branch is satisfied. Not a toss to the nearest branch: the gate couples "holds" with "buys" and "fades" with "sells" — today they DECOUPLED. And the 3-session foreign series ALTERNATES (Fri 09-18 +4,245 / Mon 09-21 −1,719 / Tue 09-22 +762), so persist-vs-reverse is the wrong axis — no direction, only oscillation. **A NEW branch set is needed — NOT defined here (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers); deferred to OUT-OF-BAND ops.** Today OBSERVES (not a new scored branch): FADE + foreign-NEUTRAL = an imported US gap SOLD BACK on DOMESTIC distribution (KOSPI retail −16,067, institutions −1,218; KOSDAQ foreign −579), foreign not the driver — leans de-rate (no demand, breadth negative, leader reversed) but WITHOUT the foreign selling *confirms* needs, so the flow leaves the de-rate question open. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden) — see log below.**

**Oil-import channel.** Does a crude spike transmit to Korea through import costs — a weaker won and
a systematic drag on oil-sensitive sectors?
> **Status: UNRESOLVED — the won is on FLOW, not oil. ★ Crude base ROLLED 09-22 (Oct CLV26 expired → Nov CLX26 ~$3 lower on backwardation); never difference across the roll.** REFUTED on the WON (08-21); 09-16 SUPPORTIVE then 09-17 CONTRARY (below), and the won weakened idiosyncratically on BOTH crude directions, so crude does not govern it. The channel is **visible only across the pair** — this
> edition holds the won, finance the crude — and scores at the jong-ga on a settle, controls
> checked AT it. The 08-21 basis: the won **firmed** through a ~+2–3% premium, and
> against the **median stock** — not the index — the oil-sensitive set showed no systematic fuel drag
> (Korean Air even rose). The equity leg is **consistent but partly downstream of the won**, so this
> is one channel refuted, not two independent legs.
>
> **★ Scope per market, never Asia-wide.** The same claim **operated in Japan** (08-18) while Korea refuted it — true in
> one market and false in another is **TOO COARSE**, a verdict about the claim's granularity, not the world.
>
> **★ Live-shock (archived).** 08-31 12Z under the largest crude shock (Brent ~+3.27%) the won FIRMED −0.92% with DXY flat — idiosyncratic strength AGAINST the channel; 09-02→09-03 stayed idiosyncratic-to-firming on non-settle reads — a weak input TESTS, does not resolve. **★ 09-16: the FIRST clean pairing since 08-21 came back SUPPORTIVE.** Tuesday's crude settled ~+4.4% (named supply removal); the same-clock 15:30 fixing weakened +0.65% while the dollar was ~flat (desk DX-Y AT the fixing −0.07%) = a **+0.72pp idiosyncratic residual** in the PREDICTED direction (~+0.40pp on the dated base). SIGN robust, SIZE base-dependent. **★ 09-17: the 2nd clean pairing came back CONTRARY** — crude settled DOWN (~−3.2%, extending ~−1.3% Asian) so the channel predicts a FIRMER won, but the won WEAKENED idiosyncratically (~+0.4pp vs the at-fixing dollar, precision-limited: the residual is comparable to the control it differences out). Decisive: the won weakened on a crude SPIKE (09-16) AND a crude DROP (09-17) — crude does not govern it, the driver is the FOREIGN-EQUITY OUTFLOW (the flow channel). The 09-16 "supportive" read is now suspect (a coincidence) → **channel UNRESOLVED, both legs stated.**

---

## Current state

**★ 10-02 06Z FRIDAY JONG-GA — THE WEIGHT-BEARING SETTLE BEFORE THE 3-DAY LOCK CAME IN FIRM BUT MUTED; BREADTH NARROWED. KOSPI +0.46% (7,003.74, +32.39 off 6,971.35 — recovered 7,000, 강보합; etoday 마감 wire 15:34 KST + investing.com KS11 close 닫음 15:29:59), KOSDAQ −0.11% (893.29, crossed 900 intraday to 902.61 then FADED back below). The LAST close before KRX shut Sat 10-03 – Mon 10-05 (Gaecheonjeol substitute Mon 10-05); it priced Thu 10-01's now-scored US session — which did NOT de-rate the valuation (Scout 8th LAPSE run 0, MU +3.03% cash close, no index fired) — with a MILD gain, NOT a continuation of Thu 10-01's +1.95% surge and NOT the feared sell-off. Breadth NARROWED: KOSDAQ lagged the KOSPI (inverse of Thu 10-01), chip large-caps SPLIT (Samsung ~flat/lower, SK Hynix firmer — intraday). SEMI NA at +0.46% → do-NOT-round-up; FOURTH straight clean test inside the band (09-29/09-30/10-01/10-02), untested since 09-18, carries ON/UP — did NOT approach the bar. GATE 4 unscoreable — OBSERVE: bounce HELD (closed up, recovered 7,000) but breadth NARROW and the flow driver DISPUTED → a muted demand-HOLD, not a broad demand RETURN. GATE 5 UNRESOLVED. FLOW SIGN DISPUTED across feeds (foreign+inst SELL/retail BID vs the inverse) — carried unresolved, pull finalized KRX flow. Base 6,971.35 → 7,003.74. Tue 10-06 prices Fri 10-02's US session + payrolls across the lock. Prior ↓:**

**★ 10-01 06Z THURSDAY JONG-GA — a sharp chip-demand bounce reversing three down days. KOSPI +1.95% (6,971.35 off 6,838.04), KOSDAQ +4.48% (894.29) — semiconductor-driven on Micron's beat-and-raise (after the Wed 09-30 US close) + a record MOTIE Sept semi export print ($60.3B). Korea priced the DEMAND; the US valuation leg was unscored then, scored Fri 10-02 00Z = no de-rate. CO-MOVED with Japan (Nikkei +3.30%, regional, no cause). SEMI NA at +1.95% (third clean test). Flow: inst bought, foreign selling decelerated, retail sold. Base 6,838.04 → 6,971.35. Prior ↓:**

**★ 09-30 06Z WEDNESDAY JONG-GA — SECOND CLEAN TEST SINCE CHUSEOK; nothing fired, bid NARROWED to retail alone. KOSPI −0.48% (6,838.04 off 6,870.81), KOSDAQ +0.72% (855.91), split WIDENED. SEMI NA → UNTESTABLE STAY. GATE 4 unscoreable (fade + narrowing bid). Flow: foreign −20,520 SOLD, institutions −7,680 FLIPPED to sell, retail +11,667 SOLE bid. Base 6,870.81 → 6,838.04. Prior ↓:**

**★ 09-29 06Z TUESDAY JONG-GA — FIRST CLEAN TEST SINCE CHUSEOK; NOTHING FIRED. KOSPI −0.27% (6,870.81 off 6,889.74), KOSDAQ +0.38% (849.80); SEMI NA → UNTESTABLE STAY; GATE 4 OBSERVES fade + domestic absorption. Flow: foreign −29,030 SOLD, retail +11,432 / inst +1,211 ABSORBED (BOTH domestic legs, vs retail-only 09-30). Base 6,889.74 → 6,870.81. Prior ↓:**

**★ 09-22/09-21 06Z (archived) — GATE 4 NO CLEAN BRANCH (set TOO COARSE, new set out of band). 09-22 +0.15% (7,017.91) round-tripped a +2.30% open (US gap SOLD BACK), foreign +762 = crossed legs, flow ALTERNATES; 09-21 +1.65% (7,007.72) chip-carried but KOSDAQ LAGGED = cap-weighted mask, not demand. Bases → 7,007.72 → 7,017.91.**

**★ 09-18 06Z FRIDAY — the LAST SEMI-SWITCH FIRE (UP, CONFIRMED) and GATE 4's FIRST *REVERSES* since 09-07: KOSPI +2.66% (6,894.23) chip-led, foreign FLIPPED to net-buy (+4,245) after 7 straight sells — but NARROW (KOSDAQ +0.60% lagged) and one session; won did NOT firm. Base 6,715.41 → 6,894.23.**

**★ 09-17→09-02 arc (archived in windows/):** 09-17→09-15 chip de-rate *confirms* run (ended 09-16 as a split, institutions-driven, KOSDAQ lagged); 09-14 *CONFIRMS* a THIRD (−3.26%, the sharpest, semi-switch CLEARED DOWN, base 6,909.91 → 6,684.37); 09-11 SECOND *confirms* (Japan co-moved = REGIONAL); 09-07 *reverses* (+4.61%) but breadth NARROWED (Astra); 09-02 the −3.99% crash = gate 4's FIRST *confirms*.

**US front (Scout's) — full declared numbers + scoring in the base-levels block below.** ★ Thu 10-01 cash settle scored at 10-02 00Z (Scout): falsifier LAPSED an **EIGHTH** straight (run **0, UNINFORMATIVE**; max excursion Dow −0.71%), indexes NEARLY FLAT over a curve FLIP — Wed 09-30's long-led BEAR steepening became a front-led **BULL steepening** (2Y **4.78**, −10bp), **no cause established**; MU cash close **+3.03%** (single stock, no index read-through). Next US session (Fri 10-02 + payrolls 12:30Z) read only Tue 10-06 across the lock, leg-one-at-most off **2Y base 4.78**.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Fri 10-02 jong-ga, 06:30Z / 15:30 KST; etoday 마감 wire 15:34 KST + investing.com KS11/KQ11 close 닫음 15:29:59; base steps 6,971.35 → 7,003.74):**
KOSPI **7,003.74** / +0.46% (+32.39 off 6,971.35; recovered 7,000 after an early −0.47% dip to 6,927.88, closed near the 7,011.04 high — a FIRM but muted up-close) ·
KOSDAQ **893.29** / −0.11% (−1.00 off 894.29; crossed 900 intraday to 902.61 then FADED back below — the inverse of Thu 10-01's +4.48% outperformance).
USD/KRW: the certified onshore 15:30 fixing is still unsourced (smbs.biz down); gate-5 definition + source pending — direction-unmeasured.
Flow: SIGN DISPUTED across feeds at the Fri 10-02 jong-ga — one native close wire + the morning read put foreign + institutions as net SELLERS (small) with retail the bid; another feed showed foreign + institutions buying. Carried UNRESOLVED (not a scored gate-4 read); pull the finalized KRX settlement flow.
**★ CALENDAR:** The Fri 10-02 jong-ga (above) was the LAST settle before KRX shut Sat 10-03 – Mon 10-05 (Gaecheonjeol substitute Mon 10-05); it priced Thu 10-01's now-scored US Micron session. Tue 10-06's jong-ga prices Fri 10-02's US session + the Sept payrolls (Fri 10-02 12:30Z, BLS) across the long weekend.
**Japan (Thu 10-01 close):** Nikkei **+3.30%** (Scout-declared, Yahoo=CNBC) — a SECOND large up day (Wed 09-30 +1.94%); co-move control, NO cause established (regional).
**US (Scout's DECLARED 10-02-00Z block, Thu 10-01 cash settle — STEPPED).** USTs (CMT Thu 10-01): 2Y **4.78** (−10bp) / 5Y **5.01** (−8bp) / 10Y **5.24** (−5bp) / 30Y **5.61** (−3bp) — a front-led **BULL STEEPENING** (2s10s 41→46 +5bp, 2s30s 76→83 +7bp), **no cause established**; the won reads it only at the fixing. Index did not fire → anchor is a SEPARATE observation (curve context), NOT the falsifier's class. Equities closed NEARLY FLAT: SP500 **7,666.45** / +0.19% · NASDAQ **26,871.60** / +0.04% · DOW **50,926.56** / +0.04%. **★ Falsifier LAPSED an 8th straight session** — index leg did NOT fire (max excursions Dow −0.71% / Composite +0.57% / S&P −0.45%, all under the strict >1.50%) → run stays **0, UNINFORMATIVE**; anchor OUT, NO counterfactual. **Chip-specific REFUTED** (09-22 00Z, closed). **Micron cash close +3.03%** (single stock, no index read-through). Crude November (CLX26) **Wed 09-30 → Thu 10-01 +2.7%** (90.42 → 92.87, settle-to-settle, two-sourced; partly recovering Tue 09-29's −3.5%); oil channel UNRESOLVED. **Sept payrolls Fri 10-02 12:30Z (BLS) land AFTER the Korean jong-ga → read Tue 10-06.**
---

## Next gates

1. **Does the capital-return prop hold once PRICED?** Samsung's programme disappointed and reversed;
   SK Hynix's realised buyback holds its leg — a split between the two is the cleanest evidence a rally
   is capital-return sentiment, not demand.
2. **Breadth, not the index.** Two chip names carried a +4.61% index while KOSDAQ managed +1.07% — the narrowing is now the
   LIVE concern. Watch KOSDAQ and the up/down count, not the print.
3. **Does foreign buying return and BROADEN?** It flipped to selling 08-21; broad re-entry would be
   the first non-capital-return move since the crash.
4. **The WON — GATE 5 UNRESOLVED, PENDING DEFINITION (09-22).** The reachable instruments are a LABELED live read (Naver
   endpoint OPEN, not declarable) and the DATED series — and the dated series is NOT the 15:30 fixing: MEASURED 4.7 won apart on
   09-18 (dated 1,388.00 vs declared 1,383.3), so no fixing-to-fixing move is computable from them. Whether a labeled read can
   START a gate-5 sequence is UNDEFINED in the rule; the desk has opened it, resolved OUT OF BAND. Reinstating a live test needs a
   certified 15:30 fixing source (smbs.biz down; Yonhap Infomax / BOK ECOS / a Hana wrap untried) AND a CNH control (still unsourced).
5. **The DEMAND question — GATE 4 *REVERSES* twice (09-04, 09-07) then *CONFIRMS* twice (09-10, 09-11); HELD but did NOT WIDEN.**
   09-07's melt-up was memory-concentrated (Astra), KOSDAQ +1.07% LAGGED = no broadening. Live test: does foreign selling keep
   the de-rate going or does breadth catch up.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
