# PMP Exam Master Brief: Manage Project Artifacts (Process · Task 12)

---

## 1. Topic Snapshot — Plain English

Managing project artifacts is the discipline of producing, versioning, controlling access to, and archiving project documents and product configurations — so the team and stakeholders always work from the current authorized version, and audit trails are intact. PMI distinguishes configuration management (versioning of artifacts and product) from change management (process for change). Topics include configuration management plan, artifact inventory, versioning, access control, traceability, document approval, and archive. The Process domain is 50% of the exam; artifacts threads into integration, change, and quality. In real projects, multiple versions float around; on the exam, PMI rewards rigorous configuration control.

**In one sentence:** This topic is about producing, versioning, controlling, and archiving project artifacts so everyone works from the authorized current version.

---

## 2. The PMI Mindset on This Topic

### Predictive vs Agile vs Hybrid Lens

| Lens | Artifact Management Looks Like |
|---|---|
| **Predictive** | Configuration management plan; document versioning; formal approval; archive |
| **Agile** | Lightweight artifacts; product code as primary; CI/CD ensures version control |
| **Hybrid** | Formal docs + lightweight artifacts; CI/CD for product |

### Top 5 PMI-isms on This Topic

1. **One authorized version at a time.**
2. **Configuration management ≠ change management.** Versions vs process.
3. **Traceability required.** Requirements → design → code → test → acceptance.
4. **Access control prevents drift.**
5. **Archive at closeout.** Records retention.

### Ethics Angle

- **Honesty:** Artifacts reflect actual state.
- **Responsibility:** Configuration control owned.
- **Fairness:** Access by role, not politics.
- **Respect:** Stakeholder artifacts versioned and acknowledged.

---

## 4. Key Terms, Formulas & Acronyms

| Term / Formula | Definition / Calculation | Exam Trap to Avoid |
|---|---|---|
| **Configuration Management Plan** | Defines how artifacts/product versions controlled | Trap: confusing with change |
| **Configuration Item (CI)** | Element under config control | Trap: undefined |
| **Baseline Document** | Approved version of artifact | Trap: confusing with project baseline |
| **Versioning** | Sequential numbering of artifact versions | Trap: ad-hoc |
| **Access Control** | Who can read/edit/approve | Trap: open access |
| **Traceability** | Linked requirements through deliverables | Trap: broken chain |
| **Document Repository** | Storage for artifacts | Trap: scattered |
| **Approval Workflow** | Sign-off process for artifacts | Trap: ad-hoc |
| **Archive** | Long-term retention at closeout | Trap: forgetting |
| **Records Retention** | Required preservation period | Trap: ignoring regulator |
| **CI/CD (Agile)** | Continuous integration / delivery | Trap: confusing with config mgmt |

---

## 5. PM Behavior Cheat Sheet — FIRST / NEXT / BEST / EXCEPT

| Stem Signal | PM Should FIRST Do | Because |
|---|---|---|
| **Multiple versions** floating | Identify authorized; archive others; communicate | One source of truth |
| **Configuration plan** missing | Create; align with change mgmt plan | Foundation |
| **Artifact** unapproved but in use | Surface; obtain approval; document | Unapproved = drift |
| **Access** unauthorized | Audit; restore controls | Access drift |
| **Traceability** broken | Restore links; identify gaps | Audit trail |
| Sponsor asks **current version** | Provide authorized; explain version | Source of truth |
| **Audit** approaching | Verify configuration state matches records | Audit readiness |
| **Closeout** approaching | Archive per records retention | Retention |
| **Product artifacts (code)** | CI/CD ensures version | Tool support |
| **Vendor artifacts** | Integrate into configuration plan | Vendor in scope |

**Escalation-Specific Scenarios:**

| Stem Signal | Correct Escalation Logic |
|---|---|
| Unauthorized version released or audit failure | Brief sponsor + audit/compliance with breach, impact, recovery |
| Records retention obligation cannot be met | Brief sponsor + legal + compliance |

---

## 6. Visual Memory Aid

### Configuration Management Flow

