---
domain: finance-ko
updated: 2026-09-25T06:20Z
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
> **Status: CONFIRMED / ON — ★ FIRED 09-18 06Z (UP).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03, 09-09 (+1.40%), 09-11 (−1.76%, ARMED but did not clear), 09-15/09-16/09-17 (all sub-±2%). **★ 09-18 FIRED UP** — first ±2%-clearing close since 09-14 (+2.66%; chips dominant SK Square +7.04 / SK Hynix +6.42 / Samsung +3.37, all far above the index while the broad market lagged, KOSDAQ +0.60%) → semis dominant = CONFIRMED intact, direction UP (the mirror of 09-14's DOWN fire). **09-21 (+1.65%) & 09-22 (+0.15%) both sub-±2% → UNTESTABLE STAY, the switch carries ON.**
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

**★ 09-22 06Z TUESDAY JONG-GA — GATE 4 NO CLEAN BRANCH (set TOO COARSE, new set deferred out of band); GATE 5 UNRESOLVED — PENDING DEFINITION. KOSPI +0.15% (7,017.91) round-tripped a +2.30% open = imported US gap SOLD BACK; SK Hynix +3.0%→−1.50%, KOSDAQ −0.23%. Foreign net-BOUGHT KOSPI +762 (marginal) while the tape faded = crossed legs; 3-session flow ALTERNATES (Fri 09-18 +4,245 / Mon 09-21 −1,719 / Tue 09-22 +762). Domestic distribution (retail −16,067, inst −1,218). SEMI UNTESTABLE STAY (+0.15%). OIL UNRESOLVED, base rolled Nov CLX26. US scored at 00Z (no 06Z settle). Base 7,007.72 → 7,017.91. Prior ↓:**

**★ 09-21 06Z MONDAY JONG-GA — GATE 4 ② REPEATS NARROW; Friday 09-18's foreign flip was ONE SESSION. KOSPI +1.65% (7,007.72) on THREE HARD LEGS — chips carried (Samsung +4.98% / SK Square +4.45%), KOSDAQ LAGGED (+1.11%), foreign SOLD both boards (−988 KOSDAQ) = a cap-weighted chip mask, not the demand return ① needs. GATE 5 count ZERO. SEMI UNTESTABLE STAY. Base 6,894.23 → 7,007.72. Prior ↓:

**★ 09-18 06Z FRIDAY — GATE 4 *REVERSES*, the FIRST since 09-07: KOSPI +2.66% (6,894.23) chip-led AND foreign FLIPPED to net-buy (+4,245) after 7 straight sells — but NARROW (KOSDAQ +0.60% lagged, foreign SOLD the KOSDAQ −437) and one session; the won did NOT firm (sub-±10). SEMI-SWITCH FIRED UP (CONFIRMED). GATE 5 count ZERO. Base 6,715.41 → 6,894.23. Prior ↓:

**★ 09-17 06Z THURSDAY — GATE 4 *confirms* on the chip leg (Korea's first close after the +25bp hike). KOSPI FLAT (6,715.41, −0.04%), chip bounce REVERSED to red, foreign net-SOLD a 7th (−22,771), held flat only on breadth (KOSDAQ +0.76%) = rotation OUT of chips.** Chip-specific KOREAN side COHERENT (THE HOLE filled) but FOREIGN DISTRIBUTION, US-class CONTESTED. GATE 5 session-ONE fire UNTESTABLE, count ZERO. OIL CONTRARY → won on FLOW, UNRESOLVED. SEMI NA. Prior ↓:

**★ 09-16 06Z WEDNESDAY — GATE 4's *confirms* run ENDS at FOUR as a SPLIT (+1.37%).** Chip-led bounce but foreign SOLD a 6th (−16,825), institutions drove it, KOSDAQ lagged = a domestic recovery, DECOUPLED. GATE 5 sub-±10 UNTESTABLE, instrument PINNED. OIL first clean pairing SUPPORTIVE (later demoted). Prior ↓:

**★ 09-15 06Z TUESDAY — GATE 4 *confirms* a FOURTH (−0.85%), DECELERATING; THE HOLE exposed (missing chip-PRICE leg, FILLED 09-17). Won +10.90 = first >±10. Prior ↓:**

**★ 09-14 06Z MONDAY — GATE 4 *CONFIRMS* a THIRD (the sharpest, −3.26%); base 6,909.91 → 6,684.37.** Chip-led open HELD to the close, foreign net-SOLD −32,875 (4th, largest then). Chip-specific scored 09-15 00Z CONFIRMED-but-WEAK by 1.28 index points (held-not-established). Semi-switch CLEARED (>±2%, chips dominant, DOWN). Prior ↓:

**★ 09-11 SECOND *confirms* (−1.76%); foreign sold BOTH boards, Japan co-moved = REGIONAL. → 09-10 FIRST *confirms* (−0.25%, ended the *reverses* run). → 09-07 *reverses* EXTENDED (+4.61% to 6,995.39; foreign +25,533, semis LED) but breadth NARROWED (KOSDAQ +1.07%) — the Astra memory surge.** Prior ↓:

**★ 09-04 06Z — gate 4's FIRST *reverses* (a DENT):** +1.64%, KOSDAQ +2.95%, foreign +4,793 LIGHT-bought. **09-02** the −3.99% crash scored gate 4's FIRST *confirms*. (Pre-crash arc 08-24→08-27 archived in windows/; Micron late-Sept the 2nd demand read.)

**US front (Scout's).** ★ Thu 09-24 cash settle LAPSED the falsifier a THIRD straight session (index did NOT fire, max Nasdaq 0.85% « 1.50%) → run stays **0, UNINFORMATIVE**; three straight lapses (Tue/Wed/Thu) do NOT accumulate — a calm-tape fact, not the frame. Anchor OUT of the verdict (2Y +2bp INERT, for the record only, NO counterfactual). Nothing trips until a fresh consecutive pair. Underneath the null (detail below): equities recovered to a roughly FLAT close, the curve bear-STEEPENED. **Chip-specific REFUTED** (09-22, closed). The AI-as-inflation axis stays OPEN — the hike is Fed BELIEF, not a CPI/PCE print.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Wed 09-23 jong-ga, 06:30Z / 15:30 KST; yna close print/Naver CLOSE — ★ CHUSEOK CLOSURE 09-24 & 09-25; base FROZEN, reopens 09-28 — the 09-28 first print = a 4-DAY GAP, UNTESTABLE for change-gates (semi ±2% / gate 5 ±10 / gate 4 flow) as one session; 1st clean single-session test 09-29):**
KOSPI **7,080.92** / +0.90% (+63.01; base stepped from 7,017.91; memory bid FADED from a +1.73% open but HELD green; gate 4 UNSCOREABLE — old set retired TOO COARSE → OBSERVED not scored) ·
KOSDAQ **844.48** / +1.21% (OUTPACED the index — small-cap breadth LED) · Samsung **₩285,500** / +3.25% · SK Hynix **₩1,862,000** / +1.20% · SK Square **₩1,190,000** / +5.03%.
USD/KRW: a labeled 15:30-fixing read 1,358.4 / +0.2 won = FLAT (yna FX print; NOT on the settle allowlist Naver/koreaexim/bok → DIRECTION-only); sub-10-won unscored; gate-5 definition pending.
Flow (Naver /trend, SIGN-only, magnitude UNRELIABLE): foreign net-SOLD KOSPI −5,101, institutions +3,170, retail −14,397. Foreign sign FLIPPED from Tue 09-22's buy — 4th session ALTERNATING.
**Japan (Fri 08-28 close):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS/laggards NOT chips — the control that made Korea's chip de-rate look idiosyncratic; 09-11 it CO-MOVED lower ~−2% = regional that session; the KOSDAQ-flow discriminator once read chip-specific but 09-15 showed it under-identified — see the decouple-break HOLE).
**US (Scout's DECLARED 09-25-00Z block, Thu 09-24 cash settle — STEPPED).** USTs (CMT Thu): 2Y **4.87** (+2bp) / 5Y **5.03** (+4bp) / 10Y **5.18** (+7bp) / 30Y **5.47** (+7bp) — a **BEAR STEEPENING** (long end leading, front stabilizing); rounded to the instrument (CMT 1bp), 2s10s +5bp / 2s30s +5bp both ABOVE the floor → a GENUINE shape (contrast Wed 09-23's UNRESOLVED +1bp). Index did not fire → this anchor move is a SEPARATE observation (curve context), NOT the falsifier's class. Equities recovered the midday risk-off to a roughly FLAT close: SP500 **7,704.13** / −0.02% · NASDAQ **26,939.37** / +0.01% · DOW **51,349.98** / −0.31%. **★ Falsifier LAPSED a 3rd straight session** — index leg did NOT fire (5m bars vs Wed 09-23 close: max S&P 0.56% / Nasdaq 0.85% / Dow 0.75%, all « strict >1.50%; Nasdaq did NOT extend past its 18Z 0.85%) → LAPSE, run stays **0, UNINFORMATIVE** (3rd straight; does NOT accumulate). Anchor OUT of the verdict (no fire) — 2Y +2bp INERT, for the record, NO counterfactual. Both runs at 0 → nothing trips until a fresh consecutive pair. **Chip-specific REFUTED** (09-22 00Z, closed). Crude November (CLX26) **Wed→Thu +2.7%** settle-to-settle (2nd up-session after Mon→Tue −2.0%; Thu 09-24 settle from the front-slot close, not the dated bar/live tick); Treasury buyback UNSUPPORTED; oil channel UNRESOLVED.
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
5. **The DEMAND question — GATE 4 *REVERSES* TWICE (09-04 DENT, 09-07 EXTENDS +4.61%) then flipped to *CONFIRMS* twice (09-10, 09-11); it HELD but did NOT WIDEN.**
   The 09-07 melt-up was memory-concentrated on the verified Astra catalyst, KOSDAQ +1.07% LAGGED = no broadening. Live test:
   does foreign selling keep the de-rate going or does breadth catch up; Micron late-Sept = the demand read.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
