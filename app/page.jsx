// app/page.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate">
        {/* Background image (large OG-style logo) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/og.png"          // ensure this exists in /public
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Soft overlay to keep content readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
        </div>

        {/* Content anchored at bottom so it clears the background image */}
        <div className="mx-auto flex h-[68vh] max-w-6xl items-end px-4 pb-10 md:h-[74vh]">
          <div className="w-full max-w-2xl">
            {/* CTA first */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/guides"
                className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-800 hover:bg-white/70"
              >
                Explore guides
              </Link>
            </div>

            {/* Copy BELOW the button */}
            <p className="mt-6 text-base text-zinc-700 md:text-lg">
              Make switching to low tox, eco friendly products easy - clear picks,
              simple checklists, and honest testing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
