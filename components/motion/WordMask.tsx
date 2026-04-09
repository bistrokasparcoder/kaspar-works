import React from 'react';
import { motion } from 'framer-motion';
import { ease, maskRevealDuration } from './tokens';

interface WordMaskProps {
  text: string;
  /** Delay in seconds before first word animates */
  delay?: number;
  /** Delay between each word */
  stagger?: number;
  /** Optional per-word className transform (e.g., italicize a specific word) */
  wordClassName?: (word: string, index: number) => string;
  /** Start animation immediately, or wait for inView trigger */
  trigger?: 'mount' | 'inView';
  /** Gate the animation — set to false to hold at initial, true to play */
  play?: boolean;
  className?: string;
}

/**
 * WordMask — splits a string into words, each wrapped in an overflow-hidden
 * mask, and slides them up from 110% on reveal. Consolidates the inline-block
 * overflow pattern that was repeated everywhere.
 */
export const WordMask: React.FC<WordMaskProps> = ({
  text,
  delay = 0,
  stagger = 0.08,
  wordClassName,
  trigger = 'mount',
  play = true,
  className = '',
}) => {
  const words = text.split(' ');

  const controlProps =
    trigger === 'mount'
      ? {
          initial: { y: '110%' },
          animate: play ? { y: 0 } : { y: '110%' },
        }
      : {
          initial: { y: '110%' },
          whileInView: { y: 0 },
          viewport: { once: true, margin: '-10%' },
        };

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: '0.22em' }}
        >
          <motion.span
            className={`inline-block ${wordClassName ? wordClassName(word, i) : ''}`}
            {...controlProps}
            transition={{
              duration: maskRevealDuration,
              delay: delay + i * stagger,
              ease: [...ease],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default WordMask;
