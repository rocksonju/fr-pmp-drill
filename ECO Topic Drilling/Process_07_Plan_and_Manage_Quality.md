# PMP Exam Master Brief: Plan and Manage Quality of Products / Deliverables (Process · Task 7)

---

## 1. Topic Snapshot — Plain English

Planning and managing quality is the discipline of building products that meet requirements, by planning quality in, managing the process producing quality, and controlling outputs. PMI's key distinctions: quality (requirements met) vs grade (feature/material level); prevention over inspection. Topics include Plan/Manage/Control Quality, Cost of Quality (CoQ), 7 basic tools, Deming/Juran/Crosby/Six Sigma, DoD (agile), and quality audit. The Process domain is 50% of the exam; quality threads into scope (acceptance), risk (defect), and team (DoD). In real projects, quality is bolted on; on the exam, PMI rewards prevention over inspection — design quality in, don't catch it out.

**In one sentence:** This topic is about preventing defects through process discipline — quality is planned in, not bolted on.

---

## 2. The PMI Mindset on This Topic

### Predictive vs Agile vs Hybrid Lens

| Lens | Quality Management Looks Like |
|---|---|
| **Predictive** | Quality plan; audits; Control Quality; statistical sampling; CoQ budgeted |
| **Agile** | DoD embedded; TDD, pair, CI; retrospective continuous; everyone's job |
| **Hybrid** | DoD + audits at milestones; release-level aggregation |

### Top 5 PMI-isms on This Topic

1. **Prevention > Inspection.** Always.
2. **Quality ≠ Gold-plating.** Exceeding requirements = scope creep.
3. **PM owns quality.** Even when delegated.
4. **Manage Quality ≠ Control Quality.** Process improvement vs inspection.
5. **CoQ: Conformance investment < Non-Conformance loss.**

### Ethics Angle

- **Honesty:** Test results, defect rates, audit findings accurate.
- **Responsibility:** Quality issues surfaced timely.
- **Fairness:** Quality criteria same internal and vendor.
- **Respect:** Quality feedback candid and respectful.

---

## 4. Key Terms, Formulas & Acronyms

| Term / Formula | Definition / Calculation | Exam Trap to Avoid |
|---|---|---|
| **Quality** | Degree requirements met | Trap: confusing with grade |
| **Grade** | Feature/material category | Trap: assuming higher = better quality |
| **Plan Quality** | Identify standards/requirements | Trap: deferring |
| **Manage Quality** | Execute plan; improve processes | Trap: confusing with Control Quality |
| **Control Quality** | Inspect outputs | Trap: confusing with Validate Scope |
| **CoQ** | Conformance (Prevention + Appraisal) + Non-Conformance (Internal + External Failure) | Trap: only failure cost |
| **Prevention vs Inspection** | Build in vs catch | Trap: inspection default |
| **Ishikawa / Fishbone** | Root cause analysis | Trap: confusing with Pareto |
| **Pareto Chart** | Frequency sorted; 80/20 | Trap: assuming any frequency chart |
| **Control Chart** | Process stability; UCL/LCL | Trap: spec vs control limits |
| **Spec Limits vs Control Limits** | Customer vs process capability | Trap: confusing |
| **Rule of Seven** | 7 consecutive on one side = drift | Trap: ignoring |
| **Histogram** | Frequency distribution | Trap: confusing with Pareto |
| **Scatter** | Correlation between two variables | Trap: correlation = causation |
| **Flowchart** | Process steps | Trap: using for RCA |
| **Check Sheet** | Tally | Trap: confusing with checklist |
| **Statistical Sampling** | Subset inspection | Trap: bad sample design |
| **Quality Audit** | Structured review | Trap: confusing with Control Quality |
| **DoD (Agile)** | Quality criteria team-owned | Trap: PM-imposed |
| **TDD** | Tests before code | Trap: confused with automated testing |
| **Pair / Mob Programming** | Continuous review | Trap: dismissing |
| **CI/CD** | Continuous integration / delivery | Trap: confusing two |

