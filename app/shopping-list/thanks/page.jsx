import Link from "next/link";

export const metadata = {
  title: "You're in! | Wild & Well",
  description: "Thanks for subscribing. Here are the best next steps for low-tox living and trusted picks.",
};

export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">You’re in 🎉</h1>
      <p className="text-zinc-700 mb-8">
        Thanks for subscribing. Your shopping list should arrive shortly (check promotions/spam if you don’t see it).
        Here are the best next steps while you wait.
      </p>

      <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-3">
        <h2 className="text-2xl font-semibold">Start here</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>
            <Link className="underline" href="/picks">Browse Picks hubs</Link> (fastest route to a good choice)
          </li>
          <li>
            <Link className="underline" href="/best-low-tox-products-for-beginners">Best low‑tox products for beginners</Link>
          </li>
          <li>
            <Link className="underline" href="/guides/non-toxic-cleaning-starter">Non‑toxic cleaning starter</Link> (easy first swap)
          </li>
        </ul>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-3">Choose your first category</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link className="btn-secondary text-center" href="/guides/healthy-air-at-home">Air</Link>
          <Link className="btn-secondary text-center" href="/guides/water-filter-buying-guide-uk">Water</Link>
          <Link className="btn-secondary text-center" href="/guides/non-toxic-cleaning-starter">Cleaning</Link>
          <Link className="btn-secondary text-center" href="/guides/non-toxic-mattress-and-bedding-guide">Sleep</Link>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500">
        Some links may earn us a small commission at no extra cost to you. We only recommend products we genuinely trust.
      </p>
    </main>
  );
}
