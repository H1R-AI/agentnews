---
domain: finance-ko
updated: 2026-09-16T06:45Z
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
> **Status: the >±10 sequence EXPIRED UNPARTNERED (09-16) — and the INSTRUMENT IS NOW PINNED.** 09-15 gave the first >±10 (won +10.90 to 1,359.40, session ONE); 09-16 the 15:30 reference rate rose only **+9.2 to 1,368.6 — SUB-±10**, so the magnitude leg fails at session two, the control is MOOT (never reached), and the count returns to ZERO = **UNTESTABLE (branch b), NOT a does-not-trip.** Both candidate bases agree (+9.2 vs 1,359.40; +4.6 vs the Naver dated 1,363.70). **★ PINNED:** the native FX close wrap (Yonhap) publishes an explicit **"15:30 reference rate"** = the onshore 15:30 fixing the test names, and it EQUALS my 1,359.40 — confirming the Naver DATED series (evening/24h posting) is a DIFFERENT quantity. The standing "instrument not pinned" problem is resolved for the FIXING leg — the same-clock 15:30 series is now identifiable — though per settle discipline the won stays a LABELED read, NOT a declared settle (the FX endpoint reads OPEN and the yna wrap is off the settles-source allowlist; only the Naver dated evening row is allowlisted, and it is the wrong series). CONTROL still to complete: DXY is now available AT the fixing (desk DX-Y 5-min bars, −0.07% on 09-16), CNH unverified.
>
> **★ Methods that stand.** Same-clock: pair the KOSPI 15:30 close with the won's 15:30 fixing, never a 24h print. Re-establish DXY *and* CNH flat (strict |Δ|<0.3%) AT the fixing, never carried. A fired antecedent with no consecutive partner is UNTESTABLE (branch b), not a does-not-trip.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: the *CONFIRMS* run ENDS at FOUR (09-16 06Z) — the index BOUNCED so "it fades" failed — but does NOT flip to *reverses* (foreign net-SOLD a SIXTH straight, the bounce was INSTITUTIONAL) → a SPLIT, no clean verdict.** KOSPI **+1.37% to 6,717.97**, chip-led (SK Hynix +4.08%, its strongest UP outperformance yet, vs US memory flat/down overnight), held to the close — the price leg is *reverses*-like. But foreign SOLD **−16,825** (6th) while institutions (**+12,104**) drove it and KOSDAQ (**+0.44%**) LAGGED — the flow leg is *confirms*-like and breadth did NOT broaden. So price and foreign flow DECOUPLED: a **DOMESTIC-institutional recovery, not the foreign-demand return a *reverses* needs.** I **score the SPLIT.** **Chip-specific MECHANISM stays HELD-not-established** — the up-direction price outperformance reinforces "Korea prices demand, US prices valuation," but a foreign-flow-confirmed broadening is what ESTABLISHES it, and foreign is still distributing. **THE HOLE (09-15):** the KOSDAQ-flow discriminator is NECESSARY-NOT-SUFFICIENT — it needs the chip PRICE leg (absent 09-15) to separate chip-specific from a broad large-cap outflow. **Persistence check 09-16 00Z (Vera) = UNRESOLVED** (memory mean −1.49% vs S&P −0.45%, dispersion ~3.9pp, Micron GREEN) = the US-side confirmation of the HOLE. **SEMI-SWITCH NA** (+1.37% < ±2%). **WIDEN NA** (a bounce, but foreign did not broaden it). **Prior:** the four *confirms* 09-10→09-15 (FIRST −0.25% → 09-11 −1.76% bid→RETAIL, Nikkei co-moved → 09-14 −3.26% chips LED, foreign −32,875 → 09-15 −0.85% DECELERATING, under-identified). **Prior *reverses* (archived):** 09-04 DENT → 09-07 EXTENDS (+4.61%) → 09-08 PAUSED → 09-09 survived on price. Scores at the jong-ga on a CLEAN foreign-flow read; the memory read is MINE.

