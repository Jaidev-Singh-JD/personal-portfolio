/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  LinksType,
  StatsType,
  ToolsType,
  ExperienceType,
  TestimonialsType,
  ProjectDetailType,
  AchievementType,
  SkillCategoryType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FolderKanban,
  Wrench,
  Home,
  Mail,
  MessageCircle,
  Paintbrush,
  Palette,
  Boxes,
  Accessibility,
  BarChart3,
  ShieldCheck,
  Server,
  Database,
  Layers,
  GitBranch,
  Sparkles,
  Trophy,
  User,
} from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: FolderKanban,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Skills',
    link: '#skills',
    icon: Wrench,
  },
  { label: 'Career', link: '#career', icon: Briefcase },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: FaGithub,
    label: 'Github',
    link: 'https://github.com/Jaidev-Singh-JD',
  },
  {
    icon: FaLinkedin,
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/jaidev-s-3a924721a',
  },
  {
    icon: SiGmail,
    label: 'Gmail',
    link: 'mailto:jaidevsingh.dev@gmail.com?subject=Portfolio Inquiry',
  },
];

const statsData: StatsType[] = [
  {
    number: '03+',
    label: 'Years Of Experience',
  },
  {
    number: '35+',
    label: 'Brands Served',
  },
  {
    number: '80%+',
    label: 'Test Coverage',
  },
];

