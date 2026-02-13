import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Waterdrop RO System (UK) — reverse osmosis guide (G3P600)',
  description: 'A practical UK guide to reverse osmosis systems: who they suit, what to check (space, waste water, filters), and how to compare options.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=117649&awinaffid=2754234&clickref=ww_water_ro_waterdrop_g3p600&ued=https%3A%2F%2Fwww.waterdropfilter.co.uk%2Fproducts%2Fwaterdrop-reverse-osmosis-water-filtration-system'

export default function Page() {
  const slug = 'best-reverse-osmosis-water-filter-uk-waterdrop-g3p600'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Reverse osmosis water filter (UK): Waterdrop 600 GPD Fast Flow RO (G3P600)',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Reverse osmosis water filter (UK): Waterdrop 600 GPD (G3P600)</h1>
          <p className="mt-3 text-zinc-700">
            Reverse osmosis (RO) is a higher‑involvement option: you’re trading space + filter replacement for convenience and taste.
            This page helps you decide if an under‑sink RO system is right for your kitchen.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/water.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/water" topicLabel="Water" insightHref="/blog/water-filter-buying-guide-uk" insightLabel="Water filter buying guide" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/topics/water">Water topic</Link>
            <Link className="btn-secondary" href="/best-water-filters-uk">Water filters shortlist</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Under‑sink RO systems can be a great fit if you have space, you’ll maintain filters on schedule, and you want a fast, dedicated drinking tap.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Reverse osmosis system (UK): Waterdrop 600 GPD Fast Flow (G3P600)"
            badge="Under‑sink RO"
            description="Fast‑flow RO system designed for a dedicated drinking water tap. Check space, installation requirements and filter costs before committing."
            bullets={[
              'Best for: households who want a dedicated filtered drinking tap and can maintain filter changes',
              'Avoid if: you have very limited under‑sink space or you won’t keep up with replacements',
              'Check: filter replacement schedule + cost (this is the long‑term cost)',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('under sink reverse osmosis system UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">What to check before buying</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li><span className="font-semibold">Space:</span> measure under‑sink clearance and where the tank/filter modules will sit.</li>
          <li><span className="font-semibold">Maintenance:</span> set reminders for filter changes — performance is inconsistent when replacements slip.</li>
          <li><span className="font-semibold">Install:</span> if you rent or dislike plumbing, a countertop system may be simpler.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}
