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
  footerSectionOrder,
  pageSectionOrder,
  sectionMenuOrder,
} from './constants/siteMap';
import { useSiteState } from './hooks/useSiteState';

function App() {
  const {
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
  const footerItems = footerSectionOrder.map((id) => ({
    id,
    label: content.navigation[id],
  }));

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
        <HeroSection
          content={content.hero}
          darkEmblemSrc={heroEmblem}
          lightEmblemSrc={brandLogo}
          onNavigate={navigateTo}
          theme={theme}
        />

        <div className="main-grid">
          <ChapterSidebar content={content.sidebar} onNavigate={navigateTo} />

          <div className="content-column">
            {pageSectionOrder.map((sectionId) => {
              if (!revealedSections.includes(sectionId)) {
                return null;
              }

              if (sectionId === 'news') {
                return <NewsSection key={sectionId} content={content.news} />;
              }

              if (sectionId === 'about') {
                return <AboutSection key={sectionId} content={content.about} />;
              }

              if (sectionId === 'purpose') {
                return <PurposeSection key={sectionId} content={content.purpose} />;
              }

              if (sectionId === 'chapters') {
                return <ChaptersSection key={sectionId} content={content.chapters} />;
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
            })}
          </div>
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
