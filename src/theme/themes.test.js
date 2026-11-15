import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expect, test } from 'vitest';
import { THEMES } from './themes';

// Tests run from the project root
const css = readFileSync(resolve(process.cwd(), 'src/index.css'), 'utf8');
const html = readFileSync(resolve(process.cwd(), 'index.html'), 'utf8');

test('every theme has a colour block in index.css and is known to index.html', () => {
  for (const { id } of THEMES) {
    expect(css, `index.css is missing [data-theme="${id}"]`).toContain(`[data-theme="${id}"]`);
    expect(html, `index.html theme list is missing ${id}`).toMatch(new RegExp(`\\b${id}:\\s*'(light|dark)'`));
  }
});

test('the default-theme fallback cannot override a chosen theme', () => {
  // A plain `:root` has the same specificity as [data-theme="..."], so whichever block
  // comes last would win for every theme. The fallback must use zero-specificity :where(:root).
  expect(css).not.toMatch(/(^|\n)\s*:root\s*,/);
  expect(css).toContain(':where(:root)');
});

test('Paper is first, so it is the default', () => {
  expect(THEMES[0].id).toBe('paper');
  expect(html).toContain("theme = 'paper'");
});
