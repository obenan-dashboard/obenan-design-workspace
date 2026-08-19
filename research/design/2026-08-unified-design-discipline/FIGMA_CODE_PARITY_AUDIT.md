# Figma to code parity audit

Date: 2026-08-19

State: `OBSERVED_AUDIT / NOT_APPROVAL`

Scope: three Figma files (Design Kit `8QpdzNKUeLPAhBzcUkzeuV`, V1 dashboard
`OkXCFToKDIyje58fjdIoXt`, Brand `H3KZZ7qkFhFQLcCxBGtw1j`), two published team
libraries, and the whole-brain frontend at HEAD `4c895a0ff` and `origin/main`
(`916701da3`, later `1e5f93241` after an external fetch; identical counts at
both, see the ledger). Node ids and paths are exact. Values marked "bound" were read from
a node that uses the variable; values marked "name only" came from
design-system search, which returns no values.

## 1. Parity summary

| Layer | Figma has | Code has | Parity verdict |
| --- | --- | --- | --- |
| Source of truth | Two libraries plus file-local components; one `Tokens` collection with at least two naming generations; Brand file with local variables | `obenan-theme` (NextUI plugin config) shared by both apps; page-scoped dialects (`.hv4`, `th-*`, briefings palette, local-visibility palette) | `OBSERVED`: parity by copied value, not by shared name or mechanism. No mechanism links them (Code Connect refused by plan; no token export found) |
| Near-black | `#121215` (Design Kit cover), `#000000` and alpha-black styles (dashboard file), `#242424` (`text/text-emphasis`) | `#0f0f14` (home-v4, local-visibility, executive-briefings), `#141414` (briefings, merchant family), `#242424` (theme `gray.blackish`, home-v2/v3), `#000000`, `#0a0a0a` | Divergent: six near-blacks in code, three in Figma, one in DESIGN_PRINCIPLES (`#0F0F14`) |
| Canvas | `grey/150 #f5f5f5` (dashboard frames) | `#F5F5F5` (obenan-ui AuthLayout, theme `gray.lighter`), `#f7f7f7`/`#f0f0f0` (website per BRAND_SYSTEM, home-v4), `#fafafa` 146 uses | Partially aligned: product canvas `#f5f5f5` is not the brand book's B-3/B-6 |
| Secondary text | `text/text-default #757575` (bound), `rgba(0,0,0,0.4)` labels | theme `description #757575`, header utility links `#757575`, `text-[#00000066]` alpha-black in dashboard | Aligned by value (`#757575`) and by the alpha-black convention; neither matches brand book B-60 `#666666` (used 200 times on website) |
| Link / action blue | `text/text-link #4470dc` (bound), `Ocean blue #598AFF` style, `Color/System/Emphasis #335fff` (covers) | theme `blue.buttonBg #4470DC`, `indigo.DEFAULT #598AFF`, whitelabel `primaryColor #0066FF`, theme `blue.DEFAULT #00BDEA` | Four competing blues across Figma and code, plus a fifth in the covers |
| Border | `stroke/stroke-default #d6d6d6`, `stroke/standard 1px` (bound) | theme `borderColor #D6D6D6`, `inputBorder #EDEDED`, home-v4 `--hairline #e6e6e6`, brand B-10 `#E6E6E6` | Aligned `#d6d6d6` between Figma and theme; website hairline uses brand `#e6e6e6` |
| Spacing | `Spacing/XS…3XL` (names only), `spacing/xl 24px`, `gap/standard/medium 12px`, `gap/standard/large 16px` (bound) | No spacing tokens in `obenan-theme`; home-v4 `--s-1…--s-8`; Tailwind scale elsewhere | Not linked |
| Radius | 20 px inputs/cards, 40 px pill, `radius/radius-full 16px` (bound), plus 6/8/10/24/30/32 in My Account | theme `small 8 / medium 12 / large 14`; BRAND_SYSTEM 24-32 family; 1,301 arbitrary radius classes; dashboard login `rounded-[40px]` | Divergent: three radius systems and one arbitrary practice |
| Typography | Styles H1 Light 56/66, H3 Light 40/48, H5 Light 26/32, H6 Regular 20/24, 16/20 "Body M Small Caps", 14/18, 12/16, "56 light", "32 light"; no text styles surfaced from the library | Self-hosted Helvetica Neue in both apps; no type tokens in theme; `font-light` + arbitrary `text-[Npx]` classes; home-v4 has its own scale | Divergent mechanism, similar values (Light display, Regular body) |
| Elevation and glass | `Shadow 1` = background blur 60 plus four drop shadows; `backdrop-blur 30px` on inputs; blurred page behind side sheet | website `.logo-radial-gradient` `backdrop-filter: blur(30px)`; 172 backdrop occurrences; theme NextUI shadows small/medium/large; home-v4 ink-tinted shadow ladder | Aligned with each other, both contradict DESIGN_PRINCIPLES P1/P3 (no backdrop-filter chrome, no elevation as hierarchy) |
| Spectrum in product | 4-stop progress bar and gradient headline on welcome `12150:41867` | theme `gradient-2` and `text-gradient-2/4` (same four stops), dashboard `.download-report-button` gradient text, `.chat-bubble` washes, `.donut` conic | Aligned: both treat the four-stop spectrum as a product accent; DESIGN_PRINCIPLES forbids it in product UI except brand moments |
| Identity asset | `logo` component 107 instances (wave mark), `logo_small`, `buttons/logo-56` | 14 distinct logo SVG files across three places; `origin/main` header default `new-logo.png` (wave); `obenan-logo-{dark,light}.svg` byte-identical to workspace "legacy" files | Aligned: Figma contains the wave component and `origin/main` references the wave asset; contradicts the workspace `AGENTS.md` legacy rule; deployment not verified |
| Buttons | Design Kit `btn`, `buttons/text-56`, `buttons/text-56-circle`, `buttons/icon-36`, `buttons/logo-56`, `buttons/menu`, `buttons/colors`; dashboard file `button` (31) and `btn` (22) and `tag_big` used as the primary pill | obenan-ui `Button` (13 variants, default Tailwind `blue-500`), `CustomButton` (NextUI), `IconButton`; dashboard login `rounded-[40px]` black pill; home-v4 `.btn-primary` | Duplicated on both sides; no shared variant vocabulary (Figma: emphasis/subemphasis/optimal/alert; code: Primary/Secondary/Success/Danger/connect/disconnect) |
| Inputs | Design Kit `Input`; dashboard-local `input_field` (239) and `field_description` (32) | obenan-ui `TextInput` wrapping NextUI `Input` with ~20 style props; website `CustomTextInput` | Two Figma inputs, two code inputs |
| Checkbox, toggle | `controls/checkbox` (30) and `checkbox` (2); `Toggle` (imported template note) | obenan-ui `checkbox`; website `CustomCheckbox`, `ToggleButton` | Duplicates on both sides |
| Feedback | `Toast` (32 instances, fully token-bound: surface-0, stroke, gap, text-emphasis), `Tooltip` | obenan-ui `toastify` wrapper, `CustomAlert`; website `SnackProvider`, `PopupMessageProvider` | Figma Toast is the best-tokenized component found; code has three toast/alert mechanisms |
| Navigation | `ws_nav` (28), `op_header` | website `LandingLayout/MainHeader.tsx` (locked IA), dashboard `Navbar.tsx`, two `Header.tsx`, obenan-ui `header`, `Navbar.tsx`, `LandingMenuBar.tsx` | Several navigation implementations; the My Account frame's visible text (Insights, Indexability, Discoverability, Reputation) matches dashboard page names, so the lens vocabulary already crosses Figma and code |
| Data display | Billing ledger rows, `tags/chart`, `Competitors`, `Page Indicator` | obenan-ui `CustomTable`, `HeadlessTable`, `AsyncPaginationTable`, `MetricCard`, `CircularProgress`, `LinearProgressBar`; recharts and vchart at root | No shared evidence primitives (observed/inferred/recommended, absence states) on either side |
| Presentation chrome | `Chrome Navbar - Mac/Windows` (121), `Core / Safari (Big Sur)`, `Cursors / Figma` (65) | none | Figma mixes mockup chrome (SF Pro, Inter) into product frames; harmless for code, noisy for parity |

