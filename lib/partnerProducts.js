// lib/partnerProducts.js
// Curated partner products (AWIN) to feature on Picks and relevant pages.

function awinLink({ awinmid, awinaffid = '2754234', clickref, ued }) {
  const base = 'https://www.awin1.com/cread.php'
  const qs = new URLSearchParams({
    awinmid: String(awinmid),
    awinaffid: String(awinaffid),
    clickref: String(clickref),
    // AWIN expects the destination (ued) to be URL-encoded.
    // URLSearchParams will handle encoding for us.
    ued: String(ued),
  })
  return `${base}?${qs.toString()}`
}

export const PARTNER_PRODUCTS = [
  {
    key: 'doulton_undersink',
    brand: 'Doulton',
    title: 'Under‑sink water filter system',
    tag: 'Water',
    image: '/images/photography/thumbs/cards/water-hero.jpg',
    desc: 'Filtered water from a dedicated tap — a high‑impact upgrade if you’ll keep up with replacements.',
    awinmid: 69790,
    ued: 'https://doulton.com/collections/under-sink-water-filters',
    clickrefs: {
      card: 'ww_card_doulton_undersink',
      cta: 'ww_cta_doulton_undersink',
      table: 'ww_table_doulton_undersink',
    },
  },
  {
    key: 'watertogo_active75',
    brand: 'Water‑to‑Go',
    title: '75cl Active bottle',
    tag: 'Water',
    image: '/images/photography/thumbs/cards/ceramic-cups-and-a-carafe-on-a-kitchen-counter-calm-hydration-vibe.jpg',
    desc: 'Portable filtered bottle for commuting, gym, and travel — easy “habit” upgrade.',
    awinmid: 86997,
    ued: 'https://watertogo.eu/product/75cl-active-bottle-acai/',
    clickrefs: {
      card: 'ww_card_watertogo_active75',
      cta: 'ww_cta_watertogo_active75',
      table: 'ww_table_watertogo_active75',
    },
  },
  {
    key: 'grainup_bananabread8',
    brand: 'Grain Up',
    title: 'Banana Bread Overnight Oats (x8)',
    tag: 'Staples',
    image: '/images/photography/thumbs/cards/cooked-oats-and-seeds-in-small-ceramic-bowls-on-wooden-table-soft-daylight.jpg',
    desc: 'A simple “better breakfast” option for busy mornings — easy, repeatable, portable.',
    awinmid: 77552,
    ued: 'https://grainup.co.uk/product/banana-bread-2/',
    clickrefs: {
      card: 'ww_card_grainup_bananabread8',
      cta: 'ww_cta_grainup_bananabread8',
      table: 'ww_table_grainup_bananabread8',
    },
  },
  {
    key: 'on_creatine',
    brand: 'Optimum Nutrition',
    title: 'Platinum Creatine Plus Powder',
    tag: 'Strength',
    image: '/images/photography/thumbs/cards/creatine-jar-morning-light.jpg',
    desc: 'A convenient creatine mix if you prefer a ready-to-go formula — always check the label and serving size.',
    awinmid: 19863,
    ued: 'https://www.optimumnutrition.com/en-gb/products/platinum-creatine-plus-powder',
    clickrefs: {
      card: 'ww_card_on_creatine_plus',
      cta: 'ww_cta_on_creatine_plus',
      table: 'ww_table_on_creatine_plus',
    },
  },
  {
    key: 'on_goldwhey',
    brand: 'Optimum Nutrition',
    title: 'Gold Standard 100% Whey',
    tag: 'Movement',
    image: '/images/photography/thumbs/cards/movement-hero.jpg',
    desc: 'Straightforward protein option for training days — check ingredients and allergens.',
    awinmid: 19863,
    ued: 'https://www.optimumnutrition.com/en-gb/products/gold-standard-100-whey-protein-powder-eu',
    clickrefs: {
      card: 'ww_card_on_goldwhey',
      cta: 'ww_cta_on_goldwhey',
      table: 'ww_table_on_goldwhey',
    },
  },
  {
    key: 'wfl_reebokdeck',
    brand: 'Workout For Less',
    title: 'Reebok Deck (all‑in‑one platform)',
    tag: 'Strength',
    image: '/images/photography/thumbs/cards/movement-hero.jpg',
    desc: 'One tool for step + bench style workouts — great for small spaces.',
    awinmid: 25564,
    ued: 'https://www.workoutforless.co.uk/collections/reebok-decks',
    clickrefs: {
      card: 'ww_card_wfl_reebokdeck',
      cta: 'ww_cta_wfl_reebokdeck',
      table: 'ww_table_wfl_reebokdeck',
    },
  },
  {
    key: 'fitopt_c97',
    brand: 'Fitness Options',
    title: 'Gym Gear C97 Upright Bike',
    tag: 'Walking',
    image: '/images/photography/thumbs/cards/movement-hero.jpg',
    desc: 'Low‑impact home cardio option if you want consistency without leaving the house.',
    awinmid: 899,
    ued: 'https://fitnessoptions.co.uk/products/gym-gear-c97-upright-bike',
    clickrefs: {
      card: 'ww_card_fitopt_c97',
      cta: 'ww_cta_fitopt_c97',
      table: 'ww_table_fitopt_c97',
    },
  },
  {
    key: 'zw_starterpack',
    brand: 'ZeroWater (Culligan UK)',
    title: 'Starter Pack (jug + filters)',
    tag: 'Water',
    image: '/images/photography/thumbs/cards/water-hero.jpg',
    desc: 'A simple way to start with a jug + replacements — always check filter costs.',
    awinmid: 30649,
    ued: 'https://shop.culligan.co.uk/products/the-starter-pack',
    clickrefs: {
      card: 'ww_card_zw_starterpack',
      cta: 'ww_cta_zw_starterpack',
      table: 'ww_table_zw_starterpack',
    },
  },
  {
    key: 'jc_bamburazor',
    brand: 'Jungle Culture',
    title: 'Bamboo safety razor',
    tag: 'Home',
    image: '/images/photography/thumbs/cards/home-hero-small.jpg',
    desc: 'Low‑waste bathroom swap — simple, durable, and easy to keep using.',
    awinmid: 26152,
    ued: 'https://jungleculture.eco/products/bamboo-razor',
    clickrefs: {
      card: 'ww_card_jc_bamburazor',
      cta: 'ww_cta_jc_bamburazor',
      table: 'ww_table_jc_bamburazor',
    },
  },
  {
    key: 'kaytea_icetea_sample',
    brand: 'Kaytea',
    title: 'Ice Tea Sample Pack (6‑pack)',
    tag: 'Drinks',
    image: '/images/photography/thumbs/cards/close-up-of-hands-holding-a-warm-mug-near-a-window-shallow-depth-of-field.jpg',
    desc: 'Low‑friction “better drinks” swap — try a few flavours before choosing a favourite.',
    awinmid: 115673,
    ued: 'https://kaytea.co.uk/products/ice-tea-6-pack-sample',
    clickrefs: {
      card: 'ww_card_kaytea_icetea_sample',
      cta: 'ww_cta_kaytea_icetea_sample',
      table: 'ww_table_kaytea_icetea_sample',
    },
  },
].map((p) => ({
  ...p,
  links: {
    card: awinLink({ awinmid: p.awinmid, clickref: p.clickrefs.card, ued: p.ued }),
    cta: awinLink({ awinmid: p.awinmid, clickref: p.clickrefs.cta, ued: p.ued }),
    table: awinLink({ awinmid: p.awinmid, clickref: p.clickrefs.table, ued: p.ued }),
  },
}))
