/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import {useEffect} from 'react';

/**
 * Components
 */
import {Home} from '@/components/Home';
import { Stats } from '@/components/Stats';
import { Projects } from '@/components/Projects';
import {About} from './components/About' 

export const App = () => {
  return (
    <main className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl'>
      <Home />
      <Stats />
      <Projects/>
      <About/>
    </main>
  );
};
