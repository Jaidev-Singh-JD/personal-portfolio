/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

// This lives at /api/chat.ts at your project ROOT (not inside src/) —
// Vercel auto-detects anything in /api as a serverless function,
// independent of your Vite build.
//
// NOTE: running on the standard Node.js runtime (not Edge) — the Edge
// runtime can't bundle @anthropic-ai/sdk's credential-chain code, which
// depends on Node's built-in `fs`/`path` modules.

import type { VercelRequest, VercelResponse } from '@vercel/node';
import Anthropic from '@anthropic-ai/sdk';

const SYSTEM_PROMPT = `You are Jaidev's portfolio assistant. Answer questions about Jaidev Singh factually and concisely, based only on the information below. Keep answers to 2-4 short sentences, plain prose, no headers or markdown formatting. If asked something not covered here, say you don't have that information rather than guessing.

PROFILE
Name: Jaidev Singh
Title: Frontend Engineer
Location: Delhi, India
Experience: 3+ years

SUMMARY
Frontend Engineer with 3+ years of experience building scalable, data-driven web applications for enterprise AdTech and marketing analytics platforms. Built a reusable component system adopted across 35+ global brands in 5 countries, and integrated REST APIs connecting frontend systems to a platform managing 650K+ records. Drove unit test coverage from near-zero to 80%+ across two production platforms.

WORK EXPERIENCE — Omnicom Media Group, Gurugram (Apr 2023 – Jun 2026), Software Engineer (Frontend Engineer)

GeoLift (Geo Experimentation & Incrementality Platform):
- Increased unit test coverage from near-zero to 80% across 40+ test files
- Built reusable Lit.dev components for pre/post-campaign workflows, reducing dev time for new reporting features by ~25-30%
- Resolved 10+ critical UI defects in geoplot rendering and table layouts
- Implemented WCAG-compliant accessibility across key pages

Omni Video Intelligence (OVI) — YouTube Targeting and Content:
- Built reusable core components (list tables, exclusion lists, channel/keyword/topic forms) used by 35+ brands across 5 countries
- Integrated 5+ REST API endpoints including the YouTube Data API, connecting to a platform managing 650K+ curated channels
- Built distribution history tracking UI with full audit trail

Marketing Mix Modeling (MMM) & Meridian:
- Drove unit test coverage to 80%+, implemented ESLint + Husky pre-commit hooks
- Built a file management system with OLS SDK integration
- Designed and built the Meridian onboarding flow from scratch (file upload, column mapping, validation, stepper navigation with Redux)
- Built a FastAPI validation endpoint for file upload schema checking
- Built KPI dashboards using Highcharts.js

SocialKit — Suite of Tools for Facebook Advertising:
- Built real-time campaign dashboards (Vue.js, Vuex, Chart.js) and automated data sync via AdForm/Flashtalking API integrations

TECHNICAL SKILLS
Frontend: React.js, Redux, JavaScript (ES6+), TypeScript, HTML5, CSS3, Lit.dev, Vue.js, Highcharts.js, Chart.js, Tailwind CSS, Bootstrap
Testing: Vitest, Unit Testing, Mocking, Test Coverage
Backend: FastAPI, Python, REST APIs, Alembic, SQLAlchemy, JWT Authentication
Databases: PostgreSQL, SQL
Tools: Git, GitHub, CI/CD, Claude, GitHub Copilot, ChatGPT

PERSONAL PROJECTS
Todo Application (FastAPI, PostgreSQL) — production-style REST API with JWT auth, Alembic migrations, scoped data access

EDUCATION
Guru Gobind Singh Indraprastha University, 2018-2022
B.Tech, Mechanical and Automation Engineering (8.8/10)
Transitioned into frontend development through self-driven learning; professionally applying it since 2023.

AWARDS
Annalectual of the Quarter — Technology, Annalect India (Apr 2025)
On the Spot Award, Annalect India (Aug 2025)
On the Spot Award, Omnicom Global Solutions (Feb 2026)

AVAILABILITY
Open to Frontend Engineer and Full-Stack roles. Contact: Jaidevsingh.dev@gmail.com`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed');
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('ANTHROPIC_API_KEY is missing from environment variables.');
    res.status(500).json({ error: 'Server misconfiguration: missing API key' });
    return;
  }

  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  try {
    const { messages } = req.body;

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders?.();

    const stream = await anthropic.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 200,
      system: SYSTEM_PROMPT,
      messages: messages
        .slice(-8)
        .map((m: { role: string; content: string }) => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: m.content,
        })),
    });

    for await (const event of stream) {
      if (
        event.type === 'content_block_delta' &&
        event.delta.type === 'text_delta'
      ) {
        const payload = JSON.stringify({ delta: { text: event.delta.text } });
        res.write(`data: ${payload}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (err) {
    console.error('Chat API error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.end();
    }
  }
}
