import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeUp, FloatingElement, TextReveal, BlurIn, MagneticButton } from '../motion';
import NaturalForm from '../Contact/NaturalForm';

interface HeroProps {
  onOpenContact?: () => void;
}

const ease = [0.16, 1, 0.3, 1];

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  const blobY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* --- Background Layers --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-50 to-surface" />

        {/* Mouse spotlight */}
        <div
          className="absolute inset-0 transition-opacity duration-700 ease-out opacity-60"
          style={{ background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.07), transparent 50%)` }}
        />

        {/* Animated blobs with parallax */}
        <motion.div style={{ y: blobY }} className="absolute inset-0">
          <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/[0.07] rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-[10%] right-[-15%] w-[45vw] h-[45vw] bg-indigo-600/[0.08] rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[15%] w-[50vw] h-[50vw] bg-purple-600/[0.06] rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </motion.div>

        {/* Grid with parallax */}
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
        />

        <div className="absolute inset-0 bg-noise opacity-[0.3] mix-blend-overlay" />

        {/* Particles */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute rounded-full animate-rise bg-white/[0.06]"
            style={{
              width: `${Math.random() * 4 + 1}px`, height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`, bottom: '-40px',
              animationDelay: `${Math.random() * 8}s`, animationDuration: `${Math.random() * 15 + 18}s`
            }}
          />
        ))}

        {/* Central light ray */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[40vh] bg-gradient-to-b from-indigo-500/20 via-indigo-500/5 to-transparent" />
      </div>

      {/* --- Main Content with parallax --- */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Badge */}
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center space-x-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 backdrop-blur-sm mb-8 hover:border-indigo-500/20 transition-colors cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400">Kaspar Works Inc.</span>
          </div>
        </FadeUp>

        {/* Heading with word-by-word reveal */}
        <BlurIn delay={0.3} className="max-w-5xl mx-auto mb-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.05] sm:leading-[0.95]">
            <TextReveal text="We build software that" wordClassName="text-white" delay={0.2} staggerDelay={0.1} />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease }}
              className="inline-block ml-[0.25em]"
            >
              <span className="relative">
                <span className="text-gradient-animated">matters</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full origin-left"
                />
              </span>
            </motion.span>
          </h1>
        </BlurIn>

        {/* Subtitle */}
        <FadeUp delay={0.6} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 space-y-1">
          <p>
            Creating meaningful platforms for{' '}
            <span className="font-medium text-slate-200">health, faith, and sports</span> — designed to make a real difference.
          </p>
          <p className="font-medium text-slate-300">Simple tools. Real impact.</p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.8} className="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <MagneticButton
            onClick={onOpenContact}
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 btn-sweep flex items-center gap-2 transition-shadow"
          >
            Start a Project
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </MagneticButton>
          <MagneticButton
            onClick={() => document.getElementById('flagship')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 font-semibold text-sm hover:bg-white/[0.08] hover:border-white/15 hover:text-white backdrop-blur-sm flex items-center gap-2 transition-colors"
          >
            Explore Apps
            <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </MagneticButton>
        </FadeUp>

        {/* Floating App Previews */}
        <FadeUp delay={1.0} className="relative w-full max-w-5xl mx-auto h-[320px] sm:h-[380px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[200px] bg-gradient-to-r from-blue-500/10 via-indigo-500/15 to-purple-500/10 blur-[80px] rounded-full" />

          {/* Center — Inspired By The Cross */}
          <FloatingElement className="absolute left-1/2 -translate-x-1/2 top-0 w-[280px] sm:w-[320px] z-20" duration={7} distance={12}>
            <div className="glass-strong rounded-[1.5rem] p-5 shadow-2xl shadow-indigo-500/10 card-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center text-lg">✝️</div>
                <div>
                  <p className="text-white text-sm font-semibold">Inspired By The Cross</p>
                  <p className="text-slate-500 text-xs">Spiritual Companion</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/[0.05] rounded-full w-full" />
                <div className="h-2 bg-white/[0.05] rounded-full w-3/4" />
                <div className="mt-3 flex gap-2">
                  <div className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold">Devotion</div>
                  <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-semibold">Prayer</div>
                </div>
              </div>
            </div>
          </FloatingElement>

          {/* Left — dialysis.live */}
          <FloatingElement className="absolute left-0 sm:left-[5%] top-12 w-[220px] sm:w-[260px] z-10 hidden sm:block" duration={8} distance={18} delay={1}>
            <div className="glass rounded-[1.25rem] p-4 shadow-xl shadow-emerald-500/5 card-glow">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm">💊</div>
                <div><p className="text-white text-xs font-semibold">dialysis.live</p><p className="text-slate-500 text-[10px]">Health Platform</p></div>
              </div>
              <div className="flex items-center justify-between bg-white/[0.03] rounded-lg p-2">
                <span className="text-emerald-400 text-[10px] font-semibold">Stability Score</span>
                <span className="text-white text-sm font-bold">87%</span>
              </div>
            </div>
          </FloatingElement>

          {/* Right — CricketBolt */}
          <FloatingElement className="absolute right-0 sm:right-[5%] top-16 w-[220px] sm:w-[260px] z-10 hidden sm:block" duration={7} distance={16} delay={2}>
            <div className="glass rounded-[1.25rem] p-4 shadow-xl shadow-lime-500/5 card-glow">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-lime-500/10 border border-lime-500/20 flex items-center justify-center text-sm">🏏</div>
                <div><p className="text-white text-xs font-semibold">CricketBolt</p><p className="text-slate-500 text-[10px]">Sports Analytics</p></div>
              </div>
              <div className="flex items-center justify-between bg-white/[0.03] rounded-lg p-2">
                <span className="text-lime-400 text-[10px] font-semibold">Win Probability</span>
                <span className="text-white text-sm font-bold">78%</span>
              </div>
            </div>
          </FloatingElement>
        </FadeUp>

        {/* Form */}
        <FadeUp delay={1.2} className="mt-8 w-full max-w-4xl flex flex-col items-center">
          <div className="w-full glass-strong rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-indigo-500/5 card-glow">
            <NaturalForm />
          </div>
        </FadeUp>
      </motion.div>
    </section>
  );
};

export default Hero;