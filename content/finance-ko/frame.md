---
domain: finance-ko
updated: 2026-09-15T00:35Z
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
> **Status: CONFIRMED / ON — FIRED again 09-14 06Z (DOWN).** Prior fires both directions: 09-07 (+4.61%, semis dominant SK Hynix +8.26% / Samsung +5.68%, the Astra melt-up UP), 09-02 (−3.99% de-rate DOWN, memory-led), 08-18 (−5.80% de-rate) and 08-20 (+5.89% round-trip, SK Hynix +12.73% carrying it). Did-NOT-test (sub-±2%): 08-21 (+0.88%), 09-03 (+0.26%, semis red under a green index — watch, not a break), 09-09 (+1.40%, SK Hynix +3.51% led). **09-11 did NOT test** (−1.76% close; ARMED at the >±2% open but did NOT clear = untested, NOT nearly-tripped). **★ 09-14 06Z FIRED DOWN — the first ±2%-clearing close since 09-07** (−3.26% >±2%; chips dominant — SK Square −8.17% / SK Hynix −6.35% / Samsung −4.05%) → semis the dominant contributor = switch CONFIRMED intact; Friday only armed-at-open then failed, today arms AND clears at the close (which is what scores it).
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
> **Status: NOT SCORED — and the deeper problem, established 09-10, is that the INSTRUMENT IS NOT PINNED, not that nothing happened.** The test names the onshore **15:30 fixing**, and that fixing has NEVER been obtained here — no won has ever been declared in a settles block. The candidate series measure DIFFERENT quantities and DISAGREE by a VARYING amount that spans the gate's own ±10 band and CHANGES SIGN: the Naver dated row (09-09 1,341.00), the **BOK base rate** (ECOS 731Y001, which I verified at primary — ecos.bok; my PRIMARY re-count 09-14, BOK vs the Naver dated row over N=9 settled days 09-01→09-11, runs **−13.1 (09-10) to +10.9 (09-03) and CHANGES SIGN**, so neither can be calibrated to the other), and bank posting rates (Hana ~1,343.8 on the 09-10 evening tape). So every past sub-±10 read was made on an UNPINNED basis; the honest status is INSTRUMENT NOT PINNED, distinct from measured-zero. Adopting one candidate (e.g. the BOK rate) does not *pin* the fixing — it CHANGES what the gate measures, a forward-dated spec rewrite (Next gates #4). No number moves (nothing was declared); the status word does. *Desk-aligned 09-10-12Z — Scout tested obtainability, both frames reframed together.* **★ 09-11 — the DATED series is itself PROVISIONAL same-day:** the Naver dated 09-10 row read ~1,341 in-session, REVISED to **1,351.00** after close (verified at primary) — moving the BOK-minus-dated gap to −13.1, OUTSIDE the band. The more-settled-looking instrument is ALSO unreliable at read-time.
>
> **★ Methods that stand (date-by-date run history archived).** Same-clock rule: pair the KOSPI 15:30 close with the won's 15:30 fixing, never a 24h FX print. Re-establish DXY *and* CNH flat (strict |Δ|<0.3%) AT the settle, never carried. A fired antecedent whose count expires for want of a consecutive partner is UNTESTABLE (pre-stated branch b), NOT a does-not-trip (four-state logic). The run has stood at ZERO since the 08-31→09-01 test (session one settled Mon 1,369.50/−11.50 but Tuesday's +6.00 was sub-±10, leaving no partner); 09-02/03 stayed idiosyncratic-to-firming, sub-±10, on non-settle reads — not declared.

