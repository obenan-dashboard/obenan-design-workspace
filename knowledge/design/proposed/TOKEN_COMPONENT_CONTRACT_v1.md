# Token and Component Contract v1

Status: PROPOSED / NOT APPROVED / NOT CANONICAL

Layer 3 task-specific contract. Evidence cutoff: 2026-08-19. This document
defines the semantic architecture, not final values. Where a value appears it
is a candidate with its source in brackets, or it is marked `DECISION` with
the request id. Nothing here overrides the locked-surface protocol in
`services/obenan-frontend/LOCKED_SURFACES.md` (whole-brain, read-only).
Principles: [DESIGN_CORE_v1.md](DESIGN_CORE_v1.md); application:
[APPLIED_DESIGN_GUIDE_v1.md](APPLIED_DESIGN_GUIDE_v1.md); decisions:
[DECISION_REQUESTS_v1.md](DECISION_REQUESTS_v1.md); evidence: the
[parity audit](../../../research/design/2026-08-unified-design-discipline/FIGMA_CODE_PARITY_AUDIT.md),
[drift register](../../../research/design/2026-08-unified-design-discipline/DRIFT_REGISTER.md),
and [evidence ledger](../../../research/design/2026-08-unified-design-discipline/EVIDENCE_LEDGER.md),
retrieved through the [evidence index](../../../research/README.md).

## 1. Source precedence and ownership (proposed)

When two sources disagree, the higher row wins for its column. Each row has a
named owner who can approve a change to it.

| Rank | Source | Governs | Owner (proposed) | Observed state (HEAD `4c895a0ff`, `origin/main`) |
| --- | --- | --- | --- | --- |
| 1 | Founder decisions recorded in `DECISIONS_LOG.md` and `DECISION_REQUESTS_v1.md` resolutions | Identity, typeface, ink, spectrum allowance, canon files | Seven | Open items listed in the decision requests |
| 2 | Brand book (`Obenan-Branding-Guidelines.pdf`) and the logo SVG reused from the approved source path | Logo form, palette families, typeface family | Seven with the original brand stakeholders | Brand book: current identity reference. Logo SVG: exact asset bytes source-verified (workspace `legacy-logo-{dark,light}.svg` = `origin/main` `obenan-logo-{dark,light}.svg`, 12-stop gradient); current identity authority unresolved under DR-D01; permitted spectrum usage unresolved under DR-D07; logo reuse and no-redrawing rule is an inherited constraint (workspace `AGENTS.md`, BRAND_ASSET_LIBRARY) |
| 3 | `DESIGN_CORE_v1.md` (once approved) | Principles, grammar, allowances, preflight | Seven, curated by a design owner whom Seven names once maintainership is confirmed | Proposed |
| 4 | Token source of truth: one semantic token file (proposed location `packages/obenan-theme/tokens/*.json`) published to Figma variables and to CSS | Every color, type, space, radius, elevation, motion, focus value | Design owner plus frontend lead, jointly | Does not exist; values are scattered (`EVIDENCE_LEDGER.md` section 5) |
| 5 | Component contract (this document section 5) implemented in `obenan-ui` and in the canonical Figma library | Component names, variants, states, token dependencies | Frontend lead (code), design owner (Figma) | Partially: 4 Storybook stories; Figma library with duplicates |
| 6 | `BRAND_SYSTEM.md`, `BRAND_EMOTION_WEBSITE_SPEC` | Website composition, page families, admission rules | Website lead | Current and draft respectively |
| 7 | Figma V1 dashboard file and other flow files | Flows, layouts, copy placement | Product design | Implementation intent; not token authority |
| 8 | Verified code at the inspected Git reference (`origin/main`, local HEAD) | Authoritative for current implementation behavior, compatibility, routes, and dependencies at that reference; not, by itself, approval of design intent, brand direction, deployment, or live state | Engineering | Drift recorded; deployment not verified |

