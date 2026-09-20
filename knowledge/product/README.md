# Product UI/UX knowledge lane

This lane holds dated observations of the Obenan product interface. It is
evidence for product, design, support, sales enablement, and engineering
discovery. It is not an implementation contract, approval of design intent,
or proof of current live behavior.

## Start here

- [`PRODUCT_UI_UX_MAPPING_2026-09_PUBLIC.md`](PRODUCT_UI_UX_MAPPING_2026-09_PUBLIC.md): public-safe orientation to the September 2026 remap.
- Complete report: [Google Doc, v2.0 Re-map, September 2026](https://docs.google.com/document/d/1tDfV7OxQ2NLZuTvCOFNio3-R0RY2h8t9UekD6fCDEHg/edit?tab=t.2dic4px61a21) (access-controlled source).

## Source and confidentiality boundary

The complete local report is preserved at Git commit `a53aa79` in the
operator's `sales-harness` workspace:

```text
product/UI_UX_MAPPING_V2_REMAP_2026-09.md
```

Source blob: `443eb410193b8a624147419a53d4c2aa0597c1e6`.

The complete report includes customer-account observations, operational
counts, identifiers, and a security-sensitive engineering observation. This
repository is public, so those details are intentionally not duplicated here.
Authorized colleagues should use the access-controlled Google Doc or the
restricted source workspace for the complete report.

## Update pattern

Every future product map belongs in this lane and must include:

1. observation date and environment class;
2. verified surfaces and routes;
3. observed, inferred, and unverified states kept separate;
4. write-risk controls and any unavoidable side effect;
5. customer and security data kept outside the public repository;
6. a pointer to the restricted complete source and its immutable identifier;
7. a reminder to re-verify changing behavior before implementation or claims.
