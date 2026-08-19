# Design Core v1

Status: PROPOSED / NOT APPROVED / NOT CANONICAL

Layer 2 operating core for design work. Evidence cutoff 2026-08-19. Evidence,
counts, node ids, and paths: [research run](../../../research/design/2026-08-unified-design-discipline/README.md).
Open decisions: [DECISION_REQUESTS_v1.md](DECISION_REQUESTS_v1.md). Exact
names and values: [TOKEN_COMPONENT_CONTRACT_v1.md](TOKEN_COMPONENT_CONTRACT_v1.md).
Per-surface application and the full pattern register:
[APPLIED_DESIGN_GUIDE_v1.md](APPLIED_DESIGN_GUIDE_v1.md). Nothing here is
approved until Seven records the decision. This is judgment, not a rulebook;
where it names a value, the value is taken from a named source or marked as
waiting for a decision.

## 1. The north star

Obenan is one calm intelligence that has already noticed what changed, shows
the proof plainly, carries the routine work inside visible limits, and hands
the customer the final say. Every surface is that same intelligence entering
a different room: the room changes density and tempo, never character.

In customer words (noncanonical, from the messaging review): "AI keeps
changing how people choose where to go. You do not have to keep up with it.
Obenan does, on your behalf, and you keep the final say." The design job is to
make that sentence true on screen without printing it.

## 2. The arrival and departure test (conditional)

The surface may assume only the external condition: AI keeps changing how
people find and choose businesses. It must not diagnose the visitor as behind,
worried, unaware, or overwhelmed; people arrive uncertain, curious, confident,
skeptical, or comparing. Whatever they arrive with, they should leave able to
say that Obenan is watching what matters, will carry the ongoing work within
clear boundaries, will bring them only the decisions that need them, and that
the final say stays in their hands.

Five-second check: can a person with no design vocabulary say what Obenan
noticed, why to believe it, what Obenan will do, and what is theirs to decide?
Missing one means unfinished. Frightening, shaming, or flattering means failed
even when all four are present ([messaging rule](../../messaging/proposed/MESSAGING_CORE_v2.md)).

## 3. Seven principles

1. Material is meaning. Remove an element in your head; if nothing is lost,
   it is decoration (DESIGN_PRINCIPLES_2026 P1, P3).
2. Data carries the first read where data exists; prose explains on demand.
   Where data does not exist yet (onboarding, legal, recovery) one clear
   sentence leads (P2, P8).
3. Hue is a signal, not a mood. Greyscale carries; one hue per surface marks
   what must be seen first; status marks are small, paired with a word, and
   do not count as the surface hue; the spectrum is identity and ceremony,
   never wallpaper, chrome, or proof (P9, P10; allowance per DR-D07).
4. Seams are honest. Observed, inferred, recommended, prepared, approved,
   delivered, verified are visibly distinct states; absence, uncertainty,
   staleness, and disagreement have their own faces; citations and
   provenance are first-class (P4-P7; messaging claim ladder).
5. Custody is visible: approval, reversibility, exceptions, and the final say
   are controls you can see and receipts you can open, never policy prose.
6. Motion explains cause, state, custody, or progress; one focal moment per
   screen; server-rendered content never hidden behind scripts; reduced
   motion is a complete path (BRAND_SYSTEM; BRAND_EMOTION draft; `lib/motion.ts`).
7. One family, several rooms: type, neutrals, seams, controls, claim states,
   accessibility, locale, and motion rules are constant; density, imagery,
   tempo, and permitted ceremony change by surface family (BRAND_EMOTION
   draft, principle 5).

## 4. What stays constant on every surface

- Helvetica Neue, Light display, Regular body, tabular numerals for
  quantities; engine and product names never translated (licensing and
  fallback: DR-D04).
- White islands on a soft off-white canvas with 1 px hairline seams, not
  shadows, for hierarchy (ink and canvas values: DR-D05; observed values in
  `origin/main`: website `#F7F7F7`/`#F0F0F0` with ink `#0F0F14`, product
  `#F5F5F5` with alpha-black text; deployment not verified).
- One dominant action per view: the black pill with a calm verb; secondary
  actions quiet.
- One link blue, one error red, one success green, one warning amber, each
  with a non-color indicator (values: DR-D05).
- The same claim-state and absence-state names and marks everywhere
  (contract sections 5 and 6); the same control components, one name per
  job, in Figma and code.
- Visible keyboard focus, platform-minimum touch targets, AA contrast on every
  allowed pairing; seven website locales and the product's thirty languages
  tested with real strings.
- Identity reused from the approved asset, never drawn, typed, regenerated,
  or recolored. The 12-stop spectrum bytes are source-verified; the asset's
  current authority (DR-D01) and permitted usage (DR-D07) are unresolved.

## 5. Surface-family mood matrix

Observed rows are grounded in `origin/main` code and Figma nodes listed in the
Applied Guide; the presentation row is an under-evidenced hypothesis.

