---
name: react

description: Build, review, debug, or refactor React components and Hooks. Use for component design, state, events, effects, context, reducers, refs, forms, Actions, transitions, performance, and reusable UI logic.
compatibility: Requires a React project. Follow the installed React version and its framework integration.
metadata:
  version: "1.0"
---

---

# React workflow

## Before coding

1. Inspect `package.json` and the lockfile for the installed `react` and `react-dom` versions.
2. Identify the framework and whether React Compiler is enabled.
3. Read only the relevant official React documentation for the installed version.
4. For Server Components, Server Functions, routing, or data fetching, follow the framework documentation as the source of truth.

## Implementation rules

- Keep components and Hooks pure: do not mutate props, state, context, or values created outside render.
- Call Hooks only at the top level of React components or custom Hooks.
- Use props and local state first. Lift state to the closest common owner when components must share it.
- Store the minimum state required. Derive values during render instead of duplicating them in state.
- Use event handlers for user actions. Use Effects only to synchronize with external systems, and include correct dependencies and cleanup.
- Use Context only for values needed across a meaningful part of the tree. Use a reducer when state transitions are complex or closely related.
- Use refs for values that do not affect rendering or for imperative DOM access. Do not read or write refs during render.
- Do not add `useMemo`, `useCallback`, or `memo` by default. When React Compiler is enabled, rely on it unless profiling proves otherwise; without it, memoize only for a measured performance reason.
- Use stable keys derived from data. Do not use array indexes when items can be inserted, removed, or reordered.
- Extract a custom Hook only when reusable stateful logic exists. Custom Hook names must start with `use`.
- Prefer small components with explicit props and composition over inheritance or generic configuration objects.
- Preserve semantic HTML, keyboard behaviour, accessible names, and visible focus.

## Validation

Run the narrowest relevant checks, followed by the repository quality gate when available:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm check
```

Test observable behaviour and user interactions rather than component implementation details.
