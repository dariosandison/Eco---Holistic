// pages/_app.js
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MDXProvider components={MDXComponents}>
      {getLayout(<Component {...pageProps} />)}
    </MDXProvider>
  );
}
