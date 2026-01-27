// app/page.jsx
import Image from "next/image";
import Link from "next/link";

const FEATURED_GUIDES = [
  { title: "Non-Toxic Cleaning Starter", href: "/guides/non-toxic-cleaning-starter" },
  { title: "Low-Tox Kitchen", href: "/guides/low-tox-kitchen" },
  { title: "Eco Laundry", href: "/guides/eco-laundry" },
  { title: "Zero Waste Bathroom", href: "/guides/zero-waste-bathroom" },
  { title: "Composting", href: "/guides/composting" },
  { title: "Water Filter Buying Guide (UK)", href: "/guides/water-filter-buying-guide-uk" },
];

const FEATURED_PICKS = [
  {
    title: "Sleep & recovery hub",
    description: "A simple plan + the shortlist of products that actually help.",
    href: "/picks/sleep",
  },
  {
    title: "Air quality hub",
    description: "Allergies, damp, and the purifiers that make sense for UK homes.",
    href: "/picks/air-quality",
  },
  {
    title: "Water hub",
    description: "Under-sink vs jug vs countertop — and the easiest starter picks.",
    href: "/picks/water",
  },
  {
    title: "Fragrance-free home hub",
    description: "Sensitive household swaps that reduce irritation fast.",
    href: "/picks/fragrance-free",
  },
];

function Card({ href, title, description }) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 transition-shadow hover:shadow-md"
    >
      <div className="p-5">
        <h3 className="text-base font-semibold text-zinc-900 group-hover:underline">
          {title}
        </h3>
        {description ? (
          <p className="mt-2 text-sm text-zinc-700">{description}</p>
        ) : null}
        <div className="mt-4 text-sm font-medium text-zinc-900">
          Explore <span aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}

function GuideCard({ guide }) {
  return (
    <Link
      href={guide.href}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3] bg-zinc-100">
        <Image
          src={guide.cover || "/og-default.jpg"}
          alt=""
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium text-zinc-900 group-hover:underline">
          {guide.title}
        </h3>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/og-default.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 to-white" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Natural wellness, made simple.
            </h1>
            <p className="mt-4 text-base text-zinc-700 md:text-lg">
              Expert-led guides and trusted product picks for low-tox, holistic living —
              so you can make healthier choices with confidence.
            </p>
            <p className="mt-2 text-sm text-zinc-600">For people who want healthier homes without overwhelm or fear-based advice.</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/best-of" className="btn-primary w-full sm:w-auto text-center">
                Browse best-of guides
              </Link>
              <Link
                href="/best-of"
                className="w-full sm:w-auto text-center rounded-xl border border-zinc-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white"
              >
                Browse recommendations
              </Link>
            </div>

            <p className="mt-6 text-sm text-zinc-600">
              New here? Start with the{" "}
              <Link href="/shopping-list" className="underline decoration-dotted">
                Low-Tox Starter Picks
              </Link>{" "}
              and our{" "}
              <Link href="/guides/non-toxic-cleaning-starter" className="underline decoration-dotted">
                Non-Toxic Cleaning Starter
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid gap-6 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6 md:grid-cols-3 md:p-10">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">We do the research</h2>
            <p className="mt-2 text-sm text-zinc-700">
              We review ingredients, sourcing, and real-world use — focusing on safety,
              effectiveness, and sustainability.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">We explain it clearly</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Practical guidance without the overwhelm. No fear-mongering — just what matters.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">We recommend what works</h2>
            <p className="mt-2 text-sm text-zinc-700">
              When products meet our standards, we share trusted picks to save you time and money.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PICKS */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-zinc-900">Trusted picks</h2>
          <Link href="/best-of" className="text-sm font-medium text-zinc-800 hover:underline">
            See all picks →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PICKS.map((p) => (
            <Card key={p.href} {...p} />
          ))}
        </div>
      </section>

      {/* FEATURED GUIDES */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-xl font-semibold text-zinc-900">Starter guides</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Begin with the essentials — then follow the product picks inside each guide.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_GUIDES.map((g) => (
            <GuideCard key={g.href} guide={g} />
          ))}
        </div>
      </section>

      
{/* BEST OF */}
<section className="mt-16">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="text-2xl font-semibold">Best Of (buyer guides)</h2>
    <p className="mt-2 text-sm text-zinc-600">
      These pages are built for buying clarity: best overall, budget, and sensitive‑household options — with clear trade‑offs.
    </p>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <Link href="/best-low-tox-products-for-beginners" className="card hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold">Best low‑tox products for beginners</h3>
        <p className="mt-1 text-sm text-zinc-600">The easiest first swaps that make the biggest difference.</p>
      </Link>
      <Link href="/best-water-filters-uk" className="card hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold">Best water filters (UK)</h3>
        <p className="mt-1 text-sm text-zinc-600">Practical choices for taste, scale, and common concerns.</p>
      </Link>
      <Link href="/best-natural-sleep-support" className="card hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold">Best natural sleep support</h3>
        <p className="mt-1 text-sm text-zinc-600">Comfort-first upgrades that help you stick with it.</p>
      </Link>
            <Link href="/best-shower-filters-uk-hard-water" className="card hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-semibold">Best shower filters (UK hard water)</h3>
              <p className="mt-1 text-sm text-zinc-600">What they help with, what they don’t, and how to choose.</p>
            </Link>
            <Link href="/best-fragrance-free-laundry-detergents-uk" className="card hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-semibold">Best fragrance-free laundry detergents (UK)</h3>
              <p className="mt-1 text-sm text-zinc-600">Sensitive-skin friendly laundry without strong scents.</p>
            </Link>
          </div>
        </div>
      </section>

{/* EMAIL CTA */}
<section className="mt-16">
  <div className="mx-auto max-w-6xl px-4">
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900">Free: Low‑Tox Shopping List</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Our trusted swaps for skincare, home, and everyday wellness — in one simple list.
          </p>
        </div>
        <Link href="/shopping-list" className="btn-primary w-full md:w-auto text-center">
          Get the list
        </Link>
      </div>
      <p className="mt-4 text-xs text-zinc-600">
        Some links may earn us a small commission at no extra cost to you. We only recommend products we genuinely trust.
      </p>
    </div>
  </div>
</section>

    
      <section className="mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">Explore our wellness guides</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Start where you are — low-tox swaps, holistic health, or nutrition.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a href="/best-of" className="card">Low-tox & safer swaps</a>
            <a href="/holistic-health" className="card">Holistic health</a>
            <a href="/nutrition" className="card">Nutrition & organic food</a>
          </div>
        </div>
      </section>

</main>
  );
}

