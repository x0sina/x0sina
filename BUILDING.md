# Sina portfolio

The React portfolio and GitHub profile share a graphite, cream, and mint identity. The profile entry point is `README.md`; the website entry point is `src/main.tsx`.

## Develop and build

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
npm run build
```

The production build is a static site in `dist/`. It can be hosted on any static hosting provider. Vite's default root path is `/`; if deploying to GitHub Pages under a repository subpath, configure `base` accordingly.

## Edit content

- `src/data.ts`: project descriptions, features, technology tags, and destination links.
- `src/main.tsx`: biography, design principles, and page structure.
- `src/styles.css`: theme tokens, responsive layout, and motion preferences.
- `public/assets/profile-banner.svg`: the GitHub profile banner.

Update the website and profile together when changing shared personal content. Project features are an editorial snapshot of the linked documentation, not a live API feed. There are no invented personal role claims, activity statistics, customer claims, or availability claims.

The light/dark theme preference is stored locally in the visitor's browser. The contact section links directly to Telegram and provides a clipboard action for the public handle. The site has no analytics, contact form, server, or credentials.

The published Sites version is owner-private by default. The existing `x0sina.com` links are retained from the original profile; its hosting and DNS are not changed by this redesign. Making the portfolio public or attaching that domain is a separate hosting decision.

## Verification

`npm run build` includes a strict TypeScript check before the production build. Review desktop and mobile layouts, light/dark themes, project dialogs, Escape dismissal, focus restoration, mobile navigation, clipboard feedback, and reduced-motion settings when changing interactions.

Content and asset provenance is recorded in `CONTENT_SOURCES.md`. Component licensing is recorded in `THIRD_PARTY_NOTICES.md`.
