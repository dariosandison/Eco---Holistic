# Wild & Well — Owner Action Checklist

Everything below requires an external account screen or an actual public post. Website/repository work does not need to be repeated here.

## 1. Google Search Console — approximately 5–10 minutes

### Submit sitemap
1. Open Google Search Console.
2. Select the Wild & Well property.
3. Left menu → **Sitemaps**.
4. Under **Add a new sitemap**, paste: `sitemap.xml`
5. Click **Submit**.

### Priority URL inspection
Left menu → **URL inspection** → paste each full URL below. If Google says the URL is not indexed, use **Request indexing**. If it is already indexed, do nothing.

- `https://www.wild-and-well.store/`
- `https://www.wild-and-well.store/topics`
- `https://www.wild-and-well.store/shortlists`
- `https://www.wild-and-well.store/water-filtration-shortlist-uk`
- `https://www.wild-and-well.store/air-quality-shortlist-uk`
- `https://www.wild-and-well.store/sleep-recovery-shortlist-uk`
- `https://www.wild-and-well.store/nutrition/food-first-shortlist`
- `https://www.wild-and-well.store/movement/movement-shortlist`
- `https://www.wild-and-well.store/healthy-home/low-tox-shortlist`
- `https://www.wild-and-well.store/blog/72-hour-household-emergency-kit-uk`

Do not manually submit hundreds of pages.

## 2. Beehiiv — verify before building the sequence

### Test the existing website signup
1. Open `https://www.wild-and-well.store/shopping-list` in a private/incognito browser.
2. Subscribe using an email address you can check.
3. Confirm the success/thank-you flow.
4. Beehiiv → Subscribers/Audience → confirm that address arrived.
5. Check that a welcome email was received if Beehiiv's welcome-email option is enabled.

If the signup fails, do not change API credentials blindly. Save the visible error and Vercel function-log time for diagnosis.

### Create the seven-email sequence
Open `PHASE_3_EMAIL_COPY_READY.md` in the repository. In Beehiiv, create the welcome automation/sequence if available on the current plan and paste the supplied Subject, Preview, Body, Button text and Button URL into the matching fields.

Suggested timing: Email 1 immediately; Email 2 after two days; Emails 3–7 every three days. Do not purchase a Beehiiv upgrade without separate approval.

## 3. Instagram — first five posts

Use the exact copy in `PHASE_2_LAUNCH_PACK.md` and layout rules in `PHASE_3_SOCIAL_TEMPLATE_PACK.md`.

### Day 1
Instagram → `+` → Post → upload brand-launch static/carousel → **Caption** paste Day 1 Instagram caption.
Profile → Edit profile → Links → destination:
`https://www.wild-and-well.store/topics?utm_source=instagram&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day01_brand`

### Day 3
Create carousel from Day 3 copy: purifier vs dehumidifier vs ventilation. Link destination:
`https://www.wild-and-well.store/topics/air-quality?utm_source=instagram&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day03_air`

### Day 6
Static/card: `Sleep products come second.` Link:
`https://www.wild-and-well.store/topics/sleep?utm_source=instagram&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day06_sleep`

### Day 8
Carousel: food-first nutrition. Link:
`https://www.wild-and-well.store/nutrition?utm_source=instagram&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day08_nutrition`

### Day 10
Reel: lower-tox gradual swaps. Link:
`https://www.wild-and-well.store/healthy-home?utm_source=instagram&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day10_healthyhome`

## 4. Facebook — first batch

Meta Business Suite → **Create post** → choose Wild & Well Facebook Page → upload the matching social asset → paste the matching caption from `PHASE_2_LAUNCH_PACK.md` into **Post text** → add the full tracked destination below → Schedule.

First destinations:
- Day 1: `https://www.wild-and-well.store/topics?utm_source=facebook&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day01_brand`
- Day 3: `https://www.wild-and-well.store/topics/air-quality?utm_source=facebook&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day03_air`
- Day 6: `https://www.wild-and-well.store/topics/sleep?utm_source=facebook&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day06_sleep`
- Day 7: `https://www.wild-and-well.store/blog/72-hour-household-emergency-kit-uk?utm_source=facebook&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day07_resilience`

## 5. Pinterest — first seven evergreen Pins

Pinterest → Create → Create Pin. Use a 1000×1500 graphic. Paste the exact title/description from the launch pack. Set **Link** to the matching URL below.

1. Water filter formats → `https://www.wild-and-well.store/best-water-filters-uk?utm_source=pinterest&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day02_water`
2. Fragrance-free laundry → `https://www.wild-and-well.store/topics/fragrance-free?utm_source=pinterest&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day05_laundry`
3. 72-hour household kit → `https://www.wild-and-well.store/blog/72-hour-household-emergency-kit-uk?utm_source=pinterest&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day07_resilience`
4. Purifier vs dehumidifier → `https://www.wild-and-well.store/best-dehumidifiers-damp-mould-uk?utm_source=pinterest&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day09_air`
5. Barefoot footwear → `https://www.wild-and-well.store/movement/movement-shortlist?utm_source=pinterest&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day16_movement`
6. Shower filter/hard water → `https://www.wild-and-well.store/best-shower-filters-uk-hard-water?utm_source=pinterest&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day19_water`
7. Sleep environment → `https://www.wild-and-well.store/topics/sleep?utm_source=pinterest&utm_medium=organic_social&utm_campaign=phase3_launch&utm_content=day22_sleep`

## 6. Reels / TikTok / YouTube Shorts — first four

Use the exact hook and script in the launch pack. Record vertically or build from simple B-roll/text. Enable captions.

First four scripts:
1. Day 4 — walking: `The most underrated fitness equipment? Your front door.`
2. Day 10 — lower-tox: `You do NOT need to throw your whole house away to live lower-tox.`
3. Day 15 — water resilience: `A water filter cannot filter water you don't have.`
4. Day 20 — buying rule: `Ask this before buying any wellness product.`

For YouTube Shorts, put the relevant tracked Wild & Well URL in the Description. For Instagram/TikTok, direct viewers to the profile/site rather than raw affiliate links.

## 7. Weekly measurement — every Monday

Record these figures in one note/spreadsheet:
- Search Console: impressions, clicks, CTR, average position, top queries/pages.
- Analytics: users/sessions, organic sessions, social referral sessions, visits to the seven commercial destinations.
- Affiliate tracking: `affiliate_click` events by page/merchant/context where available.
- Awin: clicks, transactions and commission.
- Beehiiv: subscriber total and new subscribers.
- Pinterest: impressions and outbound clicks.
- Instagram/Facebook: reach and website/link actions.

Do not judge a topic from one post or a couple of days. The first meaningful optimisation review should use accumulated data.

## Important boundary

No paid advertising, paid account upgrade, new affiliate-programme application, PlayGlide launch or mass new-content programme is required for this checklist. Those need evidence or separate approval.
