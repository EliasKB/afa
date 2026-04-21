import { describe, expect, it } from 'vitest';
import {
  chapterAnchorMap,
  dedicatedPageSections,
  defaultVisibleSections,
  footerSectionOrder,
  getParentSectionId,
  pageSectionOrder,
  revealableSections,
  sectionMenuOrder,
} from './siteMap';

describe('siteMap constants', () => {
  it('defaultVisibleSections only keeps news visible on first load', () => {
    expect(defaultVisibleSections).toEqual(['news']);
  });

  it('sectionMenuOrder excludes chapters from the header menu', () => {
    expect(sectionMenuOrder).toHaveLength(7);
    expect(sectionMenuOrder).toEqual(
      expect.arrayContaining(['about', 'purpose', 'policy', 'news', 'contact', 'support', 'engage'])
    );
    expect(sectionMenuOrder).not.toContain('chapters');
  });

  it('dedicatedPageSections contains about, purpose, and chapters', () => {
    expect(dedicatedPageSections).toEqual(['about', 'purpose', 'chapters']);
  });

  it('pageSectionOrder contains the 5 homepage content sections', () => {
    expect(pageSectionOrder).toHaveLength(5);
    expect(pageSectionOrder).toEqual(
      expect.arrayContaining(['news', 'policy', 'contact', 'support', 'engage'])
    );
    expect(pageSectionOrder).not.toContain('chapters');
  });

  it('footerSectionOrder contains expected sections', () => {
    expect(footerSectionOrder).toEqual(
      expect.arrayContaining(['about', 'purpose', 'chapters', 'news', 'contact', 'support', 'engage'])
    );
  });

  it('revealableSections only includes homepage-revealable sections', () => {
    expect(revealableSections).toEqual(
      expect.arrayContaining(['news', 'policy', 'contact', 'support', 'engage'])
    );
    expect(revealableSections).not.toContain('about');
    expect(revealableSections).not.toContain('purpose');
    expect(revealableSections).not.toContain('chapters');
  });

  it('chapterAnchorMap maps all 4 chapters to chapters section', () => {
    expect(chapterAnchorMap['chapter-stockholm']).toBe('chapters');
    expect(chapterAnchorMap['chapter-west']).toBe('chapters');
    expect(chapterAnchorMap['chapter-south']).toBe('chapters');
    expect(chapterAnchorMap['chapter-norrland']).toBe('chapters');
  });
});

describe('getParentSectionId', () => {
  it('returns chapters for chapter anchors', () => {
    expect(getParentSectionId('chapter-stockholm')).toBe('chapters');
    expect(getParentSectionId('chapter-west')).toBe('chapters');
    expect(getParentSectionId('chapter-south')).toBe('chapters');
    expect(getParentSectionId('chapter-norrland')).toBe('chapters');
  });

  it('returns the id itself for regular section ids', () => {
    expect(getParentSectionId('about')).toBe('about');
    expect(getParentSectionId('news')).toBe('news');
    expect(getParentSectionId('purpose')).toBe('purpose');
    expect(getParentSectionId('contact')).toBe('contact');
    expect(getParentSectionId('hero')).toBe('hero');
  });
});
