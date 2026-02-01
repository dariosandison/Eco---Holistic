// app/page.jsx
import Image from "next/image";
import Link from "next/link";

const FEATURED_EXPLAINERS = [
  { title: "Non-Toxic Cleaning Starter", href: "/blog/non-toxic-cleaning-starter", cover: "/images/cards/cleaning.svg" },
  { title: "Low-Tox Kitchen", href: "/blog/low-tox-kitchen", cover: "/images/cards/kitchen.svg" },
  { title: "Eco Laundry", href: "/blog/eco-laundry", cover: "/images/cards/laundry.svg" },
  { title: "Zero Waste Bathroom", href: "/blog/zero-waste-bathroom", cover: "/images/cards/neutral.svg" },
  { title: "Composting", href: "/blog/composting", cover: "/images/cards/neutral.svg" },
  { title: "Water Filter Buying Guide (UK)", href: "/blog/water-filter-buying-guide-uk", cover: "/images/cards/water-filter.svg" },
];

const FEATURED_TOPICS = [
  {
    title: "Sleep & recovery",
    image: "/images/cards/sleep.svg",
    description: "A practical plan, routines, and a shortlist of options.",
    href: "/topics/sleep",
  },
  {
    title: "Air quality",
    image: "/images/cards/air-purifier.svg",
    description: "Allergies, damp, and the purifiers that make sense for UK homes.",
    href: "/topics/air-quality",
  },
  {
    title: "Water",
    image: "/images/cards/water-filter.svg",
    description: "Under-sink vs jug vs countertop — and the easiest starter options.",
    href: "/topics/water",
  },
  {
    title: "Fragrance-free home",
    image: "/images/cards/laundry.svg",
    description: "A practical approach to fragrance exposure across laundry, cleaning, and everyday products.",
    href: "/topics/fragrance-free",
  },
];

// Three pages that work well as first-click destinations from social (Pinterest/IG)
const START_HERE = [
  {
    title: "Air quality",
    image: "/images/cards/air-purifier.svg",
    description: "Indoor air basics for allergies, damp, and everyday comfort in UK homes.",
    href: "/topics/air-quality",
    links: [
      { label: "Air purifiers for allergies (UK)", href: "/best-air-purifiers-allergies-uk" },
      { label: "Dehumidifiers for damp & mould (UK)", href: "/best-dehumidifiers-damp-mould-uk" },
      { label: "Air purifiers for small flats (UK)", href: "/best-air-purifiers-small-flats-uk" },
    ],
  },
  {
    title: "Water",
    image: "/images/cards/water-filter.svg",
    description: "Filter types, running costs, and straightforward choices for common UK setups.",
    href: "/topics/water",
    links: [
      { label: "Water filters (UK): shortlist", href: "/best-water-filters-uk" },
      { label: "Shower filters for hard water (UK)", href: "/best-shower-filters-uk-hard-water" },
      { label: "Water filter buying guide (UK)", href: "/blog/water-filter-buying-guide-uk" },
    ],
  },
  {
    title: "Fragrance-free home",
    image: "/images/cards/laundry.svg",
    description: "A practical approach to fragrance exposure in laundry, cleaning, and everyday products.",
    href: "/topics/fragrance-free",
    links: [
      { label: "Fragrance-free laundry detergents (UK)", href: "/best-fragrance-free-laundry-detergents-uk" },
      { label: "Non-toxic cleaning starter", href: "/blog/non-toxic-cleaning-starter" },
      { label: "Low‑tox starter favourites", href: "/best-low-tox-products-for-beginners" },
    ],
  },
];

