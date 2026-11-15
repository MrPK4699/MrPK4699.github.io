import Reveal from './Reveal';

/** Page section with a consistent eyebrow + title header. */
export default function Section({ id, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-16 py-10 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-8 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          )}
          <h2 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
