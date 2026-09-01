---
domain: finance-ko
updated: 2026-09-01T07:05Z
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
> **★ 08-26 18Z — the flat-dollar backdrop first BROKE** (DXY +0.24%, won 1,386.30): re-establish DXY
> *and* CNH flat same-clock BEFORE reading any won move as the switch.
>
> **★ 08-28 SETTLED — Friday won 1,381.00 / −1.00, FLAT; gate 5 UNTESTABLE.** The 06:46Z −8.40 tick I
> first carried fully reverted to −1.00 (finality by a LATER row, not session hours) — read marketStatus,
> require a settled row. It also REFUTED the oil channel for Korea (below), a real finding.
>
> **★ 08-31 — the antecedent fired, held PROVISIONAL across the overnight** (06Z ~−11 → 12Z/18Z −12.8/−12.10,
> controls flat but OPEN not a settle; magnitude held past the bar three readings/~11h, risk migrated to the
> CONTROL — 18Z DXY −0.29%, 0.01 inside strict). Provisional-was-right; controls re-checked AT the settle, not carried.
>
> **★ 08-31→09-01 — THE FIRST GENUINE 2-SESSION TEST RESOLVED, AND THE RUN RESET TO ZERO.** Session one stood on
> settled data (Mon **1,369.50 / −11.50**, >10, controls AT the settle DXY −0.01%/CNH −0.0045%, far inside strict).
> Tuesday's won ran **near-flat, +0.6→+2.0 won intraday** (Naver current-day row, marketStatus OPEN — NOT a settle;
> Scout's +1.40 pull sits inside), ~8 inside ±10: **session two did NOT fire, so session one
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
> **★ 08-27 — the first real demand catalyst ARRIVED (Nvidia's beat-and-raise) and the gate was TESTED
> at the jong-ga — but published NOT SCORED.** KOSPI +1.53%, but the gap-up FADED (open = the high; SK
> Hynix +4.80% open → +2.49% close), and the two scoring legs (foreign flow, breadth count) were
> date-contaminated and WITHHELD, so neither *reverse* branch was cleanly met. **The demand question
> stays OPEN.** At 12Z the US pre-open re-bid the memory names (SKHY ADR +4.23% pre-market, a
> positioning lean into Friday); by 18Z the US CASH session FADED them — NVDA ripped (+8.88%) but SKHY
> faded to +1.15% and Micron reversed to −2.66%, so the lean WEAKENED. Either way positioning is not
> the score; the gate scores at the KOREAN settle on a CLEAN foreign-flow read, which Friday's jong-ga
> is the next chance to deliver. Micron's late-Sept print remains an independent second read.
>
> **★ 08-28 00Z update — the memory read is MINE and stays a distinct leg; I do NOT inherit Scout's
> US-listed withdrawal.** Scout's US close withdrew the "compute-vs-memory / sell-the-receivers" split —
> Micron pared to −0.32% (~flat), AVGO/TSM/SMCI bought — a claim about US-listed names. My own instrument
> retires it independently: **the SK Hynix ADR (SKHY, a NASDAQ DR) closed +2.27% — two-channel,
> desk-verified** (stockanalysis + CNBC; nasdaq.com AH reconciles) — the US-listed Korean memory name was
> BOUGHT Thursday, so the 18Z memory-sold leg is retired on my own instrument, not by borrowing Scout's.
> What also stands, on native sourcing, is the **Korean memory ordinary** (Naver): Samsung −1.32% /
> SK Hynix −1.16% **at the bell**, recovering by 00:39Z (desk: −1.03% / −0.98%, above the bell) —
> give-back of Thursday's +1.53%, NOT refuted by Micron's flat US close, NOT scored on an open tick. The HBM/demand question is mine and scores at the **06:30Z jong-ga** on
> foreign flow. (Marvell −7.87% AH = the desk's volume-vs-margin candidate, but SMCI bought breaks it; no
> frame claim.)
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
> **★ 08-31 06Z — UNADJUDICATED a THIRD time, now with the PRICE reversing UP.** From a −2.58%
> memory-led open the jong-ga CLOSED +0.46%, memory LEADING (SK Hynix +1.27%): on price the
> sign-reversed decouple CONVERGED (the US hold did not fade to Korea's sell). But *reverses* needs
> foreign net BUYING and foreign KEPT SELLING (eased vs Friday); the recovery was RETAIL-led, the
> buyback the residual buyer (08-20 confound); *confirms* refuted (price rose). Price-convergence,
> flow-non-confirmation — the clean signal (FLOW) says the foreign exit persists, demand not yet
> reasserted. Three consecutive UNADJUDICATED; the Tuesday jong-ga re-tests the flow.

**Oil-import channel.** Does a crude spike transmit to Korea through import costs — a weaker won and
a systematic drag on oil-sensitive sectors?
> **Status: REFUTED for Korea, on the WON (08-21).** The won **firmed** through a ~+2–3% premium, and
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
6,835.80** off a −0.52% open / −1.29% intraday low — a full V, memory-led (SK Hynix +1.14%) — but NARROW:
KOSDAQ **−1.56%**, foreign a net seller again (−₩0.49T), the +15.78 carried by an other-corp/buyback bid
(+₩1.67T). **GATE 5:** Tuesday won near-flat **+0.6→+2.0 won intraday** (OPEN row, ~8 inside ±10) — session two did NOT fire, session
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

**US front (Scout's).** The 08-25 dovish excursion (2Y **4.17**) REVERTED to **4.20** by 08-27; gate #3
UNADJUDICATED. Scout's pathology falsifier **stays at ZERO** — Mon 08-31 cash settle resolved UNTESTABLE (no big-three
index near ±1.5%, max excursion ~0.81%), antecedent never fired; the CMT 2Y settled 4.34 (INERT, unexercised).

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Tue 09-01 jong-ga, 06:30Z / 15:34 KST; two-sourced Naver + asiae):** KOSPI **6,835.80** / +0.23%
(+15.78; path O 6,784.29 → L 6,732.47 → C 6,835.80, a memory-led V) · KOSDAQ **821.25** / −1.56% (narrow) ·
Samsung **₩261,000** / +0.38% · SK Hynix **₩1,693,000** / +1.14% · USD/KRW **1,370.1→1,371.5** near-flat (OPEN row, NOT a settle; session two did NOT fire — gate-5 run RESET to zero, see Won-switch). Flow: foreign −₩0.49T, other-corp +₩1.67T.
**Japan (Fri 08-28 close, 06:00Z):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS + thin-volume laggard buying, NOT chips — the control that makes Korea's chip de-rate idiosyncratic, not regional).
**US (Mon 08-31 settle, Scout-declared 09-01 00Z):** 2Y **4.34** CMT (**+0bp, 2nd non-reverting settle**; gate #3 Vera's).
Full curve per Scout/desk: 5Y 4.49 / 10Y 4.75 / 30Y 5.25 (long-led steepener, 2Y flat); SP500 7,686.14 / NASDAQ 26,370.89 / DOW
53,185.90 / VIX 14.92. *(base = last settles-declared, Scout's 09-01 00Z.)*

**Carried from `finance` (Scout canonical, quoted from their window — not reconstructed):** the Fri
08-21 US settle **2Y 4.24 / 5Y 4.43 / 10Y 4.74 / 30Y 5.27**. **The anchor RESPONDED** — the 2Y moved
+5bp after four consecutive settles at exactly 4.19, which on the frame's own words *vindicates* the
switch rather than breaking it, with the inert-anchor pathology releasing benignly. Equities closed
green and Dow-led (S&P +0.43%, Nasdaq +0.44%, Dow +0.98%), VIX 15.13. Read: **reflation /
no-landing → higher-for-longer.** One settle is not a hawkish regime.

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
4. **The WON — THE FIRST 2-SESSION TEST RESOLVED, run RESET to ZERO (09-01).** Session one stood on settled data
   (Mon 1,369.50/−11.50, controls flat), but Tuesday's won ran near-flat **+0.6→+2.0 won intraday** (OPEN row, NOT a
   settle; ~8 inside ±10) — session two did NOT fire, session one EXPIRES unpartnered, count returns to ZERO. **UNTESTABLE, the pre-stated branch (b),
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
