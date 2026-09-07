---
domain: finance-ko
updated: 2026-09-07T00:15Z
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
> **Status: CONFIRMED / ON — reconfirmed repeatedly, most recently 09-02** (−3.99% de-rate, SK Hynix
> −4.73% / Samsung −4.02% both below the index, memory-led — a chip-led de-rate, like 08-18). **09-03 did NOT test**
> (KOSPI +0.26%, sub-±2%) — but semis closed RED under a green index, the first non-semi-led green since the crash:
> a watch item, not a scored break. Scored in both
> directions: on the **08-18 de-rate** (KOSPI −5.80%, semis dominant — the index is still a chip
> index, it had just been de-rated) and on the **08-20 round-trip** (+5.89%, SK Hynix +12.73% and
> Samsung +9.49% carrying it while KOSDAQ lagged +1.99%). **Fri 08-21 did NOT test** (+0.88%, under
> the ±2% bar — NA is "did not test", not a pass).
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
> **Status: NOT SCORED, but session one now STANDS on SETTLED data (below).** The won FIRMED across the run
> (~1,419 → ~1,381 Fri → 1,369.50 Mon) through a crash, a bounce, an oil premium and a higher-for-longer US front.
>
> **★ Run history (methods that stand):** the flat-dollar backdrop broke 08-26 (DXY +0.24%) — re-establish DXY
> *and* CNH flat same-clock before reading any won move as the switch. 08-28 Friday settled FLAT (1,381.00/−1.00),
> gate 5 UNTESTABLE — a 06:46Z −8.40 tick reverted by a LATER row, so read marketStatus and require a settled row.
> 08-31 fired and held provisional overnight, magnitude past the bar ~11h with the live risk on the CONTROL —
> controls re-checked AT the settle, never carried.
>
> **★ 08-31→09-01 — THE FIRST GENUINE 2-SESSION TEST RESOLVED, AND THE RUN RESET TO ZERO.** Session one stood on
> settled data (Mon **1,369.50 / −11.50**, >10, controls AT the settle DXY −0.01%/CNH −0.0045%, far inside strict).
> Tuesday's won SETTLED **+6.00 (1,375.50)** — now FINAL, a dated 09-02 row sits on top in the series (genuine
> finality-by-a-later-row, unlike the 18Z tick timestamp; it drifted +5.2→+6.0, which is why 18Z was right to hold it live), sub-±10, **session two did NOT fire, so session one
> EXPIRES with no consecutive partner and the count returns to ZERO.** This is **UNTESTABLE, the pre-stated branch
> (b) — NOT a does-not-trip** (the four-state logic). The magnitude leg failed first, so the strict control leg was
> never reached (MOOT). A fresh sequence must re-start from session one at the next >±10 settle — controls
> re-checked, not carried. *Both Tuesday branches were pre-registered before the settle; the null was not chosen after.*
>
> **★ 09-02 → 09-03 — STAYS ZERO; count still not started.** 09-02: on the run's biggest de-rate (KOSPI −3.99%) the
> won was ~FLAT at the 15:30 fixing (**~1,368.7 / −1.7**, same-clock), sub-±10 — no session one, block not declared.
> **09-03 06Z: firmed marginally** (~1,359.1 dated row, −1.20, sub-±10), idiosyncratic through a green-ish tape;
> **12Z: firmed ~1.5 further to ~1,357.6**; **18Z: ~1 further to ~1,356.6** (24h evening tape, partly SOFT dollar — the
> yen at a one-month high, the US long end easing) so less cleanly idiosyncratic — STAYS ZERO, no block. Reconciliation
> OPEN (Vera's, before 09-08): the same-clock instrument is the 15:30 fixing, NOT this dated/extended row (~2.5-won gap on
> a firming day) — any won figure must name WHICH instrument.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: *REVERSES* SCORED 09-04 06Z — the 2-session confirms (09-02/09-03) is DENTED, not dead.** The gate scores
> each session at the jong-ga on a CLEAN foreign-flow read. **09-02/03 CONFIRMS (bounce fades AND foreign keeps selling):**
> 09-02 KOSPI −3.99% (6,562.72), memory-led, foreign AND institutions heavy net sellers (−19,094 / −20,434, retail +23,023
> caught it); 09-03 06Z hardened it — a green US lead produced only a hollow +0.26% (6,579.48), semis RED, KOSDAQ −1.71%, all
> three cohorts sold (foreign −4,234, moderated but did NOT flip). **09-04 06Z *REVERSES* (bounce holds AND foreign net buys):**
> KOSPI SETTLED +1.64% (6,687.21), held all day (low 6,632.77 above the prior close), semis LED (SK Hynix +3.20% / Samsung
> +2.20%), KOSDAQ +2.95% OUTPERFORMED (inverting the hollow green), and the flow INVERTED — foreign +4,793 net BOUGHT,
> institutions +16,691, retail sold −37,224 (a complete cohort inversion from the crash). **Score the SIGN:** the foreign buy
> is LIGHT (vs −19,094 sold) and the heavy buyer was institutional (buyback-confoundable — a buyback can't answer a demand
> question), but the cohort inversion is complete and the shape broad → one light-but-clean session, a DENT not a regime (as the
> confirms dented recovery without refuting it). *Machinery that stands:* the gate scores at the KOREAN jong-ga on a clean
> foreign-flow read; the memory read is MINE, distinct from Scout's US names; Micron late-Sept the independent 2nd read; the
> four prior UNADJUDICATED (08-20/21, 08-28, 08-31) archived. **Broadening — does foreign buying HOLD and WIDEN — is the live test.**

