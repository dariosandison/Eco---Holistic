import Link from 'next/link'
import Card from '@/components/Card'
import { listContent } from '@/lib/content'

export const metadata = { title: 'Guides | Wild & Well' }

export default function Page() {
  const items = listContent('guides')
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Guides</h1>

<section className="mt-16">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="text-2xl font-semibold">Best Of (quick buyer’s guides)</h2>
    <p className="mt-2 text-sm text-zinc-600">
      Prefer a faster answer? These pages are built for buying clarity: best overall, budget, and sensitive-household options.
    </p>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <Link href="/best-low-tox-products-for-beginners" className="card hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold">Best low‑tox products for beginners</h3>
        <p className="mt-1 text-sm text-zinc-600">The easiest first swaps that make the biggest difference.</p>
      </Link>
      <Link href="/best-water-filters-uk" className="card hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold">Best water filters (UK)</h3>
        <p className="mt-1 text-sm text-zinc-600">Practical choices for taste, scale, and common concerns.</p>
      </Link>
      <Link href="/best-natural-sleep-support" className="card hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold">Best natural sleep support</h3>
        <p className="mt-1 text-sm text-zinc-600">Comfort-first upgrades that help you stick with it.</p>
      </Link>
    </div>
  </div>
</section>
          <p className="mt-1 text-sm text-zinc-700">
            Practical, calm guidance for low‑tox and holistic living — with trusted picks inside.
          </p>
        </div>
        <Link href="/best-of" className="btn-primary w-full sm:w-auto text-center">
          Shop trusted picks
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <Card
            key={i.slug}
            href={`/guides/${i.slug}`}
            title={i.title}
            excerpt={i.description}
            image={i.image || '/placeholder.png'}
          />
        ))}
      </div>
    </div>
  )
}
