/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */
/**
 * Node modules
 */
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

/**
 * Assets
 */
import { Eye } from 'lucide-react';

/**
 * Custom modules
 */
import { fadeUp, staggerContainer } from '@/lib/animation';

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import { RoleTypewriter } from '@/components/RoleTypewriter';

/**
 * Assets
 */
import { SparkleIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-10 sm:pt-16'
      id='hero'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} />
        <span>Introduction</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16'
      >
        I'm <RoleTypewriter commaSeparator={true} /> focused on building clean,
        maintainable, high-quality software.
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className='mt-5 flex gap-2'
      >
        <Button asChild>
          <a href='#projects'>View Projects</a>
        </Button>
        <Button
          variant='outline'
          asChild
        >
          <Link to='/resume'>
            <Eye className='mr-2 size-4' />
            View CV
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  );
};