function StartHereCard({ item }) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl bg-zinc-100">
              <img
                src={item.image || "/images/cards/neutral.svg"}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Start here</div>
          </div>
          <h3 className="text-lg font-semibold text-zinc-900">
            <Link href={item.href} className="hover:underline">
              {item.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-zinc-700">{item.description}</p>
        </div>
        <Link href={item.href} className="text-sm font-semibold text-zinc-900 hover:underline whitespace-nowrap">
          Open →
        </Link>
      </div>

      <div className="mt-5 grid gap-2">
        {item.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 hover:bg-zinc-50"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Card({ href, title, description, image }) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 transition-shadow hover:shadow-md"
    >
      <div className="p-5">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-xl bg-zinc-100">
            <img src={image || '/images/cards/neutral.svg'} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Topic</div>
        </div>
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
              Low‑tox living and natural wellness, in plain English.
            </h1>
            <p className="mt-4 text-base text-zinc-700 md:text-lg">
              Practical guides and shortlists for air, water, fragrance‑free living, sleep, nutrition, and movement.
            </p>
            <p className="mt-2 text-sm text-zinc-600">UK‑focused guidance you can use at home, without specialist knowledge.</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/topics" className="btn-primary w-full sm:w-auto text-center">
                Explore topics
              </Link>
              <Link
                href="/shopping-list"
                className="w-full sm:w-auto text-center rounded-xl border border-zinc-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white"
              >
                Low‑Tox Shopping List
              </Link>
              <Link href="/favourites" className="text-sm font-semibold text-zinc-900 hover:underline">
                Browse favourites →
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-zinc-700">Quick start:</span>
              <Link href="/topics/air-quality" className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-900 hover:bg-white">
                Air quality
              </Link>
              <Link href="/topics/water" className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-900 hover:bg-white">
                Water
              </Link>
              <Link href="/topics/fragrance-free" className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-zinc-900 hover:bg-white">
                Fragrance‑free home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* START HERE */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-zinc-900">Start here</h2>
          <Link href="/topics" className="text-sm font-medium text-zinc-800 hover:underline">
            All topics →
          </Link>
        </div>
        <p className="mt-2 max-w-3xl text-sm text-zinc-700">
          Three Topic pages that answer the most common questions and link to shortlists where comparisons help.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {START_HERE.map((item) => (
            <StartHereCard key={item.href} item={item} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid gap-6 rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6 md:grid-cols-3 md:p-10">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">We do the research</h2>
            <p className="mt-2 text-sm text-zinc-700">
              We summarise ingredients, common standards, and practical trade-offs people run into at home.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">We explain it clearly</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Clear definitions, what to look for, and what changes outcomes most.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">We share sensible options</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Where products help, we keep the list short and include the main trade-offs.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <Link href="/how-we-test" className="underline decoration-dotted text-zinc-900">How we test</Link>
              <span className="text-zinc-500">•</span>
              <Link href="/editorial-policy" className="underline decoration-dotted text-zinc-900">Editorial policy</Link>
              <span className="text-zinc-500">•</span>
              <Link href="/affiliate-disclosure" className="underline decoration-dotted text-zinc-900">Affiliate disclosure</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PICKS */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-zinc-900">Topics</h2>
          <Link href="/topics" className="text-sm font-medium text-zinc-800 hover:underline">
            See all topics →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_TOPICS.map((p) => (
            <Card key={p.href} {...p} />
          ))}
        </div>
      </section>

      {/* FEATURED GUIDES */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-xl font-semibold text-zinc-900">Foundational guides</h2>
        <p className="mt-2 text-sm text-zinc-700">
          Clear starting points for common questions. Where comparisons help, you’ll find shortlists linked inside.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_EXPLAINERS.map((g) => (
            <GuideCard key={g.href} guide={g} />
          ))}
        </div>
      </section>

      
{/* FAVOURITES */}
<section className="mt-16">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="text-2xl font-semibold">Favourites (shortlists)</h2>
    <p className="mt-2 text-sm text-zinc-600">
      Shortlists with the key trade-offs and a small set of options.
    </p>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <Link href="/best-low-tox-products-for-beginners" className="card hover:shadow-sm transition-shadow">
        
        
        <div className="mt-4 h-12 w-12 overflow-hidden rounded-xl bg-zinc-100"><img src="/images/cards/cleaning.svg" alt="" className="h-full w-full object-cover" loading="lazy" /></div>
<h3 className="text-lg font-semibold">Low‑tox starter favourites</h3>
        <p className="mt-1 text-sm text-zinc-600">A small set of practical first swaps.</p>
      </Link>
      <Link href="/best-water-filters-uk" className="card hover:shadow-sm transition-shadow">
        
        <div className="mt-4 h-12 w-12 overflow-hidden rounded-xl bg-zinc-100"><img src="/images/cards/water-filter.svg" alt="" className="h-full w-full object-cover" loading="lazy" /></div>
<h3 className="text-lg font-semibold">Water filters (UK): shortlist</h3>
        <p className="mt-1 text-sm text-zinc-600">Practical choices for taste, scale, and common concerns.</p>
      </Link>
      <Link href="/best-natural-sleep-support" className="card hover:shadow-sm transition-shadow">
        
        <div className="mt-4 h-12 w-12 overflow-hidden rounded-xl bg-zinc-100"><img src="/images/cards/sleep.svg" alt="" className="h-full w-full object-cover" loading="lazy" /></div>
<h3 className="text-lg font-semibold">Natural sleep support: shortlist</h3>
        <p className="mt-1 text-sm text-zinc-600">Options across routine, environment, and gentle supports.</p>
      </Link>
            <Link href="/best-shower-filters-uk-hard-water" className="card hover:shadow-sm transition-shadow">
              
        <div className="mt-4 h-12 w-12 overflow-hidden rounded-xl bg-zinc-100"><img src="/images/cards/shower-filter.svg" alt="" className="h-full w-full object-cover" loading="lazy" /></div>
<h3 className="text-lg font-semibold">Shower filters (UK hard water): shortlist</h3>
              <p className="mt-1 text-sm text-zinc-600">What they help with, what they don’t, and how to choose.</p>
            </Link>
            <Link href="/best-fragrance-free-laundry-detergents-uk" className="card hover:shadow-sm transition-shadow">
              
        <div className="mt-4 h-12 w-12 overflow-hidden rounded-xl bg-zinc-100"><img src="/images/cards/laundry.svg" alt="" className="h-full w-full object-cover" loading="lazy" /></div>
<h3 className="text-lg font-semibold">Fragrance-free laundry detergents (UK): shortlist</h3>
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
          <h2 className="text-xl font-semibold text-zinc-900">Low‑Tox Shopping List</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Starter swaps for skincare, home, and everyday wellness — in one list.
          </p>
        </div>
        <Link href="/shopping-list" className="btn-primary w-full md:w-auto text-center">
          View the list
        </Link>
      </div>
      <p className="mt-4 text-xs text-zinc-600">Some links are affiliate links.</p>
    </div>
  </div>
</section>

    
      <section className="mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">Explore sections</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Browse by area. Each section links to Topic pages, guides, and shortlists.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Link href="/topics" className="card">
              <div className="text-sm font-semibold text-zinc-900">Topics</div>
              <div className="mt-1 text-sm text-zinc-600">Air, water, fragrance‑free home, sleep & recovery.</div>
            </Link>
            <Link href="/favourites" className="card">
              <div className="text-sm font-semibold text-zinc-900">Favourites (shortlists)</div>
              <div className="mt-1 text-sm text-zinc-600">A small set of options with the main trade-offs.</div>
            </Link>
            <Link href="/shopping-list" className="card">
              <div className="text-sm font-semibold text-zinc-900">Shopping list</div>
              <div className="mt-1 text-sm text-zinc-600">Starter swaps in one place.</div>
            </Link>
            <Link href="/nutrition" className="card">
              <div className="text-sm font-semibold text-zinc-900">Nutrition</div>
              <div className="mt-1 text-sm text-zinc-600">Supplements, organic & single‑ingredient foods, grow your own.</div>
            </Link>
            <Link href="/movement" className="card">
              <div className="text-sm font-semibold text-zinc-900">Movement</div>
              <div className="mt-1 text-sm text-zinc-600">Stretches, hypertrophy, cardio.</div>
            </Link>
            <Link href="/natural-remedies" className="card">
              <div className="text-sm font-semibold text-zinc-900">Natural remedies</div>
              <div className="mt-1 text-sm text-zinc-600">Evidence‑informed options and safety notes.</div>
            </Link>
          </div>
        </div>
      </section>

</main>
  );
}

