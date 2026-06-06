# PMP Exam Master Brief: Assess and Manage Risks (Process · Task 3)

---

## 1. Topic Snapshot — Plain English

Assessing and managing risks is the disciplined practice of identifying uncertainty (threats and opportunities), analyzing it, planning responses, and adapting continuously. PMI treats both threats AND opportunities — ignoring upside is a failure. Topics include risk register, risk report, qualitative + quantitative analysis (EMV, decision tree, Monte Carlo), response strategies (Avoid/Transfer/Mitigate/Accept/Escalate for threats; Exploit/Share/Enhance/Accept/Escalate for opportunities), reserves (contingency vs management), and risk-adjusted backlog (agile). The Process domain is 50% of the exam; risk is one of the highest-weighted single processes (~12%). In real projects, risk management is a planning workshop and forgotten; on the exam, PMI rewards proactive, continuous risk management with proportionate responses.

**In one sentence:** This topic is about systematic anticipation and continuous management of uncertainty — threats and opportunities — so nothing material surprises the sponsor.

---

## 2. The PMI Mindset on This Topic

### Predictive vs Agile vs Hybrid Lens

| Lens | Risk Management Looks Like |
|---|---|
| **Predictive** | Risk register, risk report, qualitative + quantitative analysis, reserves, periodic reviews |
| **Agile** | Risk-adjusted backlog, spikes for unknowns, retrospectives, shortened exposure window |
| **Hybrid** | Register + agile ceremonies; iteration-level review; release-level reserves |

### Top 5 PMI-isms on This Topic

1. **Opportunities are risks too.** Both sides managed.
2. **Risk owner ≠ always PM.** Owner = authority to act on response.
3. **Contingency reserve = PM controls. Management reserve = sponsor.** Crossing line without authorization = ethics failure.
4. **A materialized risk = issue.** Different log.
5. **Escalate when risk exceeds threshold or authority.** Not when scared.

### Ethics Angle

- **Honesty:** Never downgrade or hide known risks.
- **Responsibility:** PM owns risk process even when individual risks owned elsewhere.
- **Respect:** Risks raised by team logged, not filtered.
- **Fairness:** Reserves allocated on criteria, not politics.

---

## 4. Key Terms, Formulas & Acronyms

| Term / Formula | Definition / Calculation | Exam Trap to Avoid |
|---|---|---|
| **Risk Register** | Living document of identified risks | Trap: planning artifact only |
| **Risk Report** | Summary for sponsor/stakeholders | Trap: confusing with register |
| **P × I Matrix** | Qualitative ranking | Trap: ignoring combined score |
| **EMV** | Probability × Impact ($) | Trap: forgetting threats negative |
| **Decision Tree** | EMV across branches | Trap: ignoring sunk cost |
| **Monte Carlo** | Probabilistic simulation; P50/P80 | Trap: P50 = "the plan" |
| **Sensitivity / Tornado** | Variables that drive outcome | Trap: confusing with critical path |
| **Contingency Reserve** | Known-unknowns; PM controls; in baseline | Trap: confusing with management |
| **Management Reserve** | Unknown-unknowns; sponsor controls; outside baseline | Trap: PM using without authorization |
| **Risk Appetite / Threshold / Tolerance** | Appetite = overall; Threshold = trigger; Tolerance = variance | Trap: using interchangeably |
| **Threat Strategies** | Avoid · Transfer · Mitigate · Accept · Escalate | Trap: forgetting Escalate |
| **Opportunity Strategies** | Exploit · Share · Enhance · Accept · Escalate | Trap: only listing four |
| **Secondary Risk** | New risk from response | Trap: ignoring |
| **Residual Risk** | Leftover after response | Trap: assuming response = elimination |
| **Workaround** | Unplanned response to occurred risk | Trap: calling it contingency |
| **Risk-Adjusted Backlog** | Agile prioritization by risk + value | Trap: pure value ordering |
| **Spike** | Time-boxed uncertainty reduction | Trap: treating as failed work |

---

## 5. PM Behavior Cheat Sheet — FIRST / NEXT / BEST / EXCEPT

