---
name: accessibility-testing
description: Add, review, configure, or debug automated web accessibility checks. Use for axe-core, Storybook accessibility audits, Playwright accessibility scans, accessibility assertions, WCAG regression checks, and CI accessibility failures.
compatibility: Requires a web UI and an automated accessibility tool such as axe-core. Follow the installed tool, framework, Storybook, and Playwright versions.
metadata:
  version: "1.0"
---

---

# Accessibility testing workflow

## Before testing

1. Inspect `package.json`, the lockfile, Storybook and Playwright configuration, existing accessibility helpers, and nearby tests.
2. Determine the installed axe-core and integration versions.
3. Read only the relevant official W3C, axe-core, Storybook, and Playwright documentation.
4. Use WCAG 2.2 Level AA as the default target unless the accepted specification defines another standard.
5. Do not claim WCAG conformance from automated checks alone.

## Rules

- Run automated checks at two useful levels:

  - component states in Storybook;
  - critical rendered pages and journeys in Playwright.

- Use the official Storybook accessibility addon for stories and `@axe-core/playwright` for page-level Playwright scans when those tools are part of the repository.
- Scan meaningful states, not only initial render: open menus, dialogs, validation errors, loading results, expanded content, and other interactive states.
- Fail tests on unexpected serious accessibility violations. Do not silently log and continue.
- Fix the underlying markup, semantics, labels, focus behaviour, or contrast before changing test configuration.
- Prefer semantic HTML over adding ARIA to non-semantic elements.
- Scope scans only when the excluded area is outside the feature or cannot be controlled. Document every exclusion.
- Disable an axe rule only for a verified false positive or accepted temporary limitation. Keep the suppression narrow and record the reason and follow-up.
- Keep test pages deterministic. Control animations, asynchronous content, advertisements, third-party widgets, dates, and random data when they affect results.
- Test each reusable component story that represents a distinct accessible state.
- Test at least one complete page for landmarks, heading structure, names, relationships, and integrated content.
- Add explicit assertions for behaviour that automated scanners do not fully verify, such as:

  - focus moving into and returning from dialogs;
  - keyboard operation and logical focus order;
  - accessible names that accurately describe purpose;
  - status and error announcements;
  - skip links and landmark navigation.

- Do not use accessibility-tree or ARIA snapshots as the only accessibility test.
- Do not treat a missing axe violation as proof that keyboard, screen-reader, zoom, motion, language, or content requirements are satisfied.
- Keep a small manual review checklist for keyboard navigation, visible focus, zoom and reflow, reduced motion, screen-reader behaviour, and meaningful alternative text.
- Do not assert internal axe result structure beyond what is needed to report actionable violations.
- Keep generated accessibility reports and test artifacts out of source control unless the repository intentionally publishes them.

## Validation

Run the narrowest relevant component or page check first, then the full accessibility and quality gates:

```bash
pnpm storybook
pnpm test-storybook
pnpm exec playwright test path/to/accessibility.spec.ts
pnpm test:a11y
pnpm check
```

For every reported violation, include the rule, affected element, impact, and remediation context. After fixes, rerun both the affected state and the complete relevant suite.
