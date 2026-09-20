# Unified repository-native product UI/UX knowledge

## Plan

- [x] Import the unified product UI/UX knowledge document from immutable source commit `32c9003`.
- [x] Remove the redundant orientation-only derivative and make the unified Markdown file the single in-repository product map.
- [x] Redact only customer-identifying, account-confidential, and directly exploitable security detail required by this public repository's safety boundary.
- [x] Update every agent route, portable path, provenance record, status, decision, verification record, and learning record.
- [x] Rebuild the starter integrity index and manifest; verify links, source lineage, sensitive-content boundaries, and Git cleanliness.
- [x] Publish the bounded documentation change and verify the exact GitHub URLs.

## Review

The unified 627-line private source at commit `32c9003` and blob
`6d9d017a50451b81cb0df27919351c10f50f7528` was imported as one 632-line
repository-native edition; all source section headings remain represented.
Only customer identity, account-specific identifiers and scale, internal
infrastructure detail, and directly exploitable authentication detail were
withheld for the public repository. The orientation-only derivative and every
external-document dependency were removed. All relative Markdown links
resolve, the restricted and stale marker scan passes, all 33 indexed files and
`FILE_INDEX.tsv` pass `MANIFEST.sha256`, and `git diff --check` passes.
Publication commit `9fe106025108033fdea1c15d090a54376984db3b` reached GitHub `main`; the
unified document, product lane README, and root library map each returned HTTP
200, while the removed derivative returned 404 from the raw URL.

---

# Agent-findable design and product knowledge hub

## Plan

- [x] Add one root library map that routes brand story, brand documentation,
  logos, teasers, motion, UI source projects, and product UI/UX mapping.
- [x] Add an explicit motion index using the preserved Gleb directory names.
- [x] Add a public-safe product UI/UX map with provenance to the restricted
  complete report, without publishing customer or security-sensitive details.
- [x] Link the new map from every agent entrypoint and the task router.
- [x] Verify all new relative links, sensitive-content boundaries, changed
  paths, and Git status.
- [x] Publish the bounded documentation change and verify the GitHub URLs.

## Review

Historical verification passed: all 31 integrity-index entries matched byte
size and SHA-256; the manifest verified; all relative links in 21 changed or
new Markdown files resolved; the Gleb tree contained the indexed 36 video and
14 motion-source/package files; and `git diff --check` passed. The product-map
publication model from this step was superseded by the unified
repository-native document recorded above.
Publication commit `82e9676a5a837a723a0ccd46fecb56451357fe80`
reached GitHub `main`; the untruncated remote tree contains all four new hub
files, and their GitHub pages returned HTTP 200.

---

# Gleb source asset publication

## Plan

- [x] Copy every source asset from Seven's `Gleb` directory without changing its bytes or relative path. Exclude only macOS `.DS_Store` metadata.
- [x] Track large media and project archives with Git LFS; keep browsable filenames in the repository.
- [x] Update the workspace entrypoints and provenance to distinguish source availability from approval for current use.
- [x] Verify source-to-repository file counts and SHA-256 hashes, Git LFS pointers, and the final changed-path ceiling.
- [x] Publish to GitHub and verify the repository tree and exact asset URLs remotely.

## Review

350 source assets are staged, with 350/350 staged SHA-256 comparisons matching
their copied source bytes (LFS pointer OIDs for 48 large-file paths). The
source and mirror also matched on all 350 SHA-256 hashes; only 20 Finder
`.DS_Store` files were excluded. `git diff --cached --check` passed.
GitHub `main` reached `66b375f8ae29bd72b280e29aabe795fb44a0ff83`.
The untruncated GitHub tree lists all 350 Gleb material files. The asset
folder, logo-animation folder, and sample logo-loop page returned HTTP 200;
the sample Git LFS video URL returned HTTP 200 with its full 16,821,162-byte
content length. The historical release ZIP remains unchanged.
