import Link from 'next/link'

export const metadata = {
  title: 'Product Disclosure — Wild & Well',
  description: 'How Wild & Well handles gifted products, sponsorships, and material relationships.',
}

export default function ProductDisclosure() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Product disclosure</h1>
      <p className="mt-3 text-zinc-700">
        Transparency matters. This page explains how we handle gifted items, sponsorships, and any material connections.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Gifted products</h2>
        <p className="mt-3 text-zinc-700">
          If we receive an item for free (or at a discount), we disclose that fact on the page where it’s mentioned.
          Receiving an item does <strong>not</strong> guarantee a positive recommendation.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Sponsorships and paid work</h2>
        <p className="mt-3 text-zinc-700">
          We do not accept paid placements in reviews or Favourites pages. If we ever publish sponsored content, it will be clearly labelled.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Affiliate links</h2>
        <p className="mt-3 text-zinc-700">
          Some links may be affiliate links (often Amazon). If you buy through them, we may earn a small commission at no extra cost to you.
          Read more: <Link className="underline" href="/affiliate-disclosure">Affiliate disclosure</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">How we keep recommendations independent</h2>
        <ul className="mt-3 list-disc pl-6 text-zinc-700 space-y-2">
          <li>We choose products first, then add links second.</li>
          <li>We prefer items with transparent specs and reasonable replacement costs.</li>
          <li>We update pages as products change or better options appear.</li>
        </ul>
        <p className="mt-3 text-zinc-700">
          For the full process, see <Link className="underline" href="/how-we-test">How we test</Link> and our <Link className="underline" href="/editorial-policy">Editorial policy</Link>.
        </p>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Last updated: January 25, 2026</p>
    </main>
  )
}
