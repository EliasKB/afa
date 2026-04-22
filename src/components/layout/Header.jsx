import { SectionMenu } from '../navigation/SectionMenu';

export function Header({
  brandLogo,
  content,
  darkBrandLogo,
  menuItems,
  menuOpen,
  onNavigate,
  onToggleLanguage,
  onToggleMenu,
  onToggleTheme,
  theme,
}) {
  const logoSrc = theme === 'dark' ? darkBrandLogo : brandLogo;

  return (
    <header className="site-header">
      <div className="header-shell">
        <div className="header-bar">
          <button className="brand-mark" type="button" onClick={() => onNavigate('hero')}>
            <img src={logoSrc} alt="AFA logo" />
            <span className="brand-wordmark">{content.brandName}</span>
          </button>

          <div className="utility-links" aria-label="Quick links">
            {content.utilityLinks.map((link) => (
              <button key={link.target} type="button" onClick={() => onNavigate(link.target)}>
                {link.label}
              </button>
            ))}
          </div>

          <div className="header-actions">
            <button
              className="menu-trigger"
              type="button"
              aria-expanded={menuOpen}
              aria-label={content.menuButtonAria}
              onClick={onToggleMenu}
            >
              <span>{content.menuButtonLabel}</span>
              <span className="menu-trigger-icon" aria-hidden="true">
                {menuOpen ? (
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="4" y1="4" x2="16" y2="16" />
                    <line x1="16" y1="4" x2="4" y2="16" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <line x1="3" y1="6" x2="17" y2="6" />
                    <line x1="3" y1="10" x2="17" y2="10" />
                    <line x1="3" y1="14" x2="17" y2="14" />
                  </svg>
                )}
              </span>
            </button>

            <button
              className="header-action"
              type="button"
              aria-label={content.languageToggleAria}
              onClick={onToggleLanguage}
            >
              {content.languageToggle}
            </button>

            <button
              className="header-action"
              type="button"
              aria-label={content.themeToggleAria}
              onClick={onToggleTheme}
            >
              {content.themeLabels[theme]}
            </button>
          </div>
        </div>

        <SectionMenu
          items={menuItems}
          isOpen={menuOpen}
          onNavigate={onNavigate}
          title={content.menuTitle}
        />
      </div>
    </header>
  );
}
