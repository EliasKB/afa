export const defaultVisibleSections = ['news'];

export const dedicatedPageSections = ['about', 'purpose', 'chapters'];

export const sectionMenuOrder = [
  'about',
  'purpose',
  'policy',
  'news',
  'contact',
  'support',
  'engage',
];

export const pageSectionOrder = [
  'news',
  'policy',
  'contact',
  'support',
  'engage',
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
  'policy',
  'contact',
  'support',
  'engage',
];

export function getParentSectionId(targetId) {
  return chapterAnchorMap[targetId] ?? targetId;
}