Rule: a value that exists only in rank 7 or 8 is a candidate, never a token.
A token exists when it is in rank 4 with a name, a value, a role, and an
owner. Approved governance (ranks 1 to 6) defines intended direction.
Verified code (rank 8) defines the compatibility reality from which a
migration must begin: it is authoritative for current implementation
behavior, compatibility, routes, and dependencies at the inspected Git
reference, and it is not, by itself, approval of design intent, brand
direction, deployment, or live state. Neither proves deployment or live
state.

## 2. Semantic token families (proposed)

Naming: `family.role[.state]`, lower-case, dot-separated in JSON, hyphenated
in CSS (`--color-surface-canvas`), slash-separated in Figma
(`color/surface/canvas`). Primitives (raw values) sit under `primitive.*` and
are never used directly by components.

### 2.1 Color

| Token | Role | Candidate value [source] | State |
| --- | --- | --- | --- |
| `color.surface.canvas` | Page ground | `#F7F7F7` [brand B-3, BRAND_SYSTEM, home-v4 `--canvas`] | `DECISION` DR-D05 (product uses `#F5F5F5`) |
| `color.surface.canvas-2` | Alternate section ground | `#F0F0F0` [brand B-6, BRAND_SYSTEM] | DR-D05 |
| `color.surface.island` | Cards, boards, fields | `#FFFFFF` [all sources] | stable |
| `color.surface.inverse` | Dark boards, footer, covers | `#0F0F14` [DESIGN_PRINCIPLES `--Black`, home-v4 `--ink`] vs `#121215` [Figma covers] vs `#141414` [briefings] | DR-D05 |
| `color.surface.scrim` | Modal backdrop | Figma `Surface/Surface-Scrim` value unknown | DR-D06 |
| `color.text.primary` | Body and display ink | `#0F0F14` [DESIGN_PRINCIPLES] vs `#242424` [Figma `text/text-emphasis`, theme `gray.blackish`] vs `#000000` | DR-D05 |
| `color.text.secondary` | Support text | `#666666` [brand B-60] vs `#757575` [Figma `text/text-default`, theme `description`] vs `#55555C` [home-v4 `--body`] | DR-D05 |
| `color.text.muted` | Labels, placeholders | `#999999` [brand B-40, home-v4 `--faint`] vs `rgba(0,0,0,.4)` [Figma labels] | DR-D05 |
| `color.text.inverse` | Text on inverse | `#F7F7F8` [Figma `Color/Content/Emphasis`] or `#FFFFFF` | DR-D05 |
| `color.text.link` | Links | `#4470DC` [Figma `text/text-link`, theme `blue.buttonBg`] vs `#598AFF` [brand Blue Dark, Figma "Ocean blue", theme `indigo`] | DR-D05 |
| `color.border.hairline` | 1 px seams | `#E6E6E6` [brand B-10, home-v4] vs `#D6D6D6` [Figma `stroke/stroke-default`, theme `borderColor`] | DR-D05 |
| `color.border.strong` | Emphasised edges, focus companions | `#C2C2C2` [brand B-24] | candidate |
| `color.action.primary` / `.primary-hover` | The pill | `#0F0F14` / hover per DR | DR-D05 |
| `color.action.secondary` | Quiet actions | text link color or outlined ink | DR-D05 |
| `color.focus.ring` | Visible focus | candidate: link blue at 2 px outside offset | DR-D05 |
| `color.status.success` | Delivered, verified, correct | `#1BC47D` [brand Green Dark, theme, Figma My Account] | candidate |
| `color.status.warning` | Partial, stale, waiting | `#FFAD4A` [brand Yellow Dark, theme `orange`] or home-v4 `--amber #B96E00` for text contrast | candidate |
| `color.status.error` | Wrong, failed, revoked | `#FF4A4A` [brand Red Dark] vs `#DE3136` [theme `error`] vs `#E03A3A` [home-v4 `--drift`] | DR-D05 |
| `color.status.info` | Observed, neutral note | slate tonal [DESIGN_PRINCIPLES Reputation lens] | candidate |
| `color.signal.accent` | The one reserved hue per surface | Surface family sets it; website amber `#FFAD4A` family [home-v4]; ObiGEO lens values per DESIGN_PRINCIPLES | per surface, DR-D07 |
| `color.identity.spectrum` | The 12-stop gradient, reference only | exact stops verified byte-for-byte across the workspace SVG, the `origin/main` SVGs, and the DESIGN_PRINCIPLES table | bytes verified; the asset's current authority and permitted usage remain unresolved under DR-D01 and DR-D07 |