---

## 5. PM Behavior Cheat Sheet — FIRST / NEXT / BEST / EXCEPT

| Stem Signal | PM Should FIRST Do | Because |
|---|---|---|
| **Defect rate rising** | RCA (Ishikawa); Manage Quality process improvement | Process signal |
| Stakeholder requests **more features** | Refuse gold-plating; route through ICC | Scope creep |
| Vendor delivers **below spec** | Document; contract terms; require correction | Same standard |
| Customer **rejects** deliverable | Validate Scope per criteria; ICC | Acceptance is binary |
| Sponsor demands **skip audit** | Refuse; explain risk | Prevention |
| Team disagrees on "done" | Co-create DoD | Shared understanding |
| **7 consecutive points** on control chart | Investigate drift | Rule of seven |
| **In control but out of spec** | Capability gap; engage customer | Process can't meet spec |
| **CoQ cut** under budget | Surface trade-off | Honesty |
| Customer reports **field defect** | External failure; RCA; communicate; prevent | Most expensive |

**Escalation-Specific Scenarios:**

| Stem Signal | Correct Escalation Logic |
|---|---|
| Quality issue requires authority beyond PM (vendor breach, regulatory) | Brief sponsor/steering with RCA, recommendation, decision required |
| Sponsor instructs ship despite known defects below DoD | Refuse; document; escalate next governance level |

---

## 6. Visual Memory Aid

### Quality Decision Flow

```text
QUALITY SIGNAL (defect, audit, complaint, metric drift)
        │
        ▼
OUTPUT or PROCESS?
   ┌────┴────┐
   ▼         ▼
OUTPUT    PROCESS
(defect)  (capability)
   │         │
   ▼         ▼
Control Quality  Manage Quality:
+ RCA            improve process, audit
   │             │
   ▼             ▼
Root cause known?
   YES → fix process (prevention)
   NO  → cause-effect / Pareto / sampling
   │
   ▼
Did fix work?
   YES → update standards, train, monitor
   NO  → escalate / reassess / grade change
   │
   ▼
Communicate + lessons learned
```

### Mnemonic: **P-M-C** (Plan / Manage / Control)

> **P**lan = requirements + standards + metrics + tools
> **M**anage = execute, improve, audit
> **C**ontrol = inspect, measure, recommend

### CoQ Mnemonic: **P-A-I-E**

> **P**revention + **A**ppraisal = Conformance
> **I**nternal failure + **E**xternal failure = Non-Conformance

---

## 7. Tailoring Considerations

### Predictive Project

- Quality plan; metrics; audits formal
- Statistical sampling

### Agile / Hybrid

- DoD embedded
- TDD, pair, CI/CD
- Continuous improvement

### Industry / Regulatory Factors

- **Banking / Capital Markets:** BSEC quality gates; UAT sign-offs; audit logs
- **Healthcare / pharma:** quality non-negotiable
- **Public-sector:** acceptance often formal and slow

---

## 8. Common Wrong Answers & Why PMI Rejects Them

| Tempting Answer | Why Picked | Why PMI Rejects |
|---|---|---|
| "Add features to delight customer" | Going above | Gold-plating |
| "Increase end inspection" | More inspection | Prevention cheaper |
| "Hire vendor for quality" | Specialists | PM owns |
| "Skip audit to keep schedule" | Speed | Prevention loop |
| "Accept since customer hasn't complained" | Silence | Formal acceptance required |
| "Ship below DoD because sponsor hurry" | Sponsor authority | DoD team-owned |
| "In control / out of spec is acceptable" | Stable | Capability gap |
| "Pareto for RCA" | Frequency | Cause-effect for RCA |
| "Cut prevention costs" | Less spend | Non-conformance rises |

---

## 11. Exam-Day Trigger Phrases

