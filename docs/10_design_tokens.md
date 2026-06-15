# Project Overseer Design Tokens v0

## Purpose

This file defines the first concrete visual token draft for Project Overseer.

The goal is not to make a generic dark SaaS theme. The goal is to encode the feeling of a private strategic command institution: tactical, luminous, layered, precise, alive, and restrained.

## Color Tokens

| Token | Hex | Role |
| --- | --- | --- |
| `void` | `#05070b` | Deep command background and app foundation. |
| `obsidian` | `#08111c` | Primary room panels and dark operational surfaces. |
| `iron` | `#101b28` | Secondary panels, elevated cards, and hover surfaces. |
| `steel` | `#263746` | Borders, inactive rails, low-emphasis structure. |
| `signal` | `#5be7ff` | Cyan system signal, active navigation, linked canon. |
| `command` | `#f7c873` | Amber command focus, active mission, executive emphasis. |
| `ember` | `#ff7a45` | Warning, friction, annoyance, risk heat. |
| `mint` | `#87f7c5` | Operational health, successful state, verified canon. |
| `archive` | `#b5a7ff` | Memory, continuity, mysterious archive accent. |

## Gradient Language

Use gradients as spatial lighting, not decoration.

- Command Bridge: amber mission glow over obsidian panels.
- Council Chamber: cyan/amber balance to imply discussion and decision pressure.
- Director Rooms: Director-specific accent pairs that feel like command profiles.
- ARES Armory: amber technical rack lighting, with cyan protocol edges.
- Artifact Vault: dark archive surfaces with restrained cyan path signals.
- Memory Loom: muted archive violet with thread-like continuity lines.

## Typography Tokens

- Interface labels: strong sans-serif, uppercase, wide letter spacing.
- System markers and paths: monospace, compact, high tracking.
- Room titles: large cinematic sans-serif, direct and declarative.
- Body text: readable sans-serif with generous leading.

## Spatial Rules

- Prefer large rounded chamber shells over small SaaS cards.
- Use asymmetric grids where the main mission or active profile should dominate.
- Use dense but readable panels; Project Overseer should feel operational, not empty.
- Every room needs a status/context signal and at least one visible link back to real canon.

## Component Rules

### SignalBadge

Use for status, category, protocol, and room state. It should feel like a small instrument label.

### RoomShell

Use for each primary chamber. Room shells should include a room eyebrow, cinematic title, concise brief, and layered grid field.

### DirectorCard

Use Director-specific accent gradients and preserve source paths. Director cards should feel like specialist command profiles.

### ProtocolCard

Use amber rack lighting and visible output tags. ARES should look equipped, not alive.

### ArtifactCard

Use archive-card density: title, type, excerpt, category, path. Artifacts should feel durable.

### MemoryThread

Use for continuity surfaces: decisions, sessions, open questions, estimates, doctrines, and unresolved threads.

## Anti-Generic Rules

Avoid:

- centered gradient hero sections with generic CTAs
- purple-blue SaaS gradients
- anonymous “AI assistant” cards
- empty dashboard whitespace
- placeholder data
- stock icon grids without product meaning

Prefer:

- command-console framing
- room-based navigation
- artifact density
- source paths
- Director identity
- restrained luminous accents
- tactical labels
- visible continuity threads
