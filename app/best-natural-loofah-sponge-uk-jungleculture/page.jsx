import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Jungle Culture Natural Loofah Sponge (UK) — low-tox bathroom swap guide',
  description: 'A practical guide to low-tox bathroom swaps: why a natural loofah can be a simple plastic-free change, what to check (drying/cleaning), and how to keep it hygienic.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=26152&awinaffid=2754234&clickref=ww_home_lowtox_jungleculture_natural_loofah&ued=https%3A%2F%2Fjungleculture.eco%2Fcollections%2Fbest-selling-products%2Fproducts%2Fnatural-loofah-sponge'

export default function Page() {
  const slug = 'best-natural-loofah-sponge-uk-jungleculture'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Natural loofah sponge (UK): Jungle Culture loofah set',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Natural loofah sponge (UK): Jungle Culture loofah</h1>
          <p className="mt-3 text-zinc-700">
            A simple plastic‑free bathroom swap. The key is hygiene: let it dry properly, replace on schedule, and don’t overcomplicate it.
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
          <EducationFirstCallout topicHref="/topics/fragrance-free" topicLabel="Fragrance-free" insightHref="/blog/zero-waste-bathroom" insightLabel="Zero-waste bathroom" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/best-low-tox-products-for-beginners">Low-tox starter shortlist</Link>
            <Link className="btn-secondary" href="/blog/zero-waste-bathroom">Zero-waste bathroom</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          Keep it hygienic: dry it properly, rinse well, and replace regularly.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Natural loofah sponge (UK): Jungle Culture loofah sponge set"
            badge="Bathroom swap"
            description="A natural loofah sponge set for a plastic-free bath/shower routine. Make sure it dries fully between uses."
            bullets={[
              'Best for: a simple plastic-free swap in the bath/shower',
              'Avoid if: you won’t be able to dry it properly (hygiene matters)',
              'Routine: rinse well, squeeze out water, dry fully, replace on schedule',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('natural loofah sponge UK'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Keep it hygienic</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Let it dry fully between uses (airflow matters).</li>
          <li>Replace if it starts to smell, discolour, or break down.</li>
          <li>Don’t share with others; treat like a personal hygiene item.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  )
}
