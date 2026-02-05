// lib/moneyPageLinks.js
// Extra internal links for money pages: keep people learning before shopping.

function categoryFromSlug(slug) {
  const s = slug.toLowerCase();
  if (s.includes("water-filter")) return "water";
  if (s.includes("air-purifier") || s.includes("humidifier") || s.includes("dehumid") || s.includes("damp") || s.includes("mould")) return "air";
  if (s.includes("shower-filter")) return "shower";
  if (s.includes("laundry")) return "laundry";
  if (s.includes("cookware") || s.includes("kitchen")) return "kitchen";
  if (s.includes("sleep")) return "sleep";
  if (s.includes("supplement") || s.includes("adaptogen") || s.includes("herbal") || s.includes("immune") || s.includes("gut-health")) return "supplements";
  if (s.includes("oats") || s.includes("chia") || s.includes("flax") || s.includes("olive-oil") || s.includes("matcha") || s.includes("protein") || s.includes("snacks") || s.includes("cooking-oils") || s.includes("fermented") || s.includes("anti-inflammatory") || s.includes("detox")) return "nutrition";
  if (s.includes("tracker") || s.includes("scale") || s.includes("bands") || s.includes("yoga") || s.includes("walking-shoes") || s.includes("foam-roller") || s.includes("activewear")) return "movement";
  return "starter";
}

const LINKS = {
  water: {
    reading: [
      { href: "/blog/water-filter-buying-guide-uk", label: "Water filter buying guide (UK)" },
      { href: "/blog/label-reading-101", label: "Label reading 101" },
    ],
    related: [
      { href: "/best-shower-filters-uk-hard-water", label: "Shower filters (UK hard water): shortlist" },
      { href: "/best-water-filters-uk", label: "Water filters (UK): shortlist" },
    ],
  },
  air: {
    reading: [
      { href: "/blog/indoor-air-quality-basics", label: "Indoor air basics" },
      { href: "/blog/bedroom-air-quality-simple-checklist", label: "Bedroom air checklist" },
    ],
    related: [
      { href: "/best-dehumidifiers-damp-mould-uk", label: "Dehumidifiers for damp & mould (UK)" },
      { href: "/best-air-purifiers-small-flats-uk", label: "Air purifiers for small flats (UK)" },
      { href: "/best-air-purifiers-allergies-uk", label: "Air purifiers for allergies (UK)" },
    ],
  },
  shower: {
    reading: [
      { href: "/blog/shower-filter-basics-uk", label: "Shower filter basics (UK)" },
      { href: "/blog/fragrance-free-basics", label: "Fragrance-free basics" },
    ],
    related: [
      { href: "/best-fragrance-free-laundry-detergents-uk", label: "Fragrance-free laundry detergents (UK)" },
      { href: "/best-shower-filters-uk-hard-water", label: "Shower filters (UK): shortlist" },
    ],
  },
  laundry: {
    reading: [
      { href: "/blog/fragrance-free-laundry-basics", label: "Fragrance-free laundry basics" },
      { href: "/blog/non-toxic-cleaning-starter", label: "Non-toxic cleaning starter" },
    ],
    related: [
      { href: "/best-fragrance-free-laundry-detergents-uk", label: "Fragrance-free laundry detergents (UK)" },
      { href: "/best-low-tox-products-for-beginners", label: "Low-tox starter favourites" },
    ],
  },
  kitchen: {
    reading: [
      { href: "/blog/low-tox-kitchen", label: "Low-tox kitchen basics" },
      { href: "/blog/single-ingredient-staples-that-actually-matter", label: "Single-ingredient staples" },
    ],
    related: [
      { href: "/best-non-toxic-cookware-starter", label: "Non-toxic cookware: starter favourites" },
      { href: "/best-organic-cooking-oils-uk", label: "Cooking oils (UK): shortlist" },
    ],
  },
  sleep: {
    reading: [
      { href: "/blog/sleep-naturally-simple-guide", label: "Sleep naturally: cornerstone guide" },
      { href: "/blog/magnesium-for-sleep-basics", label: "Magnesium basics" },
    ],
    related: [
      { href: "/best-natural-sleep-support", label: "Natural sleep support: shortlist" },
      { href: "/best-natural-sleep-remedies-non-pharma", label: "Natural sleep remedies (non-pharma)" },
    ],
  },
  supplements: {
    reading: [
      { href: "/blog/supplements-basics", label: "Supplement basics" },
      { href: "/blog/fibre-gut-health-practical-guide", label: "Fibre & gut health" },
    ],
    related: [
      { href: "/best-gut-health-supplements-beginners", label: "Gut health supplements: shortlist" },
      { href: "/best-natural-immune-support-remedies", label: "Natural immune support: shortlist" },
    ],
  },
  nutrition: {
    reading: [
      { href: "/blog/single-ingredient-staples-that-actually-matter", label: "Single-ingredient staples" },
      { href: "/blog/label-reading-101", label: "Label reading 101" },
    ],
    related: [
      { href: "/best-organic-oats-uk", label: "Organic oats (UK): favourites" },
      { href: "/best-extra-virgin-olive-oil-uk", label: "Extra virgin olive oil (UK): favourites" },
    ],
  },
  movement: {
    reading: [
      { href: "/blog/home-strength-basics-busy-people", label: "Home strength basics" },
      { href: "/blog/walking-basics-weekly-plan", label: "Walking weekly plan" },
    ],
    related: [
      { href: "/best-resistance-bands-home-workouts", label: "Resistance bands: shortlist" },
      { href: "/best-walking-shoes-daily-steps-uk", label: "Walking shoes (UK): shortlist" },
    ],
  },
  starter: {
    reading: [
      { href: "/blog/label-reading-101", label: "Label reading 101" },
      { href: "/blog/non-toxic-cleaning-starter", label: "Non-toxic cleaning starter" },
    ],
    related: [
      { href: "/best-low-tox-products-for-beginners", label: "Low-tox starter favourites" },
      { href: "/picks", label: "Browse all favourites" },
    ],
  },
};

export function getMoneyPageLinks(slug) {
  const key = categoryFromSlug(slug);
  return LINKS[key] || LINKS.starter;
}
