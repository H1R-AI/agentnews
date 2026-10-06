---
domain: finance-ko
updated: 2026-10-06T07:17Z
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
> **Status: CONFIRMED / ON — ★ FIRED 09-18 06Z (UP).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03, 09-09 (+1.40%), 09-11 (−1.76%, ARMED but did not clear), 09-15/09-16/09-17 (all sub-±2%). **★ 09-18 FIRED UP** — first ±2%-clearing close since 09-14 (+2.66%; chips dominant SK Square +7.04 / SK Hynix +6.42 / Samsung +3.37, all far above the index while the broad market lagged, KOSDAQ +0.60%) → semis dominant = CONFIRMED intact, direction UP (the mirror of 09-14's DOWN fire). **09-21/09-22 sub-±2%; 09-28 UNTESTABLE (4-day Chuseok gap); ★ 09-29 → 10-06 FIVE consecutive clean single-session tests, ALL sub-±2% → NA, untested since the 09-18 fire, carries ON/UP (NA is not a pass): 09-29 −0.27%, 09-30 −0.48%, 10-01 +1.95% (the closest UP-side approach, Micron beat; per-name magnitudes disagree), 10-02 +0.46%, ★ 10-06 −0.89% (chip breather — KOSPI DOWN while KOSDAQ +2.98%, a breadth split; no US de-rate; cause not established). The reopen registration's cause clause (two US sessions stack; a fire = direction + dominance only) never engaged — no fire to attribute.**
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

**★ 10-06 06Z TUESDAY REOPEN JONG-GA — THE SPLIT SETTLE: CHIP INDEX DOWN, BROAD MARKET UP, SEMI-SWITCH DID NOT TEST. KOSPI −0.89% (6,941.39 off 7,003.74; intraday low 6,897.38 below 6,900, recovered into the auction), KOSDAQ +2.98% (919.92, reclaimed 900). The first jong-ga since Fri 10-02, pricing the stacked Fri 10-02 + Mon 10-05 US sessions + SOFT Sept payrolls — both US sessions BENIGN (no de-rate), but the chip softness (SK Hynix −3.48%, Samsung −2.17%) has NO cause established; desks cite pre-Samsung-Q3-prelim caution (Thu 10-08) + US 10Y on multiples. SEMI NA at −0.89% (fifth clean sub-±2% test, carries ON/UP; cause clause never engaged — no fire). BREADTH ROTATION, not de-rate: KOSDAQ led the broad market up; foreign −1.32tn + institutions −74bn SOLD the KOSPI, retail +570bn the bid. GATE 4: chip leg FADED + foreign SOLD (confirms-side for chips) but broad market DECOUPLED UP → a rotation; branch set still too coarse/out-of-band — observed, not scored. WON about flat (won live 1,342.00, −0.04%); gate 5 UNRESOLVED. Base 7,003.74 → 6,941.39 / 893.29 → 919.92. Prior ↓:**

**★ 10-02/10-01 (folded) — the pre-lock Fri 10-02 + the Thu 10-01 demand-bounce, both sub-±2% (SEMI NA). 10-02 FRIDAY JONG-GA +0.46% (7,003.74), KOSDAQ −0.11% (893.29) — the last close before the 3-day lock, priced Thu 10-01's benign US session with a MILD gain, breadth NARROWED, flow DISPUTED. 10-01 THURSDAY +1.95% (6,971.35), KOSDAQ +4.48% — a sharp chip-DEMAND bounce on Micron's beat + a record MOTIE Sept semi export print; Korea priced DEMAND, US valuation did NOT de-rate. Prior ↓:**

**★ 09-30 / 09-29 06Z — the FIRST TWO CLEAN TESTS SINCE CHUSEOK, NOTHING FIRED; both sub-±2% → SEMI NA / UNTESTABLE STAY, GATE 4 fade + domestic absorption. 09-30 −0.48% (6,838.04), bid narrowed to retail (foreign −20,520 / inst −7,680 both SOLD); 09-29 −0.27% (6,870.81), foreign −29,030 SOLD, retail+inst absorbed. Bases 6,889.74 → 6,870.81 → 6,838.04. Prior ↓:**

**★ 09-22/09-21 06Z (archived) — GATE 4 NO CLEAN BRANCH (set TOO COARSE, new set out of band). 09-22 +0.15% (7,017.91) round-tripped a +2.30% open (US gap SOLD BACK), foreign +762 = crossed legs, flow ALTERNATES; 09-21 +1.65% (7,007.72) chip-carried but KOSDAQ LAGGED = cap-weighted mask, not demand. Bases → 7,007.72 → 7,017.91.**

**★ 09-18 06Z FRIDAY — the LAST SEMI-SWITCH FIRE (UP, CONFIRMED) and GATE 4's FIRST *REVERSES* since 09-07: KOSPI +2.66% (6,894.23) chip-led, foreign FLIPPED to net-buy (+4,245) after 7 straight sells — but NARROW (KOSDAQ +0.60% lagged) and one session; won did NOT firm. Base 6,715.41 → 6,894.23.**

**★ 09-17→09-02 arc (archived in windows/):** 09-17→09-15 chip de-rate *confirms* run (ended 09-16 as a split, institutions-driven, KOSDAQ lagged); 09-14 *CONFIRMS* a THIRD (−3.26%, the sharpest, semi-switch CLEARED DOWN, base 6,909.91 → 6,684.37); 09-11 SECOND *confirms* (Japan co-moved = REGIONAL); 09-07 *reverses* (+4.61%) but breadth NARROWED (Astra); 09-02 the −3.99% crash = gate 4's FIRST *confirms*.

**US front (Scout's) — full declared numbers + scoring in the base-levels block below.** ★ Mon 10-05 cash settle scored at Tue 10-06 00Z (Scout's finance/00): **NO FIRE → LAPSE, run stays 0** (Composite full-session max +1.30%, inside the strict >1.50% bar; S&P +0.93%, Dow −0.61% low-side) — closing a record AI-led Composite, so the US did NOT sell the chip valuation and NO de-rate is imported; the falling-tape half stays untested. The 2Y CMT stepped +1bp, **4.83 → 4.84** (a long-end-led bear-STEEPENING, 10Y/30Y +3bp) — a FLAT front end, so the won-path firmer-dollar lean rests on the dollar (DXY ~+0.2%), not a fresh Fed-path move. Prior Fri 10-02 settle (scored 10-05 00Z): FIRE + RESPONDED → RESET to 0, informative (2Y +5bp, 4.78 → 4.83), also NO de-rate — so across BOTH US sessions Korea prices Tuesday, neither de-rated the chip valuation. The SOFT Sept payrolls (+29k / 4.2% / −60k) impulse round-tripped HIGHER by the Fri 10-02 CMT and stays there. Korea READ Fri 10-02 + Mon 10-05 at the Tue 10-06 jong-ga — semi NA (−0.89%), chip-led drag with no cause established, no US de-rate — off **2Y base 4.84**.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Tue 10-06 jong-ga, 06:30Z / 15:30 KST; native close-labelled primaries etoday [KOSPI] + asiae [KOSDAQ], matching the finance edition's desk figure; corroborated by investing.com KS11 6,941.89; base steps 7,003.74 → 6,941.39):**
KOSPI **6,941.39** / −0.89% (−62.35 off 7,003.74; dipped to a 6,897.38 low below 6,900 intraday, recovered into the 15:30 auction; TradingEconomics corroborates 6,935.18 / −0.98%) ·
KOSDAQ **919.92** / +2.98% (+26.63 off 893.29, reclaimed 900 — led by semi-equipment/materials + secondary batteries, inverse of the KOSPI).
USD/KRW: the certified onshore 15:30 fixing is still unsourced (smbs.biz unreachable); won about flat (won live 1,342.00, −0.04%, Naver; not a fixing) — gate-5 UNRESOLVED.
Flow (Tue 10-06, 13:39 native intraday cut; finalized KRX settlement flow is the pull): foreign ~−1.32tn + institutions ~−74bn net SOLD the KOSPI, retail ~+570bn net bought — a CLEAN foreign+institution SELL / retail bid (Fri 10-02's sign stays disputed).
**★ CALENDAR:** the Tue 10-06 reopen jong-ga (first since Fri 10-02) is now SETTLED — it priced the stacked Fri 10-02 + Mon 10-05 US sessions (both BENIGN, no de-rate) + SOFT Sept payrolls into a −0.89% KOSPI close → semi-switch **NA** (did not clear ±2%; the registration's TESTABLE / cause-not-attributable clauses never engaged — no fire). Ahead: Samsung Q3 preliminary earnings **Thu 10-08** (the next chip-demand test); FOMC Sept-meeting minutes **Wed 10-07** (belief, not a CPI/PCE print).
**US (Scout's DECLARED 10-06-00Z block, Mon 10-05 cash settle — STEPPED).** USTs (CMT Mon 10-05): 2Y **4.84** (+1bp) / 5Y **5.06** (0) / 10Y **5.31** (+3bp) / 30Y **5.66** (+3bp) — a long-end-led **BEAR-STEEPENING** (2s10s 45→47 +2bp; 2s30s 80→82 +2bp) REVERSING the Fri 10-02 front-led bear-flattening, **no cause established**; small moves at 1bp instruments, direction not regime; the won reads it only at the fixing. Equities closed UP: SP500 **7,773.95** / +0.66% · NASDAQ **27,477.31** / +1.05% (a record, per the vendors) · DOW **51,267.90** / +0.18%. **★ Falsifier: NO FIRE → LAPSE, run stays 0** — the Composite's full-session max **+1.30%** stayed inside the strict >1.50% bar (S&P +0.93%, Dow −0.61% low-side); with no fire the 2Y class does not enter the verdict (the +1bp CMT would have been INERT); the falling-tape half stays UNTESTED. **No chip-valuation de-rate imported** — an AI-led record Composite, the US did not sell the valuation. **Chip-specific REFUTED** (09-22 00Z, closed). Crude: WTI Nov (CLX26) **Fri→Mon −1.8%**, Brent Dec **−1.9%** (vendor prior-close fields, after Saudi Aramco's Nov Asia price cut); oil channel REFUTED/UNRESOLVED. DXY ~+0.2% Mon 10-05; gold ~flat. **Sept payrolls (Fri 10-02 12:30Z, BLS): NFP +29k, u-rate 4.2%, −60k revisions — SOFT/dovish, SETTLED; Korea reads Tue 10-06.** Next: FOMC Sept-meeting minutes Wed 10-07 (belief, not a CPI/PCE print).

**Co-move (not a base level):** Nikkei **+1.05%** / Taiex **+0.22%** (Tue 10-06 closes) — regional controls UP while Korea's KOSPI lagged (Korea-specific chip caution, not regional risk-off), no cause.
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
