export default function YouTube({ id, title = 'YouTube video' }) {
  if (!id) return null
  return (
    <div className="not-prose aspect-video w-full overflow-hidden rounded-2xl border">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
