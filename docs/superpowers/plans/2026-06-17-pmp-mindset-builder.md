# PMP Mindset Builder + Visitor Counter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an interactive "PMP Mindset Builder" scenario-drill tool plus a global visitor counter to the static single-file study app.

**Architecture:** Both features live in `index.html` (vanilla JS/CSS/HTML, no build, no framework). The Mindset Builder is a takeover view that mirrors the existing Quiz Mode: a sidebar header button launches it, it hides the reader views and shows a dedicated `#mindset-container`. Scenarios come from a new curated `mindset_scenarios.md` parsed by a small standalone parser. Lifetime stats persist in `localStorage`. The visitor counter calls the no-signup Abacus hit API once per browser session and shows a badge in the sidebar footer.

**Tech Stack:** Vanilla JS, `fetch`, `localStorage`/`sessionStorage`, `marked` (already loaded). External: Abacus counter API (`abacus.jasoncameron.dev`). No test framework exists — verification is manual via a local HTTP server + browser, plus one in-console parser assertion.

**Testing note:** This repo has no automated test runner (static site). Each task's "verify" step is a concrete manual check: serve with `python -m http.server 8000`, open `http://localhost:8000`, and observe the stated result. The parser gets an explicit DevTools-console assertion.

---

## File Structure

- **Create:** `mindset_scenarios.md` — curated scenario content (root, served directly by fetch; NOT added to `MANIFEST`).
- **Create:** `docs/superpowers/plans/2026-06-17-pmp-mindset-builder.md` — this plan.
- **Modify:** `index.html` — all code (CSS block, body markup, JS module, integration edits).

All new JS is one contiguous `// ── PMP Mindset Builder ──` module + one `// ── Global Visitor Counter ──` block, so it stays focused and easy to locate.

---

## Task 1: Create the curated scenario content file

**Files:**
- Create: `mindset_scenarios.md`

- [ ] **Step 1: Create `mindset_scenarios.md` with the starter set**

Create the file with exactly this content (14 scenarios across 7 themes; format is the parser contract — `## THEME:`, `### S<n>`, `- ` options with `*` marking correct, `> ` reasoning). The file is expandable later by copying any block and following the same format.

