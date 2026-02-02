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
  title: 'Water Filters (UK) — Jugs vs Under‑Sink vs Countertop: shortlist',
  description: 'Shortlisted water filters for UK homes (jugs, under‑sink, gravity) with clear trade-offs and replacement cost notes.',
}

// Awin (ZeroWater) affiliate links
const ZW_BESTWATER_STARTER = 'https://www.awin1.com/cread.php?awinmid=30649&awinaffid=2754234&clickref=ww_bestwater_zw_starter&ued=https%3A%2F%2Fwww.zerowater.com%2Fcollections%2Fstarter-kits'
const ZW_BESTWATER_FILTERS = 'https://www.awin1.com/cread.php?awinmid=30649&awinaffid=2754234&clickref=ww_bestwater_zw_filters&ued=https%3A%2F%2Fwww.zerowater.com%2Fcollections%2F5-stage-replacement-water-filters'

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
        <Link className="btn-secondary" href="/favourites?tag=Water">Water favourites</Link>
        <Link className="btn-secondary" href="/blog/water-filter-buying-guide-uk">Buying guide</Link>
        <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
    </div>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-water-filters-uk')

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
    dateModified: '2026-02-02',
    datePublished: '2026-01-25',
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
        name: 'Is an under-sink filter better than a jug?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not automatically. Under-sink filters are mainly about convenience. The best choice is the one you will maintain and replace filters for.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the hidden cost of water filters?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Replacement filters. Before buying, check the replacement price and how often you will replace it based on your household usage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do certifications matter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When brands make big performance claims, credible test reports matter. If claims are vague or unsupported, treat them as marketing until proven.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Water filters (UK): favourites</h1>
        <p className="mt-3 text-zinc-700">
          A shortlist — not an endless list. The best choice is the one you’ll actually use and keep replacing filters for.
        </p>

        <EducationFirstCallout topicHref="/topics/water" topicLabel="Water topic" insightHref="/blog/water-filter-buying-guide-uk" insightLabel="Water filter buying guide" />
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-10">
        <QuickSummary />
      </section>

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
        <h2 className="text-2xl font-semibold">Top favourites (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">Three simple routes, depending on how you live.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Best jug for taste: ZeroWater"
            badge="Best for taste"
            description="A simple jug route if taste/odour is your main goal. Always check replacement filters before you commit."
            bullets={["Great for renters + small kitchens", "Replacement filters are the ongoing cost", "Start with a starter kit and adjust from there"]}
            links={[
              { label: 'Check price at ZeroWater', merchant: 'zerowater', href: ZW_BESTWATER_STARTER, variant: 'primary' },
              { label: 'Replacement filters', merchant: 'zerowater', href: ZW_BESTWATER_FILTERS, variant: 'ghost' },
              { label: 'Amazon alternatives', merchant: 'amazon', href: amazonSearchUrl('BRITA Style water filter jug MAXTRA filters'), variant: 'ghost' },
            ]}
          />
          <ProductPick
            title="Low effort: under-sink"
            badge="Overall favourite"
            description="Most convenient for daily use. Ideal if you want filtered water from a tap."
            href={amazonSearchUrl('Doulton under sink water filter system UK')}
            bullets={["Check installation space", "Budget for annual filter changes", "Great for families"]}
          />
          <ProductPick
            title="no-plumbing: gravity filter"
            badge="Great for"
            description="High capacity without installing anything. Good for batch filtration and renters."
            href={amazonSearchUrl('British Berkefeld gravity water filter')}
            bullets={["Takes counter space", "Plan filter replacements", "Clean regularly"]}
          />
        </div>

        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Replacement filters matter</h3>
          <p className="mt-2 text-sm text-zinc-700">
            The ongoing cost is the replacements. Before you choose any jug system, check how often you’ll replace filters and what they cost.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a className="btn-secondary" href={ZW_BESTWATER_FILTERS} target="_blank" rel="noopener nofollow sponsored">ZeroWater replacement filters</a>
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
        <h2 className="text-2xl font-semibold">Shortlist (buyer favourites)</h2>
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
          <Link className="btn-primary" href="/favourites?tag=Water">Go to Water favourites →</Link>
          <Link className="btn-secondary" href="/blog/water-filter-buying-guide-uk">Read the buying guide</Link>
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-5 text-zinc-700">
          <div>
            <h3 className="font-semibold">Is an under‑sink filter “better” than a jug?</h3>
            <p className="mt-1 text-sm text-zinc-700">
              Not automatically. Under‑sink is mainly about convenience. The best filter is the one you’ll maintain.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What’s the hidden cost?</h3>
            <p className="mt-1 text-sm text-zinc-700">
              Replacements. Before buying, check filter price + how often you’ll replace it.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Should I worry about “certifications”?</h3>
            <p className="mt-1 text-sm text-zinc-700">
              When brands make big claims, credible test reports matter. If claims are vague, treat them as marketing.
            </p>
          </div>
        </div>
      </section>
      <MoneyPageNextLinks slug="best-water-filters-uk" />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}