import React from 'react';
import { BookOpen, MessageCircle, Sparkles, Heart, HandHeart, Download, ArrowRight, ExternalLink, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, BlurIn, Stagger, StaggerItem, FloatingElement } from '../components/motion';
import TiltCard from '../components/ui/TiltCard';

const ease = [0.16, 1, 0.3, 1];

const features = [
  { icon: <Sparkles size={28} />, title: "Daily Devotion", desc: "Fresh spiritual insights delivered to your heart every morning. Start each day grounded.", color: "text-amber-400" },
  { icon: <BookOpen size={28} />, title: "Scripture Library", desc: "The full Bible at your fingertips with search, bookmarks, and highlight tools.", color: "text-blue-400" },
  { icon: <HandHeart size={28} />, title: "Prayer Community", desc: "Share prayer requests, uplift others, and experience the power of collective faith.", color: "text-purple-400" },
  { icon: <MessageCircle size={28} />, title: "AI Faith Chat", desc: "Ask questions about scripture, theology, and faith — powered by thoughtful AI.", color: "text-emerald-400" },
];

const InspiredPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-32">
        <div className="absolute inset-0 bg-surface" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

            <div className="flex-1 max-w-2xl">
              <FadeUp>
                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--text-muted)]">Live on App Store</span>
                </div>
              </FadeUp>

              <BlurIn delay={0.2}>
                <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-display font-bold tracking-[-0.04em] leading-[0.9] text-[var(--text-primary)] mb-6 sm:mb-8">
                  Inspired<br />
                  By The<br />
                  <span className="font-serif italic font-normal text-[var(--accent)]">Cross</span>
                </h1>
              </BlurIn>

              <FadeUp delay={0.4}>
                <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mb-8 sm:mb-10">
                  A digital sanctuary designed to deepen your spiritual journey. Daily devotionals, community prayer, and wisdom — all in your pocket.
                </p>
              </FadeUp>

              <FadeUp delay={0.6} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => window.open('https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428', '_blank')}
                  className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[var(--accent)] text-[var(--bg-base)] font-bold text-sm hover:brightness-110 transition-all"
                >
                  <Download size={18} />
                  Download for iOS
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.a
                  href="https://inspiredbythecross.com"
                  target="_blank"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-6 py-3 sm:py-4 rounded-full border border-[var(--text-muted)] text-[var(--text-secondary)] font-semibold text-sm hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-all"
                >
                  Visit Website
                  <ExternalLink size={16} />
                </motion.a>
              </FadeUp>
            </div>

            {/* Phone Mockup */}
            <FadeUp delay={0.3} className="flex-shrink-0">
              <div className="relative">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease }}
                  className="relative z-10"
                >
                  <div className="w-[220px] sm:w-[280px] md:w-[320px] bg-surface-200 border-[5px] sm:border-[6px] border-surface-300 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl" style={{ aspectRatio: '390/844' }}>
                    <img src="/inspired-mobile-screenshot.png" alt="Inspired By The Cross app showing daily Bible verse and devotional content" className="w-full h-full object-cover" loading="eager" width={390} height={844} />
                  </div>
                </motion.div>

                <FloatingElement className="absolute -bottom-4 -left-6 sm:-left-10 p-3 sm:p-4 rounded-[1rem] sm:rounded-[1.25rem] border border-[var(--glass-border)] bg-surface-50 shadow-xl max-w-[180px] sm:max-w-[200px] hidden md:block" duration={7} distance={10}>
                  <div className="flex items-center gap-2 mb-2">
                    <Quote size={12} className="text-[var(--accent)]" />
                    <span className="text-[10px] font-bold text-[var(--accent)] tracking-wider uppercase">Verse of the Day</span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-xs italic leading-relaxed">"I will take you as my own people, and I will be your God."</p>
                  <p className="text-[var(--text-muted)] text-[10px] mt-1.5 tracking-wide">EXODUS 6:7</p>
                </FloatingElement>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <FadeUp className="mb-14 sm:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--text-muted)]">Features</span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-display font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-[0.95]">
              Everything your faith<br />journey <span className="font-serif italic font-normal text-[var(--accent)]">needs.</span>
            </h2>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-4 sm:gap-6" staggerDelay={0.1}>
            {features.map((f, i) => (
              <StaggerItem key={i}>
                <TiltCard
                  className="group p-6 sm:p-8 md:p-10 rounded-[1.25rem] sm:rounded-[1.5rem] border border-[var(--glass-border)] bg-surface-50 hover:border-[var(--glass-border-strong)] transition-all h-full"
                  intensity={10}
                >
                  <div className={`${f.color} mb-5 group-hover:scale-110 transition-transform origin-left`} style={{ transform: 'translateZ(25px)' }}>{f.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] mb-3 tracking-tight" style={{ transform: 'translateZ(15px)' }}>{f.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base" style={{ transform: 'translateZ(8px)' }}>{f.desc}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeUp>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--accent-soft)] flex items-center justify-center mx-auto mb-8 sm:mb-10">
              <Heart size={24} className="text-[var(--accent)]" />
            </div>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] tracking-[-0.02em] leading-[1.15] mb-6 sm:mb-8">
              "Faith is not about having all the answers. It's about <span className="font-serif italic font-normal text-[var(--accent)]">trusting the journey.</span>"
            </blockquote>
            <p className="text-[var(--text-muted)] text-base sm:text-lg">Built with love for the global faith community.</p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-surface" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeUp>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-display font-bold text-[var(--text-primary)] tracking-[-0.03em] mb-4 sm:mb-6">
              Start your journey <span className="font-serif italic font-normal text-[var(--accent)]">today.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-8 sm:mb-10 max-w-lg mx-auto">
              Free on the App Store. Your spiritual companion awaits.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428', '_blank')}
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[var(--accent)] text-[var(--bg-base)] font-bold text-base sm:text-lg hover:brightness-110 transition-all"
            >
              <Download size={20} />
              Get the App
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default InspiredPage;
