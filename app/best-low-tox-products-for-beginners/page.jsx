import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ComparisonTable from '@/components/ComparisonTable'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Low‑tox products for beginners: starter favourites | Wild & Well',
  description: 'A simple, UK‑friendly starter path: where to begin, what to avoid, and the few pages that help most people first.',
}

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
  const url = `${SITE_URL}/best-low-tox-products-for-beginners`

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Low‑tox products for beginners: starter favourites',
    datePublished: '2026-01-25',
    dateModified: '2026-01-29',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-default.jpg` },
    },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where should I start if I only change one thing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start where you will notice the difference: fragrance‑free laundry/cleaning for many homes, or a right‑sized HEPA air purifier for bedrooms and allergies. Pick one change you can keep doing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to replace everything at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. One replacement you actually maintain is more valuable than a big overhaul you abandon. Build a short “repeatable” setup first.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the most common hidden cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Consumables: filters, refills, and replacements. Before buying, check replacement prices and how often you will realistically replace them.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Low‑tox products for beginners: starter favourites</h1>
        <p className="mt-3 text-zinc-700">
          If you’re new, this page is your shortcut: one small change first, then build from there. No perfect “everything list” — just the pages that help most UK readers make a good first decision.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/shopping-list">Get the free shopping list</Link>
          <Link className="btn-secondary" href="/topics">Browse Topics</Link>
          <Link className="btn-secondary" href="/favourites">Browse Favourites</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 29, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Start with one of these (most useful first)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Choose ONE route based on your home: allergies/bedroom air, daily water, or fragrance‑free basics. Then stop.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StartCard
            title="Air purifiers for allergies (UK)"
            desc="Right size, filter costs, and what matters for bedrooms."
            href="/best-air-purifiers-allergies-uk"
            tag="Air"
          />
          <StartCard
            title="Water filters (UK)"
            desc="Jug vs under‑sink vs countertop — plus the real ongoing costs."
            href="/best-water-filters-uk"
            tag="Water"
          />
          <StartCard
            title="Fragrance‑free laundry (UK)"
            desc="Simple options for sensitive homes — and what to avoid on labels."
            href="/best-fragrance-free-laundry-detergents-uk"
            tag="Laundry"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">The beginner decision rules</h2>
        <ComparisonTable
          caption="A calm decision framework you can reuse"
          columns={[
            { key: 'goal', label: 'Your goal' },
            { key: 'choose', label: 'Choose this type' },
            { key: 'why', label: 'Why it works' },
            { key: 'check', label: 'Check first' },
          ]}
          rows={[
            {
              goal: 'You want the simplest reliable start',
              choose: 'A widely available, well‑reviewed option',
              why: 'Consistency beats the “perfect” product you never use',
              check: 'Replacement parts/consumables and returns',
            },
            {
              goal: 'You want value',
              choose: 'The simplest model that meets the job',
              why: 'Avoid paying for features you won’t use',
              check: 'Total cost over 12 months (filters/refills)',
            },
            {
              goal: 'Your home is sensitive (fragrance/irritation)',
              choose: 'Fragrance‑free and minimal‑ingredient products',
              why: 'Reducing triggers is often the biggest comfort win',
              check: 'Ingredients, dosing, and residue/overuse',
            },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Learn (when you want the context)</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/non-toxic-cleaning-starter">Non‑toxic cleaning starter</Link>
          <Link className="btn-secondary" href="/blog/low-tox-kitchen">Low‑tox kitchen basics</Link>
          <Link className="btn-secondary" href="/blog/healthy-air-at-home">Healthy air at home</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links may earn us a small commission at no extra cost to you. We never accept paid placements in reviews.
      </p>
    </main>
  )
}
