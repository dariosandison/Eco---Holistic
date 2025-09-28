// components/Hero.js
import Link from 'next/link';

export default function Hero() {
  // Exact copy you requested (keeping the original look)
  const subtitle =
    'Your guide to holistic health, eco living and natural welness';

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-8">
      <div className="rounded-2xl border border-[rgba(0,0,0,0.1)] bg-[#f3ebd9] p-4 sm:p-6 md:p-8 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
        <div className="relative overflow-hidden rounded-xl">
          <div className="bg-[#1d2a1b] aspect-[16/6] w-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img
                src="/logo.png"
                alt="Wild & Well"
                className="h-16 w-auto mb-4 opacity-90"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide text-[#f3f0e6]">
                Wild &amp; Well
              </h1>
            </div>
          </div>
        </div>

        <p className="text-center text-base sm:text-lg md:text-xl text-[#334030] mt-6">
          {subtitle}
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/guides"
            className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold bg-[#2c6b53] text-white hover:opacity-95 transition"
          >
            Explore Guides
          </Link>
          <Link
            href="/deals"
            className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold bg-white text-[#2c6b53] border border-[#2c6b53]/30 hover:bg-[#2c6b53]/5 transition"
          >
            Today&apos;s Deals
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#4c5a48]">
          <span>Independent</span>
          <span className="select-none">•</span>
          <span>Reader-supported</span>
          <span className="select-none">•</span>
          <span>Evidence-informed picks</span>
          <span className="select-none">•</span>
          <span>No sponsored posts</span>
        </div>
      </div>
    </section>
  );
}
