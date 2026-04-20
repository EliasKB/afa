import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ChapterSidebar } from './ChapterSidebar';

const content = {
  eyebrow: 'Regional presence',
  title: 'AFA Local Chapters',
  text: 'Our chapters across Sweden.',
  chapters: [
    { label: 'AFA Stockholm', target: 'chapter-stockholm' },
    { label: 'AFA West', target: 'chapter-west' },
    { label: 'AFA South', target: 'chapter-south' },
    { label: 'AFA Norrland', target: 'chapter-norrland' },
  ],
};

describe('ChapterSidebar — rendering', () => {
  it('renders the eyebrow', () => {
    render(<ChapterSidebar content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('Regional presence')).toBeInTheDocument();
  });

  it('renders the title as an h2', () => {
    render(<ChapterSidebar content={content} onNavigate={vi.fn()} />);
    expect(screen.getByRole('heading', { level: 2, name: 'AFA Local Chapters' })).toBeInTheDocument();
  });

  it('renders the descriptive text', () => {
    render(<ChapterSidebar content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('Our chapters across Sweden.')).toBeInTheDocument();
  });

  it('renders all 4 chapter buttons', () => {
    render(<ChapterSidebar content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('AFA Stockholm')).toBeInTheDocument();
    expect(screen.getByText('AFA West')).toBeInTheDocument();
    expect(screen.getByText('AFA South')).toBeInTheDocument();
    expect(screen.getByText('AFA Norrland')).toBeInTheDocument();
  });
});

describe('ChapterSidebar — interactions', () => {
  it('calls onNavigate with chapter-stockholm when Stockholm is clicked', async () => {
    const onNavigate = vi.fn();
    render(<ChapterSidebar content={content} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('AFA Stockholm'));
    expect(onNavigate).toHaveBeenCalledWith('chapter-stockholm');
  });

  it('calls onNavigate with chapter-west when West is clicked', async () => {
    const onNavigate = vi.fn();
    render(<ChapterSidebar content={content} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('AFA West'));
    expect(onNavigate).toHaveBeenCalledWith('chapter-west');
  });

  it('calls onNavigate with chapter-south when South is clicked', async () => {
    const onNavigate = vi.fn();
    render(<ChapterSidebar content={content} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('AFA South'));
    expect(onNavigate).toHaveBeenCalledWith('chapter-south');
  });

  it('calls onNavigate with chapter-norrland when Norrland is clicked', async () => {
    const onNavigate = vi.fn();
    render(<ChapterSidebar content={content} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('AFA Norrland'));
    expect(onNavigate).toHaveBeenCalledWith('chapter-norrland');
  });
});
