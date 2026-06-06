# PMP Exam Master Brief: Plan and Manage Budget and Resources (Process · Task 5)

---

## 1. Topic Snapshot — Plain English

Planning and managing budget and resources is the discipline of estimating cost and resource needs, building baselines, tracking actuals against plan through earned-value analysis, and adjusting course when variance demands. PMI treats budget as a control mechanism — variance is signal, not failure. Topics include cost estimation (analogous, parametric, three-point, bottom-up), cost baseline, contingency vs management reserves, EVM (PV, EV, AC, SV, CV, SPI, CPI, EAC, ETC, TCPI), and resource calendar/leveling. The Process domain is 50% of the exam; budget and EVM appear regularly with calculations. In real projects, budget is reported, not managed; on the exam, PMI rewards proactive variance detection, root-cause analysis, and proportionate response.

**In one sentence:** This topic is about estimating, baselining, tracking, and adjusting budget and resources — variance is signal, not failure.

---

## 2. The PMI Mindset on This Topic

### Predictive vs Agile vs Hybrid Lens

| Lens | Budget & Resources Look Like |
|---|---|
| **Predictive** | Cost estimation; baselines; EVM; resource calendar formal |
| **Agile** | Funded backlog; sustainable pace; resource calendar lighter; agile EVM possible |
| **Hybrid** | Cost baseline + iteration-level resource adjustment |

### Top 5 PMI-isms on This Topic

1. **Contingency = PM controls. Management = sponsor.** Cross only with authorization.
2. **EVM measures progress objectively.** Use it.
3. **Variance is signal.** Investigate, don't hide.
4. **Resource leveling, not heroics.** Sustainable pace under budget pressure.
5. **EAC forecasts honestly.** Communicate truthfully.

### Ethics Angle

- **Honesty:** Variance reported accurately.
- **Responsibility:** PM owns cost control within authority.
- **Fairness:** Resource allocation by criteria.
- **Respect:** Resource overcommitment harms team; surface.

---

## 4. Key Terms, Formulas & Acronyms

| Term / Formula | Definition / Calculation | Exam Trap to Avoid |
|---|---|---|
| **Cost Baseline** | Approved time-phased budget excluding management reserve | Trap: confusing with PMB |
| **PMB** | Cost baseline + management reserve | Trap: confusing with cost baseline |
| **Contingency Reserve** | Known-unknowns; PM controls; in baseline | Trap: PM-can't-use mistakes |
| **Management Reserve** | Unknown-unknowns; sponsor controls; outside baseline | Trap: PM using without approval |
| **Analogous Estimation** | Based on similar past projects | Trap: assuming current = past |
| **Parametric Estimation** | Statistical relationship × units | Trap: bad parameters |
| **Three-Point Estimation** | (O + 4M + P) / 6 (PERT/triangular) | Trap: arithmetic |
| **Bottom-Up Estimation** | Estimate each WP; sum | Trap: time-consuming |
| **Reserve Analysis** | Determine appropriate reserves | Trap: ignoring |
| **PV (Planned Value)** | Budgeted cost of scheduled work | Trap: confusing PV with BAC |
| **EV (Earned Value)** | Budgeted cost of actual work performed | Trap: arbitrary EV |
| **AC (Actual Cost)** | Actual cost of work performed | Trap: ignoring |
| **SV (Schedule Variance)** | EV − PV (positive = ahead) | Trap: sign |
| **CV (Cost Variance)** | EV − AC (positive = under) | Trap: sign |
| **SPI** | EV / PV (>1 = ahead) | Trap: <1 means behind |
| **CPI** | EV / AC (>1 = under) | Trap: <1 means over |
| **BAC** | Budget at Completion | Trap: confused with EAC |
| **EAC (Estimate at Completion)** | BAC/CPI (if variance typical) or AC + bottom-up ETC | Trap: choose formula by context |
| **ETC** | EAC − AC | Trap: forgetting |
| **VAC** | BAC − EAC | Trap: sign |
| **TCPI** | (BAC − EV) / (BAC − AC) [to BAC] or (BAC − EV) / (EAC − AC) [to EAC] | Trap: wrong denominator |
| **Resource Calendar** | Availability over time | Trap: ignoring |
| **Resource Leveling** | Adjust schedule to smooth resource use | Trap: extending schedule unintended |
| **Resource Smoothing** | Smooth within float | Trap: same as leveling |

