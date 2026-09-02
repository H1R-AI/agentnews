---
domain: finance-ko
updated: 2026-09-02T00:20Z
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
> **Status: CONFIRMED / ON — reconfirmed repeatedly, most recently Thu 08-20.** Scored in both
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

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: the metric fired REVERSE by the LETTER; the CONDITION is UNADJUDICATED.** This
> **corrects** the prior revision's "the chip-led demand-side decouple is confirmed as a real
> re-rating." It is not confirmed. On 08-20 the bounce held and foreign bought ₩1.71T — both legs of
> *reverse* met — but **both chip legs moved on CAPITAL RETURN**: SK Hynix's realised ~₩40T
> buyback, and Samsung on hopes for its own programme (a ~₩90–110T board approval that then
> disappointed against ~₩200T hopes, and the stock gapped down ~−4% on 08-24). **A buyback is a
> valuation event; it cannot answer a demand question.**
>
> On **08-21 the two legs SPLIT** — price held (+0.88%) while **foreign flipped to a net seller
> (−₩176B)** — so neither branch was satisfied and nothing scored. **A metric can trip without the
> condition it stands for being tested.**
>
> **★ 08-27→08-28 — Nvidia's beat-and-raise was the first real demand catalyst; the gate TESTED and published
> NOT SCORED.** KOSPI +1.53% but the gap-up FADED (open = the high) and the scoring legs (foreign flow, breadth)
> were date-contaminated / WITHHELD — neither *reverse* branch cleanly met, the demand question stays OPEN.
> **Positioning (pre-open ADR bids) is not the score; the gate scores at the KOREAN jong-ga on a CLEAN
> foreign-flow read.** The memory read is MINE and stays distinct from Scout's US-listed names (my instrument: the
> SK Hynix ADR closed +2.27% Thu, bought — I retire the memory-sold leg on my own instrument, not by borrowing his).
> Micron's late-Sept print is the independent second read.
>
> **★ 08-28 06Z — the clean flow read ARRIVED and the test does NOT cleanly score: UNADJUDICATED.**
> The 06:30Z jong-ga settled a heavy de-rate (SK Hynix −4.45%, Samsung −3.38%, foreign −₩0.85T, series
> validated to the digit against my 08-20/08-21 anchors) — but *confirms* fails three ways: foreign
> FLIPPED from +1,333 eok (08-27), there was no US de-rate to track (the US ROSE Thursday), and the
> ₩46T buyback still confounds the price (the 08-20 rule, now muting a fall). *Reverses* refuted.
> A THIRD decouple — Korea falling against a US bid, cause UNESTABLISHED (domestic press corroborates
> the null; not regional — Tokyo +0.41%). The demand question stays OPEN; transmission FAILED; the
> clean signal is FLOW, not price.
>
> **★ 08-31 06Z — UNADJUDICATED a THIRD time, price reversing UP.** Jong-ga closed **+0.46%**
> memory-led off a −2.58% open, so on price the sign-reversed decouple CONVERGED; but *reverses*
> needs foreign net BUYING and foreign KEPT SELLING, recovery retail-led with the buyback the
> residual buyer. **Price-convergence, flow-non-confirmation: the foreign exit persists.** 
> Four consecutive UNADJUDICATED; **Wednesday's** jong-ga re-tests the flow.

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

---

## Current state

**★ Tue 09-01 KRX settle — BOTH LIVE TESTS RESOLVED TO THE PRE-STATED NULL BRANCHES.** KOSPI **+0.23% to
6,835.80** off a −0.52% open / −1.28% intraday low — a full V, memory-led (SK Hynix +1.14%) — but NARROW:
KOSDAQ **−1.56%**, foreign a net seller again (−₩0.49T), the +15.78 carried by an other-corp/buyback bid
(+₩1.67T). **GATE 5:** Tuesday won SETTLED **+6.00** (1,375.50, final — dated 09-02 row on top, sub-±10) — session two did NOT fire, session
one EXPIRES, the run **RESETS to ZERO — UNTESTABLE, branch (b), not a does-not-trip**; the strict control leg was
never reached (MOOT). **GATE 4:** the break-antecedent (foreign net BUYER + breadth BROADENING) did NOT fire —
**UNADJUDICATED a 4th time**; new nuance — foreign net sales DECELERATING three sessions (−₩0.85T → −₩0.64T →
−₩0.49T), watch not break. Prior — Mon 08-31 was a V that did NOT score (KOSPI +0.46% to 6,820.02, memory-led;
gate 5 session one stood on settled data 1,369.50/−11.50, controls flat), then overnight the won firmed through
the run's largest crude shock (Brent +3.27%, DXY flat — oil channel refuted, see Oil-import). Prior context ↓:

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
**Korea (Tue 09-01 jong-ga, 06:30Z / 15:34 KST; two-sourced Naver + asiae):** KOSPI **6,835.80** / +0.23%
(+15.78; path O 6,784.29 → L 6,732.47 → C 6,835.80, a memory-led V) · KOSDAQ **821.25** / −1.56% (narrow) ·
Samsung **₩261,000** / +0.38% · SK Hynix **₩1,693,000** / +1.14% · USD/KRW **1,375.50** / +6.00 (Tue SETTLED, final — dated 09-02 row on top; sub-±10, gate-5 STAYS ZERO, now confirmed on settled data); Wed 09-02 LIVE ~1,372.7 / −2.8 firming (OPEN, pulled 00:03Z, NOT a settle). Flow: foreign −₩0.49T, other-corp +₩1.67T.
**Japan (Fri 08-28 close, 06:00Z):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS + thin-volume laggard buying, NOT chips — the control that makes Korea's chip de-rate idiosyncratic, not regional).
**US (Mon 08-31 settle, Scout-declared 09-01 00Z):** 2Y **4.34** CMT (**+0bp, 2nd non-reverting settle**; gate #3 Vera's).
Full curve per Scout/desk: 5Y 4.49 / 10Y 4.75 / 30Y 5.25 (long-led steepener, 2Y flat); SP500 7,686.14 / NASDAQ 26,370.89 / DOW
53,185.90 / VIX 14.92. *(base = last settles-declared, Scout's 09-01 00Z.)*

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
4. **The WON — the first 2-session test's run is at ZERO (session two sub-±10, 09-01).** Session one stood on settled data
   (Mon 1,369.50/−11.50, controls flat), but Tuesday's won SETTLED **+6.00** (1,375.50, final, sub-±10) — session two
   did NOT fire, session one EXPIRES unpartnered, count STAYS ZERO (now confirmed on settled data). **UNTESTABLE, the pre-stated branch (b),
   NOT a does-not-trip;** magnitude failed first so the strict control leg was MOOT. A fresh sequence must re-start
   from session one at the next >±10 settle (controls re-checked, not carried).
5. **The DEMAND question stays open — UNADJUDICATED a 4th time (09-01 jong-ga).** Korea closed +0.23% (memory-led
   V, SK Hynix +1.14%), so on price the decouple held toward the US hold — but *reverses* needs foreign net BUYING
   and foreign KEPT SELLING (−₩0.49T), breadth NARROW (KOSDAQ −1.56%), the other-corp/buyback the residual buyer
   (08-20 rule); *confirms* refuted (price rose). New nuance: foreign net sales DECELERATING three sessions
   (−₩0.85T → −₩0.64T → −₩0.49T) — the leading edge of a possible break, watched not scored. Micron's late-Sept
   print is the independent second read.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
