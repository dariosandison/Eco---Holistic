// app/page.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
     {/* HERO */}
<section className="relative isolate overflow-hidden">
  {/* Background OG-style logo */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/og.png"           // your large background logo in /public
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
    {/* Soft overlay to keep content legible */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
  </div>

  {/* Content */}
  <div className="mx-auto flex min-h-[66vh] max-w-6xl flex-col items-center justify-center px-4 py-10 text-center">
    {/* CTA buttons first */}
    <div className="flex gap-3">
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

    {/* Headline + copy BELOW the buttons */}
    <h1 className="mt-8 text-3xl font-semibold text-zinc-900 md:text-4xl">
      Low-tox living made simple
    </h1>
    <p className="mt-3 max-w-2xl text-base text-zinc-700 md:text-lg">
      Honest, practical guidance for low-tox living — product reviews, how-tos,
      and buyer’s guides you can trust.
    </p>
  </div>
</section>

    </main>
  );
}
