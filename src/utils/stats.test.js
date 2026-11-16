import { expect, test } from 'vitest';
import { experience, projects, skillGroups } from '../data/portfolio';
import { experienceMonths, experienceStat, projectsStat, skillsStat } from './stats';

const nov2026 = new Date(2026, 10, 16);

test('experience is calculated from role dates and rounded DOWN to whole years', () => {
  // Feb 2025 – Nov 2026 = 22 months -> 1+ (not 2+)
  expect(experienceMonths(experience, nov2026)).toBe(22);
  expect(experienceStat(experience, nov2026)).toEqual({ value: '1+', label: 'Year exp.' });
  // Turns into 2+ by itself once 24 months are reached
  expect(experienceStat(experience, new Date(2027, 0, 1)).value).toBe('2+');
  // Under a year shows months
  const newJob = [{ roles: [{ start: '2026-06', end: null }] }];
  expect(experienceStat(newJob, nov2026)).toEqual({ value: '6+', label: 'Months exp.' });
});

test('skills are counted from skillGroups (unique) and rounded down to tens', () => {
  const count = new Set(skillGroups.flatMap((g) => g.skills)).size;
  expect(skillsStat().count).toBe(count);
  expect(skillsStat().value).toBe(`${Math.floor(count / 10) * 10}+`);

  const make = (n) => [{ skills: Array.from({ length: n }, (_, i) => `S${i}`) }];
  expect(skillsStat(make(29)).value).toBe('20+');
  expect(skillsStat(make(30)).value).toBe('30+');
  expect(skillsStat(make(7)).value).toBe('7+');
  // Duplicates across groups count once
  expect(skillsStat([{ skills: ['A', 'B'] }, { skills: ['B', 'C'] }]).count).toBe(3);
});

test('projects are counted from the projects list', () => {
  expect(projectsStat().value).toBe(`${projects.length}+`);
  expect(projectsStat([1, 2, 3, 4, 5]).value).toBe('5+');
});
