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
import InlineSignup from '@/components/InlineSignup'
import MoneyPageDecisionBox from '@/components/MoneyPageDecisionBox'
import MoneyPageQuickCompare from '@/components/MoneyPageQuickCompare'
import MoneyPageUpdateLog from '@/components/MoneyPageUpdateLog'
import BestForBadges from '@/components/BestForBadges'
import FAQSection from '@/components/FAQSection'
import MoneyPageTrustBlock from '@/components/MoneyPageTrustBlock'
import MoneyPageRoutes from '@/components/MoneyPageRoutes'

export const metadata = {
  title: 'Air Purifiers for Allergies (UK): shortlist',
  description: 'How to choose an air purifier for allergies in a UK home: room sizing, filtration, noise and replacement costs, with a route into our current partner shortlist.',
}

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'Allergies are worst in the bedroom at night', then: 'Prioritise a quiet bedroom-friendly purifier and size it to the room.', note: 'Night-time noise matters if the unit will run while you sleep.' },
  { if: 'You are buying for a larger living room', then: 'Choose sufficient clean-air capacity rather than the smallest unit with a HEPA claim.', note: 'An undersized purifier may need to run harder and louder.' },
  { if: 'Smells or odours are part of the problem', then: 'Check whether the unit includes a meaningful carbon stage as well as particle filtration.' },
  { if: 'Damp or condensation is the main issue', then: 'Address moisture, ventilation and the source first; a purifier does not remove humidity.', note: 'Use the air-quality hub to compare the correct route.' },
]

const PICKS = [
  { title: 'Shark NeverChange5 (HEPA)', badge: 'Lower filter fuss', desc: 'A commonly considered option where replacement frequency is a priority.', query: 'Shark NeverChange5 air purifier', bullets: ['Check room-size suitability', 'Verify current filter guidance', 'Check noise for bedroom use'] },
  { title: 'Blueair Blue Max 3250i', badge: 'Everyday option', desc: 'A mainstream option to compare for everyday particle control.', query: 'Blueair Blue Max 3250i air purifier', bullets: ['Check room coverage', 'Plan replacement-filter cost', 'Compare noise at useful fan speeds'] },
  { title: 'Levoit Core 600S', badge: 'Larger rooms', desc: 'A higher-capacity model worth comparing for larger spaces.', query: 'Levoit Core 600S air purifier', bullets: ['Check realistic room coverage', 'Compare noise at higher speeds', 'Confirm replacement availability'] },
  { title: 'Meaco HEPA air purifier', badge: 'Bedroom comparison', desc: 'Worth comparing where quiet operation is a high priority.', query: 'Meaco air purifier HEPA', bullets: ['Check night-mode noise', 'Match capacity to room size'] },
  { title: 'Dyson purifier', badge: 'Premium comparison', desc: 'A premium route for households that value additional sensing or combined features.', query: 'Dyson purifier HEPA carbon', bullets: ['Compare total cost', 'Check replacement filters', 'Do not pay for features you will not use'] },
  { title: 'Blueair Blue 511i Max', badge: 'Smaller spaces', desc: 'A compact model to compare for bedrooms and smaller rooms.', query: 'Blueair 511i Max air purifier', bullets: ['Check room size', 'Check night-time noise', 'Confirm replacement-filter cost'] },
]

export default function Page() {
  const edu = getMoneyPageEdu('best-air-purifiers-allergies-uk')
  const { bestFor, routes, faqs } = getTop10Meta('best-air-purifiers-allergies-uk')
  const itemList = PICKS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.title, url: amazonSearchUrl(p.query) }))
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Air Purifiers for Allergies (UK): shortlist', dateModified: PHASE22_UPDATED, datePublished: '2026-01-25', mainEntity: { '@type': 'ItemList', itemListElement: itemList } }

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
          <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="/air-quality-shortlist-uk#air-purifiers">Compare current partner options</Link><Link className="btn-secondary" href="/topics/air-quality">Air quality</Link><Link className="btn-secondary" href="/best-air-purifiers-small-flats-uk">Small flats guide</Link></div>
          <p className="mt-4 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />
      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageQuickCompare picks={PICKS} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="text-lg font-semibold">1. Size the room</h2><p className="mt-3 text-sm text-zinc-700">Compare stated clean-air performance and coverage for the room where the purifier will actually run.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">2. Check ownership cost</h2><p className="mt-3 text-sm text-zinc-700">Replacement-filter price and availability matter because the purifier is only useful if you maintain it.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">3. Check noise</h2><p className="mt-3 text-sm text-zinc-700">For bedrooms especially, compare noise at a setting that provides useful filtration rather than judging only the quietest mode.</p></div>
      </section>

      <InlineSignup placement="air_purifiers_allergies" title="Free: Low-Tox Shopping List" description="A beginner-friendly shortcut with simple swaps for air, water, cleaning and sleep — in plain English." cta="Send me the list" />

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Ready to compare?</p><h2 className="mt-2 text-2xl font-semibold">Use the live Wild & Well air-quality shortlist</h2><p className="mt-2 text-zinc-700">This guide explains the decision. Our main shortlist is where we group current partner options for purifiers, dehumidifiers, replacement filters and airflow products. That keeps the buying layer in one place instead of duplicating product cards across several articles.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/air-quality-shortlist-uk#air-purifiers">Compare purifier options</Link><Link className="btn-secondary" href="/air-quality-shortlist-uk#replacement-filters">Check replacement filters</Link></div></div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Models worth researching</h2>
        <p className="mt-2 text-sm text-zinc-600">These are useful reference points for your own comparison. For Wild & Well's current commercial options, use the partner shortlist above.</p>
        <ComparisonTable caption="What to compare before buying" columns={[{ key: 'pick', label: 'Use case' }, { key: 'bestFor', label: 'Priority' }, { key: 'watchOut', label: 'Watch-out' }, { key: 'check', label: 'Check before buying' }]} rows={[{ pick: 'Bedroom', bestFor: 'Quiet night use', watchOut: 'Noise at useful speeds', check: 'Noise + room coverage' }, { pick: 'Living room', bestFor: 'Everyday particle control', watchOut: 'Filter cost', check: 'Replacement price + frequency' }, { pick: 'Large/open-plan room', bestFor: 'Higher clean-air capacity', watchOut: 'Higher fan speeds', check: 'Realistic coverage + noise' }]} />
      </section>

      <FAQSection faqs={faqs} />
      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
      <MoneyPageNextLinks slug="best-air-purifiers-allergies-uk" includeSignup={false} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
