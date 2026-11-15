// Theme list shown in the header's theme switcher.
// Colours live in src/index.css under [data-theme="<id>"]; keep ids in sync with index.html too.
// `swatch` = [background, accent, accent-2] for the menu preview.
// `stats` = colours passed to the GitHub stats image services (hex without #),
//           plus the summary-cards theme name that best matches.
// The FIRST theme is the default for new visitors.
export const THEMES = [
  {
    id: 'paper',
    label: 'Paper',
    note: 'Minimal · warm light',
    mode: 'light',
    swatch: ['#faf7f2', '#c2410c', '#d97706'],
    stats: { bg: 'ffffff', fg: '1c1917', muted: '57534e', accent: 'c2410c', accent2: 'd97706', cards: 'default' },
  },
  {
    id: 'midnight',
    label: 'Midnight',
    note: 'Dark · cyan',
    mode: 'dark',
    swatch: ['#0b1120', '#22d3ee', '#3b82f6'],
    stats: { bg: '111a2e', fg: 'e2e8f0', muted: '94a3b8', accent: '22d3ee', accent2: '3b82f6', cards: 'github_dark' },
  },
  {
    id: 'sunset',
    label: 'Sunset',
    note: 'Dark · warm orange',
    mode: 'dark',
    swatch: ['#120d0b', '#f4623a', '#fbbf24'],
    stats: { bg: '1c1512', fg: 'f5ebe6', muted: 'b8a59c', accent: 'f4623a', accent2: 'fbbf24', cards: 'github_dark' },
  },
  {
    id: 'aurora',
    label: 'Aurora',
    note: 'Bold · violet glow',
    mode: 'dark',
    swatch: ['#0d0a1a', '#a78bfa', '#f472b6'],
    stats: { bg: '161130', fg: 'ede9fe', muted: 'a99fcf', accent: 'a78bfa', accent2: 'f472b6', cards: 'dracula' },
  },
  {
    id: 'forest',
    label: 'Forest',
    note: 'Dark · lime',
    mode: 'dark',
    swatch: ['#0a0f0b', '#a3e635', '#34d399'],
    stats: { bg: '111912', fg: 'e7efe4', muted: '9cad98', accent: 'a3e635', accent2: '34d399', cards: 'github_dark' },
  },
  {
    id: 'daylight',
    label: 'Daylight',
    note: 'Light · indigo',
    mode: 'light',
    swatch: ['#f8fafc', '#4f46e5', '#0ea5e9'],
    stats: { bg: 'ffffff', fg: '0f172a', muted: '475569', accent: '4f46e5', accent2: '0ea5e9', cards: 'default' },
  },
];

export const THEME_STORAGE_KEY = 'pk-theme';

export const getTheme = (id) => THEMES.find((t) => t.id === id) ?? THEMES[0];
