import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, expect, test, vi } from 'vitest';
import App from './App';

afterEach(() => {
  vi.unstubAllGlobals();
});

test('renders the main portfolio sections', () => {
  render(<App />);
  for (const name of [/developer who cares about the details/i, /technologies i work with/i, /things i've built/i, /activity and stats/i, /let's build something together/i]) {
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  }
  expect(screen.getAllByRole('article')).toHaveLength(3);
});

test('theme switcher changes and remembers the theme', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: /change theme/i }));
  const menu = screen.getByRole('menu', { name: /themes/i });
  const items = within(menu).getAllByRole('menuitemradio');
  expect(items).toHaveLength(6);
  // Paper is listed first and is the default
  expect(items[0]).toHaveAccessibleName(/paper/i);
  expect(items[0]).toHaveAttribute('aria-checked', 'true');

  await user.click(within(menu).getByRole('menuitemradio', { name: /midnight/i }));
  expect(document.documentElement.dataset.theme).toBe('midnight');
  expect(document.documentElement.dataset.mode).toBe('dark');
  expect(localStorage.getItem('pk-theme')).toBe('midnight');
  expect(screen.queryByRole('menu')).not.toBeInTheDocument();
});

test('contact section has no phone number, and a back-to-top button exists', () => {
  render(<App />);
  expect(screen.queryByText(/76174/)).not.toBeInTheDocument();
  expect(document.querySelector('a[href^="tel:"]')).toBeNull();
  expect(document.querySelectorAll('a[aria-label="Back to top"]')).toHaveLength(1);
});

test('theme menu closes with Escape', async () => {
  const user = userEvent.setup();
  render(<App />);
  await user.click(screen.getByRole('button', { name: /change theme/i }));
  expect(screen.getByRole('menu')).toBeInTheDocument();
  await user.keyboard('{Escape}');
  expect(screen.queryByRole('menu')).not.toBeInTheDocument();
});

test('contact form puts the subject and email into the mailto link', async () => {
  const user = userEvent.setup();
  const location = { href: '' };
  vi.stubGlobal('location', location);

  render(<App />);
  await user.type(screen.getByLabelText(/full name/i), 'Jane Doe');
  await user.type(screen.getByLabelText(/email address/i), 'jane@test.com');
  await user.type(screen.getByLabelText(/contact number/i), '9876543210');
  await user.type(screen.getByLabelText(/^subject$/i), 'Job opportunity');
  await user.type(screen.getByLabelText(/^message$/i), 'Hello there');
  await user.click(screen.getByRole('button', { name: /send message/i }));

  expect(location.href).toMatch(/^mailto:4699pankajkhatri@gmail\.com\?/);
  const params = new URLSearchParams(location.href.split('?')[1]);
  expect(params.get('subject')).toBe('Job opportunity');
  expect(params.get('body')).toContain('Email: jane@test.com');
  expect(params.get('body')).toContain('Phone: 9876543210');
  expect(params.get('body')).toContain('Hello there');
});
