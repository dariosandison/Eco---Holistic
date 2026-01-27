import Link from "next/link";

export const metadata = {
  title: "Recommended | Wild & Well",
  description:
    "A curated hub of what we recommend reading and comparing next — low-tox home, sleep, nutrition, and movement.",
};

function Card({ title, desc, href, tag }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-zinc-600">{desc}</p>
        </div>
        {tag ? (
          <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{tag}</span>
        ) : null}
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Recommended</h1>
        <p className="mt-3 text-zinc-700">
          Think of this as a map. Start with the topic you care about, learn the basics, then use the best-of pages when you’re ready to compare products.
          No pressure — just clear trade-offs and sensible options.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/best-of">Browse best-of guides</Link>
          <Link className="btn-secondary" href="/blog">Read the blog</Link>
          <Link className="btn-secondary" href="/guides">Learn basics</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 27, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Home (low-tox, air, water)</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Water filters (UK)" desc="Jugs vs under-sink vs countertop — what fits your home." href="/best-water-filters-uk" tag="Best-of" />
          <Card title="Air purifiers (UK allergies)" desc="Room size and filter choices that actually matter." href="/best-air-purifiers-allergies-uk" tag="Best-of" />
          <Card title="Fragrance-free laundry (UK)" desc="A high-impact swap if you’re sensitive to fragrance." href="/best-fragrance-free-laundry-detergents-uk" tag="Best-of" />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/picks">Browse Picks</Link>
          <Link className="btn-secondary" href="/deals">See deal searches</Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Sleep</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Sleep pillar" desc="Practical steps first; products only where they help." href="/picks/sleep" tag="Hub" />
          <Card title="Natural sleep support" desc="What may help vs what’s mostly marketing." href="/best-natural-sleep-support" tag="Best-of" />
          <Card title="Non‑pharma sleep remedies" desc="Options to discuss sensibly (and safely) with your routine." href="/best-natural-sleep-remedies-non-pharma" tag="Best-of" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Nutrition</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Nutrition hub" desc="Single-ingredient staples, label reading, and upgrades you can repeat." href="/nutrition" tag="Hub" />
          <Card title="Extra virgin olive oil (UK)" desc="Freshness + label cues + storage." href="/best-extra-virgin-olive-oil-uk" tag="Best-of" />
          <Card title="Organic oats (UK)" desc="Pick the format you’ll actually eat." href="/best-organic-oats-uk" tag="Best-of" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Movement</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Movement hub" desc="Walking, strength, mobility — plus sensible gear." href="/movement" tag="Hub" />
          <Card title="Fitness trackers (UK)" desc="Steps, sleep, heart-rate: a beginner shortlist." href="/best-fitness-trackers-beginners-uk" tag="Best-of" />
          <Card title="Resistance bands" desc="A small kit that covers home training basics." href="/best-resistance-bands-home-workouts" tag="Best-of" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">If you want one next step</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Join the free list for our “low-effort, high-impact” upgrades — and browse at your own pace.
        </p>
        <div className="mt-4">
          <Link className="btn-primary" href="/shopping-list">Get the free shopping list</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links may earn us a small commission at no extra cost to you.
      </p>
    </main>
  );
}
