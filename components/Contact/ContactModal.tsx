import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import NaturalForm from './NaturalForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-surface/80 backdrop-blur-2xl"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full max-w-3xl glass-strong rounded-[2rem] shadow-2xl shadow-indigo-500/5 overflow-visible"
      >
        {/* Close */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] text-slate-500 hover:text-white transition-colors z-20"
        >
          <X size={20} />
        </motion.button>

        <div className="p-8 md:p-14 relative z-10 min-h-[500px] flex flex-col justify-center">
          <NaturalForm onClose={onClose} />
        </div>

        {/* Decorative Orbs */}
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-500/[0.04] rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-0 -left-20 w-60 h-60 bg-purple-500/[0.04] rounded-full blur-[60px] pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;