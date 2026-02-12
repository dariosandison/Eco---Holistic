import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ComparisonTable from '@/components/ComparisonTable'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import MoneyPageDecisionBox from '@/components/MoneyPageDecisionBox'
import MoneyPageQuickCompare from '@/components/MoneyPageQuickCompare'
import MoneyPageUpdateLog from '@/components/MoneyPageUpdateLog'

export const metadata = {
  title: 'Natural sleep support: our shortlist',
  description: 'A calm shortlist of natural sleep support options — what tends to help most, what to skip, and buyer-friendly options.',
}

// Partner links (AWIN)
const LEVITEX_SLEEP_POSTURE_PILLOW = 'https://www.awin1.com/cread.php?awinmid=28333&awinaffid=2754234&clickref=ww_sleep_picks_sleep_posture_pillow_levitex&ued=https%3A%2F%2Flevitex.co.uk%2Fproducts%2Fsleep-posture-pillow'
const RITUALANDFLOW_DREAM_FLOW = 'https://www.awin1.com/cread.php?awinmid=112594&awinaffid=2754234&clickref=ww_sleep_picks_magnesium_hot_chocolate_ritualandflow_dreamflow&ued=https%3A%2F%2Fritualandflow.com%2Fproducts%2Fdream-flow'

const UPDATED = '2026-02-12'
const UPDATED_LABEL = 'February 12, 2026'
const PREV_UPDATED_LABEL = 'February 2, 2026'
const UPDATE_CHANGES = [
  'Refreshed this shortlist for availability and clarity.',
  'Added a 10‑second decision box and quick comparison table for faster choosing.',
  'Updated internal links to supporting guides and topic hubs.',
]
const DECISION_RULES = [
  { if: 'Trouble falling asleep', then: 'Start with basics (light/caffeine/timing) then consider a simple supplement option.' },
  { if: 'You wake in the night', then: 'Look at temperature/light/noise first; supplements help less if the environment is wrong.' },
  { if: 'You want “gentle” support', then: 'Choose one change at a time and assess for 7–14 days before stacking products.' },
]

const PICKS = [
  {
    title: 'Magnesium glycinate (capsules)',
    badge: 'Gentle form',
    desc: 'Often used as part of an evening wind-down routine. Start low and assess tolerance.',
    query: 'magnesium glycinate capsules UK',
    bullets: ['Look for glycinate/bisglycinate (not oxide)', 'Start low', 'Check with a clinician if pregnant/medicated'],
  },
  {
    title: 'Glycine powder',
    badge: 'Simple amino acid',
    desc: 'Some people use glycine as an evening supplement. Choose a reputable brand and keep it simple.',
    query: 'glycine powder supplement',
    bullets: ['Start with small amounts', 'Avoid complex stacks at first'],
  },
  {
    title: 'L‑theanine (capsules)',
    badge: 'Calm focus',
    desc: 'Commonly used for calmer evenings. Choose conservative dosing.',
    query: 'L-theanine capsules',
    bullets: ['Keep dosing conservative', 'Avoid mixing too many supplements at once'],
  },
  {
    title: 'Chamomile or herbal tea (caffeine-free)',
    badge: 'No-pill option',
    desc: 'A low-risk wind-down cue that supports routine and consistency.',
    query: 'chamomile tea caffeine free',
    bullets: ['Use it as a cue: same time nightly', 'Avoid sugar late at night'],
  },
  {
    title: 'Blackout eye mask',
    badge: 'Light control',
    desc: 'Light control often beats supplements. Cheap and effective.',
    query: 'blackout sleep mask contoured',
    bullets: ['Comfort matters', 'Washable is a plus'],
  },
  {
    title: 'White noise machine',
    badge: 'Noise buffer',
    desc: 'If you’re noise-sensitive, this can prevent frequent wake-ups.',
    query: 'white noise machine bedside',
    bullets: ['Timer + continuous modes help', 'Simple interface beats “smart” features'],
  },
]

export default function Page() {
    
  const edu = getMoneyPageEdu('best-natural-sleep-support')

const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Natural sleep support: our shortlist',
    dateModified: UPDATED,
    datePublished: '2026-01-25',
    mainEntity: { '@type': 'ItemList', itemListElement: itemList },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best natural sleep support to try first?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Start with environment and timing: consistent wake time, morning light, a cooler darker room, and an earlier caffeine cut-off. If you add a product, try one simple option at a time (not a big stack).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is magnesium good for sleep?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Many people choose magnesium as a gentle evening supplement. Look for glycinate/bisglycinate rather than oxide, start low, and check with a clinician if you are pregnant or on medication.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long should I test a sleep supplement?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Give one change 5–7 nights while keeping your routine steady. Track bedtime, wake-ups, and next-day grogginess before adding anything else.',
        },
      },
    ],
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <StructuredData data={faqLd} />

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Natural sleep support: our shortlist</h1>
        <p className="mt-3 text-zinc-700">
          The best “sleep support” is usually a few simple environment and timing fixes. Supplements are optional — and should stay simple.
        </p>

        </div>

        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/sleep.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
        <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep topic" insightHref="/blog/caffeine-and-sleep-timing" insightLabel="Caffeine & sleep timing" />
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/sleep">Sleep</Link>
          <Link className="btn-secondary" href="/blog/sleep-naturally-simple-guide">Cornerstone sleep guide</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: {UPDATED_LABEL} · Wild & Well Editorial Team</p>
        </div>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />

      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageQuickCompare picks={PICKS} />
