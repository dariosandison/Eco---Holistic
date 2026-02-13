import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Air quality shortlist (UK) — partner links',
  description: 'Air purifiers, dehumidifiers, filters, and airflow options — focused on practical home comfort (UK).',
}

function slugify(s = '') {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function Page() {
  const picks = AWIN_PICKS.air || []
  const groupOrder = ['Air purifiers', 'Dehumidifiers', 'Filters & replacements', 'Fans & circulation', 'Air conditioning', 'Air quality']

  const groups = groupOrder
    .map((g) => ({ title: g, id: slugify(g), items: picks.filter((p) => p.group === g) }))
    .filter((g) => g.items.length)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Air quality shortlist (UK)</h1>
        <p className="mt-3 text-zinc-700">
          Partner links for practical air comfort: filtration, humidity control, and airflow. Use sizing and running costs as your decision rules.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/air-quality">Air quality topic</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Air purifiers guide</Link>
          <Link className="btn-secondary" href="/best-dehumidifiers-damp-mould-uk">Dehumidifiers guide</Link>
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
          <li><strong>Air purifier:</strong> match CADR/room size and plan filter costs.</li>
          <li><strong>Dehumidifier:</strong> aim for indoor humidity ~40–60% (use a hygrometer).</li>
          <li><strong>Airflow:</strong> fans support comfort and ventilation, but don’t replace filtration when allergens/smoke are the issue.</li>
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
                  { label: 'Read the guide', merchant: 'internal', href: '/topics/air-quality', variant: 'ghost' },
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
