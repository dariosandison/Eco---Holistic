// pages/guides/[slug].js
import SeoHead from '../../components/SeoHead';
import { getAllSlugs, getDocWithHtml } from '../../lib/content';

export async function getStaticPaths() {
  const slugs = getAllSlugs({ dir: 'content/guides' });
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getDocWithHtml({
    dir: 'content/guides',
    slug: params.slug,
    fields: ['title', 'excerpt', 'date', 'image', 'author', 'tags'],
  });
  return { props: { post } };
}

export default function GuidePage({ post }) {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wild-and-well.store';
  const url = `${SITE}/guides/${post.slug}`;
  const ogImage = post.image || '/images/placeholder-16x9.jpg';

  return (
    <>
      <SeoHead
        title={`${post.title} — Wild & Well`}
        description={post.excerpt || 'Wild & Well guide'}
        url={url}
        type="article"
        image={ogImage}
      />
      <article className="prose card" style={{ marginTop: 20, padding: 16 }}>
        <h1 style={{ marginTop: 0 }}>{post.title}</h1>
        <div style={{ color: '#4b553d' }}>
          {post.date && new Date(post.date).toLocaleDateString()}
          {post.author ? ` · ${post.author}` : ''}
        </div>
        {post.image ? (
          <img
            src={post.image}
            alt=""
            className="card-img"
            style={{ marginTop: 12 }}
            onError={(e) => { e.currentTarget.src = '/images/placeholder-16x9.jpg'; e.currentTarget.onerror = null; }}
          />
        ) : null}

        {/* Render sanitized HTML produced at build time */}
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>

      <div className="note" style={{ marginTop: 16 }}>
        This article may contain affiliate links. If you purchase through them, we may earn a small
        commission at no extra cost to you. We only recommend products we genuinely believe in.
      </div>
    </>
  );
}