```text
ARTIFACT CREATED
        │
        ▼
Configuration plan: how versioned, controlled, approved
        │
        ▼
Version assigned (e.g., v1.0)
        │
        ▼
Approval workflow → Baseline version
        │
        ▼
Access control: read/edit/approve roles
        │
        ▼
Use; change → new version through change mgmt + config mgmt
        │
        ▼
Traceability link maintained (requirements → deliverables)
        │
        ▼
Archive at closeout per records retention
```

### Mnemonic: **V-A-A-T-A**

> **V**ersion
> **A**pprove (baseline)
> **A**ccess control
> **T**raceability
> **A**rchive

Memory hook: **"VAATA — version, approve, access, trace, archive."**

---

## 7. Tailoring Considerations

### Predictive Project

- Formal config mgmt plan
- Document repository structured

### Agile / Hybrid

- Lightweight artifacts
- CI/CD for product
- Code is the primary artifact

### Industry / Regulatory Factors

- **Banking / Capital Markets:** records retention often 7+ years
- BSEC / Bangladesh Bank: artifact integrity audited
- **Public-sector:** records retention by law

---

## 8. Common Wrong Answers & Why PMI Rejects Them

| Tempting Answer | Why Picked | Why PMI Rejects |
|---|---|---|
| "Multiple versions OK as long as content matches" | Pragmatism | Drift inevitable |
| "Skip approval workflow for speed" | Speed | Unauthorized state |
| "Open access for collaboration" | Empowerment | Drift |
| "Archive only what was used" | Pragmatism | Retention rules |
| "Skip traceability for agile" | Lightweight | Audit + quality |
| "Configuration mgmt = change mgmt" | Similar | Different |

---

## 11. Exam-Day Trigger Phrases

| Trigger Phrase in Stem | Your Reflex Answer Pattern |
|---|---|
| "**Multiple versions**" | Identify authorized; archive others |
| "**Configuration management**" | Versioning of artifacts |
| "**Traceability**" | Requirements through deliverables |
| "**Access control**" | Role-based |
| "**Approval workflow**" | Documented |
| "**Records retention**" | Per regulation |
| "**Archive**" | Closeout activity |
| "**CI/CD**" | Continuous integration / delivery |
| "**Audit**" approach | Verify config state matches records |

---

## 9. 10 Hardest Scenario-Based Questions

---

**Q1 — Ethics Dilemma (Predictive)**

Sponsor instructs you to backdate an artifact version to make audit timeline look favorable. What should you do FIRST?

A. Backdate.
B. Refuse; surface ethics + audit risk; propose explaining true timeline with rationale to auditor.
C. Backdate and document instruction.
D. Escalate to HR.

---

**Q2 — Agile Ceremony / Engagement**

Team has several documents in shared drive; some outdated. Multiple stakeholders confused. What is the BEST action?

A. Continue as-is.
B. Identify current authorized versions; archive outdated; communicate authorized location; lightweight versioning going forward.
C. Delete all old versions.
D. Send everyone full drive.

---

**Q3 — FIRST Action, Conflict (Hybrid)**

Vendor uses different versioning convention than your team. Confusion. What should you do FIRST?

A. Force vendor to switch.
B. Engage vendor; agree on shared convention or mapping; document in configuration plan.
C. Accept vendor convention.
D. Escalate to procurement.

---

**Q4 — Two Correct, Pick Best (Predictive)**

Audit approaching in 2 weeks. Configuration state has drifted from records. Which TWO actions FIRST?

A. Reconcile current state with records; identify gaps.
B. Hide drift from auditor.
C. Brief sponsor with gap; plan remediation; document.
D. Cancel audit.
E. Backdate to fix.

---

**Q5 — Ordered Sequence (Predictive)**

Setting up configuration management. Arrange:

1. Define access control roles and approval workflow.
2. Identify configuration items.
3. Create versioning convention.
4. Establish traceability links.

A. 2 → 3 → 1 → 4
B. 1 → 2 → 3 → 4
C. 4 → 3 → 2 → 1
D. 3 → 2 → 1 → 4

---

**Q6 — EXCEPT Question (Predictive)**

Which is NOT typically a component of configuration management?

A. Versioning
B. Approval workflow
C. Access control
D. Traceability
E. Cost variance reporting

---