```markdown
# PMP Mindset Scenarios

<!-- Format: "## THEME: <name>" opens a theme. "### S<n>" opens a scenario.
     Plain lines after the id = scenario text. "- " lines = options; prefix the
     correct option's text with "*". "> " line = the mindset reasoning.
     Exactly one correct option per scenario. -->

## THEME: Escalation

### S1
You are a newly assigned PM. A team member misses a deadline that threatens an upcoming milestone.
What do you do FIRST?
- Escalate the delay to the sponsor immediately
- *Talk to the team member to understand the root cause
- Reassign the task to a faster team member
- Log it in the issue log and move on
> Talk first. PMI expects you to address issues at the lowest level before escalating. Escalation is a last resort, not a first reflex.

### S2
A senior stakeholder bypasses you and hands a new requirement directly to a developer.
What do you do FIRST?
- Tell the developer to ignore the stakeholder
- Escalate the stakeholder's behavior to the sponsor
- *Meet the stakeholder to understand the need and reinforce the proper channel
- Add the requirement to the build to keep them happy
> Engage, don't escalate or block. Understand the underlying need and restore communication channels through the PM. Relationship and process first.

## THEME: Conflict

### S3
Two senior analysts clash over the data schema design and the team is stalled.
What do you do FIRST?
- Pick the more experienced analyst's design
- *Bring them together to collaborate on a solution that best meets project objectives
- Escalate to their functional manager
- Impose a compromise that merges both designs
> Collaborate / problem-solve is the preferred conflict mode. Resolve toward project objectives, not favoritism or a messy compromise.

### S4
A conflict between two team members is heating up and you do not yet know what caused it.
What do you do FIRST?
- Force a decision to end it quickly
- Smooth it over and tell them to get along
- *Gather information to understand the root cause of the conflict
- Avoid it and hope it resolves itself
> Understand before acting. You cannot resolve a conflict toward project value without first diagnosing its root cause.

## THEME: Change Control

### S5
The project plan is baselined and the client requests a "small" scope addition.
What do you do FIRST?
- Implement it immediately as good customer service
- Refuse — the baseline is locked
- *Submit a change request through integrated change control
- Add it quietly and adjust later
> Once baselined, any change to scope/schedule/cost goes through a formal change request and the CCB. Not implement-on-the-spot, not refuse.

### S6
The project management plan is NOT yet approved and you spot an improvement to the schedule approach.
What do you do FIRST?
- File a change request with the CCB
- Wait until the plan is approved, then change it
- *Adjust the plan directly — it is not baselined yet
- Escalate the idea to the sponsor
> Before baseline, you refine the plan directly. Change control applies only after formal approval. Don't manufacture bureaucracy that isn't required yet.

## THEME: Stakeholder Engagement

### S7
Midway through execution you discover a stakeholder who was never identified.
What do you do FIRST?
- Ignore them — it is too late to add stakeholders
- Escalate the oversight to the sponsor
- *Add them to the stakeholder register, analyze them, and plan engagement
- Immediately give them whatever they ask for
> Stakeholder identification is continuous. Register, analyze power/interest, then tailor engagement. Late discovery is still managed, not ignored.

### S8
A key stakeholder is detached and resistant during status reviews.
What do you do FIRST?
- Exclude them from future meetings
- Escalate their attitude to the sponsor
- *Tailor communication and increase engagement (e.g., face-to-face, interactive sessions)
- Proceed without their input
> Move stakeholders toward the desired engagement level with tailored, higher-touch communication. You engage resistance, you don't route around it.

## THEME: Agile vs Predictive

### S9
On an agile team, a stakeholder requests a requirement change in the middle of a sprint.
What do you do FIRST?
- Raise a formal change request
- Refuse — the sprint is locked
- *Add it to the product backlog for the Product Owner to prioritize
- Swap it into the current sprint immediately
> Agile absorbs change through the backlog and prioritization, not predictive change control. The current sprint stays protected; the PO decides ordering.

### S10
An agile project's sponsor asks for a traditional percent-complete status report.
What do you do FIRST?
- Build a detailed Gantt chart to satisfy them
- Refuse — agile doesn't do status
- *Show progress through working increments and information radiators (e.g., burndown, demo)
- Escalate the request as inappropriate
> Communicate progress with agile transparency tools — demos, burndown/burnup, task boards — rather than forcing predictive artifacts. Meet the need, stay agile.

## THEME: Servant Leadership

### S11
Your team is blocked by an external dependency and progress has stalled.
What do you do FIRST?
- Tell the team to figure it out themselves
- Escalate to the sponsor before anything else
- *Act to remove the impediment for the team
- Log it and wait for the dependency to clear
> A servant leader's core job is removing impediments so the team can deliver. Act on the blocker; escalate only if you genuinely cannot clear it yourself.

### S12
On a self-organizing team, a member asks you to assign out the day's tasks.
What do you do FIRST?
- Assign the tasks yourself to be efficient
- Escalate the team's confusion to the scrum master
- *Facilitate the team to self-organize and pull their own work
- Refuse to get involved at all
> Empower the team. Self-organizing teams pull work; the servant leader facilitates rather than commands. Empowerment is not abandonment.

## THEME: Risk and Proactivity

### S13
An unforeseen issue (no prior risk identified) suddenly disrupts production.
What do you do FIRST?
- Have developers change live settings immediately
- Ignore it until the next planning cycle
- *Rapidly assess the situation, then apply a workaround
- Escalate to the sponsor before doing anything
> A workaround is the response to an unidentified risk — but even a workaround follows a quick assess-then-act strategy. You never fire blindly from the hip.

### S14
You notice the same minor defect recurring across several deliverables.
What do you do FIRST?
- Keep fixing each defect as it appears
- Ignore them — they are minor
- *Analyze the root cause and take preventive action, updating the risk register
- Escalate the pattern to the sponsor
> Be proactive: prevention over cure. Recurring symptoms signal a systemic cause. Root-cause analysis plus preventive action beats endless reactive fixes.
```

- [ ] **Step 2: Verify the file serves**

Run: `python -m http.server 8000` in the project root, then in a browser open `http://localhost:8000/mindset_scenarios.md`
Expected: the raw markdown renders/downloads (HTTP 200), content matches what was written.

- [ ] **Step 3: Commit**

```bash
git add mindset_scenarios.md
git commit -m "feat: add curated PMP mindset scenario content"
```

---

## Task 2: Add Mindset Builder CSS

**Files:**
- Modify: `index.html` — insert before the closing `</style>` at line ~894 (immediately after the `.quiz-icon { font-size: 1.1rem; }` rule).

- [ ] **Step 1: Insert the CSS block**

Find this existing block (around line 891-894):

```css
.quiz-icon {
  font-size: 1.1rem;
}
</style>
```

Replace it with (adds the mindset styles before `</style>`):