| Trigger Phrase in Stem | Your Reflex Answer Pattern |
|---|---|
| "**Gold-plating**" | Refuse; ICC for real change |
| "**Prevention vs inspection**" | Prevention preferred |
| "**CoQ**" | Conformance + Non-Conformance |
| "**Quality audit**" | Manage Quality |
| "**Inspection**" | Control Quality |
| "**Process improvement**" | Manage Quality |
| "**DoD**" | Team-owned |
| "**Root cause**" | Cause-effect |
| "**Pareto**" | Prioritization 80/20 |
| "**Control chart**" | Process stability |
| "**Rule of seven**" | Drift signal |
| "**In control / out of spec**" | Capability gap |
| "**TDD/Pair/CI**" | Agile prevention |
| "Customer hasn't rejected yet" | Formal acceptance against criteria |

---

## 9. 10 Hardest Scenario-Based Questions

---

**Q1 — Ethics Dilemma (Predictive)**

Sponsor instructs you to ship despite three open Severity 1 defects in BSEC reporting accuracy. DoD requires zero Severity 1. Shipping exposes regulator action. What should you do FIRST?

A. Ship as instructed.
B. Refuse; document DoD and regulatory exposure; meet sponsor with trade-off and recommended path.
C. Ship and file regulatory disclosure.
D. Ship with internal audit notification only.

---

**Q2 — Agile Ceremony / Engagement**

Defects in production rising three sprints. Team blames "rushed testing." PO blames "buggy code." Retros haven't produced sustained improvement. What is the BEST action?

A. Add dedicated QA engineer.
B. Focused retrospective with cause-effect analysis; co-create specific quality experiment with team.
C. Strengthen DoD to include more test types.
D. Escalate defect rate.

---

**Q3 — FIRST Action, Conflict (Hybrid)**

QA lead reports 18% of stories had post-release defects. Dev lead disputes citing different definitions. PO wants number for steering tomorrow. What should you do FIRST?

A. Pick one measurement.
B. Quick alignment on definition of "defect"; reconcile; single agreed number for steering — even if 24-hour delay.
C. Report both.
D. Defer report.

---

**Q4 — Two Correct, Pick Best (Predictive)**

Control Chart: process in control but failing customer spec consistently. Complaints rising. Which TWO actions FIRST?

A. Investigate process capability vs spec.
B. Tighten control limits.
C. Engage customer on spec, capability, options.
D. Continue current process.
E. Submit CR to relax spec.

---

**Q5 — Ordered Sequence (Agile)**

New agile team setting up quality. Arrange:

1. Co-create DoD covering functional, non-functional, compliance.
2. Configure CI with automated tests.
3. Discuss quality principles (TDD, pair, CI) at kickoff.
4. Begin sprint 1 with quality embedded.

A. 2 → 1 → 3 → 4
B. 3 → 1 → 2 → 4
C. 1 → 2 → 3 → 4
D. 4 → 3 → 1 → 2

---

**Q6 — EXCEPT Question (Predictive)**

Which is NOT a CoQ category?

A. Prevention
B. Appraisal
C. Internal failure
D. External failure
E. Acceptance

---

**Q7 — Ethics / Honesty Hardline**

Vendor defect causes data corruption in 0.5% of transactions. Sponsor wants to release because rate is "low." Customer not told. What do you do?

A. Approve release; document.
B. Refuse; communicate defect honestly to customer with impact estimate; propose fix or scope-adjusted release.
C. Approve; vendor fixes silently next patch.
D. Approve; tell customer only if asked.

---

**Q8 — Communication Strategy (Hybrid)**

Regulators require monthly quality reports with statistical detail. PO wants real-time defect dashboard. Team finds monthly reporting burdensome. What is the BEST approach?

A. Discontinue monthly.
B. Continue manual monthly reports.
C. Automated extraction from dashboard into monthly format + real-time dashboard for PO/team.
D. Replace both with weekly summaries.

