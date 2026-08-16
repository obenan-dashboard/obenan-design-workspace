---
status: living North Star, foundation for all Obenan product surfaces 2026 to 2028
authors:
  - Advisor distillation 2026-05-10
  - Inputs: legacy Obenan Branding Guidelines, 2024 Brand Guidelines '24 (111-frame Figma deck), Claude Opus 4.7 deep research, ChatGPT 5.5 Pro deep research, BRAND_SYSTEM.md, BRAND_ASSET_LIBRARY.md
date: 2026-05-10
companion_files:
  - /Users/sevenerhan/obenan-landing-page/BRAND_SYSTEM.md (landing page brand governance)
  - /Users/sevenerhan/obenan-landing-page/BRAND_ASSET_LIBRARY.md (canonical assets)
  - /Users/sevenerhan/obenan-landing-page/research/2026-05-10-claude-deep-research-design-principles.md
  - /Users/sevenerhan/obenan-landing-page/research/2026-05-10-chatgpt-deep-research-design-principles.md
  - /Users/sevenerhan/obenan-landing-page/research/2024-legacy-obenan-branding-guidelines.md
  - Figma Brand file (current): https://www.figma.com/design/H3KZZ7qkFhFQLcCxBGtw1j/Brand
  - ObiGEO three-lens design floor: /Users/sevenerhan/ObiGEO/spec/features/three-lens-design-floor.md
consumed_by:
  - ObiGEO Wave I-D and later executor briefs
  - obenan-landing-page surfaces and future iterations
  - Any new Obenan product surface (paid app, marketing pages, partner integrations)
  - Codex orchestrator when composing Wave-N briefs (mandatory preflight read)
---

# Obenan Design Principles 2026 to 2028
## The North Star

## Preamble

This document is the North Star for Obenan product and surface design from 2026 forward.

Three inputs compose it. The brand legacy (Helvetica Neue, the `obenan` wordmark, the spectrum gradient logo, the multi-hue palette, the greyscale ramp) gives the product its identity bond, the thing that makes it recognizably Obenan to anyone who has seen the brand before. The 2024 Brand Guidelines '24 deck (111 frames, five sections, the rainbow wave logo, `--Black` at `#0F0F14` as cool near-black, the capsule-spectrum atmosphere motif) gives the product its current visual maturity, the way Obenan looks today across cover art, marketing, and applied design. The 2026 deep research (Claude Opus 4.7 and ChatGPT 5.5 Pro, distilled below) gives the product its forward direction for the AI-native era, the way Obenan must look as it builds category-defining products like ObiGEO.

The North Star is not a tearaway from the existing brand. It is the brand's next instance for category-defining AI products. ObiGEO is the first surface to land this North Star in full. Obenan's other surfaces (landing page, partner pages, paid app, future products) inherit it as they evolve.

**Precedence rules.** When this document and any legacy artifact conflict, Part I principles take precedence. When the principles conflict with the 2024 brand book, the brand book wins on identity questions (logo form, wordmark, primary typeface). The principles win on product UI questions (density, evidence, motion, mirror metaphor, anti-Liquid-Glass posture).

**Living document.** Each Wave that ships should feed back. New principles join the list when an iteration teaches something durable. Stale principles get amended with the date and reason.

---

## Part I. The Five Non-Negotiable Principles

These five bind every Obenan product surface from 2026 forward. They are derived from the convergent points across both deep research outputs and reconciled with the brand legacy and 2024 deck.

### Principle 1. Material is meaning, never decoration.

The surface must feel like what it is, not like a polished window. ObiGEO holds up a mirror to show merchants what AI sees about them; that mirror is an interaction contract (evidence + memory + response), not a glass effect. Apple's Liquid Glass (iOS 26, shipped September 2025) is the exact failure mode to refuse: translucency, refraction, specular highlights, floating layered chrome simulate the appearance of meaning without carrying it. Every visual choice answers the question "does removing this effect lose information?" If yes, keep it. If no, remove it.

**Why this matters now.** Every SaaS product that defaults to shadcn + Geist + slate-50 + rounded-2xl will look identical in 2026 to 2027, and every product that inherits Apple's refractive vocabulary will look like its imitator. Material-as-meaning is the only structural escape from that convergence.

### Principle 2. Data is the material.

Where other products explain data with prose, Obenan surfaces let the data itself carry the first read. The 2024 to 2026 anti-dashboard turn (Linear Insights, Vercel Observability, Fey, Plausible, Resend, Anthropic Console, Mercury) replaced "feature grid + percentage trend chip + paragraph card" with dense ledgers, sparklines, small multiples, tabular monospaced numerals, and time-axis-as-substrate. ObiGEO follows that turn. The three lenses (AI Indexability, AI Discoverability, AI Reputation) are bands of substrate, not three explained tiles.

