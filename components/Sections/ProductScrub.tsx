import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ease } from '../motion/tokens';

/* Hook: true on desktop (lg and up), false on mobile/tablet */
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);
  return isDesktop;
};

/* ─────────────────────────────────────────────────────────────
   PRODUCT SCRUB
   Pinned section. Vertical scroll drives horizontal movement
   through 3 full-viewport editorial product cards.
   ───────────────────────────────────────────────────────────── */

interface Product {
  number: string;
  category: string;
  title: string;
  /** One-paragraph core description */
  summary: string;
  /** Outcome / business value line — highlighted with an accent rail */
  highlight: string;
  /** Short capability tags, displayed as chips */
  tags: string[];
  image: string;
  imageAlt: string;
  /** CSS background gradient (low-opacity wash over accent) */
  tint: string;
  href: string;
  /** Visible status line (e.g. "Available on the App Store") */
  status: string;
}

const products: Product[] = [
  {
    number: '01',
    category: 'Faith · Mobile · Consumer',
    title: 'Inspired By The Cross',
    summary:
      'A mobile-first faith platform featuring daily devotionals, scripture, and community prayer. Built as a native iOS app with a scalable backend, shipped end to end.',
    highlight:
      'Designed to scale content delivery and engage users daily through a modern, mobile-first experience.',
    tags: ['Native iOS', 'Scalable Backend', 'Live on App Store'],
    image: '/inspired-web-screenshot.png',
    imageAlt: 'Inspired By The Cross app interface',
    tint: 'linear-gradient(135deg, rgba(251, 191, 36, 0.18), rgba(251, 146, 60, 0.08) 40%, transparent 70%)',
    href: '/inspired',
    status: 'Available on the App Store',
  },
  {
    number: '02',
    category: 'Healthcare · Web + Mobile · Clinical',
    title: 'dialysis.live',
    summary:
      'A patient-focused health tracking platform with dashboards, vitals, nutrition logs, and medication reminders. Built across web, iOS, and Android.',
    highlight:
      'Built to give patients and care teams a shared, real-time view of treatment, adherence, and outcomes.',
    tags: ['Web + iOS + Android', 'AI-assisted insights', 'Clinical-grade'],
    image: '/dialysis-web-screenshot.png',
    imageAlt: 'dialysis.live dashboard',
    tint: 'linear-gradient(135deg, rgba(45, 212, 191, 0.2), rgba(16, 185, 129, 0.08) 40%, transparent 70%)',
    href: '/dialysis',
    status: 'Currently in production',
  },
  {
    number: '03',
    category: 'Wellness · Mobile · Consumer',
    title: 'Ullam',
    summary:
      'An emotional wellness app with AI-powered journaling and mood tracking, designed to help users reflect, express, and grow emotionally. Clean, calm, and quietly intelligent by design.',
    highlight:
      'Built to help users develop a daily reflection practice with AI that listens, not interrupts.',
    tags: ['AI Insights', 'Mood Tracking', 'Native iOS'],
    image: '',
    imageAlt: 'Ullam emotional wellness app',
    tint: 'linear-gradient(135deg, rgba(216, 180, 254, 0.22), rgba(244, 114, 182, 0.08) 40%, transparent 70%)',
    href: '/apps',
    status: 'Currently in design',
  },
];

const ProductScrub: React.FC = () => {
  const isDesktop = useIsDesktop();
  return isDesktop ? <ProductScrubDesktop /> : <ProductScrubMobile />;
};

