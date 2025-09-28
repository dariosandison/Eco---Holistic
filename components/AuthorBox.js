// components/AuthorBox.js
export default function AuthorBox({
  name = "Wild & Well Editorial",
  title = "Editor",
  avatar = "/avatar.png",
  updated,
  bio = "We test low-tox products and publish honest, evidence-informed picks."
}) {
  return (
    <aside className="authorbox">
      <img src={avatar} alt="" className="authorbox-avatar" />
      <div className="authorbox-meta">
        <p className="authorbox-name">{name} <span className="authorbox-title">— {title}</span></p>
        {updated ? <p className="authorbox-updated">Updated {new Date(updated).toLocaleDateString()}</p> : null}
        <p className="authorbox-bio">{bio}</p>
      </div>
    </aside>
  );
}
