export default function RecommendedPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Our Trusted Wellness Picks</h1>
      <p className="mb-8">
        These are our most trusted low‑tox and holistic wellness recommendations.
        We research ingredients, sourcing, and real‑world use before suggesting anything.
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Best Low‑Tox Home Picks</h2>
          <p>Our favourite air, water, and cleaning upgrades.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Natural Sleep Support</h2>
          <p>Tools and supplements that support deeper rest.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Everyday Wellness Essentials</h2>
          <p>Simple swaps that make the biggest difference.</p>
        </div>
      </section>

      <p className="mt-12 text-sm text-gray-500">
        Some links may earn us a small commission at no extra cost to you.
      </p>
    </main>
  );
}