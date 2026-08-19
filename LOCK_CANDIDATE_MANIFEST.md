# Lock-candidate manifest

Date: 2026-08-19

State: `READY_FOR_FINAL_DECISIONS / NOT_LOCKED / NOTHING_APPROVED`

This manifest prepares a future lock. It does not lock, approve, promote,
commit, or publish anything. Every status below is the file's own recorded
status; no status was changed without a recorded decision by Seven. SHA-256
values were computed after the 2026-08-19 governance-correction round (router
extraction, AGENTS.md hard-stop authority, STATUS.md review record, literal
commit inventory); the manifest itself is excluded from its own table. `git status --short
--untracked-files=all` is the source of truth for what is tracked, modified,
and untracked.

## 1. Proposed operating documents (lock candidates)

| Path | Layer | Status | Words | SHA-256 |
| --- | --- | --- | ---: | --- |
| `knowledge/messaging/proposed/MESSAGING_CORE_v2.md` | 2 | PROPOSED / NOT APPROVED (registry-hashed; unchanged) | 1,075 | `8eaea02274a0682a2e9b71e00498869e1baa1b59887703bdfd3e725cbf0698a3` |
| `knowledge/messaging/proposed/DECISION_REQUESTS_v2.md` | 2 | FOUNDER DECISIONS REQUIRED (registry-hashed; unchanged) | 834 | `ddc248bd239d12adbad9f4064541c3434d8c54e96c4fff3d7bee274b9c05e5d0` |
| `knowledge/design/proposed/DESIGN_CORE_v1.md` | 2 | PROPOSED / NOT APPROVED / NOT CANONICAL | 1,566 | `58102e60de33f174aca84532e6ecd04a470cd252ef45b0a3d7e64d46bb5f20ef` |
| `knowledge/design/proposed/DECISION_REQUESTS_v1.md` | 2 | PROPOSED / AWAITING FOUNDER OR NAMED-OWNER DECISION | 3,035 | `e9b45fbaf41996bcf1d46aaac5ca9523bd99c2d5eb04bba3e43ffd1c18efc83b` |
| `knowledge/messaging/proposed/APPLIED_MESSAGING_GUIDE_v2.md` | 3 | PROPOSED / NOT APPROVED (registry-hashed; unchanged) | 2,270 | `c704ea12397eec4e0d983a8554b9ed144b23c533efcfec061fc17bd242a462c7` |
| `knowledge/messaging/proposed/EVIDENCE_APPENDIX_v2.md` | 3 | PROPOSED EVIDENCE / NOT APPROVED (registry-hashed; unchanged) | 2,189 | `95d4c5f07348f1afc56305344064a991dda6891c51a06eb34d9b8a74eade6ddf` |
| `knowledge/design/proposed/APPLIED_DESIGN_GUIDE_v1.md` | 3 | PROPOSED / NOT APPROVED / NOT CANONICAL | 3,402 | `5b91acb250c3d6372986ffb95bc5c44d45189c92f02dfa0c1b2951d6d7f13d0f` |
| `knowledge/design/proposed/TOKEN_COMPONENT_CONTRACT_v1.md` | 3 | PROPOSED / NOT APPROVED / NOT CANONICAL | 3,556 | `c5448b373088b1ff34cae858dcadcbbef4a8ff73916f496c22d936dc4f51010e` |

## 2. Routing and index files (Layer 1 and lane READMEs)

