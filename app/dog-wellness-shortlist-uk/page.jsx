import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import StructuredData from '@/components/StructuredData'
import { AWIN_PICKS } from '@/data/awinPicks'
import { SITE_URL } from '@/lib/site'

export const metadata = {
  title: 'Dog Wellness & Pet-Allergy Shortlist UK',
  description: 'A careful UK shortlist for healthier homes with dogs, currently focused on pet-dander air filtration while dog-food and wellness partners are assessed.',
}

export default function Page() {
  const purifier = AWIN_PICKS.air.find((item) => item.group === 'Air purifiers' && !/lamp/i.test(item.product))
  const filters = AWIN_PICKS.air.filter((item) => item.group === 'Filters & replacements').slice(0, 4)
  const list = [purifier, ...filters].filter(Boolean)
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dog wellness and pet-allergy shortlist UK',
    itemListElement: list.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.product,
      url: `${SITE_URL}/dog-wellness-shortlist-uk#${item.clickref}`,
    })),
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={itemList} />
      <header className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">Maintained UK shortlist</p>
        <h1 className="mt-2 text-4xl font-bold">Dog wellness &amp; healthier-home shortlist</h1>
        <p className="mt-4 text-lg text-zinc-700">This first release starts where Wild &amp; Well already has an approved, relevant partner: reducing airborne pet allergens in the home. Food, supplement, hydration and activity products will be added only after the relevant programmes are approved and assessed.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/blog/air-purifier-pet-dander-uk" className="btn-primary">Read the allergy guide first</Link>
          <Link href="/dog-product-catalogue" className="btn-secondary">Search all current products</Link>
          <Link href="/dogs/editorial-policy" className="btn-secondary">Dog editorial policy</Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Partner links may earn Wild &amp; Well a commission at no extra cost to you. Check room size, current specifications and replacement-filter availability before buying.</p>
      </header>

      <section className="mt-10 panel max-w-4xl">
        <h2 className="text-xl font-semibold">Do the no-spend work first</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
          <li>Keep the dog out of the bedroom when that is the main exposure space.</li>
          <li>Wash pet bedding and clean settled dust and soft furnishings regularly.</li>
          <li>Choose one room and size any purifier to that room.</li>
          <li>Remember that filtration supports exposure reduction; it does not treat an allergy.</li>
        </ul>
      </section>

      <section className="mt-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Current approved options</h2>
          <p className="mt-2 text-zinc-700">One suitable purifier route plus compatible replacement filters. We deliberately avoid padding this page with unrelated products.</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {list.map((item) => (
            <div id={item.clickref} key={item.clickref} className="scroll-mt-28">
              <ProductPick
                title={item.product}
                badge={item.group === 'Air purifiers' ? 'Airborne dander' : 'Ongoing maintenance'}
                description={item.group === 'Air purifiers'
                  ? 'An approved partner route to assess for a correctly sized room where airborne pet allergen exposure is the concern.'
                  : 'A replacement-filter option. Confirm compatibility with the exact appliance model before ordering.'}
                bullets={item.bullets}
                trackingContext={`dog_shortlist_${item.clickref}`}
                links={[
                  { label: `Check ${item.advertiser} price`, merchant: 'awin', href: item.awin, variant: 'primary' },
                  { label: 'Read the evidence guide', merchant: 'internal', href: '/blog/air-purifier-pet-dander-uk', variant: 'ghost' },
                ]}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6">
        <h2 className="text-xl font-semibold">Categories under assessment</h2>
        <p className="mt-2 text-sm text-zinc-700">Complete dog food, joint and digestion supplements, activity trackers, filtered fountains, washable beds and sustainable accessories. No merchant is presented as recommended until its programme and products have been checked.</p>
      </section>
    </main>
  )
}
