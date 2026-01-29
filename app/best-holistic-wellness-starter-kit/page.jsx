import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import ComparisonTable from '@/components/ComparisonTable'
import { amazonSearchUrl } from '@/lib/amazon'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Holistic wellness starter kit: a small, repeatable setup | Wild & Well',
  description:
    'A calm, minimal starter kit: the few upgrades that improve air, water, sleep, and daily routines without turning wellness into a project.',
}

const PICKS = [
  {
    title: 'Fragrance‑free laundry basics',
    badge: 'High impact',
    desc: 'A simple swap many households notice quickly — and it’s easy to maintain long‑term.',
    query: 'fragrance free laundry detergent sensitive UK',
    bullets: ['Avoid heavy fragrance', 'Don’t over-dose', 'Skip fabric softener if possible'],
    internal: '/best-fragrance-free-laundry-detergents-uk',
  },
  {
    title: 'Water filter (choose the right type)',
    badge: 'Daily use',
    desc: 'Pick a type you will keep up with. Filter costs matter as much as the product.',
    query: 'water filter jug UK',
    bullets: ['Check replacement filter costs', 'Choose realistic maintenance', 'Avoid gimmicks'],
    internal: '/best-water-filters-uk',
  },
  {
    title: 'Bedroom air purifier (right size)',
    badge: 'Air',
    desc: 'Useful for bedrooms and allergies when you choose correct coverage and filter costs.',
    query: 'HEPA air purifier bedroom UK',
    bullets: ['Match CADR/room size', 'Check filter prices', 'Quiet mode matters'],
    internal: '/best-air-purifiers-allergies-uk',
  },
  {
    title: 'Blackout support (curtains or eye mask)',
    badge: 'Sleep',
    desc: 'Light control is a simple, non‑gimmick sleep upgrade for many people.',
    query: 'blackout curtains thermal UK',
    bullets: ['Start with bedroom', 'Aim for consistent darkness', 'Keep it comfortable'],
  },
  {
    title: 'A simple food-first staple habit',
    badge: 'Nutrition',
    desc: 'The biggest win is a repeatable breakfast/snack. You don’t need endless supplements.',
    query: 'organic oats UK',
    bullets: ['Pick a repeatable meal', 'Add protein/fibre', 'Keep ingredients simple'],
  },
  {
    title: 'Gentle movement default',
    badge: 'Movement',
    desc: 'Choose a default you can repeat: walking, mobility, or short strength sessions.',
    query: 'resistance bands set home workout',
    bullets: ['Make it easy to start', 'Short sessions count', 'Consistency wins'],
  },
]

function StartCard({ title, desc, href, tag }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{desc}</p>
        </div>
        {tag ? (
          <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{tag}</span>
        ) : null}
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  )
}

export default function Page() {
  const url = `${SITE_URL}/best-holistic-wellness-starter-kit`

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Holistic wellness starter kit: a small, repeatable setup',
    datePublished: '2026-01-24',
    dateModified: '2026-01-29',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-default.jpg` },
    },
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Holistic wellness starter kit: a small, repeatable setup</h1>
        <p className="mt-3 text-zinc-700">
          A “starter kit” that won’t take over your life: choose a few high‑leverage upgrades, then keep them going.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          <Link className="btn-secondary" href="/topics">Browse Topics</Link>
          <Link className="btn-secondary" href="/favourites">Browse Favourites</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 29, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Start here (pick one path)</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StartCard title="Sleep" desc="Light, routine, and the basics that actually move the needle." href="/topics/sleep" tag="Sleep" />
          <StartCard title="Air" desc="Bedrooms and allergies: right-sized HEPA and low-tox basics." href="/topics/air" tag="Air" />
          <StartCard title="Nutrition" desc="Food-first, repeatable meals, and simple staples." href="/nutrition" tag="Food" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">The three rules (so it stays easy)</h2>
        <ComparisonTable
          caption="A starter kit that sticks"
          columns={[
            { key: 'rule', label: 'Rule' },
            { key: 'why', label: 'Why' },
            { key: 'example', label: 'Example' },
          ]}
          rows={[
            { rule: 'One change at a time', why: 'You can tell what helped', example: 'Swap laundry first, then wait a week' },
            { rule: 'Watch the ongoing costs', why: 'Filters/refills are the real expense', example: 'Check filter prices before buying a purifier' },
            { rule: 'Choose what you will repeat', why: 'Consistency beats “perfect”', example: 'A simple breakfast you enjoy' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Starter shortlist (UK‑friendly searches)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Where we have a dedicated page, we link internally. Otherwise we link to searches so you can compare availability.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {PICKS.map((p) => (
            <ProductPick
              key={p.title}
              title={p.title}
              badge={p.badge}
              description={p.desc}
              href={p.internal ? p.internal : amazonSearchUrl(p.query)}
              bullets={p.bullets}
            />
          ))}
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links may earn us a small commission at no extra cost to you.
      </p>
    </main>
  )
}
