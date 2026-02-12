import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import { PHASE22_UPDATED, PHASE22_UPDATED_LABEL, PHASE22_PREV_UPDATED_LABEL, PHASE22_DEFAULT_UPDATE_CHANGES } from '@/lib/phase22'
import ComparisonTable from '@/components/ComparisonTable'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import { getTop10Meta } from '@/data/top10Meta'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import MoneyPageDecisionBox from '@/components/MoneyPageDecisionBox'
import MoneyPageQuickCompare from '@/components/MoneyPageQuickCompare'
import MoneyPageUpdateLog from '@/components/MoneyPageUpdateLog'
import BestForBadges from '@/components/BestForBadges'
import FAQSection from '@/components/FAQSection'
import MoneyPageTrustBlock from '@/components/MoneyPageTrustBlock'
import MoneyPageRoutes from '@/components/MoneyPageRoutes'

const MEACO_ARETE_ONE_25L = 'https://www.awin1.com/cread.php?awinmid=31711&awinaffid=2754234&clickref=ww_home_air_meaco_arete_one_25l&ued=https%3A%2F%2Fwww.meaco.com%2Fproducts%2Fmeacodry-arete-one-25l-dehumidifier-and-air-purifier'

export const metadata = {
  title: 'Best dehumidifiers for damp & mould (UK): what to buy first',
  description:
    'A practical shortlist for UK homes: dehumidifiers for damp, condensation and laundry drying — with simple rules on size, type and running costs.',
}

const UPDATE_CHANGES = PHASE22_DEFAULT_UPDATE_CHANGES
const DECISION_RULES = [
  { if: 'Cold rooms / laundry drying is the problem', then: 'A desiccant dehumidifier is often the easiest win in UK winters.', note: 'Trade‑off: can cost more to run than compressor units.' },
  { if: 'Warmer living areas with steady damp', then: 'A compressor unit often wins on running cost for everyday use.', note: 'Less effective in colder rooms.' },
  { if: 'Not sure if it’s damp or just a feeling', then: 'Measure humidity first with a hygrometer (aim roughly 40–60% RH).' },
]

const PICKS = [
  {
    title: 'Desiccant dehumidifier (cold rooms + laundry drying)',
    badge: 'Winter winner',
    desc: 'Often the best fit for unheated UK rooms and clothes drying. Simple, consistent moisture removal when it’s cold.',
    query: 'desiccant dehumidifier laundry drying UK quiet',
    bullets: [
      'Great for: cold bedrooms, garages, older homes',
      'Look for: laundry mode + decent tank size',
      'Trade-off: can cost more to run than compressor units',
    ],
  },
  {
    title: 'Compressor dehumidifier (everyday damp control)',
    badge: 'Lower running cost',
    desc: 'Great for living rooms and warmer spaces. Often more energy-efficient when the room is reasonably warm.',
    query: 'compressor dehumidifier 12L 20L UK energy efficient',
    bullets: [
      'Great for: ongoing damp + condensation',
      'Look for: humidistat + auto shut-off',
      'Trade-off: less effective in cold rooms',
    ],
  },
  {
    title: 'Quiet mid-size dehumidifier (bedroom-friendly)',
    badge: 'Sleepable',
    desc: 'If noise stops you using it, it’s the wrong unit. Prioritise a quieter mode and sensible capacity.',
    query: 'quiet dehumidifier bedroom UK low noise',
    bullets: [
      'Great for: bedrooms + small flats',
      'Look for: night mode + realistic dB info',
      'Trade-off: smaller units can take longer',
    ],
  },
  {
    title: 'Humidity monitor (hygrometer) — measure first',
    badge: 'Non‑negotiable',
    desc: 'A dehumidifier helps most when you measure the problem first. Don’t guess.',
    query: 'digital hygrometer humidity monitor UK',
    bullets: [
      'Aim for ~40–60% most of the time',
      'Use it to confirm if damp is a pattern',
      'Check bedrooms and laundry-drying rooms',
    ],
  },
]

function QuickSummary() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">At a glance</h2>
      <p className="mt-2 text-zinc-700">
        Start by measuring humidity with a <strong>hygrometer</strong>. If your home regularly sits above ~60% or you have
        persistent condensation, a dehumidifier is often the most direct fix. For cold UK rooms and laundry drying, a
        <strong> desiccant</strong> unit is usually the easiest win. For warmer rooms and steady everyday damp control, a
        <strong> compressor</strong> unit often has a lower running cost.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link className="btn-secondary" href="/topics/air-quality">Air quality topic</Link>
        <Link className="btn-secondary" href="/blog/winter-humidity-guide">Winter humidity guide</Link>
        <Link className="btn-secondary" href="/blog/damp-and-mould-uk-renters-playbook">Renters damp &amp; mould playbook</Link>
        <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
      </div>
      <p className="mt-4 text-xs text-zinc-500">Last updated: {PHASE22_UPDATED_LABEL} · Wild & Well Editorial Team</p>
    </div>
  )
}

