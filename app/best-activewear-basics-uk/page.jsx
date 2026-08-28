import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Activewear Basics UK — What You Actually Need',
  description: 'A practical UK guide to activewear basics for walking and training, with comfort-first buying criteria and a route into the Wild & Well movement shortlist.',
}

const BASICS = [
  { title: 'Training tops', need: 'Breathability and comfort', note: 'A small rotation is enough. Prioritise fit, washing and whether you actually like wearing them.' },
  { title: 'Shorts / leggings', need: 'Freedom of movement', note: 'Check sizing, seams, pockets and whether the garment stays comfortable through your normal training.' },
  { title: 'Socks', need: 'Walking comfort', note: 'Often more useful than another gadget. Fit, moisture management and footwear compatibility matter.' },
  { title: 'Weather layer', need: 'Consistency outdoors', note: 'A lightweight layer can remove an excuse to skip walks in typical UK weather.' },
]

export default function Page() {
  const edu = getMoneyPageEdu('best-activewear-basics-uk')
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Activewear Basics UK — What You Actually Need', dateModified: '2026-08-28', datePublished: '2026-01-27' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Movement buying guide</p>
          <h1 className="mt-2 text-4xl font-bold">Activewear basics: buy for the habit, not the wardrobe</h1>
          <p className="mt-3 text-zinc-700">You do not need a large technical wardrobe to walk, train or get stronger. Start with comfortable basics that remove friction from the movement you already intend to do.</p>
        </div>
        <img src="/images/photography/movement.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/movement" topicLabel="Movement basics" insightHref="/blog/home-strength-basics-busy-people" insightLabel="Strength basics" />
          <div className="mt-4 flex flex-wrap gap-2"><Link className="btn-primary" href="/movement/movement-shortlist">Open movement shortlist</Link><Link className="btn-secondary" href="/topics/foot-strength">Foot strength</Link><Link className="btn-secondary" href="/blog/walking-for-health-how-much-is-enough">Walking guide</Link></div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">The useful minimum</h2>
        <p className="mt-2 max-w-3xl text-zinc-700">If what you already own is comfortable and suitable, keep using it. Replace or add clothing when it solves a real problem such as chafing, poor weather protection, uncomfortable socks or lack of freedom of movement.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {BASICS.map((item) => <div key={item.title} className="card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm font-medium text-zinc-700">Prioritise: {item.need}</p><p className="mt-2 text-sm text-zinc-600">{item.note}</p></div>)}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Keep the buying layer focused</p>
          <h2 className="mt-2 text-2xl font-semibold">One movement shortlist instead of repeated Amazon lists</h2>
          <p className="mt-2 text-zinc-700">The old version of this page repeated the same activewear recommendations in a quick comparison, a top-three section and a full shortlist. Wild & Well now keeps the broader commercial journey in the Movement shortlist, where footwear, home strength and tracking can be compared in context.</p>
          <div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/movement/movement-shortlist">Choose a movement route</Link><Link className="btn-secondary" href="/topics/movement">Learn first</Link></div>
        </div>
      </section>

      <section className="mt-14 max-w-3xl"><h2 className="text-2xl font-semibold">Before buying activewear</h2><ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-zinc-700"><li>Check the size guide and returns policy, particularly for fitted items.</li><li>Choose for the activity and weather you actually encounter.</li><li>Prioritise comfort and durability over technical-sounding features.</li><li>Do not let clothing become a prerequisite for starting to walk or train.</li></ul></section>

      <MoneyPageNextLinks slug="best-activewear-basics-uk" />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
