# Active Context

## Current Work Focus

The current focus is preparing Project Overseer for Sprint 1: building the first navigable frontend workstation shell from repository canon.

The active Codex task is `prompts/01_build_from_canon.md`, which asks for a Vite + React + TypeScript + Tailwind CSS frontend under `apps/web/` with six primary screens:

1. Command Bridge
2. Council Chamber
3. Director Rooms
4. ARES Armory
5. Artifact Vault
6. Memory Loom

## Recent Changes

- Sprint 1 development began with a Vite/React/TypeScript/Tailwind app under `apps/web/`.
- The first workstation shell implements room navigation for Command Bridge, Council Chamber, Director Rooms, ARES Armory, Artifact Vault, and Memory Loom.
- The web app uses `apps/web/src/content/canon.ts` to load real repository markdown and Mermaid files through Vite raw imports.
- Sprint 3 implementation began with a local Director Artifact Loop v0: select Director, enter request, create local markdown artifact, display it in Artifact Vault, and record it in Memory Loom.
- Sprint 2 refinement began with a design token canon file, expanded UI Design Bible notes, Command Bridge doctrine/token panels, ARES tool-use level framing, and local dev environment notes.
- The visual direction was sharpened to avoid default AI-generated Vite/Tailwind aesthetics by using command-institution motifs, radial console fields, luminous signal language, and dense canon-backed panels.
- Memory Bank instructions were adopted as persistent operating guidance.
- The required `memory-bank/` core file set was created because no Memory Bank existed in the repository.
- Memory Bank content was seeded from existing Project Overseer canon, including the manifesto, product vision, architecture overview, UI design bible, ARES protocol, Director model, memory strategy, roadmap, README, development doctrines, and active build prompt.

## Current Decisions

- Treat `memory-bank/` as Codex's durable session continuity layer.
- Keep Memory Bank files concise, direct, and synchronized with canonical project documents.
- Use real repository files as the source of truth for UI content and Memory Bank summaries.
- Do not implement invented sample records for core screens.

## Active Implementation Plan

1. Use Memory Bank and canonical docs as working context.
2. Build the Sprint 1 frontend shell under `apps/web/`.
3. Load real markdown/diagram content through a small inspectable content registry.
4. Implement room-based navigation and product-world components.
5. Follow the UI Design Bible for a dark, layered, luminous, command-console visual system.
6. Update README and Memory Bank after significant implementation changes.

## Important Patterns and Preferences

- Read the closest relevant docs before implementation work.
- Prefer TypeScript for frontend code.
- Prefer small readable components.
- Prefer centralized content loading.
- Prefer markdown-first documentation.
- Prefer simple local structures before complex services.
- Keep dependencies restrained.
- Use product-world component names such as `CommandBridge`, `CouncilChamber`, `DirectorRooms`, `AresArmory`, `ArtifactVault`, `MemoryLoom`, `DirectorCard`, `ProtocolCard`, `ArtifactCard`, `StatusRail`, and `CommandInput`.

## Open Considerations

- The repository now contains a first frontend shell, but dependency installation is blocked in the current container by npm registry `403 Forbidden` responses across npm, pnpm, Yarn, and Bun.
- Artifact creation now exists as local browser state plus `localStorage`; file-backed persistence remains a later Sprint goal.
- If network installation is unavailable or slow, dependency setup may need to be documented separately.
- Any perceptible runnable web UI change should be inspected visually when feasible.
