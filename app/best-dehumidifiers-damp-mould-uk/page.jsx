import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { PHASE22_UPDATED, PHASE22_UPDATED_LABEL, PHASE22_PREV_UPDATED_LABEL, PHASE22_DEFAULT_UPDATE_CHANGES } from '@/lib/phase22'
import ComparisonTable from '@/components/ComparisonTable'
import ProductPick from '@/components/mdx/ProductPick'
import { AWIN_PICKS } from '@/data/awinPicks'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import { getTop10Meta } from '@/data/top10Meta'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import MoneyPageDecisionBox from '@/components/MoneyPageDecisionBox'
import MoneyPageUpdateLog from '@/components/MoneyPageUpdateLog'
import BestForBadges from '@/components/BestForBadges'
import FAQSection from '@/components/FAQSection'
import MoneyPageTrustBlock from '@/components/MoneyPageTrustBlock'
import MoneyPageRoutes from '@/components/MoneyPageRoutes'

export const metadata = {
  title: 'Best dehumidifiers for damp & mould (UK): what to buy first',
  description: 'A practical UK guide to damp, condensation and laundry drying: measure humidity, address moisture sources, then compare current partner dehumidifiers.',
}

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'The room is cold or you mainly dry laundry indoors', then: 'Compare desiccant dehumidifiers as well as compressor models.', note: 'Check energy use and noise for the way you expect to run it.' },
  { if: 'The room is reasonably warm with recurring condensation', then: 'A compressor dehumidifier may be a practical everyday option.', note: 'Compare extraction capacity, humidistat control and running cost.' },
  { if: 'You are not sure humidity is actually high', then: 'Measure first with a hygrometer before buying a dehumidifier.' },
  { if: 'There is a leak or obvious building defect', then: 'Fix the moisture source first.', note: 'A dehumidifier manages moisture; it does not repair the cause.' },
]

export default function Page() {
  const slug = 'best-dehumidifiers-damp-mould-uk'
  const edu = getMoneyPageEdu(slug)
  const { bestFor, routes, faqs } = getTop10Meta(slug)
  const partnerPicks = (AWIN_PICKS.air || []).filter((p) => p.group === 'Dehumidifiers').slice(0, 3)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best dehumidifiers for damp & mould (UK): what to buy first',
    dateModified: PHASE22_UPDATED,
    datePublished: '2026-02-01',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Moisture first, product second</p>
          <h1 className="mt-2 text-4xl font-bold">Best dehumidifiers for damp &amp; mould (UK)</h1>
          <p className="mt-3 text-zinc-700">Before buying anything, confirm that excess humidity is the problem and deal with leaks, ventilation and moisture sources. Then compare a dehumidifier that suits the room and how you will use it.</p>
          <BestForBadges items={bestFor} />
        </div>
        <img src="/images/photography/air-quality.png" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/air-quality" topicLabel="Air quality topic" insightHref="/blog/damp-and-mould-uk-renters-playbook" insightLabel="Damp & mould guide" />
          <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="#partner-options">See current partner options</Link><Link className="btn-secondary" href="/air-quality-shortlist-uk#dehumidifiers">Full dehumidifier shortlist</Link><Link className="btn-secondary" href="/blog/winter-humidity-guide">Winter humidity guide</Link></div>
          <p className="mt-4 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />
      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="text-lg font-semibold">1. Measure</h2><p className="mt-3 text-sm text-zinc-700">Use a hygrometer in the rooms where condensation, damp or laundry drying is a problem. One reading is less useful than a pattern over several days.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">2. Find the source</h2><p className="mt-3 text-sm text-zinc-700">Cooking, showers, indoor laundry, poor ventilation and leaks are common moisture sources. Address those before relying on equipment.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">3. Match the machine</h2><p className="mt-3 text-sm text-zinc-700">Compare type, extraction capacity, noise, tank or drainage setup and energy use for the room where it will actually run.</p></div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Which type should you compare?</h2>
        <ComparisonTable caption="Dehumidifier routes at a glance" columns={[{ key: 'type', label: 'Type' }, { key: 'bestFor', label: 'Often considered for' }, { key: 'tradeoff', label: 'Main trade-off' }, { key: 'check', label: 'Check before buying' }]} rows={[{ type: 'Desiccant', bestFor: 'Colder rooms and laundry drying', tradeoff: 'Can use more energy', check: 'Noise, laundry mode, energy use' }, { type: 'Compressor', bestFor: 'Warmer rooms and recurring condensation', tradeoff: 'Performance can fall in colder rooms', check: 'Extraction capacity, humidistat, drainage' }, { type: 'Mini / Peltier', bestFor: 'Very small enclosed spaces', tradeoff: 'Often too weak for significant household damp', check: 'Realistic extraction rate' }]} />
      </section>

      {partnerPicks.length ? (
        <section className="mt-14 scroll-mt-28" id="partner-options">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Current partner options</p>
            <h2 className="mt-2 text-2xl font-semibold">Compare a few suitable dehumidifiers, not a giant product grid</h2>
            <p className="mt-2 text-zinc-700">These are current Wild & Well partner options from the main air-quality shortlist. Check room suitability, noise, extraction rate, drainage and running cost on the merchant site before buying.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {partnerPicks.map((p) => (
              <ProductPick
                key={p.clickref}
                title={p.product}
                badge={p.badge}
                description={p.description}
                bullets={p.bullets}
                trackingContext="dehumidifier_guide_featured"
                links={[
                  { label: `Check ${p.advertiser} price`, merchant: 'awin', href: p.awin, variant: 'primary' },
                  { label: 'Compare all dehumidifiers', merchant: 'internal', href: '/air-quality-shortlist-uk#dehumidifiers', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Need more choice?</h2>
          <p className="mt-2 text-zinc-700">The central Air Quality shortlist holds the maintained set of partner dehumidifiers, replacement filters, purifiers and airflow products.</p>
          <div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/air-quality-shortlist-uk#dehumidifiers">Open dehumidifier shortlist</Link><Link className="btn-secondary" href="/best-dehumidifier-air-purifier-uk-meaco-arete-one-25l">Read the Meaco Arete guide</Link></div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
