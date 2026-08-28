// lib/moneyPageLinks.js
// Internal routing for legacy buyer-intent pages. Long-tail pages keep their SEO job,
// while current commercial choices live in a small number of maintained hub pages.

function categoryFromSlug(slug = '') {
  const s = slug.toLowerCase();
  if (s.includes('shower-filter')) return 'shower';
  if (s.includes('water-filter') || s.includes('reverse-osmosis') || s.includes('countertop-water')) return 'water';
  if (s.includes('air-purifier') || s.includes('humidifier') || s.includes('dehumid') || s.includes('damp') || s.includes('mould')) return 'air';
  if (s.includes('laundry')) return 'laundry';
  if (s.includes('cookware') || s.includes('kitchen') || s.includes('low-tox') || s.includes('loofah') || s.includes('hand-cream')) return 'healthyHome';
  if (s.includes('sleep') || s.includes('mattress') || s.includes('duvet')) return 'sleep';
  if (s.includes('supplement') || s.includes('adaptogen') || s.includes('herbal') || s.includes('immune') || s.includes('gut-health') || s.includes('collagen') || s.includes('creatine') || s.includes('magnesium') || s.includes('saffron') || s.includes('turmeric')) return 'supplements';
  if (s.includes('oats') || s.includes('chia') || s.includes('flax') || s.includes('olive-oil') || s.includes('matcha') || s.includes('protein') || s.includes('snacks') || s.includes('cooking-oils') || s.includes('fermented') || s.includes('anti-inflammatory') || s.includes('detox') || s.includes('meal-prep') || s.includes('meat-delivery')) return 'nutrition';
  if (s.includes('tracker') || s.includes('scale') || s.includes('bands') || s.includes('yoga') || s.includes('walking-shoes') || s.includes('foam-roller') || s.includes('activewear') || s.includes('barefoot') || s.includes('walking-boots')) return 'movement';
  return 'starter';
}

const LINKS = {
  water: {
    hub: { href: '/water-filtration-shortlist-uk', label: 'Compare current water filtration options' },
    reading: [
      { href: '/blog/water-filter-buying-guide-uk', label: 'Water filter buying guide (UK)' },
      { href: '/topics/water', label: 'Water basics and evidence' },
    ],
    related: [
      { href: '/best-water-filters-uk', label: 'Water filters: choose the right format' },
      { href: '/blog/72-hour-household-water-plan-uk', label: '72-hour household water plan' },
    ],
  },
  air: {
    hub: { href: '/air-quality-shortlist-uk', label: 'Compare current air-quality options' },
    reading: [
      { href: '/blog/indoor-air-quality-basics', label: 'Indoor air basics' },
      { href: '/topics/air-quality', label: 'Air-quality topic' },
    ],
    related: [
      { href: '/best-dehumidifiers-damp-mould-uk', label: 'Dehumidifiers for damp & mould (UK)' },
      { href: '/best-air-purifiers-allergies-uk', label: 'Air purifiers for allergies (UK)' },
    ],
  },
  shower: {
    hub: { href: '/water-filtration-shortlist-uk#gravity-shower-filtration', label: 'Compare shower and gravity filtration options' },
    reading: [
      { href: '/blog/shower-filter-basics-uk', label: 'Shower filter basics (UK)' },
      { href: '/topics/water', label: 'Water topic' },
    ],
    related: [
      { href: '/best-fragrance-free-laundry-detergents-uk', label: 'Fragrance-free laundry guide' },
      { href: '/healthy-home', label: 'Healthy Home hub' },
    ],
  },
  laundry: {
    hub: { href: '/healthy-home/low-tox-shortlist', label: 'Compare current Healthy Home swaps' },
    reading: [
      { href: '/topics/fragrance-free', label: 'Fragrance-free basics' },
      { href: '/blog/non-toxic-cleaning-starter', label: 'Lower-tox cleaning starter' },
    ],
    related: [
      { href: '/healthy-home', label: 'Healthy Home hub' },
      { href: '/best-low-tox-products-for-beginners', label: 'Lower-tox beginner guide' },
    ],
  },
  healthyHome: {
    hub: { href: '/healthy-home/low-tox-shortlist', label: 'Compare current Healthy Home swaps' },
    reading: [
      { href: '/healthy-home', label: 'Healthy Home hub' },
      { href: '/blog/non-toxic-cleaning-starter', label: 'Lower-tox cleaning starter' },
    ],
    related: [
      { href: '/topics/fragrance-free', label: 'Fragrance-free topic' },
      { href: '/best-fragrance-free-laundry-detergents-uk', label: 'Fragrance-free laundry guide' },
    ],
  },
  sleep: {
    hub: { href: '/sleep-recovery-shortlist-uk', label: 'Compare current sleep & recovery options' },
    reading: [
      { href: '/topics/sleep', label: 'Sleep fundamentals' },
      { href: '/blog/sleep-naturally-simple-guide', label: 'Sleep naturally: cornerstone guide' },
    ],
    related: [
      { href: '/best-mattress-for-sleep-uk-simba-hybrid-original', label: 'Mattress buying guide' },
      { href: '/best-natural-sleep-remedies-non-pharma', label: 'Non-pharma sleep support' },
    ],
  },
  supplements: {
    hub: { href: '/nutrition/food-first-shortlist', label: 'Start with the food-first nutrition shortlist' },
    reading: [
      { href: '/nutrition', label: 'Food-first nutrition hub' },
      { href: '/nutrition/supplements', label: 'Supplements: when they may fit' },
    ],
    related: [
      { href: '/topics/gut-health', label: 'Gut-health fundamentals' },
      { href: '/topics/nutrition', label: 'Nutrition topic' },
    ],
  },
  nutrition: {
    hub: { href: '/nutrition/food-first-shortlist', label: 'Compare food-first nutrition options' },
    reading: [
      { href: '/nutrition', label: 'Food-first nutrition hub' },
      { href: '/blog/single-ingredient-staples-that-actually-matter', label: 'Single-ingredient staples' },
    ],
    related: [
      { href: '/nutrition/organic-single-ingredient', label: 'Organic single-ingredient staples' },
      { href: '/topics/gut-health', label: 'Gut-health fundamentals' },
    ],
  },
  movement: {
    hub: { href: '/movement/movement-shortlist', label: 'Compare current movement options' },
    reading: [
      { href: '/topics/movement', label: 'Movement fundamentals' },
      { href: '/blog/home-strength-basics-busy-people', label: 'Home strength basics' },
    ],
    related: [
      { href: '/topics/foot-strength', label: 'Foot-strength guide' },
      { href: '/topics/recovery', label: 'Recovery basics' },
    ],
  },
  starter: {
    hub: { href: '/shortlists', label: 'Browse the seven Wild & Well buying routes' },
    reading: [
      { href: '/start-here', label: 'Start here' },
      { href: '/topics', label: 'Browse all topics' },
    ],
    related: [
      { href: '/healthy-home', label: 'Healthy Home' },
      { href: '/topics/resilience', label: 'Practical resilience' },
    ],
  },
};

export function getMoneyPageLinks(slug) {
  const key = categoryFromSlug(slug);
  return LINKS[key] || LINKS.starter;
}
