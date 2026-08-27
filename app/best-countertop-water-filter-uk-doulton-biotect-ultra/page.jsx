import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Doulton Countertop Water Filter (UK) — Biotect Ultra guide',
  description: 'A practical guide to countertop water filters: who they suit, what to check before buying, and when an under-sink or gravity system makes more sense.',
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
    dateModified: '2026-08-27',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Countertop water filter (UK): Doulton Biotect Ultra</h1>
          <p className="mt-3 text-zinc-700">
            Countertop filtration can suit renters and households that want a dedicated drinking-water filter without committing to under-sink plumbing. The important checks are tap compatibility, countertop space and replacement-filter cost.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/photography/water.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />

        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/water" topicLabel="Water" insightHref="/blog/water-filter-buying-guide-uk" insightLabel="Water filter buying guide" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/topics/water">Water basics</Link>
            <Link className="btn-secondary" href="/water-filtration-shortlist-uk">Compare filtration options</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: August 27, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Is countertop filtration the right format?</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
          <li><strong>Choose countertop</strong> when avoiding permanent plumbing changes matters most.</li>
          <li><strong>Choose under-sink</strong> when you want the filter hidden and are happy with installation.</li>
          <li><strong>Choose gravity or jug filtration</strong> when tap compatibility or portability matters more than flow rate.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">If countertop is the format you have already chosen, this is the relevant partner option. Check the merchant page for current compatibility, replacement schedule and price.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Doulton Biotect Ultra countertop system"
            badge="Countertop"
            description="A no-under-sink-space option for a dedicated filtered-water setup. The recurring filter cost matters more than the headline purchase price over time."
            bullets={[
              'Best for: renters and households avoiding under-sink installation',
              'Check: tap compatibility and available countertop space',
              'Budget for: replacement elements and routine maintenance',
            ]}
            trackingContext="doulton_countertop_guide"
            links={[
              { label: 'Check Doulton price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare all water-filter formats', merchant: 'internal', href: '/water-filtration-shortlist-uk', variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission at no extra cost to you.</p>
    </main>
  )
}
