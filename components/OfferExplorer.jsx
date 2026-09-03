'use client'

import { useMemo, useState } from 'react'
import VisibilityTracker from '@/components/VisibilityTracker'

export default function OfferExplorer({ offers }) {
  const [category, setCategory] = useState('All')
  const categories = useMemo(() => ['All', ...new Set(offers.map((offer) => offer.category))], [offers])
  const visible = category === 'All' ? offers : offers.filter((offer) => offer.category === category)

  if (!offers.length) {
    return <div className="border border-zinc-200 bg-[#f1f1e9] p-7 md:p-9"><p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">Offer desk</p><h2 className="mt-2 font-serif text-3xl font-normal tracking-tight text-[#123b32]">Nothing worth pushing today</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700">We would rather show an empty page than publish an expired code or manufacture urgency. The maintained shortlists remain available when there is no worthwhile partner promotion to surface.</p></div>
  }

  return <section><div className="flex flex-col gap-4 border-y border-zinc-300 py-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-zinc-500">Current verified promotions</p><p className="mt-1 text-sm text-zinc-600">Filtered for relevance, live dates and practical reader value.</p></div><div><label className="mr-3 text-xs font-bold uppercase tracking-[0.1em] text-zinc-500" htmlFor="offer-category">Category</label><select id="offer-category" value={category} onChange={(event) => setCategory(event.target.value)} className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm">{categories.map((item) => <option key={item}>{item}</option>)}</select></div></div><div className="mt-7 grid gap-5 md:grid-cols-2">{visible.map((offer) => <VisibilityTracker key={offer.id} event="offer_impression" data={{ offer_id: offer.id, merchant: offer.advertiser, category: offer.category }}><article className="flex h-full flex-col border border-zinc-200 bg-white p-6 shadow-[0_14px_36px_rgba(18,59,50,.06)]"><p className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">{offer.category} · {offer.advertiser}</p><h2 className="mt-3 font-serif text-[1.65rem] font-normal leading-tight tracking-tight text-[#123b32]">{offer.title}</h2><p className="mt-3 text-sm leading-6 text-zinc-700">{offer.description}</p><div className="mt-5 border-t border-zinc-200 pt-4"><p className="text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500">Terms checked</p><p className="mt-2 text-xs leading-5 text-zinc-600">{offer.terms}</p><p className="mt-1 text-xs text-zinc-500">Recorded end date: {new Date(offer.endsAt).toLocaleDateString('en-GB')}.</p></div><div className="mt-auto pt-6"><a href={offer.href} target="_blank" rel="sponsored noreferrer" className="btn-primary" data-affiliate-context={`offer:${offer.id}`}>Check offer with retailer</a><p className="mt-2 text-[11px] leading-4 text-zinc-500">Affiliate link. Final price, stock and eligibility are confirmed by the retailer.</p></div></article></VisibilityTracker>)}</div></section>
}
