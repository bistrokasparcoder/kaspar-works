import React from 'react';
import { Activity, Heart, FileText, Droplet, TrendingUp, Smartphone, Globe, MonitorSmartphone } from 'lucide-react';
import Button from '../ui/Button';

const Dialysis: React.FC = () => {
  return (
    <section id="dialysis" className="py-32 relative overflow-hidden bg-gradient-to-b from-emerald-950 via-teal-950 to-slate-950">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-900/40 via-transparent to-transparent"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">

          {/* Content Side */}
          <div className="flex-1 space-y-8">
            {/* Platform Badges */}
            <div className="flex flex-wrap gap-3">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm">
                  <Globe className="text-emerald-400" size={16} />
                  <span className="text-xs font-semibold text-emerald-300 tracking-wide">Web</span>
               </div>
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm">
                  <Smartphone className="text-emerald-400" size={16} />
                  <span className="text-xs font-semibold text-emerald-300 tracking-wide">iOS</span>
               </div>
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm">
                  <MonitorSmartphone className="text-emerald-400" size={16} />
                  <span className="text-xs font-semibold text-emerald-300 tracking-wide">Android</span>
               </div>
            </div>

            {/* Typography */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                  <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">Coming Soon</span>
                </div>
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-white">dialysis</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">.live</span>
              </h2>

              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Your Renal Companion
              </p>

              <p className="text-base text-slate-400 leading-relaxed max-w-xl">
                Track treatments, vitals, nutrition, and medications in one clinical-grade platform.
                AI-powered insights for better outcomes.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
               {[
                 { title: "256-bit Encryption", icon: <Activity size={16} /> },
                 { title: "24/7 Monitoring", icon: <Heart size={16} /> },
                 { title: "100% HIPAA Compliant", icon: <FileText size={16} /> },
               ].map((item, i) => (
                 <div key={i} className="group px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 cursor-default backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-slate-300 group-hover:text-emerald-300 transition-colors">
                      {item.icon}
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                 </div>
               ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
              <Button
                onClick={() => window.open('https://dialysis.live/', '_blank')}
                className="pl-8 pr-8 bg-gradient-to-r from-emerald-500 to-teal-500 !text-white hover:from-emerald-600 hover:to-teal-600 shadow-[0_0_30px_rgba(16,185,129,0.4)] border-none font-semibold"
              >
                Visit Website
              </Button>
              <div className="text-sm text-slate-400">
                Available on Web, iOS & Android
              </div>
            </div>
          </div>

          {/* Visual Side - Multi-device Mockup */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative mt-12 lg:mt-0 min-h-[600px]">
             {/* Glowing Backdrop */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 blur-[120px] rounded-full animate-pulse"></div>

             {/* Desktop/Web Mockup - Background */}
             <div className="absolute top-8 left-0 right-0 z-0 mx-auto w-full max-w-[480px] transform hover:scale-[1.02] transition-transform duration-500">
                {/* Browser Window */}
                <div className="bg-slate-900 rounded-2xl shadow-2xl shadow-emerald-500/20 border border-slate-700 overflow-hidden ring-2 ring-emerald-500/10">
                   {/* Browser Header */}
                   <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                      <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                         <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="flex-1 ml-4 bg-slate-700/50 rounded px-3 py-1 text-xs text-slate-400 flex items-center gap-2">
                         <Globe size={12} className="text-emerald-400" />
                         <span>dialysis.live</span>
                      </div>
                   </div>
                   {/* Browser Content */}
                   <div className="relative bg-slate-950 h-[320px] overflow-hidden">
                      <div className="absolute inset-0 bg-[url('/dialysis-web-screenshot.png')] bg-cover bg-top"></div>
                   </div>
                </div>
             </div>

             {/* Phone Mockup - Foreground */}
             <div className="relative z-10 ml-auto mr-8 w-[280px] shadow-2xl shadow-emerald-500/40 rounded-[2.5rem] transform hover:scale-105 transition-transform duration-500 mt-40">
                {/* Frame */}
                <div className="relative bg-slate-900 border-[8px] border-slate-800 rounded-[2.5rem] overflow-hidden h-[560px] ring-2 ring-emerald-500/30">
                    {/* Screen */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900">
                        {/* Screenshot */}
                        <div className="absolute inset-0 bg-[url('/dialysis-mobile-screenshot.png')] bg-cover bg-center"></div>
                    </div>
                </div>
             </div>

             {/* Floating Stats Card 1 */}
             <div className="absolute top-4 -right-4 w-44 p-4 rounded-2xl bg-gradient-to-br from-emerald-900/90 to-teal-900/90 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 animate-float hidden xl:block z-20">
                <div className="flex items-start justify-between mb-3">
                   <div>
                      <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wide mb-1">Stability Score</p>
                      <p className="text-white text-3xl font-bold">87<span className="text-lg text-emerald-300">%</span></p>
                   </div>
                   <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                     <TrendingUp className="text-emerald-400" size={20} />
                   </div>
                </div>
                <div className="h-1.5 w-full bg-emerald-950 rounded-full overflow-hidden">
                  <div className="h-full w-[87%] bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
                </div>
             </div>

             {/* Floating Stats Card 2 */}
             <div className="absolute bottom-20 -left-8 w-48 p-4 rounded-2xl bg-gradient-to-br from-teal-900/90 to-cyan-900/90 backdrop-blur-xl border border-teal-500/30 shadow-2xl shadow-teal-500/20 animate-float-delayed hidden xl:block z-20">
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                     <Droplet className="text-teal-400" size={24} />
                   </div>
                   <div>
                      <p className="text-teal-400 text-xs font-semibold uppercase tracking-wide">Fluid Today</p>
                      <p className="text-white text-2xl font-bold">850<span className="text-sm text-teal-300 ml-1">ml</span></p>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Dialysis;
