export const defaultVisibleSections = ['news'];

export const dedicatedPageSections = ['about', 'purpose', 'chapters', 'policy', 'contact', 'support', 'engage'];

export const sectionMenuOrder = [
  'about',
  'purpose',
  'policy',
  'news',
  'contact',
  'support',
  'engage',
];

export const sectionMenuGroups = [
  { id: 'who-we-are', items: ['about', 'purpose', 'policy'] },
  { id: 'get-involved', items: ['chapters', 'support', 'engage'] },
  { id: 'follow', items: ['news', 'contact'] },
];

export const pageSectionOrder = [
  'news',
];

export const footerSectionOrder = [
  'about',
  'purpose',
  'chapters',
  'news',
  'contact',
  'support',
  'engage',
];

export const chapterAnchorMap = {
  'chapter-stockholm': 'chapters',
  'chapter-west': 'chapters',
  'chapter-south': 'chapters',
  'chapter-norrland': 'chapters',
};

export const revealableSections = [
  'news',
];

export function getParentSectionId(targetId) {
  return chapterAnchorMap[targetId] ?? targetId;
}
