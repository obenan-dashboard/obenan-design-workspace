# Status

Last updated: 2026-09-25

## Workspace state

Status: portable starter handoff verified for Ceren

Owner: Seven

Contains the current design-principle and brand-system sources, original
old-logo variants and brand books, quick-start legacy logo references, a
portable agent entrypoint, and a deterministic file and hash inventory. The
root `LIBRARY_MAP.md` now provides one explicit route to brand story, brand
documentation, logos, teasers, motion, UI source projects, and product UI/UX
mapping.

Verified: every starter file is a real local file with zero symlinks. The
original five Markdown design-source imports byte-match at Git commit
`0b400aa48715d0961f1ede1036c9a368a3c544e0`; the current portable editions
differ only where machine paths were translated to relative links or declared
external-source aliases. Both original PDF references rendered and passed
visual inspection. The complete historical
workspace remains available in the FULL release archive. Seven authorized an
individual-file mirror of the Gleb source assets on 2026-09-16; its 350
material files are under `reference/brand-assets/original/Gleb/`, with large
media tracked by Git LFS. This improves access, not approval for current use.

## Current truth

- The old rainbow logo is included for reference and source accuracy.
- Inclusion is not approval to revive it on a current surface.
- The Figma Brand file remains a live external design source.
- Current production code and release evidence are outside this workspace.
- Product/dashboard frontend implementation is routed through
  `knowledge/implementation/README.md` to the private
  `@obenan-dashboard/common-ui` package. The verified 2026-09-25 snapshot is
  version `0.22.0` at source revision `0688b9110a9e453aa1358dd3703afe2d42f718a4`;
  agents must re-check current metadata and exports before implementation.
  No private code, assets, or credentials are copied into this repository.
- The unified January-to-September 2026 product UI/UX knowledge document is
  now repository-native at `knowledge/product/UI_UX_KNOWLEDGE_DOC.md`. It is
  dated observed evidence, not a product contract. Only customer-identifying,
  account-confidential, infrastructure, and directly exploitable security
  fields are withheld from this public repository; their immutable source is
  local commit `32c9003`.

## Decision queue

This queue orders the unresolved design decisions that unlock the most
downstream work. It is scheduling metadata, not approval. A row remains
`UNRESOLVED` or `VALIDATION REQUIRED` until its named DR record contains the
decision, evidence, owner, date, and exact promoted scope.

| Priority | Decision and state | Downstream unlock | Next evidence or owner action | Review checkpoint |
| --- | --- | --- | --- | --- |
| P0 | DR-D11 — `UNRESOLVED` | Names who can validate tokens, components, and the remaining implementation choices | Seven names the design owner and frontend lead; those owners confirm the Common UI ownership boundary | 2026-10-02 |
| P1 | DR-D05 — `VALIDATION REQUIRED` | Core ink, canvas, text, link, hairline, and status tokens | Named design owner supplies contrast results and 375/1440 comparisons; Seven then ratifies or revises | 2026-10-09 |
| P1 | DR-D06 — `VALIDATION REQUIRED` | Blur and elevation rules for fields, navigation, cards, sheets, and dialogs | Named design owner supplies the requested rendered before/after and product-design confirmation | 2026-10-09 |
| P1 | DR-D08 — `VALIDATION REQUIRED` | Radius roles used by shared fields, tiles, boards, and pills | Named design owner supplies 12/16/20 comparisons at 375 and 1440 | 2026-10-09 |
| P2 | DR-D12 — `UNRESOLVED` | Selects the first reference implementation after the system decisions land | Seven, the named owners, and the consuming-team owner confirm the first bounded surface and repository | 2026-10-16 |

If a checkpoint passes without the required evidence, keep the state
unresolved, update the checkpoint, and record the blocker. Do not silently
promote a proposal from this table.

When one decision is fully recorded, promote that decision's exact approved
scope into the matching `knowledge/*/approved/` lane immediately; do not wait
for every row or an entire proposed document to resolve. Promotion still
requires the named evidence, owner, date, and scope—this queue grants none of
those by itself.

## Active workstreams

- Messaging knowledge refresh, authorized by Seven on 2026-08-19.
  - Eight specialist research files are complete and checksum-verified.
  - A ninth dedicated synthesis task created four concise proposed knowledge
    files under `knowledge/messaging/proposed/`.
  - Six founder decisions remain before any promotion to approved knowledge.
  - Session IDs and artifact hashes are recorded in the research run's
    `SESSION_REGISTRY.md`.
  - The authorized independent review is COMPLETE. Brief:
    `research/messaging/2026-08-storybrand-luxury-refresh/CLAUDE_CODE_REVIEW_HANDOFF.md`;
    output:
    `research/messaging/2026-08-storybrand-luxury-refresh/reviews/CLAUDE_CODE_UNMUTED_REVIEW.md`
    (Claude Code, 2026-08-19). Disposition: approve the rule set, reject the
    current voice examples, one targeted revision round rather than more
    research; DR-01 approve with revision, DR-02 revise, DR-03 approve,
    DR-04 revise, DR-05 approve, DR-06 approve.
  - The one-review authorization is CLOSED. No further review file is
    authorized unless Seven explicitly requests one. The review file is
    read-only.
  - All research and synthesis remain non-canonical until Seven approves them.

- Unified design discipline audit, executed by Claude Code on 2026-08-19
  (read-only everywhere except this workspace; no subagents).
  - Research files under
    `research/design/2026-08-unified-design-discipline/` (README, evidence
    ledger, Figma-to-code parity audit, drift register).
  - Four proposed knowledge files under `knowledge/design/proposed/`
    (`DESIGN_CORE_v1.md`, `APPLIED_DESIGN_GUIDE_v1.md`,
    `TOKEN_COMPONENT_CONTRACT_v1.md`, `DECISION_REQUESTS_v1.md`).
  - Disposition (2026-08-19, after the correction round and the
    information-architecture pass): READY_FOR_FINAL_DECISIONS. Founder
    requests DR-D01 to DR-D04, DR-D07, DR-D10 to DR-D12 are ready for
    founder review; DR-D05, DR-D06, DR-D08, DR-D09 are proposed directions
    awaiting rendered comparisons, contrast tests, and validation by a design
    owner Seven names once maintainership is confirmed; presentation and deck
    discipline is under-evidenced; deployment and live state were not
    verified. Not READY_TO_LOCK while decisions remain open.
  - Routing layer added 2026-08-19 without removing research: four-layer
    model in `START_HERE.md`; one-row task router `knowledge/TASK_ROUTER.md`;
    authority, retrieval, and hard stops in `AGENTS.md`; knowledge index
    `knowledge/README.md`; design lane READMEs; evidence index
    `research/README.md`; `LOCK_CANDIDATE_MANIFEST.md`. Pattern lists moved
    from `DESIGN_CORE_v1.md` to `APPLIED_DESIGN_GUIDE_v1.md` section 11; no
    rule was deleted.
  - Figma read through the authenticated connector; Code Connect refused by
    plan; whole-brain unchanged at HEAD `4c895a0ff`, cached `origin/main`
    `916701da3` then `1e5f93241` after an external fetch (identical counts).
  - Everything in `knowledge/design/proposed/` is non-canonical until Seven
    approves it.

## Known decision gates

- Any new logo use or reintroduction of legacy identity requires explicit human
  approval.
- Any production implementation must re-prove current repo ownership,
  collisions, tests, and release authority.
- A frontend agent must verify the relevant supported Common UI contract
  before creating or choosing a replacement component.
