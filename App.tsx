import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ContactModal from './components/Contact/ContactModal';
import Home from './pages/Home';
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
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Page loader
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1400);
    return () => clearTimeout(timer);
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

  // Cursor glow + trail
  useEffect(() => {
    let animationId: number;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    const trail: { x: number; y: number }[] = Array.from({ length: 8 }, () => ({ x: 0, y: 0 }));

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentX}px`;
        cursorRef.current.style.top = `${currentY}px`;
      }

      // Trail follows with increasing lag
      for (let i = 0; i < trail.length; i++) {
        const prev = i === 0 ? { x: currentX, y: currentY } : trail[i - 1];
        trail[i].x += (prev.x - trail[i].x) * (0.15 - i * 0.012);
        trail[i].y += (prev.y - trail[i].y) * (0.15 - i * 0.012);
        const el = trailRefs.current[i];
        if (el) {
          el.style.left = `${trail[i].x}px`;
          el.style.top = `${trail[i].y}px`;
          el.style.opacity = `${0.4 - i * 0.05}`;
          el.style.transform = `translate(-50%, -50%) scale(${1 - i * 0.1})`;
        }
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
            <span className="font-display text-lg font-bold tracking-tight text-[var(--text-primary)]">
              Kaspar<span className="text-[var(--text-muted)]">Works</span>
            </span>
            <div className="loader-bar" />
          </div>
        </div>

        {/* Scroll Progress */}
        <div ref={progressRef} className="scroll-progress" style={{ transform: 'scaleX(0)' }} />

        {/* Cursor Glow + Trail */}
        <div ref={cursorRef} className="cursor-glow hidden lg:block" />
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => { if (el) trailRefs.current[i] = el; }}
            className="fixed w-2 h-2 rounded-full pointer-events-none z-[999] hidden lg:block"
            style={{ background: 'var(--accent)', opacity: 0, transition: 'none' }}
          />
        ))}

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