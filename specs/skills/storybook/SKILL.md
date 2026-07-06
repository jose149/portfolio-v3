---
name: storybook
description: Build, document, configure, or review UI components and stories in Storybook. Use for story files, args, decorators, controls, Autodocs, MDX, framework configuration, and static Storybook builds.
compatibility: Requires a Storybook project. Follow the installed Storybook version, renderer, builder, and application framework.
metadata:
  version: "1.0"
---

---

# Storybook workflow

## Before coding

1. Inspect `package.json`, the lockfile, `.storybook/`, and nearby story files.
2. Determine the installed Storybook version, framework package, builder, and story format.
3. Read only the relevant official Storybook documentation for that version.
4. Follow the repository's existing story format. Do not adopt preview APIs or migrate stories unless explicitly requested.
5. For Next.js projects, prefer `@storybook/nextjs-vite` unless existing Webpack or Babel requirements prevent it.

## Implementation rules

- Write stories in Component Story Format and colocate them with the component when practical.
- Create one story for each meaningful visual or behavioural state, including important empty, loading, error, disabled, and boundary states.
- Use `args` for component inputs so stories remain reusable and controllable.
- Keep stories deterministic and isolated. Do not depend on live APIs, production data, current time, randomness, or shared mutable state.
- Use decorators for shared providers, layout, themes, and context instead of repeating wrappers in every story.
- Configure global styles, tokens, and fonts once in `.storybook/preview.*` so components match the application.
- Keep `.storybook/main.*` minimal and use only necessary addons.
- Prefer Autodocs for reusable components. Use MDX only when custom narrative documentation adds real value.
- Add concise JSDoc to public components and non-obvious props when it improves generated documentation or agent manifests.
- Keep story titles and hierarchy stable, predictable, and based on component ownership.
- Do not change component production behaviour solely to make a story work; provide the required environment through args, decorators, loaders, or mocks.
- Do not duplicate business logic inside stories.
- Treat accessibility and interaction assertions as tests; place their detailed conventions in the dedicated Storybook testing skill.
- Build Storybook before completion to detect missing imports, unsupported browser code, and configuration errors.

## Validation

Run the repository scripts when available:

```bash
pnpm typecheck
pnpm lint
pnpm build-storybook
pnpm check
```

Open affected stories and verify their states, controls, responsive behaviour, and documentation manually when visual changes are involved.
