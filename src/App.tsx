/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Components
 */
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Projects } from '@/components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Career } from './components/Career';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Achievements } from './components/Achievements';

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Skills />
      <Career />
      <Achievements />
      <Testimonials />
      <Contact />
    </main>
  );
};
