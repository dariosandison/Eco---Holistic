import Link from "next/link";

export const metadata = {
  title: "Digital Products | Wild & Well",
  description:
    "Simple, practical resources designed to help you build sustainable routines.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">Digital Products</h1>
        <p className="mt-3 text-zinc-700">
          Calm, step-by-step routines you can follow without overthinking. Built from the same approach as our free Wellness Insights and Favourites.
        </p>
      </header>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Link href="/products/holistic-home-reset" className="card hover:shadow-sm transition-shadow">
          <h2 className="text-2xl font-semibold">The Holistic Home Reset</h2>
          <p className="mt-2 text-sm text-zinc-600">
            A 30‑day plan covering low‑tox essentials, sleep &amp; stress basics, and nutrition foundations — with weekly checklists.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">30 days</span>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">PDF + checklists</span>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">UK-friendly</span>
          </div>
        </Link>
      </section>

      <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Want early access?</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Join the free list and we’ll email you when new resources go live (and when we run discounts).
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/shopping-list" data-track="productlist-newsletter">
            Join the free list
          </Link>
          <Link className="btn-secondary" href="/favourites">
            Browse favourites
          </Link>
        </div>
        <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
      </section>
    </main>
  );
}
