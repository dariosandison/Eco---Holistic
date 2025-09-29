// pages/_app.js
import '../styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <MDXProvider components={MDXComponents}>
      {getLayout(<Component {...pageProps} />)}
    </MDXProvider>
  );
}

export default App;
