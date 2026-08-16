# Decisions Log

## Portable source-backed handoff

Date: 2026-08-16

Decision: Bundle the actual design Markdown sources and original Gleb branding
library in a portable Obi-Harness workspace with relative paths.

Reason: A Canvas or chat message that only references Seven's local absolute
paths is not usable by Ceren or a rotated agent.

Consequence: Ceren can extract one archive, open the folder, and point an agent
to `START_HERE.md` without reconstructing context manually.

## Legacy logo is reference, not default

Date: 2026-08-16

Decision: Preserve the original rainbow logo and wordmark in the bundle while
requiring explicit approval before reintroducing it into a current surface.

Reason: Identity history must remain available without allowing an agent to
mistake file availability for a current design decision.

## Production authority remains outside the bundle

Date: 2026-08-16

Decision: Keep implementation, merge, deployment, and publication authority in
the current production repository and its live release controls.

Reason: A design reference workspace must not silently broaden technical or
external authority.

