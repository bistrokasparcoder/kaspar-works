import React, { useRef } from 'react';
import { Lightbulb, Heart, Target } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeUp, Stagger, StaggerItem } from '../motion';
import TiltCard from '../ui/TiltCard';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  const headingY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]" staggerDelay={0.1}>

          {/* Header Card */}
          <StaggerItem className="lg:col-span-2">
            <motion.div style={{ y: headingY }}>
              <TiltCard className="rounded-[1.25rem] sm:rounded-[1.5rem] border border-[var(--glass-border)] bg-surface-50 p-6 sm:p-10 h-full" intensity={4}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--text-muted)]">About Us</span>
                </div>
                <p className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)] tracking-[-0.03em] mb-6 leading-[1.05]">
                  Blending Technology,
                  <br />
                  Creativity & <span className="font-serif italic font-normal text-[var(--accent)]">Purpose.</span>
                </p>
                <p className="text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
                  A multidisciplinary product studio that designs and engineers platforms across faith and healthcare — built to simplify complexity and deliver real value.
                </p>
              </TiltCard>
            </motion.div>
          </StaggerItem>

          {/* Vision Card */}
          <StaggerItem>
            <motion.div style={{ y: cardsY }}>
              <TiltCard className="rounded-[1.5rem] border border-[var(--glass-border)] bg-surface-50 p-8 h-full flex flex-col justify-between group hover:border-[var(--glass-border-strong)] transition-colors" intensity={10}>
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-6" style={{ transform: 'translateZ(30px)' }}>
                  <Lightbulb className="text-[var(--accent)]" size={22} />
                </div>
                <div style={{ transform: 'translateZ(20px)' }}>
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-3">Our Vision</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    To shape the future of digital experiences by creating platforms that inspire growth and improve outcomes.
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </StaggerItem>

          {/* Approach Card */}
          <StaggerItem>
            <motion.div style={{ y: cardsY }}>
              <TiltCard className="rounded-[1.5rem] border border-[var(--glass-border)] bg-surface-50 p-8 h-full flex flex-col justify-between group hover:border-[var(--glass-border-strong)] transition-colors" intensity={10}>
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-6" style={{ transform: 'translateZ(30px)' }}>
                  <Target className="text-[var(--accent)]" size={22} />
                </div>
                <div style={{ transform: 'translateZ(20px)' }}>
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-3">Our Approach</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    Clean design, powerful technology, and meaningful storytelling — crafted to feel personal and purposeful.
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </StaggerItem>

          {/* Heart for Impact */}
          <StaggerItem className="lg:col-span-2">
            <motion.div style={{ y: headingY }}>
              <TiltCard className="rounded-[1.5rem] border border-[var(--glass-border)] bg-surface-50 p-10 h-full flex flex-col md:flex-row items-center md:items-start gap-8 group hover:border-[var(--glass-border-strong)] transition-colors" intensity={4}>
                <div className="w-14 h-14 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center shrink-0" style={{ transform: 'translateZ(25px)' }}>
                  <Heart className="text-[var(--accent)]" size={26} />
                </div>
                <div style={{ transform: 'translateZ(15px)' }}>
                  <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">Heart for <span className="font-serif italic font-normal">Impact</span></h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg">
                    At the heart of our work is a belief: Digital tools should help people live better, think deeper, and connect stronger. Every product we build is crafted with purpose.
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          </StaggerItem>

        </Stagger>
      </div>
    </section>
  );
};

export default About;
