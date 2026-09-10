---
domain: finance-ko
updated: 2026-09-10T06:52Z
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
> the ±2% bar — NA is "did not test", not a pass); **09-09 did NOT test** (+1.40%, sub-±2%) — SK Hynix +3.51% led, Samsung flat: memory-concentration intact directionally, below the bar.
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
> **Status: *REVERSES* run ENDED — 09-10 06Z scores *CONFIRMS*.** The chip complex FADED (KOSPI **7,033.92 / −0.25%**, off the record; SK Hynix −0.16% / Samsung −0.19% / SK Square −0.26%, all red) AND foreign kept net SELLING a SECOND consecutive session → *confirms*. **Mechanism is NOT the gate's default US de-rate** (US memory demand HELD into the close: Micron +2.75%, SanDisk +1.51%, Scout's 09-10-00Z block) **and NOT rotation** (foreign net-sold BOTH boards, sign-only; institutions absorbed both — carried KOSDAQ +0.79% and yesterday's record) — it is broad foreign DISTRIBUTION of Korea, decoupled from an intact US demand input. **WIDEN UNTESTABLE** (down session; the antecedent needs an UP session — down-tape KOSDAQ outperformance is defensiveness, not breadth; covering down sessions = forward-dated spec change). The **"consolidation, not a demand break" call is OVERTURNED on the flow.** *Two sessions is two sessions — durable distribution vs a two-day de-risk that reverses is unresolved; magnitude sign-only.* **Prior *reverses* run ↓:** 09-07 EXTENDS (record), 09-08 PAUSED (consolidation not a break), 09-09 survived on price (WIDEN passed, foreign SOLD). Scores at the jong-ga on a CLEAN foreign-flow read. **09-02/03 CONFIRMED** (fade, foreign sold); **09-04 DENT** (+1.64%, foreign light-bought). **09-07 06Z EXTENDS emphatic:** +4.61% (6,995.39, record), foreign +25,533 net bought, semis LED — driver VERIFIED, the OpenAI-Astra US MEMORY surge (Micron +6.1% / SanDisk +11.9%); **CONTROL Nvidia only +0.84% → a NARROW catalyst, concentration catalyst-faithful, bites only if Astra demand fades.** HELD but did NOT WIDEN (KOSDAQ +1.07% LAGGED). **09-08 PAUSED** — red −0.58%, NOT a break: memory held green, foreign + institutions accumulated the dip.
> **09-09 06Z — THE OPEN BET SCORES AND SURVIVES:** record close **7,051.64 / +1.40%** through the overnight US memory-bid NARROWING (Micron back to ~flat, SanDisk flat, Nvidia sold) — Korea did NOT transmit it as a break; SK Hynix LED **+3.51%**. **WIDEN PASSES FOR THE FIRST TIME** on breadth (KOSDAQ +2.28% ≥ KOSPI +1.40% in an UP session — clean, not narrow: SK Hynix and KOSDAQ both beat the index, Samsung flat). BUT foreign net SOLD the KOSPI (**−4,350**, rotated to KOSDAQ +2,252), institutions carried it → passes on PRICE and BREADTH, FAILS on foreign DEMAND. *The open question is now the flow, not the price.* Machinery: scores at the KOREAN jong-ga on a clean foreign-flow read; the memory read is MINE, distinct from Scout's US names.

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

**★ 09-10 06Z THURSDAY JONG-GA — GATE 4 FLIPS to *CONFIRMS*, the *reverses* run ENDS; base steps back 7,051.64 → 7,033.92 (−0.25%, the record NOT extended).** The chip complex faded (SK Hynix/Samsung/SK Square all red) and foreign net-SOLD a SECOND consecutive session — but NOT via a US de-rate (US memory HELD, Micron +2.75%, Scout's 09-10-00Z block) and NOT via rotation (foreign sold BOTH boards, sign-only; institutions absorbed both). The read is broad foreign DISTRIBUTION of Korea decoupled from intact US demand; the "consolidation, not a demand break" call is OVERTURNED on the flow. WIDEN UNTESTABLE (down session). Semi-switch NA (−0.25%, sub-±2%). Gate 5 STAYS ZERO (won ~1,338.3, non-converging live series, sub-±10, NOT declared). *Two sessions is not yet durable distribution — a two-day de-risk that reverses fits the same data; the next jong-ga resolves it.* Prior ↓:

**★ 09-07 06Z Monday JONG-GA — *reverses* EXTENDED (base advanced 6,687.21 → 6,995.39, +4.61% record); foreign net-BOUGHT +25,533, semis LED (semi-switch FIRED), but breadth NARROWED (KOSDAQ +1.07% lagged).** Catalyst VERIFIED: OpenAI's Astra (Sept 3) drove a US memory surge (Micron +6.1%, SanDisk +11.9%) and Korea's HBM proxies transmitted it — a memory-catalyst signature, biting only if Astra demand fades. Gate 5 zero (won 1,347.00, sub-±10, US shut).

**★ 09-04 06Z — gate 4's FIRST *reverses* (a DENT):** +1.64%, KOSDAQ +2.95% outperformed, foreign +4,793 LIGHT-bought (buyback-confoundable). **09-02** the −3.99% crash scored gate 4's FIRST *confirms*. Prior context ↓:

**Prior context (pre-crash, compressed — full in the archive).** Recovery arc 08-24→08-27: a two-mega-cap mirage both ways
(08-24 −3.12% with 579 names UP → 08-27 +1.53% to 6,912.37 on Nvidia but the gap-up FADED, demand gate NOT SCORED). The
Apple-CXMT memory scare is UNPINNED and the harder facts cut FOR Korea (CXMT rejected Apple's cut; US memory settled STRONG);
Micron late-Sept the 2nd read. Pre-crash flows ran negative (foreign selling, buyback cushioning), scoring at the jong-ga.

**US front (Scout's).** Gate #3 CLOSED 09-01; the antecedent-run reset to zero at the 09-04 Friday UNTESTABLE settle (anchor +3bp INERT, index leg did not fire). The current Wed 09-09 settle (base-levels block below) came 2Y +4bp RESPONDED — the first response since 09-03.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Thu 09-10 jong-ga, 06:30Z / 15:30 KST; Naver CLOSE two-sourced by the asiae close-wrap + an independent native pull):**
KOSPI **7,033.92** / −0.25% (−17.72 — record 7,051.64 NOT extended; *reverses* run ENDED, gate 4 *confirms*) ·
KOSDAQ **836.92** / +0.79% (outperformed on a DOWN tape = defensiveness, not breadth; WIDEN UNTESTABLE) · Samsung **₩269,000** / −0.19% · SK Hynix **₩1,853,000** / −0.16% ·
SK Square **₩1,135,000** / −0.26%. USD/KRW: today live/offshore **~1,338.3**, non-converging, sub-±10 — NOT declared (no prior declared fixing, so no same-clock delta).
Flow (Naver /trend, SIGN-only, magnitude UNRELIABLE): foreign net SOLD **BOTH** boards (KOSPI and KOSDAQ negative), institutions
net BOUGHT both (absorbed) — NOT rotation, a SECOND consecutive session of foreign selling. Yesterday was rotation (foreign −4,350 KOSPI, +2,252 KOSDAQ); today is broad.
**Japan (Fri 08-28 close):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS + laggard buying, NOT chips — the control making Korea's chip de-rate idiosyncratic, not regional).
**US (re-resolved to Scout's DECLARED 09-10-00Z block, Wed 09-09 settle).** USTs: 2Y **4.43** (+4bp — RESPONDED, first response since 09-03) / 5Y
4.61 / 10Y 4.83 / 30Y **5.28** (curve-wide reflation repricing +3–4bp, not an equity rout). Equities: SP500 7,636.36 / NASDAQ 26,253.34 /
DOW 52,380.66 (mildly red — index leg did NOT fire, max Nasdaq 0.90% vs ±1.50%; falsifier UNTESTABLE, counters 0/0). **Memory analogues HELD into the close** (Micron +2.75%, SanDisk +1.51%; complex MIXED — Nvidia −0.91%, AMD +3.04%) — the demand INPUT to Korea held, yet Korea's foreign SOLD. Crude-gold divergence ESTABLISHED/SHARPENED (crude +3.25% vs gold +0.49%, one Tuesday base).

**US read (Scout's, carried):** **reflation / no-landing → higher-for-longer**; the Wed 09-09 settle came 2Y +4bp, RESPONDED (first since 09-03, a curve-wide repricing on a mildly-red tape); gate #3 CLOSED 09-01. One settle is not a regime, either way.

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
4. **The WON — run at ZERO, count not started.** The 09-07 jong-ga won read 1,347.00 (sub-±10, live not a declared fixing), and US-shut means no
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
