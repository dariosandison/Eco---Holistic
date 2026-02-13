import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Saffrosun Calm (UK) — saffron supplement guide',
  description: 'A practical guide to saffron supplements for calm/sleep: who they suit, what to check, and how to trial one change at a time.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=20100&awinaffid=2754234&clickref=ww_sleep_calm_nakedpharmacy_saffrosun_calm&ued=https%3A%2F%2Fwww.thenakedpharmacy.com%2Fproducts%2Fsaffrosun-calm'

export default function Page() {
  const slug = 'best-saffron-supplement-uk-naked-pharmacy-saffrosun-calm'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Saffron supplement (UK): The Naked Pharmacy Saffrosun Calm',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Saffron supplement (UK): Saffrosun Calm</h1>
          <p className="mt-3 text-zinc-700">
            If you’re experimenting with calm/wind‑down support, keep it simple: one change, consistent timing, and a 2–4 week trial.
            This page covers the key checks and how to compare alternatives.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/sleep.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep" insightHref="/blog/sleep-naturally-simple-guide" insightLabel="Sleep naturally guide" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/topics/sleep">Sleep topic</Link>
            <Link className="btn-secondary" href="/best-natural-sleep-support">Sleep support shortlist</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Supplements are optional. If you use one, keep the trial clean: stable routine, stable caffeine timing, and one change at a time.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Saffron supplement (UK): The Naked Pharmacy Saffrosun Calm"
            badge="Calm"
            description="A saffron-based calm/wind‑down option. Check suitability if you are pregnant, on medication, or managing a condition."
            bullets={[
              'Best for: evening wind‑down routines and calm support (education‑first approach)',
              'Avoid if: pregnant/breastfeeding or if advised by your clinician (check first)',
              'Trial 2–4 weeks and track: sleep latency, night waking, and next‑day mood',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('saffron supplement UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">How to trial a calm supplement</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Keep your wake time consistent for the trial period.</li>
          <li>Set a caffeine cut-off (many people do better ~8 hours before bed).</li>
          <li>Track outcomes weekly; don’t judge it on day 1.</li>
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
