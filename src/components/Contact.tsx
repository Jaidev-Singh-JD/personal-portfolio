/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */
/**
 * Node modules
 */
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

/**
 *  Custom Modules
 */
import { fadeUp } from '@/lib/animation';

/**
 * Components
 */
import { Field, FieldError, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';

/**
 * Assets
 */
import { MailIcon } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

/**
 *  Types
 */
type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
};

const COOLDOWN_MS = 60_000;
const STATUS_DISPLAY_MS = 5000;

// Wrapped outside the component so static purity analysis (React Compiler /
// eslint-plugin-react-hooks) doesn't flag this as an impure call inside render —
// it's only ever invoked from within the onSubmit event handler, which is fine.
const getTimestamp = () => Date.now();

export const Contact = () => {
  const [status, setStatus] = useState<
    'idle' | 'success' | 'error' | 'cooldown'
  >('idle');
  const [lastSentAt, setLastSentAt] = useState(0);

  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      honeypot: '',
    },
  });

  // Auto-clear the status message after a few seconds
  useEffect(() => {
    if (status === 'idle') return;
    const timeout = setTimeout(() => setStatus('idle'), STATUS_DISPLAY_MS);
    return () => clearTimeout(timeout);
  }, [status]);

  const onSubmit = async (values: ContactFormValues) => {
    if (values.honeypot) {
      return;
    }

    // Cooldown check
    if (getTimestamp() - lastSentAt < COOLDOWN_MS) {
      setStatus('cooldown');
      return;
    }

    setStatus('idle');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          company: values.company || 'Not provided',
          email: values.email,
          phone: values.phone || 'Not provided',
          message: values.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setLastSentAt(getTimestamp());
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className='mt-20 scroll-mt-10'
      id='contact'
    >
      <SectionHeader
        subtitle='Contact'
        title="Let's make something awesome together!"
      />

      <motion.p
        variants={fadeUp}
        className='mt-4 text-neutral-300 max-w-2xl'
      >
        I'm open to Frontend Engineer and Full-Stack roles — React.js,
        TypeScript, and beyond. Got an interesting problem or an opportunity
        worth talking about? Reach out at{' '}
        <a
          href='mailto:Jaidevsingh.dev@gmail.com'
          className='text-green-400 hover:underline'
        >
          Jaidevsingh99@gmail.com
        </a>{' '}
        or use the form below.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className='flex flex-wrap gap-4 mt-6'
      >
        <a
          href='mailto:Jaidevsingh.dev@gmail.com'
          className='flex items-center gap-3 border border-neutral-700 rounded-lg px-4 py-3 hover:border-green-400 transition'
        >
          <div className='flex items-center justify-center size-10 rounded-lg bg-neutral-800 border border-neutral-700'>
            <MailIcon className='size-5 text-green-400' />
          </div>
          <div>
            <p className='text-xs text-neutral-500'>Email</p>
            <p className='text-sm font-medium'>Jaidevsingh.dev@gmail.com</p>
          </div>
        </a>

        <a
          href='https://www.linkedin.com/in/jaidev-s-3a924721a'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-3 border border-neutral-700 rounded-lg px-4 py-3 hover:border-green-400 transition'
        >
          <div className='flex items-center justify-center size-10 rounded-lg bg-neutral-800 border border-neutral-700'>
            <FaLinkedin className='size-5 text-green-400' />
          </div>
          <div>
            <p className='text-xs text-neutral-500'>LinkedIn</p>
            <p className='text-sm font-medium'>Jaidev Singh</p>
          </div>
        </a>
      </motion.div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full mx-auto space-y-4 mt-10'
      >
        <FieldGroup>
          <input
            type='text'
            {...form.register('honeypot')}
            className='hidden'
            tabIndex={-1}
            autoComplete='off'
            aria-hidden='true'
          />

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <Controller
              name='name'
              control={form.control}
              rules={{ required: 'Your name is required' }}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className='w-full'
                >
                  <Input
                    {...field}
                    id={field.name}
                    placeholder='Your Name'
                    className='border-0'
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name='company'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className='w-full'
                >
                  <Input
                    {...field}
                    id={field.name}
                    placeholder='Company Name'
                    className='border-0'
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name='email'
              control={form.control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              }}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className='w-full'
                >
                  <Input
                    {...field}
                    id={field.name}
                    type='email'
                    placeholder='you@example.com'
                    className='border-0'
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name='phone'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className='w-full'
                >
                  <Input
                    {...field}
                    id={field.name}
                    type='tel'
                    placeholder='+1234567890'
                    className='border-0'
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name='message'
            control={form.control}
            rules={{ required: 'A message is required' }}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className='w-full'
              >
                <Textarea
                  {...field}
                  id={field.name}
                  placeholder='Write your message...'
                  className='h-36 border-0'
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Button
            type='submit'
            size='lg'
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {status === 'success' && (
            <p className='text-sm text-green-400'>
              Message sent — I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className='text-sm text-red-400'>
              Something went wrong. Please try again or email me directly.
            </p>
          )}
          {status === 'cooldown' && (
            <p className='text-sm text-yellow-400'>
              Please wait a moment before sending another message.
            </p>
          )}
        </FieldGroup>
      </form>
    </motion.section>
  );
};
