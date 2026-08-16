# Brand System

This file is the source of truth for Obenan landing-page design governance.

Every new landing page should feel like it belongs to the same company, the same product story, and the same visual system.

## Core Objective

Obenan pages should feel:

- clear
- premium
- intelligent
- calm
- modern
- consistent

The brand should never feel noisy, template-driven, or visually disconnected from page to page.

## Experience Principles

1. Clarity wins first.
2. Consistency beats novelty.
3. Confidence should feel quiet, not loud.
4. The customer should understand the outcome before the mechanics.
5. AI-native does not mean futuristic clutter.
6. Every section must support the page narrative, not compete with it.
7. Reuse is preferred over reinvention.

## Visual Language

### Color

- Preserve the existing Obenan spectrum and gradient language already present in the product and landing pages.
- Use neutral whites, off-whites, soft grays, and restrained contrast to support readability.
- Do not introduce random page-specific palettes unless there is a strong brand reason and it is documented here.

### Typography

- Maintain one coherent hierarchy across pages.
- Headlines should feel decisive and readable, not decorative.
- Body copy should stay easy to scan and never feel dense.
- Avoid introducing new type personalities page by page.
- The current canonical landing-page family uses `Helvetica Neue` with light-weight display headlines and restrained supporting copy. New pages should match that hierarchy before introducing a new text treatment.

### Layout And Spacing

- Section rhythm should feel consistent across homepage, about, pricing, and new landing pages.
- Prefer stable container widths and predictable vertical spacing.
- Cards, content blocks, proof sections, and CTA bands should align to the same spacing logic.
- Do not compress mobile layouts so aggressively that the design loses hierarchy.
- Use `max-w-[1380px]` as the default landing-page content frame. Treat it as the baseline width for heroes, proof sections, pricing sections, and footer content.
- Reuse the neutral canvas pairing already present in the strongest pages: soft off-white section backgrounds (`#f7f7f7` and `#f0f0f0`) with white card islands for denser content.

### Shape, Radius, Border, And Shadow

- Reuse the current card, border, and shadow language from the existing landing pages.
- Do not invent new radii or shadow styles for isolated sections without a system reason.
- If a new elevation treatment is required, document it here before it spreads.
- Primary content cards should usually stay in the `24px` to `32px` radius family already used across homepage, about, pricing, and banking. Do not introduce sharper or ornamental corner systems without documenting the reason.

### Motion

- Motion should clarify or guide. It should not decorate for its own sake.
- Use restrained animation timing and keep transitions consistent.
- Avoid stacking multiple motion styles on the same page.
- For flagship pages, motion should reveal state change inside a central visual object. It should not be used as background spectacle to compensate for weak structure.
- The strongest motion patterns in the current system are:
  - state progression
  - guided reveal
  - subtle operating-surface transitions
  - one focal interaction moment with controlled aura or glow

### Imagery And Visual Assets

- Screenshots, dashboards, cards, icons, and illustrations should feel like one family.
- Maintain consistent treatment for screenshots, gradients, blur, glow, and glass effects.
- Media alt text must stay accurate, clear, and on-brand.

## Narrative Structure

Most landing pages should follow a recognizable arc:

1. Clear hero
2. Immediate value or problem framing
3. Proof or trust
4. Explanation of capability or workflow
5. Social proof or evidence
6. CTA
7. FAQ or closing reassurance where useful

This is not a rigid template, but pages should still feel structurally related.

For the current core landing-page family, the preferred ending is:

1. proof or success stories
2. focused CTA band

Reuse that closing rhythm before inventing a new ending pattern.

## Utility Page Rule

Utility pages are not exempt from brand quality.

If Obenan ships a calculator, checker, estimator, or other utility surface, it must still feel like a modern product page, not a search-era tool directory page.

Rules:

- utility first, conversion second, sales handoff third
- the page must create real understanding before it asks for contact details
- if the repo already has business-identity infrastructure such as place search or place ID lookup, prefer a search-first or hybrid flow over manual-only input
- manual fallback is acceptable when lookup is imperfect, but it should not become the primary experience by default
- show visible value before any gate:
  - identified business or clear manual state
  - current known state
  - target or next step
  - enough context that the visitor understands why the result matters
