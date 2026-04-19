import { useEffect, useState } from 'react';
import heroLogo from '../svart_logo_stor.png';
import brandLogo from '../logo_light.png';
import heroBackdrop from '../afa_bakgrund.png';

const navKeys = ['about', 'regions', 'purpose', 'policy', 'news', 'contact', 'support', 'engage'];
const defaultVisibleSections = ['news'];

const content = {
  sv: {
    brand: 'Akademiker från Afghanistan',
    tagline: 'Connecting Minds, Empowering Futures.',
    nav: {
      about: 'Om oss',
      regions: 'Lokalavdelningar',
      purpose: 'Syfte & mål',
      policy: 'Regler & policy',
      news: 'Nyheter',
      contact: 'Kontakta oss',
      support: 'Stöd oss',
      engage: 'Engagera dig',
    },
    topLinks: ['Stöd oss', 'Engagera dig', 'Nyheter'],
    topTargets: ['support', 'engage', 'news'],
    heroLead:
      'AFA bygger en professionell plattform för afghanska akademiker i Sverige med fokus på nätverk, kunskapsutbyte och långsiktig gemenskap.',
    heroCtaPrimary: 'Läs mer',
    heroCtaSecondary: 'Engagera dig',
    chapterListTitle: 'AFA:s lokalavdelningar',
    chapterListText: 'Regional närvaro och lokala initiativ i hela Sverige.',
    chapterTag: 'Lokalavdelning',
    chapters: [
      {
        key: 'stockholm',
        title: 'AFA Stockholm',
        text: 'För nätverk, seminarier och medlemsaktiviteter i Stockholmsområdet.',
      },
      {
        key: 'west',
        title: 'AFA Väst',
        text: 'För medlemmar i västra Sverige med fokus på karriär, gemenskap och lokala initiativ.',
      },
      {
        key: 'south',
        title: 'AFA Söder',
        text: 'För regional samverkan, kunskapsutbyte och aktiviteter i södra Sverige.',
      },
      {
        key: 'north',
        title: 'AFA Norrland',
        text: 'För att samla akademiker i norra Sverige och skapa nya mötesplatser över större geografiska avstånd.',
      },
    ],
    aboutTitle: 'Om oss',
    aboutText:
      'AFA är ett växande nätverk för afghanska akademiker i Sverige. Vi vill samla erfarenheter, stärka professionella möjligheter och skapa en seriös mötesplats där medlemmar kan utvecklas tillsammans.',
    aboutPoints: [
      'Professionell identitet',
      'Nationellt nätverk',
      'Lokalt engagemang',
    ],
    purposeTitle: 'Syfte och mål',
    purposeText:
      'Våra mål fokuserar på arbete, utbildning, entreprenörskap och långsiktig gemenskap.',
    goals: [
      'Hjälpa akademiker i Sverige att hitta eller byta jobb',
      'Stötta varandra med CV och jobbsökning',
      'Bygga kompetens inom gruppen',
      'Marknadsföra gruppen till andra typer av akademiker',
      'Stötta småföretagare och startups',
      'Hjälpa unga med utbildningsval',
      'Stöd till hemlandet genom utbildningsinsatser',
      'Erbjuda kurser där medlemmar lär av varandra',
      'Skapa nätverk med andra akademiker och företag',
      'Starta YouTube-kanal och Startup Hackathon',
    ],
    policyTitle: 'Regler och policy',
    policyText: 'För att skapa en trygg och professionell miljö arbetar vi utifrån tydliga riktlinjer.',
    policies: [
      {
        title: 'Respekt och hövlighet',
        items: [
          'Behandla alla med vänlighet och respekt.',
          'Ingen diskriminering, hat eller trakasserier tolereras.',
          'Använd ett vårdat språk och undvik förolämpningar.',
        ],
      },
      {
        title: 'Relevanta inlägg',
        items: [
          'Håll diskussionerna akademiska, professionella och konstruktiva.',
          'Politik och andra kontroversiella ämnen bör undvikas.',
          'Delade resurser ska vara relevanta och hjälpsamma.',
        ],
      },
      {
        title: 'Ingen spam eller reklam',
        items: [
          'Ingen reklam för personliga projekt eller tjänster utan tillstånd.',
          'Inga kedjebrev, massutskick eller irrelevanta länkar.',
        ],
      },
      {
        title: 'Sekretess och trygghet',
        items: [
          'Dela inte känsliga eller personliga uppgifter.',
          'Respektera medlemmars anonymitet om de vill vara privata.',
        ],
      },
    ],
    newsTitle: 'Nyheter',
    newsText: 'Uppdateringar, aktiviteter och kommande steg publiceras här.',
    newsItems: [
      {
        date: '19 april 2026',
        title: 'Lansering pågår',
        text: 'Den digitala plattformen för AFA är under uppbyggnad.',
      },
      {
        date: 'Maj 2026',
        title: 'Regional organisering',
        text: 'Arbetet fortsätter med att definiera Stockholm, Väst, Söder och Norrland som tydliga noder.',
      },
      {
        date: 'Kommande',
        title: 'Fler initiativ',
        text: 'Seminarier, nätverksträffar och mentorskap presenteras här.',
      },
    ],
    contactTitle: 'Kontakta oss',
    contactCards: [
      { title: 'E-post', text: 'Academicsfromafghanistan@gmail.com' },
      { title: 'Sociala medier', text: 'Kommer snart' },
      { title: 'Community', text: 'Kommer snart' },
    ],
    supportTitle: 'Stöd oss',
    supportCards: [
      { title: 'Ekonomiskt stöd', text: 'Kommer snart' },
      { title: 'Dela kompetens', text: 'Kommer snart' },
      { title: 'Samarbeta', text: 'Kommer snart' },
    ],
    engageTitle: 'Engagera dig',
    engageCards: [
      { title: 'Bli medlem', text: 'Kommer snart' },
      { title: 'Volontär', text: 'Kommer snart' },
      { title: 'Mentorskap', text: 'Kommer snart' },
    ],
    footerAboutTitle: 'Om AFA',
    footerAboutLinks: ['Om oss', 'Syfte & mål', 'Regler & policy'],
    footerAboutTargets: ['about', 'purpose', 'policy'],
    footerEngageTitle: 'Delta',
    footerEngageLinks: ['Nyheter', 'Stöd oss', 'Engagera dig'],
    footerEngageTargets: ['news', 'support', 'engage'],
    footerContactTitle: 'Kontakt',
    footerContactInfo: ['Academicsfromafghanistan@gmail.com', 'Sociala medier kommer snart', 'Community kommer snart'],
    footerText: 'AFA bygger ett nationellt nätverk för afghanska akademiker i Sverige.',
    copyright: '© 2026 AFA. Alla rättigheter förbehållna.',
    languageLabel: 'Byt språk',
    modeLabel: 'Byt tema',
    menuLabel: 'Öppna meny',
    allSections: 'Alla sektioner',
  },
  en: {
    brand: 'Academics for Afghanistan',
    tagline: 'Connecting Minds, Empowering Futures.',
    nav: {
      about: 'About',
      regions: 'Chapters',
      purpose: 'Purpose & Goals',
      policy: 'Rules & Policy',
      news: 'News',
      contact: 'Contact',
      support: 'Support Us',
      engage: 'Get Involved',
    },
    topLinks: ['Support Us', 'Get Involved', 'News'],
    topTargets: ['support', 'engage', 'news'],
    heroLead:
      'AFA is building a professional platform for Afghan academics in Sweden focused on networking, knowledge sharing, and long-term community.',
    heroCtaPrimary: 'Read More',
    heroCtaSecondary: 'Get Involved',
    chapterListTitle: 'AFA Chapters',
    chapterListText: 'Regional presence and local initiatives across Sweden.',
    chapterTag: 'Local chapter',
    chapters: [
      {
        key: 'stockholm',
        title: 'AFA Stockholm',
        text: 'For networking, seminars, and member activities in the Stockholm region.',
      },
      {
        key: 'west',
        title: 'AFA West',
        text: 'For members in western Sweden with a focus on careers, community, and local initiatives.',
      },
      {
        key: 'south',
        title: 'AFA South',
        text: 'For regional collaboration, knowledge exchange, and activities in southern Sweden.',
      },
      {
        key: 'north',
        title: 'AFA Norrland',
        text: 'To connect academics in northern Sweden and create meeting places across longer distances.',
      },
    ],
    aboutTitle: 'About',
    aboutText:
      'AFA is a growing network for Afghan academics in Sweden. We aim to connect experience, strengthen professional opportunities, and create a serious platform where members can develop together.',
    aboutPoints: ['Professional identity', 'National network', 'Local engagement'],
    purposeTitle: 'Purpose and goals',
    purposeText:
      'Our goals focus on employment, education, entrepreneurship, and long-term community building.',
    goals: [
      'Help academics in Sweden find or change jobs',
      'Support one another with CVs and job applications',
      'Build competence within the group',
      'Reach other academic and professional profiles',
      'Support entrepreneurs and startups',
      'Help young people with educational choices',
      'Support the homeland through education initiatives',
      'Offer courses where members teach one another',
      'Create networks with academics and companies',
      'Launch a YouTube channel and Startup Hackathon',
    ],
    policyTitle: 'Rules and policy',
    policyText: 'To create a safe and professional environment, we work from clear shared guidelines.',
    policies: [
      {
        title: 'Respect and courtesy',
        items: [
          'Treat everyone with kindness and respect.',
          'No discrimination, hate, or harassment is tolerated.',
          'Use considerate language and avoid insults.',
        ],
      },
      {
        title: 'Relevant posts',
        items: [
          'Keep discussions academic, professional, and constructive.',
          'Politics and controversial topics should be avoided.',
          'Shared resources should be relevant and helpful.',
        ],
      },
      {
        title: 'No spam or advertising',
        items: [
          'No promotion of personal projects or services without approval.',
          'No chain messages, mass outreach, or irrelevant links.',
        ],
      },
      {
        title: 'Privacy and safety',
        items: [
          'Do not share sensitive or personal information.',
          'Respect members who choose to remain private.',
        ],
      },
    ],
    newsTitle: 'News',
    newsText: 'Updates, activities, and upcoming steps will be published here.',
    newsItems: [
      {
        date: 'April 19, 2026',
        title: 'Launch in progress',
        text: 'AFA’s digital platform is currently being developed.',
      },
      {
        date: 'May 2026',
        title: 'Regional organization',
        text: 'Work continues on defining Stockholm, West, South, and Norrland as clear nodes.',
      },
      {
        date: 'Coming soon',
        title: 'More initiatives',
        text: 'Seminars, networking events, and mentorship will be presented here.',
      },
    ],
    contactTitle: 'Contact',
    contactCards: [
      { title: 'Email', text: 'Academicsfromafghanistan@gmail.com' },
      { title: 'Social media', text: 'Coming soon' },
      { title: 'Community', text: 'Coming soon' },
    ],
    supportTitle: 'Support us',
    supportCards: [
      { title: 'Financial support', text: 'Coming soon' },
      { title: 'Share expertise', text: 'Coming soon' },
      { title: 'Collaborate', text: 'Coming soon' },
    ],
    engageTitle: 'Get involved',
    engageCards: [
      { title: 'Become a member', text: 'Coming soon' },
      { title: 'Volunteer', text: 'Coming soon' },
      { title: 'Mentorship', text: 'Coming soon' },
    ],
    footerAboutTitle: 'About AFA',
    footerAboutLinks: ['About', 'Purpose & Goals', 'Rules & Policy'],
    footerAboutTargets: ['about', 'purpose', 'policy'],
    footerEngageTitle: 'Participate',
    footerEngageLinks: ['News', 'Support Us', 'Get Involved'],
    footerEngageTargets: ['news', 'support', 'engage'],
    footerContactTitle: 'Contact',
    footerContactInfo: ['Academicsfromafghanistan@gmail.com', 'Social media coming soon', 'Community coming soon'],
    footerText: 'AFA is building a national network for Afghan academics in Sweden.',
    copyright: '© 2026 AFA. All rights reserved.',
    languageLabel: 'Switch language',
    modeLabel: 'Toggle theme',
    menuLabel: 'Open menu',
    allSections: 'All sections',
  },
};

