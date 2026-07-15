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
import { Divider } from './components/Divider';
import { Footer } from './components/Footer';

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
    <main className='flex flex-col w-full max-w-4xl mx-auto px-4 py-8 sm:px-6 md:px-8 lg:pr-10 lg:pl-0 lg:max-w-6xl overflow-x-hidden'>
      <Hero />
      <Divider />
      <Stats />
      <Divider />
      <Projects />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Career />
      <Divider />
      <Achievements />
      <Divider />
      <Testimonials />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
};
