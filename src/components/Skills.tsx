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
import { SkillCard } from '@/components/SkillCard';
import { ToolsCard } from '@/components/ToolsCard';

/**
 * Constants
 */
import { skillsData, tools } from '@/constants/index';

export const Skills = () => {
  return (
    <section
      className='scroll-mt-10'
      id='skills'
    >
      <SectionHeader
        subtitle='Expertise'
        title='Skills & Tools'
      />
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer(0.2)}
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10'
      >
        {tools.map((tool, i) => (
          <ToolsCard
            key={i}
            tool={tool}
          />
        ))}
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer(0.2)}
        className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'
      >
        {skillsData.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeUp}
          >
            <SkillCard category={category} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