## 2. Figma token inventory versus code tokens

| Figma token (collection `Tokens`) | Value | Nearest code token | Code value | Match |
| --- | --- | --- | --- | --- |
| `Text/text-default` | `#757575` (bound) | `obenan-theme` `description` | `#757575` | value match, name mismatch |
| `Text/text-emphasis` | `#242424` (bound) | `gray.blackish`; home-v2/v3 literals | `#242424` | value match |
| `Text/text-link` | `#4470dc` (bound) | `blue.buttonBg` | `#4470DC` | value match, semantic mismatch (button vs link) |
| `Text/text-muted`, `text-alert`, `text-btn-*` | name only | `black.40`, `red`, `error #DE3136` | none | unverifiable |
| `Surface/surface-0` | white (bound, light) | none named | none | no token |
| `Surface/surface-50…500`, `Surface-Scrim` | name only | `gray.*`, `neutral.*`, `black.*` alphas | none | unverifiable |
| `Color/Surface/Surface_0` (cover generation) | `#121215` | none; DESIGN_PRINCIPLES `--Black #0F0F14`; home-v4 `--ink` | `#0f0f14` | mismatch (3 units of blue, 2 of red/green) |
| `Color/System/Emphasis` | `#335fff` | none | none | no code equivalent |
| `Color/Content/Emphasis` | `#f7f7f8` | brand B-3 `#F7F7F7`, home-v4 `--canvas` | `#f7f7f7` | near match |
| `Button/btn-emphasis`, `btn-subemphasis`, `btn-default`, `btn-optimal`, `btn-disabled`, `btn-alert` | name only | obenan-ui `Button` variants | none | vocabulary mismatch |
| `Button/system-success|warning|alert|neutral|emphasis` | name only | theme `green #1BC47D`, `orange #FFAD4A`, `red #FF4A4A`, `error #DE3136` | none | likely match on success (`#1bc47d` seen in My Account) |
| `Spacing/XS…3XL` | name only; `xl` bound 24 px | none in theme | none | no token |
| `gap/standard/medium`, `large` | 12 px, 16 px | none | none | no token |
| `stroke/standard`, `stroke/stroke-default` | 1 px, `#d6d6d6` | `borderColor #D6D6D6` | match | value match |
| `grey/150` | `#f5f5f5` | `gray.lighter` | `#f5f5f5` | value match |
| `radius/radius-full` | 16 px | NextUI `radius.large` 14 px | mismatch | naming is misleading ("full" is 16 px) |

