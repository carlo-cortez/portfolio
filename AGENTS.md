# Agent Guidelines & Repository Notes

Welcome! This repository contains the source code for **Carlo Cortez's Developer Portfolio Website**, built with **Astro 4**, **TypeScript**, **Content Collections**, and **Decap CMS**.

Whenever an AI agent is working on this codebase, follow the principles and architecture documented below.

---

## 🏗️ Architecture & Tech Stack

- **Framework**: [Astro](https://astro.build) (v4.x, static site generation output)
- **Language**: TypeScript (`strict` mode)
- **Styling**: Modern CSS with CSS custom variables (supporting light/dark themes via `[data-theme="dark"]` on `<html>`)
- **Content Management**: 
  - Astro Content Collections (`src/content/config.ts`)
  - [Decap CMS](https://decapcms.org) for browser-based authoring (`public/admin/`)
- **Hosting / Deployment Target**: [Vercel](https://vercel.com) (static build via `@astrojs/vercel` or default Astro static output)

---

## 📁 Repository Structure

```
├── public/
│   ├── admin/             # Decap CMS admin UI
│   │   ├── index.html     # CMS SPA entry point
│   │   └── config.yml     # Decap CMS collections & field definitions
│   ├── images/            # Static images & project screenshots
│   ├── favicon.svg        # Site favicon
│   └── robots.txt         # Crawler indexing rules
├── src/
│   ├── content/
│   │   ├── config.ts      # Content collection schema validation (Zod)
│   │   └── projects/      # Markdown case studies (.md files)
│   ├── components/
│   │   └── ProjectCard.astro  # Reusable project card
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main layout (HTML shell, nav, footer, theme engine)
│   └── pages/
│       ├── index.astro        # Homepage (hero + featured projects)
│       ├── projects/
│       │   ├── index.astro    # All projects grid + live search & tag filters
│       │   └── [...slug].astro# Dynamic project detail page (Markdown rendered)
│       ├── about.astro        # Bio, categorized skills, contact
│       └── 404.astro          # Custom 404 error page
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 📝 Content Schema & Rules for Adding Projects

All projects are stored as Markdown files inside `src/content/projects/<slug>.md`.

### Required Frontmatter Schema
Defined in `src/content/config.ts`:

```markdown
---
title: "Project Title"
description: "A clear, 1-2 sentence overview shown on cards and metadata."
tags: ["React", "TypeScript", "Node.js"]
date: 2026-08-20
image: "/images/placeholder.svg"
github: "https://github.com/carlo-cortez/repo-name" # optional
live: "https://project-demo.vercel.app"             # optional
featured: true                                      # boolean: highlights on homepage
---

Full markdown write-up here...
```

### When an AI Agent Adds a New Project:
1. Create a new `.md` file inside `src/content/projects/<slug>.md`.
2. Ensure `date` is a valid ISO date or `YYYY-MM-DD`.
3. Provide at least 2–4 relevant technology tags.
4. Always test with `npm run build` to ensure the new content satisfies the Zod schema.

---

## 🎨 Design System & Styling Conventions

- **Theme Engine**: Dark mode is controlled via the `data-theme="dark"` attribute on the `<html>` root element and persisted in `localStorage`.
- **CSS Variables**: Use standard variables (`var(--bg)`, `var(--text)`, `var(--accent)`, `var(--surface)`, `var(--border)`).
- **Icons**: Use clean inline SVGs (`width="16"`, `height="16"`, `fill="currentColor"` or `stroke="currentColor"`).
- **Responsive Breakpoints**:
  - Desktop: `> 1024px` (3 columns)
  - Tablet: `768px - 1024px` (2 columns)
  - Mobile: `< 768px` (1 column, drawer menu active)

---

## ⚡ Development & Verification Commands

```bash
# Start local development server (http://localhost:4321)
npm run dev

# Run full production build (verifies schemas, routing, static generation)
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Security & Deployment Notes

- Decap CMS requires authentication with write permissions to `carlo-cortez/portfolio` to commit changes.
- Do not expose secret API keys or OAuth client secrets in client-side code.
