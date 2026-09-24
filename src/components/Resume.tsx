/**
 * @copyright 2026 Jaidev Singh
 * All rights reserved. Unauthorized copying, modification, or distribution
 * of this file, via any medium, is strictly prohibited.
 */
/**
 * Node modules
 */
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

/**
 * Assets
 */
import { MoveLeft, Download } from 'lucide-react';

/**
 * Components
 */
import { Button } from '@/components/ui/button';

const profile = {
  name: 'Jaidev Singh',
  email: 'jaidevsingh.dev@gmail.com',
  phone: '+91 7982624025',
  linkedin: 'LinkedIn Profile',
  linkedinHref: 'https://www.linkedin.com/in/jaidev-s-3a924721a',
  location: 'Delhi, India',
  immediateJoiner: 'Immediate Joiner',
  summary:
    'Software Engineer with 3+ years of experience building customer-facing, UI-heavy features in React.js, Next.js, TypeScript, and modern JavaScript (ES6+) for enterprise SaaS platforms. Strong grounding in React fundamentals — functional components, Hooks, and state management (Redux) — with hands-on experience translating UX designs into performant, accessible, and maintainable production UI. Proven track record integrating REST APIs, building reusable/modular component libraries with Node.js-based backends, and driving unit and integration test coverage from near-zero to 80%+ across two production platforms. Comfortable working within Agile/Scrum teams, collaborating closely with Product, Design, and Backend engineers, and contributing to code reviews and CI/CD-based release processes.',
  skills: {
    Frontend: [
      'React.js (Hooks, functional components, Context API, Redux for state management)',
      'Next.js',
      'React Router',
      'Performance Optimization (memoization, lazy loading, code splitting)',
      'TypeScript',
      'JavaScript (ES6+, closures, promises, async/await)',
      'HTML5',
      'CSS3',
      'Responsive Design',
      'Vue.js',
      'Lit.dev',
      'Micro-frontend Architecture',
    ],
    'Quality & Testing': [
      'Vitest',
      'Unit Testing',
      'Integration Testing',
      'Mocking',
      'Test Coverage',
      'ESLint',
      'Code Reviews',
    ],
    'APIs & Backend': [
      'REST API Design & Integration',
      'Node.js',
      'FastAPI',
      'Python',
      'JWT Authentication',
    ],
    'Accessibility & UX': [
      'WCAG-compliant UI Implementation',
      'Design-to-Code Translation',
      'Cross-browser/Responsive UI',
    ],
    'Tooling & Practices': [
      'Git',
      'GitHub',
      'CI/CD Pipelines (GitHub Actions)',
      'Docker',
      'Agile/Scrum Ceremonies',
      'Sprint Planning',
      'Husky Pre-commit Hooks',
    ],
  },
  experience: [
    {
      company: 'Omnicom Media',
      location: 'Gurugram, India',
      role: 'Software Engineer',
      period: 'Apr 2023 – Jun 2026',
      products: [
        {
          name: 'GeoLift – Geo Experimentation & Incrementality Platform',
          highlights: [
            'Owned front-end build and test systems, increasing unit and integration test coverage from near-zero to 80%+ across 40+ test files, cutting recurring regression bugs and strengthening release confidence.',
            'Built reusable, modular React.js/TypeScript and Lit.dev components using Hooks and shared state patterns, reducing development time for new reporting features by an estimated 25-30%.',
            'Implemented client-side routing with React Router and performance optimizations (memoization, lazy loading, code splitting) across key application flows, improving load times and navigation.',
            'Translated UX designs and wireframes into production-ready, technically feasible UI, resolving 10+ critical UI defects across rendering, data mapping, and table/layout components.',
            'Implemented WCAG-compliant, accessible styling across key application flows, improving usability for screen-reader users and aligning UI with accessibility best practices.',
          ],
        },
        {
          name: 'Omni Video Intelligence (OVI) – YouTube Targeting and Content',
          highlights: [
            'Built reusable core UI components (list tables, exclusion lists, forms) adopted platform-wide across a B2B SaaS tool used by 35+ brands in 5 countries, reducing duplicate code by an estimated 20%.',
            "Collaborated with backend and DevOps engineers to design and integrate 5+ REST API endpoints, including Google's YouTube Data API, connecting the frontend to a platform managing 650K+ records.",
            'Built an audit-trail UI for distribution history tracking, improving transparency for users managing 50+ active campaigns.',
          ],
        },
        {
          name: 'Marketing Mix Modeling (MMM) & Meridian',
          highlights: [
            'Drove unit test coverage to 80%+ and implemented ESLint + Husky pre-commit hooks plus GitHub Actions CI/CD pipelines, improving code quality and cutting code review turnaround time for a team of 6+ engineers.',
            'Designed and built the Meridian onboarding flow from scratch - file upload, form validation, and multi-step navigation - using React, Context API, and Redux for state management.',
            'Built a FastAPI backend validation endpoint integrated with the React upload workflow, returning descriptive errors and reducing client-side validation complexity.',
            'Built KPI dashboards with Highcharts.js, reducing time-to-insight for analysts by an estimated 30%.',
          ],
        },
        {
          name: 'SocialKit – Suite of Tools for Facebook Advertising',
          highlights: [
            'Built real-time campaign dashboards (Vue.js, Vuex, Chart.js) and automated data sync via third-party REST API integrations, collaborating cross-functionally with backend engineers.',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'AI Chatbot — Claude API, Agent-Based Tool Orchestration & Function Calling',
      tech: ['Claude API', 'React', 'ShadCN UI'],
      description:
        'Built a chatbot integrating the Claude API with agent-based tool orchestration via function calling to dynamically fetch external API data based on user intent - a multi-step, event-driven LLM/agent workflow. Deployed via Vercel serverless functions; UI built with React, ShadCN UI, and GitHub Actions CI/CD.',
    },
    {
      name: 'Todo Application',
      tech: ['FastAPI', 'PostgreSQL'],
      description:
        'Built a production-style REST API end-to-end (JWT auth, Alembic migrations, scoped data access) to demonstrate backend fundamentals beyond frontend work.',
    },
  ],
  certifications: [
    'Vue.js 3 Essential Training (LinkedIn, 2024)',
    'React Essential Training (LinkedIn, 2024)',
    'Learning Jira Software (LinkedIn, 2025)',
    'FastAPI – The Complete Course 2026 (Udemy, 2025)',
    'SQL (Udemy, 2022)',
    'Tailwind CSS 3 Essential Training (LinkedIn Learning)',
    'UiPath Agentic Prompt Engineering (UiPath)',
  ],
  education: {
    institution: 'Guru Gobind Singh Indraprastha University',
    period: '2018 – 2022',
    degree: 'B.Tech – Mechanical and Automation Engineering (8.8/10)',
  },
  achievements: [
    'Annalectual of the Quarter – Technology, Annalect India (Apr 2025) - awarded for consistent, exceptional performance',
    'On the Spot Award, Annalect India (Aug 2025) - recognized for delivering exceptional performance',
    'On the Spot Award, Omnicom Global Solutions (Feb 2026) - recognized for exceptional performance and dedication',
  ],
};

// Section header styled to match the Word doc: bold, uppercase, black bottom rule
const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <h2 className='text-xs sm:text-sm font-bold uppercase tracking-wide pb-1.5 mb-2.5 border-b border-neutral-900 text-neutral-900'>
    {children}
  </h2>
);

export const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen overflow-y-auto bg-neutral-300'
    >
      {/* Sticky action bar */}
      <div className='sticky top-0 z-10 flex items-center justify-between px-6 py-3 bg-white border-b border-neutral-300 shadow-sm'>
        <Button
          variant='outline'
          asChild
          className='border-neutral-400 text-neutral-800 hover:bg-neutral-100 hover:text-neutral-900'
        >
          <Link to='/'>
            <MoveLeft className='mr-2 size-4' />
            Back to Portfolio
          </Link>
        </Button>

        <Button asChild>
          <a
            href='/resume.pdf'
            download='Jaidev_Singh_Resume.pdf'
          >
            <Download className='mr-2 size-4' />
            Download Resume
          </a>
        </Button>
      </div>

      {/* Paper page — single US Letter page (8.5in x 11in) on larger screens, same margins as the Word doc; fluid on mobile so it doesn't get zoomed out */}
      <div className='flex justify-center py-6 px-3 sm:py-10 sm:px-4'>
        <div
          className='bg-white text-neutral-800 shadow-xl w-full max-w-204 px-5 py-6 sm:px-10 sm:py-10 md:px-15 md:py-12 md:min-h-264'
          style={{
            fontFamily: 'Calibri, Carlito, Arial, sans-serif',
          }}
        >
          {/* Header */}
          <div className='text-center mb-4'>
            <h1 className='text-lg sm:text-xl font-bold text-neutral-900'>
              {profile.name.toUpperCase()}
            </h1>
            <div className='flex flex-wrap items-center justify-center gap-x-1.5 mt-1 text-xs sm:text-sm text-neutral-800'>
              <span>{profile.email}</span>
              <span>|</span>
              <span>{profile.phone}</span>
              <span>|</span>
              <span>{profile.location}</span>
              <span>|</span>
              <a
                href={profile.linkedinHref}
                target='_blank'
                rel='noreferrer'
                className='text-blue-700 underline'
              >
                {profile.linkedin}
              </a>
              <span>|</span>
              <span className='font-bold text-green-700'>
                {profile.immediateJoiner}
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <section className='mb-4'>
            <SectionHeader>Profile Summary</SectionHeader>
            <p className='text-sm leading-relaxed text-neutral-800'>
              {profile.summary}
            </p>
          </section>

          {/* Technical Skills */}
          <section className='mb-4'>
            <SectionHeader>Technical Skills</SectionHeader>
            <div className='space-y-1'>
              {Object.entries(profile.skills).map(([category, items]) => (
                <p
                  key={category}
                  className='text-sm leading-relaxed text-neutral-800'
                >
                  <span className='font-bold text-neutral-900'>
                    {category}:{' '}
                  </span>
                  {items.join(', ')}
                </p>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className='mb-4'>
            <SectionHeader>Work Experience</SectionHeader>
            {profile.experience.map((job, i) => (
              <div key={i}>
                <div className='flex items-baseline justify-between flex-wrap gap-x-2'>
                  <p className='text-sm font-bold text-neutral-900'>
                    {job.company} – {job.location}
                  </p>
                  <p className='text-sm font-bold text-neutral-900'>
                    {job.period}
                  </p>
                </div>
                <p className='text-sm italic text-neutral-800 mb-2'>
                  {job.role}
                </p>

                {job.products.map((product, j) => (
                  <div
                    key={j}
                    className={j > 0 ? 'mt-3' : ''}
                  >
                    <p className='text-sm font-bold text-neutral-900 mb-1'>
                      {product.name}
                    </p>
                    <ul className='space-y-0.5'>
                      {product.highlights.map((h, k) => (
                        <li
                          key={k}
                          className='flex text-sm text-neutral-800'
                        >
                          <span className='mr-2'>•</span>
                          <span className='leading-relaxed'>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </section>

          {/* Personal Projects */}
          <section className='mb-4'>
            <SectionHeader>Personal Projects</SectionHeader>
            <ul className='space-y-2'>
              {profile.projects.map((project, i) => (
                <li
                  key={i}
                  className='flex text-sm text-neutral-800'
                >
                  <span className='mr-2'>•</span>
                  <span className='leading-relaxed'>
                    <span className='font-bold text-neutral-900'>
                      {project.name}
                    </span>{' '}
                    ({project.tech.join(', ')}) - {project.description}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Certification */}
          <section className='mb-4'>
            <SectionHeader>Certification</SectionHeader>
            <p className='text-sm leading-relaxed text-neutral-800'>
              {profile.certifications.join(' | ')}
            </p>
          </section>

          {/* Awards & Recognition */}
          <section className='mb-4'>
            <SectionHeader>Awards & Recognition</SectionHeader>
            <ul className='space-y-0.5'>
              {profile.achievements.map((a, i) => (
                <li
                  key={i}
                  className='flex text-sm text-neutral-800'
                >
                  <span className='mr-2'>•</span>
                  <span className='leading-relaxed'>{a}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <SectionHeader>Education</SectionHeader>
            <div className='flex items-baseline justify-between flex-wrap gap-x-2'>
              <p className='text-sm font-bold text-neutral-900'>
                {profile.education.institution}
              </p>
              <p className='text-sm font-bold text-neutral-900'>
                {profile.education.period}
              </p>
            </div>
            <p className='text-sm italic text-neutral-800'>
              {profile.education.degree}
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
