import { SocialIcon } from '../shared/SocialIcon';

function HeroSocialIcon({ icon, label }) {
  return (
    <span className="hero-social-icon" aria-hidden="true">
      <SocialIcon icon={icon} />
      <span>{label}</span>
    </span>
  );
}

export function HeroSection({ content, emblemSrc, onNavigate }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          {content.eyebrow ? <p className="section-eyebrow">{content.eyebrow}</p> : null}
          <h1>{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
          <p className="hero-tagline">{content.tagline}</p>
          <p className="hero-lead">{content.lead}</p>
          {content.body ? <p className="hero-body">{content.body}</p> : null}

          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={() => onNavigate(content.primaryAction.target)}>
              {content.primaryAction.label}
            </button>
            <button className="secondary-button" type="button" onClick={() => onNavigate(content.secondaryAction.target)}>
              {content.secondaryAction.label}
            </button>
          </div>

          <div className="hero-social" aria-label={content.socialLabel}>
            <p>{content.socialPrompt}</p>
            <div className="hero-social-list">
              {content.socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="hero-social-pill"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <HeroSocialIcon icon={link.icon} label={link.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-emblem-shell" aria-hidden="true">
          <img className="hero-emblem" src={emblemSrc} alt="" />
        </div>
      </div>
    </section>
  );
}
