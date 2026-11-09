---
domain: finance-ko
updated: 2026-11-09T07:10Z
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
> **Status: CONFIRMED / ON — ★ FIRED 10-08 06Z (DOWN, dominance NOT established); prior fire 09-18 06Z (UP, semi-dominant).** Prior fires (archived in windows/): the 09-02 → 09-18 run went both directions (09-07 +4.61% UP Astra melt-up, 09-14 −3.26% DOWN, 09-18 +2.66% UP, chips dominant); 09-21 → 10-07 all sub-±2% NA. ★ 10-08 06Z FIRED DOWN — −2.62% (6,625.93), the first scored fire since 09-18; dominance not established (chips fell WITH the index, no non-chip leader), break 0, CONFIRMED/ON. After the 10-09→10-28 coverage gap (UNSCORED), the first NORMAL test resumed Thu 10-29 06Z → NA (−1.24%, 5,937.66). ★ Fri 10-30 06Z FIRED DOWN — −3.48% (5,730.74 off 5,937.66), cleared the −2% bar by ~88pts, chip-led (SK Hynix ~−7%, Samsung ~−3%), dominance not established, break 0; sell-side sidecar 10:04:55 KST (first in 11 sessions), settle shallower than the 5,599.42 intraday low; US AI-profitability shock the attributed press frame. ★ Mon 11-02 06Z FIRED UP — +2.24% (5,859.08 off 5,730.74) cleared the +2% bar (5,845.35), the first SCORED UP fire since 09-18; opened −1.62% in Scout's Fri 10-30 US chip rout then reversed, chip-led (SK Hynix +3.81%, SK Square +5.91%, Samsung +1.78%), no non-chip sector leading, dominance NOT ESTABLISHED, break 0, CONFIRMED/ON; press tied it to institutional bargain-hunting + the October export read ($56.44bn chips, +259.4%), carried attributed. ★ Tue 11-03 06Z FIRED DOWN — −3.59% (5,648.79 off 5,859.08), chip-led, dominance not established, break 0, reversing the Mon 11-02 UP fire. ★ Wed 11-04 06Z did NOT test — NA (KOSPI +0.62%, 5,683.80; sub-±2%), breaking the three-fire run; carries FIRED DOWN, break 0. ★ Thu 11-05 06Z FIRED DOWN — −5.28% (5,383.80 off 5,683.80) cleared the −2% bar (5,570.12) by ~186pts; chip-led, dominance NOT established, break 0; sell-side sidecars on BOTH the KOSPI and KOSDAQ (per SeDaily, the first since 10-15); KOSDAQ −5.11% (678.41), its first close below 700 since late July; SeDaily tied it to the overnight US semiconductor fall (SOX −3.13%). ★ Fri 11-06 06Z FIRED DOWN AGAIN — −6.02% (5,059.69 off 5,383.80) cleared the −2% bar (5,276.12) by ~216pts, the DEEPEST scored fire of the arc and a SECOND consecutive firing jong-ga; the session opened through a level-1 KOSPI circuit breaker at 09:03 KST (20-min halt, ~−8.5% intraday) with a sell-side sidecar (per etoday), then recovered off the trough to the −6.02% close; chip-led (native wires tie it to the overnight US semiconductor shock), no non-chip sector shown leading, point contribution not computed → DOMINANCE NOT ESTABLISHED (as on every scored fire since 10-08), break count stays ZERO, CONFIRMED/ON; KOSDAQ 644.27 (−5.03%). ★ 11-06 is now the LAST SCORED FIRE, displacing 11-05. ★ Mon 11-09 06Z did NOT test — NA (KOSPI −0.81%, 5,018.85 off 5,059.69; sub-±2%, inside the bars 4,958.50 / 5,160.88), the majors closing firm (Samsung +0.64%, SK Hynix +0.35%) while the broad index eased on foreign selling, so not chip-led, but an NA scores no dominance; carries FIRED DOWN, break 0, CONFIRMED/ON. LAST TESTED 11-09 06Z (NA); LAST SCORED FIRE 11-06 06Z (DOWN).**
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
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied; the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since: 10-07/10-08 both confirms-ALIGNED (chips FADED + foreign SOLD), no decouple-up, OBSERVED. ★ 10-29: legs CROSS — FADED −1.24% but foreign BOUGHT (~+68-93bn). ★ 10-30: legs ALIGN confirms-side — FADED −3.48% AND foreign SOLD. ★ 11-02: legs CROSS — HELD +2.24% but foreign SOLD (~−370bn). ★ 11-03: legs ALIGN confirms-side — FADED −3.59% AND foreign SOLD (~−1.52tn). ★ 11-04: legs CROSS — HELD +0.62% but foreign SOLD (~−2.5tn). ★ 11-05 (settled): legs ALIGN confirms-side again — the index FADED hard (−5.28%, a FIRE DOWN) AND foreign net SOLD (~−3.39tn, a FIFTH straight session of foreign selling and the largest of the run); a shift back from 11-04's cross; still OBSERVED, no lean (branch set too coarse). ★ 11-09: legs ALIGN confirms-side a THIRD straight — the index FADED −0.81% AND foreign net SOLD (~−0.69tn, a seventh straight session, the smallest of the run); OBSERVED, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

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

