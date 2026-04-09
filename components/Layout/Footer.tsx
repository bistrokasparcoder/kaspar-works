import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe } from 'lucide-react';
import { FadeUp, Stagger, StaggerItem } from '../motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 sm:py-20 overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt=""
                  className="h-12 w-12 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="font-editorial text-2xl font-extrabold tracking-[-0.02em] text-[var(--text-primary)]">
                  kaspar<span className="text-[var(--accent)]">:</span>works
                </h3>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
                We build high-end enterprise applications, custom websites, AI tools, and data platforms. End to end, one team.
              </p>
            </div>

            <div>
              <h4 className="text-[var(--text-primary)] font-semibold mb-5 text-sm uppercase tracking-wider">Studio</h4>
              <Stagger className="space-y-3" staggerDelay={0.05}>
                {[
                  { name: 'Work', href: '/apps' },
                  { name: 'Inspired By The Cross', href: '/inspired' },
                  { name: 'dialysis.live', href: '/dialysis' },
                  { name: 'Process', href: '#process-rail' },
                ].map((link) => (
                  <StaggerItem key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 inline-flex items-center group">
                        <span className="w-0 group-hover:w-3 h-px bg-[var(--accent)] mr-0 group-hover:mr-2 transition-all duration-300" />
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 inline-flex items-center group">
                        <span className="w-0 group-hover:w-3 h-px bg-[var(--accent)] mr-0 group-hover:mr-2 transition-all duration-300" />
                        {link.name}
                      </a>
                    )}
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div>
              <h4 className="text-[var(--text-primary)] font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-4 text-sm">
                <a href="mailto:kaspar@kaspar.works" className="flex items-center text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-[var(--glass-border)] flex items-center justify-center mr-3 group-hover:border-indigo-500/30 transition-colors">
                    <Mail size={14} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
                  </div>
                  kaspar@kaspar.works
                </a>
                <div className="flex items-start text-[var(--text-muted)]">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-[var(--glass-border)] flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <Globe size={14} className="text-[var(--text-secondary)]" />
                  </div>
                  <span>131 Continental Dr, Suite 305<br />Newark, DE 19713, United States</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--glass-border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--text-muted)]">&copy; {new Date().getFullYear()} Kaspar Works, Inc. All rights reserved.</p>
            <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
              <span>Newark, DE</span>
              <span className="mx-2 opacity-50">·</span>
              <span>Independent since 2024</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
};

export default Footer;