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
  title: 'Air Purifiers for Small Flats (UK): shortlist',
  description: 'How to choose an air purifier for a small UK flat: room size, noise, placement and replacement-filter costs, with current tracked partner options.',
}

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'You want one unit for a small flat', then: 'Start with the room you use most, often the bedroom, and prioritise sizing, noise and filter cost.' },
  { if: 'Noise wakes you', then: 'Compare night-time noise at a useful fan speed, not just the quietest marketing figure.' },
  { if: 'Cooking odours are the main issue', then: 'Ventilation remains important; if you also want filtration, check whether the purifier includes a carbon stage.' },
]

export default function Page() {
  const slug = 'best-air-purifiers-small-flats-uk'
  const edu = getMoneyPageEdu(slug)
  const { bestFor, routes, faqs } = getTop10Meta(slug)
  const partnerPicks = (AWIN_PICKS.air || []).filter((p) => p.group === 'Air purifiers').slice(0, 3)
  const itemList = partnerPicks.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.product }))
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Air Purifiers for Small Flats (UK): shortlist',
    dateModified: PHASE22_UPDATED,
    datePublished: '2026-01-25',
    ...(itemList.length ? { mainEntity: { '@type': 'ItemList', itemListElement: itemList } } : {}),
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Small-space buying guide</p>
          <h1 className="mt-2 text-4xl font-bold">Air purifiers for small flats (UK)</h1>
          <p className="mt-3 text-zinc-700">In a small flat, the best purifier is the one that fits the room, stays quiet enough to use and has replacement filters you can afford and easily buy.</p>
          <BestForBadges items={bestFor} />
        </div>
        <img src="/images/photography/air-quality.png" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/air-quality" topicLabel="Air quality topic" insightHref="/blog/healthy-air-at-home" insightLabel="Healthy air at home" />
          <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="#partner-options">See current partner options</Link><Link className="btn-secondary" href="/air-quality-shortlist-uk#air-purifiers">Full purifier shortlist</Link><Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Allergy guide</Link></div>
          <p className="mt-4 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />
      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="text-lg font-semibold">Room size</h2><p className="mt-3 text-sm text-zinc-700">Size the purifier to the room where it will actually run, not to the total floor area of the flat.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Noise</h2><p className="mt-3 text-sm text-zinc-700">For bedrooms, compare noise at a useful operating speed and check whether the controls are practical at night.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Filter cost</h2><p className="mt-3 text-sm text-zinc-700">Replacement-filter availability and cost are part of the purchase decision, not an afterthought.</p></div>
      </section>

      {partnerPicks.length ? (
        <section className="mt-14 scroll-mt-28" id="partner-options">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Current partner options</p>
            <h2 className="mt-2 text-2xl font-semibold">A few current purifiers to compare</h2>
            <p className="mt-2 text-zinc-700">These are maintained Wild & Well partner options rather than generic marketplace searches. Check the merchant’s current room-coverage guidance, useful-speed noise and replacement-filter price before buying.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {partnerPicks.map((p) => (
              <ProductPick
                key={p.clickref}
                title={p.product}
                badge={p.badge}
                description={p.description}
                bullets={p.bullets}
                trackingContext="small_flats_purifier_guide_featured"
                links={[
                  { label: `Check ${p.advertiser} price`, merchant: 'awin', href: p.awin, variant: 'primary' },
                  { label: 'Compare all purifier options', merchant: 'internal', href: '/air-quality-shortlist-uk#air-purifiers', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What to compare in a small flat</h2>
        <ComparisonTable caption="Small-flat decision rules" columns={[{ key: 'focus', label: 'Focus' }, { key: 'bestFor', label: 'Priority' }, { key: 'watchOut', label: 'Watch-out' }, { key: 'check', label: 'Check before buying' }]} rows={[{ focus: 'Bedroom', bestFor: 'Quiet continuous use', watchOut: 'Noise at useful speeds', check: 'Noise + room coverage' }, { focus: 'Cooking area', bestFor: 'Particle/odour support', watchOut: 'Purifier is not ventilation', check: 'Carbon stage + ventilation' }, { focus: 'Allergy use', bestFor: 'Particle control', watchOut: 'Undersized units', check: 'Coverage + filter cost' }]} />
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Need more choice?</p><h2 className="mt-2 text-2xl font-semibold">Use the central Air Quality shortlist</h2><p className="mt-2 text-zinc-700">The maintained shortlist holds the wider purifier set and replacement-filter routes, so this guide can stay focused on the small-flat decision rather than duplicating a giant product grid.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/air-quality-shortlist-uk#air-purifiers">Compare purifier options</Link><Link className="btn-secondary" href="/air-quality-shortlist-uk#replacement-filters">Check replacement filters</Link><Link className="btn-secondary" href="/blog/filter-replacement-costs-uk">Estimate ownership cost</Link></div></div>
      </section>

      <FAQSection faqs={faqs} />
      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
