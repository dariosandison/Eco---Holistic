import { listContent } from '@/lib/content';

export default function sitemap(){
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
  const staticRoutes = ['', '/guides', '/blog', '/about', '/contact', '/privacy', '/terms', '/disclosure']
    .map(p => ({ url: base + p, lastModified: new Date().toISOString() }));
  const guides = listContent('guides').map(i => ({
    url: `${base}/guides/${i.slug}`,
    lastModified: (i.updated || i.date || new Date()).toString()
  }));
  const blog = listContent('blog').map(i => ({
    url: `${base}/blog/${i.slug}`,
    lastModified: (i.updated || i.date || new Date()).toString()
  }));
  return [...staticRoutes, ...guides, ...blog];
}
