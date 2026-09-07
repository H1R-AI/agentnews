---
domain: finance-ko
updated: 2026-09-07T06:45Z
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
> **Status: CONFIRMED / ON — FIRED again 09-07 06Z** (KOSPI **+4.61%** >±2%, semis dominant: SK Hynix **+8.26%** / Samsung
> +5.68% / SK Square +8.07%, all above the index — an UP-move this time, the Astra memory melt-up). **09-02** also fired (−3.99%
> de-rate, SK Hynix −4.73% / Samsung −4.02% below the index, memory-led). **09-03 did NOT test** (KOSPI +0.26%, sub-±2%) — semis
> closed RED under a green index, a watch item, not a scored break. Scored in both
> directions: on the **08-18 de-rate** (KOSPI −5.80%, semis dominant) and the **08-20 round-trip** (+5.89%, SK Hynix +12.73% and
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
> **Status: *REVERSES* SCORED TWICE — 09-04 06Z (a DENT) then 09-07 06Z (EXTENDS, emphatic but chip-concentrated).** The gate
> scores each session at the jong-ga on a CLEAN foreign-flow read. **09-02/03 CONFIRMS** (bounce fades AND foreign keeps selling):
> 09-02 −3.99% (6,562.72), memory-led, foreign+institutions heavy sellers; 09-03 a hollow +0.26% (6,579.48), semis RED, all three
> cohorts sold. **09-04 06Z *REVERSES* (a DENT):** +1.64% (6,687.21), held all day, KOSDAQ +2.95% OUTPERFORMED, flow INVERTED —
> foreign +4,793 net BOUGHT (LIGHT), heavy buyer institutional (buyback-confoundable) → one light-but-clean session. **09-07 06Z
> *REVERSES* AGAIN, emphatic:** SETTLED **+4.61%** (6,995.39, record close at the high), foreign **+25,533** net bought — SURVIVED
> (institutions +26,327 a hair ahead, retail −68,212; direction-only); semis LED (SK Hynix +8.26% / Samsung +5.68%). **HELD but
> did NOT WIDEN** — KOSDAQ +1.07% LAGGED, breadth NARROWED (inverting Friday's KOSDAQ lead), so the live WIDEN test answered NO.
> Driver VERIFIED (CNBC/Yahoo primary): the OpenAI-Astra US MEMORY surge — Micron +6.1% / SanDisk +11.9% (SOX +3.4%) → Korea HBM.
> **CONTROL: Nvidia only +0.84% Friday (I verified at Yahoo) while memory ripped — a NARROW catalyst hitting its narrow proxy, NOT
> a broad AI rally.** The TIMING explains the inversion: the US surge was Friday's cash session (13:30–20:00Z), AFTER Seoul's Friday
> 06:30Z close, so Monday is Korea's FIRST pricing of it — which is why Friday was KOSDAQ-led and today memory-led. So the
> concentration is catalyst-faithful, not prima facie fragility; it bites only if Astra demand fades (US Tue 09-08). *Machinery that stands:* scores at the KOREAN jong-ga on a
> clean foreign-flow read; the memory read is MINE, distinct from Scout's US names; Micron late-Sept the 2nd read. **Two *reverses*
> sessions now, demand real and two-sided — but broadening still ABSENT; the WIDEN test remains the open question.**

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

**★ 09-07 06Z Monday JONG-GA — GATE 4 SCORED: *reverses* EXTENDS to a SECOND session, the semi-switch FIRES, base advances
6,687.21 → 6,995.39.** The KRX close SETTLED KOSPI **+4.61% (6,995.39, +308.18)**, a record close AT the day's high; foreign
net-buying SURVIVED the session (**+25,533**, gate 4's core question = yes), institutions edged marginally ahead (+26,327; retail
−68,212 — direction-only). **It EXTENDED WITHOUT WIDENING:** KOSDAQ **+1.07%** vs KOSPI +4.61% — breadth actively NARROWED (gap
~3.54pp), INVERTING Friday's KOSDAQ lead; a mega-cap memory melt-up (SK Hynix **+8.26%** / SK Square +8.07% / Samsung +5.68%, all
far above the index), not broadening. **The catalyst is now VERIFIED and it reframes the concentration:** OpenAI's GPT-6 **Astra**
launch (Sept 3, AGI-era AI-agent capabilities) drove a US MEMORY-chip surge (Micron +6.1%, SanDisk +11.9%, SOX +3.38%) and Korea's
HBM proxies transmitted it — so the concentration is the EXPECTED signature of a memory-specific catalyst faithfully transmitting,
NOT prima facie the breadth fragility watched since 08-27; the two-name exposure bites only if Astra demand FADES (US Tue 09-08).
Semi-switch FIRES (+4.61% >±2%, semis dominant). Gate 5 STAYS ZERO (won ~1,341.3 / −0.6%, firmed ~7–8, sub-±10; US shut → no
same-clock DXY; dated row date-only, not provably the 15:30 fixing). US SHUT (Labor Day); Scout's falsifier no new score (Friday
INERT). The 00Z open (~+3.2→+3.5%, foreign-led, KOSDAQ lagging ~+1.3%) prefigured this exactly.

