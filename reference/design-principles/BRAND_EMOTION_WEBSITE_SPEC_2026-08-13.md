# Obenan website brand, emotion and consistency specification

Date: 2026-08-13

State: `SPEC_DRAFT_SOURCE_BACKED / HUMAN_DESIGN_APPROVAL_REQUIRED`

## Objective

Create a coherent Obenan website system that communicates value immediately,
feels human and credible, uses real evidence and customer imagery, and remains
recognizably premium and technically serious across public routes and seven
selectable locales.

The system must make the homepage approachable without flattening the deeper
merchant, discovery, agent and infrastructure experiences into one visual tone.

## Non-goals

- A one-shot full-site redesign.
- Copying the exploratory Unmuted Figma directly into production.
- Adding color or photography without a clear communication role.
- Replacing verified product explanation with lifestyle imagery.
- Inventing customer quotes, claims, metrics or endorsements.
- Changing product behavior, backend systems, providers or shared repository
  infrastructure.
- Rewriting copy before the content hierarchy and claim gates are approved.

## Design principles

### 1. Human first, product proven

Use an authentic operator, customer, place or action to establish relevance,
then show the specific Obenan intelligence, data or workflow that helps them.
Emotion opens the story; product evidence completes it.

### 2. Progressive technical depth

- Homepage: plain language, immediate benefit, human context, one dominant
  action and clear route choices.
- Solution and industry pages: balanced customer outcome and product evidence.
- Merchant, agent and infrastructure pages: greater technical density with
  preserved readability, hierarchy and human stakes.

### 3. Restrained brand expression

Use premium black/charcoal framing, warm real imagery and selected brand color
as emphasis. Reserve the broader spectrum or ribbon treatment for controlled
moments such as transitions, diagrams or signature accents. It must never
become ambient startup-gradient decoration.

### 4. Scannability before decoration

Every section needs a recognizable heading level, one clear purpose, readable
line length, sufficient contrast, consistent spacing and an obvious next
action. A user should understand the page by scanning headings, images and
actions before reading body copy.

### 5. One system, several moods

Components, type, spacing, states and accessibility remain universal. Mood may
change by route family through imagery, surface balance and information density,
not by inventing a different component language on each page.

### 6. Customer as hero

The website should not present Obenan as a platform, dashboard or tool the
customer must learn. Show the customer's challenge and outcome, with Obenan as
the active intelligence that sees, decides and acts on their behalf.

## Required system foundations

### Semantic color roles

The final Figma system must define, at minimum:

- `surface.canvas`, `surface.raised`, `surface.inverse`, `surface.brand`
- `text.primary`, `text.secondary`, `text.inverse`, `text.brand`
- `border.subtle`, `border.strong`
- `action.primary`, `action.primaryHover`, `action.secondary`,
  `action.secondaryHover`
- `focus.visible`
- `status.success`, `status.warning`, `status.error`, `status.info`
- controlled `accent` roles that map to approved brand palette values

Every allowed text/background and control/background pairing must pass WCAG AA.
Color may not be the only indicator of state.

### Typography roles

Define responsive roles rather than page-specific sizes:

- display / H1
- H2, H3 and H4
- lead / intro
- body large, body and body small
- label / eyebrow
- button / navigation
- metadata / caption

The final type choice must reconcile the historical Helvetica Neue brand input
with web licensing, performance and fallback behavior. No agent may silently
substitute a different branded typeface.

### Spacing and layout roles

- one documented base spacing scale
- page gutters by breakpoint
- maximum content and reading widths
- section vertical rhythm
- grid and card gaps
- media aspect ratios and focal-point rules
- corner radius, shadow and border rules
- safe-area, sticky navigation and reduced-motion behavior

### Component states

Each reusable component must cover default, hover, focus-visible, active,
disabled, loading and error states where applicable. Priority components:

1. header and navigation disclosures
2. primary and secondary buttons
3. text links and icon links
4. hero layouts
5. section headers
6. cards and card links
7. customer/evidence modules
8. product proof panels
9. testimonials and quotes
10. footer
11. forms, success and validation states

## Homepage experience contract

Within the first viewport at representative desktop and mobile sizes, the page
must communicate:

1. who Obenan is for,
2. what meaningful outcome it helps produce,
3. why its approach is different or credible,
4. one dominant next action,
5. a clear path for visitors who need a different route.

The homepage should contain a deliberate emotional anchor, such as an approved
real customer/operator image or equivalent authentic moment. It must not rely
on a portrait alone: adjacent copy and product proof must explain why the image
belongs there.

## Imagery contract

- Prefer real Obenan customers, operators, locations, teams and product
  situations over generic stock or decorative renders.
