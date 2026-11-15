import { useEffect, useRef, useState } from 'react';
import { LuCheck, LuPalette } from 'react-icons/lu';
import { useTheme } from '../theme/ThemeProvider';

/** Palette button in the header that opens a menu of themes. */
export default function ThemeSwitcher() {
  const { theme, themes, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);
  const itemRefs = useRef([]);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Move focus to the active theme when the menu opens
  useEffect(() => {
    if (open) {
      const i = themes.findIndex((t) => t.id === theme.id);
      itemRefs.current[i]?.focus();
    }
  }, [open, themes, theme.id]);

  const onMenuKeyDown = (e) => {
    const i = itemRefs.current.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = (i + (e.key === 'ArrowDown' ? 1 : -1) + themes.length) % themes.length;
      itemRefs.current[next]?.focus();
    } else if (e.key === 'Tab') {
      setOpen(false);
    }
  };

  const choose = (id) => {
    setTheme(id);
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div ref={wrapRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Change theme (current: ${theme.label})`}
        title="Change theme"
        className="grid size-10 place-items-center rounded-full border border-line bg-surface/70 text-fg transition hover:border-accent hover:text-accent"
      >
        <LuPalette className="size-5" aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Themes"
          onKeyDown={onMenuKeyDown}
          className="absolute right-0 top-12 z-50 w-64 origin-top-right rounded-2xl border border-line bg-surface p-2 shadow-2xl shadow-black/30"
        >
          <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-muted">Theme</p>
          {themes.map((t, i) => {
            const selected = t.id === theme.id;
            return (
              <button
                key={t.id}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => choose(t.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-surface-2 focus-visible:bg-surface-2 ${
                  selected ? 'bg-surface-2' : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className="relative size-8 shrink-0 overflow-hidden rounded-full border border-line"
                  style={{ background: t.swatch[0] }}
                >
                  <span
                    className="absolute inset-1.5 rounded-full"
                    style={{ background: `linear-gradient(135deg, ${t.swatch[1]}, ${t.swatch[2]})` }}
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-fg">{t.label}</span>
                  <span className="block text-xs text-muted">{t.note}</span>
                </span>
                {selected && <LuCheck className="size-4 text-accent" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
