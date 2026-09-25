# Frontend implementation source bridge

**Category:** Implementation routing reference

**Status:** VERIFIED POINTER, NOT PRODUCTION CODE

**Verified:** 2026-09-25

This page connects the design and product knowledge in this public workspace
to the shared frontend implementation source. It deliberately links to the
private source instead of copying its code, assets, or credentials here.

## Two repositories, one workflow

| Repository | Use it for | Do not infer |
| --- | --- | --- |
| [Obenan Design Workspace](https://github.com/obenan-dashboard/obenan-design-workspace) | Product intent, feature mapping, UI/UX flows, language, brand context, motion sources, evidence, and approval state | That a mock-up or proposed rule is already implemented or approved |
| [Common UI package](https://github.com/obenan-dashboard/obenan-js-commons/tree/main/packages/common-ui) (private; authorized access required) | Current exported components, tokens, Storybook examples, package contracts, tests, and implementation guidance | That an internal file is a supported public API, or that access grants release authority |

The design workspace answers **what, why, and how the flow should behave**.
Common UI answers **which shared implementation primitive should be used**.
The consuming production repository still controls acceptance tests, review,
merge, and release.

## Required agent workflow

For product/dashboard frontend or component implementation:

1. Read the routed design-workspace bundle and the relevant product flow.
2. Inspect the consuming repository's installed Common UI version and usage.
3. Re-verify the current package version, export map, changelog, and relevant
   Common UI component before writing code.
4. Reuse a supported exported component or token before proposing a local
   replacement or new variant.
5. Import only supported package subpaths. Do not depend on arbitrary
   `src/*` files or internal assets merely because they exist in the source
   repository.
6. If the needed primitive is absent, record the gap and route a proposal
   through Common UI review. Do not create an untracked private fork in a
   product repository.
7. Treat Lovable, Figma, screenshots, and other mock-ups as intent and review
   input, never as merge-ready implementation or proof of behavior.
8. Re-prove the production repository, ownership, collision state, tests, and
   release authority separately. This workspace grants none of them.

If Common UI cannot be inspected, design and planning may continue with that
limitation marked `PARTIAL`; choosing or creating a replacement component must
stop until the relevant public package contract can be verified from an
authorized source or the consuming repository's installed package.

## Verified package snapshot

The following facts were checked on 2026-09-25 and are a dated snapshot, not a
permanent version pin:

- package: `@obenan-dashboard/common-ui`
- published GitHub Packages version: `0.22.0`
- `main` revision: `0688b9110a9e453aa1358dd3703afe2d42f718a4`
- revision date: 2026-09-22
- package access: restricted GitHub Packages
- supported export subpaths at that revision: `.`, `./operator`,
  `./operator/charts`, `./operator/data-tck`, `./operator/tokens.css`, and
  `./theme`

The main entry exposes shared form, feedback, layout, status, reporting, and
analytics primitives. The operator entry exposes dependency-light console
shells, panels, forms, tables, filters, drawers, pickers, inbox and system
patterns, errors, data helpers, search, account navigation, and related UI.
The export files below are the exact authority for current names.

## Live implementation references

These links require authorized access to the private repository:

- [Package README](https://github.com/obenan-dashboard/obenan-js-commons/blob/main/packages/common-ui/README.md)
- [Package metadata and export map](https://github.com/obenan-dashboard/obenan-js-commons/blob/main/packages/common-ui/package.json)
- [Main public exports](https://github.com/obenan-dashboard/obenan-js-commons/blob/main/packages/common-ui/src/index.ts)
- [Operator public exports](https://github.com/obenan-dashboard/obenan-js-commons/blob/main/packages/common-ui/src/operator/index.ts)
- [Component cookbook](https://github.com/obenan-dashboard/obenan-js-commons/blob/main/packages/common-ui/COOKBOOK.md)
- [Changelog](https://github.com/obenan-dashboard/obenan-js-commons/blob/main/packages/common-ui/CHANGELOG.md)

Repository prose can lag package metadata. At verification time, the README's
older status text did not represent the published `0.22.0` package; agents
must prefer current package metadata, exports, changelog, and registry state.

## Access and safety boundary

Use an organization-approved GitHub Packages credential through the consuming
repository's established secret-management path. Never paste a package token
into a prompt, Markdown file, source file, command output, commit, or log.
Never copy private Common UI source or assets into this public workspace.

This pointer does not approve a design, authorize a package release, or grant
permission to change or deploy any consuming application.
