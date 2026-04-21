import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AboutSection } from './AboutSection';

const content = {
  id: 'about',
  eyebrow: 'About AFA',
  title: 'About Page',
  intro: 'Intro text',
  paragraphs: [
    'AFA is a non-profit community.',
    'Its goal is to help members build successful careers.',
  ],
  highlights: ['Professional identity', 'National network'],
  meetingLabel: 'Meetings',
  meetingInfo: 'Thursdays at 19:00, every other week.',
  focusAreasTitle: 'Focus Areas',
  focusAreas: [
    { title: 'Career Support', description: 'Mentorship and CV review.' },
    { title: 'Innovation', description: 'Hackathons and new initiatives.' },
  ],
};

describe('AboutSection', () => {
  it('renders the section title', () => {
    render(<AboutSection content={content} />);
    expect(screen.getByRole('heading', { level: 2, name: 'About Page' })).toBeInTheDocument();
  });

  it('renders all narrative paragraphs', () => {
    render(<AboutSection content={content} />);
    expect(screen.getByText('AFA is a non-profit community.')).toBeInTheDocument();
    expect(screen.getByText('Its goal is to help members build successful careers.')).toBeInTheDocument();
  });

  it('renders meeting information', () => {
    render(<AboutSection content={content} />);
    expect(screen.getByText('Meetings')).toBeInTheDocument();
    expect(screen.getByText('Thursdays at 19:00, every other week.')).toBeInTheDocument();
  });

  it('renders focus areas', () => {
    render(<AboutSection content={content} />);
    expect(screen.getByText('Focus Areas')).toBeInTheDocument();
    expect(screen.getByText('Career Support:')).toBeInTheDocument();
    expect(screen.getByText('Innovation:')).toBeInTheDocument();
  });
});
