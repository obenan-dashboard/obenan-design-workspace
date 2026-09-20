# Obenan Design and Product Library Map

Use this page when you know what you need but not where it lives. It is the
stable front door for people and agents. Start with `START_HERE.md` for rules
and authority; use this map for retrieval.

## Find it in 60 seconds

| Need | Start here | What is there |
| --- | --- | --- |
| Brand story and customer language | [`knowledge/messaging/proposed/`](knowledge/messaging/proposed/) | Proposed story, voice, copy patterns, claim gates, and evidence appendix |
| Brand and design rules | [`reference/design-principles/`](reference/design-principles/) | Product UI principles, website system, emotion spec, imagery register, and asset-library rules |
| Brand books and logo references | [`reference/brand-assets/quick-start/`](reference/brand-assets/quick-start/) | Branding PDFs and legacy logo references for orientation |
| Motion designs and teasers | [`reference/brand-assets/MOTION_INDEX.md`](reference/brand-assets/MOTION_INDEX.md) | Direct routes to rendered videos, logo loops, social motion, UI motion, Lottie files, After Effects projects, and ZIP source packages |
| Complete Gleb source library | [`reference/brand-assets/original/Gleb/`](reference/brand-assets/original/Gleb/) | Byte-preserving individual-file mirror of the original source tree |
| Product UI/UX mapping | [`knowledge/product/README.md`](knowledge/product/README.md) | Dated dashboard map, status, safe public overview, and restricted-source provenance |
| Design operating core | [`knowledge/design/README.md`](knowledge/design/README.md) | Proposed design core, applied guide, token/component contract, and pending decisions |
| Research and evidence | [`research/README.md`](research/README.md) | Evidence index, provenance, limitations, audits, and disagreement records |
| Reusable agent handoff | [`templates/AGENT_ROTATION_PROMPT.md`](templates/AGENT_ROTATION_PROMPT.md) | Full instruction for a new design or messaging agent |

## Predictable repository pattern

```text
knowledge/
  design/       operating design knowledge and decision requests
  messaging/    story, voice, copy, and claim knowledge
  product/      dated product UI/UX observations and maps
reference/
  brand-assets/ original and quick-start visual/motion assets
  design-principles/ durable design and website reference documents
  messaging/    preserved messaging source material
research/       evidence, audits, provenance, and limitations
templates/      agent handoff instructions
```

Every new durable knowledge family must have a `README.md` that states:

1. what the family contains;
2. whether it is observed evidence, proposed guidance, approved canon, legacy
   reference, or a source asset;
3. its provenance and date;
4. what an agent may and may not infer from it;
5. where updates belong.

## Status and authority

Availability is not approval. The legacy rainbow identity is reference only;
proposed design and messaging documents are not approved canon; a dated
product map is observed evidence, not a product contract. This repository
does not grant authority to publish, merge, deploy, or change production.

For exact states, read [`STATUS.md`](STATUS.md). For task-specific retrieval,
use one row from [`knowledge/TASK_ROUTER.md`](knowledge/TASK_ROUTER.md).
