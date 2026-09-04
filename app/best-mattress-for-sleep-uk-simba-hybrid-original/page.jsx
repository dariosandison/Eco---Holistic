import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Mattress for Sleep UK — Simba & Levitex Buying Guide',
  description: 'A sleep-first UK mattress guide: compare support, temperature, trial periods and current tracked Simba and Levitex partner options.',
}

const sleepPicks = AWIN_PICKS.sleep || []
const simbaEssential = sleepPicks.find((p) => p.clickref === 'ww_sleep_mattress_simba_essential')
const levitexHealthcare = sleepPicks.find((p) => p.clickref === 'ww_sleep_mattress_levitex_healthcare')
const simbaTopper = sleepPicks.find((p) => p.clickref === 'ww_sleep_topper_simba_essential')

export default function Page() {
  const slug = 'best-mattress-for-sleep-uk-simba-hybrid-original'
  const edu = getMoneyPageEdu(slug)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mattress for sleep UK: Simba and Levitex buying guide',
    datePublished: '2026-02-11',
    dateModified: '2026-08-27',
  }

  const options = [
    simbaEssential && {
      pick: simbaEssential,
      title: simbaEssential.product,
      badge: 'Mattress option',
      description: 'A current Simba partner option to compare when the sleep surface itself needs replacing.',
      bullets: ['Best for: replacing a worn or uncomfortable sleep surface', 'Check the current trial and returns terms before ordering', 'Compare temperature feel and support rather than marketing labels'],
      context: 'mattress_sleep_guide_simba_essential',
    },
    levitexHealthcare && {
      pick: levitexHealthcare,
      title: levitexHealthcare.product,
      badge: 'Support alternative',
      description: 'A Levitex partner mattress route to compare when support and pressure comfort are the main priorities.',
      bullets: ['Best for: comparing a support-focused mattress route', 'Check dimensions and suitability for your bed base', 'Use current trial, warranty and return information to guide the decision'],
      context: 'mattress_sleep_guide_levitex',
    },
    simbaTopper && {
      pick: simbaTopper,
      title: simbaTopper.product,
      badge: 'Lower-cost route',
      description: 'A topper can be worth comparing before replacing a structurally sound mattress solely for surface comfort.',
      bullets: ['Best for: changing surface feel without buying a whole mattress', 'Avoid if: the existing mattress is sagging or structurally worn', 'Check depth, heat feel and return terms'],
      context: 'mattress_sleep_guide_simba_topper',
    },
  ].filter(Boolean)

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Sleep buying guide</p>
          <h1 className="mt-2 text-4xl font-bold">Mattress for sleep (UK): replace, support or top?</h1>
          <p className="mt-3 text-zinc-700">A mattress can help comfort, but it cannot fix poor sleep timing, light, noise or an unsuitable room temperature. If the basics are reasonable, decide whether you actually need a new mattress, a different support route or simply a change in surface feel.</p>
        </div>
        <img src="/images/photography/sleep.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep topic" insightHref="/blog/bedroom-temperature-bedding" insightLabel="Bedroom temperature + bedding" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/sleep-recovery-shortlist-uk#mattress-support">Full sleep shortlist</Link>
            <Link className="btn-secondary" href="/best-duvet-for-hot-sleepers-uk-simba-hybrid-duvet">Hot sleepers bedding guide</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: August 27, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="text-lg font-semibold">Replace the mattress</h2><p className="mt-2 text-sm text-zinc-700">Most sensible when the existing mattress is worn, sagging or consistently uncomfortable rather than simply imperfect.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Compare support</h2><p className="mt-2 text-sm text-zinc-700">If pressure and posture comfort are the main problem, compare the support approach and trial terms before focusing on brand.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Try a topper first</h2><p className="mt-2 text-sm text-zinc-700">If the mattress is sound but the surface feels too firm or uncomfortable, a topper can be a lower-cost experiment.</p></div>
      </section>

      {options.length ? (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Current partner options to compare</h2>
          <p className="mt-2 max-w-3xl text-sm text-zinc-600">Use the maintained sleep shortlist to compare support, bedding temperature, trials, returns and current partner options.</p>
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
                  { label: `Check ${pick.advertiser || pick.badge} price`, merchant: 'awin', href: pick.awin, variant: 'primary' },
                  { label: 'Compare full sleep shortlist', merchant: 'internal', href: '/sleep-recovery-shortlist-uk#mattress-support', variant: 'ghost' },
                ]}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Use the trial period like a test</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
          <li>Check the merchant’s current trial, return and collection terms before ordering.</li>
          <li>Keep bedroom temperature, pillow and routine reasonably stable while judging the new surface.</li>
          <li>Give comfort a fair trial, but do not ignore persistent pain or clear worsening.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild &amp; Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
