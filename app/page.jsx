// app/page.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* HERO (as before removing the small square logo) */}
      <section className="relative isolate">
        {/* Large background image (OG-style logo) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/og.png"   // ensure this exists in /public
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Light overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
        </div>

        {/* Small square foreground logo (the one we had before) */}
        <div className="absolute left-4 top-4">
          <Image
            src="/logo.png"  // small square logo exists in /public
            alt="Wild & Well logo"
            width={64}
            height={64}
          />
        </div>

        {/* Content (headline + copy + CTA) */}
        <div className="mx-auto flex h-[68vh] max-w-6xl items-end px-4 pb-10 md:h-[74vh]">
          <div className="w-full max-w-2xl">
            <h1 className="text-2xl font-semibold text-zinc-900 md:text-3xl">
              Make sustainable living simple
            </h1>
            <p className="mt-3 text-base text-zinc-700 md:text-lg">
              Honest testing, clear recommendations, and easy checklists to help you switch
              to low-tox, eco-friendly products.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/guides"
                className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-800 hover:bg-white/70"
              >
                Explore guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
