import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Natural Sleep Support UK — Start With the Basics',
  description: 'A calm UK sleep-support guide: fix light, caffeine, temperature and noise first, then compare a small number of current partner options without stacking products.',
}

const sleepPicks = AWIN_PICKS.sleep || []
const levitexPillow = sleepPicks.find((p) => /levitex/i.test(p.advertiser || '') && /pillow/i.test(p.product || ''))
const dreamFlow = sleepPicks.find((p) => /ritual/i.test(p.advertiser || '') || /dream flow/i.test(p.product || ''))

export default function Page() {
  const slug = 'best-natural-sleep-support'
  const edu = getMoneyPageEdu(slug)
  const partnerOptions = [levitexPillow, dreamFlow].filter(Boolean)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Natural sleep support UK: start with the basics',
    datePublished: '2026-01-25',
    dateModified: '2026-08-27',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Sleep support without the stack</p>
          <h1 className="mt-2 text-4xl font-bold">Natural sleep support: fix the obvious levers first</h1>
          <p className="mt-3 text-zinc-700">Most people do not need a basket of sleep products. Start with timing, morning light, caffeine, bedroom temperature, darkness and noise. If one physical or routine support still solves a clear problem, compare it deliberately.</p>
        </div>
        <img src="/images/photography/sleep.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep topic" insightHref="/blog/caffeine-and-sleep-timing" insightLabel="Caffeine & sleep timing" />
          <div className="mt-4 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/topics/sleep">Start with sleep basics</Link>
            <Link className="btn-secondary" href="/sleep-recovery-shortlist-uk">Physical sleep upgrades</Link>
            <Link className="btn-secondary" href="/blog/sleep-naturally-simple-guide">Simple sleep guide</Link>
          </div>
          <p className="mt-4 text-xs text-zinc-500">Last updated: August 27, 2026 · Wild & Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="text-lg font-semibold">Trouble falling asleep</h2><p className="mt-2 text-sm text-zinc-700">Check caffeine timing, late bright light and whether your wake time moves around. These are better first targets than another supplement.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Waking in the night</h2><p className="mt-2 text-sm text-zinc-700">Check room temperature, noise, light and bedding comfort before assuming you need a sleep aid.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Stiff or uncomfortable</h2><p className="mt-2 text-sm text-zinc-700">A pillow, mattress or bedding change may be relevant when the problem is clearly physical rather than difficulty becoming sleepy.</p></div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">A useful order of operations</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-zinc-700">
          <li>Keep a broadly consistent wake time and get useful morning light.</li>
          <li>Move caffeine earlier and reduce bright light close to bedtime.</li>
          <li>Make the bedroom comfortably cool, dark and quiet.</li>
          <li>Only then solve a specific remaining problem with one product or routine change.</li>
        </ol>
      </section>

      {partnerOptions.length ? (
        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Two optional partner routes</h2>
          <p className="mt-2 max-w-3xl text-sm text-zinc-600">These are not presented as treatments for insomnia. They are simply current partner options that may fit a clearly identified comfort or wind-down need.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {levitexPillow ? (
              <ProductPick
                title={levitexPillow.product}
                badge="Physical comfort"
                description="A posture-focused pillow route to compare if neck or pillow comfort is the identifiable sleep problem."
                bullets={['Best for: comparing pillow support when you wake stiff or uncomfortable', 'Check sleeping position, dimensions and current return terms', 'Do not use a pillow purchase to avoid fixing light, caffeine or room temperature']}
                trackingContext="natural_sleep_support_levitex_pillow"
                links={[
                  { label: 'Check Levitex pillow', merchant: 'awin', href: levitexPillow.awin, variant: 'primary' },
                  { label: 'Compare sleep support products', merchant: 'internal', href: '/sleep-recovery-shortlist-uk#pillows-bedding', variant: 'ghost' },
                ]}
              />
            ) : null}
            {dreamFlow ? (
              <ProductPick
                title={dreamFlow.product}
                badge="Wind-down routine"
                description="A partner wind-down option for people who specifically want a repeatable evening ritual. Check the current ingredients and suitability before use."
                bullets={['Best for: a simple repeatable evening routine rather than a large supplement stack', 'Check the current ingredient list and serving guidance', 'If you take medication, are pregnant or have a health condition, check suitability with a qualified clinician']}
                trackingContext="natural_sleep_support_dreamflow"
                links={[
                  { label: 'Check Dream Flow', merchant: 'awin', href: dreamFlow.awin, variant: 'primary' },
                  { label: 'Read sleep basics first', merchant: 'internal', href: '/topics/sleep', variant: 'ghost' },
                ]}
              />
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">What happened to the long shopping list?</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-700">Start by naming the sleep problem—timing, light, noise, temperature or comfort—then use the maintained sleep shortlist only if a physical product has a clear role.</p>
        <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="/sleep-recovery-shortlist-uk">Open sleep & recovery shortlist</Link><Link className="btn-secondary" href="/blog/magnesium-for-sleep-basics">Read magnesium basics</Link></div>
      </section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">This content is for general education and is not medical advice. Persistent insomnia, breathing pauses during sleep or unexplained daytime sleepiness warrant appropriate clinical assessment. Partner links may earn Wild & Well a commission at no extra cost to you.</p>
    </main>
  )
}
