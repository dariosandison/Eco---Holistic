// pages/_app.js
import '@/styles/globals.css'; // keep your Tailwind/global
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  const pageSEO = Component.seo || {};
  return (
    <Layout seo={pageSEO}>
      <Component {...pageProps} />
    </Layout>
  );
}
