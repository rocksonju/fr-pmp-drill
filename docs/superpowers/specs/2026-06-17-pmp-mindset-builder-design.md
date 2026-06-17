# PMP Mindset Builder — Design

**Date:** 2026-06-17
**Status:** Approved (design phase)
**Target:** `index.html` (single-file vanilla JS/CSS/HTML study tool) + new `mindset_scenarios.md`

## Purpose

Help PMP students pass the exam by training the *PMI mindset* — the reflexive
"what do you do FIRST?" decision pattern PMI rewards (talk first, escalate last,
be proactive, act as servant leader, follow the process, integrate, stay
value-driven). Distinct from the existing topic Quiz Mode: this is a focused,
crisp reflex drill, not a full topic question bank.

## Core Decisions (locked during brainstorming)

| Decision | Choice |
|---|---|
| Core interaction | Scenario drill |
| Content source | Curated mindset set (new MD file authored for this feature) |
| Entry point | Sidebar header button (interactive takeover view, like Quiz Mode) |
| Per-scenario format | Multiple choice "what FIRST?" — distractors are common WRONG reflexes |
| Storage format | Curated MD + lightweight custom parser (Approach A) |
| Extras included | Theme filter, Progress + score, Mindset principle intro card |
| Extras excluded (YAGNI) | Shuffle / retry-missed |

## 1. Content File & Format

New file at repo root: `mindset_scenarios.md`. Block format, `---` separated.

```
## THEME: Escalation

### S1
You're a new PM. A team member misses a deadline that threatens a milestone.
What do you do FIRST?
- Escalate to the sponsor immediately
- *Talk to the team member to understand the cause
- Reassign the task to someone faster
- Note it in the issue log and move on
> Talk first. PMI = address at lowest level before escalating. Escalation is a last resort, not a first reflex.
```

**Parsing rules:**
- `## THEME: <name>` — opens a theme; applies to all following scenarios until the next `## THEME:`.
- `### S<n>` — scenario id (unique across file).
- Lines after the `### S<n>` header, before the first `- ` option, joined = scenario text.
- `- ` lines = options. A leading `*` (after the dash) marks the correct option.
- `> ` line = the mindset reasoning shown after answering.
- Exactly one correct option per scenario. Scenarios missing options, a correct
  marker, or reasoning are skipped (logged to console).

**Themes (v1 starter set):** Escalation, Conflict, Change Control, Stakeholder
Engagement, Agile vs Predictive, Servant Leadership, Risk/Proactivity. ~6–8
scenarios per theme to start (~40–50 total), expandable by editing the MD.

## 2. Data Model & Parser

`parseMindset(mdText)` → array of:

```js
{
  id: 'S1',
  theme: 'Escalation',
  scenario: 'You're a new PM...\nWhat do you do FIRST?',
  options: ['Escalate to the sponsor immediately', 'Talk to the team member...', ...],
  correctIdx: 1,
  reasoning: 'Talk first. PMI = address at lowest level...'
}
```

- Standalone parser (~30 lines). No coupling to the quiz section-9/10 engine.
- Strips the `*` correct marker from the stored option text; records its index in
  `correctIdx`.
- Returns a flat array; theme filtering happens at drill-setup time.

## 3. UI Flow (takeover view, mirrors Quiz Mode)

New `<div id="mindset-container">` sibling of `#quiz-container`.
`startMindsetMode()` hides `empty-state`, `doc-wrapper`, `section-nav`, and
`quiz-container`; shows `mindset-container`. (Quiz Mode reciprocally hides
`mindset-container`.)

1. **Intro card** — "PMI Mindset in 7 Rules" primer (escalate last, talk first,
   proactive, servant leader, follow process, integrate, value-driven). Shows
   lifetime stats if present ("Answered 40 · 82% correct"). Buttons: **Start
   Drill** / **Skip primer** (both proceed to theme select; primer is reference only).
2. **Theme select** — dropdown: `All themes (N)` + one entry per theme with
   counts. **Start** button.
3. **Drill** — one scenario per card: scenario text + one button per option
   ("what FIRST?"). On click: selected option turns green (correct) or red
   (wrong) and the correct one is highlighted; the reasoning block renders below
   (reuse quiz explanation styling, 🧠 header). **Next** advances. Header shows
   `X / N` progress and running score.
4. **Score review** — final card: score % + count; list of missed scenarios with
   their correct answer and reasoning for review. **Restart** (same theme) /
   **Back to themes** buttons.

## 4. State & Persistence

Session state object:

```js
mindsetState = {
  all: [],            // parsed scenarios
  pool: [],           // filtered by selected theme, in play order
  idx: 0,             // current scenario index
  answers: [],        // { id, chosenIdx, correct }
  theme: 'ALL'
}
```

Lifetime persistence — `localStorage` key `pmp_mindset_v1`:

```js
{ "S1": { seen: 3, correct: 2 }, "S2": { seen: 1, correct: 1 }, ... }
```

Updated on each answer. Drives the intro-card lifetime stats. Mirrors existing
`pmp_fontsize` / `pmp_uc_v2` persistence conventions. No server, no sync.

## 5. Integration Points in `index.html`

- **Sidebar button:** add `buildMindsetHeader()` (parallel to `buildQuizHeader()`
  at line ~1666); prepend its output in `renderSidebar()` next to the quiz button
  (line ~1104). Active-state styling matches the quiz button.
- **Container:** add `<div id="mindset-container" style="display:none;">` next to
  `#quiz-container` (line ~937).
- **Entry function:** `startMindsetMode()` parallels `startQuizMode()` (line
  ~1808) — same show/hide choreography; loads `mindset_scenarios.md` via the
  existing `fetch(encodeURI(path))`, parses, renders intro.
- **Mutual exclusion:** `startQuizMode()` also hides `mindset-container`;
  `startMindsetMode()` hides `quiz-container`. Any sidebar topic click (existing
  `fetchAndRender`) hides both takeover containers.
- **CSS:** reuse `.quiz-card`, `.quiz-title`, `.quiz-desc`, `.quiz-select`, and
  the explanation block classes; add a small set of `.mindset-*` rules for option
  buttons and correct/wrong states.

## Out of Scope (v1)

- Shuffle / randomized order and retry-only-missed mode.
- Editing scenarios from inside the app (edit the MD file directly).
- Cross-device sync (consistent with the rest of the app — localStorage only).

## Risks / Notes

- **Parser fragility:** mitigated by a strict, minimal format and skip-with-console-warn
  on malformed blocks. The starter MD is authored to the format so v1 is clean.
- **Deployment:** new MD file must be committed so Cloudflare Pages serves it;
  no `MANIFEST` entry needed (loaded directly by `startMindsetMode()`, not the
  sidebar file list).
