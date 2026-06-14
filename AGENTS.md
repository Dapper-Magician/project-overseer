# AGENTS.md

# Project Overseer Agent Instructions

## Read First

This repository defines Project Overseer, a futuristic multi-agent command workstation for turning President Horne's ideas into durable artifacts, systems, documents, prototypes, and ventures.

Before implementation work, read the closest relevant docs for the task.

For product identity, read:

- `docs/00_manifesto.md`
- `docs/01_product_vision.md`

For interface and styling, read:

- `docs/03_ui_design_bible.md`

For architecture, read:

- `docs/02_architecture_overview.md`

For Director behavior, read:

- `docs/05_director_model.md`
- the relevant file in `directors/`

For ARES behavior, read:

- `docs/04_ares_protocol.md`
- the relevant file in `ares/`

For roadmap and task boundaries, read:

- `docs/07_implementation_roadmap.md`
- the active prompt in `prompts/`

## Product North Star

Project Overseer should feel like a strategic command institution, not a generic AI dashboard.

The user experience should center on:

- Command Bridge
- Council Chamber
- Director Rooms
- ARES Armory
- Artifact Vault
- Memory Loom

The interface should feel tactical, futuristic, elegant, readable, and alive with distinct specialist Directors.

## Real Content First Doctrine

Build from real project files.

Use repository canon as the source of truth for visible content.

If the interface needs Director information, use the real files in `directors/`.

If the interface needs ARES tool information, use the real files in `ares/`.

If the interface needs artifacts, use real files in `docs/`, `directors/`, `ares/`, `prompts/`, and `diagrams/`.

If a required content file does not exist, create the real file as part of the task and explain why it is needed.

Do not use planned placeholder content as a development strategy.

## Core Product Loop

Support this loop:

1. President Horne gives a mission, directive, or request.
2. Project Overseer coordinates the work.
3. A relevant Director contributes distinct expertise.
4. The Director creates or improves an artifact.
5. ARES provides tool protocol support when useful.
6. The artifact is stored in the Artifact Vault.
7. Important decisions or summaries are stored in Memory Loom.

## Director Identity

Preserve Director distinction.

The Directors are:

- Athena: strategy, planning, roadmaps, risk, operations.
- Bolt: engineering, code, systems, repositories, tools.
- Iris: design, UX, visual language, aesthetic systems.
- Darwin: research, evidence, skepticism, evaluation.
- Echo: communication, documentation, narrative, clarity.
- Ace: finance, cost, monetization, venture strategy.

When implementing Director views, use the actual Director files in `directors/` as the source material.

## ARES

ARES is the armory/protocol layer.

ARES provides tool context, tool conventions, toolchains, and usage patterns.

ARES is not the author of Director artifacts. Directors create content; ARES supports how tools are used.

Treat ARES visually and structurally as an organized armory of protocols and tools.

## Implementation Preferences

Build clear, inspectable, maintainable code.

Prefer:

- TypeScript for frontend code
- small readable components
- centralized content loading
- markdown-first documentation
- simple local structures before complex services
- minimal dependencies
- strong visual hierarchy
- reusable layout components

Use product-world component names where appropriate, such as:

- CommandBridge
- CouncilChamber
- DirectorRoom
- AresArmory
- ArtifactVault
- MemoryLoom
- DirectorCard
- ProtocolCard
- ArtifactCard
- StatusRail
- CommandInput

## Styling Guidance

Follow `docs/03_ui_design_bible.md`.

The visual direction is:

- dark foundation
- layered panels
- command-console feel
- subtle luminous accents
- tactical readability
- restrained futurism
- room-based navigation

Prefer interfaces that feel like a command workstation, executive war room, and high-end developer console.

## Documentation Practice

When creating or changing major structure, update relevant docs.

Document:

- important architecture choices
- new folders or files
- major UI decisions
- setup commands
- implementation assumptions

Keep documentation useful and direct.

## Task Behavior

For each task:

1. Identify the relevant docs.
2. Briefly state the implementation plan.
3. Make the smallest coherent change that satisfies the task.
4. Keep dependencies restrained.
5. Summarize files changed.
6. Explain how to run or inspect the result.

## Context Discipline

Use the most relevant document for the task rather than reading every file.

For visual work, prioritize the UI Design Bible.

For product behavior, prioritize Product Vision.

For foundational intent, prioritize the Manifesto.

For task-specific work, prioritize the prompt or issue description.

For content shown in the UI, prioritize real project files.
