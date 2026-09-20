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
- [ ] Publish the bounded documentation change and verify the GitHub URLs.

## Review

Local verification passed: all 31 integrity-index entries match byte size and
SHA-256; the manifest verifies; all relative links in 21 changed or new
Markdown files resolve; the Gleb tree contains the indexed 36 video and 14
motion-source/package files; the product source blob matches commit `a53aa79`;
restricted markers are absent from the public product lane; and
`git diff --check` passes. The Google Doc correctly remains access-controlled.
GitHub publication and remote URL checks remain pending.

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
