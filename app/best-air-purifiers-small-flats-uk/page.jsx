import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { PHASE22_UPDATED, PHASE22_UPDATED_LABEL, PHASE22_PREV_UPDATED_LABEL, PHASE22_DEFAULT_UPDATE_CHANGES } from '@/lib/phase22'
import ComparisonTable from '@/components/ComparisonTable'
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
  description: 'How to choose an air purifier for a small UK flat: room size, noise, placement and replacement-filter costs, with a route into our current partner shortlist.',
}

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'You want one unit for a small flat', then: 'Start with the room you use most, often the bedroom, and prioritise sizing, noise and filter cost.' },
  { if: 'Noise wakes you', then: 'Compare night-time noise at a useful fan speed, not just the quietest marketing figure.' },
  { if: 'Cooking odours are the main issue', then: 'Ventilation remains important; if you also want filtration, check whether the purifier includes a carbon stage.' },
]

const PICKS = [
  { title: 'Blueair Blue 511i Max', badge: 'Compact reference', desc: 'A compact model worth researching for bedrooms and smaller rooms.', query: 'Blueair 511i Max air purifier', bullets: ['Check room-size suitability', 'Compare night-time noise', 'Plan filter replacements'] },
  { title: 'Levoit Core 300S', badge: 'Value reference', desc: 'A commonly considered compact purifier for smaller spaces.', query: 'Levoit Core 300S air purifier', bullets: ['Check filter availability', 'Compare realistic coverage', 'Check running costs'] },
  { title: 'Philips Series 800', badge: 'Mainstream reference', desc: 'A mainstream compact model to include in your own comparison.', query: 'Philips 800 series air purifier', bullets: ['Check filter cost', 'Check noise', 'Compare room coverage'] },
  { title: 'Shark small-room HEPA purifier', badge: 'Simple-use reference', desc: 'A compact option to research if straightforward controls matter.', query: 'Shark air purifier small room HEPA', bullets: ['Check coverage', 'Check replacement filters'] },
  { title: 'Meaco small-room purifier', badge: 'Bedroom reference', desc: 'A useful reference where low-noise bedroom operation is a priority.', query: 'Meaco air purifier small room', bullets: ['Check night noise', 'Match capacity to room size'] },
]

export default function Page() {
  const edu = getMoneyPageEdu('best-air-purifiers-small-flats-uk')
  const { bestFor, routes, faqs } = getTop10Meta('best-air-purifiers-small-flats-uk')
  const itemList = PICKS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: amazonSearchUrl(p.query) }))
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Air Purifiers for Small Flats (UK): shortlist', dateModified: PHASE22_UPDATED, datePublished: '2026-01-25', mainEntity: { '@type': 'ItemList', itemListElement: itemList } }

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
          <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="/air-quality-shortlist-uk#air-purifiers">Compare current partner options</Link><Link className="btn-secondary" href="/topics/air-quality">Air quality</Link><Link className="btn-secondary" href="/best-air-purifiers-allergies-uk">Allergy guide</Link></div>
          <p className="mt-4 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />
      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageQuickCompare picks={PICKS} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="text-lg font-semibold">Room size</h2><p className="mt-3 text-sm text-zinc-700">Size the purifier to the room where it will actually run, not to the total floor area of the flat.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Noise</h2><p className="mt-3 text-sm text-zinc-700">For bedrooms, compare noise at a useful operating speed and check whether the controls are practical at night.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Filter cost</h2><p className="mt-3 text-sm text-zinc-700">Replacement-filter availability and cost are part of the purchase decision, not an afterthought.</p></div>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Ready to compare?</p><h2 className="mt-2 text-2xl font-semibold">Use the central Air Quality shortlist</h2><p className="mt-2 text-zinc-700">This page is designed to capture small-flat search intent and help you choose the right specification. The main partner shortlist is where Wild & Well keeps current commercial options together, reducing duplicated product lists across the site.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/air-quality-shortlist-uk#air-purifiers">Compare purifier options</Link><Link className="btn-secondary" href="/air-quality-shortlist-uk#replacement-filters">Check replacement filters</Link></div></div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">What to compare in a small flat</h2>
        <ComparisonTable caption="Small-flat decision rules" columns={[{ key: 'focus', label: 'Focus' }, { key: 'bestFor', label: 'Priority' }, { key: 'watchOut', label: 'Watch-out' }, { key: 'check', label: 'Check before buying' }]} rows={[{ focus: 'Bedroom', bestFor: 'Quiet continuous use', watchOut: 'Noise at useful speeds', check: 'Noise + room coverage' }, { focus: 'Cooking area', bestFor: 'Particle/odour support', watchOut: 'Purifier is not ventilation', check: 'Carbon stage + ventilation' }, { focus: 'Allergy use', bestFor: 'Particle control', watchOut: 'Undersized units', check: 'Coverage + filter cost' }]} />
      </section>

      <FAQSection faqs={faqs} />
      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
      <MoneyPageNextLinks slug="best-air-purifiers-small-flats-uk" />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
