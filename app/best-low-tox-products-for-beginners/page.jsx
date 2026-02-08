import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ComparisonTable from '@/components/ComparisonTable'
import { SITE_NAME, SITE_URL } from '@/lib/site'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

import ProductPick from '@/components/mdx/ProductPick'

export const metadata = {
  title: 'Low‑tox products for beginners: starter shortlist',
  description: 'A simple, UK‑friendly starter path: where to begin, what to avoid, and the few pages that help most people first.',
}

// Partner links (AWIN)
const JUNGLECULTURE_SAFETY_RAZOR = 'https://www.awin1.com/cread.php?awinmid=26152&awinaffid=2754234&clickref=ww_home_picks_safety_razor_jungleculture_diamondgrip&ued=https%3A%2F%2Fjungleculture.eco%2Fcollections%2Fbest-selling-products%2Fproducts%2Fblue-silver-purple-safety-razors'
const NEUROSCENT_WELLBEING_SET = 'https://www.awin1.com/cread.php?awinmid=117317&awinaffid=2754234&clickref=ww_home_picks_neuroscent_wellbeing_set&ued=https%3A%2F%2Fneuroscent.com%2Fproducts%2Fwellbeing-set-1'
const ATENAI_SANCTUARY_SHAMPOO = 'https://www.awin1.com/cread.php?awinmid=116677&awinaffid=2754234&clickref=ww_home_picks_hair_shampoo_atenai_sanctuary&ued=https%3A%2F%2Fatenailondon.com%2Fcollections%2Fbestsellers%2Fproducts%2Fsanctuary-hair-shampoo'

function StartCard({ title, desc, href, tag }) {
  return (
    <Link href={href} className="card hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{desc}</p>
        </div>
        {tag ? (
          <span className="shrink-0 rounded-full border px-2 py-0.5 text-[11px] text-zinc-600 bg-white">{tag}</span>
        ) : null}
      </div>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </Link>
  )
}

export default function Page() {
    
  const edu = getMoneyPageEdu('best-low-tox-products-for-beginners')

const url = `${SITE_URL}/best-low-tox-products-for-beginners`

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Low‑tox products for beginners: starter shortlist',
    datePublished: '2026-01-25',
    dateModified: '2026-02-02',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-default.jpg` },
    },
  }

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where should I start if I only change one thing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start where you will notice the difference: fragrance‑free laundry/cleaning for many homes, or a right‑sized HEPA air purifier for bedrooms and allergies. Pick one change you can keep doing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to replace everything at once?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. One replacement you actually maintain is more valuable than a big overhaul you abandon. Build a short “repeatable” setup first.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the most common hidden cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Consumables: filters, refills, and replacements. Before buying, check replacement prices and how often you will realistically replace them.',
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
        <h1 className="text-4xl font-bold">Low‑tox products for beginners: starter shortlist</h1>
        <p className="mt-3 text-zinc-700">
          If you’re new, this page is your shortcut: one small change first, then build from there. No perfect “everything list” — just the pages that help most UK readers make a good first decision.
        </p>

        </div>

        {/* Page image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/cleaning.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
        <EducationFirstCallout topicHref="/blog" topicLabel="Read starter explainers" insightHref="/blog/non-toxic-cleaning-starter" insightLabel="Non‑toxic cleaning starter" />
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/shopping-list">Get the free shopping list</Link>
          <Link className="btn-secondary" href="/topics">Browse Topics</Link>
          <Link className="btn-secondary" href="/topics">Browse Topics</Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: February 2, 2026 · Wild & Well Editorial Team</p>
        </div>
      </header>

      
      <MoneyPageEducationBlock edu={edu} />
<section className="mt-10">
        <h2 className="text-2xl font-semibold">Start with one of these (most useful first)</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Choose ONE route based on your home: allergies/bedroom air, daily water, or fragrance‑free basics. Then stop.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StartCard
            title="Air purifiers for allergies (UK)"
            desc="Right size, filter costs, and what matters for bedrooms."
            href="/best-air-purifiers-allergies-uk"
            tag="Air"
          />
          <StartCard
            title="Water filters (UK)"
            desc="Jug vs under‑sink vs countertop — plus the real ongoing costs."
            href="/best-water-filters-uk"
            tag="Water"
          />
          <StartCard
            title="Fragrance‑free laundry (UK)"
            desc="Simple options for sensitive homes — and what to avoid on labels."
            href="/best-fragrance-free-laundry-detergents-uk"
            tag="Laundry"
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">The beginner decision rules</h2>
        <ComparisonTable
          caption="A calm decision framework you can reuse"
          columns={[
            { key: 'goal', label: 'Your goal' },
            { key: 'choose', label: 'Choose this type' },
            { key: 'why', label: 'Why it works' },
            { key: 'check', label: 'Check first' },
          ]}
          rows={[
            {
              goal: 'You want the simplest reliable start',
              choose: 'A widely available, well‑reviewed option',
              why: 'Consistency beats the “perfect” product you never use',
              check: 'Replacement parts/consumables and returns',
            },
            {
              goal: 'You want value',
              choose: 'The simplest model that meets the job',
              why: 'Avoid paying for features you won’t use',
              check: 'Total cost over 12 months (filters/refills)',
            },
            {
              goal: 'Your home is sensitive (fragrance/irritation)',
              choose: 'Fragrance‑free and minimal‑ingredient products',
              why: 'Reducing triggers is often the biggest comfort win',
              check: 'Ingredients, dosing, and residue/overuse',
            },
          ]}
        />
      </section>

      <section className="mt-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Partner swaps (UK)</h2>
            <p className="mt-1 text-sm text-zinc-600 max-w-2xl">
              Three low‑friction swaps we feature for beginners. (Links are affiliate links.)
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <ProductPick
            title="Bathroom swap: Jungle Culture safety razor"
            badge="Low‑waste"
            description="A simple durable swap that reduces disposable plastics. Start slow and use with good technique."
            bullets={["Great for: long‑term reuse", "Check blade availability", "Use a calm shaving routine"]}
            links={[{ label: 'Check price', merchant: 'awin', href: JUNGLECULTURE_SAFETY_RAZOR, variant: 'primary' }]}
          />
          <ProductPick
            title="Scent without synthetic fragrance: NeuroScent wellbeing set"
            badge="Home routine"
            description="If you want a calmer scent option, this keeps it closer to essential‑oil blends. Always patch-test and ventilate."
            bullets={["Great for: routines", "Ventilate rooms", "Avoid overuse around kids/pets"]}
            links={[{ label: 'Check price', merchant: 'awin', href: NEUROSCENT_WELLBEING_SET, variant: 'primary' }]}
          />
          <ProductPick
            title="Personal care swap: Atenai Sanctuary hair shampoo"
            badge="Simple"
            description="A calmer personal‑care option if you’re simplifying routines. Always check ingredients for your sensitivities."
            bullets={["Keep routine simple", "Check ingredients", "One change at a time"]}
            links={[{ label: 'Check price', merchant: 'awin', href: ATENAI_SANCTUARY_SHAMPOO, variant: 'primary' }]}
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Learn (when you want the context)</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/blog/non-toxic-cleaning-starter">Non‑toxic cleaning starter</Link>
          <Link className="btn-secondary" href="/blog/low-tox-kitchen">Low‑tox kitchen basics</Link>
          <Link className="btn-secondary" href="/blog/healthy-air-at-home">Healthy air at home</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    
      <MoneyPageNextLinks slug="best-low-tox-products-for-beginners" />

</main>
  )
}