import React from 'react';
import { Activity, Heart, Shield, Sparkles, Droplet, TrendingUp, Globe, Smartphone, MonitorSmartphone, ExternalLink, ArrowRight, Lock, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, BlurIn, Stagger, StaggerItem, FloatingElement } from '../components/motion';
import TiltCard from '../components/ui/TiltCard';

const ease = [0.16, 1, 0.3, 1];

const features = [
  { icon: <Activity size={28} />, title: "Treatment Tracking", desc: "Log every dialysis session with detailed vitals, weight, and fluid data. See trends over time.", color: "text-emerald-400", bg: "from-emerald-500/10 to-teal-500/5 border-emerald-500/15" },
  { icon: <Brain size={28} />, title: "AI Health Insights", desc: "Intelligent analysis of your treatment patterns with personalized recommendations.", color: "text-teal-400", bg: "from-teal-500/10 to-cyan-500/5 border-teal-500/15" },
  { icon: <Droplet size={28} />, title: "Nutrition & Fluids", desc: "Track daily fluid intake, phosphorus, potassium, and sodium with smart alerts.", color: "text-cyan-400", bg: "from-cyan-500/10 to-blue-500/5 border-cyan-500/15" },
  { icon: <Shield size={28} />, title: "256-bit Encryption", desc: "Enterprise-grade security. Your health data is encrypted at rest and in transit.", color: "text-blue-400", bg: "from-blue-500/10 to-indigo-500/5 border-blue-500/15" },
];

const platforms = [
  { icon: <Globe size={18} />, label: "Web", available: true },
  { icon: <Smartphone size={18} />, label: "iOS", available: true },
  { icon: <MonitorSmartphone size={18} />, label: "Android", available: true },
];

const DialysisPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(16,185,129,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(20,184,166,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

            {/* Text */}
            <div className="flex-1 max-w-2xl">
              <FadeUp>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-bold text-emerald-400 tracking-widest uppercase">Coming Soon</span>
                </div>
              </FadeUp>

              <BlurIn delay={0.2}>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
                  <span className="text-white">dialysis</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">.live</span>
                </h1>
              </BlurIn>

              <FadeUp delay={0.4}>
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-xl mb-6">
                  Your renal companion. Track treatments, vitals, nutrition, and medications in one clinical-grade platform.
                </p>
              </FadeUp>

              <FadeUp delay={0.5} className="flex flex-wrap gap-3 mb-10">
                {platforms.map((p, i) => (
                  <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/15 backdrop-blur-sm">
                    <span className="text-emerald-400">{p.icon}</span>
                    <span className="text-sm font-semibold text-emerald-300 tracking-wide">{p.label}</span>
                  </div>
                ))}
              </FadeUp>

              <FadeUp delay={0.6} className="flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => window.open('https://dialysis.live/', '_blank')}
                  className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-base shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-shadow"
                >
                  Visit Website
                  <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              </FadeUp>
            </div>

            {/* Desktop + Mobile Mockup */}
            <FadeUp delay={0.3} className="flex-shrink-0 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-emerald-500/[0.08] rounded-full blur-[120px] animate-glow-pulse" />

              <div className="relative z-10">
                {/* Desktop */}
                <div className="w-[340px] sm:w-[420px] bg-surface-200 border-[3px] border-surface-300 rounded-[1rem] overflow-hidden shadow-2xl shadow-emerald-500/10">
                  <div className="bg-surface-300 px-3 py-2 flex items-center gap-2 border-b border-white/[0.04]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                    <div className="flex-1 ml-3 bg-white/[0.03] rounded-md px-2 py-0.5 text-[10px] text-slate-500 flex items-center gap-1.5">
                      <Globe size={10} className="text-emerald-400" /><span>dialysis.live</span>
                    </div>
                  </div>
                  <img src="/dialysis-web-screenshot.png" alt="dialysis.live web dashboard showing treatment tracking and health analytics" className="w-full h-auto" loading="eager" width={840} height={525} />
                </div>

                {/* Mobile overlay */}
                <div className="absolute -bottom-6 -right-6 w-[140px] sm:w-[160px] z-20">
                  <div className="bg-surface-200 border-[4px] border-surface-300 rounded-[1.5rem] overflow-hidden shadow-2xl shadow-emerald-500/20 ring-1 ring-emerald-500/10" style={{ aspectRatio: '9/19' }}>
                    <img src="/dialysis-mobile-screenshot.png" alt="dialysis.live mobile app" className="w-full h-full object-cover" loading="lazy" width={390} height={844} />
                  </div>
                </div>
              </div>

              {/* Floating stat */}
              <FloatingElement className="absolute top-4 -left-6 p-4 rounded-[1.25rem] glass-strong shadow-xl card-glow hidden lg:block" duration={7} distance={10}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <TrendingUp className="text-emerald-400" size={18} />
                  </div>
                  <div>
                    <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-wide">Stability</p>
                    <p className="text-white text-xl font-display font-bold">87<span className="text-sm text-emerald-300">%</span></p>
                  </div>
                </div>
              </FloatingElement>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-50 to-surface" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeUp className="mb-20">
            <p className="text-emerald-400 font-semibold tracking-widest uppercase text-sm mb-4">Features</p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[0.95]">
              Clinical-grade.<br />Patient-first.
            </h2>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {features.map((f, i) => (
              <StaggerItem key={i}>
                <TiltCard
                  className={`group p-6 sm:p-8 md:p-10 rounded-[1.25rem] sm:rounded-[1.5rem] border border-[var(--glass-border)] bg-surface-50 hover:border-[var(--glass-border-strong)] transition-all h-full`}
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

      {/* Mission Statement */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-50/50 to-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.04),transparent_60%)]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-10">
              <Heart size={28} className="text-emerald-400" />
            </div>
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.15] mb-8">
              "Every patient deserves tools that <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">make health feel manageable.</span>"
            </blockquote>
            <p className="text-slate-500 text-lg">Built for the 3.7 million people worldwide on dialysis.</p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface-50 to-surface" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight mb-6">
              Better health starts here.
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-lg mx-auto">
              Available on Web, iOS, and Android. Your renal health companion.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://dialysis.live/', '_blank')}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 btn-sweep transition-shadow"
            >
              Visit dialysis.live
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default DialysisPage;
