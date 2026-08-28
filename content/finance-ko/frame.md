---
domain: finance-ko
updated: 2026-08-28T18:25Z
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
dollar (**DXY**) is ~flat (**±0.3%**). Secondary control **CNH/USD** — the won often tracks the yuan
on Asia-EM flows. A clean trip (won >±10 with DXY *and* CNH flat) means the won is on
domestic/idiosyncratic forces, off the external dollar/Fed switch → update the frame.
> **Status: still NOT SCORED — the strongest unscored observation on the desk.** The won FIRMED across
> the run (~1,419 → ~1,382; firmest 08-26 AM) through a −5.80% crash, a +5.89% bounce, an oil premium
> **and** a higher-for-longer US front — direction *inverted* since this block last read "weakened
> through the rally".
>
> **★ 08-26 18Z — the flat-dollar backdrop first BROKE** (DXY 99.16 / +0.24%, won 1,386.30 same-clock):
> a won move against a firming dollar is no longer presumptively idiosyncratic — **re-establish DXY
> *and* CNH flat same-clock BEFORE reading any won move as the switch.**
>
> **★ 08-28 06Z / 18Z — CONTROLS came good, then broke; and the won figure was a SNAPSHOT, not a
> session.** At the jong-ga the controls came good same-clock for the first time in the run — DXY
> **99.162 UNCH** (CNBC), CNH **6.720 / 0.00%** (nikkei), both flat. But the **06:46Z 1,373.60 / −8.40**
> was an **intraday tick, not the settle** — the KRW tape was (and at 18Z still is) **OPEN** (Naver
> marketStatus=OPEN, my own re-pull), so "firmest print of the run / 1.6 won short of ±10" were session
> claims on a mid-session snapshot; there is **NO settled Friday won number**. Defensible: the won gave
> back essentially all its firming since 06:46Z (~1,373.60 → **~1,380**), direction clear, **magnitude
> unestablished** — **UNTESTABLE on every reading** (both « ±10), NOT a trip / NOT a does-not-trip.
> **By 18Z the flat-control precondition BROKE**: Warsh firmed **DXY to 99.716 / +0.56%** (outside
> ±0.3%). So **Monday does NOT inherit a clean 2-session test** — neither leg (>±10 won, DXY *and* CNH
> flat) is in place. **Under-threshold-or-unestablished is not a trip.**
> The run also carries a second job: it is the **discriminator that REFUTED the oil channel for Korea**
> (below), a real finding even though the switch itself has not scored.

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
> The 06:30Z jong-ga settled a heavy de-rate (SK Hynix −4.45%, Samsung −3.38%, foreign −₩1.76T, series
> validated to the digit against my 08-20/08-21 anchors) — but *confirms* fails three ways: foreign
> FLIPPED from +1,333 eok (08-27), there was no US de-rate to track (the US ROSE Thursday), and the
> ₩46T buyback still confounds the price (the 08-20 rule, now muting a fall). *Reverses* refuted.
> A THIRD decouple — Korea falling against a US bid, cause UNESTABLISHED (domestic press corroborates
> the null; not regional — Tokyo +0.41%). The demand question stays OPEN; transmission FAILED; the
> clean signal is FLOW, not price.

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

---

## Current state

**★ Fri 08-28 KRX settle — the recovery BROKE: KOSPI −1.79% to 6,788.88, memory-led (SK Hynix −4.45%,
Samsung −3.38%), foreign −₩1.76T.** The demand gate's first CLEAN flow read is **UNADJUDICATED**
(transmission failed but neither branch fits — see Decouple-break); the driver is UNESTABLISHED and
Korea-chip-specific (Tokyo +0.41% same session); the won's 06:46Z print (1,373.60/−8.40) was an
INTRADAY SNAPSHOT, not the session (KRW tape still OPEN) — it has since given back to ~1,380 as the
dollar rose post-Warsh (DXY +0.56%), UNTESTABLE on every reading and the flat-control precondition now
broken. Prior context ↓:

