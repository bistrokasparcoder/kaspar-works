import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { springSilk } from './tokens';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  /** Pull radius in px before the element starts responding */
  radius?: number;
  /** Max translation amount in px */
  strength?: number;
  /** Render as span (inline) or div (block) */
  as?: 'span' | 'div';
}

/**
 * Magnetic — wraps its children so that they pull toward the cursor
 * when the cursor enters a radius around the element. Spring-physics
 * based, snaps back on exit. Uses a motion wrapper so transforms compose
 * with any parent motion.
 */
export const Magnetic: React.FC<MagneticProps> = ({
  children,
  className = '',
  radius = 160,
  strength = 28,
  as = 'span',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > radius) {
      setCoords({ x: 0, y: 0 });
      return;
    }
    // Falloff: stronger when cursor is closer to center
    const falloff = 1 - dist / radius;
    setCoords({
      x: (dx / radius) * strength * falloff,
      y: (dy / radius) * strength * falloff,
    });
  };

  const handleLeave = () => setCoords({ x: 0, y: 0 });

  const MotionTag = as === 'span' ? motion.span : motion.div;

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLDivElement & HTMLSpanElement>}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={coords}
      transition={springSilk}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </MotionTag>
  );
};

export default Magnetic;
