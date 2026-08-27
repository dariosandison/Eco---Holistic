import Link from 'next/link'
import ShortlistExplorer from '@/components/ShortlistExplorer'
import { SHORTLIST_SECTIONS, flattenShortlists } from '@/lib/shortlistsData'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'UK Wellness & Healthy Home Shortlists',
  description:
    'Buyer-friendly UK shortlists for air, water, sleep, nutrition, movement, low-tox home and practical resilience, with clear trade-offs and practical buying guidance.',
}

const BUYING_PATHS = [
  {
    title: 'Cleaner water',
    problem: 'Taste, convenience, hard-water comfort or backup filtration.',
    learn: '/topics/water',
    compare: '/water-filtration-shortlist-uk',
    extra: { label: 'Shower filters for hard water', href: '/best-shower-filters-uk-hard-water' },
  },
  {
    title: 'Cleaner indoor air',
    problem: 'Particles, allergies, damp, humidity or pollution events.',
    learn: '/topics/air-quality',
    compare: '/air-quality-shortlist-uk',
  },
  {
    title: 'Better sleep & recovery',
    problem: 'Comfort, bedding, temperature and simple recovery upgrades.',
    learn: '/topics/sleep',
    compare: '/sleep-recovery-shortlist-uk',
  },
  {
    title: 'Food-first nutrition',
    problem: 'Real-food protein, convenient meals, pantry staples and hydration before supplements.',
    learn: '/nutrition',
    compare: '/nutrition/food-first-shortlist',
  },
  {
    title: 'Lower-tox home',
    problem: 'High-use household swaps across laundry, cookware, showering and bathroom basics.',
    learn: '/healthy-home',
    compare: '/healthy-home/low-tox-shortlist',
    extra: { label: 'Fragrance-free laundry', href: '/best-fragrance-free-laundry-detergents-uk' },
  },
  {
    title: 'Movement that sticks',
    problem: 'Walking, foot strength, home training and useful tracking.',
    learn: '/movement',
    compare: '/movement/movement-shortlist',
  },
  {
    title: 'Practical resilience',
    problem: 'Water, food, power and useful household backup basics.',
    learn: '/topics/resilience',
    compare: '/blog/72-hour-household-emergency-kit-uk',
  },
]

export default function Page() {
  const flat = flattenShortlists(SHORTLIST_SECTIONS)
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Wild & Well shortlists',
    itemListElement: (flat || []).map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      url: `${SITE_URL}${it.href}`,
    })),
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={itemList} />
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Compare without the overwhelm</p>
        <h1 className="mt-2 text-4xl font-bold">UK wellness & healthy-home shortlists</h1>
        <p className="mt-3 text-zinc-700">
          Start with the problem, learn what matters, then compare a small number of sensible options. We focus on useful trade-offs rather than giant product lists.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics">Learn first</Link>
          <Link className="btn-secondary" href="/shopping-list">Get the free shopping list</Link>
          <Link className="btn-secondary" href="/deals">Browse current deals</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Some links are affiliate links. If you buy through them, Wild & Well may earn a commission at no extra cost to you.</p>
      </header>

      <section className="mt-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-zinc-900">Choose what you want to improve</h2>
          <p className="mt-2 text-zinc-700">These fast paths connect our educational guides to the comparison pages most likely to help with a buying decision.</p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {BUYING_PATHS.map((path) => (
            <article key={path.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-zinc-900">{path.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{path.problem}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href={path.learn} className="btn-secondary">Learn first</Link>
                <Link href={path.compare} className="btn-primary">See the best route</Link>
              </div>
              {path.extra && (
                <Link href={path.extra.href} className="mt-4 inline-block text-sm font-semibold text-zinc-700 underline underline-offset-4">
                  {path.extra.label} →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <ShortlistExplorer sections={SHORTLIST_SECTIONS} />
      </section>

      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-lg font-semibold text-zinc-900">A simple way to buy better</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-sm text-zinc-700">
          <li>Choose one problem area rather than browsing products at random.</li>
          <li>Read the relevant guide so you know which specifications actually matter.</li>
          <li>Compare two or three suitable options, including ongoing costs such as filters or consumables.</li>
          <li>Buy only when the upgrade solves a real problem in your home or routine.</li>
        </ol>
      </section>
    </main>
  )
}
