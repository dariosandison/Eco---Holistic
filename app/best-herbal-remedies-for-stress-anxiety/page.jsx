import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import ComparisonTable from '@/components/ComparisonTable'
import { amazonSearchUrl } from '@/lib/amazon'
import { SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Herbal options for stress: calm, cautious shortlist | Wild & Well',
  description:
    'A conservative look at herbal options for stress: simple routines first, then common tea/herb choices and what to check on labels.',
}

const PICKS = [
  {
    title: 'Chamomile tea (evening routine)',
    badge: 'Routine',
    desc: 'A simple default for an evening wind‑down ritual. The ritual often matters as much as the herb.',
    query: 'organic chamomile tea bags UK',
    bullets: ['Try nightly for 1–2 weeks', 'Avoid if allergic to ragweed family', 'Keep caffeine earlier in the day'],
  },
  {
    title: 'Lemon balm tea (gentle calm)',
    badge: 'Gentle',
    desc: 'Often used as a gentle calming tea. Start with one cup and see how you respond.',
    query: 'lemon balm tea UK',
    bullets: ['Start with low amount', 'Avoid stacking multiple calming herbs at once', 'Check medication interactions if unsure'],
  },
  {
    title: 'Lavender (aroma or tea)',
    badge: 'Aroma',
    desc: 'Some people find lavender helpful as a scent cue for relaxation. Keep it simple and avoid overuse.',
    query: 'lavender tea UK or lavender pillow spray',
    bullets: ['Use as a cue, not a cure', 'Avoid strong fragrance if sensitive', 'Keep it bedtime‑only'],
  },
  {
    title: 'Ashwagandha (supplement — not for everyone)',
    badge: 'Supplement',
    desc: 'Commonly used for stress support, but it’s not universally tolerated. Use caution if you have thyroid/autoimmune concerns.',
    query: 'ashwagandha supplement UK third party tested',
    bullets: ['Try one product at a time', 'Stop if it feels wrong', 'Check medical suitability first'],
  },
  {
    title: 'Magnesium glycinate (evening support)',
    badge: 'Common',
    desc: 'Often used to support relaxation. Keep dose conservative and avoid piling on other supplements.',
    query: 'magnesium glycinate UK',
    bullets: ['Start low', 'Check for added fillers', 'Avoid mega-doses'],
  },
  {
    title: 'Skip list (high-dose blends & miracle claims)',
    badge: 'Skip',
    desc: 'If it promises to “erase anxiety fast”, pause. Start with habits and simple single-ingredient options first.',
    query: 'stress relief supplement blend UK',
    bullets: ['Avoid huge stacks', 'Avoid proprietary blends', 'Prefer clear labels'],
  },
]

export default function Page() {
  const url = `${SITE_URL}/best-herbal-remedies-for-stress-anxiety`

  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Herbal options for stress: calm, cautious shortlist',
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
        name: 'Do herbs replace therapy or medical care?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Herbs can be part of a calming routine, but they are not a substitute for professional care. If anxiety is severe or persistent, speak with a qualified clinician.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the simplest first step?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A repeatable routine: earlier caffeine cutoff, a 10‑minute walk in daylight, and a consistent wind‑down (tea, low light, no screens).',
        },
      },
      {
        '@type': 'Question',
        name: 'Why avoid large “stress blend” stacks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Stacks make it hard to tell what helped (or caused side effects). Start with one change at a time and keep doses conservative.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Herbal options for stress: calm, cautious shortlist</h1>
        <p className="mt-3 text-zinc-700">
          Herbs can be a helpful part of a calming routine — but the routine is the real engine. This page focuses on simple, widely used options and clear label checks.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/sleep">Sleep topic</Link>
          <Link className="btn-secondary" href="/blog/sleep-naturally-simple-guide">Cornerstone sleep guide</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 29, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Start with habits (highest leverage)</h2>
        <ComparisonTable
          caption="Small habits that often beat supplements"
          columns={[
            { key: 'habit', label: 'Habit' },
            { key: 'why', label: 'Why it helps' },
            { key: 'simple', label: 'Simple version' },
          ]}
          rows={[
            { habit: 'Caffeine cutoff', why: 'Stops “hidden stimulation” at night', simple: 'Try no caffeine after midday for 2 weeks' },
            { habit: 'Daylight walk', why: 'Helps circadian timing', simple: '10 minutes outside in the morning' },
            { habit: 'Wind‑down cue', why: 'Signals safety/relaxation', simple: 'Low light + tea + no screens for 20 minutes' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Shortlist (UK‑friendly searches)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          We link to searches so you can compare options and ingredients. If you take medication, are pregnant, or have a health condition, check suitability with a clinician.
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
