# Wild & Well commercial-validation scorecard

Baseline established: 4 September 2026

Use a seven-day operating view and a 28-day decision view. Do not describe publishing activity as traction unless it produces qualified visits, subscribers, commercial clicks, conversions or revenue.

## Baseline

| Metric | Baseline | Evidence / limitation |
| --- | ---: | --- |
| Google Search impressions | Not available | Search Console is not signed in within the current operating session. |
| Organic clicks | Not available | Search Console is not signed in within the current operating session. |
| Average position / priority queries | Not available | Public search results confirm crawling and visibility, but do not replace Search Console data. |
| Website users / sessions | Not available | GA4 is present in production with measurement ID `G-0G3ER4B1RE` and is consent-gated. Reporting access is not available in this session. |
| Social referral traffic | Not available | Requires GA4 reporting access. |
| Returning visitors | Not available | Requires GA4 reporting access. |
| Email subscribers | Not available | Beehiiv reporting access is not available in this session. |
| Affiliate outbound clicks | Not available | Site-side `affiliate_click` tracking exists; GA4/Awin reporting access is required for the count. |
| Affiliate conversions / revenue | Not available | Awin reporting access is not available in this session. |
| Total Wild & Well revenue | Not available | No authenticated commercial reporting source is available. |
| Recurring operating costs | Not available | No verified cost ledger is available in the repository or current session. |

## Verified production and acquisition signals

- Production responds at `https://www.wild-and-well.store/` and the primary desktop and mobile journeys render.
- The production build generates 242 routes; repository validation recognises 235 static routes and 104 content files.
- Public search results show recent and older Wild & Well pages being crawled and surfaced. The homepage snippet is behind the current production copy and should be monitored for convergence.
- GA4 bootstrap is present in production and is consent-gated.
- The codebase contains 126 unique Awin destination URLs; every one includes the expected advertiser ID, affiliate ID, click reference and encoded merchant destination.
- The water-filtration shortlist exposes 20 affiliate routes and is the clearest first commercial test destination.
- Newsletter forms post to the first-party `/api/subscribe` route. A genuine end-to-end receipt still needs Beehiiv reporting or an owner-controlled test address.

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
