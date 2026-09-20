# Decisions Log

## One public navigation map, restricted detailed product evidence

Date: 2026-09-20

Decision: Add `LIBRARY_MAP.md` as the stable route to brand story, brand
documentation, logos, teasers, motion, product UI source projects, and product
UI/UX mapping. Add a public-safe dated product map, while keeping the complete
customer-account and security-sensitive report in access-controlled sources.

Consequence: A zero-context colleague or agent can find each knowledge family
from the repository root. Public discoverability does not silently disclose
restricted observations or convert dated evidence into approved canon.

## Publish individually browsable Gleb source assets

Date: 2026-09-16

Decision: Seven authorized pushing all material files from the original Gleb
branding-assets folder to the design workspace repository so collaborators can
access them individually. Preserve source bytes and relative paths; exclude
only macOS `.DS_Store` metadata and use Git LFS for large binary files.

Consequence: GitHub availability and current-brand approval remain distinct.
The original release archive remains available; this does not select a current
logo, visual treatment, or publication rights for a new customer surface.

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