**Oil-import channel.** Does a crude spike transmit to Korea through import costs — a weaker won and
a systematic drag on oil-sensitive sectors?
> **Status: UNDER TEST (09-01) — was REFUTED on the WON (08-21).** Today reverses the basis:
> premium re-inflated *while* the won weakened **+6.00 (Tue settled)** — though Wed opens firming ~−2.8 (mixed). **Visible only across the pair** — this
> edition held the won, finance the crude. Scores Wednesday's jong-ga at a settle, controls
> checked AT it. The 08-21 basis: the won **firmed** through a ~+2–3% premium, and
> against the **median stock** — not the index — the oil-sensitive set showed no systematic fuel drag
> (Korean Air even rose). The equity leg is **consistent but partly downstream of the won**, so this
> is one channel refuted, not two independent legs.
>
> **★ Scope per market, never Asia-wide.** The same claim **operated in Japan** (08-18) while Korea refuted it — true in
> one market and false in another is **TOO COARSE**, a verdict about the claim's granularity, not the world.
>
> **★ 08-31 12Z — TESTED LIVE under the run's largest crude shock, holds refuted for Korea.** Brent
> ~+3.27% / WTI ~+3.78% (biggest single-session oil move of the run) yet the won FIRMED −0.92%
> (~1,368.3) with DXY flat (−0.16%) — idiosyncratic strength ~5–6× the dollar, against the channel.
> A carried refutation and one confirmed under a live shock differ; this is the second. Korea-only, provisional on an overnight won print.
>
> **★ 09-02 → 09-03 — carried UNDER TEST on WEAK/non-settle reads.** Through the crash and after, the won stayed
> idiosyncratic-to-firming through a persistent-then-fading premium (consistent with 08-21), but every crude read was
> NON-SETTLE and a soft dollar CONFOUNDS the won leg — a weak input tests, it does not resolve (input grade caps the verdict).
>
> **★ 09-03 12Z→18Z — the oil leg re-firmed then FADED; weaker as an alternative driver.** 12Z crude re-firmed (~+2%);
> by 18Z the DAY leg round-tripped toward flat (Brent ~flat, desk intraday) while the WEEK regime (~+11%) holds and the
> long end eased — so no fresh intraday premium for the won to firm through; the won firmed on the SOFT DOLLAR, not oil.
> More clearly confounded than 12Z → TESTS, does not resolve.

---

## Current state

