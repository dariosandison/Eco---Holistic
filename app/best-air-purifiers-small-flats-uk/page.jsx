import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Best Air Purifiers for Small Flats (UK) | Wild & Well',
  description: 'Shortlisted air purifiers that make sense for small UK flats: quiet bedrooms, compact units, and realistic filter costs.',
}

const PICKS = [
  {
    title: 'Blueair Blue 511i Max',
    badge: 'Best compact',
    desc: 'A strong “bedroom size” pick if you size it correctly.',
    query: 'Blueair 511i Max air purifier',
    bullets: ['Best for: bedrooms', 'Quiet night mode matters', 'Plan filter replacements'],
  },
  {
    title: 'Levoit Core 300S',
    badge: 'Best value',
    desc: 'Often praised as a budget-friendly HEPA option for small rooms.',
    query: 'Levoit Core 300S air purifier',
    bullets: ['Best for: small flats', 'Check filter availability'],
  },
  {
    title: 'Philips Series 800 air purifier',
    badge: 'Solid mainstream',
    desc: 'A mainstream option with good availability and easy support.',
    query: 'Philips 800 series air purifier',
    bullets: ['Best for: everyday use', 'Compare filter costs'],
  },
  {
    title: 'Shark small room HEPA purifier',
    badge: 'Easy use',
    desc: 'Look for quiet operation and sensible replacement filters.',
    query: 'Shark air purifier small room HEPA',
    bullets: ['Best for: simple setup', 'Check room size coverage'],
  },
  {
    title: 'Meaco small room HEPA purifier',
    badge: 'Quiet sleep',
    desc: 'Meaco models are often chosen for low-noise bedrooms.',
    query: 'Meaco air purifier small room',
    bullets: ['Best for: light sleepers', 'Prioritise low noise'],
  },
]

export default function Page() {
  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Air Purifiers for Small Flats (UK)',
    dateModified: '2026-01-25',
    datePublished: '2026-01-25',
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Best air purifiers for small flats (UK)</h1>
        <p className="mt-3 text-zinc-700">
          In small spaces, noise and filter costs matter more than fancy features. Buy the unit you’ll actually run every day.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/picks/air-quality">Air quality hub</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Allergies list</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">The 3 checks</h2>
          <ol className="mt-3 list-decimal pl-6 text-sm text-zinc-700 space-y-2">
            <li>Room size coverage</li>
            <li>Noise (night mode)</li>
            <li>Filter replacement cost</li>
          </ol>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Where to place it</h2>
          <p className="mt-3 text-sm text-zinc-700">Put it where air can flow — not hidden behind furniture.</p>
          <Link className="btn-secondary mt-4 inline-flex" href="/guides/healthy-air-at-home">Placement tips</Link>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">When to upgrade</h2>
          <p className="mt-3 text-sm text-zinc-700">If you’re opening doors constantly or have a big living room, you may need a larger unit.</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer picks)</h2>
        <p className="mt-2 text-sm text-zinc-600">Curated searches to compare prices and filter costs.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {PICKS.map((p) => (
            <ProductPick
              key={p.title}
              title={p.title}
              badge={p.badge}
              description={p.desc}
              href={amazonSearchUrl(p.query)}
              bullets={p.bullets}
            />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/picks/air-quality">Go to Air Quality hub →</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Allergies list →</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">
        Some links may earn us a commission at no extra cost to you. We never accept paid placements in reviews.
      </p>
    </main>
  )
}
