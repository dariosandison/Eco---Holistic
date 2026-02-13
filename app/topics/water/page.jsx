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

// Featured water products (AWIN)
const ZEROWATER_JUG_1_7L = 'https://www.awin1.com/cread.php?awinmid=30649&awinaffid=2754234&clickref=ww_water_picks_filter_jug_zerowater_1_7l&ued=https%3A%2F%2Fshop.culligan.co.uk%2Fproducts%2F1-7-litre-water-filter-jug'
const WATERDROP_UNDERSINK_DIRECT_CONNECT = 'https://www.awin1.com/cread.php?awinmid=117649&awinaffid=2754234&clickref=ww_water_picks_under_sink_waterdrop_ua&ued=https%3A%2F%2Fwww.waterdropfilter.co.uk%2Fcollections%2Fbest-selling%2Fproducts%2Funder-sink-water-filter-direct-connect-filtration-system'
const WATERDROP_RO_G3P600 = 'https://www.awin1.com/cread.php?awinmid=117649&awinaffid=2754234&clickref=ww_water_ro_waterdrop_g3p600&ued=https%3A%2F%2Fwww.waterdropfilter.co.uk%2Fproducts%2Fwaterdrop-reverse-osmosis-water-filtration-system'
const DOULTON_BB_GRAVITY_1L = 'https://www.awin1.com/cread.php?awinmid=69790&awinaffid=2754234&clickref=ww_water_picks_gravity_filter_doulton_bb_1l&ued=https%3A%2F%2Fdoulton.com%2Fproducts%2Fbritish-berkefeld-1-litre-stainless-steel-gravity-system'
const DOULTON_COUNTERTOP_BIOTECT_ULTRA = 'https://www.awin1.com/cread.php?awinmid=69790&awinaffid=2754234&clickref=ww_water_countertop_doulton_biotect_ultra&ued=https%3A%2F%2Fdoulton.com%2Fproducts%2Fd-cs-d-cp-biotect-ultra'
const WATERTOGO_ACTIVE_75CL = 'https://www.awin1.com/cread.php?awinmid=86997&awinaffid=2754234&clickref=ww_water_picks_filter_bottle_watertogo_active_75cl&ued=https%3A%2F%2Fwatertogo.eu%2Fproduct%2F75cl-active-bottles%2F'


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

        {/* Topic image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/water.jpg"
          alt=""
          className="mt-6 w-full rounded-3xl border border-zinc-200 shadow-sm"
          loading="lazy"
          decoding="async"
        />

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

        <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026</p>
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

        <div className="mt-10">
          <h3 className="text-lg font-semibold">Featured water products (UK)</h3>
          <p className="mt-2 text-sm text-zinc-700">Specific products we feature on Wild &amp; Well because they cover the most common use-cases (jug, under-sink, gravity, on-the-go).</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <ProductPick
              title="Jug option: Culligan/ZeroWater 1.7L filter jug"
              badge="Jug"
              description="Low-friction starter option for taste/odour. Compare filter costs before committing long-term."
              bullets={["Best for: simple start", "Check replacement filter cost", "Follow the change schedule"]}
              links={[{ label: 'Check price', merchant: 'awin', href: ZEROWATER_JUG_1_7L, variant: 'primary' }]}
            />
            <ProductPick
              title="Under-sink option: Waterdrop direct-connect system"
              badge="Under-sink"
              description="Convenient if you want filtered water from a tap and can install a system."
              bullets={["Best for: convenience", "Check install requirements", "Compare replacement filters"]}
              links={[{ label: 'Check price', merchant: 'awin', href: WATERDROP_UNDERSINK_DIRECT_CONNECT, variant: 'primary' }]}
            />

            <ProductPick
              title="Under-sink RO option: Waterdrop 600 GPD (G3P600)"
              badge="Reverse osmosis"
              description="A fast-flow reverse osmosis system for households who want high-volume filtered water from a dedicated tap."
              bullets={["Best for: high-volume filtered water", "Check install requirements + filter replacements", "Plan space under-sink"]}
              links={[
                { label: 'Check price', merchant: 'awin', href: WATERDROP_RO_G3P600, variant: 'primary' },
                { label: 'Read the guide', merchant: 'internal', href: '/best-reverse-osmosis-water-filter-uk-waterdrop-g3p600', variant: 'ghost' },
              ]}
            />
            <ProductPick
              title="Countertop option: Doulton system (Biotect Ultra)"
              badge="Countertop"
              description="A renter-friendly countertop route (no plumbing changes) if you want filtered water without under-sink installation."
              bullets={["Best for: renters + no-plumbing kitchens", "Check replacement cartridges", "Plan counter space"]}
              links={[
                { label: 'Check price', merchant: 'awin', href: DOULTON_COUNTERTOP_BIOTECT_ULTRA, variant: 'primary' },
                { label: 'Read the guide', merchant: 'internal', href: '/best-countertop-water-filter-uk-doulton-biotect-ultra', variant: 'ghost' },
              ]}
            />

            <ProductPick
              title="Gravity option: British Berkefeld 1L stainless system"
              badge="Gravity"
              description="Useful if you want larger capacity without plumbing (often renter-friendly)."
              bullets={["Best for: no plumbing", "Slower filtration", "Plan countertop space"]}
              links={[{ label: 'Check price', merchant: 'awin', href: DOULTON_BB_GRAVITY_1L, variant: 'primary' }]}
            />
            <ProductPick
              title="On-the-go option: Water-to-Go Active bottle (75cl)"
              badge="Bottle"
              description="If you want a portable option for commuting, travel, or gym days."
              bullets={["Best for: travel", "Check filter replacement schedule", "Keep it clean"]}
              links={[{ label: 'Check price', merchant: 'awin', href: WATERTOGO_ACTIVE_75CL, variant: 'primary' }]}
            />
          </div>
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