export default function Page() {
  const slug = 'best-dehumidifiers-damp-mould-uk'
  const edu = getMoneyPageEdu(slug)

  const { bestFor, routes, faqs } = getTop10Meta(slug)

  const itemList = PICKS.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    url: amazonSearchUrl(p.query),
  }))

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best dehumidifiers for damp & mould (UK): what to buy first',
    dateModified: PHASE22_UPDATED,
    datePublished: '2026-02-01',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: itemList,
    },
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">Best dehumidifiers for damp &amp; mould (UK)</h1>
        <p className="mt-3 text-zinc-700">
          A shortlist with simple decision rules: what to buy first for damp rooms, condensation, and laundry drying — without overcomplicating it.

        </p>

        <BestForBadges items={bestFor} />

        </div>

        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/air-quality.png"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
        <EducationFirstCallout
          topicHref="/topics/air-quality"
          topicLabel="Air quality topic"
          insightHref="/blog/winter-humidity-guide"
          insightLabel="Winter humidity guide"
        />
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <MoneyPageDecisionBox rules={DECISION_RULES} />
      <MoneyPageQuickCompare picks={PICKS} />
      <MoneyPageTrustBlock />
      <MoneyPageRoutes routes={routes} />

      <section className="mt-10">
        <QuickSummary />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Fix these first (before you buy)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          A dehumidifier works best when it’s solving a real moisture pattern — not a one-off problem.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card p-5">
            <h3 className="text-lg font-semibold">Ventilation</h3>
            <p className="mt-2 text-sm text-zinc-700">Use extractor fans, open trickle vents, and air rooms briefly but regularly.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: drying clothes indoors spikes humidity fast.</p>
          </div>
          <div className="card p-5">
            <h3 className="text-lg font-semibold">Measure humidity</h3>
            <p className="mt-2 text-sm text-zinc-700">A £10 hygrometer tells you whether you’re dealing with a pattern or a guess.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: bedrooms can behave differently than the rest of the home.</p>
          </div>
          <div className="card p-5">
            <h3 className="text-lg font-semibold">Sources of moisture</h3>
            <p className="mt-2 text-sm text-zinc-700">Laundry drying, cooking, showers, and leaks are the usual culprits.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: if there’s a leak, fix that first.</p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">How to choose (quick rules)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="card p-5">
            <h3 className="text-lg font-semibold">Choose the right type</h3>
            <p className="mt-2 text-sm text-zinc-700">Cold room or laundry drying? Start with <strong>desiccant</strong>. Warmer rooms? <strong>compressor</strong> often wins on efficiency.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: tiny “mini” units rarely make a dent in real damp.</p>
          </div>
          <div className="card p-5">
            <h3 className="text-lg font-semibold">Buy enough capacity</h3>
            <p className="mt-2 text-sm text-zinc-700">If you’re fighting daily condensation, an undersized unit runs forever and feels useless.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: check tank size if you don’t want to empty constantly.</p>
          </div>
          <div className="card p-5">
            <h3 className="text-lg font-semibold">Noise + running cost</h3>
            <p className="mt-2 text-sm text-zinc-700">A quieter mode matters in bedrooms. Running cost depends on type and how long it runs.</p>
            <p className="mt-3 text-xs text-zinc-500">Watch-out: “silent” claims are often marketing — check reviews.</p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist</h2>
        <p className="mt-2 text-sm text-zinc-600">Curated searches so you can compare current prices, warranties, and filter/maintenance costs.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/best-dehumidifier-air-purifier-uk-meaco-arete-one-25l">Meaco Arete guide →</Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">

          <ProductPick
            title="Meaco Arete One 25L (dehumidifier + purifier)"
            badge="Featured option"
            description="A strong all‑rounder for UK damp + laundry drying. Prioritise sizing, noise, and filter costs."
            bullets={[
              'Great for recurring condensation + mould risk',
              'Check dB if you’ll run it in bedrooms',
              'Aim for roughly 40–60% humidity',
            ]}
            links={[{ label: 'Check price', merchant: 'awin', href: MEACO_ARETE_ONE_25L, variant: 'primary' }]}
          />


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

        <ComparisonTable
          caption="At-a-glance comparison"
          columns={[
            { key: 'type', label: 'Type' },
            { key: 'bestFor', label: 'Great for' },
            { key: 'tradeoff', label: 'Main tradeoff' },
            { key: 'whatToCheck', label: 'Check before buying' },
          ]}
          rows={[
            {
              type: 'Desiccant',
              bestFor: 'Cold rooms + laundry drying',
              tradeoff: 'Can cost more to run',
              whatToCheck: 'Noise; laundry mode; tank size',
            },
            {
              type: 'Compressor',
              bestFor: 'Warmer rooms + everyday damp control',
              tradeoff: 'Less effective in cold rooms',
              whatToCheck: 'Humidistat; auto shut-off; extraction rating',
            },
            {
              type: 'Mini / Peltier',
              bestFor: 'Tiny cupboards only',
              tradeoff: 'Often too weak for real damp',
              whatToCheck: 'Be realistic about expectations',
            },
          ]}
        />
      </section>

      <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Where to buy (UK)</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Common UK retailers include Amazon, AO.com, Currys, and brand stores (for example: Pro Breeze). Compare extraction rate, noise, and energy use before buying.
        </p>
        <p className="mt-3 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
      </section>

      <FAQSection faqs={faqs} />

      <MoneyPageUpdateLog updatedLabel={PHASE22_UPDATED_LABEL} prevUpdatedLabel={PHASE22_PREV_UPDATED_LABEL} changes={UPDATE_CHANGES} />

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}