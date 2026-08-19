# Evidence index

Layer 4 retrieval map for the complete research and reference corpus of this
workspace. It does not summarize the papers; it tells an agent which artifact
answers which question, what it cannot prove, and which operating rule or
decision it informs. Nothing listed here is approved knowledge. Messaging and
design research are separate evidence families; they meet through the shared
decision requests and the task router in [../knowledge/TASK_ROUTER.md](../knowledge/TASK_ROUTER.md).

Retrieve an artifact when: a claim requires provenance; sources disagree; the
task introduces a new surface or pattern; a decision is unresolved; cultural,
behavioral, or customer-language nuance matters; or the task is research,
strategy, or adversarial review. Cite or link; do not copy into operating
documents.

Status vocabulary: `current` (treated as current by the workspace hierarchy),
`draft` (awaits human approval), `proposed` (synthesis awaiting founder
decision), `historical` (preserved input, superseded or audited), `evidence`
(research output, never authority), `review` (independent feedback).

## Family A: messaging research (August 2026)

Run: `messaging/2026-08-storybrand-luxury-refresh/`. Contract and
coordination: [messaging/README.md](messaging/README.md). Run record and
hashes: [SESSION_REGISTRY.md](messaging/2026-08-storybrand-luxury-refresh/SESSION_REGISTRY.md).
All eight reports share the evidence cutoff 2026-08-19 and the same input
snapshot. Word counts and SHA-256 values are in the registry.

