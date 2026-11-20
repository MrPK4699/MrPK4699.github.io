import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, expect, test, vi } from 'vitest';
import { projects } from '../data/portfolio';
import Projects, { AUTOPLAY_MS } from './Projects';

// jsdom doesn't scroll; record where the carousel asks to scroll to
beforeEach(() => {
  Element.prototype.scrollTo = vi.fn();
  vi.useFakeTimers();
});
afterEach(() => {
  vi.useRealTimers();
  delete Element.prototype.scrollTo;
});

const current = () =>
  screen.getAllByRole('button', { name: /go to slide/i }).findIndex((b) => b.getAttribute('aria-current') === 'true');

test('all projects sit in one row as labelled slides, with controls', () => {
  render(<Projects />);
  const carousel = screen.getByRole('region', { name: 'Projects' });
  expect(carousel).toHaveAttribute('aria-roledescription', 'carousel');
  const slides = within(carousel).getAllByRole('listitem', { name: /of \d+:/ });
  expect(slides).toHaveLength(projects.length);
  expect(slides[0]).toHaveAccessibleName(`1 of ${projects.length}: GeoWeather`);
  for (const name of ['Previous project', 'Next project', 'Pause automatic sliding']) {
    expect(screen.getByRole('button', { name })).toBeInTheDocument();
  }
  expect(current()).toBe(0);
});

test('next / previous / dots move the row, wrapping around at both ends', () => {
  render(<Projects />);
  const last = screen.getAllByRole('button', { name: /go to slide/i }).length - 1;
  fireEvent.click(screen.getByRole('button', { name: 'Next project' }));
  expect(current()).toBe(1);
  expect(Element.prototype.scrollTo).toHaveBeenLastCalledWith(expect.objectContaining({ behavior: 'smooth' }));

  fireEvent.click(screen.getByRole('button', { name: 'Previous project' }));
  fireEvent.click(screen.getByRole('button', { name: 'Previous project' }));
  expect(current()).toBe(last); // wrapped from the first to the last

  fireEvent.click(screen.getByRole('button', { name: 'Go to slide 1' }));
  expect(current()).toBe(0);
});

test('slides automatically on a timer and loops back to the start', () => {
  render(<Projects />);
  const stops = screen.getAllByRole('button', { name: /go to slide/i }).length;
  act(() => vi.advanceTimersByTime(AUTOPLAY_MS - 1));
  expect(current()).toBe(0);
  act(() => vi.advanceTimersByTime(1));
  expect(current()).toBe(1);
  for (let i = 1; i < stops; i++) act(() => vi.advanceTimersByTime(AUTOPLAY_MS));
  expect(current()).toBe(0); // looped
});

test('pauses while hovered, and with the pause button', () => {
  render(<Projects />);
  const carousel = screen.getByRole('region', { name: 'Projects' });

  fireEvent.mouseEnter(carousel);
  act(() => vi.advanceTimersByTime(AUTOPLAY_MS * 3));
  expect(current()).toBe(0);
  fireEvent.mouseLeave(carousel);
  act(() => vi.advanceTimersByTime(AUTOPLAY_MS));
  expect(current()).toBe(1);

  const pause = screen.getByRole('button', { name: 'Pause automatic sliding' });
  fireEvent.click(pause);
  const play = screen.getByRole('button', { name: 'Start automatic sliding' });
  expect(play).toHaveAttribute('aria-pressed', 'true');
  fireEvent.blur(play); // leave the controls so focus doesn't count as a pause
  act(() => vi.advanceTimersByTime(AUTOPLAY_MS * 3));
  expect(current()).toBe(1);
});

test('cards are compact: 2-line description, max 3 tech tags plus "+N"', () => {
  render(<Projects />);
  const geo = screen.getAllByRole('article')[0];
  const description = within(geo).getByText(projects[0].description, { selector: 'p.line-clamp-2' });
  expect(description).toBeInTheDocument(); // full text kept for screen readers, cut to 2 lines visually
  const tags = within(within(geo).getByRole('list', { name: 'Tech stack' })).getAllByRole('listitem');
  expect(tags.map((t) => t.textContent)).toEqual(['React', 'Vite', 'Tailwind CSS', '+3']);
  expect(tags[3]).toHaveAttribute('title', 'TanStack Query, Leaflet, OpenWeather API');
});

test('full details panel: every tech tag, hidden from screen readers, toggled by "Read more"', () => {
  render(<Projects />);
  const geo = screen.getAllByRole('article')[0];
  const details = within(geo).getByTestId('project-details');
  expect(details).toHaveAttribute('aria-hidden', 'true');
  expect(details).toHaveTextContent(projects[0].description);
  for (const t of projects[0].tech) expect(details).toHaveTextContent(t);
  expect(details).toHaveClass('opacity-0'); // hidden until hover / focus / Read more

  const more = within(geo).getByRole('button', { name: 'Read more' });
  expect(more).toHaveAttribute('aria-controls', details.id);
  expect(details.id).toBe('details-geoweather');
  fireEvent.click(more);
  expect(more).toHaveAttribute('aria-expanded', 'true');
  expect(more).toHaveAccessibleName('Show less');
  expect(details).toHaveAttribute('data-open', 'true');
  expect(details).toHaveClass('opacity-100');

  fireEvent.click(details); // tap the panel to close (touch screens)
  expect(details).not.toHaveAttribute('data-open');
  expect(more).toHaveAttribute('aria-expanded', 'false');
});

test('buttons stay outside the details panel so they are always clickable', () => {
  render(<Projects />);
  const geo = screen.getAllByRole('article')[0];
  const details = within(geo).getByTestId('project-details');
  expect(details).not.toContainElement(within(geo).getByRole('link', { name: /code for geoweather/i }));
});
