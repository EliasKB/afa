import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PurposeSection } from './PurposeSection';

const content = {
  id: 'purpose',
  eyebrow: 'What we stand for',
  title: 'Purpose & Goals',
  intro: 'Our ten goals.',
  goals: [
    'Help academics find jobs',
    'Support CV writing',
    'Build competence',
    'Promote to audiences',
    'Support startups',
    'Help young people',
    'Support the homeland',
    'Offer peer courses',
    'Create networks',
    'Start a YouTube channel',
  ],
};

describe('PurposeSection', () => {
  it('renders the section with correct id', () => {
    render(<PurposeSection content={content} />);
    expect(document.getElementById('purpose')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<PurposeSection content={content} />);
    expect(screen.getByRole('heading', { level: 2, name: 'Purpose & Goals' })).toBeInTheDocument();
  });

  it('renders all 10 goals', () => {
    render(<PurposeSection content={content} />);
    content.goals.forEach((goal) => {
      expect(screen.getByText(goal)).toBeInTheDocument();
    });
  });

  it('renders zero-padded index for first goal', () => {
    render(<PurposeSection content={content} />);
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('renders zero-padded index for tenth goal', () => {
    render(<PurposeSection content={content} />);
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  it('renders an ordered list', () => {
    render(<PurposeSection content={content} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
