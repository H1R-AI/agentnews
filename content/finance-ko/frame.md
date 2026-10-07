---
domain: finance-ko
updated: 2026-10-07T07:05Z
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
> **★ Live-shock + clean pairings (archived).** 08-31 under the largest crude shock the won FIRMED with DXY flat — against the channel. **09-16: the first clean pairing since 08-21 came back SUPPORTIVE** (crude ~+4.4%, the 15:30 fixing weakened with the dollar ~flat = a +0.72pp idiosyncratic residual in the PREDICTED direction; SIGN robust, SIZE base-dependent). **09-17: the 2nd came back CONTRARY** — crude settled DOWN (predicts a FIRMER won) but the won WEAKENED again. Decisive: the won weakened on a crude SPIKE (09-16) AND a crude DROP (09-17) — crude does not govern it, the driver is the FOREIGN-EQUITY OUTFLOW (the flow channel). The 09-16 read is now suspect (a coincidence) → **channel UNRESOLVED, both legs stated.**

---

## Current state

**★ 10-07 06Z WEDNESDAY JONG-GA — SETTLED DOWN BROAD INTO A BENIGN US BACKDROP; SEMI-SWITCH DID NOT TEST. KOSPI −1.98% (6,803.90 off 6,941.39), KOSDAQ −2.34% (898.43, gave back the 900 it reclaimed Tue 10-06). Chip-led (SK Hynix −2.76%, Samsung −0.92%) but BROAD — the KOSDAQ fell HARDER than the KOSPI, the inverse of Tue 10-06's chip-down / KOSDAQ-up split. This jong-ga priced the benign Tue 10-06 US settle (scored NO FIRE at 00Z, no de-rate): the US sold no chip valuation, Korea's chips fell anyway — no link drawn; fnnews reads it as pre-Samsung-Q3 (Thu 10-08) + holiday caution (their reading, no cause). SEMI NA at −1.98% (sixth clean sub-±2% test since Chuseok, the CLOSEST DOWN-side approach; carries ON/UP; cause clause never engaged). BROAD DE-RISKING, not a rotation: foreign SOLD −3.10tn won (the run's heaviest), institutions ALSO SOLD −914.7bn, retail the sole bid +3.31tn (KOSDAQ matched) — the FIRST session of the run with foreign AND institutions selling together. GATE 4: confirms-side legs ALIGNED (chip FADED + foreign SOLD) and NO decouple (KOSDAQ fell harder) → observed, leaning confirms, not a scored branch (set out-of-band). WON ~flat (~1,339 intraday, not a fixing); gate 5 UNRESOLVED. Base step 6,941.39 → 6,803.90 / 919.92 → 898.43. Prior ↓:**

**10-06 06Z TUESDAY JONG-GA (demoted) — THE SPLIT SETTLE: KOSPI −0.89% (6,941.39) DOWN while KOSDAQ +2.98% (919.92, reclaimed 900) went the OTHER way, priced the stacked Fri 10-02 + Mon 10-05 benign US sessions + SOFT Sept payrolls; SEMI NA. BREADTH ROTATION, not de-rate: foreign −1.7672tn SOLD while institutions +780bn AND retail +780bn EACH BOUGHT (domestic absorption) → gate 4 legs CROSSED, observed not scored; chip softness no cause (fnnews: bond yields + end-of-buyback caution, their reading). Base step 7,003.74 → 6,941.39 / 893.29 → 919.92. Prior ↓:**

**10-02/10-01 (folded, both sub-±2% SEMI NA) — 10-02 FRIDAY +0.46% (7,003.74), KOSDAQ −0.11% (893.29), the last close before the 3-day lock, breadth NARROWED, flow DISPUTED. 10-01 THURSDAY +1.95% (6,971.35), KOSDAQ +4.48% — a chip-DEMAND bounce (Micron beat + record MOTIE Sept semi exports); Korea priced DEMAND, US did NOT de-rate. Prior ↓:**

**09-30/09-29 06Z — FIRST TWO CLEAN TESTS SINCE CHUSEOK, both sub-±2% → SEMI NA, GATE 4 fade + domestic absorption. 09-30 −0.48% (6,838.04), foreign + inst both SOLD; 09-29 −0.27% (6,870.81), foreign SOLD, retail+inst absorbed. Bases 6,870.81 → 6,838.04. Prior ↓:**

**09-22/09-21 06Z (archived) — GATE 4 NO CLEAN BRANCH (set TOO COARSE). 09-22 +0.15% (7,017.91) round-tripped a +2.30% open, foreign +762 = crossed legs; 09-21 +1.65% (7,007.72) chip-carried but KOSDAQ LAGGED = cap-weighted mask.**

**09-18 06Z FRIDAY — the LAST SEMI-SWITCH FIRE (UP, CONFIRMED): KOSPI +2.66% (6,894.23) chip-led, foreign FLIPPED to net-buy (+4,245) after 7 straight sells — but NARROW (KOSDAQ +0.60% lagged) and one session.**

**★ 09-17→09-02 arc (archived in windows/):** 09-17→09-15 chip de-rate *confirms* run (ended 09-16 as a split, institutions-driven, KOSDAQ lagged); 09-14 *CONFIRMS* a THIRD (−3.26%, the sharpest, semi-switch CLEARED DOWN, base 6,909.91 → 6,684.37); 09-11 SECOND *confirms* (Japan co-moved = REGIONAL); 09-07 *reverses* (+4.61%) but breadth NARROWED (Astra); 09-02 the −3.99% crash = gate 4's FIRST *confirms*.

**US front (Scout's) — full declared numbers + scoring in the base-levels block below.** ★ Tue 10-06 cash settle scored at Wed 10-07 00Z (Scout's finance/00): **NO FIRE → LAPSE, run stays 0 — the SECOND straight** (max excursions high-side under the strict >1.50% bar, none below Mon 10-05's close; no fire → 2Y class out, falling-tape half untested) — closing with S&P / Composite one-year-high closes (Dow not), so the US did NOT sell the chip valuation and offered NO de-rate to import. The 2Y CMT fell −5bp, **4.84 → 4.79**, a front-led BULL steepening REVERSING Mon 10-05's long-end-led bear steepening — the front end gave back; it reads to the won only at the fixing, not pre-called. Prior Mon 10-05 settle also NO FIRE → LAPSE run 0, no de-rate. KRX's Wed 10-07 jong-ga SCORED this benign settle at 06:30Z — KOSPI −1.98%, a chip-led BROAD risk-off, semi-switch NA (see the Korea block) — off **2Y base 4.79** (holds; no new US CMT at 06Z, Wed 10-07's US session scores Thu 10-08 00Z).

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Wed 10-07 jong-ga, 06:30Z / 15:30 KST; native close-labelled primary fnnews [close-wrap, both indexes + flows], matching the finance edition's desk figure; Scout's CNBC .KS11 final 15:30:40 KST = Yahoo ^KS11 dated bar corroborates the KOSPI to the decimal; base steps 6,941.39 → 6,803.90):**
KOSPI **6,803.90** / −1.98% (−137.49 off 6,941.39; a chip-led BROAD decline) ·
KOSDAQ **898.43** / −2.34% (−21.49 off 919.92, gave back the 900 it reclaimed Tue 10-06 — fell HARDER than the KOSPI, the inverse of Tue 10-06's split).
USD/KRW: the certified onshore 15:30 fixing is still unsourced (smbs.biz unreachable); won ~flat (~1,339 intraday, not a fixing) — gate-5 UNRESOLVED.
Flow (Wed 10-07, KRX close per fnnews): foreign net SOLD **−3.10tn won** on the KOSPI (the run's heaviest) while institutions ALSO SOLD **−914.7bn** and retail alone BOUGHT **+3.31tn**; KOSDAQ matched — the first session of the run with foreign AND institutions selling together.
**★ CALENDAR:** the Wed 10-07 jong-ga is SETTLED → semi-switch **NA** — −1.98% did not clear ±2% (the −2% level is **6,802.56**; the 6,803.90 close missed it by ~1.3 points, the closest DOWN-side approach of the run; cause clause never engaged, no fire). Ahead: FOMC Sept-meeting minutes **Wed 10-07 18:00Z** (belief, not a CPI/PCE print; inside the Wed 10-07 US session); Samsung Q3 prelim **Thu 10-08** + a projected analyst-estimated ETF weight-cap rebalancing that day; Fri 10-09 Hangul Day holiday.
**US (Scout's DECLARED 10-07-00Z block, Tue 10-06 cash settle — STEPPED).** USTs (CMT Tue 10-06): 2Y **4.79** (−5bp) / 5Y **5.03** (−3bp) / 10Y **5.27** (−4bp) / 30Y **5.64** (−2bp) — a front-led **BULL-STEEPENING** (2s10s 47→48; 2s30s 82→85) REVERSING the Mon 10-05 long-end-led bear-steepening, **no cause established**; small moves, direction not regime; the won reads it only at the fixing. Equities closed UP, S&P / Composite one-year-high closes (Dow not): SP500 **7,818.93** / +0.58% · NASDAQ **27,599.89** / +0.45% · DOW **51,521.28** / +0.49%. **★ Falsifier: NO FIRE → LAPSE, run stays 0 (second straight)** — max excursions S&P +0.91% / Composite +0.89% / Dow +0.79%, all high-side inside the strict >1.50% bar, none below Mon 10-05's close; with no fire the 2Y class does not enter the verdict; the falling-tape half stays UNTESTED. **The US offered no chip-valuation de-rate to import**; Korea's reaction is the jong-ga's. **Chip-specific REFUTED** (09-22 00Z, closed). Crude: WTI Nov ~flat, Brent Dec **+0.3%** Mon→Tue (vendor fields); oil channel REFUTED/UNRESOLVED. DXY **−0.33%**, gold **+0.73%**. **Sept payrolls (Fri 10-02, BLS): NFP +29k, u-rate 4.2% — SOFT/dovish, SETTLED.** Next: FOMC Sept-meeting minutes Wed 10-07 18:00Z (belief, not a CPI/PCE print).

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
