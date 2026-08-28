# Wild & Well — Phase 2 Traffic, Indexing & Monetisation Launch Pack

**Launch date:** 28 August 2026

Version 1 architecture is frozen. Phase 2 exists to acquire qualified UK visitors, measure behaviour and affiliate intent, grow the email list, and improve the existing seven journeys using real data.

## Measurement baseline

Primary journeys and commercial destinations:

| Journey | Discovery | Commercial destination | Primary search intent |
| --- | --- | --- | --- |
| Water | `/topics/water` | `/water-filtration-shortlist-uk` | water filters UK, filter type, running cost, hard water |
| Air | `/topics/air-quality` | `/air-quality-shortlist-uk` | air purifier UK, allergies, damp, humidity |
| Sleep | `/topics/sleep` | `/sleep-recovery-shortlist-uk` | sleep environment, sleep support UK |
| Nutrition | `/nutrition` | `/nutrition/food-first-shortlist` | food-first nutrition, protein, practical healthy food |
| Movement | `/movement` | `/movement/movement-shortlist` | walking, foot strength, home strength, movement basics |
| Healthy Home | `/healthy-home` | `/healthy-home/low-tox-shortlist` | fragrance-free, lower-tox cleaning/laundry |
| Resilience | `/topics/resilience` | `/blog/72-hour-household-emergency-kit-uk` | 72-hour kit UK, household water/food disruption |

Events already available for measurement include affiliate clicks, outbound clicks, newsletter signups/dismissals and scroll depth. Affiliate reporting should be reviewed by `page_path`, `merchant`, `clickref` and `affiliate_context` where populated.

### Weekly scorecard

Record every Monday:

- Google Search Console impressions, clicks, CTR and average position;
- top 20 queries and top 20 landing pages;
- GA sessions/users and organic sessions;
- visits to each of the seven commercial destinations;
- `affiliate_click` events by journey/page/merchant;
- Awin clicks, transactions, conversion rate and commission;
- newsletter signups;
- social referral sessions by platform.

Do not make architecture changes from one or two days of data. Use 28-day comparisons once enough traffic exists.

## Google Search Console — manual setup

1. Open Google Search Console and select/add `https://www.wild-and-well.store/` (or the existing Wild & Well property).
2. Open **Sitemaps**.
3. Paste `sitemap.xml` into **Add a new sitemap** and submit.
4. Open **URL inspection** and inspect these first: homepage, `/topics`, `/shortlists`, and the seven commercial destinations above.
5. Request indexing only for important pages that are not already indexed. Do not manually submit hundreds of URLs.
6. After data begins accumulating, use **Performance → Search results** and compare the latest 28 days with the previous 28 days.

## Social publishing rules

Use the destination URL shown for each post. Instagram feed captions do not make ordinary URLs clickable, so use **link in bio** wording there and temporarily place the destination in the profile link if needed. Facebook can use the destination directly in the post. Pinterest: create a Pin, paste the **Pin title**, **description** and **destination link** into their matching fields. Reels/TikTok/Shorts: use the script as voiceover/on-screen sequence and the caption supplied.

Do not add affiliate links directly to social posts unless a platform/account-specific disclosure and tracking route has been intentionally set up. Send social traffic to Wild & Well first.

## 30-day launch calendar

### Day 1 — Brand launch / Start here
**Instagram + Facebook**
Caption: `Wild & Well is built around a simple idea: healthier choices should be easier to understand. We turn the noise around water, air quality, sleep, food, movement and the products we use at home into calm, practical UK guidance. No miracle fixes. No endless shopping lists. Start with the change that matters most to you.`
CTA: `Explore Wild & Well → link in bio` (Instagram) / `Explore: https://www.wild-and-well.store/topics` (Facebook)
Visual text: `Healthier home. Healthier habits. Less hype.`
Destination: `/topics`

### Day 2 — Water filter formats
**Pinterest**
Pin title: `Water Filters UK: Jug vs Under-Sink vs Gravity`
Description: `Confused by water filter types? This practical UK guide explains jug, under-sink, gravity and portable filtration, including the trade-offs and running costs to check before buying.`
Destination: `https://www.wild-and-well.store/best-water-filters-uk`
Board: `Water & Hydration`
Visual text: `Which water filter format fits your home?`

