---
name: nextjs
description: Build, review, debug, or refactor Next.js App Router code. Use for routes, layouts, pages, Server and Client Components, data fetching, caching, Server Functions, Route Handlers, metadata, images, fonts, Proxy, and Next.js configuration.
compatibility: Requires a Next.js repository. Prefer the version-matched documentation bundled with the installed next package.
metadata:
  version: "1.0"
---

# Next.js workflow

## Before coding

1. Inspect `package.json` and determine the installed Next.js version.
2. Find and read only the relevant documentation in `node_modules/next/dist/docs/`.
3. If bundled documentation is unavailable, use the official Next.js documentation or the configured Next.js MCP server.
4. Follow the installed version and the repository specification over remembered framework behaviour.

## Implementation rules

- Use the App Router unless the repository explicitly uses the Pages Router.
- Treat pages and layouts as Server Components by default.
- Add `'use client'` only for state, event handlers, effects, browser APIs, or client-only hooks; keep the client boundary small.
- Fetch data in Server Components where practical. Do not assume requests are cached; choose caching and revalidation deliberately after reading the relevant version-matched docs.
- Use Server Functions for mutations when appropriate. Validate input, authentication, and authorization on the server.
- Use Route Handlers for HTTP endpoints, webhooks, or non-UI responses, not as an unnecessary internal API layer.
- Use `proxy.ts` rather than the deprecated `middleware.ts` convention when request interception is required.
- Prefer Next.js primitives such as `Link`, `Image`, the Metadata API, and `next/font`.
- Keep secrets and privileged data in server-only modules.
- Implement relevant loading, error, and not-found states.
- Avoid unnecessary client-side fetching, effects, dependencies, and abstractions.

## Validation

Run the narrowest relevant checks, followed by the repository quality gate when available:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm check
```

When the Next.js MCP server is configured and the development server is running, use it to inspect current errors, logs, routes, and page metadata before declaring the task complete.
