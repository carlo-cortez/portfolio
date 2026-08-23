# Claude Agent Instructions

Please refer to [AGENTS.md](./AGENTS.md) for full architecture notes, content collection schemas, design system rules, and build commands.

## Key Quick Rules:
- Build command: `npm run build`
- Dev command: `npm run dev`
- New projects: Add to `src/content/projects/<slug>.md` matching schema in `src/content/config.ts`
- Theme: Controlled via `data-theme="dark"` on `<html>` using CSS variables
