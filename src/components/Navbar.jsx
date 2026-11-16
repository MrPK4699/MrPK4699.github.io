import { useEffect, useState } from 'react';
import { LuDownload, LuMenu, LuX } from 'react-icons/lu';
import { navLinks, profile } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeSwitcher from './ThemeSwitcher';

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when switching to desktop width
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6" aria-label="Main">
        <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-bold text-fg" onClick={() => setMenuOpen(false)}>
          <img src={profile.photo} alt="" width="36" height="36" className="size-9 rounded-full object-cover ring-2 ring-accent/60" />
          <span>{profile.name}</span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active === id ? 'bg-accent/15 text-accent' : 'text-muted hover:text-fg'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition hover:opacity-90 sm:inline-flex"
          >
            <LuDownload className="size-4" aria-hidden="true" /> Resume
          </a>
          <ThemeSwitcher />
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line bg-surface/70 text-fg lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line px-4 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-base font-medium ${
                    active === id ? 'bg-accent/15 text-accent' : 'text-fg hover:bg-surface-2'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-on-accent"
          >
            <LuDownload className="size-4" aria-hidden="true" /> Download resume
          </a>
        </div>
      )}
    </header>
  );
}
