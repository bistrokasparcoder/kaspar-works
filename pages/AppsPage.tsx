import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import EditorialButton, { EyebrowLabel } from '../components/ui/EditorialButton';

const ease = [0.16, 1, 0.3, 1] as const;

interface AppItem {
  number: string;
  category: string;
  title: React.ReactNode;
  flatTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imageAspect: string;
  href: string;
  externalHref?: string;
  externalLabel?: string;
  status: string;
  accent: string;
}

const items: AppItem[] = [
  {
    number: '/ 01',
    category: 'Faith · Mobile · Consumer',
    title: (
      <>
        Inspired By
        <br />
        The <span className="font-fraunces italic font-normal text-[var(--accent)]">Cross</span>
      </>
    ),
    flatTitle: 'Inspired By The Cross',
    description:
      'A mobile-first faith platform featuring daily devotionals, scripture, and community prayer. Built as a native iOS app with a scalable backend, shipped end to end.',
    image: '/inspired-mobile-screenshot.png',
    imageAlt: 'Inspired By The Cross app',
    imageAspect: 'aspect-[9/19]',
    href: '/inspired',
    externalHref: 'https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428',
    externalLabel: 'Download iOS',
    status: 'Available on the App Store',
    accent: 'from-amber-400/18 via-orange-400/10 to-transparent',
  },
  {
    number: '/ 02',
    category: 'Healthcare · Web + Mobile',
    title: (
      <>
        dialysis
        <span className="font-fraunces italic font-normal text-[var(--accent)]">.live</span>
      </>
    ),
    flatTitle: 'dialysis.live',
    description:
      'A patient-focused health tracking platform with dashboards, vitals, nutrition logs, and medication reminders. Built across web, iOS, and Android, with AI-assisted insights for patients and care teams.',
    image: '/dialysis-web-screenshot.png',
    imageAlt: 'dialysis.live dashboard',
    imageAspect: 'aspect-[16/10]',
    href: '/dialysis',
    externalHref: 'https://dialysis.live/',
    externalLabel: 'Visit Site',
    status: 'Currently in production',
    accent: 'from-teal-400/20 via-emerald-400/10 to-transparent',
  },
  {
    number: '/ 03',
    category: 'Wellness · Mobile · Consumer',
    title: (
      <>
        <span className="font-fraunces italic font-normal text-[var(--accent)]">Ullam</span>
      </>
    ),
    flatTitle: 'Ullam',
    description:
      'An emotional wellness app with AI-powered journaling and mood tracking, designed to help users reflect, express, and grow emotionally. Clean, calm, and quietly intelligent by design.',
    image: '',
    imageAlt: 'Ullam emotional wellness app',
    imageAspect: 'aspect-[16/10]',
    href: '/apps',
    status: 'Currently in design',
    accent: 'from-fuchsia-300/20 via-rose-300/10 to-transparent',
  },
];

