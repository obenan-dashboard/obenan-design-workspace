# Applied Design Guide v1

Status: PROPOSED / NOT APPROVED / NOT CANONICAL

Layer 3 task-specific guide. Evidence cutoff: 2026-08-19. This guide applies
[DESIGN_CORE_v1.md](DESIGN_CORE_v1.md) to each surface family. Every example
is illustrative and noncanonical. Every token name refers to
[TOKEN_COMPONENT_CONTRACT_v1.md](TOKEN_COMPONENT_CONTRACT_v1.md), whose values
are proposals until the decisions in
[DECISION_REQUESTS_v1.md](DECISION_REQUESTS_v1.md) are made. Paths and node
ids point at the evidence in the
[research run](../../../research/design/2026-08-unified-design-discipline/README.md);
deep research is retrieved through the [evidence index](../../../research/README.md).

## 1. How the emotional movement becomes layout

The messaging sequence (recognition, relief, proof, control, next step) is
defined in the proposed [Applied Messaging Guide](../../messaging/proposed/APPLIED_MESSAGING_GUIDE_v2.md)
("Copy hierarchy"); this section only translates it into visual jobs. It is an
information hierarchy, not a visual style. Translate it like this on any
surface that has room for all five moves:

| Move | Visual job | Typical element | What it must not become |
| --- | --- | --- | --- |
| Recognition | First read: what changed or what was noticed | Display line, or the first ledger row | A slogan, a fear line, a diagnosis of the customer |
| Relief | What Obenan carries | One plain sentence under the first read | A feature list, a provider name |
| Proof | Why to believe it | Ledger, comparison, stamped observation, verified customer statement | A paragraph, a percentage chip, a logo wall |
| Control | What stays with the customer | Approval control, undo, exception row, "needs your decision" state | Policy text, a tooltip, a modal nobody reads |
| Next step | One truthful action | The pill | A second pill, a generic "Start now" without a destination |

The first three moves resolve uncertainty into clarity; that is the signature
movement. Let the information resolve on screen: a question becomes a ledger,
a blank becomes a source, a disagreement between engines is shown rather than
averaged.

## 2. Website and campaign

Job: recognition and possibility. Posture: short, visual, human, one clear
action. Evidence base: `home-v4/concept/*` on `origin/main`, `BRAND_SYSTEM.md`,
`BRAND_EMOTION_WEBSITE_SPEC_2026-08-13.md`, the locked chrome protocol.

What the core looks like here:

- Canvas and seams: white islands on `#F7F7F7` / `#F0F0F0`, 1 px hairlines,
  `max-w 1380`, 24-32 px radius for content boards, the ink-tinted shadow
  ladder home-v4 already defines (rung 0 is no shadow; elevation is earned).
- Type: Light display at generous size, Regular body, tabular numerals in any
  proof object. One H1. Headings alone must tell the story.
- One proprietary object per flagship page that evolves section by section
  (BRAND_SYSTEM flagship rule). In home-v4 that is the hero journey and the
  research reveal; it is the place for the page's only focal motion.
- The homepage's emotional anchor is a real person, place, or product moment
  with adjacent proof (BRAND_EMOTION AC-DESIGN-5), not a portrait alone.
- The pill is black and says what happens next. Locked header labels (`AI
  Visibility`, `AI Presence`) and routes do not change without the
  locked-surface approval record.
- The spectrum appears as the logo and, at most, one approved brand moment.
  The four-stop "wash" on chat bubbles and the conic donut in
  `apps/omnipulse/src/app/[locale]/globals.css` are the opposite of this rule.

Noncanonical example of a proof section: a two-column board; left, a ledger
of three customer prompts with a state mark per engine (found-correct,
partial, missing) and a stamp on each row; right, one Light sentence saying
what Obenan did about the missing one and a quiet "See the full check" link.
No percentage, no gradient, no logo wall.

Failure patterns observed:

- `.chat-bubble`, `.hint-bubble` spectrum washes and `.donut` conic KPI in
  `globals.css` (spectrum as mood; gauge KPI).
- `.logo-radial-gradient` with `backdrop-filter: blur(30px)` (glass chrome).
- Route-family color dialects: `#141414`/`#6b7a8d`/`#8899aa` in
  `components/briefings`, `#0077a8` in `components/local-visibility`,
  `#242424` in `home-v2`/`home-v3` (page palettes without documentation).