| Path | Role | Status | Words | SHA-256 |
| --- | --- | --- | ---: | --- |
| `START_HERE.md` | Layer 1: layers, task types, row retrieval, identity and authority orientation | governance (tracked, modified) | 666 | `294e466feee45b4250d2821a57a93d204a28394df9e72d3e3b276525bab7a9e6` |
| `knowledge/TASK_ROUTER.md` | Layer 1 by role: legend plus ten task rows, retrieved one row at a time | routing reference (new; not a mandatory first read) | 883 | `ebb66bb71f48a9c8b307a58b7b3f3040a23f023f9817e4eea120a844dd01a26a` |
| `AGENTS.md` | Layer 1: operating, retrieval, preflight, PASS/PARTIAL/STOP, authoritative hard stops | governance (tracked, modified) | 912 | `bd831a258ab1a207d89f821a11d2b23db956f06b20ee1aef3d3aaf6645319674` |
| `CLAUDE.md` | Claude Code entry (points to Layer 1) | governance (tracked, modified) | 108 | `283cdb67bff71141bef1a0913633d0be7cb3b30025f00b4c7a2e3762b2ca3601` |
| `STATUS.md` | Shared state; records the completed independent review and the closed one-review authorization | governance (tracked, modified) | 501 | `631e0b7830411323df1c00e148c72917594e4fa4855e7221c7afd2f038f8629a` |
| `knowledge/README.md` | Knowledge index | index (new) | 299 | `9c19b66855696ee7f576fd65a63c37a8d0c986bd78c2030b5bf4bb56af4d78aa` |
| `knowledge/messaging/README.md` | Messaging lane rule | lane rule (untracked, pre-existing, unchanged) | 60 | `89bd784a482cf1a7373506383fe44f9fc1b6ab29791e827b78484f71b49e7d41` |
| `knowledge/messaging/approved/README.md` | Approved lane placeholder | lane rule (untracked, pre-existing, unchanged) | 26 | `2654bbc8bc8e8d09af6953e327959755b098bfbb60e9c3eb2ffdc05ad43e1eb5` |
| `knowledge/messaging/proposed/README.md` | Proposed lane rule | lane rule (untracked, pre-existing, unchanged) | 32 | `e5812ba2b79a658a248f6b7e9f10a57b17d5c87a923d7390ed8d25d59e040337` |
| `knowledge/design/README.md` | Design lane rule (links to the messaging lane rule, not repeated) | lane rule (new) | 86 | `c8c7878ebfeb9bbdecf97378e104ef7e9843052d5b58cae6648d0f4ab4f63988` |
| `knowledge/design/approved/README.md` | Approved lane placeholder | lane rule (new; directory empty by design) | 35 | `5267bc26991fa49bb183ee3174b47a7037f6d786e8d13d3ac11bc9407e781741` |
| `knowledge/design/proposed/README.md` | Proposed lane rule | lane rule (new) | 52 | `404566d4f9b8c3026247278454e419a4fb75f8eb08d86333aedfe0c895419601` |
| `templates/AGENT_ROTATION_PROMPT.md` | Reusable agent prompt | template (tracked, modified) | 231 | `ac58f35a4f765a95cf4aef15325e3070c707da62a46e97152690b8cb375582a6` |

## 3. Evidence indexes and research records

| Path | Role | Status | Words | SHA-256 |
| --- | --- | --- | ---: | --- |
| `research/README.md` | Evidence index (Layer 4 retrieval map) | index (new) | 2,054 | `9a03c4ae639adfba89712d6aeb104c97bbba57a43e02271f193fbc30d0eaa587` |
| `research/messaging/README.md` | Messaging research lane contract | evidence (untracked, pre-existing, unchanged) | 193 | `327382c31113ee3e8139cc76fb179d9b9275d4269465633b584aa765e76a5fd7` |
| `research/messaging/2026-08-storybrand-luxury-refresh/SESSION_REGISTRY.md` | Run registry with hashes of the eight reports and four synthesis files | evidence (unchanged; see its own table for report hashes) | 281 | see file |
| `research/design/2026-08-unified-design-discipline/README.md` | Design run record | evidence (corrected) | 1,494 | `bc04bb6cd097d5637f4dd3bcd5481bb65586b7a127e976f877ffe049bfeb6c72` |
| `research/design/2026-08-unified-design-discipline/EVIDENCE_LEDGER.md` | Design evidence ledger | evidence (corrected; authenticated email redacted for durable publication) | 4038 | `778f858e7deada52ee59bbce073bc36e1f0af0cf16ff3b4602516a5f7276ac2f` |
| `research/design/2026-08-unified-design-discipline/FIGMA_CODE_PARITY_AUDIT.md` | Parity audit | evidence (corrected) | 1,844 | `008733320a93ad6019a1ffdd1b95f63810d87d267ef092c36f82c7655a2b7f46` |
| `research/design/2026-08-unified-design-discipline/DRIFT_REGISTER.md` | Drift register | evidence (unchanged this pass) | 1,854 | `51b3dcaa43663228a852cc2f81671082cde1482b1e74d9cb88a1bda6dcfe03ab` |

