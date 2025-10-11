{/* HERO */}
<section className="relative isolate">
  {/* Background logo/image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/og.png"         // large background logo in /public
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
    {/* Soft wash for legibility */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white" />
  </div>

  {/* Content aligned to the bottom so it sits below the big logo */}
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

        {/* Writing BELOW the button row */}
        <h1 className="mt-8 text-3xl font-semibold text-zinc-900 md:text-4xl">
          Low-tox living made simple
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-base text-zinc-700 md:text-lg">
          Honest, practical guidance for low-tox living — product reviews, how-tos,
          and buyer’s guides you can trust.
        </p>
      </div>
    </div>
  </div>
</section>
