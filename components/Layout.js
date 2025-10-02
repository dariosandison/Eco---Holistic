import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{paddingTop:24, paddingBottom:96}}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
