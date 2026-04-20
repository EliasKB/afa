import { useEffect, useState } from 'react';
import { getParentSectionId, revealableSections } from '../constants/siteMap';

function scrollToTarget(targetId) {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}

export function useSiteState(initialSections) {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealedSections, setRevealedSections] = useState(initialSections);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');

    if (!hash) {
      return;
    }

    const parentSectionId = getParentSectionId(hash);

    if (!revealableSections.includes(parentSectionId)) {
      return;
    }

    setRevealedSections((current) =>
      current.includes(parentSectionId) ? current : [...current, parentSectionId],
    );

    scrollToTarget(hash);
  }, []);

  const navigateTo = (targetId) => {
    const parentSectionId = getParentSectionId(targetId);
    const shouldReveal = revealableSections.includes(parentSectionId);

    if (shouldReveal) {
      setRevealedSections((current) =>
        current.includes(parentSectionId) ? current : [...current, parentSectionId],
      );
    }

    if (targetId === 'hero') {
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${window.location.search}`,
      );
    } else {
      window.history.replaceState(null, '', `#${targetId}`);
    }

    scrollToTarget(targetId);
    setMenuOpen(false);
  };

  return {
    language,
    menuOpen,
    navigateTo,
    revealedSections,
    setLanguage,
    setMenuOpen,
    setRevealedSections,
    theme,
    toggleLanguage: () => setLanguage((current) => (current === 'sv' ? 'en' : 'sv')),
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  };
}
