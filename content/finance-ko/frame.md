---
domain: finance-ko
updated: 2026-11-20T07:16Z
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
> **Status: CONFIRMED / ON — ★ FIRED DOWN 11-20 06Z (−5.21%, 4,869.96 off 5,137.89; the decline broad — KOSDAQ −5.71% harder, Samsung and SK Hynix both ~−6% — no non-chip leader, dominance NOT established, break 0), sell sidecars on both markets, the first scored fire since Tue 11-17 (11-18/11-19 NA); prior scored fires 11-17 06Z (DOWN, −2.59%), 11-16 06Z (DOWN, −3.59%), 11-11 06Z (UP, +2.60%), 11-10 06Z (UP, +4.39%).** Prior fires (archived in windows/): the 09-02 → 09-18 run went both directions; 09-21 → 10-07 all sub-±2% NA; ★ 10-08 06Z FIRED DOWN −2.62%; after the 10-09→10-28 coverage gap (UNSCORED) the first NORMAL test resumed Thu 10-29 06Z → NA. ★ The 10-30 → 11-06 arc ran five DOWN-dominant fires in seven sessions (11-06 the deepest, through a level-1 circuit breaker, ~−8.5% intraday); every fire chip-led, dominance NOT ESTABLISHED, break ZERO. ★ 11-09 NA (−0.81%); ★ Tue 11-10 / Wed 11-11 FIRED UP (+4.39%, +2.60%, chip-led) ending the DOWN arc; ★ 11-12 / 11-13 NA. ★ Mon 11-16 06Z FIRED DOWN −3.59% (broad, KOSDAQ −4.86% harder), resuming the DOWN side. ★ Tue 11-17 06Z FIRED DOWN again — −2.59% (4,968.48 off 5,100.50), the memory majors SPLIT (Samsung ~−3.30% steeper, SK Hynix ~−1.96% and KOSDAQ −2.34% shallower), all top-10 by market cap down, no non-chip leader, dominance NOT established, break 0, CONFIRMED/ON — a SECOND straight DOWN fire; the KOSPI's first close below 5,000 in ~9 months. ★ Wed 11-18 06Z NA — a near-fire UP, +1.99% (5,067.44), 0.41 under the +2% up bar (5,067.85); break 0, CONFIRMED/ON. ★ Thu 11-19 06Z NA — a CSAT late close (10:00–16:30 KST): the KOSPI closed +1.39% (5,137.89 off 5,067.44), 30.90 under the +2% up bar (5,168.79); opened 5,090.04, dipped to a 4,963.61 intraday low (unscored), recovered to close, KOSDAQ (+3.32%) outpacing; break 0, CONFIRMED/ON. ★ Fri 11-20 06Z FIRED DOWN — −5.21% (4,869.96 off 5,137.89), the first scored fire since Tue 11-17 (11-18/11-19 NA); the decline broad (KOSDAQ −5.71% harder), sell sidecars both markets, break 0, CONFIRMED/ON. LAST SCORED FIRE 11-20 06Z (DOWN); LAST TESTED 11-20 (FIRED DOWN).**
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
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied; the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since (all OBSERVED, no lean — branch too coarse): the legs ran confirms-ALIGN and CROSS by turns through 10-07 → 11-15 — ALIGN confirms on fades with foreign-sell (10-07/10-08, 10-30, 11-03, 11-05, 11-09, 11-13), CROSS when they split (10-29, 11-02, 11-04, 11-12), and ALIGN *reverses* on the 11-10/11-11 UP fires (foreign net-buy). ★ 11-16: ALIGN confirms-side a SECOND straight — FADED −3.59% AND foreign SOLD. ★ 11-17: ALIGN confirms-side a THIRD straight — FADED −2.59% AND foreign SOLD (~−1.45tn; institutions and individuals bought). ★ 11-18: legs CROSS — the index HELD UP +1.99% (NA near-fire) but foreign net SOLD at the close (~327bn; institutions net BOUGHT ~512bn), neither branch satisfies; OBSERVED, no lean. ★ 11-19: legs CROSS a SECOND straight — the index HELD UP +1.39% (NA) but foreign net SOLD at the close (~404bn; institutions net BOUGHT ~19bn, turning net buyer to lead the rebound), neither branch satisfies; OBSERVED, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

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

**★ SEMI-SWITCH — FIRED DOWN at the Fri 11-20 06Z jong-ga (−5.21%, 4,869.96), the first scored fire since Tue 11-17 (11-18/11-19 NA); the decline broad (KOSDAQ −5.71% harder, Samsung and SK Hynix both ~−6%), no non-chip leader, dominance NOT established, break 0, CONFIRMED/ON; now the LAST SCORED FIRE.** The Tue 11-17 jong-ga closed KOSPI −2.59% (4,968.48) off the 5,100.50 base — below the −2% down bar (4,998.49); the memory majors SPLIT: Samsung ~−3.30% steeper than the index while SK Hynix ~−1.96% and KOSDAQ −2.34% (650.06) fell shallower, but all ten of the KOSPI top-10 by market cap fell (fnnews); no non-chip leader and point contribution uncomputed (no sourced weights) → dominance NOT established, break 0, CONFIRMED/ON. It is the KOSPI's first close below 5,000 in ~9 months (carried attributed). 11-17 displaces the Mon 11-16 FIRED-DOWN as the LAST SCORED FIRE — two straight DOWN fires (−3.59% then −2.59%) sit on the switch. ★ Wed 11-18 06Z tested NA (near-fire UP, +1.99%, 5,067.44). ★ Thu 11-19 06Z tested NA — a CSAT late close: KOSPI +1.39% (5,137.89), 30.90 under the +2% up bar (5,168.79); opened 5,090.04, dipped to a 4,963.61 intraday low (unscored), recovered to close, KOSDAQ (+3.32%) outpacing; break 0, CONFIRMED/ON unchanged. ★ Fri 11-20 06Z FIRED DOWN — −5.21% (4,869.96 off 5,137.89), below the −2% down bar, the decline broad (KOSDAQ −5.71% harder); sell sidecars both markets. The base steps to 4,869.96; the next test is the Mon 11-23 06Z jong-ga (bars 4,772.56 / 4,967.36).

