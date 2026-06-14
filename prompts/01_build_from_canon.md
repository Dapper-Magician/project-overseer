# Codex Task: Build Project Overseer Workstation from Canon

## Mission

Build the first navigable frontend interface for Project Overseer using the repository's real canon files as the content source.

This task should create the first visible version of the Project Overseer command workstation.

The interface should render or summarize actual files from:

- `docs/`
- `directors/`
- `ares/`
- `prompts/`
- `diagrams/`

## Required Reading

Read:

- `AGENTS.md`
- `README.md`
- `docs/00_manifesto.md`
- `docs/01_product_vision.md`
- `docs/02_architecture_overview.md`
- `docs/03_ui_design_bible.md`
- `docs/04_ares_protocol.md`
- `docs/05_director_model.md`
- `docs/meta/development_doctrines.md`

## Product Summary

Project Overseer is a futuristic multi-agent command workstation.

President Horne enters the Command Bridge and works with specialized THINKTANK Directors:

- Athena
- Bolt
- Iris
- Darwin
- Echo
- Ace

The workstation should feel tactical, futuristic, elegant, command-centered, and alive with distinct specialist presence.

## Implementation Target

Create a frontend under:

```text
apps/web/
```

Use:

- Vite
- React
- TypeScript
- Tailwind CSS

Keep dependencies restrained.

## Content Rule

Build from real repository content.

Use actual project files as content sources.

The interface should not be built around invented sample records.

Recommended implementation approach:

- Use Vite raw markdown imports such as `?raw` where practical.
- Create a small content registry that imports actual files.
- Display titles, excerpts, categories, and file paths from those real files.
- Use the real Director files for Director Rooms.
- Use the real ARES files for ARES Armory.
- Use the real docs/prompts/diagrams files for Artifact Vault.
- Use the real docs/meta files for Memory Loom.

If a file is needed for the interface and does not exist, create the actual project file and explain why.

## Required Screens

Create navigable screens for:

1. Command Bridge
2. Council Chamber
3. Director Rooms
4. ARES Armory
5. Artifact Vault
6. Memory Loom

## Screen Requirements

### Command Bridge

Show:

- current project identity
- active mission based on the roadmap
- Director overview from real Director files
- recent artifact links from real project files
- memory links from `docs/meta/`
- command input strip visual

### Council Chamber

Show:

- current development focus
- real decision references from `docs/meta/decision_log.md`
- Director participation summary based on Director files
- current build prompt reference

### Director Rooms

Show actual Director files from `directors/`.

Each Director view should show:

- name
- emoji if present
- department
- voice
- what they notice
- what annoys them
- preferred contributions
- authorship principle

### ARES Armory

Show actual protocol files from `ares/`.

At minimum, render:

- REPO
- Kanban
- Memory

### Artifact Vault

Show actual project artifacts from:

- `docs/`
- `directors/`
- `ares/`
- `prompts/`
- `diagrams/`

Each artifact card should show:

- title
- path
- category
- short excerpt
- type

### Memory Loom

Show actual memory files from `docs/meta/`.

At minimum, include:

- development doctrines
- decision log
- estimate calibration log
- prompt log
- artifact index
- session summaries

## Visual Direction

Follow `docs/03_ui_design_bible.md`.

The interface should feel like:

- Iron Man command console
- tactical RPG party interface
- dark Neovim cockpit
- Obsidian-style knowledge vault
- executive war room
- futuristic research lab

Use:

- dark foundation
- layered panels
- subtle luminous accents
- readable hierarchy
- command-console feel
- room-based navigation
- distinct Director presence
- protocol cards
- artifact cards
- memory cards

## Component Suggestions

Use product-world component names such as:

- CommandBridge
- CouncilChamber
- DirectorRooms
- AresArmory
- ArtifactVault
- MemoryLoom
- DirectorCard
- ProtocolCard
- ArtifactCard
- MemoryCard
- StatusRail
- CommandInput
- RoomShell
- NavigationRail

## Acceptance Criteria

The task is complete when:

1. The app runs locally.
2. The user can navigate between the six primary screens.
3. The Command Bridge establishes the product's visual direction.
4. Director Rooms render actual files from `directors/`.
5. ARES Armory renders actual files from `ares/`.
6. Artifact Vault surfaces actual project files.
7. Memory Loom surfaces actual files from `docs/meta/`.
8. The UI does not look like a generic SaaS dashboard.
9. The implementation uses restrained dependencies.
10. The README includes setup and run instructions.
11. The implementation explains how real repo content is loaded.

## Final Response

After implementation, summarize:

- files created
- files changed
- how to run the app
- how real repository content is loaded
- major design decisions
- dependencies added, if any
- limitations
- recommended next task
