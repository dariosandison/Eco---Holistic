// lib/shortlistsData.js
// Centralised shortlist metadata so multiple pages (Shortlists, Search, Related blocks)
// can share the same source of truth.

// NOTE: Keep labels consistent with URL slugs, and keep the list intentionally short.
// Tags power filtering and "related shortlists" suggestions.

export const SHORTLIST_SECTIONS = [
  {
    title: 'Home essentials',
    desc: 'Air, water, humidity and the highest‑impact home swaps.',
    items: [
      {
        label: 'Air purifiers for allergies (UK)',
        href: '/best-air-purifiers-allergies-uk',
        tag: 'Air',
        desc: 'Shortlist for common UK rooms with clear size guidance and trade‑offs.',
        bestFor: 'Allergies + general air comfort',
        tradeOff: 'Filter costs matter long‑term',
        updated: '2026-02-08',
      },
      {
        label: 'Air purifiers for small flats (UK)',
        href: '/best-air-purifiers-small-flats-uk',
        tag: 'Air',
        desc: 'Compact picks that make sense in smaller rooms.',
        bestFor: 'Bedrooms + small living spaces',
        tradeOff: 'Noise vs performance',
        updated: '2026-02-08',
      },
      {
        label: 'Dehumidifiers for damp & mould (UK)',
        href: '/best-dehumidifiers-damp-mould-uk',
        tag: 'Humidity',
        desc: 'Shortlist with the key spec checks and real‑world trade‑offs.',
        bestFor: 'Damp, condensation, mould risk',
        tradeOff: 'Noise + power use',
        updated: '2026-02-08',
      },
      {
        label: 'Water filters (UK)',
        href: '/best-water-filters-uk',
        tag: 'Water',
        desc: 'Jugs vs under‑sink vs countertop: keep it simple, check running costs.',
        bestFor: 'Taste + convenience',
        tradeOff: 'Replacement filters',
        updated: '2026-02-02',
      },
      {
        label: 'Shower filters (UK hard water)',
        href: '/best-shower-filters-uk-hard-water',
        tag: 'Shower',
        desc: 'Comfort‑first shortlist for hard‑water homes.',
        bestFor: 'Dry skin + hair feel',
        tradeOff: 'Cartridges need replacing',
        updated: '2026-02-08',
      },
      {
        label: 'Fragrance‑free laundry detergents (UK)',
        href: '/best-fragrance-free-laundry-detergents-uk',
        tag: 'Laundry',
        desc: 'Sensitive‑home options with ingredients to avoid.',
        bestFor: 'Sensitive skin + bedding',
        tradeOff: 'Availability varies',
        updated: '2026-02-08',
      },
    ],
  },
  {
    title: 'Sleep',
    desc: 'Simple, conservative options to support a better routine.',
    items: [
      {
        label: 'Natural sleep support',
        href: '/best-natural-sleep-support',
        tag: 'Sleep',
        desc: 'A short, sensible shortlist for wind‑down support (UK).',
        bestFor: 'Winding down',
        tradeOff: 'Responses vary',
        updated: '2026-02-08',
      },
      {
        label: 'Natural sleep remedies (non‑pharma)',
        href: '/best-natural-sleep-remedies-non-pharma',
        tag: 'Sleep',
        desc: 'Non‑pharma support options with clear expectations.',
        bestFor: 'Low‑risk options',
        tradeOff: 'Not magic fixes',
        updated: '2026-02-08',
      },
      {
        label: 'Humidifiers for bedrooms (UK)',
        href: '/best-humidifiers-for-bedrooms-uk',
        tag: 'Humidity',
        desc: 'Shortlist for dry rooms + sleep comfort.',
        bestFor: 'Dry air, night comfort',
        tradeOff: 'Cleaning is non‑negotiable',
        updated: '2026-02-08',
      },
    ],
  },
  {
    title: 'Nutrition staples (UK)',
    desc: 'Simple single‑ingredient staples that compound over time.',
    items: [
      {
        label: 'Extra virgin olive oil (UK)',
        href: '/best-extra-virgin-olive-oil-uk',
        tag: 'Staples',
        desc: 'A shortlist focused on freshness and sensible buying.',
        bestFor: 'Daily cooking + salads',
        tradeOff: 'Freshness matters',
        updated: '2026-02-08',
      },
      {
        label: 'Organic oats (UK)',
        href: '/best-organic-oats-uk',
        tag: 'Staples',
        desc: 'Jumbo/rolled/steel‑cut: simple picks, no overwhelm.',
        bestFor: 'Daily breakfast',
        tradeOff: 'Buy what you’ll finish',
        updated: '2026-02-08',
      },
      {
        label: 'Chia seeds (UK)',
        href: '/best-chia-seeds-uk',
        tag: 'Superfoods',
        desc: 'Simple add‑ins for oats, yoghurt, smoothies.',
        bestFor: 'Fibre + easy meals',
        tradeOff: 'Hydration matters',
        updated: '2026-02-08',
      },
      {
        label: 'Flaxseed (UK)',
        href: '/best-flaxseed-uk',
        tag: 'Superfoods',
        desc: 'Ground vs whole: easy, practical shortlist.',
        bestFor: 'Fibre + healthy fats',
        tradeOff: 'Freshness + storage',
        updated: '2026-02-08',
      },
      {
        label: 'Organic matcha (UK)',
        href: '/best-organic-matcha-uk',
        tag: 'Drinks',
        desc: 'Starter‑friendly options with clear buying cues.',
        bestFor: 'Gentle caffeine swap',
        tradeOff: 'Taste varies a lot',
        updated: '2026-02-08',
      },
    ],
  },
  {
    title: 'Supplements (beginner‑friendly)',
    desc: 'Conservative, UK‑friendly picks with clear expectations.',
    items: [
      {
        label: 'Gut health supplements (beginners)',
        href: '/best-gut-health-supplements-beginners',
        tag: 'Gut',
        desc: 'Shortlist for simple, low‑risk gut support options.',
        bestFor: 'Digestion support',
        tradeOff: 'Start with food first',
        updated: '2026-02-08',
      },
      {
        label: 'Natural immune support',
        href: '/best-natural-immune-support-remedies',
        tag: 'Supplements',
        desc: 'Shortlist of simple immune‑support options.',
        bestFor: 'Seasonal support',
        tradeOff: 'Not a substitute for basics',
        updated: '2026-02-08',
      },
      {
        label: 'Creatine (UK)',
        href: '/optimum-nutrition-platinum-creatine-plus',
        tag: 'Supplements',
        desc: 'Creatine basics + a simple product page.',
        bestFor: 'Strength + performance',
        tradeOff: 'Consistency required',
        updated: '2026-02-08',
      },
    ],
  },
  {
    title: 'Movement gear',
    desc: 'Simple gear that removes friction — not “must‑have” toys.',
    items: [
      {
        label: 'Resistance bands (home workouts)',
        href: '/best-resistance-bands-home-workouts',
        tag: 'Strength',
        desc: 'Shortlist for bands that cover most home training.',
        bestFor: 'Home strength',
        tradeOff: 'Progressive overload needs planning',
        updated: '2026-02-08',
      },
      {
        label: 'Yoga mats (grip + comfort)',
        href: '/best-yoga-mats-grip-comfort',
        tag: 'Mobility',
        desc: 'A short list focused on grip and comfort.',
        bestFor: 'Mobility + floor work',
        tradeOff: 'Thickness vs stability',
        updated: '2026-02-08',
      },
      {
        label: 'Walking shoes for daily steps (UK)',
        href: '/best-walking-shoes-daily-steps-uk',
        tag: 'Walking',
        desc: 'Comfort‑first shortlist for regular steps.',
        bestFor: 'Daily walking',
        tradeOff: 'Fit matters more than brand',
        updated: '2026-02-08',
      },
      {
        label: 'Foam rollers (recovery)',
        href: '/best-foam-rollers-recovery',
        tag: 'Recovery',
        desc: 'Simple options for mobility + recovery.',
        bestFor: 'Tightness + mobility work',
        tradeOff: 'Technique matters',
        updated: '2026-02-08',
      },
      {
        label: 'Fitness trackers (beginners, UK)',
        href: '/best-fitness-trackers-beginners-uk',
        tag: 'Trackers',
        desc: 'Simple tracking without overthinking.',
        bestFor: 'Accountability',
        tradeOff: 'More data isn’t always better',
        updated: '2026-02-08',
      },
      {
        label: 'Smart scales (UK)',
        href: '/best-smart-scales-uk',
        tag: 'Scales',
        desc: 'Simple weigh‑in routines (with sensible expectations).',
        bestFor: 'Trend tracking',
        tradeOff: 'Body‑comp numbers are estimates',
        updated: '2026-02-08',
      },
      {
        label: 'Activewear basics (UK)',
        href: '/best-activewear-basics-uk',
        tag: 'Clothing',
        desc: 'Comfort‑first basics that make movement easier.',
        bestFor: 'Consistency',
        tradeOff: 'Materials vary by use',
        updated: '2026-02-08',
      },
    ],
  },
]

export function flattenShortlists(sections = SHORTLIST_SECTIONS) {
  const out = []
  for (const s of sections || []) {
    for (const it of (s.items || [])) {
      out.push({ ...it, _sectionTitle: s.title })
    }
  }
  return out
}
