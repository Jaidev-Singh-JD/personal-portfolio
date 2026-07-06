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
import { fadeUp, staggerContainer } from '@/lib/animation';

/**
 * Constants
 */
import { statsData } from '@/constants';

export const Stats = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={staggerContainer(0.6)}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20'
    >
        {statsData.map((stats, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className='border border-neutral-700 rounded-xl flex justify-center items-center flex-col py-6'
          >
            <p className='text-4xl capitalize font-bold lining-nums'>{stats.number}</p>
            <p className=''>{stats.label}</p>
          </motion.div>
        ))}
    </motion.section>
  );
};