### Day 3 — Indoor air
**Instagram carousel + Facebook**
Caption: `An air purifier, dehumidifier and open window solve different problems. Particle filtration can help with airborne particles. A dehumidifier tackles excess moisture. Ventilation helps remove indoor pollutants and stale air. Before buying a machine, work out which problem you actually have.`
CTA: `Read the UK air-quality guide → link in bio`
Destination: `/topics/air-quality`
Carousel text: `1. Purifier ≠ dehumidifier  2. Particles → filtration  3. Excess moisture → humidity control  4. Stale indoor air → ventilation  5. Diagnose first, buy second`

### Day 4 — Walking
**Reel/TikTok/Short**
Hook/on-screen: `The most underrated fitness equipment? Your front door.`
Script: `Movement does not have to begin with a gym membership or expensive equipment. Walking is repeatable, scalable and easy to fit around normal life. Start with a distance you can repeat consistently, then build from there.`
Caption: `Build the habit before buying the kit. #walking #movement #wellnessuk`
Destination: `/blog/walking-for-health-how-much-is-enough`

### Day 5 — Fragrance-free laundry
**Pinterest**
Pin title: `Fragrance-Free Laundry: A Simple Lower-Tox First Swap`
Description: `Want to reduce fragrance at home without replacing everything you own? Laundry is a practical place to start because clothes and bedding stay in contact with skin for hours.`
Destination: `https://www.wild-and-well.store/topics/fragrance-free`
Board: `Healthy Home`
Visual text: `Lower-tox home? Start with laundry.`

### Day 6 — Sleep basics
**Instagram + Facebook**
Caption: `Before buying another sleep product, check the boring things first: light, noise, temperature, caffeine timing and whether your routine actually gives you enough time to sleep. Products can help specific problems. They cannot replace the basics.`
CTA: `Start with the sleep guide → link in bio`
Destination: `/topics/sleep`
Visual text: `Sleep products come second.`

### Day 7 — 72-hour household buffer
**Facebook + Pinterest**
Caption: `A useful household emergency kit does not need to look like military equipment. Think three days of drinking water, food you already eat, lighting, phone power, first-aid basics and household-specific essentials. Prepare for inconvenience before catastrophe.`
Destination: `https://www.wild-and-well.store/blog/72-hour-household-emergency-kit-uk`
Pinterest title: `UK 72-Hour Household Emergency Kit Checklist`
Board: `Practical Resilience`
Visual text: `72 hours. Boring essentials first.`

### Day 8 — Food-first nutrition
**Instagram carousel**
Caption: `Nutrition gets complicated quickly online. Our order is simpler: whole-food protein → useful meals → fruit and veg → hydration → supplements only where they solve a real gap. Food first is not flashy. That is partly the point.`
Destination: `/nutrition`
Carousel text: `1. Food first  2. Protein you can repeat  3. Plants & useful carbs  4. Hydration  5. Supplements last`

### Day 9 — Damp vs purifier
**Pinterest**
Pin title: `Damp or Allergies? Purifier vs Dehumidifier Explained`
Description: `A purifier does not remove moisture and a dehumidifier is not a particle filter. Use this UK guide to work out which problem you are trying to solve before spending money.`
Destination: `https://www.wild-and-well.store/best-dehumidifiers-damp-mould-uk`
Board: `Indoor Air Quality`
Visual text: `Purifier or dehumidifier?`

### Day 10 — No-spend healthy home
**Reel/TikTok/Short**
Hook: `You do NOT need to throw your whole house away to live lower-tox.`
Script: `Use up what is reasonable. Replace high-use and high-contact products gradually. Start with simple categories such as strongly fragranced laundry and cleaning products. Lower-tox living should reduce waste and stress, not create more of both.`
Caption: `Gradual swaps beat a panic-buying spree. #lowtox #healthyhome #wellnessuk`
Destination: `/healthy-home`

### Day 11 — Water running cost
**Instagram + Facebook**
Caption: `The purchase price is only part of a water filter's cost. Before choosing one, check replacement-filter price, replacement frequency, capacity and whether the system actually addresses the reason you want filtration. Cheap hardware with expensive consumables can become the costly option.`
Destination: `/blog/filter-replacement-costs-uk`
Visual text: `Water filter price ≠ running cost`

### Day 12 — Home strength
**Pinterest**
Pin title: `Home Strength Basics for Busy People`
Description: `You do not need a garage full of equipment to get stronger. Start with repeatable movement patterns and only add equipment when it makes training easier to progress.`
Destination: `https://www.wild-and-well.store/blog/home-strength-basics-busy-people`
Board: `Movement & Strength`
Visual text: `Home strength: basics before equipment`

