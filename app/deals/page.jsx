import Link from 'next/link'
import OfferExplorer from '@/components/OfferExplorer'
import { getLiveOffers } from '@/data/offers'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Wild & Well Offers — Verified UK Partner Promotions', description: 'Current Wild & Well partner offers that have been checked for relevance, terms and expiry. No stale voucher codes or manufactured urgency.' }

export default function DealsPage() {
  const offers = getLiveOffers()
  return <main className="mx-auto max-w-6xl px-4 py-16"><header className="max-w-4xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Wild &amp; Well offers</p><h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Useful offers, checked before they appear</h1><p className="mt-4 max-w-3xl text-lg text-zinc-700">A small, maintained selection of partner promotions across wellness, healthy home, dogs and outdoors. Inclusion depends on product fit and reader value—not simply the size of the discount.</p><div className="mt-6 flex flex-wrap gap-2"><Link href="/shortlists" className="btn-primary">Browse decision-led shortlists</Link><Link href="/affiliate-disclosure" className="btn-secondary">How affiliate links work</Link></div></header><section className="my-10 grid gap-4 md:grid-cols-3">{[['Checked expiry','Offers automatically disappear after their recorded end date.'],['Independent selection','A commission never guarantees inclusion or a positive verdict.'],['Whole-cost view','We consider delivery, refills, filters, returns and likely useful life.']].map(([title,text]) => <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-5"><h2 className="font-semibold">{title}</h2><p className="mt-2 text-sm text-zinc-600">{text}</p></div>)}</section><OfferExplorer offers={offers} /><p className="mt-10 max-w-3xl text-xs text-zinc-500">Offer links may be affiliate links. Wild &amp; Well may receive a commission at no extra cost to you. Prices, stock and eligibility are confirmed by the retailer at checkout.</p></main>
}
