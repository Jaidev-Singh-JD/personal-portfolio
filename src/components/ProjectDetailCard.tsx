/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */
/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Custom modules
 */
import { fadeUp } from '@/lib/animation';

/**
 * Types
 */
import type { ProjectDetailType } from '@/types/index';

export const ProjectDetailCard = (project: ProjectDetailType) => {
  const { imgSrc, title, description, features, role, tech, tags } = project;

  return (
    <motion.div
      variants={fadeUp}
      className='flex flex-col border border-neutral-800 bg-neutral-900 rounded-xl overflow-hidden'
    >
      {/* Image section — small placeholder for now, swap imgSrc for real assets */}
      <div className='w-full h-28 bg-neutral-800'>
        <img
          src={imgSrc}
          alt={title}
          className='w-full h-full object-cover'
        />
      </div>

      <div className='p-4 flex flex-col gap-3'>
        {/* Tags */}
        <div className='flex flex-wrap gap-1.5'>
          {tags.map((tag, i) => (
            <span
              key={i}
              className='text-xs py-0.5 px-2 rounded-sm bg-neutral-800 text-green-400 border border-neutral-700'
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & description */}
        <div>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <p className='text-xs text-neutral-400 mt-1 leading-relaxed'>
            {description}
          </p>
        </div>

        {/* Key features */}
        <div>
          <p className='text-xs font-semibold text-neutral-200 mb-1.5'>
            Key Features
          </p>
          <ul className='space-y-0.5'>
            {features.map((feature, i) => (
              <li
                key={i}
                className='flex items-start gap-1.5 text-xs text-neutral-400'
              >
                <span className='text-green-400 mt-0.5'>▸</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* My contribution */}
        <p className='text-xs text-neutral-300 leading-relaxed border-t border-neutral-800 pt-3'>
          {role}
        </p>

        {/* Tech stack */}
        <div className='flex flex-wrap gap-1.5'>
          {tech.map((item, i) => (
            <span
              key={i}
              className='text-xs py-0.5 px-2 rounded-sm border border-neutral-700 text-neutral-300'
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
