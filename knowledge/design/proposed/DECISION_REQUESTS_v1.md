# Decision Requests v1

Status: PROPOSED / AWAITING FOUNDER OR NAMED-OWNER DECISION

Evidence cutoff: 2026-08-19. Each request names the exact conflict, a
recommended default (founder requests) or a proposed direction (design-owner
and technical-validation requests), the consequence, the owner, and the
evidence still needed. A default or direction is not a decision;
nothing becomes canonical until the owner records the answer in
`DECISIONS_LOG.md`. The conflict paragraphs summarize evidence whose home is
the [drift register](../../../research/design/2026-08-unified-design-discipline/DRIFT_REGISTER.md)
and the [evidence ledger](../../../research/design/2026-08-unified-design-discipline/EVIDENCE_LEDGER.md);
messaging decisions live separately in
[DECISION_REQUESTS_v2.md](../../messaging/proposed/DECISION_REQUESTS_v2.md),
and the two sets meet in the task router [TASK_ROUTER.md](../../TASK_ROUTER.md).

## DR-D01: Is the rainbow wave (and lowercase wordmark) current identity or legacy-only for new surfaces?

Conflict: the workspace `AGENTS.md` and `START_HERE.md` call the wave and
lowercase wordmark legacy references that need explicit human approval for
new use. `DESIGN_PRINCIPLES_2026.md` (Part II, P3, P10) calls the same
assets the identity bond required on every surface. `origin/main` contains
and references them: the website header default `Brand.logoUrl` in
`apps/omnipulse/src/brand/brand.ts` is `/new-logo.png` (the wave), both apps
contain `obenan-logo-{dark,light}.svg` byte-identical to the workspace's
`legacy-logo-{dark,light}.svg`, the dashboard `feed/brand.ts` imports the
wave-plus-wordmark SVGs, and Figma contains the `logo` component placed 107
times in the V1 dashboard file. Deployment and live state were not verified. The Figma covers use a dark `#121215` surface with Bold type and a
different wave treatment, which suggests a newer identity exploration exists
but it was not enumerable through the connector.

Recommended default: treat the wave mark and wave-plus-wordmark SVGs that
`origin/main` already references as the current identity for all surface families, reused from one
approved asset path per app, never redrawn; treat the 3D rendered tube wave
(`Obenan-Wave-Reference.pdf`) and any cover-style dark identity as
exploratory until the Brand file is reviewed. Amend the workspace `AGENTS.md`
wording from "legacy" to "current, reuse-only" if Seven confirms.

Consequence: agents stop treating the logo that `origin/main` references as forbidden; the
identity token family in the contract gets one source; no surface changes.

Owner: Seven, with the original brand stakeholders.

Evidence still needed: Seven's statement; a read of the Brand file's 111
frames (cover only was reachable); confirmation of which PNG/SVG is the
approved lockup for light and dark.

## DR-D02: Which Figma file and library become canonical, and what does `DESIGN BETA` mean?

Conflict: the Design Kit (`8QpdzNKUeLPAhBzcUkzeuV`) publishes the library
`Obenan Design Kit` with a `Tokens` collection and about forty components,
labelled "DESIGN BETA / UNIFIED DESIGN LIBRARY". The V1 dashboard file
(`OkXCFToKDIyje58fjdIoXt`) subscribes to it and also publishes its own library
(`V1 - HOME, NAV, ACCOUNTS, SETTINGS, GENERATE REPORT`) and keeps file-local
components (`input_field` 239 instances, `button` 31). The Brand file
(`H3KZZ7qkFhFQLcCxBGtw1j`) is named by the workspace as the current brand
source and has local variables but publishes nothing visible to this seat.
BRAND_EMOTION's human gate (a draft spec) names "Chloe's Figma design system"
as a precondition; the Design Kit and Brand covers carry two contributor
avatars. These names are provenance leads only; neither a cover credit nor a
draft-spec mention proves who maintains a file or holds authority over it.

