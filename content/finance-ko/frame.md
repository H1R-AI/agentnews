---
domain: finance-ko
updated: 2026-09-02T18:25Z
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
> −4.73% / Samsung −4.02% both below the index, memory-led — a chip-led de-rate, like 08-18). Scored in both
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
> **★ 09-02 06Z — STAYS ZERO; count still not started.** On the run's biggest equity de-rate (KOSPI −3.99%) the
> won was ~FLAT at the 15:30 onshore fixing (**~1,368.7 / −1.7**, same-clock with the KOSPI close), sub-±10 — no
> session one. **Settles block NOT declared** (the Naver dated row is marketStatus OPEN / not final at the cut, and
> the onshore-fixing vs 24h-extended series carry a ~1-won gap — declined, not forgotten; the −7.9 vs Tuesday's
> 24h close is the later-print artifact the same-clock rule guards against). Won idiosyncratic again — flat, not
> selling off with the tape.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: CONFIRMS — the FIRST clean score (09-02 06Z), after four consecutive UNADJUDICATED.** The
> *confirms* branch (the bounce FADES **and** foreign KEEPS SELLING) met cleanly: KOSPI settled **−3.99%
> (6,562.72)** on the session low after a bounce to −2.07% failed, SK Hynix −4.73% / Samsung −4.02%
> memory-led, **foreign AND institutions both heavy net sellers** (−19,094 / −20,434 eok, direction-robust;
> retail +23,023 caught it). It scores because the three prior confounds were absent: there WAS a US
> valuation de-rate to track (Tuesday risk-off), and a buyback bid cannot manufacture a down-day-with-
> foreign-selling. **Korea imported the US valuation de-rate; demand did not reassert.** Caveat: ONE session
> — the demand thesis is dented not refuted, and the ₩46T buyback may have cushioned the print. *Machinery
> that stands:* a buyback is a valuation event and cannot answer a demand question (the 08-20 rule); the gate
> scores at the KOREAN jong-ga on a CLEAN foreign-flow read, never on positioning; the memory read is MINE,
> distinct from Scout's US-listed names; Micron's late-Sept print is the independent second read. *The four
> UNADJUDICATED (08-20/21 legs split on capital return; 08-28 no US de-rate to track + buyback confound;
> 08-31 price reversed UP) are archived in the windows — a metric can trip without its condition being tested;
> today the condition WAS tested and met.*

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
> **★ 09-02 18Z — the 12Z "fading" basis is CORRECTED: a SPLIT, not a clean break.** The intraday FADE ENDED and
> reversed — crude up ~1.1–1.3% on the day (two-sourced: AP Brent back above ~$95 up ~1.3% + CNBC +1.07%), so the "fading" half
> of the 12Z line is WRONG; but it did NOT re-spike ("relatively steady" vs the prior two days of surges), so the
> basis moved fading → steady-to-firmer, not to a shock. A won firming through it would be a MODERATE test of the
> 08-21 refutation, but the dollar is simultaneously broadly soft (DXY/yen firmer) — part of the won firming is
> dollar, not an oil-channel override, so the test is CONFOUNDED. Crude a non-settle intraday read, won not
> same-clock: TESTS, does not settle.

---

## Current state

**★ 09-02 KRX settle — THE DE-RATE HELD; GATE 4 SCORES CONFIRMS (1st, after 4 UNADJUDICATED).** KOSPI SETTLED
**−3.99% to 6,562.72** (−273.08) on the session LOW after a bounce to −2.07% failed — memory-led (SK Hynix
**−4.73%**, Samsung **−4.02%** both below the index), KOSDAQ −2.10% outperforming. The two-mega-cap mirage did
NOT round-trip the down-open (Mon/Tue did): the gap-down HELD and deepened. **GATE 4** (decouple-break): the
*confirms* branch met — the bounce FADED **and** foreign KEPT SELLING (foreign −19,094 / institutional −20,434
eok, direction-robust; retail +23,023 caught it); Korea imported the US Tuesday valuation de-rate, demand did
not reassert (ONE session; the ₩46T buyback may have cushioned the print). **GATE 5:** the won was ~FLAT at the
15:30 onshore fixing (**~1,368.7 / −1.7**, same-clock), sub-±10 → **STAYS ZERO**, no settle declared (row not final
+ fixing-vs-24h gap). **Semi-switch** RECONFIRMS ON (chip-led de-rate). **18Z US-session read-through (no new
settle):** the US Wednesday cash session (the pivot, Scout's) REVERSED UP intraday (S&P ~+0.4%, two-sourced AP+CNBC
via desk) — the de-rate stopped at the water and TURNED, a repair lean for Korea's Thursday, but INTRADAY (settles
~20:00Z) so UNADJUDICATED. The won firmed further after-hours (**~1,358.7** LIVE, 03:00 KST, ~10 below the 15:30
fixing) but now alongside a broadly SOFT dollar (desk: DXY ~99.6 / yen ~158.9 firmer) = PART dollar, the
idiosyncratic residual smaller than the flat-through-the-crash fixing; LIVE / not same-clock → gate 5 unmoved.
Prior — Tue 09-01 settled +0.23% to
6,835.80 (memory-led V, narrow: KOSDAQ −1.56%, foreign −₩0.49T, other-corp/buyback +₩1.67T); gate 5 reset to
zero (Tue won +6.00, sub-±10); the won firmed through the run's largest crude shock 08-31 (Brent +3.27%, DXY
flat — oil channel refuted-for-Korea, see Oil-import). Prior context ↓:

