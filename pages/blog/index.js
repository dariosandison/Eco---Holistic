import SEO from '@/components/SEO';
const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';

export default function Blog() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <SEO title="Blog" description="Thoughts, updates, and research notes." canonical={`${SITE}/blog`} />
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p>Blog posts are coming soon. In the meantime, explore our <a className="underline" href="/guides">guides</a>.</p>
    </main>
  );
}