**★ SEMI-SWITCH — FIRED DOWN at the Fri 11-06 06Z jong-ga; chip-led, dominance NOT established, break 0, CONFIRMED/ON; now the LAST SCORED FIRE and the deepest of the arc.** The Fri 11-06 jong-ga closed KOSPI −6.02% (5,059.69, −324.11) off the 5,383.80 base, clearing the −2% bar (5,276.12) by ~216pts — the deepest scored fire of the arc and a second consecutive firing jong-ga after Thu 11-05 — and KOSDAQ −5.03% (644.27). The session opened through a level-1 KOSPI circuit breaker (09:03 KST, 20-min halt, ~−8.5% intraday) with a sell-side sidecar (per etoday), then recovered off the trough to the close. The decline was chip-led (native wires tie it to the overnight US semiconductor shock), no non-chip sector shown leading, point contribution not computed → dominance NOT established (as on every scored fire since 10-08), so the fire advances no break: break stays 0, CONFIRMED/ON. 11-06 displaces 11-05 as the LAST SCORED FIRE — five fires in seven sessions (10-30 DOWN / 11-02 UP / 11-03 DOWN / 11-04 NA / 11-05 DOWN / 11-06 DOWN), the last two DOWN, all chip-led, all dominance not established, all break 0 (fires do not advance the break). ★ The Mon 11-09 06Z jong-ga then did NOT test — NA (KOSPI −0.81%, 5,018.85, sub-±2%) — so 11-06 remains the LAST SCORED FIRE; on 11-09 the majors closed firm (Samsung +0.64%, SK Hynix +0.35%) while the broad index eased on foreign selling, i.e. not chip-led, but an NA scores no dominance and the switch carries FIRED DOWN, break 0, CONFIRMED/ON.

**★ RECENT ARC.** Fri 10-30 −3.48% (FIRED DOWN) → Mon 11-02 +2.24% (FIRED UP) → Tue 11-03 −3.59% (FIRED DOWN) → Wed 11-04 +0.62% (NA) → Thu 11-05 −5.28% (FIRED DOWN) → Fri 11-06 −6.02% (FIRED DOWN through a circuit breaker, the deepest of the arc) → Mon 11-09 −0.81% (NA, sub-±2%) — five fires then an NA, the fires all chip-led and the last two DOWN; the Mon 11-09 NA closed with the majors firm and foreign-led softness, not chip-led.

**Prior Korean history (archived in windows/):** 09-18 the prior UP fire (+2.66%, narrow); the 09-17→09-02 chip de-rate *confirms* arc; 10-02→09-21 all sub-±2% NA.

