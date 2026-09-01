import Link from 'next/link'

import AffiliateCatalogue from '@/components/AffiliateCatalogue'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Approved Partner Product Catalogue UK',
  description: 'Browse Wild & Well approved affiliate products for water, air quality, sleep and movement, with practical checks before buying.',
}

export default function Page() {
  const products = Object.values(AWIN_PICKS).flat()

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Approved partner catalogue</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">Browse products by the job they do</h1>
        <p className="mt-4 text-lg text-zinc-700">This is the wider catalogue of products available through approved Wild &amp; Well affiliate partners. Inclusion means a tracked partner relationship exists; it does not mean every item is a top recommendation.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/shortlists" className="btn-primary">See curated shortlists</Link>
          <Link href="/how-we-test" className="btn-secondary">How we assess products</Link>
          <Link href="/affiliate-disclosure" className="btn-secondary">Affiliate disclosure</Link>
        </div>
        <p className="mt-4 text-sm text-zinc-600">For a shorter decision, use the curated Picks pages. Use this catalogue when you already know the product type or partner you want to compare.</p>
      </header>

      <AffiliateCatalogue products={products} />
    </main>
  )
}
