# AGENTS.md

## Project Overview

React landing page for a gaming platform called "GLITCH_CORE" / "Neon Kinetic". Built with Vite, React 19, and Tailwind CSS v4.

## Tech Stack

- **Framework:** React 19
- **Build tool:** Vite 8
- **Styling:** Tailwind CSS v4 (CSS-native `@theme` config, no `tailwind.config.js`)
- **HTTP client:** Axios (declared in `package.json` but not yet used)
- **Package manager:** npm (pnpm has issues with rolldown hoisting on Windows)

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

Always run `npm run lint` after making changes to verify code correctness.

## Project Structure

```
src/
├── main.jsx              # Entry point, renders <App />
├── App.jsx               # Root component: Navbar, Hero, Plataformas, FeatureSection, Content, StatsBar, Reseñas, Newsletter, Footer
├── index.css             # Tailwind import + @theme design tokens + CSS custom properties
├── App.css               # Component-level styles
├── assets/               # Static assets (images, SVGs)
└── components/
    ├── Navbar.jsx        # Fixed top navigation
    ├── Hero.jsx          # Full-screen hero section
    ├── FeatureSection.jsx # Platform features grid (cloud, crossplay, multiplayer, VR)
    ├── Plataformas.jsx   # Supported platform badges (PC, PlayStation, Xbox, Nintendo, VR)
    ├── Content.jsx       # Game catalog with hardcoded data + Card grid
    ├── Card.jsx          # Individual game card (receives `game` prop)
    ├── StatsBar.jsx      # Statistics bar (players, games, countries, uptime)
    ├── Reseñas.jsx       # Testimonials section (maps data to ReseñasCards)
    ├── ReseñasCard.jsx   # Testimonial card (receives name, quote, avatar, rating)
    ├── Newsletter.jsx    # Newsletter subscription call-to-action
    └── Footer.jsx        # Footer with links
```

## Component Hierarchy

```
<App>
├── <Navbar />
├── <Hero />
├── <Plataformas />
├── <FeatureSection />
├── <Content />
│   └── <Card /> (mapped from gamesData array)
├── <StatsBar />
├── <Reseñas>
│   └── <ReseñasCard />
├── <Newsletter />
└── <Footer />
```

## Code Conventions

- **Styling:** Tailwind utility classes. Custom theme tokens are defined in `src/index.css` using `@theme` (Tailwind v4) and `:root` CSS custom properties. Color system follows Material Design 3 naming (`on-surface`, `primary-container`, etc.).
- **Fonts:** Hanken Grotesk (body), Sora (headlines), JetBrains Mono (labels/mono).
- **Components:** Functional components with default exports. File and component names match (e.g., `Card.jsx` → `Card`).
- **Data flow:** Game data is hardcoded in `Content.jsx` as `gamesData` array and passed to `Card` via props. Testimonials data is hardcoded in `Reseñas.jsx` and passed to `ReseñasCard` via spread props.
- **ESLint:** Flat config (`eslint.config.js`) with `react-hooks` and `react-refresh` plugins. Ignores `dist/`.

## Design Reference

- `DESIGN.md` — Full design system spec (colors, typography, spacing, elevation, shapes).
- `_desing_reference/` — Reference HTML and screenshot of the target design.

## Important Notes

- This is a JavaScript-only project (no TypeScript).
- Tailwind CSS v4 does not use a JS config file; all theme customization is in `src/index.css` via `@theme` blocks.
- Some components use direct DOM manipulation (e.g., `document.querySelector` in `Content.jsx`). Avoid this pattern — use React state (`useState`) when adding interactivity.
