import Link from 'next/link'
import StructuredData from '@/components/StructuredData'
import EducationFirstCallout from '@/components/EducationFirstCallout'
import MoneyPageEducationBlock from '@/components/MoneyPageEducationBlock'
import { getMoneyPageEdu } from '@/lib/moneyPageEdu'
import MoneyPageNextLinks from '@/components/MoneyPageNextLinks'

export const metadata = {
  title: 'Resistance Bands for Home Workouts — What to Buy First',
  description: 'A practical resistance-band guide for home strength: long bands, mini bands, anchors and progression, with current movement options in one maintained shortlist.',
}

const TYPES = [
  { title: 'Long bands', text: 'Usually the most versatile first purchase for rows, presses, assisted movements and full-body home training.' },
  { title: 'Mini loop bands', text: 'Useful for lower-body accessories and warm-ups, but less versatile as your only strength tool.' },
  { title: 'Heavy power bands', text: 'Useful for assisted pull-ups and higher-tension work. Check the anchor point and inspect the band regularly.' },
  { title: 'Door anchors and handles', text: 'Can increase exercise variety in a small space, but the door, anchor and attachment quality matter for safety.' },
]

export default function Page() {
  const slug = 'best-resistance-bands-home-workouts'
  const edu = getMoneyPageEdu(slug)
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Resistance bands for home workouts: what to buy first', datePublished: '2026-01-27', dateModified: '2026-08-28' }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={ld} />
      <header>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Home strength buying guide</p>
          <h1 className="mt-2 text-4xl font-bold">Resistance bands: start with enough versatility to progress</h1>
          <p className="mt-3 text-zinc-700">Bands can support useful home strength work if you choose enough resistance, control the movement and make exercises progressively harder over time. You do not need a large kit.</p>
        </div>
        <img src="/images/photography/movement.jpg" alt="" className="mt-6 h-[260px] w-full rounded-3xl border border-zinc-200 object-cover shadow-sm md:h-[380px]" loading="lazy" decoding="async" />
        <div className="max-w-3xl">
          <EducationFirstCallout topicHref="/topics/movement" topicLabel="Movement fundamentals" insightHref="/blog/home-strength-basics-busy-people" insightLabel="Home strength basics" />
          <div className="mt-5 flex flex-wrap gap-2"><Link className="btn-primary" href="/movement/movement-shortlist#home-strength-basics">Compare home-strength options</Link><Link className="btn-secondary" href="/movement/hypertrophy">Strength & hypertrophy</Link><Link className="btn-secondary" href="/topics/recovery">Recovery basics</Link></div>
        </div>
      </header>

      <MoneyPageEducationBlock edu={edu} />

      <section className="mt-12"><h2 className="text-2xl font-semibold">Which type solves your problem?</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{TYPES.map((item) => <div key={item.title} className="card"><h3 className="font-semibold">{item.title}</h3><p className="mt-2 text-sm text-zinc-700">{item.text}</p></div>)}</div></section>

      <section className="mt-14 max-w-3xl"><h2 className="text-2xl font-semibold">Can bands build muscle?</h2><p className="mt-3 text-zinc-700">They can contribute to strength and muscle gain when the exercises provide enough resistance and you progressively increase the challenge. The limiting factor is usually not the fact that resistance comes from a band; it is whether the setup lets you train the target movement hard enough and consistently enough.</p></section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">Compare home-strength equipment</p><h2 className="mt-2 text-2xl font-semibold">Choose equipment that supports a repeatable routine</h2><p className="mt-2 text-zinc-700">Use the maintained Movement shortlist to compare current partner options for home strength by resistance range, storage, setup and practical fit.</p><div className="mt-5"><Link className="btn-primary" href="/movement/movement-shortlist#home-strength-basics">Open home-strength options</Link></div></div></section>

      <MoneyPageNextLinks slug={slug} />
      <p className="mt-12 text-xs text-zinc-500">Inspect bands, anchors and attachment points before use and replace damaged equipment. Some links are affiliate links; Wild & Well may earn a commission at no extra cost to you.</p>
    </main>
  )
}
