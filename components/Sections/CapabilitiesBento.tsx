import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Sparkles,
  Building2,
  Globe,
  LayoutDashboard,
  Plug,
} from 'lucide-react';
import { ease, springBase } from '../motion/tokens';
import WordMask from '../motion/WordMask';

/* ─────────────────────────────────────────────────────────────
   CAPABILITIES — "What We Do"
   Clean 3×2 grid of equal-weight service cards. Every card has
   the same structure, tone, and exactly 3 tags — no visual
   imbalance, no fake selection state.
   ───────────────────────────────────────────────────────────── */

interface Service {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    eyebrow: '01',
    title: 'Custom Software',
    description:
      'Custom applications and SaaS platforms. Designed, built, and deployed end to end.',
    tags: ['Web Apps', 'Mobile Apps', 'SaaS'],
    icon: <Code2 size={20} strokeWidth={1.8} />,
  },
  {
    eyebrow: '02',
    title: 'AI Solutions',
    description:
      'LLM-powered tools, assistants, and automation using GPT, Claude, and Gemini.',
    tags: ['LLM Integration', 'AI Agents', 'Automation'],
    icon: <Sparkles size={20} strokeWidth={1.8} />,
  },
  {
    eyebrow: '03',
    title: 'Enterprise Applications',
    description:
      'Secure, scalable systems built for teams that need reliability and growth.',
    tags: ['Internal Platforms', 'Admin Portals', 'Cloud'],
    icon: <Building2 size={20} strokeWidth={1.8} />,
  },
  {
    eyebrow: '04',
    title: 'Web Platforms',
    description:
      'High-performance marketing sites, customer portals, and content platforms. Fast, and fully owned.',
    tags: ['Marketing Sites', 'Customer Portals', 'E-commerce'],
    icon: <Globe size={20} strokeWidth={1.8} />,
  },
  {
    eyebrow: '05',
    title: 'Internal Tools',
    description:
      'Dashboards, admin panels, and operational tools that turn workflows into repeatable systems.',
    tags: ['Dashboards', 'Admin Panels', 'Ops Automation'],
    icon: <LayoutDashboard size={20} strokeWidth={1.8} />,
  },
  {
    eyebrow: '06',
    title: 'System Integrations',
    description:
      'Connect the systems that run your business. APIs, webhooks, and legacy bridges, wired end to end.',
    tags: ['APIs', 'Webhooks', 'Legacy Bridges'],
    icon: <Plug size={20} strokeWidth={1.8} />,
  },
];

const CapabilitiesBento: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const headInView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section
      ref={ref}
      id="capabilities-bento"
      className="relative py-28 sm:py-40"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Quiet grid backdrop */}
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
            <span>Our services</span>
          </motion.div>

          <div className="lg:col-span-9">
            {/* ── Big heading ─────────────────────── */}
            <h2 className="font-editorial font-extrabold leading-[0.9] tracking-[-0.045em] text-[var(--text-primary)] text-[clamp(2.5rem,7vw,7rem)]">
              <WordMask
                text="What"
                trigger="inView"
                play={headInView}
                delay={0.1}
              />
              <WordMask
                text="we"
                trigger="inView"
                play={headInView}
                delay={0.25}
              />
              <span className="inline-block overflow-hidden align-bottom mr-[0.22em]">
                <motion.span
                  className="inline-block font-fraunces italic font-normal text-[var(--accent)]"
                  initial={{ y: '110%' }}
                  animate={headInView ? { y: 0 } : { y: '110%' }}
                  transition={{ duration: 1.0, delay: 0.4, ease: [...ease] }}
                >
                  do.
                </motion.span>
              </span>
            </h2>

            {/* ── Supporting line ─────────────────── */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: [...ease] }}
              className="mt-8 max-w-xl text-base sm:text-lg text-[var(--text-primary)] leading-relaxed font-medium"
            >
              End-to-end product development, from idea to launch and beyond.
            </motion.p>
          </div>
        </div>

        {/* ── Lead-in line above the grid ─────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75, ease: [...ease] }}
          className="mb-10 sm:mb-14 max-w-2xl text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed"
        >
          From startups to enterprise systems. We build software that performs and
          scales.
        </motion.p>

        {/* ── Services grid (3 × 2) ───────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* ── Ullam mention ───────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: [...ease] }}
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

/* ─── Individual service card ─────────────────────────────── */
const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [...ease] }}
      whileHover={{ y: -6, transition: springBase }}
      className="group relative rounded-[1.75rem] sm:rounded-[2rem] border border-[var(--glass-border-strong)] bg-[var(--bg-50)] overflow-hidden card-glow p-8 sm:p-9 flex flex-col gap-5 cursor-default"
      style={{
        boxShadow: '0 20px 60px -30px rgba(0, 0, 0, 0.5)',
        minHeight: '340px',
      }}
    >
      {/* ── Top row: icon + eyebrow ─────────────────── */}
      <div className="flex items-center justify-between">
        <span
          className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--glass-border-strong)] text-[var(--accent)] shrink-0"
          style={{ background: 'var(--glass-bg)' }}
        >
          {service.icon}
        </span>
        <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--text-muted)] font-mono">
          {service.eyebrow}
        </span>
      </div>

      {/* ── Title ────────────────────────────────────── */}
      <h3 className="font-editorial font-extrabold leading-[1.05] tracking-[-0.025em] text-[var(--text-primary)] text-[clamp(1.5rem,2vw,1.875rem)]">
        {service.title}
      </h3>

      {/* ── Description ─────────────────────────────── */}
      <p className="text-sm sm:text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">
        {service.description}
      </p>

      {/* ── Tag chips (max 3) ───────────────────────── */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--glass-border)]">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium text-[var(--text-secondary)] border border-[var(--glass-border-strong)]"
            style={{ background: 'var(--glass-bg)' }}
          >
            <span
              className="inline-block w-1 h-1 rounded-full"
              style={{ background: 'var(--accent)' }}
            />
            {tag}
          </span>
        ))}
      </div>

      {/* ── Bottom-right arrow with tooltip ─────────── */}
      <div className="absolute bottom-6 right-6 z-[2] flex items-center gap-2">
        {/* Tooltip label — appears on hover */}
        <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-400 text-[11px] font-semibold tracking-tight text-[var(--text-primary)] bg-[var(--bg-50)] px-2 py-0.5 rounded-md border border-[var(--glass-border-strong)]">
          View details
        </span>
        <span
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--glass-border-strong)] text-[var(--text-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:rotate-45 transition-all duration-500 bg-[var(--bg-50)]"
          title="View details"
          aria-label="View details"
        >
          <ArrowUpRight size={15} strokeWidth={2} />
        </span>
      </div>
    </motion.div>
  );
};

export default CapabilitiesBento;
