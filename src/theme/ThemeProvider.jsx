import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getTheme, THEMES, THEME_STORAGE_KEY } from './themes';

const ThemeContext = createContext(null);

const initialThemeId = () => {
  // index.html has already applied the saved / OS-preferred theme before React loads
  const fromDom = typeof document !== 'undefined' ? document.documentElement.dataset.theme : null;
  return THEMES.some((t) => t.id === fromDom) ? fromDom : THEMES[0].id;
};

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(initialThemeId);
  const theme = getTheme(themeId);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme.id;
    root.dataset.mode = theme.mode;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme.swatch[0]);
  }, [theme]);

  const setTheme = useCallback((id) => {
    setThemeId(getTheme(id).id);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {
      /* storage blocked (private mode etc.): theme still applies for this visit */
    }
  }, []);

  const value = useMemo(() => ({ theme, themes: THEMES, setTheme }), [theme, setTheme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
