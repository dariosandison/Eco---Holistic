import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { PHASE22_UPDATED, PHASE22_UPDATED_LABEL, PHASE22_PREV_UPDATED_LABEL, PHASE22_DEFAULT_UPDATE_CHANGES } from '@/lib/phase22'
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
  title: 'Water Filters UK — Jug vs Under-Sink vs Gravity',
  description: 'Choose the right water-filter format for a UK home, compare running costs and testing claims, then compare a few current tracked partner options.',
}

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'You want the simplest no-installation start', then: 'Compare jugs and countertop dispensers.', note: 'Check replacement-filter price before choosing the unit.' },
  { if: 'You want filtered water available from the kitchen every day', then: 'Compare under-sink systems if installation suits your home.', note: 'Check space, installation requirements and cartridge availability.' },
  { if: 'You want useful capacity without plumbing', then: 'Compare gravity systems.', note: 'Allow for countertop space, cleaning and replacement elements.' },
  { if: 'You mainly need filtration while travelling or commuting', then: 'A filter bottle may be the lowest-friction route.', note: 'Check the replacement-cartridge schedule.' },
]

export default function Page() {
  const slug = 'best-water-filters-uk'
  const edu = getMoneyPageEdu(slug)
  const { bestFor, routes, faqs } = getTop10Meta(slug)
  const water = AWIN_PICKS.water || []
  const featured = [
    water.find((p) => p.group === 'Jugs & dispensers'),
    water.find((p) => p.group === 'Under-sink / RO' && /system|filtration/i.test(p.product)),
    water.find((p) => p.group === 'Gravity & shower filtration' && /gravity/i.test(p.product)),
  ].filter(Boolean)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Water Filters UK — Jug vs Under-Sink vs Gravity', dateModified: PHASE22_UPDATED, datePublished: '2026-01-25' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Buying guide</p>
          <h1 className="mt-2 text-4xl font-bold">Water filters (UK): choose the format first</h1>
          <p className="mt-3 text-zinc-700">The best filter is not simply the one with the biggest claims. Start with your use case, then compare credible testing information, replacement cost and whether you will maintain it.</p>
          <BestForBadges items={bestFor} />
        </div>
        <img src="/images/photography/water.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/water" topicLabel="Water topic" insightHref="/blog/water-filter-buying-guide-uk" insightLabel="Water filter buying guide" />
          <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="#partner-options">See current partner options</Link><Link className="btn-secondary" href="/water-filtration-shortlist-uk">Full water shortlist</Link><Link className="btn-secondary" href="/blog/filter-replacement-costs-uk">Replacement costs</Link><Link className="btn-secondary" href="/best-shower-filters-uk-hard-water">Shower filtration</Link></div>
          <p className="mt-4 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
        </div>
      </header>
      <MoneyPageEducationBlock edu={edu} />
      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />

      <section className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/water-filtration-shortlist-uk#jugs-dispensers" className="card hover:shadow-sm transition-shadow"><h2 className="text-lg font-semibold">Jug / countertop</h2><p className="mt-2 text-sm text-zinc-700">Simple, renter-friendly and no installation. Compare ongoing filter cost as carefully as purchase price.</p><p className="mt-3 text-sm font-semibold">Compare jugs →</p></Link>
        <Link href="/water-filtration-shortlist-uk#under-sink-ro" className="card hover:shadow-sm transition-shadow"><h2 className="text-lg font-semibold">Under-sink</h2><p className="mt-2 text-sm text-zinc-700">Useful for frequent daily use where installation and ongoing cartridge cost make sense.</p><p className="mt-3 text-sm font-semibold">Compare under-sink →</p></Link>
        <Link href="/water-filtration-shortlist-uk#gravity-shower-filtration" className="card hover:shadow-sm transition-shadow"><h2 className="text-lg font-semibold">Gravity</h2><p className="mt-2 text-sm text-zinc-700">Higher capacity without plumbing, with a trade-off in countertop space and cleaning.</p><p className="mt-3 text-sm font-semibold">Compare gravity →</p></Link>
        <Link href="/water-filtration-shortlist-uk#filter-bottles-replacements" className="card hover:shadow-sm transition-shadow"><h2 className="text-lg font-semibold">Portable bottle</h2><p className="mt-2 text-sm text-zinc-700">A lower-friction route for travel, commuting and days away from home.</p><p className="mt-3 text-sm font-semibold">Compare bottles →</p></Link>
      </section>

      {featured.length ? (
        <section className="mt-14 scroll-mt-28" id="partner-options">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Current partner options</p>
            <h2 className="mt-2 text-2xl font-semibold">One example from each main home-filtration route</h2>
            <p className="mt-2 text-zinc-700">Use these as a starting point, not as a universal ranking. The right route depends on installation, capacity, the substances you want to address and the ongoing replacement cost.</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {featured.map((p) => (
              <ProductPick
                key={p.clickref}
                title={p.product}
                badge={p.badge}
                description={p.description}
                bullets={p.bullets}
                trackingContext="water_filter_guide_featured"
                links={[
                  { label: `Check ${p.advertiser} price`, merchant: 'awin', href: p.awin, variant: 'primary' },
                  { label: 'Compare this category', merchant: 'internal', href: `/water-filtration-shortlist-uk#${p.group === 'Jugs & dispensers' ? 'jugs-dispensers' : p.group === 'Under-sink / RO' ? 'under-sink-ro' : 'gravity-shower-filtration'}`, variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-14"><h2 className="text-2xl font-semibold">Four checks before buying</h2><div className="mt-5 grid gap-4 md:grid-cols-2"><div className="card"><h3 className="font-semibold">1. Define the job</h3><p className="mt-2 text-sm text-zinc-700">Taste, portability, convenience and concern about a particular contaminant are different buying problems.</p></div><div className="card"><h3 className="font-semibold">2. Check the evidence</h3><p className="mt-2 text-sm text-zinc-700">Prefer specific, checkable testing or certification information over broad percentage-removal marketing.</p></div><div className="card"><h3 className="font-semibold">3. Price the replacements</h3><p className="mt-2 text-sm text-zinc-700">Filter life, replacement price and UK availability can matter more over time than the original unit price.</p></div><div className="card"><h3 className="font-semibold">4. Be realistic about maintenance</h3><p className="mt-2 text-sm text-zinc-700">Cleaning and replacing cartridges on schedule are part of owning the system.</p></div></div></section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><div className="max-w-3xl"><h2 className="text-2xl font-semibold">Need the full comparison?</h2><p className="mt-2 text-zinc-700">The main filtration shortlist holds the maintained partner set across bottles, jugs, under-sink systems, gravity filtration and replacement products.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/water-filtration-shortlist-uk">Open water filtration shortlist</Link><Link className="btn-secondary" href="/topics/water">Learn about filtration first</Link></div></div></section>

      <InlineSignup placement="water_filters_uk" title="Free: Low-Tox Shopping List" description="A beginner-friendly shortcut with simple swaps for air, water, cleaning and sleep — in plain English." cta="Send me the list" />
      <FAQSection faqs={faqs} />
      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
      <MoneyPageNextLinks slug={slug} includeSignup={false} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
