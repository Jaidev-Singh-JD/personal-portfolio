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
import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='scroll-mt-10'
      id='about'
    >
      <SectionHeader
        subtitle='About'
        title='Building interfaces that make complex data simple'
      ></SectionHeader>
      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300'
      >
        Frontend Engineer with 3+ years of experience building enterprise AdTech
        applications used by global marketing teams. I turn messy backend logic
        into interfaces that actually make sense - geo-experimentation tools,
        marketing analytics dashboards, campaign management platforms.
        Enterprise AdTech products most people never see, but internal teams
        rely on every day. I work across the frontend stack and I'm building out
        real backend fundamentals too, so I can speak both sides instead of just
        handing off. I care about the parts that don't show up in a screenshot -
        solid test coverage, clean component boundaries, code the next person
        won't have to fight with.I actively incorporate AI into my daily
        workflow to improve productivity, accelerate development, enhance code
        quality, and explore better engineering solutions.
      </motion.p>
      <motion.div
        variants={fadeUp}
        transition={{ delay: 0.2 }}
      >
        <Button className='mt-5'>
          <a href='#contact'>Contact Me</a>
        </Button>
      </motion.div>
    </motion.section>
  );
};
