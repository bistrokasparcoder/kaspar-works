import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // State for the sliding pill animation
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Active when section occupies middle of screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Update sliding pill position when activeSection changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = navRefs.current[activeSection];
      if (activeElement) {
        setIndicatorStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
          opacity: 1
        });
      } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
      }
    };

    updateIndicator();
    // Recalculate on resize to maintain correct positioning
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Mission', href: '#mission' },
    { name: 'Flagship', href: '#flagship' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Optimistically set active section for instant animation response
      setActiveSection(targetId); 
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenContact) {
      onOpenContact();
      setIsOpen(false);
    } else {
      window.location.href = "mailto:kaspar@kaspar.works";
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] md:w-auto
        ${scrolled || isOpen ? 'max-w-4xl' : 'max-w-5xl'} 
        `}
      >
        <div className={`
          relative px-6 py-3 rounded-full border border-white/20 shadow-xl shadow-slate-200/20
          backdrop-blur-xl bg-white/80 transition-all duration-300 flex items-center justify-between md:justify-start gap-8
        `}>
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold tracking-tight text-slate-900 shrink-0 cursor-pointer"
          >
            Kaspar<span className="text-slate-400">Works</span>
          </a>

          {/* Desktop Links with Sliding Pill Animation */}
          <div className="hidden md:flex relative items-center bg-slate-100/50 p-1.5 rounded-full">
            
            {/* The Animated Sliding Pill */}
            <div 
              className="absolute bg-white shadow-sm rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
                height: 'calc(100% - 12px)', // Matches parent padding (p-1.5 = 6px * 2 = 12px)
                top: '6px'
              }}
            />

            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  ref={(el) => { navRefs.current[link.href.substring(1)] = el; }}
                  onClick={(e) => scrollToSection(e, link.href)} 
                  className={`relative z-10 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    isActive 
                      ? 'text-slate-900' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block shrink-0 ml-auto">
             <button 
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden flex items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-center space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`block text-2xl font-medium transition-colors ${
                activeSection === link.href.substring(1) ? 'text-blue-600' : 'text-slate-900 hover:text-blue-600'
              }`}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8">
             <button 
                onClick={handleContactClick}
                className="inline-block px-8 py-3 text-lg font-medium text-white bg-slate-900 rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Let's Talk
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;