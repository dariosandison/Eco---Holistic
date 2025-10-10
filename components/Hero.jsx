import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-3xl px-4 pt-10 pb-2 text-center">
      <div className="mx-auto mb-6">
        <Image
          src="/og-default.jpg"              // 1200 x 630 in /public
          width={720}
          height={378}
          priority
          alt="Wild & Well"
          className="mx-auto h-auto w-[min(92vw,720px)] rounded-xl shadow-sm ring-1 ring-black/5"
        />
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Low-tox living made simple
      </h1>
      <p className="mt-3 text-base text-neutral-600 sm:text-lg">
        Tested picks, honest reviews, and practical guides to save you time and money.
      </p>

      <div className="mt-6">
        <a
          href="/guides"
          className="inline-flex items-center rounded-full bg-[var(--brand)] px-5 py-2.5 text-white font-medium hover:opacity-90"
        >
          Start with Guides
        </a>
      </div>
    </section>
  );
}
