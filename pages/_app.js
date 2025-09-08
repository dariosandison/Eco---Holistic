  [15:26:40.821] Running build in Washington, D.C., USA (East) – iad1
[15:26:40.825] Build machine configuration: 2 cores, 8 GB
[15:26:40.859] Cloning github.com/dariosandison/Eco---Holistic (Branch: main, Commit: a62168c)
[15:26:40.886] Skipping build cache, deployment was triggered without cache.
[15:26:41.768] Cloning completed: 909.000ms
[15:26:42.667] Running "vercel build"
[15:26:43.109] Vercel CLI 47.0.5
[15:26:43.442] Installing dependencies...
[15:26:58.948] 
[15:26:58.949] added 173 packages in 15s
[15:26:58.950] 
[15:26:58.950] 83 packages are looking for funding
[15:26:58.950]   run `npm fund` for details
[15:26:59.000] Detected Next.js version: 14.2.4
[15:26:59.004] Running "npm run build"
[15:26:59.116] 
[15:26:59.117] > build
[15:26:59.117] > next build
[15:26:59.117] 
[15:26:59.717] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[15:26:59.719] This information is used to shape Next.js' roadmap and prioritize features.
[15:26:59.719] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[15:26:59.719] https://nextjs.org/telemetry
[15:26:59.719] 
[15:26:59.776]   ▲ Next.js 14.2.4
[15:26:59.777] 
[15:26:59.777]    Linting and checking validity of types ...
[15:26:59.962]    Creating an optimized production build ...
[15:27:02.092] Failed to compile.
[15:27:02.092] 
[15:27:02.094] ./pages/_app.js
[15:27:02.095] Error: 
[15:27:02.095]   [31mx[0m the name `Head` is defined multiple times
[15:27:02.095]    ,-[[36;1;4m/vercel/path0/pages/_app.js[0m:1:1]
[15:27:02.095]  [2m1[0m | import "@/styles/globals.css";
[15:27:02.095]  [2m2[0m | import Head from "next/head";
[15:27:02.096]    : [31;1m       ^^|^[0m
[15:27:02.096]    :          [31;1m`-- [31;1mprevious definition of `Head` here[0m[0m
[15:27:02.096]  [2m3[0m | import "@/styles/globals.css";
[15:27:02.097]  [2m4[0m | import Head from "next/head";
[15:27:02.097]    : [33;1m       ^^|^[0m
[15:27:02.097]    :          [33;1m`-- [33;1m`Head` redefined here[0m[0m
[15:27:02.097]  [2m5[0m | import Nav from "../components/Nav";   // 👈 import Nav
[15:27:02.097]  [2m6[0m | 
[15:27:02.097]  [2m7[0m | export default function App({ Component, pageProps }) {
[15:27:02.097]    `----
[15:27:02.097] 
[15:27:02.097]   [31mx[0m the name `App` is defined multiple times
[15:27:02.097]     ,-[[36;1;4m/vercel/path0/pages/_app.js[0m:4:1]
[15:27:02.097]  [2m 4[0m | import Head from "next/head";
[15:27:02.098]  [2m 5[0m | import Nav from "../components/Nav";   // 👈 import Nav
[15:27:02.098]  [2m 6[0m | 
[15:27:02.098]  [2m 7[0m | export default function App({ Component, pageProps }) {
[15:27:02.098]     : [31;1m                        ^|^[0m
[15:27:02.098]     :                          [31;1m`-- [31;1mprevious definition of `App` here[0m[0m
[15:27:02.098]  [2m 8[0m |   return (
[15:27:02.098]  [2m 9[0m |     <>
[15:27:02.098]  [2m10[0m |       <Head>
[15:27:02.098]  [2m11[0m |         {/* existing SEO meta tags */}
[15:27:02.098]  [2m12[0m |       </Head>
[15:27:02.098]  [2m13[0m |       <Nav />   {/* 👈 navigation appears on all pages */}
[15:27:02.098]  [2m14[0m |       <Component {...pageProps} />
[15:27:02.098]  [2m15[0m |     </>
[15:27:02.098]  [2m16[0m |   );
[15:27:02.098]  [2m17[0m | }
[15:27:02.098]  [2m18[0m | 
[15:27:02.099]  [2m19[0m | export default function App({ Component, pageProps }) {
[15:27:02.099]     : [33;1m                        ^|^[0m
[15:27:02.099]     :                          [33;1m`-- [33;1m`App` redefined here[0m[0m
[15:27:02.099]  [2m20[0m |   return (
[15:27:02.099]  [2m21[0m |     <>
[15:27:02.099]  [2m22[0m |       <script
[15:27:02.099]     `----
[15:27:02.099] 
[15:27:02.099]   [31mx[0m the name `default` is exported multiple times
[15:27:02.099]     ,-[[36;1;4m/vercel/path0/pages/_app.js[0m:4:1]
[15:27:02.099]  [2m 4[0m |     import Head from "next/head";
[15:27:02.099]  [2m 5[0m |     import Nav from "../components/Nav";   // 👈 import Nav
[15:27:02.099]  [2m 6[0m |     
[15:27:02.099]  [2m 7[0m | [31;1m,[0m[31;1m-[0m[31;1m>[0m export default function App({ Component, pageProps }) {
[15:27:02.100]  [2m 8[0m | [31;1m|[0m     return (
[15:27:02.100]  [2m 9[0m | [31;1m|[0m       <>
[15:27:02.100]  [2m10[0m | [31;1m|[0m         <Head>
[15:27:02.100]  [2m11[0m | [31;1m|[0m           {/* existing SEO meta tags */}
[15:27:02.100]  [2m12[0m | [31;1m|[0m         </Head>
[15:27:02.100]  [2m13[0m | [31;1m|[0m         <Nav />   {/* 👈 navigation appears on all pages */}
[15:27:02.100]  [2m14[0m | [31;1m|[0m         <Component {...pageProps} />
[15:27:02.100]  [2m15[0m | [31;1m|[0m       </>
[15:27:02.100]  [2m16[0m | [31;1m|[0m     );
[15:27:02.100]  [2m17[0m | [31;1m|[0m[31;1m-[0m[31;1m>[0m }
[15:27:02.100]     : [31;1m`[0m[31;1m---[0m[31;1m-[0m [31;1mprevious exported here[0m
[15:27:02.100]  [2m18[0m |     
[15:27:02.100]  [2m19[0m | [33;1m,[0m[33;1m-[0m[33;1m>[0m export default function App({ Component, pageProps }) {
[15:27:02.100]  [2m20[0m | [33;1m|[0m     return (
[15:27:02.100]  [2m21[0m | [33;1m|[0m       <>
[15:27:02.101]  [2m22[0m | [33;1m|[0m         <script
[15:27:02.101]  [2m23[0m | [33;1m|[0m     type="application/ld+json"
[15:27:02.101]  [2m24[0m | [33;1m|[0m     dangerouslySetInnerHTML={{
[15:27:02.101]  [2m25[0m | [33;1m|[0m       __html: JSON.stringify({
[15:27:02.101]  [2m26[0m | [33;1m|[0m         "@context": "https://schema.org",
[15:27:02.101]  [2m27[0m | [33;1m|[0m         "@type": "Organization",
[15:27:02.103]  [2m28[0m | [33;1m|[0m         name: "Wild & Well",
[15:27:02.103]  [2m29[0m | [33;1m|[0m         url: "https://www.wild-and-well.store",
[15:27:02.103]  [2m30[0m | [33;1m|[0m         logo: "https://www.wild-and-well.store/favicon.ico",
[15:27:02.103]  [2m31[0m | [33;1m|[0m         sameAs: [
[15:27:02.104]  [2m32[0m | [33;1m|[0m           "https://www.facebook.com/yourpage",
[15:27:02.104]  [2m33[0m | [33;1m|[0m           "https://www.instagram.com/yourpage",
[15:27:02.107]  [2m34[0m | [33;1m|[0m           "https://www.twitter.com/yourpage"
[15:27:02.108]  [2m35[0m | [33;1m|[0m         ],
[15:27:02.108]  [2m36[0m | [33;1m|[0m         mainEntityOfPage: {
[15:27:02.108]  [2m37[0m | [33;1m|[0m           "@type": "WebPage",
[15:27:02.109]  [2m38[0m | [33;1m|[0m           "@id": "https://www.wild-and-well.store"
[15:27:02.109]  [2m39[0m | [33;1m|[0m         }
[15:27:02.109]  [2m40[0m | [33;1m|[0m       }),
[15:27:02.109]  [2m41[0m | [33;1m|[0m     }}
[15:27:02.110]  [2m42[0m | [33;1m|[0m   />
[15:27:02.110]  [2m43[0m | [33;1m|[0m   
[15:27:02.110]  [2m44[0m | [33;1m|[0m       <Head>
[15:27:02.110]  [2m45[0m | [33;1m|[0m           {/* Basic Meta */}
[15:27:02.111]  [2m46[0m | [33;1m|[0m           <title>Eco + Holistic Blog | Natural Living & Mindful Wellness</title>
[15:27:02.111]  [2m47[0m | [33;1m|[0m           <meta
[15:27:02.111]  [2m48[0m | [33;1m|[0m             name="description"
[15:27:02.111]  [2m49[0m | [33;1m|[0m             content="Wild & Well: Your guide to eco-friendly living, holistic health, and mindful wellness. Explore natural remedies, herbal teas, and sustainable habits."
[15:27:02.115]  [2m50[0m | [33;1m|[0m           />
[15:27:02.116]  [2m51[0m | [33;1m|[0m           <meta name="viewport" content="width=device-width, initial-scale=1" />
[15:27:02.116]  [2m52[0m | [33;1m|[0m           <meta charSet="UTF-8" />
[15:27:02.116]  [2m53[0m | [33;1m|[0m   
[15:27:02.116]  [2m54[0m | [33;1m|[0m           {/* Open Graph (Facebook, LinkedIn, etc.) */}
[15:27:02.117]  [2m55[0m | [33;1m|[0m           <meta property="og:title" content="Eco + Holistic Blog | Wild & Well" />
[15:27:02.117]  [2m56[0m | [33;1m|[0m           <meta
[15:27:02.117]  [2m57[0m | [33;1m|[0m             property="og:description"
[15:27:02.118]  [2m58[0m | [33;1m|[0m             content="Discover natural remedies, herbal teas, and eco-friendly habits for a healthier, sustainable lifestyle."
[15:27:02.118]  [2m59[0m | [33;1m|[0m           />
[15:27:02.118]  [2m60[0m | [33;1m|[0m           <meta property="og:type" content="website" />
[15:27:02.118]  [2m61[0m | [33;1m|[0m           <meta property="og:url" content="https://www.wild-and-well.store" />
[15:27:02.119]  [2m62[0m | [33;1m|[0m           <meta property="og:image" content="/cover.jpg" />
[15:27:02.119]  [2m63[0m | [33;1m|[0m   
[15:27:02.119]  [2m64[0m | [33;1m|[0m           {/* Twitter Card */}
[15:27:02.119]  [2m65[0m | [33;1m|[0m           <meta name="twitter:card" content="summary_large_image" />
[15:27:02.119]  [2m66[0m | [33;1m|[0m           <meta name="twitter:title" content="Eco + Holistic Blog | Wild & Well" />
[15:27:02.120]  [2m67[0m | [33;1m|[0m           <meta
[15:27:02.120]  [2m68[0m | [33;1m|[0m             name="twitter:description"
[15:27:02.120]  [2m69[0m | [33;1m|[0m             content="Tips on holistic health, eco-living, and mindful wellness. 🌱"
[15:27:02.120]  [2m70[0m | [33;1m|[0m           />
[15:27:02.120]  [2m71[0m | [33;1m|[0m           <meta name="twitter:image" content="/cover.jpg" />
[15:27:02.120]  [2m72[0m | [33;1m|[0m   
[15:27:02.120]  [2m73[0m | [33;1m|[0m           {/* Favicon */}
[15:27:02.120]  [2m74[0m | [33;1m|[0m           <link rel="icon" href="/favicon.ico" />
[15:27:02.120]  [2m75[0m | [33;1m|[0m   
[15:27:02.120]  [2m76[0m | [33;1m|[0m           {/* Fonts */}
[15:27:02.120]  [2m77[0m | [33;1m|[0m           <link rel="preconnect" href="https://fonts.googleapis.com" />
[15:27:02.120]  [2m78[0m | [33;1m|[0m           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
[15:27:02.120]  [2m79[0m | [33;1m|[0m           <link
[15:27:02.120]  [2m80[0m | [33;1m|[0m             href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap"
[15:27:02.121]  [2m81[0m | [33;1m|[0m             rel="stylesheet"
[15:27:02.121]  [2m82[0m | [33;1m|[0m           />
[15:27:02.121]  [2m83[0m | [33;1m|[0m         </Head>
[15:27:02.121]  [2m84[0m | [33;1m|[0m         <Component {...pageProps} />
[15:27:02.121]  [2m85[0m | [33;1m|[0m       </>
[15:27:02.121]  [2m86[0m | [33;1m|[0m     );
[15:27:02.121]  [2m87[0m | [33;1m|[0m[33;1m-[0m[33;1m>[0m }
[15:27:02.121]     : [33;1m`[0m[33;1m---[0m[33;1m-[0m [33;1mexported more than once[0m
[15:27:02.121]  [2m88[0m |        
[15:27:02.121]     `----
[15:27:02.121] 
[15:27:02.121] Error: 
[15:27:02.121]   [36m>[0m Exported identifiers must be unique
[15:27:02.121] 
[15:27:02.123] 
[15:27:02.123] > Build failed because of webpack errors
[15:27:02.148] Error: Command "npm run build" exited with 1 
