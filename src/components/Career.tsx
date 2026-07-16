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
import { fadeUp, staggerContainer } from '@/lib/animation';

/**
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';
import { ExpCard } from '@/components/ExpCard';

/**
 * Constants
 */
import { experience } from '@/constants';

export const Career = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='scroll-mt-10'
      id='career'
    >
      <SectionHeader
        subtitle='Career'
        title='Professional Experience'
      />
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        With 3+ years of experience turning complex requirements into interfaces
        people actually enjoy using. Every project sharpens the same focus:
        clean code, solid architecture, and thoughtful design.
      </motion.p>
      <div className='grid gap-x-10 mt-6 md:grid-cols-2'>
        <motion.div
          variants={fadeUp}
          className='mb-16 md:mb-0'
        >
          <div className='space-y-8 border-l border-border pl-6'>
            {experience.map((item, i) => (
              <ExpCard
                key={i}
                item={item}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
