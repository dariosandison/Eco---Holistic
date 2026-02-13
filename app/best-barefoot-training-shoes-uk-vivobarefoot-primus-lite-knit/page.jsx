import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Vivobarefoot Primus Lite Knit (UK) — barefoot training shoe guide',
  description: 'A practical guide to barefoot training shoes: who they suit, how to transition safely, and what to compare before buying.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=7778&awinaffid=2754234&clickref=ww_movement_footstrength_vivo_primus_lite_knit&ued=https%3A%2F%2Fwww.vivobarefoot.com%2Fuk%2Fprimus-lite-knit-training-footwear'

export default function Page() {
  const slug = 'best-barefoot-training-shoes-uk-vivobarefoot-primus-lite-knit'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Barefoot training shoes (UK): Vivobarefoot Primus Lite Knit',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Barefoot training shoes (UK): Vivobarefoot Primus Lite Knit</h1>
          <p className="mt-3 text-zinc-700">
            A practical guide to barefoot training shoes: who they suit, how to transition safely, and what to compare before buying.
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
            <Link className="btn-secondary" href="/best-barefoot-walking-boots-uk-vivobarefoot-tracker-winter-iii">Barefoot boots guide</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          If you’re new to barefoot shoes, go slow. Short sessions first (especially calf loading), then build volume.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Barefoot training shoes (UK): Vivobarefoot Primus Lite Knit"
            badge="Foot strength"
            description="A popular barefoot training option for gym work. Prioritise fit and transition gradually."
            bullets={[
              'Best for: gym training and foot-strength work when you want ground feel',
              'Avoid if: you need lots of cushioning or you’re ramping up mileage fast',
              'Transition slowly (short sessions first) to avoid calf/foot overload',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('barefoot training shoes UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Quick transition checklist</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Start with short indoor sessions (10–20 minutes) before full workouts.</li>
          <li>Expect calf/foot soreness early — reduce volume if it lingers or sharpens.</li>
          <li>Keep the rest of your training stable for 2–3 weeks so you can judge the change.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}
