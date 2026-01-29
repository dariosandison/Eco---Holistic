import Link from "next/link";

export const metadata = {
  title: "Affiliate Disclosure | Wild & Well",
  description:
    "Transparency matters. How Wild & Well uses affiliate links and how we choose recommendations.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Affiliate Disclosure</h1>
      <p className="text-zinc-700">
        Some links on Wild &amp; Well are affiliate links. If you click and make a purchase, we may earn a small
        commission at no extra cost to you. These commissions help keep the site running and allow us to keep creating
        free Wellness Insights.
      </p>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">How we choose recommendations</h2>
        <ul className="list-disc pl-6 text-zinc-700 space-y-1">
          <li>We prioritise practical, low-tox choices and clear product information.</li>
          <li>We avoid exaggerated claims and “miracle cure” language.</li>
          <li>We prefer transparency: materials, testing, and realistic maintenance.</li>
          <li>We keep lists short to save you time and help you choose confidently.</li>
        </ul>
        <p className="text-zinc-700">
          If you ever spot an issue or a link that’s out of date, you can contact us and we’ll review it.
        </p>
      </section>

      <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Where to start</h2>
        <p className="text-zinc-700 mb-4">
          If you want the fastest route to a good choice, start with our Favourites page.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link className="btn-primary" href="/favourites">
            Browse favourites
          </Link>
          <Link className="btn-secondary" href="/shopping-list">
            Get the free shopping list
          </Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: January 24, 2026</p>
      </section>
    </main>
  );
}
