import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ChaptersSection } from './ChaptersSection';

const content = {
  id: 'chapters',
  eyebrow: 'Local presence',
  title: 'Local Chapters',
  intro: 'AFA across Sweden.',
  items: [
    {
      id: 'chapter-stockholm',
      label: 'Local chapter',
      title: 'AFA Stockholm',
      summary: 'Capital chapter.',
      events: [
        {
          id: 'event-stockholm-2026-03-01',
          title: 'Entrepreneurship Day',
          paragraphs: ['Stockholm spring event.'],
          image: { src: 'stockholm.png', alt: 'Stockholm poster' },
        },
      ],
    },
    {
      id: 'chapter-west',
      label: 'Local chapter',
      title: 'AFA West',
      summary: 'Western Sweden.',
      events: [
        {
          id: 'event-gothenburg-2026-05-02',
          title: 'Gothenburg Event',
          paragraphs: ['West coast event.'],
        },
      ],
    },
    { id: 'chapter-south', label: 'Local chapter', title: 'AFA South', summary: 'Southern Sweden.' },
    { id: 'chapter-norrland', label: 'Local chapter', title: 'AFA Norrland', summary: 'Northern Sweden.' },
  ],
};

beforeEach(() => {
  window.history.pushState(null, '', '/chapters');
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => { cb(); return 0; });
});

describe('ChaptersSection', () => {
  it('renders the section with correct id', () => {
    render(<ChaptersSection content={content} />);
    expect(document.getElementById('chapters')).toBeInTheDocument();
  });

  it('renders all chapter toggle buttons', () => {
    render(<ChaptersSection content={content} />);
    expect(screen.getByRole('button', { name: /AFA Stockholm/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /AFA West/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /AFA South/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /AFA Norrland/ })).toBeInTheDocument();
  });

  it('keeps chapter details collapsed by default', () => {
    render(<ChaptersSection content={content} />);
    expect(screen.queryByText('Capital chapter.')).not.toBeInTheDocument();
    expect(screen.queryByText('Entrepreneurship Day')).not.toBeInTheDocument();
  });

  it('opens one chapter and renders its event content and image', async () => {
    render(<ChaptersSection content={content} />);
    await userEvent.click(screen.getByRole('button', { name: /AFA Stockholm/ }));
    expect(screen.getByText('Capital chapter.')).toBeInTheDocument();
    expect(screen.getByText('Entrepreneurship Day')).toBeInTheDocument();
    expect(screen.getByText('Stockholm spring event.')).toBeInTheDocument();
    expect(screen.getByAltText('Stockholm poster')).toHaveAttribute('src', 'stockholm.png');
  });

  it('closes the previous chapter when another chapter is opened', async () => {
    render(<ChaptersSection content={content} />);
    await userEvent.click(screen.getByRole('button', { name: /AFA Stockholm/ }));
    expect(screen.getByText('Capital chapter.')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /AFA West/ }));
    expect(screen.queryByText('Capital chapter.')).not.toBeInTheDocument();
    expect(screen.getByText('Western Sweden.')).toBeInTheDocument();
    expect(screen.getByText('Gothenburg Event')).toBeInTheDocument();
  });

  it('opens the chapter targeted by the hash on first render', () => {
    window.history.pushState(null, '', '/chapters#chapter-stockholm');
    render(<ChaptersSection content={content} />);
    expect(screen.getByText('Capital chapter.')).toBeInTheDocument();
    expect(screen.getByText('Entrepreneurship Day')).toBeInTheDocument();
  });

  it('renders summary-only chapters without event cards', async () => {
    render(<ChaptersSection content={content} />);
    await userEvent.click(screen.getByRole('button', { name: /AFA South/ }));
    expect(screen.getByText('Southern Sweden.')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