- `lib/motion.ts` used by 8 files while 154 files import `framer-motion` and
  41 import `motion`: the vocabulary exists and the page families ignore it.
- The best implementation of the principles, `home-v4.css` (69 custom
  properties scoped to `.hv4`), is page-private; nothing else can reuse it.

## 3. Free experiences

Job: curiosity becomes evidence. Posture: immediate signal, clear source,
useful next step. Evidence base: `CheckupDoors.tsx` (three doors: the external
snapshot at `obigeo.obenan.com/snapshot`, `/local-visibility-check/`,
`/review-growth-calculator`), the BRAND_SYSTEM in-page analysis stage rule,
the get-started hand-off.

What the core looks like here:

- The result is a ledger, never a score theater. Show what was checked, what
  was found, where it came from, when. A single index number may appear only
  as an inferred state with its confidence and its "why this" trace.
- Progress reports real events (persisted events plus at most one active
  line); no percentages as progress, no timers as progress, no invented facts
  (BRAND_SYSTEM stage rule).
- Absence has a face: not checked, not observable, engine not supported, and
  stale each get their own mark and plain words, never a red X for all of them.
- The next step carries context forward. The hand-off in
  `get-started/page.tsx` sets `LVC_CONNECT_SOURCE` and the place id so the
  customer never re-enters what the check already knew. Design the same way:
  the result page's pill says "Connect this business" and the onboarding page
  greets it by name.
- Locale: results contain customer strings and engine names; engine names are
  never translated; long business names are clamped with a full-text reveal.

Noncanonical example: result header "We checked 12 facts about Café Noord on
three assistants" (Light), one line "Seven are correct, three are partial,
two are missing" with state marks, then the fact-by-engine grid as the
headline, then one pill "Fix the missing facts with Obenan" and a quiet
"Email me this result". No donut. No "your score is 62".

Failure patterns observed: the `.donut` conic spectrum KPI exists in the
website CSS; the `Button` `connect` variant in `obenan-ui` uses spectrum
text on the connect action; the messaging review records "Start now" CTAs
without destination wording on the routes it checked on 2026-08-19 (not
re-verified here).

## 4. Onboarding

Job: confidence and progress. Posture: one decision at a time, visible
status, no dead ends. Evidence base: Figma `OkXCFToKDIyje58fjdIoXt` frames
`13550:75446` (desktop create account), `14987:14683` (mobile create
account), `12150:41867` (first-run welcome); code `obenan-ui` `AuthLayout`,
dashboard `pages/auth/*`, `components/auth/LoginWithMagicLinkForm.tsx`.

What the core looks like here:

- A 640 px column, Light title at 40/48 on desktop and 32/40 on mobile, one
  field group, one black pill, quiet blue text links. Figma and code already
  agree on this by value.
- Status is visible: step position, what is saved, what is pending, and how
  to go back. The welcome moment (`12150:41867`) may use the spectrum once as
  the first-run ceremony; the progress bar should not.
- Fields are flat white on the canvas with a hairline or a tonal edge, not
  blurred glass. The Figma `input_field` (`backdrop-blur 30px`, layered
  shadows) contradicts P1/P3 and should become the contract `Field` once
  DR-D06 is decided.
