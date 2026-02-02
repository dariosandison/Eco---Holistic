import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicEducationDeepDive from '@/components/TopicEducationDeepDive'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'
import { getTopicEdu } from '@/lib/topicEdu'

export const metadata = {
  title: 'Water Topics — Wild & Well',
  description: 'Water filters for UK homes: under-sink vs jug vs countertop, plus the next steps.',
}

// Awin (ZeroWater) affiliate links
const ZW_TOPIC_STARTER = 'https://www.awin1.com/cread.php?awinmid=30649&awinaffid=2754234&clickref=ww_topics_water_zw_starter&ued=https%3A%2F%2Fwww.zerowater.com%2Fcollections%2Fstarter-kits'
const ZW_TOPIC_FILTERS = 'https://www.awin1.com/cread.php?awinmid=30649&awinaffid=2754234&clickref=ww_topics_water_zw_filters&ued=https%3A%2F%2Fwww.zerowater.com%2Fcollections%2F5-stage-replacement-water-filters'

export default function Page() {
  const edu = getTopicEdu('water')

  const faqs = [
    {
      q: 'Do I need a water filter in the UK?',
      a: [
        'It depends on your goal. Many people filter for taste/odour, limescale in kettles, or personal preference.',
        'If you are concerned about a specific contaminant, check your local water company’s published water quality report and choose a system with relevant, verifiable testing or certification claims.',
      ],
    },
    {
      q: 'Jug vs under-sink vs gravity: which is best?',
      a: [
        'A jug is the simplest entry point and works well for many kitchens.',
        'Under-sink systems are convenient if you want filtered water from a tap and can install it.',
        'Gravity systems are useful when you want larger capacity without plumbing (often popular with renters).',
      ],
    },
    {
      q: 'What usually costs more over time: the unit or the filters?',
      a: 'In many systems, replacement filters are the main long-term cost. Compare replacement schedules and prices before buying the unit.',
    },
    {
      q: 'What should I look for in certification/testing claims?',
      a: 'Prefer specific, checkable claims (what was tested, to what standard, and by whom) over vague marketing phrases like “removes 99%”.',
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Water (Filters + Hydration)</h1>
        <p className="mt-3 text-zinc-700">
          Start by choosing the right format for your kitchen. After that, the deciding factor is usually replacement filters: cost, availability, and how often they need changing.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/water-filter-buying-guide-uk">Read the buying guide</Link>
          <Link className="btn-secondary" href="/best-water-filters-uk">Water filters (UK): shortlist</Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <a className="chip" href="#understand">Understand</a>
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#options">Options</a>
          <a className="chip" href="#faqs">FAQs</a>
        </div>

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 2, 2026</p>
      </header>

      <TopicEducationDeepDive edu={edu} />

      <div id="start" />
      <TopicAtAGlance
        items={[
          {
            title: 'Start here',
            bullets: [
              'Choose a type: jug, under-sink, or gravity/countertop.',
              'Compare replacement filters (schedule + cost).',
              'Prefer specific, checkable testing/certification claims.',
            ],
          },
          {
            title: 'Which type suits you?',
            bullets: [
              'Jug: easiest entry point for most kitchens.',
              'Under-sink: filtered water from a tap (requires install).',
              'Gravity: larger capacity without plumbing.',
            ],
          },
          {
            title: 'Common mistakes',
            bullets: [
              'Buying a system with expensive replacements you won’t keep up with.',
              'Choosing based on marketing claims instead of verified details.',
              'Over-buying capacity when a jug would do.',
            ],
          },
        ]}
      />

      <section className="mt-14" id="options">
        <h2 className="section-title">Options (compare links)</h2>
        <p className="section-subtitle">After the basics, these broad links help you compare warranty, replacements, and real-world usability.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Water filter jug (everyday starter)"
            badge="Easy"
            description="Simple, low‑friction option for many households."
            href={amazonSearchUrl('BRITA Style water filter jug')}
            bullets={['Pick a size that fits your fridge', 'Budget for filters', 'Replace on schedule']}
          />
          <ProductPick
            title="Under-sink filter system"
            badge="Convenience"
            description="Filtered water from a tap; check installation requirements."
            href={amazonSearchUrl('Doulton under sink water filter UK')}
            bullets={['Check installation needs', 'Look at yearly filter cost', 'Choose a reputable brand']}
          />
          <ProductPick
            title="Countertop gravity filter"
            badge="No plumbing"
            description="Large capacity without installing anything."
            href={amazonSearchUrl('British Berkefeld gravity water filter')}
            bullets={['Useful for renters', 'Check filter certification claims']}
          />
          <ProductPick
            title="Reusable bottle (for out and about)"
            badge="Habit"
            description="Choose a size you’ll carry and a lid you’ll use."
            href={amazonSearchUrl('stainless steel water bottle wide mouth')}
            bullets={['Dishwasher safe is helpful', 'Wide mouth is easier to clean']}
          />
        </div>

        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">ZeroWater (optional)</h3>
          <p className="mt-2 text-sm text-zinc-700">
            If taste is your main goal, a jug system can be a simple start. Compare replacement filters before you commit long-term.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a className="btn-secondary" href={ZW_TOPIC_STARTER} target="_blank" rel="noopener nofollow sponsored">ZeroWater starter kits</a>
            <a className="btn-secondary" href={ZW_TOPIC_FILTERS} target="_blank" rel="noopener nofollow sponsored">Replacement filters</a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-water-filters-uk">See comparisons →</Link>
          <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
        </div>
      </section>

      <TopicFAQ faqs={faqs} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
