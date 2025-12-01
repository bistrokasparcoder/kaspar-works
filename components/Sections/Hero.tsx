import React, { useEffect, useState, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowRight, Play } from 'lucide-react';
import NaturalForm from '../Contact/NaturalForm';

interface HeroProps {
  onOpenContact?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Optimization: Stop animating if scrolled far past section
          if (scrollY > 1500) {
             ticking = false;
             return;
          }

          // Modern subtle parallax effect
          if (blobRef.current) blobRef.current.style.transform = `translate3d(0, ${scrollY * 0.4}px, 0)`;
          if (gridRef.current) gridRef.current.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
          if (particleRef.current) particleRef.current.style.transform = `translate3d(0, ${scrollY * 0.1}px, 0)`;

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-20 font-sans text-slate-900"
    >
      
      {/* --- Background Layers Container (Overflow Hidden) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* 1. Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white"></div>

          {/* 2. Interactive Mouse Spotlight */}
          <div 
            className="absolute inset-0 transition-opacity duration-700 ease-out opacity-40"
            style={{
              background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.08), transparent 50%)`,
            }}
          />

          {/* 3. Animated Mesh Gradients */}
          <div 
            ref={blobRef}
            className="absolute inset-0 opacity-30 will-change-transform"
          >
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-300/30 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
            <div className="absolute top-[20%] right-[-20%] w-[40vw] h-[40vw] bg-indigo-300/30 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000"></div>
          </div>

          {/* 4. Grid Pattern */}
          <div 
            ref={gridRef}
            className="absolute inset-0 bg-grid-slate-100 bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] will-change-transform"
          ></div>

          {/* 5. Noise Texture */}
          <div className="absolute inset-0 bg-noise opacity-[0.4] mix-blend-overlay"></div>

          {/* 6. Floating Particles */}
          <div 
            ref={particleRef}
            className="absolute inset-0 will-change-transform"
          >
             {[...Array(15)].map((_, i) => (
                 <div 
                    key={i} 
                    className="absolute rounded-full animate-rise bg-slate-400/20 backdrop-blur-sm" 
                    style={{
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        bottom: '-40px',
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 15 + 15}s`
                    }} 
                 />
             ))}
          </div>
      </div>

      {/* --- Main Content --- */}
      <div className={`relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Badge */}
        <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '100ms' }}>
          <div className="inline-flex items-center space-x-2 bg-white/60 border border-slate-200 rounded-full px-3 py-1 shadow-sm backdrop-blur-md mb-8 hover:border-blue-200 transition-colors cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-slate-500">
              Reimagining Digital Faith
            </span>
          </div>
        </div>
        
        {/* Main Heading - Masked Reveal Animation */}
        <h1 className="max-w-4xl mx-auto text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-950 leading-[1.1] sm:leading-[0.95] mb-8">
          {/* Line 1: "Design that" */}
          <div className="block overflow-hidden mb-1 sm:mb-2 pb-2">
            <span className="block">
              <span className="inline-flex text-slate-900">
                {['D', 'e', 's', 'i', 'g', 'n', ' ', 't', 'h', 'a', 't'].map((char, idx) => (
                  <span
                    key={idx}
                    className="inline-block opacity-0 animate-[soulReveal_0.8s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
                    style={{
                      animationDelay: `${200 + idx * 50}ms`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </span>
          </div>

          {/* Line 2: "Moves the Soul" with Gradient */}
          <div className="block relative overflow-visible">
             <div className="overflow-hidden pb-6 -mb-4 px-2 -mx-2">
                <span className="block">
                  <span className="relative z-10 inline-flex text-slate-900">
                    {['M', 'o', 'v', 'e', 's', ' ', 't', 'h', 'e', ' ', 'S', 'o', 'u', 'l'].map((char, idx) => (
                      <span
                        key={idx}
                        className="inline-block opacity-0 animate-[soulReveal_0.8s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
                        style={{
                          animationDelay: `${750 + idx * 50}ms`,
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>
                </span>
             </div>

            {/* Multi-layered Glow Effect */}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-blue-200/50 -z-0 blur-3xl rounded-full opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}></span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-purple-200/40 -z-0 blur-2xl rounded-full opacity-0 animate-fade-in-up" style={{ animationDelay: '900ms' }}></span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[60%] bg-cyan-100/30 -z-0 blur-xl rounded-full opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms' }}></span>
          </div>
        </h1>
        
        {/* Subtitle - Staggered Fade Up */}
        <div className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-10 space-y-1">
           <div className="overflow-hidden">
             <p className="animate-slide-up-fade opacity-0" style={{ animationDelay: '500ms' }}>
                Kaspar Works builds meaningful platforms that help people{' '}
                <span className="inline-block relative group">
                  <span className="font-medium text-slate-900 relative z-10">grow</span>
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-yellow-100 -z-0 scale-x-0 animate-expand-width origin-left" style={{ animationDelay: '1000ms' }}></span>
                </span>
                ,{' '}
                <span className="inline-block relative group">
                  <span className="font-medium text-slate-900 relative z-10">reflect</span>
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-blue-100 -z-0 scale-x-0 animate-expand-width origin-left" style={{ animationDelay: '1200ms' }}></span>
                </span>
                , and{' '}
                <span className="inline-block relative group">
                  <span className="font-medium text-slate-900 relative z-10">connect</span>
                  <span className="absolute bottom-1 left-0 w-full h-[6px] bg-pink-100 -z-0 scale-x-0 animate-expand-width origin-left" style={{ animationDelay: '1400ms' }}></span>
                </span>
                .
             </p>
           </div>
           <div className="overflow-hidden">
             <p className="animate-slide-up-fade opacity-0 font-medium text-slate-800" style={{ animationDelay: '650ms' }}>
               Technology with a heart for impact.
             </p>
           </div>
        </div>
        
        {/* Inline Natural Language Form Container */}
        <div 
          className="mt-16 w-full max-w-4xl animate-fade-in-up opacity-0 flex flex-col items-center"
          style={{ animationDelay: '800ms' }}
        >
            {/* Inline Natural Language Form */}
            <div className="w-full bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/50 shadow-xl shadow-slate-200/50 ring-1 ring-white">
                <NaturalForm />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;