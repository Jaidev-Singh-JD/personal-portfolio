/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */
/**
 * Types
 */
import type { ExperienceType } from '@/types';

export const ExpCard = ({ item }: { item: ExperienceType }) => {
  return (
    <div className='relative group'>
      <div className='absolute -left-7.5 top-2 size-3 bg-muted-foreground group-hover:bg-primary rounded-full transition duration-300'></div>

      <span className='text-neutral-400 lining-nums group-hover:text-primary transition duration-300'>
        {item.year}
      </span>

      <h3 className='text-lg font-semibold mt-1'>{item.institute}</h3>

      <p className='text-sm text-neutral-400 mb-1'>
        <span className='font-medium text-foreground'>{item.title}</span>
      </p>

      <p className='text-sm text-neutral-400'>{item.desc}</p>
    </div>
  );
};