```css
.quiz-icon {
  font-size: 1.1rem;
}

/* PMP Mindset Builder */
.mindset-sidebar-btn{background:linear-gradient(135deg,rgba(63,185,80,.12) 0%,rgba(63,185,80,.04) 100%);border-color:rgba(63,185,80,.28);color:var(--green,#3fb950)}
.mindset-sidebar-btn:hover{background:linear-gradient(135deg,rgba(63,185,80,.22) 0%,rgba(63,185,80,.08) 100%);border-color:var(--green,#3fb950);box-shadow:0 4px 12px rgba(63,185,80,.12)}
.mindset-sidebar-btn.active{background:rgba(63,185,80,.18);border-color:var(--green,#3fb950);color:var(--heading);box-shadow:0 0 0 2px rgba(63,185,80,.2)}
.mindset-btn{padding:.6rem 1.1rem;border-radius:8px;border:1px solid var(--border);background:var(--card,#161b22);color:var(--text,#c9d1d9);font-weight:700;font-size:.85rem;cursor:pointer;font-family:inherit;transition:all .15s ease}
.mindset-btn:hover{border-color:var(--accent,#388bfd);transform:translateY(-1px)}
.mindset-btn-primary{background:var(--green,#3fb950);border-color:var(--green,#3fb950);color:#0d1117}
.mindset-btn-primary:hover{filter:brightness(1.08)}
.mindset-opt{display:block;width:100%;text-align:left;padding:.85rem 1rem;margin:.5rem 0;background:var(--card,#161b22);border:1px solid var(--border);border-radius:8px;color:var(--text,#c9d1d9);cursor:pointer;font-size:.9rem;line-height:1.5;transition:all .15s ease;font-family:inherit}
.mindset-opt:hover:not(:disabled){border-color:var(--accent,#388bfd);transform:translateY(-1px)}
.mindset-opt:disabled{cursor:default}
.mindset-opt.correct{background:rgba(63,185,80,.15);border-color:var(--green,#3fb950);color:var(--heading)}
.mindset-opt.wrong{background:rgba(248,81,73,.15);border-color:var(--red,#f85149);color:var(--heading)}
.mindset-progress{font-size:.75rem;color:var(--text-muted);margin-bottom:.6rem}
.mindset-primer-list{margin:.4rem 0 1rem;padding-left:1.1rem;font-size:.85rem;line-height:1.6;color:var(--text,#c9d1d9)}
.visitor-badge{display:inline-flex;align-items:center;gap:.3rem;margin-bottom:.35rem;font-size:.62rem;color:var(--text-muted)}
</style>
```

- [ ] **Step 2: Verify no breakage**

Reload `http://localhost:8000`. Expected: page renders normally, no console CSS errors. (Visual mindset effects appear in later tasks.)

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add Mindset Builder styles"
```

---

## Task 3: Add the mindset container + visitor badge markup

**Files:**
- Modify: `index.html:937` (after `#quiz-container`) and `index.html:923` (sidebar footer).

- [ ] **Step 1: Add the mindset container**

Find (line ~936-937):

```html
    <div id="doc-wrapper"><button id="line-highlighter-btn" class="line-highlighter-btn" title="Highlight line">🖍️</button><div id="doc-content"></div></div>
    <div id="quiz-container" class="quiz-container" style="display:none;"></div>
```

Replace with:

```html
    <div id="doc-wrapper"><button id="line-highlighter-btn" class="line-highlighter-btn" title="Highlight line">🖍️</button><div id="doc-content"></div></div>
    <div id="quiz-container" class="quiz-container" style="display:none;"></div>
    <div id="mindset-container" class="quiz-container" style="display:none;"></div>
```

- [ ] **Step 2: Add the visitor badge to the sidebar footer**

Find (line ~923):

```html
    <div class="sidebar-footer">Files fetched on click · User Choice stored locally</div>
```

Replace with:

```html
    <div class="sidebar-footer">
      <span id="visitor-badge" class="visitor-badge" style="display:none;"></span>
      <span>Files fetched on click · User Choice stored locally</span>
    </div>
```

- [ ] **Step 3: Verify**

