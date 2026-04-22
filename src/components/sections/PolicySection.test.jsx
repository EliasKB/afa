import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PolicySection } from './PolicySection';

const content = {
  id: 'policy',
  eyebrow: 'Community rules',
  title: 'Rules & Policy',
  intro: 'How we work together.',
  groups: [
    { title: 'Respect and courtesy', items: ['Be kind', 'No harassment'] },
    { title: 'Relevant posts', items: ['Stay on topic', 'No off-topic links'] },
    { title: 'No spam or advertising', items: ['No promotional content'] },
    { title: 'Privacy and safety', items: ['Protect personal data', 'Respect anonymity'] },
  ],
};

describe('PolicySection', () => {
  it('renders the section with correct id', () => {
    render(<PolicySection content={content} />);
    expect(document.getElementById('policy')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<PolicySection content={content} />);
    expect(screen.getByRole('heading', { level: 2, name: 'Rules & Policy' })).toBeInTheDocument();
  });

  it('renders all 4 policy group titles', () => {
    render(<PolicySection content={content} />);
    expect(screen.getByRole('heading', { name: 'Respect and courtesy' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Relevant posts' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'No spam or advertising' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Privacy and safety' })).toBeInTheDocument();
  });

  it('renders policy items within each group', () => {
    render(<PolicySection content={content} />);
    expect(screen.getByText('Be kind')).toBeInTheDocument();
    expect(screen.getByText('No harassment')).toBeInTheDocument();
    expect(screen.getByText('Protect personal data')).toBeInTheDocument();
  });

  it('renders 4 policy group articles', () => {
    render(<PolicySection content={content} />);
    expect(screen.getAllByRole('article')).toHaveLength(4);
  });
});
