import React from 'react';
import { BookOpen, Users, MessageCircle, Sparkles } from 'lucide-react';
import { FadeUp, Stagger, StaggerItem, GlowCard, FloatingElement, ScaleIn } from '../motion';
import Button from '../ui/Button';

const Flagship: React.FC = () => {
  return (
    <section id="flagship" className="py-32 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1),rgba(5,5,8,1))]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/[0.06] rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/[0.06] rounded-full blur-[100px] animate-blob animation-delay-4000" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-purple-600/[0.04] rounded-full blur-[100px] animate-breathe" />
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Content */}
          <div className="flex-1 space-y-10">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                <span className="text-xs font-bold text-indigo-300 tracking-wider uppercase">Flagship App</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-5xl sm:text-7xl font-display font-bold tracking-tighter text-white leading-[1]">
                Inspired By <br />
                <span className="text-gradient-animated">The Cross</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl mt-4">
                A digital sanctuary designed to deepen your spiritual journey.
                Experience daily devotionals, community prayer, and a library of wisdom right in your pocket.
              </p>
            </FadeUp>

            <Stagger className="grid grid-cols-2 gap-3">
              {[
                { title: "Daily Devotion", icon: <Sparkles size={18} />, color: "text-amber-400 group-hover:text-amber-300" },
                { title: "Prayer Community", icon: <Users size={18} />, color: "text-blue-400 group-hover:text-blue-300" },
                { title: "Scripture Library", icon: <BookOpen size={18} />, color: "text-emerald-400 group-hover:text-emerald-300" },
                { title: "Personal Journal", icon: <MessageCircle size={18} />, color: "text-purple-400 group-hover:text-purple-300" },
              ].map((item, i) => (
                <StaggerItem key={i}>
                  <GlowCard className="glass rounded-[1.25rem] p-4 group hover:bg-white/[0.06] hover:border-white/10 cursor-default" hoverY={-2} hoverScale={1.03}>
                    <div className={`mb-3 ${item.color} transition-colors`}>{item.icon}</div>
                    <h3 className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">{item.title}</h3>
                  </GlowCard>
                </StaggerItem>
              ))}
            </Stagger>

            <FadeUp delay={0.3} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <Button
                onClick={() => window.open('https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428', '_blank')}
                className="bg-white !text-surface-50 hover:bg-slate-100 shadow-[0_0_40px_rgba(255,255,255,0.15)] border-none font-semibold"
              >
                Get the App
              </Button>
            </FadeUp>
          </div>

          {/* Visual Side */}
          <ScaleIn delay={0.2} className="flex-1 w-full max-w-[600px] lg:max-w-none relative mt-12 lg:mt-0 min-h-[600px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.12] blur-[100px] rounded-full animate-glow-pulse" />

            {/* Desktop Mockup */}
            <GlowCard className="absolute top-8 left-0 right-0 z-0 mx-auto w-full max-w-[480px] glass-strong rounded-[1.25rem] shadow-2xl shadow-indigo-500/10 overflow-hidden" hoverScale={1.02} hoverY={-2}>
              <div className="bg-white/[0.03] px-4 py-3 flex items-center gap-2 border-b border-white/[0.04]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/10" /><div className="w-3 h-3 rounded-full bg-white/10" /><div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 ml-4 bg-white/[0.03] rounded-lg px-3 py-1 text-xs text-slate-500 flex items-center gap-2">
                  <BookOpen size={12} className="text-indigo-400" /><span>inspiredbythecross.com</span>
                </div>
              </div>
              <div className="relative bg-surface h-[320px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/inspired-web-screenshot.png')] bg-cover bg-top" />
              </div>
            </GlowCard>

            {/* Phone Mockup */}
            <GlowCard className="relative z-10 ml-auto mr-8 w-[280px] shadow-2xl shadow-indigo-500/20 rounded-[2.5rem] mt-40" hoverScale={1.04} hoverY={-6}>
              <div className="relative bg-surface border-[8px] border-surface-200 rounded-[2.5rem] overflow-hidden h-[560px] ring-1 ring-indigo-500/20">
                <div className="absolute inset-0 bg-[url('/screenhot-inspired-by-the-cross1.png')] bg-cover bg-center" />
              </div>
            </GlowCard>

            {/* Floating Cards */}
            <FloatingElement className="absolute top-4 -left-8 w-40 p-4 rounded-[1rem] glass-strong z-20 shadow-2xl shadow-indigo-500/10 card-glow hidden xl:block" duration={7} distance={12}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400"><Users size={14}/></div>
                <div className="h-2 w-16 bg-white/[0.06] rounded-full" />
              </div>
              <div className="h-2 w-24 bg-white/[0.03] rounded-full" />
            </FloatingElement>

            <FloatingElement className="absolute bottom-20 -right-4 w-48 p-4 rounded-[1.25rem] glass-strong z-20 shadow-xl card-glow hidden xl:block" duration={8} distance={14} delay={2}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400"><MessageCircle size={14} /></div>
                <div><p className="text-white text-xs font-medium">New Prayer Request</p><p className="text-slate-600 text-[10px]">Just now</p></div>
              </div>
              <div className="h-2 w-full bg-white/[0.04] rounded-full mt-2" />
            </FloatingElement>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default Flagship;