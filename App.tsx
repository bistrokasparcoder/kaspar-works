import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ContactModal from './components/Contact/ContactModal';
import Home from './pages/HomeV2';
import AppsPage from './pages/AppsPage';
import InspiredPage from './pages/InspiredPage';
import DialysisPage from './pages/DialysisPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function ScrollRevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    document.querySelectorAll('.sr, .sr-scale').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}

function AnimatedRoutes({ onOpenContact }: { onOpenContact: () => void }) {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <ScrollRevealObserver />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home onOpenContact={onOpenContact} />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/inspired" element={<InspiredPage />} />
            <Route path="/dialysis" element={<DialysisPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'light';
    }
    return 'light';
  });
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Page loader
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  // Global Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      if (!progressRef.current) return;
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      progressRef.current.style.transform = `scaleX(${scrolled})`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  // Single cursor glow — no trail. Smooth lerp follow for calm restraint.
  useEffect(() => {
    let animationId: number;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`;
        cursorRef.current.style.top = `${currentY}px`;
      }
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <Router>
      <div className={`min-h-screen bg-surface relative transition-colors duration-400 ${theme === 'light' ? 'text-slate-800' : 'text-slate-200'}`}>
        {/* Page Loader */}
        <div className={`page-loader ${loaded ? 'loaded' : ''}`}>
          <div className="flex flex-col items-center gap-6">
            <img
              src="/logo.png"
              alt="Kaspar Works"
              className="h-20 w-20 object-contain"
              loading="eager"
              decoding="async"
            />
            <span className="font-editorial text-base font-extrabold tracking-[-0.02em] text-[var(--text-primary)]">
              kaspar<span className="text-[var(--accent)]">:</span>works
            </span>
            <div className="loader-bar" />
          </div>
        </div>

        {/* Scroll Progress */}
        <div ref={progressRef} className="scroll-progress" style={{ transform: 'scaleX(0)' }} />

        {/* Cursor Glow */}
        <div ref={cursorRef} className="cursor-glow hidden lg:block" />

        {/* Noise Texture */}
        <div className="fixed inset-0 bg-noise pointer-events-none z-[1]" />

        <Navbar onOpenContact={() => setIsContactOpen(true)} theme={theme} onToggleTheme={toggleTheme} />

        <main className="relative z-[2]">
          <AnimatedRoutes onOpenContact={() => setIsContactOpen(true)} />
        </main>

        <Footer />

        <AnimatePresence>
          {isContactOpen && (
            <ContactModal
              isOpen={isContactOpen}
              onClose={() => setIsContactOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;