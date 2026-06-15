# Project Overseer Code Audit v0

## Purpose

This audit reviews the current Sprint 1–3 web shell implementation for security, memory management, design patterns, and UI/UX risks.

The audit is intentionally early. The app is still a local-first frontend shell and dependency installation is blocked in the current container, so this review is based on source inspection rather than a running browser session.

## Scope Reviewed

- `apps/web/src/App.tsx`
- `apps/web/src/components/Cards.tsx`
- `apps/web/src/components/Shell.tsx`
- `apps/web/src/content/canon.ts`
- `apps/web/src/styles/index.css`
- `apps/web/tailwind.config.ts`
- project documentation and Memory Bank files

## Security Audit

### Current Strengths

- The app does not use `dangerouslySetInnerHTML`.
- User-provided artifact requests render as React text nodes, so React escapes them by default.
- Generated artifact requests are trimmed and capped at 500 characters before storage.
- Generated artifacts are local-only and stored in browser `localStorage`; no network transmission is implemented.
- The content registry imports fixed repository files at build time rather than accepting arbitrary file paths from users.

### Current Risks

- `localStorage` is not a secure storage layer. It is acceptable for local prototype artifacts but not for sensitive data.
- Browser storage quota errors can occur; persistence is best-effort.
- Generated artifact markdown is currently displayed as text, not parsed. If markdown rendering is added later, sanitization must be mandatory.
- Future connector integrations will need approval gates, audit logs, and clear data-boundary rules.

### Recommendations

1. Keep generated artifact previews text-only until a sanitizer-backed markdown renderer is selected.
2. Add an explicit “local-only prototype” label near generated artifacts.
3. Add user-controlled delete/export before artifact persistence grows.
4. Treat connector execution as a separate security milestone with permission prompts and logging.

## Memory Management Audit

### Current Strengths

- Generated artifacts are capped to 20 records in state and in `localStorage`.
- Artifact requests are capped to 500 characters.
- Persistence writes are guarded with `try/catch` so storage failures do not break the session.
- The app uses simple state and memoized static group lists; no timers, subscriptions, or unmanaged event listeners are present.

### Current Risks

- Generated artifact bodies can grow if future versions add richer content.
- `localStorage` serialization happens whenever generated artifacts change.
- Static raw imports increase bundle size as more canon files are added.

### Recommendations

1. Add per-artifact body limits before allowing freeform pasted artifacts.
2. Add delete/clear controls for generated artifacts.
3. Move from raw imports to file-backed API or manifest scanning when canon size becomes too large.
4. Keep generated artifacts separate from immutable canon records in state.

## Design Pattern Audit

### Current Strengths

- The content registry centralizes real repository content loading.
- Director, protocol, artifact, memory, and generated artifact concepts remain distinct.
- ARES remains a protocol support layer, not an artifact author.
- UI components use product-world names such as `RoomShell`, `NavigationRail`, `DirectorCard`, `ProtocolCard`, and `ArtifactCard`.
- Sprint 3 keeps artifact generation local and simple before introducing file-backed persistence.

### Current Risks

- `App.tsx` is growing and now owns multiple room components plus artifact loop state.
- Generated artifact display logic appears in both Artifact Vault and Memory Loom.
- The content registry uses simple markdown parsing that may become brittle as documents evolve.

### Recommendations

1. Split room components into `src/rooms/` before Sprint 4.
2. Move generated artifact types and persistence helpers into `src/content/generatedArtifacts.ts`.
3. Add a small parser test suite once dependency installation works.
4. Keep generated artifact records separate from canon records to avoid confusing real repo artifacts with local prototype artifacts.

## UI/UX Audit

### Current Strengths

- The app uses room-based navigation rather than generic tabs.
- Command Bridge emphasizes mission, Directors, memory, experience doctrine, and tokens.
- Director Rooms preserve source paths and profile details from real Director files.
- ARES Armory explicitly states tool-use levels and Director authorship boundaries.
- Artifact Vault now distinguishes generated local artifacts from canon artifacts.
- Memory Loom records generated artifact actions as continuity events.

### Current Risks

- Without a running screenshot, layout density and responsive behavior are not visually verified.
- The artifact creation form lives in Council Chamber; future testing may show it belongs in Command Bridge or a dedicated artifact composer.
- Generated artifact output is a deterministic template, not yet Director-authored AI output.

### Recommendations

1. Run the app and take screenshots once dependency installation is available.
2. Inspect mobile/tablet layouts manually.
3. Add a dedicated “Artifact Forge” or composer panel if Sprint 3 grows.
4. Add copy/export affordances for generated artifacts.
5. Add clearer empty states for Artifact Vault and Memory Loom when no local artifacts exist.

## Audit Conclusion

The current implementation is acceptable for an early local-first prototype. The largest near-term risks are not security-critical yet; they are structural growth in `App.tsx`, unverified visual behavior due the blocked dev server, and future sanitization requirements if markdown rendering or connectors are introduced.
