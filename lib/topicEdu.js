// lib/topicEdu.js
// Education-first content for Topic pages.
// Keep it calm, practical, and UK-focused. Avoid medical claims; point to trusted sources.

const pick = (arr) => arr

export const TOPIC_EDU = {
  'air-quality': {
    anchorId: 'understand',
    title: 'Air quality — what’s going on, and why it matters',
    intro: pick([
      '“Indoor air quality” is mostly about what builds up inside your home (particles, moisture/mould, and irritants) and how well you dilute and remove it.',
      'In UK homes, the biggest practical drivers are often damp/condensation, cooking without extraction, dust/pets, and fragranced products — not one single “toxin”.',
    ]),
    whyItMatters: pick([
      'Air is a constant exposure: small irritants can add up when you’re breathing them for hours, especially overnight.',
      'Damp and mould are common in UK housing and can worsen respiratory symptoms for some people.',
      'For allergies, reducing airborne particles in the bedroom can reduce “overnight load” and morning symptoms for some households.',
    ]),
    healthEffects: pick([
      'Allergens and particles can aggravate hay fever and asthma symptoms in sensitive people.',
      'Damp and mould can irritate airways and worsen cough/wheeze for some people.',
      'Strong fragrances and sprays can trigger headaches or irritation in sensitive households.',
    ]),
    commonCauses: pick([
      'Moisture sources: drying clothes indoors, poor extraction in kitchens/bathrooms, leaks, cold surfaces causing condensation.',
      'Cooking emissions (especially frying) without an extractor or open window.',
      'Dust reservoirs: carpets, soft furnishings, bedding, pet dander.',
      'Fragranced products: candles, plug-ins, sprays, heavily scented laundry.',
      'Outdoor pollution entering via open windows during peak traffic times (varies by location).',
    ]),
    quickCheck: pick([
      'Look for condensation on windows, musty smells, or visible mould — these point to moisture first, not “air purifier first”.',
      'Check whether your extractor fans actually vent outside (or just recirculate).',
      'If symptoms are worst at night or on waking, start with the bedroom (bedding, dust, ventilation).',
      'A £10–£15 hygrometer can tell you if humidity is staying high (rough aim: ~40–60%).',
    ]),
    noSpendFirstSteps: pick([
      'Ventilate after showers/cooking (10–20 minutes) and keep internal doors closed to wet rooms while extracting.',
      'Dry laundry with good airflow (or use a vented/condensing solution) — indoor drying without ventilation keeps humidity high.',
      'Reduce fragranced sprays and candles for a 2‑week trial if anyone is sensitive.',
      'Wash bedding weekly at the warmest appropriate setting and keep clutter low in the bedroom.',
    ]),
    whenToGetHelp: pick([
      'If mould is extensive, recurring, or linked to a housing disrepair issue, use local housing advice and escalate appropriately.',
      'If there is persistent wheeze, breathlessness, chest tightness, or asthma symptoms worsening, follow NHS guidance / speak to a clinician.',
    ]),
    readNext: pick([
      { label: 'Healthy air at home', href: '/blog/healthy-air-at-home' },
      { label: 'Air purifiers for allergies (UK)', href: '/best-air-purifiers-allergies-uk' },
      { label: 'Dehumidifiers for damp & mould (UK)', href: '/best-dehumidifiers-damp-mould-uk' },
    ]),
    references: pick([
      { label: 'WHO: Indoor air quality — dampness and mould', href: 'https://www.who.int/publications/i/item/9789289041683' },
      { label: 'NHS: Asthma triggers', href: 'https://www.nhs.uk/conditions/asthma/causes/' },
      { label: 'Shelter (England): Damp and mould risks and repairs', href: 'https://england.shelter.org.uk/housing_advice/repairs/damp_and_mould_in_rented_homes' },
    ]),
  },

  water: {
    anchorId: 'understand',
    title: 'Water — safety, taste, hardness, and when filtering helps',
    intro: pick([
      'In the UK, mains drinking water is regulated and routinely tested. Most people filter for taste/odour, limescale, or personal preference rather than “safety”.',
      'The most important practical factor isn’t the gadget — it’s whether you’ll maintain it. Filters that aren’t replaced on schedule can perform inconsistently.',
    ]),
    whyItMatters: pick([
      'If filtering makes water taste better for you, you may drink more — which can support hydration habits.',
      'Hard water causes limescale (kettles, showers) and can feel drying for some people, but it isn’t automatically “bad” water.',
      'If you have a specific concern, the right first step is checking official local reporting before buying anything.',
    ]),
    healthEffects: pick([
      'Hydration supports energy, concentration, and physical performance — the best system is the one that makes drinking water easier for you.',
      'Hard water is mainly a practical issue (scale) rather than a direct health risk for most people.',
      'Some people notice skin/hair comfort differences with hard water; results vary and are often about routine + products too.',
    ]),
    commonCauses: pick([
      'Hardness (calcium/magnesium) varies by region and shows up as kettle scale and soap not lathering well.',
      'Chlorine taste/odour can be noticeable in some areas or at certain times.',
      'Old plumbing can sometimes affect taste/colour (if you notice changes, report them to your water supplier).',
    ]),
    quickCheck: pick([
      'Check your water company’s published water quality report (and hardness) for your postcode/area.',
      'If taste is the main issue, do a simple test: chilled tap water vs chilled filtered water for a week.',
      'If you filter, set a replacement reminder — that’s where most “this didn’t work” stories come from.',
    ]),
    noSpendFirstSteps: pick([
      'Chill tap water in the fridge (taste often improves).',
      'Descale kettles regularly if you’re in a hard-water area (improves taste and appliance life).',
      'If water looks discoloured or smells unusual, contact your water supplier rather than guessing the cause.',
    ]),
    whenToGetHelp: pick([
      'If you have health-related concerns about drinking water (e.g., immunocompromised household, pregnancy, or a known local issue), use official sources and/or ask a clinician for personalised advice.',
      'If your water changes colour, taste, or smell suddenly, report it to your water company.',
    ]),
    readNext: pick([
      { label: 'Water filter buying guide (UK)', href: '/blog/water-filter-buying-guide-uk' },
      { label: 'Water filters (UK): shortlist', href: '/best-water-filters-uk' },
      { label: 'Shower filters (UK hard water): shortlist', href: '/best-shower-filters-uk-hard-water' },
    ]),
    references: pick([
      { label: 'GOV.UK: Check drinking water quality', href: 'https://www.gov.uk/check-drinking-water-quality' },
      { label: 'UK Drinking Water Inspectorate (DWI)', href: 'https://www.dwi.gov.uk/' },
      { label: 'NHS: Dehydration', href: 'https://www.nhs.uk/conditions/dehydration/' },
    ]),
  },

  'fragrance-free': {
    anchorId: 'understand',
    title: 'Fragrance-free home — why scent can be a problem (and what to change first)',
    intro: pick([
      '“Fragrance” on a label can mean a blend of many ingredients (including essential oils). Some people tolerate it fine; others get skin, airway, or headache symptoms.',
      'The most effective approach is usually a short trial: remove the biggest fragrance sources first, then reintroduce slowly if you want to.',
    ]),
    whyItMatters: pick([
      'Laundry and cleaning products sit close to the body (clothes, bedding) — so scent can be a high-impact exposure for sensitive skin.',
      'Air fresheners and sprays can add irritants to indoor air, especially in small or poorly ventilated rooms.',
      'A fragrance-free baseline makes it easier to spot what actually triggers symptoms in your household.',
    ]),
    healthEffects: pick([
      'Fragrance and preservatives can contribute to contact dermatitis in sensitive people (especially with repeated exposure).',
      'Sprays and strong scents can irritate airways for some people with asthma or allergies.',
      'Headaches/migraines can be scent-triggered for some individuals.',
    ]),
    commonCauses: pick([
      'Scent boosters, fabric conditioners, and heavily perfumed detergents.',
      'Plug-in fresheners, candles, incense, room sprays.',
      'Multi-surface sprays and “disinfectant” aerosols used frequently without ventilation.',
      'Personal care products with “parfum/fragrance” high on the list.',
    ]),
    quickCheck: pick([
      'Read labels for “parfum/fragrance” (and often essential oils). If you react, a true fragrance-free product is the cleanest test.',
      'Do a 2‑week “scent reset”: remove the top 2–3 sources (laundry + air freshener + one personal care product).',
      'If you have skin symptoms, note where they show up (hands, eyelids, body) — it can hint at the trigger.',
    ]),
    noSpendFirstSteps: pick([
      'Stop using scent boosters and fabric conditioner for a trial period.',
      'Ventilate during and after cleaning; avoid spraying into the air when possible.',
      'Switch to “less but better”: fewer products, used correctly, with good rinsing.',
    ]),
    whenToGetHelp: pick([
      'If you have persistent or severe dermatitis, follow NHS guidance and consider clinician advice (especially for face/eyelid eczema).',
      'If breathing symptoms worsen with scents/sprays, follow asthma/allergy guidance and seek medical advice if needed.',
    ]),
    readNext: pick([
      { label: 'Fragrance-free laundry detergents (UK)', href: '/best-fragrance-free-laundry-detergents-uk' },
      { label: 'Non-toxic cleaning starter', href: '/blog/non-toxic-cleaning-starter' },
      { label: 'Low-tox starter favourites', href: '/best-low-tox-products-for-beginners' },
    ]),
    references: pick([
      { label: 'NHS: Contact dermatitis', href: 'https://www.nhs.uk/conditions/contact-dermatitis/' },
      { label: 'NHS: Eczema (atopic eczema)', href: 'https://www.nhs.uk/conditions/atopic-eczema/' },
      { label: 'NHS: Asthma triggers', href: 'https://www.nhs.uk/conditions/asthma/causes/' },
    ]),
  },

  sleep: {
    anchorId: 'understand',
    title: 'Sleep & recovery — the “why” before the products',
    intro: pick([
      'Sleep is regulated by timing (your body clock), light exposure, and sleep pressure (how long you’ve been awake). Most “sleep problems” are a mix of routine + environment + stress.',
      'The aim isn’t perfect sleep — it’s fewer bad nights. Small changes you can repeat tend to beat complex protocols.',
    ]),
    whyItMatters: pick([
      'Sleep affects mood, attention, appetite regulation, and training recovery — often more than any single supplement.',
      'A consistent wake time is one of the strongest anchors for improving sleep timing over weeks.',
      'If sleep is persistently poor, it’s worth screening for common underlying issues (e.g., sleep apnoea, restless legs, anxiety).',
    ]),
    healthEffects: pick([
      'Poor sleep can worsen stress tolerance and mood in the short term.',
      'Chronic sleep disruption can affect energy, concentration, and exercise recovery.',
      'Snoring and breathing pauses can indicate sleep-disordered breathing that benefits from medical assessment.',
    ]),
    commonCauses: pick([
      'Inconsistent wake time (especially weekend lie-ins) → body clock drift.',
      'Caffeine late in the day (a useful rule of thumb: stop ~8 hours before bed).',
      'Bright light/screens late evening without a wind-down routine.',
      'Bedroom too warm, too bright, or too noisy.',
      'Stress, rumination, or anxiety keeping the nervous system “on”.',
    ]),
    quickCheck: pick([
      'Track 7 days: wake time, caffeine timing, bedtime, and how long you take to fall asleep. Patterns show quickly.',
      'If you snore loudly, wake gasping, or feel very sleepy in daytime, consider screening for sleep apnoea.',
      'If you wake at 3–4am often, check alcohol, evening light, and stress load first.',
    ]),
    noSpendFirstSteps: pick([
      'Pick a consistent wake time (within ~60 minutes) for 2–3 weeks.',
      'Get bright light in the morning (a short outdoor walk helps).',
      'Move caffeine earlier and keep evenings dimmer and calmer.',
      'Cool the bedroom and reduce light/noise where possible.',
    ]),
    whenToGetHelp: pick([
      'If insomnia is persistent (weeks/months) and impacting daily function, consider talking to a clinician and exploring CBT‑I style approaches.',
      'If there are breathing symptoms (snoring, pauses), excessive daytime sleepiness, or safety concerns (driving), seek medical advice.',
    ]),
    readNext: pick([
      { label: 'Sleep naturally (simple guide)', href: '/blog/sleep-naturally-simple-guide' },
      { label: 'Natural sleep support: shortlist', href: '/best-natural-sleep-support' },
      { label: 'Movement basics (supports sleep)', href: '/movement' },
    ]),
    references: pick([
      { label: 'NHS: Sleep and tiredness', href: 'https://www.nhs.uk/live-well/sleep-and-tiredness/' },
      { label: 'NHS: Insomnia', href: 'https://www.nhs.uk/conditions/insomnia/' },
      { label: 'NHS: Snoring', href: 'https://www.nhs.uk/conditions/snoring/' },
    ]),
  },

  nutrition: {
    anchorId: 'understand',
    title: 'Nutrition — fundamentals that scale in real life',
    intro: pick([
      '“Good nutrition” is mostly about repeatable habits: food choice, portion structure, and consistency — not perfection or constant restriction.',
      'For most people, the highest leverage basics are: enough protein, enough fibre, enough plants, and fewer ultra‑processed defaults.',
    ]),
    whyItMatters: pick([
      'Stable energy and appetite tend to come from protein + fibre + regular meals.',
      'The modern food environment is engineered for overconsumption — structure and routines matter.',
      'Simple upgrades compound: the goal is a “default day” that works most days.',
    ]),
    healthEffects: pick([
      'Better food structure can support mood, concentration, and training recovery for many people.',
      'Adequate fibre supports gut function and regularity for many people.',
      'Over‑restriction often backfires; consistency usually beats intensity.',
    ]),
    commonCauses: pick([
      'Ultra‑processed “default” meals/snacks used on autopilot.',
      'Low protein at breakfast and lunch → evening hunger and cravings.',
      'Low fibre intake (few whole grains/beans/veg) and low food diversity.',
      'Skipping meals then overeating later due to stress and time pressure.',
    ]),
    quickCheck: pick([
      'For 7 days, note: breakfast protein, fruit/veg servings, and ultra‑processed snacks.',
      'If you’re often hungry late evening, check protein/fibre earlier in the day.',
      'Build a small list of “default meals” you actually cook and enjoy.',
    ]),
    noSpendFirstSteps: pick([
      'Pick one upgrade for 2 weeks (e.g., higher‑protein breakfast, fruit + yoghurt snack).',
      'Add one “plant” to lunch and dinner (veg, beans, berries) — keep it simple.',
      'Plan 2–3 pantry staples you’ll use weekly (oats, olive oil, tinned fish/beans).',
    ]),
    whenToGetHelp: pick([
      'If you have an eating disorder history or feel out of control with food, consider seeking qualified support.',
      'If you have persistent GI symptoms, unintentional weight loss, or symptoms that worry you, use NHS guidance and seek clinical advice.',
    ]),
    readNext: pick([
      { label: 'Label reading 101', href: '/blog/label-reading-101' },
      { label: 'Ultra‑processed foods', href: '/blog/ultra-processed-foods-what-they-are-and-why-they-matter' },
      { label: 'Nutrition hub', href: '/nutrition' },
    ]),
    references: pick([
      { label: 'NHS: Healthy eating', href: 'https://www.nhs.uk/live-well/eat-well/' },
      { label: 'NHS: Food labels', href: 'https://www.nhs.uk/live-well/eat-well/how-to-read-food-labels/' },
    ]),
  },

  'gut-health': {
    anchorId: 'understand',
    title: 'Gut health — fibre, diversity, and sensible expectations',
    intro: pick([
      '“Gut health” is often a mix of digestion, regularity, comfort, and how resilient your gut feels day to day.',
      'For most people, fibre + food diversity are the best “first levers” — supplements are optional.',
    ]),
    whyItMatters: pick([
      'Fibre feeds gut microbes and supports regularity for many people.',
      'Food diversity often correlates with more diverse gut microbes.',
      'A calm, consistent routine (meals, sleep, stress) often matters as much as any single product.',
    ]),
    healthEffects: pick([
      'Low fibre can contribute to constipation and sluggish digestion for some people.',
      'Some people are sensitive to specific fibres or foods; gradual change helps.',
      'Gut symptoms can also reflect medical issues — don’t ignore red flags.',
    ]),
    commonCauses: pick([
      'Low fibre intake and low plant diversity.',
      'Irregular meals and stress eating patterns.',
      'Very high alcohol intake or lots of ultra‑processed foods.',
      'Rapid diet changes (fibre jump) without hydration.',
    ]),
    quickCheck: pick([
      'Count your “plants” for a week (veg, fruit, beans, whole grains, nuts, seeds).',
      'Increase fibre gradually and drink enough water to match the change.',
      'If symptoms are new, severe, or persistent, check NHS guidance.',
    ]),
    noSpendFirstSteps: pick([
      'Add one fibre source daily: oats, beans, lentils, berries, or veg.',
      'Try 1–2 fermented foods per week if you like them (start small).',
      'Keep sleep and meal timing consistent for 2 weeks.',
    ]),
    whenToGetHelp: pick([
      'If you have blood in stool, unexplained weight loss, persistent severe pain, fever, or symptoms that worry you, seek medical advice.',
    ]),
    readNext: pick([
      { label: 'Fibre & gut health guide', href: '/blog/fibre-gut-health-practical-guide' },
      { label: 'Fermented foods shortlist', href: '/best-fermented-foods-sauerkraut-kimchi' },
      { label: 'Gut supplements (beginners)', href: '/best-gut-health-supplements-beginners' },
    ]),
    references: pick([
      { label: 'NHS: Constipation', href: 'https://www.nhs.uk/conditions/constipation/' },
      { label: 'NHS: Irritable bowel syndrome (IBS)', href: 'https://www.nhs.uk/conditions/irritable-bowel-syndrome-ibs/' },
    ]),
  },

  hydration: {
    anchorId: 'understand',
    title: 'Hydration — habits first, electrolytes only when they help',
    intro: pick([
      'Hydration is a behaviour. Most of the benefit comes from making water easier to drink consistently.',
      'Electrolytes can help on sweaty training days — but they aren’t necessary for everyone, every day.',
    ]),
    whyItMatters: pick([
      'Dehydration can affect energy, mood, and physical performance.',
      'For active people, replacing fluids (and sometimes sodium) supports training quality and recovery.',
    ]),
    healthEffects: pick([
      'Mild dehydration can cause headaches, fatigue, and reduced concentration.',
      'Over‑drinking plain water without electrolytes can be an issue in rare cases during very long endurance sessions.',
    ]),
    commonCauses: pick([
      'Busy days without a “water cue” (no bottle / no routine).',
      'Hot rooms, sauna, or high‑sweat training without planning.',
      'High caffeine intake without matching fluid intake.',
    ]),
    quickCheck: pick([
      'Use a bottle you like and refill it twice per day for 1–2 weeks.',
      'If you train, weigh yourself before/after a hard session (fluid losses show up quickly).',
    ]),
    noSpendFirstSteps: pick([
      'Make water automatic: drink on waking, with meals, and after training.',
      'Use flavour (lemon, cordial) if it increases intake.',
      'For sweaty sessions: salt your meals and consider electrolytes when needed.',
    ]),
    whenToGetHelp: pick([
      'If you have symptoms of severe dehydration, confusion, or feel very unwell, seek medical help.',
    ]),
    readNext: pick([
      { label: 'Water topic', href: '/topics/water' },
      { label: 'Reusable water bottle guide', href: '/blog/reusable-water-bottles-guide' },
      { label: 'Electrolytes guide', href: '/best-electrolytes-hydration-supplement-uk-ancient-and-brave-true-hydration' },
    ]),
    references: pick([
      { label: 'NHS: Dehydration', href: 'https://www.nhs.uk/conditions/dehydration/' },
    ]),
  },

  movement: {
    anchorId: 'understand',
    title: 'Movement — build a base layer before buying gear',
    intro: pick([
      'Movement is a daily practice. A little, often, beats occasional “hero workouts”.',
      'For most people, the most sustainable stack is: steps + 2 strength sessions + a little mobility.',
    ]),
    whyItMatters: pick([
      'Regular movement supports energy, mood, sleep, and long‑term health.',
      'Strength work supports joints and muscle mass as you age.',
    ]),
    healthEffects: pick([
      'Walking and strength training can support cardiovascular and metabolic health.',
      'Consistent movement often improves sleep quality for many people.',
    ]),
    commonCauses: pick([
      'Trying to do too much too fast → injury or burnout.',
      'All‑or‑nothing thinking (“if I can’t do 60 minutes, I won’t do anything”).',
      'Relying on motivation rather than routine and cues.',
    ]),
    quickCheck: pick([
      'Can you hit a consistent “minimum” on busy days (e.g., 20‑minute walk)?',
      'Is your plan realistic for your schedule and energy?',
    ]),
    noSpendFirstSteps: pick([
      'Set a daily step “floor” you can hit 5–6 days/week.',
      'Add two 20–30 minute strength sessions per week (bodyweight is fine).',
      'Do 5–10 minutes of mobility most days (hips, ankles, spine).',
    ]),
    whenToGetHelp: pick([
      'If you have chest pain, dizziness, or concerning symptoms with exercise, seek medical advice.',
    ]),
    readNext: pick([
      { label: 'Movement hub', href: '/movement' },
      { label: 'Walking guide', href: '/blog/walking-for-health-how-much-is-enough' },
      { label: 'Home strength basics', href: '/blog/home-strength-basics-busy-people' },
    ]),
    references: pick([
      { label: 'NHS: Exercise', href: 'https://www.nhs.uk/live-well/exercise/' },
    ]),
  },

  recovery: {
    anchorId: 'understand',
    title: 'Recovery — the basics before supplements',
    intro: pick([
      'Recovery is mostly sleep, load management, and food — not “magic” recovery products.',
      'If you’re always sore or tired, the first question is usually volume and sleep, not supplements.',
    ]),
    whyItMatters: pick([
      'Recovery affects training consistency and injury risk.',
      'Sleep and adequate protein support adaptation over time.',
    ]),
    healthEffects: pick([
      'Poor recovery can show up as persistent soreness, low mood, and poor sleep.',
      'Overtraining and stress can look similar — simple tracking helps.',
    ]),
    commonCauses: pick([
      'Increasing training volume too quickly.',
      'Not enough sleep or inconsistent sleep timing.',
      'Low protein intake or low overall calories while training hard.',
    ]),
    quickCheck: pick([
      'If soreness is constant, reduce volume and add rest days for 1–2 weeks.',
      'Check protein at breakfast/lunch; it often drops too low.',
    ]),
    noSpendFirstSteps: pick([
      'Aim for consistent sleep and a wind‑down routine.',
      'Increase volume gradually (10% rule as a rough guide).',
      'Walk on rest days — gentle movement helps.',
    ]),
    whenToGetHelp: pick([
      'If you have a new injury, severe pain, swelling, or symptoms that persist, seek clinical advice.',
    ]),
    readNext: pick([
      { label: 'Sleep topic', href: '/topics/sleep' },
      { label: 'Foam rollers & recovery tools', href: '/best-foam-rollers-recovery-tools' },
      { label: 'Movement hub', href: '/movement' },
    ]),
    references: pick([
      { label: 'NHS: Sleep and tiredness', href: 'https://www.nhs.uk/live-well/sleep-and-tiredness/' },
    ]),
  },

  'foot-strength': {
    anchorId: 'understand',
    title: 'Foot strength — build capacity gradually',
    intro: pick([
      'Foot strength is mostly about capacity: what your feet and calves can tolerate comfortably over time.',
      'Changing footwear changes load patterns. The key is gradual progression, not “overnight barefoot”.',
    ]),
    whyItMatters: pick([
      'Feet are the foundation for walking and training. Strong, resilient feet can support comfort and performance.',
      'Gradual changes reduce the risk of calf/Achilles overload.',
    ]),
    healthEffects: pick([
      'Too much too soon can irritate calves, Achilles, or the plantar fascia.',
      'A gradual plan supports adaptation and reduces injury risk.',
    ]),
    commonCauses: pick([
      'Switching to minimalist footwear and keeping the same walking volume.',
      'Jumping into barefoot running without a base.',
      'Weak intrinsic foot muscles due to years of stiff footwear (common).',
    ]),
    quickCheck: pick([
      'Start with short walks (10–20 minutes) in new footwear and increase slowly.',
      'Use simple foot exercises (toe yoga, calf raises) 2–3x/week.',
    ]),
    noSpendFirstSteps: pick([
      'Walk more in your normal shoes first (build volume).',
      'Add calf raises and foot mobility to your routine.',
      'Transition footwear gradually over 6–12 weeks.',
    ]),
    whenToGetHelp: pick([
      'If you have persistent pain, swelling, or symptoms that worsen, seek clinical advice.',
    ]),
    readNext: pick([
      { label: 'Walking shoes shortlist', href: '/best-walking-shoes-daily-steps-uk' },
      { label: 'Barefoot boots guide', href: '/best-barefoot-walking-boots-uk-vivobarefoot-tracker-winter-iii' },
      { label: 'Movement topic', href: '/topics/movement' },
    ]),
    references: pick([
      { label: 'NHS: Heel pain (plantar fasciitis)', href: 'https://www.nhs.uk/conditions/heel-pain/' },
    ]),
  },

  'skin-health': {
    anchorId: 'understand',
    title: 'Skin health — barrier first, then products',
    intro: pick([
      'Skin “health” is often barrier health: hydration, gentle cleansing, and avoiding irritants that keep you inflamed.',
      'For many people, fewer products used consistently works better than complex routines.',
    ]),
    whyItMatters: pick([
      'A calmer barrier often means less sensitivity and fewer flare‑ups.',
      'Sun protection is one of the most evidence‑supported skincare habits.',
    ]),
    healthEffects: pick([
      'Irritants and fragrance can contribute to dermatitis for some people.',
      'Very hot water and harsh detergents can worsen dryness for some people.',
    ]),
    commonCauses: pick([
      'Over‑cleansing, harsh actives, or many products at once.',
      'Fragrance and essential oils in products for sensitive skin.',
      'Hard water and very hot showers (can feel drying for some people).',
    ]),
    quickCheck: pick([
      'If your skin is reactive, try a 2‑week “reset”: gentle cleanser + moisturiser + SPF only.',
      'Check for “parfum/fragrance” on labels if you’re sensitive.',
    ]),
    noSpendFirstSteps: pick([
      'Use lukewarm showers and moisturise after bathing.',
      'Reduce fragranced laundry and cleaning products for a trial.',
      'Patch test new products and change one thing at a time.',
    ]),
    whenToGetHelp: pick([
      'If you have severe, persistent, or infected eczema/dermatitis, use NHS guidance and seek clinical advice.',
    ]),
    readNext: pick([
      { label: 'Fragrance‑free home topic', href: '/topics/fragrance-free' },
      { label: 'Mineral sunscreens (UK)', href: '/blog/best-mineral-sunscreens-uk' },
      { label: 'Low‑tox makeup (beginners)', href: '/blog/low-tox-makeup-beginners' },
    ]),
    references: pick([
      { label: 'NHS: Eczema (atopic eczema)', href: 'https://www.nhs.uk/conditions/atopic-eczema/' },
      { label: 'NHS: Contact dermatitis', href: 'https://www.nhs.uk/conditions/contact-dermatitis/' },
    ]),
  },

  'sun-protection': {
    anchorId: 'understand',
    title: 'Sun protection — habits + a sunscreen you’ll use',
    intro: pick([
      'Sun protection is mostly behaviour: shade, clothing, and timing. Sunscreen is the back‑up layer.',
      'The best sunscreen is the one you tolerate and apply consistently.',
    ]),
    whyItMatters: pick([
      'UV exposure contributes to skin damage and increases skin cancer risk.',
      'A consistent SPF habit can reduce long‑term sun damage.',
    ]),
    healthEffects: pick([
      'Sunburn increases skin damage risk; repeated burns raise long‑term risk.',
      'Some people are more sun sensitive and need extra protection.',
    ]),
    commonCauses: pick([
      'Relying on “it’s cloudy” — UV can still be significant.',
      'Under‑applying sunscreen or not reapplying when outside for long periods.',
      'Skipping hats/shade during peak sun.',
    ]),
    quickCheck: pick([
      'Check the UV index in warmer months if you spend time outdoors.',
      'Use a simple rule: two finger lengths for face + neck, reapply as needed.',
    ]),
    noSpendFirstSteps: pick([
      'Use shade, hats, and sleeves during peak sun.',
      'Plan outdoor walks earlier or later in the day when possible.',
    ]),
    whenToGetHelp: pick([
      'If you notice a changing mole or suspicious skin change, seek medical advice.',
    ]),
    readNext: pick([
      { label: 'Mineral sunscreens (UK)', href: '/blog/best-mineral-sunscreens-uk' },
      { label: 'Skin health topic', href: '/topics/skin-health' },
    ]),
    references: pick([
      { label: 'NHS: Sun safety', href: 'https://www.nhs.uk/live-well/seasonal-health/sunscreen-and-sun-safety/' },
      { label: 'NHS: Moles', href: 'https://www.nhs.uk/conditions/moles/' },
    ]),
  },
}

export function getTopicEdu(slug) {
  return TOPIC_EDU?.[slug] || null
}
