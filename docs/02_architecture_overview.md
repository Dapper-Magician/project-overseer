# Project Overseer Architecture Overview

## Purpose

This document defines the first practical architecture for Project Overseer.

Project Overseer is a multi-agent command workstation where President Horne works with a specialized THINKTANK of Directors to produce durable artifacts, plans, documents, prototypes, systems, and ventures.

The architecture must support:

- rich Director personalities
- command-centered interaction
- artifact creation and storage
- ARES tool protocols
- project memory
- markdown-first documentation
- future AI agent integration
- future local and cloud execution paths
- strong visual identity
- low dependency bloat
- disciplined context usage

The first version should be simple enough to build quickly while preserving the long-term platform vision.

## Architectural North Star

The first version should prove this core loop:

> President Horne gives direction.  
> Overseer coordinates.  
> A Director contributes expertise.  
> The Director creates an artifact.  
> ARES provides tool protocol support when useful.  
> The artifact is stored.  
> The system remembers what happened.

## System Layers

Project Overseer is organized into six primary layers.

1. Command Interface
2. Overseer Coordination Layer
3. Director Layer
4. ARES Protocol Layer
5. Artifact Layer
6. Memory Layer

### 1. Command Interface

The user-facing workstation.

Includes:

- Command Bridge
- Council Chamber
- Director Rooms
- ARES Armory
- Artifact Vault
- Memory Loom

The Command Interface should feel like a tactical AI command console.

### 2. Overseer Coordination Layer

Project Overseer coordinates work.

Responsibilities:

- interpret President Horne's intent
- select or address relevant Directors
- manage workflow modes
- track open directives
- synthesize outputs
- guide artifact creation
- decide when ARES protocols are useful
- maintain project continuity

Overseer is the command coordinator, not the sole author of all work.

### 3. Director Layer

Directors are the specialist members of the THINKTANK.

Directors include:

- Athena
- Bolt
- Iris
- Darwin
- Echo
- Ace

Each Director should have:

- distinct identity
- department
- voice
- expertise
- preferences
- reporting style
- preferred artifacts
- preferred ARES tools or protocols

Directors create content and artifacts.

### 4. ARES Protocol Layer

ARES is the armory and protocol layer.

ARES provides:

- tool descriptions
- tool usage rules
- toolchains
- process guidance
- syntax examples
- protocol cards
- future connector mappings

ARES supports Directors when they use structured tools.

### 5. Artifact Layer

Artifacts are durable outputs produced by the system.

Examples:

- markdown documents
- READMEs
- architecture notes
- diagrams
- prompt files
- decision logs
- roadmaps
- UI specs
- research briefs
- implementation plans
- generated code files

The Artifact Vault is the primary interface for inspecting these outputs.

### 6. Memory Layer

Memory preserves continuity.

Initial memory structures:

- decision log
- estimate calibration log
- prompt log
- artifact index
- session summaries
- open questions
- project state notes

Advanced memory systems such as vector databases or graph databases can be added when the simpler memory layer becomes insufficient.

## First Implementation Shape

The first implementation should be frontend-first and markdown-first.

Recommended initial stack:

- Vite
- React
- TypeScript
- Tailwind CSS

The frontend should render actual repository content.

Initial content sources:

- `docs/`
- `directors/`
- `ares/`
- `prompts/`
- `diagrams/`

A Vite app can import markdown content as raw text using `?raw` imports or an equivalent simple content-loading approach. The first implementation should keep content loading simple and inspectable.

## Initial Repository Structure

Recommended starter structure:

```text
project-overseer/
  AGENTS.md
  README.md

  docs/
    source/
    meta/
    00_manifesto.md
    01_product_vision.md
    02_architecture_overview.md
    03_ui_design_bible.md
    04_ares_protocol.md
    05_director_model.md
    06_memory_strategy.md
    07_implementation_roadmap.md
    08_inspirations.md
    09_open_questions.md

  directors/
    overseer.md
    athena.md
    bolt.md
    iris.md
    darwin.md
    echo.md
    ace.md

  ares/
    repo.md
    kanban.md
    memory.md

  diagrams/
    system_v0.mmd
    director_artifact_flow.mmd
    app_navigation_v0.mmd
    roadmap_v0.mmd

  prompts/
    01_build_from_canon.md

  apps/
    web/
```

## Correct ARES Relationship

ARES supports Directors. ARES does not author in their place.

```mermaid
sequenceDiagram
    participant User as President Horne
    participant Overseer as Project Overseer
    participant Director as Director
    participant ARES as ARES Protocol Layer
    participant Vault as Artifact Vault
    participant Memory as Memory Loom

    User->>Overseer: Gives mission or request
    Overseer->>Director: Delegates or routes task
    Director->>ARES: Optionally consults tool protocol
    ARES-->>Director: Provides conventions and workflow guidance
    Director->>Director: Creates artifact
    Director->>Vault: Stores artifact
    Director->>Memory: Logs decision or summary
    Overseer-->>User: Synthesizes result
```

## Canon-to-Interface Pipeline

The first shell should prove this pipeline:

```mermaid
flowchart TD
    Canon[Repository Canon Files] --> Loader[Simple Content Loader]
    Loader --> Bridge[Command Bridge]
    Loader --> Directors[Director Rooms]
    Loader --> Armory[ARES Armory]
    Loader --> Vault[Artifact Vault]
    Loader --> Loom[Memory Loom]
```

## Context Discipline

The system should avoid loading every file for every task.

Use relevant context only.

Examples:

- UI task: read Product Vision and UI Design Bible.
- Director behavior task: read Director Model and relevant Director file.
- ARES task: read ARES Protocol.
- Roadmap task: read Implementation Roadmap and Estimate Calibration Log.

The principle:

> Do not load the library. Load the page.

## Build Philosophy

Start with:

- real canon files
- real Director files
- real ARES protocol files
- real meta logs
- real prompt files
- navigable interface over those files

Then add:

- artifact creation
- artifact saving
- Director-authored outputs
- ARES-assisted outputs
- memory logging
- Codex-assisted implementation loop

Then consider:

- backend
- file persistence
- local agents
- MCP integrations
- GitHub connector
- Notion connector
- vector memory
- graph memory

## First Successful Demo

The first successful demo should show:

1. Command Bridge opens.
2. Director Rooms are navigable.
3. Director Rooms render actual Director files.
4. ARES Armory renders actual ARES protocol files.
5. Artifact Vault surfaces actual repository files.
6. Memory Loom surfaces actual meta files.
7. The interface feels visually distinct.
8. The product concept is immediately understandable.
