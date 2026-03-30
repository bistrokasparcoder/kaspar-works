import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollMarquee: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-50%', '0%']);

  const words = ['Design', 'Engineering', 'Faith', 'Healthcare', 'AI', 'Mobile', 'Web', 'Purpose'];

  return (
    <div ref={ref} className="relative py-10 sm:py-16 md:py-24 overflow-hidden select-none">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

      {/* Row 1 — moves left */}
      <motion.div style={{ x: x1 }} className="flex gap-6 md:gap-10 mb-6 md:mb-8 whitespace-nowrap">
        {[...words, ...words, ...words].map((word, i) => (
          <React.Fragment key={i}>
            <span className="text-[clamp(2rem,6vw,5rem)] font-display font-bold tracking-[-0.03em] text-[var(--text-primary)] opacity-[0.15]">
              {word}
            </span>
            <span className="text-[clamp(2rem,6vw,5rem)] font-serif italic text-[var(--accent)] opacity-20">
              /
            </span>
          </React.Fragment>
        ))}
      </motion.div>

      {/* Row 2 — moves right */}
      <motion.div style={{ x: x2 }} className="flex gap-6 md:gap-10 whitespace-nowrap">
        {[...words.reverse(), ...words, ...words].map((word, i) => (
          <React.Fragment key={i}>
            <span className="text-[clamp(2rem,6vw,5rem)] font-display font-bold tracking-[-0.03em] text-[var(--text-primary)] opacity-[0.15]">
              {word}
            </span>
            <span className="text-[clamp(2rem,6vw,5rem)] font-serif italic text-[var(--accent)] opacity-20">
              *
            </span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollMarquee;