Recommended default: the Design Kit library becomes the single canonical
component and token library; the V1 file becomes a flows file that subscribes
and stops publishing; the Brand file stays the identity deck and imports
tokens rather than owning them. "BETA" is read as "evolving, not approved"
until the design owner declares a version.

Consequence: one library to search; duplicates must be reconciled (two
buttons, two checkboxes, two inputs); the contract's Figma naming rules apply
to one file.

Owner: Seven names the design owner after the maintainership of each file is
confirmed; no candidate is inferred here. That named owner then decides.

Evidence still needed: who maintains each file today (from Figma file
history or the team, not from cover art); the Design Kit's full page list and
variable values (requires a seat that can enumerate or an exported variables
file); whether the design system the draft spec refers to is one of these
files or a separate artifact.

## DR-D03: Precedence between Brand file, Design Kit, dashboard flow file, workspace documents, and code

Conflict: `DESIGN_PRINCIPLES_2026.md` states its own precedence (brand book
wins identity; principles win product UI) but does not rank the Figma files
or code; `START_HERE.md` ranks identity, product UI, website, emotion,
imagery, and names "the current production codebase and release evidence" as
implementation truth without ranking it against Figma; `origin/main` code and
Figma disagree on values and both disagree with the principles on blur and
spectrum.

Recommended default: adopt the contract's precedence table (founder decisions;
brand book and the logo SVG reused from the approved source path (bytes
verified; authority under DR-D01); Design Core once approved; token source of
truth; component contract; BRAND_SYSTEM and BRAND_EMOTION; flow files;
verified code at the inspected Git reference). Verified code is authoritative
for current implementation behavior, compatibility, routes, and dependencies
at the inspected Git reference; it is not, by itself, approval of design
intent, brand direction, deployment, or live state. Approved governance
defines intended direction; verified code defines the compatibility reality a
migration starts from; neither proves deployment or live state.

Consequence: every future disagreement has a resolution path; drift items can
be closed against a ranked source.

Owner: Seven.

Evidence still needed: none beyond Seven's confirmation; if Seven ranks
differently, the contract's section 1 is rewritten.

## DR-D04: Helvetica Neue licensing, hosting, weights, and fallback behavior

Conflict: the brand book and DESIGN_PRINCIPLES lock Helvetica Neue (Light
display, Regular body). Both apps self-host OTF files (dashboard 17 files,
about 7.3 MB, weights 100-900 plus italics; website six weights via
`next/font/local`). No license record was found in the inspected tree. Emails
and backend PDFs fall back to Helvetica/Arial. BRAND_EMOTION requires the
choice to be reconciled with licensing, performance, and fallback.

Recommended default: keep Helvetica Neue as the family; obtain or document
the web license; bundle only Light and Regular (optionally Medium for controls)
as subsetted WOFF2 through one loader per app; define the fallback stack
(`Helvetica, Arial, sans-serif`) and accept it for email and PDF; remove
unused weights.

Consequence: smaller font payload; a recorded license; identical type roles
across surfaces. If licensing cannot be confirmed, a separate decision is
needed on a metric-compatible alternative, which this run does not recommend
without Seven.

Owner: Seven, with whoever holds the brand and legal records.

Evidence still needed: the license document or purchase record; measured
font payload per app; a list of routes whose code in `origin/main` uses Bold
or heavier weights.

## Design-owner and technical-validation requests (DR-D05 to DR-D09)

The five requests below are proposed directions, not founder-ready final
values. Each needs rendered visual comparisons, contrast testing where color
is involved, and validation by the design owner whom Seven names after
maintainership is confirmed. Seven ratifies after that validation, not before.
Numbers in these requests are candidates taken from named sources so the
comparison has something to compare; they are not defaults to implement.

## DR-D05: Proposed direction for ink, canvas, secondary text, link, hairline, and status colors

