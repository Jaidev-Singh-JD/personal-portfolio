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
    'Frontend Engineer with 3+ years of experience building scalable, data-driven web applications for enterprise AdTech and marketing analytics platforms. Led development of a reusable component system adopted across 35+ global brands in 5 countries, and integrated large-scale REST APIs connecting frontend systems to a platform managing 650K+ records. Drove unit test coverage from near-zero to 80%+ across two production platforms, cutting regression bugs and strengthening release confidence. Core strengths: React.js, TypeScript, Redux, Vue.js, Lit.dev (Web Components), and REST API integration, with a growing full-stack range in Python and FastAPI.',
  skills: {
    Frontend: [
      'React.js',
      'Redux',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Lit.dev',
      'Vue.js',
      'Angular',
      'Highcharts.js',
      'Chart.js',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
      'shadcn/ui',
      'Framer Motion',
    ],
    'Architecture & Patterns': [
      'Micro Frontends',
      'Single-SPA',
      'Component-Driven Design',
      'Reusable Component Libraries',
      'State Management (Redux Toolkit, Vuex, Pinia)',
    ],
    'Performance & Accessibility': [
      'Core Web Vitals (LCP, INP, CLS)',
      'Code Splitting & Lazy Loading',
      'SSR/SSG',
      'Bundle Optimization',
      'WCAG 2.2 / ARIA',
    ],
    Security: [
      'Content Security Policy (CSP)',
      'Input Validation',
      'XSS Mitigation (DOMPurify)',
      'JWT Authentication',
      'HttpOnly Cookies',
    ],
    Testing: [
      'Vitest',
      'Jest',
      'Playwright',
      'Cypress',
      'Mocking',
      'Test Coverage',
    ],
    Backend: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'Python',
      'Django',
      'REST APIs',
      'Alembic',
      'SQLAlchemy',
    ],
    Databases: ['PostgreSQL', 'MongoDB', 'SQL'],
    'Cloud & DevOps (Foundational)': [
      'AWS (S3, CloudFront, Lambda, Route 53)',
      'CI/CD (GitHub Actions, GitLab CI, Bitbucket Pipelines)',
      'Terraform',
      'CloudFormation',
    ],
    'Development Tools': [
      'Git',
      'GitHub',
      'Bitbucket',
      'Figma',
      'Claude',
      'Claude Code',
      'GitHub Copilot',
      'ChatGPT',
    ],
    'Engineering Practices': [
      'Agile (Scrum/Kanban)',
      'Jira',
      'Advanced Code Reviews',
      'Prompt Engineering',
      'LLM-assisted Development',
    ],
  },
  experience: [
    {
      company: 'Omnicom Media Group',
      location: 'Gurugram, India',
      role: 'Software Engineer (Frontend Engineer)',
      period: 'Apr 2023 – Jun 2026',
      products: [
        {
          name: 'GeoLift – Geo Experimentation & Incrementality Platform',
          highlights: [
            'Increased unit test coverage from near-zero to 80% across pre-campaign, form, core services/state, and utility modules (40+ test files), cutting recurring regression bugs reported by QA.',
            'Built reusable Lit.dev components for pre/post-campaign workflows (results-action buttons, nested data tables, test cloning, recommendation controls), reducing development time for new reporting features by an estimated 25-30%.',
            'Resolved 10+ critical UI defects in geoplot rendering, column mapping, and table layouts, directly unblocking campaign analysis.',
            'Implemented accessible (WCAG-compliant) styling across the application header and pre-campaign confirmation pages, improving usability for screen-reader users.',
          ],
        },
        {
          name: 'Omni Video Intelligence (OVI) – YouTube Targeting and Content',
          highlights: [
            'Built reusable core components (list tables, exclusion lists, channel/keyword/topic forms) adopted platform-wide for a tool used by 35+ brands across 5 countries, reducing duplicate code by an estimated 20%.',
            "Integrated 5+ REST API endpoints (curated lists, distribution, list metrics), including Google's YouTube Data API, connecting frontend to a platform managing 650K+ curated channels across 32 categories.",
            'Built distribution history tracking UI with full audit trail of request status, users, and timestamps, improving transparency for traders managing 50+ active campaigns.',
          ],
        },
        {
          name: 'Marketing Mix Modeling (MMM) & Meridian',
          highlights: [
            'Drove unit test coverage to 80%+ and implemented ESLint + Husky pre-commit hooks, cutting code review turnaround time for a team of 6+ engineers.',
            'Built a file management system with OLS SDK integration (upload, validation, progress tracking, delete) as a reusable React component, reducing failed-upload support requests.',
            'Designed and developed the Meridian onboarding flow from scratch - file upload, column mapping, validation, and stepper navigation with Redux state management.',
            "Built FastAPI validation endpoint for the Meridian file upload flow, parsing uploaded files and checking column names and data types against the expected schema, and returning descriptive errors for missing columns or type mismatches, integrated alongside the Omni SDK's S3 presigned upload flow.",
            'Built KPI dashboards using Highcharts.js with Top-N analysis and hybrid table-chart views, reducing time-to-insight for analysts by an estimated 30%.',
          ],
        },
        {
          name: 'SocialKit – Suite of Tools for Facebook Advertising',
          highlights: [
            'Built real-time campaign dashboards (Vue.js, Vuex, Chart.js) and automated data sync via AdForm/Flashtalking API integrations.',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Todo Application',
      tech: ['FastAPI', 'PostgreSQL'],
      description:
        'Built a production-style REST API end-to-end (JWT auth, Alembic migrations, scoped data access) to demonstrate backend fundamentals beyond frontend work.',
    },
  ],
  education: {
    institution: 'Guru Gobind Singh Indraprastha University',
    period: '2018 – 2022',
    degree: 'B.Tech – Mechanical and Automation Engineering (8.8/10)',
    note: 'Transitioned into frontend software development through self-driven learning in JavaScript, Vue.js, and React; professionally applying it since 2023.',
  },
  achievements: [
    'Annalectual of the Quarter – Technology, Omnicom (Apr 2025) - awarded for consistent, exceptional performance over the quarter',
    'On the Spot Award, Omnicom (Aug 2025) - recognized for delivering exceptional performance',
    'On the Spot Award, Omnicom (Feb 2026) - recognized for exceptional performance and dedication',
  ],
  languages: [
    { name: 'English', level: 'Professional Fluency' },
    { name: 'Hindi', level: 'Native' },
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

          {/* Professional Summary */}
          <section className='mb-4'>
            <SectionHeader>Professional Summary</SectionHeader>
            <p className='text-sm leading-relaxed text-neutral-800'>
              {profile.summary}
            </p>
          </section>

          {/* Core Competencies */}
          <section className='mb-4'>
            <SectionHeader>Core Competencies</SectionHeader>
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

          {/* Professional Experience */}
          <section className='mb-4'>
            <SectionHeader>Professional Experience</SectionHeader>
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

          {/* Key Projects */}
          <section className='mb-4'>
            <SectionHeader>Key Projects</SectionHeader>
            <ul className='space-y-0.5'>
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

          {/* Education */}
          <section className='mb-4'>
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
            <p className='text-sm text-neutral-800 mt-1'>
              {profile.education.note}
            </p>
          </section>

          {/* Achievements */}
          <section className='mb-4'>
            <SectionHeader>Achievements</SectionHeader>
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

          {/* Languages */}
          <section>
            <SectionHeader>Languages</SectionHeader>
            <div className='space-y-0.5'>
              {profile.languages.map((l, i) => (
                <p
                  key={i}
                  className='text-sm text-neutral-800'
                >
                  <span className='font-bold text-neutral-900'>{l.name}</span> –{' '}
                  {l.level}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
