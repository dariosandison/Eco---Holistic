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
}

export function getTopicEdu(slug) {
  return TOPIC_EDU?.[slug] || null
}
