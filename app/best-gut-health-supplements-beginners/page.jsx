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
  title: 'Gut health supplements: beginner shortlist | Wild & Well',
  description: 'A food-first, beginner-friendly gut-support shortlist: when to consider fibre, probiotics, and what to avoid if you’re sensitive.',
}

const PICKS = [
  {
    title: 'Psyllium husk (fibre first)',
    badge: 'Food-first',
    desc: 'Often the most practical “first” step: gentle fibre support when you don’t hit fibre targets.',
    query: 'psyllium husk powder UK unflavoured',
    bullets: ['Start low and increase slowly', 'Drink enough water', 'Avoid if it worsens symptoms'],
  },
  {
    title: 'Partially hydrolysed guar gum (PHGG)',
    badge: 'Gentle fibre',
    desc: 'A fibre option some people tolerate well — still start low and go slow.',
    query: 'PHGG partially hydrolysed guar gum supplement UK',
    bullets: ['Start with a small dose', 'Keep other changes stable', 'Give it time (weeks, not days)'],
  },
  {
    title: 'Single-strain probiotic (simple)',
    badge: 'Simple',
    desc: 'If you try a probiotic, a simpler product makes it easier to judge how you respond.',
    query: 'single strain probiotic UK shelf stable',
    bullets: ['Try one at a time', 'Stop if it makes you feel worse', 'Not everyone needs probiotics'],
  },
  {
    title: 'Multi-strain probiotic (only if you do well with them)',
    badge: 'Optional',
    desc: 'A broader option for people who already tolerate probiotics — avoid stacking multiple changes.',
    query: 'multi strain probiotic UK third party tested',
    bullets: ['Avoid “mega CFU” hype', 'Check storage requirements', 'Keep dose consistent'],
  },
  {
    title: 'Digestive enzyme blends (situational)',
    badge: 'Situational',
    desc: 'Some people use these with heavier meals. If you try them, keep it simple and track response.',
    query: 'digestive enzymes supplement UK',
    bullets: ['Avoid complex stacks', 'Use only if needed', 'Check medication interactions'],
  },
  {
    title: 'What to skip (most beginners)',
    badge: 'Skip',
    desc: '“Detox” gut cleanses and aggressive protocols often backfire. Start with fibre + meals + consistency.',
    query: 'gut cleanse detox supplement UK',
    bullets: ['Avoid harsh laxative blends', 'Avoid miracle claims', 'Prefer food-first changes'],
  },
]

export default function Page() {
    
  const edu = getMoneyPageEdu('best-gut-health-supplements-beginners')

const url = `${SITE_URL}/best-gut-health-supplements-beginners`

  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Gut health supplements: beginner shortlist',
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
        name: 'Do I need probiotics for gut health?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not necessarily. Many people do best starting with meals, fibre, hydration, and stress/sleep basics. If you try a probiotic, keep everything else stable so you can judge your response.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the safest first supplement-style step?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Often fibre support (like psyllium) — started slowly. It’s simple, easy to adjust, and aligns with a food-first approach.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I talk to a clinician?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'If you have persistent symptoms, significant pain, weight loss, blood in stool, or you’re on medication and unsure about interactions. Supplements are not a substitute for medical care.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Gut health supplements: beginner shortlist</h1>
        <p className="mt-3 text-zinc-700">
          This page is intentionally conservative. Most people don’t need a big “gut stack”. Start with food-first basics, then add one simple option at a time if it helps.
        </p>

        <EducationFirstCallout topicHref="/topics" topicLabel="Explore topics" insightHref="/blog" insightLabel="Read Wellness Insights" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          <Link className="btn-secondary" href="/blog/gut-health-basics">Gut health basics</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 29, 2026</p>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-10">
        <h2 className="text-2xl font-semibold">At a glance</h2>
        <p className="mt-2 text-zinc-700 max-w-3xl">
          For beginners, the most reliable “supplement” is often fibre and a repeatable meal routine. If you try probiotics, simpler is usually better.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What to look for</h2>
        <ComparisonTable
          caption="Keep it simple"
          columns={[
            { key: 'thing', label: 'Thing' },
            { key: 'aimFor', label: 'Aim for' },
            { key: 'avoid', label: 'Be wary of' },
          ]}
          rows={[
            { thing: 'Fibre', aimFor: 'Start low, increase slowly', avoid: 'Big jumps in dose' },
            { thing: 'Probiotics', aimFor: 'Clear strain labeling', avoid: 'Vague proprietary blends' },
            { thing: 'Claims', aimFor: 'Modest, realistic claims', avoid: '“Cleanse/detox” hype' },
            { thing: 'Stacking', aimFor: 'One new thing at a time', avoid: 'Multiple changes at once' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Shortlist (UK‑friendly searches)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          We link to searches so you can compare availability and labels. Always read ingredients and consider medical guidance if you’re unsure.
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
        This page is informational and not medical advice. Some links may earn us a small commission at no extra cost to you.
      </p>
    
      <MoneyPageNextLinks slug="best-gut-health-supplements-beginners" />

</main>
  )
}