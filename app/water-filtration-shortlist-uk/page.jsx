import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Water filtration shortlist (UK) — partner links',
  description: 'Filter bottles, jugs, under‑sink systems, and shower options that fit Wild & Well’s low‑friction approach.',
}

function slugify(s = '') {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function Page() {
  const picks = AWIN_PICKS.water || []
  const groupOrder = [
    'Filter bottles & replacements',
    'Jugs & dispensers',
    'Under-sink / RO',
    'Gravity & shower filtration',
    'Other',
  ]

  const groups = groupOrder
    .map((g) => ({ title: g, id: slugify(g), items: picks.filter((p) => p.group === g) }))
    .filter((g) => g.items.length)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Water filtration shortlist (UK)</h1>
        <p className="mt-3 text-zinc-700">
          A hand‑picked set of partner links that match Wild &amp; Well’s focus: practical filtration, lower‑waste options, and
          sensible running costs.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/best-water-filters-uk">Read the water filters guide</Link>
          <Link className="btn-secondary" href="/topics/water">Water topic</Link>
          <Link className="btn-secondary" href="/best-shower-filters-uk-hard-water">Shower filters guide</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {groups.map((g) => (
            <a key={g.id} className="chip" href={`#${g.id}`}>{g.title}</a>
          ))}
        </div>

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026</p>
      </header>

      <section className="mt-12 panel">
        <h2 className="text-lg font-semibold">Quick buying cues</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li><strong>Decide the “job”:</strong> taste, limescale, chlorine, travel safety, or hard‑water skin comfort.</li>
          <li><strong>Check running costs:</strong> replacement filters/cartridges often matter more than the bottle/jug price.</li>
          <li><strong>Keep it maintainable:</strong> the best system is the one you’ll actually clean and maintain.</li>
        </ul>
      </section>

      {groups.map((g) => (
        <section key={g.id} className="mt-14" id={g.id}>
          <h2 className="section-title">{g.title}</h2>
          <p className="section-subtitle">Direct partner links for comparison (UK).</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {g.items.map((p) => (
              <ProductPick
                key={p.clickref}
                title={p.product}
                badge={p.badge}
                description={p.description}
                bullets={p.bullets}
                links={[
                  { label: 'Check price', merchant: 'awin', href: p.awin, variant: 'primary' },
                  { label: 'Go to guide', merchant: 'internal', href: '/best-water-filters-uk', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ))}

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission (at no extra cost to you).
      </p>
    </main>
  )
}
