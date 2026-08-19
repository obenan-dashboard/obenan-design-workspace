# Knowledge index

Layer 1 routing file. It lists the operating documents and points to the
evidence library; it adds no rules. Exact per-file state: `../STATUS.md` and
`../LOCK_CANDIDATE_MANIFEST.md`. Task bundles: retrieve one row from
[TASK_ROUTER.md](TASK_ROUTER.md) (do not preload it).

## Layer 2: operating core

| File | What it is | Status |
| --- | --- | --- |
| [messaging/proposed/MESSAGING_CORE_v2.md](messaging/proposed/MESSAGING_CORE_v2.md) | North star, customer tension, story roles, voice, language families, claim-state ladder, fast tests | PROPOSED; DR-01 to DR-06 open |
| [design/proposed/DESIGN_CORE_v1.md](design/proposed/DESIGN_CORE_v1.md) | North star, conditional arrival test, seven principles, constants, surface matrix, grammar, pattern classes, proposed design-quality checklist | PROPOSED; DR-D01 to DR-D12 open |
| [messaging/proposed/DECISION_REQUESTS_v2.md](messaging/proposed/DECISION_REQUESTS_v2.md) | Messaging decisions and promotion sequence | FOUNDER DECISIONS REQUIRED |
| [design/proposed/DECISION_REQUESTS_v1.md](design/proposed/DECISION_REQUESTS_v1.md) | Design decisions (founder) and validations (design owner, technical) | AWAITING DECISION |

## Layer 3: task-specific application

| File | Use for |
| --- | --- |
| [messaging/proposed/APPLIED_MESSAGING_GUIDE_v2.md](messaging/proposed/APPLIED_MESSAGING_GUIDE_v2.md) | Copy hierarchy, surface patterns, claim gates, locale requirements, checklists |
| [messaging/proposed/EVIDENCE_APPENDIX_v2.md](messaging/proposed/EVIDENCE_APPENDIX_v2.md) | Messaging audit trail, evidence states, product-proof gates |
| [design/proposed/APPLIED_DESIGN_GUIDE_v1.md](design/proposed/APPLIED_DESIGN_GUIDE_v1.md) | Per-surface application, examples, observed failure patterns, cross-cutting contracts, full pattern register |
| [design/proposed/TOKEN_COMPONENT_CONTRACT_v1.md](design/proposed/TOKEN_COMPONENT_CONTRACT_v1.md) | Precedence, token families, Figma-to-code mapping, component taxonomy and states, motion, parity, migration, tests |
| `../reference/design-principles/` | Surface rules treated as current or draft: product UI, website, assets, brand-emotion spec (draft), imagery register |

## Approved knowledge

`messaging/approved/` and `design/approved/` hold founder-approved canon only
and are empty by design until Seven records decisions and a curator promotes an
exact candidate. Lane rule: [messaging/README.md](messaging/README.md);
promotion steps: `../LOCK_CANDIDATE_MANIFEST.md`.

## Layer 4: evidence library

Retrieve through [../research/README.md](../research/README.md), which maps
every artifact (messaging and design families separate) with its question,
scope, cutoff, limitations, status, and the rules it informs.

Operating rules, retrieval triggers, and PASS, PARTIAL, STOP:
[../AGENTS.md](../AGENTS.md).
