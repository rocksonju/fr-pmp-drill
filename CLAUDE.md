# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Static single-page PMP exam study tool. No build system, no framework, no package manager. The entire app lives in one file: `index.html` (vanilla JS + CSS + HTML). Content is `.md` files served via HTTP fetch.

## Local Development

Must serve via HTTP — `fetch()` fails on `file://`:

```bash
# Python (any directory with index.html)
python -m http.server 8000

# Or use VS Code Live Server extension
```

Open `http://localhost:8000`. No build step. Edit `index.html` directly and refresh.

## Deployment

Push to GitHub → Cloudflare Pages auto-deploys to `pmp-drill.rabbyz.com`. See `future_plan.md` for full setup steps.

```bash
git add .
git commit -m "description"
git push  # triggers Cloudflare Pages redeploy (~20s)
```

## Architecture: index.html

All logic is in `index.html`. Key sections in order:

**`MANIFEST` object** — source of truth for which files appear in the sidebar. Two keys: `eco` (ECO Topic Drilling, 35 files) and `pg` (Process Group Drilling, 49 files). Adding a new MD file requires: (1) place the file in the correct folder, (2) add the filename string to the correct array in `MANIFEST`.

**Sidebar rendering** — `renderSidebar()` calls three builders: `buildSegECO()`, `buildSegPG()`, `buildSegUC()`. Each returns an HTML string. The entire sidebar is rebuilt on state changes (segment open/close, active item change). Sub-segment toggling skips full re-render and uses direct DOM manipulation for performance.

**Event delegation** — single click listener on `#sidebar-scroll` handles all sidebar interactions via `data-*` attributes (`data-toggle-seg`, `data-toggle-ss`, `data-key`, `data-uc`, `data-del-uc`). No inline onclick handlers anywhere in sidebar HTML.

**Content flow** — `fetchAndRender(path, key, displayName)` → `fetch(encodeURI(path))` → `applyContent(markdown, displayName, downloadName)` → `marked.parse()` → renders into `#doc-content`.

**User Choice (UC)** — uploads stored in `localStorage` key `pmp_uc_v2` as JSON array of `{id, displayName, downloadName, content, uploadedAt}`. Export: JSZip bundles all items as `.md` files into a `.zip`. Import: JSZip reads `.zip`, calls `ingestUC()` for each `.md` inside.

**Font size** — CSS `zoom` property on `#doc-content` (not `font-size`) because content uses `rem` units throughout. Index 0–7 into `FONT_SIZES = [75, 85, 95, 100, 110, 120, 130, 145]`, persisted in `localStorage` key `pmp_fontsize`.

**Exports** — DOCX via `html-docx-js` + `FileSaver.js`; PDF via `window.print()` with print-specific CSS.

## CDN Dependencies (no npm)

| Library | Version | Purpose |
|---|---|---|
| `marked` | 9 | Markdown → HTML |
| `FileSaver.js` | 2.0.5 | Blob download |
| `html-docx-js` | 0.3.1 | DOCX export |
| `JSZip` | 3.10.1 | UC backup ZIP |

## File Naming Conventions

**ECO Topic Drilling files:**
```
{Domain}_{NN}_{Title_With_Underscores}.md
# Domain: People | Process | BusinessEnvironment
# Example: People_01_Manage_Conflict.md
```

**Process Group Drilling files:**
```
{X.Y} {ProcessGroupName}_{Process Name}.md
# Example: 2.4 Planning_Define Scope.md
# Example: 4.1 Monitoring and Controlling_Monitor and Control Project Work.md
```

Display names are derived by `ecoName()` and `pgName()` helpers — no separate display name stored.

## Adding New Content Files

1. Generate MD content using the `/pmp_drill` Claude Code skill or `_PROMPT_TEMPLATE.md` (paste into any LLM).
2. Place file in `ECO Topic Drilling/` or `Process Group Drilling/` with correct naming pattern.
3. Add filename to the appropriate array in `MANIFEST` inside `index.html`.
4. `git push` → auto-deploys.

## Key State Variables

```javascript
activeKey      // string: "eco|People|filename.md" | "pg|Initiating|filename.md" | "uc|{id}"
_md            // current rendered markdown text (for export)
_displayName   // shown in topbar and used as export title
ucItems[]      // User Choice items array (mirrors localStorage)
segOpen{}      // {eco, pg, uc} — segment collapse state
subsegOpen{}   // keyed by subseg ID — sub-segment collapse state
```

## Content Reference

- `49_Process_Groupwise.md` — canonical list of all 49 PMBOK processes with numbering
- `_PROMPT_TEMPLATE.md` — LLM prompt template for generating new topic master briefs
- `future_plan.md` — planned features (deployment steps, user registration)
