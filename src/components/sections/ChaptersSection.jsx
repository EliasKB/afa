import { useEffect, useState } from 'react';
import { SectionHeader } from '../shared/SectionHeader';

function getHashChapterId(items) {
  const hash = window.location.hash.replace('#', '');

  return items.some((chapter) => chapter.id === hash) ? hash : null;
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="5 8 10 13 15 8" />
    </svg>
  );
}

function EventStrip({ event, logoSrc }) {
  const [posterOpen, setPosterOpen] = useState(false);

  return (
    <article className="chapter-event-strip">
      <div className="chapter-event-body">
        {(event.date || event.location) ? (
          <div className="chapter-event-meta-row">
            {logoSrc ? <img className="chapter-event-meta-logo" src={logoSrc} alt="" aria-hidden="true" /> : null}
            <p className="chapter-event-meta">
              {[event.date, event.location].filter(Boolean).join(' · ')}
            </p>
          </div>
        ) : null}

        <h4>{event.title}</h4>

        {event.image ? (
          <div className={`chapter-event-poster-wrap${posterOpen ? ' is-open' : ''}`}>
            <button
              className="chapter-event-poster-toggle"
              type="button"
              onClick={() => setPosterOpen((v) => !v)}
              aria-expanded={posterOpen}
            >
              <span>{posterOpen ? 'Hide poster' : 'View poster'}</span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="3 6 8 11 13 6" />
              </svg>
            </button>
            <div className="chapter-event-poster-panel">
              <img
                className="chapter-event-poster"
                src={event.image.src}
                alt={event.image.alt}
              />
            </div>
          </div>
        ) : null}

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

        {event.closing ? (
          <p className="chapter-event-closing">{event.closing}</p>
        ) : null}
      </div>
    </article>
  );
}

export function ChaptersSection({ content, logoSrc }) {
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
        {content.items.map((chapter) => {
          const isOpen = openChapterId === chapter.id;
          return (
            <article
              key={chapter.id}
              id={chapter.id}
              className={`chapter-entry${isOpen ? ' is-open' : ''}`}
              data-accent={chapter.accent}
            >
              <button
                id={`${chapter.id}-toggle`}
                className="chapter-toggle"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${chapter.id}-panel`}
                onClick={() =>
                  setOpenChapterId((current) => (current === chapter.id ? null : chapter.id))
                }
              >
                {chapter.label ? <span className="entry-label">{chapter.label}</span> : null}
                <span className="chapter-toggle-heading">{chapter.title}</span>
                {!isOpen ? (
                  <span className="chapter-teaser">{chapter.summary}</span>
                ) : null}
                <span className="chapter-toggle-icon">
                  <ChevronIcon />
                </span>
              </button>

              {isOpen ? (
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
                        <EventStrip key={event.id} event={event} logoSrc={logoSrc} />
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
