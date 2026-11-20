import { FaGithub } from 'react-icons/fa';
import { LuArrowUpRight, LuExternalLink } from 'react-icons/lu';
import { profile, projects } from '../data/portfolio';
import Reveal from './Reveal';
import Section from './Section';

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      intro="A few projects I've designed, built and shipped, solo and as part of a team."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            delay={i * 100}
            className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10"
          >
            <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
              <img
                src={encodeURI(p.image)}
                alt={`Screenshot of ${p.title}`}
                loading="lazy"
                className="size-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-bold text-fg">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
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
          </Reveal>
        ))}
      </div>

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
