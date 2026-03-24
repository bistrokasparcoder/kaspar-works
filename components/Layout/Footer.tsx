import React from 'react';
import { Mail, Globe } from 'lucide-react';
import { FadeUp, Stagger, StaggerItem } from '../motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-20 overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface-50 to-surface" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div className="space-y-5">
              <h3 className="font-display text-2xl font-bold text-white">
                Kaspar Works <span className="text-slate-500">Inc.</span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                A product studio building purpose-driven platforms across faith, healthcare, and sports.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Products</h4>
              <Stagger className="space-y-3" staggerDelay={0.05}>
                {[
                  { name: 'About Us', href: '#about' },
                  { name: 'Inspired By The Cross', href: '#flagship' },
                  { name: 'dialysis.live', href: '#dialysis' },
                  { name: 'CricketBolt', href: '#cricketbolt' },
                  { name: 'Our Mission', href: '#mission' },
                ].map((link) => (
                  <StaggerItem key={link.name}>
                    <a href={link.href} className="text-sm text-slate-500 hover:text-indigo-400 transition-colors duration-300 inline-flex items-center group">
                      <span className="w-0 group-hover:w-3 h-px bg-indigo-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </a>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-4 text-sm">
                <a href="mailto:kaspar@kaspar.works" className="flex items-center text-slate-500 hover:text-indigo-400 transition-colors duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mr-3 group-hover:border-indigo-500/30 transition-colors">
                    <Mail size={14} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  kaspar@kaspar.works
                </a>
                <div className="flex items-start text-slate-500">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <Globe size={14} className="text-slate-400" />
                  </div>
                  <span>131 Continental Dr, Suite 305<br />Newark, DE 19713, United States</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Kaspar Works Inc. All rights reserved.</p>
            <div className="flex items-center gap-1 text-xs text-slate-600">
              <span>Built with</span><span className="text-indigo-500">purpose</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </footer>
  );
};

export default Footer;