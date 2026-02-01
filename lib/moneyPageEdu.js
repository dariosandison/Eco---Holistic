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
