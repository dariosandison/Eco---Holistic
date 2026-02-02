import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import ComparisonTable from '@/components/ComparisonTable'
import { amazonSearchUrl } from '@/lib/amazon'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'




export const metadata = {
  title: 'Organic snacks: simple favourites',
  description: 'A simple, whole‑ingredient snack shortlist that keeps ultra‑processed extras low — plus what to look for on labels.',
}

const PICKS = [
  {
    title: 'Nuts & seeds (single-ingredient)',
    badge: 'Staple',
    desc: 'The easiest default: filling, simple ingredients, easy to keep at home/work.',
    query: 'organic mixed nuts unsalted UK',
    bullets: ['Prefer unsalted', 'Watch portions (easy to overdo)', 'Store cool and sealed'],
  },
  {
    title: 'Fruit + nut bars (minimal ingredients)',
    badge: 'On-the-go',
    desc: 'If you need portability, choose bars that read like food (not chemistry).',
    query: 'organic fruit nut bar minimal ingredients',
    bullets: ['Short ingredient list', 'Avoid lots of syrups', 'Check added oils'],
  },
  {
    title: 'Dark chocolate (high cocoa, simple list)',
    badge: 'Treat',
    desc: 'A small square can satisfy without turning into a sugar spiral.',
    query: 'organic dark chocolate 70% cocoa UK',
    bullets: ['Prefer higher cocoa', 'Keep portions small', 'Check for simple ingredients'],
  },
  {
    title: 'Organic yoghurt + berries (food-first)',
    badge: 'Food-first',
    desc: 'Often beats “healthy snacks” because it’s a real meal component.',
    query: 'organic greek yogurt UK',
    bullets: ['Add fruit/fibre', 'Optional nuts/seeds', 'Choose what you enjoy'],
  },
  {
    title: 'Roasted chickpeas / simple crunch',
    badge: 'Crunch',
    desc: 'A crunchy option that can replace ultra-processed crisps in many routines.',
    query: 'roasted chickpeas snack organic',
    bullets: ['Check oils and seasoning', 'Prefer simple flavours', 'Watch salt'],
  },
  {
    title: 'Simple crackers + hummus (label aware)',
    badge: 'Balanced',
    desc: 'If you buy crackers, choose simple ingredients and pair with a protein/fibre side.',
    query: 'organic wholegrain crackers UK',
    bullets: ['Pair with hummus/cheese', 'Avoid long additive lists', 'Treat as convenience'],
  },
]

export default function Page() {
    
  const edu = getMoneyPageEdu('best-organic-snacks-healthy')

const url = `${SITE_URL}/best-organic-snacks-healthy`

  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Organic snacks: simple favourites',
    datePublished: '2026-01-24',
    dateModified: '2026-02-02',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
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
        name: 'What makes a snack “better” in practice?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A snack you can repeat: simple ingredients, reasonably filling (protein/fibre/fat), and not built around lots of added sugar or ultra-processed additives.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does organic automatically mean healthy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Organic is one signal, but snack quality still depends on ingredients and processing. Organic biscuits are still biscuits — the label matters.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the easiest default snack?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A simple combo: fruit + nuts/seeds, or yoghurt + berries. It’s easy, filling, and doesn’t require “health food” products.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Organic snacks: simple favourites</h1>
        <p className="mt-3 text-zinc-700">
          A clean, repeatable snack shortlist: whole ingredients first, minimal additives, and easy options you’ll actually keep around.
        </p>

        <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition basics" insightHref="/blog/fibre-gut-health-practical-guide" insightLabel="Fibre & gut health" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          <Link className="btn-secondary" href="/blog/single-ingredient-staples-that-actually-matter">Single‑ingredient staples</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-10">
        <h2 className="text-2xl font-semibold">At a glance</h2>
        <p className="mt-2 text-zinc-700 max-w-3xl">
          Most “healthy snacks” fail because they’re either not filling or they’re too processed. The best default is a small combination of fruit + fibre + protein/fat.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What to look for</h2>
        <ComparisonTable
          caption="Simple label cues"
          columns={[
            { key: 'type', label: 'Snack type' },
            { key: 'aim', label: 'Aim for' },
            { key: 'avoid', label: 'Be wary of' },
          ]}
          rows={[
            { type: 'Bars', aim: 'Fruit + nuts, short list', avoid: 'Lots of syrups, many additives' },
            { type: 'Crunch', aim: 'Simple roasted nuts/legumes', avoid: 'High salt + refined oils' },
            { type: 'Sweet', aim: 'Small portion, high cocoa', avoid: 'Sugar-first treats' },
            { type: 'Food-first', aim: 'Yoghurt, fruit, eggs', avoid: 'Ultra-processed “diet” snacks' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Shortlist (UK‑friendly searches)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          We link to searches so you can compare availability and ingredients. Always check the label.
        </p>
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
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    
      <MoneyPageNextLinks slug="best-organic-snacks-healthy" />

</main>
  )
}