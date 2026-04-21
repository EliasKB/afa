import { useEffect, useState } from 'react';
import {
  dedicatedPageSections,
  getParentSectionId,
  revealableSections,
} from '../constants/siteMap';

function scrollToTarget(targetId) {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView?.({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
}

function getCurrentPage(pathname) {
  if (pathname === '/about') {
    return 'about';
  }

  if (pathname === '/purpose') {
    return 'purpose';
  }

  if (pathname === '/chapters') {
    return 'chapters';
  }

  return 'home';
}

function getPathForTarget(targetId) {
  if (targetId === 'about') {
    return '/about';
  }

  if (targetId === 'purpose') {
    return '/purpose';
  }

  if (targetId === 'chapters') {
    return '/chapters';
  }

  if (targetId.startsWith('chapter-')) {
    return `/chapters#${targetId}`;
  }

  if (targetId === 'hero') {
    return '/';
  }

  return `/#${targetId}`;
}

export function useSiteState(initialSections) {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [revealedSections, setRevealedSections] = useState(initialSections);
  const [currentPage, setCurrentPage] = useState(() => getCurrentPage(window.location.pathname));

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const syncLocationState = () => {
      const nextPage = getCurrentPage(window.location.pathname);
      setCurrentPage(nextPage);

      if (nextPage === 'chapters') {
        const hash = window.location.hash.replace('#', '');

        if (hash) {
          scrollToTarget(hash);
        } else {
          scrollToTarget('chapters');
        }

        return;
      }

      if (nextPage !== 'home') {
        return;
      }

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
    };

    syncLocationState();
    window.addEventListener('popstate', syncLocationState);

    return () => {
      window.removeEventListener('popstate', syncLocationState);
    };
  }, []);

  const navigateTo = (targetId) => {
    const nextPath = getPathForTarget(targetId);
    const isDedicatedPage = dedicatedPageSections.includes(targetId);
    const parentSectionId = getParentSectionId(targetId);
    const shouldReveal = revealableSections.includes(parentSectionId);

    if (shouldReveal) {
      setRevealedSections((current) =>
        current.includes(parentSectionId) ? current : [...current, parentSectionId],
      );
    }

    window.history.pushState(null, '', nextPath);
    setCurrentPage(isDedicatedPage || targetId.startsWith('chapter-') ? getCurrentPage(new URL(nextPath, window.location.origin).pathname) : 'home');

    if (targetId.startsWith('chapter-')) {
      window.dispatchEvent(new Event('hashchange'));
    }

    scrollToTarget(targetId);
    setMenuOpen(false);
  };

  return {
    currentPage,
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
