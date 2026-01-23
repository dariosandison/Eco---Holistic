import Link from "next/link";

export const metadata = {
  title: "Free Low‑Tox Shopping List | Wild & Well",
  description:
    "Download our simple low‑tox shopping list: trusted swaps for air, water, cleaning, and everyday wellness.",
};

export default function ShoppingListPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Free: Low‑Tox Shopping List</h1>
      <p className="text-zinc-700 mb-8">
        A calm, beginner-friendly shortcut to healthier choices — without overwhelm. Get our trusted swaps for
        <strong> air</strong>, <strong>water</strong>, <strong>cleaning</strong>, and <strong>everyday wellness</strong>.
      </p>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Get the list</h2>
        <p className="text-sm text-zinc-600 mb-4">
          Enter your email and we’ll send the list. (No spam — unsubscribe anytime.)
        </p>

        <form
          className="flex flex-col sm:flex-row gap-2"
          action={process.env.NEXT_PUBLIC_NEWSLETTER_ACTION || "#"}
          method="post"
          target="_blank"
          rel="noopener"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full rounded-xl border px-3 py-2"
          />
          <button type="submit" className="btn-primary">
            Send me the list
          </button>
        </form>

        <p className="mt-3 text-xs text-zinc-600">
          Prefer to browse now? Start with our <Link className="underline" href="/recommended">Trusted Picks</Link>.
        </p>
      </div>

      <section className="mt-12 space-y-3">
        <h2 className="text-2xl font-semibold">What’s inside</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>Air: purifiers, filters, humidity basics</li>
          <li>Water: UK-friendly filter considerations</li>
          <li>Cleaning: fragrance-free starter swaps</li>
          <li>Sleep: simple upgrades that make a difference</li>
        </ul>
      </section>

      <p className="mt-12 text-sm text-zinc-500">
        Some links on Wild & Well may earn us a small commission at no extra cost to you. We only recommend products we
        genuinely trust.
      </p>
    </main>
  );
}