- if the full answer is gated, the gate must appear after usefulness is established, not before
- the revealed answer should not stop at arithmetic
  - explain why the threshold matters
  - explain the business consequence in plain terms
  - connect the result to the Obenan capability that helps move it
- the Obenan bridge must stay product-specific and operational
  - review requests
  - response handling
  - private recovery flow for unhappy customers where possible
- do not let utility pages slide back into:
  - rainbow gimmicks
  - article-shell filler
  - fake benchmark claims
  - generic SaaS CTA copy detached from the calculation
- visually, utility pages should reuse the calm premium rhythm of the strongest current surfaces:
  - home-v3
  - pricing-v2
  - shared LandingLayout
  - quiet white-card-on-soft-canvas composition
- utility pages should usually end with a proof-aware CTA band, not a long SEO explainer tail

## About Page Credibility Rule

The About page is not a founder bio, a culture page, or a leadership directory.

Its job is to answer a trust question:

- who is the company behind the system
- why this company is credible enough to trust with serious businesses

Use this narrative balance:

1. founder origin as empathy and truth
2. company capability as authority
3. curated people proof as evidence

Rules:

- keep the founder story, but keep it in the Guide role
- never let the founder story become the whole page's identity
- do not lead with vanity, chronology, or generic company-history copy
- if people are shown, show only the curated core team that materially increases buyer trust
- prefer 4 to 8 people max
- every person shown must answer at least one buyer question:
  - who builds this
  - who scales this
  - who makes customers successful
  - who turns the idea into a durable company
- each person should have:
  - portrait
  - name
  - role
  - one short line explaining why they matter
  - optional quiet LinkedIn link
- do not use long bios, generic leadership blurbs, or a decorative team gallery
- the team section must feel like proof of capability, not decoration
- integrate the people section into the page narrative so it feels like the company behind the system, not a bolt-on org chart
- premium restraint matters:
  - calm layout
  - minimal UI noise
  - portraits treated cleanly, not theatrically
  - no over-designed social-link treatment
- team photos live at `public/landing/team/` in the production app
  - referenced as `/landing/team/<filename>` in components
  - do not use `lovable-uploads` or any external prototype path for team photos

## FAQ And Agent-Readable Content

- Do not keep generic SEO-era FAQ blocks on flagship pages just because landing-page convention says they should exist.
- The default title for any retained flagship question section is exactly:
  - `Questions Before You Connect`
- Unless the brand owner explicitly approves localized variants, keep that visible title literal across locales rather than translating it.
- A visible FAQ is justified only when it answers real decision friction for the page's buyer:
  - scope
  - control
  - integration
  - rollout
  - proof
  - boundaries
- If a page needs machine-readable clarity for AI systems, do not force that into a generic accordion.
- Prefer a two-layer strategy:
  1. human-facing closing questions that address real buying or trust objections
  2. structured, code-first, agent-readable content via metadata, schema, canonical definitions, and dedicated explanation surfaces where appropriate
- A flagship page may remove the visible FAQ entirely if the section weakens the narrative or drags the page back into search-era positioning.
- If a visible FAQ remains, it must feel like Obenan in the AI era:
  - precise
  - buyer-relevant
  - non-generic
  - free of `Local SEO` framing unless explicitly describing legacy market language
- Keep capability language disciplined. It is fine to explain automation, review operations, approval flow, and AI-assistant access, but do not turn those into guaranteed business outcomes unless the proof is explicitly approved for public use.
- Do not use generic educational prompts such as:
  - `What is digital presence management?`
  - `How can you improve your digital presence?`
  - `What businesses benefit most?`
  - `Why focus on digital presence instead of SEO?`
- If automation is a core value proposition, the FAQ must reduce management anxiety, not create it.
  - answer whether there is another dashboard
  - answer whether the customer must actively manage Obenan day to day
  - answer how Obenan works through ChatGPT or other AI assistants
- The visible question section is for human buying friction.
  - machine-readable clarity should be handled separately through metadata, schema, canonical content, and other structured code-first surfaces
- Be explicit about fit:
  - Obenan is for physical-location businesses and multi-location portfolios
  - Obenan is not for pure e-commerce businesses without a physical address

## Company-Domain Agent Orientation Rule

