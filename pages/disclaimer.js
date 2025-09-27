import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function DisclaimerRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/legal/disclaimer'); }, [router]);
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content="0; url=/legal/disclaimer" />
      </Head>
      <p>Redirecting to <a href="/legal/disclaimer">/legal/disclaimer</a>…</p>
    </>
  );
}
