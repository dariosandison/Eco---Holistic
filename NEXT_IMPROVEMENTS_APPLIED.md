Next improvements applied (2026-01-23T22:49:41.390005 UTC)

Priority 1: Email capture / lead magnet
- Added /shopping-list landing page (uses NEXT_PUBLIC_NEWSLETTER_ACTION)
- Updated homepage CTA to point to /shopping-list
- Added "Free List" link to header + newsletter bar

Priority 2: /recommended conversion upgrades
- Added "How to use this page" box
- Added best-for microcopy labels
- Added #starter section and link to shopping list

Priority 3: Guide monetisation upgrades
- Added mid-article CTA under quick comparison for top 5 guides

Priority 4: Buyer-intent pages
- Added /best-low-tox-products-for-beginners
- Added /best-natural-sleep-support
- Added /best-water-filters-uk

Priority 5: Trust
- Added independent editorial note to footer

SEO
- Added new routes to sitemap.js

## Audit fixes – February 2, 2026

- Added comprehensive global metadata (OpenGraph/Twitter) and set site language to en-GB.
- Added a PWA manifest route (app/manifest.js) and referenced it from metadata.
- Improved cookie consent UX: banner no longer reloads the page, sits above the sticky newsletter bar, and loads GA immediately on accept.
- Added `btn-muted` and focus-visible styling for better accessibility.
- Updated email inputs (sticky bar, footer, shopping list) with aria-label and autocomplete hints.
- Hardened internal link checker and fixed broken internal links found during the audit.
- Added query-param based tag filtering to Favourites so pages can deep-link to Water/Air, etc.



## Upgrade – February 3, 2026 (FIX4)

Education-first depth (site-wide for Wellness Insights)
- Added an “Understand first” deep-dive block that automatically expands on shorter posts (what’s going on, why it matters, common causes, no-spend steps, and a calm buying checklist).
- Added Related Reading at the end of blog posts to improve session depth and internal linking (informative, not salesy).
- Hardened blog route: missing slugs return a proper 404 and legacy slugs redirect cleanly.

Visual trust upgrade (without needing real photos yet)
- Replaced repetitive “same logo” cards with deterministic, unique, branded SVG thumbnails per post when an image is missing/generic.
- Removed broken placeholder image usage (no more /placeholder.png 404s).

SEO / reliability
- Sitemap now runs in Node.js runtime and includes blog post URLs + author pages, plus RSS endpoints.
- RSS now runs in Node.js runtime; added /rss.xml redirect for compatibility.
- Added a proper app/not-found.jsx to reduce bounce from old/incorrect links.

