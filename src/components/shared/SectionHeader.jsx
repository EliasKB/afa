export function SectionHeader({ eyebrow, intro, title }) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
