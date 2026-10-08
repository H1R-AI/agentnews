---
domain: finance-ko
updated: 2026-10-08T00:11Z
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
> **Status: CONFIRMED / ON — ★ FIRED 09-18 06Z (UP).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03, 09-09 (+1.40%), 09-11 (−1.76%, ARMED but did not clear), 09-15/09-16/09-17 (all sub-±2%). **★ 09-18 FIRED UP** — first ±2%-clearing close since 09-14 (+2.66%; chips dominant SK Square +7.04 / SK Hynix +6.42 / Samsung +3.37, all far above the index while the broad market lagged, KOSDAQ +0.60%) → semis dominant = CONFIRMED intact, direction UP (the mirror of 09-14's DOWN fire). **09-21/09-22 sub-±2%; 09-28 UNTESTABLE (4-day Chuseok gap); ★ 09-29 → 10-07 SIX consecutive clean single-session tests, ALL sub-±2% → NA, untested since the 09-18 fire, carries ON/UP (NA is not a pass): 09-29 −0.27%, 09-30 −0.48%, 10-01 +1.95% (the closest UP-side approach, Micron beat; per-name magnitudes disagree), 10-02 +0.46%, 10-06 −0.89% (chip breather — KOSPI DOWN while KOSDAQ +2.98%, a breadth split), ★ 10-07 −1.98% (closest DOWN-side approach — the −2% bar 6,802.56, missed by ~1.3pts; chip-led broad risk-off, foreign + institutions sold together, no US de-rate behind it, no cause). The reopen registration's cause clause (two US sessions stack; a fire = direction + dominance only) never engaged — no fire to attribute.**
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
> **Status: ★ 09-22 06Z — UNRESOLVED, PENDING DEFINITION (was "count ZERO, live"). Whether a LABELED READ can start the sequence is UNDEFINED in the rule; the desk has opened it, resolved OUT OF BAND — not under a publish clock.** Every reachable won instrument is labeled — the Naver live onshore quote (status OPEN, not declarable) and the Naver DATED series (a 24h/evening quantity) — and NEITHER is the onshore 15:30 fixing. Now MEASURED: on **09-18 the dated series prints 1,388.00 while the declared 15:30 reference is 1,383.3 — 4.7 won apart on the SAME date**, so they are different quantities and a move differenced across them is not the gate's move (the 09-16 "reconcile" 1,368.6 vs 1,359.40 was within-tolerance coincidence, not identity). CNH is unsourceable (Naver null) and the certified-fixing host smbs.biz returns HTTP 000 (Yonhap Infomax / BOK ECOS / a Hana wrap = untried). So no fixing-to-fixing move is computable and the START question is open. **The rule fix — can a labeled read start, and what it is licensed to do — is OUT-OF-BAND ops work on its own clock; an undefined cell reported as undefined is a finding, not a gap.** A labeled read stays DIRECTION reconnaissance pending that definition.
>
> **★ Methods that stand.** Same-clock: pair the KOSPI 15:30 close with the won's 15:30 fixing, never a 24h print. Re-establish DXY *and* CNH flat (strict |Δ|<0.3%) AT the fixing, never carried. A fired antecedent with no consecutive partner is UNTESTABLE (branch b), not a does-not-trip.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: ★ 09-22 06Z — NO CLEAN BRANCH; the branch set is TOO COARSE (SCORED).** *reverses* needs HOLD **and** foreign-buy; *confirms* needs FADE **and** foreign-sell. On 09-22 the bounce FADED (KOSPI round-tripped a +2.30% open → +0.15% close) but foreign net-BOUGHT (+762) — the diagnostic legs CROSS, NEITHER branch satisfied; and the 3-session foreign series ALTERNATES (+4,245 / −1,719 / +762) = oscillation, not direction. **A NEW branch set is needed — deferred to OUT-OF-BAND ops** (fitting a branch to the session that motivated it is how a rule gets chosen by what it delivers). 09-22 OBSERVED (not a scored branch): FADE + foreign-NEUTRAL = an imported US gap SOLD BACK on DOMESTIC distribution, foreign not the driver — leans de-rate but without the foreign selling *confirms* needs. **Prior 09-21: ② REPEATS NARROW; 09-18: *REVERSES* (one session, did not broaden).**

**Oil-import channel.** Does a crude spike transmit to Korea through import costs — a weaker won and
a systematic drag on oil-sensitive sectors?
> **Status: UNRESOLVED — the won is on FLOW, not oil. ★ Crude base ROLLED 09-22 (Oct CLV26 expired → Nov CLX26 ~$3 lower on backwardation); never difference across the roll.** REFUTED on the WON (08-21); 09-16 SUPPORTIVE then 09-17 CONTRARY (below), and the won weakened idiosyncratically on BOTH crude directions, so crude does not govern it. The channel is **visible only across the pair** — this
> edition holds the won, finance the crude — and scores at the jong-ga on a settle, controls
> checked AT it. The 08-21 basis: the won **firmed** through a ~+2–3% premium, and
> against the **median stock** — not the index — the oil-sensitive set showed no systematic fuel drag
> (Korean Air even rose). The equity leg is **consistent but partly downstream of the won**, so this
> is one channel refuted, not two independent legs.
>
> **★ Scope per market, never Asia-wide.** The same claim **operated in Japan** (08-18) while Korea refuted it — true in
> one market and false in another is **TOO COARSE**, a verdict about the claim's granularity, not the world.
>
> **★ Live-shock + clean pairings (archived).** 08-31: largest crude shock, won FIRMED with DXY flat (against the channel). 09-16 SUPPORTIVE (crude +4.4%, fixing weakened, dollar flat = +0.72pp residual in the predicted direction) but 09-17 CONTRARY (crude DOWN yet won WEAKENED). Decisive: the won weakened on BOTH a crude spike and a crude drop — crude does not govern it, the driver is the FOREIGN-EQUITY OUTFLOW → **channel UNRESOLVED, both legs stated.**

---

## Current state

**★ 10-07 06Z WEDNESDAY JONG-GA — SETTLED DOWN BROAD INTO A BENIGN US BACKDROP; SEMI-SWITCH DID NOT TEST. KOSPI −1.98% (6,803.90 off 6,941.39), KOSDAQ −2.34% (898.43, gave back the 900 it reclaimed Tue 10-06). Chip-led (SK Hynix −2.76%, Samsung −0.92%) but BROAD — the KOSDAQ fell HARDER than the KOSPI, the inverse of Tue 10-06's chip-down / KOSDAQ-up split. This jong-ga priced the benign Tue 10-06 US settle (scored NO FIRE at 00Z, no de-rate): the US sold no chip valuation, Korea's chips fell — no link drawn; a KB analyst via fnnews reads Samsung-earnings caution (their reading, no cause). SEMI NA at −1.98% (sixth clean sub-±2% test since Chuseok, the CLOSEST DOWN-side approach; carries ON/UP; cause clause never engaged). BROAD DE-RISKING, not a rotation: foreign SOLD −3.10tn won, institutions ALSO SOLD −914.7bn, retail the sole bid +3.31tn (KOSDAQ matched). GATE 4: confirms-side legs ALIGNED (chip FADED + foreign SOLD) and NO decouple (KOSDAQ fell harder) → observed, not a scored branch, no lean (set out-of-band). WON ~flat (~1,339 intraday, not a fixing); gate 5 UNRESOLVED. Base step 6,941.39 → 6,803.90 / 919.92 → 898.43. Prior ↓:**

**10-06 06Z TUESDAY JONG-GA (demoted) — THE SPLIT SETTLE: KOSPI −0.89% (6,941.39) DOWN, KOSDAQ +2.98% (919.92) UP, priced the stacked benign US sessions + SOFT Sept payrolls; SEMI NA. BREADTH ROTATION, not de-rate: foreign −1.7672tn SOLD, institutions +780bn + retail +780bn BOUGHT (domestic absorption) → gate 4 legs CROSSED, observed not scored. Base step 7,003.74 → 6,941.39 / 893.29 → 919.92. Prior ↓:**

**10-02 → 09-21 06Z (folded, all sub-±2% SEMI NA; full text in windows/) — a run of did-not-test sessions: 10-02 +0.46% / 10-01 +1.95% (a chip-DEMAND bounce, Micron beat + record MOTIE Sept semi exports; Korea priced DEMAND, US did NOT de-rate); 09-30 −0.48% / 09-29 −0.27% (first two clean tests since Chuseok, gate 4 fade + domestic absorption); 09-22 +0.15% (round-tripped a +2.30% open, foreign +762 = crossed legs) / 09-21 +1.65% (chip-carried, KOSDAQ lagged = cap-weighted mask; gate 4 set TOO COARSE).**

**09-18 06Z FRIDAY — the LAST SEMI-SWITCH FIRE (UP, CONFIRMED): KOSPI +2.66% (6,894.23) chip-led, foreign FLIPPED to net-buy (+4,245) after 7 straight sells — but NARROW (KOSDAQ +0.60% lagged) and one session.**

**★ 09-17→09-02 arc (archived in windows/):** the chip de-rate *confirms* run (09-17→09-15, ended 09-16 a split); 09-14 *CONFIRMS* the sharpest (−3.26%, cleared DOWN); 09-11 *confirms* (Japan co-moved = REGIONAL); 09-07 *reverses* (+4.61%, breadth NARROWED, Astra); 09-02 −3.99% = gate 4's FIRST *confirms*.

**US front (Scout's) — full declared numbers + scoring in the base-levels block below.** ★ Wed 10-07 cash settle scored at Thu 10-08 00Z (Scout's finance/00): **NO FIRE → LAPSE, run stays 0 — the THIRD straight** (Dow max −1.17% / Composite −0.94% / S&P −0.71%, all low-side under the strict >1.50% bar, Dow missed by 0.33pp; no fire → 2Y class out, falling-tape half still untested, approached not fired) — the cash indexes closed modestly LOWER (S&P −0.22%, NASDAQ −0.22%, DOW −0.66%), giving back part of Tue 10-06's advance; a mild risk-off, NOT a de-rate, so the US offered NO chip-valuation de-rate to import. The CMT twisted STEEPER — 2Y −2bp, **4.79 → 4.77**, 30Y +3bp (2s10s 48→51) — the reverse of Tue 10-06's front-led bull steepening, no cause; it reads to the won only at the fixing, not pre-called. The Sept FOMC minutes (released Wed 10-07 18:00Z) lean hawkish but are Fed belief, not a print, so they cannot settle the AI axis (declared block below). Prior Tue 10-06 + Mon 10-05 settles also NO FIRE → LAPSE, no de-rate. The Wed 10-07 jong-ga had scored the benign Tue 10-06 settle at 06:30Z (KOSPI −1.98%, chip-led BROAD risk-off, semi NA); the next jong-ga (Thu 10-08 06:30Z) scores THIS Wed 10-07 settle — off **2Y base 4.77** (holds; no new US CMT until Thu 10-08's).

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Wed 10-07 jong-ga, 06:30Z / 15:30 KST; native close-labelled primary fnnews [close-wrap, both indexes + flows], matching the finance edition's desk figure; Scout's CNBC .KS11 final 15:30:40 KST = Yahoo ^KS11 dated bar corroborates the KOSPI to the decimal; base steps 6,941.39 → 6,803.90):**
KOSPI **6,803.90** / −1.98% (−137.49 off 6,941.39; a chip-led BROAD decline) ·
KOSDAQ **898.43** / −2.34% (−21.49 off 919.92, gave back the 900 it reclaimed Tue 10-06 — fell HARDER than the KOSPI, the inverse of Tue 10-06's split).
USD/KRW: the certified onshore 15:30 fixing is still unsourced (smbs.biz unreachable); won ~flat (~1,339 intraday, not a fixing) — gate-5 UNRESOLVED.
Flow (Wed 10-07, KRX close per fnnews): foreign net SOLD **−3.10tn won** on the KOSPI while institutions ALSO SOLD **−914.7bn** and retail alone BOUGHT **+3.31tn**; KOSDAQ matched.
**★ CALENDAR:** the Wed 10-07 jong-ga is SETTLED → semi-switch **NA** — −1.98% did not clear ±2% (the −2% level is **6,802.56**; the 6,803.90 close missed it by ~1.3 points, the closest DOWN-side approach of the run; cause clause never engaged, no fire); its next possible test is the **Thu 10-08 jong-ga** (scores only on a ±2%-clearing close). RESOLVED since: FOMC Sept-meeting minutes (released Wed 10-07 18:00Z — hawkish-leaning, most participants saw another hike likely by year-end; belief, not a CPI/PCE print, cannot settle the AI axis); **Samsung Q3 prelim (Thu 10-08, ~07:47 KST): operating profit 107.4tn won (+782.5% YoY) on 195tn revenue — first 100tn-plus quarter, fourth straight record, ABOVE the ~106.6tn FnGuide consensus; outlets read memory/HBM, no company split in a prelim.** Ahead: a projected analyst-estimated ETF weight-cap rebalancing Thu 10-08; Fri 10-09 Hangul Day holiday (KRX shut).
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
4. **The WON — GATE 5 UNRESOLVED, PENDING DEFINITION (09-22).** The reachable instruments are a LABELED live read (Naver
   endpoint OPEN, not declarable) and the DATED series — and the dated series is NOT the 15:30 fixing: MEASURED 4.7 won apart on
   09-18 (dated 1,388.00 vs declared 1,383.3), so no fixing-to-fixing move is computable from them. Whether a labeled read can
   START a gate-5 sequence is UNDEFINED in the rule; the desk has opened it, resolved OUT OF BAND. Reinstating a live test needs a
   certified 15:30 fixing source (smbs.biz down; Yonhap Infomax / BOK ECOS / a Hana wrap untried) AND a CNH control (still unsourced).
5. **The DEMAND question — GATE 4 *REVERSES* twice (09-04, 09-07) then *CONFIRMS* twice (09-10, 09-11); HELD but did NOT WIDEN.**
   09-07's melt-up was memory-concentrated (Astra), KOSDAQ +1.07% LAGGED = no broadening. Live test: does foreign selling keep
   the de-rate going or does breadth catch up.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
