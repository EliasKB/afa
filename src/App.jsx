import brandLogo from './assets/logo_light.png';
import heroEmblem from './assets/svart_logo_stor.png';
import circleLogoLight from './assets/logo_light_circle.png';
import circleLogoDark from './assets/svart_logo_stor_circle.png';
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
  sectionMenuGroups as menuGroupDefs,
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

  const sectionMenuItems = menuGroupDefs.map((group) => ({
    groupId: group.id,
    groupLabel: content.navigationGroups[group.id],
    items: group.items.map((id) => ({
      id,
      label: content.navigation[id],
      hint: content.navigationHints[id],
    })),
  }));
  const isHomePage = currentPage === 'home';

  let contentSections = null;

  if (currentPage === 'about') {
    contentSections = <AboutSection content={content.about} />;
  } else if (currentPage === 'purpose') {
    contentSections = <PurposeSection content={content.purpose} />;
  } else if (currentPage === 'chapters') {
    contentSections = <ChaptersSection content={content.chapters} logoSrc={theme === 'dark' ? circleLogoDark : circleLogoLight} />;
  } else if (currentPage === 'policy') {
    contentSections = <PolicySection content={content.policy} />;
  } else if (currentPage === 'contact') {
    contentSections = <ActionSection content={content.contact} />;
  } else if (currentPage === 'support') {
    contentSections = <ActionSection content={content.support} />;
  } else if (currentPage === 'engage') {
    contentSections = <ActionSection content={content.engage} />;
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
        brandLogo={circleLogoLight}
        content={content.header}
        darkBrandLogo={circleLogoDark}
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
        brandLogo={circleLogoLight}
        darkBrandLogo={circleLogoDark}
        theme={theme}
        content={content.footer}
        onNavigate={navigateTo}
      />
    </div>
  );
}

export default App;
