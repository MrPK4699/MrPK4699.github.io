const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const parse = (ym) => {
  const [y, m] = ym.split('-').map(Number);
  return { y, m };
};

/** '2025-02' -> 'Feb 2025' */
export const formatMonth = (ym) => {
  const { y, m } = parse(ym);
  return `${MONTHS[m - 1]} ${y}`;
};

/** 'Feb 2025 – Present' / 'Feb 2025 – Feb 2026' */
export const formatRange = (start, end) => `${formatMonth(start)} – ${end ? formatMonth(end) : 'Present'}`;

/**
 * Length of a period, counting both the start and end month like LinkedIn does.
 * end = null means "now". e.g. ('2025-02', '2026-01') -> '1 yr'
 */
export const formatDuration = (start, end, now = new Date()) => {
  const s = parse(start);
  const e = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() + 1 };
  const total = Math.max(1, (e.y - s.y) * 12 + (e.m - s.m) + 1);
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  return parts.join(' ');
};
