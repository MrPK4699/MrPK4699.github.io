import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuArrowRight, LuDownload, LuMail } from 'react-icons/lu';
import { profile } from '../data/portfolio';
import { useTypewriter } from '../hooks/useTypewriter';
import { experienceStat, projectsStat, skillsStat } from '../utils/stats';
import Reveal from './Reveal';

const socials = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: LuMail },
];

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative flex min-h-[92svh] items-center pb-10 pt-24 sm:pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm font-medium text-muted backdrop-blur">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
              </span>
              Open to new opportunities
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-fg sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 min-h-[1.5em] font-display text-xl font-medium text-fg sm:text-2xl">
              <span className="sr-only">{profile.roles.join(', ')}</span>
              <span aria-hidden="true">
                {role}
                <span className="caret" />
              </span>
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={320} className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent shadow-lg shadow-accent/25 transition hover:opacity-90"
            >
              View my work
              <LuArrowRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-6 py-3 text-sm font-semibold text-fg backdrop-blur transition hover:border-accent hover:text-accent"
            >
              <LuDownload className="size-4" aria-hidden="true" /> Resume
            </a>
          </Reveal>

          <Reveal delay={400} className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-64 sm:w-80 lg:w-full lg:max-w-sm">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent to-accent-2 opacity-30 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-accent to-accent-2 p-[3px]">
            <img
              src={profile.photo}
              alt={profile.name}
              width="400"
              height="400"
              className="aspect-square w-full rounded-[calc(2rem-3px)] object-cover"
            />
          </div>
          <StatBadge className="-left-4 top-8 sm:-left-10" stat={experienceStat()} />
          <StatBadge className="-right-3 top-1/2 -translate-y-1/2 sm:-right-10" stat={skillsStat()} />
          <StatBadge className="-bottom-5 left-8" stat={projectsStat()} />
        </Reveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted transition hover:text-accent [@media(min-width:640px)_and_(min-height:820px)]:flex"
      >
        Scroll
        <span className="h-8 w-px bg-gradient-to-b from-accent to-transparent" aria-hidden="true" />
      </a>
    </section>
  );
}

/** Floating badge on the photo: big number + small label, e.g. "20+ Skills". */
function StatBadge({ stat, className }) {
  return (
    <span
      data-stat={stat.label}
      className={`absolute flex items-center gap-2.5 rounded-2xl border border-line bg-surface/90 px-4 py-2.5 shadow-xl shadow-black/20 backdrop-blur ${className}`}
    >
      <span className="font-display text-2xl font-bold leading-none text-gradient">{stat.value}</span>
      <span className="text-xs font-semibold uppercase leading-tight tracking-wide text-muted">{stat.label}</span>
    </span>
  );
}