const AppsPage: React.FC = () => {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: '-20%' });

  return (
    <div className="relative" style={{ background: 'var(--bg-base)' }}>
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative pt-[20vh] sm:pt-[24vh] pb-20 sm:pb-32 overflow-hidden">
        {/* backdrop wordmark */}
        <div className="absolute inset-x-0 top-[8vh] flex justify-center pointer-events-none select-none">
          <h2
            className="font-editorial font-extrabold leading-[0.78] whitespace-nowrap opacity-[0.05] text-[var(--text-primary)]"
            style={{ fontSize: 'clamp(7rem, 22vw, 22rem)', letterSpacing: '-0.06em' }}
          >
            portfolio
          </h2>
        </div>

        <div className="relative max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16" ref={headRef}>
          <EyebrowLabel className="mb-10">Selected Work · 2024 / 2026</EyebrowLabel>

          <h1 className="font-editorial font-extrabold leading-[0.88] tracking-[-0.045em] text-[var(--text-primary)] text-[clamp(3rem,10vw,10rem)]">
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={headInView ? { y: 0 } : { y: '110%' }}
                transition={{ duration: 1.0, delay: 0.2, ease }}
              >
                Our&nbsp;
              </motion.span>
            </span>
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block font-fraunces italic font-normal text-[var(--accent)]"
                initial={{ y: '110%' }}
                animate={headInView ? { y: 0 } : { y: '110%' }}
                transition={{ duration: 1.0, delay: 0.35, ease }}
              >
                portfolio.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-10 text-base sm:text-lg leading-relaxed text-[var(--text-primary)] max-w-xl"
          >
            Alongside client work, we ship our own products across faith, healthcare,
            and wellness. Every one designed, engineered, and shipped end to end by
            the same team that builds for our clients.
          </motion.p>

          {/* drawing diagonal hairline */}
          <svg
            className="mt-12 w-full h-[1px]"
            viewBox="0 0 1000 1"
            preserveAspectRatio="none"
          >
            <motion.line
              x1="0"
              y1="0.5"
              x2="1000"
              y2="0.5"
              stroke="var(--glass-border-strong)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={headInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.6, delay: 0.7, ease }}
            />
          </svg>
        </div>
      </section>

      {/* ── Cards ────────────────────────────────── */}
      <section className="relative pb-32 sm:pb-48 overflow-hidden">
        <div className="relative max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16 space-y-32 sm:space-y-48">
          {items.map((item, i) => (
            <AppCard key={item.number} item={item} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

const AppCard: React.FC<{ item: AppItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 1.0, ease }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
        isEven ? '' : 'lg:[&>*:first-child]:order-2'
      }`}
    >
      {/* Image */}
      <div className="lg:col-span-7 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="relative inline-flex items-center gap-2 px-4 py-2 rounded-t-xl border border-b-0 border-[var(--glass-border-strong)] bg-[var(--bg-100)] -mb-px ml-2"
        >
          <span className="font-mono text-[10px] tracking-wider text-[var(--text-secondary)]">
            {item.number}
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
        </motion.div>

        <Link
          to={item.href}
          className={`relative block rounded-[1.5rem] sm:rounded-[2rem] border border-[var(--glass-border-strong)] bg-[var(--bg-100)] overflow-hidden ${
            item.imageAspect === 'aspect-[9/19]' ? 'aspect-[16/10]' : item.imageAspect
          } shadow-2xl shadow-black/40 group`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${item.accent} pointer-events-none z-[1]`}
          />
          {item.image ? (
            <motion.img
              initial={{ scale: 1.08 }}
              animate={inView ? { scale: 1 } : { scale: 1.08 }}
              transition={{ duration: 1.6, ease }}
              src={item.image}
              alt={item.imageAlt}
              className="relative z-[1] w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="relative z-[2] w-full h-full flex flex-col items-center justify-center gap-6 px-8">
              <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)] font-mono">
                <span className="inline-block w-6 h-px bg-[var(--text-muted)]" />
                <span>Daily check-in</span>
              </div>
              <div className="font-fraunces italic font-normal text-[clamp(1.6rem,4vw,3rem)] text-[var(--text-primary)]/60 leading-[1.1] text-center max-w-[80%]">
                How are you{' '}
                <span className="text-[var(--accent)]">really</span> feeling today?
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {['Calm', 'Anxious', 'Hopeful', 'Tired'].map((mood) => (
                  <span
                    key={mood}
                    className="px-3 py-1 rounded-full border border-[var(--glass-border-strong)] bg-[var(--glass-bg)] text-[10px] font-medium text-[var(--text-secondary)]"
                  >
                    {mood}
                  </span>
                ))}
              </div>
            </div>
          )}
          {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map(
            (pos) => (
              <div
                key={pos}
                className={`absolute ${pos} w-3 h-3 z-[2] pointer-events-none`}
              >
                <div className="absolute inset-0 border-l border-t border-white/30" />
              </div>
            ),
          )}
        </Link>
      </div>

      {/* Text */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <EyebrowLabel>{item.category}</EyebrowLabel>

        <h2 className="font-editorial font-extrabold tracking-[-0.03em] leading-[0.95] text-[var(--text-primary)] text-[clamp(2.4rem,5vw,5rem)]">
          {item.title}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-md"
        >
          {item.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease }}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <EditorialButton href={item.href}>View Case Study</EditorialButton>
          {item.externalHref && (
            <a
              href={item.externalHref}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors underline-offset-4 hover:underline"
            >
              {item.externalLabel} ↗
            </a>
          )}
          <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] ml-auto">
            {item.status}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppsPage;
