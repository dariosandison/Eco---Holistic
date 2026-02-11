import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Simba Hybrid Original (UK) — mattress guide',
  description: 'A sleep-first mattress guide: how to choose firmness, temperature control, and how to trial a mattress without overthinking it.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=6878&awinaffid=2754234&clickref=ww_sleep_bedroom_simba_hybrid_original&ued=https%3A%2F%2Fsimbasleep.com%2Fproducts%2Fmattress%3Futm_source%3Dchatgpt.com'

export default function Page() {
  const slug = 'best-mattress-for-sleep-uk-simba-hybrid-original'
  const edu = getMoneyPageEdu(slug)

  const ld = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mattress for sleep (UK): Simba Hybrid Original",
  "datePublished": "2026-02-11",
  "dateModified": "2026-02-11"
}

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Mattress for sleep (UK): Simba Hybrid Original</h1>
          <p className="mt-3 text-zinc-700">
            A sleep-first mattress guide: how to choose firmness, temperature control, and how to trial a mattress without overthinking it.
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
          <EducationFirstCallout topicHref="/topics/sleep" topicLabel="Sleep topic" insightHref="/shopping-list" insightLabel="Free shopping list" />
          <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/topics/sleep">Sleep topic</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 11, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          One high‑fit option we feature for this topic. Keep changes simple: try one thing at a time and track how you respond.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Mattress for sleep (UK): Simba Hybrid Original"
            badge="Bedroom"
            description="A straightforward option to trial. Compare ingredients/specs and use the return policy if it’s not a fit."
            bullets={["Best for: upgrading sleep comfort when basics are already in place", "Prioritise trial period + returns over “perfect specs”", "Temperature control and support matter more than hype"]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('hybrid mattress UK trial period'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">How to use this page</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Start with the basics first (routine, environment, consistency) — products are optional.</li>
          <li>Change one thing at a time so you can tell what actually helped.</li>
          <li>If you’re managing a condition or taking medication, check with a qualified clinician before supplement changes.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}
