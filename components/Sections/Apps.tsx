import React from 'react';
import { Smartphone, Globe, MonitorSmartphone, Activity, Heart, FileText, BookOpen, Users, MessageCircle, Sparkles, ExternalLink, ArrowRight, Download } from 'lucide-react';

const Apps: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </div>
              <span className="text-sm font-bold text-indigo-300 tracking-wider uppercase">Portfolio</span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
              <span className="text-white">Our</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-shimmer-slow">
                Apps
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-400 leading-relaxed">
              Building innovative applications that transform lives through the power of technology
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">2</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide">Applications</div>
              </div>
              <div className="w-px bg-white/10"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">3</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide">Platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspired By The Cross - Full Width Feature */}
      <section className="relative overflow-hidden py-32 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
        {/* Glowing Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <div className="space-y-8 lg:order-1">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm">
                <div className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-xs font-bold text-green-300 tracking-wider uppercase">Live Now</span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-4">
                  Inspired By <br />The Cross
                </h2>
                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 font-semibold">
                  Your Spiritual Companion
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                A digital sanctuary designed to deepen your spiritual journey. Experience daily devotionals,
                community prayer, and a library of wisdom—all in your pocket.
              </p>

              {/* Platforms */}
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
                  <Smartphone className="text-indigo-400" size={18} />
                  <span className="text-sm font-semibold text-white">iOS</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
                  <MonitorSmartphone className="text-indigo-400" size={18} />
                  <span className="text-sm font-semibold text-white">Android</span>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
                  <Sparkles className="text-amber-400 mb-3" size={24} />
                  <h4 className="text-white font-semibold mb-1">Daily Devotion</h4>
                  <p className="text-sm text-slate-400">Fresh insights daily</p>
                </div>
                <div className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
                  <Users className="text-blue-400 mb-3" size={24} />
                  <h4 className="text-white font-semibold mb-1">Prayer Community</h4>
                  <p className="text-sm text-slate-400">Connect with believers</p>
                </div>
                <div className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
                  <BookOpen className="text-emerald-400 mb-3" size={24} />
                  <h4 className="text-white font-semibold mb-1">Scripture Library</h4>
                  <p className="text-sm text-slate-400">Explore the Word</p>
                </div>
                <div className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
                  <MessageCircle className="text-purple-400 mb-3" size={24} />
                  <h4 className="text-white font-semibold mb-1">Personal Journal</h4>
                  <p className="text-sm text-slate-400">Track your journey</p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button
                  onClick={() => window.open('https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428', '_blank')}
                  className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <Download size={20} />
                  <span>Download Now</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Mockup */}
            <div className="relative lg:order-2">
              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-indigo-500/40 to-purple-500/40 blur-[100px] rounded-full"></div>

              {/* Phone */}
              <div className="relative z-10 max-w-[400px] mx-auto transform hover:scale-105 transition-transform duration-500">
                <div className="relative bg-slate-950 border-[10px] border-slate-800 rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/30">
                  <div className="aspect-[9/19]">
                    <img
                      src="/screenhot-inspired-by-the-cross1.png"
                      alt="Inspired By The Cross App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* dialysis.live - Alternate Layout */}
      <section className="relative overflow-hidden py-32 bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950">
        {/* Glowing Orb */}
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-l from-emerald-500/20 via-teal-500/20 to-transparent blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Mockup - Left Side */}
            <div className="relative">
              {/* Desktop Browser */}
              <div className="relative z-10">
                <div className="bg-slate-900 rounded-2xl shadow-2xl shadow-emerald-500/20 border border-slate-700 overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 ml-4 bg-slate-700/50 rounded px-3 py-1.5 text-sm text-slate-400 flex items-center gap-2">
                      <Globe size={14} className="text-emerald-400" />
                      <span>dialysis.live</span>
                    </div>
                  </div>
                  {/* Browser Content */}
                  <div className="aspect-[16/10] bg-slate-950 relative overflow-hidden">
                    <img
                      src="/dialysis-web-screenshot.png"
                      alt="dialysis.live Website"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Overlay */}
              <div className="absolute bottom-0 right-0 w-[200px] transform translate-x-8 translate-y-8 z-20 hidden lg:block">
                <div className="relative bg-slate-950 border-[6px] border-slate-800 rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-500/40">
                  <div className="aspect-[9/19]">
                    <img
                      src="/dialysis-mobile-screenshot.png"
                      alt="dialysis.live Mobile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/30 to-teal-500/30 blur-[100px] rounded-full -z-10"></div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-sm">
                <Sparkles className="text-amber-400" size={16} />
                <span className="text-xs font-bold text-amber-300 tracking-wider uppercase">Coming Soon</span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-4">
                  dialysis<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">.live</span>
                </h2>
                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300 font-semibold">
                  Your Renal Companion
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-300 leading-relaxed">
                Track treatments, vitals, nutrition, and medications in one clinical-grade platform.
                AI-powered insights for better health outcomes.
              </p>

              {/* Platforms */}
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
                  <Globe className="text-emerald-400" size={18} />
                  <span className="text-sm font-semibold text-white">Web</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
                  <Smartphone className="text-emerald-400" size={18} />
                  <span className="text-sm font-semibold text-white">iOS</span>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-2">
                  <MonitorSmartphone className="text-emerald-400" size={18} />
                  <span className="text-sm font-semibold text-white">Android</span>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Enterprise-Grade Security</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <Activity className="text-emerald-400" size={20} />
                    <span className="text-sm font-medium text-white">256-bit Encryption</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <Heart className="text-emerald-400" size={20} />
                    <span className="text-sm font-medium text-white">24/7 Monitoring</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <FileText className="text-emerald-400" size={20} />
                    <span className="text-sm font-medium text-white">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                    <Sparkles className="text-emerald-400" size={20} />
                    <span className="text-sm font-medium text-white">AI Insights</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button
                  onClick={() => window.open('https://dialysis.live/', '_blank')}
                  className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                >
                  <span>Visit Website</span>
                  <ExternalLink size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative overflow-hidden py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Ready to explore our apps?
          </h2>
          <p className="text-xl text-slate-400">
            Join thousands of users already transforming their lives
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <button
              onClick={() => window.open('https://apps.apple.com/us/app/inspired-by-the-cross/id6742165428', '_blank')}
              className="px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              <span>Get Inspired By The Cross</span>
            </button>
            <button
              onClick={() => window.open('https://dialysis.live/', '_blank')}
              className="px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <span>Visit dialysis.live</span>
              <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apps;
