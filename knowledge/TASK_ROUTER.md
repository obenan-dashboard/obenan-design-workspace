# Task router

Layer 1 routing reference. Not a mandatory first read: retrieve only the legend
and the single row for your task type, then stop. The mandatory bundle is
`../START_HERE.md`, `../AGENTS.md`, `../STATUS.md`, `README.md`, and, for
Claude Code, `../CLAUDE.md`.

Retrieve one row:

```bash
grep -n "^| Website visual" knowledge/TASK_ROUTER.md
```

Replace the quoted text with your task type from the list in `../START_HERE.md`.
Read the legend below plus that row. Do not preload the whole table.

"Do not preload" means retrieve only on a trigger in `../AGENTS.md`, then cite.
Proceed states (PASS, PARTIAL, STOP) and the hard-stop conditions are defined
in `../AGENTS.md`; DC section 8 supplies a proposed design-quality checklist.

## Legend (relative paths from the workspace root)

- MC `knowledge/messaging/proposed/MESSAGING_CORE_v2.md`; AMG
  `knowledge/messaging/proposed/APPLIED_MESSAGING_GUIDE_v2.md`; MEA
  `knowledge/messaging/proposed/EVIDENCE_APPENDIX_v2.md`; MDR
  `knowledge/messaging/proposed/DECISION_REQUESTS_v2.md` (DR-01 to DR-06)
- DC `knowledge/design/proposed/DESIGN_CORE_v1.md`; ADG
  `knowledge/design/proposed/APPLIED_DESIGN_GUIDE_v1.md`; TCC
  `knowledge/design/proposed/TOKEN_COMPONENT_CONTRACT_v1.md`; DDR
  `knowledge/design/proposed/DECISION_REQUESTS_v1.md` (DR-D01 to DR-D12)
- DP `reference/design-principles/DESIGN_PRINCIPLES_2026.md`; BS
  `reference/design-principles/BRAND_SYSTEM.md`; BE
  `reference/design-principles/BRAND_EMOTION_WEBSITE_SPEC_2026-08-13.md`
  (draft); BAL `reference/design-principles/BRAND_ASSET_LIBRARY.md`; ASSETS
  `reference/brand-assets/README.md` and `reference/brand-assets/quick-start/`
- EI `research/README.md` (evidence index); R01 to R08 the eight reports and
  REV `reviews/CLAUDE_CODE_UNMUTED_REVIEW.md` under
  `research/messaging/2026-08-storybrand-luxury-refresh/`; LEDGER, DRIFT,
  PARITY the three files under `research/design/2026-08-unified-design-discipline/`
  (`EVIDENCE_LEDGER.md`, `DRIFT_REGISTER.md`, `FIGMA_CODE_PARITY_AUDIT.md`)

## Rows

| Task type | Mandatory first reads (beyond Layer 1) | Task-specific reads | Research only when relevant | Do not preload | Unresolved gates | Proceed |
| --- | --- | --- | --- | --- | --- | --- |
| Homepage or marketing copy | MC | AMG; MDR; BS (copy, CTA, FAQ rules); DC section 2 if layout is touched | R05, R06, R08 (locale), R01 (if February material is cited), REV | R02, R03, R04, R07 unless a claim needs them; all design research; Gleb archive | MDR DR-01 to DR-06; locked public chrome labels | PARTIAL: illustrative, noncanonical copy only; STOP for a capability verb without a claim record or a locked chrome label change |
| Website visual and interaction design | DC | ADG sections 2 and 3; BS; BE; TCC | DRIFT, PARITY, LEDGER; DP Part IV | Messaging research; Gleb archive; Figma flow files | DDR DR-D01, DR-D05 to DR-D09, DR-D07; BE human gates; locked surfaces | PARTIAL with candidate tokens recorded; STOP for a locked-surface change without approval record or a non-approved identity asset |
| Product or dashboard UX and UI | DC | ADG sections 4 and 5; TCC sections 5 to 7; DP Parts III and V | DRIFT D04, D09, D12, D13; PARITY; LEDGER section 5 | BS; messaging research; Gleb archive | DDR DR-D05, DR-D06, DR-D08, DR-D09, DR-D11, DR-D12 | PARTIAL; STOP for a collapsed or misrepresented claim state, or a safety or accessibility defect |
| Onboarding and conversion flows | DC; MC | ADG sections 3 and 4; AMG (free-value, demo, conversion); TCC (Field, Button, Progress) | PARITY (onboarding nodes); R07; R08 | R02, R03, R04; Gleb archive | DDR DR-D06, DR-D12; MDR DR-04, DR-05 | PARTIAL; STOP for a capability claim without a claim record |
| Sales presentation or commercial collateral | MC | AMG (sales presentations); DC section 5 (presentation row); ADG section 7 | R04, R06, R07; REV section 5 | Design research; TCC | Presentation discipline under-evidenced; presentation spectrum UNRESOLVED (Gleb archive and current decks not inspected); MDR DR-04; testimonial and figure provenance | PARTIAL (interim floor: identity reuse, claim rules, verbatim customer voice); STOP for an unverified customer quote or metric, or a non-approved logo treatment |
| Email and communication design | MC; DC | AMG (communication design); ADG section 8; TCC section 2.2 | R06 (service recovery); R08; LEDGER (locked email template facts) | PARITY; Gleb archive | Verification email is a locked surface in `origin/main`; DDR DR-D04 | PARTIAL; STOP for a locked template change without approval record |
| Identity or logo use | DC sections 4 and 7 | BAL; ASSETS; DDR DR-D01 and DR-D07 | LEDGER S3 and S20; DRIFT D01 and D14 | Messaging research; TCC migration detail | DDR DR-D01, DR-D07; FULL archive not bundled | PARTIAL only for reuse of the existing asset where `origin/main` already references it; STOP for a new surface family, any redraw, regeneration, recolor, or spectrum use beyond the logo without approval |
| Token or component implementation | DC | TCC (all); DDR DR-D05 to DR-D12; DRIFT; PARITY | LEDGER sections 3 and 5; whole-brain read-only | Messaging research; brand PDFs | DDR DR-D11, DR-D05 to DR-D09, DR-D10; exact authorized repository ceiling per `../AGENTS.md` | PARTIAL (aliases and candidates, no final values); STOP without an exact authorized repository and path ceiling |
| Claims, metrics, or evidence review | MC (claim ladder); MEA | AMG (claim gates); MDR DR-04; DC section 8 | R01, R07; REV; LEDGER | Visual guides | MDR DR-04 | PASS for read-only review; STOP if asked to publish or approve an unverified claim |
| Research or strategy audit | EI | `research/messaging/README.md`; the run READMEs and `SESSION_REGISTRY.md`; `reviews/README.md` | Any listed artifact, cited | Nothing excluded; nothing copied without citation | No approval authority; preserved research is read-only and single-owner | PASS for read-only audit; PARTIAL for new research written to one assigned file |

A task that matches no row: pick the nearest row, record the mismatch in your
opening statement, and treat the gap as PARTIAL rather than inventing a bundle.
