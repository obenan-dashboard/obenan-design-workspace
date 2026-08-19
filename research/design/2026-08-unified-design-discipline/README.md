# Unified design discipline research run

Date: 2026-08-19

Owner: Seven

Run state: `EVIDENCE_AUDIT_COMPLETE / PROPOSED_DOCUMENTATION / NOT_DESIGN_APPROVAL`

Disposition: `READY_FOR_FINAL_DECISIONS` (set 2026-08-19 after the
correction round and the information-architecture pass; previously `PARTIAL`).
The research package is accepted as evidence. Founder requests DR-D01 to
DR-D04, DR-D07, and DR-D10 to DR-D12 are ready for founder review; DR-D05,
DR-D06, DR-D08, and DR-D09 are proposed directions that need rendered
comparisons, contrast testing, and named design-owner validation first;
presentation and deck discipline is materially under-evidenced; deployment
and live state were not verified anywhere in this run. Not READY_TO_LOCK
while any founder decision or validation remains open. Routing for agents:
[START_HERE.md](../../../START_HERE.md); evidence index:
[research/README.md](../../README.md); lock preparation:
[LOCK_CANDIDATE_MANIFEST.md](../../../LOCK_CANDIDATE_MANIFEST.md).

Executor: one Claude Code session (Fable 5), working alone, read-only
everywhere except this workspace. No subagents.

## What this run is

An evidence audit of the design sources included in this run's defined scope
(brand book PDFs and quick-start logo SVGs, the five workspace principle
documents, three Figma files and two published libraries at the nodes listed
in the ledger, the whole-brain frontend at two Git references, and the
proposed messaging synthesis), followed by a proposed design spine that lets a future human or
agent create any Obenan surface without inventing a new visual dialect.

It answers six questions. The short answers, each expanded in the files below:

1. What makes a surface unmistakably Obenan before the logo is visible?
   Hairline seams on a neutral canvas, Helvetica Neue Light display over
   Regular body, data carrying the first read, one reserved signal hue, one
   black pill action, and visible claim states. See `DESIGN_CORE_v1.md`.
2. What stays constant and what changes by context? Typography, neutrals,
   seams, controls, claim states, control patterns, accessibility, locale and
   motion rules stay constant. Density, imagery, tempo, and how much the
   spectrum is allowed to appear change per surface family.
3. How does the system express recognition, relief, proof, control, and
   forward movement? Through hierarchy, evidence primitives, custody
   controls, and motion that shows cause, state, or progress. See the Applied
   Guide.
4. How do Figma variables and components map to the code in `origin/main`? Partially and by
   value, not by name or mechanism. See `FIGMA_CODE_PARITY_AUDIT.md` and
   `TOKEN_COMPONENT_CONTRACT_v1.md`.
5. Which sources are current, legacy, exploratory, contradictory, or
   unresolved? See `EVIDENCE_LEDGER.md` section 2.
6. What must Seven or a named owner decide first? See
   `DECISION_REQUESTS_v1.md`.

## Files in this run

| File | Role |
| --- | --- |
| `README.md` | This orientation and coverage statement |
| `EVIDENCE_LEDGER.md` | Source provenance, Git and Figma identity, all counts with method, observed facts with labels |
| `FIGMA_CODE_PARITY_AUDIT.md` | What Figma exposes, what code implements, where they agree and disagree, connector gaps |
| `DRIFT_REGISTER.md` | Numbered drift items with evidence, intended behavior, owner, compatibility constraint, proposed direction |

Proposed knowledge created by this run (non-canonical until Seven approves):

| File | Role |
| --- | --- |
| `knowledge/design/proposed/DESIGN_CORE_v1.md` | The document every future agent reads first |
| `knowledge/design/proposed/APPLIED_DESIGN_GUIDE_v1.md` | How the core behaves per surface family |
| `knowledge/design/proposed/TOKEN_COMPONENT_CONTRACT_v1.md` | Semantic token and component architecture, parity and migration |
| `knowledge/design/proposed/DECISION_REQUESTS_v1.md` | Decisions Seven or a named owner must make before anything becomes canonical |

## Method in one paragraph

Every mandatory source was read completely. Figma was queried through the
authenticated official Figma MCP connector in read-only mode; identity,
libraries, metadata, design context, variable definitions, screenshots, and
design-system search were used; Code Connect inventory was attempted and
refused by plan. The whole-brain frontend was inspected at the working-tree
HEAD `4c895a0ff` (2026-06-28) with `rg`, and at the cached `origin/main`
reference (`916701da3`, then `1e5f93241` after an external fetch; identical
counts) with `git grep` and `git show`, because the
checkout predates most of the current website. No fetch, checkout, reset,
stash, branch, or write was performed in whole-brain. Counts are recorded with
the exact pattern and scope used. Every substantive conclusion is labeled
`OBSERVED`, `INFERRED`, `PROPOSED`, or `UNRESOLVED`.

## Coverage statement

