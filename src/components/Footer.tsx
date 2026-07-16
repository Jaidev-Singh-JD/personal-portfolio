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
import { fadeUp } from '@/lib/animation';

/**
 * Constants
 */
import { navLinks, socialLinks } from '@/constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className='mt-8 sm:mt-10 border-t border-neutral-800 pt-10 pb-6'
    >
      <div className='flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left'>
        <div>
          <p className='text-lg font-semibold'>Jaidev Singh</p>
          <p className='text-sm text-neutral-400 mt-1'>
            Frontend Engineer, based in Delhi, India.
          </p>
        </div>

        <nav className='flex flex-wrap justify-center gap-x-5 gap-y-2'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.link}
              className='text-sm text-neutral-400 hover:text-green-400 transition-colors'
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className='flex gap-3 text-neutral-500'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-green-400 border-2 border-neutral-700 p-2 rounded-full hover:border-green-400 transition duration-200'
              >
                <Icon className='size-4' />
              </a>
            );
          })}
        </div>
      </div>

      <p className='text-xs text-neutral-600 text-center mt-8'>
        © {year} Jaidev Singh. All rights reserved. Unauthorized copying,
        modification, or distribution of this portfolio content is strictly
        prohibited.
      </p>
    </motion.footer>
  );
};
