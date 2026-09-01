'use client'

import { useMemo, useState } from 'react'

export default function OfferExplorer({ offers }) {
  const [category, setCategory] = useState('All')
  const categories = useMemo(() => ['All', ...new Set(offers.map((offer) => offer.category))], [offers])
  const visible = category === 'All' ? offers : offers.filter((offer) => offer.category === category)

  if (!offers.length) {
    return <div className="rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6 md:p-8"><h2 className="text-xl font-semibold">No verified time-limited offers today</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-700">We would rather show an empty page than present an expired code or manufacture urgency. Our buying guides and shortlists remain available, and this page updates when a worthwhile partner promotion has been checked.</p></div>
  }

  return <section><label className="text-sm font-semibold" htmlFor="offer-category">Filter offers</label><select id="offer-category" value={category} onChange={(event) => setCategory(event.target.value)} className="ml-3 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm">{categories.map((item) => <option key={item}>{item}</option>)}</select><div className="mt-6 grid gap-4 md:grid-cols-2">{visible.map((offer) => <article key={offer.id} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{offer.category} · {offer.advertiser}</p><h2 className="mt-2 text-xl font-semibold">{offer.title}</h2><p className="mt-2 text-sm leading-6 text-zinc-700">{offer.description}</p><a href={offer.href} target="_blank" rel="sponsored noreferrer" className="btn-primary mt-5" data-affiliate-context={`offer:${offer.id}`}>View verified offer</a><p className="mt-4 text-xs text-zinc-500">{offer.terms} Ends {new Date(offer.endsAt).toLocaleDateString('en-GB')}.</p></article>)}</div></section>
}
