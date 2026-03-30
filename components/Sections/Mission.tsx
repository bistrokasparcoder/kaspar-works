import React from 'react';
import { Zap, Feather, Globe, Smartphone, Layout, Brain } from 'lucide-react';
import { FadeUp, Stagger, StaggerItem, GlowCard, MagneticButton } from '../motion';
import TiltCard from '../ui/TiltCard';

const Mission: React.FC = () => {
  const capabilities = [
    { name: "Mobile Apps", icon: <Smartphone className="w-5 h-5" /> },
    { name: "Web Platforms", icon: <Layout className="w-5 h-5" /> },
    { name: "Faith Tech", icon: <Feather className="w-5 h-5" /> },
    { name: "AI Solutions", icon: <Brain className="w-5 h-5" /> },
    { name: "Community", icon: <Globe className="w-5 h-5" /> },
  ];

  return (
    <section id="mission" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <FadeUp className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--text-muted)]">Our Mission</span>
          </div>
          <p className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)] tracking-[-0.03em]">
            Driven by purpose, powered by <span className="font-serif italic font-normal text-[var(--accent)]">innovation.</span>
          </p>
        </FadeUp>

        <Stagger className="grid md:grid-cols-3 gap-4 mb-24" staggerDelay={0.12}>
          {[
            { title: "Innovation", desc: "Using cutting-edge AI and design to solve real problems.", icon: <Zap size={22} /> },
            { title: "Impact", desc: "Every product is designed to improve daily lives.", icon: <Feather size={22} /> },
            { title: "Connection", desc: "Building bridges between people and purpose.", icon: <UsersIcon size={22} /> },
          ].map((item, i) => (
            <StaggerItem key={i}>
              <TiltCard className="p-8 rounded-[1.5rem] border border-[var(--glass-border)] bg-surface-50 hover:border-[var(--glass-border-strong)] transition-all h-full group" intensity={12}>
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center mb-6 text-[var(--accent)] group-hover:scale-110 transition-transform" style={{ transform: 'translateZ(30px)' }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-3" style={{ transform: 'translateZ(20px)' }}>{item.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed" style={{ transform: 'translateZ(10px)' }}>{item.desc}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp>
          <div className="relative rounded-[2rem] border border-white/[0.06] bg-surface-50 p-10 md:p-14 overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-10 text-center">
                Building for the <span className="font-serif italic font-normal">Future</span>
              </h2>

              <Stagger className="flex flex-wrap justify-center gap-3" staggerDelay={0.06}>
                {capabilities.map((cap, idx) => (
                  <StaggerItem key={idx}>
                    <MagneticButton
                      className="flex items-center space-x-3 border border-white/[0.06] bg-surface-100 rounded-full pl-2 pr-6 py-2 hover:border-white/[0.12] cursor-default transition-colors"
                    >
                      <div className="w-9 h-9 rounded-full bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent)]">
                        {cap.icon}
                      </div>
                      <span className="text-sm font-medium text-[var(--text-secondary)]">{cap.name}</span>
                    </MagneticButton>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
};

const UsersIcon = ({size}: {size: number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default Mission;
