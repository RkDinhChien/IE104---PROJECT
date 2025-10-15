# Moon\* — Static homepage prototype

This repository contains a static (no-framework) homepage for Moon\* and a mock Express API for the newsletter.

Structure

- `index.html`, `css/`, `js/` — static website files (root)
- `assets/` — SVG assets used by the static site
- `server/` — mock Express server for API endpoints

What's included

- Responsive static homepage (hero, features, cards, stats, CTA, footer and newsletter)
- SVG assets in `/assets` to replace placeholders
- CSS animations (entrance, hover) and accessibility improvements (aria labels, landmarks)
- Newsletter form posts to `/api/newsletter` (mock server)

Run locally

1. Install server dependencies and run mock API:

```bash
cd server
npm install
npm start
# mock API: http://localhost:4000
```

2. Open the static site in your browser (no build step required):

```bash
# open the root index.html in your browser (Windows)
explorer index.html
```

Or serve the static files with a tiny server (optional):

```bash
# from repo root
python -m http.server 8000
# open http://localhost:8000
```

Notes

- Footer shows Moon\* branding; newsletter field added in footer.
- The mock API at `server/mock-server.js` accepts POST /api/newsletter and validates basic email format.

Next steps I can help with

- Replace SVG placeholders with your real images/logos (send assets or paths)
- Persist newsletter signups (save to JSON or connect to a DB)
- Accessibility audit (Lighthouse/axe)
- Deploy static site and mock API

# ITJ — Homepage Prototype

# Moon\* — Homepage (React + Vite prototype)

This repo now contains a React + Vite prototype called "Moon\*" (renamed from ITJ), plus a mock Express API for the newsletter.

Structure

- `/web` — Vite + React app (run with `npm install` + `npm run dev` inside `/web`)
  - `src/` — React source files
  - `public/` — image assets (simple SVG placeholders)
- `/server` — mock Express server for API endpoints

What's included

- Responsive homepage with hero, features, cards, stats, CTA and newsletter form
- Realistic assets placed in `/web/public` (SVG data URIs as image files)
- Animations (entrance and hover) and improved accessibility (aria labels, landmarks)
- Mobile-friendly nav and interactive newsletter form wired to `/api/newsletter`

Run locally (recommended)

1. Install dependencies for web and server

```bash
cd web
npm install
cd ../server
npm install
```

2. Start the mock API server

```bash
cd server
npm start
# server runs on http://localhost:4000
```

3. Start the web dev server

```bash
cd web
npm run dev
# open http://localhost:5173
```

The Vite dev server proxies `/api` to `http://localhost:4000` so the newsletter form posts to the mock server.

Notes

- Footer updated to show "Moon\*" branding and copyright.
- Placeholders were replaced with inline SVG assets under `/web/public`.

Next steps you can ask me to implement

- Swap placeholder assets for real images and logos

# Moon\* — Static homepage prototype

This repository contains a static (no-framework) homepage for Moon\* and a mock Express API that persists newsletter signups to JSON.

Repository structure

- `index.html`, `css/`, `js/` — static site (root)
- `assets/` — image assets used by the static site (SVGs currently)
- `server/` — mock Express server which persists subscribers: `server/data/subscribers.json`

Quick features

- Static responsive homepage with hero, features, cards, stats, CTA and footer
- Animations (entrance, hover), improved accessibility (landmarks, aria-labels)
- Newsletter form posts to `/api/newsletter` and is persisted to `server/data/subscribers.json`

Run locally

1. Start the mock API server (persistence enabled):

```bash
cd server
npm install
npm start
# mock API runs on http://localhost:4000
```

2. Open the static site (recommended to serve via HTTP so fetch requests to /api work):

```bash
# from repo root
python -m http.server 8000
# open http://localhost:8000 in your browser
```

Check subscribers

- After signing up via the form, view `server/data/subscribers.json` to see saved entries.
- Or call the admin endpoint: `GET http://localhost:4000/api/subscribers` (no auth in mock).

Deployment guidance

Static site (Netlify / Vercel)

- Deploy the repository root as a static site. Both Netlify and Vercel support static sites directly from a Git repo.
- Ensure the mock API (server) is deployed separately (see below) and that the static site's API calls point to the deployed server URL (or set up a proxy / environment variable).

Server (Render / Heroku)

- Render (recommended for quick Node servers):

  - Create a new Web Service on Render, point to this repo's `server` folder (set start command `node mock-server.js`).
  - Set `NODE_ENV=production` on Render so the server serves static files from the repo root automatically.

- Heroku (alternative):

  - Create app, push code. Add a `Procfile` in `server/` with:

    ```Procfile
    web: node mock-server.js
    ```

  - Configure `NODE_ENV=production` and `PORT` if needed. Heroku will run the server which can serve static files when `NODE_ENV=production`.

Using a single deploy (static + server)

- If you want the server to serve both the API and static site from one process, set `NODE_ENV=production` on the host and ensure the server serves static content (already implemented in `server/mock-server.js`). Then deploy the whole repo to Render/Heroku and point DNS to the server.

Pixel-perfect adjustments

- I can now tweak typography, spacing, card borders and layout to match the wireframe precisely.
- For that I need either:
  - A screenshot or exact pixel specs (font sizes, margins), or
  - You tell me which sections to refine (e.g., "make hero H1 64px, 80px top padding", "cards border 3px black").

Next steps (pick one or more)

- Provide real images/logos (upload files or give URLs) so I can replace SVG placeholders in `assets/`.
- Persist signups to a database (SQLite/Postgres) instead of JSON — I can add DB wiring.
- Prepare deployable configuration for Render/Heroku (Procfile, start scripts) and test deployment.
- Make pixel-perfect CSS edits — tell me exact sizes or attach the wireframe specs.
