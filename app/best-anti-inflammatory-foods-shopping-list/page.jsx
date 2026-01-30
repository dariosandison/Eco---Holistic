import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ComparisonTable from '@/components/ComparisonTable'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageFAQ from '@/components/MoneyPageFAQ'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'




export const metadata = {
  title: 'Anti-inflammatory-style shopping list: simple staples | Wild & Well',
  description:
    'A simple UK-friendly shopping list built around fibre, colourful plants, and healthy fats — without medical claims or “superfood” hype.',
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-anti-inflammatory-foods-shopping-list')

const url = `${SITE_URL}/best-anti-inflammatory-foods-shopping-list`

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Anti-inflammatory-style shopping list: simple staples',
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
        <h1 className="text-4xl font-bold">Anti-inflammatory-style shopping list: simple staples</h1>
        <p className="mt-3 text-zinc-700">
          “Anti-inflammatory” works best as a pattern: more fibre and colourful plants, sensible fats, and fewer ultra‑processed extras.
          This list is food-first and UK-friendly.
        </p>

        <EducationFirstCallout topicHref="/topics" topicLabel="Explore topics" insightHref="/blog" insightLabel="Read Wellness Insights" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/shopping-list">Get the free shopping list</Link>
          <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
          <Link className="btn-secondary" href="/best-extra-virgin-olive-oil-uk">Olive oil favourites</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 29, 2026</p>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-10">
        <h2 className="text-2xl font-semibold">Staples (buy once, use all week)</h2>
        <ComparisonTable
          caption="A simple weekly basket"
          columns={[
            { key: 'group', label: 'Group' },
            { key: 'examples', label: 'Examples' },
            { key: 'use', label: 'Easy use' },
          ]}
          rows={[
            { group: 'Healthy fats', examples: 'Extra virgin olive oil; nuts/seeds', use: 'Dressings, veg, soups' },
            { group: 'Fibre base', examples: 'Oats; legumes; wholegrains', use: 'Breakfast, lunches' },
            { group: 'Colour', examples: 'Berries; leafy greens; peppers', use: 'Add 1–2 portions/day' },
            { group: 'Flavour', examples: 'Garlic, ginger, herbs, spices', use: 'Make meals taste good' },
            { group: 'Protein', examples: 'Eggs, yoghurt, fish, beans', use: 'Simple, repeatable meals' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">How to use this list</h2>
        <ul className="mt-3 list-disc pl-6 text-zinc-700 space-y-1 max-w-3xl">
          <li>Pick one “default” breakfast (oats, yoghurt, eggs) and repeat it.</li>
          <li>Build lunches around fibre + protein (beans, lentils, tinned fish, leftovers).</li>
          <li>Add colour: one extra portion of fruit/veg per day is a win.</li>
          <li>Keep snacks simple (fruit + nuts; yoghurt + berries). See: <Link className="underline" href="/best-organic-snacks-healthy">snack favourites</Link>.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Related shortlists</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/best-extra-virgin-olive-oil-uk">Extra virgin olive oil</Link>
          <Link className="btn-secondary" href="/best-organic-oats-uk">Organic oats</Link>
          <Link className="btn-secondary" href="/best-organic-cooking-oils-uk">Cooking oils toolkit</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        This page is informational and not medical advice.
      </p>
    
      <MoneyPageNextLinks slug="best-anti-inflammatory-foods-shopping-list" />


      <MoneyPageFAQ slug="best-anti-inflammatory-foods-shopping-list" />

</main>
  )
}