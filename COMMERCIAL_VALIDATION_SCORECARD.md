# Wild & Well commercial-validation scorecard

Baseline established: 4 September 2026

Use a seven-day operating view and a 28-day decision view. Do not describe publishing activity as traction unless it produces qualified visits, subscribers, commercial clicks, conversions or revenue.

## Baseline

No authenticated reporting account was available in the operating session. Missing values are recorded as unavailable rather than estimated.

| Metric | Value | Period | Source |
| --- | ---: | --- | --- |
| Google Search impressions | — (NO ACCESS) | Not available | Google Search Console reporting access unavailable |
| Google Search clicks | — (NO ACCESS) | Not available | Google Search Console reporting access unavailable |
| Search CTR | — (NO ACCESS) | Not available | Requires Search Console impressions and clicks |
| Average position | — (NO ACCESS) | Not available | Google Search Console reporting access unavailable |
| Organic users / sessions | — (NO ACCESS) | Not available | GA4 reporting access unavailable |
| Social referral traffic | — (NO ACCESS) | Not available | GA4 reporting access unavailable |
| Returning visitors | — (NO ACCESS) | Not available | GA4 reporting access unavailable |
| Email subscribers | — (NO ACCESS) | Not available | Beehiiv reporting access unavailable |
| Email signup rate | — (NO ACCESS) | Not available | Requires GA4 and Beehiiv reporting |
| Affiliate outbound clicks | — (NO ACCESS) | Not available | GA4 reporting access unavailable |
| AWIN clicks | — (NO ACCESS) | Not available | AWIN reporting access unavailable |
| Affiliate conversions | — (NO ACCESS) | Not available | AWIN reporting access unavailable |
| Affiliate revenue | — (NO ACCESS) | Not available | AWIN reporting access unavailable |
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

## System status at baseline

| System | Status | Verification |
| --- | --- | --- |
| Production repository | WORKING | Read/write access; production branch updated through GitHub. |
| Deployment | WORKING | A pushed production change was observed live on the public site. Hosting-dashboard access was not available. |
| Analytics collection | PARTIAL | Consent-gated GA4 bootstrap and site event calls are present; reporting and live-event access are unavailable. |
| Search Console | NO ACCESS | No authenticated reporting connection was available. |
| Email capture | PARTIAL | Forms, server-side provider integration, success redirect and signup events are implemented; a real subscriber was not created without an owner-controlled inbox. |
| Email delivery | NO ACCESS | Beehiiv reporting and a controlled receiving inbox were unavailable. |
| Affiliate outbound tracking | WORKING | Representative AWIN link resolved to the intended Doulton product with affiliate parameters intact; site emits `affiliate_click` and `outbound_click`. |
| AWIN reporting | NO ACCESS | No authenticated reporting connection was available. |
| Revenue attribution | NO ACCESS | GA4/AWIN/revenue reporting unavailable. |

## Evidence-based prioritisation

- **PUSH:** none yet. No page has authenticated demand plus commercial-result evidence in this session.
- **FIX:** the ownership-cost education mapping and the residual duplicate comparison/FAQ on the EVOO shortlist were confirmed technical defects and repaired. Do not expand this bucket without Search Console or analytics evidence.
- **LEAVE:** all other existing pages and funnels until reporting identifies demand, decline, or a conversion weakness.

## Strongest currently testable funnel

`hard-water queries/topic → /blog/hard-water-uk-myths-and-comfort → /best-shower-filters-uk-hard-water → “Check retailer details” → Doulton Shower Head with Filter via AWIN`

This is the strongest **structurally verified candidate**, not a performance winner: the internal path is live, the shortlist has a clearly disclosed partner CTA, and the representative AWIN redirect reached the intended product while preserving affiliate attribution. Current traffic, commercial clicks and revenue are unavailable, so no evidence-based commercial winner can yet be declared.

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
