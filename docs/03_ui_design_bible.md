# Project Overseer UI Design Bible

## Design Mandate

Project Overseer must look and feel like a futuristic command workstation.

The interface should be beautiful, tactical, readable, and strange enough to feel original.

The design goal is not decoration.

The design goal is command presence.

The user should feel like they are stepping into a private strategic operations chamber where ideas become artifacts.

## Core Aesthetic Formula

Project Overseer should blend:

- Iron Man command console
- tactical RPG party interface
- dark Neovim cockpit
- Obsidian-style knowledge vault
- executive war room
- high-end developer tool
- holographic research lab

The result should feel advanced, sharp, and intentional.

## Visual Keywords

Use these words as design anchors:

- command
- chamber
- tactical
- luminous
- precise
- layered
- glasslike
- modular
- cinematic
- intelligent
- executive
- alive
- mythic-tech
- restrained futurism

## Interface Metaphor

The product is organized as rooms.

Each room is a functional chamber in the command institution.

Primary rooms:

- Command Bridge
- Council Chamber
- Director Rooms
- ARES Armory
- Artifact Vault
- Memory Loom

Navigation should feel like moving through a strategic facility, not clicking through generic tabs.

## Layout Principles

Use layered panels.

Use strong hierarchy.

Use dark space generously.

Use luminous accents sparingly.

Prefer structured density over empty SaaS whitespace.

Each screen should have:

- clear room title
- operational status rail
- primary working area
- secondary context panel
- command or action strip
- artifact or memory references where relevant

The interface should support complexity without feeling chaotic.

## Command Bridge Layout

The Command Bridge is the home screen.

Suggested regions:

1. Top status rail
   - active mode
   - current mission
   - system status
   - current time or session marker

2. Left navigation rail
   - Command Bridge
   - Council Chamber
   - Directors
   - ARES Armory
   - Artifact Vault
   - Memory Loom

3. Central mission panel
   - current project
   - active directive
   - next recommended action

4. Director grid
   - Athena
   - Bolt
   - Iris
   - Darwin
   - Echo
   - Ace

5. Right context stack
   - recent artifacts
   - recent decisions
   - open questions

6. Bottom command strip
   - text input or command prompt
   - mode indicator
   - quick command suggestions

## Director Room Layout

Each Director Room should feel distinct but structurally consistent.

Suggested regions:

- Director identity header
- department and role
- voice profile
- current focus
- preferred tools
- recent artifacts
- recent notes
- report/action buttons

Director cards should feel like command profiles for powerful specialists.

## ARES Armory Layout

ARES Armory should look like a tool wall, protocol library, and operations rack.

It should show tools as protocol cards.

Each protocol card may include:

- tool name
- icon or emoji
- purpose
- usual Director
- output types
- example command or workflow
- current status

ARES should visually feel like an armory: organized, powerful, available, but not alive as a person.

## Artifact Vault Layout

Artifact Vault should feel like a high-end knowledge archive.

Artifacts should appear as durable objects, not random files.

Each artifact card may show:

- title
- type
- author or source area
- project
- last updated
- status
- preview
- linked decisions

## Memory Loom Layout

Memory Loom should feel like continuity made visible.

It should show:

- decisions
- session summaries
- open questions
- estimate calibration
- project timeline
- recurring doctrines
- unresolved threads

Memory should feel structured and searchable, not like chat history.

## Color Direction

Use a dark foundation.

Suggested palette direction:

- near-black backgrounds
- deep blue-black panels
- steel gray borders
- cyan or electric blue accents
- amber/gold highlights for command focus
- soft green for success/status
- red/orange for warnings
- muted violet only if used sparingly for memory or mystery

Avoid loud rainbow neon.

Avoid generic purple gradient SaaS styling.

## Typography Direction

Use clean technical typography.

Suggested approach:

- strong sans-serif for interface labels
- mono font for command strips, logs, code, and system markers
- larger cinematic headings for room names
- readability over style

## Motion Direction

Motion should feel deliberate.

Use motion for:

- room transitions
- panel activation
- command execution feedback
- status changes
- artifact creation moments

Motion should imply systems coming online.

## Component Language

Useful components:

- CommandPanel
- StatusRail
- DirectorCard
- RoomShell
- ArtifactCard
- MemoryThread
- ProtocolCard
- CommandInput
- SignalBadge
- MissionPanel
- ContextStack
- HoloDivider

Component names should reflect the product world.

## Personality in UI

The Directors should not be visually identical.

Each Director can have subtle differences:

- Athena: strategic, sharp, composed, command-gold or bronze accents.
- Bolt: engineering, kinetic, electric, blue-white or steel accents.
- Iris: aesthetic, luminous, elegant, magenta/cyan/pearl accents used carefully.
- Darwin: research, analytical, green/teal or cold white accents.
- Echo: communication, warm, violet/rose/soft gold accents.
- Ace: finance, confident, green/gold/black accents.

Keep differences subtle enough to preserve a unified product.

## Success Criteria

A first-time viewer should understand:

- this is a command workstation
- there are specialized Directors
- artifacts matter
- tools/protocols exist
- memory persists
- the user is in control
- the system is futuristic without being ridiculous

The interface should make the user want to command it.

## Sprint 2 Token Expansion

The first concrete token draft lives in `docs/10_design_tokens.md`.

Sprint 2 should refine the interface from a working shell into a recognizable Project Overseer identity by applying these rules:

- use `void`, `obsidian`, and `iron` as the command foundation rather than default black/gray surfaces
- reserve `signal` cyan for linked canon, active navigation, and system state
- reserve `command` amber for mission focus, executive emphasis, and current directives
- use `archive` violet only for Memory Loom and continuity surfaces
- give Director cards distinct accent pairs without turning the interface into rainbow neon
- keep room shells cinematic, layered, and operational
- preserve source paths and real file references as part of the visual language

The interface should not hide its repository-backed nature. Paths, artifacts, protocols, and memory records are part of the command workstation aesthetic.
