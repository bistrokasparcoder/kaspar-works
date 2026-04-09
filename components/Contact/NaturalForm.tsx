import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, Loader2, ArrowRight, ArrowLeft, Sparkles, User, Mail, Lightbulb, MessageSquare, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NaturalFormProps {
  onClose?: () => void;
  className?: string;
}

const steps = [
  { id: 'name', label: "What's your name?", subtitle: "Let's get acquainted", icon: User },
  { id: 'interest', label: 'What are you building?', subtitle: 'Pick the one that fits best', icon: Lightbulb },
  { id: 'email', label: 'Where can we reach you?', subtitle: "We'll reply within 24 hours", icon: Mail },
  { id: 'details', label: 'Paint us the picture', subtitle: 'Optional, but helps us hit the ground running', icon: MessageSquare },
];

const interestOptions = [
  { label: "Mobile App", emoji: "\u{1F4F1}", desc: "iOS & Android", gradient: "from-blue-600 to-cyan-500", border: "border-blue-500/30 hover:border-blue-400/60", bg: "bg-blue-500/[0.08] hover:bg-blue-500/[0.15]" },
  { label: "Web Platform", emoji: "\u{1F310}", desc: "SaaS & Dashboards", gradient: "from-purple-600 to-violet-500", border: "border-purple-500/30 hover:border-purple-400/60", bg: "bg-purple-500/[0.08] hover:bg-purple-500/[0.15]" },
  { label: "AI Solution", emoji: "\u{1F916}", desc: "Smart automation", gradient: "from-emerald-600 to-green-500", border: "border-emerald-500/30 hover:border-emerald-400/60", bg: "bg-emerald-500/[0.08] hover:bg-emerald-500/[0.15]" },
  { label: "E-Commerce", emoji: "\u{1F6D2}", desc: "Online stores", gradient: "from-amber-600 to-yellow-500", border: "border-amber-500/30 hover:border-amber-400/60", bg: "bg-amber-500/[0.08] hover:bg-amber-500/[0.15]" },
  { label: "Health Tech", emoji: "\u{1FA7A}", desc: "Clinical platforms", gradient: "from-rose-600 to-pink-500", border: "border-rose-500/30 hover:border-rose-400/60", bg: "bg-rose-500/[0.08] hover:bg-rose-500/[0.15]" },
  { label: "Something Else", emoji: "\u{1F680}", desc: "Let's explore", gradient: "from-indigo-600 to-sky-500", border: "border-indigo-500/30 hover:border-indigo-400/60", bg: "bg-indigo-500/[0.08] hover:bg-indigo-500/[0.15]" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const NaturalForm: React.FC<NaturalFormProps> = ({ onClose, className = '' }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formState, setFormState] = useState({
    name: '',
    interest: '',
    email: '',
    details: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Only autofocus after user interaction (not on initial page load)
    if (currentStep === 0 && formState.name === '' && formState.interest === '') return;
    const timer = setTimeout(() => {
      if (currentStep === 3) textareaRef.current?.focus({ preventScroll: true });
      else if (currentStep !== 1) inputRef.current?.focus({ preventScroll: true });
    }, 500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const canProceed = () => {
    if (currentStep === 0) return formState.name.trim().length > 0;
    if (currentStep === 1) return formState.interest.length > 0;
    if (currentStep === 2) return formState.email.includes('@');
    return true;
  };

  const goNext = () => {
    if (canProceed() && currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && currentStep !== 3) {
      e.preventDefault();
      goNext();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setStatus('submitting');
    try {
      const response = await fetch('https://formsubmit.co/kaspar@kaspar.works', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          interest: formState.interest,
          details: formState.details || 'No additional details provided',
          _subject: `New Project Inquiry: ${formState.interest} from ${formState.name}`,
          _template: 'table'
        })
      });
      if (response.ok) setStatus('success');
      else throw new Error('Failed to send email');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try emailing us directly at kaspar@kaspar.works');
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
        className={`flex flex-col items-center justify-center text-center py-12 ${className}`}
      >
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
          className="relative mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-green-500/30 rotate-3">
            <CheckCircle className="text-[var(--text-primary)] w-12 h-12" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.4 }}
            className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg -rotate-12"
          >
            <Sparkles className="text-[var(--text-primary)] w-5 h-5" />
          </motion.div>
        </motion.div>
        <h3 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-3 tracking-tight">You're all set!</h3>
        <p className="text-[var(--text-secondary)] text-lg max-w-sm mb-8 leading-relaxed">
          Thanks, <span className="text-[var(--text-primary)] font-semibold">{formState.name}</span>. We'll reach out about your <span className="text-[var(--text-primary)] font-medium">{formState.interest.toLowerCase()}</span> project soon.
        </p>
        {onClose ? (
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onClose} className="px-8 py-3 bg-white text-surface rounded-full font-medium hover:bg-slate-100 transition-all shadow-xl">
            Close
          </motion.button>
        ) : (
          <button
            onClick={() => { setStatus('idle'); setCurrentStep(0); setFormState({ name: '', interest: '', email: '', details: '' }); }}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium transition-colors underline underline-offset-4"
          >
            Send another message
          </button>
        )}
      </motion.div>
    );
  }

  const step = steps[currentStep];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, filter: 'blur(4px)' }),
    center: { x: 0, opacity: 1, filter: 'blur(0px)' },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, filter: 'blur(4px)' }),
  };

  return (
    <div className={className}>
      {/* Step Progress — Numbered circles */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {steps.map((s, i) => (
              <React.Fragment key={s.id}>
                <button
                  type="button"
                  onClick={() => { if (i < currentStep) { setDirection(-1); setCurrentStep(i); } }}
                  className={`
                    w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 shrink-0
                    ${i === currentStep
                      ? 'bg-[var(--accent)] text-[var(--bg-base)] shadow-lg shadow-[var(--accent-soft)] scale-110 ring-4 ring-[var(--accent-soft)]'
                      : i < currentStep
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-pointer hover:bg-emerald-500/30'
                        : 'bg-[var(--glass-bg)] text-[var(--text-muted)] border border-white/[0.08]'
                    }
                  `}
                >
                  {i < currentStep ? <CheckCircle size={16} /> : i + 1}
                </button>
                {i < steps.length - 1 && (
                  <div className={`w-6 sm:w-10 h-[2px] rounded-full transition-colors duration-500 ${
                    i < currentStep ? 'bg-emerald-500/40' : 'bg-[var(--glass-bg-strong)]'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <form onSubmit={handleSubmit}>
        <div className="min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease }}
              className="flex-1"
            >
              {/* Step Header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight mb-2">{step.label}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{step.subtitle}</p>
              </div>

              {/* Step 0: Name */}
              {currentStep === 0 && (
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-blue-500/30 flex items-center justify-center">
                    <User size={20} className="text-blue-400" />
                  </div>
                  <input
                    ref={inputRef}
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onKeyDown={handleKeyDown}
                    placeholder="e.g. John Doe"
                    className="w-full pl-16 pr-4 py-4 text-xl md:text-2xl font-semibold text-[var(--text-primary)] bg-transparent border-b-2 border-[var(--glass-border-strong)] outline-none placeholder:text-[var(--text-muted)] placeholder:opacity-60 placeholder:font-normal caret-[var(--accent)] focus:border-[var(--accent)]/60 transition-colors"
                  />
                </div>
              )}

              {/* Step 1: Interest Selection */}
              {currentStep === 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {interestOptions.map((option, i) => (
                    <motion.button
                      key={option.label}
                      type="button"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3, ease }}
                      onClick={() => {
                        setFormState({ ...formState, interest: option.label });
                        setTimeout(() => { setDirection(1); setCurrentStep(2); }, 350);
                      }}
                      className={`
                        group relative p-4 rounded-[1.25rem] border text-left transition-all duration-300
                        ${option.bg} ${option.border}
                        ${formState.interest === option.label
                          ? 'ring-2 ring-indigo-400/60 scale-[0.97] shadow-lg shadow-indigo-500/20'
                          : 'hover:scale-[1.03] hover:shadow-lg'
                        }
                      `}
                    >
                      <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform origin-left">{option.emoji}</span>
                      <span className="text-sm font-bold text-[var(--text-primary)] block">{option.label}</span>
                      <span className="text-[11px] text-[var(--text-secondary)] block mt-0.5">{option.desc}</span>
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Step 2: Email */}
              {currentStep === 2 && (
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center">
                    <Mail size={20} className="text-purple-400" />
                  </div>
                  <input
                    ref={inputRef}
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onKeyDown={handleKeyDown}
                    placeholder="you@company.com"
                    className="w-full pl-16 pr-4 py-4 text-xl md:text-2xl font-semibold text-[var(--text-primary)] bg-transparent border-b-2 border-[var(--glass-border-strong)] outline-none placeholder:text-[var(--text-muted)] placeholder:opacity-60 placeholder:font-normal caret-[var(--accent)] focus:border-[var(--accent)]/60 transition-colors"
                  />
                </div>
              )}

              {/* Step 3: Details */}
              {currentStep === 3 && (
                <div>
                  <textarea
                    ref={textareaRef}
                    rows={4}
                    value={formState.details}
                    onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                    placeholder="Your vision, timeline, budget range, or anything else..."
                    className="w-full text-base md:text-lg text-slate-200 bg-[var(--glass-bg)] rounded-[1.25rem] p-5 border border-white/[0.08] outline-none placeholder:text-[var(--text-muted)] placeholder:opacity-60 focus:ring-2 focus:ring-indigo-500/30 focus:border-[var(--accent)]/30 focus:bg-[var(--glass-bg-strong)] transition-all resize-none"
                  />
                  {/* Summary chips */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    <button type="button" onClick={() => { setDirection(-1); setCurrentStep(0); }} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/15 text-blue-300 text-xs font-semibold hover:bg-blue-500/25 transition-colors border border-blue-500/20">
                      <User size={12} />{formState.name}
                    </button>
                    <button type="button" onClick={() => { setDirection(-1); setCurrentStep(1); }} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/15 text-purple-300 text-xs font-semibold hover:bg-purple-500/25 transition-colors border border-purple-500/20">
                      <Lightbulb size={12} />{formState.interest}
                    </button>
                    <button type="button" onClick={() => { setDirection(-1); setCurrentStep(2); }} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/25 transition-colors border border-emerald-500/20">
                      <Mail size={12} />{formState.email}
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 mt-auto">
            <motion.button
              type="button"
              onClick={goBack}
              whileHover={currentStep > 0 ? { x: -3 } : {}}
              whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                currentStep === 0
                  ? 'opacity-0 pointer-events-none'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass-bg-strong)]'
              }`}
            >
              <ArrowLeft size={16} />
              Back
            </motion.button>

            {currentStep < steps.length - 1 ? (
              <motion.button
                type="button"
                onClick={goNext}
                disabled={!canProceed()}
                whileHover={canProceed() ? { scale: 1.05 } : {}}
                whileTap={canProceed() ? { scale: 0.95 } : {}}
                className={`
                  group flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300
                  ${canProceed()
                    ? 'bg-[var(--accent)] text-[var(--bg-base)] font-bold hover:opacity-90'
                    : 'bg-[var(--glass-bg-strong)] text-[var(--text-muted)] cursor-not-allowed border border-[var(--glass-border)]'
                  }
                `}
              >
                Continue
                <ArrowRight size={16} className={canProceed() ? "group-hover:translate-x-0.5 transition-transform" : ""} />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                disabled={status === 'submitting' || !formState.name || !formState.email}
                whileHover={formState.name && formState.email ? { scale: 1.05 } : {}}
                whileTap={formState.name && formState.email ? { scale: 0.95 } : {}}
                className={`
                  group relative flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 overflow-hidden
                  ${!formState.name || !formState.email
                    ? 'bg-[var(--glass-bg-strong)] text-[var(--text-muted)] cursor-not-allowed border border-[var(--glass-border)]'
                    : 'bg-[var(--accent)] text-[var(--bg-base)] font-bold hover:opacity-90'
                  }
                `}
              >
                {status === 'submitting' ? (
                  <><Loader2 size={16} className="animate-spin" />Sending...</>
                ) : (
                  <>
                    <Rocket size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    Launch Request
                  </>
                )}
              </motion.button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NaturalForm;
