import Image from "next/image";

export default function AuthorBox({ name, title, avatar, updated, bio }) {
  return (
    <aside className="authorbox">
      <Image
        src={avatar || "/avatar.png"}
        alt=""
        className="authorbox-avatar"
        width={96}
        height={96}
      />
      <div className="authorbox-meta">
        <p className="authorbox-name">
          {name} <span className="authorbox-title">— {title}</span>
        </p>
        {updated ? (
          <p className="authorbox-updated">
            Updated {new Date(updated).toLocaleDateString()}
          </p>
        ) : null}
        {bio ? <p className="authorbox-bio">{bio}</p> : null}
      </div>
    </aside>
  );
}

