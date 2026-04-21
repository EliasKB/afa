import { useEffect, useState } from 'react';
import { SectionHeader } from '../shared/SectionHeader';

function getHashChapterId(items) {
  const hash = window.location.hash.replace('#', '');

  return items.some((chapter) => chapter.id === hash) ? hash : null;
}

export function ChaptersSection({ content }) {
  const [openChapterId, setOpenChapterId] = useState(() => getHashChapterId(content.items));

  useEffect(() => {
    const syncOpenChapter = () => {
      setOpenChapterId(getHashChapterId(content.items));
    };

    syncOpenChapter();
    window.addEventListener('hashchange', syncOpenChapter);

    return () => {
      window.removeEventListener('hashchange', syncOpenChapter);
    };
  }, [content.items]);

  return (
    <section id={content.id} className="content-section band-section band-emerald">
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="chapter-list">
        {content.items.map((chapter) => (
          <article key={chapter.id} id={chapter.id} className={`chapter-entry${openChapterId === chapter.id ? ' is-open' : ''}`}>
            <button
              id={`${chapter.id}-toggle`}
              className="chapter-toggle"
              type="button"
              aria-expanded={openChapterId === chapter.id}
              aria-controls={`${chapter.id}-panel`}
              onClick={() => setOpenChapterId((current) => (current === chapter.id ? null : chapter.id))}
            >
              <span className="entry-label">{chapter.label}</span>
              <span className="chapter-toggle-heading">{chapter.title}</span>
              <span className="chapter-toggle-icon" aria-hidden="true">
                {openChapterId === chapter.id ? '−' : '+'}
              </span>
            </button>

            {openChapterId === chapter.id ? (
              <div
                id={`${chapter.id}-panel`}
                className="chapter-panel"
                role="region"
                aria-labelledby={`${chapter.id}-toggle`}
              >
                <p className="chapter-summary">{chapter.summary}</p>

                {chapter.events?.length ? (
                  <div className="chapter-event-list">
                    {chapter.events.map((event) => (
                      <article key={event.id} className="chapter-event-card">
                        <h4>{event.title}</h4>

                        <div className="chapter-event-copy">
                          {event.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>

                        {event.bullets?.length ? (
                          <ul className="chapter-event-bullets">
                            {event.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        ) : null}

                        {event.closing ? <p className="chapter-event-closing">{event.closing}</p> : null}

                        {event.image ? (
                          <img
                            className="chapter-event-image"
                            src={event.image.src}
                            alt={event.image.alt}
                          />
                        ) : null}
                      </article>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
