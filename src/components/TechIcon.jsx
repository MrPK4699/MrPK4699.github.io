import { tech } from '../data/portfolio';

const sizes = {
  sm: { tile: 'size-6 rounded-md', icon: 'size-3.5' },
  md: { tile: 'size-8 rounded-lg', icon: 'size-[18px]' },
  lg: { tile: 'size-12 rounded-xl', icon: 'size-7' },
};

/**
 * A technology logo in its official brand colour on a fixed white tile.
 * The tile and colours never change with the theme, so dark logos
 * (Next.js, Express) stay visible on dark themes too.
 */
export default function TechIcon({ name, size = 'md' }) {
  const entry = tech[name];
  if (!entry) return null;
  const { icon: Icon, color } = entry;
  const s = sizes[size];
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center bg-white shadow-sm ring-1 ring-black/5 ${s.tile}`}
    >
      <Icon className={s.icon} style={{ color }} />
    </span>
  );
}
