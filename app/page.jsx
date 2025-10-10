import Hero from '@/components/Hero';
import Card from '@/components/Card';
import { listContent } from '@/lib/content';

export default function Home() {
  const guides = listContent('guides').slice(0,3);
  const posts  = listContent('blog').slice(0,3);
  return (
    <div>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold mb-4">Featured Guides</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g)=>(<Card key={g.slug} href={`/guides/${g.slug}`} title={g.title} excerpt={g.description} image={g.image || '/placeholder.png'} />))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-xl font-semibold mb-4">From the Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p)=>(<Card key={p.slug} href={`/blog/${p.slug}`} title={p.title} excerpt={p.description} image={p.image || '/placeholder.png'} />))}
        </div>
      </section>
    </div>
  );
}
