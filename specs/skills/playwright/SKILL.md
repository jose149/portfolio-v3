---

name: playwright
description: Write, review, configure, or debug Playwright end-to-end tests. Use for critical browser journeys, locators, fixtures, authentication state, network mocking, projects, traces, retries, and CI execution. Use Vitest for unit tests and React Testing Library for React component behaviour.
compatibility: Requires @playwright/test. Follow the locally installed Playwright, browser, framework, and Node.js versions.
metadata:
  version: "1.0"
--------------

# Playwright workflow

## Before testing

1. Inspect `package.json`, the lockfile, `playwright.config.*`, test fixtures, setup projects, and nearby end-to-end tests.
2. Determine the installed `@playwright/test` and Node.js versions.
3. Read only the relevant official Playwright documentation for that version.
4. Follow the repository's existing test structure, projects, base URL, web server, and authentication strategy.
5. Do not upgrade Playwright, install new browsers, or change CI-wide configuration unless explicitly requested.

## Rules

* Use Playwright for critical user journeys and browser integration, not for logic already covered by unit or component tests.
* Test behaviour visible to the user and keep each test independent.
* Prefer `getByRole`, `getByLabel`, `getByText`, and other user-facing locators. Use test IDs only when no stable user-facing contract exists.
* Avoid brittle CSS selectors, XPath, DOM traversal, and selectors tied to implementation structure.
* Use locators and web-first `expect` assertions so Playwright can auto-wait. Do not add arbitrary sleeps.
* Await every asynchronous Playwright action and assertion.
* Keep tests deterministic. Control external APIs, time, generated data, and third-party services when they affect reliability.
* Mock only systems outside the behaviour being tested. Do not mock the application feature the test is meant to verify.
* Use fixtures for reusable setup and teardown. Keep fixtures small, typed, and scoped to the tests that need them.
* Preserve Playwright's browser-context isolation. Do not make tests depend on execution order or shared mutable state.
* Reuse authenticated storage state only when accounts and server-side data can safely run in parallel. Never commit real credentials or sensitive session data.
* Prefer API setup for prerequisite data when the UI flow itself is not under test. Clean up created data when the environment is shared.
* Configure `webServer` and `baseURL` centrally rather than starting servers inside individual tests.
* Cover only browsers and device profiles required by the supported-browser policy. Do not multiply projects without a concrete compatibility need.
* Keep retries low and primarily for CI diagnosis. A test that passes only after retry is still flaky and must be investigated.
* Capture traces on first retry or failure, screenshots only on failure, and videos only when they provide additional debugging value.
* Use page objects only for stable, repeated user-facing workflows or page areas. Do not hide assertions or entire test intent behind large abstractions.
* Use visual snapshots only for stable, reviewable surfaces and mask or control dynamic content.
* Do not use Playwright component testing unless the repository explicitly adopts its current experimental status.
* Keep generated reports, traces, screenshots, videos, and authentication state out of source control.

## Validation

Run the narrowest relevant test first, then the supported end-to-end suite and quality gate:

```bash
pnpm exec playwright test path/to/test.spec.ts
pnpm exec playwright test --project=chromium
pnpm test:e2e
pnpm check
```

For CI failures, inspect the HTML report and Trace Viewer before changing timeouts, retries, or selectors.
