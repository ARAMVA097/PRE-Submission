# Interactive Thesis Webapp — PRD

## Original Problem Statement
Build a single-page interactive thesis webapp from the provided report and blueprint, preserving a unified story from cloud complexity to integrated doctoral contribution. The app must include: fixed left navigation, top progress + breadcrumb, section-by-section thesis storytelling, deep RO1/RO2/RO3 modules, integration engine, evidence dashboard, limitations/future, and final thesis synthesis.

Core thesis anchor:
**Trust and QoS in cloud computing are emergent outcomes of coordinated governance, stability, and assurance mechanisms.**

## User Choices Captured
- Content fidelity: **1-b** (light polish for UI readability)
- Navigation behavior: **2-c** (smooth scroll + richer animations on key diagrams)
- Evidence detail: **3-c** (detailed publication panel)

## Architecture Decisions
- **Frontend-only primary implementation** on React single-page structure.
- **Section-based navigation system** using fixed left rail and scroll-aware active section tracking (IntersectionObserver).
- **State-driven interaction model** for objective highlighting across modules (RO1/RO2/RO3).
- **Dark research visual system** with indigo/teal/blue accents, grid texture, node-edge visuals, and restrained motion.
- **Componentized design** using thesis-specific components and shared reusable UI helpers.
- **Shadcn/Radix components** used for tabs, accordion, tooltip, progress, dialog, and buttons.

## User Personas
1. **Thesis Examiner / Committee Member**
   - Needs coherent derivation from challenge -> gap -> objective -> evidence -> contribution.
2. **Faculty / Academic Audience**
   - Needs methodological clarity, objective interdependence, and publication maturity visibility.
3. **Public Defense Audience**
   - Needs concise storytelling, visual intuition, and key outcomes without dense overload.

## Core Requirements (Static)
- Left fixed nav with all required sections.
- Top status area with current section label, mini-breadcrumb, and progress bar.
- Interactive storytelling sequence from thesis identity to final contribution.
- RO1/RO2/RO3 deep modules with methods, metrics, and publication status.
- Integration section proving unified research program (not independent papers).
- Evidence dashboard with datasets, evaluation principles, and publication filters.
- Limitations + future work section for academic balance.
- Final synthesis board with readiness statement.
- Tooltips/glossary, expandable content blocks, and strong responsive behavior.

## What Has Been Implemented (with dates)
### 2026-03-23
- Replaced starter template with full **interactive thesis single-page app**.
- Implemented all major sections:
  - Home/Hero thesis map
  - Why This Thesis challenge triangle
  - Literature and gap transformation cards
  - Problem pipeline + objective derivation
  - Objective triangle with center-premise modal
  - RO1, RO2, RO3 module deep-dives
  - Integration cycle
  - Evidence dashboard
  - Limitations and future work
  - Final contribution synthesis panel
- Implemented shared components:
  - SideNav, BreadcrumbBar, MetricCard, ExpandablePanel, GlossaryTooltip,
    PublicationTimeline, DatasetCard
- Added rich interactions:
  - Smooth section navigation
  - Objective-linked highlighting across sections
  - Tabs/toggles/scrubbers/filtering/model cards/modal behavior
- Added responsive/mobile adjustments and resolved horizontal overflow bug.
- Fixed objective-triangle center modal interaction bug (z-index/pointer-events).

## Validation Summary
- JavaScript lint: **passed** (no issues).
- Screenshot-driven manual interaction validation: **completed**.
- Testing agent run completed; high-priority issues fixed:
  - Objective center modal not opening -> **fixed**
  - Mobile horizontal overflow -> **fixed**

## Prioritized Backlog

### P0 (Must-do next)
- Add section-level deep-link URLs/hash synchronization for direct sharing.
- Add subtle entrance stagger animations per section load state.
- Add accessibility pass for keyboard-only navigation and ARIA tuning.

### P1 (Important)
- Split large stylesheet into module-scoped style files for maintainability.
- Add publication card expandable abstracts/notes per item.
- Add optional print-friendly thesis summary mode for committee handouts.

### P2 (Nice-to-have)
- Add animated edge-tracing visualization for cross-objective dependencies.
- Add "presentation mode" with guided autoplay narration states.
- Add downloadable snapshot deck export (section screenshots).

## Next Task List
1. Implement deep-linkable section hashes + objective query state.
2. Add accessibility and keyboard interaction enhancements.
3. Modularize CSS into per-component files.
4. Refine motion timings and add transition presets for presentation flow.

