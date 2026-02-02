import Link from "next/link";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  title: "The Holistic Home Reset",
  description:
    "A calm 30‑day plan to improve your home environment, sleep, and nutrition foundations — with a simple weekly rhythm.",
};

export default function Page() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "The Holistic Home Reset",
    description:
      "A calm 30‑day plan covering low‑tox essentials, sleep & stress basics, and nutrition foundations — with weekly checklists.",
    brand: {
      "@type": "Brand",
      name: "Wild & Well",
    },
    category: "Digital wellness guide",
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: "29.00",
      availability: "https://schema.org/PreOrder",
      url: "https://www.wild-and-well.store/products/holistic-home-reset",
    },
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <StructuredData data={productJsonLd} />
      <header className="max-w-3xl">
        <p className="text-xs text-zinc-500">Digital guide • 30 days • PDF + checklists</p>
        <h1 className="mt-2 text-4xl font-bold">The Holistic Home Reset</h1>
        <p className="mt-3 text-zinc-700">
          A calm step-by-step plan for people who want to feel better at home — without turning wellness into a second job.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link className="btn-primary" href="/shopping-list" data-track="product-waitlist-primary">
            Get early access (free list)
          </Link>
          <Link className="btn-secondary" href="/topics">
            See recommended favourites
          </Link>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Pricing planned: <strong>£29</strong>. We’ll email the launch link to the free list.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6 shadow-sm md:col-span-2">
          <h2 className="text-2xl font-semibold">What you’ll get</h2>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700 list-disc pl-6">
            <li><strong>Week-by-week checklist</strong> (what to do first, what to skip, and what actually matters)</li>
            <li><strong>Low-tox starter swaps</strong> focused on irritation triggers and high-contact categories</li>
            <li><strong>Sleep environment setup</strong> (light, temperature, bedding, air)</li>
            <li><strong>Nutrition foundations</strong> with a simple shopping framework (food-first, not trends)</li>
            <li><strong>Maintenance plan</strong> so changes stick after day 30</li>
          </ul>

          <div className="mt-8 rounded-xl border p-5">
            <h3 className="text-xl font-semibold">Who it’s for</h3>
            <p className="mt-2 text-sm text-zinc-700">
              You want practical changes that improve comfort and energy — but you don’t want extreme rules, panic-buying,
              or 20 new supplements.
            </p>
            <h3 className="mt-5 text-xl font-semibold">Who should skip it</h3>
            <p className="mt-2 text-sm text-zinc-700">
              If you’re looking for “instant detox”, miracle cures, or highly restrictive diet plans, this won’t be a fit.
            </p>
          </div>
        </div>

        <aside className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Start today (free)</h2>
          <p className="mt-2 text-sm text-zinc-700">
            While the guide is in pre-launch, use these free starting points:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-700">
            <li>
              <Link className="underline" href="/favourites#start-here">Trusted Favourites: start here</Link>
            </li>
            <li>
              <Link className="underline" href="/blog/sleep-naturally-simple-guide">Sleep cornerstone guide</Link>
            </li>
            <li>
              <Link className="underline" href="/best-low-tox-products-for-beginners">Low-tox starter swaps</Link>
            </li>
          </ul>
          <div className="mt-5">
            <Link className="btn-primary w-full justify-center" href="/shopping-list" data-track="product-waitlist-aside">
              Join the free list
            </Link>
          </div>
          <p className="mt-4 text-xs text-zinc-500">Last updated: January 25, 2026</p>
        </aside>
      </section>

      <section className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Is this medical advice?</h3>
            <p className="mt-2 text-sm text-zinc-700">
              No — it’s educational guidance. Always check with a qualified professional for medical concerns.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Will this work in the UK?</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Yes — the plan is UK-friendly and focuses on categories and decision rules, not only US brands.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">What format is it?</h3>
            <p className="mt-2 text-sm text-zinc-700">
              A PDF guide with weekly checklists (plus a simple tracking sheet).
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">When does it launch?</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Soon — join the free list and we’ll email launch access and any early discounts.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Ready for early access?</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Join the free list. You’ll get launch access and the weekly favourites round-up.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link className="btn-primary" href="/shopping-list" data-track="product-waitlist-footer">
              Join the free list
            </Link>
            <Link className="btn-secondary" href="/products">
              View all products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