Reload. Expected: page renders; `document.getElementById('mindset-container')` and `document.getElementById('visitor-badge')` both return elements in DevTools console (badge hidden for now).

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add mindset container and visitor badge markup"
```

---

## Task 4: Add the sidebar button and wire it into the sidebar render

**Files:**
- Modify: `index.html:1672` (after `buildQuizHeader()`), `index.html:1104` (renderSidebar concatenation).

- [ ] **Step 1: Add `buildMindsetHeader()`**

Find the end of `buildQuizHeader()` (line ~1672):

```javascript
function buildQuizHeader() {
  const isQuizActive = document.getElementById('quiz-container') && document.getElementById('quiz-container').style.display === 'block';
  return `<div class="quiz-sidebar-btn ${isQuizActive ? 'active' : ''}" onclick="startQuizMode()">
    <span class="quiz-icon">🧠</span>
    <span class="quiz-label">Interactive Quiz Mode</span>
  </div>`;
}
```

Insert immediately after it:

```javascript
function buildMindsetHeader() {
  const mc = document.getElementById('mindset-container');
  const active = mc && mc.style.display === 'block';
  return `<div class="quiz-sidebar-btn mindset-sidebar-btn ${active ? 'active' : ''}" onclick="startMindsetMode()">
    <span class="quiz-icon">🎯</span>
    <span class="quiz-label">PMP Mindset Builder</span>
  </div>`;
}
```

- [ ] **Step 2: Wire it into `renderSidebar()`**

Find (line ~1104):

```javascript
    buildQuizHeader() + buildSegECO() + buildSegPG() + buildSegOT() + buildSegUC();
```

Replace with:

```javascript
    buildQuizHeader() + buildMindsetHeader() + buildSegECO() + buildSegPG() + buildSegOT() + buildSegUC();
```

- [ ] **Step 3: Verify**

Reload. Expected: a green-tinted "🎯 PMP Mindset Builder" button appears in the sidebar directly under the "🧠 Interactive Quiz Mode" button. Clicking it currently throws `startMindsetMode is not defined` in console — that's expected until Task 5.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add Mindset Builder sidebar button"
```

---

## Task 5: Add the Mindset Builder JS module (state, parser, all renderers)

**Files:**
- Modify: `index.html` — insert the whole module immediately after the `buildMindsetHeader()` function added in Task 4.

- [ ] **Step 1: Insert the module**

Immediately after the closing `}` of `buildMindsetHeader()`, insert:

```javascript

// ── PMP Mindset Builder ──
let mindsetState = { all: [], pool: [], idx: 0, answers: [], theme: 'ALL' };
let mindsetLoaded = false;

const MINDSET_PRIMER = [
  'Talk first — resolve at the lowest level before escalating.',
  'Escalate last — escalation is a tool, not a reflex.',
  'Be proactive — prevent problems instead of reacting to them.',
  'Servant leader — remove blockers and empower the team; don\'t command.',
  'Follow the process — after baseline, change goes through integrated change control.',
  'Integrate — scope, schedule, cost, and quality move together.',
  'Value-driven — if it doesn\'t serve project objectives, reject it.'
];

function parseMindset(md) {
  const scenarios = [];
  let theme = 'General', cur = null, mode = 'text';
  const flush = () => {
    if (cur && cur.options.length && cur.correctIdx > -1 && cur.reasoning) scenarios.push(cur);
    else if (cur) console.warn('Mindset scenario skipped (incomplete):', cur.id);
    cur = null;
  };
  md.split('\n').forEach(raw => {
    const t = raw.trim();
    const mTheme = t.match(/^##\s+THEME:\s*(.+)$/i);
    const mId = t.match(/^###\s+(\S+)/);
    if (mTheme) { flush(); theme = mTheme[1].trim(); return; }
    if (mId) { flush(); cur = { id: mId[1].trim(), theme, scenario: '', options: [], correctIdx: -1, reasoning: '' }; mode = 'text'; return; }
    if (!cur) return;
    if (/^>\s?/.test(t)) { cur.reasoning = (cur.reasoning ? cur.reasoning + ' ' : '') + t.replace(/^>\s?/, '').trim(); mode = 'reason'; return; }
    const mOpt = t.match(/^-\s+(.*)$/);
    if (mOpt) {
      let txt = mOpt[1].trim();
      if (txt.startsWith('*')) { txt = txt.slice(1).trim(); cur.correctIdx = cur.options.length; }
      cur.options.push(txt); mode = 'opt'; return;
    }
    if (t && mode === 'text') cur.scenario = (cur.scenario ? cur.scenario + '\n' : '') + t;
  });
  flush();
  return scenarios;
}

function loadMindsetStats() {
  try { return JSON.parse(localStorage.getItem('pmp_mindset_v1')) || {}; }
  catch (e) { return {}; }
}
function saveMindsetStats(s) { localStorage.setItem('pmp_mindset_v1', JSON.stringify(s)); }

async function startMindsetMode() {
  closeSidebar();
  document.getElementById('empty-state').style.display = 'none';
  document.getElementById('doc-wrapper').classList.remove('visible');
  document.getElementById('section-nav').classList.remove('visible');
  const qc = document.getElementById('quiz-container'); if (qc) qc.style.display = 'none';
  const mc = document.getElementById('mindset-container'); if (!mc) return;
  mc.style.display = 'block';
  renderSidebar();
  if (!mindsetLoaded) {
    mc.innerHTML = `<div class="quiz-card" style="text-align:center;"><p style="color:var(--text-muted);padding:2rem 0">Loading mindset scenarios…</p></div>`;
    try {
      const res = await fetch(encodeURI('mindset_scenarios.md'));
      if (!res.ok) throw new Error('HTTP ' + res.status);
      mindsetState.all = parseMindset(await res.text());
      mindsetLoaded = true;
    } catch (err) {
      mc.innerHTML = `<div class="quiz-card" style="text-align:center;"><p style="color:var(--red);">Could not load <code>mindset_scenarios.md</code>.<br><small>${H(err.message)}</small><br><br><small style="color:var(--text-muted)">Serve via HTTP, not file://.</small></p></div>`;
      return;
    }
  }
  if (!mindsetState.all.length) {
    mc.innerHTML = `<div class="quiz-card" style="text-align:center;"><p style="color:var(--red);">No scenarios parsed from <code>mindset_scenarios.md</code>.</p></div>`;
    return;
  }
  renderMindsetIntro();
}

