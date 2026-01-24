import Link from "next/link";

export const metadata = {
  title: "Best Air Purifiers for Small Flats (UK) | Wild & Well",
  description:
    "A practical guide to choosing the best air purifiers for small flats and apartments in the UK — without overbuying.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Best Air Purifiers for Small Flats (UK)</h1>
        <p className="text-zinc-700">
          If you live in a flat or small apartment, air purifiers need to be chosen carefully.
          Bigger isn’t better — the right size and filter matter more.
        </p>
        <p className="text-xs text-zinc-500 mt-2">Last updated: January 24, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Quick answer</h2>
        <p className="text-zinc-700">
          For most small UK flats, a true HEPA purifier rated for rooms up to 25–35 m² is ideal.
          Avoid ionisers and oversized units that waste energy and space.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">What to look for</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>True HEPA (H13 if possible)</li>
          <li>Low noise on night mode</li>
          <li>Simple filter replacement</li>
          <li>No ionisation or ozone features</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Best picks (summary)</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li><strong>Best overall:</strong> Compact HEPA purifier for bedrooms & living areas</li>
          <li><strong>Best budget:</strong> Smaller unit for single rooms</li>
          <li><strong>Sensitive households:</strong> Low-noise, low-ozone designs only</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">Where to buy</h2>
        <p className="text-zinc-700">
          For trusted options and up-to-date recommendations, see our curated picks:
        </p>
        <Link href="/recommended" className="btn-primary mt-4 inline-block">
          Shop trusted air picks
        </Link>
      </section>

      <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">New to low-tox living?</h2>
        <p className="text-zinc-700 mb-3">
          Start with one change. Our free shopping list shows the easiest swaps.
        </p>
        <Link href="/shopping-list" className="btn-secondary">
          Get the free shopping list
        </Link>
      </section>
    </main>
  );
}