### Day 13 — Bedroom air
**Instagram carousel**
Caption: `You spend hours in your bedroom every night. Before buying an air purifier, look at ventilation, visible damp, humidity, dust sources and what is actually disturbing the room. Then decide whether filtration solves that problem.`
Destination: `/topics/air-quality`
Carousel text: `Bedroom air check: ventilation • damp • humidity • dust • filtration`

### Day 14 — Newsletter/free list
**Instagram + Facebook**
Caption: `Not sure where to begin? We made a free Low-Tox Shopping List for sensible first swaps across the home. No giant detox haul required.`
CTA: `Get the free list → link in bio`
Destination: `/shopping-list`
Visual text: `Free: Low-Tox Shopping List`

### Day 15 — Water storage vs filtration
**Reel/TikTok/Short**
Hook: `A water filter cannot filter water you don't have.`
Script: `For short household disruption, stored drinking water comes before filtration. Filtration can be useful for everyday use or as an additional option, but if the mains stops completely your first requirement is an actual supply of water.`
Caption: `Stored water first. Filtration second. #preparednessuk #water #resilience`
Destination: `/blog/72-hour-household-water-plan-uk`

### Day 16 — Barefoot footwear decision
**Pinterest**
Pin title: `Barefoot Shoes UK: What to Check Before Buying`
Description: `Barefoot-style footwear changes the amount of cushioning, toe space and structure under your feet. Use Wild & Well's movement guidance to decide whether a gradual transition makes sense for you.`
Destination: `https://www.wild-and-well.store/movement/movement-shortlist`
Board: `Movement & Foot Strength`
Visual text: `Barefoot shoes: transition, don't rush`

### Day 17 — Air purifier buying rule
**Facebook + Instagram**
Caption: `Air purifier buying rule: size it for the room you will actually use it in, check replacement-filter cost and consider noise at the fan speed you will realistically tolerate. A powerful machine you never run is not a useful machine.`
Destination: `/air-quality-shortlist-uk`
Visual text: `Room size • filter cost • noise`

### Day 18 — Protein without obsession
**Instagram carousel**
Caption: `Protein does not have to mean living on shakes. Eggs, dairy, fish, meat, pulses and other ordinary foods can do most of the work. Convenience products are useful when they genuinely make consistency easier.`
Destination: `/nutrition/food-first-shortlist`
Carousel text: `Protein: ordinary food first`

### Day 19 — Hard water/shower filters
**Pinterest**
Pin title: `Shower Filters & UK Hard Water: What They Can and Can't Do`
Description: `A shower filter and a water softener are not the same thing. Understand what common shower filtration can realistically change before buying for hard-water concerns.`
Destination: `https://www.wild-and-well.store/best-shower-filters-uk-hard-water`
Board: `Water & Healthy Home`
Visual text: `Shower filter ≠ water softener`

### Day 20 — Better shopping question
**Reel/TikTok/Short**
Hook: `Ask this before buying any wellness product.`
Script: `What exact problem am I trying to solve? Then ask whether you already own something that solves it, what ongoing consumables it needs and what evidence would tell you it is working. That one habit removes a lot of unnecessary wellness spending.`
Caption: `Problem first. Product second. #wellness #lowtox #buybetter`
Destination: `/shortlists`

### Day 21 — Emergency food
**Facebook + Pinterest**
Caption: `Three days of household food resilience does not require specialist survival meals. Start with shelf-stable foods your household already eats, require little cooking and can be rotated through normal meals.`
Destination: `https://www.wild-and-well.store/blog/72-hour-food-resilience-plan-uk`
Pinterest title: `72-Hour Food Plan UK: Use Food You Already Eat`
Board: `Practical Resilience`
Visual text: `Emergency food without “survival food”`

### Day 22 — Sleep environment
**Pinterest**
Pin title: `Sleep Environment Checklist: Light, Noise & Temperature First`
Description: `Before buying sleep gadgets, work through the room itself. Wild & Well's sleep hub starts with practical changes and routes to products only where they solve a defined problem.`
Destination: `https://www.wild-and-well.store/topics/sleep`
Board: `Sleep & Recovery`
Visual text: `Fix the room before buying the gadget`

