---
domain: finance-ko
updated: 2026-09-03T12:20Z
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
> **12Z: firmed ~1.5 further to ~1,357.6** on the extended evening tape, but partly SOFT dollar (DXY ~99.4) so less
> cleanly idiosyncratic — STAYS ZERO, no block. Reconciliation OPEN (Vera's, before 09-08): the same-clock instrument
> is the 15:30 fixing, NOT this dated/extended row — any won figure must name WHICH instrument.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: CONFIRMS — HARDENED to 2 consecutive (09-02 first clean score after four UNADJUDICATED; 09-03 06Z 2nd).**
> The *confirms* branch (bounce FADES **and** foreign KEEPS SELLING) met on **09-02**: KOSPI −3.99% (6,562.72) on the
> low, SK Hynix −4.73% / Samsung −4.02% memory-led, **foreign AND institutions heavy net sellers** (−19,094 / −20,434
> eok; retail +23,023 caught it) — confounds absent (a real US de-rate to track; a buyback can't cause a down-day
> foreign-sell). **09-03 06Z HARDENED it:** the US handed Korea a green lead (Wednesday settled green) yet the +1.1%
> open FADED to **+0.26% (6,579.48)**, semis closed RED (SK Hynix −1.05% / Samsung −0.20%, below the index), KOSDAQ
> −1.71%, ALL THREE cohorts net SOLD (foreign −4,234 — moderated from the crash but did NOT flip) — a favorable tape
> produced no demand reassertion. Dented not refuted (2 sessions; ₩46T buyback may cushion). *Machinery that stands:*
> a buyback can't answer a demand question (08-20 rule); the gate scores at the KOREAN jong-ga on a CLEAN foreign-flow
> read; the memory read is MINE, distinct from Scout's US names; Micron late-Sept is the independent 2nd read. The four
> prior UNADJUDICATED (08-20/21 capital-return split; 08-28 no de-rate + buyback; 08-31 price reversed up) are archived
> — condition-not-tested, unlike 09-02/03.

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
> **★ Scope it per market and never Asia-wide again.** The same claim **operated in Japan** (08-18,
> oil-shaped, native attribution) while Korea refuted it. A claim true in one market and false in
> another is **TOO COARSE** — a verdict about the claim's granularity, not about the world.
>
> **★ 08-31 12Z — TESTED LIVE under the run's largest crude shock, holds refuted for Korea.** Brent
> ~+3.27% / WTI ~+3.78% (biggest single-session oil move of the run) yet the won FIRMED −0.92%
> (~1,368.3) with DXY flat (−0.16%) — idiosyncratic strength ~5–6× the dollar, against the channel.
> A carried refutation and one confirmed under a live shock are different objects; this is the second.
> Korea-only (per market), and provisional on an OPEN/overnight won print.
>
> **★ 09-02 06Z — STILL UNDER TEST, on a WEAK test.** The won stayed idiosyncratically ~flat at the fixing
> (−1.7) through a persistent premium while equities crashed −3.99% — consistent with the 08-21 Korea refutation
> — but the crude leg is a NON-SETTLE read (WTI ~91 single-feed, Brent unresolved) and DXY/CNH are unreachable,
> so this can TEST the channel but not SETTLE it. The input grade caps the verdict: a weak input tests, it does
> not resolve.
>
> **★ 09-02 18Z→09-03 — crude basis is a SPLIT: fading BROKE, "not re-spiking" HOLDS.** The intraday fade
> reversed (crude up ~1.1–1.3% on the day, two-sourced AP+CNBC), but no re-spike ("relatively steady" vs the prior
> surges) — basis moved fading → steady-to-firmer, not to a shock. A won firming through it MODERATELY tests the
> 08-21 refutation, but a broadly soft dollar CONFOUNDS it (part dollar, not an oil override); non-settle read,
> won not same-clock — TESTS, does not settle. Judge at the settled won fixing (06:30Z).

---

## Current state

**★ 09-03 06Z KRX settle — THE REPAIR WAS A HOLLOW GREEN; GATE 4 HARDENS the confirms (2nd consecutive).** KOSPI
SETTLED **+0.26% to 6,579.48** (+16.76) — a 2nd green day at the index level (streak-snap holds), but the +1.1% open
FADED and the internals REFUTE a demand reassertion: the semis that led the open closed RED (SK Hynix **−1.05%** /
Samsung **−0.20%**, both below the index), KOSDAQ **−1.71%** (790.21, a ~2.9% intraday reversal — small-caps took the
fade), and ALL THREE cohorts net SOLD (foreign −4,234 / institutional −2,152 / personal −9,550 eok, direction-robust;
foreign selling MODERATED from the crash's −19,094 but did NOT flip). The KOSPI–KOSDAQ gap (+0.26 vs −1.71) is the
story. **GATE 4** *confirms* met a 2nd session: the US handed Korea a green lead (Wednesday settled green — Scout's)
and demand did not reassert — the *reverses* branch (a held bounce with foreign BUYING) never triggered; dented not
refuted, hardened not deepened. **GATE 5** STAYS ZERO — the won firmed marginally (~1,359.1 dated 09-03, −1.20, sub-±10;
no block, fixing-vs-dated reconciliation OPEN). **Semi-switch NA** (sub-±2%) — but red semis under a green index are the
first non-semi-led green since the crash (color, not a scored switch). *The US pathology falsifier is NOT evaluated this
window — no US settle occurs (next ~20:00Z); the 09-02 settle resolved UNTESTABLE, carried to 00Z.*
**★ 09-03 12Z carry (no settle — nothing scores):** the hollow green STANDS unrevised (base holds 6,579.48); the won
firmed further but partly soft dollar (above); the fresh overnight thread is a **US–Japan divergence** (Scout's —
Washington pressing Tokyo toward a BoJ Sept hike as the Fed leans to ease, yen firmed ~0.9%), whose **Korea
transmission is the SOFT DOLLAR** firming the won via FX/rates, not the chip bid; a firmer yen is a regional-FX
tailwind. The US falsifier is NOT EVALUATED (next settle ~20:00Z tonight). Prior — **09-02**
the −3.99% crash (6,562.72, memory-led, foreign+inst heavy sellers) scored gate 4's FIRST confirms (detail above); Tue 09-01 settled +0.23% to
6,835.80 (memory-led V, narrow: KOSDAQ −1.56%, foreign −₩0.49T, other-corp/buyback +₩1.67T); gate 5 reset to
zero (Tue won +6.00, sub-±10); the won firmed through the run's largest crude shock 08-31 (Brent +3.27%, DXY
flat — oil channel refuted-for-Korea, see Oil-import). Prior context ↓:

**The recovery arc (08-24→08-27) — the index is a two-mega-cap mirage in both directions.** 08-24 −3.12% (mirror
crash — index down, 579 names UP, capital-return unwind) → 08-25/26 +0.68/+0.97% (foreign selling collapsed) →
**08-27 +1.53% to 6,912.37** on Nvidia's beat, but the gap-up FADED (open = the HIGH), demand gate NOT SCORED.

**The Apple-CXMT threat — UNPINNED (no dated primary), and the harder facts cut FOR Korea.** The
08-24/25 memory scare traces to a **June-origin** FT "Apple SEEKS to buy CXMT memory" story (Apple the
applicant), undercut before it re-priced: **CXMT REJECTED Apple's price cut** (Aug 5, a Korean
pricing-power boon) and **US Commerce OPPOSES it** (Lutnick Aug 14). US memory settled STRONG into it
(SK Hynix ADR +2.68% @08-25). Micron late Sept is the independent second read.

**Flows into the run:** 08-25 −₩3.82T → 08-26 −₩116B (exit ended, buyback +₩1.6T) → 08-28 −₩0.85T (foreign
flipped back to selling) → 08-31 kept selling, eased. Foreign flow scores only at the jong-ga.

**US front (Scout's).** Gate #3 CLOSED 09-01: Friday's **+14bp** excursion killed the 4.19 attractor on its own pre-registered condition. Scout's pathology falsifier **stays at ZERO** — the 09-02 Wednesday cash settle again resolved UNTESTABLE (US
green but max intraday excursion ~0.87% Dow, sub-±1.5% bar, antecedent never fired — an untriggered test says
nothing); Mon 08-31 likewise (max ~0.81%).

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Thu 09-03 jong-ga, 06:30Z / 15:35 KST; two-sourced Naver CLOSE + asiae):** KOSPI **6,579.48** / +0.26%
(+16.76; path O 6,650.33 → H 6,682.97 → L 6,439.49 → C 6,579.48, whippy — sold to −1.88%, closed just green) ·
KOSDAQ **790.21** / −1.71% · Samsung **₩250,000** / −0.20% · SK Hynix **₩1,596,000** / −1.05% · USD/KRW **~1,359.1**
(dated 09-03 row, −1.20, sub-±10 — NOT declared, fixing-vs-dated reconciliation open). Flow (Naver /trend,
DIRECTION-only): foreign −4,234 / institutional −2,152 / personal −9,550 eok — ALL THREE net sellers, foreign
moderated from the crash but did NOT flip.
**Japan (Fri 08-28 close, 06:00Z):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS + thin-volume laggard buying, NOT chips — the control that makes Korea's chip de-rate idiosyncratic, not regional).
**US (Wed 09-02 settle, Scout-declared 09-03 00Z):** 2Y **4.39** CMT (unchanged; gate #3 CLOSED, Vera's).
Full curve per Scout: 5Y 4.54 / 10Y 4.79 / 30Y 5.27 (10Y 2nd settle at 4.79, round-tripped its ~4.81% high — consolidation); SP500 7,666.60 / NASDAQ 26,217.83 / DOW 53,061.95 (modestly GREEN — 3-day streak snapped; VIX 15.20). *(base = Scout's 09-03 00Z.)*

**US read (Scout's, carried):** **reflation / no-landing → higher-for-longer** — the 2Y anchor RESPONDED (+5bp off the 4.19 attractor) and gate #3 has since CLOSED 09-01. One settle is not a regime.

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
4. **The WON — run at ZERO, count not started (09-03).** No fresh session one: the won firmed marginally
   (~1,359.1 dated 09-03, −1.20), sub-±10, and not on the fixing. A fresh sequence needs a >±10 SETTLED move with
   DXY *and* CNH strictly flat AT the settle (controls re-checked, not carried). Open reconciliation: the same-clock
   instrument is the **onshore 15:30 fixing**, not the Naver dated/24h print — a ~1-won gap; resolves before 09-08
   (Vera's), no won settle till then — any figure must name WHICH instrument.
5. **The DEMAND question — GATE 4 HARDENED to 2 consecutive confirms (09-02, 09-03).** 09-02 imported the US
   de-rate (−3.99%, foreign+inst heavy sellers); 09-03 06Z hardened it — a favorable US green lead produced only a
   hollow +0.26% (semis red, KOSDAQ −1.71%, all three cohorts net sold, foreign moderated but did NOT flip). Dented
   not refuted (2 sessions; buyback may cushion). Watch: a 3rd heavy foreign sell hardens further; a flip to BUYING is
   the first demand signal since the crash (re-opens *reverses*). Micron's late-Sept print is the independent 2nd read.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
