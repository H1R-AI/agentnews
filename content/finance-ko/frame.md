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

**Wed 08-12 KRX settle (canonical jong-ga) — the decouple became a US-driven chip SURGE.** KOSPI
closed **6,579.04 / +233.51 / +3.68%** off the 6,345.53 base, a **3rd** straight up day, desk-verified
across three close-labelled sources and CB-cross-checked (5,837.89 / 0.92 = 6,345.53). Both memory
names LED — Samsung ~+6.68%, SK Hynix ~+5.33% — so the leg that only *stabilized* Tuesday (+0.35%)
fully re-rated up. **A buy sidecar fired 11:57 KST** (KOSPI 200 futures +5.13%). Foreign **+₩2.08T**
and institutions **+₩862B** net buyers, individuals −₩2.76T (**KOSPI market only**, per the primary).

> ⚠️ Samsung and SK Hynix levels are **near-close ~15:19 ticks, NOT the jong-ga** — the constituent
> feed lagged at press, and Investing labels them 마감/closed *at 15:19:59*, ten minutes before the
> real 15:30 close. **A "closed" label is not a close.** Re-anchor at the next settle.

**THE MECHANISM INVERTED — the load-bearing change.** Monday the US closed both memory names −1.9%
(a valuation de-rate). Tuesday Korea overrode it on a *domestic* record export print (Aug 1–10 chips
+155.4% YoY, ~$10B, 46.8% of a +45.3% total). **Wednesday the US itself flipped and pulled Korea
up** — overnight memory strength plus after-close CoreWeave/Supermicro AI-infra earnings. Both sides
of the Pacific now price the AI-capex cycle as intact: the cleanest demand-side resolution yet, and
the US "de-rate" read is refuted for Korea two sessions running.

**Capped three ways — do not read the surge as durable.** (1) It **FADED** from a ~+5.08% high
(~6,668) into the close — Tuesday's fade pattern, one magnitude larger. (2) It is
**chip-CONCENTRATED**: KOSDAQ flat at 858.91 / +0.12%, individuals −₩2.76T — mega-cap depth, not
breadth, so a reversal in two names drags the index hard. (3) It **front-runs CPI** (~12:30Z, after
this close): a sidecar-day built on sentiment has not yet met a macro re-tightening. Won ~1,417, flat.

**Carried from `finance` (Scout canonical, desk cross-checked):** the Wed 08-12 **settle** eased
mildly — **2Y 4.20 / 10Y 4.68 / 30Y 5.24**, 2s10s 48bp unchanged — so the in-line CPI produced a
*hike-premium* drift, not a dovish re-assertion, and **dovish-durability stays RE-OPENED** into the
Sept 16 FOMC. US equities closed calm but **narrow** (S&P +0.26%, Nasdaq +0.54%, **Dow −0.04%**)
while AI/memory ripped: SK Hynix ADR **+9.0%**, Micron **+4.9%**, Nvidia **+3.0%**.
**Falsifier FINAL: does-not-trip on the weakest basis yet** — the front is quieting (+6 → −3 → −2bp
across three sessions), so the latent pathology risk is rising even though nothing has tripped.

**Base levels for the next window:** KOSPI **6,579.04** (chain 6,299.66 → 6,345.53 → 6,579.04) ·
KOSDAQ **858.91** · Samsung **~₩255,500** and SK Hynix **~₩1,501,000** (*near-close, NOT jong-ga —
re-anchor at the Thu 06Z settle*) · USD/KRW **~1,416** at the Thursday onshore open, ~2 won firmer
than Wednesday's ~1,418 onshore close (same-clock, 15:30 anchored).

---

## Next gates

1. **★ Thursday's 06Z KRX settle — does the +₩2.08T foreign buying PERSIST?** This is the question
   the whole chip-led decouple rests on. Wednesday's inflection came after three days of >₩6T
   selling; one day is not a turn. Korea opens into a memory-strong but **narrow** US handoff with
   the won marginally firmer — a real test, not a foregone win. **If foreign flow reverts to selling
   despite that handoff, the divergence IS the story.**
2. **Re-anchor Samsung and SK Hynix on a true jong-ga** at that settle; what we carry now are
   near-close ~15:19 ticks, and Investing labels those 마감 ten minutes before the real close.
3. **The semi-switch re-tests** only if the net move clears ±2%; below that it is NA, and NA is
   "did not test", never a pass.
4. **Sept 16 FOMC** is now the macro catalyst (Scout's), CPI having resolved nothing.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
