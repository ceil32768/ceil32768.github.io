# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal website for Ceil (陳宥穎), an indie game developer. Deployed via GitHub Pages at `https://ceil32768.github.io/`. No build system, no package manager, no tests.

## Local Development

Open with VS Code Live Server (port 5502 per `.vscode/settings.json`), or any static file server:

```bash
# If live-server is installed globally
live-server --port=5502

# Or Python fallback
python3 -m http.server 5502
```

## Styling

- `style/style.scss` is the SCSS source; `style/style.css` and `style/style.css.map` are compiled outputs.
- Compile SCSS manually after edits:
  ```bash
  sass style/style.scss style/style.css
  # or watch mode
  sass --watch style/style.scss:style/style.css
  ```
- The `recruit/` pages use **Tailwind CSS via CDN** (`https://cdn.tailwindcss.com`) — no local Tailwind config exists.

## Architecture

```
/
├── index.html          # Chinese homepage (single-page, inline JS)
├── indexen.html        # English homepage
├── style/style.scss    # Shared SCSS for main pages (aurora/glassmorphism theme)
├── articles/
│   └── article1.html   # Blog article (standalone)
├── recruit/
│   ├── index.html      # Chinese recruitment page (Tailwind CDN + inline CSS)
│   ├── indexen.html    # English recruitment page
│   ├── recruit-data.js     # Role data export: CEIL_RECRUIT_ROLES (Chinese)
│   ├── recruit-data-en.js  # Role data export: CEIL_RECRUIT_ROLES_EN (English)
│   └── recruit.js      # Renders role cards from whichever data variable is defined
└── img/                # Profile images
```

### Key Patterns

**Recruit page data flow:** `recruit.js` checks for `CEIL_RECRUIT_ROLES_EN` first, then falls back to `CEIL_RECRUIT_ROLES`. Role cards are built entirely in JS from the data arrays in `recruit-data*.js`. To add or modify roles, edit the data files only.

**Bilingual pages:** Chinese (`index.html`, `recruit/index.html`) and English (`indexen.html`, `recruit/indexen.html`) are separate HTML files with the same structure — changes to layout need to be mirrored across both.

**Main page scroll spy:** `index.html`/`indexen.html` include an inline `IntersectionObserver`-based scroll spy that marks nav links active. Sections need an `id` attribute to participate.

**Design system:** Aurora animated gradient background (`.modernbackground`), glassmorphism cards (`.glass-card`), and cyan accent `#66fcf1` / purple `#ad23c2`. These are defined in `style/style.scss` and reused across main pages. The recruit pages define their own CSS independently.
