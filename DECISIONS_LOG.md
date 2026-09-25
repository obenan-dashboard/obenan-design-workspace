# Decisions Log

## DR-D11 role assignment

Date: 2026-09-25

Decision: `seven-obenan` is both the design owner and frontend lead for the
design-system decision process. This approves the role assignment only. The
recommended token/component package boundary remains subject to current
technical verification, and all visual decisions still require their named
evidence and separate ratification.

Consequence: DR-D05, DR-D06, DR-D08, and DR-D09 now have a named validator;
the missing-owner blocker is removed. The combined role does not create an
independent reviewer and does not waive accessibility, test-first, code-owner,
or release gates. Exact scope and remaining unresolved items are in
`knowledge/design/approved/DR-D11_CODE_OWNERSHIP.md`.

## Dependency-free repository gates and explicit evidence ageing

Date: 2026-09-25

Decision: Run one dependency-free verification command locally and in GitHub
Actions for relative links, machine-path portability, SHA-256 integrity, and
visible evidence-freshness metadata. Route product tasks through numbered
sections of the unified map. Keep ageing evidence warning-only once its
metadata is valid, and keep decision-queue rows explicitly unresolved until
their decision records are updated.

Consequence: A fresh clone can prove that its knowledge is navigable and
untampered without installing repository dependencies. Agents can retrieve a
bounded product context and see evidence age or decision blockers without
mistaking either for approval. Original machine-path provenance remains only
in the two declared provenance files and pre-translation Git history.

## Link to Common UI; do not duplicate it

Date: 2026-09-25

Decision: Use this public workspace as the source for product intent, UI/UX
flows, wording, brand context, and evidence. Route product/dashboard frontend
agents through `knowledge/implementation/README.md` to the private
`@obenan-dashboard/common-ui` package for current supported components,
tokens, examples, tests, and public exports. Link to that implementation
source and record a dated verification snapshot; do not copy its private code,
assets, or credentials into this repository.

Consequence: A zero-context agent can determine both what the experience must
do and where the shared implementation contract lives. The two repositories
remain non-competing sources: the design workspace does not become a component
library, Common UI access does not grant release authority, and a new local
component cannot be justified without first checking the relevant Common UI
contract.

## One unified repository-native product knowledge document

Date: 2026-09-20

Decision: Replace the orientation-only product-map derivative and external
document dependency with `knowledge/product/UI_UX_KNOWLEDGE_DOC.md` as the
single in-repository current-state map. Preserve the unified source's
structure and findings; withhold only customer-identifying,
account-confidential, infrastructure, and directly exploitable security
detail required by the public repository boundary.

Consequence: Colleagues and agents can retrieve the complete usable UI/UX
mapping from one stable GitHub file. The immutable private source commit
remains the authority for restricted fields, and the dated map remains
observed evidence rather than approved design canon or current-live proof.

## One public navigation map, restricted detailed product evidence

Date: 2026-09-20

Status: Superseded the same day by "One unified repository-native product
knowledge document" above.

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
