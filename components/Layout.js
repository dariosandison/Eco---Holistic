import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title = "Wild & Well" }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl p-4">{children}</main>
      <Footer />
    </>
  );
}
