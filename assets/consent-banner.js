(function(){
  function hasConsent(){ return localStorage.getItem('site_consent')==='true'; }
  function grant(){ localStorage.setItem('site_consent','true'); location.reload(); }
  function deny(){ localStorage.setItem('site_consent','false'); hide(); }
  function hide(){ var el=document.getElementById('consent-banner'); if(el) el.remove(); }
  function injectGTM(id){
    if(!id || !/^GTM-/.test(id)) return;
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',id);
  }
  function injectGA4(id){
    if(!id || !/^G-/.test(id)) return;
    var s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+id;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);} window.gtag = gtag;
    gtag('js', new Date()); gtag('config', id, { anonymize_ip: true });
  }
  function init(){
    var cfg = window.__siteconfig || {};
    if(hasConsent()){ injectGTM(cfg.gtmId||''); injectGA4(cfg.ga4Id||''); return; }
    var b=document.createElement('div'); b.id='consent-banner';
    b.style.cssText='position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#111;color:#fff;padding:12px 16px;font-size:14px;display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap';
    b.innerHTML='<span>We use cookies/analytics to improve your experience. </span><button id="consent-accept">Accept</button><button id="consent-decline">Decline</button>';
    document.body.appendChild(b);
    document.getElementById('consent-accept').onclick=grant;
    document.getElementById('consent-decline').onclick=deny;
  }
  document.addEventListener('DOMContentLoaded', init);
  window.__siteconsent = { hasConsent: hasConsent };
})();