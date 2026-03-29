import React from 'react';
import { BookOpen, Users, MessageCircle, Sparkles, Cross, Heart, HandHeart } from 'lucide-react';
import { FadeUp, Stagger, StaggerItem, GlowCard, FloatingElement, ScaleIn, BlurIn } from '../motion';
import Button from '../ui/Button';

const Flagship: React.FC = () => {
  return (
    <section id="flagship" className="py-32 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1),rgba(5,5,8,1))]" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/[0.06] rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-600/[0.04] rounded-full blur-[100px] animate-blob animation-delay-4000" />
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
                { title: "Prayer Community", icon: <HandHeart size={18} />, color: "text-blue-400 group-hover:text-blue-300" },
                { title: "Scripture Library", icon: <BookOpen size={18} />, color: "text-emerald-400 group-hover:text-emerald-300" },
                { title: "AI Chat", icon: <MessageCircle size={18} />, color: "text-purple-400 group-hover:text-purple-300" },
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

          {/* Visual Side — Phone Mockup with Scripture Card */}
          <ScaleIn delay={0.2} className="flex-1 w-full max-w-[600px] lg:max-w-none relative mt-12 lg:mt-0 flex items-center justify-center min-h-[700px]">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.10] blur-[120px] rounded-full animate-glow-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[300px] h-[300px] bg-amber-500/[0.06] blur-[80px] rounded-full animate-breathe" />

            {/* Phone Mockup — centered hero */}
            <GlowCard className="relative z-10 w-[300px] shadow-2xl shadow-indigo-500/20 rounded-[2.5rem]" hoverScale={1.03} hoverY={-8}>
              <div className="relative bg-[#1a1a2e] border-[6px] border-slate-800 rounded-[2.5rem] overflow-hidden ring-1 ring-white/[0.08]" style={{ aspectRatio: '390/844' }}>
                <div className="absolute inset-0 bg-[url('/inspired-mobile-screenshot.png')] bg-cover bg-center" />
                {/* Top notch overlay */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-slate-800 rounded-b-[1rem]" />
              </div>
            </GlowCard>

            {/* Floating Scripture Card */}
            <FloatingElement className="absolute bottom-12 -left-4 xl:-left-12 max-w-[240px] p-5 rounded-[1.25rem] glass-strong z-20 shadow-2xl shadow-indigo-500/10 card-glow" duration={7} distance={10}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <BookOpen size={13} />
                </div>
                <span className="text-[10px] font-bold text-amber-400/80 tracking-wider uppercase">Bread of Life</span>
              </div>
              <p className="text-white/80 text-xs italic leading-relaxed">
                "I will take you as my own people, and I will be your God."
              </p>
              <p className="text-slate-500 text-[10px] mt-2 tracking-wide">EXODUS 6:7</p>
            </FloatingElement>

            {/* Floating Feature Card */}
            <FloatingElement className="absolute top-8 -right-2 xl:-right-8 max-w-[200px] p-4 rounded-[1.25rem] glass-strong z-20 shadow-xl card-glow" duration={8} distance={14} delay={2}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Heart size={14} />
                </div>
                <div>
                  <p className="text-white text-xs font-medium">Spiritual Focus</p>
                  <p className="text-slate-500 text-[10px]">Today's Devotional</p>
                </div>
              </div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-1.5 flex-1 rounded-full bg-indigo-500/20" style={{ opacity: 1 - i * 0.15 }}>
                    <div className="h-full rounded-full bg-indigo-400/60" style={{ width: `${100 - i * 20}%` }} />
                  </div>
                ))}
              </div>
            </FloatingElement>

            {/* Floating Prayer Card */}
            <FloatingElement className="absolute top-1/2 -left-6 xl:-left-14 max-w-[180px] p-3 rounded-[1rem] glass-strong z-20 shadow-xl card-glow hidden xl:block" duration={9} distance={8} delay={4}>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <HandHeart size={12} />
                </div>
                <p className="text-white text-[11px] font-medium">Prayer Community</p>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="flex -space-x-1.5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border border-slate-800" style={{ opacity: 1 - i * 0.2 }} />
                  ))}
                </div>
                <span className="text-slate-500 text-[10px]">Active now</span>
              </div>
            </FloatingElement>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

export default Flagship;
