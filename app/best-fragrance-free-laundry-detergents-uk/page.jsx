import Link from "next/link";

export const metadata = {
  title: "Best Fragrance-Free Laundry Detergents (UK) | Wild & Well",
  description: "Fragrance-free laundry detergent picks for sensitive skin — plus what to avoid and how to get clothes truly clean without strong scents.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Best Fragrance-Free Laundry Detergents (UK)</h1>
        <p className="text-zinc-700">Fragrance-free laundry detergent picks for sensitive skin</p>
        <p className="text-xs text-zinc-500 mt-2">Last updated: January 24, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Quick answer</h2>
        <p className="text-zinc-700">For most people, the best fragrance-free detergents are the ones with simple formulas, clear labelling, and strong cleaning performance at normal temperatures.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">What to look for</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Truly fragrance-free (not ‘unscented’ with masking agents)</li>
          <li>Works well at 30°C (common UK wash temperature)</li>
          <li>Clear dosing guidance (overdosing leaves residue)</li>
          <li>Avoid optical brighteners if you’re very sensitive</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Best picks (summary)</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li><strong>Best overall:</strong> Reliable fragrance-free everyday detergent</li>
          <li><strong>Best budget:</strong> Concentrated formula (lower cost per wash)</li>
          <li><strong>Sensitive households:</strong> Minimal additives + extra rinse if needed</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Where to buy</h2>
        <p className="text-zinc-700">We keep our recommendations up to date on our picks hub.</p>
        <Link href="/recommended" className="btn-primary mt-4 inline-block" data-track="affiliate-primary">
          Shop trusted cleaning picks
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
