# Gleb source asset publication

## Plan

- [x] Copy every source asset from Seven's `Gleb` directory without changing its bytes or relative path. Exclude only macOS `.DS_Store` metadata.
- [x] Track large media and project archives with Git LFS; keep browsable filenames in the repository.
- [x] Update the workspace entrypoints and provenance to distinguish source availability from approval for current use.
- [x] Verify source-to-repository file counts and SHA-256 hashes, Git LFS pointers, and the final changed-path ceiling.
- [ ] Publish to GitHub and verify the repository tree and exact asset URLs remotely.

## Review

350 source assets are staged, with 350/350 staged SHA-256 comparisons matching
their copied source bytes (LFS pointer OIDs for 48 large-file paths). The
source and mirror also matched on all 350 SHA-256 hashes; only 20 Finder
`.DS_Store` files were excluded. `git diff --cached --check` passed.
Remote publication and URL checks remain open.
