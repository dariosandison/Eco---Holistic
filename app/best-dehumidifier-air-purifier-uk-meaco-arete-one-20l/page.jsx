import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Meaco Arete One 20L (UK) — dehumidifier + purifier guide',
  description: 'A practical guide to the Meaco Arete One 20L: when it’s a strong fit for UK damp, what to check, and how to compare alternatives.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=31711&awinaffid=2754234&clickref=ww_home_air_meaco_arete_one_20l&ued=https%3A%2F%2Fwww.meaco.com%2Fproducts%2Fmeacodry-arete-one-20l-dehumidifier-and-air-purifier'

export default function Page() {
  const slug = 'best-dehumidifier-air-purifier-uk-meaco-arete-one-20l'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dehumidifier + air purifier (UK): Meaco Arete One 20L',
    datePublished: '2026-02-13',
    dateModified: '2026-02-13',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Dehumidifier + air purifier (UK): Meaco Arete One 20L</h1>
          <p className="mt-3 text-zinc-700">
            A practical guide to the Meaco Arete One 20L: when it’s a strong fit for UK damp, what to check, and how to compare alternatives.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/photography/air-quality.png"
          alt=""
          className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]"
          loading="lazy"
          decoding="async"
        />

        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/air-quality" topicLabel="Air quality" insightHref="/blog/damp-and-mould-uk-renters-playbook" insightLabel="Damp & mould playbook" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/topics/air-quality">Air quality topic</Link>
            <Link className="btn-secondary" href="/best-dehumidifiers-damp-mould-uk">Dehumidifier shortlist</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: February 13, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured option</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          A solid mid‑size UK option for managing humidity (condensation, mould risk) and improving comfort during laundry drying.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Dehumidifier + air purifier (UK): Meaco Arete One 20L"
            badge="Humidity"
            description="A straightforward option to trial. Measure humidity first (aim roughly 40–60%) and check filter costs before committing."
            bullets={[
              'Best for: recurring condensation, mould risk, and laundry drying',
              'Avoid if: you need ultra‑quiet bedroom use (check noise specs carefully)',
              'Check: replacement filters + running cost (this is the long‑term cost)',
            ]}
            links={[
              { label: 'Check price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare alternatives', merchant: 'amazon', href: amazonSearchUrl('Meaco Arete One 20L dehumidifier'), variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">Quick setup checklist</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
          <li>Use a hygrometer for a week so you know your baseline humidity.</li>
          <li>Place the unit where air can circulate (not tucked tight in a corner).</li>
          <li>Empty the tank consistently or set up continuous drainage if possible.</li>
        </ul>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">
        Some links are affiliate links. If you buy via them, we earn a commission.
      </p>
    </main>
  )
}
