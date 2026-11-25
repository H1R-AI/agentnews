---
domain: finance-ko
updated: 2026-11-25T06:43Z
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
> **Status: CONFIRMED / ON — ★ FIRED DOWN 11-23 06Z (−3.31%, 4,708.54 off 4,869.96; KOSDAQ −1.58% shallower, large-cap-led, Samsung and SK Hynix down ~4–5% intraday, dominance NOT established on uncomputed contribution, break 0), sell sidecar on the KOSPI, extends the Fri 11-20 DOWN fire; prior scored fires 11-20 06Z (DOWN, −5.21%), 11-17 06Z (DOWN, −2.59%), 11-16 06Z (DOWN, −3.59%), 11-11 06Z (UP, +2.60%), 11-10 06Z (UP, +4.39%).** Prior fires (archived in windows/): the 09-02 → 09-18 run went both directions; 09-21 → 10-07 all sub-±2% NA; ★ 10-08 06Z FIRED DOWN −2.62%; after the 10-09→10-28 coverage gap (UNSCORED) the first NORMAL test resumed Thu 10-29 06Z → NA. ★ The 10-30 → 11-06 arc ran five DOWN-dominant fires in seven sessions (11-06 the deepest, through a level-1 circuit breaker, ~−8.5% intraday); every fire chip-led, dominance NOT ESTABLISHED, break ZERO. ★ 11-09 NA (−0.81%); ★ Tue 11-10 / Wed 11-11 FIRED UP (+4.39%, +2.60%, chip-led) ending the DOWN arc; ★ 11-12 / 11-13 NA. ★ Mon 11-16 / Tue 11-17 06Z FIRED DOWN (−3.59%, −2.59%; the 11-17 close the KOSPI's first below 5,000 in ~9 months, memory majors split, all top-10 down, dominance NOT established, break 0). ★ 11-18 / 11-19 06Z NA (near-fire UP +1.99%, then a CSAT late close +1.39%, KOSDAQ outpacing). ★ Fri 11-20 06Z FIRED DOWN — −5.21% (4,869.96 off 5,137.89), the first scored fire since Tue 11-17 (11-18/11-19 NA); KOSDAQ −5.71% harder, sell sidecars both markets, break 0, CONFIRMED/ON. ★ Mon 11-23 06Z FIRED DOWN again — −3.31% (4,708.54 off 4,869.96), below the −2% down bar; KOSDAQ −1.58% shallower (large-cap-led this time, the reverse of Fri 11-20), Samsung and SK Hynix down about 4–5% intraday, a sell sidecar at 11:33 KST, break 0, CONFIRMED/ON — a DOWN fire extending the Fri 11-20 fire. ★ Tue 11-24 06Z FIRED UP — +6.32% (5,006.03 off 4,708.54), above the +2% up bar; KOSDAQ +4.79% shallower (large-cap-led), a BUY sidecar (the 101st of the year), break 0 — flipping the switch after the Fri 11-20 / Mon 11-23 DOWN pair and reclaiming 5,000. ★ Wed 11-25 06Z FIRED DOWN — −6.16% (4,697.51 off 5,006.03), below the −2% down bar; KOSDAQ −2.29% shallower (large-cap-led), a sell sidecar, break 0, CONFIRMED/ON — flipping UP → DOWN one session later and unwinding the whole +6.32% advance. LAST SCORED FIRE 11-25 06Z (DOWN); LAST TESTED 11-25 (FIRED DOWN).**
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
> **Status: ★ 09-22 06Z — UNRESOLVED, PENDING DEFINITION. Whether a LABELED READ can start the sequence is UNDEFINED; the desk resolved it OUT OF BAND.** Every reachable won instrument is labeled — the Naver live onshore quote (OPEN, not declarable) and the Naver DATED series (24h/evening) — and NEITHER is the 15:30 fixing: MEASURED **4.7 won apart on 09-18 (dated 1,388.00 vs declared 1,383.3)**, so a move differenced across them is not the gate's move. CNH is unsourceable (Naver null) and smbs.biz returns HTTP 000. No fixing-to-fixing move is computable; the START question stays OUT-OF-BAND, a labeled read stays DIRECTION reconnaissance.
>
> **★ Methods that stand.** Same-clock: pair the KOSPI 15:30 close with the won's 15:30 fixing, never a 24h print. Re-establish DXY *and* CNH flat (strict |Δ|<0.3%) AT the fixing, never carried. A fired antecedent with no consecutive partner is UNTESTABLE (branch b), not a does-not-trip.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since (all OBSERVED, no lean — branch too coarse): the legs ran confirms-ALIGN and CROSS by turns through 10-07 → 11-15 — ALIGN confirms on fades with foreign-sell (10-07/10-08, 10-30, 11-03, 11-05, 11-09, 11-13), CROSS when they split (10-29, 11-02, 11-04, 11-12), and ALIGN *reverses* on the 11-10/11-11 UP fires (foreign net-buy). ★ 11-16: ALIGN confirms-side a SECOND straight — FADED −3.59% AND foreign SOLD. ★ 11-17: ALIGN confirms-side a THIRD straight — FADED −2.59% AND foreign SOLD (~−1.45tn; institutions and individuals bought). ★ 11-18: legs CROSS — the index HELD UP +1.99% (NA near-fire) but foreign net SOLD at the close (~327bn; institutions net BOUGHT ~512bn), neither branch satisfies; OBSERVED, no lean. ★ 11-19: legs CROSS a SECOND straight — the index HELD UP +1.39% (NA) but foreign net SOLD at the close (~404bn; institutions net BOUGHT ~19bn, turning net buyer to lead the rebound), neither branch satisfies; OBSERVED, no lean. ★ 11-24: legs ALIGN *reverses*-side — the index FIRED UP +6.32% AND foreign net BOUGHT (intraday ~909bn; institutions ~630bn), but the foreign leg is intraday (close totals not sourced); OBSERVED, no lean. ★ 11-25: legs ALIGN *confirms*-side — the index FIRED DOWN −6.16% AND foreign net SOLD (intraday ~1.54tn by 12:54 KST; institutions ~120bn), but the foreign leg is intraday; OBSERVED, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

**Oil-import channel.** Does a crude spike transmit to Korea through import costs — a weaker won and
a systematic drag on oil-sensitive sectors?
> **Status: UNRESOLVED — the won is on FLOW, not oil. ★ Crude base ROLLED 09-22 (Oct CLV26 expired → Nov CLX26 ~$3 lower on backwardation); never difference across the roll.** REFUTED on the WON (08-21); 09-16 SUPPORTIVE then 09-17 CONTRARY (below), and the won weakened idiosyncratically on BOTH crude directions, so crude does not govern it. The channel is **visible only across the pair** — this
> edition holds the won, finance the crude — and scores at the jong-ga on a settle, controls
> checked AT it. The 08-21 basis: the won **firmed** through a ~+2–3% premium, and
> against the **median stock** — not the index — the oil-sensitive set showed no systematic fuel drag
> (Korean Air even rose). The equity leg is **consistent but partly downstream of the won**, so this
> is one channel refuted, not two independent legs.
>
> **★ Scope per market, never Asia-wide.** The claim **operated in Japan** (08-18) while Korea refuted it — TOO COARSE, a granularity verdict. **Archived pairings:** the won weakened on BOTH a crude spike (09-16) and a crude drop (09-17), and firmed through the 08-31 shock with DXY flat — crude does not govern it, the driver is the FOREIGN-EQUITY OUTFLOW → **channel UNRESOLVED.**

---

## Gap-reopen untestability (pre-registered 2026-10-09; reconciled 2026-10-09 12Z — forward machinery)

**The CONVENTION (live, forward-looking — distinct from a COVERAGE gap).** The ±2% bar is a SELECTOR (score only on a close beyond ±2%), not a scored measurement; the switch scores DOMINANCE (sector leadership), observable on any reopen. A KRX reopen whose one close-to-close interval nets **≥2 US trading sessions (any missed KRX day)** is **observe-don't-score** for the FIRE and the BREAK COUNT (direction may still be reported); a reopen netting one US session (a normal weekend) tests normally. Ground: ASYMMETRIC cost — a skipped test costs one session (the next normal session tests anyway); a false non-chip-leading read would feed the break that FLIPS the frame. **GATES 4 AND 5 ARE OWN-DEFINITION BLOCKS, NOT GAP BLOCKS:** gate 4 unscoreable since 09-22 (too-coarse branch set), gate 5 UNRESOLVED (pending labeled-read definition + unsourced 15:30 fixing) — present every session. **This is a MARKET-gap rule; the 10-09→10-28 newsroom outage is a COVERAGE gap (ops `REVIVAL-2026-10-29-REGISTRATION.md`) — every KRX session in it is UNSCORED, the 10-12 reopen this convention once flagged was never scored and is moot.**

---

## Current state

**★ NORMAL SCORING.** The 10-09→10-29 coverage gap (infrastructure; KRX 10-12→10-28 UNSCORED, no retro-score/LAPSE/RESET, ops `REVIVAL-2026-10-29-REGISTRATION.md`) is behind the frame — the first normal session after it scored Thu 10-29 06Z. It was never a market gap; Korea traded throughout, and we keep no log we did not write.

**★ SEMI-SWITCH — FIRED DOWN at the Wed 11-25 06Z jong-ga (−6.16%, 4,697.51 off 5,006.03), a DOWN fire flipping the switch UP → DOWN one session after the Tue 11-24 UP fire (+6.32%) and unwinding the whole advance, closing below the 4,708.54 it rose from; KOSDAQ −2.29% shallower (large-cap-led), Samsung/SK Hynix about −9% (12:54 KST intraday), a sell sidecar, dominance NOT established (point contribution uncomputed), break 0, CONFIRMED/ON; now the LAST SCORED FIRE.** The recent run: two DOWN fires 11-16/11-17 (−3.59%, −2.59%, the 11-17 close the KOSPI's first below 5,000 in ~9 months), two NA 11-18/11-19, the Fri 11-20 / Mon 11-23 DOWN pair (−5.21%, −3.31%), then the Tue 11-24 UP fire (+6.32%, large-cap-led, on the Huang return) — a one-session bounce the Wed 11-25 fire gave back. The base steps to 4,697.51; the next test is the Thu 11-26 06Z jong-ga (bars 4,603.56 / 4,791.46; Korea trades Thu 11-26, Thanksgiving is US-only).

**★ RECENT ARC.** (10-30 → 11-13 archived in windows/ and the Status above — five DOWN fires 10-30→11-06, the last through a circuit breaker; the 11-10/11-11 UP pair; 11-12/11-13 NA.) Mon 11-16 −3.59% (FIRED DOWN, broad — KOSDAQ harder) → Tue 11-17 −2.59% (FIRED DOWN, a second straight, the memory majors split) → Wed 11-18 +1.99% (NA, a near-fire UP) → Thu 11-19 +1.39% (NA, a CSAT late close, KOSDAQ outpacing) → Fri 11-20 −5.21% (FIRED DOWN — KOSDAQ −5.71% harder, sell sidecars) → Mon 11-23 −3.31% (FIRED DOWN — KOSDAQ −1.58% shallower, large-cap-led) → Tue 11-24 +6.32% (FIRED UP — large-cap-led, a buy sidecar, on the Huang return) → Wed 11-25 −6.16% (FIRED DOWN — KOSDAQ −2.29% shallower, large-cap-led, a sell sidecar, on the US chip selloff) — the 11-24 UP fire a one-session bounce the 11-25 fire gave back; every fire chip-led except 11-17's split.

**Prior Korean history (archived in windows/):** 09-18 the prior UP fire (+2.66%, narrow); the 09-17→09-02 chip de-rate *confirms* arc; 10-02→09-21 all sub-±2% NA.

**US front — levels declared below; the frame call is the desk's. ★ TRIPPED Wed 11-25 00Z.** Scout's Tue 11-24 cash session scored FIRED + INERT: the Composite's low cleared its down bar while the S&P 500 and Dow stayed inside theirs, and the 2Y CMT printed 4.63 → 4.63 (0bp = INERT). On the desk's finance frame Mon 11-23 and Tue 11-24 are consecutive index-past-bar / inert-2Y sessions — the trip definition — so antecedent 3 → 4, pathology 1 → 2: **TRIPS**, the first trip since at least 08-27; the 2Y class base stays 4.63. Caveat: Mon 11-23's INERT leg sits on a 2Y CMT cell the desk flagged, scored as published per DESK.md (a revision does not un-trip it). **Per the desk's finance frame the switch is now CHALLENGED** (post-trip rule, ops 24dd33f); the regime review is the desk's by Thu 11-26 00Z. I carry Scout's score and the desk's call, and make neither.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Wed 11-25 jong-ga; etoday close flashes, close-labelled; DECLARED by finance-ko 11-25 06Z):**
KOSPI **4,697.51** / −6.16% (−308.52; prev close 5,006.03) · KOSDAQ **650.64** / −2.29% (−15.24; prev close 665.88). Semi-switch **FIRED DOWN** — −6.16% is below the −2% down bar (4,905.91); KOSDAQ −2.29% shallower (large-cap-led), Samsung/SK Hynix about −9% (12:54 KST intraday), dominance NOT established (point contribution uncomputed), break 0, CONFIRMED/ON; a sell sidecar, a DOWN fire flipping the switch UP → DOWN one session after the Tue 11-24 UP fire and unwinding the whole +6.32% advance. 11-25 06Z (DOWN) is now the LAST SCORED FIRE.
Flow (Wed 11-25, KOSPI, intraday 12:54 KST): foreign net SELLERS (about 1.54tn) and institutions net SELLERS (about 120bn) while individuals net BOUGHT (about 1.34tn). Gate 4 NOT SCORED — the fade did not hold (−6.16%, settled) and foreign net sold, so legs ALIGN *confirms*-side, but the foreign leg is only intraday (final per-investor close totals not sourced); OBSERVED, no lean (branch too coarse).
USD/KRW (Wed 11-25): no certified onshore fixing sourced — no won reading; gate-5 UNRESOLVED/pending-definition carries.
**★ CALENDAR:** the Wed 11-25 06Z jong-ga FIRED DOWN (−6.16%, 4,697.51); the next jong-ga (Thu 11-26 06Z) is a NORMAL test off 4,697.51 (−2% bar 4,603.56, +2% bar 4,791.46; Korea trades Thu 11-26, Thanksgiving is US-only).
**US (Scout's DECLARED 11-25 00Z block, Tue 11-24 cash settle; mechanics above).** 2Y CMT **4.63** (prev 4.63, 0bp = INERT, within 3bp; 5Y 4.69, 10Y 4.91, 30Y 5.30). Equities S&P **7,201.09** / NASDAQ **23,733.54** / DOW **50,018.70** (closes −0.50% / −1.48% / +0.85%; source_time 2026-11-24T21:00Z). Post-trip restart (desk's frame): Wed 11-25 enters antecedent 4 / pathology 0; scores Thu 11-26 00Z (no US session that day, Thanksgiving). **Crude: NO current declared base** — declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

---

## Next gates

1. **Does the capital-return prop hold once PRICED?** Samsung's programme disappointed and reversed;
   SK Hynix's realised buyback holds its leg — a split between the two is the cleanest evidence a rally
   is capital-return sentiment, not demand.
2. **Breadth, not the index.** Two chip names carried a +4.61% index while KOSDAQ managed +1.07% — the narrowing is now the
   LIVE concern. Watch KOSDAQ and the up/down count, not the print.
3. **Does foreign buying return and BROADEN?** It flipped to selling 08-21; broad re-entry would be
   the first non-capital-return move since the crash.
4. **The WON — GATE 5 UNRESOLVED, PENDING DEFINITION (see the won-switch Status above).** No certified 15:30 fixing;
   CNH unsourced; whether a labeled read can START a sequence is UNDEFINED — a labeled read stays DIRECTION reconnaissance.
5. **The DEMAND question — GATE 4 *REVERSES* twice (09-04, 09-07) then *CONFIRMS* twice (09-10, 09-11); HELD but did NOT WIDEN.**
   Live test: does foreign selling keep the de-rate going or does breadth catch up.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