---

## 5. PM Behavior Cheat Sheet — FIRST / NEXT / BEST / EXCEPT

| Stem Signal | PM Should FIRST Do | Because |
|---|---|---|
| **CPI < 1** | Investigate root cause; forecast EAC; brief sponsor | Variance is signal |
| **SPI < 1** | Investigate schedule cause; consider crashing / fast-tracking | Schedule + cost interrelated |
| **Contingency** running low | Reassess; document; plan management reserve request if needed | Don't silently exhaust |
| **Management reserve** request | Through governance with documentation | Sponsor approval required |
| Resource **overcommitted** | Resource level; renegotiate scope/timeline | Sustainable pace |
| **Three-point** estimate needed | (O + 4M + P) / 6 | Triangular: (O + M + P) / 3 |
| Stakeholder asks **budget status** | Provide EVM-based forecast with EAC | Objective measure |
| **EAC** forecast diverging from BAC | Communicate; propose corrective action | Don't hide forecast gap |
| Sponsor demands **CPI restored** | Investigate root cause; propose realistic recovery; do not promise without basis | Honesty |
| Resource **calendar conflict** with FM | Engage FM; renegotiate; coordinate | Resource conflicts structural |

**Escalation-Specific Scenarios:**

| Stem Signal | Correct Escalation Logic |
|---|---|
| Cost variance exceeds PM authority threshold | Brief sponsor with EVM, EAC, root cause, recommendation |
| Management reserve request needed | Through formal governance; with risk register evidence |

---

## 6. Visual Memory Aid

### EVM Quick Reference

```text
BASE METRICS:
  PV  = Planned Value (work scheduled)
  EV  = Earned Value (work done × budget rate)
  AC  = Actual Cost (work done × actual rate)

VARIANCES:
  SV  = EV − PV      (+ ahead, − behind)
  CV  = EV − AC      (+ under, − over)

INDICES:
  SPI = EV / PV      (>1 ahead, <1 behind)
  CPI = EV / AC      (>1 under, <1 over)

FORECASTS:
  EAC = BAC / CPI    (variance typical)
  EAC = AC + bottom-up ETC  (variance atypical / new info)
  EAC = AC + (BAC − EV)     (no remaining variance)
  EAC = AC + (BAC − EV) / (CPI × SPI)  (both indices apply)

  ETC = EAC − AC
  VAC = BAC − EAC

  TCPI = (BAC − EV) / (BAC − AC)   to BAC
  TCPI = (BAC − EV) / (EAC − AC)   to EAC
```

### Mnemonic: **P-E-A-S-C-I-E**

> **PV · EV · AC** = base
> **SV · CV** = variances
> **SPI · CPI** = indices
> **EAC** = forecast

Memory hook: **"PEA SCI E — Plan, Earn, Actual; Schedule, Cost; Schedule index, Cost index; Estimate."**

---

## 7. Tailoring Considerations

### Predictive Project

- Cost baselines formal
- EVM on large projects
- Resource calendar formal

### Agile / Hybrid

- Funded backlog
- Sustainable pace
- Agile EVM possible (story-point based)

### Industry / Regulatory Factors

- **Banking / Capital Markets:** budget reporting heavy
- BSEC / Bangladesh Bank: cost overruns require disclosure
- **Public-sector:** procurement constraints

---

## 8. Common Wrong Answers & Why PMI Rejects Them

| Tempting Answer | Why Picked | Why PMI Rejects |
|---|---|---|
| "Use management reserve without authorization" | Reserves exist | No authority |
| "Hide variance to keep status green" | Sponsor calm | Dishonest |
| "Re-baseline to reset variance" | Clean start | Re-baseline only after approved change |
| "Push team to overtime to restore CPI" | Senior delivery | Sustainable pace breach |
| "Cut scope silently" | Recovery | Through ICC |
| "Pad estimates personally" | Senior pad | Transparency breach |
| "Promise CPI recovery without basis" | Sponsor confidence | Honesty |

