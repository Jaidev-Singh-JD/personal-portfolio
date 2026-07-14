/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState, useEffect, useRef } from 'react';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Constants
 */
import { navLinks } from '@/constants';

const IDLE_DELAY = 2000; // ms before menu fades out

export const FloatingMenu = () => {
  const [active, setActive] = useState('#hero');
  const [visible, setVisible] = useState(true);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const showMenu = () => {
      setVisible(true);

      if (idleTimer.current) clearTimeout(idleTimer.current);

      idleTimer.current = setTimeout(() => {
        setVisible(false);
      }, IDLE_DELAY);
    };

    window.addEventListener('mousemove', showMenu);
    window.addEventListener('scroll', showMenu, { passive: true });
    idleTimer.current = setTimeout(() => setVisible(false), IDLE_DELAY);

    return () => {
      window.removeEventListener('mousemove', showMenu);
      window.removeEventListener('scroll', showMenu);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed right-10 top-1/2 -translate-y-1/2 border backdrop-blur-sm pt-4 rounded-full z-10 hidden lg:block transition-opacity duration-500 ease-in-out',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
    >
      {navLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.link}
            onClick={() => setActive(link.link)}
            className={cn(
              'text-neutral-400 flex items-center gap-2 hover:text-primary transition-colors duration-200 mb-6 px-4',
              active === link.link && 'text-primary',
            )}
          >
            <Icon className='size-5' />
          </a>
        );
      })}
    </div>
  );
};
