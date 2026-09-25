# Validation brief — DR-D05, DR-D06, and DR-D08

State: `ASSIGNED / EVIDENCE REQUIRED / NO IMPLEMENTATION`

Owner: `seven-obenan`

Roles: design owner and frontend lead

Tracking issue:
[`#9`](https://github.com/obenan-dashboard/obenan-design-workspace/issues/9)

Result file:
[`DR-D05-D06-D08_VALIDATION_RESULT.md`](DR-D05-D06-D08_VALIDATION_RESULT.md)

## Outcome

Produce an evidence-backed recommendation for the three highest-priority
visual-system decisions. Do not implement, publish, deploy, modify Figma, or
change Common UI, product, or website repositories. Work from local or
read-only renderings and write findings only to the named result file plus an
optional local `evidence/` subdirectory.

## Required sources

Read only the relevant sections of:

- [`../proposed/DECISION_REQUESTS_v1.md`](../proposed/DECISION_REQUESTS_v1.md):
  DR-D05, DR-D06, DR-D08.
- [`../proposed/TOKEN_COMPONENT_CONTRACT_v1.md`](../proposed/TOKEN_COMPONENT_CONTRACT_v1.md):
  sections 2.1, 2.4, 2.5, and 2.7.
- [`../../../reference/design-principles/BRAND_SYSTEM.md`](../../../reference/design-principles/BRAND_SYSTEM.md):
  only the color, surface, radius, and elevation rules needed for comparison.
- [`../approved/DR-D11_CODE_OWNERSHIP.md`](../approved/DR-D11_CODE_OWNERSHIP.md):
  authority and remaining boundaries.

## DR-D05 — Colors and states

1. Test every proposed text/background pair using WCAG contrast calculations.
2. Require at least `4.5:1` for ordinary text and `3:1` for large text and UI
   component boundaries; do not rely on color alone for a status.
3. Render the candidate system at 375 px and 1440 px.
4. Include a body-text comparison of `#242424` and `#0F0F14` on the proposed
   product canvas.
5. State one recommendation for ink, canvas, alternate canvas, island,
   secondary and muted text, hairline, link, focus, success, warning, error,
   and info roles. Distinguish mark colors from accessible text colors.

## DR-D06 — Blur and elevation

1. Render the same Create Account frame before and after removing blur from
   the field, navigation, card, and button layers.
2. Compare a flat white field with hairline/elevation against the existing
   blurred treatment at 375 px and 1440 px.
3. Evaluate the proposed exception: blur only on the scrim behind a
   single-decision `Sheet` or `Dialog`.
4. Record whether blur communicates any product state or is only decorative.

## DR-D08 — Radius roles

1. Render the same representative field and tile with 12 px, 16 px, and 20 px
   radii at 375 px and 1440 px.
2. Compare the full role proposal: pill 9999, field selected from the test,
   tile 16, board 24 with 32 allowed for website hero boards, and none for
   ledgers and seams.
3. Recommend roles, not page-specific numbers, and identify any compatibility
   alias needed during migration.

## Result contract

Complete every placeholder in
[`DR-D05-D06-D08_VALIDATION_RESULT.md`](DR-D05-D06-D08_VALIDATION_RESULT.md).
For each DR, include repository-relative evidence links, measurements,
recommendation, dissent or limitation, and an explicit `VALIDATED` or
`NEEDS_REVISION` owner result. Do not mark a value `APPROVED`; Seven must
ratify it in a separate decision record.

Issue #5 remains open after validation. It may close only after validated
choices are ratified and promoted into approved knowledge, and DR-D12 has an
explicit disposition.
