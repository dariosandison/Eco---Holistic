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
  title: 'Everyday foods that support your body',
  description:
    'Food-first overview: hydration, fibre, and simple staples that support your body’s normal processes — without “detox” claims.',
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-detox-support-foods')

const url = `${SITE_URL}/best-detox-support-foods`

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Everyday foods that support your body',
    datePublished: '2026-01-24',
    dateModified: '2026-02-02',
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

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Everyday foods that support your body</h1>
        <p className="mt-3 text-zinc-700">
          “Detox” is a marketing term. Your body already has systems for processing and eliminating waste. What helps most is hydration, fibre, and stable meals.
        </p>

                </div>

        {/* Hero image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/nutrition.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
<EducationFirstCallout topicHref="/topics" topicLabel="Explore topics" insightHref="/blog" insightLabel="Read Wellness Insights" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          <Link className="btn-secondary" href="/blog/food-first-basics">Food‑first basics</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
              </div>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-10">
        <h2 className="text-2xl font-semibold">What actually helps</h2>
        <ComparisonTable
          caption="High-leverage basics"
          columns={[
            { key: 'thing', label: 'Thing' },
            { key: 'why', label: 'Why it matters' },
            { key: 'simple', label: 'Simple start' },
          ]}
          rows={[
            { thing: 'Hydration', why: 'Supports normal digestion and daily energy', simple: 'Keep a bottle nearby; add a glass with each meal' },
            { thing: 'Fibre', why: 'Supports regularity and gut comfort for many people', simple: 'Add oats/beans/veg; increase gradually' },
            { thing: 'Protein + veg', why: 'Stabilises appetite and reduces snack chaos', simple: 'Repeatable meals, not perfect variety' },
            { thing: 'Sleep', why: 'Recovery and appetite regulation', simple: 'Consistent wake time; morning light' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Staples worth keeping around</h2>
        <ul className="mt-4 list-disc pl-6 text-zinc-700 space-y-1 max-w-3xl">
          <li><strong>Fibre staples:</strong> oats, beans, lentils, chia/flax (start slowly).</li>
          <li><strong>Veg defaults:</strong> frozen mixed veg, leafy greens, onions/garlic.</li>
          <li><strong>Healthy fats:</strong> extra virgin olive oil (buy smaller bottles, store well).</li>
          <li><strong>Fermented foods (optional):</strong> yoghurt, kefir, sauerkraut — only if they suit you.</li>
          <li><strong>Simple spices:</strong> turmeric/ginger for flavour (don’t treat as medicine).</li>
        </ul>
        <p className="mt-5 text-sm text-zinc-600 max-w-3xl">
          If you want product-level buying guidance, use our shortlists: <Link className="underline" href="/best-extra-virgin-olive-oil-uk">olive oil picks</Link>, <Link className="underline" href="/best-organic-oats-uk">oats picks</Link>, and <Link className="underline" href="/best-organic-snacks-healthy">snack picks</Link>.
        </p>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        This page is informational and not medical advice.
      </p>
    
      <MoneyPageNextLinks slug="best-detox-support-foods" />


      <MoneyPageFAQ slug="best-detox-support-foods" />

</main>
  )
}