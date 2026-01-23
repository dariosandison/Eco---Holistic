export default function RecommendedPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Our Trusted Wellness Picks</h1>
      <p className="mb-4">
        These are our most trusted low-tox and holistic wellness recommendations.
        We research ingredients, sourcing, and real-world use before suggesting anything.
      
</p>

<div className="rounded-2xl border bg-white p-5 shadow-sm mb-10">
  <h2 className="text-xl font-semibold mb-2">How to use this page</h2>
  <ul className="list-disc pl-6 text-zinc-700 space-y-1">
    <li><strong>New to low-tox?</strong> Start with the “Best overall” choices first.</li>
    <li><strong>Sensitive household?</strong> Prioritise fragrance-free / low-VOC options where possible.</li>
    <li><strong>On a budget?</strong> Choose the simplest option that meets your core need — don’t overbuy.</li>
  </ul>
  <p className="mt-3 text-sm text-zinc-600">
    Want it in one email? <a className="underline" href="/shopping-list">Get the free shopping list →</a>
  </p>
</div>

<p className="mb-8">

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Best Low-Tox Home Picks</h2>
          <p className="text-sm text-zinc-600 mt-1">Best for: improving air + water quality without overcomplicating your routine.</p>
          <p>Our favourite air, water, and cleaning upgrades.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Natural Sleep Support</h2>
          <p className="text-sm text-zinc-600 mt-1">Best for: busy people who want deeper sleep with simple upgrades.</p>
          <p>Tools and supplements that support deeper rest.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Everyday Wellness Essentials</h2>
          <p className="text-sm text-zinc-600 mt-1">Best for: beginners building a low-tox baseline on a realistic budget.</p>
          <p>Simple swaps that make the biggest difference.</p>
        </div>
      </section>

      
<section className="mt-12">
  <h2 className="text-2xl font-semibold mb-3">Trending guides</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li><a className="underline" href="/guides/water-filter-buying-guide-uk">Water filters (UK) – buyer’s guide</a></li>
    <li><a className="underline" href="/guides/healthy-air-at-home">Healthy air at home</a></li>
    <li><a className="underline" href="/guides/winter-humidity-guide">Winter humidity – what to do & what to buy</a></li>
    <li><a className="underline" href="/guides/non-toxic-mattress-and-bedding-guide">Non-toxic mattress & bedding</a></li>
    <li><a className="underline" href="/guides/non-toxic-cleaning-starter">Non-toxic cleaning starter</a></li>
  </ul>
</section>

      
<section id="starter" className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
  <h2 className="text-2xl font-semibold mb-2">Starter list</h2>
  <p className="text-zinc-700 mb-4">
    If you’re new, this is the simplest place to begin. For the full version, get the free shopping list.
  </p>
  <a className="btn-primary inline-block" href="/shopping-list">Get the free shopping list</a>
</section>

      <p className="mt-12 text-sm text-gray-500">
        Some links may earn us a small commission at no extra cost to you.
      </p>
    </main>
  );
}
