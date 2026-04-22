import { SectionHeader } from '../shared/SectionHeader';

export function PolicySection({ content }) {
  return (
    <section id={content.id} className="content-section band-section band-deep">
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <div className="policy-grid">
        {content.groups.map((group) => (
          <article key={group.title} className="policy-group">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
