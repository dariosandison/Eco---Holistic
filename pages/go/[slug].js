// pages/go/[slug].js
import affiliates from '../../data/affiliates';

function withUtm(url) {
  try {
    const u = new URL(url);
    if (!u.searchParams.has('utm_source')) u.searchParams.set('utm_source', 'wildandwell');
    if (!u.searchParams.has('utm_medium')) u.searchParams.set('utm_medium', 'affiliate');
    if (!u.searchParams.has('utm_campaign')) u.searchParams.set('utm_campaign', 'go');
    return u.toString();
  } catch {
    return url;
  }
}

export async function getServerSideProps({ params, res }) {
  const slug = params?.slug || '';
  const dest = affiliates[slug];

  // Never index /go routes
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');

  if (!dest) {
    return {
      redirect: { destination: '/', permanent: false }
    };
  }

  return {
    redirect: { destination: withUtm(dest), permanent: false }
  };
}

export default function Go() { return null; }
