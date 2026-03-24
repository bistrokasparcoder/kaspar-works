import React from 'react';
import { Zap, BarChart3, Trophy, Radio, Globe, TrendingUp, Target } from 'lucide-react';
import Button from '../ui/Button';

const CricketBolt: React.FC = () => {
  return (
    <section id="cricketbolt" className="py-32 relative overflow-hidden bg-[#0a0f0a]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(10,30,10,1),rgba(10,15,10,1))]"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-lime-500/8 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/8 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">

          {/* Content Side */}
          <div className="flex-1 space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-500/10 border border-lime-500/20 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
              </span>
              <span className="text-xs font-bold text-lime-300 tracking-wider uppercase">Live Platform</span>
            </div>

            {/* Typography */}
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white leading-[1]">
                Cricket<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-green-300 to-lime-300 animate-shimmer-slow">
                  Bolt
                </span>
              </h2>
              <p className="text-xl text-lime-300/80 font-semibold">
                Feel Every Ball
              </p>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-light">
                The world's most advanced cricket analytics platform. AI-powered momentum analysis,
                ball-by-ball predictions, and real-time match intelligence — built for the passionate fan.
              </p>
            </div>

            {/* Feature Grid - Bento Style */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "AI Analytics", icon: <BarChart3 size={18} />, color: "text-lime-300" },
                { title: "Live Predictions", icon: <Target size={18} />, color: "text-green-300" },
                { title: "Real-Time Scores", icon: <Radio size={18} />, color: "text-emerald-300" },
                { title: "Leaderboards", icon: <Trophy size={18} />, color: "text-yellow-300" },
              ].map((item, i) => (
                <div key={i} className="group p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-lime-500/[0.06] hover:border-lime-500/20 transition-all duration-300 cursor-default">
                  <div className={`mb-3 ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}>{item.icon}</div>
                  <h3 className="text-slate-200 font-medium text-sm group-hover:text-white">{item.title}</h3>
                </div>
              ))}
            </div>

            {/* Platform */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-xl bg-lime-500/10 border border-lime-500/20 backdrop-blur-sm flex items-center gap-2">
                <Globe className="text-lime-400" size={16} />
                <span className="text-xs font-semibold text-lime-300 tracking-wide">Web Platform</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <Button
                onClick={() => window.open('https://cricketbolt.com/', '_blank')}
                className="pl-8 pr-8 bg-gradient-to-r from-lime-500 to-green-500 !text-black hover:from-lime-400 hover:to-green-400 shadow-[0_0_30px_rgba(132,204,22,0.4)] border-none font-bold"
              >
                Visit CricketBolt
              </Button>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Zap size={16} className="text-lime-400" />
                <span>Powered by AI</span>
              </div>
            </div>
          </div>

          {/* Visual Side - Browser Mockup */}
          <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative mt-12 lg:mt-0 min-h-[500px]">
            {/* Glowing Halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-500/15 blur-[100px] rounded-full animate-pulse"></div>

            {/* Desktop Browser Mockup */}
            <div className="relative z-10 mx-auto w-full max-w-[520px] transform hover:scale-[1.02] transition-transform duration-500">
              <div className="bg-slate-900 rounded-2xl shadow-2xl shadow-lime-500/20 border border-slate-700 overflow-hidden ring-2 ring-lime-500/10">
                {/* Browser Header */}
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 ml-4 bg-slate-700/50 rounded px-3 py-1 text-xs text-slate-400 flex items-center gap-2">
                    <Zap size={12} className="text-lime-400" />
                    <span>cricketbolt.com</span>
                  </div>
                </div>
                {/* Browser Content - Styled Placeholder */}
                <div className="relative bg-[#0a0f0a] h-[360px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-950/50 via-[#0a0f0a] to-green-950/30">
                    {/* Simulated Dashboard UI */}
                    <div className="p-6 space-y-4">
                      {/* Header Bar */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Zap className="text-lime-400" size={20} />
                          <span className="text-white font-bold text-lg">CricketBolt</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="px-3 py-1 rounded-full bg-lime-500/20 text-lime-300 text-xs font-semibold">LIVE</div>
                        </div>
                      </div>

                      {/* Match Card */}
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-slate-400 text-xs uppercase tracking-wide">T20 International</span>
                          <span className="text-lime-400 text-xs font-bold flex items-center gap-1">
                            <Radio size={10} /> Live
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-center">
                            <div className="text-white font-bold text-sm">IND</div>
                            <div className="text-lime-300 font-bold text-xl">186/4</div>
                            <div className="text-slate-500 text-xs">18.2 ov</div>
                          </div>
                          <div className="text-slate-600 text-xs font-bold">VS</div>
                          <div className="text-center">
                            <div className="text-white font-bold text-sm">AUS</div>
                            <div className="text-slate-300 font-bold text-xl">142/6</div>
                            <div className="text-slate-500 text-xs">15.0 ov</div>
                          </div>
                        </div>
                      </div>

                      {/* AI Prediction Bar */}
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <BarChart3 className="text-lime-400" size={14} />
                          <span className="text-white text-xs font-semibold">AI Win Probability</span>
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full w-[78%] bg-gradient-to-r from-lime-500 to-green-400 rounded-full"></div>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-lime-300 text-xs font-bold">IND 78%</span>
                          <span className="text-slate-500 text-xs">AUS 22%</span>
                        </div>
                      </div>

                      {/* Leaderboard Preview */}
                      <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Trophy className="text-yellow-400" size={14} />
                          <span className="text-white text-xs font-semibold">Top Predictors</span>
                        </div>
                        <div className="space-y-1.5">
                          {['CricketGuru', 'BoltMaster', 'AnalyticsPro'].map((name, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-lime-400 text-xs font-bold w-4">{i + 1}</span>
                                <span className="text-slate-300 text-xs">{name}</span>
                              </div>
                              <span className="text-lime-300 text-xs font-semibold">{[2840, 2650, 2510][i]} XP</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute top-4 -right-4 w-44 p-4 rounded-2xl bg-gradient-to-br from-lime-900/90 to-green-900/90 backdrop-blur-xl border border-lime-500/30 shadow-2xl shadow-lime-500/20 animate-float hidden xl:block z-20">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-lime-400 text-xs font-semibold uppercase tracking-wide mb-1">Momentum</p>
                  <p className="text-white text-3xl font-bold">94<span className="text-lg text-lime-300">%</span></p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-lime-500/20 flex items-center justify-center">
                  <TrendingUp className="text-lime-400" size={20} />
                </div>
              </div>
              <div className="h-1.5 w-full bg-lime-950 rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-gradient-to-r from-lime-500 to-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CricketBolt;
