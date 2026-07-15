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
import { staggerContainer } from '@/lib/animation';

/**
 * Components
 */
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectDetailCard } from '@/components/ProjectDetailCard';

/**
 * Constants
 */
import { projectsDetailData } from '@/constants/index';

export const Projects = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -100px 0px' }}
      variants={staggerContainer(0)}
      className='scroll-mt-10'
      id='projects'
    >
      <SectionHeader
        subtitle='Projects'
        title='My Featured Projects'
      />

      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10'
        variants={staggerContainer(0.5)}
      >
        {projectsDetailData.map((project, i) => (
          <ProjectDetailCard
            key={i}
            {...project}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};
