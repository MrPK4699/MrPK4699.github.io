// Headline numbers shown on the hero photo. Always rounded DOWN, so "N+" is always true.
import { experience, projects, skillGroups } from '../data/portfolio';

const toMonthIndex = (ym) => {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
};

/** Whole months worked, from the earliest role start to the latest end (or now), counting both ends. */
export function experienceMonths(jobs = experience, now = new Date()) {
  const roles = jobs.flatMap((j) => j.roles);
  if (!roles.length) return 0;
  const start = Math.min(...roles.map((r) => toMonthIndex(r.start)));
  const nowIndex = now.getFullYear() * 12 + now.getMonth();
  const end = Math.max(...roles.map((r) => (r.end ? toMonthIndex(r.end) : nowIndex)));
  return Math.max(0, end - start + 1);
}

/** 22 months -> { value: '1+', label: 'Year exp.' }; under a year -> months. */
export function experienceStat(jobs = experience, now = new Date()) {
  const months = experienceMonths(jobs, now);
  const years = Math.floor(months / 12);
  if (years >= 1) return { value: `${years}+`, label: years === 1 ? 'Year exp.' : 'Years exp.' };
  return { value: `${months}+`, label: months === 1 ? 'Month exp.' : 'Months exp.' };
}

/** Unique skills, rounded down to the nearest 10 (29 -> '20+'). Below 10, the exact count. */
export function skillsStat(groups = skillGroups) {
  const count = new Set(groups.flatMap((g) => g.skills)).size;
  const value = count >= 10 ? `${Math.floor(count / 10) * 10}+` : `${count}+`;
  return { value, label: 'Skills', count };
}

export function projectsStat(list = projects) {
  return { value: `${list.length}+`, label: 'Projects' };
}
