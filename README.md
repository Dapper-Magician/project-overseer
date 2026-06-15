# Project Overseer

Project Overseer is a futuristic multi-agent command workstation for turning President Horne's ideas into durable artifacts, systems, documents, prototypes, and ventures.

This repository begins with canon-first development. The first build should use real project files as its content source rather than planned mock data.

## Current Build Status

This repo currently contains the Project Overseer Build Packet v0.1:

- product manifesto
- product vision
- architecture overview
- UI design bible
- ARES protocol
- Director model
- memory strategy
- implementation roadmap
- Director runtime profiles
- initial ARES protocol cards
- Codex build prompt
- diagrams
- meta logs

## Development Doctrine

Project Overseer follows the Real Content First Doctrine.

If the interface needs Director content, create real Director files.

If the interface needs artifacts, use real project files.

If the interface needs ARES protocols, create real ARES protocol files.

If the interface needs memory records, create real decision logs, prompt logs, estimate logs, and session summaries.

## First Implementation Target

The first frontend should render the actual markdown files in this repository as the source of truth for:

- Director Rooms
- ARES Armory
- Artifact Vault
- Memory Loom
- Command Bridge
- Council Chamber

The interface should be built from the canon, not from artificial sample content.

## Web Workstation Shell

Sprint 1 begins with a frontend workspace in `apps/web/`.

### Setup

```bash
npm install
npm run dev
```

Then open the local Vite URL printed by the terminal.

### Build

```bash
npm run build
```

### How Real Repository Content Is Loaded

The web app uses a centralized content registry at `apps/web/src/content/canon.ts`. That registry imports real markdown and Mermaid files with Vite raw imports, normalizes them into records with title, path, category, type, excerpt, and raw content, and feeds the room components.

Initial content sources include:

- `docs/`
- `docs/meta/`
- `directors/`
- `ares/`
- `prompts/`
- `diagrams/`

### Interface Direction

The first shell deliberately avoids a standard Vite/Tailwind starter look. Its design uses a dark command-institution foundation, asymmetric chamber layouts, radial console fields, luminous cyan/amber signal language, dense canon-backed panels, and room-based navigation to support the Project Overseer agenda: a strategic workstation where President Horne commands Directors, artifacts, protocols, and memory.

### Alternate Package Managers and Environment Notes

This repo also includes `pnpm-workspace.yaml`, so pnpm can recognize `apps/web/` as a workspace package:

```bash
pnpm install
pnpm --filter @project-overseer/web dev
```

Bun and Yarn can also install npm packages in normal network environments, but switching package managers does not bypass a registry-level `403 Forbidden` if dependencies are not cached or reachable. See `docs/11_local_dev_environment.md` for the current container findings and workarounds.

## Sprint 3 Artifact Loop

The first Director Artifact Loop v0 is implemented in the Council Chamber.

Current flow:

1. Select a Director.
2. Enter an artifact request.
3. Create a local markdown artifact.
4. Review the generated artifact in Artifact Vault.
5. See the corresponding action record in Memory Loom.

Generated artifacts are local-only prototype records stored in browser `localStorage` and capped to the latest 20 records. They do not write files back to the repository yet.

## Audit Notes

The current security, memory-management, design-pattern, and UI/UX audit is documented in `docs/12_code_audit.md`.
