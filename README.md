# 🧠 jot.ai — AI Academic Research Assistant & Contradiction Engine

> **Hackathon Track 04:** AI Academic Research Assistant  
> **Bonus Objective Accomplished:** Automatic Contradiction Detection & Disagreement Diagnostics across Literature.

---

## 📌 Overview

**jot.ai** is an institutional-grade evidence synthesis engine and research workbench designed to accelerate academic literature reviews from weeks to seconds. 

Existing research tools rely on naive "vote counting" (binary Yes/No tallies) or generate unverified "walls of text" with hallucinated citations. **jot.ai** solves this by enforcing strict academic standards (**PICO Framework & PRISMA 2020 Protocols**), performing **Claim-Level Contradiction Diagnostics**, and providing **100% Quote-Anchored Proof** directly from peer-reviewed literature.

---

## ✨ Key Features

- **🎯 PICO Query Decomposition:** Automatically breaks down complex research hypotheses into Population ($P$), Intervention ($I$), Comparator ($C$), and Outcome ($O$) parameters.
- **📚 Real Academic Literature Harvester:** Integrates with the **Semantic Scholar API** and **Unpaywall** to fetch peer-reviewed abstracts and open-access PDFs in real time.
- **📊 Structured Evidence Matrix:** Parses paper methodology, sample sizes ($N$), and statistical direction into a structured matrix categorized by **Study Rigor Tiers** (Meta-Analyses > RCTs > Observational Studies > Animal Models).
- **🔴 Contradiction & Disagreement Radar (Bonus Feature):** Identifies opposing findings across independent studies and diagnoses the *root cause* of disagreement (e.g., sample demographic variance, dosage differences, study duration).
- **🔍 100% Quote-Anchored Grounding:** Every extracted finding includes an exact, unedited sentence quote from the original text, ensuring zero LLM hallucinations.
- **📝 The "Jot Canvas" Workspace:** A split-screen interactive draft editor allowing researchers to drag-and-drop synthesized findings, verify claims in real time, and export formatted **BibTeX / Markdown** citations.

---

## 🛠️ Tech Stack

### **AI & Intelligence Engine**
* **Google AI Studio / Gemini 1.5 Flash:** High-speed LLM processing with native JSON Structured Output schemas.
* **Pydantic (v2):** Strict data contracts, schema validation, and type safety for AI payloads.

### **Backend & APIs**
* **Python 3.10+ / FastAPI:** Async backend services for data processing and API routing.
* **Semantic Scholar Graph API:** Academic paper discovery, metadata retrieval, and citation tracking.
* **Unpaywall API:** Open-access full-text PDF resolution.

### **Frontend & Interface**
* **Streamlit / React:** Interactive split-screen workbench layout with dynamic rendering.
* **Markdown & BibTeX Parsers:** Citation formatting and instant file export.

---

## ⚙️ Technical Workflow & Architecture

`jot.ai` operates on a stateful, multi-stage multi-agent pipeline:

                           ┌─────────────────────────────┐
                           │     User Query / Hypothesis │
                           └──────────────┬──────────────┘
                                          │
                                          ▼
                           ┌─────────────────────────────┐
                           │    PICO Decomposer Agent    │
                           └──────────────┬──────────────┘
                                          │
                                          ▼
                           ┌─────────────────────────────┐
                           │ Academic Paper Harvester    │
                           │  (Semantic Scholar API)     │
                           └──────────────┬──────────────┘
                                          │
                                          ▼
                           ┌─────────────────────────────┐
                           │ Structured Matrix Extractor │
                           │  (Gemini 1.5 + Pydantic)    │
                           └──────────────┬──────────────┘
                                          │
                                          ▼
                 ┌──────────────────────────────────────────────┐
                 │ Contradiction & Disagreement Engine (Bonus) │
                 │  (NLI Claim Matching & Root-Cause Diagnosis) │
                 └──────────────────────┬───────────────────────┘
                                        │
                                        ▼
                           ┌─────────────────────────────┐
                           │     The "Jot Canvas" UI     │
                           │ (Matrix + Draft Workspace)  │
                           └─────────────────────────────┘

### **Workflow Breakdown:**
1. **Query Processing:** The input query is transformed into optimized Boolean search strings and structured PICO parameters.
2. **Data Ingestion:** The harvester queries Semantic Scholar API, retrieving peer-reviewed metadata, open-access status, and abstracts.
3. **Structured Extraction:** Gemini 1.5 Flash processes the text through Pydantic schemas, extracting study rigor tier, sample size, primary outcome, effect direction (`POSITIVE`, `NEGATIVE`, `NO_EFFECT`), and exact proof quotes.
4. **Contradiction Resolution:** The engine compares extracted triplets $(Subject, Direction, Outcome)$ across all indexed studies. Opposing vectors trigger the **Contradiction Diagnostic Agent** to analyze moderating variables.
5. **Synthesis Rendering:** Data is delivered to the frontend split-view workspace for interactive editing and export.

---

