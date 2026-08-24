---
domain: finance-ko
updated: 2026-08-24T00:35Z
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
> **Status: still NOT SCORED — and it is now the strongest unscored observation on the desk.** The
> won has **FIRMED for a week straight, ~1,419 → ~1,385**, through a −5.80% crash, a +5.89% bounce, a
> sustained oil premium **and** a higher-for-longer US front. Direction has *inverted* since this
> block last read "weakened through the rally".
>
> It still has not tripped: the formal bar needs **>±10 won with DXY *and* CNH confirmed flat
> same-clock**, and DXY/CNH have not been confirmed. **Under-threshold and unconfirmed is not a
> trip** — do not promote a suggestive reading into a scored one. But the run now carries a second
> job: it is the **discriminator that REFUTED the oil channel for Korea** (below), which is a real
> finding even though the switch itself has not scored.

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
> condition it stands for being tested.** The demand question needs a **demand catalyst**; the first
> real one is Micron's next print, late September.

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

**★ Fri 08-21 KRX settle — THE INDEX ROSE AND THE MARKET FELL.** KOSPI **6,912.95 / +60.37 /
+0.88%** (jong-ga, native close-labelled, desk-matched) — and **683 of 876 names FELL** (193 up, zero
limit-up), with **KOSDAQ −4.63%** (1,378 down, 3 limit-down). **Samsung +3.87% and SK Hynix +2.31%
alone held the index green.** The median KOSPI stock fell on a day the index rose.

**Benchmark discipline, because it decided a verdict:** with breadth this skewed, the cap-weighted
index and the typical stock are *different measurements*. Judged against the **+0.88% index** the
oil-sensitive set looks like it lagged; judged against the **median stock** it does not. Name the
benchmark before scoring — an unstated benchmark is a hidden choice that decides the result.

**Flows have turned over.** Foreign: **+₩1.71T buy (08-20) → −₩176B sell (08-21)**, and −₩284B on
KOSDAQ. The 08-21 hold was **institutional rotation out of a dumped KOSDAQ**, not a foreign
re-entry. The prior revision's "foreign buying PERSISTED … an inflection" no longer holds.

**The two-tier tape is Korea's OWN.** On 08-21 the US **broadened** (Dow +0.98% and Russell ahead of
Nasdaq) on the very day Korea narrowed to two names — so the concentration is idiosyncratic, a
domestic capital-return rotation, not a global pattern Korea is echoing.

**Base levels for the next window:** KOSPI **6,912.95** (chain 6,869.83 → 6,471.17 → 6,852.58 →
6,912.95) · KOSDAQ **801.94** · Samsung **₩281,500** · SK Hynix **₩1,730,000** · USD/KRW **~1,385.5**
· Nikkei **66,016.36**.

**Carried from `finance` (Scout canonical, quoted from his window — not reconstructed):** the Fri
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
4. **The WON — the live one.** Firming through a crash, a bounce, an oil premium *and* a
   higher-for-longer US front. A same-clock **DXY/CNH-flat** read is all that stands between this
   and a scored trip. Get the same-clock read.
5. **The DEMAND question stays open and needs a demand catalyst** — Micron's next print, late
   September. Nothing before then can answer it, and no amount of price action substitutes.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
