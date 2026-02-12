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
import InlineSignup from '@/components/InlineSignup'
import MoneyPageDecisionBox from '@/components/MoneyPageDecisionBox'
import MoneyPageQuickCompare from '@/components/MoneyPageQuickCompare'
import MoneyPageUpdateLog from '@/components/MoneyPageUpdateLog'
import BestForBadges from '@/components/BestForBadges'
import FAQSection from '@/components/FAQSection'
import MoneyPageTrustBlock from '@/components/MoneyPageTrustBlock'
import MoneyPageRoutes from '@/components/MoneyPageRoutes'




export const metadata = {
  title: 'Water Filters (UK) — Jugs vs Under‑Sink vs Countertop: shortlist',
  description: 'Shortlisted water filters for UK homes (jugs, under‑sink, gravity) with clear trade-offs and replacement cost notes.',
}

// AWIN affiliate links (UK)
const ZEROWATER_JUG_1_7L = 'https://www.awin1.com/cread.php?awinmid=30649&awinaffid=2754234&clickref=ww_water_picks_filter_jug_zerowater_1_7l&ued=https%3A%2F%2Fshop.culligan.co.uk%2Fproducts%2F1-7-litre-water-filter-jug'
const WATERDROP_UNDERSINK_DIRECT_CONNECT = 'https://www.awin1.com/cread.php?awinmid=117649&awinaffid=2754234&clickref=ww_water_picks_under_sink_waterdrop_ua&ued=https%3A%2F%2Fwww.waterdropfilter.co.uk%2Fcollections%2Fbest-selling%2Fproducts%2Funder-sink-water-filter-direct-connect-filtration-system'
const DOULTON_BB_GRAVITY_1L = 'https://www.awin1.com/cread.php?awinmid=69790&awinaffid=2754234&clickref=ww_water_picks_gravity_filter_doulton_bb_1l&ued=https%3A%2F%2Fdoulton.com%2Fproducts%2Fbritish-berkefeld-1-litre-stainless-steel-gravity-system'
const WATERTOGO_ACTIVE_75CL = 'https://www.awin1.com/cread.php?awinmid=86997&awinaffid=2754234&clickref=ww_water_picks_filter_bottle_watertogo_active_75cl&ued=https%3A%2F%2Fwatertogo.eu%2Fproduct%2F75cl-active-bottles%2F'
const ZW_FILTERS_AMAZON = amazonSearchUrl('ZeroWater replacement filters 5-stage')

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'You want the simplest start', then: 'Begin with a reputable jug filter and see if taste improves.', note: 'Jugs aren’t a full solution for every contaminant.' },
  { if: 'You want the most convenient daily option', then: 'Consider an under‑sink or tap‑mounted system if installation is possible.', note: 'Check replacement cartridge availability/cost.' },
  { if: 'You’re in an older property / worried about lead', then: 'Check your water report and consider a certified reduction system (and replace cartridges on time).' },
]

const PICKS = [
  {
    title: 'Doulton under‑sink water filter system',
    badge: 'Low effort',
    desc: 'Filtered water from a dedicated tap. Great if you’ll keep up with yearly replacements.',
    query: 'Doulton under sink water filter system UK',
    bullets: ['Great for: families + daily use', 'Check installation space under the sink', 'Budget for annual filter changes'],
  },
  {
    title: 'BRITA Style / Marella jug + MAXTRA filters',
    badge: 'Easy starter jug',
    desc: 'Easy, cheap to begin, widely available in the UK.',
    query: 'BRITA Style water filter jug MAXTRA filters',
    bullets: ['Great for: renters + small kitchens', 'Fits most fridges', 'Replacement filters are the ongoing cost'],
  },
  {
    title: 'Aarke Purifier (pitcher)',
    badge: 'Nice design',
    desc: 'Premium-feeling jug/pitcher option. Great if you want a “nice enough to live on the counter” piece.',
    query: 'Aarke purifier pitcher',
    bullets: ['Great for: aesthetics + everyday sipping', 'Check replacement filter pricing'],
  },
  {
    title: 'Phox water filter jug',
    badge: 'eco jug',
    desc: 'A UK-friendly option often praised for reducing plastic vs constant cartridge swapping.',
    query: 'Phox water filter jug',
    bullets: ['Great for: reducing plastic', 'Check availability of refills'],
  },
  {
    title: 'British Berkefeld gravity filter',
    badge: 'no‑plumbing',
    desc: 'Large capacity without installing anything. Useful for renters or if you want big batch filtration.',
    query: 'British Berkefeld gravity water filter',
    bullets: ['Great for: high capacity', 'Takes counter space', 'Plan filter replacements'],
  },
  {
    title: 'BRITA Flow (large tank)',
    badge: 'Great for families',
    desc: 'A bigger “tap-style” tank that stays in the fridge. Great for high throughput.',
    query: 'Brita Flow water filter tank',
    bullets: ['Great for: lots of cups a day', 'Measure your fridge shelf first'],
  },
]

