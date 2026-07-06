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
  ProjectType
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Home,
  Mail,
  MessageCircle,
  Settings,
  User,
} from 'lucide-react';

import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

const navLinks: LinksType[] = [
  { label: 'Home', link: '#home', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
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
    link: '/#',
  },
  {
    icon: FaLinkedin,
    label: 'Linkedin',
    link: '/#',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    link: '/#',
  },
  {
    icon: FaYoutube,
    label: 'Youtube',
    link: '/#',
  },
];

const statsData: StatsType[] = [
  {
    number: '10+',
    label: 'Happy Clients',
  },
  {
    number: '03+',
    label: 'Years Of Experience',
  },
  {
    number: '15+',
    label: 'Projects Done',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/project-ph-1.jpeg',
    title: 'Todo App',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/project-ph-2.jpeg',
    title: 'File Manager App',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/project-ph-3.jpeg',
    title: 'Weather App',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: '/images/project-ph-4.jpeg',
    title: 'Student Management App',
    tags: ['API', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
];

export {
  socialLinks,
  navLinks,
  statsData,
  projectsData
};