---

**Q9 — Escalation Judgment (Hybrid)**

Vendor quality below spec consistently. Two engagement attempts. Vendor promises improvement but defects continue. Contract hard to terminate. Release in 6 weeks. What is the BEST next step?

A. Continue engaging.
B. Brief sponsor + procurement with defect data, attempts, contract risk, recommended contractual escalation.
C. Cancel contract.
D. Absorb defects internally.

---

**Q10 — Multiple Response (Agile/Hybrid)**

Defects in production rising across iterations. Team under pressure for features. Retros surfaced defect trend but no sustained action. Which THREE actions MOST appropriate? (Select three.)

A. RCA on defect pattern with team.
B. Increase pressure for careful testing.
C. Renegotiate sprint commitments to allow prevention investment.
D. Replace high-defect-count members.
E. Strengthen DoD with team agreement.
F. Bonuses for zero-defect sprints.

---

## 10. Answer Key with Full Justification

---

**Q1 — Correct Answer: B**

**PMI Justification:** DoD + regulatory non-negotiable.

**Mindset Lesson:** Quality gates not waived by sponsor.

---

**Q2 — Correct Answer: B**

**PMI Justification:** RCA + team-owned experiment.

**Mindset Lesson:** Quality decline = process; fix with team, not gatekeeper.

---

**Q3 — Correct Answer: B**

**PMI Justification:** Aligned definition + reconciled number.

**Mindset Lesson:** Metrics without shared definition worthless.

---

**Q4 — Correct Answers: A and C**

**PMI Justification:** Capability analysis + customer engagement.

**Mindset Lesson:** In control / out of spec = capability gap; engage customer.

---

**Q5 — Correct Answer: B (3 → 1 → 2 → 4)**

**PMI Justification:** Principles → DoD → CI tooling → execution.

**Mindset Lesson:** Foundation before activity.

---

**Q6 — Correct Answer: E**

**PMI Justification:** Acceptance costs not a CoQ category.

**Mindset Lesson:** Memorize four CoQ categories.

---

**Q7 — Correct Answer: B**

**PMI Justification:** Honesty; proactive customer disclosure.

**Mindset Lesson:** Known defects disclosed proactively.

---

**Q8 — Correct Answer: C**

**PMI Justification:** Automation + tailoring single source.

**Mindset Lesson:** Audience tailoring with automation = sweet spot.

---

**Q9 — Correct Answer: B**

**PMI Justification:** Sponsor + procurement with data + contractual recommendation.

**Mindset Lesson:** Vendor quality failures = procurement governance.

---

**Q10 — Correct Answers: A, C, E**

**PMI Justification:**

- A: RCA.
- C: Renegotiate for prevention.
- E: Strengthen DoD.
- B: Pressure multiplies defects.
- D: Replacement avoids cause.
- F: Bonuses produce hiding.

**Mindset Lesson:** Defect rise = RCA + commitment renegotiation + DoD. Not pressure, replacement, or distorting bonuses.

---

## 12. 60-Second Recap Card

**PLAN AND MANAGE QUALITY — Exam Morning Card**

- Quality ≠ Grade. Requirements met vs feature level.
- Prevention > Inspection. Always.
- CoQ: Prevention + Appraisal (Conformance) + Internal + External Failure (Non-Conformance).
- Plan → Manage → Control Quality.
- Manage Quality = process improvement. Control = inspection.
- Gold-plating = scope creep masquerading as quality.
- DoD team-owned. Sponsor authority doesn't override.
- Cause-effect for RCA. Pareto for prioritization. Control chart for stability.
- In control / out of spec = capability gap.
- Vendor quality measured same as internal.

**Escalation one-liner to burn in:** *PMI escalates quality issues with RCA, attempts, recommendation — never hides defects, never silently complies with sponsor demands to ship below DoD or with regulator exposure.*
