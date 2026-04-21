import brandLogo from './assets/logo_light.png';
import heroEmblem from './assets/svart_logo_stor.png';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ChapterSidebar } from './components/sidebar/ChapterSidebar';
import { AboutSection } from './components/sections/AboutSection';
import { ActionSection } from './components/sections/ActionSection';
import { ChaptersSection } from './components/sections/ChaptersSection';
import { HeroSection } from './components/sections/HeroSection';
import { NewsSection } from './components/sections/NewsSection';
import { PolicySection } from './components/sections/PolicySection';
import { PurposeSection } from './components/sections/PurposeSection';
import { siteContent } from './content/siteContent';
import {
  defaultVisibleSections,
  pageSectionOrder,
  sectionMenuOrder,
} from './constants/siteMap';
import { useSiteState } from './hooks/useSiteState';

function App() {
  const {
    currentPage,
    language,
    menuOpen,
    navigateTo,
    revealedSections,
    setMenuOpen,
    toggleLanguage,
    toggleTheme,
    theme,
  } = useSiteState(defaultVisibleSections);
  const content = siteContent[language];

  const sectionMenuItems = sectionMenuOrder.map((id) => ({
    id,
    label: content.navigation[id],
  }));
  const isHomePage = currentPage === 'home';

  let contentSections = null;

  if (currentPage === 'about') {
    contentSections = <AboutSection content={content.about} />;
  } else if (currentPage === 'purpose') {
    contentSections = <PurposeSection content={content.purpose} />;
  } else if (currentPage === 'chapters') {
    contentSections = <ChaptersSection content={content.chapters} />;
  } else {
    contentSections = pageSectionOrder.map((sectionId) => {
      if (!revealedSections.includes(sectionId)) {
        return null;
      }

      if (sectionId === 'news') {
        return <NewsSection key={sectionId} content={content.news} />;
      }

      if (sectionId === 'policy') {
        return <PolicySection key={sectionId} content={content.policy} />;
      }

      if (sectionId === 'contact') {
        return <ActionSection key={sectionId} content={content.contact} />;
      }

      if (sectionId === 'support') {
        return <ActionSection key={sectionId} content={content.support} />;
      }

      if (sectionId === 'engage') {
        return <ActionSection key={sectionId} content={content.engage} />;
      }

      return null;
    });
  }

  return (
    <div className="page-shell">
      <Header
        brandLogo={brandLogo}
        content={content.header}
        darkBrandLogo={heroEmblem}
        menuItems={sectionMenuItems}
        menuOpen={menuOpen}
        onNavigate={navigateTo}
        onToggleLanguage={toggleLanguage}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      <main className="site-main">
        {isHomePage ? (
          <HeroSection
            content={content.hero}
            emblemSrc={theme === 'dark' ? heroEmblem : brandLogo}
            onNavigate={navigateTo}
          />
        ) : null}

        <div className="main-grid">
          <ChapterSidebar content={content.sidebar} onNavigate={navigateTo} />

          <div className="content-column">{contentSections}</div>
        </div>
      </main>

      <Footer
        brandLogo={brandLogo}
        content={content.footer}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default App;
