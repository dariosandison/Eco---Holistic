import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Revive Active Joint Complex (UK) — joint support guide',
  description: 'A practical guide to joint support supplements: who they suit (movement/recovery), what to check on labels, and how to trial one change at a time.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=72881&awinaffid=2754234&clickref=ww_movement_recovery_reviveactive_joint_complex&ued=https%3A%2F%2Freviveactive.com%2Fproducts%2Fjoint-complex'

export default function Page() {
  const slug = 'best-joint-support-supplement-uk-reviveactive-joint-complex'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Joint support supplement (UK): Revive Active Joint Complex',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Joint support supplement (UK): Revive Active Joint Complex</h1>
          <p className="mt-3 text-zinc-700">
            Joint support is usually “boring wins”: consistent strength work, sleep, and overall protein intake. If you still want to trial a supplement, keep it simple: one change, consistent timing, 2–4 weeks.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/movement.jpg"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/movement" topicLabel="Movement" insightHref="/blog/home-strength-basics-busy-people" insightLabel="Home strength basics" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/movement">Movement</Link>
            <Link className="btn-secondary" href="/best-resistance-bands-home-workouts">Strength basics shortlist</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Supplement trials work best when the rest of your training is stable. Keep the experiment clean.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Joint support supplement (UK): Revive Active Joint Complex"
            badge="Recovery"
            description="A joint support supplement option for active people. Check ingredients, allergens and suitability if you take medication."
            bullets={[
              'Best for: people training regularly who want to trial a joint support supplement alongside strength work',
              'Avoid if: you’re stacking lots of new supplements or have relevant contraindications (check first)',
              'Trial: 2–4 weeks, one change at a time, track joint comfort + training consistency',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('joint support supplement UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">The boring foundations (still matter most)</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Strength work 2–3x/week (even short sessions) supports joints over time.</li>
          <li>Protein intake and sleep consistency usually beat fancy stacks.</li>
          <li>If pain is sharp or worsening, get it assessed rather than masking it.</li>
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