<section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">Start here</h2>
          <ol className="mt-3 list-decimal pl-6 text-sm text-zinc-700 space-y-2">
            <li>Morning light + consistent wake time</li>
            <li>Cool, dark bedroom</li>
            <li>Caffeine cut-off ~8 hours before bed</li>
          </ol>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">If you try a supplement</h2>
          <p className="mt-3 text-sm text-zinc-700">Try one at a time, start low, and keep notes for a week.</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Avoid</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>“Knockout” claims</li>
            <li>Overcomplicated stacks</li>
            <li>Anything that conflicts with medication advice</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Featured products (UK)</h2>
            <p className="mt-1 text-sm text-zinc-600 max-w-2xl">
              Two high‑fit options we feature on Wild &amp; Well. (Links are affiliate links.)
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Neck support option: Levitex Sleep Posture Pillow"
            badge="Pillow"
            description="A posture‑focused pillow option if you wake stiff or sore. Make sure it suits your sleeping position and mattress firmness."
            bullets={['Great for: neck support', 'Check return policy/fit', 'Pair with a cooler, darker room first']}
            links={[{ label: 'Check price', merchant: 'awin', href: LEVITEX_SLEEP_POSTURE_PILLOW, variant: 'primary' }]}
          />
          <ProductPick
            title="Wind‑down drink: Dream Flow (Ritual and Flow)"
            badge="Routine"
            description="A warm evening drink option. Keep routines simple and avoid stacking lots of new supplements at once."
            bullets={['Good for: evening ritual', 'Keep caffeine cut‑off consistent', 'Track sleep for 5–7 nights']}
            links={[{ label: 'Check price', merchant: 'awin', href: RITUALANDFLOW_DREAM_FLOW, variant: 'primary' }]}
          />
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Top options (shortlist)</h2>
        <p className="mt-2 text-sm text-zinc-600">
          If you want the shortest path: choose one environment fix + one optional support.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Simple option: magnesium glycinate"
            badge="Best overall"
            description="A gentle option many people add to an evening wind-down. Start low and assess tolerance."
            href={amazonSearchUrl('magnesium glycinate capsules UK')}
            bullets={['Look for glycinate/bisglycinate (not oxide)', 'Start low', 'Check interactions if medicated']}
          />
          <ProductPick
            title="Non-pill option: blackout eye mask"
            badge="Good value"
            description="Light control often beats supplements. Cheap, easy, and immediate."
            href={amazonSearchUrl('blackout sleep mask contoured')}
            bullets={['Comfort matters', 'Washable is a plus', 'Pair with a cooler room']}
          />
          <ProductPick
            title="Great for noisy homes: white noise machine"
            badge="Great for" 
            description="If you’re noise-sensitive, this can prevent repeated wake-ups and help you stay asleep."
            href={amazonSearchUrl('white noise machine bedside')}
            bullets={['Timer + continuous modes help', 'Simple interface beats “smart” features']}
          />
        </div>

        <ComparisonTable
          caption="At-a-glance comparison (check brand specs + your situation)"
          columns={[
            { key: 'pick', label: 'Option' },
            { key: 'bestFor', label: 'Great for' },
            { key: 'tradeoff', label: 'Main tradeoff' },
            { key: 'startTip', label: 'Start tip' },
          ]}
          rows={[
            {
              pick: 'Magnesium glycinate',
              bestFor: 'Gentle evening support',
              tradeoff: 'Not for everyone; check interactions',
              startTip: 'Start low for 5–7 nights',
            },
            {
              pick: 'L-theanine',
              bestFor: 'Calm evenings / busy mind',
              tradeoff: 'Keep dosing conservative',
              startTip: 'Try alone (no stacks) for a week',
            },
            {
              pick: 'Glycine',
              bestFor: 'Simple amino acid trial',
              tradeoff: 'Quality varies by brand',
              startTip: 'Small amount; track next-day grogginess',
            },
            {
              pick: 'Herbal tea',
              bestFor: 'No-pill routine cue',
              tradeoff: 'Subtle; relies on consistency',
              startTip: 'Same time nightly; avoid sugar late',
            },
            {
              pick: 'Blackout mask',
              bestFor: 'Light control (big lever)',
              tradeoff: 'Fit/comfort varies',
              startTip: 'Pair with cooler temp',
            },
            {
              pick: 'White noise',
              bestFor: 'Noise-sensitive sleepers',
              tradeoff: 'One more device',
              startTip: 'Use continuous mode overnight',
            },
          ]}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (buyer-friendly)</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Curated searches to compare brands and prices. Keep it simple: routine first, products second.
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
          <Link className="btn-primary" href="/topics/sleep">Go to Sleep →</Link>
          <Link className="btn-secondary" href="/blog/magnesium-for-sleep-basics">Magnesium basics</Link>
          <Link className="btn-secondary" href="/blog/sleep-naturally-simple-guide">Sleep guide</Link>
        </div>
      </section>

      <MoneyPageUpdateLog updatedLabel={UPDATED_LABEL} prevUpdatedLabel={PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />
      <MoneyPageNextLinks slug="best-natural-sleep-support" />

      <p className="mt-12 text-xs text-zinc-500">
        This content is for general education and isn’t medical advice. If you’re pregnant, on medication, or managing a health condition, check with a qualified clinician first.
      </p>
    </main>
  )
}