export default function SearchAndFilter({ value, onChange, tags, activeTag, onTagToggle }){
  return (
    <div className="searchWrap">
      <input
        type="search"
        placeholder="Search guides…"
        value={value}
        onChange={e=>onChange(e.target.value)}
        aria-label="Search guides"
      />
      <div className="filters" role="listbox" aria-label="Filter by topic">
        <button
          className={`filterBtn ${activeTag==='' ? 'active':''}`}
          onClick={()=>onTagToggle('')}
        >All</button>
        {tags.map(tag=>(
          <button
            key={tag}
            className={`filterBtn ${activeTag===tag ? 'active':''}`}
            onClick={()=>onTagToggle(tag)}
          >{tag}</button>
        ))}
      </div>
    </div>
  );
}
