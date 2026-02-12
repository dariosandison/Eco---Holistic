import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { PHASE22_UPDATED, PHASE22_UPDATED_LABEL, PHASE22_PREV_UPDATED_LABEL, PHASE22_DEFAULT_UPDATE_CHANGES } from '@/lib/phase22'
import ProductPick from '@/components/mdx/ProductPick'
import ComparisonTable from '@/components/ComparisonTable'
import { amazonSearchUrl } from '@/lib/amazon'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import { getTop10Meta } from '@/data/top10Meta'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import MoneyPageDecisionBox from '@/components/MoneyPageDecisionBox'
import MoneyPageQuickCompare from '@/components/MoneyPageQuickCompare'
import MoneyPageUpdateLog from '@/components/MoneyPageUpdateLog'
import BestForBadges from '@/components/BestForBadges'
import FAQSection from '@/components/FAQSection'
import MoneyPageTrustBlock from '@/components/MoneyPageTrustBlock'
import MoneyPageRoutes from '@/components/MoneyPageRoutes'




export const metadata = {
  title: 'Natural sleep support (non‑pharma): what helps, what to skip',
  description: 'A calm, non‑pharma sleep shortlist: environment upgrades first, then gentle options. No hacks — just repeatable basics.',
}

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'You want non‑supplement fixes', then: 'Start with morning light + consistent wake time + a wind‑down routine.' },
  { if: 'Stress is driving poor sleep', then: 'Use a short pre‑bed downshift (breathing/journaling) and reduce late stimulation.' },
  { if: 'Your room feels too warm', then: 'Aim cooler (about 16–19°C) and adjust bedding before adding products.' },
]

const PICKS = [
  {
    title: 'Blackout curtains / eye mask',
    badge: 'Environment first',
    desc: 'Light control is one of the most reliable upgrades. Start with the simplest thing you will actually use.',
    query: 'blackout curtains bedroom UK or silk sleep mask',
    bullets: ['Prioritise fit', 'Aim for darker bedroom', 'Keep it simple'],
  },
  {
    title: 'Earplugs (comfortable, consistent)',
    badge: 'Cheap win',
    desc: 'If noise is your issue, fix that before chasing supplements.',
    query: 'soft foam earplugs for sleeping UK',
    bullets: ['Comfort matters', 'Try a couple types', 'Use consistently'],
  },
  {
    title: 'White noise / simple sound machine',
    badge: 'Noise control',
    desc: 'Useful if you can’t control neighbours/traffic and earplugs don’t suit you.',
    query: 'white noise machine bedroom UK',
    bullets: ['Set a low volume', 'Place across the room', 'Avoid bright screens'],
  },
  {
    title: 'Bedroom humidity help (if dry air bothers you)',
    badge: 'Condition-dependent',
    desc: 'If you wake with dry mouth or irritation, humidifying can help comfort — but only if you clean it properly.',
    query: 'humidifier bedroom easy to clean UK',
    bullets: ['Cleaning routine matters', 'Check tank size', 'Avoid scented oils'],
  },
  {
    title: 'Magnesium glycinate (gentle starter)',
    badge: 'Optional',
    desc: 'A common “evening routine” supplement. Start low and only add one supplement at a time.',
    query: 'magnesium glycinate UK',
    bullets: ['Start low', 'Avoid stacking', 'Check interactions if you take medication'],
  },
  {
    title: 'Chamomile / lemon balm tea',
    badge: 'Routine',
    desc: 'Sometimes the routine is the point. Choose what you enjoy and can repeat.',
    query: 'organic chamomile tea UK',
    bullets: ['Avoid caffeine late', 'Keep portions reasonable', 'Treat as a wind-down cue'],
  },
]

export default function Page() {
    
  const edu = getMoneyPageEdu('best-natural-sleep-remedies-non-pharma')

  const { bestFor, routes, faqs } = getTop10Meta('best-natural-sleep-remedies-non-pharma')

const url = `${SITE_URL}/best-natural-sleep-remedies-non-pharma`

  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Natural sleep support (non‑pharma): what helps, what to skip',
    datePublished: '2026-01-24',
    dateModified: PHASE22_UPDATED,
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

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Natural sleep support (non‑pharma): what helps, what to skip</h1>
        <p className="mt-3 text-zinc-700">
          A calm shortlist that prioritises environment upgrades first, then gentle optional tools. No hacks — just repeatable basics.

        </p>

        <BestForBadges items={bestFor} />

        </div>

        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/sleep.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
        <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep topic" insightHref="/blog/caffeine-and-sleep-timing" insightLabel="Caffeine & sleep timing" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/sleep">Sleep topic</Link>
          <Link className="btn-secondary" href="/best-humidifiers-for-bedrooms-uk">Bedroom humidifiers</Link>
          <Link className="btn-secondary" href="/blog/sleep-naturally-simple-guide">Cornerstone sleep guide</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
        </div>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />

      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageQuickCompare picks={PICKS} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />
<section className="mt-10">
        <h2 className="text-2xl font-semibold">At a glance</h2>
        <p className="mt-2 text-zinc-700 max-w-3xl">
          If you only do one thing: make the bedroom darker and quieter, and keep wake time consistent. Then decide whether you even need supplements.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What to prioritise</h2>
        <ComparisonTable
          caption="Order of operations"
          columns={[
            { key: 'step', label: 'Step' },
            { key: 'do', label: 'Do this' },
            { key: 'why', label: 'Why it helps' },
          ]}
          rows={[
            { step: '1', do: 'Light + noise control', why: 'Removes the biggest sleep disruptors' },
            { step: '2', do: 'Caffeine timing + wind-down routine', why: 'Helps your body get the “sleep cue”' },
            { step: '3', do: 'Comfort factors (temp, humidity)', why: 'Reduces night waking and irritation' },
            { step: '4', do: 'Optional gentle supports', why: 'Only after foundations are in place' },
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Shortlist (UK‑friendly searches)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          We link to searches so you can compare availability and specs. Always read labels and consult a clinician if you have medical concerns.
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

      <FAQSection faqs={faqs} />

      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
    
      <MoneyPageNextLinks slug="best-natural-sleep-remedies-non-pharma" />

</main>
  )
}