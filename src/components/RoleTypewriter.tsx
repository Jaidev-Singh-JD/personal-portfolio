/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

type RoleTypewriterProps = {
  roles?: string[];
  typingSpeed?: number; // ms per character while typing
  deletingSpeed?: number; // ms per character while deleting
  pauseDuration?: number; // ms to hold the full word before deleting
  className?: string;
  commaSeparator?: boolean;
};

const DEFAULT_ROLES = [
  'Frontend Engineer',
  'UI Architect',
  'React Developer',
  'UI Engineer',
  'AdTech Specialist',
];

export const RoleTypewriter = ({
  roles = DEFAULT_ROLES,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1400,
  className,
  commaSeparator = false,
}: RoleTypewriterProps) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    // Reached full word, pause before deleting
    if (!isDeleting && text === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pause);
    }

    // Fully deleted, move to next word
    if (isDeleting && text === '') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          isDeleting
            ? currentRole.slice(0, prev.length - 1)
            : currentRole.slice(0, prev.length + 1),
        );
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    roleIndex,
    roles,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <p className={className}>
      <span className='text-green-400'>
        {text} {commaSeparator ? ',' : ''}
      </span>
      <motion.span
        aria-hidden='true'
        className='inline-block w-0.5 h-[1em] ml-0.5 bg-current align-middle'
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
          times: [0, 0.5, 0.5, 1],
        }}
      />
    </p>
  );
};
