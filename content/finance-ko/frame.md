---
domain: finance-ko
updated: 2026-09-17T06:45Z
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
> **Status: CONFIRMED / ON — FIRED 09-14 06Z (DOWN).** Prior fires both directions: 09-07 (+4.61%, semis dominant, Astra melt-up UP), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03 (semis red under a green index — watch), 09-09 (+1.40%, SK Hynix led), 09-11 (−1.76%, ARMED at the open but did NOT clear = untested). **★ 09-14 FIRED DOWN** — first ±2%-clearing close since 09-07 (−3.26%; chips dominant SK Square −8.17 / SK Hynix −6.35 / Samsung −4.05) → semis dominant = CONFIRMED intact. **09-15 did NOT test** (−0.85%, nowhere near ±2% — not a near-miss); FIRED-DOWN stands.
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
> **Status: 09-17 06Z — a FRESH session-ONE magnitude fire, UNTESTABLE (control compromised post-FOMC).** The won weakened to a live ~1,382, ~+13 past Wednesday's fixing — clears ±10, session ONE of a new sequence. But the gate needs the dollar flat AT the fixing, and post-FOMC the intraday dollar SWUNG there (past the strict 0.3% bar on desk DX-Y 5-min bars — a US read I cannot certify from Naver, which shows only the DAILY dollar flat, −0.07%), CNH unsourced → the antecedent cannot be cleanly certified = **UNTESTABLE (branch b), count ZERO** — the gate working, as the 18Z forward pre-registered. **★ CORRECTION to the 09-16 robustness claim:** the Naver dated 09-16 row was still FORMING when sampled (1,368.30 → finalized 1,377.50), so the dated move was **+13.80, ABOVE ±10**, not +4.6 — a forming-bar trap (sample a dated row only AFTER its own session closes). The 09-16 UNTESTABLE verdict STILL stands (it rests on the FIXING leg **+9.2 to 1,368.6**, sub-±10); only the "both bases agree" half is struck. **★ INSTRUMENT PINNED:** the Yonhap FX wrap's explicit **15:30 reference rate** = the onshore fixing (= my 09-15 1,359.40); the Naver DATED series is the evening/24h quantity. The won stays a LABELED read, NOT a declared settle (FX endpoint OPEN, yna off the settles allowlist). DXY available AT the fixing (desk DX-Y 5-min bars); CNH still to source.
>
> **★ Methods that stand.** Same-clock: pair the KOSPI 15:30 close with the won's 15:30 fixing, never a 24h print. Re-establish DXY *and* CNH flat (strict |Δ|<0.3%) AT the fixing, never carried. A fired antecedent with no consecutive partner is UNTESTABLE (branch b), not a does-not-trip.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: 09-17 06Z — the SPLIT resolves toward *CONFIRMS* on the chip leg.** The FOMC-day chip bounce REVERSED to red in ONE session (Hynix −0.80% / Samsung −0.39% / SK Square −1.18%, all below a −0.04% index) while foreign net-SOLD a SEVENTH straight, the LARGEST of the run (−22,771) — "it fades AND foreign keeps selling" both fire. The index held FLAT only because breadth broadened (KOSDAQ +0.76% offsetting red chips) = a rotation OUT of chips, so the de-rate did not drag the tape. **Chip-specific — the KOREAN side is now COHERENT** (both discriminator legs align, first since 09-14: foreign concentrated in KOSPI −22,771 vs KOSDAQ −338 AND the chip PRICE leg underperformed — THE HOLE, 09-15's missing leg, is FILLED). **But the mechanism is FOREIGN DISTRIBUTION (EM outflow on higher-for-longer), NOT a US de-rate:** US memory OUTPERFORMED Wednesday, so Korea's chips faded AGAINST green US memory — the complexes DIVERGED and the US-class question stays **CONTESTED** (Scout's; a Korean session cannot resolve it). **SEMI-SWITCH NA** (−0.04% < ±2%). **Prior:** 09-16 the *confirms* run ENDED at FOUR as a SPLIT (KOSPI +1.37% chip-led bounce, foreign SOLD a 6th −16,825, institutions +12,104 drove it, KOSDAQ +0.44% lagged = a DOMESTIC-institutional recovery; persistence check 00Z UNRESOLVED = the US-side confirmation of THE HOLE). The four *confirms* 09-10→09-15 (09-14 −3.26% chips LED, foreign −32,875); prior *reverses* 09-04 DENT → 09-07 EXTENDS (+4.61%). Scores at the jong-ga on a CLEAN foreign-flow read; the memory read is MINE.

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

