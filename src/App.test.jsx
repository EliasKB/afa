import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

beforeEach(() => {
  window.history.pushState(null, '', '/');
  vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => { cb(); return 0; });
});

describe('App routing', () => {
  it('does not render about, purpose, or chapters content on the homepage', () => {
    render(<App />);
    expect(screen.queryByText('A serious platform for Afghan academics in Sweden')).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Purpose and Goals' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Local Chapters' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'AFA' })).toBeInTheDocument();
  });

  it('keeps Local Chapters out of the header menu while retaining the footer link', () => {
    render(<App />);
    expect(screen.getAllByText('Local Chapters')).toHaveLength(1);
  });

  it('renders the dedicated about page without the homepage hero', () => {
    window.history.pushState(null, '', '/about');
    render(<App />);
    expect(screen.getByText('A serious platform for Afghan academics in Sweden')).toBeInTheDocument();
    expect(screen.getByText('AFA Local Chapters')).toBeInTheDocument();
    expect(screen.queryByText('National academic network')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Learn About AFA' })).not.toBeInTheDocument();
  });

  it('renders the dedicated purpose page without the homepage hero', () => {
    window.history.pushState(null, '', '/purpose');
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Purpose and Goals' })).toBeInTheDocument();
    expect(screen.getByText('AFA Local Chapters')).toBeInTheDocument();
    expect(screen.queryByText('National academic network')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'See Our Goals' })).not.toBeInTheDocument();
  });

  it('renders the dedicated chapters page without the homepage hero', () => {
    window.history.pushState(null, '', '/chapters');
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Local Chapters' })).toBeInTheDocument();
    expect(screen.getByText('AFA Local Chapters')).toBeInTheDocument();
    expect(screen.queryByText('National academic network')).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Learn About AFA' })).not.toBeInTheDocument();
  });

  it('navigates to the dedicated about page from the hero CTA', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('button', { name: 'Learn About AFA' }));
    expect(window.location.pathname).toBe('/about');
    expect(screen.getByText('A serious platform for Afghan academics in Sweden')).toBeInTheDocument();
  });

  it('navigates to the dedicated chapters page from the footer', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('Local Chapters'));
    expect(window.location.pathname).toBe('/chapters');
    expect(screen.getByRole('heading', { name: 'Local Chapters' })).toBeInTheDocument();
  });

  it('navigates to the dedicated chapters hash from the sidebar', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('AFA Stockholm'));
    expect(window.location.pathname).toBe('/chapters');
    expect(window.location.hash).toBe('#chapter-stockholm');
  });
});
