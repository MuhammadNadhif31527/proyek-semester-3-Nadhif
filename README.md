# Kopi-In Inventory Workspace — Front-end starter

Front-end prototype for **Rancang Bangun Sistem Informasi Manajemen Stok Barang dan Inventaris pada Cafe Kopi-In Berbasis Web**.

## Stack
- React + Vite
- Tailwind CSS
- Recharts
- Lucide React
- Local dummy data only; no API, authentication service, or database is connected.

## Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Demo access
The login page accepts any non-empty email/password. Suggested demo:
- Email: `alya@kopiin.id`
- Password: `kopiin-demo`

The role selector is a UI simulation, not authorization enforcement.

## Implemented prototype screens
- Login / logout demo and profile role selector
- Dashboard, stock insight, transaction chart, recent transactions
- Data barang: search, category filter, add/edit/detail/delete
- Stok barang: transaction history, record stock-in/out, simulated stock take
- Inventaris: search, condition filter, add/edit/delete
- Categories: add/edit/delete demo state
- Suppliers: add/edit/delete demo state
- Reports: report selector, date range, print, CSV export
- Activity history
- User management: add/edit/delete and role display
- System settings and password form

## Notes / limitations
- Data is held in React state and resets when the page reloads.
- PDF and Excel export are not implemented; CSV export and browser print are available.
- Stock-take form is a UI prototype and does not yet apply a counted quantity to stock.
- Permissions are not security controls. Enforce authorization on the server when backend work begins.
- All dashboard values and records are illustrative dummy data.
- Google Fonts are loaded remotely; system font fallback is configured.

See `docs/SOT.md`, `AGENTS.md`, and `PROMPT_EXECUTION.md` for the project contract and execution scope.