The eight messaging specialist reports, the review handoff, the review lane
README, the independent review, and the reference messaging sources are
preserved unchanged; their hashes are recorded in `SESSION_REGISTRY.md`
(reports) and `reference/messaging/sources/SOURCE_PROVENANCE.md` (source
snapshot). The brand PDFs and quick-start logo SVGs are recorded in
`MANIFEST.sha256`.

## 3b. Mandatory first-read burden (measured)

`START_HERE.md` 666 + `AGENTS.md` 912 + `STATUS.md` 501 +
`knowledge/README.md` 299 + `CLAUDE.md` 108 = **2,486 words** for a Claude
Code agent, and 2,378 for an agent that does not read `CLAUDE.md`.
`knowledge/TASK_ROUTER.md` (883) is excluded because only one row plus the
legend is retrieved, never the whole file.

## 4. Unresolved founder decisions (recommended order)

1. Design DR-D03: source precedence (approved governance defines direction;
   verified code defines compatibility reality at the inspected reference;
   neither proves deployment).
2. Design DR-D01: wave and wordmark status for new surfaces (asset bytes
   source-verified; current identity authority unresolved).
3. Design DR-D02: canonical Figma file and library; meaning of `DESIGN
   BETA`; naming of the design owner after maintainership is confirmed.
4. Design DR-D04: Helvetica Neue licensing, bundled weights, fallback.
5. Design DR-D07: spectrum allowance policy for website, free experiences,
   onboarding, daily product, executive views and reports; presentation and
   sales-deck usage stays UNRESOLVED pending inspection of the Gleb archive
   and representative current sales decks.
6. Messaging DR-01: approve the Messaging Core rule set (separate from
   illustrative lines).
7. Messaging DR-04: name the product-claim owner and evidence register for
   conditional verbs and interface benefits.
8. Messaging DR-03: evidence threshold for turning the AI-change tension and
   relief language into approved customer language.
9. Messaging DR-02: whether "chase AI" may enter English copy testing.
10. Messaging DR-05: locale governance model (semantic brief, separate PT-BR
    and PT-PT, Spanish target).
11. Messaging DR-06: boundary between evergreen rules and time-sensitive
    registers.
12. Design DR-D11: token and component ownership in code (named frontend
    lead and design owner).
13. Design DR-D10: Figma plan or workflow for durable parity.
14. Design DR-D12: first reference surfaces.

## 5. Unresolved design-owner and technical validations

- DR-D05 ink, canvas, secondary text, link, hairline, status values: AA
  contrast tests per pairing and canvas; rendered comparisons at 375 and
  1440; named design-owner validation.
- DR-D06 backdrop blur: rendered before and after of the Create Account
  frame; product-design confirmation; named design-owner validation.
- DR-D08 radius roles: side-by-side of 12/16/20 at 375 and 1440; design-owner
  validation.
- DR-D09 icon source: glyph inventory scan; Figma `icon` set coverage;
  design owner with the frontend lead.
- Technical: confirmation that the connector's one-page listing is a
  connector limit; Design Kit variable values via an enumerating seat or
  export; React 18/19 support path for `obenan-ui`; HeroUI migration
  timeline; ObiGEO primitive reuse under the whole-brain build.

## 6. Under-evidenced areas (declared, not concluded)

- Presentation and sales-deck discipline, including deck spectrum usage:
  Gleb archive and representative current decks not inspected.
- Figma pages beyond the covers of the three files; most Design Kit variable
  values.
- Backend-rendered PDF report typography.
- Deployment and live state of website and product (not verified by any
  artifact here).
- Customer-language validation per segment and locale (messaging DR-03,
  DR-05).

## 7. Steps to move a document from proposed to approved

1. Seven records the relevant decisions (design DR-D01 to DR-D12 as
   applicable; messaging DR-01 to DR-06) in `DECISIONS_LOG.md`, including
   rejected or narrowed recommendations.
2. Named owners complete the validations in section 5 and attach evidence
   without editing preserved research; design-owner validation is recorded
   for every DR-D05 to DR-D09 value before it appears in an approved file.
3. A curator prepares a clean promotion candidate containing only approved
   rules and explicitly approved wording or values; illustrative copy,
   candidate numbers, and unresolved items are excluded or marked
   conditional.
4. The candidate passes: link validation, duplicate-rule scan, forbidden
   status-language scan (no "approved", "canonical", "live", "shipped",
   "READY_TO_LOCK" without a recorded decision), and the research-preservation
   check (no artifact deleted or altered).
