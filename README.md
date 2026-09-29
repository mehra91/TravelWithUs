# TravelPartner — MERN + Tailwind starter

A full-stack scaffold for the TravelPartner site: Home, About, Almora, Nainital,
Custom packages and Booking, behind a vertical left navigation, in forest green
and gold.

## Structure

```
travelpartner/
├── backend/     Express API
│   ├── config/db.js       Mongoose connection helper (not called yet)
│   ├── models/             Mongoose schemas (Destination, Car, Booking, CustomPackage)
│   ├── data/mockData.js    In-memory data matching those schemas
│   └── routes/              REST endpoints reading from the in-memory data
└── frontend/    React (Vite) + Tailwind CSS app
    └── src/
        ├── components/     Sidebar, Layout
        ├── pages/           Home, About, Almora, Nainital, CustomPackages, Gallery, Booking
        ├── data/siteData.js Client-side fallback data
        └── api.js           fetch wrapper for the backend
```

## Why there's no database yet

As asked, this scaffold defines the MongoDB **schema** (under `backend/models`)
without wiring up a live database. The API routes read from an in-memory
array in `backend/data/mockData.js` instead, so everything runs immediately
with no setup, and the shapes already match the Mongoose models.

To connect a real database later:
1. Set `MONGO_URI` in `backend/.env` (copy `.env.example`).
2. In `backend/server.js`, uncomment the `connectDB` import and its call.
3. In each file under `backend/routes/`, swap the in-memory array lookups
   for Mongoose queries against the matching model in `backend/models/`.

## Running it

### Backend
```
cd backend
npm install
npm run dev      # or: npm start
```
Runs on http://localhost:5000. Health check: `GET /api/health`.

### Frontend
```
cd frontend
npm install
npm run dev
```
Runs on http://localhost:5173 and proxies `/api/*` requests to the backend
(see `vite.config.js`). The pages fetch destinations and cars from the API on
load, and fall back to local data in `src/data/siteData.js` if the backend
isn't running, so the UI still renders on its own.

## Icons

All icons are from `react-icons/tb` (Tabler Icons), matching the outline
style used throughout the design.

## About the images

Every photo here is a placeholder from Lorem Picsum — real stock photography,
free to use, no attribution required — referenced by URL, so nothing bulky is
bundled into the repo. Swap the URLs in `frontend/src/data/siteData.js`,
`backend/data/mockData.js` and the page files under `frontend/src/pages/` for
your own licensed destination photography before you launch.

## Pages

- `/` — Home, full-bleed hero with the cursive "Start your journey with us" headline
- `/about`
- `/almora`, `/nainital` — destination detail pages
- `/custom-packages` — Destination / Car / Discuss-with-us tabs
- `/gallery`
- `/booking` — date-range calendar starting from today, car choice, destination
  choice, guest details, and a Confirm booking button that posts to the API
