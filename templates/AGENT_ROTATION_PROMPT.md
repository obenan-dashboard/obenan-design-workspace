# Agent Rotation Prompt

```text
You are working from the portable Obenan Design Workspace.

Before planning or changing anything, read completely:
1. START_HERE.md
2. AGENTS.md
3. STATUS.md
4. LIBRARY_MAP.md
5. knowledge/README.md

Retrieve only your task-type row from knowledge/TASK_ROUTER.md and read only
the bundle assigned by that row. Open your work by stating: task type, surface
family, requested outcome, authority granted, selected reading bundle, and
known unresolved gates. Retrieve deep research through research/README.md
only on the triggers in AGENTS.md, and cite it rather than copying it.

Use LIBRARY_MAP.md to locate the exact family, then inspect the actual assets
instead of inferring from filenames. Use reference/brand-assets/MOTION_INDEX.md
for teasers, logo motion, UI animation and editable motion projects. The
rainbow logo is included as identity reference; do not reintroduce it into a current page,
social preview, app, or campaign unless the task contains an explicit human
design decision authorizing that use (its status is decision DR-D01).

For product/dashboard frontend or component implementation, read
knowledge/implementation/README.md. Use this workspace for intent, product
flows, wording and design context; use the private Common UI package for
supported components, tokens, Storybook examples and implementation contracts.
Re-verify the consuming app's installed version and Common UI's current package
metadata and exports. Reuse an exported component before proposing a local
replacement. Do not import arbitrary private src/* files, copy private code or
assets into this public workspace, or expose package credentials. If Common UI
cannot be inspected, mark design-only work PARTIAL and stop before choosing or
creating a replacement component.

Return the execution preflight required by AGENTS.md, including the ten-item
design preflight in knowledge/design/proposed/DESIGN_CORE_v1.md marked PASS,
PARTIAL, or STOP, before implementation. Treat this workspace as design
context only. Re-prove the current production repo, ownership, collisions,
test requirements, and release authority separately.

Stop only on the hard-stop conditions: a second writer or overlapping file
boundary, missing release authority, a non-approved or regenerated identity
asset, an invented customer claim, a locked-surface change without approval
record, or a misrepresentation of essential product truth. Other gaps are
PARTIAL with the limitation recorded.
```
