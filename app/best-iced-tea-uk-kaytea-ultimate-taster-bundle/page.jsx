import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Kaytea Ultimate Taster Bundle (UK) — better drinks swap guide',
  description: 'A practical guide to lower-friction drinks swaps: what to check on ingredients, sugar/caffeine, and how to trial a “better drinks” routine without overthinking it.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=115673&awinaffid=2754234&clickref=ww_nutrition_drinks_kaytea_ultimate_taster_bundle&ued=https%3A%2F%2Fkaytea.co.uk%2Fproducts%2Fultimate-taster-bundle'

export default function Page() {
  const slug = 'best-iced-tea-uk-kaytea-ultimate-taster-bundle'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Better drinks swap (UK): Kaytea Ultimate Taster Bundle',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Better drinks swap (UK): Kaytea Ultimate Taster Bundle</h1>
          <p className="mt-3 text-zinc-700">
            One of the easiest nutrition wins is swapping daily drinks. This page helps you trial a “better drinks” routine without overcomplicating ingredients, sugar, and caffeine.
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
          <EducationFirstCallout topicHref="/nutrition" topicLabel="Nutrition" insightHref="/blog/label-reading-101" insightLabel="Label reading 101" />
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
          Use this as a low-friction trial: pick 1–2 drinks per day, keep the rest of your routine stable, and reassess after 2 weeks.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Better drinks swap (UK): Kaytea Ultimate Taster Bundle"
            badge="Drinks"
            description="A sampler bundle for testing flavours and building a simple hydration routine. Check sugar/caffeine per serving on label."
            bullets={[
              'Best for: a low-effort swap away from high-sugar drinks',
              'Avoid if: you prefer totally caffeine-free options (check the label)',
              'Keep it simple: 1–2 daily servings, then decide if it’s worth keeping',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('iced tea low sugar UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">A simple hydration routine</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Make the default easy: keep your “better drink” where you normally grab something.</li>
          <li>Track the basics: how you feel mid-afternoon, and whether cravings reduce.</li>
          <li>Don’t chase perfection — consistency beats “ideal ingredients” you never use.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
