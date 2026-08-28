import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Walking Shoes for Daily Steps UK — Fit First',
  description: 'A comfort-first UK walking shoe guide focused on fit, width, cushioning, grip and daily use, with current movement options kept in one shortlist.',
}

const CHECKS = [
  { title: 'Fit and width', text: 'Your heel should feel secure without crushing the forefoot. Width and toe-room matter more than a fashionable model name.' },
  { title: 'Surface', text: 'Pavement, mixed paths and muddy trails place different demands on grip, outsole durability and weather protection.' },
  { title: 'Cushioning preference', text: 'More cushioning is not automatically better. Choose the feel you can comfortably walk in for the duration you actually do.' },
  { title: 'Transition', text: 'If you move toward thinner or more minimal footwear, increase exposure gradually rather than changing your whole walking volume overnight.' },
]

export default function Page() {
  const slug = 'best-walking-shoes-daily-steps-uk'
  const edu = getMoneyPageEdu(slug)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Walking shoes for daily steps UK: fit first', datePublished: '2026-01-27', dateModified: '2026-08-28' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Movement buying guide</p>
          <h1 className="mt-2 text-4xl font-bold">Walking shoes: the best pair is the one that fits your feet and your route</h1>
          <p className="mt-3 text-zinc-700">Daily walking does not require a particular brand. Start with fit, the surfaces you use and the amount of cushioning or ground feel you prefer.</p>
        </div>
        <img src="/images/photography/movement.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/movement" topicLabel="Movement fundamentals" insightHref="/topics/foot-strength" insightLabel="Foot-strength guide" />
          <div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/movement/movement-shortlist#barefoot-footwear">Compare footwear options</Link><Link className="btn-secondary" href="/topics/foot-strength">Foot-strength basics</Link><Link className="btn-secondary" href="/blog/walking-basics-weekly-plan">Walking plan</Link></div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12"><h2 className="text-2xl font-semibold">Four checks before choosing a pair</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{CHECKS.map((item) => <div key={item.title} className="card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-zinc-700">{item.text}</p></div>)}</div></section>

      <section className="mt-14 max-w-3xl"><h2 className="text-2xl font-semibold">Do running shoes work for walking?</h2><p className="mt-3 text-zinc-700">Often, yes. Many comfortable running shoes work perfectly well for everyday walking. The useful question is not the category on the box but whether the shoe fits, feels stable enough for you and suits your normal terrain.</p></section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Current buying route</p><h2 className="mt-2 text-2xl font-semibold">Compare current footwear in the Movement shortlist</h2><p className="mt-2 text-zinc-700">The old version repeated six marketplace searches across multiple shortlist sections. The maintained Movement shortlist now holds current footwear options, including the barefoot/foot-strength route where relevant.</p><div className="mt-5"><Link className="btn-primary" href="/movement/movement-shortlist#barefoot-footwear">Open footwear options</Link></div></div></section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Some links are affiliate links. If you buy via them, Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
