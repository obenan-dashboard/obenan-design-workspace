# Brand Asset Library

This file is the canonical guide for Obenan visual assets stored locally in the landing-page workspace.

Its purpose is simple:

- stop agents from recreating logos that already exist
- stop agents from inventing motion when approved motion assets already exist
- give every future agent one clean place to look before generating any visual or animation

## Core Rule

Before creating or editing any customer-facing visual asset, inspect the local brand asset library first.

That includes:

- logos
- favicon files
- mark variants
- motion assets
- logo loops
- UI animations
- social animations
- extracted UI source packages

If a usable approved asset already exists, reuse it or adapt it.

Do not regenerate the Obenan logo from scratch.

## Workspace Paths

### Canonical organized layer

Use this first:

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical`

This layer is organized for agents by asset type and uses stable paths.

### Full raw workspace mirror

Use this when you need the original source files or deeper extracted animation packages:

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/raw`

### Original external source

The original folder was:

- `/Users/sevenerhan/Documents/Obenan Gleb Branding Assets `

Important:

- the original source path contains a trailing space
- agents should not rely on that original path anymore unless the workspace mirror is missing something

## What Is Stored Here

The workspace mirror contains approximately:

- 400 files
- about 1.0 GB of local-only assets

Main asset families:

- brand guidelines PDFs
- SVG logo variants
- PNG logo exports
- favicon bundle
- logo animation loops
- broader brand motion
- UI animation clips
- social motion exports
- Lottie JSON logo animations
- zipped UI source packages and extracted source folders

## Canonical Directory Map

### Guidelines

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/guidelines`

Use for:

- brand reference PDFs
- design intent checks
- motion and visual alignment review

### Logos

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/logos/svg`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/logos/png`

Use for:

- website logo placement
- mark variants
- light and dark treatment
- favicon source derivation if needed

### Favicons

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/favicons`

Use for:

- favicon updates
- app icon references
- manifest-aligned icon work

### Logo Lottie

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/lottie`

Use for:

- lightweight logo animation references
- logo intro / loop behavior

### Motion

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/motion/logo`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/motion/brand`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/motion/ui`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/motion/social`

Use for:

- hero motion references
- logo loops
- product UI motion
- landing-page pacing references
- social-brand motion references

### UI Packages

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/ui-packages`

Use for:

- zipped source bundles for assistant, insights, onboarding, overview, and step flows

If you need extracted internals, inspect the matching folders in the raw mirror.

## Usage Rules For Agents

1. Check `canonical` first.
2. If you need deeper source material, inspect `raw`.
3. Reuse an existing approved logo or motion asset before designing a new one.
4. Do not redraw the Obenan logo.
5. Do not replace approved motion language with unrelated new motion unless explicitly requested.
6. If you use a brand asset in production work, report the exact file path used.
7. If a new durable asset family is added, update this file and the local mirror in the same task.

## When To Use Existing Assets

### Always reuse when the task involves:

- Obenan logo or mark
- favicon generation
- logo animation
- known UI animation patterns
- social brand motion

### Create something new only when:

- no suitable approved asset exists
- the task requires a new production asset
- the user explicitly asks for a new visual direction

If new work is created and becomes reusable, copy it back into the workspace asset library.

## Canonical Files To Check First

### SVG logos

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/logos/svg/Logo.svg`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/logos/svg/Logo_Dark.svg`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/logos/svg/Logo_Light.svg`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/logos/svg/logo+.svg`

### PNG logos

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/logos/png/logo-black.png`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/logos/png/logo-white.png`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/logos/png/logo-mark.png`

### Logo motion

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/lottie/logo-intro.json`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/lottie/logo-loop.json`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/motion/logo/OBENAN_LOGO_1_LOOP_1.mp4`

### UI motion

- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/motion/ui/0918-assistant.mp4`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/motion/ui/0828-insights.mp4`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/motion/ui/0829-overview.mp4`
- `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/canonical/motion/ui/0917-onboarding.mp4`

## Local-Only Storage Rule

These assets are intentionally stored under `reference/`, which is already ignored by git in this workspace.

This means:

- agents can keep the local asset library rich
- the workspace can stay useful without forcing large binaries into repository history

## Maintenance Rule

Whenever a user points to an external local asset library that becomes important for repeatable website work:

1. mirror it into the workspace
2. normalize the paths
3. create a canonical organized layer
4. document usage rules here
5. update launch docs so future agents know this library exists
