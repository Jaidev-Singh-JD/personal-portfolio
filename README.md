# Jaidev Singh — Personal Portfolio

This repository contains the personal portfolio website for Jaidev Singh, built with React, TypeScript, Vite, and Tailwind CSS. The site is deployed on Vercel at https://jaidevsingh.in and showcases experience, projects, skills, testimonials, and a contact flow.

## Overview

The portfolio includes:

- A polished animated hero and introduction section
- About, experience, skills, and achievement sections
- A featured projects showcase
- Testimonials and contact details
- A working contact form powered by EmailJS
- An AI assistant endpoint hosted as a Vercel serverless function

## Features

### Portfolio experience

- Responsive single-page experience with smooth section transitions
- Motion-based animations and scroll-driven effects
- Clean reusable UI components and consistent design system styling

### Contact form

- Built with React Hook Form and EmailJS
- Client-side validation for required fields
- Honeypot spam protection and submission cooldown behavior
- Requires environment variables for EmailJS configuration

### AI assistant

- Located in api/chat.ts
- Runs as a Vercel serverless function
- Uses the Anthropic SDK to stream responses from Claude
- Requires ANTHROPIC_API_KEY in the runtime environment

### Quality checks

- ESLint and Prettier are configured for consistent code quality
- Husky and lint-staged run formatting and lint fixes before commits

## Tech Stack

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4
- Motion / Lenis
- EmailJS
- Anthropic AI SDK
- ESLint, Prettier, Husky, lint-staged
- shadcn-style UI primitives

## Project Structure

- src/App.tsx — app layout and global page setup
- src/components/ — portfolio sections and reusable UI components
- src/constants/ — content data for the portfolio sections
- src/lib/ — animation helpers and utilities
- api/chat.ts — Vercel serverless AI assistant endpoint
- package.json — scripts, dependencies, and lint-staged configuration
- vite.config.ts — Vite config with path aliases

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file:

   ```bash
   cp .env.example .env.local
   ```

3. Add the required environment variables:

   ```bash
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ANTHROPIC_API_KEY=
   ```

4. Start the local development server:

   ```bash
   npm run dev
   ```

## Available Scripts

- npm run dev — start the Vite development server
- npm run build — type-check and build the production bundle
- npm run preview — preview the production build locally
- npm run lint — run ESLint across the project
- npm run lint:fix — run ESLint and auto-fix issues
- npm run format — format files with Prettier
- npm run format:check — check formatting without writing changes
- npm run prepare — install Husky hooks

## Deployment on Vercel

This project is configured for deployment on Vercel.

- Connect the GitHub repository to Vercel
- Set the same environment variables in the Vercel project settings
- Use the build command: npm run build
- The Vercel deployment is intended for the production domain https://jaidevsingh.in

## Notes

- Keep secrets inside .env.local for local development and in Vercel environment variables for production
- Run npm run format and npm run lint before pushing changes
- The AI assistant endpoint depends on the Anthropic API key being available at runtime
