import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import ComparisonTable from '@/components/ComparisonTable'
import { amazonSearchUrl } from '@/lib/amazon'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Immune support (natural): practical habits and cautious options | Wild & Well',
  description:
    'A conservative, UK‑friendly immune-support page: the high‑leverage habits first, plus common “support” options and what to check before you buy.',
}

const PICKS = [
  {
    title: 'Vitamin D3 (UK low-sun months)',
    badge: 'Common baseline',
    desc: 'A common UK consideration, especially in low‑sun months. If you’re unsure, consider checking levels.',
    query: 'vitamin D3 supplement UK',
    bullets: ['Follow label guidance', 'Consider a blood test if unsure', 'Check medication interactions'],
  },
  {
    title: 'Zinc (short-term use)',
    badge: 'Short term',
    desc: 'Often used short term during colds. Avoid high doses long term without guidance.',
    query: 'zinc supplement UK low dose',
    bullets: ['Avoid mega-doses', 'Take with food if sensitive', 'Don’t stack many products at once'],
  },
  {
    title: 'Vitamin C (food-first, then simple)',
    badge: 'Food-first',
    desc: 'Most people can cover this with diet. If you use a supplement, keep it simple.',
    query: 'vitamin C supplement UK',
    bullets: ['Prioritise fruit/veg first', 'Stop if it upsets your stomach', 'Don’t expect miracles'],
  },
  {
    title: 'Honey + lemon (comfort support)',
    badge: 'Comfort',
    desc: 'Not a “cure”, but a practical comfort option for sore throats and routines.',
    query: 'raw honey UK',
    bullets: ['Not for infants under 1', 'Use as comfort support', 'Keep expectations realistic'],
  },
  {
    title: 'A simple probiotic (individual tolerance)',
    badge: 'Individual',
    desc: 'Tolerance varies a lot. If you try one, keep the rest of your routine stable.',
    query: 'probiotic supplement UK single strain',
    bullets: ['Try one at a time', 'Watch how you feel', 'Skip if symptoms worsen'],
  },
  {
    title: 'Skip list (bundles and “detox” promises)',
    badge: 'Skip',
    desc: 'If it promises to “boost immunity fast” or “detox everything”, pause. Build habits first.',
    query: 'immune boost supplement bundle UK',
    bullets: ['Avoid miracle claims', 'Avoid proprietary blends', 'Choose one simple option if any'],
  },
]

export default function Page() {
  const url = `${SITE_URL}/best-natural-immune-support-remedies`

  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Immune support (natural): practical habits and cautious options',
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

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Immune support (natural): practical habits and cautious options</h1>
        <p className="mt-3 text-zinc-700">
          This page is intentionally conservative. The biggest “immune support” wins are habits: sleep, basic nutrition, stress load, and hygiene.
          Supplements can be optional — and should be chosen carefully.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/sleep">Sleep topic</Link>
          <Link className="btn-secondary" href="/nutrition">Nutrition hub</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 29, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Start here (high‑leverage habits)</h2>
        <ComparisonTable
          caption="The basics beat any single supplement"
          columns={[
            { key: 'habit', label: 'Habit' },
            { key: 'why', label: 'Why it matters' },
            { key: 'simple', label: 'Simple version' },
          ]}
          rows={[
            { habit: 'Sleep consistency', why: 'Recovery and immune function rely on sleep quality and timing', simple: 'Same wake time; reduce late caffeine/alcohol' },
            { habit: 'Food-first nutrients', why: 'Micronutrients are easier to get reliably from real food', simple: 'Protein + fruit/veg daily; simple staples' },
            { habit: 'Stress load', why: 'Chronic stress can disrupt sleep and routines', simple: 'Small daily walk; predictable wind-down' },
            { habit: 'Hygiene basics', why: 'Practical prevention matters', simple: 'Handwashing; ventilation; sensible habits' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Cautious shortlist (UK‑friendly searches)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          We link to searches so you can compare availability and ingredient lists. Always read labels and check interactions if you take medication.
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
    </main>
  )
}
