import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Atenai Oasis Hand Cream (UK) — low-tox personal care guide',
  description: 'A practical guide to low-tox personal care swaps: what to check on ingredients/fragrance, how to patch test, and how to trial one simple upgrade.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=116677&awinaffid=2754234&clickref=ww_home_bathroom_atenai_oasis_hand_cream&ued=https%3A%2F%2Fatenailondon.com%2Fcollections%2Fbestsellers%2Fproducts%2Foasis-hand-cream'

export default function Page() {
  const slug = 'best-hand-cream-uk-atenai-oasis-hand-cream'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hand cream (UK): Atenai Oasis Hand Cream',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Hand cream (UK): Atenai Oasis Hand Cream</h1>
          <p className="mt-3 text-zinc-700">
            A low-friction personal care upgrade. If you have sensitive skin, patch test and keep fragrance/simple-ingredient rules in mind.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/home.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/fragrance-free" topicLabel="Fragrance-free" insightHref="/blog/ingredient-red-flags" insightLabel="Ingredient red flags" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/best-low-tox-products-for-beginners">Low-tox starter shortlist</Link>
            <Link className="btn-secondary" href="/topics/fragrance-free">Fragrance-free topic</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          If your hands are dry or irritated, “boring consistency” helps most: use after washing and before bed.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Hand cream (UK): Atenai Oasis Hand Cream"
            badge="Personal care"
            description="A simple hand cream option. If you react to fragrance/essential oils, double-check the ingredient list and patch test."
            bullets={[
              'Best for: a small daily upgrade that you’ll actually use',
              'Avoid if: fragrance triggers you (check ingredients and patch test)',
              'Routine: use after washing + before bed for 2 weeks',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('hand cream sensitive skin fragrance free UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Patch test rules (simple)</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Try a small area first and wait 24 hours if you’re sensitive.</li>
          <li>Reduce the number of fragranced products you use at the same time.</li>
          <li>One change at a time makes it easier to spot triggers.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