If Obenan ships a company-domain agent-orientation surface on `obenan.ai`, the visible route must lead the design system:

- `/for-agents/` is the primary page
- `/llms.txt` and `/for-agents.json` are companion files, not the hero surface
- only `/for-agents/` should be treated as sitemap-listed and indexable
- phase 1 should read English-first and root-canonical
- if the page shows freshness, use a clearly manual `last reviewed` signal until a reliable generated mechanism exists
- companion machine files can stay public as `noindex, follow` so the visible route remains the primary public surface
- the surface should feel like a normal Obenan page, not an `llms.txt` stunt or a document dump

This lane must stay separate from merchant truth-layer work and from product surfaces such as ObiGEO.

## AI-Era Visibility And Agent Readability

- The website strategy for AI-era visibility starts with visible truth, not hidden files.
- AI Visibility, AI Presence, and AI discoverability are public category surfaces in the Obenan story.
- They must not be treated as hidden experiments, buried utilities, or side-channel lead magnets.
- `/ai-visibility/` and `/ai-presence/` should be governed as public flagship routes when they are active in the site IA.
- `AI discoverability` is the public narrative layer across flagship pages, support pages, metadata, and shared chrome.
- When the site needs to retire old search-era framing, prefer public AI visibility / discoverability language over SEO-era replacement copy.
- Public routes should help a human buyer and a browsing agent recover the same core meaning from rendered body content.
- Metadata and schema support that truth. They do not replace it.
- Every flagship page should make these points recoverable in one pass:
  - what Obenan is
  - who it is for
  - what Obenan governs
  - what changes after connection
  - what Obenan does not do
  - why the company is credible
  - what the next step is
- Prefer clear headings, labeled fact groups, tables, lists, proof blocks, and accessible form labels when they improve clarity.
- Route families should standardize reusable truth blocks where appropriate:
  - `What Obenan Governs`
  - `Who This Is For`
  - `Why Buyers Trust Obenan`
  - `Questions Before You Connect`
- The first implemented reusable agent-readability component is `GovernsSection` in `src/components/home-v3/GovernsSection/index.tsx`:
  - pattern: label + headline + governed-field grid + execution statement + fit block
  - translation-backed via `HomePage.governs` namespace
  - currently placed on the homepage between FoundationSection and HomePageFaqSection
  - reusable on other landing surfaces by importing from `@/components/home-v3` and pointing to the same or a page-specific translation namespace
- Operator credibility matters. When relevant, make it visible that Obenan was built from real business operations, not only from abstract technology work.
- Multi-location capability should be easy to infer from the public site. It is one of Obenan's strongest strategic advantages.
- Structured publishing should focus on real business facts:
  - hours
  - listings
  - reviews
  - menus or services
  - photos
  - merchant identity
  - freshness or confirmation signals where relevant
- Do not center the website strategy on:
  - `llms.txt`
  - crawler-setting dashboards
  - hidden machine-only pages
  - FAQ schema as the primary growth tactic
- For AI-era visibility work, human clarity first. Agent legibility second. Conversion and truth as the outcome.

## Public Metadata And Route Truth

- Every public route needs its own truthful metadata:
  - title
  - description
  - canonical
  - social preview fields
- Homepage metadata must never leak into contact, utility, infrastructure, solution, or industry pages.
- If a route is renamed, migration is only complete when all of these agree:
  - redirect behavior
  - shared chrome links
  - sitemap output
  - canonical metadata
  - public CTA targets
- Only one public route should be canonical for one story. Do not leave old and new versions both live, linked, and indexable.
- Legacy acquisition pages that no longer match the flagship brand should be redirected, rebuilt, or removed from sitemap output. Do not let them silently define the company's public truth.
- Metadata should help both humans and AI systems understand the page in one pass. A public route should not require surrounding context to explain what it is for.
- If a route is surfaced in shared chrome, flagship CTAs, or other strategic navigation, it must also have route-specific metadata and a deliberate sitemap policy. Do not let flagship routes become visible to users but invisible to crawlers.
- Operational, campaign, auth, survey, and gated-conversion routes need an explicit metadata and robots policy. Do not let those routes inherit homepage defaults or sit in the public sitemap by accident.

## Public Infrastructure IA

