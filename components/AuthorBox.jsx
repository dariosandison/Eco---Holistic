export default function AuthorBox() {
  return (
    <div className="card" style={{display:'flex', gap:16, alignItems:'center'}}>
      <img src="/author.jpg" alt="Author" width="64" height="64" style={{borderRadius:12}} />
      <div>
        <strong>About the author</strong>
        <p style={{margin:'6px 0 0', color:'#4b5563'}}>
          Practical, research-informed wellness with an eco-friendly slant. Opinions are our own; this is not medical advice.
        </p>
      </div>
    </div>
  );
}
