import Link from 'next/link'
import DogProductCatalogue from '@/components/DogProductCatalogue'
import { AWIN_PICKS } from '@/data/awinPicks'

export const metadata = {
  title: 'Dog & Pet-Allergy Product Catalogue UK',
  description: 'Search current Wild & Well approved products relevant to pet dander, healthier indoor air and humidity in homes with dogs.',
}

function productNeed(item) {
  if (item.group === 'Air purifiers') return 'purifier'
  if (item.group === 'Filters & replacements') return 'replacement'
  return 'humidity'
}

function productUse(item) {
  if (item.group === 'Air purifiers') return 'Consider for airborne pet-dander exposure in a correctly sized room; it will not remove hair from surfaces or treat an allergy.'
  if (item.group === 'Filters & replacements') return 'Maintenance option for a compatible appliance. Confirm the exact model and replacement interval.'
  return 'Humidity control can help a damp home, but a dehumidifier does not remove pet allergens in the same way as a particle filter.'
}

export default function Page() {
  const products = AWIN_PICKS.air
    .filter((item) => ['Air purifiers', 'Filters & replacements', 'Dehumidifiers'].includes(item.group))
    .filter((item) => !/lamp/i.test(item.product))
    .map((item) => ({ ...item, dogNeed: productNeed(item), dogUse: productUse(item) }))

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Current approved dog-home products</p>
        <h1 className="mt-2 text-4xl font-bold">Search by the household problem</h1>
        <p className="mt-4 text-lg text-zinc-700">This catalogue currently contains approved air and humidity products that may be relevant in homes with dogs. Catalogue inclusion confirms an affiliate route exists; it is not a blanket recommendation.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/dog-wellness-shortlist-uk" className="btn-primary">See the tighter shortlist</Link>
          <Link href="/blog/air-purifier-pet-dander-uk" className="btn-secondary">Understand pet allergens first</Link>
          <Link href="/dogs" className="btn-secondary">Dog wellness hub</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Some links are affiliate links. Wild &amp; Well may earn a commission at no extra cost to you.</p>
      </header>

      <DogProductCatalogue products={products} />
    </main>
  )
}
