import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Best Fragrance‑Free Laundry Detergents (UK) | Wild & Well',
  description: 'A shortlist of fragrance‑free detergents for sensitive households in the UK — what to look for, what to avoid, and quick buyer picks.',
}

const PICKS = [
  {
    title: 'Ecover ZERO (fragrance-free)',
    badge: 'Mainstream favourite',
    desc: 'Fragrance-free detergent designed for sensitive skin.',
    query: 'Ecover ZERO laundry liquid fragrance free',
    bullets: ['Fragrance-free', 'Easy to repurchase in the UK', 'Consider refills to cut plastic'],
  },
  {
    title: 'Surcare 0% Non‑Bio',
    badge: 'Sensitive skin',
    desc: 'A popular sensitive-skin option with wide UK availability.',
    query: 'Surcare non bio laundry liquid 0% fragrance',
    bullets: ['0% fragrance/dyes/enzymes', 'Great for bedding and towels'],
  },
  {
    title: 'Bio‑D Fragrance Free',
    badge: 'Refill-friendly',
    desc: 'Often available in larger sizes and refills.',
    query: 'Bio-D fragrance free laundry liquid',
    bullets: ['Fragrance-free', 'Check local refill shops', 'Good for regular washing'],
  },
  {
    title: 'Miniml Non‑Bio (sensitive)',
    badge: 'Budget refill',
    desc: 'Often found in refill formats; check the sensitive/fragrance-free variant.',
    query: 'Miniml non bio laundry liquid sensitive fragrance free',
    bullets: ['Look for sensitive variants', 'Refill options can reduce waste'],
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
    headline: 'Best Fragrance‑Free Laundry Detergents (UK)',
    dateModified: '2026-01-25',
    datePublished: '2026-01-25',
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Best fragrance‑free laundry detergents (UK)</h1>
        <p className="mt-3 text-zinc-700">
          Laundry touches your skin all day. If you’re sensitive to scent, detergent is the highest-impact swap.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/picks/fragrance-free">Fragrance-free hub</Link>
          <Link className="btn-secondary" href="/guides/eco-laundry">Laundry guide</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">What to look for</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li><strong>Fragrance-free</strong> (not “natural fragrance”).</li>
            <li>Simple ingredient lists.</li>
            <li>Realistic dosing (avoid residue).</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Common mistake</h2>
          <p className="mt-3 text-sm text-zinc-700">Overdosing detergent. More isn’t cleaner — it often leaves residue.</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Easy comfort win</h2>
          <p className="mt-3 text-sm text-zinc-700">Wash bedding/towels fragrance-free and add an extra rinse for a week.</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer picks)</h2>
        <p className="mt-2 text-sm text-zinc-600">Curated searches so you can compare sizes and prices.</p>
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
          <Link className="btn-primary" href="/picks/fragrance-free">Go to Fragrance-free hub →</Link>
          <Link className="btn-secondary" href="/guides/non-toxic-cleaning-starter">Cleaning starter</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">
        Some links may earn us a commission at no extra cost to you. We never accept paid placements in reviews.
      </p>
    </main>
  )
}
