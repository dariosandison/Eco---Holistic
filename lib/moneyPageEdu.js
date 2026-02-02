// lib/moneyPageEdu.js
// Educational-first guidance for "money pages" (best-* routes).
// Goal: give readers the basics BEFORE any shortlist / purchase links.

const pick = (arr) => arr; // readability

const EDU = {
  starter: {
    intro: "If you’re new to low‑tox living, start with the swaps that reduce exposure and friction first.",
    topicHref: "/topics",
    topicLabel: "Start with topics",
    insightHref: "/blog/label-reading-101",
    insightLabel: "Read: label reading 101",
    startHere: pick([
      "Pick 1–2 rooms or routines (laundry, kitchen, sleep) — don’t overhaul everything at once.",
      "Swap high‑contact items first (skin, air, water, bedding).",
      "Aim for consistency, not perfection — the best plan is the one you’ll keep doing."
    ]),
    lookFor: pick([
      "Simple ingredients and clear usage instructions.",
      "Products you can maintain (refills, replacements, reorders).",
      "Return policies and realistic sizing for your home."
    ]),
    avoid: pick([
      "Buying a huge kit you won’t use.",
      "Vague marketing claims without specifics.",
      "Chasing “clean” trends that add stress or cost with little benefit."
    ]),
    criteria: pick([
      "High impact, low friction: changes you can do today.",
      "Clear downside check (cost, time, and risk).",
      "Consistency and measurement where it matters."
    ]),
    notFor: pick([
      "If a product adds complexity without solving a real problem, skip it.",
    ]),
    tools: null,
    references: pick([
      { label: "NHS: Eating a balanced diet", href: "https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/" },
      { label: "NHS: Physical activity guidelines (adults 19–64)", href: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/" },
    ]),

  },

  water: {
    intro: "Water filtering is mostly about choosing the right TYPE and budgeting for replacements.",
    topicHref: "/topics/water",
    topicLabel: "Water basics",
    insightHref: "/blog/water-filter-buying-guide-uk",
    insightLabel: "Read: water filter buying guide",
    startHere: pick([
      "Choose a type: jug (easy), under‑sink (convenient), gravity (big capacity).",
      "Check replacement cost — it’s the real long‑term cost.",
      "Make sure it fits your space (fridge shelf, under‑sink clearance, counter)."
    ]),
    lookFor: pick([
      "Clear filter replacement schedule and pricing.",
      "Credible testing/certification details (if claimed).",
      "Good customer support and easy-to-buy replacements."
    ]),
    avoid: pick([
      "Expensive replacements you won’t keep up with.",
      "“Removes 99%” claims without naming what and how.",
      "Overcomplicating it if your goal is simply better taste."
    ]),
    runningCosts: pick([
      "Check the price of replacement cartridges and how often you’ll change them for your household.",
      "Set a reminder — performance drops when replacements slip."
    ]),
  
    criteria: pick([
      "Type fit (jug / under-sink / gravity) for your home and daily use.",
      "Replacement cost and availability in the UK.",
      "Any published standards/certifications are clearly stated and match the claim.",
      "Everyday usability: capacity, speed, cleaning, and mess factor."
    ]),
    notFor: pick([
      "If you won’t replace cartridges on schedule (results become inconsistent).",
      "If you need a specific contaminant reduction: look for a named standard/certification and check compatibility."
    ]),
    tools: pick(["filters"]),
    references: pick([
      { label: "UK Drinking Water Inspectorate (DWI)", href: "https://www.dwi.gov.uk/" },
      { label: "GOV.UK: Check drinking water quality", href: "https://www.gov.uk/check-drinking-water-quality" },
      { label: "NSF: NSF/ANSI 42, 53 and 401 filtration standards", href: "https://www.nsf.org/knowledge-library/nsf-ansi-42-53-and-401-filtration-systems-standards" },
      { label: "WHO: Guidelines for drinking-water quality (4th ed.)", href: "https://www.who.int/publications-detail-redirect/9789241548151" },
    ]),
},

  air: {
    intro: "Air purifiers help most when they match the room size and run consistently.",
    topicHref: "/topics",
    topicLabel: "Topics (air basics)",
    insightHref: "/blog/indoor-air-quality-basics",
    insightLabel: "Read: indoor air basics",
    startHere: pick([
      "Measure the room (m²) and pick a purifier sized for that space.",
      "Run it regularly — a great unit switched off does nothing.",
      "Budget for filters (HEPA + carbon) if you’re sensitive to odours."
    ]),
    lookFor: pick([
      "A true HEPA filter and a clear CADR/room-size recommendation.",
      "Quiet mode you’ll actually tolerate at night.",
      "Easy filter availability (and transparent pricing)."
    ]),
    avoid: pick([
      "Units that are too small for the room.",
      "No mention of filter pricing or replacement schedule.",
      "Overpaying for features you won’t use (apps, extra features)."
    ]),
    runningCosts: pick([
      "Filters are the ongoing cost — check replacement prices before buying.",
      "If you need odour control, carbon capacity matters (and costs more)."
    ]),
  
    criteria: pick([
      "Room fit (room size guidance / airflow/CADR if published) and where you’ll place it.",
      "Noise and comfort in real use (sleep mode, vibration, lights).",
      "Replacement filters and how easy they are to buy in the UK.",
      "Energy use if it runs for long periods."
    ]),
    notFor: pick([
      "If the issue is an active leak or structural damp: fix the moisture source first.",
      "If you can’t ventilate at all: devices help, but fresh-air exchange still matters.",
      "If replacements are hard to get: you’ll end up with a dead device."
    ]),
    tools: pick(["filters", "electricity"]),
    references: pick([
      { label: "WHO: Indoor air quality — dampness and mould", href: "https://www.who.int/publications/i/item/9789289041683" },
      { label: "Shelter (England): Risks of damp and mould", href: "https://england.shelter.org.uk/housing_advice/repairs/damp_mould_social_housing/damp_mould_risks" },
    ]),
},

  shower: {
    intro: "Most shower filters are about skin/hair comfort and reducing harshness — not magic water transformation.",
    topicHref: "/topics/water",
    topicLabel: "Water basics",
    insightHref: "/blog/shower-filter-basics-uk",
    insightLabel: "Read: shower filter basics",
    startHere: pick([
      "If you’re in a hard‑water area, scale + dryness can be the main issue.",
      "Prioritise easy cartridge replacement.",
      "Know what you want: comfort for skin/hair vs reducing smell/irritation."
    ]),
    lookFor: pick([
      "Simple installation (no plumber) and sturdy fittings.",
      "Cartridge replacement cost you can afford.",
      "Clear instructions for cartridge schedule."
    ]),
    avoid: pick([
      "Overpromises about removing everything (most don’t).",
      "Cartridges that are hard to find or expensive.",
      "Buying without checking your shower fitting type."
    ]),
    runningCosts: pick([
      "Cartridges are the recurring cost — set a replacement reminder."
    ]),
  
    criteria: pick([
      "Practical fit (hose vs fixed, thread size, and clearance).",
      "Replacement cartridge cost and frequency.",
      "Build quality and leak risk (gaskets, casing, certifications if published)."
    ]),
    notFor: pick([
      "If you won’t keep up with replacements (it becomes wasted spend).",
      "If your main goal is drinking water quality — use a point-of-use drinking filter instead."
    ]),
    tools: pick(["filters"]),
    references: pick([
      { label: "UK Drinking Water Inspectorate (DWI)", href: "https://www.dwi.gov.uk/" },
      { label: "NSF: NSF/ANSI 42, 53 and 401 filtration standards", href: "https://www.nsf.org/knowledge-library/nsf-ansi-42-53-and-401-filtration-systems-standards" },
    ]),
},

  laundry: {
    intro: "Laundry is a high-impact swap because clothing touches skin all day.",
    topicHref: "/topics",
    topicLabel: "Topics (fragrance-free home)",
    insightHref: "/blog/fragrance-free-laundry-basics",
    insightLabel: "Read: fragrance-free laundry basics",
    startHere: pick([
      "Start by removing strong fragrance — it’s the easiest win for many people.",
      "Use the minimum effective dose (more detergent often rinses worse).",
      "If you react easily, avoid added fragrance + harsh optical brighteners."
    ]),
    lookFor: pick([
      "Fragrance-free or genuinely low scent.",
      "Clear ingredient approach and simple dosing.",
      "Good rinsing performance (especially for sensitive skin)."
    ]),
    avoid: pick([
      "Strong ‘fresh’ perfumes that linger on fabrics.",
      "Overdosing detergent or mixing too many boosters.",
      "Assuming “eco” always means low‑irritant."
    ]),
  
    criteria: pick([
      "Ingredient simplicity and fragrance profile (if any).",
      "Rinse performance and residue risk at typical wash temperatures.",
      "Practicality: dosing, packaging, and availability."
    ]),
    notFor: pick([
      "If you have active dermatitis flare-ups: patch test and consider a clinician’s advice.",
      "If you regularly overload the machine or under-dose: results will be inconsistent."
    ]),
    tools: null,
    references: pick([
      { label: "NHS: Contact dermatitis — treatment & avoiding triggers", href: "https://www.nhs.uk/conditions/contact-dermatitis/treatment/" },
      { label: "NHS: Discoid eczema — treatment & avoiding soaps/detergents", href: "https://www.nhs.uk/conditions/discoid-eczema/treatment/" },
      { label: "NHS: Emollients (soap substitutes)", href: "https://www.nhs.uk/tests-and-treatments/emollients/" },
    ]),
},

  kitchen: {
    intro: "Kitchen upgrades work best when they’re minimal, durable, and easy to maintain.",
    topicHref: "/topics",
    topicLabel: "Start with topics",
    insightHref: "/blog/low-tox-kitchen",
    insightLabel: "Read: low‑tox kitchen basics",
    startHere: pick([
      "Don’t buy a full set — replace one pan/knife/board at a time.",
      "Prioritise what you use daily (frying pan, saucepan, storage).",
      "Maintenance matters: a ‘safe’ product you hate using won’t stick."
    ]),
    lookFor: pick([
      "Materials you can maintain (stainless, cast iron, enamel).",
      "Sizes you’ll actually use (one pan you love beats a cupboard of options).",
      "Clear care instructions and reputable warranty/returns."
    ]),
    avoid: pick([
      "Overpaying for a full bundle you won’t use.",
      "Materials that need lots of fuss if you’re busy.",
      "‘Miracle’ coatings with unclear longevity."
    ]),
  
    criteria: pick([
      "Materials and coatings that match your cooking style (heat, oil use, utensils).",
      "Ease of cleaning and long-term durability.",
      "Avoiding unnecessary extras that don’t improve results."
    ]),
    notFor: pick([
      "If you hate maintenance: avoid high-care items you won’t look after.",
    ]),
    tools: null,
    references: pick([
      { label: "NHS: Eating a balanced diet", href: "https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/" },
    ]),
},

  sleep: {
    intro: "Better sleep is usually fewer bad nights — the smallest changes first.",
    topicHref: "/topics/sleep",
    topicLabel: "Sleep basics",
    insightHref: "/blog/sleep-naturally-simple-guide",
    insightLabel: "Read: the cornerstone sleep guide",
    startHere: pick([
      "Morning light + consistent wake time are the biggest levers.",
      "Caffeine cut‑off ~8 hours before bed helps most people.",
      "Cool, dark room beats expensive gadgets."
    ]),
    lookFor: pick([
      "Comfort upgrades that reduce friction (blackout, bedding, noise buffer).",
      "Supplements with realistic expectations (start low; check interactions).",
      "Simple habits you can repeat nightly."
    ]),
    avoid: pick([
      "Anything promising “knockout” results.",
      "Overcomplicated stacks and expensive routines.",
      "Strong fragrance in the bedroom (often backfires)."
    ]),
  
    criteria: pick([
      "Does it solve a clear problem (light, noise, temperature, routine) rather than adding complexity?",
      "Comfort and consistency over gimmicks.",
      "If it’s ingestible: clear dosing, cautions, and realistic claims."
    ]),
    notFor: pick([
      "If sleep issues are persistent or severe: consider medical advice in parallel.",
      "Avoid mixing multiple sedating products without professional guidance."
    ]),
    tools: null,
    references: pick([
      { label: "NHS: Sleep better (Every Mind Matters)", href: "https://www.nhs.uk/every-mind-matters/coronavirus/how-to-fall-asleep-faster-and-sleep-better/" },
      { label: "NHS: Self-help tips to fight tiredness", href: "https://www.nhs.uk/live-well/sleep-and-tiredness/self-help-tips-to-fight-fatigue/" },
      { label: "NHS: About melatonin", href: "https://www.nhs.uk/medicines/melatonin/about-melatonin/" },
    ]),
},

  supplements: {
    intro: "With supplements: start conservative, check interactions, and prioritise food + basics first.",
    topicHref: "/topics",
    topicLabel: "Start with topics",
    insightHref: "/blog/supplements-basics",
    insightLabel: "Read: supplement basics",
    startHere: pick([
      "Start with one thing at a time so you can tell what helps.",
      "Check interactions if you’re pregnant, medicated, or managing a condition.",
      "Aim for consistency and basics (sleep, diet, movement) first."
    ]),
    lookFor: pick([
      "Transparent ingredients and sensible dosages.",
      "Reputable brands with basic testing/quality statements.",
      "A plan to reassess — supplements aren’t always forever."
    ]),
    avoid: pick([
      "High‑dose ‘all-in-one’ stacks with lots of extras.",
      "Claims that sound medical or guaranteed.",
      "Buying multiple products at once and guessing what worked."
    ]),
  
    criteria: pick([
      "Clear reason to take it (goal, deficiency risk, diet context).",
      "Dose and form are straightforward, with transparent labelling.",
      "Avoiding inflated claims and proprietary blends when possible."
    ]),
    notFor: pick([
      "If you take prescription medications: check for interactions first.",
      "If you’re pregnant/breastfeeding or have chronic conditions: get clinician advice.",
    ]),
    tools: null,
    references: pick([
      { label: "NHS: Vitamin D supplements (UK guidance)", href: "https://www.nhs.uk/conditions/coronavirus-covid-19/people-at-higher-risk/get-vitamin-d-supplements/" },
      { label: "NHS: Probiotics", href: "https://www.nhs.uk/tests-and-treatments/probiotics/" },
      { label: "NHS: Herbal medicines", href: "https://www.nhs.uk/tests-and-treatments/herbal-medicines/" },
      { label: "GOV.UK (MHRA): Report suspected adverse reactions (Yellow Card)", href: "https://www.gov.uk/drug-safety-update/herbal-and-homeopathic-medicines-reminder-to-be-vigilant-for-suspected-adverse-reactions-and-to-report-them-to-the-yellow-card-scheme" },
    ]),
},

  nutrition: {
    intro: "Food shortlists work best when they’re simple: staples you’ll actually eat, stored properly.",
    topicHref: "/nutrition",
    topicLabel: "Nutrition basics",
    insightHref: "/blog/single-ingredient-staples-that-actually-matter",
    insightLabel: "Read: single-ingredient staples",
    startHere: pick([
      "Pick staples you’ll use weekly (oats, olive oil, seeds) — not ‘perfect’ superfoods.",
      "Storage matters: light/heat/air ruin freshness faster than people think.",
      "Choose the form you’ll actually use (ground vs whole; rolled vs jumbo)."
    ]),
    lookFor: pick([
      "Freshness cues (harvest/pack dates when available).",
      "Simple ingredients and sensible packaging.",
      "Storage instructions that match your routine."
    ]),
    avoid: pick([
      "Buying large amounts you won’t finish before quality drops.",
      "Falling for expensive ‘health halo’ branding.",
      "Ignoring storage (especially for oils and ground seeds)."
    ]),
  
    criteria: pick([
      "Whole-food baseline first: protein, fibre, and enough calories for your goals.",
      "Fewer ingredients and fewer ultra-processed extras where possible.",
      "Practicality: what you can repeat weekly without stress."
    ]),
    notFor: pick([
      "If you’re managing a medical condition: use clinician advice as your anchor.",
    ]),
    tools: null,
    references: pick([
      { label: "NHS: Eating a balanced diet (Eatwell Guide)", href: "https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/" },
    ]),
},

  movement: {
    intro: "Movement gear should reduce friction: comfortable basics you’ll use weekly.",
    topicHref: "/movement",
    topicLabel: "Movement basics",
    insightHref: "/blog/home-strength-basics-busy-people",
    insightLabel: "Read: home strength basics",
    startHere: pick([
      "Choose the simplest tool that matches your routine (bands, shoes, mat).",
      "Comfort beats ‘pro’ features for most people.",
      "A small kit used weekly beats a big kit used once."
    ]),
    lookFor: pick([
      "Comfort + durability.",
      "Sizing that matches your body and space.",
      "Easy returns if fit/feel isn’t right."
    ]),
    avoid: pick([
      "Overbuying ‘advanced’ gear too early.",
      "Shoes/gear that changes your form because it’s uncomfortable.",
      "Buying without measuring your space."
    ]),
  
    criteria: pick([
      "A repeatable plan you can stick to (progression beats novelty).",
      "Load management: recovery, sleep, and technique.",
      "Gear only when it removes friction or improves consistency."
    ]),
    notFor: pick([
      "If pain is sharp or worsening: get checked before pushing through.",
      "Avoid ‘all-or-nothing’ plans you can’t repeat week to week."
    ]),
    tools: null,
    references: pick([
      { label: "NHS: Physical activity guidelines (adults 19–64)", href: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-for-adults-aged-19-to-64/" },
      { label: "GOV.UK: Physical activity guidelines overview", href: "https://www.gov.uk/government/news/new-physical-activity-guidelines" },
    ]),
},
};

function categoryFromSlug(slug) {
  const s = slug.toLowerCase();
  if (s.includes("water-filter")) return "water";
  if (s.includes("air-purifier")) return "air";
  if (s.includes("shower-filter")) return "shower";
  if (s.includes("laundry")) return "laundry";
  if (s.includes("cookware") || s.includes("kitchen")) return "kitchen";
  if (s.includes("humidifier") || s.includes("dehumid") || s.includes("damp") || s.includes("mould")) return "air";
  if (s.includes("sleep")) return "sleep";
  if (s.includes("supplement") || s.includes("adaptogen") || s.includes("herbal") || s.includes("immune") || s.includes("gut-health")) return "supplements";

  // nutrition staples
  if (s.includes("oats") || s.includes("chia") || s.includes("flax") || s.includes("olive-oil") || s.includes("matcha") || s.includes("protein") || s.includes("snacks") || s.includes("cooking-oils") || s.includes("fermented") || s.includes("anti-inflammatory") || s.includes("detox")) return "nutrition";

  // movement gear
  if (s.includes("tracker") || s.includes("scale") || s.includes("bands") || s.includes("yoga") || s.includes("walking-shoes") || s.includes("foam-roller") || s.includes("activewear")) return "movement";

  if (s.includes("low-tox") || s.includes("starter-kit")) return "starter";
  return "starter";
}

export function getMoneyPageEdu(slug) {
  const key = categoryFromSlug(slug);
  return EDU[key] || EDU.starter;
}
