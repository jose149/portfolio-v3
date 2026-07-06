---
name: statsig
description: Integrate, review, test, or remove Statsig feature gates, experiments, dynamic configs, layers, events, and SDK initialization. Use for Statsig React, Next.js, browser, or server SDK work. Do not use for general analytics tasks that do not involve Statsig.
compatibility: Requires a Statsig project or SDK integration. Follow the locally installed SDK and framework versions.
metadata:
  version: "1.0"
---

---

# Statsig workflow

## Before coding

1. Inspect `package.json`, the lockfile, environment configuration, existing Statsig clients, flag names, experiments, and tests.
2. Determine the installed Statsig SDK packages and versions.
3. Read only the relevant official documentation, using `https://docs.statsig.com/llms.txt` or the official Statsig MCP when available.
4. Use the framework-specific guide for React or Next.js and prefer current SDKs over legacy packages.
5. Do not create, update, launch, stop, or delete Statsig entities without explicit approval.

## Rules

- Use feature gates for boolean rollout decisions, dynamic configs for remotely controlled parameters, experiments for measured variants, and layers when experiments must share mutually exclusive parameters.
- Do not add a flag to every change. Use one only when rollout control, a kill switch, targeting, or experimentation provides concrete value.
- Give every flag or experiment a clear purpose, owner, safe default, and removal condition.
- Keep flag and config names in one small integration boundary; do not scatter raw names through presentation components.
- Initialise one Statsig client per runtime or application lifecycle. Do not initialise a client during component render or per request unless the official runtime guide requires it.
- Use a client API key only in browser code. Keep server secret and Console API keys server-only and out of source control.
- Prefer server evaluation for security-sensitive or server-rendered decisions. Avoid exposing privileged rules or attributes to the browser.
- Use a stable unit identifier so assignments and exposure events remain consistent. Send only attributes required for targeting or analysis.
- Evaluate a gate or experiment at the point where its result affects behaviour. Avoid checks performed only for logging because checks can create exposure events.
- Rely on automatic exposure logging unless delayed or manual exposure is intentionally required and documented.
- Choose safe fallback behaviour for SDK initialisation or evaluation failure. A flag outage must not break the page.
- Prevent server/client assignment mismatch and UI flicker by following the official Next.js bootstrapping or server-rendering guidance.
- Keep event names and metadata stable, documented, and free of accidental personal or sensitive data.
- Do not use dots in custom-event metadata keys.
- Enable Web Analytics or Session Replay only when explicitly required and covered by the project's consent, privacy, masking, retention, and sampling rules.
- Remove stale gates and dead branches after rollout or experiment completion.
- Use local mode or local overrides in automated tests. Tests must not depend on the live Statsig project or production assignments.
- Use the official MCP read-only where possible. Require explicit approval for write operations and use the least-privileged credential.

## Validation

Run the smallest relevant tests first, then the repository quality gate:

```bash
pnpm test
pnpm typecheck
pnpm lint
pnpm build
pnpm check
```

Verify both enabled and disabled paths, safe fallback behaviour, stable user assignment, and that no server or Console key is present in client bundles.
