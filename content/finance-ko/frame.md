---
domain: finance-ko
updated: 2026-09-22T00:15Z
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
> **Status: CONFIRMED / ON — ★ FIRED 09-18 06Z (UP).** Prior fires both directions: 09-14 (−3.26% DOWN), 09-07 (+4.61% UP, Astra melt-up), 09-02 (−3.99% DOWN, memory-led), 08-18 (−5.80%), 08-20 (+5.89% round-trip). Did-NOT-test (sub-±2%): 09-03, 09-09 (+1.40%), 09-11 (−1.76%, ARMED but did not clear), 09-15/09-16/09-17 (all sub-±2%). **★ 09-18 FIRED UP** — first ±2%-clearing close since 09-14 (+2.66%; chips dominant SK Square +7.04 / SK Hynix +6.42 / Samsung +3.37, all far above the index while the broad market lagged, KOSDAQ +0.60%) → semis dominant = CONFIRMED intact, direction UP (the mirror of 09-14's DOWN fire).
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
> **Status: 09-21 06Z — count STAYS ZERO. The won firmed ~5-6 won (sub-±10), so magnitude fails first; DXY ~flat (a live 100.3) is reconnaissance not a score — CNH still the open leg = PARTIAL. Prior 09-18:** magnitude did NOT fire, sequence RESETS count ZERO; ★ the same-clock DXY printed +0.109% (5m) — INSIDE the strict 0.3% bar for the FIRST time since the sequence began, but CNH still open (flat DXY = PARTIAL, not established); the next >±10 fixing has a real chance of being a clean session one. **★ INSTRUMENT PINNED:** the Yonhap 15:30 reference rate = the onshore fixing; the Naver DATED series is the evening/24h quantity (a same-day dated row is still FORMING — sample only after its own session closes). The won stays a LABELED read, NOT a declared settle (FX endpoint OPEN, yna off the settles allowlist). CNH still to source.
>
> **★ Methods that stand.** Same-clock: pair the KOSPI 15:30 close with the won's 15:30 fixing, never a 24h print. Re-establish DXY *and* CNH flat (strict |Δ|<0.3%) AT the fixing, never carried. A fired antecedent with no consecutive partner is UNTESTABLE (branch b), not a does-not-trip.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: ★ 09-21 06Z — SCORES ② REPEATS NARROW; Friday 09-18's foreign flip was ONE SESSION.** KOSPI +1.65% but ② is satisfied on THREE HARD CLOSE LEGS — chips carried (Samsung +4.98% / SK Square +4.45%), the KOSDAQ LAGGED (+1.11% vs +1.65%), foreign SOLD the KOSDAQ (−988) — a concentrated chip bid (short-covering into the US memory rip), NOT the demand RETURN ① requires (① needs foreign BUYING; foreign sold both boards, unwinding Friday 09-18's +4,245). Negative breadth (chips ripping while non-chip leaders fell −1.6 to −3.3%) CORROBORATES the cap-weighted mask, NOT load-bearing. US-class REFUTED at 09-22 00Z reading six (Scout's; CONTESTED through Monday). **Prior 09-18:** SCORED a *REVERSES* (the first since 09-07) — chips held AND foreign flipped to buy (+4,245) after 7 sells, but NARROW (KOSDAQ lagged, foreign sold the KOSDAQ −437) and one session; the re-test asked does it BROADEN — today answered NO. THE HOLE (09-15's missing chip-price leg) FILLED 09-17; the *confirms* run 09-10→09-17 preceded.

**Oil-import channel.** Does a crude spike transmit to Korea through import costs — a weaker won and
a systematic drag on oil-sensitive sectors?
> **Status: UNRESOLVED — the won is on FLOW, not oil.** REFUTED on the WON (08-21); 09-16 SUPPORTIVE then 09-17 CONTRARY (below), and the won weakened idiosyncratically on BOTH crude directions, so crude does not govern it. The channel is **visible only across the pair** — this
> edition holds the won, finance the crude — and scores at the jong-ga on a settle, controls
> checked AT it. The 08-21 basis: the won **firmed** through a ~+2–3% premium, and
> against the **median stock** — not the index — the oil-sensitive set showed no systematic fuel drag
> (Korean Air even rose). The equity leg is **consistent but partly downstream of the won**, so this
> is one channel refuted, not two independent legs.
>
> **★ Scope per market, never Asia-wide.** The same claim **operated in Japan** (08-18) while Korea refuted it — true in
> one market and false in another is **TOO COARSE**, a verdict about the claim's granularity, not the world.
>
> **★ Live-shock (archived).** 08-31 12Z under the largest crude shock (Brent ~+3.27%) the won FIRMED −0.92% with DXY flat — idiosyncratic strength AGAINST the channel; 09-02→09-03 stayed idiosyncratic-to-firming on non-settle reads — a weak input TESTS, does not resolve. **★ 09-16: the FIRST clean pairing since 08-21 came back SUPPORTIVE.** Tuesday's crude settled ~+4.4% (named supply removal); the same-clock 15:30 fixing weakened +0.65% while the dollar was ~flat (desk DX-Y AT the fixing −0.07%) = a **+0.72pp idiosyncratic residual** in the PREDICTED direction (~+0.40pp on the dated base). SIGN robust, SIZE base-dependent. **★ 09-17: the 2nd clean pairing came back CONTRARY** — crude settled DOWN (~−3.2%, extending ~−1.3% Asian) so the channel predicts a FIRMER won, but the won WEAKENED idiosyncratically (~+0.4pp vs the at-fixing dollar, precision-limited: the residual is comparable to the control it differences out). Decisive: the won weakened on a crude SPIKE (09-16) AND a crude DROP (09-17) — crude does not govern it, the driver is the FOREIGN-EQUITY OUTFLOW (the flow channel). The 09-16 "supportive" read is now suspect (a coincidence) → **channel UNRESOLVED, both legs stated.**

---

## Current state

**★ 09-21 06Z MONDAY JONG-GA — GATE 4 SCORES ② REPEATS NARROW; Friday 09-18's foreign flip was ONE SESSION. KOSPI +1.65% (7,007.72), ② satisfied on THREE HARD LEGS — chips carried (Samsung +4.98% / SK Square +4.45%), KOSDAQ LAGGED (+1.11% vs +1.65%), foreign SOLD the KOSDAQ (−988). FOREIGN FLIPPED BACK to net-SELLING BOTH boards, unwinding Friday 09-18's +4,245; institutions the marginal buyer, in chips.** A concentrated chip bid (short-covering into the US memory rip), NOT the demand RETURN ① requires (① needs foreign BUYING). Negative breadth (decliners > advancers; non-chip leaders LG Energy −3.30% / Hyundai Motor −1.64% / HD Hyundai Heavy −2.07% fell while chips ripped) CORROBORATES the cap-weighted mask, NOT load-bearing. GATE 5 count ZERO (won ~5-6 won firmer, sub-±10; DXY ~flat reconnaissance; CNH open = PARTIAL). SEMI-SWITCH UNTESTABLE (+1.65% < ±2%) → CARRIES, a stay. OIL UNRESOLVED. Highest close in 7 sessions but NOT a record (below 09-10's 7,033.92). US scored at 00Z (no 06Z settle). Base 6,894.23 → 7,007.72. Prior ↓:

**★ 09-18 06Z FRIDAY — GATE 4 *REVERSES*, the FIRST since 09-07: KOSPI +2.66% (6,894.23) chip-led AND foreign FLIPPED to net-buy (+4,245) after 7 straight sells — but NARROW (KOSDAQ +0.60% lagged, foreign SOLD the KOSDAQ −437) and one session; the won did NOT firm (sub-±10). SEMI-SWITCH FIRED UP (CONFIRMED). GATE 5 count ZERO. Base 6,715.41 → 6,894.23. Prior ↓:

**★ 09-17 06Z THURSDAY — GATE 4 *confirms* on the chip leg (Korea's first close after the +25bp hike). KOSPI FLAT (6,715.41, −0.04%), chip bounce REVERSED to red, foreign net-SOLD a 7th (−22,771), held flat only on breadth (KOSDAQ +0.76%) = rotation OUT of chips.** Chip-specific KOREAN side COHERENT (THE HOLE filled) but FOREIGN DISTRIBUTION, US-class CONTESTED. GATE 5 session-ONE fire UNTESTABLE, count ZERO. OIL CONTRARY → won on FLOW, UNRESOLVED. SEMI NA. Prior ↓:

**★ 09-16 06Z WEDNESDAY — GATE 4's *confirms* run ENDS at FOUR as a SPLIT (+1.37%).** Chip-led bounce but foreign SOLD a 6th (−16,825), institutions drove it, KOSDAQ lagged = a domestic recovery, DECOUPLED. GATE 5 sub-±10 UNTESTABLE, instrument PINNED. OIL first clean pairing SUPPORTIVE (later demoted). Prior ↓:

**★ 09-15 06Z TUESDAY — GATE 4 *confirms* a FOURTH (−0.85%), DECELERATING; THE HOLE exposed (missing chip-PRICE leg, FILLED 09-17). Won +10.90 = first >±10. Prior ↓:**

**★ 09-14 06Z MONDAY — GATE 4 *CONFIRMS* a THIRD (the sharpest, −3.26%); base 6,909.91 → 6,684.37.** Chip-led open HELD to the close, foreign net-SOLD −32,875 (4th, largest then). Chip-specific scored 09-15 00Z CONFIRMED-but-WEAK by 1.28 index points (held-not-established). Semi-switch CLEARED (>±2%, chips dominant, DOWN). Prior ↓:

**★ 09-11 SECOND *confirms* (−1.76%); foreign sold BOTH boards, Japan co-moved = REGIONAL. → 09-10 FIRST *confirms* (−0.25%, ended the *reverses* run). → 09-07 *reverses* EXTENDED (+4.61% to 6,995.39; foreign +25,533, semis LED) but breadth NARROWED (KOSDAQ +1.07%) — the Astra memory surge.** Prior ↓:

**★ 09-04 06Z — gate 4's FIRST *reverses* (a DENT):** +1.64%, KOSDAQ +2.95%, foreign +4,793 LIGHT-bought. **09-02** the −3.99% crash scored gate 4's FIRST *confirms*. (Pre-crash arc 08-24→08-27 archived in windows/; Micron late-Sept the 2nd demand read.)

**US front (Scout's).** ★ Mon 09-21 cash settle — TWO verdicts landed at reading six. **The falsifier's PATHOLOGY OCCURRED for the first time on a CLEAN session:** the index leg FIRED (Nasdaq +2.49% / S&P +1.68%, both past 1.50%) while the anchor was INERT (2Y **4.76**, 0bp) — a violent tape the front did not answer, no Fed move and no witching to explain it away → counter **0→1, leg ONE**, does NOT trip (needs two consecutive); the frame watches for a second. **Chip-specific is REFUTED** — reading six landed UNRESOLVED (memory mean +0.97% vs S&P +1.49% = −0.52pp, 1 of 3 under, neither a FOR nor a break) and with the 09-15 FOR rolled out the aggregation is 3-AGAINST / 0-FOR → REFUTED (the LOW-INFORMATION outcome the desk pre-registered). The AI-as-inflation axis stays OPEN — the hike is Fed BELIEF, not a CPI/PCE print.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Mon 09-21 jong-ga, 06:30Z / 15:30 KST; asiae/Naver CLOSE):**
KOSPI **7,007.72** / +1.65% (+113.49; base stepped from 6,894.23; gate 4 ② REPEATS NARROW — a cap-weighted chip MASK, breadth negative, foreign flipped BACK to selling both boards; highest close in 7 sessions but NOT a record, below 09-10's 7,033.92) ·
KOSDAQ **836.27** / +1.11% (lagged KOSPI, breadth worse) · Samsung **₩274,000** / +4.98% · SK Square **₩1,127,000** / +4.45% · SK Hynix **₩1,868,000** / +0.59% (the laggard); non-chip leaders FELL — LG Energy −3.30%, Hyundai Motor −1.64%, HD Hyundai Heavy −2.07%.
USD/KRW: a live onshore ~1,378, ~5-6 won firmer than Friday 09-18's 15:30 fixing — sub-±10 (labeled read, NOT certified). DXY ~flat (a live 100.3, inside the strict bar; CNH still to source).
Flow (Naver /trend, SIGN-only, magnitude UNRELIABLE): foreign net-SOLD BOTH boards (FLIPPED BACK after Friday 09-18's +4,245 buy), institutions net-bought KOSPI (concentrated in chips), retail the seller.
**Japan (Fri 08-28 close):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS/laggards NOT chips — the control that made Korea's chip de-rate look idiosyncratic; 09-11 it CO-MOVED lower ~−2% = regional that session; the KOSDAQ-flow discriminator once read chip-specific but 09-15 showed it under-identified — see the decouple-break HOLE).
**US (Scout's DECLARED 09-22-00Z block, Mon 09-21 cash settle — STEPPED).** USTs (CMT Mon): 2Y **4.76** (0bp — INERT) / 5Y **4.83** (−3) / 10Y **4.96** (−5) / 30Y **5.29** (−5) — **an inert front under a risk-on rip = a BULL-FLATTEN (2s10s −5bp)**, the front's refusal to move being the falsifier's enabling leg. Equities RIPPED: SP500 **7,764.70** / +1.49% · NASDAQ **27,122.09** / +2.26% · DOW **52,048.83** / +0.71%. **★ Falsifier PATHOLOGY OCCURRED (first clean one)** — index leg FIRED (Nasdaq max +2.49%, S&P +1.68% crossed from 18Z's 1.46%; Dow +0.86% did not) + anchor INERT (2Y 0bp) → counter **0→1, leg ONE**, does NOT trip (needs 2 consecutive); CLEAN session (no Fed move, no witching) = REAL information, the frame watches for a second. **Chip-specific REFUTED** — reading six UNRESOLVED (MU +2.77 / SNDK −1.41 / WDC +1.54, mean +0.97 vs S&P +1.49 = −0.52pp, 1 of 3 under; Nvidia +2.30 the CONTROL, not counted); aggregation 3-AGAINST / 0-FOR with the 09-15 FOR rolled out → REFUTED (low-information, via aging-out not a decisive break). Crude October (CLV26) settled ~−4.5% October→October (no roll; CLV26 expires ~09-22, Nov CLX26 ~$3 lower); oil channel UNRESOLVED (crude fell WITH the long end = no term-premium lift).

**US read (Scout's, carried):** the switch's pathology finally showed CLEANLY — a risk-on rip (S&P +1.49%, Nasdaq +2.26%) against an INERT 2Y (0bp), the front declining to move under a violent tape with no Fed/witching confound. That is the falsifier's enabling leg: counter 0→1, leg ONE — one session, not the 2-consecutive a trip needs; the frame watches the next. Chip-specific REFUTED (reading six UNRESOLVED, the low-information outcome). The AI-as-inflation axis stays OPEN: Fed BELIEF, not a CPI/PCE measurement.

---

## Next gates

1. **Does the capital-return prop hold once PRICED?** Samsung's programme disappointed and reversed;
   SK Hynix's realised buyback holds its leg — a split between the two is the cleanest evidence a rally
   is capital-return sentiment, not demand.
2. **Breadth, not the index.** Two chip names carried a +4.61% index while KOSDAQ managed +1.07% — the narrowing is now the
   LIVE concern. Watch KOSDAQ and the up/down count, not the print.
3. **Does foreign buying return and BROADEN?** It flipped to selling 08-21; broad re-entry would be
   the first non-capital-return move since the crash.
4. **The WON — INSTRUMENT NOW PINNED (09-16).** The Yonhap FX close wrap publishes an explicit onshore **15:30 reference rate**
   (the fixing the test names); 09-16 it = 1,368.6 and reconciles with my 09-15 1,359.40, confirming the Naver DATED series is the
   evening/24h quantity (a different thing). The FIXING leg is now identifiable (the won stays a LABELED read, not a declared
   settle — FX endpoint OPEN, yna off the settles-source allowlist). A fresh >±10 sequence now needs only DXY *and* CNH
   strictly flat AT the fixing — DXY now available via desk DX-Y 5-min bars (−0.07% on 09-16); CNH still to source.
5. **The DEMAND question — GATE 4 *REVERSES* TWICE (09-04 DENT, 09-07 EXTENDS +4.61%) then flipped to *CONFIRMS* twice (09-10, 09-11); it HELD but did NOT WIDEN.**
   The 09-07 melt-up was memory-concentrated on the verified Astra catalyst, KOSDAQ +1.07% LAGGED = no broadening. Live test:
   does foreign selling keep the de-rate going or does breadth catch up; Micron late-Sept = the demand read.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
