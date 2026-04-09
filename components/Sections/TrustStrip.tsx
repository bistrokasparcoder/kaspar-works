import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ease } from '../motion/tokens';

/* ─────────────────────────────────────────────────────────────
   TRUST STRIP
   Quiet strip directly under the hero. Establishes credibility
   and shows the service menu at a glance, broken across two
   lines for clean scannability.
   ───────────────────────────────────────────────────────────── */

const servicesRowOne = ['Custom Software', 'AI Solutions', 'Enterprise Applications'];
const servicesRowTwo = ['Product Design', 'Web Platforms'];

const TrustStrip: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section
      ref={ref}
      id="trust-strip"
      className="relative py-20 sm:py-28 border-y border-[var(--glass-border)]"
      style={{ background: 'var(--bg-50)' }}
    >
      <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Top eyebrow ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [...ease] }}
          className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] font-mono mb-10 sm:mb-14"
        >
          <span className="inline-block w-10 h-px bg-[var(--text-secondary)]" />
          <span>Trusted by startups and growing businesses</span>
        </motion.div>

        {/* ── Section title ──────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [...ease] }}
          className="font-editorial font-extrabold leading-[0.95] tracking-[-0.035em] text-[var(--text-primary)] text-[clamp(1.75rem,4vw,3.5rem)] mb-10 sm:mb-14"
        >
          What we build
        </motion.h2>

        {/* ── Service name rows (2 lines) ────────────── */}
        <div className="flex flex-col gap-5 sm:gap-7 mb-12 sm:mb-16">
          <ServiceRow items={servicesRowOne} inView={inView} startDelay={0.25} />
          <ServiceRow items={servicesRowTwo} inView={inView} startDelay={0.5} />
        </div>

        {/* ── Description line ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75, ease: [...ease] }}
          className="max-w-2xl space-y-2"
        >
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            We build scalable systems for real-world use.
          </p>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Including products like{' '}
            <span className="text-[var(--text-primary)] font-medium">Ullam</span>, an
            AI-powered journaling app.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── One row of services with neutral divider dots ─────── */
const ServiceRow: React.FC<{
  items: string[];
  inView: boolean;
  startDelay: number;
}> = ({ items, inView, startDelay }) => (
  <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-3">
    {items.map((service, i) => (
      <React.Fragment key={service}>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: startDelay + i * 0.08,
            ease: [...ease],
          }}
          className="font-editorial font-bold text-[clamp(1.4rem,2.6vw,2.25rem)] tracking-[-0.015em] text-[var(--text-primary)]"
        >
          {service}
        </motion.span>
        {i < items.length - 1 && (
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: startDelay + 0.05 + i * 0.08,
              ease: [...ease],
            }}
            className="inline-block w-1 h-1 rounded-full"
            style={{ background: 'var(--text-muted)' }}
            aria-hidden
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

export default TrustStrip;
