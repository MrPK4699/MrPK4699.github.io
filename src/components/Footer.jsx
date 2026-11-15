import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { profile } from '../data/portfolio';

const links = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: LuMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      {/* Extra bottom/right padding keeps the footer clear of the floating back-to-top button */}
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 pb-24 pt-10 sm:flex-row sm:justify-between sm:px-6 sm:pb-10 sm:pr-24 xl:pr-6">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-2">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={label}
              className="grid size-10 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-accent"
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
