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
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';
import { AchievementCard } from '@/components/AchievementCard';

/**
 * Constants
 */
import { achievementsData } from '@/constants/index';

export const Achievements = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='achievements'
    >
      <SectionHeader
        subtitle='Recognition'
        title='Achievements & Awards'
      />
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-10 mt-10'
      >
        {achievementsData.map((achievement, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
          >
            <AchievementCard achievement={achievement} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
