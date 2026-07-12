/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import { RoleTypewriter } from '@/components/RoleTypewriter';

/**
 * Constants
 */
import { socialLinks } from '@/constants';

export const Profile = () => {
  return (
    <aside className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-x-10'>
          <h1 className='text-3xl font-bold'>Jaidev Singh</h1>
        </div>

        <div className='relative'>
          <img
            src='/avatar.png'
            alt='Jaidev Singh'
            className='lg:w-96 rounded-2xl object-cover'
          />

          <div className='absolute bottom-2 left-2 right-2 flex items-center justify-center gap-2 py-2 px-3 bg-neutral-900/80 backdrop-blur-sm rounded-lg'>
            <span className='relative flex size-2 shrink-0'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500' />
              <span className='relative inline-flex size-2 rounded-full bg-green-500' />
            </span>
            <span className='text-sm'>Open to work</span>
          </div>
        </div>
        <div className='mt-6'>
          <p className='text-sm text-neutral-300'>Specialization:</p>
          <RoleTypewriter className='text-lg capitalize' />
        </div>

        <div>
          <p className='text-sm text-neutral-300'>Based in:</p>
          <p className='text-lg capitalize'>Based in New Delhi, India</p>
        </div>

        <div className='flex gap-3 pt-2 text-neutral-500'>
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200'
              >
                <Icon className='size-6' />
              </a>
            );
          })}
        </div>

        <Button
          className='mt-2'
          size='lg'
          asChild
        >
          <a href='#contact'>Hire Me</a>
        </Button>
      </div>
    </aside>
  );
};
