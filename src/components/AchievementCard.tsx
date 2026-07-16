/**
 * @copyright 2026 Jaidev Singh
 * All rights reserved. Unauthorized copying, modification, or distribution
 * of this file, via any medium, is strictly prohibited.
 */

import type { AchievementType } from '@/types/index';

type AchievementCardProps = {
  achievement: AchievementType;
};

export const AchievementCard = ({ achievement }: AchievementCardProps) => {
  const { title, org, date, description, icon } = achievement;

  return (
    <div className='h-full flex flex-col justify-between gap-6 p-6 border border-neutral-800 bg-neutral-900 rounded-xl'>
      <div className='flex items-center gap-3'>
        <div className='flex items-center justify-center size-11 rounded-lg bg-neutral-800 border border-neutral-700'>
          {icon}
        </div>
        <div>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <p className='text-xs text-neutral-500'>
            {org} • {date}
          </p>
        </div>
      </div>

      <p className='text-sm text-neutral-400'>{description}</p>
    </div>
  );
};
