import Link from "next/link";

export const metadata = {
  title: "Best Shower Filters (UK Hard Water) | Wild & Well",
  description: "A practical guide to shower filters for UK hard water — what they can and can’t do, and how to choose without hype.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Best Shower Filters (UK Hard Water)</h1>
        <p className="text-zinc-700">A practical guide to shower filters for UK hard water</p>
        <p className="text-xs text-zinc-500 mt-2">Last updated: January 24, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Quick answer</h2>
        <p className="text-zinc-700">If your main issue is hard-water scale, a shower filter may help somewhat, but the biggest wins come from choosing the right filter media and replacing cartridges on schedule.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">What to look for</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>What problem you’re solving (scale vs. chlorine smell vs. skin sensitivity)</li>
          <li>Filter media and replacement cost</li>
          <li>Compatibility with your shower type</li>
          <li>Avoid unrealistic ‘removes everything’ claims</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Best picks (summary)</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li><strong>Best overall:</strong> A well-reviewed filter with clear replacement intervals</li>
          <li><strong>Best budget:</strong> Simple option with affordable refills</li>
          <li><strong>Sensitive households:</strong> Focus on irritation triggers (especially fragrance/skin sensitivity)</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Where to buy</h2>
        <p className="text-zinc-700">We keep our recommendations up to date on our picks hub.</p>
        <Link href="/recommended" className="btn-primary mt-4 inline-block" data-track="affiliate-primary">
          Shop trusted water & bathroom picks
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
