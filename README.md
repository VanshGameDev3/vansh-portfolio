# Vansh Pandya — Portfolio (React + Vite + TypeScript)

## Structure
```
index.html            SEO / Open Graph meta, fonts
public/               vansh.jpg, og.jpg, Vansh_Pandya_CV.pdf  (+ put project media in public/projects/)
src/data.ts           ALL content (links, experience, projects, skills) — edit here
src/styles.css        design tokens (:root) + all styles
src/components/       Navbar, Hero, About, Experience, Projects, Skills, Console, Contact, Footer, ui
```

## Commands
```
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # serve the production build
npm run typecheck
```

## Replace project images / videos
1. Drop files in `public/projects/` (e.g. `shadows-blade.mp4`, `mini-games.png`).
2. In `src/data.ts`, add to the project: `media: { type: 'video', src: '/projects/shadows-blade.mp4' }` (or `type: 'image'`).
3. When a repo exists, add `repo: 'https://github.com/...'` — the "View Project" button appears automatically.
New project = new object in the `projects` array.

## Deploy
**Vercel:** push to GitHub → vercel.com/new → import repo (framework preset: Vite, build `npm run build`, output `dist`). Or `npx vercel --prod`.
**Netlify / Cloudflare Pages:** build `npm run build`, publish dir `dist`.
After deploying, set absolute URLs for `og:image` in `index.html` (e.g. `https://your-domain.com/og.jpg`) so link previews work.