- Errors say what happened, what is affected, what remains safe, what to do,
  and who owns the next step (messaging product-UI rule). The Figma canvas
  has dedicated error frames ("Password does not meet requirements", "Email
  already exists"); keep them as states of `Field`, not as separate screens.
- Mobile: the same column, full-width pill, 16 px minimum body, targets of 44
  px; the mobile frames in Figma already do this.

Noncanonical example of the hand-off screen after a free check: "Welcome,
Café Noord" (Light), "We kept the 12 facts we checked. Connect Google to let
Obenan keep them current." one pill "Connect Google Business Profile",
quiet "Use a different business". The provider name appears here because it
is the mechanism step, not the emotional lead (messaging de-anchoring rule).

Failure patterns observed: `tag_big` component used as the primary button
(`13550:75460`); `Shadow 1` effect (background blur 60 plus four shadows);
`Chrome Navbar - Mac/Windows` presentation chrome inside the product frame;
two checkbox components and two button components in the same canvas.

## 5. Daily product

Job: calm delegated control. Posture: dense when needed, exceptions first,
details on demand. Evidence base: dashboard pages (including `Indexability`,
`Discoverability`, `Reputation`, `Reviews`, `Tasks`, `GenerateReports`),
`Navbar.tsx`, `Menu/Menu.tsx`; Figma `15190:83824` (My Account) and the
`Toast` component.

What the core looks like here:

- The first screen is an exceptions ledger: what changed, what needs a
  decision, what Obenan already did and verified. Not a KPI grid. The
  customer should feel work leaving their desk, not a new desk.
- Ledgers and tables carry the read. Each row: a label, a state mark, a
  number or time in tabular figures, one short clause if needed, details on
  expand. Hard caps from DESIGN_PRINCIPLES P8 are a starting point, not a
  law.
- Claim states are structural: prepared items show a "waiting for you" state
  and an approve control; delivered items show a receipt; verified items show
  the read-back. Failed, partial, expired, revoked, rolled back, and unknown
  are visible, never collapsed into "needs attention".
- Greyscale carries the product; one hue per surface for the anomaly. The
  success green on the Figma My Account ledger ("Paid") is fine as a state
  mark; it must not become the only way to read it.
- Navigation is quiet: the wave once, the account once, the one action.
  Engine names are type, not logos.
- The single modal exception: one decision may pause the surface with a
  blurred backdrop (Figma `15190:83824` reset-password sheet is close to this
  pattern). Nothing else blurs.
- Accessibility is structural: visible focus on every control. The dashboard
  code in `origin/main` suppresses outlines 171 times and uses `focus-visible`
  29 times; the website code uses `focus-visible` 408 times. The product must catch up.

Noncanonical example of a row: "Opening hours · Maps" left; state mark and
word "Prepared, waiting for you" centre; "Changed 2 h ago" in tabular
figures; "Approve" as a small pill and "Why this?" as a quiet link right. Tap
the row to see the observed source, the inferred change, and the recommended
action, in that order, with stamps.

Failure patterns observed: `Menu.tsx` (2,242 lines, 32 state hooks, 78 `!`
overrides, 54 arbitrary values, 4 icon families); obenan-ui `Button` default
variant is Tailwind `blue-500`; 18 `react-icons` families in one app; `Navbar`
with `backdrop-blur`; `.download-report-button` spectrum text in
`src/index.css`.

## 6. Executive view and report

Job: trust and direction. Posture: comparison, change, evidence, decisions.
Evidence base: `components/executive-briefings` (uses `#0f0f14`), the Avolta
hero, `ai-presence/SavedReportView.tsx` (locked top chrome), the dashboard
`GenerateReports` flow whose PDF is rendered by backend services (typography
there is outside this audit), and the verification email template (locked).

What the core looks like here:

- Comparison and change lead: before and after, this period and last, this
  location and the portfolio, one engine and another. Small multiples and
  deltas over single big numbers.
- Every figure carries its provenance (date, scope, source, stamp) close to
  it, not in an appendix. Claims that are first-party statements are labeled
  as such.
- Decisions are a section, not a footnote: what needs the executive's call,
  what Obenan will do by default, what remains outside Obenan.
- Exported artifacts (PDF, email) use the same type roles and neutrals, no
  motion, no gradient except the logo. The email template's own greys
  (`#1F1F1F`, `#818181`) and 4 px CTA radius are a locked surface in `origin/main`; they
  should map to tokens (ink, muted, pill radius) when the contract lands,
  through the locked-surface approval path.
- Customer-branded briefings carry customer color through the whitelabel
  seam (`Brand.primaryColor` and the `--brand-*` variables), never through a
  page palette. The "Prospect-briefing palette" that
  `apps/omnipulse/tailwind.config.ts` documents as carried from an accepted
  customer artifact should be read as a customer artifact, not as Obenan
  canon; the separate slate dialect in `components/briefings` needs
  classification (drift D11).

Noncanonical example of a briefing page: a comparison ledger of six
airports by three lenses with state marks, a single amber mark on the one
row that changed since last month, a stamped source line under the table,
and a "Decisions for you" list of two items with a default and a
consequence each.

Failure patterns observed: route-family palettes in `briefings` and
`executive-briefings`; `#0077a8` accent in `local-visibility` reports;
backend PDF typography unknown (`UNRESOLVED`).

## 7. Presentations and decks (materially under-evidenced)

Evidence state: no Obenan deck system, no representative current sales deck,
and none of the Gleb archive's presentation or social material was audited in
this run. The Gleb asset inventory in DESIGN_PRINCIPLES Part VII was read as a
list, not inspected as files. No final company-wide presentation rule is
claimed here, and none may be claimed until the Gleb archive and
representative current sales decks are audited and the result is recorded.

What a future deck author may carry over now, as an interim floor only:

- The inherited constraints that do not depend on deck evidence: identity
  reused from the approved asset, no redrawing; the claim and
  customer-language rules. Spectrum usage on presentations and sales decks,
  including any cover moment, is UNRESOLVED pending inspection of the Gleb
  archive and representative current sales decks (DR-D07 proposes nothing for
  this family).
- The proposed evidence primitives, if the deck shows product data: the
  stamp, the state marks, and the ledger should travel into the deck rather
  than be re-drawn.
- Customer voice verbatim with the speaker's stated title (messaging review's
  Le Pain Quotidien rule, itself proposed).

