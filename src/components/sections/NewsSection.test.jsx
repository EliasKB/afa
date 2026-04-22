import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NewsSection } from './NewsSection';

const content = {
  id: 'news',
  eyebrow: 'Updates',
  title: 'News',
  intro: 'Latest from AFA.',
  items: [
    { date: '2026-01-01', title: 'AFA Launched', text: 'We are live.' },
    { date: '2026-02-01', title: 'New Chapter', text: 'AFA West is open.' },
    { date: '2026-03-01', title: 'Events Coming', text: 'Stay tuned.' },
  ],
};

describe('NewsSection', () => {
  it('renders the section with correct id', () => {
    render(<NewsSection content={content} />);
    expect(document.getElementById('news')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<NewsSection content={content} />);
    expect(screen.getByRole('heading', { level: 2, name: 'News' })).toBeInTheDocument();
  });

  it('renders all news items', () => {
    render(<NewsSection content={content} />);
    expect(screen.getByText('AFA Launched')).toBeInTheDocument();
    expect(screen.getByText('New Chapter')).toBeInTheDocument();
    expect(screen.getByText('Events Coming')).toBeInTheDocument();
  });

  it('renders dates for each item', () => {
    render(<NewsSection content={content} />);
    expect(screen.getByText('2026-01-01')).toBeInTheDocument();
    expect(screen.getByText('2026-02-01')).toBeInTheDocument();
  });

  it('renders body text for each item', () => {
    render(<NewsSection content={content} />);
    expect(screen.getByText('We are live.')).toBeInTheDocument();
    expect(screen.getByText('AFA West is open.')).toBeInTheDocument();
  });

  it('renders the correct number of articles', () => {
    render(<NewsSection content={content} />);
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });
});
