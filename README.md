# Hearthline Insurance

A fictional homeowners insurance landing page and an editable product management case study, built with Astro and Starlight.

## Run locally

```sh
pnpm install
pnpm exec astro dev --background
pnpm exec astro dev status
pnpm exec astro dev logs
pnpm exec astro dev stop
```

Open the local URL reported by Astro (normally http://localhost:4321/insur-proto/). The landing page is at `/insur-proto/`; the case study is at `/insur-proto/docs/`.

## Build

```sh
pnpm build
pnpm preview --host 127.0.0.1
```

The static site is generated in `dist/`. Starlight generates a Pagefind search index during the production build. Use the production preview to verify search; it is not available in development mode.

## GitHub Pages

The site is published at https://lib-port.github.io/insur-proto/.

The `Deploy Astro to GitHub Pages` workflow builds and deploys the site on every push to `main`. It can also be run manually from the repository’s Actions tab. GitHub Pages uses GitHub Actions as its source.

The workflow uses Node.js 24 and the pnpm version declared in `package.json`. Astro’s `site` and `base` settings match the project URL; internal links and public assets use that base path.

## Edit the experience

- `src/pages/index.astro`: landing-page content, cover categories, FAQs, and mobile navigation.
- `src/styles/landing.css`: marketing typography, colour, layout, and responsive styles.
- `src/components/`: brand, SVG icons, and the explanatory quote dialog.
- `src/content/docs/docs/`: the five case-study pages, written in Markdown/MDX.
- `astro.config.mjs`: documentation title, theme, and case-study navigation.

Existing guide/reference pages and user-added documentation remain available. The starter overview has moved to `/docs/` and become the case-study overview.

Research, audience needs, and success measures in the documentation are explicitly proposed. Replace them with your own evidence and decision records as the project develops.

## Prototype boundaries

The quote buttons open an explanatory dialog. The site collects no personal details, sends no analytics events, calculates no premiums, and does not issue insurance. Hearthline and its cover descriptions are illustrative.

## Assets

Images are stored locally and optimised by Astro:

- Exterior: https://www.pexels.com/photo/1396122/
- Interior: https://www.pexels.com/photo/1571460/
- Photography licence: https://www.pexels.com/license/

DM Sans is hosted locally. Its SIL Open Font License is included in `public/fonts/OFL.txt`. The brand mark and interface icons are project-owned SVG components.

## Validation

Run `pnpm build`, then review the page on mobile and desktop. Check all quote buttons, Escape and close-button dismissal, modal focus return, mobile navigation, keyboard-operated FAQs, documentation links, and production documentation search. Check reduced-motion behaviour and horizontal overflow at narrow widths.
