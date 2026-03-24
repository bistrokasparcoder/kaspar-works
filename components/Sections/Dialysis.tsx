import React from 'react';
import { Activity, Heart, Droplet, TrendingUp, Smartphone, Globe, MonitorSmartphone } from 'lucide-react';
import { FadeUp, Stagger, StaggerItem, GlowCard, FloatingElement, ScaleIn } from '../motion';
import Button from '../ui/Button';

const Dialysis: React.FC = () => {
  return (
    <section id="dialysis" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-50/80 to-surface" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/[0.06] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-900/[0.06] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[100px] animate-breathe" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">

          {/* Content */}
          <div className="flex-1 space-y-8">
            <Stagger className="flex flex-wrap gap-3">
              {[
                { icon: <Globe size={16} />, label: "Web" },
                { icon: <Smartphone size={16} />, label: "iOS" },
                { icon: <MonitorSmartphone size={16} />, label: "Android" },
              ].map((p, i) => (
                <StaggerItem key={i}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/15 backdrop-blur-sm">
                    <span className="text-emerald-400">{p.icon}</span>
                    <span className="text-xs font-semibold text-emerald-300 tracking-wide">{p.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeUp delay={0.1}>
              <div className="inline-block mb-4">
                <div className="px-4 py-2 rounded-full bg-emerald-500/[0.06] border border-emerald-500/15">
                  <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">Coming Soon</span>
                </div>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[1.1]">
                <span className="text-white">dialysis</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">.live</span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-xl mt-4">Your Renal Companion</p>
              <p className="text-base text-slate-500 leading-relaxed max-w-xl mt-2">
                Track treatments, vitals, nutrition, and medications in one clinical-grade platform. AI-powered insights for better outcomes.
              </p>
            </FadeUp>

            <Stagger className="flex flex-wrap gap-3">
              {[
                { title: "256-bit Encryption", icon: <Activity size={16} /> },
                { title: "24/7 Monitoring", icon: <Heart size={16} /> },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <div className="group px-5 py-3 rounded-full glass hover:bg-emerald-500/[0.06] hover:border-emerald-500/20 transition-all duration-300 cursor-default">
                    <div className="flex items-center gap-2 text-slate-400 group-hover:text-emerald-300 transition-colors">
                      {item.icon}<span className="text-sm font-medium">{item.title}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeUp delay={0.3} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
              <Button
                onClick={() => window.open('https://dialysis.live/', '_blank')}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 !text-white hover:from-emerald-400 hover:to-teal-400 shadow-[0_0_40px_rgba(16,185,129,0.2)] border-none font-semibold"
              >
                Visit Website
              </Button>
              <div className="text-sm text-slate-500">Available on Web, iOS & Android</div>
            </FadeUp>
          </div>

          {/* Visual */}
          <ScaleIn delay={0.2} className="flex-1 w-full max-w-[600px] lg:max-w-none relative mt-12 lg:mt-0 min-h-[600px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/[0.1] via-teal-500/[0.1] to-cyan-500/[0.1] blur-[120px] rounded-full animate-glow-pulse" />

            <GlowCard className="absolute top-8 left-0 right-0 z-0 mx-auto w-full max-w-[480px] glass-strong rounded-[1.25rem] shadow-2xl shadow-emerald-500/10 overflow-hidden" hoverScale={1.02} hoverY={-2}>
              <div className="bg-white/[0.03] px-4 py-3 flex items-center gap-2 border-b border-white/[0.04]">
                <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-white/10" /><div className="w-3 h-3 rounded-full bg-white/10" /><div className="w-3 h-3 rounded-full bg-white/10" /></div>
                <div className="flex-1 ml-4 bg-white/[0.03] rounded-lg px-3 py-1 text-xs text-slate-500 flex items-center gap-2">
                  <Globe size={12} className="text-emerald-400" /><span>dialysis.live</span>
                </div>
              </div>
              <div className="relative bg-surface h-[320px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/dialysis-web-screenshot.png')] bg-cover bg-top" />
              </div>
            </GlowCard>

            <GlowCard className="relative z-10 ml-auto mr-8 w-[280px] shadow-2xl shadow-emerald-500/20 rounded-[2.5rem] mt-40" hoverScale={1.04} hoverY={-6}>
              <div className="relative bg-surface border-[8px] border-surface-200 rounded-[2.5rem] overflow-hidden h-[560px] ring-1 ring-emerald-500/20">
                <div className="absolute inset-0 bg-[url('/dialysis-mobile-screenshot.png')] bg-cover bg-center" />
              </div>
            </GlowCard>

            {/* Stability Score */}
            <FloatingElement className="absolute top-4 -right-4 w-44 p-4 rounded-[1.25rem] bg-gradient-to-br from-emerald-900/40 to-teal-900/40 glass-strong border-emerald-500/15 shadow-2xl shadow-emerald-500/10 hidden xl:block z-20 card-glow" duration={7} distance={12}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-1">Stability Score</p>
                  <p className="text-white text-3xl font-display font-bold">87<span className="text-lg text-emerald-300">%</span></p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <TrendingUp className="text-emerald-400" size={20} />
                </div>
              </div>
              <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                <div className="h-full w-[87%] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
              </div>
            </FloatingElement>

            {/* Fluid Today */}
            <FloatingElement className="absolute bottom-20 -left-8 w-48 p-4 rounded-[1.25rem] bg-gradient-to-br from-teal-900/40 to-cyan-900/40 glass-strong border-teal-500/15 shadow-2xl shadow-teal-500/10 hidden xl:block z-20 card-glow" duration={8} distance={14} delay={2}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <Droplet className="text-teal-400" size={24} />
                </div>
                <div>
                  <p className="text-teal-400 text-xs font-semibold uppercase tracking-wide">Fluid Today</p>
                  <p className="text-white text-2xl font-display font-bold">850<span className="text-sm text-teal-300 ml-1">ml</span></p>
                </div>
              </div>
            </FloatingElement>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default Dialysis;