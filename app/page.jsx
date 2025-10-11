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
        {/* Background image only (no small logo overlay) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/og-default.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            {/* Button first */}
            <Link
              href="/guides"
              className="inline-flex items-center rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-800 backdrop-blur transition hover:bg-white"
            >
              Explore guides
            </Link>

            {/* Copy BELOW the button */}
            <p className="mt-26 text-base text-zinc-700 md:text-lg">
              Your guide to holistic health, natural healing and eco friendly living.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED GUIDES (6 cards) */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-xl font-semibold text-zinc-900">Starter guides</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_GUIDES.map((g) => (
            <GuideCard key={g.href} guide={g} />
          ))}
        </div>
      </section>
    </main>
  );
}