`INFERRED`: whoever built the V1 dashboard frames and whoever wrote
`obenan-theme/colors.ts` worked from the same value sheet (`#757575`,
`#242424`, `#4470DC`, `#D6D6D6`, `#F5F5F5`, `#1BC47D`, `#598AFF`), which is
why onboarding in code resembles onboarding in Figma. The resemblance is
maintained by hand, not by a contract.

## 3. Naming and variant discipline observed in Figma

- Two casing styles inside one collection: `Surface/surface-0` and
  `Surface/Surface-500`, `Surface-Scrim`.
- Two token generations: `Color/Surface/Surface_0` (covers) and
  `Surface/surface-0` (library), plus bound names that do not appear in
  search (`stroke/…`, `gap/standard/…`, `grey/150`, `radius/radius-full`).
- Component naming mixes `btn`, `button`, `buttons/text-56`, `tag_big` (a tag
  used as the primary button), `Indictator Wrap` (typo), `Component 1`
  (unnamed), `.row (posts)`, `ws_nav`, `op_header` (abbreviations without a
  key).
- Presentation-chrome components (`Chrome Navbar - Mac/Windows`, `Core /
  Safari (Big Sur)`, `Cursors / Figma`) sit inside product frames.
- `Toggle` carries an imported description ("CODE STATUS … LUA 🟢 Foundation
  v1.0"), evidence of a template-derived component.
- Text styles exist in frames (H1, H3, H5, H6, Body M Small Caps, 12/14/16
  regular, 32/56 light, Caption/CaptionMedium) but none surfaced as library
  styles.

## 4. Code side: where semantic intent already exists

- `lib/motion.ts` (website): named easing and duration tokens with reduced
  motion paths. Used by 8 files.
- `home-v4/concept/home-v4.css`: `--ink`, `--paper`, `--canvas`, `--hairline`,
  `--body`, `--muted`, `--faint`, `--amber*`, `--drift`, `--lift-1..3`,
  `--edge-raise`, `--ease-rise/settle/carry/walk`, `--hover-t`, `--r-pill`,
  `--r-tile`, `--r-board`, `--s-1..8`, `--frame`. The only place the
  DESIGN_PRINCIPLES values are implemented as named tokens, and it is scoped to
  one page.
- `obenan-theme` gradient utilities encode the logo SVG's 12-stop spectrum (bytes verified; authority under DR-D01) twice
  (10-stop `gradient-1`, 4-stop `gradient-2`) and the brand hues by name.
- Whitelabel `Brand` contract (`appName`, `logoUrl`, `faviconUrl`,
  `primaryColor`) in both apps, with `--brand-header-bg` style variables in
  the dashboard navbar: a runtime theming seam already exists.

## 5. Parity mechanism status

- Code Connect: refused for this seat and plan (verbatim error recorded in the
  ledger). `UNRESOLVED` whether the workspace will move to an Organization or
  Enterprise plan.
- Variables export: no tokens JSON, Style Dictionary config, or Tokens Studio
  file was found in the frontend tree at HEAD or `origin/main` (`git ls-tree`
  and `git grep` for `tokens.json`, `style-dictionary`, `tokens-studio`,
  `design-tokens` returned nothing; `figma` matched only exported SVGs under
  `apps/obenan-dashboard/src/assets/figma-exports/onboarding-report-preference/`,
  a Storybook asset, and two process documents).
- Process documents: `apps/obenan-dashboard/system-docs/figma-integration.md`
  (808 lines, "APEX-FIGMA" orchestrator) and
  `apps/obenan-dashboard/.claude/agents/figma-interpreter.md` mandate "existing
  tokens and components only" and minimal diffs, but their recommended
  responsive patterns are arbitrary pixel classes (`text-[16px] md:text-[20px]`,
  `px-[24px] md:px-[64px]`). `OBSERVED`: the integration guidance itself
  institutionalizes per-instance literals because no token scale exists to
  point at.
- Storybook: 4 Obenan stories (tag, button, input, card) plus scaffold; no
  visual regression or token documentation stories.
- Locked-surface protocol: screenshot-proof discipline exists for four public
  surfaces; it is a governance mechanism, not a parity mechanism.

## 6. Verdict by question

- Do Figma and code share names? No (`OBSERVED`).
- Do they share values? Often, for the dashboard onboarding and account
  surfaces; rarely for the website, which uses brand-book and
  DESIGN_PRINCIPLES values instead (`OBSERVED`).
- Is there a mechanism that would catch drift? No (`OBSERVED`).
- Which side is closer to the intended system? Neither is complete. Figma is
  closer on component tokenization (Toast, Input in the library); the website
  is closer on the visual principles (home-v4, local-visibility); the shared
  packages are furthest (`INFERRED`).
- What would make parity durable? A single semantic token source exported to
  both sides, a component taxonomy with one name per job, and either Code
  Connect or a documented alternative. See `TOKEN_COMPONENT_CONTRACT_v1.md`
  (`PROPOSED`).
