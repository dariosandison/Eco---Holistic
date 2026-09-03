import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { AWIN_PICKS } from '@/data/awinPicks'
import { buildPageMetadata } from '@/lib/pageMetadata'

export const metadata = buildPageMetadata({
  title: 'Best Air Quality Options UK — Purifiers, Dehumidifiers & Airflow',
  description: 'Compare UK air-quality routes by problem: particles and allergens, damp and humidity, filter replacements, airflow and cooling, with practical buying guidance and partner links.',
  path: '/air-quality-shortlist-uk',
  image: '/images/photography/air-quality.png',
})

function slugify(s = '') {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const ROUTES = [
  { title: 'Allergies, particles or smoke', text: 'Start with an air purifier sized properly for the room and compare replacement-filter costs.', target: 'air-purifiers' },
  { title: 'Damp, condensation or mould risk', text: 'Humidity control is the priority. A dehumidifier solves a different problem from an air purifier.', target: 'dehumidifiers' },
  { title: 'Existing unit needs maintenance', text: 'Replacement filters and consumables can determine the real long-term cost of ownership.', target: 'filters-replacements' },
  { title: 'Stuffy or overheated room', text: 'Fans and cooling improve comfort and circulation, but they do not remove particles in the way filtration does.', target: 'fans-circulation' },
]

export default function Page() {
  const picks = AWIN_PICKS.air || []
  const groupOrder = ['Air purifiers', 'Dehumidifiers', 'Filters & replacements', 'Fans & circulation', 'Air conditioning', 'Air quality']
  const groups = groupOrder
    .map((g) => ({ title: g, id: slugify(g), items: picks.filter((p) => p.group === g) }))
    .filter((g) => g.items.length)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">UK buying guide</p>
        <h1 className="mt-2 text-4xl font-bold">Indoor air: solve the right problem first</h1>
        <p className="mt-3 text-zinc-700">Air purifiers, dehumidifiers and fans are often marketed together, but they do different jobs. Start with the problem in the room, then compare the product category that actually addresses it.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics/air-quality">Learn the air-quality basics</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Air purifier guide</Link>
          <Link className="btn-secondary" href="/best-dehumidifiers-damp-mould-uk">Dehumidifier guide</Link>
          <Link className="btn-secondary" href="/blog/indoor-air-smoke-pollution-uk">Smoke & pollution guide</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Partner links may earn Wild & Well a commission at no extra cost to you. Check current specifications, filter costs and room-size guidance before buying.</p>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ROUTES.map((route) => (
          <a key={route.title} href={`#${route.target}`} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="font-semibold text-zinc-900">{route.title}</h2>
            <p className="mt-2 text-sm text-zinc-600">{route.text}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-zinc-900">Compare options →</span>
          </a>
        ))}
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Three buying checks that matter</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
          <li><strong>Match the room:</strong> use manufacturer room-size/CADR guidance rather than assuming a small unit will clean a large space effectively.</li>
          <li><strong>Budget for ownership:</strong> replacement filters and electricity can matter more than a small difference in purchase price.</li>
          <li><strong>Measure humidity when damp is the issue:</strong> a basic hygrometer can help you avoid guessing whether a dehumidifier is actually needed.</li>
        </ul>
      </section>

      {groups.map((g) => (
        <section key={g.id} className="mt-14 scroll-mt-28" id={g.id}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="section-title">{g.title}</h2>
              <p className="section-subtitle">Compare relevant Wild & Well partner options. Product details and availability can change.</p>
            </div>
            <Link href="/topics/air-quality" className="text-sm font-semibold text-zinc-700 underline underline-offset-4">How to choose</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {g.items.map((p) => (
              <ProductPick
                key={p.clickref}
                title={p.product}
                badge={p.badge}
                description={p.description}
                bullets={p.bullets}
                trackingContext={`air_shortlist_${g.id}`}
                links={[
                  { label: `Check ${p.badge || p.advertiser} details`, merchant: 'awin', href: p.awin, variant: 'primary' },
                  { label: 'Read buying guidance', merchant: 'internal', href: '/topics/air-quality', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">Is outdoor smoke or pollution the concern?</h2>
        <p className="mt-2 text-sm text-zinc-700">The priorities change during a short-term outdoor air event. Start with the practical guidance before assuming a new appliance is necessary.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/blog/indoor-air-smoke-pollution-uk">Read the smoke & pollution guide</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Compare air purifiers</Link>
        </div>
      </section>
    </main>
  )
}
