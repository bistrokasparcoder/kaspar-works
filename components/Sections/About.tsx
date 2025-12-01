import React from 'react';
import { Lightbulb, Users, Heart, Target, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
            
            {/* Header Card */}
            <div className="lg:col-span-2 bg-white rounded-[2rem] p-10 shadow-sm border border-slate-100 flex flex-col justify-center">
                <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">About Us</h2>
                <p className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                  Blending Technology, <br/>Creativity & Purpose.
                </p>
                <p className="text-lg text-slate-500 max-w-xl">
                    We are a multidisciplinary digital studio committed to building intuitive apps and products that make life simpler, deeper, and more meaningful.
                </p>
            </div>

            {/* Vision Card */}
            <div className="bg-slate-900 text-white rounded-[2rem] p-8 flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-300">
                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <Lightbulb className="text-yellow-300" size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        To shape the future of digital experiences by creating platforms that inspire personal growth and foster connection.
                    </p>
                </div>
            </div>

            {/* Approach Card */}
            <div className="bg-blue-50 rounded-[2rem] p-8 flex flex-col justify-between border border-blue-100 group hover:scale-[1.02] transition-transform duration-300">
                 <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="text-blue-600" size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Our Approach</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Clean design, powerful technology, and meaningful storytelling crafted to feel personal and purposeful.
                    </p>
                </div>
            </div>

             {/* Passion Card */}
            <div className="lg:col-span-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-[2rem] p-10 flex flex-col md:flex-row items-center md:items-start gap-8 border border-purple-100 group hover:scale-[1.01] transition-transform duration-300">
                <div className="bg-white p-4 rounded-3xl shadow-sm shrink-0">
                    <Heart className="text-pink-500" size={32} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Heart for Impact</h3>
                    <p className="text-slate-600 leading-relaxed max-w-lg">
                        At the heart of our work is a belief: Digital tools should help people live better, think deeper, and connect stronger. Every product we build aims to inspire the soul.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;