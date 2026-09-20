# Obenan V2 Dashboard: UI and UX Knowledge Document

**The single current-state reference for the V2 dashboard.** It merges the January 2026 master mapping, its v1.1 patch set, the January reconciliation report, and the September 2026 re-map into one document.

> **Public-repository edition.** This file preserves the unified information architecture, screen inventory, flows, interaction patterns, write-risk findings, UX audit, and provenance. Customer identity, account-specific identifiers and scale, internal infrastructure detail, and directly exploitable authentication detail are withheld. The immutable private source is commit `32c9003`, path `product/UI_UX_KNOWLEDGE_DOC.md`, Git blob `6d9d017a50451b81cb0df27919351c10f50f7528`.

| | |
| --- | --- |
| Environment | Authenticated Obenan dashboard; exact runtime and API hosts withheld |
| Account mapped | Anonymized multi-location customer account |
| Signed-in user and role | Authenticated company administrator; identity withheld |
| First mapped | 22 January 2026; location context withheld |
| Re-verified | 19 September 2026; location context and identifier withheld |
| Mode | Read-only both times. No saves, submissions, replies, uploads, connections, toggles or typing into product fields |
| Supersedes | `UI_UX_MAPPING_V2.md` (January master plus v1.1 patch set) and `UI_UX_MAPPING_V2_REMAP_2026-09.md` (September delta). Both stay in the repo as history |

## 0. How to read this document

**Confidence markers.** Every claim carries one:

- **[Sep 2026]** seen live on 19 September 2026.
- **[Jan 2026]** recorded in January and not re-checked in September. Treat as likely but stale.
- **[Code]** read from the app's own route map or UI text in its client bundle, not clicked. Used where the opening control is on the never-click list.
- **[Unverified]** named but not confirmed. Each one says why.

**Two things to know before using this for a customer conversation:**

1. This is one account. Feature visibility is gated by product activation, role permissions, plan and feature flags, so another account can legitimately look different.
2. Read section 10 before anyone repeats this exercise. Viewing two of the pages causes the dashboard to write data by itself.

**Related files.** `FEATURES_OVERVIEW.md` is the capability inventory for pitching. Where the two disagree, this document describes what the UI actually does; appendix I lists the conflicts.

## 1. Environment and scope

- The dashboard is a single-page React app backed by an application API. Exact runtime hosts and environment flags are withheld from this public repository. **[Sep 2026]**
- Third-party scripts present: Google Tag Manager and Analytics, Meta pixel, Microsoft Clarity, Sentry, Grafana Faro, LaunchDarkly feature flags, Google sign-in, MSAL (Microsoft auth). **[Sep 2026]**
- Errors, permission denials and 404s are handled in-app: an unknown path renders "404 - Page Not Found" rather than a server error page. **[Sep 2026]**

## 2. System model: entities and context

### 2.1 Account scale

| Entity | January 2026 | September 2026 |
| --- | --- | --- |
| Locations | Withheld | Withheld |
| Groups | Withheld | Withheld |
| Users | Withheld | Withheld |
| Roles | 7 | 7 |
| Countries represented | 20 or more | 20 or more |
| Reviews in account | not surfaced | Withheld |
| Tasks | not surfaced | Withheld |
| Campaigns | not surfaced | Withheld |
| Recurring posts | not surfaced | Withheld |
| Scheduled reports | Withheld | Withheld |
| Report delivery records | not surfaced | Withheld |
| Auto reply rules | not found | Present; exact account count withheld |
| Reply templates | not found | Present; exact account count withheld |
| Auto task rules | not surfaced | Present; exact account count withheld |
| Accounts this user can open | not mapped | Withheld |

### 2.2 Context model

- **Location context.** Insights, Indexability, Discoverability, Reputation, Review Sources and the standalone Directory Presence page work on one selected location, chosen in the "Select Business" combobox. **[Sep 2026]**
- **Chip context.** Google Stats, Emotion AI and Campaign Analytics use a newer chip-based selector: one chip per selected location, a removable x per chip, an Edit button, and a "+N more" summary when several are selected ("+82 more" seen on Campaign Analytics). **[Sep 2026]**
- **Account-wide screens.** The Reviews hub, Tasks, Campaigns, Posts, Reports Records, Users, Roles, Locations, Groups and Switch Account ignore the selected location. The Reviews hub shows "Selected Location 0" in its own filter, meaning no location filter applied. **[Sep 2026]**
- **Default location.** The profile's Company Details banner explains that company details come from the default location chosen at sign-up and points to "Change default location". **[Jan 2026, wording still present Sep 2026]**
- **Groups** organise locations by country and ownership type, for example "AR - Company Owned", "AR - SubFranchise", "BE - Franchise". They appear as filters on most list screens. **[Sep 2026]**

## 3. Information architecture and navigation

### 3.1 Top bar

| Item | Destination |
| --- | --- |
| Logo | `/` |
| Insights | `/` |
| Indexability | `/user/indexability` |
| Discoverability | `/user/discoverability` |
| Reputation | `/user/reputation` |
| Location Intelligence | `/user/location-intelligence` |
| Generate Report (right side) | `/user/create-report` |
| Avatar and name | profile menu |

Unchanged between January and September. **[Sep 2026]**

### 3.2 Profile menu

My profile, Switch Account, Manage users, Manage roles, Manage locations, Manage groups, Sign out. Unchanged labels. Switch Account only appears when the signed-in user can open more than one account. **[Sep 2026 + Code]**

### 3.3 Navigation map

```
Top bar
├─ Insights → /
│  ├─ Your month at a glance (ObiFeed recap carousel, Share per card)
│  ├─ Hi [user name]! Let's get started (recommendation cards)
│  │   View Omnipulse Report → the Omnipulse report URL, or create via /user/choose-competitors
│  │   Start a campaign → /user/campaign-type
│  │   View auto response rules → /user/review/auto-reply
│  │   Complete Listing Information → /user/indexability
│  │   Add location → /user/locations
│  └─ KPI cards
│      Start a Campaign → /user/campaigns if campaigns exist, else /user/campaign-type
│      Learn more → /user/reputation or /user/discoverability
│      Create a post → /user/posts (opens the composer)
│      Complete listing → /user/indexability
│      View open tasks → /user/tasks
├─ Indexability → /user/indexability   (one scrolling page)
│  └─ anchors: Business Listing, Categories, Menu, Images, Directory Presence
│     plus a Local Pages section and the Bulk Update modal
├─ Discoverability → /user/discoverability   (one scrolling page)
│  ├─ anchors: Google Stats, Reviews, Keywords, Discoverability Campaigns, Posts
│  ├─ Google Stats View All → /user/discoverability/googleStats
│  ├─ Reviews View All → /review (pre-filtered 4-5 stars or 1-3 stars)
│  ├─ Posts View All → /user/posts
│  └─ cards: Monitor Campaign → /user/campaigns; Set up auto reply → /user/review/auto-reply
│     (opens the form); View auto response rules → /user/review/auto-reply; View Post → /user/posts
├─ Reputation → /user/reputation   (one scrolling page)
│  ├─ anchors: Reviews, Tasks
│  ├─ Reviews View All → /review
│  └─ Tasks list + View All → /user/tasks
├─ Location Intelligence → /user/location-intelligence
└─ Generate Report → /user/create-report
   └─ View scheduled reports → /user/generate-reports
      └─ View Reports Records (NEW) → /user/report-schedule-record

Hubs with their own tab rows (no top-nav entry)
├─ /review            Reviews | Auto reply rules | Templates | Sources
├─ /user/tasks        Tasks | Auto task rules
└─ /user/campaigns    Overview | Analytics | Survey Logs

Profile menu
├─ My profile → /user/profile
│   ├─ Product Activation → /user/products
│   └─ Change default location → /user/locations
├─ Switch Account → /user/switch-accounts
├─ Manage users → /users
├─ Manage roles → /user/roles
├─ Manage locations → /user/locations
├─ Manage groups → /user/groups
└─ Sign out

Persistent elements
├─ Select Business combobox + Settings link (→ /user/locations)
├─ Location chips + Edit (Google Stats, Emotion AI, Campaign Analytics)
├─ Competitor comparison widget (Indexability, Discoverability, Reputation)
└─ Help button, bottom left, "Do you need help?", dismissible
```