Status colors must always carry a mark and a word; color is never the
only carrier.

### 2.2 Typography

Family `typography.*`, each role carries family, weight, size, line height,
letter spacing, and numeric variant.

| Role | Candidate (desktop / mobile) [source] |
| --- | --- |
| `display` | Light 56/66 → 40/48 [Figma H1, "56 light"] |
| `h1` | Light 40/48 → 32/40 [Figma H3, dashboard AuthLayout] |
| `h2` | Light 32/38 → 26/32 [Figma "32 light", H5] |
| `h3` | Regular 20/24 [Figma H6] |
| `lead` | Light 20/30 or Regular 18/28 [email body 20/300; candidate] |
| `body` | Regular 16/24 [Figma "16 regular" uses 16/20; web body needs 24] |
| `body-small` | Regular 14/20 [Figma 14 regular 14/18; candidate 20] |
| `label` | Regular 12/16, optional tracking [Figma 12 regular, Caption] |
| `mono` | ui-monospace stack for stamps and numbers [home-v4 `--mono`] |
| `numeric` | any role with `font-variant-numeric: tabular-nums` [DESIGN_PRINCIPLES] |

Family: Helvetica Neue, Light (300) and Regular (400), optional Medium (500)
for controls; fallback `Helvetica, Arial, sans-serif`. `DECISION` DR-D04 on
licensing, hosting, weights bundled, and whether a metric-compatible fallback
is required for emails and PDFs.

### 2.3 Space, grid, width

`space.1…space.10` on a 4 px base (4, 8, 12, 16, 20, 24, 32, 40, 56, 80)
[Figma `Spacing/XS…3XL` names, `spacing/xl 24`, `gap/standard 12/16`,
home-v4 `--s-1..8`; exact ladder `DECISION` via the design owner]. `frame.max`
1380 px [BRAND_SYSTEM, home-v4]. `reading.max` 68ch candidate. Gutters by
breakpoint: 20 / 32 / 56 px candidate [home-v4 `clamp(20px, 4vw, 56px)`].
Breakpoints: use the existing Tailwind set plus `3xl 1700` [theme].

### 2.4 Radius

Roles instead of sizes: `radius.pill` (full, controls) [BRAND_SYSTEM pill,
Figma 40, dashboard login], `radius.field` (inputs; Figma 20, candidate 12-20
`DECISION`), `radius.tile` (small cards, toasts; Figma 20, theme 12-14),
`radius.board` (content boards; BRAND_SYSTEM 24-32), `radius.none` (ledgers,
tables, seams). Surface families choose which roles they use; values are one
decision (DR-D08).

### 2.5 Elevation

`elevation.0` none (default); `elevation.seam` 1 px hairline;
`elevation.lift-1/2/3` ink-tinted shadow ladder [home-v4 `--lift-*`];
`elevation.sheet` for the single modal exception. No backdrop blur token is
proposed until DR-D06; if approved, `elevation.scrim-blur` exists only for
`Sheet`/`Dialog`.

### 2.6 Motion

See section 7.

### 2.7 Focus, target, and accessibility tokens

`focus.ring.width` 2 px, `focus.ring.offset` 2 px, `focus.ring.color` =
`color.focus.ring`; `target.min` 44 px; `contrast.min` 4.5 text, 3 UI. These
are tokens so that lint and tests can reference them.

