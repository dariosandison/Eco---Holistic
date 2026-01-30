import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ComparisonTable from '@/components/ComparisonTable'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'


export const metadata = {
  title: 'Non-toxic cookware: starter favourites | Wild & Well',
  description: 'A simple non-toxic cookware starter shortlist: what to buy first, what to skip, and how to avoid overbuying.',
}

const PICKS = [
  {
    title: 'Stainless steel frying pan (everyday)',
    badge: 'First buy',
    desc: 'A workhorse pan you’ll use daily. Learn heat control once and you’re set.',
    query: 'stainless steel frying pan 24cm UK',
    bullets: ['Great for: most cooking', 'Look for: thick base + comfortable handle', 'Use medium heat; preheat properly'],
  },
  {
    title: 'Cast iron skillet (simple + durable)',
    badge: 'Budget-friendly',
    desc: 'Great once seasoned and cared for. Heavy, but lasts forever.',
    query: 'cast iron skillet pre-seasoned UK',
    bullets: ['Great for: searing + oven use', 'Watch-out: heavy + needs drying', 'Seasoning maintenance is the tradeoff'],
  },
  {
    title: 'Stainless steel saucepan (1–2L)',
    badge: 'Every kitchen',
    desc: 'For sauces, grains, and reheating. Start with one good pot, not a full set.',
    query: 'stainless steel saucepan 1.5L UK',
    bullets: ['Great for: daily basics', 'Look for: tight lid + solid base', 'Avoid buying sets you won’t use'],
  },
  {
    title: 'Enameled cast iron (dutch oven)',
    badge: 'If you cook a lot',
    desc: 'Optional, but brilliant for soups, stews, and slow cooking.',
    query: 'enameled cast iron dutch oven UK',
    bullets: ['Great for: batch cooking', 'Watch-out: expensive + heavy', 'Great if you actually use it weekly'],
  },
]

function QuickSummary(){
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">At a glance</h2>
      <p className="mt-2 text-zinc-700">
        If you’re starting from scratch, buy <strong>one</strong> high‑quality pan you’ll use daily (usually stainless steel),
        then add pieces only if you genuinely need them. Heat control and cooking habits matter more than chasing perfection.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/topics/fragrance-free">Low-tox kitchen basics</Link>
        <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        <Link className="btn-secondary" href="/favourites">Browse favourites</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: January 29, 2026</p>
    </div>
  )
}

export default function Page(){
    const edu = getMoneyPageEdu('best-non-toxic-cookware-starter')
const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Non-toxic cookware: starter favourites',
    dateModified: '2026-01-29',
    datePublished: '2026-01-29',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: itemList,
    },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do I need to replace all cookware at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Replace the most-used piece first (often a frying pan), then add only what you actually cook with.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is stainless steel better than non-stick?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stainless steel is durable and versatile, but it requires basic heat control. If you use non-stick, treat it as a consumable and replace it when damaged.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I avoid?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Avoid buying large sets you won’t use, and avoid overheating or using damaged coatings. Choose durable basics and use them well.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Non-toxic cookware: starter favourites</h1>
        <p className="mt-3 text-zinc-700">A simple shortlist — what to buy first, what to skip, and how to avoid overbuying.</p>

        <EducationFirstCallout topicHref="/blog" topicLabel="Read starter explainers" insightHref="/blog/non-toxic-cleaning-starter" insightLabel="Non‑toxic cleaning starter" />
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-10">
        <QuickSummary />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What to buy first</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card p-5">
            <h3 className="text-lg font-semibold">1) One everyday pan</h3>
            <p className="mt-2 text-sm text-zinc-700">Start with stainless steel or cast iron — whichever you’ll actually use.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: technique matters (preheat + medium heat).</p>
          </div>
          <div className="card p-5">
            <h3 className="text-lg font-semibold">2) One small pot</h3>
            <p className="mt-2 text-sm text-zinc-700">A saucepan covers grains, sauces, soups, and reheating.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: don’t buy sets unless you’ll use every piece.</p>
          </div>
          <div className="card p-5">
            <h3 className="text-lg font-semibold">3) Add only if needed</h3>
            <p className="mt-2 text-sm text-zinc-700">A dutch oven is great, but only if you cook stews/soups regularly.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: expensive + heavy.</p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (favourites)</h2>
        <p className="mt-2 text-sm text-zinc-600">Curated searches so you can compare current prices and reviews.</p>
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

        <ComparisonTable
          caption="At-a-glance comparison"
          columns={[
            { key: 'material', label: 'Material' },
            { key: 'bestFor', label: 'Great for' },
            { key: 'tradeoff', label: 'Main tradeoff' },
            { key: 'care', label: 'Care notes' },
          ]}
          rows={[
            {
              material: 'Stainless steel',
              bestFor: 'Most everyday cooking',
              tradeoff: 'Needs basic heat control',
              care: 'Preheat + medium heat; deglaze to clean',
            },
            {
              material: 'Cast iron',
              bestFor: 'Searing + oven use',
              tradeoff: 'Heavy + needs seasoning care',
              care: 'Dry fully; light oil; re-season if needed',
            },
            {
              material: 'Enameled cast iron',
              bestFor: 'Soups/stews/batch cooking',
              tradeoff: 'Price + weight',
              care: 'Avoid thermal shock; use gentle utensils',
            },
          ]}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/favourites">Back to favourites →</Link>
          <Link className="btn-secondary" href="/shopping-list">Get the free shopping list</Link>
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-5 text-zinc-700">
          <div>
            <h3 className="font-semibold">Do I need a full set?</h3>
            <p className="mt-1 text-sm">Usually no. Most people cook with a few core pieces — buy those first.</p>
          </div>
          <div>
            <h3 className="font-semibold">What if food sticks on stainless steel?</h3>
            <p className="mt-1 text-sm">Preheat, use medium heat, and add oil before food. It’s a technique upgrade, not a product problem.</p>
          </div>
          <div>
            <h3 className="font-semibold">When should I replace non-stick?</h3>
            <p className="mt-1 text-sm">Replace if the coating is scratched, peeling, or damaged. Don’t overheat it.</p>
          </div>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links may earn us a small commission at no extra cost to you.
      </p>
    </main>
  )
}