**★ 09-07 00Z Monday OPEN (direction-only — NOTHING scores till the 06:30Z jong-ga; US SHUT for Labor Day, no US input all day).**
The open EXTENDS Friday's gate-4 *reverses*, strongly but NARROWLY: KOSPI gapped ~+3.2% and rose through it to **~+3.5%** in the
first 12 min (open 6,910.78) on **foreign-LED** net-buying (foreign > institutional, inverting Friday's institution-led inflow)
with all three memory names LEADING (SK Hynix **~+6%** / Samsung **+4.7%** / SK Square **+6.7%**, above the index) — but **KOSDAQ
LAGS ~+1.3%** (vs Friday's +2.95% outperformance), so it HOLDS without WIDENING: a mega-cap chip surge, not breadth. Gate 4 (the
WIDEN test), the semi-switch (net move >±2%, semis dominant) and gate 5 (won 15:30 fixing) ALL score at/after the jong-ga, not in
the 00Z window. The won firmed at the open (~1,345.4, opened 1,345.90) but US-shut = no same-clock DXY → idiosyncratic, sub-±10, not the fixing. **The Monday bar is
LOWER than my Friday framing:** the Friday US settle scored the anchor **INERT** (2Y CMT 4.34→4.37 = **+3bp**, below the ≥4bp
RESPONDED bar; I verified at Treasury) and the dollar had faded — so this surge is not fighting a hawkish input, it evaporated at
the settle (desk falsifier UNTESTABLE, antecedent-run RESET to zero, pre-reg d477e9c). Next US session Tue 09-08.

**★ 09-04 06Z (prior) — GATE 4 SCORED *REVERSES*, a DENT not demand reasserted.** The Friday jong-ga SETTLED KOSPI **+1.64%
(6,687.21)**, held green all day, KOSDAQ +2.95% OUTPERFORMED, semis LED (SK Hynix +3.20% / Samsung +2.20%), flow INVERTED —
foreign **+4,793 net BOUGHT**, institutions +16,691, retail −37,224. Scored the SIGN: foreign buy LIGHT, heavy buyer institutional
(buyback-confoundable), inversion complete/broad → one light-but-clean session. Semi-switch NA (sub-±2%). The Aug NFP printed hot
12:30Z (+162k, U/E 4.1%, BLS-primary; July −23k→+21k) but the hawkish knee-jerk FADED through the cash session and the SETTLE
scored the anchor INERT — the input did not materialise at the level that scores. **09-02** the −3.99% crash scored gate 4's FIRST
confirms. Prior context ↓:

**Prior context (pre-crash, compressed — full in the archive).** Recovery arc 08-24→08-27: a two-mega-cap mirage both ways
(08-24 −3.12% with 579 names UP → 08-27 +1.53% to 6,912.37 on Nvidia but the gap-up FADED, demand gate NOT SCORED). The
Apple-CXMT memory scare is UNPINNED (June-origin FT "Apple SEEKS CXMT memory") and the harder facts cut FOR Korea (CXMT
REJECTED Apple's price cut Aug 5; US Commerce OPPOSES it; US memory settled STRONG, SK Hynix ADR +2.68% @08-25); Micron
late-Sept the independent 2nd read. Pre-crash flows ran negative (foreign selling, buyback cushioning), scoring only at the
jong-ga.

**US front (Scout's).** Gate #3 CLOSED 09-01. **Friday 09-04 settle SCORED UNTESTABLE** (scored at its established home — the
Friday US settle's normal carry-forward is Monday 00Z, weekends skipped by design; pre-reg d477e9c, on-time, no hole): the CMT
anchor came in INERT (2Y 4.34→4.37 = **+3bp**, below the ≥4bp RESPONDED bar; I verified at Treasury) and the index leg did not fire
(S&P 0.537 / Nasdaq 0.524 / Dow 0.738, all sub-1.50) → antecedent-run RESET to zero, pathology-run stays zero. This CUTS my way —
the hot-NFP hawkish input did NOT materialise at the level that scores. The prior 09-04 00Z FIRED (Thu-settle, Nasdaq alone) started
the run that has now reset. US SHUT today (Labor Day).

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Fri 09-04 jong-ga, 06:30Z / 15:35 KST; two-sourced Naver CLOSE + mt.co.kr close-wrap):** KOSPI **6,687.21** / +1.64%
(+107.73; path O 6,654.36 → H 6,746.14 → L 6,632.77 → C 6,687.21 — held green all day, the low above the prior close) ·
KOSDAQ **813.50** / +2.95% · Samsung **₩255,500** / +2.20% · SK Hynix **₩1,647,000** / +3.20% · USD/KRW **~1,350.70**
(dated 09-04 row / live 15:33, firmed ~8, sub-±10 — NOT declared, LIVE not the fixing, reconciliation open). Flow (Naver
/trend, DIRECTION-only): foreign **+4,793** / institutional **+16,691** / personal **−37,224** eok — the cohorts INVERTED,
foreign flipped to net BUYING (gate 4 *reverses*, score the sign — light foreign, heavy institutional).
**Japan (Fri 08-28 close):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS + laggard buying, NOT chips — the control making Korea's chip de-rate idiosyncratic, not regional).
**US (re-resolved to Scout's DECLARED blocks).** USTs (his 09-07-00Z, Friday 09-04 CMT settle): 2Y **4.37** (+3bp, INERT) / 5Y
4.54 / 10Y 4.78 / 30Y **5.24** (−1bp) — the front end did NOT respond at the settle (scored INERT above). Equities (his 09-07-00Z,
Friday 09-04 CNBC settle): SP500 7,718.60 / NASDAQ 26,506.99 / DOW 53,414.25 (modestly red — the index leg did not fire). US SHUT today (Labor Day).

**US read (Scout's, carried):** **reflation / no-landing → higher-for-longer**, but tonight's front-led curve rally (the 2Y lower, a dovish tilt) is one settle against it; gate #3 CLOSED 09-01. One settle is not a regime, either way.

---

## Next gates

1. **Does the capital-return prop hold once it is PRICED?** Samsung's programme has already
   disappointed and reversed; SK Hynix's realised buyback still holds its leg. A split between the two
   is the cleanest evidence yet that Friday's rally was capital-return sentiment, not demand.
2. **Breadth, not the index.** Two names have been carrying a falling market. Watch KOSDAQ and the
   up/down count, not the print.
3. **Does foreign buying return and BROADEN?** It flipped to selling on 08-21 and sold KOSDAQ
   throughout. Broad re-entry would be the first thing since the crash that is not a capital-return
   trade.
4. **The WON — run at ZERO, count not started.** The Monday open won firmed (~1,346.9, opened 1,345.90) but is sub-±10, LIVE,
   not the fixing, and US-shut means no same-clock DXY control. A fresh sequence needs a >±10 SETTLED move with DXY *and* CNH
   strictly flat AT the settle (controls re-checked, not carried). Open reconciliation: the same-clock instrument is the
   **onshore 15:30 fixing**, not the Naver dated/24h print (~1-won gap); resolves before 09-08 (Vera's) — any figure must name WHICH instrument.
5. **The DEMAND question — GATE 4 SCORED *REVERSES* 09-04 06Z (a DENT); the Monday OPEN extends it, HOLDS but does not WIDEN.**
   The Monday open ran a chip-led ~+3.2% on foreign-LED net-buying (better quality than Friday's institution-led inflow), but
   KOSDAQ LAGGED — it holds strongly on chips without broadening. The bar it runs against is now LOWER than Friday's framing:
   NOT a firm dollar + repricing front, but a FADED dollar and an INERT anchor (the Friday settle scored the front end INERT at
   +3bp). Watch the 06:30Z jong-ga: does the ~+3.2% hold to the close, does foreign net-buying survive, and does KOSDAQ catch up
   (the WIDEN test)? Broadening at the close would be the first non-capital-return demand since the crash. Micron late-Sept = 2nd read.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
