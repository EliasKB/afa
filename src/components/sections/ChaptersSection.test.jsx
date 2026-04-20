import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ChaptersSection } from './ChaptersSection';

const content = {
  id: 'chapters',
  eyebrow: 'Local presence',
  title: 'Local Chapters',
  intro: 'AFA across Sweden.',
  items: [
    { id: 'chapter-stockholm', label: 'Local chapter', title: 'AFA Stockholm', summary: 'Capital chapter.' },
    { id: 'chapter-west', label: 'Local chapter', title: 'AFA West', summary: 'Western Sweden.' },
    { id: 'chapter-south', label: 'Local chapter', title: 'AFA South', summary: 'Southern Sweden.' },
    { id: 'chapter-norrland', label: 'Local chapter', title: 'AFA Norrland', summary: 'Northern Sweden.' },
  ],
};

describe('ChaptersSection', () => {
  it('renders the section with correct id', () => {
    render(<ChaptersSection content={content} />);
    expect(document.getElementById('chapters')).toBeInTheDocument();
  });

  it('renders the section title', () => {
    render(<ChaptersSection content={content} />);
    expect(screen.getByRole('heading', { level: 2, name: 'Local Chapters' })).toBeInTheDocument();
  });

  it('renders all chapter titles', () => {
    render(<ChaptersSection content={content} />);
    expect(screen.getByRole('heading', { name: 'AFA Stockholm' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'AFA West' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'AFA South' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'AFA Norrland' })).toBeInTheDocument();
  });

  it('renders each chapter summary', () => {
    render(<ChaptersSection content={content} />);
    expect(screen.getByText('Capital chapter.')).toBeInTheDocument();
    expect(screen.getByText('Northern Sweden.')).toBeInTheDocument();
  });

  it('gives each chapter article its anchor id', () => {
    render(<ChaptersSection content={content} />);
    expect(document.getElementById('chapter-stockholm')).toBeInTheDocument();
    expect(document.getElementById('chapter-west')).toBeInTheDocument();
    expect(document.getElementById('chapter-south')).toBeInTheDocument();
    expect(document.getElementById('chapter-norrland')).toBeInTheDocument();
  });

  it('renders the correct number of chapter articles', () => {
    render(<ChaptersSection content={content} />);
    expect(screen.getAllByRole('article')).toHaveLength(4);
  });
});