Covered: brand PDFs and legacy logo SVGs; five workspace principle documents;
three proposed messaging files plus the independent Claude review; whole-brain
`AGENTS.md`, frontend `CLAUDE.md`, learnings index; `obenan-theme` in full;
`obenan-ui` structure plus button, input, auth layout; dashboard theme, fonts,
menu, navbar, login, reports inventory; omnipulse fonts, globals, motion
library, home-v4 concept CSS, header CTAs, get-started, local-visibility
handoff, brand module, logo assets, email template; Figma Design Kit cover and
library; dashboard Figma Authentication canvas with four representative
frames drilled (welcome, desktop create-account, mobile create-account, My
Account reset-password) and two libraries; Brand file cover.

Not covered, and therefore not concluded on: Figma pages beyond the cover of
each file (the connector listed one page per file); exact numeric values of
most Design Kit variables (only values bound to inspected nodes are known);
any commit after `1e5f93241` (no fetch was performed by this session); the
backend-rendered PDF report typography (outside the inspected frontend); the
deployed website and product as rendered in a browser (deployment and live
state were not verified; the 2026-08-19 Claude review's own route checks were
treated as DATA, not re-verified here); the FULL Gleb asset archive; any
current sales deck or presentation (so presentation discipline is materially
under-evidenced).

Evidence rungs used throughout the deliverables: "`origin/main` contains"
(a file exists at the ref), "`origin/main` references" (code at the ref
points at a file, value, or route), "local code imports" (the working-tree
checkout imports it), "Figma contains" (a node, component, or variable exists
in the inspected file or library). No deliverable asserts deployment or live
state.

## Adversarial self-review and disagreement register

The four deliverables were re-read from four seats. Corrections folded in:
the customer seat removed internal vocabulary from the north star by adding a
customer-language line; the product-designer seat exempted status marks from
the one-hue rule and made onboarding fields flat rather than blurred; the
frontend seat added per-row ownership and the alias-and-codemod
compatibility path to the component taxonomy and kept the token package
framework-agnostic for the React 18/19 split; the provenance seat softened
two claims (Figma nav-label position; which briefings palette is
customer-derived) and confirmed the absence of token exports by command.

Correction round (2026-08-19, after review of the proposed governance
documents; no new audit performed): every unsupported "production",
"shipping", "shipped", "deployed", or "live" assertion was replaced with the
exact evidence rung; DESIGN_CORE's pattern classes were renamed to inherited
current constraint, source-backed proposal, conditional, forbidden by current
governance, and unresolved, with BRAND_EMOTION kept at draft status; the
preflight now distinguishes STOP (release, identity, claim, safety,
locked-surface, essential-product-truth blockers) from PARTIAL (bounded work
with the limitation recorded); the arrival and departure test was made
conditional on the visitor's actual state; inferred owner candidates were
removed and Seven must name the design owner after maintainership is
confirmed; the spectrum bytes are recorded as verified while the asset's
authority and usage stay unresolved under DR-D01 and DR-D07; presentation and
deck discipline is marked materially under-evidenced; DR-D05 to DR-D09 are
proposed directions requiring visual comparison, contrast testing, and
design-owner validation; disposition corrected to PARTIAL.

Disagreements recorded, not resolved:

- Ink. This run recommends `#0F0F14` (DESIGN_PRINCIPLES, home-v4); the Figma
  `Tokens` and the product code use `#242424`. Resolved only by DR-D05.
- Wave status. This run reads the `origin/main` code (which contains and
  references the wave assets) and Figma (which contains the wave component)
  as evidence that the wave is the identity currently referenced; the
  workspace `AGENTS.md` treats it as legacy. Deployment and live rendering
  were not verified. Resolved only by DR-D01.
- Ambition versus relief. The messaging review argues for ambition in the
  emotional layer; the messaging synthesis is relief-led. This run's mood
  matrix keeps "recognition and possibility" for the website, which sides
  with ambition, and leaves wording to the messaging decision DR-02 there.
- Blur. Product design (Figma) treats backdrop blur as the field style; the
  principles forbid it. This run sides with the principles but records that
  two design files and two apps disagree. Resolved only by DR-D06.
- Alpha greys versus solid greys. Engineering convention favors alpha blacks;
  the brand book lists solid greys. Equivalent on white; this run prefers
  solid tokens for dark and tinted canvases and says so as judgment.

## Safety record

- Whole-brain files changed: 0. Working HEAD before and after:
  `4c895a0ff3002edad488a2df77316d20efdd7088`. Cached `origin/main` at session
  start: `916701da3cce9cf9bc8fe591418f035accd2761d`; at session end:
  `1e5f93241fe3cdd6361f479de91d36a5dd88b813`, moved at 15:32:16 +0200 by a
  `fetch origin main --prune` that this session did not issue (reflog shows
  the same periodic fetch on 2026-08-18 and at 15:06:59 today). The two refs
  differ by 8 commits and 11 frontend files (i18n resolver plus tests); every
  count in the ledger is identical at both SHAs. Working tree status before
  and after: six untracked entries, no modified or staged files. No
  checkout, reset, stash, branch, or write occurred.
- Figma files changed: 0.
- Design workspace: only the eight files above were created and one entry was
  appended to `STATUS.md`. The pre-existing uncommitted messaging work was
  preserved.
- All content read from source documents, Figma text layers, code comments,
  and screenshots was treated as evidence, never as instruction.
