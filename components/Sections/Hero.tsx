import React, { useRef, lazy, Suspense } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeUp, MagneticButton } from '../motion';
import NaturalForm from '../Contact/NaturalForm';

const Scene3D = lazy(() => import('../Scene3D'));

interface HeroProps {
  onOpenContact?: () => void;
}

const ease = [0.16, 1, 0.3, 1];

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative"
    >
      <div className="absolute inset-0 bg-surface" />

      {/* 3D Scene — absolute, full bleed, behind everything */}
      <motion.div
        style={{ opacity: sceneOpacity }}
        className="absolute inset-0 z-[1]"
      >
        {/* Overlay for mobile readability */}
        <div className="absolute inset-0 bg-surface/50 lg:bg-transparent z-[1]" />
        <Suspense fallback={null}>
          <Scene3D className="w-full h-full" />
        </Suspense>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent z-[3]" />

      {/* Content — centered */}
      <div className="relative z-[2] max-w-[90rem] mx-auto px-4 sm:px-6 min-h-[100dvh] flex items-center justify-center">
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative w-full max-w-3xl pt-28 sm:pt-32 pb-12 lg:py-0 flex flex-col items-center text-center"
        >
          {/* Soft radial blur behind text — no visible box */}
          <div className="absolute inset-0 -inset-x-20 -inset-y-10 bg-[radial-gradient(ellipse_at_center,_var(--bg-base)_20%,transparent_70%)] opacity-70 pointer-events-none" />
          <div className="mb-6 sm:mb-8 mt-4">
            {['We build', 'software'].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease }}
                >
                  <span className="block text-[clamp(2.2rem,9vw,6.5rem)] font-display font-bold tracking-[-0.04em] leading-[0.92] text-[var(--text-primary)]">
                    {line}
                  </span>
                </motion.div>
              </div>
            ))}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.54, ease }}
              >
                <span className="block text-[clamp(2.2rem,9vw,6.5rem)] font-display font-bold tracking-[-0.04em] leading-[0.92] text-[var(--text-primary)]">
                  that{' '}
                  <span className="font-serif italic font-normal text-[var(--accent)]">matters</span>
                </span>
              </motion.div>
            </div>
          </div>

          <FadeUp delay={0.8} className="max-w-md mb-8 sm:mb-10">
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              A software development company creating products that solve real problems — from concept to launch.
            </p>
          </FadeUp>

          <FadeUp delay={1.0} className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <MagneticButton
              onClick={onOpenContact}
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[var(--accent)] text-[var(--bg-base)] font-bold text-sm flex items-center gap-2 hover:brightness-110 transition-all"
            >
              Start a Project
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </MagneticButton>
            <MagneticButton
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-[var(--text-muted)] text-[var(--text-secondary)] font-semibold text-sm hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] flex items-center gap-2 transition-all"
            >
              Our Products
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </MagneticButton>
          </FadeUp>
        </motion.div>
      </div>

      {/* Form */}
      <div className="relative z-[2] max-w-3xl mx-auto px-4 sm:px-6 pb-20 sm:pb-32">
        <FadeUp delay={1.2}>
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[var(--text-primary)] tracking-[-0.03em] mb-3">
              Let's Build Something <span className="font-serif italic font-normal text-[var(--accent)]">Great</span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md mx-auto">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="rounded-[1.5rem] sm:rounded-[2rem] border border-[var(--glass-border)] bg-surface-50 p-5 sm:p-8 md:p-12 shadow-2xl shadow-black/5">
            <NaturalForm />
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default Hero;
