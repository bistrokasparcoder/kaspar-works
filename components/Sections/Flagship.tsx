import React from 'react';
import { BookOpen, Users, Star, MessageCircle, Heart, Sparkles } from 'lucide-react';
import Button from '../ui/Button';

const Flagship: React.FC = () => {
  return (
    <section id="flagship" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,1),rgba(5,5,5,1))]"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content Side */}
          <div className="flex-1 space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
               <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
               <span className="text-xs font-bold text-indigo-300 tracking-wider uppercase">Flagship App</span>
            </div>

            {/* Typography */}
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white leading-[1]">
                Inspired By <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 animate-shimmer-slow">
                  The Cross
                </span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-light">
                A digital sanctuary designed to deepen your spiritual journey. 
                Experience daily devotionals, community prayer, and a library of wisdom right in your pocket.
              </p>
            </div>

            {/* Feature Grid - Bento Style */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { title: "Daily Devotion", icon: <Sparkles size={18} />, color: "text-amber-300" },
                 { title: "Prayer Community", icon: <Users size={18} />, color: "text-blue-300" },
                 { title: "Scripture Library", icon: <BookOpen size={18} />, color: "text-emerald-300" },
                 { title: "Personal Journal", icon: <MessageCircle size={18} />, color: "text-purple-300" },
               ].map((item, i) => (
                 <div key={i} className="group p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 cursor-default">
                    <div className={`mb-3 ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}>{item.icon}</div>
                    <h3 className="text-slate-200 font-medium text-sm group-hover:text-white">{item.title}</h3>
                 </div>
               ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <Button className="pl-8 pr-8 bg-white text-black hover:bg-slate-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] border-none">
                Get the App
              </Button>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border border-black bg-slate-800 flex items-center justify-center text-[10px] text-white">
                        <Users size={12} />
                     </div>
                   ))}
                </div>
                <span>Joined by 10k+ believers</span>
              </div>
            </div>
          </div>

          {/* Visual Side - 3D Mockup Construction */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none [perspective:1000px] relative mt-12 lg:mt-0">
             {/* Glowing Halo */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 blur-[100px] rounded-full"></div>
             
             {/* Floating Elements Layer 1 (Back) */}
             <div className="absolute top-20 -left-10 w-40 p-4 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-white/10 z-0 animate-float hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><Users size={14}/></div>
                   <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                </div>
                <div className="h-2 w-24 bg-white/5 rounded-full"></div>
             </div>

             {/* Phone Main */}
             <div className="relative z-10 mx-auto w-[300px] rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out-expo shadow-2xl shadow-indigo-500/20 rounded-[3rem]">
                {/* Frame */}
                <div className="relative bg-slate-950 border-[6px] border-slate-800 rounded-[3rem] overflow-hidden h-[600px] ring-1 ring-white/20">
                    {/* Screen */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col">
                        {/* Status Bar */}
                        <div className="h-14 flex justify-between items-center px-6 text-white/50 text-xs">
                           <span>9:41</span>
                           <div className="flex gap-1"><div className="w-4 h-4 rounded-full border border-current"></div></div>
                        </div>
                        
                        {/* App Header */}
                        <div className="px-6 pt-2 pb-6">
                           <div className="flex justify-between items-end mb-6">
                              <div>
                                 <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Thursday, 24th</p>
                                 <h3 className="text-white text-2xl font-serif">Daily Devotion</h3>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"><Users size={18}/></div>
                           </div>

                           {/* Featured Card */}
                           <div className="relative aspect-[4/5] bg-indigo-600 rounded-3xl p-6 flex flex-col justify-between overflow-hidden group cursor-pointer shadow-lg shadow-indigo-900/40">
                              {/* Image/Gradient Background */}
                              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507692049790-de58293a469d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent"></div>
                              
                              <div className="relative z-10 flex justify-between items-start">
                                 <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs text-white font-medium">Verse of the Day</div>
                                 <Heart className="text-white/70" size={20} />
                              </div>

                              <div className="relative z-10 space-y-3">
                                 <p className="text-white font-serif text-xl leading-snug">"Be strong and courageous. Do not be afraid; do not be discouraged."</p>
                                 <p className="text-indigo-200 text-sm font-medium">Joshua 1:9</p>
                              </div>
                           </div>
                        </div>

                        {/* Bottom Nav */}
                        <div className="mt-auto h-20 bg-slate-900/80 backdrop-blur-md border-t border-white/5 flex justify-around items-center text-slate-500">
                           <div className="text-indigo-400"><Star size={24}/></div>
                           <BookOpen size={24}/>
                           <MessageCircle size={24}/>
                           <Users size={24}/>
                        </div>
                    </div>
                </div>
             </div>

             {/* Floating Elements Layer 2 (Front) */}
             <div className="absolute bottom-40 -right-12 w-48 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 z-20 shadow-xl animate-float-delayed hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400"><MessageCircle size={14} /></div>
                   <div>
                      <p className="text-white text-xs font-medium">New Prayer Request</p>
                      <p className="text-slate-400 text-[10px]">Just now</p>
                   </div>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full mt-2"></div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Flagship;