function QuickSummary() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">At a glance</h2>
      <p className="mt-2 text-zinc-700">
        If you want the simplest option, start with a <strong>jug</strong>. If you’ll use filtered water daily and want convenience, go <strong>under‑sink</strong>.
        If you want high capacity without plumbing, choose a <strong>countertop gravity filter</strong>.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/topics/water">Water shortlist</Link>
        <Link className="btn-secondary" href="/blog/water-filter-buying-guide-uk">Buying guide</Link>
        <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
    </div>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-water-filters-uk')

  const { bestFor, routes, faqs } = getTop10Meta('best-water-filters-uk')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Water Filters (UK) — Jugs vs Under‑Sink vs Countertop: shortlist',
    dateModified: PHASE22_UPDATED,
    datePublished: '2026-01-25',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: itemList,
    },
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Water filters (UK): shortlist</h1>
        <p className="mt-3 text-zinc-700">
          A shortlist — not an endless list. The best choice is the one you’ll actually use and keep replacing filters for.

        </p>

        <BestForBadges items={bestFor} />

        </div>

        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/water.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
        <EducationFirstCallout topicHref="/topics/water" topicLabel="Water topic" insightHref="/blog/water-filter-buying-guide-uk" insightLabel="Water filter buying guide" />
        </div>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />

      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageQuickCompare picks={PICKS} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />
<section className="mt-10">
        <QuickSummary />
      </section>

      <InlineSignup
        placement="water_filters_uk"
        title="Free: Low‑Tox Shopping List"
        description="A beginner-friendly shortcut with simple swaps for air, water, cleaning and sleep — in plain English."
        cta="Send me the list"
      />

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">How to choose (in 60 seconds)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card">
            <h3 className="text-lg font-semibold">Jug</h3>
            <p className="mt-2 text-sm text-zinc-700">Easy starter option. Great taste improvement and easy to maintain.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: filter replacements add up over time.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Under‑sink</h3>
            <p className="mt-2 text-sm text-zinc-700">Most convenient for daily use. Ideal if you want filtered water from a tap.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: check installation space and annual filter costs.</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold">Countertop gravity</h3>
            <p className="mt-2 text-sm text-zinc-700">High capacity without plumbing. Great for renters or batch filtering.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: takes counter space and needs regular cleaning.</p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Top shortlist (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">Four simple routes, depending on how you live.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ProductPick
            title="Best jug (simple start): ZeroWater (UK)"
            badge="Jug"
            description="A simple jug route for taste/odour. Always check replacement filters before you commit."
            bullets={["Great for renters + small kitchens", "Replacement filters are the ongoing cost", "Start simple and keep it consistent"]}
            links={[
              { label: 'Check price', merchant: 'awin', href: ZEROWATER_JUG_1_7L, variant: 'primary' },
              { label: 'Replacement filters', merchant: 'amazon', href: ZW_FILTERS_AMAZON, variant: 'ghost' },
            ]}
          />

          <ProductPick
            title="Best under‑sink (low effort): Waterdrop"
            badge="Under‑sink"
            description="Filtered water from your tap without thinking about it every day. Check under‑sink space + ongoing filter costs."
            bullets={["Great for: daily use + convenience", "Check under‑sink space before buying", "Budget for replacements"]}
            links={[{ label: 'Check price', merchant: 'awin', href: WATERDROP_UNDERSINK_DIRECT_CONNECT, variant: 'primary' }]}
          />

          <ProductPick
            title="Best countertop (no plumbing): Doulton gravity"
            badge="Gravity"
            description="Countertop gravity filtration — useful for renters or batch filtering without installation."
            bullets={["Great for: no plumbing", "Takes counter space", "Plan filter replacements"]}
            links={[{ label: 'Check price', merchant: 'awin', href: DOULTON_BB_GRAVITY_1L, variant: 'primary' }]}
          />

          <ProductPick
            title="Best portable bottle: Water‑to‑Go (75cl)"
            badge="On‑the‑go"
            description="A simple filtered bottle route for gym, commute, or travel."
            bullets={["Good for: travel + busy days", "Easy to keep in a bag", "Check replacement cartridge schedule"]}
            links={[{ label: 'Check price', merchant: 'awin', href: WATERTOGO_ACTIVE_75CL, variant: 'primary' }]}
          />
        </div>

        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Replacement filters matter</h3>
          <p className="mt-2 text-sm text-zinc-700">
            The ongoing cost is the replacements. Before you choose any jug system, check how often you’ll replace filters and what they cost.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a className="btn-secondary" href={ZW_FILTERS_AMAZON} target="_blank" rel="noopener nofollow sponsored">ZeroWater replacement filters</a>
          </div>
        </div>

        <ComparisonTable
          caption="At-a-glance comparison (the simplest decision rules)"
          columns={[
            { key: 'type', label: 'Type' },
            { key: 'bestFor', label: 'Great for' },
            { key: 'tradeoff', label: 'Main tradeoff' },
            { key: 'whatToCheck', label: 'Check before buying' },
          ]}
          rows={[
            {
              type: 'Jug (fridge)',
              bestFor: 'Renters, smaller kitchens, lighter usage',
              tradeoff: 'Ongoing filter replacements',
              whatToCheck: 'Replacement cost + frequency; fridge fit',
            },
            {
              type: 'Under-sink',
              bestFor: 'Daily use + convenience',
              tradeoff: 'Needs space/installation',
              whatToCheck: 'Under-sink space; annual filter cost',
            },
            {
              type: 'Gravity countertop',
              bestFor: 'High capacity without plumbing',
              tradeoff: 'Counter space + cleaning',
              whatToCheck: 'Footprint; replacement elements; cleaning routine',
            },
          ]}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer notes)</h2>
        <p className="mt-2 text-sm text-zinc-600">
          These are curated searches so you can compare prices and check replacement filters.
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

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics/water">Go to Water shortlist →</Link>
          <Link className="btn-secondary" href="/blog/water-filter-buying-guide-uk">Read the buying guide</Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
      <MoneyPageNextLinks slug="best-water-filters-uk"  includeSignup={false} />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}