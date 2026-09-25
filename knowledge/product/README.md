# Product UI/UX knowledge lane

This lane holds dated observations of the Obenan product interface for
product, design, support, sales enablement, and engineering discovery. It is
evidence, not an implementation contract, approval of design intent, or proof
of current live behavior.

## Single current-state file

- [`UI_UX_KNOWLEDGE_DOC.md`](UI_UX_KNOWLEDGE_DOC.md) is the unified repository-native map. It combines the January 2026 master mapping, its v1.1 patch set, the January reconciliation report, and the September 2026 re-map.

Agents and colleagues should use the section index below and load only the
sections relevant to their task. The earlier orientation-only derivative has
been removed so there is no competing product map or external-document
dependency.

## Section-level routes

Always read section 0 first for confidence markers and safety context. Then
use the smallest matching bundle from the unified file:

| Task intent | Read from `UI_UX_KNOWLEDGE_DOC.md` |
| --- | --- |
| Product orientation, support, or customer tutorial | Sections 0, 2, 3, 5, 7, and 9; add the relevant screen record from section 6 |
| Navigation, route, or entry-point work | Sections 0, 3, 4, and 9; Appendices B and C |
| One screen or page family | Sections 0, 5, 8, 11, and 12; only the matching subsection under section 6 |
| Flow design or hand-off | Sections 0, 3.4, 7, and 9; section 10 before any live re-observation |
| Component or frontend implementation | Sections 0, 8, 11, and 12; then [`../implementation/README.md`](../implementation/README.md) for the current Common UI contract |
| Roles, permissions, or administration | Sections 0, 2, and 6.13; Appendices D through G |
| Evidence refresh or live product audit | Sections 0, 10, 12, and Appendix J before opening the product |

Do not preload the complete file when one bundle answers the task. Add another
section only when the current section explicitly depends on it or the task
crosses that boundary.

## Provenance and public-repository boundary

The unified source was created in the operator's `sales-harness` workspace at
commit `32c9003`, path `product/UI_UX_KNOWLEDGE_DOC.md`, Git blob
`6d9d017a50451b81cb0df27919351c10f50f7528`.

The repository edition preserves the full usable information architecture,
screen inventory, flows, interaction patterns, read-only protocol, write-risk
findings, UX audit, gaps, change history, and provenance. Because this
repository is public, it withholds only customer identity, account-specific
identifiers and scale, internal infrastructure detail, and directly
exploitable authentication detail. The immutable private source remains the
authority for those restricted details.

## Update pattern

Every future product-map update belongs in the single knowledge document and
must:

1. state observation date and environment class;
2. separate observed, inferred, code-read, and unverified claims;
3. record verified surfaces, routes, flows, and write-risk controls;
4. preserve customer and security boundaries for the public repository;
5. cite its immutable source commit and blob;
6. re-verify changing behavior before implementation or customer claims;
7. update the workspace provenance, status, verification, and integrity files.
