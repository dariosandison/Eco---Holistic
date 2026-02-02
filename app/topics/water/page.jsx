import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import TopicAtAGlance from '@/components/TopicAtAGlance'
import TopicFAQ from '@/components/TopicFAQ'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Water Topics — Wild & Well',
  description: 'Water filters for UK homes: under-sink vs jug vs countertop, plus the next steps.',
}

// Awin (ZeroWater) affiliate links
const ZW_TOPIC_STARTER = 'https://www.awin1.com/cread.php?awinmid=30649&awinaffid=2754234&clickref=ww_topics_water_zw_starter&ued=https%3A%2F%2Fwww.zerowater.com%2Fcollections%2Fstarter-kits'
const ZW_TOPIC_FILTERS = 'https://www.awin1.com/cread.php?awinmid=30649&awinaffid=2754234&clickref=ww_topics_water_zw_filters&ued=https%3A%2F%2Fwww.zerowater.com%2Fcollections%2F5-stage-replacement-water-filters'

export default function Page() {
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
          <a className="chip" href="#start">Start</a>
          <a className="chip" href="#quick-picks">Quick picks</a>
          <a className="chip" href="#shortlist">Shortlist</a>
          <a className="chip" href="#faqs">FAQs</a>
        </div>
      </header>

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

      <section className="mt-14" id="quick-picks">
        <h2 className="section-title">ZeroWater quick picks</h2>
        <p className="section-subtitle">A straightforward jug option. Compare replacement filters before committing to any jug system.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="ZeroWater starter kits"
            badge="Best for taste"
            description="Jug starter kits in a range of sizes. Use replacements cost to decide long-term value."
            bullets={[
              'Most useful for taste/odour goals',
              'Compare replacement filters as part of the purchase',
              'Choose a size that fits your fridge/kitchen',
            ]}
            links={[
              { label: 'Check price at ZeroWater', merchant: 'zerowater', href: ZW_TOPIC_STARTER, variant: 'primary' },
              { label: 'Replacement filters', merchant: 'zerowater', href: ZW_TOPIC_FILTERS, variant: 'ghost' },
            ]}
          />

          <ProductPick
            title="ZeroWater replacement filters"
            badge="Ongoing cost"
            description="Replacement filters are the main long-term cost for jug systems."
            bullets={[
              'Compare cost per filter and expected lifespan',
              'Check availability and delivery to the UK',
              'Use a replacement schedule you can maintain',
            ]}
            links={[
              { label: 'View replacement filters', merchant: 'zerowater', href: ZW_TOPIC_FILTERS, variant: 'primary' },
            ]}
          />
        </div>
      </section>

      <section className="mt-14" id="shortlist">
        <h2 className="section-title">Shortlist (search links)</h2>
        <p className="section-subtitle">Broad search links so you can compare price, warranty, and replacement filters.</p>

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
