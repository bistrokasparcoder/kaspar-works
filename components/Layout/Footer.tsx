import React from 'react';
import { Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Kaspar Works Inc.</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A product studio building purpose-driven platforms across faith, healthcare, and sports.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#flagship" className="hover:text-white transition-colors">Inspired By The Cross</a></li>
              <li><a href="#dialysis" className="hover:text-white transition-colors">dialysis.live</a></li>
              <li><a href="#cricketbolt" className="hover:text-white transition-colors">CricketBolt</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Our Mission</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:kaspar@kaspar.works" className="flex items-center hover:text-white transition-colors">
                <Mail size={16} className="mr-2 shrink-0" />
                kaspar@kaspar.works
              </a>
              <div className="flex items-start text-slate-400">
                <Globe size={16} className="mr-2 mt-0.5 shrink-0" />
                <span>131 Continental Dr, Suite 305<br />Newark, DE 19713, United States</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kaspar Works Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
