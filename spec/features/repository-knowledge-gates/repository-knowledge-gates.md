---
title: Repository knowledge gates and agent routing
status: in-progress
owner: Seven
date: 2026-09-25
issues: [2, 3, 4, 5, 6]
---

# Repository knowledge gates and agent routing

## Problem

The workspace has strong written rules but no executable gate to detect broken
relative links, machine-specific paths, integrity drift, or ageing evidence.
The unified product map is also routed as one large file, and the unresolved
decision backlog has no short operational queue. These gaps were reported in
GitHub issues #2 through #6.

## User stories

1. As a zero-context colleague or agent, I can follow every repository-local
   Markdown link from a fresh clone without access to Seven's filesystem.
2. As the repository custodian, I receive a deterministic failure when a
   portable link, path boundary, or integrity record breaks.
3. As an evidence reader, I can see when an observation was made, which source
   revision it represents, and when it should be reviewed again.
4. As an implementation agent, I can load only the product-map sections needed
   for my task.
5. As a decision owner, I can see the small ordered queue that unlocks the
   largest amount of downstream design work without mistaking the queue for an
   approval.

No story calls a runtime outside this repository, so no sequence diagram is
required.

## Acceptance criteria

### AC-RKG-1 — Relative-link behavior

The link gate accepts existing files and directories plus external and
same-page links, and reports the source file, line, and target for a missing
repository-local Markdown link.

### AC-RKG-2 — Portability behavior

The portability gate rejects `/Users/` paths in tracked Markdown except in
the exact provenance allowlist (`PORTABLE_PATH_MAP.md` and root
`SOURCE_PROVENANCE.md`). Inline code and ordinary prose are checked as well as
link destinations.

### AC-RKG-3 — Integrity behavior

The integrity gate accepts every matching manifest entry and reports missing
files, malformed lines, and SHA-256 mismatches. It must work on macOS and Linux
without depending on `shasum` versus `sha256sum` command names.

### AC-RKG-4 — Evidence-freshness behavior

Every configured evidence file exposes an observed-through date, source
revision, and re-verify date. Missing or contradictory metadata is an error.
A date after the re-verify boundary produces a visible warning but does not
make the aggregate command fail.

### AC-RKG-5 — One executable gate

One dependency-free command runs link, portability, integrity, and freshness
checks over the real repository. GitHub Actions runs the behavioral tests,
acceptance-criterion traceability check, and aggregate command on pull requests
and pushes to `main`.

### AC-RKG-6 — Section-level product routing

The product-lane README maps common task intents to exact numbered sections of
the unified UI/UX document, and the task-router product row routes through that
section index instead of requiring the complete product map.

### AC-RKG-7 — Decision queue without false approval

`STATUS.md` contains three to five ordered design decisions with owner,
downstream unlock, next evidence, and review checkpoint. Every entry remains
explicitly unresolved until its named decision record is updated.

### AC-RKG-8 — Existing corpus becomes portable

All tracked Markdown outside the two provenance allowlist files contains zero
`/Users/` paths, all relative Markdown links resolve, and the integrity index
and manifest cover the new gate, spec, configuration, tests, and routing files.

## Input/output matrix

| Gate | Valid input | Invalid or missing input | Boundary/compatibility case | Expected outcome |
| --- | --- | --- | --- | --- |
| Links | Existing file or directory | Missing target | External URL, anchor, URL-encoded path | Pass valid/ignored links; report missing local target |
| Portability | Repository-relative or external reference | `/Users/...` in prose, code, or link | Exact allowlisted provenance file | Reject invalid path; permit only allowlist |
| Integrity | Matching file/hash | Missing file, malformed row, changed bytes | Empty/non-indexed unrelated file | Report each manifest defect without shell-specific hashing |
| Freshness | Complete metadata before review date | Missing file/field or invalid dates | Today equals review date; today is one day later | Pass through boundary; warn after it; fail malformed metadata |
| Router | Named section bundle | Bare full-map preload | Safety task explicitly routed to section 10 | Route only required numbered sections |
| Decisions | 3–5 unresolved, owned entries | Missing owner/checkpoint or implied approval | Validation-dependent item | Keep status unresolved and name next evidence |

## Compatibility

- Preserve all existing repository paths and public URLs.
- Preserve the unified product map as one file; add an index rather than split
  or rename it.
- Preserve original-source provenance through `PORTABLE_PATH_MAP.md`, root
  `SOURCE_PROVENANCE.md`, and pre-change Git history.
- Freshness is warning-only once valid metadata exists; it must not turn old
  evidence into a CI failure.
- Do not approve DR-D* or DR-* decisions, change Common UI, or modify a
  production application.

## Out of scope

- Choosing final brand, token, typography, color, radius, icon, or messaging
  values.
- Naming a design owner or frontend lead on Seven's behalf.
- Verifying private external sources from unauthenticated CI.
- Changing or deploying customer-visible software.