## 3. Mapping table: Figma tokens, code as observed, and the contract

| Figma (observed) | Value (observed) | obenan-theme (observed) | obenan-ui / dashboard (observed) | Website (observed, `origin/main`) | Contract token |
| --- | --- | --- | --- | --- | --- |
| `Text/text-default` | `#757575` | `description` | header utility `#757575`, `text-[#00000066]` | `#757575` header links | `color.text.secondary` (value DR-D05) |
| `Text/text-emphasis` | `#242424` | `gray.blackish` | `text-[#242424]` | home-v2/v3 `#242424` | `color.text.primary` (DR-D05) |
| `Text/text-link` | `#4470DC` | `blue.buttonBg` | dashboard `text-indigo` (`#598AFF`) | `#4470dc` 155 uses | `color.text.link` (DR-D05) |
| `Text/text-muted` | unknown | `black.40` `#00000066` | `rgba(0,0,0,.4)` labels | `--faint #999999` | `color.text.muted` |
| `Text/text-alert`, `Button/system-alert` | unknown | `red #FF4A4A`, `error #DE3136` | `bg-[#DE3136]` | `--drift #E03A3A` | `color.status.error` (DR-D05) |
| `Button/system-success` | likely `#1BC47D` | `green #1BC47D` | `#1bc47d` | `--confirm` | `color.status.success` |
| `Button/system-warning` | unknown | `orange #FFAD4A` | none | `--amber*` | `color.status.warning` |
| `Button/btn-emphasis` | unknown | none (Button default `blue-500`) | `!bg-black` Secondary variant, `rounded-[40px]` | `.btn-primary` ink | `color.action.primary` + `radius.pill` |
| `Button/btn-subemphasis`, `btn-default`, `btn-optimal`, `btn-disabled` | unknown | none | 13 ad-hoc variants | `.btn-*` | `Button` variants section 5 |
| `Surface/surface-0` | white (light) | none | `bg-white` | `--paper` | `color.surface.island` |
| `Surface/surface-50…500` | unknown | `gray.*`, `neutral.*` | `bg-[#F5F5F5]` | `--canvas`, `--canvas-2` | `color.surface.canvas/-2/inverse` (DR-D05) |
| `Color/Surface/Surface_0` (covers) | `#121215` | none | none | `--ink #0F0F14` | `color.surface.inverse` (DR-D05) |
| `Color/System/Emphasis` (covers) | `#335FFF` | none | none | - | none; retire or map to link |
| `stroke/stroke-default`, `stroke/standard` | `#D6D6D6`, 1 px | `borderColor #D6D6D6` | `inputBorder #EDEDED` | `--hairline #E6E6E6` | `color.border.hairline` (DR-D05), `elevation.seam` |
| `gap/standard/medium`, `large`, `spacing/xl` | 12, 16, 24 | none | Tailwind scale | `--s-*` | `space.3`, `space.4`, `space.6` |
| `grey/150` | `#F5F5F5` | `gray.lighter` | AuthLayout `bg-[#F5F5F5]` | none | `color.surface.canvas` (DR-D05) |
| `radius/radius-full` | 16 | NextUI `large` 14 | `rounded-[20px]` | `--r-tile` | `radius.tile` (DR-D08) |
| Figma `Shadow 1` | blur 60 + 4 shadows | NextUI `shadow-small/medium/large` | `shadow-md` | `--lift-1/2/3` | `elevation.lift-*`; blur part → DR-D06 |
| Figma text styles H1/H3/H5/H6/16/14/12 | see 2.2 | none | `font-light text-[40px]` | home-v4 scale | `typography.*` roles |
| Figma `logo`, `logo_small` | wave / wave+wordmark | `IMAGE_PATHS.obenenLogo` | 14 SVG files | `/new-logo.png` | `identity.logo.{mark,lockup}.{light,dark}` one path each (DR-D01) |

## 4. Two UI kits, two React majors, three consumers

