// components/AuthorBox.jsx
import Image from 'next/image';

export default function AuthorBox({
  name = 'Wild & Well Editorial',
  title = 'Editor',
  avatar = '/avatar.png',
  updated,
  bio = 'We test low-tox products and publish honest, evidence-informed picks.'
}) {
  return (
    <aside className="authorbox" aria-label="About the author">
      <Image
        src={avatar}
        alt=""
        width={56}
        height={56}
        className="authorbox-avatar"
        loading="lazy"
      />
      <div>
        <p className="authorbox-name">{name}</p>
        <p className="authorbox-title">{title}</p>
        {updated ? <p className="authorbox-updated">Updated {new Date(updated).toLocaleDateString()}</p> : null}
        <p className="authorbox-bio">{bio}</p>
      </div>
    </aside>
  );
}