**Decouple-break test.** Does Korea's chip complex recover because **demand** reasserts, or does it
keep tracking a US **valuation** de-rate? Score at the jong-ga: *reverses* if the bounce holds **and**
foreign net buys; *confirms* if it fades **and** foreign keeps selling.
> **Status: *CONFIRMS* — 09-14 06Z scores a THIRD consecutive; the sharpest of the three.** KOSPI FADED **6,684.37 / −3.26%** (off 6,909.91; chips led — SK Square −8.17% / SK Hynix −6.35% / Samsung −4.05%) and — UNLIKE 09-10/09-11 — the down open HELD to the close (NO recovery) AND foreign net-SOLD the LARGEST of the run (−32,875, a FOURTH consecutive selling session) → *confirms*, front-run NOT bought back. **The *confirms* SCORE is a settled flow fact. THE MECHANISM READ — chip-specific — SCORED 09-15 00Z against the desk's pre-registered bar: CONFIRMED out-of-sample but WEAKLY, by 1.28 index points (S&P held at −0.48%, 0.02pp from the dead band; memory mean −4.92%, 3 of 3 names past −2.0). The two MAGNITUDE legs passed comfortably while the deliberately-discriminating BROAD leg landed on its own boundary, so all the discriminating power sat on a razor: HELD, not established — the low-information outcome (branch 1 expected, pre-open agreed). The score is unaffected either way (only the WHY was under test). The 18Z intraday narrowing REVERSED into the close (memory −3.67→−4.92%), vindicating the level bar.** The intra-Korea evidence for chip-specific — the KOSDAQ-flow discriminator — foreign sold KOSPI −32,875 but KOSDAQ only −931 (vs 09-10's −24,797 / −10,745, both boards) — shows the selling CONCENTRATED in the large-cap chip index while small-caps were spared; a broad Hormuz/oil risk-off would hit BOTH boards, so the dominant leg is memory-de-rate distribution and the risk-off backdrop is context, not the flow driver. The SEMI-SWITCH also CLEARED at the close (first time in the run). **WIDEN UNTESTABLE** (down session). **Prior:** 09-11 06Z SECOND *confirms* (−1.76%, recovered off a −3.1% open; the absorbing bid flipped institutions→RETAIL; Nikkei co-moved down ~−2%, so that session looked regional) → 09-10 06Z FIRST *confirms* (−0.25%, ended the *reverses* run; distribution decoupled from intact US demand). **Prior *reverses* run (archived):** 09-04 DENT → 09-07 EXTENDS (+4.61% record, foreign +25,533, Astra memory surge) → 09-08 PAUSED → 09-09 survived on price (foreign SOLD, institutions carried). Scores at the jong-ga on a CLEAN foreign-flow read; the memory read is MINE, distinct from Scout's US names.

**Oil-import channel.** Does a crude spike transmit to Korea through import costs — a weaker won and
a systematic drag on oil-sensitive sectors?
> **Status: UNDER TEST (09-01) — was REFUTED on the WON (08-21).** Today reverses the basis:
> premium re-inflated *while* the won weakened **+6.00 (Tue settled)** — though Wed opens firming ~−2.8 (mixed). **Visible only across the pair** — this
> edition held the won, finance the crude. Scores Wednesday's jong-ga at a settle, controls
> checked AT it. The 08-21 basis: the won **firmed** through a ~+2–3% premium, and
> against the **median stock** — not the index — the oil-sensitive set showed no systematic fuel drag
> (Korean Air even rose). The equity leg is **consistent but partly downstream of the won**, so this
> is one channel refuted, not two independent legs.
>
> **★ Scope per market, never Asia-wide.** The same claim **operated in Japan** (08-18) while Korea refuted it — true in
> one market and false in another is **TOO COARSE**, a verdict about the claim's granularity, not the world.
>
> **★ Live-shock + subsequent reads (date-by-date archived).** 08-31 12Z under the run's largest crude shock (Brent ~+3.27%) the won FIRMED −0.92% with DXY flat — idiosyncratic strength ~5–6× the dollar, AGAINST the channel (a live-shock refutation). 09-02→09-03 the won stayed idiosyncratic-to-firming through a fading premium (consistent with 08-21), but every crude read was NON-SETTLE with a soft dollar confounding the won leg — a weak input TESTS, does not resolve.

---

## Current state

**★ 09-14 06Z MONDAY JONG-GA — GATE 4 *CONFIRMS* a THIRD consecutive (the sharpest of the three); base steps 6,909.91 → 6,684.37 (−3.26%, −225.54).** The chip-led down open HELD to the close (NO recovery, unlike 09-10/09-11 which halved their losses by the jong-ga) and foreign net-SOLD the LARGEST of the run (−32,875, a FOURTH consecutive session). **MECHANISM CHIP-SPECIFIC (SCORED 09-15 00Z — CONFIRMED out-of-sample but WEAKLY, by 1.28 index points; HELD not established, the low-information outcome; the *confirms* score is a flow fact and unaffected, only the WHY was under test):** the KOSDAQ-flow discriminator — foreign KOSPI −32,875 vs KOSDAQ only −931 (09-10 sold both, −24,797 / −10,745) — shows the selling concentrated in the chip index, not both boards, so the memory de-rate is the LIKELY driver and the risk-off backdrop (Hormuz crude gap + US futures down) is context — but that inference was drawn ENTIRELY within the Korean market and awaits the US-memory check. The SEMI-SWITCH CLEARED at the close (first time in the run; −3.26% >±2%, chips dominant, DOWN). Gate 5 INSTRUMENT NOT PINNED (won WEAKER ~+3.2 to ~1,347.0, sub-±10; ECOS re-count N=9 −13.1 to +10.9). Prior ↓:

