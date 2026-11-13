---
domain: finance-ko
updated: 2026-11-13T06:50Z
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
> **Status: CONFIRMED / ON — ★ FIRED UP 11-11 06Z (+2.60%, 5,375.36 off 5,239.13; chip-led, no non-chip leader, dominance NOT established, break 0) — a SECOND straight UP fire; prior scored fires 11-10 06Z (UP, +4.39%) and 11-06 06Z (DOWN).** Prior fires (archived in windows/): the 09-02 → 09-18 run went both directions (chips dominant on the 09-18 +2.66% UP); 09-21 → 10-07 all sub-±2% NA; ★ 10-08 06Z FIRED DOWN −2.62%, the first scored fire since 09-18. After the 10-09→10-28 coverage gap (UNSCORED), the first NORMAL test resumed Thu 10-29 06Z → NA. ★ The 10-30 → 11-06 arc ran five DOWN-dominant fires in seven sessions (11-06 the deepest — 5,059.69, through a level-1 circuit breaker, ~−8.5% intraday; per-session pcts in RECENT ARC below); every fire chip-led, point contribution not computed → DOMINANCE NOT ESTABLISHED (as on every scored fire since 10-08), break ZERO. ★ Mon 11-09 06Z did NOT test — NA (−0.81%, 5,018.85, sub-±2%). ★ Tue 11-10 06Z then FIRED UP — +4.39% (5,239.13 off 5,018.85), clearing the +2% bar for the whole session (a BUY-side sidecar ~09:06 KST), chip-led (chip majors led), no non-chip sector leading, dominance NOT established, break 0, CONFIRMED/ON — a directional reversal that ended the DOWN arc and displaced 11-06. ★ Wed 11-11 06Z then FIRED UP again — +2.60% (5,375.36 off 5,239.13), a GRIND off a chip-soft open (−0.56%, the Tue 11-10 US pullback), the large-cap chips recovering to lead, no non-chip sector leading, dominance NOT established, break 0, CONFIRMED/ON — a second straight UP fire that displaces 11-10. ★ Thu 11-12 06Z did NOT test — NA (−0.61%, 5,342.73, sub-±2%), an early chip-led gain to ~5,450 given back; ★ Fri 11-13 06Z did NOT test — NA (−0.98%, 5,290.53, sub-±2%), a +2.05% gap-up (high 5,504.44) given back as foreign turned net seller, a second straight non-test. LAST SCORED FIRE 11-11 06Z (UP); LAST TESTED 11-11 (11-12 and 11-13 both NA).**
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
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied; the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since: 10-07/10-08 both confirms-ALIGNED (chips FADED + foreign SOLD), no decouple-up, OBSERVED. ★ 10-29: legs CROSS — FADED −1.24% but foreign BOUGHT (~+68-93bn). ★ 10-30: legs ALIGN confirms-side — FADED −3.48% AND foreign SOLD. ★ 11-02: legs CROSS — HELD +2.24% but foreign SOLD (~−370bn). ★ 11-03: legs ALIGN confirms-side — FADED −3.59% AND foreign SOLD (~−1.52tn). ★ 11-04: legs CROSS — HELD +0.62% but foreign SOLD (~−2.5tn). ★ 11-05: legs ALIGN confirms-side — FADED −5.28% (a FIRE DOWN) AND foreign SOLD (~−3.39tn, the largest of the run); OBSERVED, no lean. ★ 11-09: legs ALIGN confirms-side a THIRD straight — the index FADED −0.81% AND foreign net SOLD (~−0.69tn, a seventh straight session); OBSERVED, no lean. ★ 11-10: legs ALIGN *reverses*-side — the index HELD +4.39% (a FIRE UP) AND foreign net BOUGHT (first in eight sessions), the first *reverses*-side since 09-18; OBSERVED, no lean. ★ 11-11: legs ALIGN *reverses*-side a SECOND straight — the index ROSE +2.60% (a FIRE UP) AND foreign net BOUGHT again (~+312–334bn intraday); OBSERVED, no lean. ★ 11-12: legs CROSS — the index FADED −0.61% (NA) BUT foreign net BOUGHT (a third straight foreign net-buy day; institutions the heavy seller), ending the two-session *reverses*-side run; OBSERVED, no lean. ★ 11-13: legs ALIGN confirms-side — the index FADED −0.98% (NA) AND foreign net SOLD (ending the three-session net-buy run; institutions flipped to the close-side buyer); OBSERVED, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

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

**★ SEMI-SWITCH — FIRED UP at the Wed 11-11 06Z jong-ga, a SECOND straight UP fire; chip-led, no non-chip leader, dominance NOT established, break 0, CONFIRMED/ON; now the LAST SCORED FIRE.** The Wed 11-11 jong-ga closed KOSPI +2.60% (5,375.36) off the 5,239.13 base — a GRIND off a chip-soft open (−0.56%), the large-cap memory names recovering to lead (Samsung +3.32%, SK Hynix higher), KOSDAQ +5.62% (705.10); no non-chip sector led by point contribution → dominance NOT established, break 0, CONFIRMED/ON. Korea closed UP regardless — the narrow, Nvidia-specific de-rate did not cut the rally. 11-11 displaces 11-10 as the LAST SCORED FIRE. ★ The Thu 11-12 jong-ga did NOT test — NA (−0.61%, 5,342.73), an early chip-led gain to ~5,450 given back; ★ the Fri 11-13 jong-ga also did NOT test — NA (−0.98%, 5,290.53), a +2.05% gap-up (high 5,504.44) given back as foreign turned net seller, a second straight non-test.

