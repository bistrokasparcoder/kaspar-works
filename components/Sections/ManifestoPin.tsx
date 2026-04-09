import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';
import { ease } from '../motion/tokens';

/* ─────────────────────────────────────────────────────────────
   MANIFESTO PIN — Our Approach
   A compact pin-scroll section that holds for 3 beats. Each
   beat crossfades a heading, a body paragraph, and an icon.
   A single intro line sits above the beats and stays fixed.
   ───────────────────────────────────────────────────────────── */

const beats = [
  {
    phrase: 'Built around outcomes.',
    emphasis: 'outcomes',
    caption:
      'We solve real business problems, not just deliver features.',
    icon: Target,
  },
  {
    phrase: 'Built to scale.',
    emphasis: 'scale',
    caption:
      'Scalable architecture, design, and engineering that grow with your business, without costly rewrites.',
    icon: TrendingUp,
  },
  {
    phrase: 'Built to last.',
    emphasis: 'last',
    caption:
      'Software you can rely on long after launch. Built, supported, and continuously improved by our team.',
    icon: ShieldCheck,
  },
];

const ManifestoPin: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const [active, setActive] = React.useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = v < 0.33 ? 0 : v < 0.66 ? 1 : 2;
    if (next !== active) setActive(next);
  });

  const currentBeat = beats[active];
  const Icon = currentBeat.icon;

  return (
    <section
      ref={ref}
      id="manifesto-pin"
      className="relative h-[210vh] sm:h-[210vh]"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="sticky top-0 min-h-[100dvh] flex items-center overflow-hidden px-5 sm:px-0">
        {/* Subtle grid backdrop — now much quieter */}
        <div className="absolute inset-0 bg-grid-dark opacity-[0.08] pointer-events-none" />

        {/* Vertical scaffold */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 bottom-0 left-[6vw] w-px bg-gradient-to-b from-transparent via-[var(--glass-border)] to-transparent" />
          <div className="absolute top-0 bottom-0 right-[6vw] w-px bg-gradient-to-b from-transparent via-[var(--glass-border)] to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16 w-full">
          {/* ── Eyebrow ─────────────────────────────── */}
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-4">
              <span className="inline-block w-10 h-px bg-[var(--text-secondary)]" />
              <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] font-mono">
                Our Approach
              </span>
            </div>
            <div className="mt-2 ml-14 text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] font-mono">
              {String(active + 1).padStart(2, '0')} / 03
            </div>
          </div>

          {/* ── Intro line (always visible) ─────────── */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [...ease] }}
            className="max-w-2xl text-base sm:text-lg text-[var(--text-primary)] leading-relaxed mb-10 sm:mb-14"
          >
            Our approach is simple. We build software that delivers results,
            scales with your business, and lasts over time.
          </motion.p>

          {/* ── Beat: icon + heading ──────────────── */}
          <div className="relative min-h-[28vh] sm:min-h-[32vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
                transition={{ duration: 0.75, ease: [...ease] }}
                className="absolute inset-0"
              >
                {/* Icon above heading */}
                <div className="mb-5 sm:mb-7 flex items-center gap-3">
                  <span
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--glass-border-strong)] text-[var(--accent)]"
                    style={{ background: 'var(--glass-bg)' }}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="font-fraunces italic font-normal text-[var(--text-primary)] leading-[0.95] tracking-[-0.03em]"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)' }}
                >
                  {currentBeat.phrase.split(' ').map((word, j) => {
                    const plain = word.replace(/[.,]/g, '').toLowerCase();
                    const isEmphasis = plain === currentBeat.emphasis;
                    return (
                      <span
                        key={j}
                        className={`inline-block mr-[0.22em] ${
                          isEmphasis ? 'text-[var(--accent)]' : ''
                        }`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Caption ─────────────────────────────── */}
          <div className="mt-8 sm:mt-10 min-h-[4em] max-w-2xl relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={`cap-${active}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.6, ease: [...ease] }}
                className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed font-medium"
              >
                {currentBeat.caption}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoPin;
