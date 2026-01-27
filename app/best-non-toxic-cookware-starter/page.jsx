import Link from "next/link";

export const metadata = {
  title: "Best Non-Toxic Cookware (Starter Guide) | Wild & Well",
  description: "A simple, beginner-friendly non-toxic cookware shortlist — what to buy first, what to skip, and how to avoid overbuying.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Best Non-Toxic Cookware (Starter Guide)</h1>
        <p className="text-zinc-700">A simple, beginner-friendly non-toxic cookware shortlist</p>
        <p className="text-xs text-zinc-500 mt-2">Last updated: January 24, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">At a glance</h2>
        <p className="text-zinc-700">If you’re starting from scratch, buy one high-quality pan you’ll use daily (stainless steel or cast iron), then add pieces only if you genuinely need them.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">What to look for</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Choose durable materials (stainless steel, cast iron, enamelled cast iron)</li>
          <li>Avoid buying full sets unless you’ll use every piece</li>
          <li>Heat management matters more than ‘perfect’ materials</li>
          <li>Look for solid construction and comfortable handles</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Best picks (summary)</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li><strong>Best overall:</strong> One stainless steel pan + one pot</li>
          <li><strong>Best budget:</strong> Cast iron skillet (seasoned properly)</li>
          <li><strong>Sensitive households:</strong> Simple materials, fewer coatings</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Where to buy</h2>
        <p className="text-zinc-700">We keep our recommendations up to date on our picks hub.</p>
        <Link href="/best-of" className="btn-primary mt-4 inline-block" data-track="affiliate-primary">
          Shop trusted kitchen picks
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
