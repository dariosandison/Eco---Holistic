import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Best Water Filtration Options UK — Bottles, Jugs & Under-Sink',
  description: 'Compare UK water filtration routes by use case: portable filter bottles, countertop jugs, gravity systems and under-sink filtration, with running-cost checks and partner links.',
}

function slugify(s = '') {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const ROUTES = [
  { title: 'Portable / travel', text: 'A filter bottle is the lowest-friction route when portability matters.', target: 'filter-bottles-replacements' },
  { title: 'Simple countertop', text: 'Jugs and dispensers suit renters or anyone avoiding installation.', target: 'jugs-dispensers' },
  { title: 'Higher-capacity home use', text: 'Under-sink and RO systems trade installation and cost for convenience and capacity.', target: 'under-sink-ro' },
  { title: 'Backup / gravity', text: 'Gravity systems can be useful where you want filtration that does not depend on plumbing.', target: 'gravity-shower-filtration' },
]

export default function Page() {
  const picks = AWIN_PICKS.water || []
  const groupOrder = ['Filter bottles & replacements', 'Jugs & dispensers', 'Under-sink / RO', 'Gravity & shower filtration', 'Other']
  const groups = groupOrder
    .map((g) => ({ title: g, id: slugify(g), items: picks.filter((p) => p.group === g) }))
    .filter((g) => g.items.length)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">UK buying guide</p>
        <h1 className="mt-2 text-4xl font-bold">Water filtration: choose the right route first</h1>
        <p className="mt-3 text-zinc-700">Don't start with brands. Decide whether you need portable filtration, a simple countertop option, a plumbed-in system or a gravity backup — then compare products within that category.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-water-filters-uk">Read the full water-filter guide</Link>
          <Link className="btn-secondary" href="/blog/72-hour-water-plan-uk">Build a 72-hour water plan</Link>
          <Link className="btn-secondary" href="/topics/water">Water topic</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">How affiliate links work</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Partner links may earn Wild & Well a commission at no extra cost to you. Compare specifications and current prices on the merchant site before buying.</p>
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
        <h2 className="text-lg font-semibold">Three checks before clicking “buy”</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
          <li><strong>What problem are you solving?</strong> Taste, specific contaminants, portability and hard-water comfort are different jobs.</li>
          <li><strong>What will it cost to keep?</strong> Check replacement-filter price, stated life and availability rather than comparing purchase price alone.</li>
          <li><strong>Will you maintain it?</strong> Cleaning and timely cartridge replacement are part of owning any filtration system.</li>
        </ul>
      </section>

      {groups.map((g) => (
        <section key={g.id} className="mt-14 scroll-mt-28" id={g.id}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="section-title">{g.title}</h2>
              <p className="section-subtitle">Compare relevant Wild & Well partner options. Prices and availability can change.</p>
            </div>
            <Link href="/best-water-filters-uk" className="text-sm font-semibold text-zinc-700 underline underline-offset-4">Buying criteria</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {g.items.map((p) => (
              <ProductPick
                key={p.clickref}
                title={p.product}
                badge={p.badge}
                description={p.description}
                bullets={p.bullets}
                links={[
                  { label: `Check ${p.badge || p.advertiser} price`, merchant: 'awin', href: p.awin, variant: 'primary' },
                  { label: 'Read buying guide', merchant: 'internal', href: '/best-water-filters-uk', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">Planning for an interruption rather than everyday filtration?</h2>
        <p className="mt-2 text-sm text-zinc-700">Stored drinking water comes first. Filtration can be a useful additional layer, but it should not replace a sensible household water reserve.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/blog/72-hour-water-plan-uk">72-hour water plan</Link>
          <Link className="btn-secondary" href="/blog/72-hour-household-emergency-kit-uk">72-hour household kit</Link>
        </div>
      </section>
    </main>
  )
}
