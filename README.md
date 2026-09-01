# 🏠 AG Interiors

A modern and responsive interior design website that showcases stylish home décor and furniture collections. This README provides a structured orientation of the project, development workflows, and deployment guidance so contributors and visitors can quickly understand, run, and extend the site.

---

## Quick links

- Repo: https://github.com/Afsu03/AG_Interiors
- Live demo: (add your hosted demo URL here — GitHub Pages, Netlify or Vercel)

---

## Table of contents

1. Project overview
2. Features
3. Design & development workflows
4. Tech stack
5. Project structure
6. Installation & local development
7. Build & deployment
8. Content & assets (images, screenshots)
9. Customization guide
10. Contribution & license
11. Author & contact

---

## 1. Project overview

AG Interiors is a focused website built to present interior design services, highlight featured furniture collections, and collect client enquiries. It is intended as a portfolio and marketing presence for design projects and client outreach.

The repository contains a static frontend (HTML/CSS/JavaScript), lightweight scripts for interactive UI elements, and an organized assets folder for images and screenshots.

---

## 2. Features

- Responsive layout that adapts to desktop, tablet and mobile
- Clean, modern UI focusing on imagery and service highlights
- Interactive navigation and smooth scrolling
- Sections for Services, Portfolio, About, and Contact
- Static-only deployment friendly (GitHub Pages, Netlify, Vercel)

---

## 3. Design & development workflows

This section documents the primary workflows used while developing and maintaining this repo. Use it as a checklist whenever you make changes.

### 3.1 Design & Content
- Prepare high-quality images for each portfolio item (JPEG/PNG, optimized for web or WebP).
- Write concise project descriptions and client outcomes for each portfolio card.
- Collect client contact details and ensure contact form points to a valid email or service.

### 3.2 Local development (quick iteration)
- Edit HTML and CSS files in `css/` and `pages/`.
- Use a local static server (VS Code Live Server or `npx serve`) to preview changes.
- Test responsiveness by resizing the browser and using devtools device presets.

Commands:
```bash
# clone
git clone https://github.com/Afsu03/AG_Interiors.git
cd AG_Interiors
# preview (option 1)
npx serve .
# or use VS Code Live Server extension to open index.html
```

### 3.3 Visual QA & accessibility
- Verify color contrast and readable typography across breakpoints.
- Ensure navigation is keyboard accessible and forms have proper labels and validation.

### 3.4 Optimization
- Compress images (use tools like ImageOptim, Squoosh, or `sharp`/`imagemin`).
- Convert large photos to WebP where supported and provide fallback JPEGs.
- Minify CSS/JS when preparing a production build or add a bundler (Vite) later.

### 3.5 Deployment
- Push to `main` (or a deployment branch).
- For GitHub Pages: set Pages source to `main` / root. For Netlify/Vercel, connect the repo and publish directly.

---

## 4. Tech stack

- HTML5
- CSS3 (utility classes and optional Bootstrap)
- JavaScript (vanilla) for interactivity
- Optional: Bootstrap for quicker component layout

> Note: MySQL was referenced in an earlier README as a potential backend; currently the project is static and doesn't require a database unless you add a backend for bookings or contact storage.

---

## 5. Project structure

```
AG_Interiors/
├── css/                # Stylesheets (main CSS + responsive helpers)
├── js/                 # Client-side scripts (navigation, form handling)
├── images/             # Image assets and portfolio photos
├── pages/              # Additional HTML pages (about.html, services.html)
├── index.html          # Homepage
└── README.md           # This file
```

Notes:
- Keep image filenames short and kebab-cased (e.g., `living-room-01.jpg`).
- Add new pages under `pages/` and link them from the navigation.

---

## 6. Installation & local development

These instructions assume the site is static and requires only a static server to preview locally.

1. Clone the repository:

```bash
git clone https://github.com/Afsu03/AG_Interiors.git
cd AG_Interiors
```

2. Start a static server (Option A: Node `serve`):

```bash
npx serve .
# or if installed globally
serve .
```

3. Open the printed URL (e.g., http://localhost:3000) in your browser and preview `index.html`.

Editing workflow:
- Modify files in `css/`, `js/`, or `pages/`.
- Refresh the browser to view changes.

---

## 7. Build & deployment

Because this project is static, deployment is simple.

- GitHub Pages
  1. Push to `main` branch.
  2. Repository Settings → Pages → Source → `main` / root. The site will publish at `https://<username>.github.io/AG_Interiors/`.

- Netlify / Vercel
  1. Connect the repository in Netlify/Vercel.
  2. Set build command to `none` or leave blank (static site). Publish directory: `/`.

Optional (if you add a bundler): add a build step (`npm run build`) and point your deploy service to the output directory (e.g., `dist/`).

---

## 8. Content & assets (images, screenshots)

Add real screenshots and portfolio images in `images/` and reference them in the README to improve trust and visual appeal.

Recommended screenshot sizes:
- Hero / full-width: 1600×900 (compressed)
- Gallery thumbnails: 800×600 or 400×300

Example to include a screenshot in README.md:

```markdown
![Homepage screenshot](images/screenshots/home.png)
```

Suggested folder: `images/screenshots/`

---

## 9. Customization guide

To adapt the site for a client or a new portfolio:
- Replace content in `index.html` hero section (title, subtitle, CTA links).
- Update portfolio items in `pages/` or the portfolio grid in `index.html`.
- Update contact email in the contact section or use a service like Formspree for submissions.
- Replace placeholder images in `images/` with optimized client photos.

If you later add backend features (booking, contact storage), add a `backend/` directory and document its API endpoints and environment variables.

---

## 10. Contribution & license

Contributions are welcome. Suggested workflow:
1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes & commit
4. Push and open a pull request

License: Add a LICENSE file (e.g., MIT) if you want to make the project open source.

---

## 11. Author & contact

**Afsana Kathoon** — https://github.com/Afsu03

Connect: https://www.linkedin.com/in/afsanakathoon3/

---

Next steps I can help with (pick any):
- Add example screenshots (I can create placeholder images) and update the README with them.
- Create a GitHub Pages workflow in `.github/workflows/` to auto-deploy the site on push to `main`.
- Convert the project to a Vite template for faster local dev and asset bundling.

If you want me to commit any of those changes (screenshots, workflow), tell me which and I will add them.