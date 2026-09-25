# Portable Path Map

This file is one of two explicit provenance exceptions permitted to retain
original machine paths. Everywhere else, repository-local sources use relative
links and external local sources use the aliases below. The untouched
pre-rewrite bytes remain available in Git commit `0b400aa48715d0961f1ede1036c9a368a3c544e0`.

Use these relative replacements for sources published in this repository:

| Original reference | Portable location |
|---|---|
| `/Users/sevenerhan/obenan-landing-page/DESIGN_PRINCIPLES_2026.md` | `reference/design-principles/DESIGN_PRINCIPLES_2026.md` |
| `/Users/sevenerhan/obenan-landing-page/BRAND_SYSTEM.md` | `reference/design-principles/BRAND_SYSTEM.md` |
| `/Users/sevenerhan/obenan-landing-page/BRAND_ASSET_LIBRARY.md` | `reference/design-principles/BRAND_ASSET_LIBRARY.md` |
| `/Users/sevenerhan/obenan-landing-page/reference/branding-assets/raw` | `reference/brand-assets/original/Gleb/` for the published Gleb source tree; the FULL release archive for material outside `Gleb/` |
| `/Users/sevenerhan/Documents/Obenan Gleb Branding Assets /Gleb` | `reference/brand-assets/original/Gleb/` |
| `/Users/sevenerhan/sales-harness/product/UI_UX_KNOWLEDGE_DOC.md` | `knowledge/product/UI_UX_KNOWLEDGE_DOC.md` (unified repository-native edition; restricted fields are declared inside the file) |
| Canonical logo paths in Seven's landing-page repo | `reference/brand-assets/quick-start/logos/`; additional historical originals are in the FULL release archive |

The Figma URL is external and remains valid as written:
https://www.figma.com/design/H3KZZ7qkFhFQLcCxBGtw1j/Brand

## External local sources not bundled

These stable aliases preserve the kind of source without publishing a
colleague's machine-specific path. They are provenance labels, not links and
not evidence that the source is available to another user.

| Alias | External source family |
| --- | --- |
| `<external:ai-rules>` | Obenan agent rules and review gates |
| `<external:obenan-landing-page>` | Public-website source workspace |
| `<external:gleb-source>` | Original local Gleb branding-assets source folder |
| `<external:whole-brain>` | Consolidated engineering workspace |
| `<external:sales-harness>` | Private sales and product knowledge source |
| `<external:ObiGEO>` | ObiGEO source workspace |
| `<external:GEO>` | GEO research workspace |
| `<external:downloads>` | Local downloaded evidence |
| `<external:codex-attachments>` | Local task attachment staging |

The aggregate portability gate permits machine-specific absolute paths only in
this file and root `SOURCE_PROVENANCE.md`. A nested file with either filename
does not inherit the exception.
