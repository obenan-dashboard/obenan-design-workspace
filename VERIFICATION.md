# Workspace Verification

Verified: 2026-09-25

- All relative Markdown links in the changed and new agent-entry, library,
  motion, and product-map files resolve locally.
- `LIBRARY_MAP.md` routes directly to brand story, brand documentation,
  logos, motion and teasers, editable product UI motion, product UI/UX
  mapping, the frontend implementation source, research, and agent handoff
  instructions.
- The private Common UI package was inspected through authenticated GitHub
  access. `main` resolved to
  `0688b9110a9e453aa1358dd3703afe2d42f718a4`; `package.json` and the GitHub
  Packages registry both reported `@obenan-dashboard/common-ui` version
  `0.22.0`; its export map exposed `.`, `./operator`, `./operator/charts`,
  `./operator/data-tck`, `./operator/tokens.css`, and `./theme`. The bridge
  links to the live README, metadata, public export barrels, cookbook, and
  changelog, and explicitly excludes private code, internal assets, and
  credentials from this public repository.
- `reference/brand-assets/MOTION_INDEX.md` maps the verified repository
  inventory of 36 video files and 14 editable or packaged motion-source files.
- The unified product UI/UX source is Git blob
  `6d9d017a50451b81cb0df27919351c10f50f7528` at local commit `32c9003`.
  Its 627 source lines and all section headings are represented in the
  632-line repository edition; the five added lines are the public-boundary
  notice and formatting added around declared redactions.
  The repository-native edition preserves the unified mapping and declares
  its limited public-repository redactions. Customer identity, exact account
  scale and identifiers, internal host and endpoint detail, client-side key
  names, and the directly exploitable authentication finding were scanned and
  are absent.
- The starter integrity set in `FILE_INDEX.tsv` and `MANIFEST.sha256` passes
  byte-size, SHA-256, and MIME-type verification.
- The dependency-free workspace gate checks every Markdown link, rejects
  machine-specific paths outside the two provenance files, verifies the
  SHA-256 manifest, and validates visible evidence-freshness metadata. The
  same aggregate command and behavioral tests run in GitHub Actions. On
  2026-09-25, all 17 behavioral tests and all 8 acceptance-criterion trace
  checks passed; the aggregate command passed with zero current freshness
  warnings. A future-date run after every configured review boundary passed
  with four warnings and zero errors, proving that ageing evidence is visible
  but non-blocking.
- Product tasks can route through the section index in
  `knowledge/product/README.md`; unresolved design work is ordered in the
  decision queue in `STATUS.md` without promoting any proposal to approved.
- `git diff --check` passes.

The original 2026-08-16 package verification remains preserved in Git
history. The individually browsable Gleb publication was separately verified
source-to-repository for all 350 material files, with only Finder `.DS_Store`
metadata excluded; the historical FULL release archive remains available.
