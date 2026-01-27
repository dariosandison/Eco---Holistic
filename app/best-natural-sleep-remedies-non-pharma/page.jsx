import Link from "next/link";

export const metadata = {
  title: "Best Natural Sleep Remedies (Non-Pharmaceutical) | Wild & Well",
  description: "Natural sleep remedies that support rest without reliance on medication.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Best Natural Sleep Remedies (Non-Pharmaceutical)</h1>
        <p className="text-zinc-700">Natural sleep remedies that support rest without reliance on medication.</p>
        <p className="text-xs text-zinc-500 mt-2">Last updated: January 24, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">At a glance</h2>
        <p className="text-zinc-700">Sleep foundations matter more than supplements alone.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">What to look for</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Sleep routine consistency</li>
          <li>Herbal teas</li>
          <li>Magnesium forms</li>
          <li>Light exposure management</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Best options (summary)</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Best overall: Magnesium glycinate</li>
          <li>Best budget: Chamomile tea</li>
          <li>Sensitive users: Very low-dose support</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">How to start simply</h2>
        <p className="text-zinc-700">
          Start with one addition or swap at a time. Consistency matters more than perfection.
        </p>
        <Link href="/best-of" className="btn-primary mt-4 inline-block">
          View natural sleep picks
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
    
      <div className="mt-6 rounded-2xl border bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">Start with the basics</h2>
        <p className="mt-2 text-sm text-zinc-700">If you want a calm, step-by-step plan (no hacks), start with our cornerstone sleep guide.</p>
        <a className="btn-secondary mt-3 inline-flex" href="/guides/sleep-naturally-without-overwhelm">Read the cornerstone sleep guide</a>
      </div>

</main>
  );
}
