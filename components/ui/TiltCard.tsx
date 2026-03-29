import React, { useRef, useState, useCallback } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glareOpacity?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', intensity = 8, glareOpacity = 0.07 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    glareX: 50, glareY: 50, glareOp: 0,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setStyle({
      transform: `perspective(1000px) rotateX(${(0.5 - y) * intensity}deg) rotateY(${(x - 0.5) * intensity}deg) scale3d(1.02,1.02,1.02)`,
      glareX: x * 100, glareY: y * 100, glareOp: glareOpacity,
    });
  }, [intensity, glareOpacity]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
      glareX: 50, glareY: 50, glareOp: 0,
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{ transform: style.transform, transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)', transformStyle: 'preserve-3d' }}
    >
      {children}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-30"
        style={{
          background: `radial-gradient(circle at ${style.glareX}% ${style.glareY}%, rgba(255,255,255,${style.glareOp}), transparent 60%)`,
        }}
      />
      {/* Edge highlight */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-30"
        style={{
          background: `linear-gradient(${105 + (style.glareX - 50) * 2}deg, rgba(255,255,255,${style.glareOp * 0.3}), transparent 50%)`,
        }}
      />
    </div>
  );
};

export default TiltCard;
