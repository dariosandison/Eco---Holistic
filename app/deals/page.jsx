import Link from 'next/link'
import OfferExplorer from '@/components/OfferExplorer'
import { getLiveOffers } from '@/data/offers'

export const dynamic = 'force-dynamic'
export const metadata = {
  title: 'Verified UK Partner Offers | Wild & Well',
  description: 'A maintained selection of relevant Wild & Well partner promotions, checked for terms and recorded expiry. No stale voucher codes or manufactured urgency.',
}

export default function DealsPage() {
  const offers = getLiveOffers()

  return (
    <main className="bg-[#fffdf8] text-zinc-900">
      <section className="border-b border-zinc-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.15fr,.85fr] md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Wild &amp; Well offer desk</p>
            <h1 className="mt-4 font-serif text-5xl font-normal leading-[.98] tracking-[-.04em] text-[#123b32] md:text-7xl">Useful savings. <em className="font-normal text-[#6d714f]">No noise.</em></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-700 md:text-lg">We only surface partner promotions that are relevant to an existing Wild &amp; Well topic or shortlist. An offer does not make a weak product worth buying, so the buying guide still comes first.</p>
            <div className="mt-7 flex flex-wrap gap-2"><Link href="/shortlists" className="btn-primary">Start with a shortlist</Link><Link href="/affiliate-disclosure" className="btn-secondary">How affiliate links work</Link></div>
          </div>
          <aside className="self-end border-t border-[#123b32]/20 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">Our offer rule</p>
            <p className="mt-3 font-serif text-2xl leading-snug text-[#123b32]">The discount is never the reason for inclusion. Product fit and usefulness come first.</p>
            <p className="mt-4 text-sm leading-6 text-zinc-600">Expiry dates are recorded in the offer data. Final price, stock, eligibility and checkout terms remain the retailer’s responsibility.</p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-px overflow-hidden border border-zinc-200 bg-zinc-200 md:grid-cols-3">
          {[
            ['01', 'Expiry checked', 'Offers disappear when their recorded end date passes.'],
            ['02', 'Editorial independence', 'Commission does not guarantee inclusion or a favourable verdict.'],
            ['03', 'Whole-cost view', 'Delivery, refills, filters, returns and likely useful life still matter.'],
          ].map(([num,title,text]) => <div key={title} className="bg-white p-6"><span className="font-serif text-sm italic text-zinc-400">{num}</span><h2 className="mt-6 font-serif text-2xl font-normal text-[#123b32]">{title}</h2><p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p></div>)}
        </div>

        <div className="mt-12"><OfferExplorer offers={offers} /></div>
        <p className="mt-10 max-w-3xl text-xs leading-5 text-zinc-500">Offer links may be affiliate links. Wild &amp; Well may receive a commission at no extra cost to you. Prices, stock and eligibility are confirmed by the retailer at checkout.</p>
      </section>
    </main>
  )
}
