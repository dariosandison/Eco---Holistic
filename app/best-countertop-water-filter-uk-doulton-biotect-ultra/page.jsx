import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Doulton Countertop Water Filter (UK) — Biotect Ultra guide',
  description: 'A practical guide to countertop water filters: who they suit (renters, no-plumbing), what to check, and how to compare alternatives.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=69790&awinaffid=2754234&clickref=ww_water_countertop_doulton_biotect_ultra&ued=https%3A%2F%2Fdoulton.com%2Fproducts%2Fd-cs-d-cp-biotect-ultra'

export default function Page() {
  const slug = 'best-countertop-water-filter-uk-doulton-biotect-ultra'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Countertop water filter (UK): Doulton Biotect Ultra system',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Countertop water filter (UK): Doulton Biotect Ultra</h1>
          <p className="mt-3 text-zinc-700">
            A renter‑friendly option when you want better tasting water without plumbing changes. This page covers the key checks and how to compare countertop vs under‑sink.
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
          Countertop systems are a good middle ground: more capacity than a jug, less hassle than under‑sink plumbing.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Countertop water filter (UK): Doulton Biotect Ultra"
            badge="Countertop"
            description="A countertop system when you want better water without drilling/installation. Check replacement filters and how often you will realistically change them."
            bullets={[
              'Best for: renters and no‑plumbing setups that still want good‑tasting daily water',
              'Avoid if: you need an ultra‑compact setup or dislike countertop footprint',
              'Check: replacement filter costs and replacement cadence',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('countertop water filter UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Countertop vs under‑sink</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li><span className="font-semibold">Countertop:</span> easiest install, visible footprint, simple maintenance.</li>
          <li><span className="font-semibold">Under‑sink:</span> clean look, more involved install, still needs filter replacements.</li>
          <li><span className="font-semibold">Jug:</span> cheapest, but small capacity and slower workflow.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}
