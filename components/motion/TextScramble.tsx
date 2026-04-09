import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface TextScrambleProps {
  text: string;
  /** How long the scramble lasts, in ms */
  duration?: number;
  /** Delay before scrambling begins, in ms */
  delay?: number;
  /** Character set used for the scramble pool */
  chars?: string;
  className?: string;
}

/**
 * TextScramble — renders a string that scrambles in from random characters
 * when the element enters view. Useful for eyebrow labels, numeric figures,
 * and mono-type categories.
 */
const DEFAULT_CHARS = '!<>-_\\/[]{}—=+*^?#________';

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  duration = 900,
  delay = 0,
  chars = DEFAULT_CHARS,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    let rafId: number;
    const totalFrames = Math.max(1, Math.round(duration / 16));
    const start = performance.now() + delay;

    const tick = (now: number) => {
      if (now < start) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      frame++;
      const progress = Math.min(1, frame / totalFrames);
      const revealUpTo = Math.floor(progress * text.length);
      let out = '';
      for (let i = 0; i < text.length; i++) {
        if (i < revealUpTo || text[i] === ' ') {
          out += text[i];
        } else {
          out += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplay(out);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    // Seed with scrambled version immediately
    setDisplay(
      text
        .split('')
        .map((c) => (c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]))
        .join(''),
    );
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, text, duration, delay, chars]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
};

export default TextScramble;
