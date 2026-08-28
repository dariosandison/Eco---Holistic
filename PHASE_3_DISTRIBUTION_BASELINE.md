# Wild & Well — Phase 3 Distribution, Indexing & First-Revenue Baseline

**Start date:** 28 August 2026

Phase 3 does not reopen the Version 1 architecture. Its purpose is to distribute the existing seven journeys, get reliable search/social/affiliate/email data flowing, and optimise from evidence.

## Primary journeys

| Journey | Discovery | Commercial destination |
| --- | --- | --- |
| Water | `/topics/water` | `/water-filtration-shortlist-uk` |
| Air | `/topics/air-quality` | `/air-quality-shortlist-uk` |
| Sleep | `/topics/sleep` | `/sleep-recovery-shortlist-uk` |
| Nutrition | `/nutrition` | `/nutrition/food-first-shortlist` |
| Movement | `/movement` | `/movement/movement-shortlist` |
| Healthy Home | `/healthy-home` | `/healthy-home/low-tox-shortlist` |
| Resilience | `/topics/resilience` | `/blog/72-hour-household-emergency-kit-uk` |

## Distribution assets already prepared

- `PHASE_2_LAUNCH_PACK.md` is the copy-ready 30-day publishing calendar for Instagram, Facebook, Pinterest and suitable Reels/TikTok/YouTube Shorts.
- `PHASE_2_SOCIAL_ASSET_BRIEFS.md` contains exact canvas sizes, visual text, production rules and field-by-field posting instructions.
- Social traffic should land on Wild & Well first; do not post raw affiliate links directly to social.

## Search Console priority queue

Submit the sitemap once, then inspect/request indexing only where necessary in this order:

1. `/`
2. `/topics`
3. `/shortlists`
4. `/topics/water`
5. `/water-filtration-shortlist-uk`
6. `/topics/air-quality`
7. `/air-quality-shortlist-uk`
8. `/topics/sleep`
9. `/sleep-recovery-shortlist-uk`
10. `/nutrition`
11. `/nutrition/food-first-shortlist`
12. `/movement`
13. `/movement/movement-shortlist`
14. `/healthy-home`
15. `/healthy-home/low-tox-shortlist`
16. `/topics/resilience`
17. `/blog/72-hour-household-emergency-kit-uk`
18. `/best-water-filters-uk`
19. `/best-air-purifiers-allergies-uk`
20. `/best-dehumidifiers-damp-mould-uk`
21. `/best-shower-filters-uk-hard-water`
22. `/best-air-purifiers-small-flats-uk`
23. `/blog/filter-replacement-costs-uk`
24. `/blog/72-hour-household-water-plan-uk`
25. `/blog/72-hour-food-resilience-plan-uk`

Do not manually request indexing for hundreds of URLs. Let sitemap discovery and internal linking do the normal work.

## Measurement baseline — record weekly

Every Monday record:

- Search Console: total impressions, clicks, CTR, average position, top queries, top landing pages.
- Analytics: users/sessions, organic sessions, social referral sessions, seven commercial-destination visits.
- Affiliate events: `affiliate_click` by `page_path`, `merchant`, `clickref`, and `affiliate_context`.
- Awin: clicks, transactions, conversion rate, commission.
- Email: new subscribers and signup source where available.
- Social: Pinterest impressions/outbound clicks; Instagram reach/profile/link activity; Facebook reach/link activity; short-video views and profile/site actions.

Use 28-day comparisons once sufficient traffic exists. Do not make architecture decisions from one or two days of data.

## Campaign tracking convention

When a platform allows a clickable destination, use a simple source/campaign convention while keeping the canonical page unchanged:

- Pinterest: `utm_source=pinterest&utm_medium=organic_social&utm_campaign=phase3_launch`
- Facebook: `utm_source=facebook&utm_medium=organic_social&utm_campaign=phase3_launch`
- Instagram profile/link tools: `utm_source=instagram&utm_medium=organic_social&utm_campaign=phase3_launch`
- TikTok profile/link tools: `utm_source=tiktok&utm_medium=organic_social&utm_campaign=phase3_launch`
- YouTube: `utm_source=youtube&utm_medium=organic_video&utm_campaign=phase3_launch`