Conflict: six near-blacks (`#000000`, `#0A0A0A`, `#0F0F14`, `#141414`,
`#242424`, `#1F2A36`), four blues (`#4470DC`, `#598AFF`, `#0066FF`, `#00BDEA`,
plus `#335FFF` on covers), two canvas pairs (`#F7F7F7`/`#F0F0F0` website,
`#F5F5F5` product), two hairlines (`#E6E6E6`, `#D6D6D6`), three reds
(`#FF4A4A`, `#DE3136`, `#E03A3A`), two secondary greys (`#666666`,
`#757575`, plus home-v4 `#55555C`). DESIGN_PRINCIPLES names `#0F0F14` as the
product dark and the brand greyscale; Figma and the theme use `#242424` and
`#757575`.

Proposed direction (candidates, not final values): ink `#0F0F14` (DESIGN_PRINCIPLES, home-v4); canvas
`#F7F7F7` with `#F0F0F0` alternate and `#FFFFFF` islands for both website and
product (product's `#F5F5F5` becomes an alias during migration); secondary
text `#666666` (brand B-60) with `#999999` muted; hairline `#E6E6E6` (brand
B-10); link `#598AFF` (brand Blue Dark) unless contrast tests on white fail,
in which case `#4470DC`; success `#1BC47D`; warning `#FFAD4A` for marks and a
darker amber for text; error `#FF4A4A` for marks and a darker red for text;
retire `#0066FF` and `#335FFF`.

Consequence: the product shifts from alpha-black greys to solid brand greys on
white (visually near-identical on white), the website keeps its current
values, the Figma `Tokens` values are updated to match; contrast tests decide
the text variants.

Owner: the design owner Seven names validates; Seven ratifies after validation.

Evidence still needed before any value is final: contrast results (AA text and UI) for every proposed pairing on every allowed canvas; rendered side-by-side comparisons at 375 and 1440; a
rendered comparison of `#242424` versus `#0F0F14` text at body sizes on the
product canvas; the Design Kit's intended values for `text-default` and
`surface-*`.

## DR-D06: Proposed direction for backdrop blur and glass

Conflict: DESIGN_PRINCIPLES P1 and P3 refuse `backdrop-filter` chrome except
a single modal that pauses the surface. Figma inputs use `backdrop-blur 30px`
and a layered "Shadow 1" effect; the My Account side sheet blurs the page; the
website `.logo-radial-gradient` and the dashboard navbar use blur; 172
backdrop occurrences exist on main.

Proposed direction (pending rendered comparison and design-owner validation): allow blur only on the scrim of `Sheet`/`Dialog` (the
single-decision exception) and on the identity mark's radial treatment if
Seven wants it; remove blur from inputs, navigation, cards, and buttons;
elevation comes from hairlines and the ink-tinted shadow ladder.

Consequence: onboarding and account fields become flat white on canvas;
Figma `input_field` and the `Shadow 1` effect are revised; the dashboard
navbar loses its blur.

Owner: the design owner Seven names validates; Seven ratifies after validation.

Evidence still needed: a rendered before and after of the Create Account
frame without blur; confirmation from product design that the blur carried no
meaning beyond style.

## DR-D07: Proposed direction for spectrum-gradient use by surface family

Conflict: DESIGN_PRINCIPLES limits the spectrum to the logo wave, the
marketing capsule motif, and rare brand moments; the brand book lists it for
"Logo & Buttons". In evidence: theme utilities `gradient-1/2`,
`text-gradient-1…5`; Figma welcome headline and progress bar; dashboard
`.download-report-button` text; website `.chat-bubble` and `.hint-bubble`
washes and the `.donut` conic KPI; obenan-ui `connect` button text; the
home-v4 "current" accent is amber, not the spectrum.

Proposed direction, by family (Seven sets the allowance policy; the design owner validates each rendered application before it binds): website and campaign: logo plus at most one
approved brand moment per page; free experiences: logo only; onboarding:
logo plus the first-run welcome headline once (keep `12150:41867`'s
headline, retire the spectrum progress bar); daily product: logo only;
executive view and report: logo only; presentation and sales-deck usage:
UNRESOLVED pending inspection of the Gleb archive and representative current
sales decks (no presentation rule is proposed from evidence this run did not
inspect; email and in-product communication follow the daily-product row).
Retire spectrum text on buttons, chat washes, donut KPIs,
and the `text-gradient-*` utilities as defaults (keep one named utility for
the approved moments).

Consequence: the four-stop gradient stops being a generic accent; several
details that `origin/main` contains change through specs.

Owner: Seven.

Evidence still needed: Seven's view on the welcome headline and on whether a
campaign "capsule" motif still exists as an approved asset.

## DR-D08: Proposed direction for radius roles

Conflict: NextUI theme 8/12/14; Figma 20 for fields and cards, 40 pill, 16
"radius-full"; BRAND_SYSTEM 24-32 boards; 1,301 arbitrary radius classes.

Proposed direction (candidate numbers for comparison, not final values): roles `pill` (9999), `field` 12, `tile` 16, `board` 24
(32 allowed for hero boards on the website), `none` for ledgers and seams;
surface families choose roles, not numbers.

Consequence: Figma fields move from 20 to 12 or 16 (a visible but small
change); NextUI radius aliases map to roles.

Owner: the design owner Seven names validates and decides.

Evidence still needed: a side-by-side of field radius 12/16/20 on the product
canvas at 375 and 1440.

## DR-D09: Proposed direction for the icon source

Conflict: react-icons across 18 families in the dashboard and 12 on the
website, lucide-react in 23 files, 149 custom SVGs in obenan-ui, Figma `icon`
and `icons/color` sets; DESIGN_PRINCIPLES says Lucide is not the primary
iconography.

Proposed direction (pending glyph inventory and design-owner validation): one curated Obenan icon set in Figma exported as SVG
and wrapped by a single `Icon` component; seed it from the existing Figma
`icon` set; allow one third-party set only as a fallback behind the wrapper.

Consequence: migration by page family; visible consistency in the product.

Owner: the design owner Seven names, with the frontend lead, validates and decides.

Evidence still needed: inventory of glyphs actually used (an automated
import scan), and the Figma `icon` set's coverage.

## DR-D10: Does the Figma plan or workflow change to support durable parity?

Conflict: Code Connect requires an Organization or Enterprise plan; both
plans on this seat are Starter and Pro; the connector could not enumerate
pages beyond the cover; no token export exists in the repository.

Recommended default: decide on cost, not design: if an Organization plan is
affordable, take Path A (Code Connect plus Dev Mode) because it makes the
MCP return real components; otherwise adopt Path B (tokens JSON in the repo
imported to Figma variables, Storybook as the reference, script checks for
name parity, monthly screenshot diff) and revisit in two quarters.

Consequence: Path A costs money and needs an admin; Path B costs maintenance
and discipline. Either requires the single library and token file first.

Owner: Seven (budget) with the frontend lead (workflow).

Evidence still needed: plan pricing and seat count; confirmation that the
page-listing limit is a connector limit, not a file structure.

## DR-D11: Token and component ownership in code

Conflict: `obenan-theme` is a NextUI plugin config with value names;
`obenan-ui` is on React 18 and NextUI while the dashboard has begun HeroUI (2
files) and the website runs React 19; the website's strongest tokens are
page-scoped (`home-v4.css`); 389 dashboard files import obenan-ui; no owner
is named for any of it.

Recommended default: `packages/obenan-theme` becomes the token package
(JSON, CSS variables, Tailwind preset) owned jointly by the design owner and
the frontend lead; `packages/obenan-ui` owns contract components for React 18
consumers; the website may implement the same contract locally on React 19
until obenan-ui supports both; no page-scoped token sets after migration;
aliases keep the 389 import sites working.

Consequence: a named reviewer for every token and component change; a codemod
budget for the dashboard.

Owner: Seven names the frontend lead and the design owner.

Evidence still needed: the frontend lead's view on the HeroUI migration
timeline and on React 18/19 support in obenan-ui.

## DR-D12: Which product and website surfaces become the first reference implementation?

Conflict: the homepage (home-v4) already implements the principles but with
private tokens; onboarding is the one journey that crosses website and
product and already matches Figma by value; the dashboard's Indexability,
Discoverability, and Reputation pages share names with the three lenses but
were not inspected for primitives; ObiGEO implements the evidence primitives
elsewhere.

Recommended default: three reference surfaces, in order: (1) the onboarding
journey from `/get-started` through dashboard login and first-run welcome,
because it crosses the seam and has Figma, code, and the hand-off already
aligned; (2) the homepage, by moving `.hv4` properties onto the shared tokens
without visual change; (3) one product ledger surface (Reviews or Tasks,
whichever shows claim states most often) to land `StateMark`, `Ledger`, and
`ActionGrip`.

Consequence: the contract gets tested on a journey, a flagship page, and a
dense screen before anything else migrates.

Owner: Seven chooses; the frontend lead sequences.

Evidence still needed: which dashboard page has the highest daily use and the
most "waiting for approval" states; confirmation that ObiGEO primitives can
be reused under the whole-brain license and build.

## Summary tables

### Founder decisions, in recommended order

| Order | ID | Decision | Recommended default | Why this order |
| --- | --- | --- | --- | --- |
| 1 | DR-D03 | Source precedence | Contract table; approved governance defines direction, verified code defines compatibility reality at the inspected reference, neither proves deployment | Every later answer needs a ranked home |
| 2 | DR-D01 | Wave and wordmark status (bytes verified; authority and usage unresolved) | Current identity, reuse-only, one asset path per app | Identity gates every surface and the token family |
| 3 | DR-D02 | Canonical Figma file and library; meaning of BETA; naming of the design owner after maintainership is confirmed | Design Kit library canon; V1 file subscribes; BETA = evolving | Unblocks every design-owner validation below |
| 4 | DR-D04 | Helvetica Neue licensing and fallback | Keep, license, bundle Light/Regular, one loader, documented fallback | Typography is in every surface; license is a release blocker |
| 5 | DR-D07 | Spectrum allowance policy by surface family | Logo everywhere; one brand moment on website pages and onboarding welcome; nowhere else in product, free experiences, executive views, or reports (rendered applications validated by the design owner); presentation and sales-deck usage UNRESOLVED pending the Gleb archive and current-deck inspection | Policy must exist before values are tuned |
| 6 | DR-D11 | Code ownership (named frontend lead, named design owner) | theme = tokens (joint), obenan-ui = components (React 18), website local on React 19 | Names the people who validate DR-D05 to DR-D09 |
| 7 | DR-D10 | Figma plan or workflow for parity | Path A if affordable, else Path B | Budget decision; needs DR-D02 first |
| 8 | DR-D12 | First reference surfaces | Onboarding journey, homepage tokens, one product ledger | Sequenced after owners exist |

### Design-owner and technical-validation decisions (proposed directions, not final values)

| ID | Decision | Proposed direction (candidates for comparison) | Validation required before Seven ratifies |
| --- | --- | --- | --- |
| DR-D05 | Ink, canvas, text, link, hairline, status values | candidates `#0F0F14`, `#F7F7F7`/`#F0F0F0`, `#666666`/`#999999`, `#E6E6E6`, `#598AFF` or `#4470DC`, brand status hues | AA contrast tests for every pairing; rendered comparisons at 375 and 1440; named design-owner validation |
| DR-D06 | Backdrop blur | scrim of the single decision sheet only | rendered before/after of the Create Account frame; product-design confirmation; named design-owner validation |
| DR-D08 | Radius roles | candidates pill / field 12 / tile 16 / board 24-32 / none | side-by-side of 12/16/20 at 375 and 1440; named design-owner validation |
| DR-D09 | Icon source | one curated set behind one `Icon` | glyph inventory scan; Figma `icon` set coverage; design owner with frontend lead |