function renderMindsetIntro() {
  const mc = document.getElementById('mindset-container'); if (!mc) return;
  const stats = loadMindsetStats();
  let seen = 0, correct = 0;
  Object.values(stats).forEach(v => { seen += v.seen || 0; correct += v.correct || 0; });
  const pct = seen ? Math.round(correct / seen * 100) : 0;
  const statLine = seen ? `<p class="mindset-progress">Lifetime: answered ${seen} · ${pct}% correct</p>` : '';
  mc.innerHTML = `
    <div class="quiz-card">
      <h2 class="quiz-title">🎯 PMP Mindset Builder</h2>
      <p class="quiz-desc">Train the PMI reflex: when a scenario hits, what do you do <strong>FIRST</strong>? Pick fast, read the reasoning, build exam instincts.</p>
      ${statLine}
      <h3 style="color:var(--heading);font-size:.95rem;margin:1rem 0 .25rem">PMI Mindset in 7 Rules</h3>
      <ol class="mindset-primer-list">${MINDSET_PRIMER.map(r => `<li>${H(r)}</li>`).join('')}</ol>
      <div style="display:flex;gap:.6rem;flex-wrap:wrap;margin-top:1rem">
        <button class="mindset-btn mindset-btn-primary" onclick="renderMindsetThemeSelect()">Start Drill →</button>
      </div>
    </div>`;
}

function renderMindsetThemeSelect() {
  const mc = document.getElementById('mindset-container'); if (!mc) return;
  const themes = [...new Set(mindsetState.all.map(s => s.theme))];
  const opts = themes.map(t => {
    const n = mindsetState.all.filter(s => s.theme === t).length;
    return `<option value="${H(t)}">${H(t)} (${n})</option>`;
  }).join('');
  mc.innerHTML = `
    <div class="quiz-card">
      <h2 class="quiz-title">🎯 Choose a Theme</h2>
      <div class="quiz-field" style="margin:1rem 0">
        <label class="quiz-label">Mindset theme</label>
        <select id="mindset-theme" class="quiz-select">
          <option value="ALL">All themes (${mindsetState.all.length})</option>
          ${opts}
        </select>
      </div>
      <div style="display:flex;gap:.6rem;flex-wrap:wrap">
        <button class="mindset-btn mindset-btn-primary" onclick="startMindsetDrill()">Begin →</button>
        <button class="mindset-btn" onclick="renderMindsetIntro()">← Back</button>
      </div>
    </div>`;
}

function startMindsetDrill() {
  const sel = document.getElementById('mindset-theme');
  const theme = sel ? sel.value : 'ALL';
  mindsetState.theme = theme;
  mindsetState.pool = theme === 'ALL' ? mindsetState.all.slice() : mindsetState.all.filter(s => s.theme === theme);
  mindsetState.idx = 0;
  mindsetState.answers = [];
  if (!mindsetState.pool.length) { showToast('No scenarios in this theme.', 'err'); return; }
  renderMindsetCard();
}

function renderMindsetCard() {
  const mc = document.getElementById('mindset-container'); if (!mc) return;
  const s = mindsetState.pool[mindsetState.idx];
  const n = mindsetState.pool.length;
  const score = mindsetState.answers.filter(a => a && a.correct).length;
  const optsHtml = s.options.map((o, i) => `<button class="mindset-opt" data-i="${i}" onclick="answerMindset(${i})">${H(o)}</button>`).join('');
  mc.innerHTML = `
    <div class="quiz-card">
      <div class="mindset-progress">${H(s.theme)} · ${mindsetState.idx + 1} / ${n} · Score ${score}</div>
      <div style="font-size:.95rem;line-height:1.6;color:var(--text,#c9d1d9);white-space:pre-line;margin-bottom:.75rem">${H(s.scenario)}</div>
      <div id="mindset-opts">${optsHtml}</div>
      <div id="mindset-feedback"></div>
    </div>`;
}

