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
    title: "Best low-tox skincare picks",
    description: "Gentle, effective options we trust for everyday routines.",
    href: "/recommended#skincare",
  },
  {
    title: "Natural sleep support",
    description: "Calm, practical tools + supplement picks for better rest.",
    href: "/recommended#sleep",
  },
  {
    title: "Gut health essentials",
    description: "Evidence-informed basics, with beginner-friendly options.",
    href: "/recommended#gut-health",
  },
  {
    title: "Eco-friendly home swaps",
    description: "Low-tox cleaning + home upgrades that actually stick.",
    href: "/recommended#home",
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/guides" className="btn-primary w-full sm:w-auto text-center">
                Read our guides
              </Link>
              <Link
                href="/recommended"
                className="w-full sm:w-auto text-center rounded-xl border border-zinc-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white"
              >
                Shop our trusted picks
              </Link>
            </div>

            <p className="mt-6 text-sm text-zinc-600">
              New here? Start with the{" "}
              <Link href="/recommended#starter" className="underline decoration-dotted">
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
          <Link href="/recommended" className="text-sm font-medium text-zinc-800 hover:underline">
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

      {/* EMAIL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold text-zinc-900">Free: Low‑Tox Shopping List</h2>
              <p className="mt-2 text-sm text-zinc-700">
                Our trusted swaps for skincare, home, and everyday wellness — in one simple list.
              </p>
            </div>
            <Link href="/recommended#starter" className="btn-primary w-full md:w-auto text-center">
              Get the list
            </Link>
          </div>
          <p className="mt-4 text-xs text-zinc-600">
            Some links may earn us a small commission at no extra cost to you. We only recommend products we genuinely trust.
          </p>
        </div>
      </section>
    </main>
  );
}
