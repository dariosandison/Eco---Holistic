import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Fragrance-Free Laundry Detergent UK — What to Look For',
  description: 'A practical UK fragrance-free laundry guide: label checks, dosing, residue and sensitive-household basics, with current Healthy Home buying routes.',
}

const CHECKS = [
  { title: 'Look for genuinely fragrance-free', text: 'Do not assume “sensitive”, “natural” or “eco” means fragrance-free. Check the exact variant and ingredient information.' },
  { title: 'Use the right dose', text: 'More detergent is not automatically cleaner. Overdosing can leave residue, especially in hard-water areas or lightly soiled loads.' },
  { title: 'Skip scented fabric conditioner if scent is the problem', text: 'Changing detergent while keeping a strongly fragranced conditioner can defeat the point of the experiment.' },
  { title: 'Test the highest-contact laundry first', text: 'Bedding, towels and clothes worn next to the skin are a sensible place to start before changing every household product.' },
]

export default function Page() {
  const slug = 'best-fragrance-free-laundry-detergents-uk'
  const edu = getMoneyPageEdu(slug)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fragrance-free laundry detergent UK: what to look for',
    datePublished: '2026-01-25',
    dateModified: '2026-08-28',
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Healthy Home buying guide</p>
          <h1 className="mt-2 text-4xl font-bold">Fragrance-free laundry: start with the products that stay against your skin</h1>
          <p className="mt-3 text-zinc-700">Laundry is a sensible first place to simplify because detergent and conditioner are used repeatedly across clothes, towels and bedding. You do not need to replace everything in the house at once.</p>
        </div>
        <img src="/images/photography/laundry.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/fragrance-free" topicLabel="Fragrance-free basics" insightHref="/blog/eco-laundry" insightLabel="Laundry guide" />
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/healthy-home/low-tox-shortlist">Compare current Healthy Home swaps</Link>
            <Link className="btn-secondary" href="/healthy-home">Healthy Home hub</Link>
            <Link className="btn-secondary" href="/shopping-list">Free shopping list</Link>
          </div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Four checks before changing detergent</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {CHECKS.map((item) => <div key={item.title} className="card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-zinc-700">{item.text}</p></div>)}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">One maintained buying layer</p>
          <h2 className="mt-2 text-2xl font-semibold">Compare current lower-tox household options in one place</h2>
          <p className="mt-2 text-zinc-700">The previous version of this page repeated several generic marketplace searches in multiple shortlist sections. Wild & Well now keeps current partner options in the Healthy Home shortlist, while this page focuses on the laundry decision itself.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/healthy-home/low-tox-shortlist">Open Healthy Home shortlist</Link>
            <Link className="btn-secondary" href="/topics/fragrance-free">Read fragrance-free basics</Link>
          </div>
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-semibold">A simple one-week experiment</h2>
        <p className="mt-3 text-zinc-700">Use one fragrance-free detergent at the recommended dose, leave out fragranced conditioner and wash your highest-contact items consistently. If you are changing products because of persistent skin symptoms, remember that laundry is only one possible factor and medical advice may be appropriate.</p>
      </section>

      <MoneyPageNextLinks slug={slug} includeSignup={false} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
