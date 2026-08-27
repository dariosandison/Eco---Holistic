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
import InlineSignup from '@/components/InlineSignup'
import MoneyPageDecisionBox from '@/components/MoneyPageDecisionBox'
import MoneyPageUpdateLog from '@/components/MoneyPageUpdateLog'
import BestForBadges from '@/components/BestForBadges'
import FAQSection from '@/components/FAQSection'
import MoneyPageTrustBlock from '@/components/MoneyPageTrustBlock'
import MoneyPageRoutes from '@/components/MoneyPageRoutes'

export const metadata = {
  title: 'Air Purifiers for Allergies (UK): shortlist',
  description: 'How to choose an air purifier for allergies in a UK home: room sizing, filtration, noise and replacement costs, with current tracked partner options.',
}

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'Allergies are worst in the bedroom at night', then: 'Prioritise a quiet bedroom-friendly purifier and size it to the room.', note: 'Night-time noise matters if the unit will run while you sleep.' },
  { if: 'You are buying for a larger living room', then: 'Choose sufficient clean-air capacity rather than the smallest unit with a HEPA claim.', note: 'An undersized purifier may need to run harder and louder.' },
  { if: 'Smells or odours are part of the problem', then: 'Check whether the unit includes a meaningful carbon stage as well as particle filtration.' },
  { if: 'Damp or condensation is the main issue', then: 'Address moisture, ventilation and the source first; a purifier does not remove humidity.', note: 'Use the air-quality hub to compare the correct route.' },
]

export default function Page() {
  const slug = 'best-air-purifiers-allergies-uk'
  const edu = getMoneyPageEdu(slug)
  const { bestFor, routes, faqs } = getTop10Meta(slug)
  const partnerPicks = (AWIN_PICKS.air || []).filter((p) => p.group === 'Air purifiers').slice(0, 3)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Air Purifiers for Allergies (UK): shortlist', dateModified: PHASE22_UPDATED, datePublished: '2026-01-25' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Buyer-intent guide</p>
          <h1 className="mt-2 text-4xl font-bold">Air purifiers for allergies (UK)</h1>
          <p className="mt-3 text-zinc-700">The key decision is not the brand. It is whether a purifier is the right tool, then whether the unit is appropriately sized, quiet enough and affordable to maintain.</p>
          <BestForBadges items={bestFor} />
        </div>
        <img src="/images/photography/air-quality.png" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/air-quality" topicLabel="Air quality topic" insightHref="/blog/healthy-air-at-home" insightLabel="Healthy air at home" />
          <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="#partner-options">See current partner options</Link><Link className="btn-secondary" href="/air-quality-shortlist-uk#air-purifiers">Full purifier shortlist</Link><Link className="btn-secondary" href="/best-air-purifiers-small-flats-uk">Small flats guide</Link></div>
          <p className="mt-4 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />
      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="text-lg font-semibold">1. Size the room</h2><p className="mt-3 text-sm text-zinc-700">Compare stated clean-air performance and coverage for the room where the purifier will actually run.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">2. Check ownership cost</h2><p className="mt-3 text-sm text-zinc-700">Replacement-filter price and availability matter because the purifier is only useful if you maintain it.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">3. Check noise</h2><p className="mt-3 text-sm text-zinc-700">For bedrooms especially, compare noise at a setting that provides useful filtration rather than judging only the quietest mode.</p></div>
      </section>

      {partnerPicks.length ? (
        <section className="mt-14 scroll-mt-28" id="partner-options">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Current partner options</p>
            <h2 className="mt-2 text-2xl font-semibold">A small tracked shortlist to start with</h2>
            <p className="mt-2 text-zinc-700">These current partner options come from the central Air Quality shortlist. Compare room size, filtration, noise and replacement-filter cost on the merchant site rather than choosing by brand name alone.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {partnerPicks.map((p) => (
              <ProductPick
                key={p.clickref}
                title={p.product}
                badge={p.badge}
                description={p.description}
                bullets={p.bullets}
                trackingContext="air_purifier_allergies_featured"
                links={[
                  { label: `Check ${p.advertiser} price`, merchant: 'awin', href: p.awin, variant: 'primary' },
                  { label: 'Compare all purifiers', merchant: 'internal', href: '/air-quality-shortlist-uk#air-purifiers', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ) : null}

      <InlineSignup placement="air_purifiers_allergies" title="Free: Low-Tox Shopping List" description="A beginner-friendly shortcut with simple swaps for air, water, cleaning and sleep — in plain English." cta="Send me the list" />

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What to compare before buying</h2>
        <ComparisonTable caption="Purifier buying priorities" columns={[{ key: 'pick', label: 'Use case' }, { key: 'bestFor', label: 'Priority' }, { key: 'watchOut', label: 'Watch-out' }, { key: 'check', label: 'Check before buying' }]} rows={[{ pick: 'Bedroom', bestFor: 'Quiet night use', watchOut: 'Noise at useful speeds', check: 'Noise + room coverage' }, { pick: 'Living room', bestFor: 'Everyday particle control', watchOut: 'Filter cost', check: 'Replacement price + frequency' }, { pick: 'Large/open-plan room', bestFor: 'Higher clean-air capacity', watchOut: 'Higher fan speeds', check: 'Realistic coverage + noise' }]} />
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="max-w-3xl"><h2 className="text-2xl font-semibold">Need a wider comparison?</h2><p className="mt-2 text-zinc-700">The main Air Quality shortlist holds the maintained set of current purifiers, dehumidifiers, replacement filters and airflow products.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/air-quality-shortlist-uk#air-purifiers">Open purifier shortlist</Link><Link className="btn-secondary" href="/air-quality-shortlist-uk#filters-replacements">Check replacement filters</Link></div></div>
      </section>

      <FAQSection faqs={faqs} />
      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
      <MoneyPageNextLinks slug="best-air-purifiers-allergies-uk" includeSignup={false} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
