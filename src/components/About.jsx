import { FaGithub } from 'react-icons/fa';
import { LuArrowUpRight, LuFolderGit2, LuLayers } from 'react-icons/lu';
import { about, coreStack, profile, projects } from '../data/portfolio';
import Reveal from './Reveal';
import Section from './Section';

const card = 'rounded-3xl border border-line bg-surface p-6 sm:p-8 transition hover:border-accent/50';

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Developer who cares about the details">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Intro */}
        <Reveal className={`${card} md:col-span-2 lg:row-span-2`}>
          <div className="flex h-full flex-col">
            <img
              src={profile.photo}
              alt=""
              width="64"
              height="64"
              loading="lazy"
              className="size-16 rounded-2xl object-cover ring-2 ring-accent/50"
            />
            <h3 className="mt-6 font-display text-2xl font-bold text-fg">{profile.name}</h3>
            <p className="text-sm font-medium text-accent">{profile.roles[0]}</p>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              {about.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-auto inline-flex w-fit items-center gap-1.5 pt-8 text-sm font-semibold text-accent hover:underline"
            >
              Let&apos;s work together <LuArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        {/* Core stack */}
        <Reveal delay={80} className={`${card} md:col-span-2`}>
          <div className="flex items-center gap-2 text-sm font-semibold text-muted">
            <LuLayers className="size-4 text-accent" aria-hidden="true" /> Core stack
          </div>
          <p className="mt-2 font-display text-2xl font-bold text-fg">MERN, end to end</p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {coreStack.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-surface-2 px-3 py-4 text-sm font-medium text-fg"
              >
                <Icon className="size-7 text-accent" aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Projects count */}
        <Reveal delay={160} className={card}>
          <LuFolderGit2 className="size-6 text-accent" aria-hidden="true" />
          <p className="mt-4 font-display text-5xl font-bold text-gradient">{projects.length}+</p>
          <p className="mt-1 text-sm text-muted">Projects built and deployed</p>
          <a href="#projects" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
            See projects <LuArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>

        {/* Open source */}
        <Reveal delay={240} className={card}>
          <FaGithub className="size-6 text-accent" aria-hidden="true" />
          <p className="mt-4 font-display text-xl font-bold text-fg">Open source</p>
          <p className="mt-1 text-sm text-muted">Keen to contribute to open-source projects.</p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            @{profile.githubUser} <LuArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
