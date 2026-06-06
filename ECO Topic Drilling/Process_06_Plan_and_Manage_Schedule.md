# PMP Exam Master Brief: Plan and Manage Schedule (Process · Task 6)

---

## 1. Topic Snapshot — Plain English

Planning and managing schedule is the discipline of estimating duration, sequencing activities, calculating critical path, building schedule baseline, and tracking actuals against plan — adjusting through crashing, fast-tracking, leveling, or scope changes when variance demands. PMI treats schedule as integrated with scope, cost, risk, and resources. Topics include duration estimation (analogous, parametric, three-point, bottom-up, expert judgment), CPM (critical path method), critical chain method, network diagrams, schedule compression (crashing, fast-tracking), and agile cadence (sprints, story points, velocity). The Process domain is 50% of the exam; schedule appears with calculations. In real projects, schedule is the most-pressured constraint; on the exam, PMI rewards honest forecasting and proportionate compression — not heroics.

**In one sentence:** This topic is about realistic schedule construction and disciplined variance response — crash or fast-track with awareness, never push team into burnout.

---

## 2. The PMI Mindset on This Topic

### Predictive vs Agile vs Hybrid Lens

| Lens | Schedule Management Looks Like |
|---|---|
| **Predictive** | Network diagram; CPM; schedule baseline; EVM SPI |
| **Agile** | Sprint cadence; velocity; release plan; story points |
| **Hybrid** | Release plan + sprint cadence; CPM at program level |

### Top 5 PMI-isms on This Topic

1. **Critical path drives.** Activities on CP have zero float.
2. **Crashing adds cost. Fast-tracking adds risk.** Choose deliberately.
3. **Velocity is planning, not commitment.** Forecast with care.
4. **Sustainable pace under schedule pressure.** Better choices, not more hours.
5. **Honest forecast > optimistic baseline.** P80 / EAC reality.

### Ethics Angle

- **Honesty:** Schedule variance reported accurately.
- **Responsibility:** PM owns schedule control within authority.
- **Respect:** Team capacity respected; overcommitment harms.
- **Fairness:** Schedule pressure not shifted unfairly to team.

---

## 4. Key Terms, Formulas & Acronyms

| Term / Formula | Definition / Calculation | Exam Trap to Avoid |
|---|---|---|
| **Activity** | Smallest unit of work on schedule | Trap: granularity errors |
| **Milestone** | Significant point; zero duration | Trap: confusing with activity |
| **Network Diagram** | Activities + dependencies | Trap: dependency errors |
| **Dependencies** | FS (finish-start), SS, FF, SF | Trap: wrong type |
| **Mandatory vs Discretionary** | Hard logic vs preferred | Trap: confusing |
| **External vs Internal** | Outside project vs within | Trap: ignoring external |
| **CPM (Critical Path Method)** | Longest path; zero float | Trap: shortest |
| **Float / Slack** | Time activity can slip without affecting project end | Trap: confusing total vs free float |
| **Total Float** | Project end impact | Trap: free float |
| **Free Float** | Successor impact | Trap: total float |
| **Critical Chain Method (CCM)** | CP with resource constraints + buffers | Trap: confusing with CPM |
| **Resource Buffer / Project Buffer** | CCM-specific | Trap: ignoring |
| **Crashing** | Add resources to reduce duration; adds cost | Trap: assumes always works |
| **Fast-Tracking** | Parallelize activities; adds risk | Trap: dependency violations |
| **Schedule Compression** | Crashing or fast-tracking | Trap: confusing two |
| **Three-Point Estimate** | PERT: (O + 4M + P) / 6 | Trap: triangular: (O + M + P) / 3 |
| **Schedule Baseline** | Approved version | Trap: change without ICC |
| **SPI** | EV / PV (>1 ahead) | Trap: <1 behind |
| **Velocity (Agile)** | Story points per sprint | Trap: KPI |
| **Sprint Cadence** | Fixed time-box | Trap: extending |
| **Release Plan** | Multi-sprint plan to release | Trap: skipping |

---

## 5. PM Behavior Cheat Sheet — FIRST / NEXT / BEST / EXCEPT

| Stem Signal | PM Should FIRST Do | Because |
|---|---|---|
| **SPI < 1** | Investigate cause; consider crashing / fast-tracking / scope adjustment | Schedule signal |
| **Critical path activity** at risk | Prioritize; consider compression | CP drives end |
| **Float remaining** on non-critical activity | Acceptable variance; monitor | Float is buffer |
| Sponsor demands **earlier date** | Negotiate; compression analysis with cost/risk trade-off | Crashing/fast-tracking has trade-offs |
| Team **overcommitted** | Resource level; renegotiate | Sustainable pace |
| **Velocity dropping** | Retrospective on cause | Not commitment |
| **Critical chain** project | Manage buffers, not individual activities | CCM mindset |
| **External dependency** delays | Engage external party; identify alternatives | Outside PM control |
| Schedule **baseline change** needed | Through ICC | Authorized change only |
| Sponsor demands **velocity restored** | Diagnose cause; sustainable solutions | Don't push |

