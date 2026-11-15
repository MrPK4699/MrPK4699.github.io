import { skillGroups } from '../data/portfolio';
import Reveal from './Reveal';
import Section from './Section';
import TechIcon from './TechIcon';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      intro="The tools I use to take an idea from the first screen to a deployed product."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal
            key={group.title}
            delay={(gi % 3) * 80}
            className="rounded-3xl border border-line bg-surface p-6 transition hover:border-accent/50"
          >
            <h3 className="flex items-center justify-between font-display text-lg font-bold text-fg">
              {group.title}
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                {group.skills.length}
              </span>
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-full border border-line bg-surface-2 py-1 pl-1 pr-3 text-sm font-medium text-fg transition hover:-translate-y-0.5 hover:border-accent"
                >
                  <TechIcon name={name} size="sm" />
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
