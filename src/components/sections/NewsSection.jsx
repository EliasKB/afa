import { SectionHeader } from '../shared/SectionHeader';

export function NewsSection({ content }) {
  return (
    <section id={content.id} className="content-section band-section band-ocean">
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="news-grid">
        {content.items.map((item, index) => {
          const isFeatured = index === 0;
          const isUpcoming = item.upcoming === true;
          const className = [
            'news-card',
            isFeatured ? 'news-card--featured' : '',
            isUpcoming ? 'news-card--upcoming' : '',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <article key={item.title} className={className}>
              <p className="news-card-date">{item.date}</p>
              <h3 className="news-card-title">{item.title}</h3>
              <p className="news-card-body">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
