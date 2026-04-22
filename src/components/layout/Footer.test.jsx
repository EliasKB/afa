import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Footer } from './Footer';

const content = {
  title: 'AFA',
  tagline: 'Connecting Minds, Empowering Futures.',
  overviewTitle: 'About AFA',
  overviewLinks: [
    { label: 'About Us', target: 'about' },
    { label: 'Purpose & Goals', target: 'purpose' },
    { label: 'Local Chapters', target: 'chapters' },
  ],
  participateTitle: 'Participate',
  participateLinks: [
    { label: 'News', target: 'news' },
    { label: 'Support Us', target: 'support' },
    { label: 'Get Involved', target: 'engage' },
  ],
  contactTitle: 'Contact',
  contactDetails: ['Academicsfromafghanistan@gmail.com'],
  copyright: '© 2026 AFA. All rights reserved.',
};

describe('Footer — rendering', () => {
  it('renders the overview column title', () => {
    render(<Footer brandLogo="logo.png" content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('About AFA')).toBeInTheDocument();
  });

  it('renders the participate column title', () => {
    render(<Footer brandLogo="logo.png" content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('Participate')).toBeInTheDocument();
  });

  it('renders the contact column title', () => {
    render(<Footer brandLogo="logo.png" content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders all overview links', () => {
    render(<Footer brandLogo="logo.png" content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Purpose & Goals')).toBeInTheDocument();
    expect(screen.getByText('Local Chapters')).toBeInTheDocument();
  });

  it('renders all participate links', () => {
    render(<Footer brandLogo="logo.png" content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('Support Us')).toBeInTheDocument();
    expect(screen.getByText('Get Involved')).toBeInTheDocument();
  });

  it('renders contact email as static text', () => {
    render(<Footer brandLogo="logo.png" content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('Academicsfromafghanistan@gmail.com')).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer brandLogo="logo.png" content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('© 2026 AFA. All rights reserved.')).toBeInTheDocument();
  });

  it('renders brand title and tagline in bottom bar', () => {
    render(<Footer brandLogo="logo.png" content={content} onNavigate={vi.fn()} />);
    expect(screen.getByText('AFA')).toBeInTheDocument();
    expect(screen.getByText('Connecting Minds, Empowering Futures.')).toBeInTheDocument();
  });

  it('renders the brand logo image', () => {
    render(<Footer brandLogo="logo.png" content={content} onNavigate={vi.fn()} />);
    expect(screen.getByAltText('AFA logo')).toHaveAttribute('src', 'logo.png');
  });
});

describe('Footer — interactions', () => {
  it('calls onNavigate with about when About Us is clicked', async () => {
    const onNavigate = vi.fn();
    render(<Footer brandLogo="logo.png" content={content} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('About Us'));
    expect(onNavigate).toHaveBeenCalledWith('about');
  });

  it('calls onNavigate with purpose when Purpose & Goals is clicked', async () => {
    const onNavigate = vi.fn();
    render(<Footer brandLogo="logo.png" content={content} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('Purpose & Goals'));
    expect(onNavigate).toHaveBeenCalledWith('purpose');
  });

  it('calls onNavigate with support when Support Us is clicked', async () => {
    const onNavigate = vi.fn();
    render(<Footer brandLogo="logo.png" content={content} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('Support Us'));
    expect(onNavigate).toHaveBeenCalledWith('support');
  });

  it('calls onNavigate with engage when Get Involved is clicked', async () => {
    const onNavigate = vi.fn();
    render(<Footer brandLogo="logo.png" content={content} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('Get Involved'));
    expect(onNavigate).toHaveBeenCalledWith('engage');
  });
});
