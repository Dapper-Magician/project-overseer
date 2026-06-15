# Local Development Environment Notes

## Purpose

This note records what was discovered while trying to run the Project Overseer web app in the Codex container environment.

## Available JavaScript Tooling

The container includes:

- Node.js
- npm
- Corepack
- pnpm
- Yarn
- Bun
- TypeScript CLI shim

## Current Blocker

All package managers that attempted to resolve the web dependencies hit the same package registry barrier:

```text
GET https://registry.npmjs.org/... - 403 Forbidden
```

This affected:

- `npm install`
- `bun install`
- `pnpm --dir apps/web install`
- `yarn install`

Bun, pnpm, and Yarn can process npm packages, but they still need registry access unless dependencies are already cached or vendored.

## Practical Workarounds

### Best Normal Path

Use npm or pnpm from a network environment that can access the npm registry:

```bash
npm install
npm run dev
```

or:

```bash
pnpm install
pnpm --filter @project-overseer/web dev
```

The repo includes `pnpm-workspace.yaml` so pnpm can understand the workspace layout.

### If the Registry Is Blocked

Possible alternatives are:

1. Provide a committed lockfile and an accessible package cache.
2. Vendor dependencies into the environment before running Codex.
3. Configure a reachable npm-compatible registry mirror.
4. Run dependency installation locally, then provide the generated lockfile and any required artifacts.

### What Does Not Help Alone

Switching package managers does not bypass a registry-level `403` if the dependency packages are not already cached. npm, pnpm, Yarn, and Bun all ultimately need package resolution access for this app.

## Screenshot Limitation

A screenshot should be taken after dependencies are available and the Vite dev server can run. In the current restricted environment, the app cannot be served because React, Vite, Tailwind, and related packages cannot be installed.
