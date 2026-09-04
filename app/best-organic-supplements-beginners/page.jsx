import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Supplements for Beginners UK — Food First, Gaps Second',
  description: 'A conservative UK supplement guide: identify a real nutritional gap, keep doses and ingredient lists simple, and avoid building an unnecessary stack.',
}

const CHECKS = [
  { title: 'Have a reason', text: 'Use a supplement to address a plausible dietary, seasonal or clinically identified gap rather than because a bundle promises general optimisation.' },
  { title: 'Keep the label simple', text: 'Clear amounts and a short ingredient list make a product easier to understand and easier to stop if it does not suit you.' },
  { title: 'Avoid mega-doses', text: 'More is not automatically better. Follow appropriate guidance and remember that nutrients and botanicals can still have side effects or interactions.' },
  { title: 'Change one thing at a time', text: 'A simple trial makes it possible to judge whether the product helped, did nothing or caused unwanted effects.' },
]

export default function Page() {
  const slug = 'best-organic-supplements-beginners'
  const edu = getMoneyPageEdu(slug)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Supplements for beginners UK: food first, gaps second', datePublished: '2026-01-24', dateModified: '2026-08-28' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Nutrition, not supplement collecting</p>
          <h1 className="mt-2 text-4xl font-bold">Supplements for beginners: fill genuine gaps, not a cupboard</h1>
          <p className="mt-3 text-zinc-700">Wild & Well's Nutrition section is food-first. Supplements can be useful in the right context, but they sit behind diet, sleep, movement and an identifiable reason for taking them.</p>
        </div>
        <img src="/images/photography/nutrition.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/nutrition" topicLabel="Nutrition fundamentals" insightHref="/nutrition" insightLabel="Food-first nutrition hub" />
          <div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/nutrition/food-first-shortlist">Food-first shortlist</Link><Link className="btn-secondary" href="/nutrition/supplements">Supplements section</Link><Link className="btn-secondary" href="/shopping-list">Free shopping list</Link></div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12"><h2 className="text-2xl font-semibold">Four checks before buying a supplement</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{CHECKS.map((item) => <div key={item.title} className="card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-zinc-700">{item.text}</p></div>)}</div></section>

      <section className="mt-14 max-w-3xl"><h2 className="text-2xl font-semibold">“Organic” is not the main quality test</h2><p className="mt-3 text-zinc-700">Organic certification can be relevant for some plant-derived ingredients, but it does not tell you whether you need the product, whether the dose is appropriate or whether the formulation is effective. Clear composition, appropriate dosing and a genuine use case matter more than a broad wellness label.</p></section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Food-first nutrition</p><h2 className="mt-2 text-2xl font-semibold">Food first; targeted supplements second</h2><p className="mt-2 text-zinc-700">Start with food-first nutrition. Use targeted supplement guidance only for a specific question where the ingredients, dose, cautions and evidence can be assessed clearly.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/nutrition/food-first-shortlist">Open food-first shortlist</Link><Link className="btn-secondary" href="/nutrition/supplements">Read supplement guidance</Link></div></div></section>

      <section className="mt-14 max-w-3xl"><h2 className="text-2xl font-semibold">Extra caution matters</h2><p className="mt-3 text-zinc-700">If you are pregnant or breastfeeding, take medication, have a health condition or are trying to correct a suspected deficiency, use appropriate professional guidance rather than assembling a supplement stack from general online advice.</p></section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">This page is general education, not medical advice. Some links are affiliate links; Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