**Concrete rule.** Cleveland and McGill perceptual ranking holds. Position on a common scale and length are the strongest channels; angle, area, and color saturation are the weakest. Use sparklines, bullet graphs, fact grids, and small multiples. Never use gauges, donuts, or hue-encoded magnitude on a glance screen.

### Principle 3. One proprietary atomic unit.

Stripe has its generative wave (in marketing only). Linear has the issue-ID monospace stamp. Vercel has Geist typography. Things has the satisfying checkbox. Mercury has the Arcadia typeface and purple-not-blue. Each survives convergence because of one repeatable atomic unit, computationally cheap, semantically welded to what the product does.

ObiGEO's atomic unit is composed:

- The **Wave Mark** plus the **obenan wordmark** as the identity bond (inherited verbatim from the 2024 brand book; never altered).
- The **Mirror Line** plus the **Citation Stamp** plus **three lens reflectance values** as the product signal (defined in Part III).
- The **capsule spectrum motif** as atmospheric environment (inherited from the 2024 brand cover; never altered).

Every Obenan surface carries identity (Wave + wordmark) plus, where applicable, the product signal (Mirror Line + Citation Stamp). Marketing surfaces may add atmosphere (capsule spectrum). Atmosphere never enters the product UI.

### Principle 4. Honest seams.

AI-native credibility in 2026 is earned by making the model's seams visible: honest absence, run-to-run variance, per-engine identity, evidence as first-class object, clean separation of observation vs inference vs recommendation. Stripe Radar (observed signals, inferred score, risk level, recommended action) is the canonical four-layer outcome model. NotebookLM, Glean Deep-Linked Citations, Anthropic Citations API, Perplexity Model Council are the citation and disagreement templates.

ObiGEO surfaces explicitly carry five engine outcome states: **found and correct**, **found but partial**, **found and wrong**, **not found**, and **found but stale**. Plus engine execution states (engine_not_supported, not_returned, not_observable, not_applicable, refused, timed_out, unusable, limited_coverage, proof_latency, freeze, cancellation, unavailable). The surface refuses to flatter.

### Principle 5. Glance economy.

Cognitive load research is unambiguous on direction (numeric ceilings less so). Dashboards are read at a glance; complexity, information load, and poor layout measurably worsen user effort; attention follows the F-pattern strongly biased to upper-left.

**Operational rules.**

- Per pillar card: one label, one number or state, one inline trend or evidence marker, one short clause if needed.
- Hard ceiling per pillar card body (working number, may be revised): 24 words headline plus subhead, 60 words body before expand-on-demand.
- Long-form goes behind a Shneiderman "details on demand" expansion, never on the glance layer.
- Hue is reserved for the single anomaly that must pop. Greyscale carries the rest.
- Newspaper test: if a screen reads like an article, the screen failed.

---

## Part II. Brand inheritance — what makes it Obenan

This part preserves the identity bond. Wave I-D and every later wave inherits these tokens; they are not invented per surface.

### Wordmark and logo

The Obenan logo is the **rainbow wave mark** sitting above the lowercase **`obenan`** wordmark, both rendered in the proprietary fluid gradient. The legacy guidelines describe "a fluid gradient in various shapes"; the 2024 deck formalized this as the smooth horizontal wave running the full spectrum (red, orange, yellow, green, blue, purple, pink).

Logo system rules:
- Available at 4x, 2x, and 1x scales.
- Variants: primary (wave plus wordmark), circular, square, outlined.
- Canonical asset paths live in `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/logos/`.
- The wave is identity. The capsule-spectrum motif on marketing surfaces is atmosphere. These are two distinct visual systems; never confuse them in a product surface.

### Typography

Primary typeface: **Helvetica Neue**. This is unchanged from legacy through 2024 brand book and remains canonical.

- Headlines and subheads: Helvetica Neue Light.
- Body text and paragraphs: Helvetica Neue Regular.
- Tabular numerals enabled on every product surface that renders quantities.
- Long translated strings may not collapse the layout; locked engine names (ChatGPT, Gemini, Perplexity) are never translated.

No display typeface competes with the data. No commissioned secondary face unless explicitly ratified.

### Color foundation

The Obenan color system has three layers. Use them in this order.

**Layer 1: Neutrals (the workspace).** Most surface area lives here.

- White: `#FFFFFF`
- Greyscale ramp (legacy, retained):
  - B-3: `#F7F7F7` (lightest off-white canvas)
  - B-6: `#F0F0F0` (soft off-white canvas)
  - B-10: `#E6E6E6` (dividers, subtle surface)
  - B-24: `#C2C2C2` (placeholder, low-emphasis)
  - B-40: `#999999` (secondary type)
  - B-60: `#666666` (body type on light)
- Cool near-black: `--Black` = `#0F0F14` (2024 brand book; primary dark surface)
- Pure black: `#000000` (legacy + 2024 cover; reserved for marketing covers and rare contrast moments, not standard product surface)