---

## 11. Exam-Day Trigger Phrases

| Trigger Phrase in Stem | Your Reflex Answer Pattern |
|---|---|
| "**CPI < 1**" | Over budget; investigate |
| "**SPI < 1**" | Behind schedule; investigate |
| "**EAC**" calculation | Choose formula by context |
| "**Management reserve**" use | Sponsor approval required |
| "**Contingency** exhausted" | Document; request management |
| "**Three-point**" | (O+4M+P)/6 PERT |
| "**Resource leveling**" | Adjust schedule for resource |
| "**Resource smoothing**" | Within float |
| "**Re-baseline**" | Only after approved change |
| "Sponsor wants **forecast**" | EAC objective |
| "**Bottom-up estimating**" | Each WP; sum |

---

## 9. 10 Hardest Scenario-Based Questions

---

**Q1 — Ethics Dilemma (Predictive)**

Sponsor instructs you to re-baseline to hide cost overrun before board meeting. No approved scope changes. What should you do FIRST?

A. Re-baseline as instructed.
B. Refuse; present actual variance with root cause and recovery plan to sponsor.
C. Re-baseline only the cost baseline.
D. Defer baseline change.

---

**Q2 — Agile Ceremony / Engagement**

Team's velocity has dropped 30%; effective cost-per-story has risen. PO pressuring for more output. What is the BEST action?

A. Push team for more velocity.
B. Facilitate retrospective on cause; consider technical debt / capability investment; brief PO on cost-of-delay impact.
C. Replace team members.
D. Escalate to sponsor for budget increase.

---

**Q3 — FIRST Action, Conflict (Hybrid)**

Resource conflict: FM has reassigned 30% of a team member's time without coordination. Sprint commitments slipping. What should you do FIRST?

A. Absorb the impact.
B. Engage FM; understand drivers; coordinate; if pattern, brief sponsor with resource plan and impact.
C. Escalate to HR.
D. Reduce team commitments silently.

---

**Q4 — Two Correct, Pick Best (Predictive)**

CPI = 0.85, SPI = 0.90, BAC = USD 5M. Sponsor wants 4-week status. Which TWO actions FIRST?

A. Compute EAC; prepare forecast with root cause.
B. Continue current approach.
C. Investigate variance root causes and propose corrective options.
D. Re-baseline.
E. Skip status to avoid bad news.

---

**Q5 — Ordered Sequence (Predictive)**

Plan budget for new project. Arrange:

1. Determine reserves (contingency + management).
2. Estimate cost per work package.
3. Aggregate into cost baseline.
4. Validate against funding limits and adjust.

A. 2 → 3 → 1 → 4
B. 1 → 2 → 3 → 4
C. 4 → 1 → 2 → 3
D. 3 → 2 → 1 → 4

---

**Q6 — EXCEPT Question (Predictive)**

Which is NOT a cost estimation technique?

A. Analogous
B. Parametric
C. Three-point
D. Bottom-up
E. Critical chain

---

**Q7 — Ethics / Honesty Hardline**

You discover three months in that the original cost estimate was 25% low due to scope misunderstanding. Sponsor presents to board next week with original budget. What do you do?

A. Wait until after board.
B. Re-estimate immediately; communicate updated EAC honestly to sponsor before board; propose recovery options.
C. Re-baseline silently.
D. Pad estimates going forward to absorb.

---

**Q8 — Communication Strategy (Hybrid)**

Sponsor wants 1-page budget status weekly. PMO wants detailed monthly. Project team wants real-time burn-down. What is the BEST approach?

A. Send same detailed monthly to all.
B. Tailor: 1-page weekly for sponsor (EAC, key variances); detailed monthly for PMO; real-time burn-down for team.
C. Stop reporting.
D. Send daily detail to all.

---

