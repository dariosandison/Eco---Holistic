// lib/picksSections.js

function hashToIndex(str, n) {
  if (!str || !n) return 0
  let h = 0
  for (let i = 0; i < str.length; i += 1) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0
  }
  return h % n
}

function imgForTag(tag, seed = '') {
  const t = String(tag || '').toLowerCase()

  const pools = {
    water: [
      '/images/photography/thumbs/cards/ceramic-cups-and-a-carafe-on-a-kitchen-counter-calm-hydration-vibe.jpg',
      '/images/photography/thumbs/cards/water-hero.jpg',
    ],
    air: [
      '/images/photography/thumbs/cards/air-purifier-beside-a-plant-in-a-minimalist-bedroom-daylight-through-curtains.jpg',
      '/images/photography/thumbs/cards/condensation-on-a-window-with-soft-morning-light-minimal-interior-background.jpg',
      '/images/photography/thumbs/cards/air-quality-hero.jpg',
      '/images/photography/thumbs/cards/bathroom-extractor-fan-area-no-branding-clean-tiles-natural-daylight.jpg',
    ],
    laundry: [
      '/images/photography/thumbs/cards/laundry-hero.jpg',
      '/images/photography/thumbs/cards/cleaning-hero.jpg',
    ],
    sleep: [
      '/images/photography/thumbs/cards/bedside-table-with-a-book-and-mug-soft-light-through-curtains.jpg',
      '/images/photography/thumbs/cards/calm-evening-routine-scene-with-tea-and-book-on-bed-neutral-tones.jpg',
      '/images/photography/thumbs/cards/sleep-hero.jpg',
    ],
    nutrition: [
      '/images/photography/thumbs/cards/cooked-oats-and-seeds-in-small-ceramic-bowls-on-wooden-table-soft-daylight.jpg',
      '/images/photography/thumbs/cards/nutrition-hero.jpg',
    ],
    movement: [
      '/images/photography/thumbs/cards/movement-hero.jpg',
    ],
    wellness: [
      '/images/photography/thumbs/cards/close-up-of-hands-holding-a-warm-mug-near-a-window-shallow-depth-of-field.jpg',
      '/images/photography/thumbs/cards/calm-living-room-corner-with-linen-throw-and-houseplant-by-a-window-negative-space.jpg',
      '/images/photography/thumbs/cards/home-hero-small.jpg',
    ],
    home: [
      '/images/photography/thumbs/cards/home-hero-small.jpg',
      '/images/photography/thumbs/cards/calm-living-room-corner-with-linen-throw-and-houseplant-by-a-window-negative-space.jpg',
      '/images/photography/thumbs/cards/close-up-of-hands-holding-a-warm-mug-near-a-window-shallow-depth-of-field.jpg',
    ],
  }

  let pool = pools.home

  if (t === 'water' || t === 'shower') pool = pools.water
  else if (t === 'air' || t === 'humidity') pool = pools.air
  else if (t === 'laundry' || t === 'cleaning') pool = pools.laundry
  else if (t === 'sleep') pool = pools.sleep
  else if (['staples', 'superfoods', 'drinks', 'gut'].includes(t)) pool = pools.nutrition
  else if (t === 'supplements') pool = pools.wellness
  else if (
    ['movement', 'strength', 'mobility', 'recovery', 'walking', 'trackers', 'fitness', 'scales', 'bands', 'footwear', 'clothing', 'body comp'].includes(t)
  ) {
    pool = pools.movement
  } else if (t === 'kitchen') pool = pools.home

  return pool[hashToIndex(String(seed || tag || ''), pool.length)]
}

function withImages(items = []) {
  return items.map((it) => ({ ...it, image: it.image || imgForTag(it.tag, it.href || it.label) }))
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