**Rule:** product surfaces default to `--Black` `#0F0F14`, never pure `#000000`. Pure black is for cover art only.

**Layer 2: The spectrum (identity and atmosphere).** The full Obenan hue palette is wide. It exists for marketing atmosphere, the logo wave, and rare brand moments. It does NOT scatter across product UI.

From legacy:
- Aqua family: `#00BDEA`, `#29D6FF`, `#9BECFF`
- Blue family: `#598AFF`, `#8FB0FF`, `#C3D5FF`
- Violet family: `#9289F9`, `#BAB4FF`, `#DAD6FF`
- Pink family: `#FE5B9A`, `#FF9FC4`, `#FFC1D9`
- Red family: `#FF4A4A`, `#FF8686`, `#FFB0B0`
- Yellow family: `#FFAD4A`, `#FFC885`, `#FFDAAD`
- Green family: `#1BC47D`, `#4DE7A6`, `#8CF9CB`

**Canonical 12-stop gradient (extracted verbatim from production `Logo.svg`).** This is the exact stop sequence used in the wave logo and the only authorized form of the spectrum gradient. The legacy 10-stop list was an approximation. The verified canonical sequence is:

| Stop | Color | Note |
|------|-------|------|
| 0.0% | `#E9C100` | Warm gold (origin) |
| 11.1% | `#FB1B33` | Red |
| 22.2% | `#CB0E9D` | Magenta |
| 22.6% | `#C6119F` | Transition |
| 28.6% | `#8B40BE` | Purple |
| 33.0% | `#6062D4` | Indigo |
| 44.4% | `#37B9E3` | Cyan |
| 55.0% | `#00A4E3` | Sky blue |
| 66.0% | `#15CFD9` | Teal |
| 77.0% | `#80C3AD` | Green-grey |
| 88.0% | `#EE9700` | Orange |
| 100.0% | `#F67900` | Warm orange (return) |

The gradient is cyclic-warm: it begins at warm gold and ends at warm orange so the sequence loops gracefully when tiled. The wave path is rendered with three stacked fills: a `#FF00FF` magenta base, the linear gradient above, and a 30% white highlight. An inner shadow filter creates the dimensional depth.

**Rule:** the full spectrum is for the logo wave, marketing capsule motif, and brand moments. Product surfaces use neutrals plus at most one accent hue per surface. The legacy color-pairing rules (Green and Cream, Blue and Sky Blue, Red and Beige, Purple and Pink) describe marketing combinations and do not bind product UI.

**Layer 3: ObiGEO lens reflectance (product signal).** Defined in Part III.

### Surface treatment baseline

From BRAND_SYSTEM.md and 2024 deck, retained:

- Default content frame: `max-w-[1380px]`.
- Soft off-white section backgrounds: `#F7F7F7` and `#F0F0F0`, paired with white card islands for denser content.
- Card and content block radius family: 24 px to 32 px.
- Rules and dividers: 1 px hairlines at low opacity.
- No elevation/shadow as hierarchy substitute. Use rule lines, alignment, and tonal differences.
- No `backdrop-filter` translucent chrome. One exception: a single modal that pauses the surface for a single decision.

### Motion baseline

Inherited verbatim from BRAND_SYSTEM.md:

- Motion clarifies state, never decorates.
- One focal interaction moment per screen with controlled aura or glow.
- The strongest patterns: state progression, guided reveal, subtle operating-surface transitions, one focal moment.
- Existing motion asset paths in `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/motion/ui/` (assistant, insights, overview, onboarding) form the motion vocabulary. Inherit, do not invent.
- Reduced-motion preferences preserved across every motion.

### Voice and StoryBrand spine

From Frame 02 of the 2024 deck (verbatim brand voice):

> "Obenan is an AI-native solution that autonomously manages the entire digital presence of physical businesses. Listings, reviews, content, reputation, and discoverability across search engines and AI assistants. All handled automatically. Your AI talks to our AI. No login required."

> "Our logo represents the bond between the digital and physical realms, between the business you built and the AI that makes sure customers find it."

StoryBrand assignments:
- Hero: the merchant (the restaurant owner, the local business operator).
- Guide: Obenan.
- Bond / proof object: the rainbow wave logo, and within ObiGEO specifically, the three-lens mirror.

Voice constraints:
- Never use "AI-powered" framing.
- Never position Obenan as a "Local SEO" company.
- Avoid self-referencing as "platform", "software", or "tool" when stronger wording exists.
- Lead with outcomes, never internal mechanics.
- No em-dashes or en-dashes anywhere in customer-facing copy (and not in code, tests, or PR descriptions either).

---

## Part III. ObiGEO product primitives

These are the proprietary signals ObiGEO claims, expressed as agent-consumable primitives. They translate Part I principles plus Part II inheritance into concrete product UI moves.

