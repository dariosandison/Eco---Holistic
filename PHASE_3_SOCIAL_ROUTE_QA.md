# Wild & Well — Phase 3 Social Route QA

**Audited:** 28 August 2026

This file is the authoritative route correction sheet for the 30-day social launch pack. The repository route tree was checked against the destinations used by the campaign.

## Result

The campaign destinations for the core seven journeys and the named buyer guides exist in the current repository. Dynamic blog routes are backed by `content/blog/*.mdx` files.

### Confirmed destinations

- Day 1 `/topics`
- Day 2 `/best-water-filters-uk`
- Day 3 `/topics/air-quality`
- Day 4 `/blog/walking-for-health-how-much-is-enough` — backed by `content/blog/walking-for-health-how-much-is-enough.mdx`
- Day 5 `/topics/fragrance-free`
- Day 6 `/topics/sleep`
- Day 7 `/blog/72-hour-household-emergency-kit-uk`
- Day 8 `/nutrition`
- Day 9 `/best-dehumidifiers-damp-mould-uk`
- Day 10 `/healthy-home`
- Day 11 `/blog/filter-replacement-costs-uk`
- Day 12 `/blog/home-strength-basics-busy-people` — backed by `content/blog/home-strength-basics-busy-people.mdx`
- Day 13 `/topics/air-quality`
- Day 14 `/shopping-list`
- Day 15 `/blog/72-hour-household-water-plan-uk`
- Day 16 `/movement/movement-shortlist`
- Day 17 `/air-quality-shortlist-uk`
- Day 18 `/nutrition/food-first-shortlist`
- Day 19 `/best-shower-filters-uk-hard-water`
- Day 20 `/shortlists`
- Day 22 `/topics/sleep`
- Day 23 `/healthy-home/low-tox-shortlist`
- Day 24 `/best-air-purifiers-small-flats-uk`
- Day 25 `/movement`
- Day 26 `/shortlists`
- Day 27 `/topics/resilience`
- Day 28 `/best-air-purifiers-allergies-uk`

## Required correction

### Day 21 — Emergency food

The original launch pack destination is wrong:

`https://www.wild-and-well.store/blog/72-hour-food-resilience-plan-uk`

Use this maintained route instead:

`https://www.wild-and-well.store/blog/72-hour-food-plan-uk`

Pinterest tracked destination:

`https://www.wild-and-well.store/blog/72-hour-food-plan-uk?utm_source=pinterest&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day21_food`

Facebook tracked destination:

`https://www.wild-and-well.store/blog/72-hour-food-plan-uk?utm_source=facebook&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day21_food`

## Publishing rule

Before manually publishing from `PHASE_2_LAUNCH_PACK.md`, apply the Day 21 correction above. All other confirmed destinations in this sheet can be used with the platform-specific UTM convention in `PHASE_3_DISTRIBUTION_BASELINE.md`.

If a later content rename occurs, update this QA sheet and the launch pack together rather than silently creating a duplicate article solely to preserve a social draft URL.
