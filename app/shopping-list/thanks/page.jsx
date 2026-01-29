import TrackedLink from "@/components/TrackedLink";
import TrackOnLoad from "@/components/TrackOnLoad";

export const metadata = {
  title: "Subscribed | Wild & Well",
  description: "Thanks for subscribing. Use these links to explore the site: Sleep, Water, Air, Cleaning, Nutrition, and Movement.",
};

function Card({ title, desc, href, label }) {
  return (
    <TrackedLink
      href={href}
      event="lead_next_step"
      data={{ source: "shopping_list_thanks", destination: href, label: label || title }}
      className="card hover:shadow-sm transition-shadow"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-700">{desc}</p>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </TrackedLink>
  );
}

export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <TrackOnLoad event="newsletter_subscribed" data={{ source: "shopping-list" }} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">You’re subscribed</h1>
        <p className="mt-3 text-zinc-700">
          Thanks — you’re on the list. If you don’t see the email, check promotions/spam.
          In the meantime, here are the best places to browse next (no hype, just clear info).
        </p>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 27, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Browse by category</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          These hub pages explain what matters, what to look for, and link to deeper explainers and “favourites” shortlists when you want them.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Sleep" desc="Sleep basics + product options (only where they genuinely help)." href="/topics/sleep" />
          <Card title="Water" desc="UK-friendly filter types, trade-offs, and recommended options." href="/topics/water" />
          <Card title="Air quality" desc="Allergies, damp, ventilation, and air purifier guidance." href="/topics/air-quality" />
          <Card title="Cleaning (fragrance-free)" desc="Low-tox swaps for laundry and cleaning without overhauling everything." href="/topics/fragrance-free" />
          <Card title="Nutrition" desc="Organic and single-ingredient foods, labels, and sensible upgrades." href="/nutrition" />
          <Card title="Movement" desc="Simple training + gear that isn’t gimmicky (trackers, bands, shoes, routines)." href="/movement" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Popular favourites pages</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          If you’re comparing products, these pages are built to be straightforward — what to look for, what to avoid, and a short shortlist.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card title="Best water filters (UK)" desc="Jugs vs under-sink vs countertop: clear trade-offs." href="/best-water-filters-uk" />
          <Card title="Best air purifiers for allergies (UK)" desc="Room size guidance + a shortlist that makes sense." href="/best-air-purifiers-allergies-uk" />
          <Card title="Best fragrance-free laundry detergents (UK)" desc="Sensitive-home options, with ingredients to avoid." href="/best-fragrance-free-laundry-detergents-uk" />
        </div>

        <div className="mt-6">
          <TrackedLink
            href="/favourites"
            event="lead_next_step"
            data={{ source: "shopping_list_thanks", destination: "/favourites", label: "Browse all favourites" }}
            className="btn-secondary"
          >
            Browse all favourites
          </TrackedLink>
        </div>
      </section>

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">
        Some links may earn us a small commission at no extra cost to you. We use that to keep the site running and keep the content free.
      </p>
    </main>
  );
}