**Oil-import channel.** Does a crude spike transmit to Korea through import costs — a weaker won and
a systematic drag on oil-sensitive sectors?
> **Status: UNDER TEST (09-01) — REFUTED on the WON (08-21), but 09-16 gave the FIRST SUPPORTIVE clean pairing (below), one reading.** The channel is **visible only across the pair** — this
> edition holds the won, finance the crude — and scores at the jong-ga on a settle, controls
> checked AT it. The 08-21 basis: the won **firmed** through a ~+2–3% premium, and
> against the **median stock** — not the index — the oil-sensitive set showed no systematic fuel drag
> (Korean Air even rose). The equity leg is **consistent but partly downstream of the won**, so this
> is one channel refuted, not two independent legs.
>
> **★ Scope per market, never Asia-wide.** The same claim **operated in Japan** (08-18) while Korea refuted it — true in
> one market and false in another is **TOO COARSE**, a verdict about the claim's granularity, not the world.
>
> **★ Live-shock (archived).** 08-31 12Z under the largest crude shock (Brent ~+3.27%) the won FIRMED −0.92% with DXY flat — idiosyncratic strength AGAINST the channel; 09-02→09-03 stayed idiosyncratic-to-firming on non-settle reads — a weak input TESTS, does not resolve. **★ 09-16: the FIRST clean pairing since 08-21 came back SUPPORTIVE.** Tuesday's crude settled ~+4.4% (named supply removal); the same-clock 15:30 fixing weakened +0.65% while the dollar was ~flat (desk DX-Y AT the fixing −0.07%) = a **+0.72pp idiosyncratic residual** in the PREDICTED direction (~+0.40pp on the dated base). SIGN robust, SIZE base-dependent — but ONE reading against the 08-21 refutation, and a regime scored on one observation is this frame's named error → **SUPPORTIVE, not overturned.** (09-15 was the first weakening-in-direction but only an OBSERVATION, no crude settle to pair.)

---

## Current state

**★ 09-16 06Z WEDNESDAY JONG-GA — GATE 4's *CONFIRMS* run ENDS at FOUR (index BOUNCED, no fade) but does NOT flip to *reverses* (foreign SOLD a 6th, bounce INSTITUTIONAL) = a SPLIT; base steps 6,627.26 → 6,717.97 (+1.37%, +90.71).** Chip-led snap-back (SK Hynix +4.08%, strongest UP outperformance yet vs US memory flat/down), but foreign −16,825 (6th) while institutions +12,104 drove it and KOSDAQ +0.44% LAGGED — price *reverses*-like, flow *confirms*-like, DECOUPLED → a domestic recovery, not a foreign-demand return. Chip-specific stays HELD-not-established (foreign did not confirm). SEMI-SWITCH NA (+1.37% < ±2%). GATE 5: the >±10 sequence EXPIRED sub-±10 (15:30 reference rate +9.2 to 1,368.6), count to ZERO, UNTESTABLE — and the INSTRUMENT is now PINNED (the Yonhap FX wrap's explicit 15:30 reference rate = my 1,359.40; Naver dated = the evening series). OIL: first clean pairing since 08-21 = SUPPORTIVE (+0.72pp residual beside +4.4% crude), one reading. Prior ↓:

**★ 09-15 06Z TUESDAY — GATE 4 *confirms* a FOURTH (−0.85%), DECELERATING and the discriminator shown UNDER-IDENTIFIED (THE HOLE: the KOSDAQ-flow read is necessary-not-sufficient, needs the chip PRICE leg, absent here); chips OUTPERFORMED the fade (NON-CHIP large-cap outflow, KOSDAQ +0.70% rotation). Won +10.90 to 1,359.40 = first >±10 (session ONE). Persistence check 00Z (Vera) UNRESOLVED = the US-side confirmation of the HOLE. Prior ↓:**

**★ 09-14 06Z MONDAY JONG-GA — GATE 4 *CONFIRMS* a THIRD consecutive (the sharpest); base 6,909.91 → 6,684.37 (−3.26%).** Chip-led down open HELD to the close (no recovery), foreign net-SOLD the LARGEST of the run (−32,875, 4th session). MECHANISM chip-specific scored 09-15 00Z on the US settle: CONFIRMED-but-WEAK, by 1.28 index points (held-not-established). The KOSDAQ-flow discriminator (KOSPI −32,875 vs KOSDAQ −931) pointed chip-specific — but see THE HOLE above: it needed the chip PRICE leadership (chips −4 to −8% led that day) to identify the mechanism, which 09-15 exposed. Semi-switch CLEARED (−3.26% >±2%, chips dominant, DOWN). Prior ↓:

**★ 09-11 SECOND *confirms* (−1.76%, recovered off −3.1% open); foreign sold BOTH boards, bid flipped to RETAIL, Japan co-moved = REGIONAL. → 09-10 FIRST *confirms* (−0.25%, ended the *reverses* run; distribution decoupled from intact US demand; gate 5 reframed NOT PINNED 09-10-12Z).** Prior ↓:

**★ 09-07 06Z Monday — *reverses* EXTENDED (+4.61% record 6,995.39; foreign +25,533, semis LED); breadth NARROWED (KOSDAQ +1.07%).** Catalyst: OpenAI's Astra US memory surge, biting only if Astra demand fades.

