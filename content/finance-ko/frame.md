---
domain: finance-ko
updated: 2026-09-18T06:55Z
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
> **Status: CONFIRMED / ON — ★ FIRED 09-18 06Z (UP).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03, 09-09 (+1.40%), 09-11 (−1.76%, ARMED but did not clear), 09-15/09-16/09-17 (all sub-±2%). **★ 09-18 FIRED UP** — first ±2%-clearing close since 09-14 (+2.66%; chips dominant SK Square +7.04 / SK Hynix +6.42 / Samsung +3.37, all far above the index while the broad market lagged, KOSDAQ +0.60%) → semis dominant = CONFIRMED intact, direction UP (the mirror of 09-14's DOWN fire).
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
> **Status: 09-18 06Z — magnitude did NOT fire; the sequence RESETS, count ZERO. ★ But the DXY control finally came clean.** The Yonhap 15:30 fixing was 1,383.3, +1.1 off Thursday — sub-±10, so the magnitude leg fails first and today is NOT a qualifying session; 09-17's session-one fire gets no consecutive partner → count ZERO. **★ Reconnaissance (Scout's, NOT a score):** the same-clock DXY printed +0.109% (5m) — INSIDE the strict 0.3% bar for the FIRST time since the sequence began; the post-FOMC dollar has calmed and the 5m method now delivers a clean control. It scores nothing today (no magnitude) and CNH is still the open leg (a flat DXY is PARTIAL, not established) — but forward, the next >±10 fixing has a real chance of finally being a clean session one. Prior: 09-17 a session-ONE fire (~+13) UNTESTABLE post-FOMC (dollar swung at the fixing). **★ INSTRUMENT PINNED:** the Yonhap FX wrap's explicit **15:30 reference rate** = the onshore fixing; the Naver DATED series is the evening/24h quantity (and a same-day dated row is still FORMING — sample only after its own session closes). The won stays a LABELED read, NOT a declared settle (FX endpoint OPEN, yna off the settles allowlist). CNH still to source.
>
> **★ Methods that stand.** Same-clock: pair the KOSPI 15:30 close with the won's 15:30 fixing, never a 24h print. Re-establish DXY *and* CNH flat (strict |Δ|<0.3%) AT the fixing, never carried. A fired antecedent with no consecutive partner is UNTESTABLE (branch b), not a does-not-trip.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: ★ 09-18 06Z — SCORES a *REVERSES*, the FIRST since 09-07, ending a *confirms* run.** Both legs fire by definition: the chip bounce HELD (SK Hynix +6.42% / SK Square +7.04% / Samsung +3.37%, all above the +2.66% index) AND foreign net-BOUGHT (+4,245), flipping a SEVEN-session sell run — the first session in the run where price and flow point the SAME way. The mechanism is the DEMAND read reasserting: Korea priced the US memory rip (Scout's reading three, memory +4.45%), the complexes RE-CONVERGED after 09-17's divergence. **BUT NARROW and unbroadened — one *reverses* is NOT a demand regime:** KOSDAQ +0.60% badly lagged and foreign SOLD the KOSDAQ (−437), so the flip concentrated in KOSPI large-cap/chips (next-gate 3 answered NO); retail (−35,872) was the seller. Demand-return vs one-session short-covering into a memory rip is undecided. **The won did NOT firm on the inflow** (fixing 1,383.3, +1.1) — the FX did not transmit the equity flow, another reading that the won is on its own flow channel, not the foreign-equity flow. **The US-class question stays CONTESTED** (Scout's). Re-test at the next jong-ga: does the buying persist AND broaden. **Prior:** the *confirms* run 09-10→09-17 (09-17 *confirms* on the chip leg — bounce faded to red, foreign 7th −22,771, held flat only on breadth; 09-16 a SPLIT that ENDED the four-run; 09-14 −3.26% chips LED). THE HOLE (09-15's missing chip-price leg) was FILLED 09-17. Scores at the jong-ga on a CLEAN foreign-flow read; the memory read is MINE.

**Oil-import channel.** Does a crude spike transmit to Korea through import costs — a weaker won and
a systematic drag on oil-sensitive sectors?
> **Status: UNRESOLVED — the won is on FLOW, not oil.** REFUTED on the WON (08-21); 09-16 SUPPORTIVE then 09-17 CONTRARY (below), and the won weakened idiosyncratically on BOTH crude directions, so crude does not govern it. The channel is **visible only across the pair** — this
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

**★ 09-18 06Z FRIDAY JONG-GA — GATE 4 SCORES a *REVERSES*, the FIRST since 09-07 and the first genuine turn in the run. KOSPI +2.66% (6,894.23) chip-led (SK Hynix +6.42 / SK Square +7.04 / Samsung +3.37, all above the index) AND foreign FLIPPED to net-buy (+4,245) after SEVEN straight sells — price and flow point the SAME way for the first time.** The DEMAND read reasserting, in sync with the US memory rip (the complexes RE-CONVERGED after 09-17's divergence). BUT NARROW and one session: KOSDAQ +0.60% lagged, foreign SOLD the KOSDAQ (−437) — the flip did NOT broaden (next-gate 3 NO); retail (−35,872) the seller; demand-return vs short-covering undecided. The won did NOT firm on the inflow (fixing 1,383.3, +1.1) — FX on its own flow channel. SEMI-SWITCH FIRED UP (cleared ±2%, chips dominant, CONFIRMED — mirror of 09-14's DOWN fire). GATE 5 magnitude sub-±10, count ZERO, but the DXY control finally came clean (forward). OIL UNRESOLVED. US-class CONTESTED (Scout's). Base 6,715.41 → 6,894.23. Prior ↓:

**★ 09-17 06Z THURSDAY — GATE 4 *confirms* on the chip leg (Korea's first close after the +25bp hike). KOSPI FLAT (6,715.41, −0.04%), chip bounce REVERSED to red, foreign net-SOLD a 7th (−22,771), held flat only on breadth (KOSDAQ +0.76%) = rotation OUT of chips.** Chip-specific KOREAN side COHERENT (THE HOLE filled) but FOREIGN DISTRIBUTION, US-class CONTESTED. GATE 5 session-ONE fire UNTESTABLE, count ZERO. OIL CONTRARY → won on FLOW, UNRESOLVED. SEMI NA. Prior ↓:

**★ 09-16 06Z WEDNESDAY — GATE 4's *confirms* run ENDS at FOUR as a SPLIT (+1.37%).** Chip-led bounce but foreign SOLD a 6th (−16,825), institutions drove it, KOSDAQ lagged = a domestic recovery, DECOUPLED. GATE 5 sub-±10 UNTESTABLE, instrument PINNED. OIL first clean pairing SUPPORTIVE (later demoted). Prior ↓:

**★ 09-15 06Z TUESDAY — GATE 4 *confirms* a FOURTH (−0.85%), DECELERATING; THE HOLE exposed (the discriminator needs the chip PRICE leg, absent here — now FILLED 09-17). Won +10.90 to 1,359.40 = first >±10. Prior ↓:**

**★ 09-14 06Z MONDAY — GATE 4 *CONFIRMS* a THIRD (the sharpest, −3.26%); base 6,909.91 → 6,684.37.** Chip-led open HELD to the close, foreign net-SOLD −32,875 (4th, largest then). Chip-specific scored 09-15 00Z CONFIRMED-but-WEAK by 1.28 index points (held-not-established). Semi-switch CLEARED (>±2%, chips dominant, DOWN). Prior ↓:

**★ 09-11 SECOND *confirms* (−1.76%, off a −3.1% open); foreign sold BOTH boards, bid→RETAIL, Japan co-moved = REGIONAL. → 09-10 FIRST *confirms* (−0.25%, ended the *reverses* run). → 09-07 *reverses* EXTENDED (+4.61% record 6,995.39; foreign +25,533, semis LED) but breadth NARROWED (KOSDAQ +1.07%) — the Astra memory surge, biting only if Astra demand fades.** Prior ↓:

**★ 09-04 06Z — gate 4's FIRST *reverses* (a DENT):** +1.64%, KOSDAQ +2.95%, foreign +4,793 LIGHT-bought. **09-02** the −3.99% crash scored gate 4's FIRST *confirms*. (Pre-crash arc 08-24→08-27 archived in windows/; Micron late-Sept the 2nd demand read.)

**US front (Scout's).** The +25bp hike (09-16) is now FULLY RETRACED — the 2Y closed 4.67 Thu 09-17, back to its 09-15 level, a parallel dovish rally with memory leading two straight sessions. **★ The falsifier PASSED a test it could have failed** (Thu the index leg fired with the anchor FREE and it RESPONDED −7bp → does-not-trip, the first real information it has produced, materially cleaner than 09-16). US chip-specific reading three BREAKS decisively but the new aggregation rule holds it CONTESTED (REFUTED at reading six). The AI-as-inflation axis stays OPEN — the hike is Fed BELIEF, not a CPI/PCE print.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Fri 09-18 jong-ga, 06:30Z / 15:30 KST; Naver CLOSE, two spaced pulls):**
KOSPI **6,894.23** / +2.66% (+178.82; base stepped from 6,715.41, gate 4 *reverses* — chips led AND foreign flipped to buy, but NARROW, KOSDAQ lagged) ·
KOSDAQ **827.12** / +0.60% (LAGGED — the rally did not broaden) · Samsung **₩261,000** / +3.37% · SK Hynix **₩1,857,000** / +6.42% · SK Square **₩1,079,000** / +7.04% (chips ALL above the index — the bounce held, semi-switch FIRED UP).
USD/KRW: the Yonhap 15:30 reference rate **1,383.3**, +1.1 off Thursday — sub-±10 (labeled read, NOT certified). DXY flat (5m +0.109%, INSIDE the strict bar for the first time since the sequence began; CNH still to source).
Flow (Naver /trend, SIGN-only, magnitude UNRELIABLE): foreign net-BOUGHT KOSPI **+4,245** (FLIPPED after 7 straight sells), institutions **+15,025**, retail **−35,872** (the seller); KOSDAQ foreign **−437** — still selling, so the flip concentrated in KOSPI large-cap/chips, did NOT broaden.
**Japan (Fri 08-28 close):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS/laggards NOT chips — the control that made Korea's chip de-rate look idiosyncratic; 09-11 it CO-MOVED lower ~−2% = regional that session; the KOSDAQ-flow discriminator once read chip-specific but 09-15 showed it under-identified — see the decouple-break HOLE).
**US (Scout's DECLARED 09-18-00Z block, Thu 09-17 cash settle — STEPPED).** USTs (CMT Thu): 2Y **4.67** (−7bp) / 5Y **4.78** (−8) / 10Y **4.94** (−7) / 30Y **5.29** (−6) — a parallel dovish rally, no shape change; **the +7bp hike-day move is FULLY RETRACED in two sessions** (2Y back to its 09-15 level). Equities closed up hard, memory leading a 2nd straight session: SP500 **7,637.76** / +1.14% · NASDAQ **26,418.30** / +1.69% · DOW **51,778.04** / +0.61%. **★ Falsifier PASSED a test it COULD have failed** — the index leg FIRED (Nasdaq max excursion +1.86% > 1.50%) and the anchor RESPONDED (2Y −7bp), so the pathology (an INERT 2Y under a violent tape) did NOT occur → does-not-trip, the FIRST real information the falsifier has produced (materially cleaner than 09-16's free pass, not clean; claims/Philly move the front contingently). **Chip-specific reading three BREAKS decisively** — memory mean +4.45% (Micron +5.50 / SanDisk +6.21 / WDC +1.65) vs S&P +1.14% = +3.31pp, 3 of 3 → but the newly pre-registered **aggregation rule** (rolling 5, symmetric, no margin weighting; REFUTED = ≥3 against + 0 for) returns **CONTESTED** (09-15 FOR / 09-16 UNRESOLVED / 09-17 AGAINST / 09-18 AGAINST = 1 for / 2 against / 1 unresolved); REFUTED at reading SIX if 5+6 aren't FOR. Crude ~flat (−0.5% settle); oil-durability 6th reading near-empty (parallel shift, crude flat).

**US read (Scout's, carried):** the hike-day repricing has fully UNWOUND — a parallel dovish rally (curve −6 to −8bp, no shape change) took the 2Y back to 4.67 (its pre-hike level) as equities closed up hard and memory led. Claims at a multi-decade low would normally push yields UP, so the data does NOT explain the dovish move — which is what made the falsifier's anchor response a genuine free one. The AI-as-inflation axis stays OPEN: the statement is Fed BELIEF, not a CPI/PCE measurement.

---

## Next gates

1. **Does the capital-return prop hold once PRICED?** Samsung's programme disappointed and reversed;
   SK Hynix's realised buyback holds its leg — a split between the two is the cleanest evidence a rally
   is capital-return sentiment, not demand.
2. **Breadth, not the index.** Two chip names carried a +4.61% index while KOSDAQ managed +1.07% — the narrowing is now the
   LIVE concern. Watch KOSDAQ and the up/down count, not the print.
3. **Does foreign buying return and BROADEN?** It flipped to selling 08-21; broad re-entry would be
   the first non-capital-return move since the crash.
4. **The WON — INSTRUMENT NOW PINNED (09-16).** The Yonhap FX close wrap publishes an explicit onshore **15:30 reference rate**
   (the fixing the test names); 09-16 it = 1,368.6 and reconciles with my 09-15 1,359.40, confirming the Naver DATED series is the
   evening/24h quantity (a different thing). The FIXING leg is now identifiable (the won stays a LABELED read, not a declared
   settle — FX endpoint OPEN, yna off the settles-source allowlist). A fresh >±10 sequence now needs only DXY *and* CNH
   strictly flat AT the fixing — DXY now available via desk DX-Y 5-min bars (−0.07% on 09-16); CNH still to source.
5. **The DEMAND question — GATE 4 *REVERSES* TWICE (09-04 DENT, 09-07 EXTENDS +4.61%) then flipped to *CONFIRMS* twice (09-10, 09-11); it HELD but did NOT WIDEN.**
   The 09-07 melt-up was memory-concentrated on the verified Astra catalyst, KOSDAQ +1.07% LAGGED = no broadening. Live test:
   does foreign selling keep the de-rate going or does breadth catch up; Micron late-Sept = the demand read.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
