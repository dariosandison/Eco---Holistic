import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Gut Health Supplements for Beginners — Food First',
  description: 'A conservative beginner guide to gut health: meals, fibre, hydration and symptom tracking first, with supplements kept secondary and current nutrition routes in one place.',
}

const ORDER = [
  { title: '1. Build repeatable meals', text: 'Start with a varied food pattern you can sustain. A supplement cannot compensate for a diet that is consistently very low in fibre or overall food variety.' },
  { title: '2. Increase fibre gradually', text: 'Whole foods come first. If you increase fibre, do it gradually and pay attention to tolerance rather than chasing a target overnight.' },
  { title: '3. Keep hydration sensible', text: 'Fibre and hydration work together. Large abrupt changes in either can make digestion less comfortable.' },
  { title: '4. Change one variable at a time', text: 'If you later trial a fibre supplement or probiotic, keep other changes stable long enough to judge the response.' },
]

export default function Page() {
  const slug = 'best-gut-health-supplements-beginners'
  const edu = getMoneyPageEdu(slug)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Gut health supplements for beginners: food first', datePublished: '2026-01-24', dateModified: '2026-08-28' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Food-first gut health</p>
          <h1 className="mt-2 text-4xl font-bold">Gut health supplements: begin with food, fibre and a stable baseline</h1>
          <p className="mt-3 text-zinc-700">Most beginners do not need a large “gut stack”. Start by making meals, fibre and hydration more consistent. If you later trial a supplement, introduce one thing at a time and judge it against a stable baseline.</p>
        </div>
        <img src="/images/photography/nutrition.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/gut-health" topicLabel="Gut-health fundamentals" insightHref="/blog/fibre-gut-health-practical-guide" insightLabel="Practical fibre guide" />
          <div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/nutrition/food-first-shortlist">Food-first nutrition shortlist</Link><Link className="btn-secondary" href="/nutrition">Nutrition hub</Link><Link className="btn-secondary" href="/nutrition/supplements">Where supplements may fit</Link></div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12 max-w-3xl"><h2 className="text-2xl font-semibold">A better order of operations</h2><div className="mt-5 space-y-4">{ORDER.map((item) => <div key={item.title} className="card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-zinc-700">{item.text}</p></div>)}</div></section>

      <section className="mt-14 max-w-3xl"><h2 className="text-2xl font-semibold">Where probiotics and fibre supplements fit</h2><p className="mt-3 text-zinc-700">They can be reasonable tools for some people, but the useful question is whether a specific product improves a specific problem for you. More strains, larger numbers and more ingredients do not automatically mean a better result. Keep trials simple and stop if symptoms clearly worsen.</p></section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Food-first nutrition</p><h2 className="mt-2 text-2xl font-semibold">Start with food before supplements</h2><p className="mt-2 text-zinc-700">Supplement pages can help with specific questions, but the main nutrition route begins with fibre-rich foods, repeatable meals and simple staples.</p><div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/nutrition/food-first-shortlist">Open food-first shortlist</Link><Link className="btn-secondary" href="/topics/gut-health">Gut-health basics</Link></div></div></section>

      <section className="mt-14 max-w-3xl"><h2 className="text-2xl font-semibold">When to seek proper advice</h2><p className="mt-3 text-zinc-700">Persistent or severe digestive symptoms, unexplained weight loss, blood in stool, significant pain or concerns about medication interactions deserve appropriate clinical assessment rather than increasingly complex supplement experiments.</p></section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">This page is general education, not medical advice. Some links are affiliate links; Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
