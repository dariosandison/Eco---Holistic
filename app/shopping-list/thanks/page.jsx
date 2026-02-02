import TrackedLink from "@/components/TrackedLink";
import TrackOnLoad from "@/components/TrackOnLoad";

export const metadata = {
  title: "Subscribed | Wild & Well",
  description: "Thanks for subscribing. Use these links to explore the site: Sleep, Water, Air, Cleaning, Nutrition, and Movement.",
};

function Card({ title, desc, href, label, image }) {
  return (
    <TrackedLink
      href={href}
      event="lead_next_step"
      data={{ source: "shopping_list_thanks", destination: href, label: label || title }}
      className="card hover:shadow-sm transition-shadow"
    >
      <div className="mt-4 h-12 w-12 overflow-hidden rounded-xl bg-zinc-100">
        <img src={image || '/images/cards/neutral.svg'} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-700">{desc}</p>
      <p className="mt-3 text-xs text-zinc-500">Open →</p>
    </TrackedLink>
  );
}

export default function ThanksPage({ searchParams }) {
  const source = searchParams?.source || "site";
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <TrackOnLoad event="sign_up" data={{ method: "email", placement: source }} />
      <TrackOnLoad event="newsletter_subscribed" data={{ source }} />

      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold">You’re subscribed</h1>
        <p className="mt-3 text-zinc-700">
          Thanks — you’re on the list. If you don’t see the email, check promotions/spam.
          In the meantime, here are the best places to browse next.
        </p>
        <div className="mt-5 rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Start in 2 minutes</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Pick one area for this week.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <TrackedLink
              href="/topics/air-quality"
              event="lead_next_step"
              data={{ source: "shopping_list_thanks", destination: "/topics/air-quality", label: "Start: air quality" }}
              className="btn-secondary"
            >
              Air quality (allergies)
            </TrackedLink>
            <TrackedLink
              href="/topics/water"
              event="lead_next_step"
              data={{ source: "shopping_list_thanks", destination: "/topics/water", label: "Start: water" }}
              className="btn-secondary"
            >
              Water filters
            </TrackedLink>
            <TrackedLink
              href="/topics/fragrance-free"
              event="lead_next_step"
              data={{ source: "shopping_list_thanks", destination: "/topics/fragrance-free", label: "Start: fragrance-free" }}
              className="btn-secondary"
            >
              Fragrance‑free home
            </TrackedLink>
          </div>
        </div>
        <p className="mt-3 text-xs text-zinc-500">Last updated: January 27, 2026</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Browse by category</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          These topic pages explain what matters, what to look for, and link to deeper explainers and “favourites” shortlists when you want them.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card image="/images/cards/sleep.svg" title="Sleep" desc="Sleep basics + practical options." href="/topics/sleep" />
          <Card image="/images/cards/water-filter.svg" title="Water" desc="UK-friendly filter types, trade-offs, and recommended options." href="/topics/water" />
          <Card image="/images/cards/air-purifier.svg" title="Air quality" desc="Allergies, damp, ventilation, and air purifier guidance." href="/topics/air-quality" />
          <Card image="/images/cards/laundry.svg" title="Cleaning (fragrance-free)" desc="Low-tox swaps for laundry and cleaning without overhauling everything." href="/topics/fragrance-free" />
          <Card image="/images/cards/supplements.svg" title="Nutrition" desc="Organic and single-ingredient foods, labels, and practical staples." href="/nutrition" />
          <Card image="/images/cards/bands.svg" title="Movement" desc="Walking, strength training, and simple routines (with optional gear)." href="/movement" />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Popular favourites pages</h2>
        <p className="mt-2 text-sm text-zinc-600 max-w-3xl">
          If you’re comparing products, these pages are built to be straightforward — what to look for, what to avoid, and a short shortlist.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card image="/images/cards/water-filter.svg" title="Water filters (UK): favourites" desc="Jugs vs under-sink vs countertop: clear trade-offs." href="/best-water-filters-uk" />
          <Card image="/images/cards/air-purifier.svg" title="Air purifiers for allergies (UK): shortlist" desc="Room size guidance + a shortlist that makes sense." href="/best-air-purifiers-allergies-uk" />
          <Card image="/images/cards/laundry.svg" title="Fragrance-free laundry detergents (UK): shortlist" desc="Sensitive-home options, with ingredients to avoid." href="/best-fragrance-free-laundry-detergents-uk" />
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

      <p className="mt-12 text-sm text-zinc-500 max-w-3xl">Some links are affiliate links. If you buy via them, we earn a commission.</p>
    </main>
  );
}
