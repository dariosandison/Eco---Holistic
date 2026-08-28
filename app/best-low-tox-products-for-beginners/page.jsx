import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Lower-Tox Home for Beginners UK — Where to Start',
  description: 'A calm beginner route for a lower-tox home: fragrance, laundry, cleaning, air and water priorities without replacing everything at once.',
}

const ROUTES = [
  { title: 'Laundry & fragrance', href: '/topics/fragrance-free', text: 'A high-contact, repeat-use place to start if scent or residue bothers your household.' },
  { title: 'Cleaning', href: '/blog/non-toxic-cleaning-starter', text: 'Simplify the products you use often before buying specialist replacements.' },
  { title: 'Air', href: '/topics/air-quality', text: 'Ventilation, moisture and source control come before an air purifier.' },
  { title: 'Water', href: '/topics/water', text: 'Decide whether you are solving taste, portability, a specific contaminant concern or resilience.' },
]

export default function Page() {
  const slug = 'best-low-tox-products-for-beginners'
  const edu = getMoneyPageEdu(slug)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Lower-tox home for beginners UK: where to start',
    datePublished: '2026-01-25',
    dateModified: '2026-08-28',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Healthy Home starter</p>
          <h1 className="mt-2 text-4xl font-bold">A lower-tox home does not require replacing your whole house</h1>
          <p className="mt-3 text-zinc-700">Start with repeated exposures and products you use most often. Use up what is reasonable to use, replace gradually and avoid turning “low-tox” into an expensive shopping project.</p>
        </div>
        <img src="/images/photography/cleaning.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/healthy-home" topicLabel="Healthy Home hub" insightHref="/blog/non-toxic-cleaning-starter" insightLabel="Cleaning starter" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/healthy-home/low-tox-shortlist">Compare current Healthy Home swaps</Link>
            <Link className="btn-secondary" href="/topics/fragrance-free">Fragrance-free basics</Link>
            <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          </div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Pick one starting point</h2>
        <p className="mt-2 max-w-3xl text-zinc-700">Choose the route that solves an actual household problem rather than buying a basket of “clean living” products.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {ROUTES.map((route) => (
            <Link key={route.title} href={route.href} className="card transition hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="font-semibold">{route.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{route.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold">Learn first →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Buying route</p>
          <h2 className="mt-2 text-2xl font-semibold">Keep current product choices in one maintained shortlist</h2>
          <p className="mt-2 text-zinc-700">Instead of scattering unrelated bathroom, scent and personal-care products across a beginner page, the Healthy Home shortlist now holds the current partner options. That makes it easier to update recommendations when programmes, formulations or availability change.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/healthy-home/low-tox-shortlist">Open Healthy Home shortlist</Link>
            <Link className="btn-secondary" href="/healthy-home">Healthy Home principles</Link>
          </div>
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">The Wild & Well rule</h2>
        <p className="mt-3 text-zinc-700">Prioritise ventilation, sensible cleaning, fragrance reduction where useful, moisture control and products you repeatedly put on skin or use around food. “Natural” does not automatically mean safer, and a longer list of replacements is not automatically healthier.</p>
      </section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
