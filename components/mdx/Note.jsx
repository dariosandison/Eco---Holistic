export default function Note({ children, type = 'info', title }) {
  const color = type === 'warning' ? 'bg-yellow-50 border-yellow-200' : 'bg-blue-50 border-blue-200'
  return (
    <div className={`rounded-xl border ${color} p-4 not-prose`}>
      {title && <div className="font-semibold mb-1">{title}</div>}
      <div className="text-sm">{children}</div>
    </div>
  )
}