| Surface family | Emotional job | Posture and density | Spectrum (policy DR-D07) | Motion |
| --- | --- | --- | --- | --- |
| Website and campaign | Recognition and possibility | Short, visual, human, one clear action; low density | Logo; at most one approved brand moment per page | One focal moment; reveals visible without JS |
| Free experiences | Curiosity becomes evidence | Immediate signal, clear source, useful next step; the result is a ledger | Logo only | Progress that reports real events |
| Onboarding | Confidence and progress | One decision at a time, visible status, no dead ends | Logo; first-run welcome may use the spectrum once | Step progression, state confirmation |
| Daily product | Calm delegated control | Dense when needed, exceptions first, details on demand | None | State and custody changes only |
| Executive view and report | Trust and direction | Comparison, change, evidence, decisions | Logo only | Reveal of comparisons; none in exports |
| Presentation and communication | Memory and conviction | One idea per moment, proof carried forward | UNRESOLVED pending inspection of the Gleb archive and representative current sales decks | Carry an object forward, never decorate (hypothesis) |

## 6. The Obenan visual grammar

Seven moves that read as Obenan before the logo appears: the seam (1 px
hairline separating published from observed, done from waiting); the ledger
(rows of facts, states, comparisons in tabular figures); the state mark (mark
plus word per claim or outcome state); the stamp (monospace provenance tag
that travels into reports, links, messages); the pill (one black,
outcome-worded primary action); the current (one reserved hue for the single
thing to see first); the wave (identity reused unchanged, placed once, never
wallpaper, progress bar, or sparkle).

## 7. Pattern classes

Five classes; this document assigns a class, it does not approve anything.

- Inherited current constraint: restated from sources the workspace already
  treats as current (brand book; DESIGN_PRINCIPLES_2026; BRAND_SYSTEM;
  workspace [AGENTS.md](../../../AGENTS.md) identity and claim rules; the
  `LOCKED_SURFACES.md` protocol in `origin/main`). Full list: Applied Guide
  section 11.
- Source-backed proposal: traceable to a draft spec (BRAND_EMOTION, still
  `HUMAN_DESIGN_APPROVAL_REQUIRED`), to proposed messaging, or to observed
  code; binds only after approval. Full list: Applied Guide section 11.
- Conditional: needs a named decision or per-use approval (spectrum beyond
  the logo, the wave on a new surface family, the single blurred modal,
  customer brand colors through the whitelabel seam only, numbers only with
  dated provenance).
- Forbidden by current governance: glass and refractive chrome, ambient
  gradient fog, sparkle and "AI-powered" chrome, donut or gauge KPIs, logo
  walls, averaged AI summaries, redrawing the logo, fear or shame copy,
  guarantees, content hidden behind client-only gates. Authoritative lists:
  DESIGN_PRINCIPLES_2026 Part IV; [AGENTS.md](../../../AGENTS.md);
  [MESSAGING_CORE_v2.md](../../messaging/proposed/MESSAGING_CORE_v2.md).
- Unresolved: everything listed in [DECISION_REQUESTS_v1.md](DECISION_REQUESTS_v1.md),
  plus presentation discipline and the Part VI questions inherited from
  DESIGN_PRINCIPLES_2026.

## 8. Preflight, STOP, and PARTIAL

Return the ten items below before implementation, each marked PASS, PARTIAL,
or STOP, together with the authority and release items in
[AGENTS.md](../../../AGENTS.md).

STOP is reserved for genuine blockers: missing release authority; an identity
asset that is not the approved one or would be drawn, typed, or regenerated;
a customer-facing claim, number, or image without provenance; a safety,
security, privacy, or accessibility defect that would harm or exclude a user;
a change to a locked surface without its approval record; or a
misrepresentation of essential product truth (claim state, custody, what
Obenan does and does not do). Everything else that cannot be answered is
PARTIAL: proceed within the bounded scope you can prove, record the exact
limitation and the token or decision request it depends on, and mark the
output PARTIAL.

1. Surface family named and its matrix row applied.
2. Arrival and departure test passed by someone outside the team.
3. Every element survives the remove-it test.
4. Data leads where data exists; claim and absence states distinct; every
   observation has a stamp or source.
5. One dominant action; customer control visible as a control.
6. Only tokens and contract components; gaps filed as requests, not
   improvised.
7. Identity from the approved asset path; spectrum within the allowance or
   with explicit approval.
8. Motion shows state or cause; reduced-motion and no-JS paths verified.
9. Contrast AA, visible focus, touch targets, semantic headings, locale
   long-string check, performance budget.
10. Provenance of every number and image recorded.

## 9. Where things live

Read this, then the Applied Guide for the room you are entering, then the
Contract for exact names. A rule the evidence contradicts becomes a drift
item, not a silent choice. A value this document does not give is a decision
request, not an invention. Deep research is retrieved through the
[evidence index](../../../research/README.md) when a claim needs provenance,
sources disagree, a new surface or pattern appears, a decision is unresolved,
or cultural and customer-language nuance matters.
