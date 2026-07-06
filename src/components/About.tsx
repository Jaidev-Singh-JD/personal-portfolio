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
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Transforming complexity into effortless design'
      ></SectionHeader>
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        I'm a Frontend Engineer with 3+ years of experience specializing in
        building scalable, data-driven web applications. At Omnicom Media Group,
        I owned and developed modules across five enterprise products i.e.
        Geolift, MMM (Marketing Mix Modeling), OVI(Omni Video Intelligence),
        Meridian ,Social Kit — spanning geo-experimentation, YouTube targeting,
        marketing mix modeling experimentation Campaign Spend, and Meta advertising. My core stack is Vue.js,
        React, TypeScript, and Lit.dev, with a strong focus on component
        architecture, performance, and clean code. I enjoy turning complex data
        and business logic into interfaces that feel simple and intuitive to
        use.
      </motion.p>
      <motion.div
      variants={fadeUp}
      transition={{delay:0.2}}>
        <Button className='mt-5'>Contact Me</Button>
      </motion.div>
    </motion.section>
  );
};
