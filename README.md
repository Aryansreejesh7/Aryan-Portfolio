# Aryan Sreejesh · Data Analyst Portfolio

A responsive, recruiter-focused portfolio for an entry-level Data Analyst. The design takes cues from the field: graph-paper background, monospace labels, and a SQL "query result" card in the hero that lists the candidate's real toolkit. Light and dark themes are supported.

All content comes from the candidate's resume and LinkedIn profile. No testimonials, statistics or metrics were added.

## Tech stack

- Next.js 14 (App Router) and React 18
- Tailwind CSS 3
- TypeScript
- Space Grotesk and JetBrains Mono via `next/font`

No API keys or environment variables are needed.

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For a production build:

```bash
npm run build
npm start
```

Note: `next/font` downloads the two Google fonts the first time you run the project, so the first run needs an internet connection.

## Customize the content

Almost everything is edited in one file: `data/portfolio.ts`.

| To change | Edit |
| --- | --- |
| Name, title, headline, contact details, links | `profile` |
| Hero toolkit list | `toolkit` |
| About paragraphs | `about` |
| Projects | `projects` (add or remove objects) |
| Experience and training | `experience` |
| Skill groups | `skillGroups` |
| Degree and certifications | `education`, `certifications` |

Other things you may want to change:

- **Resume PDF:** replace `public/Aryan_Sreejesh_Resume.pdf` (keep the file name, or update `profile.resume`).
- **Colors:** `tailwind.config.js` (`accent` palette).
- **Favicon:** `app/icon.svg`.
- **Page title and description:** `app/layout.tsx`.

Ideas for later, once you have the material: add a GitHub link and live project links to `projects`, and add dashboards or analysis case studies (problem, approach, insight) as new project entries.

## Deploy

Push the repository to GitHub and import it into Vercel or Netlify. No configuration is required.

## Project structure

```
aryan-sreejesh-data-portfolio/
├── app/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Reveal.tsx
│   ├── Section.tsx
│   ├── Skills.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── portfolio.ts
├── public/
│   └── Aryan_Sreejesh_Resume.pdf
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```
