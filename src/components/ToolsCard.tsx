/**
 * @copyright 2026 Jaidev Singh
 * All rights reserved. Unauthorized copying, modification, or distribution
 * of this file, via any medium, is strictly prohibited.
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
 *  Types
 */
import type { ToolsType } from '@/types';

export const ToolsCard = ({ tool }: { tool: ToolsType }) => {
  return (
    <motion.div
      variants={fadeUp}
      className='border border-neutral-700 rounded-md flex justify-center items-center flex-col py-2.5'
    >
      <img
        src={tool.imgSrc}
        alt={tool.label}
        className='size-6'
      />

      <p className='text-sm font-bold mt-1.5'>{tool.label}</p>
    </motion.div>
  );
};
