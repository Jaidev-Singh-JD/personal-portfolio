/**
 * @copyright 2026 Jaidev Singh
 * All rights reserved. Unauthorized copying, modification, or distribution
 * of this file, via any medium, is strictly prohibited.
 */
'use client';

import { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const SUGGESTIONS = [
  'What tech stack does Jaidev specialize in?',
  'What projects has he worked on?',
  'Is he open to new roles?',
  'Is he open to remote, hybrid, or onsite?',
  "What's his notice period?",
];

const MAX_MESSAGES_PER_SESSION = 10;
const COOLDOWN_MS = 3000; // 3 seconds between sends

// ---------------------------------------------------------------------------
// FAQ matching
//
//approach: coverage scoring. Tokenize the message, strip stopwords, and
// check what fraction of the *meaningful* words in the message are accounted
// for by a given FAQ's keyword set. Only short-circuit (skip the API call)
// when that coverage is high — i.e. there's essentially nothing left in the
// question that the canned answer doesn't already address. Any extra
// substantive words (like "ml", "powered", "algorithm", "how does x work")
// drag the score down and the message falls through to Claude.
// ---------------------------------------------------------------------------

type FaqEntry = {
  keywords: string[];
  response: string;
};

const STOPWORDS = new Set([
  'a',
  'an',
  'the',
  'is',
  'are',
  'was',
  'were',
  'what',
  'which',
  'who',
  'how',
  'do',
  'does',
  'did',
  'of',
  'in',
  'on',
  'for',
  'to',
  'with',
  'about',
  'and',
  'or',
  'it',
  'this',
  'that',
  'he',
  'his',
  'him',
  'you',
  'your',
  'tell',
  'me',
  'can',
  'could',
  'please',
  'i',
  'know',
  'about',
  'there',
  'be',
  'has',
  'have',
]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((t) => t && !STOPWORDS.has(t));
}

// Minimum fraction of the message's meaningful tokens that must be covered
// by an FAQ's keywords before we treat it as a free/instant match.
// Higher = safer (fewer false "instant" answers, more API calls).
// Lower = cheaper (more instant answers, higher risk of a wrong canned reply).
const MIN_COVERAGE = 0.8;

const FAQ_RESPONSES: FaqEntry[] = [
  {
    keywords: [
      'open',
      'role',
      'roles',
      'opportunity',
      'opportunities',
      'work',
      'job',
      'hire',
      'available',
      'availability',
    ],
    response:
      "Yes! Jaidev is actively seeking Frontend Engineer and Full-Stack Engineer opportunities and is available to join immediately (0-day notice period). He is open to remote, hybrid, and onsite roles across India. If you'd like to discuss an opportunity, you can reach him at **jaidevsingh.dev@gmail.com** or call **+91 7982624025**.",
  },
  {
    keywords: [
      'remote',
      'hybrid',
      'onsite',
      'on-site',
      'workmode',
      'mode',
      'relocate',
      'relocation',
      'location',
      'based',
      'city',
    ],
    response:
      'Jaidev is based in Delhi, India and is open to opportunities across India. He is comfortable working remotely, in a hybrid setup, or relocating for the right opportunity.',
  },
  {
    keywords: [
      'notice',
      'period',
      'join',
      'joining',
      'immediate',
      'immediately',
      'start',
      'date',
      'soon',
    ],
    response:
      'Jaidev is an immediate joiner with no notice period. He can start as soon as the hiring process is completed.',
  },
  {
    keywords: [
      'fulltime',
      'full-time',
      'parttime',
      'part-time',
      'contract',
      'freelance',
      'employment',
      'type',
    ],
    response:
      'Jaidev is primarily looking for full-time Frontend Engineer or Full-Stack Engineer positions. He is also open to discussing contract opportunities that align with his expertise.',
  },
  {
    keywords: [
      'tech',
      'stack',
      'technologies',
      'technology',
      'skills',
      'skill',
      'tools',
      'specialize',
      'specializes',
      'specialise',
      'specialises',
    ],
    response:
      'Jaidev specializes in React.js, Vue.js, Angular, TypeScript, and Lit.dev/Web Components for building scalable, high-performance web applications, with Redux Toolkit, Vuex, and Pinia for state management. On the backend side he works with Node.js, Express.js, FastAPI, Python, Django, MongoDB, and PostgreSQL. His toolkit also covers Tailwind CSS, Material UI, shadcn/ui, Framer Motion, Highcharts.js, and Chart.js, plus testing with Vitest, Jest, Playwright, and Cypress. He also has foundational experience with AWS (S3, CloudFront, Lambda, Route 53) and CI/CD via GitHub Actions, GitLab CI, and Bitbucket Pipelines.',
  },
  {
    keywords: [
      'devops',
      'cloud',
      'aws',
      'infrastructure',
      'deployment',
      'deploy',
      'cicd',
      'pipeline',
      'terraform',
      'cloudformation',
    ],
    response:
      'Jaidev has foundational experience with cloud and DevOps: AWS (S3, CloudFront, Lambda, Route 53), serverless/edge architectures, CI/CD pipelines (GitHub Actions, GitLab CI, Bitbucket Pipelines), and infrastructure-as-code basics (CloudFormation, Terraform). His primary strength is frontend engineering, with backend and cloud skills growing alongside that.',
  },
  {
    keywords: [
      'about',
      'philosophy',
      'approach',
      'like',
      'work',
      'style',
      'care',
      'ai',
      'workflow',
    ],
    response:
      "Jaidev is a Frontend Engineer who focuses on turning messy backend logic into interfaces that make sense — geo-experimentation tools, marketing analytics dashboards, and campaign management platforms used by global marketing teams. He cares about the parts that don't show up in a screenshot: solid test coverage, clean component boundaries, and code the next person won't have to fight with. He also actively incorporates AI (Claude, GitHub Copilot, ChatGPT) into his daily workflow to improve productivity and code quality.",
  },
  {
    keywords: [
      'testimonial',
      'review',
      'reference',
      'recommend',
      'recommendation',
      'said',
      'client',
      'manager',
      'colleague',
    ],
    response:
      'Hassan Sarker, Senior Product Manager at American Express, worked with Jaidev on the OCS product suite and described him as a dependable, technically solid engineer — highlighting his work single-handedly building the auto-upload feature for Agile MMM and his contributions to the GeoLift front-end UI. He noted Jaidev consistently delivers reliable, end-to-end ownership on technically demanding features.',
  },
  {
    keywords: ['award', 'awards', 'recognition', 'achievement', 'achievements'],
    response:
      'Jaidev has received three recognitions at Omnicom Media Group: Annalectual of the Quarter (Apr 2025) for consistent, exceptional performance over the quarter, and two On the Spot Awards (Aug 2025 and Feb 2026) for exceptional performance and dedication.',
  },
  {
    keywords: ['linkedin', 'profile', 'social'],
    response:
      "You can find Jaidev on LinkedIn under 'Jaidev Singh', or reach him directly at jaidevsingh.dev@gmail.com.",
  },
  {
    keywords: ['projects', 'project', 'worked', 'built', 'led'],
    response:
      'At Omnicom, Jaidev contributed to four major enterprise products: GeoLift (Geo Experimentation), Omni Video Intelligence (OVI), Meridian/Marketing Mix Modeling (MMM), and SocialKit. These projects involved analytics dashboards, campaign management, experimentation platforms, API integrations, and reusable frontend architecture. Feel free to ask about any project in detail.',
  },
  {
    keywords: ['geolift'],
    response:
      "GeoLift is Omnicom's geo-experimentation and incrementality measurement platform. Jaidev developed reusable Lit.dev components, interactive dashboards, geo-visualizations, and reporting interfaces. He also improved automated test coverage from nearly 0% to around 80% while resolving multiple critical UI issues.",
  },
  {
    keywords: ['ovi', 'video', 'intelligence'],
    response:
      'Omni Video Intelligence (OVI) is an AI-powered YouTube advertising platform that helps marketers identify brand-safe channels and optimize campaign targeting. Jaidev led the frontend development of several key features, built reusable components adopted across multiple brands, integrated YouTube APIs, and delivered scalable interfaces for campaign management and reporting.',
  },
  {
    keywords: ['mmm', 'meridian', 'marketing', 'mix', 'modeling', 'modelling'],
    response:
      'For the Marketing Mix Modeling (Meridian) platform, Jaidev built the complete onboarding experience, developed KPI dashboards using Highcharts.js, implemented file management workflows, and collaborated on FastAPI-powered validation services. The platform helps marketers measure campaign effectiveness and optimize media investments.',
  },
  {
    keywords: ['socialkit', 'facebook'],
    response:
      'SocialKit is an internal advertising platform focused on Meta (Facebook) campaign management. Jaidev developed responsive dashboards using Vue.js, Vuex, and Chart.js, enabling users to monitor campaign performance, visualize marketing metrics, and streamline advertising workflows.',
  },
  {
    keywords: [
      'contact',
      'email',
      'reach',
      'hire',
      'call',
      'phone',
      'linkedin',
    ],
    response:
      "Interested in connecting with Jaidev? You can reach him directly at jaidevsingh.dev@gmail.com, call +91 7982624025, or find him on LinkedIn as Jaidev Singh. He's always happy to discuss new opportunities and collaborations.",
  },
  {
    keywords: [
      'education',
      'degree',
      'college',
      'university',
      'study',
      'studied',
      'btech',
      'academic',
    ],
    response:
      'Jaidev holds a B.Tech in Mechanical and Automation Engineering from Guru Gobind Singh Indraprastha University. He successfully transitioned into software engineering through self-driven learning, hands-on projects, and various online courses. Since then, he has built over three years of professional experience developing enterprise-scale frontend applications for global clients.',
  },
  {
    keywords: ['years', 'experience', 'long', 'since', 'when'],
    response:
      'Jaidev has over 3 years of professional experience as a Frontend Engineer, building enterprise-grade analytics, marketing technology, and campaign management platforms using modern Fronend + Backend technologies.',
  },
  {
    keywords: [
      'testimonial',
      'testimonials',
      'reference',
      'references',
      'review',
      'recommend',
      'recommendation',
      'worked with',
      'colleague',
      'manager',
      'hassan',
      'sarker',
      'ghulam',
      'habib',
      'hari',
      'mishra',
      'chaitra',
      'thimmaiah',
    ],
    response:
      "Jaidev has testimonials from four people he's worked with: Hassan Sarker (Sr. PM, American Express) praises his reliability and ownership on features like the Agile MMM auto-upload; Ghulam Habib (Lead SWE, Annalect) highlights his frontend expertise and mentoring of junior engineers; Hari Mishra (Engineering Leader, Omnicom) calls out how quickly he adapted to a new tech stack under tight deadlines; and Chaitra Thimmaiah (Lead, AI and Data Automation) praises his attention to detail and product insight. Happy to share more on any of them.",
  },
  {
    keywords: [
      'about',
      'who is',
      'philosophy',
      'approach',
      'like to work',
      'working style',
      'personality',
      'values',
      'care about',
    ],
    response:
      "Jaidev is a Frontend Engineer who builds interfaces that make complex data simple — turning messy backend logic into tools that actually make sense for the people using them. He cares about the parts that don't show up in a screenshot: solid test coverage, clean component boundaries, and code the next engineer won't have to fight with. He's also expanding into backend fundamentals so he can speak to both sides of a system, and actively uses AI tools in his daily workflow to move faster and improve quality.",
  },
  {
    keywords: ['awards', 'award', 'recognition', 'achievement', 'achievements'],
    response:
      'Jaidev has received three recognitions at Omnicom Media Group: Annalectual of the Quarter for Technology (Apr 2025) for consistent, exceptional performance, and two On the Spot Awards (Aug 2025 and Feb 2026) for delivering exceptional performance and dedication.',
  },
  {
    keywords: ['aws', 'cloud', 'devops', 'terraform', 'cloudformation', 'iac'],
    response:
      'Jaidev has foundational experience with cloud and DevOps: AWS basics (S3, CloudFront, Lambda, Route 53), CI/CD pipelines (GitHub Actions, GitLab CI, Bitbucket Pipelines), and infrastructure as code (CloudFormation, Terraform). His core depth is frontend engineering — cloud/DevOps is a supporting skill, not his primary focus.',
  },
];

function matchFaq(message: string): string | null {
  const msgTokens = tokenize(message);
  if (msgTokens.length === 0) return null;

  let best: { response: string; score: number } | null = null;

  for (const entry of FAQ_RESPONSES) {
    const kwSet = new Set(tokenize(entry.keywords.join(' ')));
    const covered = msgTokens.filter((t) => kwSet.has(t)).length;
    const score = covered / msgTokens.length;

    // Require at least one real keyword hit AND that the FAQ's keywords
    // "explain" almost the whole message — anything extra/unrecognized
    // in the question falls through to the real API instead of guessing.
    if (covered > 0 && score >= MIN_COVERAGE) {
      if (!best || score > best.score) {
        best = { response: entry.response, score };
      }
    }
  }

  return best ? best.response : null;
}

// Defined outside the component so purity analysis doesn't flag this as an
// impure call inside render — it's only invoked from the send() event handler.
const getTimestamp = () => Date.now();

export const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Jaidev's assistant. Ask me anything about his experience, skills, or projects. 👋",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [lastSentAt, setLastSentAt] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const replyRef = useRef('');

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const limitReached = userMessageCount >= MAX_MESSAGES_PER_SESSION;

  const send = async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || loading || limitReached) return;

    // Cooldown check — prevent rapid repeat sends
    const now = getTimestamp();
    if (now - lastSentAt < COOLDOWN_MS) return;
    setLastSentAt(now);

    setInput('');
    const updated: Message[] = [...messages, { role: 'user', content: msg }];
    setMessages(updated);
    setUserMessageCount((prev) => prev + 1);

    // Free instant answer if this matches a known common question with high
    // enough coverage — skips the paid API call entirely. If the question
    // has extra substance the FAQ doesn't cover, this returns null and we
    // fall through to Claude below.
    const faqAnswer = matchFaq(msg);
    if (faqAnswer) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: faqAnswer },
      ]);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updated.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) throw new Error('API error');

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      replyRef.current = '';
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n').filter((l) => l.startsWith('data: '));
        for (const line of lines) {
          const data = line.slice(6);
          if (data === '[DONE]') break;
          try {
            const parsed = JSON.parse(data);
            const delta = parsed?.delta?.text ?? '';
            if (delta) {
              replyRef.current += delta;
              setMessages((prev) => {
                const next = [...prev];
                next[next.length - 1] = {
                  role: 'assistant',
                  content: replyRef.current,
                };
                return next;
              });
            }
          } catch {
            // ignore malformed chunk
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className='fixed bottom-6 right-6 lg:bottom-10 lg:right-24 z-50 w-14 h-14 rounded-full bg-primary text-black shadow-lg shadow-black/30 border border-neutral-600 flex items-center justify-center transition-all hover:scale-105'
        aria-label="Chat with Jaidev's assistant"
      >
        {open ? (
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            />
          </svg>
        )}
      </button>

      {/* Badge */}
      {!open && (
        <div className='fixed bottom-20.5 right-6 lg:right-24 z-50 bg-neutral-900 border border-neutral-700 rounded-full px-3 py-1 text-xs text-green-400 shadow-md pointer-events-none flex items-center gap-1'>
          Let's talk
          <img
            src='/avatar.png'
            alt='Jaidev'
            className='inline-block w-5 h-5 rounded-full object-cover border border-green-400/40 ml-1 align-middle'
          />
        </div>
      )}

      {/* Chat panel */}
      {open && (
        <div className='fixed bottom-24 right-6 lg:right-24 z-50 w-80 sm:w-96 rounded-2xl border border-neutral-700 bg-neutral-900 shadow-2xl flex flex-col overflow-hidden'>
          {/* Header */}
          <div className='flex items-center gap-3 px-4 py-3 border-b border-neutral-700 bg-neutral-800/50'>
            <div className='w-8 h-8 rounded-full overflow-hidden border border-green-400/40'>
              <img
                src='/avatar.png'
                alt='Jaidev'
                className='w-full h-full object-cover'
              />
            </div>
            <div>
              <div className='text-sm font-medium text-white'>
                Jaidev's Assistant
              </div>
              <div className='text-xs text-neutral-400 flex items-center gap-1'>
                <span className='w-1.5 h-1.5 rounded-full bg-green-400' />
                Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            className='flex-1 overflow-y-auto px-4 py-4 space-y-3 max-h-80'
            data-lenis-prevent
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-primary text-black rounded-br-sm'
                      : 'bg-neutral-800 border border-neutral-700 text-neutral-200 rounded-bl-sm'
                  }`}
                >
                  {m.content ||
                    (loading && i === messages.length - 1 ? (
                      <span className='flex gap-1'>
                        <span
                          className='w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce'
                          style={{ animationDelay: '0ms' }}
                        />
                        <span
                          className='w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce'
                          style={{ animationDelay: '150ms' }}
                        />
                        <span
                          className='w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce'
                          style={{ animationDelay: '300ms' }}
                        />
                      </span>
                    ) : (
                      ''
                    ))}
                </div>
              </div>
            ))}
            {limitReached && (
              <p className='text-xs text-yellow-500 text-center pt-2'>
                You've reached the message limit for this session. Feel free to
                reach out directly at{' '}
                <a
                  href='mailto:Jaidevsingh.dev@gmail.com'
                  className='underline'
                >
                  Jaidevsingh.dev@gmail.com
                </a>
                .
              </p>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions (only at start) */}
          {messages.length === 1 && !limitReached && (
            <div className='px-4 pb-3 pt-1 flex flex-wrap gap-2'>
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className='text-xs px-2.5 py-1.5 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-400 hover:text-white hover:border-green-400/40 transition-colors'
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className='flex gap-2 px-4 py-3 border-t border-neutral-700'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder={
                limitReached ? 'Message limit reached' : 'Ask about Jaidev…'
              }
              disabled={loading || limitReached}
              className='flex-1 bg-neutral-800 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-green-400/60 disabled:opacity-50'
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim() || limitReached}
              className='px-3 py-2 rounded-xl bg-primary text-black text-sm disabled:opacity-40 transition-all'
            >
              ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
};
