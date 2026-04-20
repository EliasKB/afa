export function HeroSection({
  content,
  darkEmblemSrc,
  lightEmblemSrc,
  onNavigate,
  theme,
}) {
  const emblemSrc = theme === 'light' ? lightEmblemSrc : darkEmblemSrc;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="section-eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
          <p className="hero-tagline">{content.tagline}</p>
          <p className="hero-lead">{content.lead}</p>
          <p className="hero-body">{content.body}</p>

          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={() => onNavigate(content.primaryAction.target)}>
              {content.primaryAction.label}
            </button>
            <button className="secondary-button" type="button" onClick={() => onNavigate(content.secondaryAction.target)}>
              {content.secondaryAction.label}
            </button>
          </div>
        </div>

        <div className="hero-emblem-shell" aria-hidden="true">
          <img className="hero-emblem" src={emblemSrc} alt="" />
        </div>
      </div>
    </section>
  );
}