**Q7 — Ethics / Honesty Hardline**

You discover unauthorized version of compliance artifact was used for a regulator submission 3 months ago. Errors in the unauthorized version may have caused incorrect submission. What do you do?

A. Hide.
B. Immediately brief sponsor + compliance officer; assess impact; correct submission with regulator if material; document.
C. Submit corrected version silently.
D. Wait for regulator to ask.

---

**Q8 — Communication Strategy (Hybrid)**

Stakeholders confused about which artifact version is current. What is the BEST approach?

A. Email full list weekly.
B. Maintain accessible artifact registry / repository with version status; communicate the registry as source of truth.
C. Stop versioning.
D. Send daily detail.

---

**Q9 — Escalation Judgment (Hybrid)**

Records retention obligation requires 7-year retention. Storage being decommissioned in 3 months. Solution not in place. What is the BEST next step?

A. Lose records.
B. Brief sponsor + legal + IT with retention obligation, timeline, options (alternate storage, migration); request resource decision.
C. Use unapproved cloud storage.
D. Compress and delete.

---

**Q10 — Multiple Response (Agile/Hybrid)**

Project closeout approaching. Multiple artifacts in various states. Some unapproved. Records retention applies. Which THREE actions MOST appropriate? (Select three.)

A. Identify all artifacts; reconcile state to authorized versions.
B. Skip closeout activities; team needed elsewhere.
C. Obtain final approvals where required.
D. Discard all artifacts to start fresh.
E. Archive per records retention policy.
F. Skip archive for speed.

---

## 10. Answer Key with Full Justification

---

**Q1 — Correct Answer: B**

**PMI Justification:** Honesty principle.

**Mindset Lesson:** Sponsor pressure does not waive Honesty in records.

---

**Q2 — Correct Answer: B**

**PMI Justification:** Identify authorized + archive + communicate.

**Mindset Lesson:** Drift fixed by surfacing + communication.

---

**Q3 — Correct Answer: B**

**PMI Justification:** Mapping convention.

**Mindset Lesson:** Vendor versioning addressed through mapping.

---

**Q4 — Correct Answers: A and C**

**PMI Justification:** Reconcile + brief + remediate.

**Mindset Lesson:** Audit gap surfaced + remediated openly.

---

**Q5 — Correct Answer: A (2 → 3 → 1 → 4)**

**PMI Justification:** Identify CIs → versioning → access + approval → traceability.

**Mindset Lesson:** Foundation before workflow.

---

**Q6 — Correct Answer: E**

**PMI Justification:** Cost variance is EVM, not config mgmt.

**Mindset Lesson:** Distinguish process domains.

---

**Q7 — Correct Answer: B**

**PMI Justification:** Honesty + Responsibility — surface immediately.

**Mindset Lesson:** Unauthorized version with regulator impact surfaced immediately.

---

**Q8 — Correct Answer: B**

**PMI Justification:** Registry as single source.

**Mindset Lesson:** Version confusion fixed by accessible registry.

---

**Q9 — Correct Answer: B**

**PMI Justification:** Brief sponsor + legal + IT with options.

**Mindset Lesson:** Retention obligations escalated with options.

---

**Q10 — Correct Answers: A, C, E**

**PMI Justification:**

- A: Reconcile state.
- C: Final approvals.
- E: Archive per retention.
- B: Skip closeout.
- D: Discard.
- F: Skip archive.

**Mindset Lesson:** Closeout artifacts = reconcile + approve + archive.

---

## 12. 60-Second Recap Card

**MANAGE PROJECT ARTIFACTS — Exam Morning Card**

- VAATA: Version · Approve · Access control · Traceability · Archive.
- One authorized version at a time.
- Configuration mgmt ≠ change mgmt. Versions vs process.
- Traceability: requirements through deliverables.
- Access control prevents drift.
- Records retention per regulation.
- CI/CD ensures product version control.
- Closeout includes archive.
- Unauthorized versions with regulator impact = immediate escalation.
- Vendor artifacts integrated into config plan.

**Escalation one-liner to burn in:** *PMI escalates artifact integrity issues with audit risk and recovery plan — never backdates, never hides drift, never skips records retention.*
