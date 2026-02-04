import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ComparisonTable from '@/components/ComparisonTable'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'




export const metadata = {
  title: 'Humidifiers for Bedrooms (UK): shortlist | Wild & Well',
  description: 'A shortlist for bedroom humidifiers in the UK: what to look for, what to avoid, and simple maintenance rules.',
}

const PICKS = [
  {
    title: 'Quiet ultrasonic humidifier (bedroom size)',
    badge: 'Quiet nights',
    desc: 'A good default for most bedrooms if you keep up with cleaning and don’t over-humidify.',
    query: 'quiet ultrasonic humidifier bedroom UK',
    bullets: ['Great for: typical bedrooms', 'Check tank size + noise level', 'Clean regularly to prevent biofilm'],
  },
  {
    title: 'Evaporative humidifier (lower mist risk)',
    badge: 'Low-fuss option',
    desc: 'Often preferred for steadier humidity output. Slightly bulkier, but can be easier to live with.',
    query: 'evaporative humidifier bedroom UK',
    bullets: ['Great for: steady humidity', 'Check filter/wick replacement cost', 'Still needs regular cleaning'],
  },
  {
    title: 'Warm mist humidifier (occasional use)',
    badge: 'Seasonal',
    desc: 'Useful for very dry weeks, but not necessary for most homes. Prioritise safety and easy cleaning.',
    query: 'warm mist humidifier UK',
    bullets: ['Great for: occasional dry spells', 'Watch-out: hot water/steam safety', 'Choose simple controls'],
  },
  {
    title: 'Small hygrometer (measure first)',
    badge: 'Non‑negotiable',
    desc: 'A humidifier helps most when you measure humidity first. Don’t guess.',
    query: 'digital hygrometer humidity meter UK',
    bullets: ['Aim for a comfortable mid-range', 'Avoid pushing humidity high (mould risk)', 'Check readings in the bedroom'],
  },
]

function QuickSummary(){
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">At a glance</h2>
      <p className="mt-2 text-zinc-700">
        Start by measuring humidity with a <strong>hygrometer</strong>. If your bedroom is consistently dry,
        a <strong>quiet ultrasonic</strong> is usually the easiest starter. If you want steadier output, consider an
        <strong>evaporative</strong> unit. Keep humidity sensible — pushing it high increases mould risk.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/topics/sleep">Sleep</Link>
        <Link className="btn-secondary" href="/blog/winter-humidity-guide">Humidity guide</Link>
        <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
    </div>
  )
}

export default function Page(){
    
  const edu = getMoneyPageEdu('best-humidifiers-for-bedrooms-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Humidifiers for Bedrooms (UK): shortlist',
    dateModified: '2026-02-02',
    datePublished: '2026-01-29',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: itemList,
    },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What humidity level should I aim for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Aim for a comfortable mid-range. The key is avoiding very high humidity for long periods, which can increase mould risk in bedrooms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is an ultrasonic humidifier safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Generally yes when used correctly, but maintenance matters. Choose an easy-to-clean design, clean it regularly, and avoid over-humidifying small rooms.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the hidden cost of humidifiers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maintenance supplies and (for evaporative units) replacement wicks/filters. Check ongoing costs before buying.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Humidifiers for bedrooms (UK): shortlist</h1>
        <p className="mt-3 text-zinc-700">
          A shortlist with simple decision rules: what to buy, what to avoid, and how to keep humidity in a sensible range.
        </p>

        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/sleep.jpg"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />

        <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep topic" insightHref="/blog/caffeine-and-sleep-timing" insightLabel="Caffeine & sleep timing" />
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-10">
        <QuickSummary />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">How to choose (quick rules)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card p-5">
            <h3 className="text-lg font-semibold">Measure first</h3>
            <p className="mt-2 text-sm text-zinc-700">If humidity is already fine, a humidifier won’t help — and could make things worse.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: bedrooms can vary from the rest of the home.</p>
          </div>
          <div className="card p-5">
            <h3 className="text-lg font-semibold">Ease of cleaning</h3>
            <p className="mt-2 text-sm text-zinc-700">Prioritise simple tanks and accessible parts. Hygiene is the real limiter.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: complicated designs get neglected.</p>
          </div>
          <div className="card p-5">
            <h3 className="text-lg font-semibold">Right size</h3>
            <p className="mt-2 text-sm text-zinc-700">Bigger isn’t better for bedrooms. Aim for steady comfort, not high humidity.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: over-humidifying increases mould risk.</p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (favourites)</h2>
        <p className="mt-2 text-sm text-zinc-600">These are curated searches so you can compare current prices and reviews.</p>
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

        <ComparisonTable
          caption="At-a-glance comparison"
          columns={[
            { key: 'type', label: 'Type' },
            { key: 'bestFor', label: 'Great for' },
            { key: 'tradeoff', label: 'Main tradeoff' },
            { key: 'whatToCheck', label: 'Check before buying' },
          ]}
          rows={[
            {
              type: 'Ultrasonic',
              bestFor: 'Most bedrooms (quiet + simple)',
              tradeoff: 'Needs consistent cleaning',
              whatToCheck: 'Tank access; noise; auto shut-off',
            },
            {
              type: 'Evaporative',
              bestFor: 'Steadier humidity output',
              tradeoff: 'May need wick/filter replacements',
              whatToCheck: 'Replacement cost; cleaning routine; footprint',
            },
            {
              type: 'Warm mist',
              bestFor: 'Occasional dry spells',
              tradeoff: 'Heat/steam safety + energy use',
              whatToCheck: 'Safety features; simple controls; easy cleaning',
            },
          ]}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics/sleep">Sleep →</Link>
          <Link className="btn-secondary" href="/blog/winter-humidity-guide">Read the humidity guide</Link>
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-5 text-zinc-700">
          <div>
            <h3 className="font-semibold">Do I need a humidifier?</h3>
            <p className="mt-1 text-sm">Only if your bedroom is consistently dry. Measure first with a hygrometer.</p>
          </div>
          <div>
            <h3 className="font-semibold">What’s the biggest mistake?</h3>
            <p className="mt-1 text-sm">Over-humidifying. Comfort improves in the mid-range — high humidity increases mould risk.</p>
          </div>
          <div>
            <h3 className="font-semibold">How often should I clean it?</h3>
            <p className="mt-1 text-sm">Follow the manufacturer guidance, but plan on regular cleaning. Easy-to-clean designs get used properly.</p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm max-w-3xl">
        <h2 className="text-xl font-semibold mb-2">New to low-tox living?</h2>
        <p className="text-zinc-700 mb-3">Start with one change. Our free shopping list shows the easiest swaps.</p>
        <Link href="/shopping-list" className="btn-secondary">Get the free shopping list</Link>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    
      <MoneyPageNextLinks slug="best-humidifiers-for-bedrooms-uk" />

</main>
  )
}