**The recovery arc (08-24→08-27) and why the index is a two-mega-cap mirage.** 08-24 −3.12% (mirror
crash — index down, 579 names UP, capital-return unwind on Samsung's reveal) → 08-25 +0.68% → 08-26
+0.97% (foreign selling collapsed to −₩116B) → **08-27 +1.53% to 6,912.37** on Nvidia's beat, but the
gap-up FADED (open 6,996.12 = the HIGH) and the demand gate published **NOT SCORED** (date-contaminated).
The mirror days proved the index a **two-mega-cap mirage in both directions**.

**The Apple-CXMT threat — UNPINNED (no dated primary), and the harder facts cut FOR Korea.** The
08-24/25 memory scare traces to a **June-origin** FT "Apple SEEKS to buy CXMT memory" story (Apple the
applicant), undercut before it re-priced: **CXMT REJECTED Apple's price cut** (Aug 5, a Korean
pricing-power boon) and **US Commerce OPPOSES it** (Lutnick Aug 14). US memory settled STRONG into it
(SK Hynix ADR +2.68% @08-25). Micron late Sept is the independent second read.

**Flows into the run:** 08-25 −₩3.82T → 08-26 −₩116B (exit essentially ended, buyback +₩1.6T) → 08-27
WITHHELD → **08-28 −₩0.85T** (foreign FLIPPED back to selling) → **08-31 kept selling, eased** (all
three types net sold, buyback the residual buyer). Foreign flow scores only at the jong-ga.

**US front (Scout's).** Gate #3 CLOSED 09-01: Friday's **+14bp** excursion killed the 4.19 attractor on its own pre-registered condition. Scout's pathology falsifier **stays at ZERO** — Mon 08-31 cash settle resolved UNTESTABLE (no big-three
index near ±1.5%, max excursion ~0.81%), antecedent never fired; the CMT 2Y settled 4.34 (INERT, unexercised).

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Wed 09-02 jong-ga, 06:30Z / 15:35 KST; three-sourced Naver CLOSE + yna + asiae):** KOSPI **6,562.72** /
−3.99% (−273.08; path O 6,625.47 → H 6,694.57 → L 6,558.30 → C 6,562.72, faded on the low) · KOSDAQ **803.98** /
−2.10% · Samsung **₩250,500** / −4.02% · SK Hynix **₩1,613,000** / −4.73% · USD/KRW onshore 15:30 fixing **~1,368.7**
/ −1.7 (~flat, same-clock, sub-±10 — NOT declared: row not final at cut + fixing-vs-24h gap; 24h tape ~1,367.60,
Naver live OPEN, pulled 06:35Z). Flow (Naver mobile /trend, DIRECTION-only): foreign −19,094 / institutional
−20,434 / personal +23,023 eok — foreign + inst heavy sellers, retail caught it; ~−₩1.9T foreign not magnitude-reliable.
**Japan (Fri 08-28 close, 06:00Z):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS + thin-volume laggard buying, NOT chips — the control that makes Korea's chip de-rate idiosyncratic, not regional).
**US (Tue 09-01 settle, Scout-declared 09-02 00Z):** 2Y **4.39** CMT (+5bp on the escalation reflation; gate #3 CLOSED, Vera's).
Full curve per Scout: 5Y 4.55 / 10Y 4.79 / 30Y 5.27; SP500 7,631.47 / NASDAQ 26,099.77 / DOW 52,766.88 (all lower — risk-off). *(base = last settles-declared, Scout's 09-02 00Z.)*

**US read (Scout's, carried):** **reflation / no-landing → higher-for-longer** — the 2Y anchor RESPONDED (+5bp off four 4.19 settles, releasing the inert-anchor pathology benignly) and gate #3 has since CLOSED 09-01. One settle is not a regime.

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
4. **The WON — run at ZERO, count not started (09-02).** No fresh session one: the won was ~flat at the 15:30
   fixing (~1,368.7 / −1.7), sub-±10, and not on settled data (no block declared). A fresh sequence needs a >±10
   SETTLED move with DXY *and* CNH strictly flat AT the settle (controls re-checked, not carried). Open reconciliation:
   the same-clock instrument is the **onshore 15:30 fixing**, not the Naver 24h/extended print — they carry a ~1-won gap.
5. **The DEMAND question — GATE 4 scored CONFIRMS (09-02), first time.** Korea imported the US valuation de-rate:
   KOSPI −3.99% on the low, the bounce FADED **and** foreign KEPT SELLING (foreign + institutions both heavy net
   sellers, retail caught it). Confounds absent (a US de-rate to track; a buyback can't cause a down-day sell). But
   ONE session — the demand thesis is dented, not refuted, and the buyback may have cushioned the print. Watch:
   a 2nd consecutive heavy foreign sell hardens it; a flip to BUYING would be the first demand signal since the crash.
   Micron's late-Sept print is the independent second read.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
