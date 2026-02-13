import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'AG1 Travel Packs (UK) — greens powder guide',
  description: 'A practical guide to greens powders: who they suit, what to check on labels, and how to trial a “daily essentials” routine without stacking changes.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=22320&awinaffid=2754234&clickref=ww_nutrition_daily_essentials_healf_ag1_travel_packs&ued=https%3A%2F%2Fhealf.com%2Fproducts%2Fag1-travel-packs'

export default function Page() {
  const slug = 'best-ag1-travel-packs-uk-healf'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Greens powder (UK): AG1 travel packs via Healf',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Greens powder (UK): AG1 travel packs</h1>
          <p className="mt-3 text-zinc-700">
            Greens powders are a convenience product. The best approach is education‑first: treat it as a daily habit trial, keep other changes stable, and decide after 2–4 weeks.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/nutrition.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition" insightHref="/blog/fibre-gut-health-practical-guide" insightLabel="Fibre & gut health" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
            <Link className="btn-secondary" href="/blog/label-reading-101">Label reading 101</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          If you’re new to supplements, start with food basics first. If you still want a greens powder, trial it consistently for 2–4 weeks.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Greens powder (UK): AG1 travel packs"
            badge="Daily essentials"
            description="Convenient travel packs for a daily greens habit. Compare ingredients and assess tolerance before stacking other supplements."
            bullets={[
              'Best for: convenience and routine (especially travel or busy mornings)',
              'Avoid if: you prefer food-first only or react to multi-ingredient blends',
              'Trial: 2–4 weeks, one change at a time, track energy/digestion',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('greens powder UK travel packs'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Greens powder trial rules</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Keep dosage and timing consistent.</li>
          <li>Don’t stack new supplements at the same time (you won’t know what caused what).</li>
          <li>Stop if you get adverse effects and review ingredients with a clinician if needed.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">
        General information only. If you are pregnant, on medication, or managing a health condition, check with a qualified clinician first.
      </p>

      <p className="mt-3 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
