import { expect, test } from 'vitest';
import { formatDuration, formatMonth, formatRange } from './dates';

test('formatMonth / formatRange', () => {
  expect(formatMonth('2025-02')).toBe('Feb 2025');
  expect(formatRange('2025-02', null)).toBe('Feb 2025 – Present');
  expect(formatRange('2025-02', '2026-01')).toBe('Feb 2025 – Jan 2026');
});

test('formatDuration counts start and end months (LinkedIn style)', () => {
  expect(formatDuration('2025-02', '2026-01')).toBe('1 yr');
  expect(formatDuration('2026-02', '2026-02')).toBe('1 mo');
  expect(formatDuration('2025-02', '2027-04')).toBe('2 yrs 3 mos');
  // Present = up to the current month
  expect(formatDuration('2025-02', null, new Date(2026, 10, 16))).toBe('1 yr 10 mos');
  expect(formatDuration('2026-02', null, new Date(2026, 10, 16))).toBe('10 mos');
});
