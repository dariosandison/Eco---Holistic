import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Real Food Hub (UK) — ethical meat delivery guide',
  description: 'A practical guide to buying higher-welfare meat online: what to look for, what questions to ask, and how to plan freezer space.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=20241&awinaffid=2754234&clickref=ww_nutrition_wholefoods_realfoodhub_mangalitza_primerib&ued=https%3A%2F%2Fwww.realfoodhub.co.uk%2Fproduct-detail%2Fmangalitza-pork-prime-rib-steak'

export default function Page() {
  const slug = 'ethical-meat-delivery-uk-real-food-hub-mangalitza-prime-rib'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ethical meat delivery (UK): Real Food Hub Mangalitza Prime Rib Steak',
    datePublished: '2026-02-11',
    dateModified: '2026-08-27',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Food-first buying guide</p>
          <h1 className="mt-2 text-4xl font-bold">Higher-welfare meat delivery: check the whole buying route</h1>
          <p className="mt-3 text-zinc-700">Online meat delivery can make food-first protein and freezer planning easier, but provenance, delivery reliability, storage space and cost per serving matter more than a single premium cut.</p>
        </div>

        <img src="/images/photography/nutrition.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />

        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition" insightHref="/nutrition/food-first-shortlist" insightLabel="Food-first shortlist" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/nutrition/food-first-shortlist">Compare food-first routes</Link>
            <Link className="btn-secondary" href="/blog/protein-basics-for-everyday-health-uk">Protein basics</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: August 27, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Featured partner route</h2>
          <p className="mt-2 text-sm text-zinc-600">This product is a useful entry point into the retailer, not a claim that one cut is universally best. Compare the wider range, provenance information and delivery terms before ordering.</p>
        </div>

        <div className="mt-6 max-w-2xl">
          <ProductPick
            title="Real Food Hub — Mangalitza Prime Rib Steak"
            badge="Whole foods"
            description="A direct partner option for people prioritising food-first protein and higher-welfare sourcing. Use it as a route into the retailer and compare the wider range for your normal meals."
            bullets={[
              'Best for: food-first protein and freezer planning',
              'Compare provenance, pack size and price per serving',
              'Check delivery day and freezer space before ordering',
            ]}
            trackingContext="realfoodhub_meat_guide_featured"
            links={[
              { label: 'Check Real Food Hub', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare food-first alternatives', merchant: 'internal', href: '/nutrition/food-first-shortlist', variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="text-lg font-semibold">Provenance</h2><p className="mt-2 text-sm text-zinc-700">Look for clear information about animal origin, husbandry and the producer rather than relying on broad premium language.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Cost per useful meal</h2><p className="mt-2 text-sm text-zinc-700">Compare usable weight and normal meal portions. A premium steak can be a poor comparison for a batch-cooking order.</p></div>
        <div className="card"><h2 className="text-lg font-semibold">Delivery & storage</h2><p className="mt-2 text-sm text-zinc-700">Check chilled packaging, delivery timing and freezer capacity before placing a larger order.</p></div>
      </section>

      <section className="mt-12 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">When this route makes sense</h2>
        <p className="mt-2 text-sm text-zinc-700">Consider online meat delivery when it improves sourcing, meal planning or convenience enough to justify the delivery cost. If a local butcher already gives you clear provenance and good value, there may be no reason to switch.</p>
      </section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
