# DR-D11 — Design and frontend ownership

Status: `APPROVED`

Decision date: `2026-09-25`

Decision owner: `seven-obenan`

## Approved role assignment

- Design owner: `seven-obenan`
- Frontend lead: `seven-obenan`

The same GitHub identity holds both roles. In this workspace, that identity is
responsible for validating proposed design-system decisions and for confirming
the current shared-frontend contract before any implementation is authorized.

## Exact approved scope

This decision approves the two role assignments only. It resolves the missing
owner named by DR-D11 and allows the evidence work for DR-D05 through DR-D09
to proceed.

The proposed package allocation in DR-D11 remains guidance until it is checked
against the current Common UI package and consuming applications. It currently
recommends a shared token package, shared React 18 contract components, and a
compatible local React 19 website implementation during migration. That
allocation is not promoted by this record.

## Still unresolved

- DR-D05 — `UNRESOLVED`: color and status-token values need evidence.
- DR-D06 — `UNRESOLVED`: blur and elevation rules need rendered comparison.
- DR-D08 — `UNRESOLVED`: radius roles need rendered comparison.
- DR-D09 — `UNRESOLVED`: icon-source coverage needs an inventory.
- DR-D10 — `UNRESOLVED`: the Figma parity workflow remains a budget and
  technical choice.
- DR-D12 — `UNRESOLVED`: the first reference implementation remains a founder
  choice after validation.

This decision does not authorize product, website, Figma, Common UI, release,
or customer-visible changes. One identity holding both roles does not remove
the repository's evidence, accessibility, test-first, code-owner, or release
gates.

## Provenance

Seven explicitly supplied the two owner assignments in the repository task on
2026-09-25. The source proposal is
[`../proposed/DECISION_REQUESTS_v1.md`](../proposed/DECISION_REQUESTS_v1.md)
under DR-D11. The next bounded work package is
[`../validation/DR-D05-D06-D08_VALIDATION_BRIEF_2026-09-25.md`](../validation/DR-D05-D06-D08_VALIDATION_BRIEF_2026-09-25.md).
