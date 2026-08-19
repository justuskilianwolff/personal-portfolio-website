# Justus Kilian Wolff — Portfolio

A statically generated portfolio for an optimisation and machine-learning engineer. It is built with SvelteKit 2, Svelte 5, Tailwind CSS 4, and deployed to GitHub Pages.

## Current status

- Static, prerendered SvelteKit site using `@sveltejs/adapter-static`
- Homepage, experience, education, and legal routes
- GitHub Pages deployment from `main`
- Package manager: pnpm 11.20.0

## Requirements

- Node.js 24 or newer
- pnpm 11.20.0

```sh
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
```

Use pnpm for all dependency and script commands. Do not create npm, Yarn, or Bun lockfiles.

## Development

```sh
pnpm dev
pnpm check
pnpm lint
pnpm build
pnpm preview
pnpm generate:og
```

`pnpm generate:og` captures the internal `/og` route with Playwright and writes the Open Graph card to `static/og-image.png`; `pnpm build` runs it automatically. `pnpm check` runs Svelte and TypeScript diagnostics. `pnpm lint` verifies Prettier formatting and ESLint rules. `pnpm format` applies formatting changes.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yaml` installs dependencies with pnpm, validates the project, builds the static site, and deploys `build/` to GitHub Pages.
