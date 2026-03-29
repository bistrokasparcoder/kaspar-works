import React from 'react';
import { Smartphone, Globe, MonitorSmartphone, Activity, Heart, FileText, BookOpen, Users, MessageCircle, Sparkles, ExternalLink, ArrowRight, Download } from 'lucide-react';

const Apps: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/[0.08] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/[0.06] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto sr">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
              <div className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </div>
              <span className="text-sm font-bold text-indigo-300 tracking-wider uppercase">Portfolio</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-extrabold tracking-tight leading-[1.05]">
              <span className="text-white">Our</span>{' '}
              <span className="text-gradient-animated">Apps</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed">
              Purpose-driven products across faith and healthcare — each engineered to deliver real impact
            </p>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
              {[
                { value: '2', label: 'Applications' },
                { value: '4', label: 'Platforms' },
                { value: '2', label: 'Industries' },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="w-px bg-white/[0.06]" />}
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inspired By The Cross */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/[0.15] via-surface to-purple-950/[0.1]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/[0.06] via-purple-500/[0.06] to-pink-500/[0.06] blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 lg:order-1 sr">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/[0.08] border border-green-500/15 backdrop-blur-sm">
                <div className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </div>
                <span className="text-xs font-bold text-green-300 tracking-wider uppercase">Live Now</span>
              </div>

              <div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05] mb-4">
                  Inspired By <br />The Cross
                </h2>
                <p className="text-2xl text-gradient font-semibold">Your Spiritual Companion</p>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                A digital sanctuary designed to deepen your spiritual journey. Experience daily devotionals,
                community prayer, and a library of wisdom—all in your pocket.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Smartphone size={18} />, label: 'iOS' },
                  { icon: <MonitorSmartphone size={18} />, label: 'Android' },
                ].map((p, i) => (
                  <div key={i} className="px-4 py-2 rounded-xl glass flex items-center gap-2">
                    <span className="text-indigo-400">{p.icon}</span>
                    <span className="text-sm font-semibold text-white">{p.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Sparkles size={24} />, title: 'Daily Devotion', desc: 'Fresh insights daily', color: 'text-amber-400' },
                  { icon: <Users size={24} />, title: 'Prayer Community', desc: 'Connect with believers', color: 'text-blue-400' },
                  { icon: <BookOpen size={24} />, title: 'Scripture Library', desc: 'Explore the Word', color: 'text-emerald-400' },
                  { icon: <MessageCircle size={24} />, title: 'Personal Journal', desc: 'Track your journey', color: 'text-purple-400' },
                ].map((f, i) => (
                  <div key={i} className="group p-5 rounded-[1.25rem] glass hover:bg-indigo-500/[0.04] hover:border-indigo-500/15 transition-all duration-300">
                    <div className={`${f.color} mb-3`}>{f.icon}</div>
                    <h4 className="text-white font-semibold mb-1">{f.title}</h4>
                    <p className="text-sm text-slate-500">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => window.open('https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428', '_blank')}
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 btn-sweep"
                >
                  <Download size={20} />
                  <span>Download Now</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative lg:order-2 sr sr-delay-3">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-[100px] rounded-full animate-glow-pulse" />
              <div className="relative z-10 max-w-[400px] mx-auto transform hover:scale-105 transition-transform duration-700">
                <div className="relative bg-surface border-[10px] border-surface-200 rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/15 ring-1 ring-indigo-500/20">
                  <div className="aspect-[9/19]">
                    <img src="/screenhot-inspired-by-the-cross1.png" alt="Inspired By The Cross App" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* dialysis.live */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-emerald-950/[0.06] to-surface" />
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-l from-emerald-500/[0.06] via-teal-500/[0.06] to-transparent blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative sr">
              <div className="relative z-10">
                <div className="glass-strong rounded-[1.25rem] shadow-2xl shadow-emerald-500/10 overflow-hidden">
                  <div className="bg-white/[0.03] px-4 py-3 flex items-center gap-2 border-b border-white/[0.04]">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                    <div className="flex-1 ml-4 bg-white/[0.03] rounded-lg px-3 py-1.5 text-sm text-slate-500 flex items-center gap-2">
                      <Globe size={14} className="text-emerald-400" />
                      <span>dialysis.live</span>
                    </div>
                  </div>
                  <div className="aspect-[16/10] bg-surface relative overflow-hidden">
                    <img src="/dialysis-web-screenshot.png" alt="dialysis.live Website" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-[200px] transform translate-x-8 translate-y-8 z-20 hidden lg:block">
                <div className="relative bg-surface border-[6px] border-surface-200 rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-500/20 ring-1 ring-emerald-500/20">
                  <div className="aspect-[9/19]">
                    <img src="/dialysis-mobile-screenshot.png" alt="dialysis.live Mobile" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/[0.1] to-teal-500/[0.1] blur-[100px] rounded-full -z-10 animate-glow-pulse" />
            </div>

            <div className="space-y-8 sr sr-delay-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/[0.08] border border-amber-500/15 backdrop-blur-sm">
                <Sparkles className="text-amber-400" size={16} />
                <span className="text-xs font-bold text-amber-300 tracking-wider uppercase">Coming Soon</span>
              </div>

              <div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05] mb-4">
                  dialysis<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">.live</span>
                </h2>
                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 font-semibold">Your Renal Companion</p>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed">
                Track treatments, vitals, nutrition, and medications in one clinical-grade platform. AI-powered insights for better health outcomes.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Globe size={18} />, label: 'Web' },
                  { icon: <Smartphone size={18} />, label: 'iOS' },
                  { icon: <MonitorSmartphone size={18} />, label: 'Android' },
                ].map((p, i) => (
                  <div key={i} className="px-4 py-2 rounded-xl glass flex items-center gap-2">
                    <span className="text-emerald-400">{p.icon}</span>
                    <span className="text-sm font-semibold text-white">{p.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: <Activity size={20} />, label: '256-bit Encryption' },
                  { icon: <Heart size={20} />, label: '24/7 Monitoring' },
                  { icon: <FileText size={20} />, label: 'HIPAA Compliant' },
                  { icon: <Sparkles size={20} />, label: 'AI Insights' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/10">
                    <span className="text-emerald-400">{f.icon}</span>
                    <span className="text-sm font-medium text-white">{f.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => window.open('https://dialysis.live/', '_blank')}
                  className="group px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 btn-sweep"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-50 to-surface" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/[0.06] via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8 sr">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white">
            Explore Our Products
          </h2>
          <p className="text-xl text-slate-500">Join thousands of users across faith and health</p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <button
              onClick={() => window.open('https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428', '_blank')}
              className="px-8 py-4 rounded-full bg-white text-surface font-bold hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-xl shadow-white/5"
            >
              <Download size={20} />
              <span>Inspired By The Cross</span>
            </button>
            <button
              onClick={() => window.open('https://dialysis.live/', '_blank')}
              className="px-8 py-4 rounded-full glass text-white font-bold hover:bg-white/[0.08] transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <span>dialysis.live</span>
              <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apps;