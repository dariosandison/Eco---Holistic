import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Meaco Arete One 25L (UK) — dehumidifier + purifier guide',
  description: 'A practical guide to the Meaco Arete One 25L: when higher extraction capacity makes sense, what to measure first, and how to avoid oversizing the purchase.',
}

const FEATURED_AWIN = 'https://www.awin1.com/cread.php?awinmid=31711&awinaffid=2754234&clickref=ww_home_air_meaco_arete_one_25l&ued=https%3A%2F%2Fwww.meaco.com%2Fproducts%2Fmeacodry-arete-one-25l-dehumidifier-and-air-purifier'

export default function Page() {
  const slug = 'best-dehumidifier-air-purifier-uk-meaco-arete-one-25l'
  const edu = getMoneyPageEdu(slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dehumidifier + air purifier (UK): Meaco Arete One 25L',
    datePublished: '2026-02-11',
    dateModified: '2026-08-27',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Dehumidifier + air purifier (UK): Meaco Arete One 25L</h1>
          <p className="mt-3 text-zinc-700">
            The larger model is most useful when the moisture load justifies it. Confirm the humidity problem first, address obvious ventilation or water-ingress issues, then decide whether the extra extraction capacity is worth the size and cost.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/photography/air-quality.png" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />

        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/air-quality" topicLabel="Air quality" insightHref="/blog/damp-and-mould-uk-renters-playbook" insightLabel="Damp & mould playbook" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-secondary" href="/topics/air-quality">Air-quality basics</Link>
            <Link className="btn-secondary" href="/air-quality-shortlist-uk">Compare air-quality options</Link>
            <Link className="btn-secondary" href="/best-dehumidifiers-damp-mould-uk">Dehumidifier guide</Link>
            <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
          </div>
          <p className="mt-3 text-xs text-zinc-500">Last updated: August 27, 2026 · Wild &amp; Well Editorial Team</p>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-10 panel">
        <h2 className="text-lg font-semibold">When stepping up to 25L can make sense</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
          <li><strong>Higher moisture load:</strong> persistent condensation or frequent indoor laundry can demand more extraction.</li>
          <li><strong>Larger working area:</strong> a bigger capacity can be useful when one unit is expected to serve more of the home.</li>
          <li><strong>Still measure first:</strong> capacity is not a substitute for confirming the humidity problem with a hygrometer.</li>
          <li><strong>Do not mask defects:</strong> leaks, water ingress and inadequate extraction should be corrected where possible.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Featured higher-capacity option</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">If the larger capacity is justified by your space and moisture load, this is the direct tracked partner route. For a lighter workload, compare the wider shortlist rather than automatically buying the bigger machine.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Meaco Arete One 25L"
            badge="Higher capacity"
            description="A larger dehumidifier and air-purifier combination for households with a heavier, confirmed humidity workload."
            bullets={[
              'Best for: heavier recurring humidity and laundry-drying workloads',
              'Check: physical size, noise, drainage and replacement-filter costs',
              'Compare first: a 20L or other route may be sufficient for a lighter workload',
            ]}
            trackingContext="meaco_arete_25l_guide"
            links={[
              { label: 'Check Meaco 25L price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
              { label: 'Compare air-quality options', merchant: 'internal', href: '/air-quality-shortlist-uk', variant: 'ghost' },
            ]}
          />
        </div>
      </section>

      <MoneyPageNextLinks slug={slug} />

      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, we earn a commission at no extra cost to you.</p>
    </main>
  )
}
