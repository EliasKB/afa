import { SectionHeader } from '../shared/SectionHeader';

export function AboutSection({ content }) {
  return (
    <section id={content.id} className="content-section band-section band-neutral">
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="about-layout">
        <div className="narrative-block">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="identity-list">
          {content.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
