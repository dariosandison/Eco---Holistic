import Card from '@/components/Card';
import { listContent } from '@/lib/content';

export const metadata = { title: 'Guides' };

export default function Page(){
  const items = listContent('guides');
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">Guides</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(i => (<Card key={i.slug} href={`/guides/${i.slug}`} title={i.title} excerpt={i.description} image={i.image || '/placeholder.png'} />))}
      </div>
    </div>
  );
}
