import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useSiteState } from './useSiteState';

const defaultVisible = ['news'];

beforeEach(() => {
  window.history.pushState(null, '', '/');
  document.documentElement.lang = '';
  document.documentElement.removeAttribute('data-theme');
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => { cb(); return 0; });
  vi.spyOn(window.history, 'pushState');
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('useSiteState — initialisation', () => {
  it('starts with english language', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    expect(result.current.language).toBe('en');
  });

  it('starts with dark theme', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    expect(result.current.theme).toBe('dark');
  });

  it('starts with menu closed', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    expect(result.current.menuOpen).toBe(false);
  });

  it('starts with the provided initial sections', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    expect(result.current.revealedSections).toEqual(defaultVisible);
  });

  it('reads the current page from the pathname', () => {
    window.history.pushState(null, '', '/about');
    const { result } = renderHook(() => useSiteState(defaultVisible));
    expect(result.current.currentPage).toBe('about');
  });

  it('reads chapters as a dedicated page from the pathname', () => {
    window.history.pushState(null, '', '/chapters');
    const { result } = renderHook(() => useSiteState(defaultVisible));
    expect(result.current.currentPage).toBe('chapters');
  });
});

describe('useSiteState — DOM side effects', () => {
  it('sets html lang attribute when language changes', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    expect(document.documentElement.lang).toBe('en');
    act(() => result.current.toggleLanguage());
    expect(document.documentElement.lang).toBe('sv');
  });

  it('sets data-theme attribute when theme changes', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    expect(document.documentElement.dataset.theme).toBe('dark');
    act(() => result.current.toggleTheme());
    expect(document.documentElement.dataset.theme).toBe('light');
  });
});

describe('useSiteState — toggleLanguage', () => {
  it('switches from en to sv', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.toggleLanguage());
    expect(result.current.language).toBe('sv');
  });

  it('switches back from sv to en', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.toggleLanguage());
    act(() => result.current.toggleLanguage());
    expect(result.current.language).toBe('en');
  });
});

describe('useSiteState — toggleTheme', () => {
  it('switches from dark to light', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe('light');
  });

  it('switches back from light to dark', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.toggleTheme());
    act(() => result.current.toggleTheme());
    expect(result.current.theme).toBe('dark');
  });
});

describe('useSiteState — menu', () => {
  it('setMenuOpen opens the menu', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.setMenuOpen(true));
    expect(result.current.menuOpen).toBe(true);
  });

  it('setMenuOpen closes the menu', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.setMenuOpen(true));
    act(() => result.current.setMenuOpen(false));
    expect(result.current.menuOpen).toBe(false);
  });
});

describe('useSiteState — navigateTo', () => {
  it('closes the menu after navigation', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.setMenuOpen(true));
    act(() => result.current.navigateTo('about'));
    expect(result.current.menuOpen).toBe(false);
  });

  it('reveals a hidden section when navigating to it', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    expect(result.current.revealedSections).not.toContain('contact');
    act(() => result.current.navigateTo('contact'));
    expect(result.current.revealedSections).toContain('contact');
  });

  it('does not duplicate an already visible section', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('news'));
    const count = result.current.revealedSections.filter((s) => s === 'news').length;
    expect(count).toBe(1);
  });

  it('navigates to the dedicated chapters page', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('chapters'));
    expect(result.current.currentPage).toBe('chapters');
    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '/chapters');
  });

  it('routes chapter anchors to the dedicated chapters page hash', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('chapter-stockholm'));
    expect(result.current.currentPage).toBe('chapters');
    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '/chapters#chapter-stockholm');
  });

  it('navigates to /about for the dedicated about page', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('about'));
    expect(result.current.currentPage).toBe('about');
    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '/about');
  });

  it('returns to the homepage and reveals the target section from a dedicated page', () => {
    window.history.pushState(null, '', '/about');
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('contact'));
    expect(result.current.currentPage).toBe('home');
    expect(result.current.revealedSections).toContain('contact');
    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '/#contact');
  });

  it('updates URL hash for regular homepage sections', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('contact'));
    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '/#contact');
  });

  it('returns to the homepage root when navigating to hero', () => {
    window.history.pushState(null, '', '/purpose');
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('hero'));
    expect(result.current.currentPage).toBe('home');
    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '/');
  });
});
