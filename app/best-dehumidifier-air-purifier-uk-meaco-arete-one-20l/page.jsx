import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import ProductPick from '@/components/mdx/ProductPick'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Meaco Arete One 20L (UK) — dehumidifier + purifier guide',
  description: 'A practical guide to the Meaco Arete One 20L: when a 20L dehumidifier makes sense, what to measure first, and when another size or air-quality route is better.',
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
    dateModified: '2026-08-27',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />

      <header>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold">Dehumidifier + air purifier (UK): Meaco Arete One 20L</h1>
          <p className="mt-3 text-zinc-700">
            A dehumidifier is useful when excess indoor humidity is the actual problem. Measure first, deal with obvious moisture sources and ventilation, then size the machine to the space and workload.
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
        <h2 className="text-lg font-semibold">Do these checks before buying a dehumidifier</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
          <li><strong>Measure humidity:</strong> use a hygrometer rather than guessing from how the room feels.</li>
          <li><strong>Fix moisture sources:</strong> leaks, poor extraction and persistent water ingress need addressing rather than masking.</li>
          <li><strong>Think about workload:</strong> laundry drying and recurring condensation can justify more extraction capacity than occasional seasonal use.</li>
          <li><strong>Check noise and drainage:</strong> especially if the unit will run near bedrooms or for long periods.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Where the 20L model fits</h2>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">For a household that has confirmed a recurring humidity problem, the 20L Arete One is a relevant mid-size partner option. If your problem is mainly airborne particles rather than moisture, compare dedicated air-purification routes instead.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Meaco Arete One 20L"
            badge="Humidity"
            description="A practical mid-size dehumidifier and air-purifier combination for recurring condensation and laundry-drying workloads."
            bullets={[
              'Best for: confirmed excess humidity, recurring condensation and indoor laundry drying',
              'Check: noise, tank workflow or continuous drainage, and replacement filters',
              'Do not oversize blindly: match capacity to the home and moisture load',
            ]}
            trackingContext="meaco_arete_20l_guide"
            links={[
              { label: 'Check Meaco 20L price', merchant: 'awin', href: FEATURED_AWIN, variant: 'primary' },
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
