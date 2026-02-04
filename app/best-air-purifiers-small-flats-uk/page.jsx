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
  title: 'Air Purifiers for Small Flats (UK): shortlist | Wild & Well',
  description: 'Shortlisted air purifiers that make sense for small UK flats: quiet bedrooms, compact units, and realistic filter costs.',
}

const PICKS = [
  {
    title: 'Blueair Blue 511i Max',
    badge: 'compact',
    desc: 'A strong “bedroom size” pick if you size it correctly.',
    query: 'Blueair 511i Max air purifier',
    bullets: ['Great for: bedrooms', 'Quiet night mode matters', 'Plan filter replacements'],
  },
  {
    title: 'Levoit Core 300S',
    badge: 'Good value',
    desc: 'Often praised as a budget-friendly HEPA option for small rooms.',
    query: 'Levoit Core 300S air purifier',
    bullets: ['Great for: small flats', 'Check filter availability'],
  },
  {
    title: 'Philips Series 800 air purifier',
    badge: 'Solid mainstream',
    desc: 'A mainstream option with good availability and easy support.',
    query: 'Philips 800 series air purifier',
    bullets: ['Great for: everyday use', 'Compare filter costs'],
  },
  {
    title: 'Shark small room HEPA purifier',
    badge: 'Easy use',
    desc: 'Look for quiet operation and sensible replacement filters.',
    query: 'Shark air purifier small room HEPA',
    bullets: ['Great for: simple setup', 'Check room size coverage'],
  },
  {
    title: 'Meaco small room HEPA purifier',
    badge: 'Quiet sleep',
    desc: 'Meaco models are often chosen for low-noise bedrooms.',
    query: 'Meaco air purifier small room',
    bullets: ['Great for: light sleepers', 'Prioritise low noise'],
  },
]

export default function Page() {
    
  const edu = getMoneyPageEdu('best-air-purifiers-small-flats-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Air Purifiers for Small Flats (UK): shortlist',
    dateModified: '2026-02-02',
    datePublished: '2026-01-25',
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What size air purifier is best for a small flat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Size it to the room you care about most (often the bedroom). A too-small unit is the most common mistake. Noise and replacement filters matter more than smart features in small spaces.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a purifier in every room?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not usually. Start with the bedroom or main living space and run it consistently. You can add a second unit later if needed.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Air purifiers for small flats (UK): shortlist</h1>
        <p className="mt-3 text-zinc-700">
          In small spaces, noise and filter costs matter more than fancy features. Buy the unit you’ll actually run every day.
        </p>

        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/air-quality.png"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />

        <EducationFirstCallout topicHref="/topics/air-quality" topicLabel="Air quality topic" insightHref="/blog/healthy-air-at-home" insightLabel="Healthy air at home" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/air-quality">Air quality</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Allergies list</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">The 3 checks</h2>
          <ol className="mt-3 list-decimal pl-6 text-sm text-zinc-700 space-y-2">
            <li>Room size coverage</li>
            <li>Noise (night mode)</li>
            <li>Filter replacement cost</li>
          </ol>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Where to place it</h2>
          <p className="mt-3 text-sm text-zinc-700">Put it where air can flow — not hidden behind furniture.</p>
          <Link className="btn-secondary mt-4 inline-flex" href="/blog/healthy-air-at-home">Placement tips</Link>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">When to upgrade</h2>
          <p className="mt-3 text-sm text-zinc-700">If you’re opening doors constantly or have a big living room, you may need a larger unit.</p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Top options (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">In small flats: prioritise night-mode noise + realistic filter costs.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="compact: Blueair 511i Max"
            badge="Overall favourite"
            description="A strong small-room choice if you size it correctly for your bedroom."
            href={amazonSearchUrl('Blueair 511i Max air purifier')}
            bullets={['Quiet night mode matters', 'Plan filter replacements', 'Great bedroom starting point']}
          />
          <ProductPick
            title="Good value: Levoit Core 300S"
            badge="Good value"
            description="Budget-friendly HEPA option often chosen for small rooms."
            href={amazonSearchUrl('Levoit Core 300S air purifier')}
            bullets={['Check filter availability', 'Keep it running daily']}
          />
          <ProductPick
            title="Great for light sleepers: Meaco"
            badge="Great for"
            description="Often chosen for quieter bedroom operation — ideal if noise wakes you."
            href={amazonSearchUrl('Meaco air purifier small room')}
            bullets={['Prioritise low noise', 'Don’t oversize if noise-sensitive']}
          />
        </div>

        <ComparisonTable
          caption="At-a-glance comparison (small flat decision rules)"
          columns={[
            { key: 'focus', label: 'Focus' },
            { key: 'bestFor', label: 'Great for' },
            { key: 'watchOut', label: 'Watch-out' },
            { key: 'check', label: 'Check before buying' },
          ]}
          rows={[
            {
              focus: 'Bedroom',
              bestFor: 'Quiet night mode + steady daily run time',
              watchOut: 'Noise at higher fan speeds',
              check: 'Night-mode dB + room-size coverage',
            },
            {
              focus: 'Kitchen smells',
              bestFor: 'Occasional odours',
              watchOut: 'Purifiers are not a full ventilation replacement',
              check: 'Carbon filter availability (if smells matter)',
            },
            {
              focus: 'Allergies',
              bestFor: 'Particles (pollen/dust) indoors',
              watchOut: 'Too-small units underperform',
              check: 'Coverage spec + filter cost',
            },
          ]}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer-friendly)</h2>
        <p className="mt-2 text-sm text-zinc-600">Curated searches to compare prices and filter costs.</p>
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

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics/air-quality">Go to Air Quality →</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Allergies list →</Link>
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-5 text-zinc-700">
          <div>
            <h3 className="font-semibold">What size purifier should I buy?</h3>
            <p className="mt-1 text-sm text-zinc-700">
              Size it to the room you care about most (often the bedroom). Too small is the most common mistake.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Do I need one in every room?</h3>
            <p className="mt-1 text-sm text-zinc-700">
              Not usually. Start with the bedroom or main living space, run it daily, then add a second unit later if needed.
            </p>
          </div>
        </div>
      </section>
      <MoneyPageNextLinks slug="best-air-purifiers-small-flats-uk" />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}