**★ 09-17 06Z THURSDAY JONG-GA — Korea's FIRST close after the +25bp hike: GATE 4's SPLIT resolves toward *CONFIRMS* on the chip leg. KOSPI FLAT (6,715.41, −0.04%) but the chip bounce REVERSED to red (Hynix −0.80% / Samsung −0.39% / SK Square −1.18%) and foreign net-SOLD a 7th straight, the LARGEST of the run (−22,771); the index held flat only on breadth (KOSDAQ +0.76%) = a rotation OUT of chips.** Chip-specific KOREAN side now COHERENT (both discriminator legs align, first since 09-14 — THE HOLE filled) but it is FOREIGN DISTRIBUTION, not a US de-rate: US memory OUTPERFORMED Wed, the complexes DIVERGED, US-class stays CONTESTED (Scout's). GATE 5 a session-ONE magnitude fire (won ~+13 >±10) but UNTESTABLE (post-FOMC control), count ZERO. OIL a CONTRARY 2nd reading → the won is on FLOW not oil, channel UNRESOLVED. SEMI NA. Base 6,717.97 → 6,715.41. Prior ↓:

**★ 09-16 06Z WEDNESDAY — GATE 4's *confirms* run ENDS at FOUR as a SPLIT; base 6,627.26 → 6,717.97 (+1.37%).** Chip-led bounce (SK Hynix +4.08%) but foreign SOLD a 6th (−16,825), institutions +12,104 drove it, KOSDAQ +0.44% LAGGED = DECOUPLED, a domestic recovery. GATE 5 EXPIRED sub-±10, UNTESTABLE, instrument PINNED. OIL first clean pairing = SUPPORTIVE (later demoted). Prior ↓:

**★ 09-15 06Z TUESDAY — GATE 4 *confirms* a FOURTH (−0.85%), DECELERATING; THE HOLE exposed (the discriminator needs the chip PRICE leg, absent here — now FILLED 09-17). Won +10.90 to 1,359.40 = first >±10. Prior ↓:**

**★ 09-14 06Z MONDAY — GATE 4 *CONFIRMS* a THIRD (the sharpest, −3.26%); base 6,909.91 → 6,684.37.** Chip-led open HELD to the close, foreign net-SOLD −32,875 (4th, largest then). Chip-specific scored 09-15 00Z CONFIRMED-but-WEAK by 1.28 index points (held-not-established). Semi-switch CLEARED (>±2%, chips dominant, DOWN). Prior ↓:

**★ 09-11 SECOND *confirms* (−1.76%, off a −3.1% open); foreign sold BOTH boards, bid→RETAIL, Japan co-moved = REGIONAL. → 09-10 FIRST *confirms* (−0.25%, ended the *reverses* run). → 09-07 *reverses* EXTENDED (+4.61% record 6,995.39; foreign +25,533, semis LED) but breadth NARROWED (KOSDAQ +1.07%) — the Astra memory surge, biting only if Astra demand fades.** Prior ↓:

**★ 09-04 06Z — gate 4's FIRST *reverses* (a DENT):** +1.64%, KOSDAQ +2.95%, foreign +4,793 LIGHT-bought. **09-02** the −3.99% crash scored gate 4's FIRST *confirms*. (Pre-crash arc 08-24→08-27 archived in windows/; Micron late-Sept the 2nd demand read.)

**US front (Scout's).** The two-INERT anchor run (Mon/Tue +2bp) ENDED Wed 09-16 on the +25bp FOMC hike — the anchor RESPONDED +7bp (2Y 4.74), the switch vindicated but on a session that could not falsify it (the hike moved the 2Y by construction), falsifier counter STAYS 0. No new settle at 09-17 06Z (US shut); next scored Friday 00Z. US chip-specific BROKE → CONTESTED (US memory OUTPERFORMED). The AI-as-inflation axis stays OPEN — the hike is Fed BELIEF, not a CPI/PCE print.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Thu 09-17 jong-ga, 06:30Z / 15:30 KST; Naver CLOSE two-sourced by a Yonhap native close-wrap):**
KOSPI **6,715.41** / −0.04% (−2.56; base stepped from 6,717.97, gate 4 *confirms* on the chip leg — the FOMC-day bounce faded, held flat only on breadth) ·
KOSDAQ **822.18** / +0.76% (GREEN — breadth broadened, offsetting red chips) · Samsung **₩252,500** / −0.39% · SK Hynix **₩1,745,000** / −0.80% · SK Square **₩1,008,000** / −1.18% (chips ALL below the index — the bounce reversed).
USD/KRW: a live **~1,382** near the 15:30 fixing (labeled read, NOT certified), WEAKER **~+13** off Wednesday's 1,368.6 fixing — clears ±10 = session ONE of a new sequence, but UNTESTABLE (the post-FOMC dollar swung AT the fixing, control uncertifiable; CNH unsourced). The daily dollar was flat (DXY −0.07%).
Flow (Naver /trend, SIGN-only, magnitude UNRELIABLE): foreign net-SOLD KOSPI **−22,771** (SEVENTH consecutive, the LARGEST of the run), institutions **+1,586** and retail **+4,138** absorbed it; KOSDAQ foreign −338 — the outflow concentrated in KOSPI, the chip-specific discriminator's flow leg.
**Japan (Fri 08-28 close):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS/laggards NOT chips — the control that made Korea's chip de-rate look idiosyncratic; 09-11 it CO-MOVED lower ~−2% = regional that session; the KOSDAQ-flow discriminator once read chip-specific but 09-15 showed it under-identified — see the decouple-break HOLE).
**US (Scout's DECLARED 09-17-00Z block, Wed 09-16 FOMC settle — STEPPED per bidirectional C10; the +25bp hike to 3.75–4.00%, 12-0).** USTs (CMT Wed 09-16): 2Y **4.74** (+7bp — RESPONDED, the two-INERT run ENDS) / 5Y **4.86** (+3) / 10Y **5.01** (+1) / 30Y **5.35** (−1) — bear-flattened on the hike (2s10s −6 / 2s30s −8), attribution UNAVAILABLE (retail + hike both hit the front). Equities CLOSED RED, value-led: SP500 **7,551.81** / −0.45% · NASDAQ **25,978.42** / −0.01% (flat) · DOW **51,461.90** / −1.21% (value hit hardest, tech flat). Falsifier INDEX LEG FIRED (Dow max excursion −1.74%, first testable session since the counter hit 0) but the anchor RESPONDED → pathology ABSENT, does-not-trip on a session that could NOT falsify it (the hike moved the 2Y by construction, near-zero info); counter STAYS 0. **Memory OUTPERFORMED the tape** — Micron **−0.11%** / SanDisk −0.71% / WDC **+1.22%** (worst-to-best; mean **+0.13%** vs S&P −0.45% = +0.58pp gap, a SIGN FLIP), Nvidia +0.82% → **chip-specific persistence BREAKS → CONTESTED** (one reading FOR, one AGAINST from the same instrument). Crude Wed ~−3.2% (matched pit-settle basis), gold ~−1.7%. **★ Oil-durability 5th reading near-empty** — crude fell with a flatter curve, but the flattening is straightforwardly the hike (confound); unchanged. **★ THIRD confound this week to run our way** (chip broad-leg boundary, oil FOMC-eve, now the falsifier's first firing on the one day the anchor was guaranteed to move) — a pattern the desk flags.

**US read (Scout's, carried):** **reflation / no-landing → higher-for-longer**; the +25bp hike bear-flattened the curve (+7bp 2Y, −1bp 30Y) and ENDED the two-INERT anchor run — but attribution is UNAVAILABLE (retail + hike both hit the front, a hike flattens by construction). The intraday "dovish hike" REVERSED into the settle (a third vindication of score-the-settle-not-the-intraday). The AI-as-inflation axis stays OPEN: the statement is Fed BELIEF, not a CPI/PCE measurement.

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
