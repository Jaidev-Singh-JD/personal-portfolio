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
 * Assets
 */
import { SparkleIcon } from 'lucide-react';

export const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} /> {subtitle}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className='text-4xl font-bold capitalize mt-2 md:max-w-3xl'
      >
        {title}
      </motion.h2>
    </>
  );
};