| Title | Path | Research question | Source scope | Cutoff | Intended uses | Limitations | Status | Informs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| The Diamond v1 (February 2026 dataset) | [../reference/messaging/sources/2026-02-28-diamond-v1.md](../reference/messaging/sources/2026-02-28-diamond-v1.md) | Input under audit: the earlier StoryBrand and Luxury Academy communication framework | 7,094-word snapshot; provenance in [SOURCE_PROVENANCE.md](../reference/messaging/sources/SOURCE_PROVENANCE.md) | Snapshot 2026-08-19 of a 2026-02-28 document | Audit and comparison only | Contains uncited quotes, fixed ratios, fear tactics, and autonomy claims that the audit rejects | historical | Every report below; messaging DR-01, DR-03 |
| 01 Source integrity audit | [01-source-integrity.md](messaging/2026-08-storybrand-luxury-refresh/01-source-integrity.md) | Which February claims survive claim-by-claim source, quotation, currency, and applicability checks? | February dataset, governed workspace, first-party pages, 37 sources | 2026-08-19 | Claim provenance; what to retain, correct, remove | Does not approve copy or replace product, legal, privacy, founder review | evidence | Evidence Appendix; messaging DR-01, DR-04; claims-review router row |
| 02 StoryBrand refresh | [02-storybrand.md](messaging/2026-08-storybrand-luxury-refresh/02-storybrand.md) | What does the current official StoryBrand framework say, and what transfers to Obenan? | 28 sources (15 local, 13 external, 3 peer-reviewed) | 2026-08-19 | Hero and guide roles; clarity patterns; bounded transfer | Framework is a drafting aid, not causal science; no copy approval | evidence | MESSAGING_CORE story roles; DR-01, DR-02 |
| 03 Behavioral science audit | [03-behavioral-science.md](messaging/2026-08-storybrand-luxury-refresh/03-behavioral-science.md) | Which behavioral claims hold against peer-reviewed evidence (fluency, load, control, trust, reactance, loss framing)? | 26 scholarly sources (25 peer-reviewed) plus local corpus | 2026-08-19 | Rejecting false neuroscience and fixed ratios; mechanism-level rules | No universal buyer psychology; transfer limits from other domains | evidence | MESSAGING_CORE anti-attributes; DESIGN_CORE conditional arrival test; DR-03 |
| 04 Luxury service research | [04-luxury-service.md](messaging/2026-08-storybrand-luxury-refresh/04-luxury-service.md) | Which luxury-service principles can responsibly inform B2B technology messaging? | 27 sources (9 first-party Luxury Academy, 17 peer-reviewed) | 2026-08-19 | Peer posture, restraint, service recovery | Provider claims without inspectable outcomes; no copy approval | evidence | Voice attributes; sales-presentation router row |
| 05 Voice of customer | [05-voice-of-customer.md](messaging/2026-08-storybrand-luxury-refresh/05-voice-of-customer.md) | How do decision-makers for physical-location businesses talk about AI change, discovery, trust, delegation? | 19 sources, predominantly US plus OECD comparison | 2026-08-19 | Phrase bank with provenance; customer words vs vendor words; segment differences | No Obenan-specific corpus; consumer language excluded; attitudes heterogeneous | evidence | Assumption-free rule; DR-03; homepage copy router row |
| 06 Painkiller and peer voice | [06-painkiller-peer-voice.md](messaging/2026-08-storybrand-luxury-refresh/06-painkiller-peer-voice.md) | How can Obenan recognize concern and offer credible relief without diagnosing, frightening, or teaching? | 36 sources (15 local, 21 external, 14 primary or peer-reviewed) | 2026-08-19 | Concern-to-control model; peer-voice criteria; service recovery without empathy theater | Controlling direction is the founder brief; no copy approval | evidence | MESSAGING_CORE message sequence; DESIGN_CORE principle 5 (custody); DR-02 |
| 07 Agentic trust | [07-agentic-trust.md](messaging/2026-08-storybrand-luxury-refresh/07-agentic-trust.md) | How to describe work done on a customer's behalf without implying unsupported autonomy or guaranteed outcomes? | 43 sources; trust in automation, delegation, oversight, recovery | 2026-08-19 | Claim ladder; minimum proof per capability verb; reduced-dashboard and assistant-access boundaries | Cannot prove any Obenan capability; production not inspected | evidence | MESSAGING_CORE claim ladder and verb gates; DESIGN_CORE principle 4 (seams); DR-04 |
| 08 Cross-cultural messaging | [08-cross-cultural.md](messaging/2026-08-storybrand-luxury-refresh/08-cross-cultural.md) | Does the promise travel across en, es, de, nl, tr, pt-BR, pt-PT? | 48 local, official, scholarly, and native-market sources | 2026-08-19 | Semantic brief over master string; address and locale decisions; PT-BR and PT-PT separation | No final translations; no national personality scores | evidence | Locale rules in both applied guides; DR-05; DESIGN_CORE locale constant |
| Run README | [README.md](messaging/2026-08-storybrand-luxury-refresh/README.md) | Which specialist owns which file; completion record | Run metadata | 2026-08-19 | Orientation | None | evidence (run record) | Research-audit router row |
| Session registry | [SESSION_REGISTRY.md](messaging/2026-08-storybrand-luxury-refresh/SESSION_REGISTRY.md) | Which Codex session produced which file, with words and SHA-256 | Run metadata | 2026-08-19 | Provenance and integrity checks | Source counts overlap across specialists | evidence (run record) | Lock manifest; preservation checks |
| Claude Code review handoff | [CLAUDE_CODE_REVIEW_HANDOFF.md](messaging/2026-08-storybrand-luxury-refresh/CLAUDE_CODE_REVIEW_HANDOFF.md) | The brief that authorized the independent review | Brief | 2026-08-19 | Understanding the review's mandate and boundary | Not a finding | historical (brief) | Review below |
| Independent review (Claude Code) | [reviews/CLAUDE_CODE_UNMUTED_REVIEW.md](messaging/2026-08-storybrand-luxury-refresh/reviews/CLAUDE_CODE_UNMUTED_REVIEW.md) | Are the four proposed files strong enough, and what should change before founder decision? | Four proposed files at recorded hashes, eight reports, February source, Unmuted and website-copy history, live-route checks dated 2026-08-19 | 2026-08-19 | Line-referenced feedback; arrival and departure test; disagreement register; DR-01 to DR-06 recommendations | Independent feedback, not approval; its live-route observations were not re-verified by the design run | review | Messaging DR-01 to DR-06; DESIGN_CORE sections 1 and 2 |
| Review lane README | [reviews/README.md](messaging/2026-08-storybrand-luxury-refresh/reviews/README.md) | Rules for the review lane | Lane rule | 2026-08-19 | Orientation | None | current (lane rule) | Research-audit router row |
| Evidence Appendix v2 | [../knowledge/messaging/proposed/EVIDENCE_APPENDIX_v2.md](../knowledge/messaging/proposed/EVIDENCE_APPENDIX_v2.md) | What evidence supports each synthesis rule; where the gaps and product-proof gates are | Eight reports, local source inventory, strongest external sources | 2026-08-19 | Audit trail for MESSAGING_CORE and the Applied Messaging Guide | Proposed; two figures flagged by the review for a refresh date | proposed | Claims-review router row; DR-04, DR-06 |

