import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import Magnetic from '../motion/Magnetic';
import { ease, easeSmooth, springSnappy } from '../motion/tokens';

interface HeroManifestProps {
  onOpenContact?: () => void;
}

/* ─────────────────────────────────────────────────────────────
   HERO MANIFEST
   Signature section. Editorial headline with cursor-magnetic
   words, orbital product constellation, live clock rail, and
   the primary CTA ritual.
   ───────────────────────────────────────────────────────────── */
const HeroManifest: React.FC<HeroManifestProps> = ({ onOpenContact }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const constellationY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);

  const scrollToWork = () => {
    const el = document.getElementById('product-scrub');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      ref={ref}
      id="hero-manifest"
      className="relative min-h-[100dvh] sm:min-h-[110dvh] overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* ── Ghost logo backdrop (desktop only) ──────────────── */}
      <motion.div
        style={{ y: constellationY }}
        className="absolute inset-0 z-[1] pointer-events-none overflow-hidden hidden md:block"
      >
        {/* Giant, very low-opacity brand mark floating off to the right.
            Sits behind the headline without competing with it. */}
        <motion.img
          src="/logo.png"
          alt=""
          initial={{ opacity: 0, scale: 1.05, rotate: -4 }}
          animate={{ opacity: 0.09, scale: 1, rotate: 0 }}
          transition={{ duration: 2.4, delay: 0.4, ease: [...ease] }}
          className="absolute right-[-6vw] top-[6vh] w-[min(72vh,58vw)] h-auto select-none"
          style={{
            filter: 'grayscale(0.15)',
          }}
        />

        {/* Soft radial glow behind the logo that picks up the accent color */}
        <div
          className="absolute right-[-4vw] top-[14vh] w-[50vw] h-[50vw] max-w-[720px] max-h-[720px] rounded-full pointer-events-none blur-3xl"
          style={{ background: 'var(--accent-soft)', opacity: 0.5 }}
        />
      </motion.div>

      {/* ── Vertical scaffold lines ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-[3]">
        <div className="absolute top-0 bottom-0 left-[6vw] w-px bg-gradient-to-b from-transparent via-[var(--glass-border)] to-transparent" />
        <div className="absolute top-0 bottom-0 right-[6vw] w-px bg-gradient-to-b from-transparent via-[var(--glass-border)] to-transparent" />
      </div>

      {/* ── Diagonal hairline ────────────────────────────────── */}
      <svg
        className="absolute top-[26vh] right-[6vw] w-[40vw] h-[1px] z-[3] pointer-events-none"
        viewBox="0 0 400 1"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0"
          y1="0.5"
          x2="400"
          y2="0.5"
          stroke="var(--glass-border-strong)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [...ease] }}
        />
      </svg>

      {/* ── Main content ─────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-[4] max-w-[100rem] mx-auto px-5 sm:px-10 lg:px-16 pt-[14vh] sm:pt-[20vh] lg:pt-[22vh] pb-24 sm:pb-32"
      >
        {/* ── THE HEADLINE ─────────────────────────────────── */}
        <h1 className="font-editorial font-extrabold leading-[0.84] tracking-[-0.055em] text-[var(--text-primary)] mb-10 sm:mb-12">
          <HeadlineLine words={['We', 'build']} delay={0.5} />
          <HeadlineLine words={['software']} delay={0.7} />
          <HeadlineLine
            words={['that', 'performs.']}
            delay={0.9}
            italicIndices={[1]}
          />
        </h1>

        {/* ── Subheadline ──────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [...ease] }}
          className="max-w-2xl text-base sm:text-xl leading-relaxed text-[var(--text-secondary)] mb-12 sm:mb-16"
        >
          We help businesses design, build, and launch{' '}
          <span className="text-[var(--text-primary)]">custom software</span>,{' '}
          <span className="text-[var(--text-primary)]">AI solutions</span>, and{' '}
          <span className="text-[var(--text-primary)]">enterprise systems</span>{' '}
          that are fast, scalable, and built for real-world use.
        </motion.p>

        {/* ── CTAs ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: [...ease] }}
          className="flex flex-wrap items-center gap-5"
        >
          <Magnetic radius={120} strength={18}>
            <motion.button
              onClick={onOpenContact}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={springSnappy}
              className="group relative inline-flex items-center gap-4 pl-7 pr-2 py-2 rounded-full border border-[var(--glass-border-strong)] bg-[var(--glass-bg-strong)] backdrop-blur-xl hover:border-[var(--accent)] transition-all duration-500"
            >
              <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
                Start a project
              </span>
              <span
                className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-500 group-hover:rotate-45"
                style={{ background: 'var(--accent)', color: 'var(--bg-base)' }}
              >
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 60px -10px var(--accent)' }}
              />
            </motion.button>
          </Magnetic>

          <motion.button
            type="button"
            onClick={scrollToWork}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={springSnappy}
            className="group relative inline-flex items-center gap-4 pl-7 pr-2 py-2 rounded-full border border-[var(--glass-border-strong)] bg-[var(--glass-bg-strong)] backdrop-blur-xl hover:border-[var(--text-primary)] transition-all duration-500"
          >
            <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
              View our work
            </span>
            <span
              className="flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-500 group-hover:translate-y-[2px]"
              style={{
                background: 'var(--text-primary)',
                color: 'var(--bg-base)',
                borderColor: 'var(--text-primary)',
              }}
            >
              <ArrowDown size={18} strokeWidth={2.5} />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.9, ease: [...ease] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[4] flex flex-col items-center gap-3 pointer-events-none"
      >
        <div className="text-[10px] tracking-[0.3em] uppercase text-[var(--text-muted)]">
          Scroll
        </div>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 origin-top bg-gradient-to-b from-[var(--text-muted)] to-transparent"
        />
      </motion.div>

      {/* ── Bottom hairline ──────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border-strong)] to-transparent z-[5]" />
    </section>
  );
};

/* ─── Headline line — per-character cascade reveal ────────── */
/*
 * Each character fades and rises into place with a gentle stagger.
 * The accent word gets a draw-in underline that follows the reveal.
 * No cursor-magnetic distortion — calmer, more editorial.
 */
const CHAR_STAGGER = 0.028;
const CHAR_DURATION = 0.9;

const HeadlineLine: React.FC<{
  words: string[];
  delay: number;
  italicIndices?: number[];
}> = ({ words, delay, italicIndices = [] }) => {
  // Compute running char index across the whole line so staggers flow continuously.
  let charCursor = 0;

  return (
    <span className="block text-[clamp(2.5rem,12vw,11rem)]">
      {words.map((word, wi) => {
        const isItalic = italicIndices.includes(wi);
        const startIndex = charCursor;
        charCursor += word.length + 1; // +1 for the space
        const underlineDelay = delay + (startIndex + word.length) * CHAR_STAGGER + 0.15;

        return (
          <span
            key={`${word}-${wi}`}
            className={`inline-block align-bottom mr-[0.18em] ${
              isItalic ? 'relative' : ''
            }`}
          >
            {word.split('').map((char, ci) => {
              const absoluteIndex = startIndex + ci;
              return (
                <motion.span
                  key={`${char}-${ci}`}
                  initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: CHAR_DURATION,
                    delay: delay + absoluteIndex * CHAR_STAGGER,
                    ease: [...easeSmooth],
                  }}
                  className={`inline-block ${
                    isItalic
                      ? 'font-fraunces italic font-normal text-[var(--accent)]'
                      : ''
                  }`}
                >
                  {char}
                </motion.span>
              );
            })}

            {/* Draw-in underline for the accent italic word */}
            {isItalic && (
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.8,
                  delay: underlineDelay,
                  ease: [...ease],
                }}
                className="absolute left-0 right-[0.08em] bottom-[0.08em] h-[0.055em] origin-left rounded-full"
                style={{ background: 'var(--accent)' }}
              />
            )}
          </span>
        );
      })}
    </span>
  );
};

export default HeroManifest;