The infrastructure route family on `obenan.ai` has three distinct pages. They must not be collapsed.

- `/infrastructure/merchant-infrastructure/` = the category and business case for the merchant layer in AI commerce. Audience: everyone.
- `/infrastructure/discovery/` = the agent-facing merchant participation layer for agentic commerce and payment discovery. Audience: fintech, commerce platforms, PSPs, acquirers, issuers, payment networks. This page explains how agents discover, query, validate, and confirm local merchants upstream of order and payment execution.
- `/infrastructure/mcp/` = the merchant-management MCP for operating Obenan from AI assistants. Audience: agencies, enterprise operators, CMOs. This page explains interface flexibility and governed operations.

Do not collapse discovery and merchant-management MCP into one page. They serve different buyers with different needs.

## Public MCP And Docs Bridge

- On `obenan.ai`, public infrastructure surfaces are the orientation layer. `nexus.obenan.com` is the proof-depth layer.
- Do not copy technical docs into the marketing site.
- Do not publish endpoint lists, OAuth setup, transport details, tool tables, schemas, or developer onboarding steps on the public website unless the page is explicitly a docs surface.
- Shared-chrome docs surfacing should stay utility-level, not primary category-level:
  - preferred header treatment: low-emphasis `Documentation` link in the utility cluster or mobile utility list
  - preferred footer treatment: `Documentation` in the resources group
- Footer infrastructure group should include all three pages:
  - Merchant Infrastructure
  - Merchant Discovery
  - MCP
- Merchant Infrastructure should bridge into Discovery with a low-emphasis link.
- Discovery page should lead with upstream merchant-truth meaning for infrastructure and payments buyers.
  - explain why agents need something more reliable than the open web
  - explain that local merchant truth is fragmented, stale, and not natively queryable
  - explain that Obenan exposes an agent-facing discovery layer before downstream booking, checkout, and payment execution
  - speak to commerce platforms, PSPs, acquirers, issuers, and payment networks
- MCP page should lead with interface flexibility and operational governance for merchant-management buyers.
  - do not frame it as the discovery page
  - keep it oriented toward agencies, operators, and CMOs who want to manage Obenan from their preferred AI assistant
- Discovery-oriented pages should visibly reinforce the upstream/downstream boundary.
  - Obenan sits before booking systems, checkout flows, PSPs, acquirers, issuers, and payment networks
  - the page should help a serious buyer understand where Obenan stops
- If dedicated Nexus discovery docs do not exist yet, do not fake a docs handoff. Use a consultative CTA instead.
- The handoff to docs must be explicit where docs exist.
  - use the website to orient
  - use Nexus docs for implementation depth
- MCP proof on public pages should use the existing Obenan AI-to-AI visual language instead of inventing a separate developer aesthetic.

## Consent And Shared Chrome

- Shared chrome should not interrupt the page more aggressively than the page itself earns.
- Cookie consent UI is a compliance surface, not a marketing modal.
- Do not use oversized, center-stage cookie popups on flagship pages unless a legal requirement explicitly forces it.
- Preferred direction:
  - compact
  - calm
  - bottom-corner or low-profile anchored placement
  - premium and on-brand
  - readable in one glance
- Consent UI may use a light touch of personality, but only as a quiet wink.
  - never jokey enough to weaken trust
  - never cute enough to obscure the decision
- Consent copy should be short and plain:
  - what is essential
  - what is optional
  - where to read more
- The interaction should reduce annoyance:
  - smaller footprint
  - faster comprehension
  - clear buttons
  - minimal repeat intrusion
- Keep legal/compliance behavior intact when redesigning presentation.

## Flagship Enterprise Rule

For flagship enterprise pages, a clean section stack is not enough.

The page must introduce one proprietary visual object that makes the category visible at a glance.

That object should:

- embody the customer problem and the Obenan resolution
- evolve across the page as the narrative advances
- become clearer, more governed, or more actionable section by section
- carry the page's most meaningful motion language

Examples from the current system:

- homepage v3 uses the `TruthCard` plus state transitions
- Merchant Layer uses the `ThreeStateRailSection` to show progression

If an enterprise page does not have an owned state object, it will tend to collapse into a premium template made of cards, fades, and copy blocks.

