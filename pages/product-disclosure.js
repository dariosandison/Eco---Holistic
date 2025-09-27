import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ProductDisclosureRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/legal/product-disclosure'); }, [router]);
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/legal/product-disclosure" />
      </Head>
      <p>Redirecting to <a href="/legal/product-disclosure">/legal/product-disclosure</a>…</p>
    </>
  );
}
