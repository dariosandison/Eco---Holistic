import Link from "next/link";

export const metadata = {
  title: "Best Herbal Remedies for Stress & Anxiety | Wild & Well",
  description: "A calm, evidence-informed guide to herbal remedies traditionally used for stress and anxiety — without exaggerated claims.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Best Herbal Remedies for Stress & Anxiety</h1>
        <p className="text-zinc-700">A calm, evidence-informed guide to herbal remedies traditionally used for stress and anxiety</p>
        <p className="text-xs text-zinc-500 mt-2">Last updated: January 24, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Quick answer</h2>
        <p className="text-zinc-700">For many people, gentle herbs like lemon balm, chamomile, and ashwagandha can support relaxation when used consistently.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">What to look for</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Single-ingredient herbs</li>
          <li>Transparent sourcing</li>
          <li>Appropriate dosage forms</li>
          <li>Avoid blending too many herbs at once</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Best options (summary)</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Best overall: Single-herb teas or tinctures</li>
          <li>Best budget: Loose-leaf calming teas</li>
          <li>Sensitive users: Start with chamomile or lemon balm</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">How to start simply</h2>
        <p className="text-zinc-700">
          Start with one addition or swap at a time. Consistency matters more than perfection.
        </p>
        <Link href="/recommended" className="btn-primary mt-4 inline-block">
          Explore trusted herbal picks
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
