import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import ComparisonTable from '@/components/ComparisonTable'
import { amazonSearchUrl } from '@/lib/amazon'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import EducationFirstCallout from '@/components/EducationFirstCallout'


export const metadata = {
  title: 'Adaptogens for beginners: a calm, cautious guide | Wild & Well',
  description:
    'A practical beginner guide to adaptogens: what they are, who should skip them, and simple ways to start without building a big supplement stack.',
}

const PICKS = [
  {
    title: 'Ashwagandha (commonly used for stress routines)',
    badge: 'Common',
    desc: 'Popular, but not for everyone. Start low and be cautious with thyroid conditions, pregnancy, and medication interactions.',
    query: 'ashwagandha supplement UK third party tested',
    bullets: ['Start low', 'Avoid stacking multiple new supplements', 'Stop if it doesn’t suit you'],
  },
  {
    title: 'Rhodiola (often used for daytime support)',
    badge: 'Daytime',
    desc: 'Often taken earlier in the day. Individual response varies.',
    query: 'rhodiola rosea supplement UK',
    bullets: ['Take earlier in the day', 'Avoid if it feels overstimulating', 'Keep dose conservative'],
  },
  {
    title: 'Holy basil (tea / gentle routine)',
    badge: 'Gentle',
    desc: 'Tea can be a low-commitment way to try a calming ritual before capsules.',
    query: 'holy basil tulsi tea organic UK',
    bullets: ['Use as part of a routine', 'Check tolerance', 'Keep it simple'],
  },
  {
    title: 'Reishi (evening ritual)',
    badge: 'Ritual',
    desc: 'Often used as part of an evening wind‑down. Quality and sourcing matter.',
    query: 'reishi mushroom powder supplement UK',
    bullets: ['Prefer transparent sourcing', 'Avoid huge claims', 'Be cautious if you take blood thinners'],
  },
  {
    title: 'A simple “adaptogen blend” (only if you tolerate it)',
    badge: 'Optional',
    desc: 'Blends can be convenient but make it harder to know what helped. Use only if you already know you tolerate the ingredients.',
    query: 'adaptogen blend supplement UK no proprietary blend',
    bullets: ['Avoid proprietary blends', 'Prefer transparent doses', 'Don’t start with many ingredients'],
  },
  {
    title: 'Skip list (most beginners don’t need)',
    badge: 'Skip',
    desc: 'If it promises overnight transformation or “detox”, pause. Start with habits first.',
    query: 'adaptogen stack bundle UK',
    bullets: ['Avoid miracle claims', 'Avoid huge stacks', 'Focus on sleep + routines'],
  },
]

export default function Page() {
  const url = `${SITE_URL}/best-adaptogens-beginners-guide`

  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Adaptogens for beginners: a calm, cautious guide',
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
        <h1 className="text-4xl font-bold">Adaptogens for beginners: a calm, cautious guide</h1>
        <p className="mt-3 text-zinc-700">
          Adaptogens are popular, but they’re not a mandatory part of wellness. If you try them, treat them like an experiment: one change at a time, conservative doses, and clear reasons for using them.
        </p>

        <EducationFirstCallout topicHref="/topics" topicLabel="Explore topics" insightHref="/blog" insightLabel="Read Wellness Insights" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/sleep">Sleep topic</Link>
          <Link className="btn-secondary" href="/topics/natural-remedies">Natural remedies</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 29, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Before you buy anything</h2>
        <ComparisonTable
          caption="The decision framework"
          columns={[
            { key: 'question', label: 'Question' },
            { key: 'goodAnswer', label: 'A good answer looks like' },
          ]}
          rows={[
            { question: 'What problem am I solving?', goodAnswer: 'Specific (sleep routine, stress routine, energy dip) — not “everything”' },
            { question: 'How will I know it helped?', goodAnswer: 'You can measure it (sleep latency, afternoon slump, anxiety spikes)' },
            { question: 'Am I changing one thing at a time?', goodAnswer: 'Yes — otherwise you can’t tell what worked' },
            { question: 'Do I have medical risks/interactions?', goodAnswer: 'If unsure, check with a clinician — especially pregnancy, thyroid conditions, and medication' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Shortlist (UK‑friendly searches)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          We link to searches so you can compare availability and labels. Always read ingredients and avoid products with exaggerated claims.
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
