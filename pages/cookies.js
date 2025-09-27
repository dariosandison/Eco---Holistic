import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function CookiesRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/legal/cookies'); }, [router]);
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/legal/cookies" />
      </Head>
      <p>Redirecting to <a href="/legal/cookies">/legal/cookies</a>…</p>
    </>
  );
}

