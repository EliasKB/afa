import { SectionHeader } from '../shared/SectionHeader';

export function ActionSection({ content }) {
  return (
    <section
      id={content.id}
      className={`content-section band-section band-brief action-band action-band--${content.id}`}
    >
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <dl className="detail-list">
        {content.items.map((item) => (
          <div key={item.label} className="detail-row">
            <dt>{item.label}</dt>
            <dd>{item.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
