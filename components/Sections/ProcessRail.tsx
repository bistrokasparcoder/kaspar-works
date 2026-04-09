import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ease } from '../motion/tokens';

/* ─────────────────────────────────────────────────────────────
   PROCESS RAIL — How We Work
   Five clean steps in a single column. No sticky rail, no fake
   nav. Each step has a short paragraph and two concrete
   deliverables.
   ───────────────────────────────────────────────────────────── */

interface Step {
  number: string;
  name: string;
  headline: string;
  paragraph: string;
  deliverables: string[];
}

const steps: Step[] = [
  {
    number: '01',
    name: 'Discover',
    headline: 'Understand your business, users, and goals.',
    paragraph:
      'We start by understanding your business, users, and goals, so every decision has a clear purpose.',
    deliverables: ['Stakeholder research', 'Goals & success metrics'],
  },
  {
    number: '02',
    name: 'Define',
    headline: 'Plan architecture, flows, and requirements.',
    paragraph:
      'We define architecture, user flows, and requirements, giving you a clear plan of what to build and how.',
    deliverables: ['Scoped requirements', 'Technical architecture'],
  },
  {
    number: '03',
    name: 'Build',
    headline: 'Develop scalable, production-ready systems.',
    paragraph:
      'We build scalable, production-ready systems, designed for performance and real-world use.',
    deliverables: ['Production-grade systems', 'Weekly shipped builds'],
  },
  {
    number: '04',
    name: 'Launch',
    headline: 'Test, deploy, and ensure stability.',
    paragraph:
      'We test, deploy, and ensure stability, so your product performs under real conditions.',
    deliverables: ['Deployment pipeline', 'Telemetry & feedback'],
  },
  {
    number: '05',
    name: 'Support',
    headline: 'Maintain, monitor, and improve continuously.',
    paragraph:
      'We maintain and improve continuously, helping your product grow over time.',
    deliverables: ['Ongoing maintenance', 'Quarterly product reviews'],
  },
];

const ProcessRail: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section
      ref={sectionRef}
      id="process-rail"
      className="relative py-20 sm:py-32"
      style={{ background: 'var(--bg-50)' }}
    >
      {/* Quieter grid backdrop */}
      <div className="absolute inset-0 bg-grid-dark opacity-[0.08] pointer-events-none" />

      <div className="relative max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Header ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [...ease] }}
            className="lg:col-span-3 flex items-start gap-3 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] font-mono pt-4"
          >
            <span className="inline-block w-10 h-px bg-[var(--text-secondary)] mt-[0.55em]" />
            <span>How We Work</span>
          </motion.div>

          <div className="lg:col-span-9">
            <h2 className="font-editorial font-extrabold leading-[0.9] tracking-[-0.045em] text-[var(--text-primary)] text-[clamp(2.5rem,6.5vw,6.5rem)]">
              <span className="block">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={headInView ? { y: 0 } : { y: '110%' }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [...ease] }}
                  >
                    Discover. Define. Build.
                  </motion.span>
                </span>
              </span>
              <span className="block">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={headInView ? { y: 0 } : { y: '110%' }}
                    transition={{ duration: 0.9, delay: 0.25, ease: [...ease] }}
                  >
                    Launch.&nbsp;
                  </motion.span>
                </span>
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block font-fraunces italic font-normal text-[var(--accent)]"
                    initial={{ y: '110%' }}
                    animate={headInView ? { y: 0 } : { y: '110%' }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [...ease] }}
                  >
                    Support.
                  </motion.span>
                </span>
              </span>
            </h2>

            {/* Intro line */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55, ease: [...ease] }}
              className="mt-8 max-w-xl text-base sm:text-lg text-[var(--text-primary)] leading-relaxed font-medium"
            >
              A clear, proven process, from idea to launch and beyond.
            </motion.p>
          </div>
        </div>

        {/* ── Steps — single column, no sticky nav ─────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 sm:gap-y-20">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Step card ───────────────────────────────────────────── */
const StepCard: React.FC<{
  step: Step;
  index: number;
}> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 0.8, ease: [...ease] }}
      className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10 items-start"
    >
      {/* Left: numeral */}
      <div className="sm:col-span-2">
        <div
          className="font-fraunces italic font-normal text-[var(--accent)] leading-[0.8] tracking-[-0.03em]"
          style={{
            fontSize: 'clamp(3.5rem, 7vw, 7rem)',
            opacity: 0.55,
          }}
        >
          {step.number}
        </div>
      </div>

      {/* Right: content */}
      <div className="sm:col-span-10 lg:col-span-9 flex flex-col gap-4 max-w-3xl">
        {/* Step label */}
        <div className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[var(--text-muted)] font-mono">
          <span className="inline-block w-6 h-px bg-[var(--text-muted)]" />
          <span>
            Step {step.number} · {step.name}
          </span>
        </div>

        {/* Headline */}
        <h3 className="font-editorial font-extrabold text-[var(--text-primary)] leading-[1.05] tracking-[-0.025em] text-[clamp(1.5rem,2.8vw,2.5rem)]">
          {step.headline}
        </h3>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed">
          {step.paragraph}
        </p>

        {/* Two deliverables */}
        <ul className="mt-2 flex flex-col gap-2">
          {step.deliverables.map((d, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
            >
              <span
                className="mt-[0.55em] w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: 'var(--accent)' }}
              />
              <span>{d}</span>
            </li>
          ))}
        </ul>

        {/* Hairline separator */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-[var(--glass-border-strong)] via-[var(--glass-border)] to-transparent" />
      </div>
    </motion.div>
  );
};

export default ProcessRail;
