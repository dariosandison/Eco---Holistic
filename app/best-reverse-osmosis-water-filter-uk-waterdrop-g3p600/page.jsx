import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Waterdrop RO System (UK) — reverse osmosis guide (G3P600)',
  description: 'A practical UK guide to reverse osmosis: who it suits, the installation and maintenance trade-offs, and when a simpler filtration format is a better fit.',
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
    dateModified: '2026-08-27',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Reverse osmosis water filter (UK): Waterdrop 600 GPD (G3P600)</h1>
          <p className="mt-3 text-zinc-700">
            Reverse osmosis is one of the more involved home-filtration routes. Before buying, decide whether the extra installation, wastewater and replacement-filter commitment actually solves a problem you care about.
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
        <h2 className="text-lg font-semibold">RO earns its complexity only when the fit is right</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
          <li><strong>Space:</strong> measure the cabinet and installation route before choosing a system.</li>
          <li><strong>Running cost:</strong> compare replacement filters and replacement intervals, not only the unit price.</li>
          <li><strong>Water use:</strong> understand the system's wastewater ratio and whether that trade-off is acceptable to you.</li>
          <li><strong>Simpler alternatives:</strong> under-sink ceramic, countertop and gravity systems may solve the same household problem with less complexity.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured RO option</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">For readers who have already decided RO is appropriate, this tracked partner option provides a direct next step. Current specifications and consumable costs should be checked on the merchant site.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Waterdrop 600 GPD Fast Flow RO (G3P600)"
            badge="Under-sink RO"
            description="A dedicated under-sink RO route for households prepared for installation and ongoing filter replacement."
            bullets={[
              'Best for: a dedicated filtered drinking-water tap where under-sink installation is acceptable',
              'Check before buying: cabinet clearance, installation requirements and wastewater ratio',
              'Compare long-term cost: replacement filters matter as much as the initial unit',
            ]}
            trackingContext="waterdrop_g3p600_guide"
            links={[
              { label: 'Check Waterdrop price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare simpler filtration routes', merchant: 'internal', href: '/water-filtration-shortlist-uk', variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission at no extra cost to you.</p>
    </main>
  )
}
