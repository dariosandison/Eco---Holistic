import Link from 'next/link'

export default function MoneyPageTrustBlock() {
  return (
    <section className="mt-10">
      <div className="card">
        <h2 className="text-lg font-semibold">How Wild & Well makes these shortlists</h2>
        <p className="mt-2 text-sm text-zinc-700 max-w-3xl">
          We focus on the boring stuff that drives outcomes: sizing, noise, filter costs, and what actually fixes the problem.
        </p>

        <ul className="mt-4 grid gap-3 md:grid-cols-3 text-sm text-zinc-700">
          <li><strong>Buyer-friendly:</strong> small sets, clear trade-offs, and what to skip.</li>
          <li><strong>Cost-aware:</strong> filter/replacement costs are treated as part of the price.</li>
          <li><strong>UK-first:</strong> availability, voltage, and typical UK homes (flats, damp winters, etc.).</li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-secondary" href="/how-we-test">How we test</Link>
          <Link className="btn-secondary" href="/editorial-policy">Editorial policy</Link>
          <Link className="btn-secondary" href="/affiliate-disclosure">Affiliate disclosure</Link>
        </div>
      </div>
    </section>
  )
}
