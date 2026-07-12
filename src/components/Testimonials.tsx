/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */
/**
 * Node modules
 */
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Custom modules
 */
import { fadeUp } from '@/lib/animation';

/**
 *  Assets
 */
import { ChevronLeftIcon, ChevronRightIcon, SparkleIcon } from 'lucide-react';

/**
 *  Constants
 */
import { testimonials } from '@/constants';

const LONG_TEXT_THRESHOLD = 220;

export const Testimonials = () => {
  const [curSlide, setCurSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const next = () => {
    setCurSlide((prev) => (prev + 1) % testimonials.length);
    setExpanded(false);
  };
  const prev = () => {
    setCurSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setExpanded(false);
  };

  const currentText = testimonials[curSlide].text;
  const isLong = currentText.length > LONG_TEXT_THRESHOLD;

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className='mt-20 scroll-mt-10'
      id='testimonials'
    >
      <p className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'>
        <SparkleIcon size={15} />
        Testimonials
      </p>
      <h2 className='text-4xl font-bold capitalize mt-2 md:max-w-3xl'>
        From the people I've worked with
      </h2>

      <div className='mt-10 relative w-full'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={curSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            layout
            className='border rounded-3xl border-neutral-800 bg-neutral-900/10 p-8 flex flex-col md:flex-row items-start gap-6'
          >
            <img
              src={testimonials[curSlide].image}
              alt='testimonials[curSlide].name'
              className='size-20 rounded-full object-cover'
            />
            <div className='flex-1 space-y-4'>
              <div>
                <h3 className='text-lg font-semibold text-white'>
                  <a
                    href={testimonials[curSlide].link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {testimonials[curSlide].name}
                  </a>
                </h3>
                <p className='text-sm text-neutral-400'>
                  {testimonials[curSlide].role}
                </p>
              </div>

              <div>
                <p
                  className={`text-neutral-300 leading-relaxed ${
                    isLong && !expanded ? 'line-clamp-4' : ''
                  }`}
                >
                  {currentText}
                </p>

                {isLong && (
                  <button
                    onClick={() => setExpanded((prev) => !prev)}
                    className='mt-2 text-sm font-medium text-green-400 hover:text-green-300 transition'
                  >
                    {expanded ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className='flex gap-4 mt-8'>
          <button
            onClick={prev}
            className='size-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-800 transition'
          >
            <ChevronLeftIcon size={18} />
          </button>

          <button
            onClick={next}
            className='size-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-800 transition'
          >
            <ChevronRightIcon size={18} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};
