# Execution checkpoints

## Checkpoint 1 - Inspect design references and define component boundaries

- [x] Read `AGENTS.md`, `specs/agents/executor.md`, this task's `spec.md` and this task's `tasks.md`.
- [x] Load only the listed skills: `nextjs`, `react`, `typescript` and `sass`.
- [x] Inspect `specs/features/001-hero/001-hero.md`, `docs/design/sections/hero.md`, `docs/design/references/approved-full-page-comparison.png`, `apps/web/package.json` and current `apps/web/src/app` files.
- [x] Confirm the available portrait asset path before implementation.
- [x] Choose the smallest repository-consistent Hero component location.

### Verification

- Repository inspection confirms the component boundary does not conflict with existing app structure.
- The selected portrait asset path is recorded in the checkpoint report.
- Any conflict with the existing ready task is recorded before source edits.

### Expected result

- The Executor knows where the Hero component and Sass module will live.
- The visual asset strategy is decided from repository state and documented.

## Checkpoint 2 - Implement Hero structure and styling

- [x] Create the Hero component using semantic React and TypeScript.
- [x] Replace the default homepage starter content with the Hero integration.
- [x] Add Sass module styling for desktop, tablet and mobile layouts.
- [x] Use approved copy, CTAs, metadata, portrait and visual direction from the feature and design references.
- [x] Add light and dark theme compatibility using existing or scoped CSS custom properties.
- [x] Add visible focus styles and reduced-motion handling for transitions.

### Verification

- Repository inspection confirms:
  - Hero is a semantic `section`;
  - homepage renders the Hero as the first meaningful content inside `main`;
  - primary CTA links to `#contact`;
  - secondary CTA links to `#projects`;
  - Sass modules are used;
  - no Tailwind dependency or classes were introduced.

### Expected result

- The homepage displays the implemented portfolio Hero instead of starter content.
- Styling is scoped, responsive and aligned with approved design references.

## Checkpoint 3 - Verify responsive and accessibility basics, then build

- [x] Manually inspect desktop, tablet and mobile viewport behavior.
- [x] Manually inspect keyboard focus visibility for both CTA links.
- [x] Inspect light and dark theme compatibility.
- [x] Run the relevant verification commands.
- [x] Document validation results, deviations and any existing unrelated failures.

### Verification

```bash
pnpm --filter @portfolio/web lint
pnpm --filter @portfolio/web typecheck
pnpm --filter @portfolio/web build
pnpm stylelint
```

### Expected result

- Desktop uses a two-column editorial Hero.
- Tablet remains balanced without overlap.
- Mobile uses a single column with copy first and visual below.
- No horizontal overflow is visible.
- CTA focus states are visible.
- Lint, typecheck and build pass.
- Sass validation passes, or existing unrelated stylelint failures are documented.