For individual assets, optionally append `utm_content=day01_brand`, `day02_water`, etc. Never add UTM parameters to canonical metadata or internal navigation.

## Email sequence

Use the existing signup system. Initial sequence:

1. **Welcome — Start with the problem, not the product**
   - Subject: `Welcome to Wild & Well — start here`
   - Preview: `Seven practical routes to a healthier home and healthier habits.`
   - CTA: `/topics`
2. **Water — choose the format before the brand**
   - Subject: `Water filters: jug, under-sink or gravity?`
   - Preview: `A quick way to narrow the choice before spending money.`
   - CTA: `/best-water-filters-uk`
3. **Healthy Home — gradual swaps**
   - Subject: `A lower-tox home without throwing everything away`
   - Preview: `Start with high-use, high-contact products and replace gradually.`
   - CTA: `/healthy-home`
4. **Movement — repeatable beats perfect**
   - Subject: `The movement plan you can actually repeat`
   - Preview: `Walking, basic strength and useful kit only when it helps.`
   - CTA: `/movement`
5. **Nutrition — food first**
   - Subject: `Food first. Supplements second.`
   - Preview: `A simpler order for protein, meals, plants, hydration and supplements.`
   - CTA: `/nutrition`
6. **Resilience — boring essentials first**
   - Subject: `Could your household manage 72 hours of disruption?`
   - Preview: `Water, ordinary food, lighting, phone power and household essentials.`
   - CTA: `/blog/72-hour-household-emergency-kit-uk`
7. **Shortlists — compare only after learning**
   - Subject: `When you are ready to compare options`
   - Preview: `Wild & Well's central shortlists across the seven journeys.`
   - CTA: `/shortlists`

### Beehiiv paste locations

For each email: Beehiiv dashboard → **Write/Posts or Automations** → create email → paste **Subject** into Subject, **Preview** into Preview text, write 2–4 short paragraphs expanding the promise without medical claims, then add one primary button using the listed CTA URL. Keep affiliate links on Wild & Well pages rather than placing raw affiliate URLs in the welcome sequence.

## Manual account actions that require the owner

### Google Search Console
1. Search Console → select/add the Wild & Well property.
2. **Sitemaps** → paste `sitemap.xml` → Submit.
3. **URL inspection** → work through the priority queue above only where a URL is not indexed → Request indexing.
4. Performance → Search results → export/record the weekly baseline.

### Instagram
Use `PHASE_2_LAUNCH_PACK.md` + `PHASE_2_SOCIAL_ASSET_BRIEFS.md`. Instagram → `+` → Post/Reel → upload specified asset → paste the day's caption → publish/schedule. For link-in-bio posts, Edit profile → Links → use the day's Wild & Well destination with the Instagram UTM convention above.

### Facebook
Meta Business Suite → Create post → Wild & Well Page → upload specified asset → paste the day's Facebook copy → use the full destination URL with Facebook UTM parameters → schedule/publish.

### Pinterest
Pinterest Business → Create Pin → upload 1000×1500 asset → paste day's Pin title → paste Description → Link = full destination URL plus Pinterest UTM parameters → choose the named board → publish/schedule.

### TikTok / Reels / YouTube Shorts
Use the exact hook/script in the launch pack and 1080×1920 brief. Burn in/native captions. Send viewers to Wild & Well rather than directly to affiliate merchants. For YouTube, place the article URL with YouTube UTM parameters in the description.

## Technical warning policy

- Node 24 is the repository runtime and remains authoritative even if a Vercel dashboard setting still displays Node 20.
- SWC lockfile warnings are not treated as a reason for a breaking framework migration when deterministic CI and the production build pass. Reassess when the framework/dependency stack is intentionally upgraded.
- Any Edge-runtime warning should be judged route-by-route; it is not itself evidence that the seven SEO journeys are unindexable.

## Phase 3 success criteria

Phase 3 is working when the site is receiving measurable impressions/referral traffic, affiliate click contexts are visible, subscribers begin accumulating, and there is enough data to identify which journeys deserve more content or stronger commercial coverage. The next optimisation cycle must be driven by those signals, not by another site-wide redesign.