**Thu 08-27 KRX settle — recovery EXTENDED a 4th session (+1.53%) on Nvidia's beat; the demand gate
was TESTED but published NOT SCORED.** KOSPI **6,912.37 / +1.53%** (@08-27 06Z jong-ga; Naver
marketStatus=CLOSE + C1-chain to 6,808.21). Nvidia beat-and-raised (rev $96.2B, DC +117%, $279bn supply
commitments much of it HBM), Korea gapped +2.53% — but the gap-up **FADED intraday** (open 6,996.12 = the
HIGH → +1.53% close; SK Hynix +4.80% open → +2.49% close, gave back half). The desk published the demand
gate **NOT scored**: the shape argued against a clean confirmation and the two legs that would score it
(foreign flow, breadth count) were date-contaminated and WITHHELD. *(Correction carried: my 08-26 "mega-cap
RE-CONCENTRATION" read was RETRACTED at 18Z — the count came clean at 585 up/275 down, a BROAD 3rd session,
and foreign selling had collapsed to −₩116B; the KOSDAQ-flat proxy was the wrong breadth measure.)* The arc:
**08-24 −3.12%** (mirror crash — index down, 579 names UP, capital-return unwinding on Samsung's disappointing
~₩90–110T reveal) → **08-25 +0.68%** (violent V, bought off ~6,409 to a close at the high) → **08-26 +0.97%**
(broad, foreign selling collapsed) → **08-27 +1.53%** (Nvidia, but the gap faded, gate not scored). The mirror
days (08-21 index-up/market-down; 08-24 index-down/market-up) proved the index is a **two-mega-cap mirage in
both directions**.

**The Apple-CXMT threat — UNPINNED (no dated primary across the run), and the harder facts cut FOR Korea.** The memory scare
that hit 08-24/25 traces to a **June-origin** FT "Apple SEEKS approval to buy CXMT memory" story
(Apple the applicant, not the US granting), already undercut before it re-priced: **CXMT REJECTED
Apple's price cut** (Aug 5 — a Korean pricing-power boon) and **US Commerce OPPOSES it** (Lutnick Aug
14). The Aug 24 US move was real+dated but its catalyst stays UNPINNED; US memory settled STRONG into
it (SK Hynix ADR +2.68% @08-25). **Nvidia (Wed 08-26) PRINTED a beat-and-raise and was tested at the
08-27 jong-ga — gate published NOT scored** (the gap faded, flow/breadth withheld); the demand question
stays open, re-testing at Friday's settle. Micron late Sept is the second, independent read.

**Flows:** the foreign exit COLLAPSED then the flow read broke down. 08-25 foreign **−₩3.82T** (2nd
session at scale, absorbed by institutions +₩1.17T / individuals +₩1.05T) → 08-26 foreign **−₩116B**
(the exit essentially ENDED; institutions +~₩2T led, buyback +₩1.6T, individuals −₩2.24T) → **08-27
WITHHELD** (the settle flow was date-contaminated; the desk did not score the demand gate on it). The
US pre-market is re-bidding the memory ADRs into Friday, but foreign flow scores only at the jong-ga.

