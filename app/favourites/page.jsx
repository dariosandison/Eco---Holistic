import Link from "next/link";
import EducationFirstCallout from "@/components/EducationFirstCallout";

export const metadata = {
  title: "Favourites (Product Shortlists) | Wild & Well",
  description:
    "Browse our product shortlists: low-tox home, sleep, nutrition, and movement — with clear trade-offs.",
};

const TAG_ICON = {
  Water: '/images/cards/water-filter.svg',
  Air: '/images/cards/air-purifier.svg',
  Laundry: '/images/cards/laundry.svg',
  Kitchen: '/images/cards/kitchen.svg',
  Shower: '/images/cards/shower-filter.svg',
  Sleep: '/images/cards/sleep.svg',
  Humidity: '/images/cards/humidifier.svg',

  Nutrition: '/images/cards/nutrition.svg',
  Staples: '/images/cards/nutrition.svg',
  Superfoods: '/images/cards/nutrition.svg',
  Drinks: '/images/cards/nutrition.svg',
  Gut: '/images/cards/nutrition.svg',
  Supplements: '/images/cards/supplements.svg',

  Movement: '/images/cards/bands.svg',
  Strength: '/images/cards/bands.svg',
  Mobility: '/images/cards/bands.svg',
  Recovery: '/images/cards/bands.svg',
  Walking: '/images/cards/shoe.svg',
  Trackers: '/images/cards/tracker.svg',
  Fitness: '/images/cards/tracker.svg',
  Scales: '/images/cards/scale.svg',
  'Body comp': '/images/cards/scale.svg',
  'Body Comp': '/images/cards/scale.svg',
}

