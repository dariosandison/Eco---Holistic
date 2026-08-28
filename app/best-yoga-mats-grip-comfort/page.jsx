import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Yoga Mats for Grip & Comfort — What Matters',
  description: 'Choose a yoga or exercise mat by grip, cushioning, stability, durability and how you actually train, with current movement gear kept in one shortlist.',
}

const CHECKS = [
  { title: 'Grip', text: 'If your hands or feet regularly slide, surface grip matters more than colour or alignment markings. Grip can also change as a mat warms or gets damp.' },
  { title: 'Thickness', text: 'More cushioning can make kneeling and floor work more comfortable, but very thick mats may feel less stable for standing and balance work.' },
  { title: 'Size and weight', text: 'A larger mat gives more usable floor space; a lighter mat is easier to carry. Choose for where you will actually use it.' },
  { title: 'Durability and care', text: 'Check cleaning instructions and whether the material tolerates your normal routine. A mat you can maintain is more useful than a premium one you avoid using.' },
]

export default function Page() {
  const slug = 'best-yoga-mats-grip-comfort'
  const edu = getMoneyPageEdu(slug)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Yoga mats for grip and comfort: what matters', datePublished: '2026-01-27', dateModified: '2026-08-28' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Movement buying guide</p>
          <h1 className="mt-2 text-4xl font-bold">Yoga mats: choose grip and comfort for the training you actually do</h1>
          <p className="mt-3 text-zinc-700">A mat is a simple tool. Choose enough grip and cushioning to make floor work comfortable without paying for features that do not improve your practice.</p>
        </div>
        <img src="/images/photography/movement.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/movement" topicLabel="Movement fundamentals" insightHref="/blog/home-strength-basics-busy-people" insightLabel="Home strength basics" />
          <div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/movement/movement-shortlist#home-strength-basics">Compare movement gear</Link><Link className="btn-secondary" href="/topics/movement">Movement basics</Link><Link className="btn-secondary" href="/topics/recovery">Recovery basics</Link></div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12"><h2 className="text-2xl font-semibold">Four useful checks</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{CHECKS.map((item) => <div key={item.title} className="card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-zinc-700">{item.text}</p></div>)}</div></section>

      <section className="mt-14 max-w-3xl"><h2 className="text-2xl font-semibold">How thick should a mat be?</h2><p className="mt-3 text-zinc-700">There is no universal ideal. A moderately cushioned mat is a useful general-purpose starting point. Go thicker when hard-floor comfort is the main problem, or thinner when portability and a firmer, more stable surface matter more.</p></section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Current buying route</p><h2 className="mt-2 text-2xl font-semibold">Keep current movement gear in one shortlist</h2><p className="mt-2 text-zinc-700">The old page repeated six generic marketplace searches across multiple sections. The Movement shortlist now holds current partner options, while this page stays useful as a grip, cushioning and durability guide.</p><div className="mt-5"><Link className="btn-primary" href="/movement/movement-shortlist#home-strength-basics">Open movement gear options</Link></div></div></section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