function App() {
  const [language, setLanguage] = useState('sv');
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealedSections, setRevealedSections] = useState(defaultVisibleSections);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');

    if (navKeys.includes(hash)) {
      setRevealedSections((current) => (current.includes(hash) ? current : [...current, hash]));
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, []);

  const t = content[language];

  const scrollToSection = (id) => {
    const isRegionTarget = id.startsWith('region-');
    const targetSection = isRegionTarget ? 'regions' : id;
    const shouldReveal = targetSection !== 'hero' && targetSection !== 'news';

    if (shouldReveal) {
      setRevealedSections((current) =>
        current.includes(targetSection) ? current : [...current, targetSection],
      );
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 30);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setMenuOpen(false);
  };

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="header-shell">
          <nav className="navbar">
            <button className="brand" type="button" onClick={() => scrollToSection('hero')}>
              <img src={brandLogo} alt="AFA logo" />
              <span>AFA</span>
            </button>

            <div className="topbar-links">
              {t.topLinks.map((label, index) => (
                <button key={label} type="button" onClick={() => scrollToSection(t.topTargets[index])}>
                  {label}
                </button>
              ))}
            </div>

            <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
              {navKeys.map((key) => (
                <button key={key} type="button" onClick={() => scrollToSection(key)}>
                  {t.nav[key]}
                </button>
              ))}
            </div>

            <div className="nav-actions">
              <button className="nav-toggle" type="button" onClick={() => setLanguage(language === 'sv' ? 'en' : 'sv')} aria-label={t.languageLabel}>
                {language === 'sv' ? 'EN' : 'SV'}
              </button>
              <button className="nav-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={t.modeLabel}>
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
              <button className="menu-button" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={t.menuLabel}>
                ☰
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-backdrop" style={{ backgroundImage: `linear-gradient(135deg, rgba(8, 21, 43, 0.9), rgba(8, 21, 43, 0.55)), url(${heroBackdrop})` }} />
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">AFA</p>
              <h1>AFA</h1>
              <p className="hero-subtitle">{t.brand}</p>
              <p className="hero-tagline">{t.tagline}</p>
              <p className="hero-lead">{t.heroLead}</p>
              <div className="hero-actions">
                <button type="button" className="primary-button" onClick={() => scrollToSection('about')}>
                  {t.heroCtaPrimary}
                </button>
                <button type="button" className="secondary-button" onClick={() => scrollToSection('engage')}>
                  {t.heroCtaSecondary}
                </button>
              </div>
            </div>
            <img className="hero-logo" src={heroLogo} alt="AFA emblem" />
          </div>
        </section>

        <div className="content-wrap">
          <aside className="chapter-sidebar">
            <div className="chapter-sidebar-inner">
              <p className="sidebar-eyebrow">AFA</p>
              <h2>{t.chapterListTitle}</h2>
              <p>{t.chapterListText}</p>
              <div className="sidebar-links">
                {t.chapters.map((chapter) => (
                  <button key={chapter.key} type="button" onClick={() => scrollToSection(`region-${chapter.key}`)}>
                    {chapter.title}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="content-main">
            <section id="news" className="content-section">
              <SectionHeading eyebrow="AFA" title={t.newsTitle} text={t.newsText} />
              <div className="triple-grid">
                {t.newsItems.map((item) => (
                  <InfoCard key={item.title} date={item.date} title={item.title} text={item.text} />
                ))}
              </div>
            </section>

            {revealedSections.includes('about') ? (
              <section id="about" className="content-section">
                <SectionHeading eyebrow="AFA" title={t.aboutTitle} />
                <div className="about-layout">
                  <div className="single-panel">
                    <p>{t.aboutText}</p>
                  </div>
                  <div className="about-points">
                    {t.aboutPoints.map((point) => (
                      <div key={point} className="about-point">
                        <span />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : null}

            {revealedSections.includes('regions') ? (
              <section id="regions" className="content-section">
                <SectionHeading eyebrow="AFA" title={t.nav.regions} text={t.chapterListText} />
                <div className="chapter-grid">
                  {t.chapters.map((chapter) => (
                    <article key={chapter.key} id={`region-${chapter.key}`} className="chapter-card">
                      <p className="card-date">{t.chapterTag}</p>
                      <h3>{chapter.title}</h3>
                      <p>{chapter.text}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {revealedSections.includes('purpose') ? (
              <section id="purpose" className="content-section">
                <SectionHeading eyebrow="AFA" title={t.purposeTitle} text={t.purposeText} />
                <div className="goal-grid">
                  {t.goals.map((goal, index) => (
                    <article key={goal} className="goal-card">
                      <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                      <p>{goal}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {revealedSections.includes('policy') ? (
              <section id="policy" className="content-section">
                <SectionHeading eyebrow="AFA" title={t.policyTitle} text={t.policyText} />
                <div className="policy-grid">
                  {t.policies.map((policy) => (
                    <article key={policy.title} className="policy-card">
                      <h3>{policy.title}</h3>
                      <ul>
                        {policy.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            {revealedSections.includes('contact') ? (
              <section id="contact" className="content-section">
                <SectionHeading eyebrow="AFA" title={t.contactTitle} />
                <div className="triple-grid">
                  {t.contactCards.map((item) => (
                    <InfoCard key={item.title} title={item.title} text={item.text} />
                  ))}
                </div>
              </section>
            ) : null}

            {revealedSections.includes('support') ? (
              <section id="support" className="content-section">
                <SectionHeading eyebrow="AFA" title={t.supportTitle} />
                <div className="triple-grid">
                  {t.supportCards.map((item) => (
                    <InfoCard key={item.title} title={item.title} text={item.text} />
                  ))}
                </div>
              </section>
            ) : null}

            {revealedSections.includes('engage') ? (
              <section id="engage" className="content-section">
                <SectionHeading eyebrow="AFA" title={t.engageTitle} />
                <div className="triple-grid">
                  {t.engageCards.map((item) => (
                    <InfoCard key={item.title} title={item.title} text={item.text} />
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-layout">
          <div className="footer-brand-column">
            <div className="footer-brand">
              <img src={brandLogo} alt="AFA logo" />
              <div>
                <strong>AFA</strong>
                <p>{t.tagline}</p>
              </div>
            </div>
            <p className="footer-text">{t.footerText}</p>
          </div>

          <div className="footer-column">
            <p className="footer-title">{t.footerAboutTitle}</p>
            <div className="footer-link-list">
              {t.footerAboutLinks.map((label, index) => (
                <button key={label} type="button" onClick={() => scrollToSection(t.footerAboutTargets[index])}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-title">{t.footerEngageTitle}</p>
            <div className="footer-link-list">
              {t.footerEngageLinks.map((label, index) => (
                <button key={label} type="button" onClick={() => scrollToSection(t.footerEngageTargets[index])}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <p className="footer-title">{t.footerContactTitle}</p>
            <div className="footer-link-list static">
              {t.footerContactInfo.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-nav-block">
          <p className="footer-title">{t.allSections}</p>
          <div className="footer-links">
            {navKeys.map((key) => (
              <button key={key} type="button" onClick={() => scrollToSection(key)}>
                {t.nav[key]}
              </button>
            ))}
          </div>
        </div>

        <p className="copyright">{t.copyright}</p>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  );
}

function InfoCard({ date, title, text }) {
  return (
    <article className="info-card">
      {date ? <p className="card-date">{date}</p> : null}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default App;
