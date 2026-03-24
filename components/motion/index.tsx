import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, type Variant } from 'framer-motion';

// ============================================================
// EASING
// ============================================================
const ease = [0.16, 1, 0.3, 1] as const;
const springConfig = { type: "spring" as const, stiffness: 300, damping: 25 };

// ============================================================
// FadeUp — basic scroll-triggered fade + slide up
// ============================================================
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children, delay = 0, duration = 0.7, className = '', y = 40
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [...ease] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================
// ScaleIn — scale + fade reveal on scroll
// ============================================================
interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScaleIn: React.FC<ScaleInProps> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.7, delay, ease: [...ease] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================
// Stagger — container for staggered children
// ============================================================
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const Stagger: React.FC<StaggerProps> = ({ children, className = '', staggerDelay = 0.08 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: 0.1 } },
        hidden: {}
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================
// StaggerItem — child of Stagger container
// ============================================================
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className = '' }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [...ease] } }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// ============================================================
// GlowCard — interactive card with spring hover
// ============================================================
interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children, className = '', hoverScale = 1.02, hoverY = -4
}) => (
  <motion.div
    whileHover={{ y: hoverY, scale: hoverScale }}
    whileTap={{ scale: 0.98 }}
    transition={springConfig}
    className={`card-glow ${className}`}
  >
    {children}
  </motion.div>
);

// ============================================================
// MagneticButton — button with spring hover + tap
// ============================================================
interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children, className = '', ...props
}) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 15 }}
    className={className}
    {...props}
  >
    {children}
  </motion.button>
);

// ============================================================
// FloatingElement — continuous float animation
// ============================================================
interface FloatingProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}

export const FloatingElement: React.FC<FloatingProps> = ({
  children, className = '', duration = 6, distance = 15, delay = 0
}) => (
  <motion.div
    animate={{ y: [-distance / 2, distance / 2, -distance / 2] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// ============================================================
// Parallax — scroll-driven parallax
// ============================================================
interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const Parallax: React.FC<ParallaxProps> = ({ children, className = '', speed = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <div ref={ref} className={className} style={{ position: 'relative' }}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

// ============================================================
// BlurIn — blur + fade entrance
// ============================================================
interface BlurInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const BlurIn: React.FC<BlurInProps> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      animate={isInView
        ? { opacity: 1, filter: "blur(0px)", y: 0 }
        : { opacity: 0, filter: "blur(10px)", y: 20 }
      }
      transition={{ duration: 0.8, delay, ease: [...ease] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================
// TextReveal — word-by-word text reveal
// ============================================================
interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  staggerDelay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text, className = '', wordClassName = '', delay = 0, staggerDelay = 0.08
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(' ');

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } },
        hidden: {}
      }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [...ease] } }
          }}
          className={`inline-block mr-[0.25em] ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Re-export motion for direct use
export { motion, useInView, useScroll, useTransform } from 'framer-motion';
export { AnimatePresence } from 'framer-motion';