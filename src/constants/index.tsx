/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  LinksType,
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

export {
  socialLinks,
  navLinks,
};