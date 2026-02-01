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
  title: 'Protein powders (UK): clean shortlist | Wild & Well',
  description: 'A practical, minimal‑ingredient shortlist of protein powder styles — plus what to check on labels (sweeteners, gums, and additives).',
}

const PICKS = [
  {
    title: 'Unflavoured organic whey (if you tolerate dairy)',
    badge: 'Simple label',
    desc: 'A straightforward option for convenience when whole‑food protein is difficult.',
    query: 'organic whey protein powder unflavoured UK',
    bullets: ['Prefer unflavoured', 'Avoid long additive lists', 'Check serving size and allergens'],
  },
  {
    title: 'Organic pea protein (unflavoured)',
    badge: 'Plant-based',
    desc: 'A common plant option with simple ingredients when you choose the right brand.',
    query: 'organic pea protein powder unflavoured UK',
    bullets: ['Look for minimal ingredients', 'Check taste/texture reviews', 'Start with a small bag'],
  },
  {
    title: 'Hemp protein (whole-food style)',
    badge: 'Whole-food feel',
    desc: 'Less “isolated” feel; can be a gentler option for some people.',
    query: 'organic hemp protein powder UK',
    bullets: ['Expect a stronger flavour', 'Check fibre content', 'Works well in smoothies/oats'],
  },
  {
    title: 'Rice + pea blend (unflavoured)',
    badge: 'Balanced blend',
    desc: 'Blends can be easier to use daily if single-source textures don’t suit you.',
    query: 'organic rice pea protein blend unflavoured UK',
    bullets: ['Still prefer short ingredient lists', 'Avoid artificial sweeteners', 'Check added gums'],
  },
  {
    title: 'Minimal-ingredient flavoured option',
    badge: 'If you need flavour',
    desc: 'If you only stick to it when it tastes good, choose a cleanly flavoured version.',
    query: 'protein powder naturally flavoured no sucralose UK',
    bullets: ['Avoid sucralose if it doesn’t suit you', 'Prefer cocoa/vanilla', 'Check total sweetness level'],
  },
  {
    title: 'Single-ingredient “whole” add-on (food-first)',
    badge: 'Food-first',
    desc: 'When possible, treat protein powder as a convenience tool — not a replacement for whole foods.',
    query: 'skimmed milk powder UK or Greek yogurt protein snack',
    bullets: ['Aim for repeatable meals', 'Use powder to fill gaps', 'Keep it simple'],
  },
]

export default function Page() {
    
  const edu = getMoneyPageEdu('best-organic-protein-powders-uk')

const url = `${SITE_URL}/best-organic-protein-powders-uk`

  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Protein powders (UK): clean shortlist',
    datePublished: '2026-01-24',
    dateModified: '2026-01-29',
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
        name: 'Is organic protein powder automatically “cleaner”?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not always. Organic reduces certain inputs, but the ingredient list still matters. Prefer fewer additives and avoid ultra-sweetened blends if they don’t suit you.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I avoid on labels?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For many people: lots of gums, very sweet artificial sweeteners, and long “proprietary blend” lists. Simpler is usually easier to tolerate and to use consistently.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need protein powder at all?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. It’s a convenience tool. If your meals already hit your protein needs, you can skip it. If you struggle to eat enough protein (busy days, training, appetite), a simple powder can help.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Protein powders (UK): clean shortlist</h1>
        <p className="mt-3 text-zinc-700">
          A practical shortlist of protein powder styles, focusing on minimal ingredients and everyday usability.
        </p>

        <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition basics" insightHref="/blog/fibre-gut-health-practical-guide" insightLabel="Fibre & gut health" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
          <Link className="btn-secondary" href="/favourites">Favourites</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 29, 2026</p>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-10">
        <h2 className="text-2xl font-semibold">At a glance</h2>
        <p className="mt-2 text-zinc-700 max-w-3xl">
          For most people, the win is simple: pick an unflavoured (or lightly flavoured) option with a short ingredient list.
          If a powder tastes bad or upsets your stomach, you won’t keep using it — and consistency is the whole point.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What to look for</h2>
        <ComparisonTable
          caption="Simple label cues"
          columns={[
            { key: 'thing', label: 'Thing' },
            { key: 'aimFor', label: 'Aim for' },
            { key: 'why', label: 'Why it matters' },
          ]}
          rows={[
            {
              thing: 'Ingredients',
              aimFor: 'Short list you recognise',
              why: 'Easier to tolerate and easier to compare',
            },
            {
              thing: 'Sweeteners',
              aimFor: 'None or lightly sweetened',
              why: 'Many “diet” sweeteners are an individual tolerance issue',
            },
            {
              thing: 'Additives',
              aimFor: 'Minimal gums/thickeners',
              why: 'Some people do better with fewer extras',
            },
            {
              thing: 'Serving size',
              aimFor: 'Realistic portions you’ll use',
              why: 'Labels can hide small servings and big scoops',
            },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Shortlist (UK‑friendly searches)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          We link to search pages so you can compare availability and pricing. Always check ingredients and allergens.
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

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">If you want the food-first alternative</h2>
        <p className="mt-2 text-zinc-700 max-w-3xl">
          A repeatable breakfast and a repeatable snack often solve the problem without supplements. If you use powder,
          use it to fill gaps on busy days — not as the foundation of your diet.
        </p>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links are affiliate links.
      </p>
    
      <MoneyPageNextLinks slug="best-organic-protein-powders-uk" />

</main>
  )
}