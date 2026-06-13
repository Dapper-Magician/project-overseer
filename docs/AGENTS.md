# AGENTS.md

# Project Overseer Agent Instructions

## Read First

This repository defines Project Overseer, a futuristic multi-agent command workstation for turning President Horne’s ideas into durable artifacts, systems, documents, prototypes, and ventures.

Before implementation work, read the closest relevant docs for the task.

For product identity, read:

* `docs/00_manifesto.md`
* `docs/01_product_vision.md`

For interface and styling, read:

* `docs/03_ui_design_bible.md`

For architecture, Directors, ARES, memory, and roadmap work, read the corresponding docs once they exist.

## Product North Star

Project Overseer should feel like a strategic command institution, not a generic AI dashboard.

The user experience should center on:

* Command Bridge
* Council Chamber
* Director Rooms
* ARES Armory
* Artifact Vault
* Memory Loom

The interface should feel tactical, futuristic, elegant, readable, and alive with distinct specialist Directors.

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

* Athena: strategy, planning, roadmaps, risk, operations.
* Bolt: engineering, code, systems, repositories, tools.
* Iris: design, UX, visual language, aesthetic systems.
* Darwin: research, evidence, skepticism, evaluation.
* Echo: communication, documentation, narrative, clarity.
* Ace: finance, cost, monetization, venture strategy.

When implementing mock data or UI labels, make each Director feel distinct in role, voice, and presentation.

## ARES

ARES is the armory/protocol layer.

ARES provides tool context, tool conventions, toolchains, and usage patterns.

ARES is not the author of Director artifacts. Directors create content; ARES supports how tools are used.

Treat ARES visually and structurally as an organized armory of protocols and tools.

## Implementation Preferences

Build clear, inspectable, maintainable code.

Prefer:

* TypeScript for frontend code.
* small readable components.
* centralized mock data.
* markdown-first documentation.
* simple local structures before complex services.
* minimal dependencies.
* strong visual hierarchy.
* reusable layout components.

Use product-world component names where appropriate, such as:

* CommandBridge
* CouncilChamber
* DirectorRoom
* AresArmory
* ArtifactVault
* MemoryLoom
* DirectorCard
* ProtocolCard
* ArtifactCard
* StatusRail
* CommandInput

## Styling Guidance

Follow `docs/03_ui_design_bible.md`.

The visual direction is:

* dark foundation
* layered panels
* command-console feel
* subtle luminous accents
* tactical readability
* restrained futurism
* room-based navigation

Prefer interfaces that feel like a command workstation, executive war room, and high-end developer console.

## Documentation Practice

When creating or changing major structure, update relevant docs.

Document:

* important architecture choices
* new folders or files
* major UI decisions
* setup commands
* implementation assumptions

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
