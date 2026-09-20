# Obenan Product UI/UX Map — September 2026 Public Orientation

- Status: dated observed evidence, public-safe derivative
- Observation date: 19 September 2026
- Complete source: access-controlled; see [`README.md`](README.md)
- Authority: orientation only; re-verify before implementation or claims

This map helps a new colleague or agent understand the product surface without
publishing customer-specific data or security-sensitive implementation
details from the complete report.

## Primary product areas

| Area | Main route or state | Principal content and flows |
| --- | --- | --- |
| Insights | `/` and `/user/insights` | Monthly recap stories, recommendations, Omnipulse and performance indicators |
| Indexability | `/user/indexability` | Business listing, categories, menu, images, directory presence, local pages, and bulk-update entry points |
| Discoverability | `/user/discoverability` | Google performance, reviews, keywords, campaigns, and posts |
| Google Stats | `/user/discoverability/googleStats` | User views, actions, conversions, branded/discovery searches, time ranges, and multi-location selection |
| Reputation | `/user/reputation` | Reviews and task-oriented reputation workflows |
| Reviews | `/review` | Account-wide reviews, auto-reply rules, templates, and review sources |
| Tasks | `/user/tasks` and `/user/tasks/auto-task` | Account-wide tasks and automatic task rules |
| Posts | `/user/posts` | Recurring posts, status, scheduling, and delivery-log entry points |
| Campaigns and surveys | `/user/campaigns`, `/user/campaign-type`, `/user/survey-campaign`, `/user/private-review` | Request, survey, marketing, analytics, logs, and private-review flows |
| Location Intelligence | `/user/location-intelligence` | Prompt-led location intelligence interaction |
| Emotion AI | `/user/emotionAI` | Sentiment, language, platform, time-range, and location filters |
| Reports | `/user/create-report`, `/user/generate-reports`, `/user/report-schedule-record` | Report creation, scheduled reports, and delivery history |
| Administration | `/users`, `/user/roles`, `/user/locations`, `/user/groups`, `/user/switch-accounts` | Users, roles, locations, groups, and account switching |
| Profile and activation | `/user/profile`, `/user/products` | User settings, company/location context, security settings, and product activation |
| Connected-agent hand-offs | Conditional dashboard states | Gated connection and company-link confirmation flows; no primary-navigation destination was observed |

Routes are an observed September 2026 snapshot. They may change and must not
be treated as a stable public API.

## Navigation model observed

- Indexability, Discoverability, and Reputation use long scrolling pages with
  section-anchor navigation.
- Several major capabilities are reached through recommendation cards,
  contextual links, or typed routes rather than primary navigation.
- Reviews, tasks, and campaigns include account-wide views beside
  location-scoped product areas; scope needs to be made explicit in new work.
- Location selection uses more than one interaction model across the product.
- Filters commonly use a left panel with reset, collapsible groups, count
  headers, adjustable page sizes, and paginated tables.

## Reusable interface patterns observed

- story-style monthly recap cards with a timeline and sharing entry point;
- action-card carousels connecting insight to a next action;
- section-anchor pages rather than local tab state;
- route-backed hub tabs for reviews, tasks, and campaigns;
- multi-location chips with editing affordances;
- generated insight sentences below charts;
- freshness and partial-period notices;
- detail drawers and row action menus;
- feature-flagged UI availability.

These are observations, not automatic recommendations. A production design
must still follow the current design core, product truth, accessibility,
responsive behavior, and exact code authority.

## Design and engineering questions carried forward

- Make account-wide versus location-scoped state unmistakable.
- Consolidate or explain competing location-selection models.
- Improve discoverability for capability areas without stable navigation.
- Preserve filter and time-range state in deep links where appropriate.
- Resolve naming drift and placeholder or dead-end routes.
- Ensure read-only observation cannot mutate customer data.
- Give administrators visible control over connected-agent relationships.
- Keep sensitive authentication and connection findings in restricted
  engineering/security channels.

## How agents must use this map

1. Treat every statement as dated observed evidence.
2. Consult the access-controlled complete report when exact screen details,
   write-risk controls, contradictions, or engineering findings matter.
3. Re-verify current code and live behavior before implementation.
4. Never turn observed customer data into marketing copy or public claims.
5. Never infer approval, release authority, or canonical design intent from
   this document.
