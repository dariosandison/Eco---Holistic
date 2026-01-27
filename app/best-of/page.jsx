\
import Link from "next/link";

export const metadata = {
  title: "Best-of Guides (Product Roundups) | Wild & Well",
  description:
    "Browse our best-of product roundups: low-tox home, sleep, nutrition, and movement — with clear trade-offs and shortlists.",
};

function Section({ title, desc, items }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-zinc-600 max-w-3xl">{desc}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="card hover:shadow-sm transition-shadow">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{it.label}</h3>
                <p className="mt-1 text-sm text-zinc-600">{it.desc}</p>
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
      label: "Best water filters (UK)",
      desc: "Jugs vs under-sink vs countertop: clear trade-offs.",
      tag: "Water",
    },
    {
      href: "/best-air-purifiers-allergies-uk",
      label: "Best air purifiers for allergies (UK)",
      desc: "Shortlist by room size and realistic use-cases.",
      tag: "Air",
    },
    {
      href: "/best-fragrance-free-laundry-detergents-uk",
      label: "Best fragrance-free laundry detergents (UK)",
      desc: "High-contact swap with ingredient notes.",
      tag: "Laundry",
    },
    {
      href: "/best-non-toxic-cookware-starter",
      label: "Best non-toxic cookware starter picks",
      desc: "Simple first upgrades (without perfectionism).",
      tag: "Kitchen",
    },
    {
      href: "/best-shower-filters-uk-hard-water",
      label: "Best shower filters (UK hard water)",
      desc: "If your hair/skin hates hard water, start here.",
      tag: "Water",
    },
    {
      href: "/best-humidifiers-for-bedrooms-uk",
      label: "Best humidifiers for bedrooms (UK)",
      desc: "Dry air comfort picks + maintenance reminders.",
      tag: "Humidity",
    },
  ];

  const sleep = [
    {
      href: "/best-natural-sleep-support",
      label: "Best natural sleep support",
      desc: "A calm shortlist with realistic expectations.",
      tag: "Sleep",
    },
    {
      href: "/best-natural-sleep-remedies-non-pharma",
      label: "Best natural sleep remedies (non‑pharma)",
      desc: "What may help vs what’s mostly marketing.",
      tag: "Sleep",
    },
  ];

  const nutrition = [
    {
      href: "/best-extra-virgin-olive-oil-uk",
      label: "Best extra virgin olive oil (UK)",
      desc: "Freshness, storage, and label cues.",
      tag: "Staples",
    },
    {
      href: "/best-organic-oats-uk",
      label: "Best organic oats (UK)",
      desc: "Rolled vs jumbo vs steel-cut — choose what you’ll use.",
      tag: "Staples",
    },
    {
      href: "/best-chia-seeds-uk",
      label: "Best chia seeds (UK)",
      desc: "Easy add-in for puddings, oats, smoothies.",
      tag: "Superfoods",
    },
    {
      href: "/best-ground-flaxseed-uk",
      label: "Best ground flaxseed (UK)",
      desc: "Freshness + storage + easy daily uses.",
      tag: "Superfoods",
    },
    {
      href: "/best-organic-matcha-uk",
      label: "Best matcha (UK)",
      desc: "Everyday vs ceremonial-style and what to look for.",
      tag: "Drinks",
    },
    {
      href: "/best-fermented-foods-sauerkraut-kimchi",
      label: "Best fermented foods to start with",
      desc: "Sauerkraut & kimchi with simple ingredients.",
      tag: "Gut",
    },
  ];

  const movement = [
    {
      href: "/best-fitness-trackers-beginners-uk",
      label: "Best fitness trackers for beginners (UK)",
      desc: "Steps, sleep, heart-rate: what matters.",
      tag: "Trackers",
    },
    {
      href: "/best-smart-scales-uk",
      label: "Best smart scales (UK)",
      desc: "Use trends, not daily obsession.",
      tag: "Scales",
    },
    {
      href: "/best-resistance-bands-home-workouts",
      label: "Best resistance bands for home workouts",
      desc: "A small kit that covers most needs.",
      tag: "Strength",
    },
    {
      href: "/best-walking-shoes-daily-steps-uk",
      label: "Best walking shoes for daily steps (UK)",
      desc: "Comfort-first options for regular walking.",
      tag: "Walking",
    },
    {
      href: "/best-yoga-mats-grip-comfort",
      label: "Best yoga mats for grip & comfort",
      desc: "Grip and joint comfort without nonsense.",
      tag: "Mobility",
    },
    {
      href: "/best-foam-rollers-recovery-tools",
      label: "Best foam rollers & recovery tools",
      desc: "Simple recovery tools that help you keep moving.",
      tag: "Recovery",
    },
    {
      href: "/best-activewear-basics-uk",
      label: "Best activewear basics (UK)",
      desc: "Comfort-first basics for walking and training.",
      tag: "Clothing",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Best-of Guides</h1>
        <p className="mt-3 text-zinc-700">
          Product roundups designed to be clear and useful: what to look for, what to avoid, and a shortlist of solid options.
          If you want the “why” and the bigger picture, use{" "}
          <Link className="underline" href="/blog">
            Blog
          </Link>{" "}
          and{" "}
          <Link className="underline" href="/guides">
            Learn
          </Link>
          .
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/recommended">Recommended hub</Link>
          <Link className="btn-secondary" href="/deals">Deals</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 27, 2026</p>
      </header>

      <Section title="Home (low-tox, air, water)" desc="Start with high-impact basics; don’t try to replace everything at once." items={home} />
      <Section title="Sleep" desc="Calm, practical picks and realistic expectations." items={sleep} />
      <Section title="Nutrition" desc="Single-ingredient staples and sensible “superfood” add-ons." items={nutrition} />
      <Section title="Movement" desc="Walking, strength, mobility — and gear that isn’t gimmicky." items={movement} />

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links may earn us a small commission at no extra cost to you.
      </p>
    </main>
  );
}
