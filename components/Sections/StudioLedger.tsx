import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Layers } from 'lucide-react';
import { ease } from '../motion/tokens';

/* ─────────────────────────────────────────────────────────────
   STUDIO LEDGER — OUR IMPACT
   Four credibility figures in one row. First two use count-up
   numbers. Last two use icons — "end-to-end" and "modern tech
   stack" aren't really numeric, so an icon communicates the
   idea more honestly than a fake number.
   ───────────────────────────────────────────────────────────── */

interface Figure {
  kind: 'number' | 'icon';
  value?: number;
  suffix?: string;
  icon?: React.ReactNode;
  label: string;
  caption: string;
}

const figures: Figure[] = [
  {
    kind: 'number',
    value: 10,
    suffix: '+',
    label: 'Products delivered',
    caption: 'Apps, platforms, and business systems',
  },
  {
    kind: 'number',
    value: 5,
    suffix: '+',
    label: 'Industries served',
    caption: 'Healthcare, SaaS, faith, sports',
  },
  {
    kind: 'icon',
    icon: <CheckCircle2 size={46} strokeWidth={1.4} />,
    label: 'End-to-end delivery',
    caption: 'From idea to production launch',
  },
  {
    kind: 'icon',
    icon: <Layers size={46} strokeWidth={1.4} />,
    label: 'Modern tech stack',
    caption: 'Web, mobile, AI, cloud',
  },
];

const StudioLedger: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section
      ref={ref}
      id="studio-ledger"
      className="relative py-14 sm:py-20 border-y border-[var(--glass-border)]"
      style={{ background: 'var(--bg-50)' }}
    >
      {/* Very subtle grid backdrop */}
      <div className="absolute inset-0 bg-grid-dark opacity-[0.08] pointer-events-none" />

      <div className="relative max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Eyebrow (darker than before) ─────────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [...ease] }}
          className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] font-mono mb-5"
        >
          <span className="inline-block w-10 h-px bg-[var(--text-secondary)]" />
          <span>Our Impact</span>
        </motion.div>

        {/* ── Lead line ────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [...ease] }}
          className="font-editorial font-bold text-[var(--text-primary)] text-[clamp(1.35rem,2.4vw,2rem)] leading-[1.2] tracking-[-0.02em] max-w-3xl mb-10 sm:mb-14"
        >
          We focus on delivering real results, not just code.
        </motion.p>

        {/* ── Figures row ──────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 relative">
          {figures.map((f, i) => (
            <div
              key={i}
              className={`relative ${
                i > 0 ? 'lg:border-l lg:border-[var(--glass-border)] lg:pl-8' : ''
              }`}
            >
              <FigureCell figure={f} index={i} inView={inView} />
            </div>
          ))}
        </div>

        {/* ── Ullam mention (small, quiet) ─────────── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75, ease: [...ease] }}
          className="mt-12 sm:mt-16 text-sm text-[var(--text-secondary)]"
        >
          Including products like{' '}
          <span className="text-[var(--text-primary)] font-semibold">Ullam</span>, an
          AI-powered journaling platform.
        </motion.p>
      </div>
    </section>
  );
};

/* ─── Individual figure cell ──────────────────────────────── */
const FigureCell: React.FC<{
  figure: Figure;
  index: number;
  inView: boolean;
}> = ({ figure, index, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || figure.kind !== 'number' || figure.value === undefined) return;
    const duration = 1400;
    const start = performance.now() + index * 120;
    let rafId: number;
    const tick = (now: number) => {
      if (now < start) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round((figure.value as number) * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, figure.kind, figure.value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.08, ease: [...ease] }}
      className="flex flex-col gap-3"
    >
      {/* Big display — number OR icon */}
      <div className="h-[clamp(3.5rem,5vw,5rem)] flex items-start">
        {figure.kind === 'number' ? (
          <div className="font-editorial font-extrabold text-[var(--text-primary)] tabular-nums leading-none tracking-[-0.04em] flex items-baseline">
            <span className="text-[clamp(2.75rem,5vw,4.5rem)]">{count}</span>
            {figure.suffix && (
              <span className="text-[clamp(1rem,1.6vw,1.5rem)] text-[var(--text-muted)] font-normal ml-0.5">
                {figure.suffix}
              </span>
            )}
          </div>
        ) : (
          <span className="text-[var(--accent)]" aria-hidden>
            {figure.icon}
          </span>
        )}
      </div>

      {/* Label */}
      <div className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[var(--text-primary)] font-semibold">
        {figure.label}
      </div>

      {/* Caption */}
      <div className="text-[12px] sm:text-sm text-[var(--text-secondary)] leading-relaxed">
        {figure.caption}
      </div>
    </motion.div>
  );
};

export default StudioLedger;