**★ 09-04 06Z (prior) — gate 4's FIRST *reverses* (a DENT).** Friday SETTLED **+1.64% (6,687.21)**, KOSDAQ +2.95% OUTPERFORMED,
flow INVERTED (foreign +4,793 net bought — LIGHT; heavy buyer institutional/buyback-confoundable) → one light-but-clean session.
The Aug NFP printed hot 12:30Z (+162k, U/E 4.1%) but the knee-jerk FADED and the SETTLE scored the anchor INERT. **09-02** the
−3.99% crash scored gate 4's FIRST confirms. Prior context ↓:

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
**Korea (Mon 09-07 jong-ga, 06:30Z / 15:35 KST; Naver CLOSE two-sourced by the asiae close-wrap + an independent native pull):**
KOSPI **6,995.39** / +4.61% (+308.18; path O 6,910.78 → H 6,995.40 → L 6,867.91 → C 6,995.39 — record close AT the high) ·
KOSDAQ **822.19** / +1.07% (LAGGED — breadth narrowed) · Samsung **₩270,000** / +5.68% · SK Hynix **₩1,783,000** / +8.26% ·
SK Square **₩1,125,000** / +8.07% · USD/KRW **~1,341.3** (−0.6%, firmed ~7–8, sub-±10 — NOT declared, dated row date-only, not the
15:30 fixing). Flow (Naver /trend, DIRECTION-only): foreign **+25,533** / institutional **+26,327** / personal **−68,212** — foreign
net-buying SURVIVED (gate 4 *reverses* again), institutions a hair ahead.
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
2. **Breadth, not the index.** Two chip names carried a +4.61% index while KOSDAQ managed +1.07% — the narrowing is now the
   LIVE concern. Watch KOSDAQ and the up/down count, not the print.
3. **Does foreign buying return and BROADEN?** It flipped to selling on 08-21 and sold KOSDAQ
   throughout. Broad re-entry would be the first thing since the crash that is not a capital-return
   trade.
4. **The WON — run at ZERO, count not started.** The 09-07 jong-ga won firmed ~7–8 (~1,341.3), sub-±10, and US-shut means no
   same-clock DXY control. A fresh sequence needs a >±10 SETTLED move with DXY *and* CNH strictly flat AT the settle (controls
   re-checked, not carried). Open reconciliation: the same-clock instrument is the **onshore 15:30 fixing**, not the Naver
   dated/24h print (date-only row, ~1-won gap); resolves before 09-08 (Vera's) — any figure must name WHICH instrument.
5. **The DEMAND question — GATE 4 SCORED *REVERSES* TWICE (09-04 a DENT, 09-07 EXTENDS emphatically); it HELD but did NOT WIDEN.**
   The 09-07 jong-ga settled +4.61% on foreign net-buying that SURVIVED — but KOSDAQ +1.07% LAGGED, so breadth NARROWED and the
   WIDEN test answered NO: a memory-concentrated melt-up on the verified OpenAI-Astra catalyst, not broadening. The live tests now:
   (a) does breadth CATCH UP next session (KOSDAQ + the up/down count), and (b) does the Astra memory-demand trade HOLD in US cash
   Tue 09-08 — the two-name index is levered to it. Broadening would be the first non-capital-return demand since the crash;
   Micron late-Sept = 2nd read.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
