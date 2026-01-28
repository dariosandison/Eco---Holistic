import Link from "next/link";

export const metadata = {
  title: "Best Humidifiers for Bedrooms (UK) | Wild & Well",
  description: "Bedroom humidifier guidance for dry winter air — how to pick the right size, avoid mould risk, and use a hygrometer.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Best Humidifiers for Bedrooms (UK)</h1>
        <p className="text-zinc-700">Bedroom humidifier guidance for dry winter air</p>
        <p className="text-xs text-zinc-500 mt-2">Last updated: January 24, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">At a glance</h2>
        <p className="text-zinc-700">A humidifier helps most when you measure humidity first. Aim for a comfortable mid-range, and don’t push humidity high (that can increase mould risk).</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">What to look for</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Use a hygrometer first (don’t guess)</li>
          <li>Choose easy-to-clean designs (hygiene matters)</li>
          <li>Quiet operation for sleep</li>
          <li>Avoid over-humidifying small rooms</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Shortlist (summary)</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li><strong>Best overall:</strong> Quiet, easy-clean humidifier + hygrometer</li>
          <li><strong>Best budget:</strong> Small unit for single rooms</li>
          <li><strong>Sensitive households:</strong> Prioritise hygiene + simple operation</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Where to buy</h2>
        <p className="text-zinc-700">We keep our recommendations up to date on our topics hub.</p>
        <Link href="/topics" className="btn-primary mt-4 inline-block" data-track="affiliate-primary">
          Browse humidifier favourites
        </Link>
      </section>

      <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">New to low-tox living?</h2>
        <p className="text-zinc-700 mb-3">
          Start with one change. Our free shopping list shows the easiest swaps.
        </p>
        <Link href="/shopping-list" className="btn-secondary" data-track="newsletter-cta">
          Get the free shopping list
        </Link>
      </section>

      <p className="mt-12 text-sm text-zinc-500">
        Some links may earn us a small commission at no extra cost to you. We only recommend products we genuinely trust.
      </p>
    </main>
  );
}
