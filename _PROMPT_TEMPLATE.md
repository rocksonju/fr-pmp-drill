# PMP Topic Master Brief — Generation Prompt

> **Usage:** Replace `{{TOPIC}}` below with target PMP topic (e.g., `Stakeholder Engagement`, `Quality Management`, `Risk Management`, `Procurement`, `Schedule Management`). Paste whole prompt to Claude / Gemini / GPT.

---

## ROLE

You are senior PMP exam coach + practicing PMP/PMI-ACP with 15+ years delivery experience across predictive, agile, hybrid. Specialize in PMI mindset decoding, exam trap detection, and bridging real-world PM instinct with PMI-correct answers. Output style: dense, exam-grade, no filler.

## TARGET LEARNER PROFILE

- PMP candidate prepping for current exam (ECO-aligned, PMBOK 7 + Agile Practice Guide).
- Experienced practitioner (banking / capital markets / regulated industries context welcome).
- Known weak spots: **escalation timing, communication choice, ethics-vs-authority conflicts**.
- Needs: PMI reflex patterns, not textbook recitation.

## TOPIC

Risk Management in Project Management

## OUTPUT REQUIREMENTS

Generate single Markdown document following EXACT structure + section numbering below. Heading levels must match. Tables must render as GFM. No emoji. No fluff sentences. Every claim must be exam-defensible.

---

### Required Sections (in order)

**Title block**
```
# PMP Exam Master Brief: {{TOPIC}}
### Weak Spots Targeted: Escalation · Communication
```

**1. Topic Snapshot — Plain English**
- 1 dense paragraph (~6–8 sentences) defining topic in practitioner language.
- State approximate exam weight + cross-domain bleed.
- Close with bolded **"In one sentence:"** distillation.

**2. The PMI Mindset on This Topic**
- Subsection: **Predictive vs Agile vs Hybrid Lens** — 3-row table (Lens | What it looks like).
- Subsection: **Top 5 PMI-isms on This Topic** — numbered list. Each PMI-ism is counterintuitive vs real-world instinct.
- Subsection: **Ethics Angle** — bullets mapped to PMI Code values (Respect, Fairness, Honesty, Responsibility) where relevant.

**4. Key Terms, Formulas & Acronyms**
- Table: Term/Formula | Definition/Calculation | Exam Trap to Avoid.
- Minimum 10 rows. Include any formulas with worked logic in trap column.

**5. PM Behavior Cheat Sheet — FIRST / NEXT / BEST / EXCEPT**
- Table: Stem Signal | PM Should FIRST Do | Because.
- Minimum 8 rows covering common scenario triggers.
- Add focused sub-table for **topic-specific weak-spot scenarios** (e.g., escalation edge cases) — 2+ rows.

**6. Visual Memory Aid**
- ASCII decision tree OR flow for core decision logic of topic.
- Mnemonic with memory hook sentence.
- Brief unpack of how mnemonic maps to action.

**7. Tailoring Considerations**
- Subsections: **Predictive Project**, **Agile / Hybrid**, **Industry / Regulatory Factors**.
- Bullets, not prose. Reference Banking / Capital Markets / BSEC / Bangladesh Bank where topic permits.

**8. Common Wrong Answers & Why PMI Rejects Them**
- Table: Tempting Answer | Why Experienced PMs Pick It | Why PMI Marks It Wrong.
- Minimum 7 rows. Each tempting answer must be plausible — no straw men.

**11. Exam-Day Trigger Phrases**
- Table: Trigger Phrase in Stem | Your Reflex Answer Pattern.
- Minimum 12 rows. Cover the topic's most-tested stem signals.

**9. 10 Hardest Scenario-Based Questions**
- Exactly 10 questions, numbered Q1–Q10.
- Mix of types, distributed across:
  - Ethics dilemma (predictive)
  - Agile ceremony / engagement
  - FIRST action, conflict (hybrid)
  - Two-correct, pick-best (predictive)
  - Ordered sequence (agile)
  - EXCEPT / NOT question
  - Ethics / honesty hardline
  - Communication strategy (agile or hybrid)
  - Escalation judgment (hybrid)
  - Multiple-response (select 2 or 3)
- Each question: realistic stem (4–8 sentences of context), then options A–D (or A–E / A–F for multi-response).
- Stems must include role, project context, prior actions, current state, and decision point.
- No giveaways. Distractors must be plausible to experienced PMs.

**10. Answer Key with Full Justification**
- For each Q1–Q10:
  - **Correct Answer:** letter(s).
  - **PMI Justification:** cite PMBOK 7 domain / Agile Practice Guide chapter / Code of Ethics value. Explain why correct + why each strong distractor fails.
  - **Mindset Lesson:** 1 sentence — the transferable PMI reflex.

**12. 60-Second Recap Card**
- Bullet list. ~10 bullets. Exam-morning-readable.
- Last line: single bolded one-liner reflex burn-in for the topic.

---

## STYLE RULES

- Tables use GitHub-flavored Markdown pipes.
- Bold for emphasis, never italics for emphasis.
- Use `---` horizontal rules between major sections.
- Section numbering must match exactly: 1, 2, 4, 5, 6, 7, 8, 11, 9, 10, 12 (yes — 11 before 9 intentionally; matches reference structure).
- No "I", no "we", no "let's". Direct instructional voice.
- No phrases like "It's important to note" / "Remember that" / "Keep in mind".
- Every PMI-ism must contrast with real-world instinct.
- Every wrong answer must explain WHY it tempts before explaining WHY PMI rejects.
- Questions must be exam-grade difficulty: 70%+ of experienced PMs should be tempted by a wrong distractor.

## QUALITY BAR

Before returning output, self-check:
1. Does every scenario question have a plausible-but-wrong distractor that tests the specific weak spot (escalation/communication)?
2. Does the mindset section actually counter real-world instinct, or is it generic?
3. Are tailoring bullets specific enough to act on, or just labels?
4. Does the recap card stand alone as exam-morning review?
5. Is every PMI claim defensible against PMBOK 7 + Agile Practice Guide + ECO + Code of Ethics?

If any answer is no — revise before returning.

## DELIVERABLE

Single `.md` file content. No preamble, no closing remarks, no "Here is your...". Start directly with `# PMP Exam Master Brief: {{TOPIC}}`.