The contract is framework-agnostic on purpose: the token file exports CSS
custom properties (consumed by any app), a Tailwind preset (consumed by
`obenan-theme` for dashboard, website, and `obenan-ui`), and a JSON for Figma
import. Components are specified as behavior and states; `obenan-ui`
implements them on React 18 with NextUI as observed in `origin/main`; the website may implement the
same contract locally on React 19 until `obenan-ui` supports both. Parity is
measured at the contract level (names, states, tokens), not at the library
level.

## 5. Component taxonomy (proposed)

One name per job. Figma component name, `obenan-ui` export, and Storybook
title are identical. Deprecated names keep working as aliases until the
migration step that removes them.

| Component | Replaces (Figma / code) | Variants | Required states |
| --- | --- | --- | --- |
| `Button` | `btn`, `button`, `buttons/text-56`, `tag_big`-as-button, obenan-ui `Button` (13 variants), `CustomButton`, `.btn-*` | `primary` (pill, ink), `secondary` (quiet), `danger`, `link` | default, hover, focus-visible, active, disabled, loading, with-icon, full-width (mobile) |
| `IconButton` | `buttons/icon-36`, obenan-ui `IconButton` | `plain`, `raised` | same as Button plus accessible-name required |
| `Field` | `Input`, `input_field`, `field_description`, obenan-ui `TextInput`, website `CustomTextInput` | `text`, `password`, `email`, `search`, `textarea`, `select` | empty, placeholder, filled, focus, error (message), disabled, read-only, loading, with-leading/trailing affordance; label always visible |
| `Checkbox`, `Radio`, `Toggle` | `controls/checkbox`, `checkbox`, `radio_btn`, `Toggle`, `CustomCheckbox`, `ToggleButton` | none | unchecked, checked, indeterminate (checkbox), focus, disabled, error |
| `Pill` (tag) | `tag_big`, `tags/*`, `tag_grey_small*`, obenan-ui `tag`, `chip` | `neutral`, `state` (takes a claim or outcome state), `removable` | default, selected, disabled |
| `StateMark` | none | claim states: observed, inferred, recommended, prepared, approved, delivered, verified; outcome states: correct, partial, wrong, missing, stale, unavailable, not-observable; absence: not-supported, timed-out, refused, frozen, cancelled | mark + word; color optional; tooltip with definition |
| `Stamp` | none (ObiGEO citation stamp is the model) | `inline`, `margin` | default, copied, link |
| `Ledger` | `CustomTable`, `HeadlessTable`, `AsyncPaginationTable`, billing rows | `fact-grid` (facts x engines), `rows` (prompt rows), `compare` (period or location deltas), `billing` | loading (no shimmer for cached), empty (with cause), error, partial coverage, row expanded, sorted, paginated |
| `EvidenceCard` (glance layer) | `MetricCard`, `InfoCardComponent`, KPI tiles | `observed`, `inferred`, `recommended` | label + state + number/time + clause; expandable; never gauge or donut |
| `ActionGrip` | none | none | observed, inferred (with confidence), recommended (accent, "Why this?"), approve/undo controls, receipt |
| `Toast` | `Toast` (Figma, well tokenized), `toastify`, `CustomAlert`, `SnackProvider`, `PopupMessage` | `info`, `success`, `warning`, `error` | default, with action, dismissible, stacked, reduced-motion entry |
| `Sheet` / `Dialog` | My Account side sheet, `CustomModal`, `ConfirmationModalContent` | `sheet` (side), `dialog` (centre) | open, closing, with scrim (the single blur exception if DR-D06 allows), focus trapped, escape, mobile full-screen |
| `Nav` | `ws_nav`, `op_header`, `MainHeader` (locked IA), `Navbar`, two `Header.tsx`, obenan-ui `header`/`Navbar`/`LandingMenuBar` | `public` (locked labels), `product`, `minimal` (auth) | default, scrolled, mobile open, active item, account menu |
| `EmptyState` | `EmptyData`, `EmptyUiState`, `NoDataFound`, `NoDataFoundTwo` | `no-data`, `no-signal` (absence with cause), `first-run` | with action, without action |
| `Progress` | `LinearProgressBar`, `CircularProgress`, Figma progress bar, analysis stage | `steps` (onboarding), `events` (real-event narration) | determinate, event-driven, delayed (states the visitor can leave), failed; no spectrum fill, no fake percent |
| `Identity` | 14 logo files | `mark`, `lockup`; `light`, `dark` | static; animated only from approved Lottie |
| `Figure` (imagery) | `OmniImage`, `CustomImage`, `LandingImage` | `photo`, `product-proof`, `decorative` | responsive sizes, focal point, caption, credit, alt policy (decorative hidden) |

