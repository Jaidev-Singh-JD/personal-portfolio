/**
 * @copyright 2026 Jaidev Singh
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Components
 */
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * Assets
 */
import {
  MessageCircleIcon,
  SendIcon,
  SparkleIcon,
  BotIcon,
} from 'lucide-react';

/**
 * Types
 */
type Message = {
  id: number;
  role: 'user' | 'bot';
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    role: 'bot',
    content:
      "Hi, I'm Jaidev's assistant. Ask me anything about his work, projects, or experience.",
  },
];

export const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'bot',
          content:
            'This is a UI preview — will connect this up to an API to make me actually respond.',
        },
      ]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className='fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center justify-center size-14 rounded-full bg-primary text-black shadow-lg shadow-black/30 border border-neutral-600 cursor-pointer'
          aria-label='Open chat'
        >
          <MessageCircleIcon className='size-6' />
        </motion.button>
      </SheetTrigger>

      <SheetContent
        side='right'
        className='w-full sm:w-96 bg-neutral-900 text-white p-0 flex flex-col'
      >
        {/* Header */}
        <div className='flex items-center gap-2 px-5 py-4 border-b border-neutral-700'>
          <div className='flex items-center justify-center size-9 rounded-full bg-neutral-800 border border-neutral-600'>
            <BotIcon className='size-4 text-primary' />
          </div>
          <div>
            <SheetTitle className='text-sm font-semibold leading-none'>
              Ask Assistant
            </SheetTitle>
            <p className='text-xs text-neutral-400 mt-1 flex items-center gap-1'>
              <SparkleIcon size={11} /> Always happy to help
            </p>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className='flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3'
        >
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'max-w-[85%] rounded-lg px-4 py-2.5 text-sm leading-relaxed',
                message.role === 'user'
                  ? 'self-end bg-primary text-black rounded-br-sm'
                  : 'self-start bg-neutral-800 border border-neutral-700 text-neutral-200 rounded-bl-sm',
              )}
            >
              {message.content}
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className='border-t border-neutral-700 p-4 flex items-center gap-2'>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Type a message...'
            className='bg-neutral-800 border-neutral-600 text-white placeholder:text-neutral-500'
          />
          <Button
            size='icon'
            onClick={handleSend}
            disabled={!input.trim()}
            className='shrink-0'
            aria-label='Send message'
          >
            <SendIcon className='size-4' />
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
