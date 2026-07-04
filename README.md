# Mritunjay | DevHQ

A personal developer portfolio built around a terminal / CI-pipeline motif — fitting
for someone who spends most of their time in backend architecture, queues, and
containerized infra.

Built with **Next.js (App Router) + JavaScript + Tailwind CSS + Framer Motion**.
No TypeScript, no component library dependency — just plain React components so
it's easy to read and extend.

## Design direction

- **Palette**: near-black background (`#0a0b0d`), amber signal accent (`#ffb020`),
  with green/red used only as semantic pipeline states (success / running), never
  as decoration.
- **Motif**: the whole page is framed as a terminal session. The nav is a tab bar,
  section headings are typed commands (`cat about.md`, `ls skills/`,
  `pipeline status --all`, `git log --oneline`), and the hero types out `whoami`
  before revealing the content.
- **Projects** are rendered as CI/CD pipeline runs (status badge, duration, stack
  tags, source link) instead of generic cards — CodePulse is marked `running`
  since it's actively in development; the rest are marked `passed`.
- **Experience/Education** are a git-log-style vertical timeline, since that
  content really is chronological.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.jsx        Root layout, fonts (Inter + JetBrains Mono), SEO metadata
  page.jsx           Assembles all sections
  globals.css        Base styles, focus states, reduced-motion support
  sitemap.js          SEO sitemap
  robots.js           SEO robots config
  icon.svg            Favicon
components/
  Nav.jsx             Sticky terminal-tab-bar navigation
  Hero.jsx            Typewriter intro
  About.jsx
  Skills.jsx          Grouped skill "directories"
  Projects.jsx        Pipeline-run project cards (signature element)
  Experience.jsx       Git-log-style experience + education timeline
  Contact.jsx
  Footer.jsx
  TerminalWindow.jsx  Reusable terminal chrome wrapper
  SectionHeading.jsx  Command-line style section heading
lib/
  data.js             All content lives here — edit this file to update the site
public/
  resume-mritunjay.pdf
```

## Editing content

Everything text-based (name, bio, skills, project descriptions, experience,
education, links) lives in **`lib/data.js`**. You won't need to touch component
files to update copy.

To swap the resume file, replace `public/resume-mritunjay.pdf` and keep the same
filename, or update `resumeHref` in `lib/data.js`.

## Filling in gaps

A few things were intentionally left out because the source resume didn't
include them — add them to `lib/data.js` and wire up a section if/when you have
the content:

- Profile photo (currently text-only hero, by design — add an `<Image>` in
  `Hero.jsx` if you want one)
- Certifications
- Achievements
- Real per-project GitHub repo URLs (all currently point to the profile page —
  update `github` in each project object in `lib/data.js`)

## Deployment

Push to a GitHub repo and import it in [Vercel](https://vercel.com/new) — zero
config needed, it's a standard Next.js app. Or:

```bash
npm run build
npm run start
```

## Accessibility & performance notes

- Keyboard focus is visible everywhere (`:focus-visible` outline in `globals.css`)
- `prefers-reduced-motion` disables animation for users who've asked for it
- Fonts are loaded via `next/font/google` (self-hosted, no layout shift)
- Fully responsive from mobile up
