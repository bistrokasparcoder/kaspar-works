import React from 'react';
import { Lightbulb, Heart, Target } from 'lucide-react';
import { FadeUp, Stagger, StaggerItem, GlowCard } from '../motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-50 to-surface" />
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/[0.03] blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(200px,auto)]" staggerDelay={0.1}>

          {/* Header Card */}
          <StaggerItem className="lg:col-span-2">
            <div className="glass rounded-[1.5rem] p-10 h-full card-glow">
              <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">About Us</h2>
              <p className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-tight">
                Blending Technology, <br/>Creativity & Purpose.
              </p>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                We are a multidisciplinary product studio that designs and engineers platforms across faith, healthcare, and sports — each built to simplify complexity and deliver real value.
              </p>
            </div>
          </StaggerItem>

          {/* Vision Card */}
          <StaggerItem>
            <GlowCard className="bg-gradient-to-br from-indigo-600/10 to-purple-600/10 border border-indigo-500/10 rounded-[1.5rem] p-8 h-full flex flex-col justify-between group hover:border-indigo-500/20 transition-colors">
              <div className="w-12 h-12 rounded-[0.75rem] bg-white/[0.05] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all">
                <Lightbulb className="text-amber-400" size={22} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Our Vision</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  To shape the future of digital experiences by creating platforms that inspire growth, improve outcomes, and foster connection across industries.
                </p>
              </div>
            </GlowCard>
          </StaggerItem>

          {/* Approach Card */}
          <StaggerItem>
            <GlowCard className="glass rounded-[1.5rem] p-8 h-full flex flex-col justify-between group transition-colors">
              <div className="w-12 h-12 rounded-[0.75rem] bg-white/[0.05] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                <Target className="text-blue-400" size={22} />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-3">Our Approach</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Clean design, powerful technology, and meaningful storytelling crafted to feel personal and purposeful.
                </p>
              </div>
            </GlowCard>
          </StaggerItem>

          {/* Heart for Impact */}
          <StaggerItem className="lg:col-span-2">
            <GlowCard className="bg-gradient-to-r from-purple-600/[0.06] to-pink-600/[0.06] border border-purple-500/10 rounded-[1.5rem] p-10 h-full flex flex-col md:flex-row items-center md:items-start gap-8 group hover:border-purple-500/20 transition-colors">
              <div className="p-4 rounded-[1.25rem] bg-white/[0.04] border border-white/[0.06] shrink-0 group-hover:bg-pink-500/10 group-hover:border-pink-500/20 transition-all">
                <Heart className="text-pink-400" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">Heart for Impact</h3>
                <p className="text-slate-400 leading-relaxed max-w-lg">
                  At the heart of our work is a belief: Digital tools should help people live better, think deeper, and connect stronger. Every product we build — from spiritual companions to clinical platforms to sports analytics — is crafted with purpose.
                </p>
              </div>
            </GlowCard>
          </StaggerItem>

        </Stagger>
      </div>
    </section>
  );
};

export default About;