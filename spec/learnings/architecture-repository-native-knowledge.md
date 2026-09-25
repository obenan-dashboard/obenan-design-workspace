# Repository-native unified knowledge

**Category:** Architecture
**Last Updated:** 2026-09-25

## Related Files

- `knowledge/product/UI_UX_KNOWLEDGE_DOC.md`
- `knowledge/product/README.md`
- `knowledge/implementation/README.md`
- `knowledge/TASK_ROUTER.md`
- `LIBRARY_MAP.md`
- `SOURCE_PROVENANCE.md`
- `FILE_INDEX.tsv`
- `MANIFEST.sha256`

## Findings

### 2026-09-20 — The repository must contain the actual unified artifact

When collaborators or rotated agents need product knowledge, an orientation
summary plus an external document link is not sufficient. The actual unified
Markdown document must live at a stable repository path and every entrypoint
must route to that file. Earlier source documents may remain as history, but
they must not compete with the unified current-state file.

Evidence: the previous repository lane pointed to an orientation-only
derivative and an access-controlled external document, which prevented a
zero-context repository user from seeing the full usable map.

For a public repository, source fidelity and publication safety are separate:
preserve the complete private source by immutable commit and blob, then redact
only customer-identifying, account-confidential, infrastructure, or directly
exploitable security fields from the public edition. Declare every such
boundary in the document and provenance record.

### 2026-09-25 — Link private implementation authority; do not mirror it

Repository-native knowledge does not require duplicating every dependency. A
public design workspace should contain its own product intent and flow
knowledge, while pointing agents to the authenticated source of reusable
implementation contracts. The bridge must name each repository's role,
provide live metadata and export links, record a dated version and revision,
and require re-verification before code changes.

Copying private component code or assets into a public knowledge repository
would create a competing, stale implementation source and cross an access
boundary. Package credentials must remain entirely outside documentation,
prompts, logs, and commits. If the implementation source cannot be checked,
planning may continue as PARTIAL, but a replacement component decision must
wait for the relevant supported contract to be verified.

## Change Log

| Date | Change |
| --- | --- |
| 2026-09-25 | Added the private-implementation bridge pattern and credential boundary |
| 2026-09-20 | Initial finding recorded after replacing the orientation-only product map with one unified repository-native document |
