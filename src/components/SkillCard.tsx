/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

import type { SkillCategoryType } from '@/types/index';

type SkillCardProps = {
  category: SkillCategoryType;
};

export const SkillCard = ({ category }: SkillCardProps) => {
  const { title, icon, skills } = category;

  return (
    <div className='h-full flex flex-col justify-between gap-6 p-6 border border-neutral-800 bg-neutral-900 rounded-xl'>
      <div className='flex items-center gap-3'>
        <div className='flex items-center justify-center size-11 rounded-lg bg-neutral-800 border border-neutral-700'>
          {icon}
        </div>
        <h3 className='text-lg font-semibold'>{title}</h3>
      </div>

      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, i) => (
          <span
            key={i}
            className='text-xs py-1 px-2.5 rounded-sm border border-neutral-700 text-neutral-300'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