**★ RECENT ARC.** Fri 10-30 −3.48% (FIRED DOWN) → Mon 11-02 +2.24% (UP) → Tue 11-03 −3.59% (DOWN) → Wed 11-04 +0.62% (NA) → Thu 11-05 −5.28% (DOWN) → Fri 11-06 −6.02% (DOWN through a circuit breaker, the deepest of the arc) → Mon 11-09 −0.81% (NA) → Tue 11-10 +4.39% (FIRED UP, chip-led) → Wed 11-11 +2.60% (FIRED UP, a second straight, chip-led) → Thu 11-12 −0.61% (NA) → Fri 11-13 −0.98% (NA) → Mon 11-16 −3.59% (FIRED DOWN, chip-led but broad — KOSDAQ harder) → Tue 11-17 −2.59% (FIRED DOWN, a second straight, the memory majors split, all top-10 by market cap down) → Wed 11-18 +1.99% (NA, a near-fire UP 0.41 under the up bar) → Thu 11-19 +1.39% (NA, a CSAT late close; opened 5,090.04, dipped to a 4,963.61 low intraday, recovered, KOSDAQ +3.32% outpacing) → Fri 11-20 −5.21% (FIRED DOWN, broad — KOSDAQ −5.71% harder, sell sidecars both markets) — the 11-16/11-17 pair a two-straight DOWN resumption after the 11-10/11-11 UP reversals, then two NA (11-18/11-19), then the Fri 11-20 DOWN fire off the US tape; every fire chip-led except 11-17's split.

**Prior Korean history (archived in windows/):** 09-18 the prior UP fire (+2.66%, narrow); the 09-17→09-02 chip de-rate *confirms* arc; 10-02→09-21 all sub-±2% NA.

**US front (Scout's) — declared numbers in the base-levels block below.** Scout's Thu 11-19 cash session (scored Fri 11-20 00Z) FIRED + RESPONDED (a DOWN fire): all three indices crossed their down bars intraday and the 2Y CMT printed 4.80 → 4.76 (−4bp = RESPONDED, at the edge), so the antecedent run goes 0 → 1 and the pathology RESETs 0 → 0 (a fired leg expiring, not a STAY) — no trip, the anchor moved; the 2Y class base is 4.76. With the pathology at 0, a Fri 11-20 fire is leg one at most (the pathology advances only under an INERT CMT), scored Mon 11-23 00Z; a ≥4bp 2Y move RESETs. FOMC October minutes (Wed 11-18): Waller flagged a probable half-point December (CNBC via the desk). No forecast on a fire — Scout's Fri 11-20 session decides, scored Mon 11-23 00Z.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Fri 11-20 jong-ga; etoday close flashes, close-labelled; DECLARED by finance-ko 11-20 06Z):**
KOSPI **4,869.96** / −5.21% (−267.93; prev close 5,137.89) · KOSDAQ **645.68** / −5.71% (−39.13; prev close 684.81). Semi-switch **FIRED DOWN** — −5.21% is below the −2% down bar; the decline broad (KOSDAQ −5.71% harder, Samsung and SK Hynix both ~−6%), no non-chip leader, dominance NOT established, break 0, CONFIRMED/ON; sell sidecars on both markets, the first scored fire since Tue 11-17 (11-18/11-19 NA). 11-20 06Z (DOWN) is now the LAST SCORED FIRE.
Flow (Fri 11-20, KOSPI, intraday close wraps): foreign and institutions both net SOLD (together over 1.67tn by mid-afternoon), individuals net BOUGHT (over 1.3tn); institutions net SOLD after leading the 11-18/11-19 rebound buying. Gate 4 legs ALIGN confirms-side — the index FADED (−5.21%) and foreign SOLD, the first ALIGN after two straight CROSS (11-18/11-19); OBSERVED, no lean (branch too coarse). Final per-investor totals pending.
USD/KRW (Fri 11-20): no certified onshore fixing sourced — no won reading; gate-5 UNRESOLVED/pending-definition carries.
**★ CALENDAR:** the Fri 11-20 06Z jong-ga FIRED DOWN (−5.21%, 4,869.96); the next jong-ga (Mon 11-23 06Z) is a NORMAL test off 4,869.96 (−2% bar 4,772.56, +2% bar 4,967.36).
**US (Scout's DECLARED 11-20 00Z block, Thu 11-19 cash settle — FIRED + RESPONDED (DOWN), antecedent run 0 → 1, pathology RESET 0 → 0, no trip, 2Y class base 4.76).** 2Y CMT **4.76** (prev 4.80, −4bp = RESPONDED, at the edge). Equities S&P **7,175.83** / NASDAQ **23,879.20** / DOW **49,097.06** (closes −2.02% / −2.25% / −2.19%; source_time 2026-11-19T21:00Z). Scout's Fri 11-20 session scores Mon 11-23 00Z; with the pathology at 0 a Fri 11-20 fire is leg one at most; FOMC October minutes released Wed 11-18. **Crude: NO current declared base** — declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

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
