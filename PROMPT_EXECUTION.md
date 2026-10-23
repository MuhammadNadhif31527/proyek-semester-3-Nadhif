# Execution Prompt — Initial Front-end Build

You are implementing the **Kopi-In Inventory Workspace**. Treat `docs/SOT.md` as the single source of truth and `AGENTS.md` as the repository contract.

## Objective
Review the current React + Vite + Tailwind front-end and bring it to the accepted baseline without expanding scope.

## Required workflow
1. Inspect `docs/SOT.md`, `AGENTS.md`, `README.md`, `package.json`, and `src/`.
2. Run `npm install` if dependencies are missing.
3. Run `npm run build` to establish the current baseline.
4. Fix only issues that block SOT acceptance or break an explicitly scoped interaction.
5. Verify the key flows below, then run `npm run build` again.
6. Summarize changed files, checks, limitations, and confirm no out-of-scope work was added.

## Acceptance checklist
- [ ] Login demo and return-to-login/logout interaction work.
- [ ] Sidebar navigation reaches every defined module.
- [ ] Dashboard cards, chart, low-stock list, and recent transactions render.
- [ ] Items can be searched, filtered, viewed, created, edited, and deleted.
- [ ] Stock-in and stock-out update local stock and transaction history.
- [ ] Stock-out exceeding available quantity is rejected.
- [ ] Inventory assets can be searched, filtered, created, edited, and deleted.
- [ ] Categories and suppliers support their baseline local-state flows.
- [ ] Reports render and CSV export/browser print actions work.
- [ ] User management and settings screens render and support their baseline interactions.
- [ ] Responsive layout remains usable at narrow widths.
- [ ] Dummy-data / no-backend limitations are clearly stated.

## Hard constraints
- Front-end only; do not create backend, API, database, or real auth.
- Do not implement PDF/XLSX if it requires broad dependency or scope expansion; CSV is sufficient for this baseline.
- Do not add modules outside the SOT.
- Do not silently replace the brown/black visual system.
- Do not claim security, persistence, or business rules that are not implemented.
- Prefer the smallest coherent patch. Avoid unnecessary refactors and token-expensive commentary.

## Final response format
- **Status:** pass / partial / blocked
- **Files changed:** concise list
- **Checks:** commands and outcomes
- **Known gaps:** only material remaining gaps
- **Scope:** confirm whether the SOT was followed
