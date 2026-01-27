// components/Hero.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate">
      {/* Background image (large OG-style logo) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/og.png"            // change to your actual file (e.g. /og-default.png) living in /public
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gentle gradient to keep foreground legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
      </div>

      {/* Content is anchored near the bottom so it sits below the dense part of the background */}
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

          {/* Writing BELOW the button */}
          <p className="mt-6 text-base text-zinc-700 md:text-lg">
            Your guide to hollistic health, natural healing and eco living.
          </p>
        </div>
      </div>
    </section>
  );
}
