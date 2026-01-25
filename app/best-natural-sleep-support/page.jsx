import Link from "next/link";

export const metadata = {
  title: "Best Natural Sleep Support (Compared) | Wild & Well",
  description: "Best Natural Sleep Support (Compared) — calm, practical recommendations and what to look for before you buy.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Best Natural Sleep Support (Compared)</h1>
      <p className="text-zinc-700 mb-8">
        This page is designed for buying clarity: what matters, what to skip, and where to start if you’re new.
      </p>

      <div className="rounded-2xl border bg-white p-6 shadow-sm mb-10">
        <h2 className="text-xl font-semibold mb-2">Quick answer</h2>
        <p className="text-zinc-700">
          If you only choose one option, start with our <Link className="underline" href="/recommended">Trusted Picks</Link> and pick the “Best overall”
          choice for your needs.
        </p>
        <p className="mt-3 text-sm text-zinc-600">
          Want it emailed? <Link className="underline" href="/shopping-list">Get the free shopping list →</Link>
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-3">Comparison (starter)</h2>
      <div className="overflow-x-auto rounded-2xl border bg-white">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3 text-left">What you want</th>
              <th className="px-4 py-3 text-left">Our pick type</th>
              <th className="px-4 py-3 text-left">Why</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3">Best overall</td>
              <td className="px-4 py-3">A well-reviewed option with transparent specs</td>
              <td className="px-4 py-3">Most people want the simplest reliable choice</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3">Best budget</td>
              <td className="px-4 py-3">Simple essentials</td>
              <td className="px-4 py-3">Avoid paying for features you won’t use</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Best for sensitive households</td>
              <td className="px-4 py-3">Low fragrance / low-VOC / fewer additives</td>
              <td className="px-4 py-3">Comfort + consistency matters more than perfection</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-10">
        For deeper context, read the related guide: <Link className="underline" href="/guides/non-toxic-mattress-and-bedding-guide">start here →</Link>
      </p>

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
