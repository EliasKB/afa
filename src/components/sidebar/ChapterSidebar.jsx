export function ChapterSidebar({ content, onNavigate }) {
  return (
    <aside className="chapter-sidebar">
      <div className="chapter-sidebar-rail">
        <p className="section-eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p className="sidebar-copy">{content.text}</p>

        <div className="chapter-sidebar-links">
          {content.chapters.map((chapter) => (
            <button key={chapter.target} type="button" onClick={() => onNavigate(chapter.target)}>
              {chapter.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
