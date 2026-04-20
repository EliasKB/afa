import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ActionSection } from './ActionSection';

const contactContent = {
  id: 'contact',
  eyebrow: 'Get in touch',
  title: 'Contact Us',
  intro: 'Reach out to AFA.',
  items: [
    { label: 'Email', detail: 'Academicsfromafghanistan@gmail.com' },
  ],
};

const supportContent = {
  id: 'support',
  eyebrow: 'Help us grow',
  title: 'Support Us',
  intro: 'Ways to contribute.',
  items: [
    { label: 'Financial support', detail: 'Coming soon' },
    { label: 'Share expertise', detail: 'Coming soon' },
    { label: 'Collaborate', detail: 'Coming soon' },
  ],
};

const engageContent = {
  id: 'engage',
  eyebrow: 'Join us',
  title: 'Get Involved',
  intro: 'Become part of AFA.',
  items: [
    { label: 'Become a member', detail: 'Coming soon' },
    { label: 'Volunteer', detail: 'Coming soon' },
    { label: 'Mentorship', detail: 'Coming soon' },
  ],
};

describe('ActionSection — contact', () => {
  it('renders section with id=contact', () => {
    render(<ActionSection content={contactContent} />);
    expect(document.getElementById('contact')).toBeInTheDocument();
  });

  it('applies the contact band class', () => {
    render(<ActionSection content={contactContent} />);
    expect(document.getElementById('contact')).toHaveClass('action-band--contact');
  });

  it('renders the title', () => {
    render(<ActionSection content={contactContent} />);
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument();
  });

  it('renders the email label and detail', () => {
    render(<ActionSection content={contactContent} />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Academicsfromafghanistan@gmail.com')).toBeInTheDocument();
  });
});

describe('ActionSection — support', () => {
  it('renders section with id=support', () => {
    render(<ActionSection content={supportContent} />);
    expect(document.getElementById('support')).toBeInTheDocument();
  });

  it('applies the support band class', () => {
    render(<ActionSection content={supportContent} />);
    expect(document.getElementById('support')).toHaveClass('action-band--support');
  });

  it('renders all 3 support items', () => {
    render(<ActionSection content={supportContent} />);
    expect(screen.getByText('Financial support')).toBeInTheDocument();
    expect(screen.getByText('Share expertise')).toBeInTheDocument();
    expect(screen.getByText('Collaborate')).toBeInTheDocument();
  });
});

describe('ActionSection — engage', () => {
  it('renders section with id=engage', () => {
    render(<ActionSection content={engageContent} />);
    expect(document.getElementById('engage')).toBeInTheDocument();
  });

  it('applies the engage band class', () => {
    render(<ActionSection content={engageContent} />);
    expect(document.getElementById('engage')).toHaveClass('action-band--engage');
  });

  it('renders all 3 engage items', () => {
    render(<ActionSection content={engageContent} />);
    expect(screen.getByText('Become a member')).toBeInTheDocument();
    expect(screen.getByText('Volunteer')).toBeInTheDocument();
    expect(screen.getByText('Mentorship')).toBeInTheDocument();
  });
});