const skillsData: SkillCategoryType[] = [
  {
    title: 'Accessibility',
    icon: <Accessibility className='h-6 w-6 text-green-400' />,
    skills: ['WCAG 2.2', 'ARIA', 'Semantic HTML5'],
  },
  {
    title: 'Architecture Patterns',
    icon: <Layers className='h-6 w-6 text-green-400' />,
    skills: ['Micro Frontends', 'Single-SPA', 'Component-Driven Design'],
  },
  {
    title: 'State Management',
    icon: <Boxes className='h-6 w-6 text-green-400' />,
    skills: ['Redux', 'Vuex', 'Pinia'],
  },
  {
    title: 'UI Systems & Animation',
    icon: <Palette className='h-6 w-6 text-green-400' />,
    skills: ['shadcn/ui', 'Tailwind CSS', 'Motion (Framer Motion)'],
  },
  {
    title: 'Styling Foundations',
    icon: <Paintbrush className='h-6 w-6 text-green-400' />,
    skills: ['CSS3', 'SASS / SCSS', 'CSS Modules', 'Bulma'],
  },
  {
    title: 'Testing & Quality',
    icon: <ShieldCheck className='h-6 w-6 text-green-400' />,
    skills: ['Unit Testing', 'Test Coverage', 'Mocking'],
  },

  {
    title: 'Data Visualization',
    icon: <BarChart3 className='h-6 w-6 text-green-400' />,
    skills: ['Highcharts.js', 'Chart.js'],
  },
  {
    title: 'Testing & Quality',
    icon: <ShieldCheck className='h-6 w-6 text-green-400' />,
    skills: [
      'Vitest',
      'Unit Testing',
      'Mocking',
      'Test Coverage',
      'ESLint',
      'Husky',
    ],
  },
  {
    title: 'Databases',
    icon: <Database className='h-6 w-6 text-green-400' />,
    skills: ['PostgreSQL', 'SQL'],
  },
  {
    title: 'Architecture & Practices',
    icon: <Layers className='h-6 w-6 text-green-400' />,
    skills: ['Micro Frontends', 'Component-Driven Design', 'Agile'],
  },
  {
    title: 'AI-Assisted Development',
    icon: <Sparkles className='h-6 w-6 text-green-400' />,
    skills: [
      'Claude',
      'GitHub Copilot',
      'ChatGPT',
      'Prompt Engineering',
      'LLM-assisted Development',
    ],
  },
  {
    title: 'Backend & APIs',
    icon: <Server className='h-6 w-6 text-green-400' />,
    skills: [
      'FastAPI',
      'Python',
      'REST APIs',
      'SQLAlchemy',
      'Alembic',
      'JWT Authentication',
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: <GitBranch className='h-6 w-6 text-green-400' />,
    skills: ['Git', 'GitHub', 'CI/CD'],
  },
];

const experience: ExperienceType[] = [
  {
    year: 'Apr 2023 - Jun 2026',
    title: 'Frontend Engineer',
    institute: 'Omnicom Media Group',
    desc: 'Built and maintained core frontend modules across four enterprise AdTech platforms — GeoLift (geo-experimentation), OVI (YouTube targeting), MMM/Meridian (marketing mix modeling), and SocialKit (Meta advertising) — using React, Vue.js, TypeScript, FastAPI, and Python. Drove unit test coverage from near-zero to 80%+ and integrated REST APIs powering a platform used across 35+ global brands.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'React.js',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Vue.js',
    imgSrc: '/images/tools/vue-js.svg',
  },
  {
    label: 'Angular',
    imgSrc: '/images/tools/angular.svg',
  },
  {
    label: 'Redux',
    imgSrc: '/images/tools/Redux.svg',
  },
  {
    label: 'TypeScript',
    imgSrc: '/images/tools/typescript.svg',
  },
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Express.js',
    imgSrc: '/images/tools/expressjs.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },
  {
    label: 'Fastapi',
    imgSrc: '/images/tools/fastapi.svg',
  },
  {
    label: 'Django',
    imgSrc: '/images/tools/django.svg',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Hassan Sarker',
    role: 'Sr. Product Manager, American Express',
    image: '/images/hassan.jfif',
    text: "Jaidev is a dependable and skilled front-end engineer whose contributions across our OCS product suite at Annalect have been more impactful than his quiet consistency might suggest. One of Jaidev's standout contributions was single-handedly developing the auto-upload feature for Agile MMM — a critical piece of functionality that required close coordination with multiple data teams to ensure accuracy and reliability. He navigated that cross-functional complexity with focus and delivered a feature that the broader team could count on. That kind of end-to-end ownership on a technically demanding feature is a real mark of a strong engineer. Beyond MMM, Jaidev played a meaningful role in GeoLift's front-end UI, delivering key tweaks and improvements that kept the product sharp and functional through multiple iterations. Across all of our OCS initiatives, he showed up consistently and got things done without fanfare. What I appreciate most about Jaidev is his reliability. As a PM, knowing that something is in good hands is half the battle — and with Jaidev, that was never a question. He's the kind of engineer that every team needs: technically solid, collaborative, and quietly instrumental to the success of the products he works on. Any team would be well served to have Jaidev on their side.",
    link: 'https://www.linkedin.com/in/hsarker/',
  },
  {
    name: 'Ghulam Habib',
    role: 'Lead Software Engineer, Annalect',
    image: '/images/ghulam.jfif',
    text: "I've had the pleasure of working with Jaidev for over two years, and throughout that time, he has consistently demonstrated strong expertise in frontend technologies. From architecting and building core components to delivering polished, user-centric experiences, he brings both technical excellence and attention to detail to everything he works on. Beyond his technical skills, Jaidev is an outstanding teammate. He collaborates effectively across teams, approaches challenges with a positive attitude, and is always willing to go the extra mile to support others. He's particularly great at mentoring junior engineers, sharing knowledge generously, and helping them grow with patience and encouragement. Any team would benefit from having Jaidev's combination of technical talent, leadership, and collaborative spirit.",
    link: 'https://www.linkedin.com/in/habibghulam/',
  },
  {
    name: 'Hari Mishra',
    role: 'Engineering Leader & Frontend Architect, Omnicom',
    image: '/images/hari.jfif',
    text: 'Jaidev is an exceptional software engineer and a phenomenal team player. Working alongside him on our project, I witnessed firsthand his ability to adapt to complex technical environments under tight timelines. Coming from a Vue.js background, he seamlessly transitioned into our Lit web components stack within a week, instantly taking ownership of user stories and delivering high-quality code. He is a naturally proactive, responsible, and quick-witted developer. With his strong frontend foundation coupled with an excellent grasp of backend frameworks like FastAPI, Jaidev has a fantastic full-stack mindset. He would be an invaluable asset to any engineering organization looking for a dependable, sharp, and self-driven developer.',
    link: 'https://www.linkedin.com/in/hari-mishra/',
  },
  {
    name: 'Chaitra Thimmaiah',
    role: 'Lead, AI and Data Automation',
    image: '/images/chaitra.png',
    text: 'I had the privilege of working with Jaidev on two projects. In my experience, Jaidev demonstrates exceptional attention to detail and consistently goes above and beyond to gain a thorough understanding of project requirements. He actively engages in discussions around product enhancements, contributing meaningful insights that add significant value. Jaidev collaborates effectively with team members and is committed to continuous learning, staying abreast of emerging technologies. He is a quick learner and an invaluable asset to the team.',
    link: 'https://www.linkedin.com/in/chaitra-thimmaiah-2666b5218/',
  },
];

const projectsDetailData: ProjectDetailType[] = [
  {
    imgSrc: '/images/geolift.png',
    title: 'GeoLift Planner',
    description:
      'Platform for planning, executing, and measuring geo-based lift experiments at scale - enabling accurate measurement of incremental advertising impact using synthetic control methodology without requiring individual-level data matching.',
    features: [
      'Synthetic control generation',
      'Power analysis & experiment design simulation',
      'Statistical significance testing',
      'Real-time reporting dashboards',
    ],
    role: 'Built reusable Lit.dev components for pre/post-campaign workflows (results-action buttons, nested data tables, test cloning, recommendation controls), resolved 10+ critical UI defects in geoplot rendering and table layouts, and drove unit test coverage from near-zero to 80% across 40+ test files.',
    tech: ['Lit.dev', 'Web Components', 'Vite', 'TypeScript', 'Vitest'],
    tags: ['AdTech', 'Data Visualization'],
  },
  {
    imgSrc: '/images/mmm.png',
    title: 'Marketing Mix Modeling (MMM) & Meridian',
    description:
      'Marketing Mix Modeling platform enabling data-driven budget optimization across marketing channels - surfacing channel contribution, ROI, and diminishing-returns analysis to guide budget allocation.',
    features: [
      'Budget optimization & channel performance analysis',
      'File upload, validation & schema checking pipeline',
      'KPI dashboards with Top-N analysis',
      'Stepper-based onboarding flow',
    ],
    role: 'Designed and built the Meridian onboarding flow from scratch (file upload, column mapping, validation, stepper navigation with Redux), a reusable file management system with OLS SDK integration, a FastAPI validation endpoint for schema checking, and KPI dashboards using Highcharts.js - reducing analyst time-to-insight by an estimated 30%.',
    tech: ['React', 'Redux', 'FastAPI', 'Python', 'Highcharts.js'],
    tags: ['Analytics', 'Full Stack'],
  },
  {
    imgSrc: '/images/ovi.png',
    title: 'Omni Video Intelligence (OVI)',
    description:
      'Platform for curating and managing YouTube channel targeting and content exclusion at scale, used by traders running large-scale advertising campaigns across 35+ brands in 5 countries.',
    features: [
      'Channel, keyword & topic exclusion lists',
      'Curated list distribution & metrics',
      'YouTube Data API integration',
      'Distribution history & audit trail tracking',
    ],
    role: 'Built reusable core components (list tables, exclusion lists, channel/keyword/topic forms) adopted platform-wide, integrated 5+ REST API endpoints (including the YouTube Data API) connecting the frontend to a platform managing 650K+ curated channels across 32 categories, and built a full audit-trail UI for distribution history tracking.',
    tech: ['Lit.dev', 'Web Components', 'REST APIs', 'TypeScript'],
    tags: ['AdTech', 'API Integration'],
  },
  {
    imgSrc: '/images/socialkit.png',
    title: 'SocialKit',
    description:
      'Suite of internal tools supporting Facebook advertising campaign management, real-time reporting, and automated data synchronization.',
    features: [
      'Real-time campaign dashboards',
      'Automated data sync (AdForm & Flashtalking APIs)',
      'Chart-based performance visualization',
    ],
    role: 'Built real-time campaign dashboards and automated data sync pipelines integrating with AdForm and Flashtalking APIs.',
    tech: ['Vue.js', 'Vuex', 'Chart.js', 'REST APIs'],
    tags: ['AdTech', 'Dashboards'],
  },
];

const achievementsData: AchievementType[] = [
  {
    title: 'Annalectual of the Quarter',
    org: 'Omnicom Media Group',
    date: 'Apr 2025',
    description:
      'Awarded for consistent, exceptional performance over the quarter.',
    icon: <Trophy className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'On the Spot Award',
    org: 'Omnicom Media Group',
    date: 'Aug 2025',
    description: 'Recognized for delivering exceptional performance.',
    icon: <Trophy className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'On the Spot Award',
    org: 'Omnicom Media Group',
    date: 'Feb 2026',
    description: 'Recognized for exceptional performance and dedication.',
    icon: <Trophy className='h-6 w-6 text-green-400' />,
  },
];

export {
  socialLinks,
  navLinks,
  statsData,
  skillsData,
  tools,
  experience,
  testimonials,
  projectsDetailData,
  achievementsData,
};
