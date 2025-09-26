// pages/_app.js
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

export default function App({ Component, pageProps }) {
  const seoProps = pageProps?.seo || {};
  return (
    <Layout>
      <SEO {...seoProps} />
      <Component {...pageProps} />
    </Layout>
  );
}
