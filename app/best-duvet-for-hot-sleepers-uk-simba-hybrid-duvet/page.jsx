import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Simba Hybrid Duvet (UK) — bedding guide for hot sleepers',
  description: 'A practical UK guide to bedding for hot sleepers: what to look for in a duvet, how to compare fills, and how to trial temperature changes without overhauling your whole setup.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=6878&awinaffid=2754234&clickref=ww_sleep_bedding_simba_hybrid_duvet&ued=https%3A%2F%2Fsimbasleep.com%2Fproducts%2Fhybrid-duvet'

export default function Page() {
  const slug = 'best-duvet-for-hot-sleepers-uk-simba-hybrid-duvet'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Duvet for hot sleepers (UK): Simba Hybrid Duvet',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Duvet for hot sleepers (UK): Simba Hybrid Duvet</h1>
          <p className="mt-3 text-zinc-700">
            If you wake hot or sweaty, bedding can be a high‑leverage change. This guide helps you compare duvet fills and trial temperature changes without replacing everything at once.
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
          <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep" insightHref="/blog/bedroom-temperature-bedding" insightLabel="Bedroom temperature + bedding" />
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
          Trial bedding changes the same way you’d trial a supplement: change one variable, give it 1–2 weeks, and track night wakings.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Duvet for hot sleepers (UK): Simba Hybrid Duvet"
            badge="Bedding"
            description="A breathable duvet option aimed at temperature regulation. Check tog options and returns so you can trial properly."
            bullets={[
              'Best for: people who wake hot and want a bedding upgrade without changing the whole bed',
              'Avoid if: you’re very sensitive to synthetic fills (compare materials and feel)',
              'Check: tog, cover material, and easy returns (so you can trial calmly)',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('cooling duvet breathable UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Simple temperature levers</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Room first: lower bedroom temperature if possible (even a small change can help).</li>
          <li>Then bedding: breathable duvet + sheets; change one layer at a time.</li>
          <li>Track it: note wake‑ups and “too hot” nights for 7–14 days.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}
