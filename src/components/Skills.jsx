import { skillGroups } from '../data/portfolio';
import Reveal from './Reveal';
import Section from './Section';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      intro="The tools I use to take an idea from the first screen to a deployed product."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, gi) => (
          <Reveal
            key={group.title}
            delay={gi * 80}
            className="rounded-3xl border border-line bg-surface p-6 transition hover:border-accent/50"
          >
            <h3 className="font-display text-lg font-bold text-fg">{group.title}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="group flex items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-1.5 text-sm font-medium text-fg transition hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4 text-accent" aria-hidden="true" />
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
