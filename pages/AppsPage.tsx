import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp } from '../components/motion';
import TiltCard from '../components/ui/TiltCard';

const ease = [0.16, 1, 0.3, 1];

const AppsPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
        <div className="absolute inset-0 bg-surface" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeUp>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--text-muted)]">Portfolio</span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-display font-bold tracking-[-0.04em] text-[var(--text-primary)] leading-[0.95] mb-6">
              Our <span className="font-serif italic font-normal text-[var(--accent)]">Apps</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Purpose-driven products across faith and healthcare — each engineered to deliver real impact.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Inspired By The Cross */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeUp>
            <Link to="/inspired" className="block group">
              <TiltCard className="rounded-[1.25rem] sm:rounded-[1.5rem] border border-[var(--glass-border)] hover:border-[var(--glass-border-strong)] transition-all overflow-hidden" intensity={4}>
                <div className="absolute inset-0 bg-surface-50 group-hover:bg-surface-100 transition-colors duration-500" />
                <div className="relative z-10 p-6 sm:p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-3 h-3 rounded-full bg-[var(--accent)]" />
                      <span className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase">Faith</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-[0.95] mb-4 sm:mb-6">
                      Inspired By<br />The <span className="font-serif italic font-normal text-[var(--accent)]">Cross</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mb-6 sm:mb-8">
                      A digital sanctuary for your spiritual journey — daily devotionals, scripture, community prayer, and AI-powered conversations about faith.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={(e) => { e.preventDefault(); window.open('https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428', '_blank'); }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--bg-base)] font-bold text-sm"
                    >
                      <Download size={16} /> Download for iOS
                    </motion.button>
                  </div>
                  <div className="w-[140px] sm:w-[200px] md:w-[240px] shrink-0">
                    <div className="bg-surface-200 rounded-[1.25rem] overflow-hidden shadow-2xl border border-[var(--glass-border)]" style={{ aspectRatio: '9/19' }}>
                      <img src="/inspired-mobile-screenshot.png" alt="Inspired By The Cross" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* dialysis.live */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeUp>
            <Link to="/dialysis" className="block group">
              <TiltCard className="rounded-[1.25rem] sm:rounded-[1.5rem] border border-[var(--glass-border)] hover:border-[var(--glass-border-strong)] transition-all overflow-hidden" intensity={4}>
                <div className="absolute inset-0 bg-surface-50 group-hover:bg-surface-100 transition-colors duration-500" />
                <div className="relative z-10 p-6 sm:p-10 md:p-16 flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-3 h-3 rounded-full bg-[var(--accent)]" />
                      <span className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase">Healthcare</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-[-0.03em] leading-[0.95] mb-4 sm:mb-6">
                      <span className="text-[var(--text-primary)]">dialysis</span><span className="font-serif italic font-normal text-[var(--accent)]">.live</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl mb-6 sm:mb-8">
                      Clinical-grade renal companion — track treatments, vitals, nutrition, and medications with AI-powered insights for better health outcomes.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={(e) => { e.preventDefault(); window.open('https://dialysis.live/', '_blank'); }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--bg-base)] font-bold text-sm"
                    >
                      Visit Website <ExternalLink size={16} />
                    </motion.button>
                  </div>
                  <div className="w-[200px] sm:w-[280px] md:w-[340px] shrink-0">
                    <div className="bg-surface-200 rounded-[0.75rem] overflow-hidden shadow-2xl border border-[var(--glass-border)]">
                      <img src="/dialysis-web-screenshot.png" alt="dialysis.live" className="w-full h-auto" loading="lazy" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default AppsPage;
