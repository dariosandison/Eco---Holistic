import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/og-default.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Soften lower half for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Larger rectangular logo */}
          <Image
            src="/logo.png"
            alt="Wild & Well"
            width={360}
            height={112}
            priority
            className="h-20 w-auto sm:h-24 md:h-28"
          />

          <p className="max-w-2xl text-pretty text-lg text-zinc-700 sm:text-xl">
            Honest, practical guidance for low-tox living — product reviews, how-tos, and buyer’s guides you can trust.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/guides"
              className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Explore Guides
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-zinc-300 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
