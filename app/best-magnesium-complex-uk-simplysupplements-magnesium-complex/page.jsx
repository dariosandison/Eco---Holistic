import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Simply Supplements Magnesium Complex (UK) — magnesium guide',
  description: 'A practical guide to magnesium for sleep and recovery: what to look for, how to trial it safely, and how to compare alternatives.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=5959&awinaffid=2754234&clickref=ww_sleep_recovery_simplysupplements_magnesium_complex&ued=https%3A%2F%2Fwww.simplysupplements.co.uk%2Fmagnesium-complex'

export default function Page() {
  const slug = 'best-magnesium-complex-uk-simplysupplements-magnesium-complex'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Magnesium complex (UK): Simply Supplements Magnesium Complex',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Magnesium complex (UK): Simply Supplements Magnesium Complex</h1>
          <p className="mt-3 text-zinc-700">
            Magnesium is a common “wind‑down” supplement, but responses vary. This guide covers how to trial magnesium simply (without stacking changes) and what to check on labels.
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
          <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep" insightHref="/blog/magnesium-for-sleep-basics" insightLabel="Magnesium basics" />
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
          If you try magnesium, keep the trial clean: start low, take it at the same time each evening, and track sleep latency and night waking for 2–4 weeks.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Magnesium complex (UK): Simply Supplements Magnesium Complex"
            badge="Recovery"
            description="A multi‑form magnesium complex. Start low and check interactions if you take medication."
            bullets={[
              'Best for: evening wind‑down routines (some people find it helpful)',
              'Avoid if: you’ve had GI issues with magnesium (start low; assess tolerance)',
              'Trial: 2–4 weeks, one change at a time, track sleep outcomes',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('magnesium complex UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Simple magnesium rules</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Start low and increase only if well tolerated.</li>
          <li>Avoid stacking multiple new supplements at once.</li>
          <li>If you are pregnant, on medication, or managing a condition, check with a qualified clinician first.</li>
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
