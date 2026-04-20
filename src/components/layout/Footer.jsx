export function Footer({ brandLogo, content, onNavigate }) {
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
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">{content.copyright}</p>
        <div className="footer-brand-mark brand-mark">
          <img src={brandLogo} alt="AFA logo" />
          <span className="footer-brand-wordmark">
            {content.title}
            <p>{content.tagline}</p>
          </span>
        </div>
      </div>
    </footer>
  );
}
