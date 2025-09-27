// pages/_app.js
import '../styles/globals.css';
import Layout from '../components/Layout';
import React from 'react';

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    // Swallow on server to allow static generation to proceed.
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error('App error boundary caught:', err, info);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding:20,maxWidth:720,margin:'40px auto',background:'#fffdf4',color:'#1b1b1b',border:'1px solid #e8e1c9',borderRadius:12}}>
          <h1 style={{marginTop:0}}>Something went wrong</h1>
          <p>We had a hiccup rendering this page. Please refresh or try another page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App({ Component, pageProps }) {
  return (
    <AppErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppErrorBoundary>
  );
}
