@AGENTS.md

# Edith Restaurant: project guide

Landing page for Cooperativa Mistura & Sabores Edith, a food cooperative in Jardim Edite, São Paulo. The page only informs: address, hours, history, photos and contact. Orders happen in line at the register, so the site must not offer ordering, reservations, prices or a menu.

Stack: Next.js 16 (App Router, static prerender), React 19, TypeScript, Tailwind CSS v4, Storybook 10, npm, Node 24.

These rules apply to every piece of code you write and every review you do in this repo.

## Language

- Write all code in English: file and folder names, components, variables, props, types, CSS tokens and utilities, comments, Storybook titles, script output and workflow names.
- Keep only what the visitor sees in Brazilian Portuguese: page copy, `alt` text, `aria-label` and other accessible names, and the page metadata.
- Image files in `public/` get English kebab-case names (`dish-grilled-chicken.jpg`).
- A review flags any Portuguese identifier, file name or comment as a defect.

## Architecture

The project follows Clean Architecture. Dependencies point inward, toward the domain. The outer layers know the inner ones; the inner layers never import from the outer ones.

| Layer | Where | Holds | May import |
|---|---|---|---|
| Domain | `src/content/` | Entity types (`Site`, `Shift`, `Quote`, `Photo`, `Link`) and the site content (`site.ts`) | Nothing from the app |
| Application | `src/application/` (create when needed) | Use cases that combine or transform domain data | Domain |
| Infrastructure | `src/infrastructure/` (create when needed) | Adapters for external services: a CMS, an API, analytics | Domain, Application |
| Presentation | `src/components/`, `src/app/` | React components, pages, layout, styles | Everything above |

Rules:

- The domain stays plain TypeScript: no React, no Next.js, no Tailwind classes, no `fetch`.
- Components receive domain data. They never call an external service directly; an infrastructure adapter does that, behind an interface the domain or application layer defines.
- Today the site is static and only the domain and presentation layers exist. Create the application or infrastructure folder only when the first real need appears (for example, content coming from a CMS). Do not add empty layers or abstractions ahead of time.
- New visible copy goes in `src/content/site.ts`, not in components. Some section titles and labels are still inline in components; move them into `site.ts` when you touch those components.

## Folder structure

```
src/
  app/            # Routes, layout, fonts, global styles and the Foundations stories
  components/
    sections/     # Page sections (Header, Hero, Contact, Hours, DishGallery, History, Footer)
    ui/           # Reusable building blocks (CtaButton, Section, ExternalLink, ...)
  content/        # Domain: entity types and site content
scripts/          # check-page.mjs: checks the served HTML
public/           # Images
```

- `ui` components do not import from `sections`. `sections` may import from `ui`.
- Only `src/app/page.tsx` composes sections into the page.

## React and Next.js

- Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code (see AGENTS.md). This version differs from older ones: for example, `next/image` uses `preload`, not `priority`.
- Components are Server Components by default. Add `"use client"` only for real interactivity (state, effects, browser events), and keep that client part as small as possible.
- One component per file. The file name matches the component name in PascalCase, and the component is a named export. Route files (`page.tsx`, `layout.tsx`) keep the default export Next.js requires.
- Declare props as a `type` named `<Component>Props` right above the component. Keep variant maps in a constant (`VARIANTS`, `BACKGROUNDS`) and type the prop as `keyof typeof`.
- Use `next/image` for every photo, with real `width` and `height` and a `sizes` value that matches the layout. Use `preload` only on the image above the fold.
- Fonts come from `src/app/fonts.ts` through `next/font`. Do not load fonts any other way.
- External links open in a new tab with `rel="noopener noreferrer"` (`ExternalLink` and `CtaButton` already do this).
- Do not add a dependency without a clear need. Prefer the platform and what the project already uses.

## Styling

- Use only the tokens in `src/app/globals.css`: the `surface`, `ink`, `leaf-green`, `beet-red`, `brand-green`, `pot-blue` and `carrot-orange` colors, the `none`, `small`, `large` and `pill` radii, the `card` shadow and the `plate` drop shadow. No arbitrary colors or hex values in components.
- Use the text utilities `page-title`, `section-title`, `tagline`, `body-copy`, `label-copy` and `caption` instead of ad hoc font sizes.
- Spacing uses the 2, 4, 8 and 16 steps of the Tailwind scale.
- Mobile first: the layout must work from 320 px wide with no horizontal scroll.
- A new token goes in `globals.css` and in `src/app/Foundations.stories.tsx`.

## Accessibility

- Every photo has an `alt` text in Portuguese that describes what is in it. Decorative SVGs get `aria-hidden="true"`.
- Icon-only links get an `aria-label`, and touch targets are at least 44 × 44 px.
- Keep one `h1` per page and `h2` for sections. Use semantic elements (`header`, `main`, `section`, `nav`, `address`, `footer`, `figure`).
- Do not remove the global `:focus-visible` style.
- axe must report zero violations at 360 px and 1280 px.

## Storybook

- Every component in `ui/` has a `<Component>.stories.tsx` next to it, titled `Components/<Component>`. Sections are listed in `src/components/sections/Sections.stories.tsx`.
- Stories read their data from `site`, so they stay in sync with the page.

## Testing and verification

`scripts/check-page.mjs` is the page test. It requires key copy, links and images in the served HTML and rejects forbidden content (menu, prices, ordering, reservations, happy hour, placeholder text).

For every change to content or behavior, work test first:

1. Update `scripts/check-page.mjs` with what the change must produce or remove.
2. Build, start the server and run the check. It must fail for the expected reason.
3. Make the change and run it again until it passes.

Before you call any change done, run the full set and read the output:

```bash
npm run lint
npm run build
npx tsc --noEmit            # after the build: it generates the LayoutProps types
npx next start -p 3100 &    # then:
node scripts/check-page.mjs http://localhost:3100
npm run build-storybook
```

For visual changes, also look at the page at 320, 360, 768 and 1280 px.

## Code review checklist

- Code, names and comments in English; visible copy in Portuguese.
- Dependencies point inward; no domain code imports React or Next.js.
- New copy and data live in `src/content/site.ts`.
- Only design tokens and text utilities; no arbitrary values.
- Server Component unless interactivity requires otherwise.
- Images use `next/image` with Portuguese `alt` text and correct `sizes`.
- Stories exist for new `ui` components.
- `check-page.mjs` covers the change, and the full verification passes.
- No menu, prices, ordering or reservation content on the page.

## Git and release

- Every push to `main` triggers `.github/workflows/release.yml`: it runs the checks, bumps the patch version in a `chore(release): x.y.z` commit and tag, and Vercel deploys that commit to production. A push to `main` publishes the site, so commit and push only when asked.
- After a push, run `git pull --rebase` before the next change, because the release commit lands on `main`.
- Never commit `docs/references/`. It holds reference material and is gitignored.
- Keep the page out of search engines (`indexable: false` in `site.ts`) until the launch is approved.
