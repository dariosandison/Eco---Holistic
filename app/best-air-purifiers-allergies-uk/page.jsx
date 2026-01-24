import Link from "next/link";

export const metadata = {
  title: "Best Air Purifiers for Allergies (UK) | Wild & Well",
  description: "Allergy-focused air purifier guidance — what specs matter, what to avoid, and how to get results without overspending.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Best Air Purifiers for Allergies (UK)</h1>
        <p className="text-zinc-700">Allergy-focused air purifier guidance</p>
        <p className="text-xs text-zinc-500 mt-2">Last updated: January 24, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Quick answer</h2>
        <p className="text-zinc-700">For allergies, true HEPA filtration and correct room sizing matter most. Replace filters on schedule and improve airflow (especially around bedding).</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">What to look for</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>True HEPA filtration and correct room size</li>
          <li>Quiet night mode if used in bedrooms</li>
          <li>Avoid ionisers/ozone features</li>
          <li>Keep doors/windows strategy consistent</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Best picks (summary)</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li><strong>Best overall:</strong> True HEPA purifier sized to your main room</li>
          <li><strong>Best budget:</strong> Smaller unit for a bedroom only</li>
          <li><strong>Sensitive households:</strong> Low-ozone, low-noise designs</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Where to buy</h2>
        <p className="text-zinc-700">We keep our recommendations up to date on our picks hub.</p>
        <Link href="/recommended" className="btn-primary mt-4 inline-block" data-track="affiliate-primary">
          Shop trusted air picks
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
