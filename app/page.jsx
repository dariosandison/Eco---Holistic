import Hero from '@/components/Hero';
import Card from '@/components/Card';
import { listContent } from '@/lib/content';

export default function Home() {
  const guides = listContent('guides').slice(0, 3);
  const posts = listContent('blog').slice(0, 3);

  return (
    <div>
      <Hero />

      <section className="relative isolate">
  <div className="absolute inset-0 -z-10">
    <Image
      src="/og.png"     // change if your OG background file has a different name
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
  </div>

  <div className="mx-auto flex h-[68vh] max-w-6xl items-end px-4 pb-10 md:h-[74vh]">
    <div className="w-full max-w-2xl">
      <div className="flex flex-wrap gap-3">
        <Link
          href="/guides"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-800 hover:bg-white/70"
        >
          Explore guides
        </Link>
      </div>

      <p className="mt-6 text-base text-zinc-700 md:text-lg">
        Make switching to low-tox, eco-friendly products easy — clear picks, simple checklists, and honest testing.
      </p>
    </div>
  </div>
</section>