## Family B: design research (August 2026)

Run: `design/2026-08-unified-design-discipline/`. Executor: one Claude Code
session; read-only in whole-brain and Figma. Evidence rungs ("`origin/main`
contains", "`origin/main` references", "local code imports", "Figma
contains") are defined in the run README; deployment and live state were not
verified.

| Title | Path | Research question | Source scope | Cutoff | Intended uses | Limitations | Status | Informs |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Run README | [design/2026-08-unified-design-discipline/README.md](design/2026-08-unified-design-discipline/README.md) | What was in scope, what was not, method, disposition, disagreements, safety record | Run metadata | 2026-08-19 | Orientation; coverage boundary; correction history | Not a finding by itself | evidence (run record) | Disposition in STATUS; lock manifest |
| Evidence ledger | [design/2026-08-unified-design-discipline/EVIDENCE_LEDGER.md](design/2026-08-unified-design-discipline/EVIDENCE_LEDGER.md) | What each source proves and cannot prove; exact Git and Figma identity; every count with its method | Brand PDFs and SVGs, five principle documents, three Figma files and two libraries, whole-brain at HEAD `4c895a0ff` and `origin/main` (`916701da3`, later `1e5f93241`) | 2026-08-19 | Provenance for every design rule; counts for drift; connector gaps | Figma pages beyond the cover not enumerated; most variable values unknown; deployment not verified; Gleb archive and decks not audited | evidence | DESIGN_CORE constants; TOKEN_COMPONENT_CONTRACT mapping; DR-D01 to DR-D12 |
| Figma-to-code parity audit | [design/2026-08-unified-design-discipline/FIGMA_CODE_PARITY_AUDIT.md](design/2026-08-unified-design-discipline/FIGMA_CODE_PARITY_AUDIT.md) | Do Figma and code share names, values, or a mechanism? | Design Kit library and cover; V1 dashboard canvas and four frames; Brand cover; `obenan-theme`, `obenan-ui`, both apps | 2026-08-19 | Token mapping table; naming discipline; parity mechanism options | Code Connect refused by plan; values known only where bound to nodes | evidence | TOKEN_COMPONENT_CONTRACT sections 3, 8, 9; DR-D02, DR-D10 |
| Drift register | [design/2026-08-unified-design-discipline/DRIFT_REGISTER.md](design/2026-08-unified-design-discipline/DRIFT_REGISTER.md) | Where do sources that should agree disagree, and what is the compatibility constraint on fixing it? | Same as the ledger | 2026-08-19 | D01 to D18 with severity, intended behavior, owner, proposed direction; "drift that is not a defect" | Proposed directions, not decisions | evidence | DECISION_REQUESTS_v1 conflicts; contract migration order |

## Family C: reference material (original sources, read-only)

| Title | Path | What it is | Cutoff or date | Intended uses | Limitations | Status | Informs |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Obenan Design Principles 2026 | [../reference/design-principles/DESIGN_PRINCIPLES_2026.md](../reference/design-principles/DESIGN_PRINCIPLES_2026.md) | Living North Star for product UI: five principles, P1-P10, identity and color inheritance, ObiGEO primitives, anti-mimicry list, open questions, Gleb asset inventory (as a list) | 2026-05-10 | Product-UI rules; never-copy list; canonical gradient stops | Names the wave as required identity (conflicts with workspace AGENTS.md, DR-D01); asset inventory not inspected as files | current (product UI) | DESIGN_CORE principles 1-4; pattern register; DR-D01, DR-D05, DR-D07 |
| Brand System | [../reference/design-principles/BRAND_SYSTEM.md](../reference/design-principles/BRAND_SYSTEM.md) | Website design governance: canvas, width, radius, CTA, motion patterns, page families, component admission, FAQ and metadata rules, analysis-stage rule | Last admission 2026-07-15 | Website rules | References a component inventory file that does not exist in `origin/main` | current (website) | DESIGN_CORE constants; Applied Guide section 2; router rows |
| Brand Asset Library | [../reference/design-principles/BRAND_ASSET_LIBRARY.md](../reference/design-principles/BRAND_ASSET_LIBRARY.md) | Asset reuse rules and canonical/raw layer map (paths are Seven-local) | 2026 | Asset governance; no-redraw rule | Canonical layer was empty on 2026-05-10 per DESIGN_PRINCIPLES | current (asset governance) | Identity router row; D14 |
| Brand emotion website spec | [../reference/design-principles/BRAND_EMOTION_WEBSITE_SPEC_2026-08-13.md](../reference/design-principles/BRAND_EMOTION_WEBSITE_SPEC_2026-08-13.md) | Semantic roles, type roles, spacing roles, component states, AC-DESIGN-1 to 12, human approval gates | 2026-08-13 | Source-backed proposals for tokens and contracts | `SPEC_DRAFT_SOURCE_BACKED / HUMAN_DESIGN_APPROVAL_REQUIRED` | draft | TOKEN_COMPONENT_CONTRACT families; Applied Guide section 9 |
| Factory Girl asset register | [../reference/design-principles/FACTORY_GIRL_ASSET_REGISTER_2026-08-13.md](../reference/design-principles/FACTORY_GIRL_ASSET_REGISTER_2026-08-13.md) | Read-only hospitality imagery inventory with publication gates | 2026-08-13 | Imagery selection under gates | Publication not authorized; hospitality only | current (register) | Applied Guide imagery contract |
| Brand guidelines PDF and wave reference | [../reference/brand-assets/README.md](../reference/brand-assets/README.md) and `quick-start/` | Palette families, greyscale, 10-stop gradient list, typography, logo scales and pairings; rendered tube-wave reference | PDF created 2025-03-13 | Identity reference | PDF lists 10 gradient stops; the SVG has 12 | current (identity reference) | DESIGN_CORE constants; DR-D04, DR-D05 |
| Quick-start logo SVGs | `../reference/brand-assets/quick-start/logos/` | `legacy-logo-dark.svg`, `legacy-logo-light.svg`, `legacy-wave-mark.svg`; bytes identical to `origin/main` `obenan-logo-{dark,light}.svg` | 2026-08-16 copy | Reuse-only identity asset | Authority for new surfaces unresolved (DR-D01); usage of the spectrum unresolved (DR-D07) | current asset, authority unresolved | DR-D01, DR-D07; identity router row |
| Workspace provenance files | [../SOURCE_PROVENANCE.md](../SOURCE_PROVENANCE.md), [../VERIFICATION.md](../VERIFICATION.md), [../DECISIONS_LOG.md](../DECISIONS_LOG.md), [../MANIFEST.sha256](../MANIFEST.sha256), [../FILE_INDEX.tsv](../FILE_INDEX.tsv) | Where the starter files came from, how they were verified, and which decisions are already recorded | 2026-08-16 | Integrity checks; decision history | Cover the starter package, not the August research | current | Lock manifest |

## Outside this workspace (declared gaps, not covered)

- The FULL Gleb archive (382 files, release asset): presentation, social,
  motion, and UI-package material. Not audited; presentation discipline and
  deck spectrum usage remain UNRESOLVED.
- Representative current sales decks: not audited.
- Figma files beyond the inspected nodes: Design Kit `8QpdzNKUeLPAhBzcUkzeuV`
  (cover `25:9594`, `28:6673`), V1 dashboard `OkXCFToKDIyje58fjdIoXt` (canvas
  `12150:41709` and four frames), Brand `H3KZZ7qkFhFQLcCxBGtw1j` (cover
  `39:29`); pages beyond the covers were not enumerable through the
  connector.
- whole-brain repository: inspected read-only at HEAD `4c895a0ff` and
  `origin/main` `916701da3` / `1e5f93241`; not bundled; deployment and live
  state not verified.
- Production, deployment, and live website or product state: not verified by
  any artifact in this workspace.

## Adding an artifact

New research goes in a dated run directory under `messaging/` or `design/`
with a README, single-owner files, and a registry of words and SHA-256; add a
row here with all nine fields. Never edit a preserved artifact to add a
finding; write a new file and link it.
