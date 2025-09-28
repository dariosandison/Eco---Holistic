// pages/go/[slug].js
import Head from 'next/head';
import affiliates from '../../data/affiliates';

export async function getServerSideProps({ params, res, query }) {
  const slug = params?.slug || '';
  const dest = affiliates?.[slug];

  // Cache short, respect changes
  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=300, stale-while-revalidate=600');

  if (!dest) {
    // If missing, go home
    return {
      redirect: { destination: '/', permanent: false }
    };
  }
  // Optional: append subId or query passthrough, e.g. ?ref=...
  // const url = new URL(dest);
  // if (query.subId) url.searchParams.set('subId', query.subId);

  return {
    redirect: {
      destination: dest, // or url.toString()
      permanent: false
    }
  };
}

export default function GoPage() {
  // For a split second on dev we render this; add noindex just in case
  return (
    <Head>
      <meta name="robots" content="noindex,nofollow" />
    </Head>
  );
}
