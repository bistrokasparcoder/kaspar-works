import React from 'react';
import { Mail, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Kaspar Works Inc.</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Designing products that uplift individuals, strengthen communities, and create deeper connections to purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#flagship" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#mission" className="hover:text-white transition-colors">Our Mission</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:kaspar@kaspar.works" className="flex items-center hover:text-white transition-colors">
                <Mail size={16} className="mr-2" />
                kaspar@kaspar.works
              </a>
              <p className="flex items-center text-slate-500 cursor-not-allowed">
                <Globe size={16} className="mr-2" />
                Newark, DE
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-400 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kaspar Works Inc. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;