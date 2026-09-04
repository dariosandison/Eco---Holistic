import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Duvets for Hot Sleepers UK — Simba Bedding Guide',
  description: 'A practical UK guide to bedding for hot sleepers: compare duvet flexibility, layering and current tracked Simba partner options without overhauling the whole bed.',
}

const sleepPicks = AWIN_PICKS.sleep || []
const threeInOne = sleepPicks.find((p) => p.clickref === 'ww_sleep_bedding_simba_3in1_duvet')
const duvetCover = sleepPicks.find((p) => p.clickref === 'ww_sleep_bedding_simba_duvet_cover')

export default function Page() {
  const slug = 'best-duvet-for-hot-sleepers-uk-simba-hybrid-duvet'
  const edu = getMoneyPageEdu(slug)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Duvets for hot sleepers UK: Simba bedding guide',
    datePublished: '2026-02-13',
    dateModified: '2026-08-27',
  }
  const options = [
    threeInOne && {
      pick: threeInOne,
      title: threeInOne.product,
      badge: 'Flexible duvet route',
      description: 'A current Simba partner option built around flexible layering, useful to compare when one fixed duvet feels too warm across the year.',
      bullets: ['Best for: sleepers who want more seasonal flexibility', 'Check current construction, care and return information on Simba', 'Use room temperature and lighter sleepwear before assuming the duvet is the only issue'],
      context: 'hot_sleeper_duvet_guide_3in1',
    },
    duvetCover && {
      pick: duvetCover,
      title: duvetCover.product,
      badge: 'Bedding layer',
      description: 'A tracked Simba bedding option to compare if you are changing the duvet setup and want the cover layer to match.',
      bullets: ['Best for: completing a bedding refresh without adding another marketplace search', 'Check fabric, washing guidance and size', 'Keep layers simple so you can tell what changes temperature comfort'],
      context: 'hot_sleeper_duvet_guide_cover',
    },
  ].filter(Boolean)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Temperature-first sleep guide</p>
          <h1 className="mt-2 text-4xl font-bold">Duvets for hot sleepers (UK): change the layer, not everything</h1>
          <p className="mt-3 text-zinc-700">If you regularly wake too warm, start with room temperature, sleepwear and the number of layers. If the duvet is still the weak point, compare a more flexible bedding setup rather than buying several cooling products at once.</p>
        </div>
        <img src="/images/photography/sleep.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep" insightHref="/blog/bedroom-temperature-bedding" insightLabel="Bedroom temperature + bedding" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/sleep-recovery-shortlist-uk#bedding-temperature">Compare sleep bedding</Link>
            <Link className="btn-secondary" href="/best-mattress-for-sleep-uk-simba-hybrid-original">Mattress guide</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: August 27, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="text-lg font-semibold">1. Cool the room first</h2><p className="mt-2 text-sm text-zinc-700">A warmer bedroom can overpower any bedding change. Fix the obvious heat source before shopping.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">2. Remove a layer</h2><p className="mt-2 text-sm text-zinc-700">Test lighter sleepwear, sheets or duvet layers individually so you can identify what actually changes comfort.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">3. Buy for flexibility</h2><p className="mt-2 text-sm text-zinc-700">If your needs change with the season, a flexible bedding system may be more useful than one fixed heavy duvet.</p></div>
      </section>

      {options.length ? (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Current tracked Simba options</h2>
          <p className="mt-2 max-w-3xl text-sm text-zinc-600">Compare alternatives in the maintained sleep shortlist, where temperature, comfort, trials and returns stay visible.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {options.map(({ pick, title, badge, description, bullets, context }) => (
              <ProductPick
                key={pick.clickref}
                title={title}
                badge={badge}
                description={description}
                bullets={bullets}
                trackingContext={context}
                links={[
                  { label: `Check ${pick.advertiser || 'Simba'} price`, merchant: 'awin', href: pick.awin, variant: 'primary' },
                  { label: 'Compare full bedding shortlist', merchant: 'internal', href: '/sleep-recovery-shortlist-uk#bedding-temperature', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Run a simple 7-night temperature test</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
          <li>Keep your sleep and wake times broadly stable.</li>
          <li>Change only one bedding variable at a time.</li>
          <li>Note nights when you wake because you feel too hot, rather than judging from the first few minutes in bed.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild &amp; Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
