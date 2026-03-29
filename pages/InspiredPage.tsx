import React from 'react';
import { BookOpen, Users, MessageCircle, Sparkles, Heart, HandHeart, Download, ArrowRight, ExternalLink, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeUp, BlurIn, Stagger, StaggerItem, GlowCard, FloatingElement } from '../components/motion';

const ease = [0.16, 1, 0.3, 1];

const features = [
  { icon: <Sparkles size={28} />, title: "Daily Devotion", desc: "Fresh spiritual insights delivered to your heart every morning. Start each day grounded.", color: "text-amber-400", bg: "from-amber-500/10 to-orange-500/5 border-amber-500/15" },
  { icon: <BookOpen size={28} />, title: "Scripture Library", desc: "The full Bible at your fingertips with search, bookmarks, and highlight tools.", color: "text-blue-400", bg: "from-blue-500/10 to-indigo-500/5 border-blue-500/15" },
  { icon: <HandHeart size={28} />, title: "Prayer Community", desc: "Share prayer requests, uplift others, and experience the power of collective faith.", color: "text-purple-400", bg: "from-purple-500/10 to-violet-500/5 border-purple-500/15" },
  { icon: <MessageCircle size={28} />, title: "AI Faith Chat", desc: "Ask questions about scripture, theology, and faith — powered by thoughtful AI.", color: "text-emerald-400", bg: "from-emerald-500/10 to-teal-500/5 border-emerald-500/15" },
];

const InspiredPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_rgba(99,102,241,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_rgba(139,92,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

            {/* Text */}
            <div className="flex-1 max-w-2xl">
              <FadeUp>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-sm font-bold text-indigo-400 tracking-widest uppercase">Live on App Store</span>
                </div>
              </FadeUp>

              <BlurIn delay={0.2}>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tighter text-white leading-[0.9] mb-8">
                  Inspired<br />
                  By The<br />
                  <span className="text-gradient-animated">Cross</span>
                </h1>
              </BlurIn>

              <FadeUp delay={0.4}>
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-xl mb-10">
                  A digital sanctuary designed to deepen your spiritual journey. Daily devotionals, community prayer, and wisdom — all in your pocket.
                </p>
              </FadeUp>

              <FadeUp delay={0.6} className="flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => window.open('https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428', '_blank')}
                  className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-surface font-bold text-base shadow-2xl shadow-white/10 hover:shadow-white/20 transition-shadow"
                >
                  <Download size={20} />
                  Download for iOS
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.a
                  href="https://inspiredbythecross.com"
                  target="_blank"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-6 py-4 rounded-full glass text-slate-300 font-semibold text-base hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  Visit Website
                  <ExternalLink size={16} />
                </motion.a>
              </FadeUp>
            </div>

            {/* Phone Mockup */}
            <FadeUp delay={0.3} className="flex-shrink-0">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/[0.1] rounded-full blur-[100px] animate-glow-pulse" />
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease }}
                  className="relative z-10"
                >
                  <div className="w-[280px] sm:w-[320px] bg-surface-200 border-[6px] border-surface-300 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-500/15 ring-1 ring-white/[0.06]" style={{ aspectRatio: '390/844' }}>
                    <img src="/inspired-mobile-screenshot.png" alt="Inspired By The Cross app - spiritual devotional screen showing daily Bible verse" className="w-full h-full object-cover" loading="eager" width={390} height={844} />
                  </div>
                </motion.div>

                {/* Floating accent */}
                <FloatingElement className="absolute -bottom-4 -left-10 p-4 rounded-[1.25rem] glass-strong shadow-xl card-glow max-w-[200px] hidden lg:block" duration={7} distance={10}>
                  <div className="flex items-center gap-2 mb-2">
                    <Quote size={14} className="text-amber-400" />
                    <span className="text-[10px] font-bold text-amber-400/80 tracking-wider uppercase">Verse of the Day</span>
                  </div>
                  <p className="text-white/80 text-xs italic leading-relaxed">"I will take you as my own people, and I will be your God."</p>
                  <p className="text-slate-500 text-[10px] mt-1.5 tracking-wide">EXODUS 6:7</p>
                </FloatingElement>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-50 to-surface" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeUp className="mb-20">
            <p className="text-indigo-400 font-semibold tracking-widest uppercase text-sm mb-4">Features</p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[0.95]">
              Everything your<br />faith journey needs.
            </h2>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {features.map((f, i) => (
              <StaggerItem key={i}>
                <GlowCard
                  className={`group p-8 md:p-10 rounded-[1.5rem] bg-gradient-to-br ${f.bg} border hover:border-white/10 transition-all h-full`}
                  hoverY={-6}
                  hoverScale={1.01}
                >
                  <div className={`${f.color} mb-5 group-hover:scale-110 transition-transform origin-left`}>{f.icon}</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-base">{f.desc}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-50/50 to-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(99,102,241,0.04),transparent_60%)]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-10">
              <Heart size={28} className="text-indigo-400" />
            </div>
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.15] mb-8">
              "Faith is not about having all the answers. It's about <span className="text-gradient-animated">trusting the journey.</span>"
            </blockquote>
            <p className="text-slate-500 text-lg">Built with love for the global faith community.</p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface-50 to-surface" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeUp>
            <h2 className="text-4xl sm:text-6xl font-display font-bold text-white tracking-tight mb-6">
              Start your journey today.
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-lg mx-auto">
              Free on the App Store. Your spiritual companion awaits.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428', '_blank')}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 btn-sweep transition-shadow"
            >
              <Download size={22} />
              Get the App
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default InspiredPage;