### The Mirror Line

A single 1 px horizontal optical seam, positioned consistently relative to viewport baseline across every ObiGEO surface (marketing, app, docs, PDF reports, emails). Above the line: "what the merchant publishes" (canonical entity data). Below: "what AI sees" (the indexed reflection from ChatGPT, Gemini, Perplexity). Asymmetry between above and below is visible by construction.

The Mirror Line encodes Reciprocity (equal optical weight to merchant and AI) and Honesty (visible difference when reflection diverges from source).

### The Citation Stamp

A custom monospace tag: `OBI-<lens>-<entity>-<source>` (for example, `OBI-DSC-7421-PPLX` for a Discoverability observation about entity 7421 sourced from Perplexity). Linear-style permanence: each stamp is the smallest reproducible artifact that travels into URLs, share links, agent conversations, MCP tool returns, and PDF report margins.

The Citation Stamp encodes Memory (every reflection has a permanent address).

### Three lens reflectance values

Each of the three lenses carries one tonal value plus typography. Never a second hue, never a gradient inside the panel.

- **AI Indexability** uses a graphite/ink tonal axis. Metaphor: the printed-page register. Question the lens answers: "Does AI know your business facts?"
- **AI Discoverability** uses a single warm amber tonal value. Metaphor: light hitting a surface. Question: "Does AI recommend you when customers ask?"
- **AI Discoverability outcome states (locked):** won, generic, competitor named, missing, uncertain (five states).
- **AI Reputation** uses a single cool slate tonal value. Metaphor: the tarnish of memory. Question: "What does AI believe about you, with what freshness?"

AI Indexability outcome states (locked): correct, partial, wrong, missing (four states).
AI Discoverability outcome states (locked): won, generic, competitor named, missing, uncertain (five states).
AI Reputation states: composition (sentiment, strengths, concerns, trust signals, comparison notes) plus temporal context (freshness, evidence window, freeze, cancellation, limited evidence, proof latency).

The three lens tonal values are the product signal. They are subordinate to the brand neutrals; they do not introduce a new palette layer.

### Engine identity as material presence

ChatGPT, Gemini, Perplexity are treated as living material presences inside the mirror surface, not as logos.

- Each engine has a distinct material signature (texture, refractive behavior, light behavior) inside the mirror itself.
- Each engine has a distinct color signal that meets WCAG 2.2 AA contrast.
- Engine names appear as type (Helvetica Neue), not as logos.
- The trio is always shown together when the lens is shown. An engine that returned no reading still signals state on the surface.
- No fourth engine.
- No logo wall as a substitute for material identity.

### The data primitives per lens (replaces text card stacks)

- **AI Indexability:** fact-by-fact grid. Rows are facts (address, hours, founder, category, contact). Columns are the three engines. Cell state is the locked four-state outcome. The grid is the headline, not the supporting detail. Engine cards with paragraphs are forbidden.
- **AI Discoverability:** prompt-by-prompt rows. Each customer prompt is one row showing the locked five-state outcome per engine, with a citation glyph indicating evidence attached. Truncated prompt strings reveal full text on hover, focus, or tap.
- **AI Reputation:** composition primitive (segmented composition, radial composition, layered band, executor creative range), with freshness as a time band on the same primitive. Bar charts are forbidden here. Star ratings are forbidden everywhere on the surface.

### Absence vocabulary

A family of distinct absence primitives capped at four, covering:
1. Engine-side execution states (engine_not_supported, not_returned, not_observable, not_applicable, refused, timed_out, unusable).
2. Limited coverage and proof latency.
3. Freeze and cancellation (the merchant chose to pause).
4. Residual unavailable category.

Each absence state is labeled in v4 merchant language, never with raw enum values. Anticipation animation is forbidden when no real signal exists.

### Layout and sitemap

- Sitemap rule: three lenses are sublenses inside one operating view, not three first-class top-level routes. Existing routes (`/app`, `/app/operation`, `/app/weekly-report`) become rotation-aware containers.
- Mobile: vertical stack of three lenses by default; each lens fully present.
- Desktop form: three connected mirror panels sharing one continuous surface (not three cards).

### Action grip

Three-layer Stripe Radar pattern, mandatory:

1. **Observed.** Plain typography, no chrome. ("Gemini cited competitor X in 18 of 20 prompts; cited Business in 0 of 20.")
2. **Inferred.** Numeric pill with confidence interval. ("Discoverability index 12 plus or minus 4.")
3. **Recommended.** Distinct accent color, with explicit "Why this?" expandable tracing back to inferred and observed.

Observation, inference, and recommendation are never visually conflated.

---

## Part IV. Anti-mimicry — explicit never-copy list

ObiGEO and Obenan surfaces refuse the following. Any executor that adopts them has failed the floor regardless of other quality signals.

### Apple Liquid Glass (iOS 26, macOS Tahoe 26, shipped September 2025)

