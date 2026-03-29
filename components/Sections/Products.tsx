import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeUp } from '../motion';
import TiltCard from '../ui/TiltCard';

const Products: React.FC = () => {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: s1 } = useScroll({ target: card1Ref, offset: ['start end', 'end start'] });
  const { scrollYProgress: s2 } = useScroll({ target: card2Ref, offset: ['start end', 'end start'] });
  const img1Y = useTransform(s1, [0, 1], [30, -30]);
  const img2Y = useTransform(s2, [0, 1], [20, -20]);

  return (
    <section id="products" className="py-20 sm:py-32 md:py-44 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <FadeUp className="mb-14 sm:mb-20 md:mb-28">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--text-muted)]">Our Work</span>
            <div className="flex-1 h-px bg-[var(--glass-border)]" />
          </div>
          <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-display font-bold tracking-[-0.04em] text-[var(--text-primary)] leading-[0.95]">
            Products that speak
            <br />
            for <span className="font-serif italic font-normal text-[var(--accent)]">themselves.</span>
          </h2>
        </FadeUp>

        <div className="space-y-4 sm:space-y-6">

          {/* Inspired By The Cross */}
          <div ref={card1Ref}>
            <FadeUp delay={0.1}>
              <Link to="/inspired" className="block group">
                <TiltCard className="rounded-[1.25rem] sm:rounded-[1.5rem] border border-[var(--glass-border)] hover:border-[var(--glass-border-strong)] transition-all duration-500 overflow-hidden" intensity={5}>
                  <div className="absolute inset-0 bg-surface-50 group-hover:bg-surface-100 transition-colors duration-500" />

                  <div className="relative z-10 p-5 sm:p-8 md:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10">
                    <div className="flex-1" style={{ transform: 'translateZ(20px)' }}>
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--text-muted)]">01</span>
                        <div className="w-4 sm:w-6 h-px bg-[var(--glass-border-strong)]" />
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--text-muted)]">Faith</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-[0.95] mb-3 sm:mb-5">
                        Inspired By
                        <br />
                        The <span className="font-serif italic font-normal text-[var(--accent)]">Cross</span>
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
                        A digital sanctuary — daily devotionals, scripture, community prayer, and AI conversations about faith.
                      </p>
                    </div>

                    <div className="flex items-end gap-4 sm:gap-6" style={{ transform: 'translateZ(40px)' }}>
                      <motion.div style={{ y: img1Y }} className="w-[120px] sm:w-[160px] md:w-[200px] shrink-0">
                        <div className="bg-surface-200 rounded-[1rem] sm:rounded-[1.25rem] overflow-hidden shadow-2xl shadow-black/20 border border-[var(--glass-border)]" style={{ aspectRatio: '9/19' }}>
                          <img src="/inspired-mobile-screenshot.png" alt="Inspired By The Cross app" className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </motion.div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[var(--glass-border-strong)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-300 shrink-0 hidden sm:flex" style={{ transform: 'translateZ(50px)' }}>
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </FadeUp>
          </div>

          {/* dialysis.live */}
          <div ref={card2Ref}>
            <FadeUp delay={0.2}>
              <Link to="/dialysis" className="block group">
                <TiltCard className="rounded-[1.25rem] sm:rounded-[1.5rem] border border-[var(--glass-border)] hover:border-[var(--glass-border-strong)] transition-all duration-500 overflow-hidden" intensity={5}>
                  <div className="absolute inset-0 bg-surface-50 group-hover:bg-surface-100 transition-colors duration-500" />

                  <div className="relative z-10 p-5 sm:p-8 md:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-10">
                    <div className="flex-1" style={{ transform: 'translateZ(20px)' }}>
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--text-muted)]">02</span>
                        <div className="w-4 sm:w-6 h-px bg-[var(--glass-border-strong)]" />
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--text-muted)]">Healthcare</span>
                      </div>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-[-0.03em] leading-[0.95] mb-3 sm:mb-5">
                        <span className="text-[var(--text-primary)]">dialysis</span><span className="font-serif italic font-normal text-[var(--accent)]">.live</span>
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
                        Clinical-grade renal companion — track treatments, vitals, nutrition, and medications with AI insights.
                      </p>
                    </div>

                    <div className="flex items-end gap-4 sm:gap-6" style={{ transform: 'translateZ(40px)' }}>
                      <motion.div style={{ y: img2Y }} className="w-[180px] sm:w-[220px] md:w-[280px] shrink-0">
                        <div className="bg-surface-200 rounded-[0.5rem] sm:rounded-[0.75rem] overflow-hidden shadow-2xl shadow-black/20 border border-[var(--glass-border)]">
                          <img src="/dialysis-web-screenshot.png" alt="dialysis.live dashboard" className="w-full h-auto" loading="lazy" />
                        </div>
                      </motion.div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[var(--glass-border-strong)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-300 shrink-0 hidden sm:flex" style={{ transform: 'translateZ(50px)' }}>
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
