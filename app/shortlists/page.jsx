import Link from 'next/link'
import ShortlistExplorer from '@/components/ShortlistExplorer'
import { SHORTLIST_SECTIONS, flattenShortlists } from '@/lib/shortlistsData'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Curated UK wellness & healthy-home shortlists',
  description: 'Focused UK buying guidance for water, air, sleep, nutrition, movement, healthy home and practical resilience. Fewer products, clearer reasons, visible trade-offs.',
}

const BUYING_PATHS = [
  { number: '01', title: 'Water', problem: 'Taste, convenience, hard-water comfort or backup filtration.', learn: '/topics/water', compare: '/water-filtration-shortlist-uk' },
  { number: '02', title: 'Air', problem: 'Particles, allergies, damp, humidity or pollution events.', learn: '/topics/air-quality', compare: '/air-quality-shortlist-uk' },
  { number: '03', title: 'Sleep', problem: 'Comfort, bedding, temperature and recovery after the basics are covered.', learn: '/topics/sleep', compare: '/sleep-recovery-shortlist-uk' },
  { number: '04', title: 'Nutrition', problem: 'Food-first protein, convenient meals, pantry staples and hydration.', learn: '/topics/nutrition', compare: '/nutrition/food-first-shortlist' },
  { number: '05', title: 'Movement', problem: 'Walking, foot strength, home training and useful tracking.', learn: '/topics/movement', compare: '/movement/movement-shortlist' },
  { number: '06', title: 'Healthy Home', problem: 'High-use household choices across laundry, cookware, showering and bathroom basics.', learn: '/healthy-home', compare: '/healthy-home/low-tox-shortlist' },
  { number: '07', title: 'Practical Resilience', problem: 'Water, food, power and simple household backup essentials.', learn: '/topics/resilience', compare: '/blog/72-hour-household-emergency-kit-uk' },
]

export default function Page() {
  const flat = flattenShortlists(SHORTLIST_SECTIONS)
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Wild & Well shortlists',
    itemListElement: (flat || []).map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.label, url: `${SITE_URL}${it.href}` })),
  }

  return (
    <main className="bg-[#fffdf8] pb-24 text-[var(--ink)]">
      <StructuredData data={itemList} />

      <header className="content-shell grid gap-10 border-b border-[rgba(18,59,50,.14)] py-14 md:grid-cols-[1.2fr_.8fr] md:items-end md:py-20">
        <div>
          <p className="eyebrow">Curated buying guidance</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3.5rem,7vw,7rem)] font-normal leading-[.92] tracking-[-.055em] text-[var(--brand-dark)]">Fewer products.<br /><em className="font-normal text-[#6b7051]">Better reasons.</em></h1>
        </div>
        <div className="md:pb-2">
          <p className="max-w-lg text-base leading-8 text-[#5b655e]">These are not giant affiliate lists. Start with the problem, understand the trade-offs, then compare a deliberately small set of sensible routes.</p>
          <div className="mt-6 flex flex-wrap gap-5"><Link className="btn-primary" href="/topics">Learn before buying</Link><Link className="text-link" href="/how-we-test">How we evaluate →</Link></div>
          <p className="mt-5 max-w-lg text-xs leading-6 text-[#7a837d]">Some links are affiliate links. Wild &amp; Well may earn a commission at no extra cost to you. Affiliate relationships do not determine inclusion.</p>
        </div>
      </header>

      <section className="content-shell py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="eyebrow">Start by problem</p>
            <h2 className="mt-3 max-w-lg font-serif text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[.98] tracking-[-.045em] text-[var(--brand-dark)]">The shortest route to a sensible decision.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#667069]">Each path connects the relevant education to one focused comparison route. If the free actions are enough, stop there.</p>
          </div>
          <div className="border-t border-[#bfc7c0]">
            {BUYING_PATHS.map((path) => (
              <article key={path.title} className="grid grid-cols-[2.2rem_1fr] gap-4 border-b border-[#bfc7c0] py-6 md:grid-cols-[2.5rem_1fr_auto] md:items-center md:gap-6 md:py-8">
                <span className="self-start font-serif text-sm italic text-[#7e8982] md:self-center">{path.number}</span>
                <div><h3 className="font-serif text-2xl font-normal tracking-[-.025em] text-[var(--brand-dark)] md:text-3xl">{path.title}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-[#657068]">{path.problem}</p></div>
                <div className="col-start-2 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[.06em] md:col-start-auto md:flex-col md:items-end"><Link href={path.learn} className="text-[var(--brand-dark)]">Understand →</Link><Link href={path.compare} className="text-[var(--brand)]">Compare ↗</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-[#f8f5ed] md:py-20">
        <div className="content-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow !text-[#a9c9b9]">The full comparison library</p><h2 className="mt-3 max-w-4xl font-serif text-[clamp(2.8rem,5vw,5.2rem)] font-normal leading-[.98] tracking-[-.045em]">Go deeper only when the decision needs it.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-[#c7d3cd]">Use the explorer below for more specific situations. Specialist pages remain useful search entry points, but the seven core routes stay the primary buying destinations.</p></div>
          <Link href="/partner-catalogue" className="text-link !text-[#f8f5ed]">Approved product catalogue ↗</Link>
        </div>
        <div className="content-shell mt-10 rounded-none bg-[#fffdf8] p-4 text-[var(--ink)] md:p-8"><ShortlistExplorer sections={SHORTLIST_SECTIONS} /></div>
      </section>

      <section className="content-shell grid gap-10 py-16 md:grid-cols-[1fr_1fr] md:py-24">
        <div><p className="eyebrow">A buying rule worth keeping</p><h2 className="mt-3 max-w-xl font-serif text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[1] tracking-[-.045em] text-[var(--brand-dark)]">If the product has no clear job, skip it.</h2></div>
        <ol className="border-t border-[rgba(18,59,50,.18)]">
          {['Name the problem you are trying to solve.', 'Read enough to know which specifications actually matter.', 'Compare a small number of suitable options, including ongoing costs.', 'Check current price, specification, returns and availability with the merchant before buying.'].map((text, i) => <li key={text} className="grid grid-cols-[2rem_1fr] gap-4 border-b border-[rgba(18,59,50,.18)] py-5 text-sm leading-7 text-[#5b655e]"><span className="font-serif italic text-[#7a867e]">0{i + 1}</span><span>{text}</span></li>)}
        </ol>
      </section>

      <section className="content-shell border-t border-[rgba(18,59,50,.14)] pt-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center"><div><p className="eyebrow">Beyond the seven journeys</p><h2 className="mt-2 font-serif text-2xl font-normal text-[var(--brand-dark)] md:text-3xl">Dog wellness remains part of the wider Wild &amp; Well library.</h2></div><div className="flex flex-wrap gap-4"><Link href="/dogs" className="text-link">Dog health guides →</Link><Link href="/dog-wellness-shortlist-uk" className="text-link">Dog shortlist ↗</Link></div></div>
      </section>
    </main>
  )
}