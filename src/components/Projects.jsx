import { useCallback, useEffect, useRef, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { LuArrowUpRight, LuChevronLeft, LuChevronRight, LuExternalLink, LuPause, LuPlay } from 'react-icons/lu';
import { profile, projects } from '../data/portfolio';
import Reveal from './Reveal';
import Section from './Section';

export const AUTOPLAY_MS = 3000;
const GAP = 24; // px, must match gap-6 on the track

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Projects in a single row you can slide: 3 cards visible on desktop, 2 on tablets, 1 on phones.
 * Slides automatically every 5 s (loops back to the start), and pauses while hovered,
 * while a control has keyboard focus, while scrolled off screen, or when the user presses pause.
 * People who prefer reduced motion start paused.
 */
export default function Projects() {
  const trackRef = useRef(null);
  const wrapRef = useRef(null);
  const [index, setIndex] = useState(0); // first visible card
  const [positions, setPositions] = useState(projects.length); // how many "stops" the row has
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(true);

  const step = () => {
    const first = trackRef.current?.children[0];
    return (first?.offsetWidth || 0) + GAP;
  };

  // Work out how many cards fit and which one is first, from the current scroll position
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const s = step();
    const perView = Math.max(1, Math.round((track.clientWidth + GAP) / s));
    const stops = Math.max(1, projects.length - perView + 1);
    setPositions(stops);
    setIndex(Math.min(Math.round(track.scrollLeft / s), stops - 1));
  }, []);

  // Re-measure when the row's width changes (screen rotate, window resize, breakpoint change)
  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    const track = trackRef.current;
    const ro = track && 'ResizeObserver' in window ? new ResizeObserver(measure) : null;
    ro?.observe(track);
    return () => {
      window.removeEventListener('resize', measure);
      ro?.disconnect();
    };
  }, [measure]);

  // Pause while the carousel is off screen
  useEffect(() => {
    if (!('IntersectionObserver' in window) || !wrapRef.current) return undefined;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    io.observe(wrapRef.current);
    return () => io.disconnect();
  }, []);

  const goTo = useCallback(
    (i) => {
      const next = (i + positions) % positions; // wrap around both ways
      setIndex(next);
      trackRef.current?.scrollTo?.({ left: next * step(), behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    },
    [positions]
  );

  const autoplaying = playing && !hovered && !focused && inView && positions > 1;

  // Restart the timer after every move, so a manual click also gets a full 5 s
  useEffect(() => {
    if (!autoplaying) return undefined;
    const id = setTimeout(() => goTo(index + 1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [autoplaying, index, goTo]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      intro="A few projects I've designed, built and shipped, solo and as part of a team."
    >
      <Reveal>
        <div
          ref={wrapRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Projects"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
          }}
        >
          {/* Index ABOVE the cards: counter · dots · pause/play */}
          <div className="mb-2 flex items-center justify-end gap-3">
            <span className="text-sm font-semibold tabular-nums text-muted" aria-hidden="true">
              <span className="text-fg">{index + 1}</span> / {positions}
            </span>
            <div className="flex items-center gap-2" role="group" aria-label="Choose slide">
              {Array.from({ length: positions }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  onClick={() => goTo(i)}
                  className={`h-2.5 rounded-full transition-all ${i === index ? 'w-7 bg-accent' : 'w-2.5 bg-line hover:bg-muted'}`}
                />
              ))}
            </div>
            <ControlButton
              label={playing ? 'Pause automatic sliding' : 'Start automatic sliding'}
              pressed={!playing}
              onClick={() => setPlaying((v) => !v)}
            >
              {playing ? <LuPause className="size-4" /> : <LuPlay className="size-4" />}
            </ControlButton>
          </div>

          {/* Cards with the arrows on the same row, over the left and right edges */}
          <div className="relative">
            <ul
              ref={trackRef}
              onScroll={measure}
              // While autoplaying, don't announce every slide change to screen readers
              aria-live={autoplaying ? 'off' : 'polite'}
              className="-mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {projects.map((p, i) => (
                <li
                  key={p.title}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${projects.length}: ${p.title}`}
                  className="flex w-full shrink-0 snap-start md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
                >
                  <ProjectCard p={p} />
                </li>
              ))}
            </ul>
            <ArrowButton label="Previous project" onClick={() => goTo(index - 1)} className="left-1 md:-left-6">
              <LuChevronLeft className="size-6" />
            </ArrowButton>
            <ArrowButton label="Next project" onClick={() => goTo(index + 1)} className="right-1 md:-right-6">
              <LuChevronRight className="size-6" />
            </ArrowButton>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8 text-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-fg transition hover:border-accent hover:text-accent"
        >
          More on GitHub <LuArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  );
}

/**
 * Eye-catching slide arrow: accent gradient (follows the selected theme), soft glow,
 * a ring in the page colour so it stands out against the cards, and a little "pop" on hover.
 */
function ArrowButton({ label, onClick, className = '', children }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className={`absolute top-1/2 z-10 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-on-accent shadow-lg shadow-accent/40 ring-4 ring-bg transition duration-200 hover:scale-110 hover:shadow-xl hover:shadow-accent/50 active:scale-95 ${className}`}
    >
      <span aria-hidden="true">{children}</span>
    </button>
  );
}

function ControlButton({ label, pressed, onClick, className = '', children }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      title={label}
      onClick={onClick}
      className={`z-10 grid size-10 place-items-center rounded-full border border-line bg-surface text-fg transition hover:border-accent hover:text-accent ${className}`}
    >
      <span aria-hidden="true">{children}</span>
    </button>
  );
}

const MAX_TECH = 3; // tags shown on the compact card; the rest appear as "+N" and in the details

const TechTag = ({ children, title }) => (
  <li title={title} className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
    {children}
  </li>
);

/**
 * Compact card (2-line description, first few tech tags) so a whole project fits on screen.
 * The full description and every tech tag slide over the card on hover, on keyboard focus,
 * or via "Read more" on touch screens. The card keeps its size, so nothing jumps around,
 * and the Live demo / Code buttons stay visible and clickable.
 */
function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const extra = p.tech.length - MAX_TECH;
  const detailsId = `details-${p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
      <div className="relative flex flex-1 flex-col">
        <div className="relative aspect-video overflow-hidden border-b border-line bg-surface-2">
          <img
            src={encodeURI(p.image)}
            alt={`Screenshot of ${p.title}`}
            loading="lazy"
            className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col px-5 pt-4">
          <h3 className="font-display text-lg font-bold text-fg">{p.title}</h3>
          {/* Visually cut to 2 lines; screen readers still get the full text */}
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{p.description}</p>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={detailsId}
            // Only needed where there's no hover (phones/tablets)
            className="mt-1 w-fit text-xs font-semibold text-accent hover:underline [@media(hover:hover)]:hidden"
          >
            {open ? 'Show less' : 'Read more'}
          </button>
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
            {p.tech.slice(0, MAX_TECH).map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
            {extra > 0 && <TechTag title={p.tech.slice(MAX_TECH).join(', ')}>+{extra}</TechTag>}
          </ul>
        </div>

        {/* Full details: covers the image + text area (not the buttons). Hidden from screen
            readers because the full text is already in the card above. */}
        <div
          id={detailsId}
          aria-hidden="true"
          data-testid="project-details"
          data-open={open || undefined}
          // Touch screens: tap the open panel to close it again
          onClick={() => open && setOpen(false)}
          className={`absolute inset-0 flex flex-col overflow-y-auto border-b border-line bg-surface/95 p-5 backdrop-blur-sm transition duration-300 ${
            open
              ? 'translate-y-0 cursor-pointer opacity-100'
              : // Mouse: show on hover. Keyboard (devices with a mouse): show while a button in the card is focused.
                'pointer-events-none translate-y-3 opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:translate-y-0 [@media(hover:hover)]:group-focus-within:opacity-100'
          }`}
        >
          <h3 className="font-display text-lg font-bold text-fg">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-fg/90">{p.description}</p>
          <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
            {p.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-3 p-5">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${p.title}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition hover:opacity-90"
            >
              Live demo <LuExternalLink className="size-4" aria-hidden="true" />
            </a>
          )}
          {/* aria-label: hidden " for X" text inside a flex button loses its leading space ("Codefor X") */}
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Code for ${p.title} on GitHub`}
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
              p.live
                ? 'border border-line text-fg hover:border-accent hover:text-accent'
                : 'bg-accent text-on-accent hover:opacity-90' // only button: make it the main one
            }`}
          >
            <FaGithub className="size-4" aria-hidden="true" /> Code
          </a>
        </div>
      </div>
    </article>
  );
}