**US front (Scout's) — declared numbers in the base-levels block below.** Scout's Fri 11-06 cash settle (scored Mon 11-09 00Z) was a FIRE + RESPONDED — the Nasdaq Composite's session high cleared the +1.50% bar (closes S&P +0.31% / Composite +1.09% / Dow −0.46%; PHLX semiconductor index +4.21%, a chip-complex rebound) and the 2Y CMT settled +5bp to 4.51 (RESPONDED, ≥4bp), so the antecedent run goes 2 → 3 while the pathology run RESETS 0 → 0 — NOT a trip. The new 2Y class base is 4.51; Scout's Mon 11-09 US session scores Tue 11-10 00Z and no Monday trip is possible (pathology at 0). October payrolls (165k vs ~59k consensus, BLS via Scout) sat inside the scored Fri 11-06 session; the prior Thu 11-05 settle had been a chip-LED broad decline.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Mon 11-09 jong-ga; asiae close-wrap, close-labelled "마감", + KRX index CLOSE cross-check and an independent data feed; DECLARED by finance-ko 11-09 06Z):**
KOSPI **5,018.85** / −0.81% (−40.84; prev close 5,059.69) · KOSDAQ **638.97** / −0.82% (−5.30; prev close 644.27). Semi-switch **NA — did not test** (−0.81% inside the ±2% bars 4,958.50 / 5,160.88): carries FIRED DOWN from the Fri 11-06 jong-ga (−6.02%, 5,059.69), break 0, CONFIRMED/ON — still the LAST SCORED FIRE and the deepest of the arc. No circuit breaker or sidecar on Mon 11-09. The session swung to a 4,990.66 low and a 5,172.94 intraday high (about +2.2%, briefly past the +2% bar) before fading to the close; the two majors closed firm (Samsung +0.64%, SK Hynix +0.35%) while the broad index eased on foreign selling, so the small decline was not chip-led — but an NA scores no dominance.
Flow (Mon 11-09 close, KOSPI spot): foreign the dominant net SELLER **~−0.69tn won** (−693.0bn; close-basis KRX tally via the native wrap, single-sourced) — a SEVENTH straight session of foreign cash selling and the smallest of the run — with institutions (about +0.72tn) the net buyer and individuals (about −0.49tn) net sellers (a shift from Fri 11-06, when individuals bought). Gate 4 legs ALIGN confirms-side (the index FADED −0.81% **and** foreign SOLD), a THIRD straight aligned read; OBSERVED, no lean (branch too coarse).
USD/KRW (Mon 11-09): no certified onshore 15:30 fixing sourced — no won reading; gate-5 UNRESOLVED/pending-definition carries.
**★ CALENDAR:** the Mon 11-09 06Z jong-ga was NA (−0.81%, 5,018.85), carrying the Fri 11-06 FIRED DOWN; the next jong-ga (Tue 11-10 06Z) is a NORMAL test off 5,018.85 (−2% bar ~4,918.47, +2% bar ~5,119.23).
**US (Scout's DECLARED 11-09 00Z block, Fri 11-06 cash settle — FIRE + RESPONDED, antecedent run 2 → 3, pathology run RESET 0 → 0, NOT a trip).** 2Y CMT **4.51** (prev 4.46, +5bp RESPONDED) — the new class base for the next US settle; 5Y 4.64 / 10Y 4.86 / 30Y 5.26. Equities S&P **7,376.86** / NASDAQ **24,579.43** / DOW **51,285.73** (source_time 2026-11-06T21:00Z); on the Fri 11-06 session the Nasdaq Composite's high cleared the +1.50% bar (closes +0.31 / +1.09 / −0.46%, PHLX semiconductor index +4.21%), a chip-complex rebound, with October payrolls (165k vs ~59k, BLS via Scout) inside it. Scout's Mon 11-09 US session scores Tue 11-10 00Z; no Monday trip possible (pathology at 0). **Crude: NO current declared base** — declare a fresh settle before any crude level. Chip-specific REFUTED (09-22, closed); oil channel REFUTED/UNRESOLVED.

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