### Day 23 — Healthy-home philosophy
**Instagram + Facebook**
Caption: `Our lower-tox rule is deliberately unexciting: don't bin perfectly useful belongings just to buy a “cleaner” replacement. Prioritise products you use frequently, breathe in, put on skin or wash clothing and bedding with. Change things gradually.`
Destination: `/healthy-home/low-tox-shortlist`
Visual text: `Use up. Replace thoughtfully.`

### Day 24 — Small-flat air purifier
**Pinterest**
Pin title: `Best Air Purifier Approach for a Small UK Flat`
Description: `Small rooms still need the right purifier size. Compare room coverage, noise, placement and filter cost rather than automatically buying the smallest machine.`
Destination: `https://www.wild-and-well.store/best-air-purifiers-small-flats-uk`
Board: `Indoor Air Quality`
Visual text: `Small flat? Don't just buy the smallest purifier.`

### Day 25 — Movement minimum
**Instagram + Facebook**
Caption: `The best movement plan is not the most advanced one. It is the one you can repeat next week. Walking, basic strength and regular movement breaks create a foundation. Gadgets and specialised kit come later.`
Destination: `/movement`
Visual text: `Repeatable beats perfect.`

### Day 26 — Filter replacement reminder
**Reel/TikTok/Short**
Hook: `Your filter is not a one-off purchase.`
Script: `Whether it is an air purifier or water filter, check replacement cost and availability before buying the machine. Consumables are part of the real price, and an overdue filter can undermine the reason you bought the product.`
Caption: `Always price the replacement filters. #airquality #waterfilter #healthyhome`
Destination: `/shortlists`

### Day 27 — Practical resilience
**Instagram carousel**
Caption: `Practical resilience is mostly boring — which is good. Know your stopcock and fuse box. Keep essential contacts written down. Have drinking water, ordinary shelf-stable food, a torch and a charged power bank. Solve likely inconvenience before unlikely catastrophe.`
Destination: `/topics/resilience`
Carousel text: `Know • Store • Charge • Rotate • Review`

### Day 28 — Allergy purifier
**Pinterest**
Pin title: `Air Purifiers for Allergies UK: What Matters Most`
Description: `For airborne particles, focus on appropriate filtration, room size, airflow, noise and replacement-filter costs. This guide routes you through the buying decision without an endless product list.`
Destination: `https://www.wild-and-well.store/best-air-purifiers-allergies-uk`
Board: `Indoor Air Quality`
Visual text: `Allergies? Check these before buying a purifier.`

### Day 29 — Wild & Well method
**Instagram + Facebook**
Caption: `How Wild & Well recommends products: understand the problem → try sensible no-spend steps → compare the trade-offs → buy only when the product genuinely helps. Some links can earn us a commission, but affiliate relationships do not decide what we recommend.`
Destination: `/how-we-test`
Visual text: `Education first. Products second.`

### Day 30 — Seven routes
**Instagram carousel + Facebook**
Caption: `One month, seven practical routes. Which one should we go deeper on next: Water, Air, Sleep, Nutrition, Movement, Healthy Home or Practical Resilience? Wild & Well now has a dedicated starting point for each.`
Destination: `/topics`
Carousel text: `Water • Air • Sleep • Nutrition • Movement • Healthy Home • Resilience`
CTA: `Comment with the one you want next.`

## Posting cadence after day 30

Do not maintain daily posting merely for volume. Move to 3–4 useful posts per week, with Pinterest pins continuing to reuse evergreen search-led pages. Each week should normally include one educational post, one search-led evergreen Pin, one short-form explanation and one commercial/shortlist route at most.

## First optimisation cycle

Do not create another major batch of site content immediately. After Search Console has enough data, prioritise:

1. pages receiving impressions in positions roughly 5–20 — improve title/description and answer the query more directly;
2. pages with clicks but weak movement into a commercial shortlist — improve internal CTA/context;
3. commercial hubs receiving visits but few affiliate clicks — improve product relevance/decision clarity;
4. merchants receiving clicks but no conversion — review merchant fit and offer quality;
5. social posts producing referral traffic — create follow-ups on the same problem, not merely the same format.

## Phase 2 boundary

No architecture redesign. No mass AI article generation. No paid advertising until organic measurement is working. No direct PlayGlide selling until it has been prototyped and tested. New affiliate programmes should strengthen an existing journey rather than create a new category simply because a programme is available.
