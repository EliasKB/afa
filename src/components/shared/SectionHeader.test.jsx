import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SectionHeader } from './SectionHeader';

describe('SectionHeader', () => {
  it('renders the eyebrow text', () => {
    render(<SectionHeader eyebrow="Our Mission" title="About AFA" />);
    expect(screen.getByText('Our Mission')).toBeInTheDocument();
  });

  it('renders the title as an h2', () => {
    render(<SectionHeader eyebrow="Our Mission" title="About AFA" />);
    expect(screen.getByRole('heading', { level: 2, name: 'About AFA' })).toBeInTheDocument();
  });

  it('renders the intro paragraph when provided', () => {
    render(<SectionHeader eyebrow="E" title="T" intro="Intro text here" />);
    expect(screen.getByText('Intro text here')).toBeInTheDocument();
  });

  it('does not render an intro paragraph when omitted', () => {
    render(<SectionHeader eyebrow="E" title="T" />);
    expect(screen.queryByText(/intro/i)).not.toBeInTheDocument();
  });
});
