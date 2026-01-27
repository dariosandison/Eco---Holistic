import Link from "next/link";

export const metadata = {
  title: "Best Organic Cooking Oils (UK) | Wild & Well",
  description: "A practical guide to choosing organic cooking oils for everyday use.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Best Organic Cooking Oils (UK)</h1>
        <p className="text-zinc-700">A practical guide to choosing organic cooking oils for everyday use.</p>
        <p className="text-xs text-zinc-500 mt-2">Last updated: January 24, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">At a glance</h2>
        <p className="text-zinc-700">Different oils suit different cooking temperatures.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">What to look for</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Smoke point awareness</li>
          <li>Cold-pressed oils</li>
          <li>Storage stability</li>
          <li>Organic certification</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Best options (summary)</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Best overall: Extra virgin olive oil</li>
          <li>Best budget: Organic rapeseed oil</li>
          <li>Sensitive users: Simple mono-unsaturated fats</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">How to start simply</h2>
        <p className="text-zinc-700">
          Start with one addition or swap at a time. Consistency matters more than perfection.
        </p>
        <Link href="/recommended" className="btn-primary mt-4 inline-block">
          View cooking oil picks
        </Link>
      </section>

      <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">New to holistic wellness?</h2>
        <p className="text-zinc-700 mb-3">
          Our free shopping list covers low-tox, nutrition basics, and gentle wellness swaps.
        </p>
        <Link href="/shopping-list" className="btn-secondary">
          Get the free shopping list
        </Link>
      </section>

      <p className="mt-12 text-sm text-zinc-500">
        Some links may earn us a small commission at no extra cost to you. We only recommend products we genuinely trust.
      </p>
    </main>
  );
}
