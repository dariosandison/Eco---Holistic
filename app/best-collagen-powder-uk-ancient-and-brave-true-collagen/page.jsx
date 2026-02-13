import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Ancient + Brave True Collagen (UK) — collagen powder guide',
  description: 'A practical UK guide to collagen powders: what collagen can and can’t do, what to check on labels, and how to trial a collagen habit without stacking changes.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=54585&awinaffid=2754234&clickref=ww_nutrition_collagen_ancient_true_collagen&ued=https%3A%2F%2Fancientandbrave.earth%2Fproducts%2Ftrue-collagen-powder'

export default function Page() {
  const slug = 'best-collagen-powder-uk-ancient-and-brave-true-collagen'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Collagen powder (UK): Ancient + Brave True Collagen',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Collagen powder (UK): Ancient + Brave True Collagen</h1>
          <p className="mt-3 text-zinc-700">
            Collagen can be a useful “small daily habit” for some people, but results vary. This page covers what to check on labels and how to run a simple 4‑week trial without stacking lots of changes.
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
          <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition" insightHref="/blog/superfoods-worth-it-and-what-to-skip" insightLabel="Superfoods: worth it?" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
            <Link className="btn-secondary" href="/blog/fibre-gut-health-practical-guide">Fibre &amp; gut health</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          If you try collagen, keep expectations realistic and run a clean experiment: consistent daily use for 4 weeks, minimal other changes.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Collagen powder (UK): Ancient + Brave True Collagen"
            badge="Collagen"
            description="A simple collagen powder option. Compare serving size, sourcing, and any added ingredients."
            bullets={[
              'Best for: people who want a simple daily collagen habit (joints/skin support is individual)',
              'Avoid if: you have relevant allergies or prefer a food‑first approach only',
              'Trial: 4 weeks, same time daily, track outcomes you care about',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('collagen powder hydrolysed UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Simple collagen trial rules</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Pick one measurable outcome (skin hydration, joint comfort, recovery markers) and track weekly.</li>
          <li>Don’t add multiple new supplements at the same time.</li>
          <li>Protein and sleep basics usually matter more — get those stable first.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
