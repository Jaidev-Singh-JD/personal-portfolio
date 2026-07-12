/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

export type ProjectType = {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
};

export type ExperienceType = {
  year: string;
  title: string;
  institute: string;
  desc: string;
};

export type ToolsType = {
  imgSrc: string;
  label: string;
};

export type StatsType = {
  number: string;
  label: string;
};

export type TestimonialsType = {
  name: string;
  role: string;
  image: string;
  text: string;
  link: string;
};

export type LinksType = {
  label: string;
  link: string;
  icon: React.ElementType;
};

export type ProjectDetailType = {
  imgSrc: string;
  title: string;
  description: string;
  features: string[];
  role: string;
  tech: string[];
  tags: string[];
};

export type SkillCategoryType = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

export type AchievementType = {
  title: string;
  org: string;
  date: string;
  description: string;
  icon: React.ReactNode;
};