**Escalation-Specific Scenarios:**

| Stem Signal | Correct Escalation Logic |
|---|---|
| Schedule slip exceeds PM authority threshold | Brief sponsor with EVM SPI, root cause, compression options (cost/risk), recommendation |
| External dependency delay critical | Engage external party + sponsor; identify alternatives |

---

## 6. Visual Memory Aid

### Schedule Compression Trade-Off

```text
SCHEDULE SLIPPING
        │
        ▼
CRITICAL PATH affected?
   ┌────┴────┐
   ▼         ▼
 YES       NO
   │         │
   ▼         ▼
Must     Acceptable
compress  variance;
   │      monitor
   ▼
Crash or Fast-Track?
   ┌────┴────┐
   ▼         ▼
CRASH      FAST-TRACK
+ cost     + risk
+ resources (parallelize)
   │         │
   ▼         ▼
Brief sponsor on trade-off
Update plan through ICC
```

### Schedule Mnemonic: **N-C-F-S-T**

> **N**etwork diagram
> **C**ritical path
> **F**loat analysis
> **S**chedule baseline
> **T**rack + compress when needed

Memory hook: **"Network, Critical, Float, Schedule, Track."**

### PERT vs Triangular

```text
PERT (beta):       Expected = (O + 4M + P) / 6
                   Standard Deviation = (P − O) / 6
Triangular:        Expected = (O + M + P) / 3
```

---

## 7. Tailoring Considerations

### Predictive Project

- Network diagram; CPM
- Schedule baseline formal
- SPI monitored

### Agile / Hybrid

- Sprint cadence
- Release plan
- Velocity for planning

### Industry / Regulatory Factors

- **Banking / Capital Markets:** regulatory deadlines often fixed
- BSEC / Bangladesh Bank: schedule slip may have disclosure implications
- **Public-sector:** procurement timelines extended

---

## 8. Common Wrong Answers & Why PMI Rejects Them

| Tempting Answer | Why Picked | Why PMI Rejects |
|---|---|---|
| "Push team to weekends" | Senior delivery | Sustainable pace |
| "Fast-track without dependency analysis" | Speed | Risk concentration |
| "Extend sprint to finish" | Pragmatic | Sprint time-box sacred |
| "Re-baseline to fit current actuals" | Reset | Without approved change |
| "Hide schedule slip" | Sponsor calm | Honesty |
| "Promise dates without basis" | Confidence | Honesty |
| "Use velocity as commitment" | KPI | Planning only |

---

## 11. Exam-Day Trigger Phrases

| Trigger Phrase in Stem | Your Reflex Answer Pattern |
|---|---|
| "**Critical path**" | CP activities zero float |
| "**Float / Slack**" | Buffer on non-critical |
| "**Crashing**" | Add resources; adds cost |
| "**Fast-tracking**" | Parallelize; adds risk |
| "**SPI < 1**" | Behind; investigate |
| "**PERT**" | (O+4M+P)/6 |
| "**Critical chain**" | CPM + resources + buffers |
| "**Extend sprint**" | Wrong; time-box |
| "**Velocity** as commitment" | Anti-pattern |
| "**Re-baseline schedule**" | Only after approved change |
| "External dependency delay" | Engage + alternatives |

---

## 9. 10 Hardest Scenario-Based Questions

---

**Q1 — Ethics Dilemma (Predictive)**

Sponsor demands you commit to a date 8 weeks earlier than your honest estimate. Pressing forward would require team overtime and quality compromise. What should you do FIRST?

A. Commit and push team.
B. Refuse the date; present analysis with crashing/fast-tracking trade-offs; propose alternative date or scope adjustment.
C. Commit and hope.
D. Defer commitment indefinitely.

---

**Q2 — Agile Ceremony / Engagement**

Sprint goal at risk in last 2 days. Team wants to extend sprint by 3 days to finish. What is the BEST action?

A. Extend sprint.
B. End sprint on time; unfinished work returns to backlog; conduct retrospective on overcommitment.
C. Cancel sprint review.
D. Mandate weekend work.

---

**Q3 — FIRST Action, Conflict (Hybrid)**

External vendor delayed deliverable on critical path. Vendor manager promises "next week." Your project deadline at risk. What should you do FIRST?

A. Accept and wait.
B. Engage vendor with deadline impact; explore options (resource, scope, alternative); brief sponsor and procurement.
C. Cancel vendor.
D. Push team to absorb.

---

**Q4 — Two Correct, Pick Best (Predictive)**

Project SPI = 0.85. Critical path slipping. Sponsor wants original date held. Which TWO actions FIRST?

A. Analyze crashing options on critical path activities (cost trade-off).
B. Push team to weekends.
C. Analyze fast-tracking options on critical path (risk trade-off).
D. Re-baseline.
E. Hide slip.

---

**Q5 — Ordered Sequence (Predictive)**

Build project schedule. Arrange:

1. Construct schedule baseline.
2. Estimate activity durations.
3. Define and sequence activities.
4. Calculate critical path and float.

