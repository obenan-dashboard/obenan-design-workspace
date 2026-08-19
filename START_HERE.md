# Start Here

Portable Obenan design workspace for any human or agent working on
customer-visible design and messaging: design sources, original old-logo
variants, both brand guideline PDFs, the messaging and design research, and
the proposed operating documents. This is design context, not a production
codebase and not authority to publish, merge, or deploy.

## Two connected systems

- Operating system: the smallest set of rules an agent needs to execute one
  task consistently (Layers 1 to 3).
- Evidence library: the complete research corpus, provenance, audits,
  disagreements, alternatives, and history (Layer 4), retrieved when the task
  requires it, never deleted to make the operating system shorter.

## The four layers

| Layer | Read when | Files |
| --- | --- | --- |
| 1. Start and route | Always, first | `START_HERE.md`, `AGENTS.md`, `STATUS.md`, `knowledge/README.md`, plus `CLAUDE.md` for Claude Code. `knowledge/TASK_ROUTER.md` is Layer 1 by role, read one row at a time |
| 2. Operating core | Per your router row | The messaging and design cores under `knowledge/*/proposed/`, with the two `DECISION_REQUESTS` files beside them |
| 3. Task-specific application | When the task touches that surface | The applied guides, the token and component contract, and the surface rules in `reference/design-principles/` |
| 4. Evidence and research | On the retrieval triggers in `AGENTS.md` | `research/README.md` (evidence index) and everything it maps |

Cores and guides are PROPOSED, not approved, not canonical, until Seven
records a decision; `knowledge/*/approved/` is empty until then. `STATUS.md`
and `LOCK_CANDIDATE_MANIFEST.md` hold each file's exact state.

## Task types

Homepage or marketing copy; website visual and interaction design; product or
dashboard UX and UI; onboarding and conversion flows; sales presentation or
commercial collateral; email and communication design; identity or logo use;
token or component implementation; claims, metrics, or evidence review;
research or strategy audit.

## Retrieving your routing row

Do not read the whole router. Open `knowledge/TASK_ROUTER.md`, read its short
legend, and retrieve only the row for your task type, for example:

```bash
grep -n "^| Identity or logo use" knowledge/TASK_ROUTER.md
```

That row names your mandatory reads beyond Layer 1, task-specific reads,
research to consult only when relevant, files not to preload, unresolved
gates, and whether you may proceed as PASS or PARTIAL, or must STOP. If no row
matches, take the nearest and record the mismatch. Stop authority is
`AGENTS.md`, not the routed documents.

## Identity and authority orientation

Identity assets (brand guideline and wave-reference PDFs, logo SVGs for light
and dark backgrounds, wave mark) are in `reference/brand-assets/quick-start/`
with its own README; inventory in `FILE_INDEX.tsv` and `MANIFEST.sha256`, path
map in `PORTABLE_PATH_MAP.md`. Reuse them; never redraw, retype, recolor, or
regenerate. The rainbow logo is identity reference, not permission to
reintroduce it on a current surface: DR-D01 governs its status for new
surfaces (bytes source-verified, authority unresolved) and DR-D07 its spectrum
usage.

Hierarchy: brand book for identity; `DESIGN_PRINCIPLES_2026.md` for product
UI; `BRAND_SYSTEM.md` for the website; the dated brand-emotion spec (draft,
human approval required) for website emotion and imagery; the Factory Girl
register and its gates for hospitality imagery. Code authority follows the
rule stated in `AGENTS.md`: verified code binds implementation reality at the
inspected Git reference, never design intent, brand direction, deployment, or
live state. Production code and release evidence are not bundled here.
Exploratory frames, legacy assets, local branches, agent output, and previews
are not canonical by themselves.

Figma files and the FULL Gleb archive
(`Obenan-Design-Workspace-for-Ceren-2026-08-16-FULL.zip`) are listed in
`research/README.md`; DR-D02 decides which Figma file is canonical, and the
archive is unaudited, so presentation and social material stay outside
coverage.

## Starting an agent

Open this folder as the agent workspace. Tell the agent:

> Read `START_HERE.md`, `AGENTS.md`, `STATUS.md`, and `knowledge/README.md`
> completely (Claude Code also reads `CLAUDE.md`). State your task type,
> surface family, requested outcome, authority granted, selected reading
> bundle, and known unresolved gates. Retrieve only your row from
> `knowledge/TASK_ROUTER.md`, read only that bundle, then return the preflight
> required by `AGENTS.md` before implementation.

The fuller reusable instruction is in `templates/AGENT_ROTATION_PROMPT.md`.
