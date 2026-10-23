# AGENTS.md — Kopi-In Inventory Workspace

## Project contract
This repository is the front-end-only baseline for the Cafe Kopi-In stock and inventory management application. `docs/SOT.md` is the source of truth (SOT). If instructions conflict, follow this order:

1. Explicit user request in the current task
2. `docs/SOT.md`
3. This `AGENTS.md`
4. Existing implementation conventions

## Scope guardrails
- Use React + Vite + Tailwind CSS.
- Use local dummy data only unless the user explicitly authorizes backend work.
- Do not add API, database, real authentication, server, or deployment configuration in this phase.
- Do not add POS, accounting, payroll, recipe costing, procurement approvals, or unrelated modules.
- Do not claim client-side role selection is secure authorization.
- Preserve the coffee-brown / near-black / warm-neutral visual identity.
- Keep all visible interface copy in Indonesian unless a technical term is conventional.

## Implementation rules
- Use functional React components and hooks.
- Reuse existing UI primitives before creating a new one.
- Keep initial dummy records in `src/data.js`.
- Keep UI state local to React. Persistence across reloads is not required.
- Use Tailwind utilities; avoid introducing a second styling system.
- Use Lucide React for icons and Recharts for existing chart patterns.
- Use semantic HTML, labels for form fields, accessible button labels, visible focus rings, and keyboard-dismissable dialogs where practical.
- Ensure layouts work at mobile, tablet, and desktop widths.
- Do not install extra packages unless the task requires them; explain any added dependency.
- Do not add secrets, credentials, or personal data.

## Data integrity expectations
- Stock-in increases stock; stock-out decreases stock.
- Reject stock-out when quantity exceeds available stock.
- Update low-stock status from current stock versus minimum.
- Keep consumable stock and durable inventory assets as distinct data concepts.
- Generate demo codes for new items and assets.
- Treat all records as sample data.

## Definition of done
- `npm run build` succeeds.
- Relevant flows have been manually verified.
- No console errors introduced by the change.
- Responsive behavior remains usable.
- Any known limitation is documented in `README.md` or `docs/SOT.md`.
- Changes stay within the explicitly requested scope.

## Required execution summary
At the end of each implementation task, report:
1. Files changed
2. Behaviors implemented
3. Build/test commands run and results
4. Remaining limitations
5. Any scope deviation (must be zero unless user approved it)
