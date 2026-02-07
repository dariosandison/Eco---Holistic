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
  title: 'Supplements for beginners: a simple, cautious shortlist',
  description:
    'A conservative, beginner-friendly supplement shortlist (UK) focused on simple options, label clarity, and when to skip.',
}

const PICKS = [
  {
    title: 'Magnesium glycinate (gentle option)',
    badge: 'Common starter',
    desc: 'Often chosen for evening routines. Start low and only add one supplement at a time.',
    query: 'magnesium glycinate supplement UK third party tested',
    bullets: ['Start with a low dose', 'Check for added fillers', 'Avoid stacking multiple new supplements at once'],
  },
  {
    title: 'Vitamin D3 (seasonal / low-light months)',
    badge: 'UK-relevant',
    desc: 'Commonly used in the UK, especially in low-sun months. Check your needs if you have concerns.',
    query: 'vitamin D3 supplement UK',
    bullets: ['Follow label guidance', 'Consider a blood test if unsure', 'Check interactions if you take medication'],
  },
  {
    title: 'Omega‑3 (if you don’t eat oily fish)',
    badge: 'Food gap',
    desc: 'A “gap filler” for people who rarely eat oily fish. Choose transparent sourcing.',
    query: 'omega 3 fish oil supplement UK IFOS tested',
    bullets: ['Check sourcing and freshness', 'Look for clear EPA/DHA amounts', 'Stop if it doesn’t agree with you'],
  },
  {
    title: 'A simple probiotic (if you tolerate it)',
    badge: 'Individual',
    desc: 'Tolerance varies a lot. If you try one, give it time and keep everything else stable.',
    query: 'probiotic supplement UK single strain',
    bullets: ['Try one product at a time', 'Watch how you feel', 'Skip if it aggravates symptoms'],
  },
  {
    title: 'A food-first multi (only if needed)',
    badge: 'Optional',
    desc: 'Most people don’t need a complex stack. A simple multi can help if diet is limited.',
    query: 'food based multivitamin UK',
    bullets: ['Avoid mega-doses', 'Check for unnecessary extras', 'Use as a temporary support'],
  },
  {
    title: '“Skip” list (most beginners don’t need)',
    badge: 'Skip',
    desc: 'If a product promises the world, pause. Start with basics and get your habits stable first.',
    query: 'supplement stack bundles UK',
    bullets: ['Avoid huge stacks', 'Avoid proprietary blends', 'Avoid miracle detox claims'],
  },
]

export default function Page() {
    
  const edu = getMoneyPageEdu('best-organic-supplements-beginners')

const url = `${SITE_URL}/best-organic-supplements-beginners`

  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Supplements for beginners: a simple, cautious shortlist',
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
        name: 'Do I need supplements at all?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Often, no. Supplements can help fill gaps, but they work best on top of a stable foundation: sleep, whole foods, movement, and stress basics.',
        },
      },
      {
        '@type': 'Question',
        name: 'What’s the most common beginner mistake?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Starting too many products at once. If you change five things, you can’t tell what helped or what caused side effects. Start with one change and review after a couple of weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I speak to a clinician?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you are pregnant, breastfeeding, have a medical condition, take medication, or have persistent symptoms. Supplements can interact with meds and aren’t risk-free.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Supplements for beginners: a simple, cautious shortlist</h1>
        <p className="mt-3 text-zinc-700">
          This page is intentionally conservative. If you’re new, the goal is not a “stack” — it’s one or two simple options that fit your life, with clear reasons to skip.
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
          <Link className="btn-secondary" href="/blog">Wellness Insights</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
              </div>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-10">
        <h2 className="text-2xl font-semibold">At a glance</h2>
        <p className="mt-2 text-zinc-700 max-w-3xl">
          Most people get better results from food-first nutrition and one repeatable habit change than from a cabinet of supplements.
          If you try anything, introduce one product at a time and keep everything else stable.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What to look for</h2>
        <ComparisonTable
          caption="Simple quality checks"
          columns={[
            { key: 'thing', label: 'Thing' },
            { key: 'aimFor', label: 'Aim for' },
            { key: 'why', label: 'Why it matters' },
          ]}
          rows={[
            { thing: 'Dose', aimFor: 'Reasonable label dose', why: 'Mega-doses add risk without clear benefit' },
            { thing: 'Ingredients', aimFor: 'Short, clear list', why: 'Easier to tolerate and compare' },
            { thing: 'Testing', aimFor: 'Transparent brand / third-party testing', why: 'Helps avoid poor-quality products' },
            { thing: 'Stacking', aimFor: 'One change at a time', why: 'So you can tell what helped' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Shortlist (UK‑friendly searches)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          We link to searches so you can compare availability and labels. Always read ingredients and speak to a clinician if you have medical concerns.
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
        This page is informational and not medical advice. Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    
      <MoneyPageNextLinks slug="best-organic-supplements-beginners" />

</main>
  )
}