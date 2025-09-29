// pages/_app.js
import '../styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents, { mdxComponents } from '../components/MDXComponents';

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MDXProvider components={MDXComponents}>
      {getLayout(<Component {...pageProps} components={mdxComponents} />)}
    </MDXProvider>
  );
}
export default App;
