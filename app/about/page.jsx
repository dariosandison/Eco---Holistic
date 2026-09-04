import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Why trust Wild & Well',
  description: 'How Wild & Well researches healthier-living decisions, evaluates products, handles affiliate relationships and keeps editorial judgement independent.',
  alternates: { canonical: '/about' },
}

const PRINCIPLES = [
  ['01', 'Problem before product', 'We start with what someone is trying to improve, not with a catalogue of things to sell.'],
  ['02', 'No-spend actions first', 'If ventilation, timing, routine or a simpler household change may solve the problem, that belongs before a product recommendation.'],
  ['03', 'Evidence stays visible', 'Claims, uncertainty, limitations and the difference between manufacturer data and independent evidence should remain clear.'],
  ['04', 'Trade-offs beat rankings', 'We would rather explain who an option suits, what it costs to own and why someone should skip it than produce an endless top-ten list.'],
]

export default function Page(){
  return (
    <main className="bg-[#fffdf8] pb-24 text-[var(--ink)]">
      <header className="content-shell grid gap-10 py-14 md:grid-cols-[1.12fr_.88fr] md:items-end md:py-20">
        <div>
          <p className="eyebrow">Why trust Wild &amp; Well</p>
          <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3.5rem,7vw,7rem)] font-normal leading-[.92] tracking-[-.055em] text-[var(--brand-dark)]">Useful advice before <em className="font-normal text-[#6b7051]">useful products.</em></h1>
        </div>
        <div className="md:pb-2"><p className="max-w-lg text-base leading-8 text-[#5b655e]">Wild &amp; Well is a UK-focused healthy-living publication built around one simple rule: understand the problem first, try the sensible low-cost actions, then compare products only when they have a clear job to do.</p><div className="mt-6 flex flex-wrap gap-5"><Link href="/editorial-policy" className="btn-primary">Read our editorial policy</Link><Link href="/how-we-test" className="text-link">How we evaluate products →</Link></div></div>
      </header>

      <section className="content-shell grid gap-0 border-y border-[rgba(18,59,50,.14)] md:grid-cols-[1.05fr_.95fr]">
        <div className="relative min-h-[420px] md:min-h-[620px]"><Image src="/images/photography/home.jpg" alt="A calm, naturally lit home interior" fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover" /></div>
        <div className="flex items-center bg-[#e9e5da] px-6 py-12 md:px-12 lg:px-16">
          <div><p className="eyebrow">What we cover</p><h2 className="mt-3 font-serif text-[clamp(2.6rem,4.7vw,4.8rem)] font-normal leading-[1] tracking-[-.045em] text-[var(--brand-dark)]">Seven everyday systems that shape how home and health feel.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-[#5b655e]">Water, Air, Sleep, Nutrition, Movement, Healthy Home and Practical Resilience form the core. Specialist subjects such as dog wellness and outdoor living sit around them without diluting the main journeys.</p><Link href="/topics" className="text-link mt-6">Explore the seven journeys →</Link></div>
        </div>
      </section>

      <section className="content-shell py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[.75fr_1.25fr] md:gap-20">
          <div><p className="eyebrow">The Wild &amp; Well standard</p><h2 className="mt-3 font-serif text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[.98] tracking-[-.045em] text-[var(--brand-dark)]">How editorial decisions are made.</h2></div>
          <div className="border-t border-[#bfc7c0]">
            {PRINCIPLES.map(([number, title, copy]) => <div key={number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[#bfc7c0] py-6 md:grid-cols-[3rem_.65fr_1.35fr] md:gap-6"><span className="font-serif text-sm italic text-[#7e8982]">{number}</span><h3 className="font-serif text-xl font-normal text-[var(--brand-dark)] md:text-2xl">{title}</h3><p className="col-start-2 text-sm leading-7 text-[#657068] md:col-start-auto">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-[#f8f5ed] md:py-20">
        <div className="content-shell grid gap-12 md:grid-cols-3">
          <div><p className="eyebrow !text-[#a9c9b9]">How we make money</p><h2 className="mt-3 font-serif text-3xl font-normal tracking-[-.035em] md:text-4xl">Affiliate funded, not affiliate led.</h2><p className="mt-4 text-sm leading-7 text-[#c7d3cd]">Some links can earn Wild &amp; Well a commission at no extra cost to the reader. Affiliate availability does not determine which problems we cover or where an option appears.</p><Link href="/affiliate-disclosure" className="text-link mt-5 !text-white">Affiliate disclosure →</Link></div>
          <div><p className="eyebrow !text-[#a9c9b9]">How products are evaluated</p><h2 className="mt-3 font-serif text-3xl font-normal tracking-[-.035em] md:text-4xl">Research is not the same as testing.</h2><p className="mt-4 text-sm leading-7 text-[#c7d3cd]">Unless a page explicitly says otherwise, product guides are editorial research rather than laboratory or long-term hands-on tests. We compare intended job, evidence, specifications, UK practicality, ownership cost and alternatives.</p><Link href="/how-we-test" className="text-link mt-5 !text-white">Evaluation methodology →</Link></div>
          <div><p className="eyebrow !text-[#a9c9b9]">Corrections &amp; accountability</p><h2 className="mt-3 font-serif text-3xl font-normal tracking-[-.035em] md:text-4xl">Clear when something changes.</h2><p className="mt-4 text-sm leading-7 text-[#c7d3cd]">Manufacturer claims are not presented as our own results. Where evidence is uncertain, a specification changes or we get something wrong, the page should be updated rather than defended.</p><Link href="/corrections" className="text-link mt-5 !text-white">Corrections policy →</Link></div>
        </div>
      </section>

      <section className="content-shell grid gap-10 py-16 md:grid-cols-[1fr_1fr] md:py-24">
        <div><p className="eyebrow">People &amp; contact</p><h2 className="mt-3 max-w-xl font-serif text-[clamp(2.8rem,5vw,5rem)] font-normal leading-[1] tracking-[-.045em] text-[var(--brand-dark)]">Know who is behind the work.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-[#667069]">Wild &amp; Well is founded and edited in-house. Author pages identify who created the work, and the contact route is open for corrections, feedback and products you think deserve consideration.</p></div>
        <div className="border-t border-[rgba(18,59,50,.18)]"><Link href="/authors/wild-and-well-founder" className="flex items-center justify-between border-b border-[rgba(18,59,50,.18)] py-5 font-serif text-2xl text-[var(--brand-dark)]">Founder &amp; Editor profile <span aria-hidden="true">↗</span></Link><Link href="/authors" className="flex items-center justify-between border-b border-[rgba(18,59,50,.18)] py-5 font-serif text-2xl text-[var(--brand-dark)]">All authors <span aria-hidden="true">↗</span></Link><Link href="/contact" className="flex items-center justify-between border-b border-[rgba(18,59,50,.18)] py-5 font-serif text-2xl text-[var(--brand-dark)]">Contact &amp; corrections <span aria-hidden="true">↗</span></Link><Link href="/product-disclosure" className="flex items-center justify-between border-b border-[rgba(18,59,50,.18)] py-5 font-serif text-2xl text-[var(--brand-dark)]">Product disclosure <span aria-hidden="true">↗</span></Link></div>
      </section>

      <div className="content-shell"><p className="border-t border-[rgba(18,59,50,.14)] pt-5 text-xs text-[#7a837d]">Last updated: September 3, 2026</p></div>
    </main>
  )
}