| Stem Signal | PM Should FIRST Do | Because |
|---|---|---|
| **New risk** identified | Log + assess P × I + assign owner | Identification ≠ management |
| Risk **occurred** | Move to issue log; execute response | Different log |
| Response creates **new risk** | Register secondary risk with own response | Track secondaries |
| **Contingency exhausted** | Reassess; document; request management reserve | Don't silently absorb |
| Sponsor asks for **risk update** | Risk report (summary) | Register is internal |
| Team member raises **risk you disagree with** | Log; analyze | Suppression weakens register |
| Quantitative shows **P80 > committed date** | Update report; brief sponsor; propose response | Hiding gap dishonest |
| **Opportunity** emerges | Apply Exploit/Share/Enhance/Accept | Don't skip opportunity |
| Risk owner **cannot act** | Re-engage; reassign or escalate | Ownership gap |
| **Regulatory** risk identified late | Log; escalate per governance | Regulatory ≈ threshold exceeded |

**Escalation-Specific Scenarios:**

| Stem Signal | Correct Escalation Logic |
|---|---|
| Risk impact exceeds PM authority/threshold (requires management reserve, strategic decision) | Escalate to sponsor with risk report, recommended response, decision required |
| Risk belongs to parent program/portfolio | Use Escalate strategy explicitly; transfer ownership upward |

---

## 6. Visual Memory Aid

### Risk Response Decision Tree

```text
RISK IDENTIFIED
        │
        ▼
THREAT or OPPORTUNITY?
   ┌────┴────┐
   ▼         ▼
 THREAT   OPPORTUNITY
   │         │
   ▼         ▼
Outside PM authority/threshold?
   YES → ESCALATE (both)
   NO  ↓
   ▼
Eliminate cause?
   YES → AVOID (threat) / EXPLOIT (opp)
   NO  ↓
   ▼
Third party handle?
   YES → TRANSFER (threat) / SHARE (opp)
   NO  ↓
   ▼
Reduce P/I (threat) or increase (opp)?
   YES → MITIGATE / ENHANCE
   NO  ↓
   ▼
ACCEPT (active = contingency plan; passive = monitor)
        │
        ▼
Log response, assign owner, set trigger, update report
```

### Mnemonic: **A-T-M-A-E** (both sides)

> **Threats:** Avoid · Transfer · Mitigate · Accept · Escalate
> **Opportunities:** Exploit · Share · Enhance · Accept · Escalate

Memory hook: **"ATM cash always escalates."**

---

## 7. Tailoring Considerations

### Predictive Project

- Formal register + report
- Quantitative analysis on complex projects
- Reserves at planning
- Periodic risk reviews

### Agile / Hybrid

- Risk-adjusted backlog
- Spikes
- Retrospective surfaces emerging risks
- Information radiators (risk burndown)

### Industry / Regulatory Factors

- **Banking / Capital Markets:** BSEC, Bangladesh Bank exposure usually exceeds PM threshold
- Operational-risk frameworks pre-exist; align
- Audit trail mandatory
- **Government / state-owned:** political risks dominate

---

## 8. Common Wrong Answers & Why PMI Rejects Them

| Tempting Answer | Why Experienced PMs Pick It | Why PMI Marks It Wrong |
|---|---|---|
| "Escalate immediately to sponsor" | Better safe | Default escalation = abdication |
| "Add to issue log" | Tracking | Risks ≠ issues |
| "Use management reserve without authorization" | Reserves exist | PM has no authority |
| "Accept passively" | Valid strategy | Documented response + monitoring required |
| "Run Monte Carlo before any response" | Rigor | Wrong tool for individual response |
| "Remove risk after response" | Tidy | Residual remains |
| "Inform sponsor only at 50%+ probability" | Material only | Proactive required |
| "Transfer via internal reassignment" | Transfer | Transfer = third party (insurer/vendor) |
| "Pad schedule personally" | Senior pad | Hidden risk = transparency breach |

---

## 11. Exam-Day Trigger Phrases

