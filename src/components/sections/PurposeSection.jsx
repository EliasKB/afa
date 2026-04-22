import { SectionHeader } from '../shared/SectionHeader';

export function PurposeSection({ content }) {
  return (
    <section id={content.id} className="content-section band-section band-sun">
      <SectionHeader eyebrow={content.eyebrow} intro={content.intro} title={content.title} />

      <ol className="goal-list">
        {content.goals.map((goal, index) => (
          <li key={goal} className="goal-item">
            <span className="goal-index">{String(index + 1).padStart(2, '0')}</span>
            <p>{goal}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
