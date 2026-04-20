import { SectionHeader } from '../shared/SectionHeader';

export function ChaptersSection({ content }) {
  return (
    <section id={content.id} className="content-section band-section band-emerald">
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="chapter-list">
        {content.items.map((chapter) => (
          <article key={chapter.id} id={chapter.id} className="chapter-entry">
            <p className="entry-label">{chapter.label}</p>
            <h3>{chapter.title}</h3>
            <p>{chapter.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