function Section({ title, desc, items }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600 max-w-3xl">{desc}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="card hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 gap-3">
                <div className="relative mt-0.5 h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                  <img
                    src={(it.image || TAG_ICON[it.tag] || '/images/cards/neutral.svg')}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{it.label}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{it.desc}</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">
                {it.tag}
              </span>
            </div>
            <p className="mt-3 text-xs text-zinc-500">Open →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  const home = [
    {
      href: "/best-water-filters-uk",
      label: "Water filters (UK): favourites",
      desc: "Jugs vs under-sink vs countertop: clear trade-offs.",
      tag: "Water",
    },
    {
      href: "/best-air-purifiers-allergies-uk",
      label: "Air purifiers for allergies (UK): shortlist",
      desc: "Shortlist by room size and realistic use-cases.",
      tag: "Air",
    },
    {
      href: "/best-fragrance-free-laundry-detergents-uk",
      label: "Fragrance-free laundry detergents (UK): shortlist",
      desc: "High-contact swap with ingredient notes.",
      tag: "Laundry",
    },
    {
      href: "/best-non-toxic-cookware-starter",
      label: "Non-toxic cookware: starter favourites",
      desc: "Simple first upgrades (without perfectionism).",
      tag: "Kitchen",
    },
    {
      href: "/best-shower-filters-uk-hard-water",
      label: "Shower filters (UK hard water): shortlist",
      desc: "If your hair/skin hates hard water, start here.",
      tag: "Water",
    },
    {
      href: "/best-humidifiers-for-bedrooms-uk",
      label: "Humidifiers for bedrooms (UK): shortlist",
      desc: "Dry air comfort options + maintenance reminders.",
      tag: "Humidity",
    },
    {
      href: "/best-dehumidifiers-damp-mould-uk",
      label: "Dehumidifiers for damp & mould (UK): shortlist",
      desc: "What to buy first for damp rooms and laundry drying.",
      tag: "Humidity",
    },
  ];

  const sleep = [
    {
      href: "/best-natural-sleep-support",
      label: "natural sleep support",
      desc: "A calm shortlist with realistic expectations.",
      tag: "Sleep",
    },
    {
      href: "/best-natural-sleep-remedies-non-pharma",
      label: "natural sleep remedies (non‑pharma)",
      desc: "What may help vs what’s mostly marketing.",
      tag: "Sleep",
    },
  ];

  const nutrition = [
    {
      href: "/best-extra-virgin-olive-oil-uk",
      label: "Extra virgin olive oil (UK): our favourites",
      desc: "Freshness, storage, and label cues.",
      tag: "Staples",
    },
    {
      href: "/best-organic-oats-uk",
      label: "Organic oats (UK): our favourites",
      desc: "Rolled vs jumbo vs steel-cut — choose what you’ll use.",
      tag: "Staples",
    },
    {
      href: "/best-chia-seeds-uk",
      label: "Chia seeds (UK): simple shortlist",
      desc: "Easy add-in for puddings, oats, smoothies.",
      tag: "Superfoods",
    },
    {
      href: "/best-ground-flaxseed-uk",
      label: "Ground flaxseed (UK): simple shortlist",
      desc: "Freshness + storage + easy daily uses.",
      tag: "Superfoods",
    },
    {
      href: "/best-organic-matcha-uk",
      label: "Matcha (UK): what to buy",
      desc: "Everyday vs ceremonial-style and what to look for.",
      tag: "Drinks",
    },
    {
      href: "/best-fermented-foods-sauerkraut-kimchi",
      label: "Fermented foods to start with",
      desc: "Sauerkraut & kimchi with simple ingredients.",
      tag: "Gut",
    },
  ];

  const movement = [
    {
      href: "/best-fitness-trackers-beginners-uk",
      label: "Fitness trackers for beginners (UK): shortlist",
      desc: "Steps, sleep, heart-rate: what matters.",
      tag: "Trackers",
    },
    {
      href: "/best-smart-scales-uk",
      label: "Smart scales (UK): shortlist",
      desc: "Use trends, not daily obsession.",
      tag: "Scales",
    },
    {
      href: "/best-resistance-bands-home-workouts",
      label: "Resistance bands for home workouts: shortlist",
      desc: "A small kit that covers most needs.",
      tag: "Strength",
    },
    {
      href: "/best-walking-shoes-daily-steps-uk",
      label: "Walking shoes for daily steps (UK): shortlist",
      desc: "Comfort-first options for regular walking.",
      tag: "Walking",
    },
    {
      href: "/best-yoga-mats-grip-comfort",
      label: "yoga mats for grip & comfort",
      desc: "Grip and joint comfort without nonsense.",
      tag: "Mobility",
    },
    {
      href: "/best-foam-rollers-recovery-tools",
      label: "foam rollers & recovery tools",
      desc: "Simple recovery tools that help you keep moving.",
      tag: "Recovery",
    },
    {
      href: "/best-activewear-basics-uk",
      label: "activewear basics (UK)",
      desc: "Comfort-first basics for walking and training.",
      tag: "Clothing",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Favourites</h1>
        <p className="mt-3 text-zinc-700">
          Shortlists designed to be clear and useful: what to look for, what to avoid, and a small set of solid options.
          If you want the “why” and the bigger picture, use{" "}
          <Link className="underline" href="/blog">
            Wellness Insights
          </Link>.
        </p>

        <EducationFirstCallout topicHref="/topics" topicLabel="Start with topics" insightHref="/blog" insightLabel="Read Wellness Insights" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics">Topics</Link>
          <Link className="btn-secondary" href="/deals">Deals</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 27, 2026</p>
      </header>

      <Section title="Home (low-tox, air, water)" desc="Start with high-impact basics; don’t try to replace everything at once." items={home} />
      <Section title="Sleep" desc="Calm, practical shortlists and realistic expectations." items={sleep} />
      <Section title="Nutrition" desc="Single-ingredient staples and sensible “superfood” add-ons." items={nutrition} />
      <Section title="Movement" desc="Walking, strength, mobility — and gear that isn’t gimmicky." items={movement} />

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links may earn us a small commission at no extra cost to you.
      </p>
    </main>
  );
}
