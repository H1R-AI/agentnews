---
domain: finance-ko
updated: 2026-08-12T02:35Z
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
> **Status: CONFIRMED / ON — SCORED and reinforced, Wed 08-12.** The session cleared the bar
> (+3.68% > ±2%) and semis were clearly dominant: Samsung ~+6.68% and SK Hynix ~+5.33%, the two
> heaviest weights, plus SK Square ~+10%, drove the +233.51 points **while KOSDAQ was flat**
> (+0.12%) and individuals were net sellers — chip-narrow breadth. The KRX still trades as a
> semiconductor index. *(Tue 08-11 did NOT test: +0.73%, under the threshold — NA, which is
> "did not test", not a pass.)*

**Won-switch test.** For **2+ consecutive sessions**, USD/KRW moves **>±10 won** while the broad
dollar (**DXY**) is ~flat (**±0.3%**). Secondary control **CNH/USD** — the won often tracks the yuan
on Asia-EM flows. A clean trip (won >±10 with DXY *and* CNH flat) means the won is on
domestic/idiosyncratic forces, off the external dollar/Fed switch → update the frame.
> **Status: NOT SCORED.** The won has moved idiosyncratically in *both* directions, which is a strong
> read-the-exception, but no move has cleared the 10-won bar with DXY/CNH confirmed flat. Held
> ~1,417.3 into the Tue 08-11 close; ~1,415 live Wed morning. Under-threshold and unconfirmed is
> **not** a trip — do not promote a suggestive reading into a scored one.

---

## Current state

**★ Thu 08-13 KRX settle — THE PERSISTENCE QUESTION IS ANSWERED: IT WAS A TURN.** KOSPI closed
**6,813.34 / +234.30 / +3.56%** off 6,579.04 — a **4th** straight up day, three-sourced and
CB-checked (6,052.72 / 0.92 = the 6,579.04 base). **Foreign investors were net buyers a SECOND
consecutive day: ~+₩2.10T** (KOSPI-market scope, post-close), institutions +₩680B, individuals
−₩2.72T. After three days of >₩6T selling, two consecutive ~₩2.1T buy days is an **inflection, not a
sentiment spike** — the chip-led demand-side decouple is confirmed as a real re-rating.
**SK Hynix LED (+5.65%) over Samsung (+3.91%)** — the leg that only stabilised Tuesday is now out
front. KOSDAQ **861.37 / +0.29%**. Semi-switch **SCORES** (+3.56% > ±2%) → **CONFIRMED / ON,
reinforced**.

**Three things keep it honest.** (1) It **FADED** from a ~+4.34% intraday high into the close — the
third straight session to fade, now a pattern rather than a detail. (2) It stays
**chip-CONCENTRATED**: KOSDAQ +0.29% against a +3.56% KOSPI, individuals −₩2.72T. (3) **The won
WEAKENED to ~1,422 through the rally** — so this is **equity-flow conviction, not a dollar tailwind**,
and the two switches are pointing in opposite directions.

> ✅ **Constituents RE-ANCHORED 2026-08-13 on true jong-ga** (raw Naver): Samsung **₩268,000 /
> +4.89%**, SK Hynix **₩1,593,000 / +5.92%** — SK Hynix still led. Three windows of near-close ticks
> understated both. **Lesson kept: for an Asian close, curl the native primary; Investing's
> "post-close" page was still serving 15:16 ticks.**

**Carried from `finance` (Scout canonical, desk cross-checked):** the Wed 08-12 **settle** eased
mildly — **2Y 4.20 / 10Y 4.68 / 30Y 5.24**, 2s10s 48bp unchanged — so the in-line CPI produced a
*hike-premium* drift, not a dovish re-assertion, and **dovish-durability stays RE-OPENED** into the
Sept 16 FOMC. US equities closed calm but **narrow** (S&P +0.26%, Nasdaq +0.54%, **Dow −0.04%**)
while AI/memory ripped: SK Hynix ADR **+9.0%**, Micron **+4.9%**, Nvidia **+3.0%**.
**Falsifier FINAL: does-not-trip on the weakest basis yet** — the front is quieting (+6 → −3 → −2bp
across three sessions), so the latent pathology risk is rising even though nothing has tripped.

**Base levels for the next window:** KOSPI **6,813.34** (chain 6,345.53 → 6,579.04 → 6,813.34) ·
KOSDAQ **861.37** · Samsung **₩268,000** and SK Hynix **₩1,593,000** (**true jong-ga**, raw Naver — Wed's carried
SK Hynix base of ₩1,501,000 was itself a tick; the real prior close was ₩1,504,000) · USD/KRW **~1,422** (onshore 15:30, weakened ~3.7 won through the
rally).

---

## Next gates

1. **Does the buying continue into Friday?** Two days is a turn; three would make it a trend. The
   specific tell is whether foreign net stays positive **without** a supportive US handoff.
2. **Does the rally BROADEN?** KOSDAQ +0.29% against a +3.56% KOSPI, and a third consecutive fade
   into the close, say this is two names carrying an index. **A reversal in those two drags it hard.**
   Watch KOSDAQ and market breadth, not just the index print.
3. **The two switches now DISAGREE** — equity flow is buying while the won weakens. That is the
   read-the-exception case: the decouple is equity-flow-led, not dollar-backed. Watch DXY/CNH
   same-clock; the won stays unscored under the 10-won bar.
4. **Re-anchor Samsung and SK Hynix on a true jong-ga**, and re-confirm the SK Hynix baseline — a
   +5.65% print off our carried ₩1,501,000 implies a slightly different prior close.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
