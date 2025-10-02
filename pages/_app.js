import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from '../components/mdx';

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={mdxComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
