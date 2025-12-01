import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import NaturalForm from './NaturalForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle entrance/exit animations
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      requestAnimationFrame(() => setIsAnimating(true));
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`
        relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl overflow-visible
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}
      `}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors z-20"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-14 relative z-10 min-h-[500px] flex flex-col justify-center">
            <NaturalForm onClose={onClose} />
        </div>
        
        {/* Decorative Background Orbs */}
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-blue-50 rounded-full blur-3xl pointer-events-none opacity-50" />
        <div className="absolute top-0 -left-20 w-60 h-60 bg-purple-50 rounded-full blur-3xl pointer-events-none opacity-50" />
      </div>
    </div>
  );
};

export default ContactModal;
