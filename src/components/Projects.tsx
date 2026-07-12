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
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeader
        subtitle='Projects'
        title='My Featured Projects'
      />

      <motion.div
        className='grid md:grid-cols-2 gap-10 mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
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
