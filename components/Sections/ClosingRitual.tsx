import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Clock } from 'lucide-react';
import Magnetic from '../motion/Magnetic';
import { ease, springSnappy } from '../motion/tokens';

interface ClosingRitualProps {
  onOpenContact?: () => void;
}

/* ─────────────────────────────────────────────────────────────
   CLOSING RITUAL
   Large, quiet closer. Editorial statement + contact block.
   ───────────────────────────────────────────────────────────── */
const ClosingRitual: React.FC<ClosingRitualProps> = ({ onOpenContact }) => {
  const ref = useRef<HTMLElement>(null);
  const headInView = useInView(ref, { once: true, margin: '-15%' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backdropY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section
      ref={ref}
      id="closing-ritual"
      className="relative min-h-[100dvh] flex flex-col justify-center py-32 sm:py-48 overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Backdrop wordmark */}
      <motion.div
        style={{ y: backdropY }}
        className="absolute inset-x-0 bottom-[10vh] flex justify-center pointer-events-none select-none z-[1]"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={headInView ? { opacity: 0.04 } : { opacity: 0 }}
          transition={{ duration: 1.6, ease: [...ease] }}
          className="font-editorial font-extrabold leading-[0.78] text-center whitespace-nowrap"
          style={{
            fontSize: 'clamp(7rem, 22vw, 22rem)',
            color: 'var(--text-primary)',
            mixBlendMode: 'screen',
          }}
        >
          let&apos;s&nbsp;build
        </motion.h2>
      </motion.div>

      {/* Grid backdrop */}
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />

      {/* Scaffold lines */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <div className="absolute top-0 bottom-0 left-[6vw] w-px bg-gradient-to-b from-transparent via-[var(--glass-border)] to-transparent" />
        <div className="absolute top-0 bottom-0 right-[6vw] w-px bg-gradient-to-b from-transparent via-[var(--glass-border)] to-transparent" />
      </div>

      <div className="relative z-[3] max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={headInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [...ease] }}
          className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--text-muted)] font-mono mb-10 sm:mb-14"
        >
          <span className="inline-block w-8 h-px bg-[var(--text-muted)]" />
          <span>Contact / Let&apos;s talk</span>
        </motion.div>

        {/* Massive headline */}
        <h2 className="font-editorial font-extrabold leading-[0.86] tracking-[-0.05em] text-[var(--text-primary)] mb-10 sm:mb-14">
          <span className="block text-[clamp(2.5rem,8vw,8rem)]">
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={headInView ? { y: 0 } : { y: '110%' }}
                transition={{ duration: 1.0, delay: 0.15, ease: [...ease] }}
              >
                Have a product
              </motion.span>
            </span>
          </span>
          <span className="block text-[clamp(2.5rem,8vw,8rem)]">
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={headInView ? { y: 0 } : { y: '110%' }}
                transition={{ duration: 1.0, delay: 0.3, ease: [...ease] }}
              >
                to build, or a
              </motion.span>
            </span>
          </span>
          <span className="block text-[clamp(2.5rem,8vw,8rem)]">
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={headInView ? { y: 0 } : { y: '110%' }}
                transition={{ duration: 1.0, delay: 0.45, ease: [...ease] }}
              >
                system to&nbsp;
              </motion.span>
            </span>
            <span className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block font-fraunces italic font-normal text-[var(--accent)]"
                initial={{ y: '110%' }}
                animate={headInView ? { y: 0 } : { y: '110%' }}
                transition={{ duration: 1.0, delay: 0.6, ease: [...ease] }}
              >
                improve?
              </motion.span>
            </span>
          </span>
        </h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.75, ease: [...ease] }}
          className="max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] mb-20 sm:mb-28"
        >
          Let&apos;s turn it into something reliable, modern, and ready to launch.
          Tell us about the project, and we&apos;ll come back within two business days
          with a clear view of scope, approach, and next steps.
        </motion.p>

        {/* Bottom: 2-column block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          {/* Left: what we take on */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.7, ease: [...ease] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--text-muted)] font-mono">
              We&apos;re currently taking on
            </div>
            <ul className="flex flex-col gap-4">
              {[
                'Enterprise applications, from zero to launch',
                'Custom websites and web platforms',
                'AI features and LLM-powered tooling',
                'Data analysis and reporting pipelines',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={headInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.8 + i * 0.1, ease: [...ease] }}
                  className="flex items-start gap-4 text-lg sm:text-xl text-[var(--text-primary)] font-editorial"
                >
                  <span
                    className="mt-[0.7em] w-2 h-2 rounded-full shrink-0"
                    style={{ background: 'var(--accent)' }}
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.9, ease: [...ease] }}
            className="lg:col-span-7 lg:col-start-6 flex flex-col gap-8"
          >
            {/* Contact info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 border-b border-[var(--glass-border-strong)]">
              <ContactCell
                icon={<Mail size={14} strokeWidth={2} />}
                label="Email"
                value="kaspar@kaspar.works"
                href="mailto:kaspar@kaspar.works"
              />
              <ContactCell
                icon={<MapPin size={14} strokeWidth={2} />}
                label="Based in"
                value="Newark, DE"
              />
              <ContactCell
                icon={<Clock size={14} strokeWidth={2} />}
                label="Availability"
                value="1 project / Q"
              />
            </div>

            {/* Giant CTA */}
            <div className="flex justify-start lg:justify-end">
              <Magnetic radius={160} strength={24}>
                <motion.button
                  onClick={onOpenContact}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={springSnappy}
                  className="group relative inline-flex items-center gap-5 pl-8 pr-2 py-2 rounded-full border border-[var(--glass-border-strong)] bg-[var(--glass-bg-strong)] backdrop-blur-xl hover:border-[var(--accent)] transition-all duration-500"
                >
                  <span className="text-base sm:text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                    Book a discovery call
                  </span>
                  <span
                    className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 group-hover:rotate-45"
                    style={{ background: 'var(--accent)', color: 'var(--bg-base)' }}
                  >
                    <ArrowUpRight size={22} strokeWidth={2.5} />
                  </span>
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: '0 0 80px -10px var(--accent)' }}
                  />
                </motion.button>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Footer-ish hairline */}
        <div className="mt-24 sm:mt-32 pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)] font-mono">
            Kaspar Works, Inc.  ·  MMXXVI
          </div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)] font-mono">
            Built in-house  ·  No AI stock assets
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Contact cell ────────────────────────────────────────── */
const ContactCell: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}> = ({ icon, label, value, href }) => {
  const content = (
    <>
      <div className="flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[var(--text-muted)] font-mono">
        <span className="text-[var(--accent)]">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="mt-2 font-editorial font-bold text-[var(--text-primary)] text-base sm:text-lg">
        {value}
      </div>
    </>
  );
  if (href) {
    return (
      <a href={href} className="group hover:opacity-80 transition-opacity">
        {content}
      </a>
    );
  }
  return <div>{content}</div>;
};

export default ClosingRitual;
