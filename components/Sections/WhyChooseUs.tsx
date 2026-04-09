import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import { ease } from '../motion/tokens';

/* ─────────────────────────────────────────────────────────────
   WHY CHOOSE US
   Trust / confidence block. Five reasons to pick Kaspar Works,
   laid out as a clean two-column section with a large editorial
   headline on the left and a list of reasons on the right.
   ───────────────────────────────────────────────────────────── */

const reasons = [
  {
    title: 'End-to-end delivery',
    description:
      'Strategy, design, engineering, deployment, and ongoing support. One team, one point of contact, from first sketch to shipped release.',
  },
  {
    title: 'Modern tech stack',
    description:
      'TypeScript, React, Next.js, native iOS & Android, Node, Postgres, Claude, GPT, AWS. Current, proven, and maintainable.',
  },
  {
    title: 'Fast execution',
    description:
      'Weekly shipped builds, direct communication, and short feedback loops. No handoffs, no account layers, no slow lanes.',
  },
  {
    title: 'Scalable architecture',
    description:
      'We design systems for the next three years, not the next three months. Your product grows without needing a rewrite.',
  },
];

const WhyChooseUs: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const headInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section
      ref={ref}
      id="why-choose-us"
      className="relative py-28 sm:py-40 border-t border-[var(--glass-border)]"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />

      <div className="relative max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* ── Left: eyebrow + headline ────────────────── */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={headInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [...ease] }}
              className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--text-muted)] font-mono mb-8"
            >
              <span className="inline-block w-8 h-px bg-[var(--text-muted)]" />
              <span>Why Kaspar Works</span>
            </motion.div>

            <h2 className="font-editorial font-extrabold leading-[0.9] tracking-[-0.045em] text-[var(--text-primary)] text-[clamp(2.25rem,5.5vw,5rem)] mb-8">
              <span className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={headInView ? { y: 0 } : { y: '110%' }}
                  transition={{ duration: 0.9, delay: 0.1, ease: [...ease] }}
                >
                  Reliable work
                </motion.span>
              </span>
              <span className="block">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={headInView ? { y: 0 } : { y: '110%' }}
                    transition={{ duration: 0.9, delay: 0.25, ease: [...ease] }}
                  >
                    from a team
                  </motion.span>
                </span>
              </span>
              <span className="block">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block font-fraunces italic font-normal text-[var(--accent)]"
                    initial={{ y: '110%' }}
                    animate={headInView ? { y: 0 } : { y: '110%' }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [...ease] }}
                  >
                    that stays.
                  </motion.span>
                </span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55, ease: [...ease] }}
              className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-md"
            >
              We build the software and we stand behind it. The same team that writes
              your first line of code is still on the product three years later.
            </motion.p>
          </div>

          {/* ── Right: reasons list ─────────────────────── */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {reasons.map((reason, i) => (
              <ReasonCard key={reason.title} reason={reason} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Individual reason card ──────────────────────────────── */
const ReasonCard: React.FC<{
  reason: { title: string; description: string };
  index: number;
}> = ({ reason, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [...ease] }}
      className="group flex items-start gap-5 pb-6 border-b border-[var(--glass-border)] last:border-b-0"
    >
      {/* Check icon */}
      <span
        className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-[var(--glass-border-strong)] text-[var(--accent)] mt-1"
        style={{ background: 'var(--glass-bg)' }}
      >
        <Check size={16} strokeWidth={2.5} />
      </span>

      {/* Text */}
      <div className="flex-1 flex flex-col gap-2">
        <h3 className="font-editorial font-bold text-[var(--text-primary)] text-xl sm:text-2xl tracking-[-0.01em]">
          {reason.title}
        </h3>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
          {reason.description}
        </p>
      </div>

      {/* Number */}
      <span className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-[var(--text-muted)] mt-2">
        / {String(index + 1).padStart(2, '0')}
      </span>
    </motion.div>
  );
};

export default WhyChooseUs;