### 3.4 Entry-point index: how a user reaches each area

| Area | Reached from |
| --- | --- |
| Reviews hub (`/review`) | Discoverability > Reviews > View All; Reputation > Reviews > View All |
| Auto reply rules | Reviews hub tab; Insights card "View auto response rules"; Discoverability cards "Set up auto reply" and "View auto response rules"; Reputation card "View Auto Reply Rules" |
| Templates, Review Sources | Reviews hub tabs only |
| Tasks | Insights "View open tasks"; Reputation > Tasks > View All |
| Auto task rules | Tasks tab |
| Posts | Discoverability > Posts > View All and "View Post" card; Insights "Create a post" |
| Post delivery logs | Posts row menu > See Logs |
| Campaigns | Insights and Reputation "Monitor Campaign" and "View campaign"; KPI card "Start a Campaign" |
| Campaign type picker | Insights and Reputation "Start a campaign" cards |
| Campaign Analytics, Survey Logs | Campaigns tabs |
| Surveys | Campaign type picker > Survey Campaign |
| Emotion AI | Direct URL only. Not in any menu |
| Reports Records | Scheduled Reports > View Reports Records |
| Locations admin | Profile menu; Select Business > Settings; Profile > Change default location |
| Private Reviews, Directory Presence standalone, Publish Changes, Dashboard (Private), Keyword Cloud, Settings | No UI entry point found. Direct URL only |

## 4. Routing, deep-linking and state

### 4.1 Page model

- **Real routes** for each main section. **[Sep 2026]**
- **Section anchors, not tabs.** Indexability, Discoverability and Reputation render every section on one long page. The header links scroll to a section and do not change the URL. In January these were client-side tabs that swapped content. Either way, the sub-paths 404. **[Sep 2026]**
- **Real sub-routes** exist for the hub tabs (Reviews hub, Tasks, Campaigns) and for Google Stats. **[Sep 2026]**

### 4.2 What the URL does and does not carry

- The selected location is **not** in the URL, in any form. **[Jan 2026 and Sep 2026]**
- Filters, time ranges and chip selections are **not** in the URL. **[Sep 2026]**
- Section anchors do not update the URL, so a section cannot be linked to. **[Sep 2026]**
- Consequence, unchanged since January: a pasted link opens on the recipient's own last-used location and default filters.

### 4.3 Persistence

- Location context persists across navigation, refresh, hard refresh and new tabs, through Redux-persist in localStorage. **[Jan 2026 and Sep 2026]**
- Google Stats resets its time range to the 12-month Custom Date default on refresh, and keeps the location chip. **[Sep 2026]**
- localStorage keys are in appendix C.

### 4.4 Route truth table

Appendix B holds the full table, including 404s, permission-denied routes and routes deliberately not loaded.

## 5. Screen inventory

Status compares September with January: Unchanged, Changed, New, or Could not verify.

