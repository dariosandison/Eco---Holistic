// pages/guides/index.jsx
import GuideCard from "../../components/GuideCard";
import { getAllGuides } from "../../lib/content";

export default function GuidesPage({ guides = [] }){
  return (
    <>
      <h1 style={{ color:"#fff", marginTop: 12 }}>Guides</h1>
      <div className="grid-guides">
        {guides.map(g => <GuideCard key={g.slug} guide={g} />)}
      </div>
    </>
  );
}

export async function getStaticProps(){
  const guides = getAllGuides();
  return { props: { guides } };
}
