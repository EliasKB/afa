import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useSiteState } from './useSiteState';

const defaultVisible = ['news', 'about', 'purpose'];

beforeEach(() => {
  window.location.hash = '';
  document.documentElement.lang = '';
  document.documentElement.removeAttribute('data-theme');
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => { cb(); return 0; });
  vi.spyOn(window.history, 'replaceState').mockImplementation(() => {});
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
    expect(result.current.revealedSections).not.toContain('chapters');
    act(() => result.current.navigateTo('chapters'));
    expect(result.current.revealedSections).toContain('chapters');
  });

  it('does not duplicate an already visible section', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('about'));
    const count = result.current.revealedSections.filter((s) => s === 'about').length;
    expect(count).toBe(1);
  });

  it('reveals chapters when navigating to a chapter anchor', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('chapter-stockholm'));
    expect(result.current.revealedSections).toContain('chapters');
  });

  it('updates URL hash for regular sections', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('contact'));
    expect(window.history.replaceState).toHaveBeenCalledWith(null, '', '#contact');
  });

  it('clears URL hash when navigating to hero', () => {
    const { result } = renderHook(() => useSiteState(defaultVisible));
    act(() => result.current.navigateTo('hero'));
    expect(window.history.replaceState).toHaveBeenCalledWith(
      null, '', expect.stringContaining(window.location.pathname)
    );
  });
});
