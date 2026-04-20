import { SectionHeader } from '../shared/SectionHeader';

export function NewsSection({ content }) {
  return (
    <section id={content.id} className="content-section band-section band-ocean">
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="notice-list">
        {content.items.map((item) => (
          <article key={item.title} className="notice-item">
            <p className="notice-date">{item.date}</p>
            <div className="notice-copy">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