A. 2 → 3 → 4 → 1
B. 3 → 2 → 4 → 1
C. 1 → 3 → 2 → 4
D. 4 → 3 → 2 → 1

---

**Q6 — EXCEPT Question (Predictive)**

Which is NOT a schedule compression or duration technique?

A. Crashing
B. Fast-tracking
C. Three-point estimation
D. Critical path method
E. Earned Value Management

---

**Q7 — Ethics / Honesty Hardline**

You discover the originally-committed delivery date will slip by 6 weeks due to underestimated dependency. Sponsor presents board in 2 weeks. What do you do?

A. Wait until after board.
B. Communicate slip honestly to sponsor immediately; updated EAC and SPI; propose recovery options.
C. Re-baseline silently.
D. Commit to original date publicly.

---

**Q8 — Communication Strategy (Hybrid)**

Sponsor wants 1-page weekly schedule status. PMO wants detailed monthly. Team uses live burndown. What is the BEST approach?

A. Same monthly to all.
B. Tailor: 1-page weekly for sponsor (key milestones, SPI, EAC); detailed monthly for PMO; live burndown for team.
C. Stop reporting.
D. Send daily detail to all.

---

**Q9 — Escalation Judgment (Hybrid)**

Critical path slip = 6 weeks. Sponsor demands "no changes." Team-health risk if pushed harder. What is the BEST next step?

A. Push team.
B. Brief sponsor with SPI, compression options (cost vs risk vs team-health), recommendation; escalate to governance if sponsor refuses honest trade-off.
C. Re-baseline silently.
D. Hide slip.

---

**Q10 — Multiple Response (Agile/Hybrid)**

Velocity dropping four sprints. Sprint goals consistently missed. Quality dropping. Which THREE actions MOST appropriate? (Select three.)

A. Root cause via retrospective (scope creep, debt, ambiguity, capability).
B. Push team for more output.
C. Recalculate release forecast; communicate to PO/sponsor.
D. Reduce DoD bar.
E. Re-prioritize backlog for value/risk.
F. Replace team members.

---

## 10. Answer Key with Full Justification

---

**Q1 — Correct Answer: B**

**PMI Justification:** Honest analysis with trade-offs; refuse unrealistic commitment.

**Mindset Lesson:** Sponsor pressure does not override honest forecast.

---

**Q2 — Correct Answer: B**

**PMI Justification:** Sprint time-box sacred; retrospective on cause.

**Mindset Lesson:** Sprints end on time; learn from overcommitment.

---

**Q3 — Correct Answer: B**

**PMI Justification:** Engage vendor + options + brief sponsor/procurement.

**Mindset Lesson:** External delays = engage + options + governance.

---

**Q4 — Correct Answers: A and C**

**PMI Justification:** Crashing (cost) + fast-tracking (risk) analysis.

**Mindset Lesson:** Schedule compression = explicit trade-off analysis.

---

**Q5 — Correct Answer: B (3 → 2 → 4 → 1)**

**PMI Justification:** Define/sequence → estimate → CP → baseline.

**Mindset Lesson:** Build network → durations → CP → approve baseline.

---

**Q6 — Correct Answer: E**

**PMI Justification:** EVM is performance measurement, not schedule technique.

**Mindset Lesson:** EVM measures; not schedule compression.

---

**Q7 — Correct Answer: B**

**PMI Justification:** Honest communication immediately.

**Mindset Lesson:** Material slip surfaced before board.

---

**Q8 — Correct Answer: B**

**PMI Justification:** Tailored audience-specific reporting.

**Mindset Lesson:** Schedule reporting tailored.

---

**Q9 — Correct Answer: B**

**PMI Justification:** Compression options + recommendation + governance escalation.

**Mindset Lesson:** Sponsor refusal of honest trade-off escalated.

---

**Q10 — Correct Answers: A, C, E**

**PMI Justification:**

- A: Root cause.
- C: Forecast update.
- E: Reprioritize backlog.
- B: Push team breaks pace.
- D: DoD reduction = quality debt.
- F: Replacement avoids diagnosis.

**Mindset Lesson:** Velocity decline = root cause + forecast + reprioritize. Not push, DoD reduction, replacement.

---

## 12. 60-Second Recap Card

**PLAN AND MANAGE SCHEDULE — Exam Morning Card**

- NCFST: Network · Critical path · Float · Schedule baseline · Track.
- Critical path = longest path; zero float.
- Total float vs free float distinct.
- Crashing adds cost. Fast-tracking adds risk. Pick deliberately.
- PERT: (O+4M+P)/6. Triangular: (O+M+P)/3.
- SPI < 1 = behind.
- Sprint time-box sacred. Never extend.
- Velocity = planning, not commitment.
- Re-baseline only after approved change.
- External delays = engage + options + governance.

**Escalation one-liner to burn in:** *PMI escalates schedule slip with SPI, compression analysis, team-health awareness, and recommendation — never absorbs through team burnout, never re-baselines silently, never commits to dates without basis.*
