import Link from 'next/link'
import { buildPageMetadata } from '@/lib/pageMetadata'

export const metadata = buildPageMetadata({
  title: 'Nutrition & Real Food — Wild & Well',
  description: 'Food-first nutrition for UK life: protein, fibre, simple staples, convenient meals and sensible supplement guidance only where it adds value.',
  path: '/nutrition',
  image: '/images/photography/nutrition.jpg',
})

function Card({ title, desc, href, tag }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div><h2 className="text-lg font-semibold">{title}</h2><p className="mt-1 text-sm text-zinc-600">{desc}</p></div>
        {tag ? <span className="shrink-0 rounded-full border bg-white px-2 py-0.5 text-[11px] text-zinc-600">{tag}</span> : null}
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  )
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Food first</p>
        <h1 className="mt-2 text-4xl font-bold">Nutrition &amp; Real Food</h1>
        <p className="mt-3 text-zinc-700">Build meals around real food, protein, fibre and repeatable staples. Use convenience products where they genuinely save time, and keep supplements secondary.</p>
        <img src="/images/photography/nutrition.jpg" alt="" className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm" loading="lazy" decoding="async" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/nutrition/food-first-shortlist">Food-first buying guide</Link>
          <Link className="btn-secondary" href="/topics/nutrition">Nutrition fundamentals</Link>
          <Link className="btn-secondary" href="/nutrition/organic-single-ingredient">Organic & single-ingredient</Link>
          <Link className="btn-secondary" href="/nutrition/grow-your-own">Grow your own</Link>
        </div>
      </header>

      <section className="mt-12">
        <div className="max-w-3xl"><h2 className="text-2xl font-semibold">Choose the route that fits your life</h2><p className="mt-2 text-zinc-700">This section now prioritises food and repeatable meals rather than leading with pills, powders and novelty products.</p></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Whole-food protein" desc="Build meals around meat, fish, eggs, dairy, pulses and other simple protein sources you actually enjoy." href="/nutrition/food-first-shortlist" tag="Food first" />
          <Card title="Convenient high-protein meals" desc="For busy days when a prepared meal is better than defaulting to takeaway or ultra-processed snacks." href="/high-protein-meal-prep-uk-the-good-prep-wild-berry-collagen-yoghurt" tag="Convenience" />
          <Card title="Organic & single-ingredient staples" desc="Oats, olive oil, seeds and other basics where label reading and freshness matter more than hype." href="/nutrition/organic-single-ingredient" tag="Staples" />
          <Card title="Gut health" desc="Fibre, food diversity and fermented foods before jumping straight to gut-health products." href="/topics/gut-health" tag="Education" />
          <Card title="Hydration" desc="Daily drinking habits first, then electrolytes only when circumstances make them useful." href="/topics/hydration" tag="Education" />
          <Card title="Supplements" desc="A cautious, label-first section for cases where a supplement may have a clear role." href="/nutrition/supplements" tag="Optional" />
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">Start with a simple food hierarchy</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-zinc-700">
          <li>Choose a protein source for the meal.</li>
          <li>Add fruit or vegetables and a useful fibre source.</li>
          <li>Add minimally processed carbohydrates and fats according to appetite, activity and preference.</li>
          <li>Use convenient prepared food when it helps you stay consistent.</li>
          <li>Only then consider supplements for a specific reason.</li>
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Useful staple guides</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Extra virgin olive oil" desc="Freshness, storage and practical label cues." href="/best-extra-virgin-olive-oil-uk" tag="Staple" />
          <Card title="Organic oats" desc="Rolled, jumbo and steel-cut options for an inexpensive repeatable staple." href="/best-organic-oats-uk" tag="Staple" />
          <Card title="Fermented foods" desc="Simple food-first ways to try sauerkraut and kimchi." href="/best-fermented-foods-sauerkraut-kimchi" tag="Gut" />
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Household food resilience</h2>
        <p className="mt-2 text-sm text-zinc-700">The same food-first approach can extend to short disruptions: keep ordinary shelf-stable foods you already eat rather than buying a separate cupboard of specialist survival food.</p>
        <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="/blog/72-hour-food-plan-uk">72-hour food plan</Link><Link className="btn-secondary" href="/topics/resilience">Practical resilience</Link></div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
