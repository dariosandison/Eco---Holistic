import Link from 'next/link'

export const metadata = {
  title: 'Product Disclosure — Wild & Well',
  description: 'How Wild & Well handles gifted products, sponsorships, affiliate relationships and other material connections.',
}

export default function ProductDisclosure() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Product disclosure</h1>
      <p className="mt-3 text-zinc-700">
        Transparency matters. This page explains how we handle gifted items, sponsorships, affiliate relationships and other material connections.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Gifted products</h2>
        <p className="mt-3 text-zinc-700">
          If we receive an item for free or at a discount, we disclose that fact on the page where it is mentioned.
          Receiving an item does <strong>not</strong> guarantee coverage, a positive recommendation or a ranking position.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Sponsorships and paid work</h2>
        <p className="mt-3 text-zinc-700">
          We do not accept paid placements disguised as editorial recommendations or paid ranking positions in shortlist pages.
          If sponsored content is ever published, it will be clearly labelled as sponsored.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Affiliate links</h2>
        <p className="mt-3 text-zinc-700">
          Some links are affiliate links. If you buy through one, we may earn a commission at no extra cost to you.
          Affiliate availability is not the starting criterion for whether a product or topic is covered.
          Read more in our <Link className="underline" href="/affiliate-disclosure">affiliate disclosure</Link>.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">How we keep recommendations independent</h2>
        <ul className="mt-3 list-disc pl-6 text-zinc-700 space-y-2">
          <li>We start with the problem and buying criteria, not the commission.</li>
          <li>We consider no-cost and lower-cost alternatives where they are genuinely useful.</li>
          <li>We prefer products with clear specifications, credible evidence and realistic replacement or ownership costs.</li>
          <li>We remove or replace products when availability, evidence or value changes.</li>
          <li>We do not present manufacturer claims as Wild &amp; Well test results.</li>
        </ul>
        <p className="mt-3 text-zinc-700">
          For the full process, see <Link className="underline" href="/how-we-test">How we evaluate products</Link> and our <Link className="underline" href="/editorial-policy">editorial policy</Link>.
        </p>
      </section>

      <p className="mt-12 text-xs text-zinc-500">Last updated: August 28, 2026</p>
    </main>
  )
}
