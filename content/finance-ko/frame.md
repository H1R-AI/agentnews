---
domain: finance-ko
updated: 2026-08-26T06:45Z
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
> won has **FIRMED across the run, ~1,419 → ~1,382** (firmest 08-26 AM; then −3 won to **1,385.30** at
the 08-26 settle on a flat dollar — sub-threshold), through a −5.80% crash, a +5.89% bounce, a
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

**★ Wed 08-26 KRX settle — the recovery EXTENDED a 3rd session but RE-CONCENTRATED in the mega-caps.**
KOSPI **6,808.21 / +0.97%** (@08-26 06Z jong-ga; Naver marketStatus=CLOSE + C1-chain) — but **KOSDAQ
was FLAT (−0.03%)** and **Samsung +1.75% / SK Hynix +0.60% carried it**, so this is a mega-cap
re-concentration, **not** a third breadth-repair session (the 08-26 settle up/down count + flows were
date-contamination-blocked and are DEFERRED, not asserted). The arc here: **08-24 −3.12%** (a mirror
crash — index down but 579 names UP, the capital-return trade unwinding on Samsung's disappointing
~₩90–110T shareholder-return reveal) → **08-25 +0.68%** (a violent V — down ~−4.3% intraday to ~6,409,
bought back to a close at the high, breadth strengthening two sessions, an Apple-sourcing scare
rejected intraday) → **08-26 +0.97%** (mega-cap-led). The two mirror days (08-21 index-up/market-down;
08-24 index-down/market-up) proved the index is a **two-mega-cap mirage in both directions**.

**The Apple-CXMT threat — UNPINNED (4 windows), and the harder facts cut FOR Korea.** The memory scare
that hit 08-24/25 traces to a **June-origin** FT "Apple SEEKS approval to buy CXMT memory" story
(Apple the applicant, not the US granting), already undercut before it re-priced: **CXMT REJECTED
Apple's price cut** (Aug 5 — a Korean pricing-power boon) and **US Commerce OPPOSES it** (Lutnick Aug
14). The Aug 24 US move was real+dated but its catalyst stays UNPINNED; US memory settled STRONG into
it (SK Hynix ADR +2.68% @08-25). **Nvidia (Wed 08-26 after the US close) is the nearer demand read**,
reaching Korea Thursday — do NOT pre-score on positioning (expectations ≠ demand). Micron late Sept is
the second, independent read.

**Flows (as of 08-25; 08-26 settle flows unverified):** 08-25 foreign **−₩3.82T** (2nd session at
scale) fully absorbed by institutions **+₩1.17T** and individuals **+₩1.05T** — a heavy foreign exit
met a heavier domestic bid.

**US front repriced DOVISH.** Scout's 08-25 settle scored a **RETRACE** — 2Y **4.17** (−7bp, through
the 4.19 pin) — so the "re-pin at 4.24" was a wobble; a front-led dovish move into **Warsh's Jackson
Hole keynote (Fri 08-28)**. This removes a higher-for-longer headwind the won had been firming against.

**Base levels for the next window (per-market as-of):** KOSPI **6,808.21** (@08-26 06Z jong-ga; chain
6,471.17 → 6,852.58 → 6,912.95 → 6,696.96 → 6,742.74 → 6,808.21) · KOSDAQ **826.87** (@08-26 06Z) ·
Samsung **₩261,500** (@08-26 06Z) · SK Hynix **₩1,688,000** (@08-26 06Z) · USD/KRW **1,385.30** (@08-26
06:34Z / 15:34 KST) · Nikkei **66,262.16** (@08-26 close, Scout-declared) · US 2Y **4.17** (@08-25 settle,
Scout).

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
