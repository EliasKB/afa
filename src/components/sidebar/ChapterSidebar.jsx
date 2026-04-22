import { useEffect, useState } from 'react';

function getActiveChapterId(chapters) {
  const hash = window.location.hash.replace('#', '');
  return chapters.some((ch) => ch.target === hash) ? hash : null;
}

export function ChapterSidebar({ content, onNavigate }) {
  const [activeChapterId, setActiveChapterId] = useState(() =>
    getActiveChapterId(content.chapters),
  );

  useEffect(() => {
    const sync = () => setActiveChapterId(getActiveChapterId(content.chapters));
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, [content.chapters]);

  return (
    <aside className="chapter-sidebar">
      <div className="chapter-sidebar-rail">
        <p className="section-eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        {content.text ? <p className="sidebar-copy">{content.text}</p> : null}

        <div className="chapter-sidebar-links">
          {content.chapters.map((chapter) => (
            <button
              key={chapter.target}
              type="button"
              data-accent={chapter.accent}
              className={activeChapterId === chapter.target ? 'is-active' : undefined}
              onClick={() => onNavigate(chapter.target)}
            >
              {chapter.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