5. Seven approves the exact candidate files and their SHA-256 values.
6. The repository custodian copies the approved version into
   `knowledge/messaging/approved/` or `knowledge/design/approved/` with
   provenance, decision IDs, review date, refresh triggers, and no implied
   publication or deployment authority; the proposed version stays as
   historical decision evidence; `STATUS.md`, `knowledge/README.md`, and this
   manifest are updated.
7. Only then may a selective commit be prepared (explicit paths, never
   `git add .`), and only when Seven authorizes it.

## 8. Exact files for a future selective commit (when authorized)

Literal inventory. Every entry is one complete relative path: no ranges, no
globs, no implied paths. 44 paths total (5 tracked-modified, 39 untracked).

Tracked, modified (5):

1. `START_HERE.md`
2. `AGENTS.md`
3. `CLAUDE.md`
4. `STATUS.md`
5. `templates/AGENT_ROTATION_PROMPT.md`

Untracked, to add by explicit path (39):

6. `LOCK_CANDIDATE_MANIFEST.md`
7. `knowledge/README.md`
8. `knowledge/TASK_ROUTER.md`
9. `knowledge/messaging/README.md`
10. `knowledge/messaging/approved/README.md`
11. `knowledge/messaging/proposed/README.md`
12. `knowledge/messaging/proposed/MESSAGING_CORE_v2.md`
13. `knowledge/messaging/proposed/APPLIED_MESSAGING_GUIDE_v2.md`
14. `knowledge/messaging/proposed/EVIDENCE_APPENDIX_v2.md`
15. `knowledge/messaging/proposed/DECISION_REQUESTS_v2.md`
16. `knowledge/design/README.md`
17. `knowledge/design/approved/README.md`
18. `knowledge/design/proposed/README.md`
19. `knowledge/design/proposed/DESIGN_CORE_v1.md`
20. `knowledge/design/proposed/APPLIED_DESIGN_GUIDE_v1.md`
21. `knowledge/design/proposed/TOKEN_COMPONENT_CONTRACT_v1.md`
22. `knowledge/design/proposed/DECISION_REQUESTS_v1.md`
23. `reference/messaging/README.md`
24. `reference/messaging/sources/SOURCE_PROVENANCE.md`
25. `reference/messaging/sources/2026-02-28-diamond-v1.md`
26. `research/README.md`
27. `research/messaging/README.md`
28. `research/messaging/2026-08-storybrand-luxury-refresh/README.md`
29. `research/messaging/2026-08-storybrand-luxury-refresh/SESSION_REGISTRY.md`
30. `research/messaging/2026-08-storybrand-luxury-refresh/01-source-integrity.md`
31. `research/messaging/2026-08-storybrand-luxury-refresh/02-storybrand.md`
32. `research/messaging/2026-08-storybrand-luxury-refresh/03-behavioral-science.md`
33. `research/messaging/2026-08-storybrand-luxury-refresh/04-luxury-service.md`
34. `research/messaging/2026-08-storybrand-luxury-refresh/05-voice-of-customer.md`
35. `research/messaging/2026-08-storybrand-luxury-refresh/06-painkiller-peer-voice.md`
36. `research/messaging/2026-08-storybrand-luxury-refresh/07-agentic-trust.md`
37. `research/messaging/2026-08-storybrand-luxury-refresh/08-cross-cultural.md`
38. `research/messaging/2026-08-storybrand-luxury-refresh/CLAUDE_CODE_REVIEW_HANDOFF.md`
39. `research/messaging/2026-08-storybrand-luxury-refresh/reviews/README.md`
40. `research/messaging/2026-08-storybrand-luxury-refresh/reviews/CLAUDE_CODE_UNMUTED_REVIEW.md`
41. `research/design/2026-08-unified-design-discipline/README.md`
42. `research/design/2026-08-unified-design-discipline/EVIDENCE_LEDGER.md`
43. `research/design/2026-08-unified-design-discipline/FIGMA_CODE_PARITY_AUDIT.md`
44. `research/design/2026-08-unified-design-discipline/DRIFT_REGISTER.md`

Deliberately excluded, one literal path: `.claude/project-snapshot.json`
(local tool artifact). No archive file is present in the working tree; the
`.gitignore` patterns for archives are exclusions, not inventory entries.

No commit, push, tag, release, or deployment has been made or is authorized
by this manifest.
