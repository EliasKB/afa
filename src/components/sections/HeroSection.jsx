const socialIconPaths = {
  discord:
    'M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.347-.403.805-.552 1.165a18.27 18.27 0 0 0-5.668 0A12.606 12.606 0 0 0 9.109 3a19.736 19.736 0 0 0-4.435 1.372C1.842 8.583 1.075 12.692 1.458 16.745a19.9 19.9 0 0 0 5.029 2.548c.407-.556.771-1.146 1.083-1.768-.595-.226-1.166-.508-1.705-.84.143-.104.282-.214.417-.326 3.292 1.505 6.86 1.505 10.113 0 .139.112.278.222.417.326-.54.333-1.112.615-1.706.84.312.622.676 1.212 1.084 1.768a19.84 19.84 0 0 0 5.03-2.548c.451-4.698-.77-8.77-3.903-12.376ZM8.02 14.318c-.987 0-1.796-.908-1.796-2.021 0-1.114.796-2.022 1.796-2.022 1 0 1.809.908 1.796 2.022 0 1.113-.797 2.021-1.796 2.021Zm7.974 0c-.987 0-1.796-.908-1.796-2.021 0-1.114.796-2.022 1.796-2.022.999 0 1.809.908 1.796 2.022 0 1.113-.797 2.021-1.796 2.021Z',
  instagram:
    'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Zm5.25-3.25a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25Z',
  linkedin:
    'M4.75 3.5A1.75 1.75 0 1 1 3 5.25 1.75 1.75 0 0 1 4.75 3.5ZM3 8h3.5v13H3V8Zm5.5 0H12v1.9h.1c.5-.9 1.8-2.4 3.9-2.4 4.2 0 5 2.8 5 6.5V21H17.5v-6.1c0-1.4 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H8.5V8Z',
};

function SocialIcon({ icon, label }) {
  return (
    <span className="hero-social-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d={socialIconPaths[icon]} />
      </svg>
      <span>{label}</span>
    </span>
  );
}

export function HeroSection({ content, emblemSrc, onNavigate }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="section-eyebrow">{content.eyebrow}</p>
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
                  <SocialIcon icon={link.icon} label={link.label} />
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
