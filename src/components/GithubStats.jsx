import { LuArrowUpRight } from 'react-icons/lu';
import { profile } from '../data/portfolio';
import { useTheme } from '../theme/ThemeProvider';
import Reveal from './Reveal';
import Section from './Section';

const user = profile.githubUser;

// ratio = the image's natural width / height (streak: 495x195, summary cards: 340x200).
// Used as flex-grow so cards sharing a row end up the same height (see .stat-card in index.css).
const buildCards = (s) => [
  {
    id: 'github-streak-stats',
    alt: `${user} GitHub streak stats`,
    ratio: 495 / 195,
    minW: '300px',
    maxW: '560px',
    src:
      `https://streak-stats.demolab.com/?user=${user}&hide_border=true&border_radius=0` +
      `&background=${s.bg}&stroke=${s.muted}&ring=${s.accent}&fire=${s.accent2}` +
      `&currStreakNum=${s.fg}&sideNums=${s.fg}&currStreakLabel=${s.accent}&sideLabels=${s.muted}&dates=${s.muted}`,
  },
  {
    id: 'github-stats-card',
    alt: `${user} GitHub stats`,
    ratio: 340 / 200,
    minW: '240px',
    maxW: '380px',
    src: `https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${user}&theme=${s.cards}`,
  },
  {
    id: 'github-top-langs',
    alt: `${user} top languages`,
    ratio: 340 / 200,
    minW: '240px',
    maxW: '380px',
    src: `https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${user}&theme=${s.cards}`,
  },
];

export default function GithubStats() {
  const { theme } = useTheme();
  const cards = buildCards(theme.stats);

  return (
    <Section id="github" eyebrow="GitHub" title="Activity and stats" intro="A live look at my contributions and the languages I use most.">
      <Reveal className="rounded-3xl border border-line bg-surface p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="font-display text-base font-semibold text-fg">Contributions in the last year</h3>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            @{user} <LuArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="overflow-x-auto">
          <img
            key={theme.id}
            src={`https://ghchart.rshah.org/${theme.stats.accent}/${user}`}
            alt={`${user} GitHub contribution chart`}
            loading="lazy"
            className="w-full min-w-[640px] dark:[filter:invert(1)_hue-rotate(180deg)_saturate(1.4)]"
          />
        </div>
      </Reveal>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {cards.map(({ id, src, alt, ratio, minW, maxW }, i) => (
          <Reveal
            key={id}
            delay={i * 80}
            className="stat-card overflow-hidden rounded-3xl border border-line"
            style={{ '--ratio': ratio, '--min-w': minW, '--max-w': maxW, backgroundColor: `#${theme.stats.bg}` }}
          >
            <img key={src} id={id} src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