- No `backdrop-filter: blur(...)` chrome behind navigation or controls.
- No specular highlights on cards, buttons, icons.
- No refractive lensing or chromatic aberration at edges.
- No floating morphing pill chrome that shrinks on scroll.
- No translucent layered icon stacks.
- No Dynamic-Island-style morphing containers.
- No physics-simulated controls.

### Profound, Peec, and the dashboard collage convention

- No 6 to 12 KPI feature grid.
- No "62 percent" trend chip with "↑12 percent" pill and explanatory paragraph subtitle.
- No three-lens-as-three-hero-cards layout.
- No editorial paragraphs explaining each metric ("Your visibility increased this week because...").
- No donut, pie, or gauge KPI.
- No engine logo wall as a substitute for engine identity.
- No "AI Summary" paragraph that averages multiple engines.

### Shadcn/Geist homogenization

- No default shadcn slate-50 to slate-900 gradient stack.
- No Geist Sans plus Geist Mono as the typographic backbone (Helvetica Neue is canonical).
- No `rounded-2xl` as global default (Obenan radius family is 24 px to 32 px applied with discipline, not a Tailwind shorthand).
- No Inter at display weight for headlines.
- No Lucide icon set as the primary iconography.

### Sparkle and generative-art AI chrome

- No `✨` sparkle icon as the universal AI symbol (NN/g, Google Design, Slate 2025 backlash confirms it is dead).
- No rainbow iridescent gradients on chat bubbles or "AI sections".
- No holographic auras, glow halos, or generative orbs in empty states.
- No shimmer skeletons during cached responses.
- No token-by-token fake streaming when content is retrieved instantly.
- No "AI-powered" copy chrome.
- No animated brain, mesh-network, or glowing-orb illustrations.

### Other named never-copy references

