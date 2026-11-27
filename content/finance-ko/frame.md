---
domain: finance-ko
updated: 2026-11-27T07:06Z
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
> **Status: CONFIRMED / ON — ★ LAST SCORED FIRE Fri 11-27 06Z UP (+4.34%, 4,915.68 off 4,711.21, above the +2% up bar); the live 11-16 → 11-27 chain, both directions, is logged fire-by-fire below.** Prior fires (archived in windows/): 09-02 → 10-07 ran both directions then sub-±2% NA; ★ 10-08 FIRED DOWN; the 10-30 → 11-06 arc five DOWN fires in seven sessions (11-06 through a level-1 circuit breaker, ~−8.5% intraday), all chip-led, break ZERO; ★ 11-10 / 11-11 FIRED UP ending it; 11-09 / 11-12 / 11-13 NA. ★ Mon 11-16 / Tue 11-17 06Z FIRED DOWN (−3.59%, −2.59%; the 11-17 close the first below 5,000 in ~9 months, break 0). ★ 11-18 / 11-19 06Z NA (near-fire UP +1.99%, then a CSAT late close +1.39%, KOSDAQ outpacing). ★ Fri 11-20 06Z FIRED DOWN — −5.21% (4,869.96 off 5,137.89); KOSDAQ −5.71% harder, sell sidecars both markets, break 0. ★ Mon 11-23 06Z FIRED DOWN again — −3.31% (4,708.54 off 4,869.96); KOSDAQ −1.58% shallower (large-cap-led), a sell sidecar, break 0, extending the Fri 11-20 fire. ★ Tue 11-24 06Z FIRED UP — +6.32% (5,006.03 off 4,708.54), above the +2% up bar; KOSDAQ +4.79% shallower (large-cap-led), a BUY sidecar, break 0 — flipping the switch after the Fri 11-20 / Mon 11-23 DOWN pair. ★ Wed 11-25 06Z FIRED DOWN — −6.16% (4,697.51 off 5,006.03), below the −2% down bar; KOSDAQ −2.29% shallower (large-cap-led), a sell sidecar, break 0, CONFIRMED/ON — flipping UP → DOWN one session later and unwinding the whole +6.32% advance. ★ Thu 11-26 06Z NA — the KOSPI closed +0.29% (4,711.21, +13.70 off 4,697.51), inside the ±2% bars (4,603.56 / 4,791.46), so the selector did NOT score; a shallow bounce one session after the −6.16% crash, the index above 4,800 intraday (more than +2%, fnnews/sedaily) then pared to the close; KOSDAQ +0.78% (655.71) outpaced. ★ Fri 11-27 06Z FIRED UP — +4.34% (4,915.68 off 4,711.21), above the +2% up bar (4,805.43); KOSDAQ +8.13% (708.99) outpaced the KOSPI nearly two to one, a KOSDAQ buy sidecar at 10:22 KST; the chip trio rose with the market (Samsung +4.61%, SK Hynix +5.13%, SK Square +4.14%, intraday etoday), electronics sector +4.90%, breadth broad, dominance NOT established (contribution uncomputed), break 0, CONFIRMED/ON — flipping the switch after the Wed 11-25 DOWN fire and the Thu 11-26 NA. LAST SCORED FIRE 11-27 06Z (UP, +4.34%, 4,915.68); LAST TESTED 11-27 06Z (UP); base steps to 4,915.68.**
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
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since (all OBSERVED, no lean — branch too coarse): the legs ran confirms-ALIGN and CROSS by turns through 10-07 → 11-15 — ALIGN confirms on fades with foreign-sell (10-07/10-08, 10-30, 11-03, 11-05, 11-09, 11-13), CROSS when they split (10-29, 11-02, 11-04, 11-12), and ALIGN *reverses* on the 11-10/11-11 UP fires (foreign net-buy). ★ 11-16: ALIGN confirms-side a SECOND straight — FADED −3.59% AND foreign SOLD. ★ 11-17: ALIGN confirms-side a THIRD straight — FADED −2.59% AND foreign SOLD (~−1.45tn; institutions and individuals bought). ★ 11-18 / 11-19: legs CROSS twice — the index HELD UP (+1.99% / +1.39%, NA) but foreign net SOLD at the close; OBSERVED, no lean. ★ 11-24: legs ALIGN *reverses*-side — FIRED UP +6.32% AND foreign net BOUGHT (intraday ~909bn); OBSERVED, no lean. ★ 11-25: legs ALIGN *confirms*-side — FIRED DOWN −6.16% AND foreign net SOLD (intraday ~1.54tn by 12:54 KST); OBSERVED, no lean. ★ 11-26: legs CROSS — NA (+0.29%, a shallow hold) with foreign net buyers in the morning, net sellers into the afternoon (fnnews intraday); OBSERVED, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

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

**★ SEMI-SWITCH — FIRED UP at the Fri 11-27 06Z jong-ga (+4.34%, 4,915.68 off 4,711.21), above the +2% up bar (4,805.43) by 110.25 points, flipping the switch after the Wed 11-25 06Z DOWN fire (−6.16%) and the Thu 11-26 NA (+0.29%); KOSDAQ +8.13% (708.99) outpaced the KOSPI nearly two to one, a KOSDAQ buy sidecar at 10:22 KST (first since the Tue 11-24 fire); the chip trio rose with the market (Samsung +4.61%, SK Hynix +5.13%, SK Square +4.14%, intraday etoday), nearly every sector higher, dominance NOT established (point contribution uncomputed), break 0, CONFIRMED/ON; now the LAST SCORED FIRE (the recent 11-16 → 11-26 run is in the arc pointer and the Status above).** The base steps to 4,915.68; the next test is the Mon 11-30 06Z jong-ga (bars 4,817.37 / 5,013.99; the Fri 11-27 US short session is US-only, scored Mon 11-30 00Z).