function answerMindset(i) {
  const s = mindsetState.pool[mindsetState.idx];
  if (mindsetState.answers[mindsetState.idx]) return; // already answered
  const correct = i === s.correctIdx;
  mindsetState.answers[mindsetState.idx] = { id: s.id, chosenIdx: i, correct };
  const stats = loadMindsetStats();
  const rec = stats[s.id] || { seen: 0, correct: 0 };
  rec.seen++; if (correct) rec.correct++;
  stats[s.id] = rec; saveMindsetStats(stats);
  document.querySelectorAll('#mindset-opts .mindset-opt').forEach(btn => {
    const bi = parseInt(btn.dataset.i, 10);
    btn.disabled = true;
    if (bi === s.correctIdx) btn.classList.add('correct');
    else if (bi === i) btn.classList.add('wrong');
  });
  const last = mindsetState.idx === mindsetState.pool.length - 1;
  document.getElementById('mindset-feedback').innerHTML = `
    <div class="quiz-explanation" style="margin-top:1rem">
      <div class="quiz-explanation-title">${correct ? '✅ Correct' : '❌ Not the first move'} · 🧠 Mindset</div>
      <div style="margin-top:.4rem;line-height:1.6">${H(s.reasoning)}</div>
    </div>
    <div style="margin-top:1rem">
      <button class="mindset-btn mindset-btn-primary" onclick="nextMindset()">${last ? 'See Results →' : 'Next →'}</button>
    </div>`;
}

function nextMindset() {
  if (mindsetState.idx >= mindsetState.pool.length - 1) { renderMindsetReview(); return; }
  mindsetState.idx++;
  renderMindsetCard();
}

function renderMindsetReview() {
  const mc = document.getElementById('mindset-container'); if (!mc) return;
  const n = mindsetState.pool.length;
  const score = mindsetState.answers.filter(a => a && a.correct).length;
  const pct = n ? Math.round(score / n * 100) : 0;
  const missed = mindsetState.pool
    .map((s, i) => ({ s, a: mindsetState.answers[i] }))
    .filter(x => x.a && !x.a.correct);
  const missedHtml = missed.length
    ? missed.map(({ s }) => `
      <div class="quiz-explanation" style="margin:.6rem 0">
        <div style="font-weight:700;color:var(--heading)">${H(s.theme)} · ${H(s.id)}</div>
        <div style="margin:.3rem 0;white-space:pre-line">${H(s.scenario)}</div>
        <div style="color:var(--green,#3fb950)">✓ ${H(s.options[s.correctIdx])}</div>
        <div style="margin-top:.3rem;line-height:1.5">🧠 ${H(s.reasoning)}</div>
      </div>`).join('')
    : '<p style="color:var(--green,#3fb950)">Perfect — no misses. 🎯</p>';
  mc.innerHTML = `
    <div class="quiz-card">
      <h2 class="quiz-title">🎯 Drill Complete</h2>
      <p class="quiz-desc">Score: <strong style="color:var(--heading)">${score} / ${n} (${pct}%)</strong> · Theme: ${H(mindsetState.theme)}</p>
      <h3 style="color:var(--heading);font-size:.95rem;margin:1rem 0 .25rem">Review missed (${missed.length})</h3>
      ${missedHtml}
      <div style="display:flex;gap:.6rem;flex-wrap:wrap;margin-top:1rem">
        <button class="mindset-btn mindset-btn-primary" onclick="startMindsetDrill()">Restart Theme ↻</button>
        <button class="mindset-btn" onclick="renderMindsetThemeSelect()">Themes</button>
        <button class="mindset-btn" onclick="renderMindsetIntro()">Home</button>
      </div>
    </div>`;
}
```

- [ ] **Step 2: Verify the button opens the intro**

Reload `http://localhost:8000`. Click "🎯 PMP Mindset Builder".
Expected: the intro card shows the title, description, and the "PMI Mindset in 7 Rules" numbered list, with a green "Start Drill →" button. No console errors.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add Mindset Builder module (parser, drill, review, persistence)"
```

---

## Task 6: Verify the parser with an explicit console assertion

**Files:**
- No file changes — this is a behavioral verification of `parseMindset()` against the real content.

- [ ] **Step 1: Run the assertion in DevTools console**

With `http://localhost:8000` open and the Mindset Builder opened once (so `mindsetState.all` is populated), paste into the console:

