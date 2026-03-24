import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ChatWidget from './components/Chat/ChatWidget';
import ContactModal from './components/Contact/ContactModal';
import Home from './pages/Home';
import AppsPage from './pages/AppsPage';

function AnimatedRoutes({ onOpenContact }: { onOpenContact: () => void }) {
  const location = useLocation();

  return (
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
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Cursor glow
  useEffect(() => {
    let animationId: number;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

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
      <div className="min-h-screen bg-surface text-slate-200 relative">
        {/* Cursor Glow — smooth lerp follow */}
        <div ref={cursorRef} className="cursor-glow hidden lg:block" />

        {/* Noise Texture */}
        <div className="fixed inset-0 bg-noise pointer-events-none z-[1]" />

        <Navbar onOpenContact={() => setIsContactOpen(true)} />

        <main className="relative z-[2]">
          <AnimatedRoutes onOpenContact={() => setIsContactOpen(true)} />
        </main>

        <Footer />
        <ChatWidget />

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