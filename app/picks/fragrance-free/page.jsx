import Link from 'next/link'
import ProductPick from '@/components/mdx/ProductPick'
import { amazonSearchUrl } from '@/lib/amazon'

export const metadata = {
  title: 'Fragrance-Free Picks — Wild & Well',
  description: 'Fragrance-free + sensitive-skin friendly cleaning and laundry picks for UK homes.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Fragrance-Free Cleaning &amp; Laundry</h1>
        <p className="mt-3 text-zinc-700">
          If you’re sensitive to scent, start by removing fragrance from high-contact products first (laundry, dish, body).
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/guides/non-toxic-cleaning-starter">Cleaning starter guide</Link>
          <Link className="btn-secondary" href="/best-fragrance-free-laundry-detergents-uk">Best fragrance-free detergents</Link>
        </div>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-semibold">Start here</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>Switch laundry detergent first (it touches your skin all day).</li>
            <li>Then dish soap + hand soap.</li>
            <li>Only then: sprays and cleaners.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Avoid</h2>
          <ul className="mt-3 list-disc pl-6 text-sm text-zinc-700 space-y-2">
            <li>“Natural” products with lots of essential oils (still fragrance).</li>
            <li>Overdosing detergent (residue can irritate).</li>
            <li>Masking smells rather than removing the source.</li>
          </ul>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Quick win</h2>
          <p className="mt-3 text-sm text-zinc-700">
            Wash towels and bedding with fragrance-free detergent + an extra rinse. It’s a comfort win for many people.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Shortlist (search links)</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ProductPick
            title="Ecover ZERO laundry liquid (fragrance-free)"
            badge="Allergy UK approved"
            description="Fragrance-free and designed for sensitive skin."
            href={amazonSearchUrl('Ecover ZERO laundry liquid fragrance free')}
            bullets={['Fragrance-free', 'Good mainstream availability', 'Consider refills to cut plastic']}
          />
          <ProductPick
            title="Surcare non-bio laundry liquid (0% fragrance)"
            badge="Sensitive"
            description="A popular sensitive-skin option in UK supermarkets."
            href={amazonSearchUrl('Surcare sensitive non bio laundry liquid 0% fragrance')}
            bullets={['0% fragrance/dyes/enzymes', 'Great for bedding and towels']}
          />
          <ProductPick
            title="Bio-D laundry liquid (fragrance-free)"
            badge="Refill-friendly"
            description="A good option if you want larger refills."
            href={amazonSearchUrl('Bio-D fragrance free laundry liquid')}
            bullets={['Fragrance-free', 'Often available in bigger bottles/refills']}
          />
          <ProductPick
            title="White vinegar (laundry rinse helper)"
            badge="Budget"
            description="Often used to reduce musty smells (use sparingly and avoid with delicate fabrics)."
            href={amazonSearchUrl('white vinegar cleaning 5L')}
            bullets={['Cheap', 'Use as an occasional helper, not a perfume substitute']}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/best-fragrance-free-laundry-detergents-uk">See the full detergent guide →</Link>
          <Link className="btn-secondary" href="/guides/eco-laundry">Laundry guide</Link>
        </div>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Some links may earn us a commission.</p>
    </main>
  )
}