- Use Factory Girl imagery for a clearly attributable hospitality/customer
  context, not as a visual stand-in for the entire customer base.
- Establish a repeatable treatment for crop, radius, overlay, caption, credit,
  tonal adjustment and responsive focal point.
- Preserve natural skin and food tones. Do not force every image into a heavy
  brand-color filter.
- Product screenshots should demonstrate a task, decision or outcome rather
  than present an unreadable dashboard mosaic.
- Decorative assets must be hidden from assistive technology. Informative
  assets require context-specific alt text in every affected locale.

## Motion contract

The teaser's ribbon and transition language may inspire a restrained signature
motion device. Motion must orient or explain, not merely decorate.

- Respect `prefers-reduced-motion`.
- Avoid autoplay audio.
- Keep LCP media static and available without animation.
- Do not hide important copy or links behind client-only mount/scroll gates.
- Keep transforms and opacity from making server-rendered content invisible.

## Content and claim contract

- Preserve the latest Obenan language guardrails.
- Do not use `AI-powered`, generic tool/platform/dashboard framing, competitor
  comparisons or unsupported performance claims.
- Avoid passive generic CTAs when a specific action is available.
- Keep customer-facing copy free of em dashes.
- Separate observed evidence, customer quotation and Obenan claim.
- Copy and image-specific alt-text changes require native review for Spanish,
  German, Turkish, Dutch, Portuguese BR and Portuguese PT.

## Accessibility and quality contract

- WCAG AA color contrast for text and controls.
- Keyboard and visible-focus operation for every interactive control.
- Minimum practical touch targets and adequate separation.
- One semantic H1 and a logical heading hierarchy.
- No action represented only by color or motion.
- No horizontal overflow at supported mobile widths.
- Responsive image sizing and no avoidable layout shift.
- Reduced-motion behavior.
- Consistent accessible names across icon, link and button variants.

## Acceptance criteria

### AC-DESIGN-1: source hierarchy

Every implemented token or component role links to an approved design-system
decision. Exploratory mock-ups and agent inference cannot silently become
canonical.

### AC-DESIGN-2: semantic tokens

The approved typography, color, spacing and component roles have one canonical
implementation and no page-local duplicate for the same purpose.

### AC-DESIGN-3: contrast and states

Every allowed background/text and interactive-state pairing passes its defined
contrast and state-behavior tests.

### AC-DESIGN-4: component consistency

The priority components render from the same primitives across the selected
route families, with no unexplained button, link, radius, spacing or focus
variant.

### AC-DESIGN-5: emotional relevance

The homepage contains one approved authentic human/customer/place moment whose
adjacent content explains its relevance without inventing a quote or result.

### AC-DESIGN-6: progressive depth

Homepage, solution and infrastructure route samples preserve the same system
while demonstrating the approved progression from approachable to technical.

### AC-DESIGN-7: imagery integrity

Every new public image has an exact source record, derivative hash, crop/focal
point proof, responsive dimensions, publication approval and correct
decorative/informative accessibility treatment.

### AC-DESIGN-8: seven-locale safety

No layout, navigation or CTA clips, overflows or loses meaning in any selectable
locale. Any changed text and informative alt text carries native approval.

### AC-DESIGN-9: behavior and compatibility

Navigation, links, forms and existing page functions retain their behavior.
Tests exercise user-visible input/output behavior rather than copied source
logic.

### AC-DESIGN-10: performance and rendering

The implementation does not regress LCP, CLS or interaction responsiveness
beyond an approved budget, and important copy, links and imagery remain visible
in the initial document without JavaScript where the route contract requires it.

### AC-DESIGN-11: incremental release

Each wave has a bounded route/component ceiling, exact current-main collision
proof, public Preview, design review, seven-locale checks, website CI, normal
review, deliberate landing-only release, live proof and executable rollback.

### AC-DESIGN-12: no false completion

A local component, Figma frame, PR, green test run, Preview or READY deployment
must not be described as live. Production completion requires the exact serving
deployment and customer routes to be verified.

## Human approval gates

Before source implementation of the cross-site system:

1. Chloe's Figma design system is delivered or Seven explicitly approves an
   alternate canonical design-system artifact.
2. The original brand stakeholders approve the selected typography, color
   roles and distinctive visual device.
3. Seven approves the first-wave imagery and its intended route/story.
4. The homepage content hierarchy is approved.

The consistency audit, asset preparation and technical feasibility work may
continue while these decisions are pending, but they cannot be promoted as the
final design.

## Release boundary

This specification creates no authority over Dashboard, backend, root workflow,
provider, package, lockfile, CMS, external communication or Production. Each
implementation wave requires a new exact scope and collision proof.
