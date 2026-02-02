import Link from 'next/link'

export const metadata = {
  title: 'Best of Wild & Well | Wild & Well',
  description:
    'A curated index of our top shortlists and topic guides for UK homes: water, air, sleep, fragrance-free laundry, nutrition, and movement.',
}

function Card({ title, desc, href, tag }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-zinc-600">{desc}</p>
        </div>
        {tag ? <span className="chip shrink-0">{tag}</span> : null}
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Best of Wild &amp; Well</h1>
        <p className="mt-3 text-zinc-700">
          A curated set of pages to start with. If you’re new, begin with a topic guide, then use the shortlist pages
          when you want options.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics">Topics</Link>
          <Link className="btn-secondary" href="/favourites">Favourites</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="section-title">Start with topics</h2>
        <p className="section-subtitle">Basics first: what matters, what doesn’t, and the simplest next steps.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card title="Sleep & recovery" desc="Light, timing, temperature, and practical options." href="/topics/sleep" tag="Topic" />
          <Card title="Air quality" desc="HEPA basics, placement, and sizing by room." href="/topics/air-quality" tag="Topic" />
          <Card title="Water" desc="Jugs vs under-sink, replacements, and buying basics." href="/topics/water" tag="Topic" />
          <Card title="Fragrance-free laundry" desc="Ingredient checks and the quickest swaps." href="/topics/fragrance-free" tag="Topic" />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title">Most useful shortlists</h2>
        <p className="section-subtitle">Small lists, clear trade-offs.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card title="Water filters (UK)" desc="Jugs vs under-sink vs countertop." href="/best-water-filters-uk" tag="Shortlist" />
          <Card title="Air purifiers for allergies (UK)" desc="Shortlist by room size and use-case." href="/best-air-purifiers-allergies-uk" tag="Shortlist" />
          <Card title="Fragrance-free laundry detergents (UK)" desc="High-contact swap with ingredient notes." href="/best-fragrance-free-laundry-detergents-uk" tag="Shortlist" />
          <Card title="Non-toxic cookware" desc="Simple first upgrades to start with." href="/best-non-toxic-cookware-starter" tag="Shortlist" />
          <Card title="Fitness trackers (UK)" desc="Steps, sleep, and the metrics that matter." href="/best-fitness-trackers-beginners-uk" tag="Shortlist" />
          <Card title="Resistance bands" desc="A small kit that covers most needs." href="/best-resistance-bands-home-workouts" tag="Shortlist" />
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="section-title">How to use the site</h2>
        <ol className="mt-3 list-decimal pl-6 text-zinc-700 space-y-2">
          <li>Pick one topic (sleep, air, water, cleaning).</li>
          <li>Read the basics and decide your constraints (space, budget, maintenance).</li>
          <li>Use the shortlist page for 3–6 sensible options.</li>
        </ol>
        <p className="mt-10 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
      </section>
    </main>
  )
}