**★ RECENT ARC.** The live 11-16 → 11-27 run is logged fire-by-fire in the Status above (10-30 → 11-13 archived in windows/): a DOWN-heavy run (11-16/11-17, then the Fri 11-20 / Mon 11-23 pair) that flipped UP 11-24 (+6.32%), DOWN 11-25 (−6.16%), NA 11-26, then UP again 11-27 (+4.34%, 4,915.68). The earlier fires ran large-cap/chip-led except 11-17's split; the Fri 11-27 fire has the chip trio up with the market, dominance uncomputed.

**Prior Korean history (archived in windows/):** 09-18 the prior UP fire (+2.66%, narrow); the 09-17→09-02 chip de-rate *confirms* arc; 10-02→09-21 all sub-±2% NA.

**US front — levels declared below; the frame call is the desk's. ★ CHALLENGED; the Wed 11-25 US session scored FIRED DOWN + INERT (pathology 0 → 1, leg one).** Scout's Wed 11-25 cash session (scored 11-26 00Z) FIRED DOWN on all three lows (Composite −4.64% under its 23,377.54 bar, S&P −3.21%, Dow −2.21%; closes −0.62 / −0.25 / +0.33%) with the 2Y CMT 4.63 → 4.61 (−2bp, within 3bp = INERT). On the desk's finance frame that is leg one of the post-trip run: **PATHOLOGY-RUN 1, ANTECEDENT-RUN 5, VINDICATION-RUN 0** (an INERT resets the vindication count), the switch stays **CHALLENGED**. The falsifier TRIPPED Mon 11-23 + Tue 11-24 (the trip that opened this run, ops 24dd33f). **Regime review RULED (Leo, Wed 11-25 12:22Z, ops 059e0f5):** stays CHALLENGED; VINDICATED after 3 RESPONDED testable fires in a row (one INERT resets to 0); REFUTED on a second trip; a LAPSE / UNTESTABLE session neither counts nor resets; a fresh review if neither by Wed 12-23. Thu 11-26 (Thanksgiving) has no US session, so both runs FREEZE; Fri 11-27 is a SHORT SESSION, class = the Fri 11-27 CMT vs 4.61, scored Mon 11-30 00Z — a Fri FIRED + INERT is pathology 1 → 2 = a second trip = REFUTED, a ≥4bp move RESETs 1 → 0 and opens VINDICATION-RUN 0 → 1. Mon 11-23's INERT leg sits on a 2Y CMT cell the desk flagged, re-pulled 11-26 00Z and still 4.63, unrevised. I carry Scout's score and the desk's counters/call/ruling, and make neither.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Fri 11-27 jong-ga; etoday/asiae/sedaily close flashes, close-labelled; DECLARED by finance-ko 11-27 06Z):**
KOSPI **4,915.68** / +4.34% (+204.47; prev close 4,711.21) · KOSDAQ **708.99** / +8.13% (+53.28; prev close 655.71). Semi-switch **FIRED UP** — +4.34% is above the +2% up bar (4,805.43), so the Fri 11-27 jong-ga SCORED a UP fire, flipping the switch after the Wed 11-25 DOWN fire and the Thu 11-26 NA; KOSDAQ +8.13% outpaced nearly two to one, a KOSDAQ buy sidecar at 10:22 KST, the chip trio up with the market (Samsung +4.61%, SK Hynix +5.13%, SK Square +4.14%, intraday etoday), dominance NOT established. break 0, CONFIRMED/ON; the Fri 11-27 UP fire is now the LAST SCORED FIRE; base steps to 4,915.68.
Flow (Fri 11-27, KOSPI, intraday ~13:15 KST, etoday): foreign net buyers about 1 trillion won and institutions net buyers, individuals net sellers; final per-investor close totals not sourced. Gate 4 NOT SCORED — the branch set too coarse (09-22); OBSERVED, no lean.
USD/KRW (Fri 11-27): no certified onshore fixing sourced, and the US short session had not traded at 06Z so no fresh DXY — no won reading; gate-5 UNRESOLVED/pending-definition carries.
**★ CALENDAR:** the Fri 11-27 06Z jong-ga FIRED UP (+4.34%, 4,915.68); the next jong-ga (Mon 11-30 06Z) is a NORMAL test off 4,915.68 (−2% bar 4,817.37, +2% bar 5,013.99). The Fri 11-27 06Z UP fire is now the LAST SCORED FIRE; the Fri 11-27 US short session is scored Mon 11-30 00Z.
**US (Scout's DECLARED 11-26 00Z block, Wed 11-25 cash settle; mechanics above).** 2Y CMT **4.61** (prev 4.63, −2bp = INERT, within 3bp; 5Y 4.65, 10Y 4.85, 30Y 5.24). Equities S&P **7,182.78** / NASDAQ **23,585.80** / DOW **50,182.95** (closes −0.25% / −0.62% / +0.33%; source_time 2026-11-25T21:00Z). On the desk's frame the Wed 11-25 FIRED DOWN + INERT is pathology 0 → 1 / antecedent 4 → 5 / VINDICATION-RUN 0 (mechanics, the Fri 11-27 rule and the ruling in the US-front block above). **Crude: NO current declared base** — declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

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
