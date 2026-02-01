import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageQuickCompare from '@/components/MoneyPageQuickCompare'
import MoneyPageFAQ from '@/components/MoneyPageFAQ'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'




export const metadata = {
  title: 'Shower Filters for UK Hard Water: shortlist | Wild & Well',
  description: 'Shortlisted shower filters for hard-water UK homes — what they can and can’t do, plus buyer shortlist.',
}

const PICKS = [
  {
    title: 'Hello Klean shower filter',
    badge: 'Popular pick',
    desc: 'A widely discussed shower filter brand. Good if you want simple replacements.',
    query: 'Hello Klean shower filter',
    bullets: ['Great for: simple setup', 'Check cartridge replacement cost', 'Don’t expect miracles on extreme hard water'],
  },
  {
    title: 'Magichome shower filter',
    badge: 'Budget',
    desc: 'Budget-friendly option often compared on UK lists.',
    query: 'Magichome shower filter hard water',
    bullets: ['Great for: budget trials', 'Check replacement cartridges'],
  },
  {
    title: 'Philips shower filter',
    badge: 'Mainstream',
    desc: 'Mainstream brand option with broad availability.',
    query: 'Philips shower filter',
    bullets: ['Great for: easy repurchase', 'Check flow rate'],
  },
  {
    title: 'Universal replacement cartridges (multi-pack)',
    badge: 'Save long-term',
    desc: 'Cartridges are the ongoing cost — buying multipacks can reduce cost per change.',
    query: 'shower filter replacement cartridge multi pack',
    bullets: ['Compare compatibility with your filter model', 'Set reminders for replacements'],
  },
]

export default function Page() {
    
  const edu = getMoneyPageEdu('best-shower-filters-uk-hard-water')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Shower Filters for UK Hard Water: shortlist',
    dateModified: '2026-01-25',
    datePublished: '2026-01-25',
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Shower filters for UK hard water: shortlist</h1>
        <p className="mt-3 text-zinc-700">
          Shower filters can help with feel and chlorine-related dryness for some people — but they won’t “soften” water like a full home softener.
        </p>

        <EducationFirstCallout topicHref="/topics/water" topicLabel="Water topic" insightHref="/blog/water-filter-buying-guide-uk" insightLabel="Water filter buying guide" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/fragrance-free">Sensitive skin</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />

      <MoneyPageQuickCompare picks={PICKS} />
<section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">What they can do</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>Reduce chlorine and some impurities (varies by cartridge).</li>
            <li>Improve hair/skin feel for some households.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">What they can’t do</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>Fully soften hard water like a whole-home system.</li>
            <li>Replace good ventilation for damp bathrooms.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Hidden cost</h2>
          <p className="mt-3 text-sm text-zinc-700">Cartridges. Before buying, check the price and replacement schedule.</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer-friendly)</h2>
        <p className="mt-2 text-sm text-zinc-600">Curated searches so you can compare price and replacement cartridges.</p>
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
          <Link className="btn-primary" href="/topics/fragrance-free">Go to Sensitive household →</Link>
          <Link className="btn-secondary" href="/shopping-list">Get the free shopping list</Link>
        </div>
      </section>
      <MoneyPageNextLinks slug="best-shower-filters-uk-hard-water" />

      
      <MoneyPageFAQ slug="best-shower-filters-uk-hard-water" />
<p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links.
      </p>
    </main>
  )
}