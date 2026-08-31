# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Tirawat Pongpratisonthi for full-stack developer roles. Secondary: general visitors browsing the portfolio (other developers, potential freelance clients, personal network) who land via shared links or social profiles.

## Product Purpose

A personal portfolio site for Tirawat Pongpratisonthi (Computer Science student, full-stack developer) that gets him hired and showcases his work. Success = a recruiter or visitor quickly understands who he is, what he can do, and can view real projects/experience and reach out.

## Operating Context

Single-page site (Next.js App Router) with sections in order: Navbar, Hero, About Me, Education, Work Experience, Skills, Projects, Contact. Supports English/Thai via a custom i18n context (`src/app/i18n/`), with all section copy sourced from `src/app/i18n/content.ts`. Visitors browse on both desktop and mobile; scroll-based navigation between sections is a core interaction (nav links jump to section anchors).

## Capabilities and Constraints

- Stack: Next.js 15 (App Router), React 19, Tailwind CSS 3 with shadcn/ui-style CSS variable tokens (`globals.css`, `tailwind.config.ts`), Radix UI primitives, lucide-react icons.
- Existing theming: light/dark mode via `.dark` class and CSS custom properties (`--background`, `--foreground`, `--primary`, etc.), currently a blue/cyan tech palette.
- i18n: `LanguageContext` provides `t` translation object consumed by every section component; redesign must keep components reading from `t.*` rather than hardcoding copy.
- Real assets on hand: `/heroLandingImage.svg` (hero illustration) and `/profileImage.jpg` (About Me photo) — do not fabricate new imagery claims, only restyle presentation of existing assets.
- Real contact/social links: GitHub (github.com/Tirawat1), LinkedIn (linkedin.com/in/tirawat-pongpratisonthi-00351324a), email Tirawat.pst@gmail.com — must be preserved.

## Brand Commitments

- Name "Tirawat Pongpratisonthi" and title "Computer Science Student & Full Stack Developer" are fixed identity facts (used in page metadata and hero).
- Existing GitHub/LinkedIn/email contact channels must remain intact and correct.

## Evidence on Hand

Real bio, education, work experience, skills, and project copy already exists in `src/app/i18n/content.ts` (EN + TH). No testimonials, case studies, or press exist — do not fabricate any.

## Product Principles

- Credibility first: the design must read as trustworthy/hireable to recruiters, not just visually striking.
- Personality without risk: warm, distinctive visual identity that still reads professional for a corporate/enterprise hiring audience.
- Content stays truthful: redesign restyles presentation of existing real content/links; it does not invent new claims, metrics, or testimonials.
- Bilingual by default: every section must keep working through the i18n `t` object for EN/TH.
