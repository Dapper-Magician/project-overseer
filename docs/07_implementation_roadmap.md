# Project Overseer Implementation Roadmap

## Purpose

This roadmap defines the first implementation path for Project Overseer.

The goal is to move from vision to working software through visible wins, disciplined scope, and Codex-assisted implementation.

Project Overseer should be built in phases that each produce something usable, inspectable, or demonstrable.

## Roadmap Principles

1. Build visible wins.
2. Build from real canon files.
3. Preserve the soul of the system.
4. Avoid dependency creep.
5. Prefer markdown and local files before complex databases.
6. Use Codex and other coding agents through precise task prompts.
7. Track estimates versus actual time.
8. Improve roadmap accuracy through evidence.
9. Keep Director authorship visible.
10. Make the interface beautiful early.

## Sprint 0: Canon and Repo Foundation

### Goal

Create the foundational documentation and project structure required for Codex and other agents to build from the same source of truth.

### Outputs

- `AGENTS.md`
- `README.md`
- product canon in `docs/`
- source prompt archive in `docs/source/`
- meta logs in `docs/meta/`
- Director profiles in `directors/`
- ARES protocols in `ares/`
- diagrams in `diagrams/`
- Codex task prompts in `prompts/`

### Win Condition

The repo contains enough real canon for Codex to understand what Project Overseer is, how it should look, and what the first workstation should accomplish.

## Sprint 1: Workstation Shell from Canon

### Goal

Build the first navigable frontend shell using real project files as content sources.

### Outputs

- Vite + React + TypeScript frontend under `apps/web/`
- Tailwind CSS styling
- Command Bridge screen
- Council Chamber screen
- Director Rooms screen backed by `directors/`
- ARES Armory screen backed by `ares/`
- Artifact Vault screen backed by real project files
- Memory Loom screen backed by `docs/meta/`
- setup instructions in README

### Win Condition

The app runs locally and visually communicates the Project Overseer concept using actual repository content.

A first-time viewer should understand:

- this is a command workstation
- Directors exist
- ARES exists as an armory/protocol layer
- artifacts exist
- memory exists
- the user is in command

## Sprint 2: Visual Refinement and Design Bible Expansion

### Goal

Improve the interface from working shell to Project Overseer identity.

### Outputs

- refined layout
- stronger Command Bridge composition
- Director-specific visual treatments
- improved ARES Armory
- improved Artifact Vault
- improved Memory Loom
- design token draft
- expanded UI Design Bible with:
  - palette
  - hex values
  - typography
  - spacing
  - component rules
  - wireframe notes

## Sprint 3: Director Artifact Loop v0

### Goal

Implement the first artifact creation flow.

### Core Flow

1. User selects a Director.
2. User enters an artifact request.
3. The Director output is created or pasted into the system.
4. Artifact is displayed in Artifact Vault.
5. Memory Loom records an action or decision.

### Initial Artifact Candidates

- Bolt creates README.md.
- Athena creates roadmap.md.
- Echo creates manifesto update.
- Iris creates UI note.
- Darwin creates acceptance criteria.
- Ace creates MVP boundary note.

## Sprint 4: ARES Protocol Assistance v0

### Goal

Show the difference between Director-only output and Director + ARES protocol output.

### Example

Bolt can create README.md directly.

Bolt can also create README.md using REPO protocol guidance.

### Outputs

- ARES protocol selector
- REPO guidance panel
- Kanban guidance panel
- Memory guidance panel
- artifact metadata showing whether ARES was used

## Sprint 5: Memory and Decision Logging v0

### Goal

Create the first simple continuity system.

### Outputs

- decision log UI
- session summary workflow
- estimate calibration workflow
- artifact index
- open questions list

## Sprint 6: Local Persistence

### Goal

Move from static repo content to local persistence.

Candidate approaches:

- browser local storage
- local file-backed API
- SQLite-backed local API

Recommended path:

Start with actual repo content in Sprint 1. Add persistence when artifact creation needs it.

## Sprint 7: Codex Build Loop

### Goal

Formalize the development loop where Project Overseer helps build itself.

### Workflow

1. President Horne gives intent.
2. Overseer creates implementation task.
3. Athena checks scope and priority.
4. Bolt checks technical feasibility.
5. Iris checks UI/design implications.
6. Darwin writes acceptance criteria.
7. Echo clarifies the task prompt.
8. Ace checks effort versus value.
9. Overseer produces Codex-ready prompt.
10. Codex implements.
11. Bolt and Darwin review.
12. Echo updates docs.

## Current Priority

The immediate priority is:

1. finish Sprint 0 canon
2. run `prompts/01_build_from_canon.md` in Codex
3. inspect output
4. update estimate calibration
5. refine