| Trigger Phrase in Stem | Your Reflex Answer Pattern |
|---|---|
| "**New risk**" | Log + analyze + owner + response + communicate |
| "**Risk occurred**" | Issue log; execute response |
| "**Management reserve**" use | Almost always wrong without approval |
| "Contingency **exhausted**" | Document; escalate for management reserve |
| "**Monte Carlo**" | Overall exposure, not individual response |
| "Team **disagrees** with risk" | Log anyway |
| "**Opportunity**" | Exploit/Share/Enhance/Accept |
| "Risk owner is **PM** for every risk" | Red flag |
| "Risk **outside scope**" | Escalate strategy |
| "**Regulatory** risk" | Escalate |
| "**Spike**" | Time-boxed learning |
| "**Risk-adjusted backlog**" | Agile prioritization |
| "Sponsor asks **risk update**" | Risk report not register |
| "Risk **threshold exceeded**" | Trigger for escalation/response |

---

## 9. 10 Hardest Scenario-Based Questions

---

**Q1 — Ethics Dilemma (Predictive)**

Sponsor instructs you to downgrade a critical regulatory risk rating to avoid alarming the board ahead of annual review. The current rating is supported by analysis. What should you do FIRST?

A. Downgrade as instructed.
B. Refuse; present analysis-supported rating; privately discuss sponsor's concerns and propose addressing them transparently with the board.
C. Escalate to ethics committee.
D. Keep rating but omit detail from report.

---

**Q2 — Agile Ceremony / Engagement**

Team has identified new risks every sprint planning but rarely closes or revisits in retrospectives. PO has been re-raising same risks in demos. What is the BEST action?

A. Replace retrospective with weekly risk review.
B. Standing risk-review item in retrospective; surface risk status in sprint reviews.
C. Move risk tracking to PM register only.
D. Escalate to sponsor.

---

**Q3 — FIRST Action, Conflict (Hybrid)**

CRO and Head of Retail disagree on response to fraud risk. CRO wants aggressive mitigation (6-week delay). Retail wants accept with monitoring (preserves launch). Sponsor asked you to make the call. What should you do FIRST?

A. Decide in favor of CRO.
B. Facilitate joint working session with risk owner; quantify residual risk under each option; align on recommendation; present to sponsor.
C. Accept with monitoring.
D. Escalate back to sponsor.

---

**Q4 — Two Correct, Pick Best (Predictive)**

Contingency reserve depleted 70%; three identified risks with planned mitigations not actioned; sponsor review in 5 business days. Which TWO actions FIRST?

A. Reassess remaining contingency vs outstanding risk exposure; prepare forecast for sponsor.
B. Apply for management reserve immediately.
C. Activate planned mitigations for three unactioned risks.
D. Reclassify unactioned risks as accepted.
E. Suspend mitigation spend.

---

**Q5 — Ordered Sequence (Agile)**

Sprint review reveals unidentified compliance risk that could block release. Arrange:

1. Add time-boxed spike to investigate.
2. Log risk in register/backlog with P × I.
3. Update release plan based on spike outcome.
4. Facilitate conversation between PO, compliance stakeholder, team.

A. 2 → 4 → 1 → 3
B. 4 → 2 → 1 → 3
C. 1 → 2 → 4 → 3
D. 2 → 1 → 4 → 3

---

**Q6 — EXCEPT Question (Predictive)**

Which is NOT a valid output of Plan Risk Responses?

A. Updates to risk register with response strategies and owners
B. Change requests
C. Project documents updates
D. Risk audit findings
E. Updates to project management plan

---

**Q7 — Ethics / Honesty Hardline**

Architect privately tells you a known design risk is materially under-rated; could cause regulator failure. Reassessing changes status from green to amber. Sponsor presents to board next week. What do you do?

A. Wait until after board presentation.
B. Reassess immediately; update risk report; inform sponsor before board with accurate information.
C. Get second opinion before reassessing.
D. Footnote residual risk only.

---

**Q8 — Communication Strategy (Hybrid)**

Hybrid capital-markets project. Register has 142 active risks. Sponsor finds weekly risk emails noisy. Regulators demand granular monthly. Team uses real-time risk dashboard. What is the BEST approach?

A. Send full register weekly to all.
B. Stop emails entirely; rely on dashboard.
C. Risk report (top risks + trends) for sponsor; detailed monthly for regulators; dashboard live for all.
D. Reduce register to top 10.