For flagship enterprise pages, the ending rule is also stricter:

- do not let the page simply fall into shared chrome
- create a deliberate pre-footer close that resolves the page's promise before the global footer begins

## Canonical Page Families

Use these as the current visual baseline for future landing-page work:

- `apps/omnipulse/src/components/LandingLayout`
- `apps/omnipulse/src/components/home-v2`
- `apps/omnipulse/src/components/about-v2`
- `apps/omnipulse/src/components/pricing-v2`

The bespoke banking vertical in `apps/omnipulse/src/components/industry/banking/BankingTemplate.tsx` is a valid enterprise variation when a page needs an audit-led, evidence-first narrative.

The older generic industry family in `apps/omnipulse/src/components/industry` is still active in production, but it should be treated as legacy for design governance. Maintain it when required, but do not copy its layout, CTA treatment, or copy style into new landing pages without an explicit rewrite brief.

## Universal Component Rule

Before creating a new section or pattern, inspect whether an equivalent already exists in:

- `apps/omnipulse/src/components/LandingLayout`
- `apps/omnipulse/src/components/home-v2`
- `apps/omnipulse/src/components/about-v2`
- `apps/omnipulse/src/components/pricing-v2`
- `apps/omnipulse/src/components/common`
- `packages/obenan-ui`
- `packages/obenan-theme`

If an existing component solves most of the need, extend it instead of cloning a new variant.

## New Component Admission Rule

A new landing-page component is justified only if at least one of these is true:

- the pattern is genuinely absent from the system
- the use case will recur across multiple pages
- extending an existing component would create more confusion than clarity

When a new reusable component is added:

1. keep it clean and generic
2. avoid page-specific naming if reuse is intended
3. document it in `UNIVERSAL_COMPONENT_INVENTORY.md`
4. update this file if it changes the canonical system

## Copy And Messaging Rules

- Never use em dashes in customer-facing website copy.
- Never position Obenan as a `Local SEO` company.
- Never use `AI-powered` for Obenan.
- Avoid self-referencing `platform`, `software`, and `tool` when stronger wording exists.
- Customer is the hero. Obenan is the guide.
- Lead with outcomes, not internal mechanics.

## CTA Consistency

- Similar page types should use similar CTA hierarchy.
- Primary CTA language should feel direct, calm, and outcome-oriented.
- CTA sections should not suddenly shift tone relative to the rest of the page.
- Reassurance copy, form labels, and button text should sound like the same brand voice.
- On core self-serve pages, the default primary CTA is a black pill button with calm action language, usually `Start free trial`.
- Pricing cards may use a contextual variant such as `Try 14 days free` because the pricing context is already explicit.
- Enterprise or audit-led pages may use a consultative CTA, but they should still preserve one dominant primary action and one quieter secondary action instead of introducing a new CTA language system.

## Accessibility And Responsiveness

- Preserve semantic HTML and keyboard-friendly behavior.
- Maintain readable contrast and hierarchy.
- Ensure mobile layouts still preserve the main page story.
- Long translated strings should not collapse the layout.

## Review Checklist

Before approving a new landing page or major redesign, check:

- Does it look like Obenan?
- Does it read like Obenan?
- Does it reuse the existing system?
- Are spacing and typography aligned to neighboring pages?
- Are proof sections and CTA blocks treated consistently?
- Is there any one-off visual flourish that breaks the brand?
- Does mobile still feel intentional?

## Maintenance Rule

When a new design principle becomes real and repeatable, update this file.

When a page breaks this system, flag it explicitly instead of silently copying the drift.

## In-page analysis stage treatment (admitted 2026-07-15, Local Visibility Check round 3)

A full-width in-page stage of 65-75vh may pair a muted looping canonical product video with live, truthful process narration while real provider work runs, under these constraints: the stage is the page's one focal moment; the video sits on a canvas matching its own frame color so it reads full-bleed; narration lines render only persisted real events plus at most one active line; no percentages, timers-as-progress, or invented facts; reduced-motion and load failure fall back to the static poster; the delayed state at 90 seconds states plainly that the visitor can leave and the report will be emailed. First implementation: src/components/local-visibility/result/AnalysisStage.tsx (whole-brain omnipulse).