```javascript
(() => {
  const all = mindsetState.all;
  console.assert(all.length === 14, 'expected 14 scenarios, got ' + all.length);
  const themes = [...new Set(all.map(s => s.theme))];
  console.assert(themes.length === 7, 'expected 7 themes, got ' + themes.length);
  const s1 = all.find(s => s.id === 'S1');
  console.assert(s1 && s1.options.length === 4, 'S1 should have 4 options');
  console.assert(s1 && s1.correctIdx === 1, 'S1 correct option should be index 1 (Talk to the team member)');
  console.assert(s1 && /Talk first/.test(s1.reasoning), 'S1 reasoning should start with "Talk first"');
  console.assert(all.every(s => s.correctIdx > -1 && s.reasoning && s.options.length >= 2), 'every scenario complete');
  console.log('Parser OK:', all.length, 'scenarios,', themes.length, 'themes');
})();
```

Expected: console prints `Parser OK: 14 scenarios, 7 themes` and NO `Assertion failed` messages.

- [ ] **Step 2: Run one full drill manually**

Click "Start Drill →" → choose "All themes" → "Begin". Answer through all 14: confirm a wrong pick paints the chosen option red and the correct one green with reasoning; a right pick paints green; the score in the header increments; the last card's button reads "See Results →"; the review screen lists the missed ones with the correct answer + reasoning. Reopen the Builder and confirm the intro now shows a "Lifetime: answered N · X% correct" line.

Expected: all behaviors as described, no console errors.

---

## Task 7: Make Quiz Mode and topic views hide the mindset container (mutual exclusion)

**Files:**
- Modify: `index.html` — `startQuizMode()` (~line 1808-1814), `fetchAndRender()` (~1247-1248), `selectUC()` (~1315-1316), `clearView()` (~1331-1332).

- [ ] **Step 1: Hide mindset-container when Quiz Mode opens**

In `startQuizMode()`, find:

```javascript
  document.getElementById('empty-state').style.display = 'none';
  document.getElementById('doc-wrapper').classList.remove('visible');
  document.getElementById('section-nav').classList.remove('visible');
  
  let qc = document.getElementById('quiz-container');
```

Replace with:

```javascript
  document.getElementById('empty-state').style.display = 'none';
  document.getElementById('doc-wrapper').classList.remove('visible');
  document.getElementById('section-nav').classList.remove('visible');
  const mcHide = document.getElementById('mindset-container');
  if (mcHide) mcHide.style.display = 'none';
  
  let qc = document.getElementById('quiz-container');
```

- [ ] **Step 2: Hide mindset-container in `fetchAndRender()`**

Find (~line 1247):

```javascript
  const qc = document.getElementById('quiz-container');
  if (qc) qc.style.display = 'none';
  renderSidebar();
  const dc = document.getElementById('doc-content');
```

Replace with:

```javascript
  const qc = document.getElementById('quiz-container');
  if (qc) qc.style.display = 'none';
  const mc = document.getElementById('mindset-container');
  if (mc) mc.style.display = 'none';
  renderSidebar();
  const dc = document.getElementById('doc-content');
```

- [ ] **Step 3: Hide mindset-container in `selectUC()`**

Find (~line 1314-1317):

```javascript
  activeKey = 'uc|'+id;
  const qc = document.getElementById('quiz-container');
  if (qc) qc.style.display = 'none';
  renderSidebar();
```

Replace with:

```javascript
  activeKey = 'uc|'+id;
  const qc = document.getElementById('quiz-container');
  if (qc) qc.style.display = 'none';
  const mc = document.getElementById('mindset-container');
  if (mc) mc.style.display = 'none';
  renderSidebar();
```

- [ ] **Step 4: Hide mindset-container in `clearView()`**

Find (~line 1330-1332):

```javascript
function clearView() {
  const qc = document.getElementById('quiz-container');
  if (qc) qc.style.display = 'none';
```

Replace with:

```javascript
function clearView() {
  const qc = document.getElementById('quiz-container');
  if (qc) qc.style.display = 'none';
  const mc = document.getElementById('mindset-container');
  if (mc) mc.style.display = 'none';
```

- [ ] **Step 5: Verify mutual exclusion**

Reload. Open Mindset Builder → then click a topic in the sidebar: the mindset view disappears and the doc shows. Open Mindset Builder → click Interactive Quiz Mode: mindset view disappears, quiz shows. Open Quiz Mode → click Mindset Builder: quiz disappears, mindset shows. No stacked/overlapping views.