**★ RECENT ARC.** Fri 10-30 −3.48% (FIRED DOWN) → Mon 11-02 +2.24% (UP) → Tue 11-03 −3.59% (DOWN) → Wed 11-04 +0.62% (NA) → Thu 11-05 −5.28% (DOWN) → Fri 11-06 −6.02% (DOWN through a circuit breaker, the deepest of the arc) → Mon 11-09 −0.81% (NA) → Tue 11-10 +4.39% (FIRED UP, chip-led) → Wed 11-11 +2.60% (FIRED UP, a second straight, chip-led) → Thu 11-12 −0.61% (NA) → Fri 11-13 −0.98% (NA) — a DOWN arc of five fires broken by the 11-10/11-11 UP reversals, then two straight NA give-backs; every fire chip-led.

**Prior Korean history (archived in windows/):** 09-18 the prior UP fire (+2.66%, narrow); the 09-17→09-02 chip de-rate *confirms* arc; 10-02→09-21 all sub-±2% NA.

**US front (Scout's) — declared numbers in the base-levels block below.** Scout's Thu 11-12 cash settle (scored Fri 11-13 00Z) FIRED DOWN and RESPONDED — NOT a trip. The Nasdaq Composite's session low ran −1.562%, past the strict −1.50% down bar by about 16 index points (0.06 percentage points), the S&P and the Dow inside, the three closing about −0.35%. The Thu 11-12 2Y CMT — the first since Tuesday, the Treasury market reopened after the Veterans Day holiday — printed 4.86 against 4.73 (+13bp), which RESPONDED under the forward rule and, per the Veterans Day registration, absorbs the UNTESTABLE Wed 11-11: so the pathology run RESETS 0 → 0 (the first measured pathology leg since the Tue 11-10 settle) and the antecedent run advances 6 → 7, the 2Y class base now 4.86. The Wed 11-11 FIRE UP (chip-led, SOX +5.66%) is displaced; the after-hours Nvidia drop and Jensen Huang's exit it preceded are now in the rearview. Scout's Fri 11-13 session — October PPI (8:30am ET) inside it — scores Mon 11-16 00Z; with the pathology run at 0, Friday alone cannot trip, the earliest trip Friday and Monday together on Tue 11-17 00Z. The mixed US chip tape is what produced Friday's Korea gap-up-then-fade (NA, below).

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Fri 11-13 jong-ga; asiae close-wraps, close-labelled; DECLARED by finance-ko 11-13 06Z):**
KOSPI **5,290.53** / −0.98% (−52.20; prev close 5,342.73) · KOSDAQ **699.66** / +0.45% (+3.13; prev close 696.53, just under 700). Semi-switch **NA — did not test** (−0.98% sub-±2%, inside the bars 5,235.88 / 5,449.58), a second straight non-test: Korea gap-opened +2.05% (5,452.41) on the mixed-to-firmer US tape, ran to 5,504.44, then gave it all back as foreign turned net seller — a chip-heavy fade (Samsung ~−1.0%, SK Hynix ~−3.0%) while KOSDAQ held +0.45%. The Wed 11-11 FIRED-UP (+2.60%, 5,375.36) stays the LAST SCORED FIRE, CONFIRMED/ON, break 0.
Flow (Fri 11-13, KOSPI spot): foreign net SOLD (~−407 to −550bn across the intraday/close snapshots), ending the three-session net-buy run; institutions flipped to the close-side buyer (~+533bn, KRX close data); the individual leg is contested. Gate 4 legs ALIGN confirms-side (the index FADED −0.98% **and** foreign SOLD), the first confirms-align since 11-09; OBSERVED, no lean (branch too coarse).
USD/KRW (Fri 11-13): no certified onshore 15:30 fixing sourced — no won reading; gate-5 UNRESOLVED/pending-definition carries.
**★ CALENDAR:** the Fri 11-13 06Z jong-ga did NOT test — NA (−0.98%, 5,290.53); the next jong-ga (Mon 11-16 06Z — no Sat/Sun UTC windows) is a NORMAL test off 5,290.53 (−2% bar 5,184.72, +2% bar 5,396.34).
**US (Scout's DECLARED 11-13 00Z block, Thu 11-12 cash settle — FIRED DOWN + RESPONDED, antecedent run 6 → 7, pathology run RESET 0 → 0 per the forward rule, 2Y class base 4.86).** 2Y CMT **4.86** (prev 4.73, +13bp, the first since Tuesday — the bond market reopened); 5Y 4.95 / 10Y 5.10 / 30Y 5.43 (+14 / +12 / +8bp). Equities S&P **7,592.40** / NASDAQ **25,366.09** / DOW **52,297.09** (source_time 2026-11-12T21:00Z); closes about −0.35 / −0.39 / −0.36% off Wed 11-11, the Composite session low −1.562% the DOWN fire. Scout's Fri 11-13 session (with October PPI, 8:30am ET) scores Mon 11-16 00Z; earliest trip Tue 11-17 00Z. **Crude: NO current declared base** — declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

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
