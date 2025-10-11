// app/page.jsx
import Image from "next/image";
import Link from "next/link";
import { getAllGuides } from "../lib/get-guides";

export default function HomePage() {
  const guides = getAllGuides().slice(0, 6);

  return (
    <>
     {/* HERO */}
<section className="relative isolate">
  {/* Large background logo */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/og-default.jpg"   // <-- use this file from /public
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />
  </div>
  {/* ...rest of your hero content (buttons, heading, paragraph) */}
</section>

        {/* content is at the bottom so text sits below the logo */}
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex min-h-[78vh] items-end justify-center pb-16 text-center">
            <div>
              <div className="flex justify-center gap-3">
                <Link
                  href="/guides"
                  className="rounded-full bg-emerald-800 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  Explore Guides
                </Link>
                <Link
                  href="/blog"
                  className="rounded-full border border-zinc-300 bg-white/70 px-5 py-2 text-sm font-medium text-zinc-800 hover:bg-white"
                >
                  Read the Blog
                </Link>
              </div>

              {/* Writing BELOW the button */}
              <h1 className="mt-8 text-3xl font-semibold text-zinc-900 md:text-4xl">
                Low-tox living made simple
              </h1>
              <p className="mt-3 mx-auto max-w-2xl text-base text-zinc-700 md:text-lg">
                Honest, practical guidance for low-tox living — product reviews,
                how-tos, and buyer’s guides you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED GUIDES (6 cards) */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold">Featured Guides</h2>
          <Link href="/guides" className="text-sm text-emerald-800 hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.length === 0 ? (
            <p className="text-zinc-600">No guides found.</p>
          ) : (
            guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={g.coverImage || "/og.png"} // fallback so a thumbnail always shows
                    alt={g.title}
                    width={1200}
                    height={675}
                    className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 font-medium text-zinc-900">{g.title}</h3>
                  {g.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-zinc-600">{g.description}</p>
                  )}
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </>
  );
}