Expected: only one view visible at a time in every combination.

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "feat: mutual exclusion between Mindset Builder and other views"
```

---

## Task 8: Add the global visitor counter

**Files:**
- Modify: `index.html` — insert a self-running block immediately before the closing `</script>` tag (end of the main script).

- [ ] **Step 1: Insert the visitor counter block**

Find the final `</script>` of the main inline script (the last `</script>` before `</body>`). Immediately before it, insert:

```javascript

// ── Global Visitor Counter (Abacus, no-signup) ──
async function initVisitorCounter() {
  const badge = document.getElementById('visitor-badge');
  if (!badge) return;
  const ns = 'pmp-drill-rabbyz', key = 'visits';
  const base = 'https://abacus.jasoncameron.dev';
  const counted = sessionStorage.getItem('pmp_visit_counted') === '1';
  const url = `${base}/${counted ? 'get' : 'hit'}/${ns}/${key}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    if (typeof data.value !== 'number') throw new Error('bad payload');
    sessionStorage.setItem('pmp_visit_counted', '1');
    badge.textContent = `👁 ${data.value.toLocaleString()} visits`;
    badge.style.display = 'inline-flex';
  } catch (err) {
    // fail-safe: leave the badge hidden, no user-facing error
    console.debug('visitor counter unavailable:', err.message);
  }
}
initVisitorCounter();
```

- [ ] **Step 2: Verify the counter increments once per session**

Reload `http://localhost:8000`. Expected: within ~1s the sidebar footer shows `👁 N visits` with a number. In DevTools, `sessionStorage.getItem('pmp_visit_counted')` returns `"1"`. Reload again in the same tab: the number does NOT increase (uses `/get`). Open a fresh tab / new session and the underlying total increments by 1.

- [ ] **Step 3: Verify fail-safe**

In DevTools Network tab, set offline (or block `abacus.jasoncameron.dev`), then reload. Expected: page loads normally, the badge stays hidden, only a `console.debug` line appears — no error toast, no broken layout.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add global visitor counter (Abacus, session-deduped)"
```

---

## Task 9: Final end-to-end verification, then push

**Files:**
- No changes — validation + deploy.

- [ ] **Step 1: Full walkthrough**

With `python -m http.server 8000` running, in a fresh browser session confirm, in order:
1. Sidebar shows both the Quiz and the green Mindset Builder buttons.
2. Mindset Builder: intro → theme select (per-theme counts shown) → drill one specific theme (e.g., "Escalation (2)") → only that theme's scenarios appear → review screen → "Restart Theme", "Themes", "Home" all work.
3. Lifetime stats line appears on the intro after at least one answered scenario.
4. Switching between Quiz, Mindset, and a topic doc never leaves two views stacked.
5. Visitor badge shows a number; reload in-session does not inflate it.

Expected: every item passes, console clean (aside from the allowed `console.debug` / `console.warn` for skipped scenarios, of which there should be none with the shipped content).

- [ ] **Step 2: Confirm clean git state**

Run: `git status`
Expected: working tree clean (all changes committed across Tasks 1-8).

- [ ] **Step 3: Push to deploy**

```bash
git push
```

Expected: push succeeds; Cloudflare Pages redeploys `pmp-drill.rabbyz.com` (~20s). Verify the live site shows the Mindset Builder button and the visitor badge.

---

## Self-Review Notes

- **Spec coverage:** scenario drill (Tasks 1,5,6) ✓; curated MD + parser, Approach A (Tasks 1,5) ✓; sidebar header button (Task 4) ✓; "what FIRST?" MCQ with wrong-reflex distractors (Task 1 content) ✓; theme filter (Task 5 `renderMindsetThemeSelect`/`startMindsetDrill`) ✓; progress + score + missed review (Tasks 5,6) ✓; lifetime persistence `pmp_mindset_v1` (Task 5) ✓; intro primer card (Task 5) ✓; mutual exclusion (Task 7) ✓; visitor counter Abacus + session-dedupe + footer badge + fail-safe (Task 8) ✓. Excluded by spec (shuffle/retry-missed) — not implemented ✓.
- **Type consistency:** `mindsetState` shape `{all,pool,idx,answers,theme}` used identically across all renderers; scenario shape `{id,theme,scenario,options,correctIdx,reasoning}` produced by `parseMindset` and consumed everywhere; function names consistent (`renderMindsetIntro`, `renderMindsetThemeSelect`, `startMindsetDrill`, `renderMindsetCard`, `answerMindset`, `nextMindset`, `renderMindsetReview`).
- **Dependencies:** relies only on existing globals `H()`, `showToast()`, `closeSidebar()`, `renderSidebar()` — all confirmed present in `index.html`.
- **No placeholders:** all steps contain complete code or exact commands.