- No Stripe-style diagonal mesh gradient in product UI (Stripe holds it to marketing only and so do we).
- No Mercury purple as Obenan accent (Mercury owns purple-not-blue in fintech).
- No Linear issue-ID stamp form copied literally (we diverge by encoding citation lineage in the Citation Stamp).
- No Vercel triangle motif.
- No Jeff Koons-style mirror spectacle (Cloud Gate's contextual recognition is the right register; Balloon Dog celebration is not).
- No Olafur Eliasson Weather Project mode (atmospheric spectacle is for galleries, not product).

---

## Part V. Concrete agent-consumable principles

Each principle below has the same shape: **Principle / Why / Apply when / Avoid when / Inherit from / Never copy**. Codex and Wave-N executors read this section before composing any UI brief.

### P1. Reserve refraction for one modal moment, never for ambient chrome.

- **Why:** Refraction simulates depth and motion the data does not justify. NN/g flagged readability collapse in iOS 26 Liquid Glass; the same trap awaits any SaaS that inherits it.
- **Apply when:** A single modal pauses the surface so a single decision can be made.
- **Avoid when:** Navigation bars, headers, cards, side panels, icons. Default state on any surface.
- **Inherit from:** Rams (unobtrusive, honest), Vignelli (information at the point of decision).
- **Never copy:** Apple Liquid Glass, frosted floating navigation, refractive sidebars.

### P2. The data is the headline.

- **Why:** Profound and Peec lose because the merchant reads paragraphs about what the data means instead of the data itself. Tufte, Few, Cleveland and McGill, and Healey and Enns all converge on length, position, and small multiples as the strongest perceptual channels.
- **Apply when:** Any analytics, evidence, or status surface in ObiGEO. Every lens panel.
- **Avoid when:** Onboarding flows and legal copy (those are paragraph-correct).
- **Inherit from:** Linear Insights, Vercel Observability, Plausible, Fey, Mercury, Anthropic Console.
- **Never copy:** Profound feature grid, Peec percentage chip, donut and gauge KPI tiles.

### P3. Material presence is typographic, not skeuomorphic.

- **Why:** Software material in 2026 must be expressed through proportion, rhythm, edge, and temporal ageing, not through texture, glass blur, or chrome simulation. Rams, Mies, Müller-Brockmann, Hara, Fukasawa, Newson all practiced this before Apple did.
- **Apply when:** Any time material wants to convey weight, certainty, recency, or hierarchy.
- **Avoid when:** Always avoid skeuomorphic substance simulation.
- **Inherit from:** The 2024 deck's `--Black` `#0F0F14` against `#F7F7F7` and `#F0F0F0` canvas with white card islands.
- **Never copy:** Liquid Glass, glassmorphism, neumorphism, 3D card elevation as hierarchy.

### P4. Three engines are characters, never logos.

- **Why:** Per-engine identity is the diagnostic signal merchants need ("which AI sees me how"). Averaging or logo-walling destroys that signal. Poe, Msty, OpenRouter, Anthropic Console, Vercel AI Playground all handle this well.
- **Apply when:** Every ObiGEO surface that shows engine output. Every lens panel.
- **Avoid when:** Never average engines into a single "AI thinks..." summary.
- **Inherit from:** Material-presence Part III rules (texture, light behavior, color signal, name as type).
- **Never copy:** Logo wall pattern, model logos as identity, generic "AI assistant" branding.

### P5. Citations are first-class objects, equal to the answer.

- **Why:** NotebookLM, Glean Deep-Linked Citations, Anthropic Citations API, Perplexity inline `[n]` set the bar. Footnote-style dumps with no inline binding are the failure mode.
- **Apply when:** Any AI output shown to the merchant. Any recommended action.
- **Avoid when:** Never. Even decorative AI prose has provenance.
- **Inherit from:** Glean's `referenceRanges[].snippets[]` model. Three-pane layout (Question, Answer, Sources) with Sources equal width.
- **Never copy:** ChatGPT fabricated-citation-as-plain-text pattern. Numbered-references-at-end with no inline binding.

### P6. Five engine outcome states are explicit, never collapsed.

- **Why:** "Not found" and "found but wrong" require completely different merchant action. Conflating them breaks the product.
- **Apply when:** Every cell, row, and panel that shows an engine reading.
- **Avoid when:** Never collapse outcomes into a single "needs attention" bucket.
- **Inherit from:** Phase I locked taxonomy (`spec/features/ai-three-lens.md`); AI Indexability four states, AI Discoverability five states.
- **Never copy:** Three-state generic "good/needs-work/error" patterns.

### P7. Three-layer action grip (observed, inferred, recommended) is mandatory.

- **Why:** Stripe Radar set the bar. Conflating observed signals with inferred scores with recommended actions is dishonest; it makes correlation read as causation.
- **Apply when:** Every recommendation. Every action grip on every lens panel.
- **Avoid when:** Never collapse the three layers.
- **Inherit from:** Stripe Radar outcome object pattern; Honeycomb BubbleUp correlation-not-causation framing; Datadog Watchdog three-tier model.
- **Never copy:** Single "recommended action" without inference chain trace.

### P8. Density is hierarchical, not flat.

- **Why:** Executives glance to detect change, not to read levels. A label, a number, an inline visual, and at most one short clause hold the glance budget. Long-form belongs behind a Shneiderman expansion.
- **Apply when:** Every primary card on every lens panel.
- **Avoid when:** Onboarding text, error explanations, modal copy (those expand legitimately).
- **Inherit from:** Tufte sparklines, Few bullet graphs, Wexler et al. left-to-right attention decay.
- **Never copy:** Profound paragraph cards, Peec descriptive metric subtitles.

### P9. Hue is reserved; greyscale carries.

- **Why:** Pre-attentive capacity collapses with hue variety (Haroz and Whitney 2012). A single saturated accent on a near-monochrome surface pops; ten saturated accents on the same surface confuse.
- **Apply when:** Always. Default to neutrals; reserve a single accent per surface for the anomaly that must pop.
- **Avoid when:** Marketing covers and the wave logo legitimately use the full spectrum.
- **Inherit from:** BRAND_SYSTEM.md "calm premium clarity"; Mercury purple discipline (one accent, ruthlessly applied).
- **Never copy:** Heatmap red-yellow-green for magnitude on a glance screen. Rainbow chart palettes for unrelated categories.

### P10. Identity is preserved; product is restrained.

- **Why:** The Obenan brand has earned a recognizable spectrum identity through the wave logo and capsule motif. Product UI restraint does not mean abandoning identity; it means putting identity where it belongs (logo, marketing atmosphere) and keeping product surfaces calm.
- **Apply when:** Every Obenan surface, always.
- **Avoid when:** Product UI is not the place to render the full spectrum.
- **Inherit from:** 2024 brand book separation of logo identity vs marketing atmosphere vs product surface.
- **Never copy:** Spectrum-as-default-background in product UI. Wave-logo decoration in product UI.

---

## Part VI. Open questions for ongoing refinement

These cannot be resolved by this document alone. They get revisited as Waves ship and feedback lands.

1. **Custom typeface commission.** The deep research suggested commissioning a custom monospace plus humanist sans pair (Mercury Arcadia, Resend Domaine tier). The legacy and 2024 brand book lock Helvetica Neue. Decision: Helvetica Neue remains primary indefinitely. Custom typeface is a future evaluation, not a 2026 priority.

2. **`--Black` standardization.** Pure `#000000` appears only on the 2024 cover. `--Black` `#0F0F14` should propagate as the canonical product dark surface. This document already encodes that rule; an audit of existing surfaces against this rule has not been completed.

3. **Variables collection in Figma.** The Brand file has an empty Variables collection. A separate workstream should publish "Obenan Brand Tokens" library from this file (colors, type styles, spacing, radii) so ObiGEO and the landing page consume from one source of truth, not from text rules.

4. **Reflection Sheet vs three lens lanes.** Claude's deep research proposed a more radical "Reflection Sheet" (three horizontal data bands replacing the current panel layout). ChatGPT's research preferred the three-lane structure already shipping. This document encodes three connected panels as the Wave I-D form. The Reflection Sheet remains a deferred candidate for Wave I-E or a future iteration if pixel reviews show the panels do not punch enough.

5. **Hard density numerics.** The 24-word headline plus 60-word body cap per pillar card is a starting point synthesized from the research, not a settled experimental constant (ChatGPT correctly flagged this). Founder may revise these numbers after Wave I-D ratification and pixel review.

6. **Wave logo treatment in product UI.** The wave logo belongs in product chrome but not as decoration. Exact placement (header, footer, watermark) remains executor creative range above the floor.

7. **Engine material signatures.** Specific texture, light behavior, and color signal per engine (ChatGPT, Gemini, Perplexity) are creative range for the Wave I-D Opus session, ratified by Founder when proposed.

---

## Part VII. Canonical asset inventory (Gleb 2024 production work)

All assets below were produced by designer Gleb in 2024 and represent the canonical production-ready brand materials. Current home is the original folder with the trailing space:

`/Users/sevenerhan/Documents/Obenan Gleb Branding Assets ` (note the trailing space character)

The `obenan-landing-page/reference/branding-assets/canonical/` folder structure exists but is currently empty. The original folder is the live source until a mirror operation is completed (see "Design ops debt" below).

### A. Logo source files (vector)

Canonical wave-mark plus wordmark in SVG:

- `Logo SVG/Logo.svg` — 64×64 viewBox, full 12-stop gradient, three-layer fill, inner shadow filter. **This is the canonical source.**
- `Logo SVG/Logo_Dark.svg` — dark-mode treatment.
- `Logo SVG/Logo_Light.svg` — light-mode treatment.
- `Logo SVG/logo+.svg the best fit.svg` — extended lockup variant (logo plus wordmark composition).
- `Logo SVG (64x64) Logo/Logo_Dark.svg`, `Logo_Light.svg` — small-format icon-scale variants.

PNG exports for application surfaces:

- `logo obenan black.png`, `logo white obenan.png` — wordmark only, light and dark.
- `logo+.png`, `logo+-2.png`, `logo.png`, `logo_mark.png`, `circle log.png` — variants for circular, square, and outlined applications.

### B. Logo motion (Lottie JSON, lightweight, production-ready)

- `Gleb/Logo_Animation_asset/logo intro.json` — logo intro animation (180 KB).
- `Gleb/Logo_Animation_asset/logo loop.json` — logo loop animation (310 KB).

These are the canonical lightweight motion files for any product surface that needs the logo to animate. Lottie JSON is preferred over MP4 in product UI because it scales, recolors, and is reduced-motion friendly.

### C. Logo motion (high-fidelity MP4 reference)

- `Gleb/OBENAN_1_[00000-00210].mp4` (9.7 MB) — 210-frame logo motion reference.
- `Gleb/Gleb New Animated Assets/OBENAN_LOGO_1_LOOP_1.mp4` (16.8 MB) — refined logo loop.

These MP4 files are masters for high-quality renders. For product UI, use the Lottie JSON in section B instead.

### D. UI animation vocabulary (six canonical product motion patterns)

Produced September 2024 by Gleb. These are the inheritance vocabulary for any Obenan product UI motion. ObiGEO Wave I-D and later waves use these as the motion language; new motion is not invented above the floor.

- `Gleb/UI animations/0918 assistant.mp4` (9.2 MB) — AI assistant interaction pattern.
- `Gleb/UI animations/0918 insights.mp4` (6.0 MB) — analytics and insights reveal pattern.
- `Gleb/UI animations/0918 oboarding.mp4` (9.5 MB) — onboarding sequence motion.
- `Gleb/UI animations/0918 overview.mp4` (25 MB) — overview screen reveal.
- `Gleb/UI animations/0918 step one.mp4` (26 MB) — step-by-step flow motion.
- `Gleb/UI animations/0918 step one that.mp4` (28 MB) — step variant.

Source projects (After Effects / Lottie source) for these are in:

- `Gleb/Obenan/assistant/`, `insights/`, `onboarding/`, `overview/`, `step one/`, `step two/` (plus matching `.zip` packages for distribution).

### E. New animated assets (November 2024 production)

Newest motion work from Gleb. These are the most current brand motion expressions and likely supersede earlier variants for new applications.

- `OBENAN_2_1.mp4` through `OBENAN_5_1.mp4` plus updates (`_upd_1.mp4`, `_a_upd.mp4`) — sequence variants 2 through 5, each ~30 MB.
- **`OBENAN_4_LOOP_1.mp4` (23.5 MB)** — primary marketing loop, used in shipped surfaces.
- **`OBENAN_8_loop` triplet (IN / FULL / OUT)** — canonical Obenan motion choreography with explicit entry, full-state, and exit phases. This three-phase pattern (IN-FULL-OUT) is the Obenan motion grammar and should bind every state transition that uses brand motion.

All MP4 files in `Gleb/Gleb New Animated Assets/`.

### F. Brand positioning film (voice and tone reference)

The strongest single voice reference for what Obenan stands for:

- `Gleb/Social/making-local-businesses-legible-to-ai.mp4` (18.9 MB) — the brand positioning film. Title literally states the mission: making local businesses legible to AI. This phrase is the strongest one-line summary of the company and should be referenced as the voice anchor for any new positioning copy.
- `Gleb/Social/Be_visible_branding_Music.mov` (224 MB) — full branding video with music (master format).

### G. Brand guidelines PDFs

- `Obenan Branding Guidelines.pdf` (165 KB) — the 2024 PDF version of the guidelines.
- `Ob_21.pdf` (110 KB) — alternate guidelines document.

### H. Favicon system

- `favicon_io/` folder — complete favicon and app-icon set.

### I. Animations for web (Jesh, alternate set)

- `Gleb/Animations Jesh for WebSubmit/` — Intro, Reality, UI_animation, Obenan, OBENAN_4_LOOP_1. Alternate animation set targeted at web submission contexts.

### Design ops debt (action items for separate workstreams)

1. **Mirror the assets into the canonical layer.** `obenan-landing-page/reference/branding-assets/canonical/` folder structure was created (`favicons/`, `guidelines/`, `logos/`, `lottie/`, `motion/`, `ui-packages/`) but is currently empty. A separate workstream should copy or symlink the Gleb assets into the canonical structure. Until then, the source of truth is the trailing-space folder.

2. **Convert the six UI animations to Lottie JSON where possible.** The MP4 files are heavy for product UI. Converting `assistant`, `insights`, `onboarding`, `overview`, `step one`, `step two` to Lottie JSON would give every product surface a lightweight, recolorable, reduced-motion-friendly version.

3. **Publish a Brand Tokens Figma library.** The Brand Figma file has an empty Variables collection. A separate workstream should populate Variables from this North Star's color tokens, the canonical 12-stop gradient, the type styles, and the radii.

4. **Resolve the trailing-space folder path.** The trailing space causes friction for command-line tooling. A canonical rename (or full mirror) would remove that friction.

## Sources and lineage

**Brand legacy (1.0 generation):**
- Obenan Branding Guidelines (legacy, retained at `/Users/sevenerhan/obenan-landing-page/research/2024-legacy-obenan-branding-guidelines.md`).

**Brand current (2.0 generation):**
- Brand Guidelines '24 Figma deck (111 frames, five sections): `https://www.figma.com/design/H3KZZ7qkFhFQLcCxBGtw1j/Brand`.
- BRAND_SYSTEM.md (Obenan landing page brand governance).
- BRAND_ASSET_LIBRARY.md (canonical logo, motion, and asset paths).

**2026 deep research:**
- Claude Opus 4.7 Deep Research: `/Users/sevenerhan/obenan-landing-page/research/2026-05-10-claude-deep-research-design-principles.md`.
- ChatGPT 5.5 Pro Deep Research: `/Users/sevenerhan/obenan-landing-page/research/2026-05-10-chatgpt-deep-research-design-principles.md`.

**ObiGEO specs:**
- Phase I three-lens contract: `/Users/sevenerhan/ObiGEO/spec/features/ai-three-lens.md`.
- ObiGEO three-lens design floor: `/Users/sevenerhan/ObiGEO/spec/features/three-lens-design-floor.md`.
- Visual reference deconstruction: `/Users/sevenerhan/ObiGEO/spec/diagrams/three-lens-visual-reference.md`.

**Decision history:**
- All founder ratifications: `/Users/sevenerhan/GEO/DECISIONS_LOG.md`.

---

## Closing position

The North Star reconciles three things that often pull apart: brand legacy (what makes it Obenan), current visual maturity (what Obenan looks like in 2024), and forward direction (what category-defining AI products demand in 2026 to 2028).

The convergence is honest. Obenan's existing brand already practiced material discipline, restraint, and an unmistakable spectrum identity through the wave logo. The deep research validated that restraint as the correct posture against Apple Liquid Glass and against shadcn-Geist convergence. The mirror metaphor for ObiGEO is not a departure from brand; it is the brand's voice ("Our logo represents the bond between the digital and physical realms") rendered as a product surface.

ObiGEO ships this North Star first. Other Obenan surfaces inherit it as they evolve. When this document is amended, the date and reason are recorded inline.

The merchant should leave any Obenan surface knowing what AI thinks of them, not how clever the surface is. That is the difference between an honest mirror and a light show.
