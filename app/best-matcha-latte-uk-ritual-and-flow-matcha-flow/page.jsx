import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Ritual & Flow Matcha Flow (UK) — matcha latte guide',
  description: 'A practical guide to matcha lattes: how to choose a better daily caffeine swap, what to check on ingredients, and how to trial it without the crash.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=112594&awinaffid=2754234&clickref=ww_nutrition_energy_ritualandflow_matcha_flow&ued=https%3A%2F%2Fritualandflow.com%2Fproducts%2Fmatcha-flow'

export default function Page() {
  const slug = 'best-matcha-latte-uk-ritual-and-flow-matcha-flow'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Matcha latte (UK): Ritual & Flow Matcha Flow',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Matcha latte (UK): Ritual &amp; Flow Matcha Flow</h1>
          <p className="mt-3 text-zinc-700">
            A calmer caffeine swap for many people: matcha tends to feel smoother than coffee. This page covers what to check on ingredients and how to trial it without overcomplicating your routine.
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
          <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition" insightHref="/best-organic-matcha-uk" insightLabel="Matcha shortlist" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/nutrition">Nutrition</Link>
            <Link className="btn-secondary" href="/best-organic-matcha-uk">Matcha shortlist</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Keep this simple: one daily serving, same time each day, for 1–2 weeks. Then decide if it’s worth keeping.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Matcha latte (UK): Ritual & Flow Matcha Flow"
            badge="Better drinks"
            description="Functional matcha latte blend for a smoother daily caffeine swap. Check sweeteners and allergens on the label."
            bullets={[
              'Best for: a smoother alternative to coffee (less crash for some people)',
              'Avoid if: you’re very caffeine sensitive (start with half a serving)',
              'Keep it consistent for 1–2 weeks so you can judge it fairly',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('matcha latte powder UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">How to trial matcha (without the crash)</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Start with half a serving for 3–4 days if you’re sensitive.</li>
          <li>Have it earlier in the day (sleep usually wins vs late caffeine).</li>
          <li>Don’t stack new supplements at the same time — keep the experiment clean.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}
