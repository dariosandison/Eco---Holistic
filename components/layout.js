// components/Layout.js
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
