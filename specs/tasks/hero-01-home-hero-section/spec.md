---
id: hero-01-home-hero-section
status: done
feature: 001-hero
execution-mode: checkpointed
skills:
  - nextjs
  - react
  - typescript
  - sass
---

# Goal

Implement the homepage Hero section in `apps/web` following the approved design documentation.

# Context

The requested feature path `specs/features/001-hero.md` does not exist. The matching accepted feature specification is `specs/features/001-hero/001-hero.md`.

The requested design-system path `docs/design/design-system.md` does not exist. Available design documentation and references inspected for this draft:

- `docs/design/sections/hero.md`
- `docs/design/references/approved-full-page-comparison.png`

The current `apps/web` homepage is still the default Next.js starter page. Existing relevant files include:

- `apps/web/package.json`
- `apps/web/src/app/page.tsx`
- `apps/web/src/app/page.module.scss`
- `apps/web/src/app/globals.scss`
- `apps/web/public/portrait-hero.png`

An earlier ready task existed at `specs/tasks/hero-01-home-hero-section/`. This approved draft supersedes that version.

# Scope

## Included

- Replace the default homepage content with a semantic Hero section.
- Add a reusable Hero component inside `apps/web`.
- Integrate the Hero component into the homepage route.
- Add Sass module styling.
- Implement responsive desktop, tablet and mobile layout.
- Support light and dark theme compatibility using existing tokens or the smallest necessary scoped CSS custom properties.
- Add a primary CTA linking to `#contact`.
- Add a secondary CTA linking to `#projects`.
- Use the available approved portrait asset if appropriate.
- Provide accessible image alt text when the portrait represents Jose Crespi.
- Provide visible focus states for CTA links.
- Respect `prefers-reduced-motion` for transitions.
- Verify lint, typecheck and build.

## Not included

- Full header or navigation redesign.
- Projects section implementation.
- About section implementation.
- Sanity integration.
- Analytics.
- Storybook unless existing UI package conventions require it during implementation.
- New design tokens unless absolutely necessary.
- Tailwind.
- Broad refactoring.

# Requirements

## Functional

- The homepage must render the Hero as the first meaningful content inside `main`.
- The Hero must include:
  - eyebrow text from `docs/design/sections/hero.md`;
  - main headline: `I design. I build.`;
  - highlighted phrase: `I ship results.`;
  - value proposition from `docs/design/sections/hero.md`;
  - primary CTA text: `Let's connect`;
  - secondary CTA text: `View projects`;
  - metadata: `Mallorca - CET/CEST - Remote-friendly`;
  - a professional portrait or visual area.
- The primary CTA must link to `#contact`.
- The secondary CTA must link to `#projects`.
- The Executor must prefer the available portrait at `apps/web/public/portrait-hero.png` unless a more canonical approved portrait path exists by implementation time.
- The portrait must use meaningful alt text because it represents Jose Crespi.

## Technical

- Use Next.js App Router conventions already present in `apps/web`.
- Use React function components and TypeScript.
- Use Sass modules for component styling.
- Avoid Tailwind classes and dependencies.
- Avoid adding dependencies.
- Use accessible semantic HTML:
  - Hero must be a `section`;
  - heading hierarchy must remain valid;
  - CTA links must have accessible names;
  - decorative elements must be hidden from assistive technology.
- Use existing tokens where available. If scoped CSS custom properties are necessary because the requested design-system file is missing, keep them local to the Hero or page boundary and aligned to the accepted feature/design references.
- Preserve or improve global overflow protection so the Hero does not cause horizontal scrolling.
- Ensure links have visible focus states in light and dark themes.
- Ensure touch targets are at least 44px where practical.

# Repository boundaries

Permitted areas:

- `apps/web/src/app/page.tsx`
- `apps/web/src/app/page.module.scss`
- `apps/web/src/app/globals.scss` only if global page baseline or theme token changes are necessary
- `apps/web/src/components/**` or the nearest existing component directory if introduced
- `apps/web/public/portrait-hero.png`
- `apps/web/public/images/**` only if the Executor must move or add an approved asset path

Forbidden areas:

- Sanity packages or schemas
- Projects, About, Experience or Contact section implementations
- Header or navigation redesign
- Root dependency or workspace changes
- Generated folders such as `.next`, `.turbo` and `node_modules`

# Acceptance criteria

- Repository inspection shows the default Next.js starter homepage content has been replaced by the portfolio Hero.
- Repository inspection shows a semantic Hero component is present and integrated into the homepage.
- Repository inspection shows Hero styling is implemented with Sass modules.
- The Hero uses approved content from `docs/design/sections/hero.md`.
- The Hero visually follows the approved full-page comparison reference within the Hero scope.
- The Hero works in light and dark themes without introducing Tailwind or unrelated dependencies.
- The primary CTA `href` is `#contact`.
- The secondary CTA `href` is `#projects`.
- The available portrait is used with meaningful alt text, unless a later approved portrait path supersedes it.
- Manual responsive inspection at desktop, tablet and mobile widths shows:
  - desktop uses a two-column editorial layout;
  - tablet layout remains balanced without overlap;
  - mobile uses one column with copy first and visual below;
  - no horizontal overflow is visible.
- Manual keyboard inspection shows CTA focus states are visible in light and dark themes.
- `pnpm --filter @portfolio/web lint` completes successfully.
- `pnpm --filter @portfolio/web typecheck` completes successfully.
- `pnpm --filter @portfolio/web build` completes successfully.
- If Sass files are changed, `pnpm stylelint` completes successfully or any existing unrelated failures are documented.

# Decisions and assumptions

- The task uses `checkpointed` execution mode.
- Required skills are limited to the skills available in `specs/skills/INDEX.md`: `nextjs`, `react`, `typescript` and `sass`.
- The requested `accessibility-testing` skill is not listed in `specs/skills/INDEX.md`; accessibility requirements are captured directly in this task instead.
- No Storybook work is required unless implementation discovers an existing UI package convention that requires it.
- The available portrait asset is `apps/web/public/portrait-hero.png`, even though `docs/design/sections/hero.md` names `/images/portrait-hero.png` as the preferred asset path.
- The Executor should create only the smallest component boundary needed for the Hero.
- User approval confirms this task supersedes the earlier ready task at `specs/tasks/hero-01-home-hero-section/`.
- Because `docs/design/design-system.md` is missing, the Executor should rely on existing app tokens plus the accepted Hero design and approved reference image, adding only scoped CSS custom properties when necessary.

# Dependencies

- Accepted feature specification: `specs/features/001-hero/001-hero.md`
- Hero design documentation: `docs/design/sections/hero.md`
- Approved visual reference: `docs/design/references/approved-full-page-comparison.png`
- Existing `@portfolio/web` scripts in `apps/web/package.json`

# Open questions

None.
