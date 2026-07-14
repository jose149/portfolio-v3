Act as the Planner for this repository.

Plan exactly one task:

`hero-01-home-hero-section`

Read:

1. `AGENTS.md`
2. `specs/agents/planner.md`
3. `specs/features/001-hero/001-hero.md`
4. `docs/design/design.md`
5. `docs/design/sections/hero.md`
6. `specs/skills/INDEX.md`
7. current `apps/web` structure

Do not implement source code.

Create the draft task under:

`specs/tasks/_draft/hero-01-home-hero-section/`

Goal:

Implement the homepage Hero section in `apps/web` following the approved design documentation.

Include:

- semantic Hero component
- homepage integration
- Sass module styling
- responsive desktop/tablet/mobile layout
- light and dark theme compatibility using existing tokens
- primary CTA to `#contact`
- secondary CTA to `#projects`
- approved hero portrait if available
- accessible image alt text
- visible focus states
- build/typecheck/lint verification

Do not include:

- full header/nav redesign
- Projects section
- About section
- Sanity integration
- analytics
- Storybook unless already required by the existing UI package conventions
- new design tokens unless absolutely necessary
- Tailwind
- broad refactoring

Use `checkpointed` execution mode.

Prefer three checkpoints:

1. inspect design references and define component boundaries;
2. implement Hero structure and styling;
3. verify responsive/accessibility basics and build.

Select only the required skills. Expected candidates:

- nextjs
- react
- typescript
- sass
- accessibility-testing

Ask no more than three blocking questions. Use repository-consistent defaults for reversible decisions.

Return only:

- draft status;
- files created or updated;
- blocking questions;
- assumptions changed;
- changes made;
- whether explicit approval is required.