| Screen ID | Name | URL or state | Type | Nav path | Primary entities | Key UI components | Key actions (safe) | Write-risk actions present | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INS-01 | Insights | `/` (also renders at `/user/insights`) | Real route | Top bar > Insights | Location, metrics, monthly feed | Recap carousel; recommendation cards; greeting; Omnipulse score; KPI cards; Select Business + Settings | Carousels; month timeline; navigating CTAs | Share per recap card; Create Omnipulse Report path; the page view itself writes listing completeness (section 10) | Changed |
| INS-FEED-01 | Your month at a glance (ObiFeed) | Component on `/` | Component | Insights, top | Monthly metric stories | Story cards with metric, headline, sentence, CTA, "By Obenan.ai", Share; Previous/Next; month timeline; load older updates | Browse | Share menu | New |
| IDX-01 | Indexability | `/user/indexability` | Real route, one scrolling page | Top bar > Indexability | Location listing data | Section anchors; competitor widget; action-card carousel; Subscription Date; Go to Google Business Profile | Anchors; carousel | Refresh report; Change competitors; Refresh data from Google; Bulk Update; page view writes listing completeness | Changed |
| IDX-BL-01 | Business Listing | `#business-listing` | Page section | Indexability | Listing profile | Short and Long Description, Keywords, General Information, Contact Information, Hours, Special Hours, More Hours, Attributes with percentage, Service Areas, Services, Brands; Edit on each | Read | Edit on every sub-section; Bulk Update | Changed |
| IDX-CAT-01 | Categories | `#categories` | Page section | Indexability | Categories | Google primary and additional; Facebook primary; Edit on each | Read | Edit | Changed |
| IDX-MENU-01 | Menu | `#menu` | Page section | Indexability | Restaurant menu | "Manage your menus"; Add Section; Edit Menu; empty for this location | Read | Add Section; Edit Menu | Changed |
| IDX-IMG-01 | Images | `#images` | Page section | Indexability | Images | Logo & Cover Photo, Teams, Additional Photos, Exterior, Interior, Food & Drinks; Edit on each | Read; Show more or less | Edit and upload | Changed |
| IDX-DIR-01 | Directory Presence | `#directory` | Page section | Indexability | Directory integrations | Essential Directories (Google, Facebook, both Connected); Supporting Platforms table with Platform, Sync Status, Additional Context, 40 rows; Social Accounts | Read | Edit; status control | Changed |
| IDX-LP-01 | Local Pages | Section on `/user/indexability` | Page section | Indexability, last section | Brand locator pages | Description; General Information (Slug, Name, Menu Link); Delivery Options; brand Attributes; Cover Images; Edit on each | Read | Edit | New |
| IDX-BULK-MOD-01 | Bulk update all locations | Modal on `/user/indexability` | Modal | Business Listing > Bulk Update | Many locations | 14 section tabs; affected-location count; Create Description; Apply to all; character counters; Generate with AI; Selected Locations list; Cancel and Save | Open, read, Cancel | Apply to all; Generate with AI; Save | New |
| DISC-01 | Discoverability | `/user/discoverability` | Real route, one scrolling page | Top bar > Discoverability | Stats, reviews, keywords, campaigns, posts | Section anchors; competitor widget; action-card carousel | Anchors; carousel; View All | Refresh report; Change competitors; Set up auto reply; Request Reviews; Create Campaign; Create Post | Changed |
| DISC-GS-ROUTE-01 | Google Stats | `/user/discoverability/googleStats` | Real sub-route | Discoverability > Google Stats > View All | Performance stats, keywords | Anchored sub-views; location chips + Edit; Subscription Date; Filter by; freshness and partial-month notices; Insights lines; keyword tables | Change time range; anchors | None that commits | Changed |
| DISC-GS-UV-01 | User Views | `#userViews` | Page section | Google Stats | Views | Mobile Maps, Mobile Searches, Desktop Maps, Desktop Searches; totals with change; Insights line | Read | None | New |
| DISC-GS-UA-01 | User Actions | `#userActions` | Page section | Google Stats | Actions | Direction Requests, Website Visits, Call Clicks; totals; Insights line | Read | None | New |
| DISC-GS-CONV-01 | Conversions | `#conversions` | Page section | Google Stats | Conversions | Conversations, Bookings, Food Orders, Business Food Menu Clicks; total; Insights line | Read | None | New |
| DISC-GS-SB-01 | Searches Breakdown | `#searchBreakdown` | Page section | Google Stats | Searches, keywords | Branded vs Discovery split; Insights line; Branded Keywords and Discovery Keywords tables (Keyword, Position, Number of searches) | Show more | None | New |
| DISC-REV-01 | Reviews section | `#reviews` | Page section | Discoverability | Reviews | Top Positive and Most Concerning tables; View All per panel | View All | Request Reviews; Reply Now on unanswered rows | Changed |
| DISC-KW-01 | Keywords section | `#keywords` | Page section | Discoverability | Keywords | "Keywords in Reviews Data" (Keyword, Visibility Score, Positive Mentions, Negative Mentions); target keyword list | Show more | None observed | Changed |
| DISC-CAMP-01 | Discoverability Campaigns | `#campaigns` | Page section | Discoverability | Campaigns | Top Performing and Worst Performing panels | Read | Create Campaign | Changed |
| DISC-POST-01 | Posts section | `#posts` | Page section | Discoverability | Posts | Content Variety with badges; Insights line; View All | View All | Create Post | Changed |
| REP-01 | Reputation | `/user/reputation` | Real route, one scrolling page | Top bar > Reputation | Reviews, tasks | Section anchors; competitor widget; action-card carousel; Rating Distribution Over Time | Anchors; carousel | Refresh report; Change competitors; Start Review Campaign | Changed |
| REP-REV-01 | Reviews section | `#reviews` | Page section | Reputation | Reviews | Title, description, View All. No embedded table any more | View All | None in section | Changed |
| REP-TASKS-01 | Tasks section | `#tasks` | Page section | Reputation | Location tasks | Location-scoped task table; View All | View All; paginate | None in section | Changed |
| REV-01 | Reviews hub | `/review` | Real route | Reviews View All from two sections | All reviews | Hub tabs; count-discrepancy notice; filters Country, Groups, Status, Rating, Time Range, Platform, Locations; table Location, Platform, Review, Response, Author, Date | Filter; paginate | Reply Now; Add auto reply rule; Add review source; row selection | New |
| REV-AR-01 | Auto Reply Rules | `/user/review/auto-reply` | Real route | Hub tab and cards | Auto reply rules | Rule list; filters Country, Rule Type, Applies to; columns Title, Applies to, Rule Type, Responding using, Last Updated; row menu | Filter; paginate | Set up auto reply; Pause; Resume; Edit; Delete | New |
| REV-AR-MOD-01 | Add auto reply rule | Modal on REV-AR-01 | Modal | Set up auto reply | Rule config | Field list in appendix G | Not opened | Save; Generate Test Response | New [Code] |
| REV-TPL-01 | Templates | `/user/review/templates` | Real route | Hub tab | Reply templates | Template list; columns Name, # of uses, Author, Date | Paginate | Import default templates; Create Template | New |
| REV-SRC-01 | Review Sources | `/user/review/sources` | Real route | Hub tab | Review platforms per location | Select Business; Connected Sources; Popular Review Sources | Read | Connect; Disconnect; Add Source | New |
| TASKS-01 | Tasks | `/user/tasks` | Real route | Insights and Reputation | Tasks | Hub tabs; filters Country, Rule Type, Obi Intelligence Rule, Status, Assigned User; columns Rating, Location, Title, O.I. Rule, Assigned User, Status | Filter; paginate | Add Task Rule | Changed |
| TASKS-AUTO-01 | Auto task rules | `/user/tasks/auto-task` | Real route | Tasks tab | Task rules | Rule list; filters Country, Rule Type, Applies to, Assigned User; columns Title, Applies to, Rule type, Assigned User, Last updated | Filter | Add task rule | New |
| POST-01 | Posts | `/user/posts` | Real route | Discoverability and Insights | Recurring Google posts | Post list; filters Country, Groups, Status, Time Range; columns Location name, Frequency, Status, Start date, Last posted date, Post; row menu Edit, See Logs, Resume, Delete | Filter; See Logs | Create Post; Edit; Resume; Delete; bulk selection | New |
| POST-LOG-01 | Post logs | Drawer on `/user/posts` | Drawer | Posts row > See Logs | Post deliveries | Total posts, Successful posts, Success percentage, Failed posts; per-location table (Location, Date, Count, Post status, Report) | Read; close | None observed | New |
| CAMP-01 | Campaigns | `/user/campaigns` | Real route | Cards | Campaigns | Hub tabs; filters Country, Groups, Platform, Status, Type; columns Name, Location, Campaign type, Recipient type, Impressions, Clicks, Status | Filter; paginate | Add new campaign | New |
| CAMP-AN-01 | Campaign Analytics | `/user/campaigns-analytics` | Real route | Campaigns tab | Campaign performance | Location chips + Edit; filters Campaign Type, Countries, Time Range; table Location, Impressions, Clicks, Positive %, Negative %; View More | Filter | None observed | New |
| CAMP-SL-01 | Survey Logs | `/user/campaigns-survey-logs` | Real route | Campaigns tab | Survey responses | Tab shell only in this session | Read | None observed | New |
| CAMP-TYPE-01 | Create new campaign | `/user/campaign-type` | Real route | Start a campaign | Campaign types | Request Campaign, Survey Campaign, Marketing Campaign | Read | Choosing a type starts creation | New |
| CAMP-REQ-01 | Request campaign wizard | `/user/create-campaigns` | Real route | Type picker | Review requests | Steps: Setup campaign, Customize email, Routing, Format, Review and confirm | Read step 1 | Next; Save; Launch | New |
| CAMP-MKT-01 | Marketing campaign wizard | `/user/marketing-campaign` | Real route | Type picker | Marketing email | Steps: Setup campaign, Customize email, Add recipients, Review and confirm | Read step 1 | Next; Save; Send | New |
| SURV-01 | Surveys | `/user/survey-campaign` | Real route | Type picker | Surveys | Title and Create Survey | Read | Create Survey | New |
| PRIV-REV-01 | Private Reviews | `/user/private-review` | Real route | None found | Private feedback | Columns Name, Rating/NPS, Email, Phone number, Reach, Review; empty for this account | Read | None observed | New |
| LI-01 | Location Intelligence | `/user/location-intelligence` | Real route | Top bar | AI chat | "How can I help you today?"; three suggested prompts; message input | Read | Sending a message | Unchanged |
| EA-01 | Emotion AI | `/user/emotionAI` | Real route, hidden | Direct URL | Sentiment analytics | Location chips + Edit; filters Time Range, Custom, Language, Sentiment; Search; 11 widgets | Filters | Search runs queries | Changed |
| REP-GEN-01 | Generate Report | `/user/create-report` | Real route | Top bar | Reports | Content, Date Range, Date Format, Type of file, Preview, Language, Upload logo, Cancel, Continue | Read options | Continue; Upload logo | Unchanged |
| REP-SCHED-01 | Scheduled Reports | `/user/generate-reports` | Real route | Generate Report link | Report schedules | Report schedule list; columns Report Name, Report type, Created By, Frequency, Status; filters; View Reports Records | Filter; paginate | Row edit and delete | Changed |
| REP-REC-01 | Reports Records | `/user/report-schedule-record` | Real route | Scheduled Reports | Report deliveries | Delivery-record list; filters Time Range, Report Schedules; columns Name, Emails, Email Subject, Sent At, Download | Filter | Download | New |
| PROF-01 | My Profile | `/user/profile` | Real route | Profile menu | User and default location | Identity and role; Product Activation; User Information and Settings; Company Details banner; General Information; Contact Information; Reset Password | Read | Edit x3; Reset Password; 2FA; photo | Changed |
| PROD-01 | Products | `/user/products` | Real route | Profile | Product activation | 10 products, all Approved | Read | None | Unchanged |
| ADM-USERS-01 | Manage Users | `/users` | Real route | Profile menu | Users | User list; filters Role, Status; columns Name, Role, Email, Status | Filter; search; paginate | Add User; row actions | Unchanged |
| ADM-USERS-MOD-01 | Add User modal | Modal on `/users` | Modal | Add User | Users | Field list in appendix G | Open and Cancel | Save, which sends invites | Could not verify in Sep |
| ADM-ROLES-01 | Manage Roles | `/user/roles` | Real route | Profile menu | Roles | 7 roles; filter Managed by; columns Role name, ID, Updated, Managed by | Filter | Create a role; row edit and delete | Unchanged |
| ADM-ROLES-MOD-01 | Create Role modal | Modal on `/user/roles` | Modal | Create a role | Role permissions | Permission matrix, appendix D | Open and Cancel | Save | Could not verify in Sep |
| ADM-LOCS-01 | Manage Locations | `/user/locations` | Real route | Three entry points | Locations | Location list; filters Country, Groups; columns ID, Location, Address, Created at, Status, Social Connections; row menu Edit, Request delete | Filter; sort; paginate | Add Location; row menu | Changed |
| ADM-LOCS-OAUTH-01 | Add Location OAuth | `accounts.google.com` | External redirect | Add Location | Google Business Profile | Google account chooser and consent, appendix F | Observe then go back | Completing OAuth | Could not verify in Sep |
| ADM-GROUPS-01 | Manage Groups | `/user/groups` | Real route | Profile menu | Groups | Group list; columns Group, Country, Address; expandable rows | Expand; paginate | Add group; row edit and delete | Unchanged |
| ADM-GROUPS-MOD-01 | Add Group modal | Modal on `/user/groups` | Modal | Add group | Groups | Group name; multi-select locations | Open and Cancel | Create | Could not verify in Sep |
| ACC-SWITCH-01 | Accounts (Switch Account) | `/user/switch-accounts` | Real route | Profile menu | Company accounts | Account list; filters Country, Status, State; columns Company Name, Country, Status, State; current account flagged | Filter; paginate | Selecting an account | New |
| DIR-01 | Directory Presence standalone | `/user/channels` | Real route | None found | Directory sync | Select Business; View Data; Supporting Platforms table | Read | None observed | New |
| PUB-01 | Publish Changes | `/user/publish-changes` | Real route | None found | Pending changes | Static copy and predicted-outcome scores; one untranslated key; makes no API calls | Read | Publish | New |
| DASH-PRIV-01 | Dashboard (Private) | `/dashboard` | Real route | None found | Unknown | Title and a Logout button | Read | Logout | New |
| STUB-01 | Keyword Cloud, Settings | `/user/keyword-cloud`, `/user/settings` | Real routes | None found | None | Title only | Read | None | New |
| MCP-CONSENT-01 | Connect Obenan AI MCP | Consent modal; exact handshake parameters withheld | Consent modal | External client request | Third-party access | Names the client; explains temporary access and revocation; Continue button | Not triggered | Continue grants access | New [Code] |
| OBIGEO-LINK-01 | ObiGeo link notice | Banner on an ObiGeo link request | Notice | ObiGeo invitation | Company pairing | Names the requesting account; "Nothing has been shared yet"; Confirm or Close; admin only | Not triggered | Confirm | New [Code] |

