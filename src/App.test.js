import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the main portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /my projects/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
});

test('phone field in the contact form accepts typing', async () => {
  render(<App />);
  const phone = screen.getByLabelText(/contact number/i);
  await userEvent.type(phone, '9876543210');
  expect(phone).toHaveValue('9876543210');
});

test('contact form puts the subject and email into the mailto link', async () => {
  const originalLocation = window.location;
  delete window.location;
  window.location = { href: '' };

  render(<App />);
  userEvent.type(screen.getByLabelText(/full name/i), 'Jane Doe');
  userEvent.type(screen.getByLabelText(/email address/i), 'jane@test.com');
  userEvent.type(screen.getByLabelText(/^subject$/i), 'Job opportunity');
  userEvent.type(screen.getByLabelText(/^message$/i), 'Hello there');
  userEvent.click(screen.getByRole('button', { name: /send/i }));

  const href = window.location.href;
  window.location = originalLocation;

  expect(href).toMatch(/^mailto:4699pankajkhatri@gmail\.com\?/);
  const params = new URLSearchParams(href.split('?')[1]);
  expect(params.get('subject')).toBe('Job opportunity');
  expect(params.get('body')).toContain('Email: jane@test.com');
  expect(params.get('body')).toContain('Hello there');
});
