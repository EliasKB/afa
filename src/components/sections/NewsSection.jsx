import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { SocialIcon } from '../shared/SocialIcon';
import { SectionHeader } from '../shared/SectionHeader';

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return createPortal(
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <img
        className="lightbox-img"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
}

export function NewsSection({ content }) {
  const [lightbox, setLightbox] = useState(null);

  const sorted = [...content.items].sort((a, b) => {
    if (a.upcoming && !b.upcoming) return -1;
    if (!a.upcoming && b.upcoming) return 1;
    return 0;
  });

  return (
    <section id={content.id} className="content-section band-section band-ocean">
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="news-timeline">
        {sorted.map((item) => {
          const isUpcoming = item.upcoming === true;
          const isFeatured = !!(item.image || item.body?.length || item.images?.length);
          const className = [
            'tl-item',
            isUpcoming ? 'tl-item--upcoming' : 'tl-item--past',
            isFeatured ? 'tl-item--featured' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <article key={item.title} className={className}>
              <span className="tl-dot" aria-hidden="true" />

              <div className="tl-content">
                <p className="news-card-date">{item.date}</p>
                <h3 className="news-card-title">{item.title}</h3>
                {item.text ? <p className="news-card-body">{item.text}</p> : null}

                {item.images?.length === 2 ? (
                  <>
                    <div className="news-photo-grid">
                      <button
                        className="news-thumb-btn"
                        onClick={() => setLightbox(item.images[0])}
                        aria-label="View full size"
                      >
                        <img className="news-thumb" src={item.images[0].src} alt={item.images[0].alt} />
                      </button>
                      <div className="news-photo-text">
                        {item.body?.map((p) => (
                          <p key={p} className="news-card-body">{p}</p>
                        ))}
                      </div>
                      <button
                        className="news-thumb-btn"
                        onClick={() => setLightbox(item.images[1])}
                        aria-label="View full size"
                      >
                        <img className="news-thumb" src={item.images[1].src} alt={item.images[1].alt} />
                      </button>
                    </div>
                    {item.link ? (
                      <a className="news-card-link" href={item.link.href} target="_blank" rel="noreferrer">
                        <SocialIcon icon="instagram" />
                        <span>{item.link.label}</span>
                      </a>
                    ) : null}
                  </>
                ) : item.image && item.body?.length ? (
                  <div className="news-card-media-row">
                    <img className="news-card-image" src={item.image.src} alt={item.image.alt} />
                    <div className="news-card-media-side">
                      <div className="news-card-body-paragraphs">
                        {item.body.map((p) => (
                          <p key={p} className="news-card-body">{p}</p>
                        ))}
                      </div>
                      {item.link ? (
                        <a className="news-card-link" href={item.link.href} target="_blank" rel="noreferrer">
                          <SocialIcon icon="instagram" />
                          <span>{item.link.label}</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                ) : item.image ? (
                  <img className="news-card-image" src={item.image.src} alt={item.image.alt} />
                ) : item.body?.length ? (
                  <div className="news-card-body-paragraphs">
                    {item.body.map((p) => (
                      <p key={p} className="news-card-body">{p}</p>
                    ))}
                  </div>
                ) : null}

                {!item.image && !item.images && item.link ? (
                  <a className="news-card-link" href={item.link.href} target="_blank" rel="noreferrer">
                    <SocialIcon icon="instagram" />
                    <span>{item.link.label}</span>
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      {lightbox ? (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      ) : null}
    </section>
  );
}
