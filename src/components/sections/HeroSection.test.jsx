import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { HeroSection } from './HeroSection';

const content = {
  eyebrow: 'National academic network',
  title: 'AFA',
  subtitle: 'Academics for Afghanistan',
  tagline: 'Connecting Minds, Empowering Futures.',
  lead: 'AFA brings Afghan academics together.',
  body: 'A serious platform for knowledge exchange.',
  primaryAction: { label: 'Read about AFA', target: 'about' },
  secondaryAction: { label: 'See our goals', target: 'purpose' },
  socialLabel: 'Social media',
  socialPrompt: 'Join us on social media',
  socialLinks: [
    { label: 'Discord', icon: 'discord', href: 'https://discord.gg/9RSMFK6W' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/academics_from_afghanistan/' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/109980083' },
  ],
};

describe('HeroSection — rendering', () => {
  it('renders the eyebrow', () => {
    render(<HeroSection content={content} emblemSrc="emblem.png" onNavigate={vi.fn()} />);
    expect(screen.getByText('National academic network')).toBeInTheDocument();
  });

  it('renders the h1 title', () => {
    render(<HeroSection content={content} emblemSrc="emblem.png" onNavigate={vi.fn()} />);
    expect(screen.getByRole('heading', { level: 1, name: 'AFA' })).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<HeroSection content={content} emblemSrc="emblem.png" onNavigate={vi.fn()} />);
    expect(screen.getByText('Academics for Afghanistan')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<HeroSection content={content} emblemSrc="emblem.png" onNavigate={vi.fn()} />);
    expect(screen.getByText('Connecting Minds, Empowering Futures.')).toBeInTheDocument();
  });

  it('renders both CTA buttons', () => {
    render(<HeroSection content={content} emblemSrc="emblem.png" onNavigate={vi.fn()} />);
    expect(screen.getByText('Read about AFA')).toBeInTheDocument();
    expect(screen.getByText('See our goals')).toBeInTheDocument();
  });

  it('renders the social media prompt and icons', () => {
    render(<HeroSection content={content} emblemSrc="emblem.png" onNavigate={vi.fn()} />);
    expect(screen.getByText('Join us on social media')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Discord' })).toHaveAttribute('href', 'https://discord.gg/9RSMFK6W');
    expect(screen.getByRole('link', { name: 'Instagram' })).toHaveAttribute('href', 'https://www.instagram.com/academics_from_afghanistan/');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/company/109980083');
  });

  it('renders the emblem shell and logo', () => {
    render(<HeroSection content={content} emblemSrc="emblem.png" onNavigate={vi.fn()} />);
    expect(document.querySelector('.hero-emblem-shell')).toBeInTheDocument();
    expect(document.querySelector('.hero-emblem')).toHaveAttribute('src', 'emblem.png');
  });

  it('renders the section with id=hero', () => {
    render(<HeroSection content={content} emblemSrc="emblem.png" onNavigate={vi.fn()} />);
    expect(document.getElementById('hero')).toBeInTheDocument();
  });
});

describe('HeroSection — interactions', () => {
  it('calls onNavigate with about when primary button is clicked', async () => {
    const onNavigate = vi.fn();
    render(<HeroSection content={content} emblemSrc="emblem.png" onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('Read about AFA'));
    expect(onNavigate).toHaveBeenCalledWith('about');
  });

  it('calls onNavigate with purpose when secondary button is clicked', async () => {
    const onNavigate = vi.fn();
    render(<HeroSection content={content} emblemSrc="emblem.png" onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('See our goals'));
    expect(onNavigate).toHaveBeenCalledWith('purpose');
  });
});
