import { SocialIcon } from '../shared/SocialIcon';

export function Footer({ brandLogo, darkBrandLogo, theme, content, onNavigate }) {
  const logoSrc = theme === 'dark' ? darkBrandLogo : brandLogo;
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-column">
          <p className="footer-column-title">{content.overviewTitle}</p>
          <div className="footer-link-list">
            {content.overviewLinks.map((link) => (
              <button key={link.target} type="button" onClick={() => onNavigate(link.target)}>
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-column-title">{content.participateTitle}</p>
          <div className="footer-link-list">
            {content.participateLinks.map((link) => (
              <button key={link.target} type="button" onClick={() => onNavigate(link.target)}>
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-column-title">{content.contactTitle}</p>
          <div className="footer-static-list">
            {content.contactDetails.map((item) => (
              <a key={item} href={`mailto:${item}`} className="footer-email-link">{item}</a>
            ))}
          </div>
          {content.socialLinks?.length ? (
            <div className="footer-social-icons">
              {content.socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="footer-social-icon"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <SocialIcon icon={link.icon} />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">{content.copyright}</p>
        <div className="footer-brand-mark brand-mark">
          <img src={logoSrc} alt="AFA logo" />
          <span className="footer-brand-wordmark">
            {content.title}
            <p>{content.tagline}</p>
          </span>
        </div>
      </div>
    </footer>
  );
}