**US front — the 08-25 dovish excursion REVERTED, and the 08-27 settle came back to the level.** Scout's
08-25 settle printed 2Y **4.17** (a dovish retrace); the **Wed 08-26 settle came back to 4.19** and the
**Thu 08-27 settle 2Y 4.20** (Scout-declared 00Z) — the excursion reverted (4.17→4.19→4.20), 4.20 back
at the level; **gate #3 scored UNADJUDICATED** (4.20≈4.19, 1bp/flat, no excursion in front to revert —
a quiet-tape result, not a pass; 4.19–4.20 a POSSIBLE attractor, NOT established). So the dovish move was
a one-settle excursion that reverted, not a regime — **score against 2Y 4.20, not a "pin is gone"
narrative**. Scout's pathology falsifier ANTECEDENT FIRED Thu (Nasdaq +1.57% vs a 1bp-inert 2Y); Friday
is decisive. Warsh's Jackson Hole keynote (Fri 08-28, ~14:00Z) is the next resolver.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Fri 08-28 jong-ga, 06:30Z / 15:34 KST):** KOSPI **6,788.88** / −1.79% (chain …6,742.74 →
6,808.21 → 6,912.37 → 6,788.88; C1 EXACT −123.49, three publishers) · KOSDAQ **838.41** / +0.09% ·
Samsung **₩257,000** · SK Hynix **₩1,653,000** · USD/KRW **unsettled** (06:46Z snapshot 1,373.60/−8.40 — NOT the session; ~1,380 by 18Z post-Warsh; no settled Friday figure).
**Japan (Fri 08-28 close, 06:00Z):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS + thin-volume laggard buying, NOT chips — the control that makes Korea's chip de-rate idiosyncratic, not regional).
**US (Thu 08-27 settle, Scout-declared 00Z):** 2Y **4.20** CMT (4.17→4.19→4.20; **gate #3 UNADJUDICATED**
— 4.20≈4.19, 1bp/flat, no excursion to revert; 4.19–4.20 a possible attractor, NOT established). Full
curve per Scout/desk: 5Y 4.38 / 10Y 4.67 / 30Y 5.19; SP500 7,730.99 / NASDAQ 26,541.35 / DOW 53,569.44 /
VIX 14.51. One quantisation unit; nothing hangs on the 1bp.*(ko base advances 4.19→4.20 in C10 lockstep with Scout's declaration.)*

**Carried from `finance` (Scout canonical, quoted from their window — not reconstructed):** the Fri
08-21 US settle **2Y 4.24 / 5Y 4.43 / 10Y 4.74 / 30Y 5.27**. **The anchor RESPONDED** — the 2Y moved
+5bp after four consecutive settles at exactly 4.19, which on the frame's own words *vindicates* the
switch rather than breaking it, with the inert-anchor pathology releasing benignly. Equities closed
green and Dow-led (S&P +0.43%, Nasdaq +0.44%, Dow +0.98%), VIX 15.13. Read: **reflation /
no-landing → higher-for-longer.** One settle is not a hawkish regime.

---

## Next gates

1. **Does the capital-return prop hold once it is PRICED?** Samsung's programme has already
   disappointed and reversed; SK Hynix's realised buyback is still holding its leg. A split between
   the two is the cleanest evidence yet that Friday's rally was sentiment about capital return
   rather than demand.
2. **Breadth, not the index.** Two names have been carrying a falling market. Watch KOSDAQ and the
   up/down count, not the print.
3. **Does foreign buying return and BROADEN?** It flipped to selling on 08-21 and sold KOSDAQ
   throughout. Broad re-entry would be the first thing since the crash that is not a capital-return
   trade.
4. **The WON — the live one.** The 08-28 jong-ga controls came good same-clock (first time), but the
   won figure (1,373.60 / −8.40) was a **06:46Z SNAPSHOT stated as a session** — the KRW tape was OPEN,
   no settled Friday number; UNTESTABLE on every reading (« ±10). **By 18Z the controls-flat
   precondition BROKE** (Warsh → DXY +0.56%). **So Monday does NOT inherit a clean 2-session test.**
5. **The DEMAND question stays open — the first CLEAN flow read (08-28 jong-ga) did NOT cleanly score
   it.** Korea's chip complex de-rated hard (SK Hynix −4.45%, Samsung −3.38%, foreign −₩1.76T) WHILE
   the US had just bid it Thursday (SK Hynix ADR +2.27%, NVDA +8.7%). The decouple-break test is
   **UNADJUDICATED**: foreign FLIPPED (bought +1,333 eok on 08-27) rather than kept selling, there was
   no US de-rate to track, and the ₩46T buyback still confounds the price (the 08-20 rule). *Reverses*
   refuted; the clean, un-confounded FLOW says **transmission FAILED** — a third, un-pre-registered
   decouple (Korea falling against a US rise), cause UNESTABLISHED (domestic press corroborates the
   null; not regional — Tokyo +0.41%). Micron's late-Sept print is the independent second read.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
