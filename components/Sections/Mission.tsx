import React from 'react';
import { Zap, Globe, Smartphone, Feather, Layout, Brain, Trophy } from 'lucide-react';
import { FadeUp, Stagger, StaggerItem, GlowCard, MagneticButton } from '../motion';

const Mission: React.FC = () => {
  const products = [
    { name: "Mobile Apps", icon: <Smartphone className="w-5 h-5"/>, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
    { name: "Web Platforms", icon: <Layout className="w-5 h-5"/>, color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
    { name: "Spiritual Tools", icon: <Feather className="w-5 h-5"/>, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { name: "AI Learning", icon: <Brain className="w-5 h-5"/>, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { name: "Sports Analytics", icon: <Trophy className="w-5 h-5"/>, color: "text-lime-400 bg-lime-500/10 border-lime-500/20" },
    { name: "Community", icon: <Globe className="w-5 h-5"/>, color: "text-pink-400 bg-pink-500/10 border-pink-500/20" },
  ];

  return (
    <section id="mission" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-50 to-surface" />
      <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/[0.04] blur-[100px] rounded-full animate-glow-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <FadeUp className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-4">Our Mission</h2>
          <p className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Driven by purpose, powered by innovation.
          </p>
        </FadeUp>

        <Stagger className="grid md:grid-cols-3 gap-6 mb-24" staggerDelay={0.12}>
          {[
            { title: "Innovation", desc: "Using cutting-edge AI and design to solve real problems.", icon: <Zap size={22}/>, gradient: "from-blue-500/10 to-indigo-500/10", border: "border-blue-500/10 hover:border-blue-500/25", glow: "group-hover:shadow-blue-500/10" },
            { title: "Impact", desc: "Every product is designed to improve daily lives.", icon: <Feather size={22}/>, gradient: "from-indigo-500/10 to-purple-500/10", border: "border-indigo-500/10 hover:border-indigo-500/25", glow: "group-hover:shadow-indigo-500/10" },
            { title: "Connection", desc: "Building bridges between people and purpose.", icon: <UsersIcon size={22}/>, gradient: "from-purple-500/10 to-pink-500/10", border: "border-purple-500/10 hover:border-purple-500/25", glow: "group-hover:shadow-purple-500/10" },
          ].map((item, i) => (
            <StaggerItem key={i}>
              <GlowCard
                className={`group p-8 rounded-[1.5rem] bg-gradient-to-br ${item.gradient} border ${item.border} hover:shadow-2xl ${item.glow} transition-shadow h-full`}
                hoverY={-8}
                hoverScale={1.02}
              >
                <div className="w-12 h-12 rounded-[0.75rem] bg-white/[0.05] border border-white/[0.06] flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp>
          <div className="relative rounded-[2rem] glass-strong p-10 md:p-14 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/[0.04] via-transparent to-purple-600/[0.04]" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/[0.05] blur-[80px] rounded-full" />

            <div className="relative z-10">
              <h2 className="text-2xl font-display font-bold text-white mb-10 text-center">Building for the Future</h2>

              <Stagger className="flex flex-wrap justify-center gap-4" staggerDelay={0.06}>
                {products.map((product, idx) => (
                  <StaggerItem key={idx}>
                    <MagneticButton
                      className={`flex items-center space-x-3 bg-white/[0.03] border rounded-full pl-2 pr-6 py-2 backdrop-blur-sm hover:bg-white/[0.06] cursor-default ${product.color.split(' ').filter(c => c.startsWith('border-')).join(' ')} transition-colors`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${product.color.split(' ').filter(c => !c.startsWith('border-')).join(' ')}`}>
                        {product.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{product.name}</span>
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