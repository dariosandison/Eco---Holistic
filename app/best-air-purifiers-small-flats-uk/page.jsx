import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { PHASE22_UPDATED, PHASE22_UPDATED_LABEL, PHASE22_PREV_UPDATED_LABEL, PHASE22_DEFAULT_UPDATE_CHANGES } from '@/lib/phase22'
import ComparisonTable from '@/components/ComparisonTable'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
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
  title: 'Air Purifiers for Small Flats (UK): shortlist',
  description: 'Shortlisted air purifiers that make sense for small UK flats: quiet bedrooms, compact units, and realistic filter costs.',
}

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'You want one unit for a small flat', then: 'Start with the bedroom: quiet mode + filter cost beat “smart” features.' },
  { if: 'Noise wakes you', then: 'Pick the quietest option you can tolerate and run it daily at a lower speed.' },
  { if: 'You cook often / notice odours', then: 'Consider carbon (or accept that ventilation is still the main fix).' },
]

const PICKS = [
  {
    title: 'Blueair Blue 511i Max',
    badge: 'compact',
    desc: 'A strong “bedroom‑sized option if you size it correctly.',
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

  const { bestFor, routes, faqs } = getTop10Meta('best-air-purifiers-small-flats-uk')

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
    dateModified: PHASE22_UPDATED,
    datePublished: '2026-01-25',
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Air purifiers for small flats (UK): shortlist</h1>
        <p className="mt-3 text-zinc-700">
          In small spaces, noise and filter costs matter more than fancy features. Buy the unit you’ll actually run every day.

        </p>

        <BestForBadges items={bestFor} />

        </div>

        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/air-quality.png"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
        <EducationFirstCallout topicHref="/topics/air-quality" topicLabel="Air quality topic" insightHref="/blog/healthy-air-at-home" insightLabel="Healthy air at home" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/air-quality">Air quality</Link>
          <Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Allergies list</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
        </div>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />

      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageQuickCompare picks={PICKS} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />
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
            badge="Best overall"
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

      <FAQSection faqs={faqs} />

      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
      <MoneyPageNextLinks slug="best-air-purifiers-small-flats-uk" />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}