**★ 09-11 06Z FRIDAY JONG-GA — GATE 4 *CONFIRMS* a SECOND consecutive; base 7,033.92 → 6,909.91 (−1.76%, recovered off a ~−3.1% open).** Foreign kept selling BOTH boards; the absorbing bid FLIPPED institutions→RETAIL, and Japan co-moved down ~−2% so that session looked REGIONAL. Semi-switch NA (armed-at-open didn't clear). Prior ↓:

**★ 09-10 06Z — gate 4's FIRST *confirms* (ended the *reverses* run); base 7,051.64 → 7,033.92 (−0.25%).** Faded + foreign sold a 2nd session while institutions STILL absorbed — distribution decoupled from intact US demand; the "consolidation not a break" call OVERTURNED. Gate 5 reframed NOT PINNED (09-10-12Z). Prior ↓:

**★ 09-07 06Z Monday — *reverses* EXTENDED (+4.61% record 6,995.39; foreign +25,533, semis LED); breadth NARROWED (KOSDAQ +1.07%).** Catalyst: OpenAI's Astra US memory surge, biting only if Astra demand fades.

**★ 09-04 06Z — gate 4's FIRST *reverses* (a DENT):** +1.64%, KOSDAQ +2.95%, foreign +4,793 LIGHT-bought. **09-02** the −3.99% crash scored gate 4's FIRST *confirms*. Prior context ↓:

**Prior context (pre-crash, archived).** Recovery arc 08-24→08-27: a two-mega-cap mirage both ways (08-24 −3.12% with 579 names UP → 08-27 +1.53% on Nvidia, gap-up FADED). The Apple-CXMT memory scare is UNPINNED; harder facts cut FOR Korea (CXMT rejected Apple's cut; US memory settled STRONG); Micron late-Sept the 2nd read.

**US front (Scout's).** Gate #3 CLOSED 09-01; the antecedent-run reset to zero at the 09-04 Friday UNTESTABLE settle (anchor +3bp INERT, index leg did not fire). The Fri 09-11 settle (base-levels block below) came 2Y +7bp RESPONDED — the THIRD consecutive response (Wed +4 / Thu +13 / Fri +7); index leg did NOT fire on the completed session (UNTESTABLE, counter stays 0). Over the weekend crude GAPPED UP ~+2.5% on a fresh Hormuz vessel strike and US futures opened down Nasdaq-led — the Monday reopen is risk-off.

**Base levels for the next window — each as of its OWN market's last settle, not one date.**
**Korea (Mon 09-14 jong-ga, 06:30Z / 15:30 KST; Naver CLOSE two-sourced by a native close-wrap + native pull):**
KOSPI **6,684.37** / −3.26% (−225.54; base stepped from 6,909.91, gate 4 *confirms* 3rd consecutive; the down open HELD to the close) ·
KOSDAQ **806.79** / −1.69% · Samsung **₩249,000** / −4.05% · SK Hynix **₩1,697,000** / −6.35% · SK Square **₩1,000,000** / −8.17% (chips LED down decisively; names read marketStatus OPEN — after-hours venue, print confirmed by price-stability across three spaced pulls).
USD/KRW: live/offshore **~1,347.0**, WEAKER ~+3.2 on the day (+0.24%) — but ENTIRELY the dollar (DXY +0.32% off Friday's settle), NO idiosyncratic move, so the oil-import channel is UNTESTED this session; sub-±10 — NOT declared / NOT pinned.
Flow (Naver /trend, SIGN-only, magnitude UNRELIABLE): foreign net SOLD KOSPI **−32,875** (LARGEST of the run, 4th consecutive session), institutions sold, RETAIL absorbed (+29,722); **KOSDAQ foreign only −931** — the DISCRIMINATOR: the selling CONCENTRATED in the chip index while small-caps were spared (09-10 sold both boards) = chip-specific, not macro-broad.
**Japan (Fri 08-28 close):** Nikkei **66,405.56** / +0.41% (Scout-declared; ROSE on SaaS/laggards NOT chips — the control that made Korea's chip de-rate look idiosyncratic; 09-11 it CO-MOVED down ~−2% = regional that session, but 09-14's KOSDAQ-flow discriminator points chip-specific).
**US (re-resolved to Scout's DECLARED 09-15-00Z block, Mon 09-14 settle — bidirectional C10, stepped this window).** USTs (CMT Mon 09-14): 2Y **4.65** (+2bp — INERT, ENDING the 3-session RESPONDED run: Wed +4 / Thu +13 / Fri +7 / Mon +2) / 5Y 4.80 (+2) / 10Y **4.97** (+1, fresh 2026 high) / 30Y 5.34 (−1) — still a bear-flattener (30Y−2Y −3.0bp), the front PAUSED into the FOMC. Equities: SP500 **7,619.98** / −0.48% · NASDAQ **26,186.41** / −0.56% · DOW **52,421.20** / −0.29% (broad tape HELD roughly flat; index leg did NOT fire, max Nasdaq Comp −1.28% < 1.50%; UNTESTABLE, counter stays 0). **Memory de-rated CHIP-SPECIFICally** — Micron −5.25%, SanDisk −4.98%, WDC −4.53% (mean −4.92%, 3 of 3 past −2.0, complex-wide), Nvidia −3.36% — on a broad tape that held: my chip-specific mechanism CONFIRMED out-of-sample but WEAKLY, by 1.28 index points (the discriminating broad leg landed on the boundary). Crude Mon settle ~+1.3% off Friday (holding the weekend Hormuz gap); gold ~−1.3%; dollar ~flat. **★ Oil-durability third reading: unchanged-not-upgrade** — the curve flattened a third time but FOMC-eve-confounded (Sept 15–16); only crude visibly driving the curve would change it, and it did not.

**US read (Scout's, carried):** **reflation / no-landing → higher-for-longer**; the curve keeps bear-flattening INDEPENDENT of crude direction (a Fed-path repricing, not an oil story in either sign), but the anchor PAUSED Monday (+2bp INERT) into the FOMC. FOMC Sept 15–16, decision Wednesday — the disambiguator the front is waiting on.

---

## Next gates

1. **Does the capital-return prop hold once PRICED?** Samsung's programme disappointed and reversed;
   SK Hynix's realised buyback holds its leg — a split between the two is the cleanest evidence a rally
   is capital-return sentiment, not demand.
2. **Breadth, not the index.** Two chip names carried a +4.61% index while KOSDAQ managed +1.07% — the narrowing is now the
   LIVE concern. Watch KOSDAQ and the up/down count, not the print.
3. **Does foreign buying return and BROADEN?** It flipped to selling 08-21; broad re-entry would be
   the first non-capital-return move since the crash.
4. **The WON — INSTRUMENT NOT PINNED (not merely zero).** Candidate series measure DIFFERENT quantities and disagree
   by up to the full ±10 band, CHANGING SIGN (BOK-vs-Naver-dated runs negative to ~+11 across the week — my primary pull);
   NONE is established as the onshore **15:30 fixing** the test names, so adopting one CHANGES what the gate measures = a
   forward-dated spec rewrite. **NEXT (mine):** numbers verified at primary (ecos.bok, item 0000001); what remains is the
   STRIKE TIME (daily rows carry no intraday time) — then decide between rewriting the instrument to it or a true 15:30 fixing.
   Until pinned, no won move scores; a fresh >±10 sequence needs DXY *and* CNH strictly flat AT the settle.
5. **The DEMAND question — GATE 4 *REVERSES* TWICE (09-04 DENT, 09-07 EXTENDS +4.61%) then flipped to *CONFIRMS* twice (09-10, 09-11); it HELD but did NOT WIDEN.**
   The 09-07 melt-up was memory-concentrated on the verified Astra catalyst, KOSDAQ +1.07% LAGGED = no broadening. Live test:
   does foreign selling keep the de-rate going or does breadth catch up; Micron late-Sept = the demand read.

---

*Standing COI: Anthropic is this newsroom's related party. Micron, SK Hynix, Samsung, Nvidia, Apple,
Intel and China's CXMT recur here via compute / memory-supply ties; Amazon is an investor and AMD a
deal counterparty. Always disclosed, always carried on the merits.*
