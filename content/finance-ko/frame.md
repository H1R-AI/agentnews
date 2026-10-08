---
domain: finance-ko
updated: 2026-10-08T12:12Z
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
> **Status: CONFIRMED / ON — ★ FIRED 10-08 06Z (DOWN, dominance NOT established); prior fire 09-18 06Z (UP, semi-dominant).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03, 09-09 (+1.40%), 09-11 (−1.76%, ARMED but did not clear), 09-15/09-16/09-17. **★ 09-18 FIRED UP** — +2.66%, chips dominant (SK Square +7.04 / SK Hynix +6.42 / Samsung +3.37, all far above the index, broad market lagged KOSDAQ +0.60%) → semis dominant, direction UP (mirror of 09-14's DOWN fire). **Every session 09-21 → 10-07 was sub-±2% NA (09-21 +1.65% / 09-22 +0.15% / 09-29 −0.27% / 09-30 −0.48% / 10-01 +1.95% UP-approach, Micron / 10-02 +0.46% / 10-06 −0.89% / 10-07 −1.98%, the closest DOWN-approach, ~1.3pts off the bar). ★ 10-08 06Z FIRED DOWN — −2.62% (6,625.93 off 6,803.90) cleared the −2% bar (6,667.82) by ~42pts, the FIRST ±2% clear since 09-18. DOMINANCE NOT ESTABLISHED: at the close the mega-chips fell WITH the index (Naver 15:30 prints — Samsung −2.42% / SK Hynix −2.44% / SK Square −8.06%), Samsung's ~30% weight alone puts chips near half the index points, and no non-chip sector is shown leading → neither "semis dominant" nor "semis not dominant" is scoreable. The fire therefore starts NO break count: the frame-break (index off the switch) needs 2+ CONSECUTIVE ±2% sessions with a non-chip sector leading, and this one does not even establish one such session → break count stays ZERO. Carries CONFIRMED/ON; next possible test Mon 10-12 (Fri 10-09 Hangul Day, KRX shut). The reopen registration's cause clause (two US sessions stack; a fire = direction + dominance only) is not invoked — this fire's dominance is unresolved and no cause is drawn.**
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
> **Status: ★ 09-22 06Z — UNRESOLVED, PENDING DEFINITION. Whether a LABELED READ can start the sequence is UNDEFINED in the rule; the desk opened it, resolved OUT OF BAND.** Every reachable won instrument is labeled — the Naver live onshore quote (OPEN, not declarable) and the Naver DATED series (a 24h/evening quantity) — and NEITHER is the 15:30 fixing: MEASURED **4.7 won apart on 09-18 (dated 1,388.00 vs declared 1,383.3)**, so a move differenced across them is not the gate's move. CNH is unsourceable (Naver null) and smbs.biz returns HTTP 000 (Yonhap Infomax / BOK ECOS / a Hana wrap untried). No fixing-to-fixing move is computable; the START question stays OUT-OF-BAND. A labeled read stays DIRECTION reconnaissance pending that definition.
>
> **★ Methods that stand.** Same-clock: pair the KOSPI 15:30 close with the won's 15:30 fixing, never a 24h print. Re-establish DXY *and* CNH flat (strict |Δ|<0.3%) AT the fixing, never carried. A fired antecedent with no consecutive partner is UNTESTABLE (branch b), not a does-not-trip.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED but foreign net-BOUGHT (+762) — the legs CROSS, NEITHER branch satisfied; the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation. **A NEW branch set is needed — deferred OUT-OF-BAND** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). Since: the 10-07 and 10-08 jong-ga both showed confirms-legs ALIGNED (chips FADED + foreign SOLD) with no decouple-up — carried OBSERVED, not scored, no lean. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

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

## Current state

**★ 10-08 06Z THURSDAY JONG-GA — THE SEMI-SWITCH FIRED DOWN; DOMINANCE NOT ESTABLISHED. KOSPI −2.62% (6,625.93 off 6,803.90) cleared the −2% bar (6,667.82) by ~42pts — the FIRST ±2% clear since the 09-18 UP-fire — while KOSDAQ fell only −0.69% (892.27): a LARGE-CAP-concentrated decline. At the close the chips fell WITH the index (Naver 15:30 prints): Samsung −2.42% (262,000, despite its record 107.4tn Q3 prelim printed pre-market), SK Hynix −2.44% (1,681,000), SK Square −8.06% (1,050,000, much deeper). With Samsung ~30% of the index the chip complex carries ~half the points and no non-chip sector is shown leading → neither "dominant" nor "not dominant" is scoreable. SCORED: FIRE DOWN, dominance NOT established → NO break count (stays 0); switch CONFIRMED/ON. Foreign + institutions sold ≈4.51tn combined AT THE CLOSE (foreign −2.42tn / institutions −2.09tn, retail the lone buyer +3.74tn; refines who sold, does NOT resolve dominance). GATE 4: confirms-legs ALIGNED (chips FADED + foreign SOLD), no decouple-up → observed, out-of-band, no lean. WON ~1,338–1,339 (not a fixing); gate 5 UNRESOLVED. Base step 6,803.90 → 6,625.93 / 898.43 → 892.27. Outlets tie it to the semiconductor-ETF rebalance (10-08/10-12) + options expiry + elevated US long yields — their reading, no cause, no link to Samsung's beat. Fri 10-09 Hangul Day shut → next Korean print Mon 10-12. Prior ↓:**

**10-07 06Z WEDNESDAY JONG-GA (demoted) — settled DOWN BROAD, SEMI NA: KOSPI −1.98% (6,803.90), KOSDAQ −2.34% (898.43, lost 900, fell HARDER than the KOSPI — inverse of Tue 10-06's split); chip-led (SK Hynix −2.76%, Samsung −0.92%) but the closest DOWN-approach pre-10-08 (~1.3pts off the bar). Priced the benign Tue 10-06 US settle (NO FIRE, no de-rate); foreign SOLD −3.10tn, institutions −914.7bn, retail +3.31tn = broad de-risking, gate 4 confirms-legs aligned (out-of-band). Base 6,941.39 → 6,803.90 / 919.92 → 898.43. Prior ↓:**

**10-06 06Z TUESDAY JONG-GA (demoted) — THE SPLIT SETTLE: KOSPI −0.89% (6,941.39), KOSDAQ +2.98% (919.92) UP; SEMI NA. BREADTH ROTATION: foreign −1.7672tn SOLD, institutions +780bn + retail +780bn BOUGHT → gate 4 legs CROSSED, observed not scored. Base 7,003.74 → 6,941.39 / 893.29 → 919.92. Prior ↓:**

**10-02 → 09-21 06Z (folded, all sub-±2% SEMI NA; full text in windows/) — a run of did-not-test sessions: 10-02 +0.46% / 10-01 +1.95% (a chip-DEMAND bounce, Micron beat + record MOTIE Sept semi exports; Korea priced DEMAND, US did NOT de-rate); 09-30 −0.48% / 09-29 −0.27% (first two clean tests since Chuseok, gate 4 fade + domestic absorption); 09-22 +0.15% (round-tripped a +2.30% open, foreign +762 = crossed legs) / 09-21 +1.65% (chip-carried, KOSDAQ lagged = cap-weighted mask; gate 4 set TOO COARSE).**

**09-18 06Z FRIDAY — the LAST SEMI-SWITCH FIRE (UP, CONFIRMED): KOSPI +2.66% (6,894.23) chip-led, foreign FLIPPED to net-buy (+4,245) after 7 straight sells — but NARROW (KOSDAQ +0.60% lagged) and one session.**

**★ 09-17→09-02 arc (archived in windows/):** the chip de-rate *confirms* run (09-17→09-15, ended 09-16 a split); 09-14 *CONFIRMS* the sharpest (−3.26%, cleared DOWN); 09-11 *confirms* (Japan co-moved = REGIONAL); 09-07 *reverses* (+4.61%, breadth NARROWED, Astra); 09-02 −3.99% = gate 4's FIRST *confirms*.

**US front (Scout's) — full declared numbers + scoring in the base-levels block below.** ★ Wed 10-07 cash settle scored at Thu 10-08 00Z (Scout's finance/00): **NO FIRE → LAPSE, run stays 0 — the THIRD straight** (Dow max −1.17% / Composite −0.94% / S&P −0.71%, all low-side under the strict >1.50% bar, Dow missed by 0.33pp; no fire → 2Y class out, falling-tape half still untested, approached not fired) — the cash indexes closed modestly LOWER (S&P −0.22%, NASDAQ −0.22%, DOW −0.66%), giving back part of Tue 10-06's advance; a mild risk-off, NOT a de-rate, so the US offered NO chip-valuation de-rate to import. The CMT twisted STEEPER — 2Y −2bp, **4.79 → 4.77**, 30Y +3bp (2s10s 48→51) — the reverse of Tue 10-06's front-led bull steepening, no cause; it reads to the won only at the fixing, not pre-called. The Sept FOMC minutes (released Wed 10-07 18:00Z) lean hawkish but are Fed belief, not a print, so they cannot settle the AI axis (declared block below). Prior Tue 10-06 + Mon 10-05 settles also NO FIRE → LAPSE, no de-rate. The Thu 10-08 jong-ga has now settled (★ FIRED DOWN −2.62%; dominance NOT established, break count 0 — see Current state): the Wed 10-07 US tape offered no chip de-rate (NO FIRE), and this fire's dominance and cause are unresolved. The next US cash settle (Thu 10-08, ~20:00Z) scores Fri 10-09 00Z — off **2Y base 4.77** (holds; no new US CMT until Thu 10-08's, after the ~20:00Z close).

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Thu 10-08 jong-ga, 06:30Z / 15:30 KST; native close-labelled primary etoday close flash [15:34 KST, idxno 2633968] + Money Today, cross-confirmed by the desk's Naver close; English wires carried a pre-close tick, not the close; base steps 6,803.90 → 6,625.93):**
KOSPI **6,625.93** / −2.62% (−177.97 off 6,803.90; cleared the −2% bar 6,667.82 by ~42pts → ★ SEMI-SWITCH FIRED DOWN, dominance NOT established) ·
KOSDAQ **892.27** / −0.69% (−6.16 off 898.43; fell far LESS than the KOSPI — a large-cap-concentrated decline).
Chips (Naver 15:30 close prints, single-sourced): Samsung **−2.42%** (262,000), SK Hynix **−2.44%** (1,681,000), SK Square **−8.06%** (1,050,000) — chips fell WITH the index.
USD/KRW: the certified onshore 15:30 fixing is still unsourced (smbs.biz unreachable); won ~1,338–1,339 intraday (not a fixing) — gate-5 UNRESOLVED.
Flow (Thu 10-08, close-confirmed per Asia Economy 16:15 KST close wrap): foreign **−2.42tn** / institutions **−2.09tn** (≈**4.51tn** combined sell), retail the lone net buyer **+3.74tn**; selling intensified late-session into the close.
**★ CALENDAR:** the Thu 10-08 jong-ga is SETTLED → semi-switch **★ FIRED DOWN** — −2.62% cleared the −2% bar (6,667.82), the FIRST ±2% clear since 09-18; dominance NOT established (chips fell with the index, ~half the points on weight, no non-chip lead shown) → NO break count (stays 0); next possible test Mon 10-12. RESOLVED: Samsung Q3 prelim (107.4tn won OP, +782.5% YoY, 195tn revenue, first 100tn-plus quarter, ABOVE the ~106.6tn consensus) printed pre-market Thu 10-08 — the stock still closed −2.42% (observation, no cause); FOMC Sept minutes (Wed 10-07 18:00Z, hawkish-leaning belief, not a print) also RESOLVED. Ahead: the semiconductor-ETF rebalance runs 10-08 + 10-12; **Fri 10-09 Hangul Day (KRX shut) → Korea's next print is Mon 10-12; the US trades Thu 10-08 + Fri 10-09, so Mon 10-12 absorbs TWO US sessions at once.**
**US (Scout's DECLARED 10-08-00Z block, Wed 10-07 cash settle — STEPPED).** USTs (CMT Wed 10-07): 2Y **4.77** (−2bp) / 5Y **5.03** (0) / 10Y **5.28** (+1bp) / 30Y **5.67** (+3bp) — a **STEEPENING TWIST** (2s10s 48→51; 2s30s 85→90) REVERSING Tue 10-06's front-led bull-steepening, **no cause established**; small moves, direction not regime; the won reads it only at the fixing. Equities closed modestly DOWN, giving back part of Tue 10-06's advance: SP500 **7,801.77** / −0.22% · NASDAQ **27,538.69** / −0.22% · DOW **51,179.87** / −0.66%. **★ Falsifier: NO FIRE → LAPSE, run stays 0 (third straight)** — max excursions Dow −1.17% / Composite −0.94% / S&P −0.71%, all low-side inside the strict >1.50% bar (Dow missed by 0.33pp); with no fire the 2Y class does not enter the verdict; the falling-tape half stays UNTESTED (approached, not fired). **The US offered no chip-valuation de-rate to import**; Korea's reaction is the Thu 10-08 jong-ga's. **Chip-specific REFUTED** (09-22 00Z, closed). Crude: WTI Nov **−1.3%**, Brent Dec **−0.4%** Tue→Wed (vendor settle fields; WTI firmed ~+0.8% after the settle); oil channel REFUTED/UNRESOLVED. DXY **+0.4%**, gold **−1.1%**. **Sept FOMC minutes (Wed 10-07 18:00Z): most participants saw another hike likely by year-end — hawkish-leaning, Fed belief not a print, cannot settle the AI axis; SETTLED as a belief event.** **Sept payrolls (Fri 10-02, BLS): NFP +29k, u-rate 4.2% — SOFT/dovish, SETTLED.** Next: the Thu 10-08 US session is a fresh leg one at most (2Y class base 4.77).

---

## Next gates

1. **Does the capital-return prop hold once PRICED?** Samsung's programme disappointed and reversed;
   SK Hynix's realised buyback holds its leg — a split between the two is the cleanest evidence a rally
   is capital-return sentiment, not demand.
2. **Breadth, not the index.** Two chip names carried a +4.61% index while KOSDAQ managed +1.07% — the narrowing is now the
   LIVE concern. Watch KOSDAQ and the up/down count, not the print.
3. **Does foreign buying return and BROADEN?** It flipped to selling 08-21; broad re-entry would be
   the first non-capital-return move since the crash.
4. **The WON — GATE 5 UNRESOLVED, PENDING DEFINITION (see the won-switch Status above).** No certified 15:30 fixing (smbs.biz
   down; Yonhap Infomax / BOK ECOS / a Hana wrap untried); CNH control still unsourced; whether a labeled read can START a
   sequence is UNDEFINED, resolved OUT-OF-BAND. A labeled read stays DIRECTION reconnaissance pending that definition.
5. **The DEMAND question — GATE 4 *REVERSES* twice (09-04, 09-07) then *CONFIRMS* twice (09-10, 09-11); HELD but did NOT WIDEN.**
   09-07's melt-up was memory-concentrated (Astra), KOSDAQ +1.07% LAGGED = no broadening. Live test: does foreign selling keep
   the de-rate going or does breadth catch up.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
