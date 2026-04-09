import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface EditorialButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  className?: string;
  variant?: 'primary' | 'ghost';
}

/* Pill CTA with rotating arrow circle.
   Used across the editorial-style site for cohesion. */
const EditorialButton: React.FC<EditorialButtonProps> = ({
  children,
  onClick,
  href,
  target,
  className = '',
  variant = 'primary',
}) => {
  const inner = (
    <>
      <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
        {children}
      </span>
      <span
        className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-500 group-hover:rotate-45"
        style={{
          background: variant === 'primary' ? 'var(--accent)' : 'var(--glass-bg-strong)',
          color: variant === 'primary' ? 'var(--bg-base)' : 'var(--text-primary)',
        }}
      >
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </span>
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: '0 0 60px -10px var(--accent)' }}
      />
    </>
  );

  const base =
    'group relative inline-flex items-center gap-4 pl-7 pr-2 py-2 rounded-full border border-[var(--glass-border-strong)] bg-[var(--glass-bg-strong)] backdrop-blur-xl hover:border-[var(--accent)] transition-all duration-500';

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
        onClick={onClick}
        className={`${base} ${className}`}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      className={`${base} ${className}`}
    >
      {inner}
    </motion.button>
  );
};

export default EditorialButton;

/* ─── Small eyebrow label ──────────────────── */
export const EyebrowLabel: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div
    className={`flex items-center gap-3 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] font-mono ${className}`}
  >
    <span className="inline-block w-10 h-px bg-[var(--text-secondary)]" />
    <span>{children}</span>
  </div>
);
