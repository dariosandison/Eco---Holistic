// app/page.jsx
import Image from "next/image";
import Link from "next/link";
import { allGuides } from "contentlayer/generated";

function GuideCard({ guide }) {
  const href = guide.url || `/guides/${guide.slug}`;
  const cover = guide.cover || "/placeholder-guide.jpg";
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={cover}
          alt={guide.title || "Guide"}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium text-zinc-900 group-hover:underline">
          {guide.title}
        </h3>
        {guide.excerpt ? (
          <p className="mt-2 line-clamp-2 text-sm text-zinc-600">
            {guide.excerpt}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

export default function HomePage() {
  // Pick the first 6 guides (adjust sorting to your preference)
  const featuredGuides = (allGuides || [])
    .filter((g) => !g.draft)
    .slice(0, 6);

  return (
    <main>
      {/* HERO */}
      <section className="relative isolate">
        {/* Background logo/image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/og-default.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Soft wash for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            {/* Primary CTA */}
            <Link
              href="/guides"
              className="inline-flex items-center rounded-full border border-zinc-300 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-800 backdrop-blur transition hover:bg-white"
            >
              Explore guides
            </Link>

            {/* Copy BELOW the button */}
            <p className="mt-6 text-base text-zinc-700 md:text-lg">
              Make switching to low-tox, eco-friendly products easy — clear
              picks, simple checklists, and no greenwashing.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED GUIDES (6 cards) */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-xl font-semibold text-zinc-900">Starter guides</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((g) => (
            <GuideCard key={g._id || g.slug || g.title} guide={g} />
          ))}
        </div>
      </section>
    </main>
  );
}
