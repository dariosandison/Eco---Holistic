# Wild & Well — Phase 3 Handoff Baseline

**Established:** 28 August 2026

## Site-side status

Phase 3 is now in distribution/measurement mode rather than rebuild mode.

- Version 1 architecture remains frozen.
- Seven discovery-to-commercial journeys are defined.
- Sitemap and robots infrastructure exists.
- Affiliate click measurement exists for Awin and other external links.
- Awin events include page path, merchant, clickref and affiliate context where present.
- Newsletter capture routes through `/api/subscribe`; the sticky bar records signup/dismiss events and identifies its source as `newsletter-bar`.
- Seven-email copy-ready welcome sequence is stored in `PHASE_3_EMAIL_COPY_READY.md`.
- 30-day social copy is stored in `PHASE_2_LAUNCH_PACK.md`.
- Reusable social production system is stored in `PHASE_3_SOCIAL_TEMPLATE_PACK.md`.
- Exact owner account actions are stored in `PHASE_3_OWNER_ACTION_CHECKLIST.md`.
- Social route QA/correction sheet is stored in `PHASE_3_SOCIAL_ROUTE_QA.md`.

## Seven commercial destinations

1. Water — `/water-filtration-shortlist-uk`
2. Air — `/air-quality-shortlist-uk`
3. Sleep — `/sleep-recovery-shortlist-uk`
4. Nutrition — `/nutrition/food-first-shortlist`
5. Movement — `/movement/movement-shortlist`
6. Healthy Home — `/healthy-home/low-tox-shortlist`
7. Resilience — `/blog/72-hour-household-emergency-kit-uk`

## What cannot be truthfully verified from repository access alone

The following require external account access or a real owner-side test and must not be marked complete until observed:

- Google Search Console property ownership, sitemap submission and indexing requests.
- Production GA measurement ID/environment-variable presence and incoming GA reports.
- Beehiiv production credentials, successful subscriber receipt and automation availability.
- Awin dashboard clicks, transactions and commission.
- Social-account publication/scheduling and platform analytics.

The repository contains the code and copy needed for these pathways, but configuration/account state is an external fact.

## First 30-day operating rule

Do not redesign the site or mass-produce new SEO articles during the measurement window. Publish the prepared campaign, submit/inspect priority URLs in Search Console, verify newsletter capture, and record weekly data.

Optimisation priority after data exists:

1. Pages gaining impressions but weak CTR → title/description/search-intent improvement.
2. Pages gaining visits but weak shortlist progression → internal CTA/funnel improvement.
3. Shortlists gaining visits but weak affiliate clicks → decision clarity/product coverage review.
4. Affiliate clicks but weak Awin conversion → merchant/product fit review.
5. Social posts earning outbound clicks → repurpose the winning topic/format.
6. Email signup sources converting → expand the strongest acquisition route.

## Measurement fields

Weekly baseline:
- GSC impressions, clicks, CTR, average position, top queries and landing pages.
- GA users/sessions, organic traffic, social referrals, commercial-destination visits.
- `affiliate_click` events by `page_path`, `merchant`, `clickref`, `affiliate_context`.
- Awin clicks, transactions, conversion rate and commission.
- Beehiiv new subscribers.
- Pinterest outbound clicks; Instagram/Facebook link activity; short-video profile/site actions.

## Phase boundary

The next meaningful development phase begins only when early traffic/conversion data identifies a real bottleneck or opportunity. Until then, the highest-value work is distribution, indexing verification and measurement — not another rebuild.
