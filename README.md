# Pankaj Khatri — Portfolio

Live: https://mrpk4699.github.io/

Built with React, Vite and Tailwind CSS. Six switchable themes (palette icon in the header).

## Commands

```bash
npm install        # first time only
npm run dev        # local dev server at http://localhost:5173
npm test           # run tests (vitest)
npm run build      # production build into dist/
npm run deploy     # build + publish dist/ to the gh-pages branch (goes live)
```

## Where to edit

- **Text, links, skills, projects:** `src/data/portfolio.js`
- **Themes (colours):** `src/index.css` (`[data-theme="..."]` blocks) and `src/theme/themes.js`.
  When adding a theme, also add its id to the small list in `index.html`.
- **Images, resume PDF:** `public/assets/`
