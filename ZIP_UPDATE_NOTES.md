ZIP update: Recommended hub + Best Of blocks + Shopping List thank-you page
Generated: 2026-01-23T23:14:05.743193 UTC

Changes:
- Rebuilt /recommended as a category-based picks hub (Air, Water, Cleaning, Sleep) with Best overall / Budget / Sensitive cards
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
