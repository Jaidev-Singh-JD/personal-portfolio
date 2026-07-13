# Personal Portfolio

A React + TypeScript + Vite portfolio project with Tailwind CSS, animated UI, a contact form using EmailJS, an Anthropic chat assistant endpoint, and pre-commit formatting/linting.

## Project Summary

This portfolio website includes:

- Hero and introduction sections
- Project showcase and achievements
- Skills, career timeline, and testimonials
- Contact form with validation and EmailJS-based email sending
- Smooth scrolling using `lenis`
- AI assistant endpoint in `api/chat.ts`
- Husky + lint-staged pre-commit hooks for formatting and linting

## Features

### Contact form

- Built with `react-hook-form`
- Client-side validation for name, email, and message
- Honeypot spam protection
- Cooldown behavior to prevent repeated submissions
- Uses environment variables for EmailJS integration

### Smooth scrolling

- Implemented via `Lenis` in `src/App.tsx`
- Adds fluid scrolling across the portfolio sections

### AI chat endpoint

- Implemented as a Vercel serverless function in `api/chat.ts`
- Uses `@anthropic-ai/sdk` to stream assistant responses
- Requires `ANTHROPIC_API_KEY` in environment variables

### Pre-commit quality checks

- Uses `husky` to install Git hooks
- Uses `lint-staged` to run formatting and lint fixes on staged files
- Files covered by lint-staged:
  - `*.{js,jsx,ts,tsx}` => `prettier --write`, `eslint --fix`
  - `*.{json,css,md}` => `prettier --write`

## Tech Stack

- React 19
- TypeScript 6
- Vite
- Tailwind CSS 4
- ESLint
- Prettier
- EmailJS
- Anthropic AI
- Husky
- lint-staged
- Lenis
- motion/react

## Repo Structure

- `src/App.tsx` — root application layout and smooth scroll setup
- `src/components/` — page sections and reusable UI components
- `api/chat.ts` — Vercel serverless AI assistant endpoint
- `.husky/pre-commit` — Git pre-commit hook
- `package.json` — scripts, dependencies, lint-staged config
- `vite.config.ts` — path aliases and plugins

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create environment file:

   ```bash
   cp .env.example .env.local
   ```

3. Add required environment variables:

   ```bash
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ANTHROPIC_API_KEY=
   ```

4. Start development mode:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` — start local development server
- `npm run build` — compile TypeScript and build Vite app
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint across the repo
- `npm run lint:fix` — run ESLint and auto-fix issues
- `npm run format` — format files with Prettier
- `npm run format:check` — verify Prettier formatting
- `npm run prepare` — install Husky hooks

## Husky + lint-staged

This repo uses Husky and lint-staged to enforce formatting and linting on staged files before commit.

- `.husky/pre-commit` runs `npx lint-staged`
- `lint-staged` is configured in `package.json`
- This ensures only formatted and lint-fixed staged files are committed

## Deployment

The project is ready for deployment on Vercel.

- Vercel detects the Vite app and serverless function in `api/`
- Set environment variables in the Vercel dashboard
- Build command: `npm run build`

## Notes

- Keep sensitive keys out of source control in `.env.local`
- Run `npm run format` to format the entire repo
- If you want commit-only checks without autofix, update the lint-staged commands accordingly

## Contact

For improvements or updates, edit the repo or open an issue.
