# Phase 2.2 rollout (implemented)

## What shipped

### 1) Best‑for badges (Top 10 money pages)
Adds a quick “Best for…” chip row near the top of each of the 10 priority shortlists.

### 2) Trust block (Top 10 money pages)
A reusable trust section explaining how shortlists are made, with links to:
- /how-we-test
- /editorial-policy
- /affiliate-disclosure

### 3) “Pick your route” cards (Top 10 money pages)
Three next-step cards (topic hub, guide, and a related shortlist) to reduce pogo-sticking and improve internal navigation.

### 4) Expandable FAQ + automatic FAQ schema (Top 10 money pages)
Replaced hand-written FAQ schema with a standard FAQSection component that:
- renders expandable FAQs
- injects valid FAQPage JSON-LD automatically

### 5) Centralised “freshness” controls
Created `lib/phase22.js` so the update date + labels can be refreshed in one place.

### 6) Consent-based Microsoft Clarity integration
Created:
- `components/Clarity.jsx`
- `lib/clarity-client.js`
Clarity only loads after analytics consent (same as GA).

### 7) Scroll-depth analytics
Created `components/ScrollDepthTracker.jsx` and included it in the root layout to send scroll_depth events.

### 8) Improved outbound click tracking
Upgraded `OutboundAffiliateTracker` to also track external outbound clicks (Amazon/brand sites), not just Awin.

### 9) Added email_signup event
`SignupFormTracker` now also emits `email_signup` for funnel reporting.

## Files added
- components/BestForBadges.jsx
- components/FAQSection.jsx
- components/MoneyPageTrustBlock.jsx
- components/MoneyPageRoutes.jsx
- components/Clarity.jsx
- components/ScrollDepthTracker.jsx
- lib/clarity-client.js
- lib/phase22.js
- data/top10Meta.js

## Files updated
- components/ConsentBanner.jsx
- components/CookiePreferences.jsx
- components/OutboundAffiliateTracker.jsx
- components/SignupFormTracker.jsx
- app/layout.jsx
- Top 10 shortlist pages under /app/*/page.jsx
