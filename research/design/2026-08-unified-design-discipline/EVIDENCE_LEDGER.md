# Evidence ledger

Date: 2026-08-19

State: `OBSERVED_EVIDENCE / NOT_APPROVAL`

Every row below records where a fact came from, what it can prove, and what it
cannot. Labels: `OBSERVED` (seen directly in the source), `INFERRED` (a
judgment from observed facts), `PROPOSED` (a recommendation), `UNRESOLVED`
(cannot be settled from available evidence).

## 1. Identity of the inspected states

### 1.1 Whole-brain Git identity (read-only)

| Item | Value |
| --- | --- |
| Repository | `/Users/sevenerhan/whole-brain` |
| Working branch | `feature/obifeed-mvp-4074` |
| Working HEAD | `4c895a0ff3002edad488a2df77316d20efdd7088` (2026-06-28, "fix(obifeed): gate share artifacts by advertised format") |
| Cached `origin/main` at inspection | `916701da3cce9cf9bc8fe591418f035accd2761d` (2026-08-19, merge of PR #4813) |
| Handoff's cached `origin/main` | `abaf210fd9764faa668efcf978bbb16b76acd3d1` (2026-08-18); present locally as `origin/main@{1}` in reflog, so a fetch happened between the handoff snapshot and this session, not by this session |
| Ahead / behind cached main | 4 ahead, 1,248 behind |
| Remote `refs/heads/main` via `git ls-remote` | `1e5f93241fe3cdd6361f479de91d36a5dd88b813` (newer than the cached ref at session start; no fetch performed by this session) |
| Cached `origin/main` movement during the session | The reflog records `fetch origin main --prune: fast-forward` to `916701da3` at 2026-08-19 15:06:59 +0200 and to `1e5f93241` at 15:32:16 +0200. Neither fetch was issued by this session (this session ran no `git fetch`; the same periodic fetch appears at 2026-08-18 14:50 and 23:09). Read-only `git grep` and `git show` commands issued after 15:32:16 therefore resolved `origin/main` to `1e5f93241`. The two refs differ by 8 commits; in `services/obenan-frontend` they differ in 11 files (an i18n resolver `apps/omnipulse/src/i18n/useResolvedTranslations.ts` and tests). Every count in section 3 was re-run pinned to both SHAs and is identical at both (omnipulse TSX 821, dashboard TSX 523, obenan-ui 371, 6-digit hex 8,968, framer-motion files 154, `Menu.tsx` 2,242). "`origin/main`" in this ledger therefore means `916701da3` or `1e5f93241` interchangeably for every figure reported. |
| Working tree status | 6 untracked entries (`.github/workflows/.claude/`, `.playwright-cli/`, `.playwright-mcp/`, `output/`, `scripts/ci/.claude/`, `services/dashboard-v2/src/models/.claude/`), zero modified or staged files; unchanged at end of session |
| Stash | 33 pre-existing entries (the audit listed only the first five with `head -5`; the full count was confirmed on re-check), untouched; no stash command was run |

Method note: the working tree was inspected with `rg`; `origin/main` was
inspected with `git grep -P`, `git ls-tree`, and `git show` against the ref.
Website surfaces that postdate 2026-06-28 (home-v4, local-visibility, demo,
executive-briefings, prospect-access, hospitality, agent-layer) exist only on
`origin/main` and were read there.

### 1.2 Figma identity (read-only)

`whoami`: handle `Seven`, authenticated company email redacted; plans `obenan` (tier starter,
seat Full, `team::1190185563219592046`) and `Obenan` (tier pro, seat Full,
`team::1196709168826116684`). `OBSERVED`: neither plan is Organization or
Enterprise.

### 1.3 Design workspace Git identity

Before: HEAD `c14d5ff`, `git diff --name-only` = `STATUS.md`; untracked
`.claude/`, `knowledge/`, `reference/messaging/`, `research/`. After: same
HEAD, same modified file, plus the eight files of this run under
`research/design/` and `knowledge/design/`. Nothing committed.

Correction round (2026-08-19), `git status --short --untracked-files=all`:
before and after the correction round the listing is identical in membership
(`M STATUS.md`; untracked `.claude/project-snapshot.json`, the four
`knowledge/design/proposed/*.md`, the four `research/design/2026-08-unified-
design-discipline/*.md`, and the pre-existing messaging files:
`knowledge/messaging/README.md`, `knowledge/messaging/approved/README.md`,
five `knowledge/messaging/proposed/*.md`, `reference/messaging/README.md`,
two `reference/messaging/sources/*.md`, `research/messaging/README.md`, and
fourteen files under `research/messaging/2026-08-storybrand-luxury-refresh/`).
Only the eight design deliverables and `STATUS.md` changed content; every
pre-existing untracked messaging and snapshot file was preserved (all their
modification times predate this session, the latest being
`.claude/project-snapshot.json` at 14:17:04, and the four
`knowledge/messaging/proposed/*_v2.md` files still match the SHA-256 values
recorded in the messaging run's `SESSION_REGISTRY.md`).

## 2. Source provenance

| # | Source | Path or URL and node | Observed date or SHA | Owner | Status | Proves | Cannot prove | Conflicts |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | Obenan Branding Guidelines PDF | `reference/brand-assets/quick-start/guidelines/Obenan-Branding-Guidelines.pdf`, SHA-256 `a8e40e11c6c0…ddd0`, 4 pages, created 2025-03-13 from Obsidian | Gleb / brand | Current identity reference (brand book) | Palette (7 hue families x 3, greyscale B-60..B-3, black/white), Helvetica Neue Regular + Light only, 10-stop gradient list, logo scales 4x/2x/1x, variants circular/square/outlined, pairing rules | Product UI rules, spacing, radius, motion, web licensing of the typeface | 10-stop gradient list vs the 12-stop logo SVG (S3, S5) |
| S2 | Wave reference PDF | `…/Obenan-Wave-Reference.pdf`, SHA-256 `f5d9b649…ad2a`, 1 page 1920x1080, no text layer | Gleb / brand | Identity reference (3D rendered tube wave: gold, orange, magenta, violet, blue, cyan on light grey) | Wave form and spectrum order | Any token value | None |
| S3 | Legacy logo SVGs | `…/logos/legacy-logo-dark.svg` `1ec915f858…9027`, `legacy-logo-light.svg` `6083d1c5f0…36f7`, `legacy-wave-mark.svg` `c7226a4039…fbf9`; 64x64 viewBox; 12 gradient stops E9C100→F67900 with a #FF00FF base fill and an inner-shadow filter | Gleb / brand | Named "legacy" by the workspace, but byte-identical to assets `origin/main` contains (see S20) | Exact gradient bytes (12 stops, matching the DESIGN_PRINCIPLES table and the `origin/main` SVGs) and wave geometry; this verifies the bytes, not the asset's current authority or permitted usage (DR-D01, DR-D07) | That it is retired; `origin/main` contradicts that (deployment not verified) | S4 vs S5 |
| S4 | Workspace `AGENTS.md`, `START_HERE.md`, `STATUS.md`, `DOMAIN.md` | workspace root | 2026-08-16 | Seven | Governance, current | Rules of this workspace; the hierarchy of sources; the "rainbow wave and lowercase wordmark are legacy references requiring explicit approval" rule | Code or deployment truth | S5 (calls the wave current identity); S20 (`origin/main` references the wave as its default logo) |
| S5 | `DESIGN_PRINCIPLES_2026.md` | `reference/design-principles/`, 5,598 words, dated 2026-05-10, status "living North Star" | Advisor distillation for Seven | Current product-UI principles; identity section says wave + wordmark is the identity bond "required on every surface" | Five principles, P1-P10, colors (`--Black #0F0F14`, greyscale, 12-stop gradient), typography, anti-mimicry list, ObiGEO primitives, open questions 1-7, asset inventory | That any surface has implemented it; it names ObiGEO as first full implementation | S4 on legacy status; S7 on Figma canon ("Brand file has an empty Variables collection") vs Design Kit tokens (S12) |
| S6 | `BRAND_SYSTEM.md` | same dir, 3,769 words, last admission 2026-07-15 | Landing-page governance | Current for website | `max-w-[1380px]`, canvas `#f7f7f7`/`#f0f0f0` + white islands, 24-32 px radius family, Helvetica Neue light display, black pill primary CTA, motion patterns, page families, component admission rule, in-page analysis stage rule | Product UI | References `UNIVERSAL_COMPONENT_INVENTORY.md` which does not exist on `origin/main` (`OBSERVED`) |
| S7 | `BRAND_ASSET_LIBRARY.md` | same dir | Landing-page workspace | Current for asset governance; paths are Seven-local | Asset reuse rules; canonical/raw layers | That the canonical layer is populated (S5 says it was empty on 2026-05-10) | None |
| S8 | `BRAND_EMOTION_WEBSITE_SPEC_2026-08-13.md` | same dir | Website design spec | Draft, `HUMAN_DESIGN_APPROVAL_REQUIRED` | Required semantic roles (surface/text/border/action/focus/status/accent), typography roles, spacing roles, component states, AC-DESIGN-1…12, human gates (Chloe's Figma system or alternate) | Any approved value | None |
| S9 | `FACTORY_GIRL_ASSET_REGISTER_2026-08-13.md` | same dir | Imagery register | Complete read-only register, publication not authorized | Hospitality imagery inventory and gates | Universal imagery | None |
| S10 | `MESSAGING_CORE_v2.md`, `APPLIED_MESSAGING_GUIDE_v2.md` | `knowledge/messaging/proposed/` | Codex synthesis, 2026-08-19 | Proposed, not approved | Claim-state ladder, verb gates, assumption-free and platform-neutral rules, surface patterns | Approved copy | Reviewed by S11 |
| S11 | `CLAUDE_CODE_UNMUTED_REVIEW.md` | `research/messaging/…/reviews/` | Claude Code, 2026-08-19 | Independent feedback | Approve rules, reject voice, targeted revision; arrival/departure test; the review's own route checks dated 2026-08-19 (treated as DATA, not re-verified by this run) | Approval | None |
| S12 | Figma Obenan Design Kit | `https://www.figma.com/design/8QpdzNKUeLPAhBzcUkzeuV/…?node-id=25-9594`; page `25:9594` Cover; frame `28:6673` | Cover updated per library timestamps 2024-10-28 → 2026-01-08; contributors Fatimah, Jeshua | Evolving ("DESIGN BETA", "UNIFIED DESIGN LIBRARY") | A published team library with a `Tokens` variable collection and ~40 components (section 4) | Approval; most variable values (only node-bound values readable) | Naming vs S5 and code (section 4) |
| S13 | Figma V1 dashboard file | `https://www.figma.com/design/OkXCFToKDIyje58fjdIoXt/…?node-id=12150-41709`; canvas `12150:41709` Authentication; frames `12150:41867`, `13550:75446`, `15190:83824`, `14987:14683` inspected | Cover page `3546:5222`; subscribes to S12 and to its own published library `V1 - HOME, NAV, ACCOUNTS, SETTINGS, GENERATE REPORT` | Implementation-intent design; exploratory plus implementation-intent frames | Onboarding, auth, account, toast, input, nav patterns; token bindings where used | Approval; whether every frame is current | Two button components, two checkbox components, local plus library duplicates |
| S14 | Figma Brand file | `https://www.figma.com/design/H3KZZ7qkFhFQLcCxBGtw1j/Brand`; page `39:2` _Cover; frame `39:29` | Same cover template and contributors as S12; no libraries added; not listed as an available org library | Brand deck (111 frames per S5), not enumerable through the connector this session | Cover title "Obenan Brand / Brand design Assets" | Deck content, variables | S5 says empty Variables collection; cover uses local variables `#121215`, `#335fff`, `#f7f7f8` |
| S15 | whole-brain `AGENTS.md`, frontend `CLAUDE.md`, `spec/learnings/README.md` | repo root, `services/obenan-frontend/CLAUDE.md` | HEAD | Engineering | Governance, partly stale | Monorepo layout, test rules | Design rules | Frontend `CLAUDE.md` lists `obenan-landing` and `obenan-landing-v1` apps that do not exist in either ref and names main branch `dashboard-main` (`OBSERVED` stale) |
| S16 | `packages/obenan-theme` | `colors.ts` (347 lines), `tailwind.config.ts` (149 lines) | identical at HEAD and main (321-333 hex literals) | Frontend | Implementation truth, shared | NextUI-plugin theme; brand hues + full default Tailwind palette + ad-hoc names; gradient utilities; radius small 8 / medium 12 / large 14; empty dark theme; no type or spacing tokens | Semantic intent | Radius vs S6 24-32 family; grey names vs brand book |
| S17 | `packages/obenan-ui` | 368 src files at HEAD, 371 at main; 4 Obenan stories + 3 Storybook boilerplate stories | Frontend | Implementation truth, shared | Button with 13 variants (default Tailwind `blue-500`), NextUI-wrapped TextInput, CustomButton, IconButton, Auth layout, 149 SVG assets, page-level components | Component states coverage | Variant sprawl; 14 logo files |
| S18 | `apps/obenan-dashboard` | 506 TSX at HEAD, 523 at main; Vite + React 18 + NextUI (322 files) with HeroUI in 2 files | Product | Implementation truth | Fonts, login, navbar, menu, reports inventory, pages list incl. Indexability/Discoverability/Reputation | Behavior | Focus suppression (`outline-none` 171 vs `focus-visible` 29 on main) |
| S19 | `apps/omnipulse` | 490 TSX at HEAD, 821 at main; Next 15.5 + React 19 + next-intl; `framer-motion` 11 and `motion` 12 both installed | Website and Omnipulse report | Implementation truth | Fonts via `next/font/local`, `lib/motion.ts`, home-v4 concept CSS, header, get-started handoff, brand module, locales, email template | Live deployment (not verified here) | Motion and color dialects by route family |
| S20 | Logo assets `origin/main` contains | `apps/omnipulse/public/omni-assets/brand/obenan-logo-{dark,light}.svg`, `apps/obenan-dashboard/src/assets/icons/obenan/logo-{dark,light}.svg` (SHA prefixes `1ec915f85891`, `6083d1c5f0b1`), header `public/new-logo.png` 490x196 rainbow wave (`837afb32c2c4ce76…`) | `origin/main` | Frontend | Implementation truth | The wave + wordmark SVGs that `origin/main` contains are byte-identical to the workspace "legacy" files; `origin/main` `MainHeader.tsx` references `brand.logoUrl`, whose embedded default in `brand.ts` is the wave PNG; the dashboard `feed/brand.ts` in `origin/main` imports the wave + wordmark SVGs (deployment and live rendering not verified) | That this was a deliberate current-identity decision | S4 |

## 3. Recounted drift signals, with method

Scope unless stated: `apps/obenan-dashboard/src`, `apps/omnipulse/src`,
`packages/obenan-ui/src`, `packages/obenan-theme`; file types
`ts,tsx,js,jsx,css,scss,html`. Counts are occurrences unless "files".

| Signal | Handoff | HEAD `4c895a0ff` (rg) | `origin/main` `916701da3` (git grep -P) | Pattern / note |
| --- | --- | --- | --- | --- |
| obenan-ui source files | 368 | 368 | 371 | `rg --files` / `git ls-tree` |
| Storybook story files | 7 | 7 (4 Obenan: tag, button, input, card; 3 Storybook scaffold: Button, Page, Header `.stories.js`) | 7 | `*.stories.*` |
| Dashboard TSX files | 506 | 506 | 523 | `\.tsx$` |
| Website TSX files | 490 | 490 | 821 | website grew 68 percent in 7 weeks |
| Hex literals (3/6/8-digit) | 7,481 / 767 unique | 7,014 / 685 unique (dashboard 2,477; website 3,741; ui 463; theme 333) | 6-digit only: 8,968 / 899 unique (dashboard 1,582; website 6,678; ui 387; theme 321) | `#[0-9a-f]{8}\b|#[0-9a-f]{6}\b|#[0-9a-f]{3}\b`; main count is 6-digit only because POSIX `git grep` lacks `\b` without `-P`; the handoff figure likely used a different boundary rule |
| Gradient occurrences | 202 | 188 CSS gradient functions (dashboard 56; website 104; ui 20; theme 8); 1,057 any "gradient" token; 78 `bg-gradient-to-*` | 284 CSS gradient functions | `(linear|radial|conic)-gradient\(` |
| Explicit font-family declarations | 240 | 240 (dashboard 56; website 179; ui 5) | 272 | `font-family|fontFamily` |
| Arbitrary Tailwind radius | 1,063 | 1,109 (dashboard 664; website 362; ui 83) | 1,301 | `rounded(-[a-z]{1,2})?-\[…\]` |
| Files importing framer-motion | 61 | 61 (dashboard 4; website 56; ui 1) | 154 | `from 'framer-motion'` |
| Files importing `motion/react` or `motion` | not counted | 41 | 41 | second motion library in the same app |
| Files referencing reduced motion | 26 | 25 (dashboard 2; website 23) | 123 | `prefers-reduced-motion|useReducedMotion|reducedMotion|reduced-motion` |
| `Menu.tsx` lines | 2,249 | 2,249 (32 `useState`, 78 `!` overrides, 54 arbitrary values, 4 react-icons families) | 2,242 | `wc -l` |
| Backdrop blur or filter | not counted | not counted | website 69; dashboard 93; ui 10 | `backdrop-blur|backdrop-filter|backdropFilter` |
| CSS `@keyframes` (website) | not counted | not counted | 103 | |
| react-icons families | not counted | not counted | dashboard 18 families (io 140, rx 112, io5 67, ci 56, fa 25 …); website 12 families; lucide-react in 19 website files and 4 dashboard files | `from 'react-icons/<family>'` |
| UI-kit imports (files) | not counted | not counted | dashboard `@nextui-org` 322, `@heroui` 2; obenan-ui `@nextui-org` 75; website `@nextui-org` 48 | |
| obenan-ui adoption (files) | not counted | not counted | dashboard 389; website 32 | `from 'obenan-ui` |
| `lib/motion.ts` adoption (files) | not counted | not counted | 8 (7 in `home-v3`) | the motion vocabulary is used by a superseded homepage |
| Accessibility signals (main) | not counted | not counted | `aria-*` website 973 / dashboard 303; `focus-visible` website 408 / dashboard 29; `outline-none` dashboard 171 / website 93; `tabular-nums` website 174 / dashboard 61 | |
| Tests (main) | not counted | not counted | website tests dir 248 files (4 a11y-named, 10 locale-named); dashboard tests dir 507 files | `git ls-tree` |

Most frequent hex values on `origin/main` (6-digit, all four areas):
`#242424` 724, `#141414` 618, `#f7f7f7` 339, `#0f0f14` 334, `#e8e8e8` 271,
`#e9c100` 263, `#f0f0f0` 230, `#666666` 200, `#0a0a0a` 156, `#4470dc` 155,
`#fafafa` 146, `#6b7a8d` 140, `#ffffff` 137, `#00a4e3` 129, `#e6e6e6` 124,
`#8899aa` 122, `#757575` 114, `#6062d4` 112, `#747474` 109, `#fb1b33` 105,
`#999999` 90. `OBSERVED`: at least six near-blacks compete (`#000000`,
`#0a0a0a`, `#0f0f14`, `#141414`, `#242424`, `#1f2a36`).

Where the dialects sit (`origin/main`, website): `#0f0f14` in
`local-visibility` 110, `executive-briefings` 81, `industry` 28,
`directories-and-platforms` 25, `prospect-access` 19, `demo` 17; `#141414` in
`briefings` 372, `merchant-layer` 40, `merchant-infrastructure-*` ~110;
`#242424` in `hooks/useAnimatedTextData.ts` 475, `review-growth-calculator`
36, `home-v2` 24, `home-v3` 18; `#6b7a8d` and `#8899aa` only in `briefings`;
`#0077a8` only in `local-visibility` (56) and neighbours.

## 4. Figma observations

### 4.1 Connector behavior (verbatim where quoted)

- `get_metadata` without a node returned exactly one top-level page for all
  three files (`25:9594 Cover`, `3546:5222 Cover`, `39:2 _Cover`). Deeper
  pages were therefore not enumerable this session. `UNRESOLVED` whether this
  is a connector limit or file structure.
- `get_design_context` on the canvas `25:9594` returned: "You currently have
  nothing selected. You need to select a layer first before using this tool."
  Frame-level nodes worked.
- `get_variable_defs` on frame `28:6673` worked: `Color/Content/Emphasis
  #f7f7f8`, `Color/System/Emphasis #335fff`, `Color/Surface/Surface_0
  #121215`, `Surface/Surface_0 #121215`.
- `list_file_components_for_code_connect` and `get_code_connect_map` returned:
  "You need a Dev or Full seat on an Organization or Enterprise plan to use
  Code Connect. Ask a Figma admin to upgrade your plan or seat."
- `search_design_system` returned component and variable names, keys, scopes,
  timestamps and collection names, never values, and returned no styles.
- Screenshots and metadata worked for every node tried.

### 4.2 Design Kit (S12) `OBSERVED`

Cover `28:6673`: dark `#121215` surface, `#335fff` badge, `#f7f7f8` text,
Helvetica Neue Bold 150 px uppercase title "OBENAN DESIGN KIT", Light 40 px
"Unified Design Library", badge "DESIGN" + "BETA", contributors Fatimah and
Jeshua. Bold is not among the brand-book styles (Regular, Light).

Library `Obenan Design Kit` (`lk-d2ef6bf4…6071f5`), the only library added to
the Design Kit file. Variable collection `Tokens`:

- `Button/` btn-alert, btn-default, btn-optimal, btn-disabled, btn-emphasis,
  btn-subemphasis, system-alert, system-success, system-neutral,
  system-warning, system-emphasis (COLOR)
- `Text/` text-default, text-emphasis, text-muted, text-link, text-alert,
  text-btn-color, text-btn-sub, text-btn-disabled (COLOR); `Icon/icon-btn-color`
- `Surface/` surface-0, surface-50, surface-100, surface-200, surface-300,
  surface-400, Surface-500, Surface-Scrim (COLOR; inconsistent casing)
- `Spacing/` XS, S, M, L, XL, 2XL, 3XL (FLOAT; `L` scoped to corner radius,
  width/height, gap, font variations; others ALL_SCOPES)
- Values known only from node bindings: `text/text-default #757575`,
  `text/text-emphasis #242424`, `text/text-link #4470dc`,
  `stroke/stroke-default #d6d6d6`, `stroke/standard 1px`,
  `gap/standard/large 16px`, `gap/standard/medium 12px`, `spacing/xl 24px`,
  `surface/surface-0 white` (light context), `grey/150 #f5f5f5`,
  `radius/radius-full 16px`. Note the bound names (`stroke/…`, `gap/…`,
  `grey/…`, `radius/…`) do not all appear in the search results, so at least
  two naming generations coexist.

Components found (name, type, last update): `btn` (set, 2026-01-08);
`buttons/menu`, `buttons/icon-36`, `buttons/logo-56` (2026-01-08);
`buttons/colors` (2024-10-28); `buttons/text-56` (2025-02-28);
`buttons/text-56-circle` (2025-02-04); `Input` (2026-01-08); `ws_nav`,
`op_header`, `icon`, `TextTitle`, `elements/dots-pagination`,
`elements/images-big`, `Competitors`, `Toast` (2026-01-08); `icons/color`
(2025-03-14); `tag_big`, `tags/role`, `tags/color`, `tags/chart`,
`tag_grey_small`, `tag_suggestion`, `tag_grey_small_suggestion`
(2025-03-21); `Toggle` (2025-01-21, description "CODE STATUS ---- LUA 🟢
Foundation v1.0", which reads as an imported template's note); `Card`
(2025-01-13); `Page Indicator`, `BG Text` (2024-10-28); `logo`
(2024-12-19); `logo_small` (2024-10-28); `Customer Logos` (2025-01-06);
`Indictator Wrap` (sic, 2025-03-07); `Component 1` (unnamed set,
2026-01-08). No text styles were returned by search.

### 4.3 Dashboard file (S13) `OBSERVED`

Canvas `12150:41709` "Authentication": 431 top-level children (167 frames, 94
annotation texts, 3 rectangles); 4,777 frames, 1,720 texts, 921 component
instances from 18 distinct components: `input_field` 239, `icons/icons` 183,
`Chrome Navbar - Mac/Windows` 121, `logo` 107, `Cursors / Figma` 65, `Toast`
32, `field_description` 32, `button` 31, `controls/checkbox` 30, `ws_nav` 28,
`btn` 22, `icons/colors` 8, `logo_small` 8, `payment_option` 5, `.Tab` 4,
`icons/color` 2, `Tooltip` 2, `checkbox` 2. Frame families: `Onboarding
desktop` 56 (1440x1024), `Authentication` 32 (375x812-814 mobile), `0.3` 26,
`0.2` 16, `3.4` 12, `My Account` 8 (1728 wide), `2.2` 6, `0.1` 3, `1` 2,
`4`-`7` 1 each. Libraries added: S12 and the file's own published library
`V1 - HOME, NAV, ACCOUNTS, SETTINGS, GENERATE REPORT` (`lk-598b754e…6b1cc`;
components found: `radio_btn`, `.row (posts)`, `Filter-header`,
`checkbox_item`). `input_field`, `field_description`, `button`,
`controls/checkbox` resolve to file-local components (instance ids prefixed
`I…;12150:…`), so three component sources coexist: Design Kit, V1 library,
local.

Inspected frames:

- `12150:41867` "3.4" (dashboard first-time welcome, desktop): canvas
  `grey/150 #f5f5f5`, `radius/radius-full 16px`, four-stop spectrum progress
  bar (`#E9C100 → #FB1B33 → #6062D4 → #00A4E3`), wave mark, "Welcome to
  Obenan" as gradient-filled Helvetica Neue Light 56/66, body `rgba(0,0,0,0.4)`
  16/20, faint hairline wave background, inside a "Chrome Navbar - Mac/Windows"
  presentation mockup (SF Pro). Screenshot inspected.
- `13550:75446` "Onboarding desktop" (Create Account): 640 px section,
  H3 Light 40/48; `input_field` = white, `backdrop-blur 30px`, drop shadow,
  radius 20, label 12/16 `rgba(0,0,0,0.4)`, value Light 26/32; primary action
  = component `tag_big` used as a black pill (radius 40, 20 px padding,
  20/24 Regular white); links `#598aff` underlined; `ws_nav` with
  `spacing/xl 24px` and `text/text-default #757575`. Styles present: H3, H5
  (Light 26/32), H6 (Regular 20/24), 12 regular, Body M Small Caps (16/20),
  Caption/CaptionMedium; color styles Black, B-40 and B-100 (black with
  alpha), W-100, Gray, Ocean blue `#598AFF`; effect "Shadow 1" = background
  blur 60 plus four drop shadows.
- `15190:83824` "My Account" (reset password over blurred account page):
  tokens `surface/surface-0 white`, `stroke/standard 1px`,
  `stroke/stroke-default #d6d6d6`, `gap/standard/large 16px`,
  `gap/standard/medium 12px`, `text/text-emphasis #242424`,
  `text/text-link #4470dc`; success `#1bc47d`; 19 backdrop-blur uses; radii 20
  (18x), 8, 30, 24, 10, 6, 32, 40; fonts Helvetica Neue Regular 45 uses and
  Light 16, plus SF Pro Text and Inter Bold from Safari-mockup chrome; Toast
  fully token-bound (surface-0, stroke, gap, text-emphasis). Visible text
  includes "Insights", "Indexability", "Discoverability", "Reputation"
  (position in the frame not isolated; read as navigation or tab labels) and
  a billing ledger ("1 July 2024 / $100.00 / Paid").
  Screenshot inspected.
- `14987:14683` "Authentication" (mobile Create Account 375x814): wave mark
  only top-left, Light headline, white input card, black pill "Send magic
  link", blue underlined links, "English (UK)" selector. Screenshot inspected.

### 4.4 Brand file (S14) `OBSERVED`

Cover `39:29`: same template as the Design Kit cover ("OBENAN BRAND", "Brand
design Assets", badge "DESIGN" only, same contributors, same local variables
`#121215`, `#335fff`, `#f7f7f8`). No libraries added; not listed among
available organization libraries. The 111-frame deck described by S5 could
not be enumerated through the connector this session.

## 5. Code observations by layer `OBSERVED`

- Typography: both apps self-host Helvetica Neue OTF files. Dashboard:
  17 files (about 7.3 MB, weights 100-900 plus italics) under
  `apps/obenan-dashboard/src/assets/fonts`, six weights declared in
  `src/assets/styles/fonts.css` as family `HelveticaNeue`; website: six OTF
  files via `next/font/local` in `app/[locale]/layout.tsx`; emails use
  `'Helvetica Neue',Helvetica,Arial`. No license record was found in the
  inspected tree. Website uses `tabular-nums` 174 times, dashboard 61.
- Color: `obenan-theme/colors.ts` mixes brand hues (`red #FF4A4A`, `orange
  #FFAD4A`, `green #1BC47D`, `blue #00BDEA`, `indigo #598AFF`, `purple
  #9289F9`, `pink #FE5B9A`), alpha blacks (`black.60 #00000099` … `black.3
  #00000008`), the entire default Tailwind palette, and ad-hoc names
  (`divider #484848`, `description #757575`, `borderColor #D6D6D6`,
  `inputBorder #EDEDED`, `accordianBg #F7F7F7`, `error #DE3136`, `crumb`,
  `card-bg`, `blue.buttonBg #4470DC`, `blue.sky #1993DF`, `green.grass
  #34A853`, `gray.blackish #242424`, `gray.whitish #999999`, `gray.lighter
  #f5f5f5`). `colorsDark` is empty. The website adds `th-*` CSS-variable
  tokens and a "Prospect-briefing palette" in its Tailwind config. Home-v4
  defines 69 custom properties scoped to `.hv4` (`--ink #0f0f14`, `--canvas
  #f7f7f7`, `--canvas-2 #f0f0f0`, `--hairline #e6e6e6`, `--body #55555c`,
  `--muted #6e6e78`, `--faint #999999`, `--drift #e03a3a`, `--amber #b96e00`,
  `--amber-bright #ffad4a`, shadow ladder, easing set, `--frame 1380px`).
  Whitelabel defaults set `primaryColor '#0066FF'` in both apps.
- Radius: theme `small 8 / medium 12 / large 14`; Figma dashboard 20 and 40
  dominant; BRAND_SYSTEM 24-32; 1,301 arbitrary radius classes on main.
- Elevation and glass: website `globals.css` `.logo-radial-gradient` uses
  `backdrop-filter: blur(30px)`; Figma inputs use `backdrop-blur 30px`; 172
  backdrop occurrences across apps and ui on main; dashboard Navbar uses
  `backdrop-blur` with `--brand-header-bg-blur`.
- Spectrum in product: theme utilities `gradient-1/2`, `text-gradient-1…5`
  (3 and 5 identical); dashboard `index.css` `.download-report-button` spectrum
  text; website `.chat-bubble` and `.hint-bubble` spectrum washes; `.donut`
  conic spectrum; obenan-ui Button `connect` variant spectrum text.
- Motion: `lib/motion.ts` "Signal Resolve" (easing resolve/drift/interact;
  durations 150/250/500/700/1000; deterministic stagger; resolve/drift/fade/
  lateral; reduced-motion paths) used by 8 files; `framer-motion` 154 files
  (briefings 30, merchant-infrastructure family ~84); `motion/react` 41
  files (report, common, about); 103 CSS keyframes; home-v4 has its own
  easing set, `.hv4.js .reveal` gating so content is visible without JS, and
  `prefers-reduced-motion: reduce` blocks.
- Icons: react-icons 18 families in dashboard, 12 in website; lucide-react in
  23 files; 149 SVG assets in obenan-ui; Design Kit `icon` and `icons/color`
  sets in Figma.
- Components: obenan-ui `Button` (13 variants, default Tailwind `blue-500`,
  hard-coded `#DE3136`, `#00000008`, `!` overrides), `CustomButton` (NextUI
  wrapper), `IconButton`, `TextInput` (NextUI wrapper with ~20 style props);
  dashboard imports obenan-ui in 389 files; website in 32. Dashboard has two
  `Header.tsx` files (28 lines each). Menu.tsx 2,242 lines.
- Journeys: homepage `CheckupDoors.tsx` links to `https://obigeo.obenan.com/snapshot` (audit), `/local-visibility-check/` and `/review-growth-calculator` (checkups); header primary action `get-started`; `get-started/page.tsx` reads an `LVC_CONNECT_SOURCE` hand-off and skips the chooser so "the onboarding flow never asks the prospect to re-enter what the check already knew" (AC-LVC-37 in source comments); dashboard login uses `obenan-ui` `AuthLayout` (`bg-[#F5F5F5]`, 32/40 Light title, `max-w-[640px]`, `rounded-[40px]` pill, `text-indigo` links) which mirrors Figma `13550:75446` by value.
- Locked surfaces: `LOCKED_SURFACES.md` plus `locked-surfaces.manifest.json`
  freeze header/footer IA (labels `AI Visibility`, `AI Presence`), AI route
  intent, verification email template, and report top chrome; changes need
  `LOCKED_SURFACE_APPROVALS.json` records and screenshot proof.
- Locale: website `locales = ['en','es','de','nl','tr','pt-BR','pt-PT']`
  plus campaign locales; 30 message files in both apps.
- Generated artifacts: dashboard reports are produced by download handlers
  against backend services; PDF typography is outside the inspected frontend
  (`UNRESOLVED`). The verification email template is a locked surface with
  its own greys (`#1F1F1F`, `#818181`) and 4 px CTA radius.

## 6. Facts versus judgments

`INFERRED` (from section 3-5): the shared packages carry a NextUI-shaped
theme of values without semantic names; page families carry their own
dialects; the nearest implementation of DESIGN_PRINCIPLES values is the
page-scoped `home-v4.css`; Figma holds a tokenized library and untokenized
page frames side by side.

`UNRESOLVED`: Helvetica Neue web licensing; which Figma file is canon; the
status of the wave for new surfaces; Design Kit variable values beyond the
bound ones; backend report typography; remote-main deltas after `916701da3`.
