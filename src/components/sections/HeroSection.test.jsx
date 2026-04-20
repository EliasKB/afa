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
};

describe('HeroSection — rendering', () => {
  it('renders the eyebrow', () => {
    render(<HeroSection content={content} darkEmblemSrc="dark.png" lightEmblemSrc="light.png" onNavigate={vi.fn()} theme="dark" />);
    expect(screen.getByText('National academic network')).toBeInTheDocument();
  });

  it('renders the h1 title', () => {
    render(<HeroSection content={content} darkEmblemSrc="dark.png" lightEmblemSrc="light.png" onNavigate={vi.fn()} theme="dark" />);
    expect(screen.getByRole('heading', { level: 1, name: 'AFA' })).toBeInTheDocument();
  });

  it('renders the subtitle', () => {
    render(<HeroSection content={content} darkEmblemSrc="dark.png" lightEmblemSrc="light.png" onNavigate={vi.fn()} theme="dark" />);
    expect(screen.getByText('Academics for Afghanistan')).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<HeroSection content={content} darkEmblemSrc="dark.png" lightEmblemSrc="light.png" onNavigate={vi.fn()} theme="dark" />);
    expect(screen.getByText('Connecting Minds, Empowering Futures.')).toBeInTheDocument();
  });

  it('renders both CTA buttons', () => {
    render(<HeroSection content={content} darkEmblemSrc="dark.png" lightEmblemSrc="light.png" onNavigate={vi.fn()} theme="dark" />);
    expect(screen.getByText('Read about AFA')).toBeInTheDocument();
    expect(screen.getByText('See our goals')).toBeInTheDocument();
  });

  it('uses darkEmblemSrc in dark mode', () => {
    render(<HeroSection content={content} darkEmblemSrc="dark.png" lightEmblemSrc="light.png" onNavigate={vi.fn()} theme="dark" />);
    expect(document.querySelector('.hero-emblem')).toHaveAttribute('src', 'dark.png');
  });

  it('uses lightEmblemSrc in light mode', () => {
    render(<HeroSection content={content} darkEmblemSrc="dark.png" lightEmblemSrc="light.png" onNavigate={vi.fn()} theme="light" />);
    expect(document.querySelector('.hero-emblem')).toHaveAttribute('src', 'light.png');
  });

  it('renders the section with id=hero', () => {
    render(<HeroSection content={content} darkEmblemSrc="dark.png" lightEmblemSrc="light.png" onNavigate={vi.fn()} theme="dark" />);
    expect(document.getElementById('hero')).toBeInTheDocument();
  });
});

describe('HeroSection — interactions', () => {
  it('calls onNavigate with about when primary button is clicked', async () => {
    const onNavigate = vi.fn();
    render(<HeroSection content={content} darkEmblemSrc="dark.png" lightEmblemSrc="light.png" onNavigate={onNavigate} theme="dark" />);
    await userEvent.click(screen.getByText('Read about AFA'));
    expect(onNavigate).toHaveBeenCalledWith('about');
  });

  it('calls onNavigate with purpose when secondary button is clicked', async () => {
    const onNavigate = vi.fn();
    render(<HeroSection content={content} darkEmblemSrc="dark.png" lightEmblemSrc="light.png" onNavigate={onNavigate} theme="dark" />);
    await userEvent.click(screen.getByText('See our goals'));
    expect(onNavigate).toHaveBeenCalledWith('purpose');
  });
});