Owner for every row until DR-D11 names individuals: the frontend lead for the
code implementation in `obenan-ui` (React 18) and any website-local twin
(React 19), the design owner for the Figma component, both jointly for the
token dependencies. Compatibility path for every row: the "Replaces" column
keeps working as a deprecated alias until the migration step that removes it
(section 10), and no caller is changed by hand when a codemod can do it.

Each component comes with: owner, token dependencies listed, a Storybook
state matrix, a keyboard map, a reduced-motion note, a locale long-string
story, and a Figma component with identical variant names.

## 6. Evidence primitives (the ones that make it Obenan)

`StateMark`, `Stamp`, `Ledger.fact-grid`, `ActionGrip`, and `EvidenceCard`
are the product signal. They should be ported from ObiGEO where they already
exist (DESIGN_PRINCIPLES Part III: Mirror Line, Citation Stamp, lens
reflectance, absence vocabulary) rather than re-invented in `obenan-ui`.
`UNRESOLVED`: the ObiGEO repository was not inspected in this run; the first
implementation step is an inventory of what exists there.

## 7. Motion tokens and purposes

Tokens (candidates from `lib/motion.ts` and home-v4; one set to be chosen):

| Token | Candidate | Purpose |
| --- | --- | --- |
| `motion.ease.resolve` | `cubic-bezier(0.16, 1, 0.3, 1)` [motion.ts] or `(0.16, 0.84, 0.28, 1)` [home-v4 `--ease-rise`] | things that arrive |
| `motion.ease.settle` | `(0.33, 1, 0.68, 1)` [motion.ts drift] or `(0.34, 1.3, 0.52, 1)` [home-v4] | things that land |
| `motion.ease.interact` | `(0.25, 0.1, 0.25, 1)` [motion.ts] | hover, focus, press |
| `motion.ease.carry` | `(0.4, 0, 0.2, 1)` [home-v4] | things that travel between states |
| `motion.duration.micro` | 150 ms | feedback |
| `motion.duration.fast` | 220-250 ms | control state change |
| `motion.duration.standard` | 500 ms | reveal |
| `motion.duration.reveal` | 700 ms | section or object reveal |
| `motion.duration.slow` | 1000 ms | one focal moment only |
| `motion.stagger` | deterministic `base * sqrt(index)` [motion.ts] | never random |

Semantic purposes (every animation declares one): `arrive` (content resolves
from uncertainty to clarity: opacity, slight rise, blur to sharp), `state`
(a control or row changes state), `custody` (an item moves from Obenan's
column to the customer's or back: approve, undo), `progress` (real events
accumulate), `focal` (the one per-screen moment). Anything that cannot name a
purpose is decoration and is not built.

Rules: reduced motion returns opacity-only or static for every purpose;
server-rendered content is never `opacity: 0` before a `js` class exists;
no autoplay audio; LCP media static; one focal moment per screen; loading
shimmer only for genuinely uncached work.

## 8. Figma naming and variant discipline

- One canonical library (DR-D02). Everything else subscribes to it; file-local
  components are allowed only inside a `_wip` page and must be promoted or
  deleted before a flow is marked ready.