**Q9 — Escalation Judgment (Hybrid)**

Contingency reserve exhausted; three identified risks remain with planned mitigation. Sponsor demands "no management reserve request" but pressing forward. What is the BEST next step?

A. Continue without reserves.
B. Brief sponsor with reserve analysis, exposure, recommendation; request management reserve formally with risk evidence; escalate if denied with material risk.
C. Use management reserve unilaterally.
D. Hide remaining risks.

---

**Q10 — Multiple Response (Agile/Hybrid)**

Cost performance declining four iterations. Team hours unchanged but EV per sprint dropping. Which THREE actions MOST appropriate? (Select three.)

A. Root cause via retrospective: scope creep, technical debt, ambiguity, dependencies.
B. Push team for longer hours.
C. Recalculate EAC; communicate to sponsor.
D. Re-baseline.
E. Investigate WIP and flow constraints.
F. Replace team members.

---

## 10. Answer Key with Full Justification

---

**Q1 — Correct Answer: B**

**PMI Justification:** Re-baselining without approved change hides variance.

**Mindset Lesson:** Re-baseline only after approved change.

---

**Q2 — Correct Answer: B**

**PMI Justification:** Investigate cause + capability investment + PO brief.

**Mindset Lesson:** Velocity drop = diagnose system cause, not push harder.

---

**Q3 — Correct Answer: B**

**PMI Justification:** FM engagement + escalation pattern.

**Mindset Lesson:** Resource conflict structural; escalate with data if pattern.

---

**Q4 — Correct Answers: A and C**

**PMI Justification:** EAC + root cause + options.

**Mindset Lesson:** Variance signal = forecast + diagnose + options.

---

**Q5 — Correct Answer: A (2 → 3 → 1 → 4)**

**PMI Justification:** Estimate → aggregate → reserves → validate.

**Mindset Lesson:** Cost baseline built bottom-up with reserves added.

---

**Q6 — Correct Answer: E**

**PMI Justification:** Critical chain is schedule technique, not cost estimation.

**Mindset Lesson:** Memorize cost estimation techniques.

---

**Q7 — Correct Answer: B**

**PMI Justification:** Honesty; honest EAC + options to sponsor before board.

**Mindset Lesson:** Estimate error surfaced immediately, never after board.

---

**Q8 — Correct Answer: B**

**PMI Justification:** Tailored audience-specific reporting.

**Mindset Lesson:** Audience tailoring in cost reporting.

---

**Q9 — Correct Answer: B**

**PMI Justification:** Formal reserve analysis + recommendation + escalate if denied.

**Mindset Lesson:** Reserve exhaustion = reserve analysis + governance route.

---

**Q10 — Correct Answers: A, C, E**

**PMI Justification:**

- A: Retrospective root cause.
- C: EAC update.
- E: WIP/flow.
- B: Sustainable pace breach.
- D: Re-baseline hides.
- F: Replacement avoids diagnosis.

**Mindset Lesson:** Cost performance decline = root cause + EAC + flow. Never push, hide, replace.

---

## 12. 60-Second Recap Card

**PLAN AND MANAGE BUDGET AND RESOURCES — Exam Morning Card**

- Contingency = PM controls. Management = sponsor.
- PEA SCI E: PV · EV · AC; SV · CV; SPI · CPI; EAC.
- CPI < 1 = over budget. SPI < 1 = behind schedule.
- EAC = BAC/CPI (typical), AC + bottom-up (atypical), AC + (BAC−EV)/(CPI×SPI) (both apply).
- Three-point PERT: (O+4M+P)/6. Triangular: (O+M+P)/3.
- Re-baseline only after approved change.
- Variance = signal; investigate, don't hide.
- Resource leveling = adjust schedule for resource. Resource smoothing = within float.
- Tailor cost reporting per audience.
- Reserve exhaustion = formal management reserve request through governance.

**Escalation one-liner to burn in:** *PMI escalates cost variance and reserve issues with EAC, root cause, and recommendation — never absorbs, never re-baselines silently, never uses management reserve without authorization.*
