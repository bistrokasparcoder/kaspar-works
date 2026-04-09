import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenContact?: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact, theme = 'dark', onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); },
      { rootMargin: '-30% 0px -40% 0px', threshold: 0 }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => { sections.forEach((s) => observer.unobserve(s)); };
  }, []);

  useEffect(() => {
    const update = () => {
      if (location.pathname === '/apps') {
        const el = navRefs.current['/apps'];
        if (el) setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
      } else if (activeSection) {
        const el = navRefs.current[activeSection];
        if (el) setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
        else setIndicatorStyle(p => ({ ...p, opacity: 0 }));
      } else {
        setIndicatorStyle(p => ({ ...p, opacity: 0 }));
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [activeSection, location.pathname]);

  const navLinks = [
    { name: 'Services', href: '#capabilities-bento', isRoute: false },
    { name: 'Work', href: '#product-scrub', isRoute: false },
    { name: 'Process', href: '#process-rail', isRoute: false },
    { name: 'About', href: '#manifesto-pin', isRoute: false },
    { name: 'Apps', href: '/apps', isRoute: true },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) { setActiveSection(id); el.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenContact) { onOpenContact(); setIsOpen(false); }
    else window.location.href = "mailto:kaspar@kaspar.works";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto ${scrolled || isOpen ? 'max-w-4xl' : 'max-w-5xl'} transition-all duration-500`}
      >
        <div className={`
          relative px-5 py-2.5 rounded-full transition-all duration-500 flex items-center justify-between md:justify-start gap-6
          ${scrolled
            ? 'bg-surface-50/80 backdrop-blur-2xl border border-[var(--glass-border-strong)] shadow-2xl shadow-black/20'
            : 'bg-surface-50/40 backdrop-blur-xl border border-[var(--glass-border)]'
          }
        `}>
          <Link
            to="/"
            onClick={() => { if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Kaspar Works home"
          >
            <img
              src="/logo.png"
              alt=""
              className="h-8 w-8 object-contain"
              loading="eager"
              decoding="async"
            />
            <span className="font-editorial text-lg font-extrabold tracking-[-0.02em] text-[var(--text-primary)]">
              kaspar<span className="text-[var(--accent)]">:</span>works
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex relative items-center bg-white/[0.03] p-1 rounded-full">
            <motion.div
              className="absolute bg-white/[0.08] rounded-full"
              animate={{ left: indicatorStyle.left, width: indicatorStyle.width, opacity: indicatorStyle.opacity }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              style={{ height: 'calc(100% - 8px)', top: '4px' }}
            />
            {navLinks.map((link) => {
              const isActive = link.isRoute ? location.pathname === link.href : activeSection === link.href.substring(1);
              if (link.isRoute) {
                return (
                  <Link key={link.name} to={link.href} ref={(el) => { navRefs.current[link.href] = el; }} onClick={() => setIsOpen(false)}
                    className={`relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}>
                    {link.name}
                  </Link>
                );
              }
              return (
                <a key={link.name} href={link.href} ref={(el) => { navRefs.current[link.href.substring(1)] = el; }} onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`}>
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-2 shrink-0 ml-auto">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onToggleTheme}
              className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Sun size={18} />
                  </motion.div>
                ) : (
                  <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Moon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="px-5 py-2 text-sm font-bold rounded-full bg-[var(--accent)] text-[var(--bg-base)] hover:opacity-90 transition-opacity"
            >
              Book a call
            </motion.button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-white/5 rounded-full transition-all">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface/[0.97] backdrop-blur-2xl md:hidden flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-center space-y-8"
            >
              <motion.img
                src="/logo.png"
                alt=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-16 w-16 mx-auto object-contain mb-4"
                loading="eager"
                decoding="async"
              />
              {navLinks.map((link, i) => {
                const isActive = link.isRoute ? location.pathname === link.href : activeSection === link.href.substring(1);
                return link.isRoute ? (
                  <motion.div key={link.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
                    <Link to={link.href} className={`block text-3xl font-editorial font-extrabold ${isActive ? 'text-gradient' : 'text-[var(--text-primary)]'}`} onClick={() => setIsOpen(false)}>{link.name}</Link>
                  </motion.div>
                ) : (
                  <motion.div key={link.name} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
                    <a href={link.href} className={`block text-3xl font-editorial font-extrabold ${isActive ? 'text-gradient' : 'text-[var(--text-primary)]'}`} onClick={(e) => scrollToSection(e, link.href)}>{link.name}</a>
                  </motion.div>
                );
              })}
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="pt-10 flex flex-col items-center gap-6">
                <button onClick={handleContactClick} className="px-8 py-3 text-lg font-bold text-[#0c0c0e] bg-[var(--accent)] rounded-full">
                  Book a call
                </button>
                <button onClick={onToggleTheme} className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  <span className="text-sm">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;