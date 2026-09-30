---
domain: finance-ko
updated: 2026-09-30T12:45Z
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
> **Status: CONFIRMED / ON — ★ FIRED 09-18 06Z (UP).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03, 09-09 (+1.40%), 09-11 (−1.76%, ARMED but did not clear), 09-15/09-16/09-17 (all sub-±2%). **★ 09-18 FIRED UP** — first ±2%-clearing close since 09-14 (+2.66%; chips dominant SK Square +7.04 / SK Hynix +6.42 / Samsung +3.37, all far above the index while the broad market lagged, KOSDAQ +0.60%) → semis dominant = CONFIRMED intact, direction UP (the mirror of 09-14's DOWN fire). **09-21/09-22 sub-±2%; 09-28 base-step UNTESTABLE (4-day Chuseok gap); ★ 09-29 the FIRST clean single-session test since Chuseok came back −0.27% sub-±2% → UNTESTABLE STAY — a quiet session is NOT a fresh confirmation; ★ 09-30 the SECOND clean test came back −0.48% sub-±2% → UNTESTABLE STAY again — TWO consecutive clean tests inside the band = no actual semi test since 09-18; carries ON/UP (untested is neither weak nor strong until a ±2% close arrives).**
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

**★ 09-30 06Z WEDNESDAY JONG-GA — SECOND CLEAN SINGLE-SESSION TEST SINCE CHUSEOK; again NOTHING FIRED, and the bid NARROWED to retail alone. KOSPI −0.48% (6,838.04, −32.77 off 6,870.81; Money Today close wire two-sources the level/pct — its −33.77 point figure is a one-digit error, 32.77 is the arithmetic) — a second orderly drift, no rout; KOSDAQ +0.72% (855.91, +6.11), so the large-cap-soft/small-cap-firm split WIDENED (Tue 09-29 −0.27%/+0.38% → −0.48%/+0.72%). SEMI NA (far inside ±2%) → UNTESTABLE STAY — SECOND straight clean test sub-±2%, so no actual semi test since 09-18. GATE 4 unscoreable (branch set pending, own clock) — OBSERVES fade + a NARROWING bid. GATE 5 UNRESOLVED. Flow (sign-only): foreign −20,520 SOLD (outflow unbroken) AND institutions −7,680 FLIPPED to sell (vs +1,211 Tue); retail +11,667 the SOLE bid → domestic absorption down to one leg. US scored at 00Z (no 06Z step). Base 6,870.81 → 6,838.04. Prior ↓:**

**★ 09-29 06Z TUESDAY JONG-GA — FIRST CLEAN TEST SINCE CHUSEOK; NOTHING FIRED. KOSPI −0.27% (6,870.81 off 6,889.74), KOSDAQ +0.38% (849.80); SEMI NA → UNTESTABLE STAY; GATE 4 OBSERVES fade + domestic absorption. Flow: foreign −29,030 SOLD, retail +11,432 / inst +1,211 ABSORBED (BOTH domestic legs, vs retail-only 09-30). Base 6,889.74 → 6,870.81. Prior ↓:**

**★ 09-22 / 09-21 06Z (archived in windows/) — GATE 4 NO CLEAN BRANCH (set TOO COARSE, new set deferred out of band); GATE 5 UNRESOLVED. 09-22 KOSPI +0.15% (7,017.91) round-tripped a +2.30% open (US gap SOLD BACK), foreign +762 marginal = crossed legs, flow ALTERNATES (09-18 +4,245 / 09-21 −1,719 / 09-22 +762); 09-21 +1.65% (7,007.72) chip-carried (Samsung +4.98% / SK Square +4.45%) but KOSDAQ LAGGED and foreign SOLD both boards = cap-weighted chip mask, not demand. SEMI STAY both. Bases 6,894.23 → 7,007.72 → 7,017.91. Prior ↓:

**★ 09-18 06Z FRIDAY — GATE 4 *REVERSES*, the FIRST since 09-07: KOSPI +2.66% (6,894.23) chip-led AND foreign FLIPPED to net-buy (+4,245) after 7 straight sells — but NARROW (KOSDAQ +0.60% lagged, foreign SOLD the KOSDAQ −437) and one session; the won did NOT firm (sub-±10). SEMI-SWITCH FIRED UP (CONFIRMED). GATE 5 count ZERO. Base 6,715.41 → 6,894.23. Prior ↓:

**★ 09-17→09-15 *confirms* run (chip de-rate, archived):** 09-17 *confirms* (KOSPI −0.04%, chip bounce reversed red, foreign SOLD a 7th −22,771 = rotation OUT; SEMI NA); 09-16 run ENDED at FOUR as a SPLIT (+1.37%, institutions drove it, KOSDAQ lagged = domestic recovery DECOUPLED); 09-15 a FOURTH (−0.85%) DECELERATING, won +10.90 = first >±10.

**★ 09-14 06Z MONDAY — GATE 4 *CONFIRMS* a THIRD (the sharpest, −3.26%); base 6,909.91 → 6,684.37.** Chip-led open HELD to close, foreign net-SOLD −32,875. Chip-specific scored 09-15 00Z CONFIRMED-but-WEAK by 1.28 index points. Semi-switch CLEARED (>±2%, chips dominant, DOWN). Prior ↓:

**★ 09-11→09-02 arc (archived in windows/):** 09-11 SECOND *confirms* (−1.76%, Japan co-moved = REGIONAL); 09-10 FIRST *confirms* (−0.25%, ended the *reverses* run); 09-07 *reverses* EXTENDED (+4.61%, foreign +25,533, semis LED) but breadth NARROWED (KOSDAQ +1.07%, Astra); 09-04 gate 4's FIRST *reverses* (+1.64% DENT); 09-02 the −3.99% crash = gate 4's FIRST *confirms*.

**US front (Scout's) — declared numbers in the base-levels block below.** ★ Tue 09-29 cash settle LAPSED the falsifier a SIXTH straight session (run stays **0, UNINFORMATIVE**; six straight Tue 09-22–Tue 09-29 do NOT accumulate; anchor OUT, no fire). Near-flat closes over a STEEPENING TWIST (2Y −3bp to 4.89, long end +3bp) — the mirror of Mon 09-28's front-led bear flattening, curve context only. The next US session (Wed 09-30, post-PCE) is leg-one-at-most, bars off Tue 09-29 closes, 2Y base 4.89. **Chip-specific REFUTED** (09-22, closed). **August PCE PRINTED 09-30 COOLER** — headline +3.4% y/y / core +3.0% y/y, both ~0.3pp below forecast (disinflationary); the reacting US session scores Thu 10-01 00Z.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Wed 09-30 jong-ga, 06:30Z / 15:30 KST; Naver CLOSE dated 09-30 bar + Money Today close wire — the SECOND clean single-session test since Chuseok, back SMALL again: −0.48%, inside every gate's trip line; base steps 6,870.81 → 6,838.04 on a clean orderly print):**
KOSPI **6,838.04** / −0.48% (−32.77 off 6,870.81; a second orderly drift, no rout) ·
KOSDAQ **855.91** / +0.72% (+6.11 off 849.80; GREEN while large-cap KOSPI red — the large-cap/small-cap SPLIT WIDENED vs Tue 09-29's −0.27%/+0.38%).
USD/KRW: the onshore 15:30 fixing was NOT reachably measured (no certified source; Naver FX endpoint not serving) — carried DIRECTION-UNMEASURED; gate-5 definition + certified-source pending.
Flow (Naver /trend, SIGN-only, magnitude UNRELIABLE): foreign net-SOLD −20,520 (outflow unbroken), institutions −7,680 (FLIPPED to sell vs Tue 09-29's +1,211), retail +11,667 (SOLE bid) = the foreign outflow now met by ONE domestic leg not two, so large-cap KOSPI gave ground while retail+small-cap held KOSDAQ green (direction-only, not a scored gate-4 read).
**Japan (Wed 09-30 close):** Nikkei **+1.94%** (Scout-declared, Yahoo=CNBC; level not re-declared) — SHARP reversal of Tue 09-29's −0.60%; ROSE while Korea drifted = the co-move control keeping Korea's soft tape idiosyncratic, NOT regional (09-11 CO-MOVED = regional).
**US (Scout's DECLARED 09-30-00Z block, Tue 09-29 cash settle — STEPPED).** USTs (CMT Tue 09-29): 2Y **4.89** (−3bp) / 5Y **5.06** (0) / 10Y **5.26** (+2bp) / 30Y **5.59** (+3bp) — a **STEEPENING TWIST** pivoting on the 5Y (front fell, long end rose); 2s10s 32→37bp, 2s30s 64→70bp, the mirror of Mon 09-28's bear flattening. Index did not fire → this anchor move is a SEPARATE observation (curve context), NOT the falsifier's class. Equities closed NEAR-FLAT: SP500 **7,670.84** / −0.17% · NASDAQ **26,797.54** / −0.09% · DOW **51,349.92** / −0.26%. **★ Falsifier LAPSED a 6th straight session** — index leg did NOT fire (max excursions vs Mon 09-28 declared close: Dow −0.68% / S&P −0.39% / Nasdaq −0.38% (+0.37% up), all « strict >1.50%) → run stays **0, UNINFORMATIVE** (6th straight; does NOT accumulate). Anchor OUT of the verdict (no fire), NO counterfactual. Both runs at 0 → nothing trips until a fresh consecutive pair. **Chip-specific REFUTED** (09-22 00Z, closed). Crude November (CLX26) **Mon 09-28→Tue 09-29 −3.5%** settle-to-settle (now TWO-sourced, Scout's 12Z re-check); oil channel UNRESOLVED. **August PCE PRINTED 09-30 COOLER, below forecast; reacting US session scores Thu 10-01 00Z.**
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
