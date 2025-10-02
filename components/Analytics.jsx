import { useEffect } from "react";
import site from "../data/site.config.json";

export default function Analytics() {
  useEffect(() => {
    const id = site.ga4Id || process.env.NEXT_PUBLIC_GA_ID;
    if (!id) return;

    const ok =
      typeof window !== "undefined" &&
      window.__siteconsent &&
      typeof window.__siteconsent.hasConsent === "function" &&
      window.__siteconsent.hasConsent();

    if (!ok) return;

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", id, { anonymize_ip: true });
  }, []);

  return null;
}
