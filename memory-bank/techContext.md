# Tech Context

## Current Repository State

The repository currently contains Project Overseer canon and planning assets:

- `AGENTS.md`
- `README.md`
- `docs/`
- `docs/meta/`
- `directors/`
- `ares/`
- `prompts/`
- `diagrams/`
- `memory-bank/`

At the time this Memory Bank was created, no frontend application files were present under `apps/web/`.

## Target Frontend Stack

The active implementation target specifies:

- Vite
- React
- TypeScript
- Tailwind CSS

The app should live under:

```text
apps/web/
```

## Development Constraints

- Keep dependencies restrained.
- Prefer markdown-first documentation.
- Prefer simple local structures before complex services.
- Use real repository files as content sources.
- Avoid placeholder content as the core development strategy.
- Keep content loading simple and inspectable.

## Expected Content Loading Approach

Use Vite raw imports where practical:

```ts
import manifesto from '../../../docs/00_manifesto.md?raw';
```

A small content registry can normalize real files into records with fields such as:

- title
- path
- category
- type
- excerpt
- raw content

## Styling Direction

Follow the UI Design Bible:

- dark foundation
- layered panels
- command-console feel
- subtle luminous accents
- tactical readability
- restrained futurism
- room-based navigation

Tailwind CSS should encode the initial visual system with restrained custom tokens and reusable component classes where helpful.

## Tool Usage Patterns

- Use `rg` for searching; do not use recursive `grep` or `ls -R`.
- Read the closest relevant docs before implementation work.
- Commit changes on the current branch after making changes.
- Create PR metadata after committing changes.
- If a runnable web UI is changed perceptibly, take a screenshot when feasible.

## Future Technical Evolution

Potential later additions include:

- local persistence via browser storage, local file-backed API, or SQLite-backed API
- artifact creation workflows
- ARES protocol selector
- memory and decision logging workflows
- connector integrations such as GitHub, Notion, or MCP-backed tools
- advanced memory systems if markdown/meta files become insufficient

## Package Manager Notes

The environment includes npm, pnpm, Yarn, and Bun. pnpm requires `pnpm-workspace.yaml` to recognize this repo's workspace package. However, all managers still require package registry access unless dependencies are cached or vendored. In the current container, npm registry requests return `403 Forbidden`, so the app cannot be installed, served, built, or screenshotted here until registry access or a cache workaround is available.