## 6. Screen records

### 6.1 Insights (`/`)

Three stacked blocks. **[Sep 2026]**

1. **Your month at a glance** (internally ObiFeed). A carousel of story cards for the selected location, each tagged ENGAGEMENT or DISCOVERABILITY, with a large number, a headline, one sentence, a CTA and a Share menu. Examples seen: profile actions, direction requests, menu opens, Maps appearances, total Google appearances, leading discovery search. Below it a month timeline with the active month, a link to the previous month, and a tile that loads older updates.
2. **Recommendation cards** under "Hi [user name]! Let's get started", each with a section tag, an optional number badge, a title, a sentence and a CTA. Seen: Location scanned (View Omnipulse Report), Improve Reputation (Start a campaign), Great engagement (View auto response rules), Improve Indexability (Complete Listing Information), Locations added (Add location).
3. **KPI cards**: Omnipulse score, Reviews last month, Reputation, Average star rating, Discoverability, Days since last upload, Top performing campaign, Listing completeness, Open tasks, Indexability. Card CTAs are listed in section 3.3.

The card set is driven by flags from the API, so it varies by location and account state. **[Code]**

### 6.2 Indexability (`/user/indexability`)

One scrolling page. Above the sections: the competitor widget (this location's score against 3 competitors, with Refresh report and Change competitors), the Bulk Update button, a Subscription Date, "Go to Google Business Profile", "Refresh data from Google", and an 11-card carousel of missing elements (missing attributes, directories, description, keywords, service areas, website, services, additional categories, images, social channels, menu). **[Sep 2026]**

Sections, each with Edit controls:

- **Business Listing**: Short Description, Long Description, Keywords, General Information, Contact Information, Hours of Operation, Special Hours of Operation with dated rows, More Hours of Operation, Attributes with a completion percentage and a long yes/no list, Service Areas, Services, Brands.
- **Categories**: Google primary and additional, Facebook primary.
- **Menu**: "Manage your menus", Add Section, Edit Menu.
- **Images**: six galleries.
- **Directory Presence**: Essential Directories, about 40 supporting platforms with sync status, Social Accounts.
- **Local Pages** (new in September): Description, General Information with Slug, Name and Menu Link, Delivery Options, brand-specific Attributes, Cover Images.

In January the same five areas existed as client-side tabs and no per-section Edit controls were found. Editing in place is the main change. **[Jan 2026 vs Sep 2026]**

### 6.3 Discoverability (`/user/discoverability`)

One scrolling page: competitor widget, action cards, then Google Stats summary (Business Performance Summary, Customer Views, Customer Actions, Searches Breakdown, a 13-month chart, totals, View All), Reviews (Top Positive and Most Concerning tables, each View All going to the Reviews hub pre-filtered by rating band, plus Request Reviews), Keywords ("Keywords in Reviews Data" with visibility score and positive and negative mention counts, plus the target keyword list), Discoverability Campaigns (Top and Worst Performing panels), and Posts (Content Variety with OPTIMAL and GOOD badges and an Insights line). **[Sep 2026]**

### 6.4 Google Stats (`/user/discoverability/googleStats`)

The most changed screen. **[Sep 2026]**

- **Four anchored sub-views**: User Views, User Actions, Conversions, Searches Breakdown.
- **Location chips with Edit**, replacing the single-location context of January.
- **Filter by**: Time Period presets (Last 30 days, Last 90 days, This month, Last month, This year, Last year, Last 365 days) applied immediately, or Custom Date with From, To and a Search button. The default is the 12 months ending at the newest available data date.
- **Notices**: newest Google data date in UTC with the viewer's time zone named, and a notice that the current month is excluded to avoid misleading comparisons.
- **Per sub-view**: a monthly line chart with series toggles, totals per series with percentage change and trend arrow, and a generated "INSIGHTS" sentence.
- **Series**: User Views splits Mobile Maps, Mobile Searches, Desktop Maps, Desktop Searches. User Actions splits Direction Requests, Website Visits, Call Clicks. Conversions splits Conversations, Bookings, Food Orders, Business Food Menu Clicks.
- **Searches Breakdown**: branded versus discovery share, then Branded Keywords and Discovery Keywords tables with Keyword, Position and Number of searches.
- Some analytics reads use POST; exact endpoints remain in the immutable private source.

### 6.5 Reputation (`/user/reputation`)

One scrolling page: competitor widget, action cards, Rating Distribution Over Time (1 to 5 star), a Reviews section that is now only a link to the Reviews hub, and a location-scoped Tasks table with View All. January's duplicated reviews table is gone. **[Sep 2026]**

### 6.6 Reviews hub (`/review`) and review tooling

- **Scope**: account-wide, not tied to Select Business. **[Sep 2026]**
- **Tabs**: Reviews, Auto reply rules, Templates, Sources, each a real route.
- **Filters**: Country, Groups, Status, Rating, Time Range, Platform, Locations with Select all and Clear all.
- **Table**: Location, Platform, Review, Response, Author, Date. Unanswered rows show Reply Now.
- **Reply flow** (not opened, read from UI text): Reply to Review, Edit, Delete Response, Assign Task, "Set up auto reply to reviews like this", states Drafted, Replied and Haven't Replied, and platform limits such as no reply after 15 days and no edit after 5 days. **[Code]**
- **Auto reply rules**: one rule per group or location and star band, answered by "Obi Intelligence" in every rule seen. Rows can be paused, resumed, edited or deleted. Field inventory in appendix G.
- **Templates**: named templates with a use count, an author and a date, plus Import default templates and Create Template.
- **Review Sources**: per location. Connected in this account: Google, Facebook, Tripadvisor. Offered: Yelp, Ubereats, Happycow, Foursquare. Connect, Disconnect and Add Source are all write actions.

January recorded auto reply rules and templates as "not found" in the Discoverability reviews view. They exist now as their own pages. **[Jan 2026 vs Sep 2026]**

### 6.7 Tasks (`/user/tasks`) and Auto task rules

Tasks is account-wide with filters Country, Rule Type, Obi Intelligence Rule, Status and Assigned User, and columns Rating, Location, Title, O.I. Rule, Assigned User and Status. Tasks are generated from reviews. Auto task rules is a sibling route with its own filters and an Add task rule button. Reputation's Tasks section is the same data scoped to the selected location. That settles the January open question about how `/user/tasks` and the Reputation tab relate. **[Sep 2026]**

### 6.8 Posts (`/user/posts`)

Recurring post schedules per location, with Frequency, Status, Start date, Last posted date and a text preview. The row menu offers Edit, See Logs, Resume and Delete. See Logs opens a drawer with total posts, successful posts, success percentage, failed posts, and a per-location delivery table. The composer opens through navigation state from several cards; `/user/create-post` itself is a 404. Composer text includes Generate with AI, call-to-action options (Call, Book, Order online, Shop, Sign up, Learn more, None) and scheduling options (repeat, interval between posts, end date or no end). **[Sep 2026 + Code]**

### 6.9 Campaigns, surveys and private reviews

- **Campaigns** list with Overview, Analytics and Survey Logs tabs; filters Country, Groups, Platform, Status, Type; columns Name, Location, Campaign type, Recipient type, Impressions, Clicks, Status. Campaign types seen in data: Request Campaign with QR Code recipients.
- **Campaign type picker**: Request Campaign ("Boost your public reputation by collecting more reviews"), Survey Campaign ("Improve your business by collecting customer feedback"), Marketing Campaign ("Drive repeat business by sending promotional content").
- **Request campaign wizard**: Setup campaign, Customize email, Routing, Format, Review and confirm.
- **Marketing campaign wizard**: Setup campaign, Customize email, Add recipients, Review and confirm.
- **Campaign Analytics**: chip-based multi-location context, filters for Campaign Type (Net Promoter Score, Review Request, Survey), Countries and Time Range, and a table of Location, Impressions, Clicks, Positive % and Negative %.
- **Surveys** and **Private Reviews** (Name, Rating/NPS, Email, Phone number, Reach, Review) exist as routes. Private Reviews had no rows for this account and no UI entry point was found. **[Sep 2026]**

Loading the wizard routes created nothing: the campaign count was unchanged and only read calls were logged.

### 6.10 Emotion AI (`/user/emotionAI`)

Still not in any menu. Route casing is tolerant (`emotionAI`, `emotionAi`, `EmotionAI` all load) and the hyphenated form 404s. **[Jan 2026 and Sep 2026]**

Filters: Time Range presets (Today, Yesterday, This week, Last week, Last month, Last 6 months, Show more), Custom with In range, Before and After, Language (30), Sentiment (Negative, Neutral, Positive) and Search. The January doubt about the sentiment filter is resolved: it is present. **[Sep 2026]**

The 11 widgets:

1. Reviews and Average Rating Graph, with graph and table views
2. Rating Variance
3. Online Reputation, a keyword table with mentions, sentiment and average rating
4. Platform Overview, by platform with ratings, satisfaction, review counts and replied percentage. It now includes an "Obenan" platform row alongside Google and Tripadvisor
5. Rating Distribution Over Time
6. Reviews Rating Breakdown
7. Replies Rating Breakdown
8. Review Velocity (count, previous count, velocity, total)
9. Keywords Performance Cloud, which renders as bars
10. Latest Impressions, an AI-written summary with a last-updated time
11. AI Driven Action Plan, AI-written recommendations with a last-updated time

Emotion AI is also a report content type (section 6.11).

### 6.11 Reporting

- **Generate Report** (`/user/create-report`), unchanged from January: Content (Emotion AI, Reviews, Google Stats), Date Range presets plus Custom, Date Format (5 options), Type of file (PDF, XLSX or both), Preview (Print View or Digital View), Language (30, appendix A), Upload logo by drag and drop, Cancel and Continue. Choosing Emotion AI reveals extra configuration: locations and groups, a 14-section selector, a sentiment filter and an "Add reviews" option. **[Jan 2026 for the Emotion AI extras, Sep 2026 for the rest]**
- **Scheduled Reports** (`/user/generate-reports`): now includes a Report type column and a "View Reports Records" link marked NEW. Filters Frequency, Status and Report type. Report types seen: Emotion AI and Reviews. Frequencies seen: Every day, Every week, Every month. **[Sep 2026]**
- **Reports Records** (`/user/report-schedule-record`): delivery history across all schedules with Name, recipients, Email Subject, Sent At and Download, filtered by Time Range and Report Schedules. **[Sep 2026]**

### 6.12 Location Intelligence (`/user/location-intelligence`)

Unchanged: an AI chat page with a typed heading, three suggested prompts about brand sentiment by country, reviews mentioning a theme, and brand attributes, plus a message input. No location selector is shown, so it appears account-wide, but that was not validated because no prompt was sent, in January or September. **[Unverified]** A voice input control was recorded in January; in September no voice control was detectable by accessible label. **[Unverified]**

### 6.13 Admin

- **Users**: filters Role and Status, per-column search, sortable headers, rows per page 5, 10, 15, 20.
- **Roles**: 7 roles with ID, updated date and managed-by. The role list is in appendix E. One January rendering bug (an empty ID cell for company-admin) was not re-checked.
- **Locations**: an ID column and a row menu with Edit and Request delete. January's per-row "Switch to default" is gone, which leaves the profile banner pointing at a page that no longer offers that action.
- **Groups**: a group list expandable to its member locations; the exact account count is withheld.
- **Switch Account**: a list of accounts this user can open, with the current one flagged. The switch itself is a separate confirmation step. The exact count is withheld. **[Sep 2026 + Code]**

### 6.14 Agent-layer hand-offs

Neither surface has a navigation entry, and neither was triggered. **[Code]**

- **Connect Obenan AI MCP.** An external-client request can open a consent modal naming the requesting client. The copy describes temporary access and revocation. Handshake parameters, persistence behavior, and the security-sensitive implementation finding are withheld from this public repository and remain in the immutable private source for engineering review.
- **ObiGeo link notice.** Shown when an ObiGeo invitation is captured. It names the ObiGeo account asking to link, states that nothing has been shared yet, requires a company admin to confirm, and says the ObiGeo account holder must then confirm the pairing in ObiGeo. It handles cases where the request expired, changed or was already confirmed.
- **WhatsApp account alerts.** An opt-in flow exists in code (number, passcode, privacy statement, STOP to unsubscribe) and a WhatsApp contact widget variant exists alongside the current help widget. Neither was visible in this account. **[Code]**

## 7. Flow catalogue (read-only)

| Flow | Entry | Steps that are safe | Write-risk present |
| --- | --- | --- | --- |
| Switch location | Select Business on any location-scoped page | Open, search, choose | None. Note section 10 |
| Browse a section | Indexability, Discoverability, Reputation | Use the header anchors to scroll | Section edit controls |
| Read Google Stats | Discoverability > Google Stats > View All | Switch sub-views, change time range, read keyword tables | None |
| Read all reviews | Reviews View All from Discoverability or Reputation | Filter by rating, platform, status, location, time | Reply Now, Add rule, Add source |
| Review governance | Reviews hub tabs | Read rules, templates and sources | Rule create, pause, delete; template import and create; connect and disconnect |
| Task triage | Insights or Reputation to Tasks | Filter by status, rule, assignee | Add Task Rule |
| Post operations | Discoverability > Posts > View All | Filter, open See Logs drawer | Create, Edit, Resume, Delete |
| Campaign review | Cards to Campaigns | Read list, analytics and survey logs | Add new campaign, wizards |
| Report configuration | Generate Report | Open every dropdown, read options | Continue, Upload logo |
| Report delivery audit | Scheduled Reports > View Reports Records | Filter by time and schedule | Download |
| Emotion AI analysis | Direct URL | Set filters, toggle graph and table | Search runs queries |
| Bulk edit inspection | Indexability > Bulk Update | Open, read the 14 sections, Cancel | Apply to all, Generate with AI, Save |
| Account switch inspection | Profile menu > Switch Account | Read and filter the account list | Selecting an account |
| Admin inspection | Profile menu | Read users, roles, locations, groups; open modals and cancel | Save, Create, Delete, invites |

## 8. Component and pattern library

- **Section-anchor pages** replace tab bars on the three main sections.
- **Action-card carousels** open every main section: section tag, optional number badge, title, sentence, CTA, Previous and Next.
- **ObiFeed story cards** with a month timeline and a per-card Share menu.
- **Two location selectors**: the "Select Business" combobox with a Settings link, and chips with Edit and "+N more".
- **Competitor comparison widget**: this location against 3 competitors, with Refresh report and Change competitors.
- **Standard "Filter by" panel** on list pages: collapsible groups, Reset all, long lists truncated behind "Show all" or "Show more".
- **List header count**: "N ITEMS (SHOWING 1 - 10)", rows per page 5, 10, 15, 20, numbered pagination with an ellipsis.
- **Row menus** with Edit, See Logs, Resume, Delete, Request delete.
- **Hub tab rows** that are real routes.
- **Generated INSIGHTS sentences** under charts, plus data-freshness and partial-month notices.
- **Drawers** for detail views such as post logs.
- **Modals** for bulk edit, rules, and admin create flows, always with Cancel and Save.
- **Permission gating**: sections render a "Permission Denied. Access Restricted" panel rather than hiding.
- **Feature flags** (LaunchDarkly) gate parts of the UI.
- **Help widget**, bottom left, now dismissible.

## 9. Capability entry points

| Capability | Found | Where |
| --- | --- | --- |
| Auto reply rules | Yes | `/user/review/auto-reply`; hub tab; cards on three sections |
| Review reply templates | Yes | `/user/review/templates` |
| Connected review sources | Yes | `/user/review/sources`; Add review source on the hub |
| Surveys and NPS | Yes | Survey Campaign type; `/user/survey-campaign`; NPS filter in Campaign Analytics; Survey Logs; Private Reviews |
| Menu editor | Yes | Indexability > Menu; Bulk Update modal |
| Catalog editor | No | No catalog UI or text anywhere in the app |
| Special hours | Yes | Indexability > Business Listing > Special Hours of Operation |
| Google Post scheduling and list | Yes | `/user/posts` |
| Post delivery logs | Yes | Posts row menu > See Logs |
| Listing completeness | Yes | Insights KPI and card; Indexability attributes and missing-element cards |
| Directory presence | Yes | Indexability > Directory Presence; standalone `/user/channels` |
| Omnipulse scores | Yes | Insights score and card; competitor widgets; creation path via `/user/choose-competitors` |
| Scheduled reports | Yes | `/user/generate-reports` plus delivery history |
| Billing and invoices | No | No UI. Routes 404. Plan, invoice-preview and customer-portal logic exists in code for payment-enabled companies only |
| Q&A | No | Approved in Products, no navigation entry |
| AI Visibility, ObiGEO, MCP management | No | No menu entry. Only the two hand-off screens in section 6.14 |

## 10. Read-only protocol and write-risk ledger

### 10.1 The one exception: pages that write

Opening **Insights** or **Indexability** can make the dashboard write a calculated listing-completeness value without a user clicking a control. Exact endpoint, field, account value, and call count are withheld from this public repository. **[Sep 2026]**

Consequences: a read-only visit is not read-only, an audit or screenshot pass mutates data, and a user with read-only permissions still triggers a write. Recommend moving the calculation server-side or behind an explicit action.

### 10.2 Controls never clicked

| Area | Controls |
| --- | --- |
| Insights | Share on recap cards; Create Omnipulse Report |
| All three main sections | Refresh report; Change competitors |
| Indexability | Refresh data from Google; Edit on every section; Add Attributes, Connect directory, Add Services, Add Additional Categories, Connect Social Media, Add Menu; Add Section; directory status control |
| Bulk Update modal | Apply to all; Generate with AI; Save; Create Description |
| Discoverability | Set up auto reply; Request Reviews; Create Campaign; Create Post |
| Reputation | Start Review Campaign; View campaign; Monitor Campaign |
| Reviews hub | Reply Now; Add auto reply rule; Add review source; row selection |
| Auto reply rules | Set up auto reply; Pause; Resume; Edit; Delete |
| Templates | Import default templates; Create Template |
| Review Sources | Connect; Disconnect; Add Source |
| Tasks | Add Task Rule; Add task rule |
| Posts | Create Post; Edit; Resume; Delete; bulk selection |
| Campaigns | Add new campaign; type cards; wizard buttons; Create Survey |
| Google Stats, Emotion AI | Chip remove; Search on Emotion AI |
| Location Intelligence | Prompts; message input; send |
| Generate Report | Continue; Upload logo |
| Reports | Row menus; Download |
| Locations, Users, Roles, Groups | Add Location; Edit; Request delete; Add User; Create a role; Add group; row menus |
| Switch Account | Any account row |
| Publish Changes, Dashboard (Private) | Publish; Logout |
| Profile | Edit; Reset Password; 2FA; photo; Sign out |
| Agent hand-offs | Continue to Obenan AI MCP; Confirm ObiGeo link |

### 10.3 Safe actions used

Navigation links and anchors, the Select Business Settings link, the avatar menu, row menus opened and closed, filter accordions, See Logs, Bulk Update opened and cancelled, a Google Stats time preset, and direct URL entry including expected 404s.

## 11. UX audit and V3 recommendations

1. **Page views write data.** Section 10.1. Fix first: it undermines any read-only role, audit or automated check.
2. **Most capability areas have no navigation entry.** The Reviews hub, auto reply rules, templates, sources, posts, campaigns, surveys, private reviews, reports records, tasks, Emotion AI, directory presence and switch account are reachable only from cards, View All links or typed URLs. A user who does not click the right card never learns they exist.
3. **Scope is invisible.** Account-wide screens sit beside location-scoped ones with no cue. Reputation and Tasks show materially different totals because their scopes differ, but neither screen explains that distinction.
4. **Two location-selection models** coexist, and the combobox's Settings link goes to the Locations admin table rather than to settings for that location.
5. **Deep links stay weak.** No location, filter or section in the URL, so nothing can be shared or bookmarked precisely. This was January's top structural finding and is unchanged.
6. **Dead ends and stubs.** Profile "Change default location" leads to a page without that action; `/user/create-post`, `/user/add-source` and `/user/traffic` are in the route map but 404; `/user/keyword-cloud` and `/user/settings` are empty; `/dashboard` shows a title and a Logout button; `/user/publish-changes` shows placeholder numbers and an untranslated key.
7. **Duplication.** Review tables still appear in Discoverability while Reputation links out; Directory Presence exists twice; Omnipulse and competitor scores appear in four places.
8. **Naming drift.** "Discoverability Campaigns" against "Campaigns"; "Obi Intelligence" against "O.I. Rule"; "Reputation Agent" card copy against "Auto reply rules"; "Keywords Performance Cloud" rendered as bars; "Indexibility listing" misspelled in Products; the location combobox labelled "Select a Locationzz" for screen readers.
9. **Agent hand-offs are invisible to admins.** Nothing lists connected MCP clients or ObiGeo pairings or lets an admin revoke them, although the consent copy promises revocation. A security-sensitive handshake implementation finding remains in the private source for engineering review.
10. **Admin and product layouts still diverge**: no breadcrumbs, no shared header, no location context on admin pages. Carried over from January and still true.
11. **Data hygiene.** January found country-name variants (Netherlands, Netherland, Nederland) in filters. Group naming is now more systematic, but country taxonomy was not re-checked.

## 12. Known gaps and open questions

| Gap | Status |
| --- | --- |
| Reply composer internals | Location known, never opened. Reply Now is a write control |
| Post composer internals | Same. Opens through navigation state from cards |
| Add auto reply rule modal | Field list from UI text; the modal did not open from its label in a background tab |
| Add User, Create Role, Add Group modals | January field inventories stand; not re-opened in September |
| Add Location OAuth screen | January record stands; not re-run |
| Location chip picker and "+N more" | Could not verify; pop-ups do not render in a background tab |
| Select Business option list | Same |
| Location Intelligence scope and voice input | Never validated; no prompt has ever been sent |
| Billing | No UI. Code suggests it appears for payment-enabled companies |
| Survey Logs content | Route loads, no rows rendered for this account |
| Country taxonomy cleanliness | Not re-checked since January |
| Role ID rendering bug | Seen once in January, not re-checked |

## 13. Change log, 22 January 2026 to 19 September 2026

1. Review management arrived in the UI: the Reviews hub plus auto reply rules, templates and sources.
2. Google Stats was rebuilt: four sub-views, generated insights, keyword tables, conversions split, new time controls, chip selector.
3. Indexability, Discoverability and Reputation became single scrolling pages with section anchors.
4. Insights gained the monthly recap carousel above the existing cards.
5. Campaigns, surveys, posts and their analytics and logs became reachable pages.
6. Indexability became editable in place and gained Local Pages, Refresh data from Google and the Bulk Update modal.
7. Reporting gained a report-type column and a full delivery history.
8. Two agent hand-off screens appeared in code: MCP consent and ObiGeo linking. No management UI for either.
9. Locations gained an ID column and Request delete, and lost "Switch to default".
10. Tasks gained an account-wide view and a real auto-task-rules route.
11. Several account-scale counts changed between January and September while the location total remained stable; exact customer-account counts are withheld.
12. The listing-completeness write on page view was identified (section 10.1). It may well have been present in January and gone unnoticed.

## Appendices

### Appendix A. Report languages (30)

Bulgarian, Chinese (simplified), Czech, Danish, Dutch, English, Estonian, Finnish, French, German, Greek, Hungarian, Indonesian, Italian, Japanese, Korean, Latvian, Lithuanian, Norwegian, Polish, Portuguese (PT), Portuguese (BR), Romanian, Russian, Slovak, Slovenian, Spanish, Swedish, Turkish, Ukrainian.

### Appendix B. Route truth table

**Loads**

`/`, `/user/insights`, `/user/indexability`, `/user/discoverability`, `/user/discoverability/googleStats`, `/user/reputation`, `/user/location-intelligence`, `/user/create-report`, `/user/generate-reports`, `/user/report-schedule-record`, `/user/profile`, `/user/products`, `/users`, `/user/roles`, `/user/locations`, `/user/groups`, `/user/tasks`, `/user/tasks/auto-task`, `/user/emotionAI` and casing variants, `/review`, `/user/review/auto-reply`, `/user/review/templates`, `/user/review/sources`, `/user/posts`, `/user/campaigns`, `/user/campaigns-analytics`, `/user/campaigns-survey-logs`, `/user/campaign-type`, `/user/create-campaigns`, `/user/marketing-campaign`, `/user/survey-campaign`, `/user/private-review`, `/user/switch-accounts`, `/user/channels`, `/user/publish-changes`, `/user/keyword-cloud` (empty), `/user/settings` (empty), `/dashboard`.

**404**

`/user/indexability/business-listing`, `/categories`, `/menu`, `/images`, `/directory-presence`; `/user/discoverability/reviews`, `/keywords`, `/campaigns`, `/posts`; `/user/reputation/reviews`, `/user/reputation/tasks`; `/user/emotion-ai`; `/user/subscription`, `/user/billing`, `/user/invoices`, `/user/invoice-history`, `/user/plan`; `/user/create-post`; `/user/tasks/create`; `/user/survey-response`; `/user/add-source`; `/user/traffic`; `/user/auto-reply`; `/user/templates`; `/user/auto-task`; `/user-roles`; and invented paths such as `/user/ai-visibility`, `/user/mcp`, `/user/obigeo`, `/user/integrations`.

**Other outcomes**

`/dashboard/analysis` and `/analysis` show Permission Denied. `/user/choose-competitors` redirects to `/` when opened without navigation state.

**Deliberately not loaded**

Authentication, account-connection, token-expiry, and record-specific routes were deliberately not loaded. The exact security-sensitive route list remains in the immutable private source.

### Appendix C. Client-side persistence categories

Client-side persistence covers authentication, language, selected location,
location groups, report state, active filters, connection state, feature flags,
referrer attribution, and agent hand-off state. Exact keys and security-sensitive
parameter persistence remain in the immutable private source.

### Appendix D. Permission model

Nine feature categories: Post Management, Indexability Listing, Emotions AI, Review Management, Tasks, User Management, Account Management, Campaigns, Google Stats. Each takes Create, Read, Edit and Delete, with a Select all shortcut. The UI is a per-feature dropdown list in the Create Role modal. Screens check these categories at render time and show a Permission Denied panel when a category is not granted. **[Jan 2026 for the matrix, Sep 2026 for the enforcement behaviour]**

### Appendix E. Roles in this account (7)

presentation-user, ux-designer, restaurant-manager, district-manager, country-manager, account-manager, company-admin. Each has a numeric ID, an updated date and a managing user. **[Jan 2026, counts confirmed Sep 2026]**

### Appendix F. Add Location and Google Business Profile

Add Location redirects to the Google account chooser at `accounts.google.com`, requesting Google Business Profile management and email scopes, with a redirect back to `/user/google_accounts`. The OAuth client id is deliberately not recorded here. The flow was never completed. **[Jan 2026]**

### Appendix G. Modal field inventories

**Add User** (January, not re-opened): email multi-entry with "press enter or comma to add"; "or Upload file" for bulk import; Location access (All locations or specific); Date format (6 options); Time format (12 or 24 hour); Role dropdown listing the 7 roles with IDs; "Create new Role" link; **"Send invite emails" checkbox, checked by default**; Save and Cancel.

**Create Role** (January, not re-opened): role name, then the permission matrix in appendix D; Save and Cancel.

**Add Group** (January, not re-opened): group name and a multi-select location picker; Create and Cancel.

**Bulk update all locations** (September, opened and cancelled): 14 section tabs, namely Description with Short, Long and Keywords, General Information, Contact Information, Hours of Operation, Service Area, Social Accounts, Categories, Images, Services and Brands, Attributes, Local Pages, Directory Presence. Header states the number of locations affected. Per field: a text area with a character counter, Create Description, Apply to all, and Generate with AI. A Selected Locations list shows each location with its address and its own field. Cancel and Save.

**Add auto reply rule** (September, from UI text): Title; Locations or Groups with a "select by" switch; Rating; time period for auto responses (enable for future reviews, past reviews); Review text (Present, Not Present); Respond using (With Obi Intelligence, or Manual reply using templates, with a "you have no templates yet" state and a Create template link); prompt type (Default prompt or Customize prompt); a Response View with Select Review and Generate Test Response; Add another rule; Save and Cancel. Rules can later be paused and resumed.

### Appendix H. API areas observed

Read calls covered company and location context, listing profiles, groups,
insights, reviews, tasks, discoverability, Google statistics, Emotion AI,
campaigns, feed data, users, and onboarding. Some analytics reads use POST.
The automatic page-view write is recorded in section 10.1. Exact endpoints and
identifier patterns remain in the immutable private source. **[Sep 2026]**

### Appendix I. Conflicts with `FEATURES_OVERVIEW.md`

Checked against that file's working-tree version on 19 September 2026.

| That file says | The UI shows |
| --- | --- |
| No customer-configurable auto-reply rule UI | `/user/review/auto-reply` with rules, filters, pause and resume, custom prompts and a test-response preview |
| No template library UI | `/user/review/templates` with import and create |
| Reputation reviews are the same data in a reputation lens | Reputation links out. The full experience is the account-wide Reviews hub |
| Google Stats has views, actions and searches breakdown | Four sub-views including Conversions, plus keyword tables and generated insights |
| Locations has a "Switch to default" primitive | Removed. Row menu is Edit and Request delete |
| Auto task rules is a tab | It is its own route, and tasks carry an Obi Intelligence rule column |
| Scheduled reports with row edit and delete | Plus a report-type column and a delivery-history view |
| Insights has Omnipulse, cards and KPIs | Plus the monthly recap carousel |
| Indexability listing editor | Plus Local Pages, Refresh data from Google, and a 14-section bulk editor with Generate with AI |
| Surveys and review requests are an operating capability | They are also customer-facing UI: three campaign types, NPS analytics, survey logs, private reviews |
| Posts: create, edit, publish | Plus a recurring-post manager and per-post delivery logs |
| Not mentioned | Review Sources connect and disconnect |
| MCP access is onboarding-led | Plus an in-dashboard consent screen opened by a client's authorization request. Still no management page |
| Not mentioned | The ObiGeo company-link confirmation |
| Emotion AI platform list | Includes an "Obenan" platform row |
| Location Intelligence supports voice input | Not confirmed in September |
| Earlier account counts | Counts changed by September; exact customer-account totals are withheld |

### Appendix J. Sources and supersession

| Source | Date | Role now |
| --- | --- | --- |
| `UI_UX_MAPPING_V2.md`, including the v1.1 patch set | 22 January 2026 | Historical baseline |
| January reconciliation report | January 2026 | Settled the Emotion AI routing and billing questions. Folded in here |
| January working notes | January 2026 | Earlier agent evidence. History only |
| `UI_UX_MAPPING_V2_REMAP_2026-09.md` | 19 September 2026 | September re-verification source |
| This document | 20 September 2026 | Current state. Start here |

When this document and an older one disagree, this one wins for anything marked [Sep 2026]. For anything marked [Jan 2026], check before relying on it in front of a customer.