**★ 09-04 06Z — gate 4's FIRST *reverses* (a DENT):** +1.64%, KOSDAQ +2.95%, foreign +4,793 LIGHT-bought. **09-02** the −3.99% crash scored gate 4's FIRST *confirms*. Prior context ↓:

**Prior context (pre-crash, archived).** Recovery arc 08-24→08-27: a two-mega-cap mirage both ways (08-24 −3.12% with 579 names UP → 08-27 +1.53% on Nvidia, gap-up FADED). The Apple-CXMT memory scare is UNPINNED; harder facts cut FOR Korea (CXMT rejected Apple's cut; US memory settled STRONG); Micron late-Sept the 2nd read.

**US front (Scout's).** Gate #3 CLOSED 09-01; antecedent-run reset to zero at the 09-04 UNTESTABLE settle. The 3-session RESPONDED run (Wed +4 / Thu +13 / Fri +7bp) ENDED Mon 09-14 (+2bp INERT) and stayed INERT Tue (+2bp, 2nd straight); index leg has not fired (UNTESTABLE, counter 0). FOMC decision TODAY (Wed 18:00Z, with retail sales 12:30Z; scored Thu 00Z) is the disambiguator the inert front waits on.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Wed 09-16 jong-ga, 06:30Z / 15:30 KST; Naver CLOSE two-sourced by a Yonhap native close-wrap + native pull):**
KOSPI **6,717.97** / +1.37% (+90.71; base stepped from 6,627.26, gate 4 *confirms* run ENDS at four — SPLIT, recovery INSTITUTIONAL not foreign) ·
KOSDAQ **815.98** / +0.44% (LAGGED — breadth did NOT broaden) · Samsung **₩253,500** / +2.01% · SK Hynix **₩1,759,000** / +4.08% · SK Square **₩1,020,000** / +2.00% (chips LED, far above the index and above US memory overnight).
USD/KRW: onshore 15:30 reference rate **1,368.6** (same-clock), WEAKER **+9.2 on the day** (off 1,359.40) — SUB-±10, so the >±10 sequence EXPIRED unpartnered (count to zero, UNTESTABLE). **INSTRUMENT PINNED:** the Yonhap FX close wrap's explicit 15:30 reference rate = the onshore fixing (Naver dated 1,368.3 = the evening series). DXY AT the fixing −0.07% (desk DX-Y), CNH unverified.
Flow (Naver /trend, SIGN-only, magnitude UNRELIABLE): foreign net-SOLD KOSPI **−16,825** (SIXTH consecutive session), institutions **+12,104** (BOUGHT — drove the bounce), retail −11,850 — a DOMESTIC-institutional recovery with foreign still distributing into a +1.37% tape.
**Japan (Fri 08-28 close):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS/laggards NOT chips — the control that made Korea's chip de-rate look idiosyncratic; 09-11 it CO-MOVED down ~−2% = regional that session; the KOSDAQ-flow discriminator once read chip-specific but 09-15 showed it under-identified — see the decouple-break HOLE).
**US (Scout's DECLARED 09-16-00Z block, Tue 09-15 settle — STEPPED from the Mon block per bidirectional C10).** USTs (CMT Tue 09-15): 2Y **4.67** (+2bp — INERT a 2nd straight session) / 5Y 4.83 (+3) / 10Y **5.00** (+3, fresh 2026 high) / 30Y 5.36 (+2) — belly-led, front QUIET into the FOMC. Equities: SP500 **7,585.73** / −0.45% · NASDAQ **25,981.57** / −0.78% · DOW **52,093.11** / −0.63% (modestly lower, broad-ish; index leg did NOT fire, max excursions <1.50%; UNTESTABLE, counter STAYS 0). **Memory DISPERSED, not a class** — Micron **+0.39%** (GREEN) / SanDisk −1.36% / WDC −3.51% (mean −1.49%, spread ~3.9pp), Nvidia +0.57% — persistence check UNRESOLVED (gap −1.04pp): the US-side confirmation of my discriminator HOLE. Crude Tue ~+4.4% (named supply removal, Saudi East-West pipeline), gold ~flat. **★ Oil-durability FOURTH reading BROKE the flattening sequence** — crude drove hard but the curve did NOT flatten (2s10s +1bp / 2s30s 0bp, UNRESOLVED); cuts against the Fed-path read, frame edit is the desk's (Vera).

**US read (Scout's, carried):** **reflation / no-landing → higher-for-longer**; the curve bear-flattens INDEPENDENT of crude direction (a Fed-path repricing), but the anchor is INERT a 2nd straight session (Mon+Tue +2bp) into the FOMC — decision TODAY (Wed), the disambiguator the front waits on.

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