---

**Q9 — Escalation Judgment (Hybrid)**

New cybersecurity risk: impact USD 4M, probability 30%. Contingency reserve USD 1.2M. PM authority USD 500K. Two facilitation attempts with security stakeholder and vendor produced no mitigation. What is the BEST next step?

A. Continue facilitating.
B. Brief sponsor with risk report, EMV (USD 1.2M), facilitation attempts, recommended response requiring sponsor decision.
C. Accept and add as residual.
D. Use contingency for partial mitigation; escalate only if fails.

---

**Q10 — Multiple Response (Agile/Hybrid)**

PM notices risk identification dropped sharply over last four sprints. Stakeholders stopped raising concerns. Risk-adjusted backlog not updated for two iterations. Which THREE actions MOST appropriate? (Select three.)

A. Investigate why risk identification dropped before corrective action.
B. Mandate each team member submit two risks per sprint.
C. Standing risk-review in retrospective; surface in sprint review.
D. Replace agile ceremonies with monthly risk workshop.
E. Work with PO to revisit risk-adjusted backlog; pull high-risk items earlier.
F. Escalate decline to sponsor; request mandatory reporting.

---

## 10. Answer Key with Full Justification

---

**Q1 — Correct Answer: B**

**PMI Justification:** Honesty principle; analysis-supported rating held.

**Mindset Lesson:** Risk rating integrity not waived by sponsor pressure.

---

**Q2 — Correct Answer: B**

**PMI Justification:** Standing risk in retro + review item in standard ceremonies.

**Mindset Lesson:** Risk lives in ceremonies, not parallel process.

---

**Q3 — Correct Answer: B**

**PMI Justification:** Joint quantification + recommendation.

**Mindset Lesson:** Risk-response choice is data-driven recommendation.

---

**Q4 — Correct Answers: A and C**

**PMI Justification:** Reassess + activate planned mitigations.

**Mindset Lesson:** Reserve stress = forecast + mitigation activation.

---

**Q5 — Correct Answer: B (4 → 2 → 1 → 3)**

**PMI Justification:** Align → log → spike → update plan.

**Mindset Lesson:** Alignment before logging; spike before plan change.

---

**Q6 — Correct Answer: D**

**PMI Justification:** Audit findings are Monitor Risks output.

**Mindset Lesson:** Distinguish Plan vs Monitor outputs.

---

**Q7 — Correct Answer: B**

**PMI Justification:** Honesty; reassess immediately; inform before board.

**Mindset Lesson:** Material risk reassessment can't wait for calendar.

---

**Q8 — Correct Answer: C**

**PMI Justification:** Tailored audience communication.

**Mindset Lesson:** Communication tailoring = single source, multiple formats.

---

**Q9 — Correct Answer: B**

**PMI Justification:** EMV exceeds authority; Escalate strategy with data.

**Mindset Lesson:** Escalate when risk exceeds authority/threshold, with data.

---

**Q10 — Correct Answers: A, C, E**

**PMI Justification:**

- A: Diagnose before intervention.
- C: Standing retro + review.
- E: Risk-adjusted backlog reorder.
- B: Quota produces noise.
- D: Replaces ceremonies.
- F: Mandatory reporting is coercive.

**Mindset Lesson:** Risk identification decline = diagnose + ceremony embed + backlog reorder.

---

## 12. 60-Second Recap Card

**ASSESS AND MANAGE RISKS — Exam Morning Card**

- Threats AND Opportunities. Both managed.
- ATMAE: Avoid · Transfer · Mitigate · Accept · Escalate (threats).
- ESEAE: Exploit · Share · Enhance · Accept · Escalate (opportunities).
- Risk → Issue when occurred. Different log.
- Contingency = PM. Management = sponsor.
- Risk owner ≠ always PM. By authority.
- Risk register internal; risk report sponsor communication.
- EMV individual; Monte Carlo overall exposure.
- Agile: risk-adjusted backlog + spike + retrospective.
- Escalate when exceeds authority/threshold, with data.

**Escalation one-liner to burn in:** *PMI escalates risks crossing authority or threshold with risk report, EMV, response options — never to feel safe, never to delay decisions, always with documentation.*
