import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Header } from './Header';

const content = {
  brandName: 'AFA',
  utilityLinks: [
    { label: 'News', target: 'news' },
    { label: 'Support Us', target: 'support' },
    { label: 'Contact', target: 'contact' },
  ],
  languageToggle: 'EN',
  languageToggleAria: 'Switch language',
  themeToggleAria: 'Switch theme',
  themeLabels: { dark: 'Light', light: 'Dark' },
  menuButtonLabel: 'Menu',
  menuButtonAria: 'Open section menu',
  menuTitle: 'Navigate',
};

const menuItems = [
  { id: 'about', label: 'About Us' },
  { id: 'news', label: 'News' },
];

const defaultProps = {
  brandLogo: 'logo_light.png',
  darkBrandLogo: 'logo_dark.png',
  content,
  menuItems,
  menuOpen: false,
  theme: 'dark',
  onNavigate: vi.fn(),
  onToggleLanguage: vi.fn(),
  onToggleMenu: vi.fn(),
  onToggleTheme: vi.fn(),
};

describe('Header — rendering', () => {
  it('renders the brand name', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByText('AFA')).toBeInTheDocument();
  });

  it('renders all utility links', () => {
    render(<Header {...defaultProps} />);
    const utilityLinks = screen.getByLabelText('Quick links');
    expect(within(utilityLinks).getByText('News')).toBeInTheDocument();
    expect(within(utilityLinks).getByText('Support Us')).toBeInTheDocument();
    expect(within(utilityLinks).getByText('Contact')).toBeInTheDocument();
  });

  it('renders the menu button', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  it('renders the language toggle', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByLabelText('Switch language')).toBeInTheDocument();
  });

  it('renders the theme toggle', () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByLabelText('Switch theme')).toBeInTheDocument();
  });

  it('shows Light label in dark mode', () => {
    render(<Header {...defaultProps} theme="dark" />);
    expect(screen.getByLabelText('Switch theme')).toHaveTextContent('Light');
  });

  it('shows Dark label in light mode', () => {
    render(<Header {...defaultProps} theme="light" />);
    expect(screen.getByLabelText('Switch theme')).toHaveTextContent('Dark');
  });

  it('uses darkBrandLogo in dark mode', () => {
    render(<Header {...defaultProps} theme="dark" />);
    expect(screen.getByAltText('AFA logo')).toHaveAttribute('src', 'logo_dark.png');
  });

  it('uses brandLogo in light mode', () => {
    render(<Header {...defaultProps} theme="light" />);
    expect(screen.getByAltText('AFA logo')).toHaveAttribute('src', 'logo_light.png');
  });

  it('sets aria-expanded to false when menu is closed', () => {
    render(<Header {...defaultProps} menuOpen={false} />);
    expect(screen.getByLabelText('Open section menu')).toHaveAttribute('aria-expanded', 'false');
  });

  it('sets aria-expanded to true when menu is open', () => {
    render(<Header {...defaultProps} menuOpen={true} />);
    expect(screen.getByLabelText('Open section menu')).toHaveAttribute('aria-expanded', 'true');
  });

  it('shows + icon when menu is closed', () => {
    render(<Header {...defaultProps} menuOpen={false} />);
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('shows − icon when menu is open', () => {
    render(<Header {...defaultProps} menuOpen={true} />);
    expect(screen.getByText('−')).toBeInTheDocument();
  });
});

describe('Header — interactions', () => {
  it('calls onNavigate with hero when brand mark is clicked', async () => {
    const onNavigate = vi.fn();
    render(<Header {...defaultProps} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('AFA'));
    expect(onNavigate).toHaveBeenCalledWith('hero');
  });

  it('calls onNavigate with news when News utility link is clicked', async () => {
    const onNavigate = vi.fn();
    render(<Header {...defaultProps} onNavigate={onNavigate} />);
    const utilityLinks = screen.getByLabelText('Quick links');
    await userEvent.click(within(utilityLinks).getByText('News'));
    expect(onNavigate).toHaveBeenCalledWith('news');
  });

  it('calls onNavigate with support when Support Us is clicked', async () => {
    const onNavigate = vi.fn();
    render(<Header {...defaultProps} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByText('Support Us'));
    expect(onNavigate).toHaveBeenCalledWith('support');
  });

  it('calls onToggleMenu when menu button is clicked', async () => {
    const onToggleMenu = vi.fn();
    render(<Header {...defaultProps} onToggleMenu={onToggleMenu} />);
    await userEvent.click(screen.getByLabelText('Open section menu'));
    expect(onToggleMenu).toHaveBeenCalled();
  });

  it('calls onToggleLanguage when language button is clicked', async () => {
    const onToggleLanguage = vi.fn();
    render(<Header {...defaultProps} onToggleLanguage={onToggleLanguage} />);
    await userEvent.click(screen.getByLabelText('Switch language'));
    expect(onToggleLanguage).toHaveBeenCalled();
  });

  it('calls onToggleTheme when theme button is clicked', async () => {
    const onToggleTheme = vi.fn();
    render(<Header {...defaultProps} onToggleTheme={onToggleTheme} />);
    await userEvent.click(screen.getByLabelText('Switch theme'));
    expect(onToggleTheme).toHaveBeenCalled();
  });
});
