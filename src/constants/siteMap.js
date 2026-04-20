export const defaultVisibleSections = ['news', 'about', 'purpose'];

export const sectionMenuOrder = [
  'about',
  'chapters',
  'purpose',
  'policy',
  'news',
  'contact',
  'support',
  'engage',
];

export const pageSectionOrder = [
  'news',
  'about',
  'purpose',
  'chapters',
  'policy',
  'contact',
  'support',
  'engage',
];

export const footerSectionOrder = [
  'about',
  'purpose',
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
  'about',
  'news',
  'purpose',
  'chapters',
  'policy',
  'contact',
  'support',
  'engage',
];

export function getParentSectionId(targetId) {
  return chapterAnchorMap[targetId] ?? targetId;
}