Hypotheses to test against the deck audit, not rules: one idea per slide with
one proof object; headline Light with evidence as a ledger or a single
comparison; transitions that carry an object forward rather than decorate.

## 8. Communication: email, messages, updates

Job: the recipient-relevant fact first. Evidence base:
`apps/omnipulse/src/lib/email/template.ts` (locked), the messaging
communication-design rules.

- Subject and first line state the change or the fact. Then the action, the
  object, the owner, and the time. One job per message.
- Claim states appear as words in messages ("prepared, waiting for your
  approval"; "delivered to Google at 14:02, verified 14:05").
- Templates use type roles and neutrals, the logo once, the pill once, a
  plain-text fallback, and no tracking disguised as design.
- Service recovery: own, name, act, time, choice, evidence; warmth never
  replaces the remedy.

## 9. Cross-cutting contracts

Homes of these contracts: the constants in [DESIGN_CORE_v1.md](DESIGN_CORE_v1.md)
section 4 and the draft `BRAND_EMOTION_WEBSITE_SPEC_2026-08-13.md` (accessibility,
imagery, motion, locale, performance contracts; still
`HUMAN_DESIGN_APPROVAL_REQUIRED`). This section applies them; it does not
restate their authority.

Evidence hierarchy on any surface: observed first, inferred second,
recommended third; each visually distinct (plain type; numeric pill with
confidence; accent pill with "Why this?"). Absence states get their own
marks. Citations are inline and equal to the answer, never a dump at the end.

Density: a glance layer and a details layer on every evidence surface. The
glance layer holds label, state, number or time, one clause. Everything else
opens on demand. If a screen reads like an article, it failed (newspaper
test).

Responsive: mobile keeps the full story (ledgers stack, they do not
disappear); the three lenses stack vertically by default; touch targets 44 px;
no horizontal overflow at 320-375 px; sticky chrome respects safe areas.

Accessibility: AA contrast on every allowed pairing; visible focus
everywhere; semantic headings with one H1; no state carried by color or
motion alone; consistent accessible names for icon buttons; decorative assets
hidden from assistive technology; informative assets described in every
locale.

Locale: seven website locales and the product's 30 languages; test real
strings at narrow widths; PT-BR and PT-PT are separate streams; engine and
product names untranslated; no layout that depends on English word count.

Imagery: real operators, places, and product situations; one repeatable
treatment for crop, radius, caption, credit, tonal adjustment, focal point;
natural skin and food tones; product screenshots show a task or decision,
never an unreadable mosaic; Factory Girl imagery stays hospitality-specific
and gated.

Performance and server rendering on the website: LCP media static; essential
copy, links, and images in the initial document; reveals gated on a `js`
class so content is visible without scripts (home-v4 does this); reduced
motion removes transforms and filters.

## 10. Reading this guide with the evidence

If a surface you are touching appears in a failure pattern above, do not
copy it. File a drift item if it is not yet in the register, use the contract
component or token, and, where the surface is locked, follow the
locked-surface approval protocol. If the contract does not yet have the
token or component you need, that is a decision request, not permission to
improvise.

## 11. Pattern register (full lists behind DESIGN_CORE section 7)

DESIGN_CORE section 7 names five pattern classes and keeps only the headline
items. The full lists live here so the core stays short. Class membership is
a proposal; it approves nothing.

Inherited current constraint (sources the workspace hierarchy already treats
as current; restated, not approved here):

- Helvetica Neue, Light display over Regular body (brand book; web licensing
  and fallback still DR-D04).
- Neutral canvas with white islands, 1 px hairline seams, the 24-32 px board
  radius family, `max-w 1380`, and the black pill primary action with calm
  wording (BRAND_SYSTEM, the website source of truth).
- Material is meaning, data carries the first read, glance economy, honest
  seams, and the anti-mimicry list (DESIGN_PRINCIPLES_2026, living North
  Star).
- Logo reuse only, never redrawn or regenerated; legacy-identity rule
  pending DR-D01 (workspace `AGENTS.md`, BRAND_ASSET_LIBRARY).
- Locked public chrome labels and routes, verification email design, report
  top chrome (`LOCKED_SURFACES.md` protocol in `origin/main`).
- Customer-language and claim rules (workspace `AGENTS.md`; the messaging
  synthesis is itself proposed).

Source-backed proposal (traceable to a named source that is draft, proposed,
or observed code; needs approval before it binds):

- Semantic color, typography, spacing, and component-state roles
  (BRAND_EMOTION_WEBSITE_SPEC_2026-08-13, which remains
  `SPEC_DRAFT_SOURCE_BACKED / HUMAN_DESIGN_APPROVAL_REQUIRED`).
- Reduced-motion-complete reveals that never hide server-rendered content
  (BRAND_EMOTION motion contract, draft; `origin/main` home-v4 code contains
  the pattern; `lib/motion.ts` contains the vocabulary).
- Real operators, places, and product situations as imagery with source and
  alt-text gates (BRAND_EMOTION imagery contract, draft; Factory Girl register
  is read-only and publication not authorized).
- The state mark, stamp, ledger, current, and the surface-family mood matrix
  (this run, from DESIGN_PRINCIPLES P4-P7 and the proposed messaging claim
  ladder).
- One dominant action, visible custody controls, and the claim-state
  vocabulary on product surfaces (this run, from the proposed messaging core
  and DESIGN_PRINCIPLES P7).

Conditional (needs the named decision or a per-use approval):

- Any use of the spectrum beyond the logo: DR-D07 (presentation and
  sales-deck usage UNRESOLVED pending the Gleb archive and current-deck
  inspection).
- The wave on a new surface family: DR-D01.
- A single modal that pauses the surface with a blurred backdrop: allowed by
  P1 once per decision; everything else blurred awaits DR-D06.
- Customer brand colors inside a customer-facing artifact: only through the
  whitelabel seam, never through page CSS.
- Numbers, coverage, and customer results: only with dated provenance
  (messaging claim gates).

Forbidden by current governance (authoritative lists: DESIGN_PRINCIPLES_2026
Part IV, BRAND_SYSTEM, workspace `AGENTS.md`, proposed MESSAGING_CORE
language families; `origin/main` and Figma contain some of these as observed,
recorded as drift, not permission):

- Glassmorphism, refractive chrome, specular highlights, frosted navigation.
- Ambient gradient fog, particles, orbs, shimmer skeletons for cached data,
  fake streaming, sparkle icons, "AI-powered" chrome.
- Donut, pie, or gauge KPIs; hue-encoded magnitude on a glance screen; logo
  walls as engine identity; averaged "AI summary" paragraphs.
- Redrawing, retyping, stretching, recoloring, or regenerating the logo.
- Copy that says the customer is behind, overwhelmed, or failing; guaranteed
  discovery, ranking, or revenue.
- Hiding essential content behind client-only mount or scroll gates.

Unresolved (see [DECISION_REQUESTS_v1.md](DECISION_REQUESTS_v1.md)):

- Which Figma file and library is canon and what `DESIGN BETA` means
  (DR-D02); who the design owner is (Seven names one after maintainership is
  confirmed).
- The wave's current authority and permitted usage (DR-D01, DR-D07), even
  though its bytes are verified.
- Ink, canvas, link, hairline, and status values as final numbers (DR-D05);
  backdrop blur allowance (DR-D06); radius roles (DR-D08); icon source
  (DR-D09), each pending visual comparison, contrast testing where relevant,
  and design-owner validation.
- Helvetica Neue licensing and fallback stack (DR-D04).
- Presentation and deck discipline (under-evidenced until the Gleb archive
  and representative current decks are audited).
- Engine material signatures and the Reflection Sheet question inherited
  from DESIGN_PRINCIPLES Part VI.

Evidence state of the mood-matrix rows (moved from the core): website rows
observed in `origin/main` home-v4 and local-visibility code and BRAND_SYSTEM;
onboarding observed in Figma `13550:75446`, `12150:41867`, and the
get-started hand-off; daily product observed in dashboard code and the Figma
My Account frame; executive view observed in executive-briefings code and the
email template; presentation row is an under-evidenced hypothesis.
