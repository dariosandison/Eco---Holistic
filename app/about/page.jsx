import Link from 'next/link'

export const metadata = {
  title: 'About | Wild & Well',
  description: 'Evidence-informed wellness guidance with UK-friendly recommendations.',
}

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">About Wild &amp; Well</h1>
      <p className="mt-3 text-zinc-700">
        Wild &amp; Well is a practical wellness site for people who want better health without gimmicks or miracle claims.
        We focus on what matters in modern life — food quality, sleep, movement, and the home environment — and translate it into
        clear steps and sensible product choices.
      </p>

      <div className="mt-10 grid gap-6">
        <section className="rounded-3xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">What you&apos;ll find here</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700 space-y-2">
            <li>
              <strong>Wellness Insights</strong>: informative articles that explain the issue, where it shows up today, and what to do next.
            </li>
            <li>
              <strong>Favourites</strong>: shortlists and comparisons with clear trade-offs (so you can choose without overwhelm).
            </li>
            <li>
              <strong>Deals</strong>: a small, curated list of discounts on products we already cover — updated regularly.
            </li>
          </ul>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">How we research &amp; choose</h2>
          <p className="mt-2 text-sm text-zinc-700">
            We use a consistent set of criteria: safety basics, materials and ingredients, durability, ease of use,
            cost of ownership (including refills/filters), and whether a product fits real households and routines.
            Where possible, we prioritise reputable brands with clear specs, independent testing, and transparent documentation.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/how-we-test" className="text-sm font-medium text-zinc-800 hover:underline">How we test</Link>
            <Link href="/editorial-policy" className="text-sm font-medium text-zinc-800 hover:underline">Editorial policy</Link>
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">How we make money</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Some links are affiliate links (for example, Amazon). If you buy through them, we may earn a commission at no extra cost to you.
            We use that revenue to keep the site running and to publish more research and guides.
          </p>
          <div className="mt-4">
            <Link href="/affiliate-disclosure" className="text-sm font-medium text-zinc-800 hover:underline">
              Affiliate disclosure
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">Corrections &amp; updates</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Products change. Prices change. Research evolves. We revise guidance when we find better information.
            If you spot something that looks wrong or outdated, let us know and we&apos;ll review it.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="text-sm font-medium text-zinc-800 hover:underline">Contact us</Link>
          </div>
        </section>
      </div>
    </div>
  )
}