- Variables: one collection `tokens` with modes `light` (and `dark` only when
  a dark theme is approved); names mirror section 2 exactly
  (`color/surface/canvas`, `space/4`, `radius/pill`, `motion/duration/fast`);
  lower-case; no underscores; no `radius-full = 16`.
- Components: name equals the contract name; variants named as in section 5;
  state as a property (`state=default|hover|focus|active|disabled|loading`),
  never separate components per state; no `Component 1`, no typos, no
  presentation chrome (browser frames, cursors) on product pages, move them
  to `_presentation`.
- Text styles published for every typography role; effect styles for
  `elevation.*`; no local styles in flow files.
- Every published component carries a description with: purpose, token
  dependencies, code export name, last reviewed date.

## 9. Parity mechanism

Code Connect is not available on the current plans (verbatim refusal in the
evidence ledger). Two paths:

- Path A (plan change, DR-D10): move to an Organization plan, author Code
  Connect mappings for each contract component, and surface them through the
  MCP `get_design_context` so implementers see the real component.
- Path B (no plan change): a tokens JSON in the repository exported to Figma
  variables by a maintained importer; Storybook state matrices as the code
  reference; a CI check that fails when a component's token dependencies use
  raw literals; a monthly screenshot diff of the canonical Figma components
  against Storybook renders, reviewed by the design owner.

Either path needs the same upstream work: one library, one token file, one
name per component.

## 10. Migration order that preserves compatibility

1. Tokens without behavior change: create `packages/obenan-theme/tokens/`
   (JSON + CSS variables + Tailwind preset), alias every existing theme name
   (`description`, `borderColor`, `gray.blackish`, `blue.buttonBg`,
   `accordianBg`, the Tailwind default palette) to the new tokens so no class
   changes meaning. Add lint that forbids new hex literals in `src` (allow-list
   the legacy files).
2. Website page dialects: map `.hv4` custom properties, `th-*`, briefings
   and local-visibility palettes to tokens family by family; keep customer
   colors behind the whitelabel seam. Locked surfaces go through the approval
   record.
3. Components in `obenan-ui`: add contract components alongside existing
   ones; re-export old names as deprecated aliases; update the 389 dashboard
   import sites by codemod, not by hand.
4. Dashboard accessibility pass: replace `outline-none` with `focus-visible`
   tokens; add focus tests.
5. Icons: one source, one `Icon` wrapper, migrate by page family.
6. Motion: choose one JS library per app; every animation declares a
   purpose token; remove unused keyframes.
7. Fonts: one loader per app, subset weights, license record in the repo.
8. Figma: rename to contract names, retire duplicates, publish styles,
   import tokens, move presentation chrome.
9. Remove aliases only after grep proof that no consumer remains.

No step changes customer-visible behavior except where a drift item says it
should; each such change is a spec with ACs and tests.

## 11. Evidence and test requirements for later implementation

- Every token change: a unit test that the CSS variable and the Tailwind
  class resolve to the same value; a contrast test for every allowed pairing
  (`contrast.min`).
- Every component: Storybook state matrix rendered in CI; axe pass;
  keyboard map test; reduced-motion story; long-string locale story (de,
  tr, pt-BR at 320 px); visual snapshot.
- Every surface migration: before and after screenshots at 375, 768, 1440;
  locked-surface approval record when applicable; no new hex literals (lint);
  no `outline-none` without `focus-visible`; no-JS render check for the
  website route.
- Every identity asset change: the exact approved source path and SHA-256
  recorded; no regenerated SVG.
- Parity: Figma variable names equal token names (script check) and
  component names equal Storybook titles (script check), run monthly and on
  release.

## 12. What this contract does not decide

Final values for ink, canvas, link, status, radius; the typeface licensing
path; the canonical Figma file; the wave's status for new surfaces; the icon
source; the plan for Code Connect. Each is a decision request with a
recommended default. Until decided, implementers use existing approved
values where one exists and file a request where none does.
