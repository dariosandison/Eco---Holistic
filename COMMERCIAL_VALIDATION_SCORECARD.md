# Wild & Well commercial-validation scorecard

Baseline established: 4 September 2026

Use a seven-day operating view and a 28-day decision view. Do not describe publishing activity as traction unless it produces qualified visits, subscribers, commercial clicks, conversions or revenue.

## Baseline

No authenticated reporting account was available in the operating session. Missing values are recorded as unavailable rather than estimated.

| Metric | Value | Period | Source |
| --- | ---: | --- | --- |
| Google Search impressions | 88 | 3 Jun–2 Sep 2026 | Search Console performance report, Web search |
| Google Search clicks | 1 | 3 Jun–2 Sep 2026 | Search Console performance report, Web search |
| Search CTR | 1.1% | 3 Jun–2 Sep 2026 | Search Console performance report, Web search |
| Average position | 36.5 | 3 Jun–2 Sep 2026 | Search Console performance report, Web search |
| Organic users / sessions | 5 active users / 8 sessions | 28 Aug–3 Sep 2026 | GA4 Wild & Well property, Last 7 days |
| Social referral traffic | 0 sessions (Organic Social) | 28 Aug–3 Sep 2026 | GA4 Wild & Well property, Last 7 days |
| Returning visitors | 2 active users (5 active; 3 new) | 28 Aug–3 Sep 2026 | GA4 Wild & Well property, Last 7 days |
| Email subscribers | 3 active subscribers | Last 4 weeks (dashboard view on 4 Sep 2026) | Beehiiv Wild & Well dashboard |
| Email signup rate | — (NO ACCESS) | Not available | Requires GA4 and Beehiiv reporting |
| Affiliate outbound clicks | Not visible in top event table | 28 Aug–3 Sep 2026 | GA4 Wild & Well property; requires event-level filter/export |
| AWIN clicks | 1 | 1–3 Sep 2026 | AWIN publisher dashboard, September overview |
| Affiliate conversions | 0 transactions | 1–3 Sep 2026 | AWIN publisher dashboard, September overview |
| Affiliate revenue | GBP 0.00 commission | 1–3 Sep 2026 | AWIN publisher dashboard, September overview |
| Affiliate click-through rate | — (NO ACCESS) | Not available | Requires measured commercial-page sessions and outbound clicks |
| Affiliate conversion rate | — (NO ACCESS) | Not available | Requires AWIN clicks and conversions |
| Other Wild & Well revenue | — (NO ACCESS) | Not available | No authenticated revenue source available |
| Revenue per 1,000 qualified visitors | — (NO ACCESS) | Not available | Requires traffic and revenue reporting |
| Recurring operating costs | — (NO ACCESS) | Not available | No verified cost ledger available |
| Revenue minus recurring costs | — (NO ACCESS) | Not available | Requires revenue and cost records |

## Verified production and acquisition signals

- Production responds at `https://www.wild-and-well.store/` and the primary desktop and mobile journeys render.
- The production build generates 242 routes; repository validation recognises 235 static routes and 104 content files.
- Public search results show recent and older Wild & Well pages being crawled and surfaced. The homepage snippet is behind the current production copy and should be monitored for convergence.
- GA4 bootstrap is present in production and is consent-gated.
- The codebase contains 126 unique Awin destination URLs; every one includes the expected advertiser ID, affiliate ID, click reference and encoded merchant destination.
- The water-filtration shortlist exposes 20 affiliate routes and is the clearest first commercial test destination.
- Newsletter forms post to the first-party `/api/subscribe` route. A genuine end-to-end receipt still needs Beehiiv reporting or an owner-controlled test address.
- Search Console performance is now available: 88 impressions, 1 click, 1.1% CTR and average position 36.5 for 3 June–2 September 2026. Top existing page opportunities by impressions include `/topics/fragrance-free` (14), `/blog/72-hour-household-emergency-kit-uk` (10), `/blog/hard-water-kettle-limescale-uk` (8), `/nutrition` (6) and `/water-filtration-shortlist-uk` (6), each with 0 clicks in the report.

## System status at baseline

| System | Status | Verification |
| --- | --- | --- |
| Production repository | WORKING | Read/write access; production branch updated through GitHub. |
| Deployment | WORKING | A pushed production change was observed live on the public site. Hosting-dashboard access was not available. |
| Analytics collection | PARTIAL | Consent-gated GA4 bootstrap and site event calls are present; reporting and live-event access are unavailable. |
| Search Console | PARTIAL | `wild-and-well.store` was linked to the GA4 property on 4 Sep 2026; reports are awaiting propagation. |
| Email capture | PARTIAL | Forms, server-side provider integration, success redirect and signup events are implemented; a real subscriber was not created without an owner-controlled inbox. |
| Email delivery | PARTIAL | Beehiiv shows 3 active subscribers; delivery/open behaviour is 0% and no controlled inbox test was performed. |
| Affiliate outbound tracking | WORKING | Representative AWIN link resolved to the intended Doulton product with affiliate parameters intact; site emits `affiliate_click` and `outbound_click`. |
| AWIN reporting | WORKING | Publisher dashboard accessible; 1 September click, 0 transactions and GBP 0.00 commission visible. |
| Revenue attribution | PARTIAL | AWIN commission is visible; GA4/AWIN joined attribution and total revenue remain incomplete. |

## Evidence-based prioritisation

- **PUSH:** `/water-filtration-shortlist-uk` and the hard-water content cluster are the best measured commercial candidates: they have existing impressions and a maintained affiliate path, though clicks and revenue remain low.
- **FIX:** high-impression/zero-click pages `/topics/fragrance-free`, `/blog/72-hour-household-emergency-kit-uk`, `/blog/hard-water-kettle-limescale-uk`, `/nutrition` and `/water-filtration-shortlist-uk` merit evidence-led title/CTR and internal-path review. The ownership-cost education mapping and residual EVOO duplication are already repaired.
- **LEAVE:** all other existing pages and funnels until reporting identifies demand, decline, or a conversion weakness.

## Strongest currently testable funnel

`hard-water queries/topic → /blog/hard-water-uk-myths-and-comfort → /best-shower-filters-uk-hard-water → “Check retailer details” → Doulton Shower Head with Filter via AWIN`

This is the strongest **measured candidate** so far: the water shortlist has 6 Search Console impressions and a maintained affiliate path; the hard-water cluster also has visible impressions. Current click volume and revenue remain too small to call it a proven winner.

## Weekly scorecard

| Week ending | GSC impressions | Organic clicks | CTR | Avg. position | Users | Social visits | Returning users | New subscribers | Affiliate clicks | Transactions | Affiliate revenue | Other revenue | Operating cost | Notes / next action |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 6 Sep 2026 | — | — | — | — | — | — | — | — | — | — | — | — | — | Awaiting authenticated reporting baselines. |

## Decision rules

1. Improve pages already earning impressions or referral visits before commissioning another article.
2. If impressions rise but CTR stays weak, test the title and description against actual query intent.
3. If a discovery page earns visits but few shortlist visits, improve its internal CTA and decision path.
4. If a shortlist earns visits but few affiliate clicks, improve product fit, trade-off clarity and CTA wording.
5. If affiliate clicks occur without transactions, review merchant fit, availability, price competitiveness and destination quality.
6. Repurpose social topics that produce site visits or subscribers; stop formats that repeatedly produce reach without downstream action.
7. Judge viability by revenue and repeatable leading indicators, not by pages or posts produced.
