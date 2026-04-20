import { describe, expect, it } from 'vitest';
import {
  chapterAnchorMap,
  defaultVisibleSections,
  footerSectionOrder,
  getParentSectionId,
  pageSectionOrder,
  revealableSections,
  sectionMenuOrder,
} from './siteMap';

describe('siteMap constants', () => {
  it('defaultVisibleSections contains news, about, purpose', () => {
    expect(defaultVisibleSections).toEqual(expect.arrayContaining(['news', 'about', 'purpose']));
  });

  it('sectionMenuOrder contains all 8 navigation sections', () => {
    expect(sectionMenuOrder).toHaveLength(8);
    expect(sectionMenuOrder).toEqual(
      expect.arrayContaining(['about', 'chapters', 'purpose', 'policy', 'news', 'contact', 'support', 'engage'])
    );
  });

  it('pageSectionOrder contains all 8 content sections', () => {
    expect(pageSectionOrder).toHaveLength(8);
    expect(pageSectionOrder).toEqual(
      expect.arrayContaining(['news', 'about', 'purpose', 'chapters', 'policy', 'contact', 'support', 'engage'])
    );
  });

  it('footerSectionOrder contains expected sections', () => {
    expect(footerSectionOrder).toEqual(
      expect.arrayContaining(['about', 'purpose', 'news', 'contact', 'support', 'engage'])
    );
  });

  it('revealableSections includes all navigable sections', () => {
    expect(revealableSections).toEqual(
      expect.arrayContaining(['about', 'news', 'purpose', 'chapters', 'policy', 'contact', 'support', 'engage'])
    );
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
