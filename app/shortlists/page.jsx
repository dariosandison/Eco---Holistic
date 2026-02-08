import Link from 'next/link'
import ShortlistExplorer from '@/components/ShortlistExplorer'

export const metadata = {
  title: 'Shortlists',
  description:
    'Buyer-friendly shortlists for UK homes: clear trade-offs, simple comparisons, and calm recommendations across air, water, fragrance-free living, sleep, nutrition, and movement.',
}

const SECTIONS = [
  {
    title: 'Home essentials',
    desc: 'Air, water, humidity and the highest-impact home swaps.',
    items: [
      {
        label: 'Air purifiers for allergies (UK)',
        href: '/best-air-purifiers-allergies-uk',
        tag: 'Air',
        desc: 'Room sizing first, features second. A shortlist for common UK rooms.',
        bestFor: 'Allergy comfort indoors',
        tradeOff: 'Filter replacements over time',
      },
      {
        label: 'Air purifiers for small flats (UK)',
        href: '/best-air-purifiers-small-flats-uk',
        tag: 'Air',
        desc: 'Smaller-room coverage without overpaying for "smart" features.',
        bestFor: 'Bedrooms + compact spaces',
        tradeOff: 'Noise at higher speeds',
      },
      {
        label: 'Dehumidifiers for damp & mould (UK)',
        href: '/best-dehumidifiers-damp-mould-uk',
        tag: 'Humidity',
        desc: 'When damp is the issue, dehumidifying usually beats a purifier alone.',
        bestFor: 'Damp, condensation, mould risk',
        tradeOff: 'Running cost + emptying tank',
      },
      {
        label: 'Humidifiers for bedrooms (UK)',
        href: '/best-humidifiers-for-bedrooms-uk',
        tag: 'Humidity',
        desc: 'Simple options to reduce dry-air discomfort in colder months.',
        bestFor: 'Dry air + sleep comfort',
        tradeOff: 'Cleaning to avoid gunk',
      },
      {
        label: 'Water filters (UK): jugs vs under-sink vs countertop',
        href: '/best-water-filters-uk',
        tag: 'Water',
        desc: 'Clear trade-offs + replacement costs — built for UK availability.',
        bestFor: 'Choosing a filter type fast',
        tradeOff: 'Replacement filter costs',
      },
      {
        label: 'Shower filters for hard water (UK)',
        href: '/best-shower-filters-uk-hard-water',
        tag: 'Shower',
        desc: 'Hard-water comfort improvements (and what not to expect).',
        bestFor: 'Hair/skin comfort in hard-water areas',
        tradeOff: 'Cartridge changes',
      },
      {
        label: 'Fragrance-free laundry detergents (UK)',
        href: '/best-fragrance-free-laundry-detergents-uk',
        tag: 'Laundry',
        desc: 'If scent bothers you, detergent is usually the highest-impact swap.',
        bestFor: 'Sensitive households',
        tradeOff: 'You may need an extra rinse',
      },
      {
        label: 'Low-tox products for beginners',
        href: '/best-low-tox-products-for-beginners',
        tag: 'Guide',
        desc: 'A starter shortlist: high-impact swaps first (without overhauling everything).',
        bestFor: 'First week improvements',
        tradeOff: 'Don’t try to do it all',
      },
      {
        label: 'Non-toxic cookware starter',
        href: '/best-non-toxic-cookware-starter',
        tag: 'Kitchen',
        desc: 'How to choose a small, sensible cookware baseline without overbuying.',
        bestFor: 'A simple cookware reset',
        tradeOff: 'Weight + cost vs longevity',
      },
    ],
  },
  {
    title: 'Sleep & recovery',
    desc: 'Low-risk, practical options — calm, conservative recommendations.',
    items: [
      {
        label: 'Natural sleep support (starter options)',
        href: '/best-natural-sleep-support',
        tag: 'Sleep',
        desc: 'A shortlist of simple sleep supports — what matters and what to skip.',
        bestFor: 'Getting back to basics',
        tradeOff: 'Consistency beats hacks',
      },
      {
        label: 'Natural sleep remedies (non‑pharma)',
        href: '/best-natural-sleep-remedies-non-pharma',
        tag: 'Sleep',
        desc: 'A conservative shortlist: low-risk options and how to use them.',
        bestFor: 'Occasional sleep disruption',
        tradeOff: 'Effects vary by person',
      },
      {
        label: 'Herbal remedies for stress & anxiety',
        href: '/best-herbal-remedies-for-stress-anxiety',
        tag: 'Supplements',
        desc: 'A beginner-friendly shortlist with sensible expectations.',
        bestFor: 'Calm support routines',
        tradeOff: 'Start low, go slow',
      },
    ],
  },
  {
    title: 'Nutrition staples',
    desc: 'Low-drama, high-utility foods and pantry basics.',
    items: [
      {
        label: 'Extra virgin olive oil (UK)',
        href: '/best-extra-virgin-olive-oil-uk',
        tag: 'Staples',
        desc: 'How to choose a solid EVOO baseline for daily use.',
        bestFor: 'Daily cooking + salads',
        tradeOff: 'Freshness + storage matters',
      },
      {
        label: 'Organic oats (UK)',
        href: '/best-organic-oats-uk',
        tag: 'Staples',
        desc: 'A simple shortlist of oats that actually fit real-life breakfasts.',
        bestFor: 'Easy fibre + breakfast routine',
        tradeOff: 'Texture preferences vary',
      },
      {
        label: 'Chia seeds (UK)',
        href: '/best-chia-seeds-uk',
        tag: 'Superfoods',
        desc: 'A shortlist for simple add-ins: oats, yoghurt, smoothies.',
        bestFor: 'Convenient fibre + omega-3s',
        tradeOff: 'Needs water to avoid "dry" use',
      },
      {
        label: 'Ground flaxseed (UK)',
        href: '/best-ground-flaxseed-uk',
        tag: 'Superfoods',
        desc: 'A practical shortlist (and how to store it to keep it fresh).',
        bestFor: 'Easy fibre top-up',
        tradeOff: 'Shelf life is shorter once ground',
      },
      {
        label: 'Organic matcha (UK)',
        href: '/best-organic-matcha-uk',
        tag: 'Drinks',
        desc: 'A shortlist for drinkable, not-bitter matcha — without overpaying.',
        bestFor: 'Gentler caffeine routine',
        tradeOff: 'Grade vs price trade-off',
      },
      {
        label: 'Fermented foods (sauerkraut & kimchi)',
        href: '/best-fermented-foods-sauerkraut-kimchi',
        tag: 'Gut',
        desc: 'Beginner-friendly options with simple labels.',
        bestFor: 'Gut-friendly add-ons',
        tradeOff: 'Taste is personal',
      },
      {
        label: 'Organic protein powders (UK)',
        href: '/best-organic-protein-powders-uk',
        tag: 'Supplements',
        desc: 'A shortlist of proteins that balance quality, taste, and UK availability.',
        bestFor: 'Convenient protein intake',
        tradeOff: 'Flavourings and additives vary',
      },
    ],
  },
  {
    title: 'Movement (optional gear)',
    desc: 'Tools that support habits — walking, strength, mobility and recovery.',
    items: [
      {
        label: 'Walking shoes for daily steps (UK)',
        href: '/best-walking-shoes-daily-steps-uk',
        tag: 'Walking',
        desc: 'A shortlist focused on comfort and consistency for everyday walking.',
        bestFor: 'Daily steps habit',
        tradeOff: 'Fit matters more than brand',
      },
      {
        label: 'Resistance bands for home workouts',
        href: '/best-resistance-bands-home-workouts',
        tag: 'Bands',
        desc: 'A straightforward shortlist for home training without a full gym setup.',
        bestFor: 'Low-cost strength starter',
        tradeOff: 'You still need progression',
      },
      {
        label: 'Yoga mats (grip & comfort)',
        href: '/best-yoga-mats-grip-comfort',
        tag: 'Mobility',
        desc: 'A shortlist for grip, thickness, and comfort (not "premium" hype).',
        bestFor: 'Home mobility + stretching',
        tradeOff: 'Grip vs easy cleaning',
      },
      {
        label: 'Foam rollers (recovery tools)',
        href: '/best-foam-rollers-recovery-tools',
        tag: 'Recovery',
        desc: 'A shortlist for simple self-massage routines that actually get used.',
        bestFor: 'Post-workout recovery',
        tradeOff: 'Firmness can be intense',
      },
      {
        label: 'Fitness trackers for beginners (UK)',
        href: '/best-fitness-trackers-beginners-uk',
        tag: 'Trackers',
        desc: 'A shortlist for simple tracking (steps, sleep, consistency).',
        bestFor: 'Accountability + habit tracking',
        tradeOff: 'More data isn’t always better',
      },
      {
        label: 'Smart scales (UK)',
        href: '/best-smart-scales-uk',
        tag: 'Scales',
        desc: 'A shortlist for simple weigh-in routines (with sensible expectations).',
        bestFor: 'Trend tracking over time',
        tradeOff: 'Body-comp numbers are estimates',
      },
      {
        label: 'Activewear basics (UK)',
        href: '/best-activewear-basics-uk',
        tag: 'Clothing',
        desc: 'A practical shortlist: comfortable basics that make movement easier.',
        bestFor: 'Comfort + consistency',
        tradeOff: 'Materials vary by use',
      },
    ],
  },
]

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Shortlists</h1>
        <p className="mt-3 text-zinc-700">
          These are our buyer-friendly pages — built to be quick: what matters, what to avoid, and a small shortlist.
          Use <strong>Search</strong> and <strong>Tag</strong> to find what you need.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/topics">Learn first (Topics)</Link>
          <Link className="btn-secondary" href="/shopping-list">Get the free shopping list</Link>
          <Link className="btn-secondary" href="/deals">Browse deals</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 8, 2026</p>
      </header>

      <ShortlistExplorer sections={SECTIONS} />

      <section className="mt-16 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-lg font-semibold text-zinc-900">Suggested order</h2>
        <ol className="mt-3 list-decimal pl-6 text-sm text-zinc-700 space-y-2">
          <li>Pick one problem area (air, water, damp, fragrance, sleep).</li>
          <li>Skim the “What matters / Watch-out” sections on the shortlist page.</li>
          <li>Compare 2–3 options, then stop — simplicity wins.</li>
        </ol>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