/* ─── Desktop: pin-scrub horizontal ───────────────────────── */
const ProductScrubDesktop: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `-${(products.length - 1) * 100}%`],
  );

  const [active, setActive] = React.useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      products.length - 1,
      Math.max(0, Math.round(v * (products.length - 1))),
    );
    if (idx !== active) setActive(idx);
  });

  return (
    <section
      ref={ref}
      id="product-scrub"
      className="relative"
      style={{ height: `${products.length * 100}vh`, background: 'var(--bg-base)' }}
    >
      {/* ── Sticky viewport ───────────────────────────────── */}
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* Top progress rail */}
        <div className="absolute top-0 left-0 right-0 z-[10] flex items-center gap-8 px-6 sm:px-10 lg:px-16 py-6 border-b border-[var(--glass-border)] backdrop-blur-md bg-[var(--bg-base)]/60">
          <div className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[var(--text-muted)] font-mono">
            <span className="inline-block w-6 h-px bg-[var(--text-muted)]" />
            <span>Work / Featured projects</span>
          </div>
          <div className="flex-1 flex items-center gap-4">
            {products.map((p, i) => (
              <div key={i} className="flex-1 flex items-center gap-3">
                <span
                  className={`text-[11px] font-mono tabular-nums transition-colors duration-500 ${
                    active >= i ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'
                  }`}
                >
                  {p.number}
                </span>
                <div className="flex-1 h-[2px] bg-[var(--glass-border-strong)] overflow-hidden rounded-full">
                  <motion.div
                    className="h-full origin-left"
                    style={{
                      background: 'var(--accent)',
                      scaleX: active > i ? 1 : active === i ? 0.5 : 0,
                      transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="hidden sm:block text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)] font-mono">
            {String(active + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
          </div>
        </div>

        {/* Horizontal track */}
        <motion.div ref={trackRef} style={{ x }} className="h-full flex">
          {products.map((p, i) => (
            <ProductCard key={p.number} product={p} isActive={active === i} />
          ))}
        </motion.div>

        {/* Side fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 pointer-events-none z-[5] bg-gradient-to-r from-[var(--bg-base)] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-24 pointer-events-none z-[5] bg-gradient-to-l from-[var(--bg-base)] to-transparent" />
      </div>
    </section>
  );
};

/* ─── Mobile: simple vertical stack ──────────────────────── */
const ProductScrubMobile: React.FC = () => {
  return (
    <section
      id="product-scrub"
      className="relative py-16 sm:py-24"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Section header */}
      <div className="max-w-[100rem] mx-auto px-6 sm:px-10 mb-10 sm:mb-14">
        <div className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] font-mono">
          <span className="inline-block w-10 h-px bg-[var(--text-secondary)]" />
          <span>Work / Featured projects</span>
        </div>
      </div>

      {/* Vertical stack of cards */}
      <div className="flex flex-col gap-16 sm:gap-24">
        {products.map((p) => (
          <MobileProductCard key={p.number} product={p} />
        ))}
      </div>
    </section>
  );
};

const MobileProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 0.9, ease: [...ease] }}
      className="relative"
    >
      {/* Tint wash */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: product.tint }} />

      <div className="relative max-w-[100rem] mx-auto px-6 sm:px-10 py-10 sm:py-14 flex flex-col gap-6">
        {/* Category */}
        <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)] font-mono">
          <span className="inline-block w-6 h-px bg-[var(--text-muted)]" />
          <span>{product.category}</span>
        </div>

        {/* Numeral */}
        <div
          className="font-fraunces italic font-normal text-[var(--accent)] leading-[0.8] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(3.5rem, 16vw, 6rem)', opacity: 0.4 }}
        >
          {product.number}
        </div>

        {/* Title */}
        <h3 className="font-editorial font-extrabold text-[var(--text-primary)] leading-[0.95] tracking-[-0.035em] text-[clamp(1.75rem,7vw,2.75rem)]">
          {product.title}
        </h3>

        {/* Image */}
        <div
          className="relative rounded-[1.5rem] border border-[var(--glass-border-strong)] bg-[var(--bg-100)] overflow-hidden aspect-[16/10]"
          style={{ boxShadow: '0 20px 60px -20px rgba(0,0,0,0.5)' }}
        >
          <div className="absolute inset-0 pointer-events-none z-[1]" style={{ background: product.tint }} />
          {product.image ? (
            <img src={product.image} alt={product.imageAlt} className="relative z-[2] w-full h-full object-cover" />
          ) : (
            <div className="relative z-[2] w-full h-full flex flex-col items-center justify-center gap-4 px-6">
              <div className="font-fraunces italic font-normal text-[clamp(1.25rem,5vw,2rem)] text-[var(--text-primary)]/60 leading-[1] text-center">
                How are you <span className="text-[var(--accent)]">really</span> feeling today?
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {['Calm', 'Anxious', 'Hopeful', 'Tired'].map((mood) => (
                  <span
                    key={mood}
                    className="px-2.5 py-1 rounded-full border border-[var(--glass-border-strong)] bg-[var(--glass-bg)] text-[10px] font-medium text-[var(--text-secondary)]"
                  >
                    {mood}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed">
          {product.summary}
        </p>

        {/* Highlight */}
        <div className="relative pl-4 border-l-2" style={{ borderColor: 'var(--accent)' }}>
          <p className="text-[13px] sm:text-sm font-semibold text-[var(--text-primary)] leading-relaxed">
            {product.highlight}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-[var(--text-primary)] border border-[var(--glass-border-strong)]"
              style={{ background: 'var(--glass-bg)' }}
            >
              <span className="inline-block w-1 h-1 rounded-full" style={{ background: 'var(--accent)' }} />
              {tag}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <a
            href={product.href}
            className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[var(--glass-border-strong)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all duration-400 text-sm font-semibold text-[var(--text-primary)]"
          >
            <span>View Case Study</span>
            <ArrowUpRight size={15} className="transition-transform duration-400 group-hover:rotate-45" />
          </a>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--glass-border-strong)] bg-[var(--glass-bg)] text-xs font-semibold text-[var(--text-secondary)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            {product.status}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Individual product card ─────────────────────────────── */
const ProductCard: React.FC<{ product: Product; isActive: boolean }> = ({
  product,
  isActive,
}) => {
  return (
    <div className="relative w-screen h-full flex-shrink-0 flex items-center">
      {/* Tint wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: product.tint }}
      />

      <div className="relative w-full max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* ── Left: editorial copy ────────────────────── */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Category */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [...ease] }}
            className="flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--text-muted)] font-mono"
          >
            <span className="inline-block w-6 h-px bg-[var(--text-muted)]" />
            <span>{product.category}</span>
          </motion.div>

          {/* Supportive index numeral (reduced presence) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 0.35, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [...ease] }}
            className="font-fraunces italic font-normal text-[var(--accent)] leading-[0.8] tracking-[-0.03em] -mb-2"
            style={{ fontSize: 'clamp(4rem, 9vw, 10rem)' }}
          >
            {product.number}
          </motion.div>

          {/* Title */}
          <div className="overflow-hidden">
            <motion.h3
              initial={{ y: '110%' }}
              animate={isActive ? { y: 0 } : { y: '110%' }}
              transition={{ duration: 0.9, delay: 0.3, ease: [...ease] }}
              className="font-editorial font-extrabold text-[var(--text-primary)] leading-[0.95] tracking-[-0.035em]"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 3.25rem)' }}
            >
              {product.title}
            </motion.h3>
          </div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.42, ease: [...ease] }}
            className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed max-w-lg"
          >
            {product.summary}
          </motion.p>

          {/* Highlight — business value / result line */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [...ease] }}
            className="relative pl-4 border-l-2 max-w-lg"
            style={{ borderColor: 'var(--accent)' }}
          >
            <p className="text-[13px] sm:text-sm font-semibold text-[var(--text-primary)] leading-relaxed">
              {product.highlight}
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, delay: 0.58, ease: [...ease] }}
            className="flex flex-wrap gap-2"
          >
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-[var(--text-primary)] border border-[var(--glass-border-strong)]"
                style={{ background: 'var(--glass-bg)' }}
              >
                <span
                  className="inline-block w-1 h-1 rounded-full"
                  style={{ background: 'var(--accent)' }}
                />
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Status chip + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, delay: 0.68, ease: [...ease] }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a
              href={product.href}
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[var(--glass-border-strong)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] transition-all duration-400 text-sm font-semibold text-[var(--text-primary)]"
            >
              <span>View Case Study</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-400 group-hover:rotate-45"
              />
            </a>

            {/* Status pill — more prominent than before */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--glass-border-strong)] bg-[var(--glass-bg)] text-xs font-semibold text-[var(--text-secondary)]">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              {product.status}
            </span>
          </motion.div>
        </div>

        {/* ── Right: framed screenshot ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={
            isActive
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 40, scale: 0.96 }
          }
          transition={{ duration: 1.1, delay: 0.35, ease: [...ease] }}
          className="lg:col-span-7 relative"
        >
          <div
            className="relative rounded-[1.5rem] sm:rounded-[2rem] border border-[var(--glass-border-strong)] bg-[var(--bg-100)] overflow-hidden aspect-[16/10]"
            style={{ boxShadow: '0 40px 100px -20px rgba(0,0,0,0.6)' }}
          >
            {/* Tint overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{ background: product.tint }}
            />

            {product.image ? (
              <img
                src={product.image}
                alt={product.imageAlt}
                className="relative z-[2] w-full h-full object-cover"
              />
            ) : (
              <div className="relative z-[2] w-full h-full flex flex-col items-center justify-center gap-6 px-8">
                <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)] font-mono">
                  <span className="inline-block w-6 h-px bg-[var(--text-muted)]" />
                  <span>Daily check-in</span>
                </div>
                <div className="font-fraunces italic font-normal text-[clamp(2rem,5vw,4rem)] text-[var(--text-primary)]/60 leading-[1] text-center max-w-[80%]">
                  How are you <span className="text-[var(--accent)]">really</span> feeling today?
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                  {['Calm', 'Anxious', 'Hopeful', 'Tired'].map((mood) => (
                    <span
                      key={mood}
                      className="px-4 py-1.5 rounded-full border border-[var(--glass-border-strong)] bg-[var(--glass-bg)] text-[11px] font-medium text-[var(--text-secondary)]"
                    >
                      {mood}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Corner crosshair markers */}
            {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map(
              (pos) => (
                <div
                  key={pos}
                  className={`absolute ${pos} w-3 h-3 z-[3] pointer-events-none`}
                >
                  <div className="absolute inset-0 border-l border-t border-white/30" />
                </div>
              ),
            )}

            {/* File tab */}
            <div className="absolute top-0 left-6 z-[3] -translate-y-full">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-t-lg border border-b-0 border-[var(--glass-border-strong)] bg-[var(--bg-100)]">
                <span className="font-mono text-[10px] tracking-wider text-[var(--text-secondary)]">
                  / {product.number}
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductScrub;
