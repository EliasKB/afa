import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SectionMenu } from './SectionMenu';

const items = [
  { id: 'about', label: 'About Us' },
  { id: 'chapters', label: 'Local Chapters' },
  { id: 'news', label: 'News' },
];

describe('SectionMenu — rendering', () => {
  it('renders the menu title', () => {
    render(<SectionMenu isOpen={true} items={items} onNavigate={vi.fn()} title="Navigate" />);
    expect(screen.getByText('Navigate')).toBeInTheDocument();
  });

  it('renders all menu items', () => {
    render(<SectionMenu isOpen={true} items={items} onNavigate={vi.fn()} title="Navigate" />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Local Chapters')).toBeInTheDocument();
    expect(screen.getByText('News')).toBeInTheDocument();
  });

  it('applies is-open class when open', () => {
    const { container } = render(
      <SectionMenu isOpen={true} items={items} onNavigate={vi.fn()} title="Navigate" />
    );
    expect(container.firstChild).toHaveClass('is-open');
  });

  it('does not apply is-open class when closed', () => {
    const { container } = render(
      <SectionMenu isOpen={false} items={items} onNavigate={vi.fn()} title="Navigate" />
    );
    expect(container.firstChild).not.toHaveClass('is-open');
  });
});

describe('SectionMenu — interactions', () => {
  it('calls onNavigate with the correct id when an item is clicked', async () => {
    const onNavigate = vi.fn();
    render(<SectionMenu isOpen={true} items={items} onNavigate={onNavigate} title="Navigate" />);
    await userEvent.click(screen.getByText('About Us'));
    expect(onNavigate).toHaveBeenCalledWith('about');
  });

  it('calls onNavigate for each item independently', async () => {
    const onNavigate = vi.fn();
    render(<SectionMenu isOpen={true} items={items} onNavigate={onNavigate} title="Navigate" />);
    await userEvent.click(screen.getByText('Local Chapters'));
    expect(onNavigate).toHaveBeenCalledWith('chapters');
    await userEvent.click(screen.getByText('News'));
    expect(onNavigate).toHaveBeenCalledWith('news');
  });
});
