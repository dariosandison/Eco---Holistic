ZIP update: Recommended page + Best Of blocks + Shopping List thank-you page
Generated: 2026-01-23T23:14:05.743193 UTC

Changes:
- Rebuilt /recommended as a category-based picks page (Air, Water, Cleaning, Sleep) with Best overall / Budget / Sensitive cards
- Added /shopping-list/thanks page (post-signup next steps)
- Added Best Of block to homepage and /guides index
- Added link to thank-you page from /shopping-list
- Added /shopping-list/thanks to sitemap


## Audit fixes
- Canonicalised affiliate disclosure to /affiliate-disclosure and redirected /disclosure
- Updated footer disclosure link to /affiliate-disclosure
- Added missing Best Of links on /guides (shower filters + fragrance-free laundry)
- Differentiated dish soap posts + added cross-links to prevent cannibalisation
- Upgraded /deals empty state into lead-capture + categories
- Added internal link checker script + GitHub Action (npm run check:links)


## Post-deploy fixes
- Added missing analytics export: trackAffiliateClick (fixes warnings in mdx affiliate components)
- Removed duplicate blog post content: bamboo-toilet-paper-facts-duplicate.mdx
- Added redirect for /blog/bamboo-toilet-paper-facts-duplicate -> /blog/bamboo-toilet-paper-facts


## Recommended conversion page
- Rebuilt /recommended into a decision-led conversion page (Start here + Low-tox + Sleep/Stress + Nutrition)
- Added on-page trust module (How we choose) linking to /how-we-test and /affiliate-disclosure
- Added anchors for internal routing (#start-here, #starter)


## Build log cleanup
- Filtered out any *-duplicate.mdx from blog/guides listing to prevent accidental duplicate routes
- Added redirect in /blog/[slug] for any '-duplicate' slug to canonical slug
- Added tsconfig.json + devDependencies typescript/@types/node to avoid Vercel auto-generating tsconfig
- Added optionalDependencies for @next/swc platform packages (best-effort to reduce SWC lockfile warnings)


## Phase B: Sleep pillar
- Added cornerstone guide: /guides/sleep-naturally-without-overwhelm
- Added 6 supporting sleep guides (wind-down, caffeine timing, temperature/bedding, morning light, magnesium basics, sleep myths)
- Linked cornerstone from /recommended and /holistic-health, plus sleep buyer-intent pages

- Fixed tsconfig path alias so @/* imports resolve on Vercel builds


## Phase C: Digital product pre-launch
- Added /products index and /products/holistic-home-reset landing page (Product schema + prelaunch CTA)
- Added Products link in footer and a promo block on /recommended
- Added products routes to sitemap


## Trusted Picks page refresh
- Rewrote /recommended as a calm decision map (less salesy): clearer Guides vs Best-of separation, anchors, and short route cards.
- Ensured /products/holistic-home-reset links to /recommended#start-here label matches.
