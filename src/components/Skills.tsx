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
import { SkillCard } from '@/components/SkillCard';
import { ToolsCard } from '@/components/ToolsCard';

/**
 * Constants
 */
import { skillsData, tools } from '@/constants/index';

export const Skills = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='skills'
    >
      <SectionHeader
        subtitle='Expertise'
        title='Skills & Tools'
      />

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5 mt-10'
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
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
        className='grid md:grid-cols-2 gap-10 mt-10'
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
    </motion.section>
  );
};
