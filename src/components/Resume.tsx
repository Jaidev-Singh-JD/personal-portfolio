/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
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
  title: 'Frontend Engineer',
  email: 'jaidevsingh.dev@gmail.com',
  phone: '+91 7982624025',
  linkedin: 'linkedin.com/in/jaidev-s-3a924721a',
  github: 'github.com/Jaidev-Singh-JD',
  location: 'Delhi, India',
  summary:
    'Frontend Engineer with 3+ years of experience building scalable, data-driven web applications for enterprise AdTech and marketing analytics platforms. Led development of a reusable component system adopted across 35+ global brands in 5 countries, and integrated large-scale REST APIs connecting frontend systems to a platform managing 650K+ records. Drove unit test coverage from near-zero to 80%+ across two production platforms, cutting regression bugs and strengthening release confidence.',
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
      'Highcharts.js',
      'Chart.js',
      'Tailwind CSS',
      'Bootstrap',
    ],
    Testing: ['Vitest', 'Unit Testing', 'Mocking', 'Test Coverage'],
    Backend: [
      'FastAPI',
      'Python',
      'REST APIs',
      'Alembic',
      'SQLAlchemy',
      'JWT Authentication',
    ],
    Databases: ['PostgreSQL', 'SQL'],
    Tools: ['Git', 'GitHub', 'CI/CD', 'Claude', 'GitHub Copilot', 'ChatGPT'],
    Practices: [
      'Agile',
      'Micro Frontends',
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
            'Designed and developed the Meridian onboarding flow from scratch — file upload, column mapping, validation, and stepper navigation with Redux state management.',
            "Built FastAPI validation endpoint for the Meridian file upload flow, parsing uploaded files and checking column names and data types against the expected schema, integrated alongside the Omni SDK's S3 presigned upload flow.",
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
  awards: [
    'Annalectual of the Quarter — Technology, Annalect India (Apr 2025)',
    'On the Spot Award, Annalect India (Aug 2025)',
    'On the Spot Award, Omnicom Global Solutions (Feb 2026)',
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
};

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

      {/* Paper page */}
      <div className='flex justify-center py-10 px-4'>
        <div
          className='w-full max-w-816px bg-white text-neutral-800 shadow-xl px-12 py-14'
          style={{ fontFamily: 'Calibri, Carlito, Arial, sans-serif' }}
        >
          {/* Header */}
          <div className='text-center border-b border-neutral-300 pb-5 mb-5'>
            <h1 className='text-2xl font-bold uppercase tracking-wide text-neutral-900'>
              {profile.name}
            </h1>
            <p className='mt-1 text-neutral-600'>{profile.title}</p>
            <div className='flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-3 text-sm text-neutral-600'>
              <span>{profile.email}</span>
              <span>•</span>
              <span>{profile.phone}</span>
              <span>•</span>
              <span>{profile.linkedin}</span>
              <span>•</span>
              <span>{profile.github}</span>
              <span>•</span>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Summary */}
          <section className='mb-5'>
            <h2 className='text-sm font-bold uppercase tracking-wide mb-2 text-neutral-900'>
              Profile Summary
            </h2>
            <p className='text-sm leading-relaxed text-neutral-700'>
              {profile.summary}
            </p>
          </section>

          <hr className='border-neutral-300 my-5' />

          {/* Experience */}
          <section className='mb-5'>
            <h2 className='text-sm font-bold uppercase tracking-wide mb-3 text-neutral-900'>
              Work Experience
            </h2>
            {profile.experience.map((job, i) => (
              <div key={i}>
                <div className='flex items-baseline justify-between flex-wrap gap-x-2'>
                  <p className='font-bold text-neutral-900'>{job.company}</p>
                  <p className='text-sm italic text-neutral-500'>
                    {job.period}
                  </p>
                </div>
                <div className='flex items-baseline justify-between flex-wrap gap-x-2 mb-3'>
                  <p className='text-sm italic font-semibold text-neutral-700'>
                    {job.role}
                  </p>
                  <p className='text-sm text-neutral-500'>{job.location}</p>
                </div>

                {job.products.map((product, j) => (
                  <div
                    key={j}
                    className={j > 0 ? 'mt-4' : ''}
                  >
                    <p className='text-sm font-semibold text-neutral-900 mb-1'>
                      {product.name}
                    </p>
                    <ul className='space-y-1'>
                      {product.highlights.map((h, k) => (
                        <li
                          key={k}
                          className='flex text-sm text-neutral-700'
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

          <hr className='border-neutral-300 my-5' />

          {/* Awards */}
          <section className='mb-5'>
            <h2 className='text-sm font-bold uppercase tracking-wide mb-2 text-neutral-900'>
              Awards & Recognition
            </h2>
            <ul className='space-y-1'>
              {profile.awards.map((a, i) => (
                <li
                  key={i}
                  className='flex text-sm text-neutral-700'
                >
                  <span className='mr-2'>•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </section>

          <hr className='border-neutral-300 my-5' />

          {/* Personal Projects */}
          <section className='mb-5'>
            <h2 className='text-sm font-bold uppercase tracking-wide mb-2 text-neutral-900'>
              Personal Projects
            </h2>
            {profile.projects.map((project, i) => (
              <div key={i}>
                <p className='text-sm text-neutral-700'>
                  <span className='font-bold text-neutral-900'>
                    {project.name}
                  </span>{' '}
                  ({project.tech.join(', ')}) — {project.description}
                </p>
              </div>
            ))}
          </section>

          <hr className='border-neutral-300 my-5' />

          {/* Technical Skills */}
          <section className='mb-5'>
            <h2 className='text-sm font-bold uppercase tracking-wide mb-2 text-neutral-900'>
              Technical Skills
            </h2>
            <div className='space-y-1'>
              {Object.entries(profile.skills).map(([category, items]) => (
                <p
                  key={category}
                  className='text-sm text-neutral-700'
                >
                  <span className='font-bold text-neutral-900'>
                    {category}:{' '}
                  </span>
                  {items.join(', ')}
                </p>
              ))}
            </div>
          </section>

          <hr className='border-neutral-300 my-5' />

          {/* Education */}
          <section>
            <h2 className='text-sm font-bold uppercase tracking-wide mb-2 text-neutral-900'>
              Education
            </h2>
            <div className='flex items-baseline justify-between flex-wrap gap-x-2'>
              <p className='font-bold text-neutral-900'>
                {profile.education.institution}
              </p>
              <p className='text-sm italic text-neutral-500'>
                {profile.education.period}
              </p>
            </div>
            <p className='text-sm text-neutral-700'>
              {profile.education.degree}
            </p>
            <p className='text-sm text-neutral-500 mt-1'>
              {profile.education.note}
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
