// lib/picksSections.js

function imgForTag(tag) {
  const t = String(tag || '').toLowerCase()
  if (t === 'water') return '/images/photography/thumbs/water.png'
  if (t === 'air') return '/images/photography/thumbs/air-quality.png'
  if (t === 'laundry') return '/images/photography/thumbs/laundry.png'
  if (t === 'sleep') return '/images/photography/thumbs/sleep.png'
  if (t === 'humidity') return '/images/photography/thumbs/air-quality.png'

  // Nutrition
  if (['staples', 'superfoods', 'drinks', 'gut', 'supplements'].includes(t)) return '/images/photography/thumbs/nutrition.svg'

  // Movement
  if (
    ['movement', 'strength', 'mobility', 'recovery', 'walking', 'trackers', 'fitness', 'scales', 'bands', 'footwear', 'clothing', 'body comp', 'body comp'].includes(t)
  ) {
    return '/images/photography/thumbs/movement.svg'
  }

  if (t === 'kitchen' || t === 'shower') return '/images/photography/thumbs/home.svg'
  return '/images/photography/thumbs/home.svg'
}

function withImages(items = []) {
  return items.map((it) => ({ ...it, image: it.image || imgForTag(it.tag) }))
}

export function getPicksSections() {
  const home = withImages([
    {
      href: '/best-water-filters-uk',
      label: 'Water filters (UK): shortlist',
      desc: 'Jugs vs under-sink vs countertop: clear trade-offs.',
      tag: 'Water',
    },
    {
      href: '/best-air-purifiers-allergies-uk',
      label: 'Air purifiers for allergies (UK): shortlist',
      desc: 'Shortlist by room size and common use-cases.',
      tag: 'Air',
    },
    {
      href: '/best-air-purifiers-small-flats-uk',
      label: 'Air purifiers for small flats (UK): shortlist',
      desc: 'Compact choices with the main trade-offs.',
      tag: 'Air',
    },
    {
      href: '/best-dehumidifiers-damp-mould-uk',
      label: 'Dehumidifiers for damp & mould (UK): shortlist',
      desc: 'What to buy first for damp rooms and laundry drying.',
      tag: 'Humidity',
    },
    {
      href: '/best-fragrance-free-laundry-detergents-uk',
      label: 'Fragrance-free laundry detergents (UK): shortlist',
      desc: 'High-contact swap with ingredient notes.',
      tag: 'Laundry',
    },
    {
      href: '/best-non-toxic-cookware-starter',
      label: 'Non-toxic cookware: starter shortlist',
      desc: 'Simple first upgrades to start with.',
      tag: 'Kitchen',
    },
    {
      href: '/best-shower-filters-uk-hard-water',
      label: 'Shower filters (UK hard water): shortlist',
      desc: 'If your hair/skin hates hard water, start here.',
      tag: 'Water',
    },
    {
      href: '/best-humidifiers-for-bedrooms-uk',
      label: 'Humidifiers for bedrooms (UK): shortlist',
      desc: 'Dry air comfort options + maintenance reminders.',
      tag: 'Humidity',
    },
    {
      href: '/best-low-tox-products-for-beginners',
      label: 'Low-tox products for beginners: shortlist',
      desc: 'A small set of practical first swaps.',
      tag: 'Laundry',
    },
  ])

  const sleep = withImages([
    {
      href: '/best-natural-sleep-support',
      label: 'Natural sleep support: shortlist',
      desc: 'Comfort-first options across routine, environment, and gentle supports.',
      tag: 'Sleep',
    },
    {
      href: '/best-natural-sleep-remedies-non-pharma',
      label: 'Natural sleep remedies (non‑pharma)',
      desc: 'What is supported vs what is uncertain.',
      tag: 'Sleep',
    },
  ])

  const nutrition = withImages([
    {
      href: '/best-extra-virgin-olive-oil-uk',
      label: 'Extra virgin olive oil (UK): shortlist',
      desc: 'Freshness, storage, and label cues.',
      tag: 'Staples',
    },
    {
      href: '/best-organic-oats-uk',
      label: 'Organic oats (UK): shortlist',
      desc: 'Rolled vs jumbo vs steel-cut — choose what you’ll use.',
      tag: 'Staples',
    },
    {
      href: '/best-chia-seeds-uk',
      label: 'Chia seeds (UK): shortlist',
      desc: 'Easy add-in for puddings, oats, smoothies.',
      tag: 'Superfoods',
    },
    {
      href: '/best-ground-flaxseed-uk',
      label: 'Ground flaxseed (UK): shortlist',
      desc: 'Freshness + storage + easy daily uses.',
      tag: 'Superfoods',
    },
    {
      href: '/best-organic-matcha-uk',
      label: 'Matcha (UK): what to buy',
      desc: 'Everyday vs ceremonial-style and what to look for.',
      tag: 'Drinks',
    },
    {
      href: '/best-fermented-foods-sauerkraut-kimchi',
      label: 'Fermented foods to start with',
      desc: 'Sauerkraut & kimchi with simple ingredients.',
      tag: 'Gut',
    },
    {
      href: '/best-anti-inflammatory-foods-shopping-list',
      label: 'Anti-inflammatory foods: shopping list',
      desc: 'A simple UK shopping list you can use weekly.',
      tag: 'Staples',
    },
  ])

  const movement = withImages([
    {
      href: '/best-fitness-trackers-beginners-uk',
      label: 'Fitness trackers for beginners (UK): shortlist',
      desc: 'Steps, sleep, heart-rate: what matters.',
      tag: 'Trackers',
    },
    {
      href: '/best-smart-scales-uk',
      label: 'Smart scales (UK): shortlist',
      desc: 'Use trend lines rather than single readings.',
      tag: 'Scales',
    },
    {
      href: '/best-resistance-bands-home-workouts',
      label: 'Resistance bands for home workouts: shortlist',
      desc: 'A small kit that covers most needs.',
      tag: 'Strength',
    },
    {
      href: '/best-walking-shoes-daily-steps-uk',
      label: 'Walking shoes for daily steps (UK): shortlist',
      desc: 'Comfort-first options for regular walking.',
      tag: 'Walking',
    },
    {
      href: '/best-yoga-mats-grip-comfort',
      label: 'Yoga mats for grip & comfort',
      desc: 'Grip and joint comfort for mobility and floor work.',
      tag: 'Mobility',
    },
    {
      href: '/best-foam-rollers-recovery-tools',
      label: 'Foam rollers & recovery tools',
      desc: 'Simple recovery tools that help you keep moving.',
      tag: 'Recovery',
    },
    {
      href: '/best-activewear-basics-uk',
      label: 'Activewear basics (UK)',
      desc: 'Comfort-first basics for walking and training.',
      tag: 'Clothing',
    },
  ])

  return [
    { title: 'Home (low-tox, air, water)', desc: 'High-impact basics for most homes.', items: home },
    { title: 'Sleep', desc: 'Comfort and environment-focused shortlists.', items: sleep },
    { title: 'Nutrition', desc: 'Single-ingredient staples and simple add-ins.', items: nutrition },
    { title: 'Movement', desc: 'Walking, strength, mobility — and gear basics for regular use.', items: movement },
  ]
}
