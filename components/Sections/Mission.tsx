import React from 'react';
import { Zap, Globe, Smartphone, Feather, Layout, Brain, ArrowUpRight } from 'lucide-react';

const Mission: React.FC = () => {
  const products = [
    { name: "Mobile Apps", icon: <Smartphone className="w-5 h-5"/>, color: "text-blue-600 bg-blue-50" },
    { name: "Web Platforms", icon: <Layout className="w-5 h-5"/>, color: "text-purple-600 bg-purple-50" },
    { name: "Spiritual Tools", icon: <Feather className="w-5 h-5"/>, color: "text-green-600 bg-green-50" },
    { name: "AI Learning", icon: <Brain className="w-5 h-5"/>, color: "text-orange-600 bg-orange-50" },
    { name: "Community", icon: <Globe className="w-5 h-5"/>, color: "text-pink-600 bg-pink-50" },
  ];

  return (
    <section id="mission" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Our Mission</h2>
             <p className="text-3xl font-bold text-slate-900">Driven by purpose, powered by innovation.</p>
        </div>

        {/* Mission Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
                { title: "Innovation", desc: "Using cutting-edge AI and design to solve real problems.", icon: <Zap size={24}/>, color: "bg-blue-600" },
                { title: "Impact", desc: "Every product is designed to improve daily lives.", icon: <Feather size={24}/>, color: "bg-indigo-600" },
                { title: "Connection", desc: "Building bridges between people and purpose.", icon: <UsersIcon size={24}/>, color: "bg-purple-600" },
            ].map((item, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                     <div className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                        {item.icon}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* Products Strip */}
        <div className="relative rounded-[2.5rem] bg-slate-900 p-12 overflow-hidden text-center">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900"></div>
            
            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-10">Building for the Future</h2>
                
                <div className="flex flex-wrap justify-center gap-6">
                    {products.map((product, idx) => (
                        <div key={idx} className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full pl-2 pr-6 py-2 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default group">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${product.color}`}>
                                {product.icon}
                            </div>
                            <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{product.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

// Helper for the icon in the map above
const UsersIcon = ({size}: {size: number}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);

export default Mission;