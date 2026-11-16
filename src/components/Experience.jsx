import { useId, useState } from 'react';
import { LuArrowUpRight, LuBriefcase, LuChevronDown, LuMapPin } from 'react-icons/lu';
import { experience } from '../data/portfolio';
import { formatMonth, formatRange } from '../utils/dates';
import Reveal from './Reveal';
import Section from './Section';
import TechIcon from './TechIcon';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      {/* Timeline: [date range] [dot on line] [card] on md+; on phones the date sits beside the dot above the card */}
      <ol className="relative space-y-8">
        <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-2 w-0.5 bg-line md:left-[calc(9rem+7px)]" />
        {experience.map((job, i) => (
          <Job key={job.company} job={job} delay={i * 100} />
        ))}
      </ol>
    </Section>
  );
}

function Job({ job, delay }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const current = job.roles.some((r) => r.end === null);
  const start = job.roles[job.roles.length - 1].start; // first role at this company
  const end = job.roles[0].end; // latest role (null = Present)
  const shown = expanded ? job.highlights : job.highlights.slice(0, job.highlightsShown);
  const hidden = job.highlights.length - job.highlightsShown;

  return (
    <Reveal as="li" delay={delay} className="relative pl-8 md:pl-[calc(9rem+2.5rem)]">
      {/* Timeline dot */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1 grid size-4 place-items-center rounded-full border-2 border-bg md:left-[9rem] md:top-8 ${
          current ? 'bg-accent' : 'bg-line'
        }`}
      >
        {current && <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-50" />}
      </span>

      {/* Date range beside the dot: inline above the card on phones, left of the line on md+ */}
      <p
        data-timeline-date
        className="mb-3 text-sm font-semibold text-accent md:absolute md:left-0 md:top-7 md:mb-0 md:w-[7.5rem] md:text-right"
      >
        <time dateTime={start}>{formatMonth(start)}</time>
        <span className="md:block">
          {' – '}
          {end ? <time dateTime={end}>{formatMonth(end)}</time> : 'Present'}
        </span>
      </p>

      <article
        className={`rounded-3xl border bg-surface p-6 sm:p-8 ${
          current ? 'border-accent/40 shadow-xl shadow-accent/10' : 'border-line'
        }`}
      >
        {/* Company header */}
        <header className="flex flex-wrap items-start gap-4">
          <span
            aria-hidden="true"
            className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-2 font-display text-lg font-bold text-on-accent"
          >
            {job.initials}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-xl font-bold text-fg sm:text-2xl">
              {job.website ? (
                <a
                  href={job.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition hover:text-accent"
                >
                  {job.company}
                  <LuArrowUpRight className="size-5" aria-hidden="true" />
                </a>
              ) : (
                job.company
              )}
            </h3>
            <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <LuBriefcase className="size-4" aria-hidden="true" /> {job.type}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <LuMapPin className="size-4" aria-hidden="true" /> {job.location}
              </span>
            </p>
          </div>
          {current && (
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">Current</span>
          )}
        </header>

        {/* Roles at this company (promotions), newest first */}
        <ul className="mt-6 space-y-3">
          {job.roles.map((role, ri) => (
            <li key={role.title} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className={`font-semibold ${ri === 0 ? 'text-fg' : 'text-muted'}`}>{role.title}</span>
              <span className="text-sm text-muted">{formatRange(role.start, role.end)}</span>
            </li>
          ))}
        </ul>

        {/* Highlights */}
        <ul id={listId} className="mt-6 space-y-3">
          {shown.map((point) => (
            <li key={point} data-highlight className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
              <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            aria-controls={listId}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            {expanded ? 'Show less' : `Show ${hidden} more`}
            <LuChevronDown className={`size-4 transition ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>
        )}

        {/* Tech used in this job */}
        <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6" aria-label={`Tech used at ${job.company}`}>
          {job.tech.map((name) => (
            <li
              key={name}
              className="flex items-center gap-2 rounded-full border border-line bg-surface-2 py-1 pl-1 pr-3 text-sm font-medium text-fg"
            >
              <TechIcon name={name} size="sm" />
              {name}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
