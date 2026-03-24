import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, Loader2, ArrowRight, ArrowLeft, Sparkles, User, Mail, Lightbulb, MessageSquare } from 'lucide-react';

interface NaturalFormProps {
  onClose?: () => void;
  className?: string;
}

const steps = [
  { id: 'name', label: 'Your Name', icon: User, placeholder: 'e.g. John Doe' },
  { id: 'interest', label: 'What are you building?', icon: Lightbulb, placeholder: '' },
  { id: 'email', label: 'Your Email', icon: Mail, placeholder: 'you@company.com' },
  { id: 'details', label: 'Tell us more', icon: MessageSquare, placeholder: 'Share your vision, timeline, or any details...' },
];

const interestOptions = [
  { label: "Mobile App", emoji: "📱", color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-400" },
  { label: "Web Platform", emoji: "🌐", color: "from-purple-500/20 to-violet-500/20 border-purple-500/30 hover:border-purple-400" },
  { label: "Spiritual Tool", emoji: "✨", color: "from-amber-500/20 to-yellow-500/20 border-amber-500/30 hover:border-amber-400" },
  { label: "AI Solution", emoji: "🤖", color: "from-emerald-500/20 to-green-500/20 border-emerald-500/30 hover:border-emerald-400" },
  { label: "Sports Platform", emoji: "🏏", color: "from-lime-500/20 to-green-500/20 border-lime-500/30 hover:border-lime-400" },
  { label: "Other Project", emoji: "🚀", color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 hover:border-pink-400" },
];

const NaturalForm: React.FC<NaturalFormProps> = ({ onClose, className = '' }) => {
  const [currentStep, setCurrentStep] = useState(0);
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
    const timer = setTimeout(() => {
      if (currentStep === 3) {
        textareaRef.current?.focus();
      } else if (currentStep !== 1) {
        inputRef.current?.focus();
      }
    }, 400);
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
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
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
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          interest: formState.interest,
          details: formState.details || 'No additional details provided',
          _subject: `New Project Inquiry: ${formState.interest} from ${formState.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try emailing us directly at kaspar@kaspar.works');
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center text-center py-10 ${className}`}>
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-green-500/30 rotate-3">
            <CheckCircle className="text-white w-10 h-10" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center shadow-lg -rotate-12">
            <Sparkles className="text-white w-4 h-4" />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">You're all set!</h3>
        <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed">
          Thanks, <span className="text-white font-semibold">{formState.name}</span>. We'll reach out about your <span className="text-white font-medium">{formState.interest.toLowerCase()}</span> project soon.
        </p>
        {onClose ? (
          <button
            onClick={onClose}
            className="px-8 py-3 bg-white text-slate-900 rounded-2xl font-medium hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            Close
          </button>
        ) : (
          <button
            onClick={() => {
              setStatus('idle');
              setCurrentStep(0);
              setFormState({ name: '', interest: '', email: '', details: '' });
            }}
            className="text-slate-500 hover:text-white text-sm font-medium transition-colors underline underline-offset-4"
          >
            Send another message
          </button>
        )}
      </div>
    );
  }

  const step = steps[currentStep];
  const StepIcon = step.icon;
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className={className}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Sparkles className="text-white w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Start a Project</span>
          </div>
          <span className="text-xs font-bold text-slate-500 tabular-nums">{currentStep + 1} / {steps.length}</span>
        </div>
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <form onSubmit={handleSubmit}>
        <div className="min-h-[260px] flex flex-col justify-between">
          <div className="flex-1">
            {/* Step Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                <StepIcon className="text-slate-300 w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{step.label}</h3>
                {currentStep === 3 && (
                  <p className="text-sm text-slate-500 mt-0.5">Optional — but helps us get started faster</p>
                )}
              </div>
            </div>

            {/* Step 0: Name */}
            {currentStep === 0 && (
              <div className="animate-fade-in-up">
                <input
                  ref={inputRef}
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onKeyDown={handleKeyDown}
                  placeholder={step.placeholder}
                  className="w-full text-2xl md:text-3xl font-bold text-white bg-transparent border-none outline-none placeholder:text-slate-600 placeholder:font-normal caret-blue-400 pb-3 transition-colors"
                />
                <div className="h-[2px] bg-white/10 rounded-full" />
              </div>
            )}

            {/* Step 1: Interest Selection */}
            {currentStep === 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 animate-fade-in-up">
                {interestOptions.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => {
                      setFormState({ ...formState, interest: option.label });
                      setTimeout(() => setCurrentStep(2), 300);
                    }}
                    className={`
                      group relative p-4 rounded-2xl border text-left transition-all duration-300
                      bg-gradient-to-br ${option.color}
                      ${formState.interest === option.label
                        ? 'ring-2 ring-blue-400 scale-[0.97] shadow-lg shadow-blue-500/20'
                        : 'hover:scale-[1.02] hover:shadow-md'
                      }
                    `}
                  >
                    <span className="text-2xl mb-2 block">{option.emoji}</span>
                    <span className="text-sm font-semibold text-slate-200 block">{option.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Email */}
            {currentStep === 2 && (
              <div className="animate-fade-in-up">
                <input
                  ref={inputRef}
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onKeyDown={handleKeyDown}
                  placeholder={step.placeholder}
                  className="w-full text-2xl md:text-3xl font-bold text-white bg-transparent border-none outline-none placeholder:text-slate-600 placeholder:font-normal caret-blue-400 pb-3 transition-colors"
                />
                <div className="h-[2px] bg-white/10 rounded-full" />
              </div>
            )}

            {/* Step 3: Details */}
            {currentStep === 3 && (
              <div className="animate-fade-in-up">
                <textarea
                  ref={textareaRef}
                  rows={4}
                  value={formState.details}
                  onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                  placeholder={step.placeholder}
                  className="w-full text-base md:text-lg text-slate-200 bg-white/5 rounded-2xl p-5 border border-white/10 outline-none placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 focus:bg-white/10 transition-all resize-none"
                />
              </div>
            )}

            {/* Summary chips when filling later steps */}
            {currentStep > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {formState.name && currentStep > 0 && (
                  <button type="button" onClick={() => setCurrentStep(0)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/15 text-blue-300 text-xs font-semibold hover:bg-blue-500/25 transition-colors border border-blue-500/20">
                    <User size={12} />
                    {formState.name}
                  </button>
                )}
                {formState.interest && currentStep > 1 && (
                  <button type="button" onClick={() => setCurrentStep(1)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/15 text-purple-300 text-xs font-semibold hover:bg-purple-500/25 transition-colors border border-purple-500/20">
                    <Lightbulb size={12} />
                    {formState.interest}
                  </button>
                )}
                {formState.email && currentStep > 2 && (
                  <button type="button" onClick={() => setCurrentStep(2)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/25 transition-colors border border-emerald-500/20">
                    <Mail size={12} />
                    {formState.email}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8">
            <button
              type="button"
              onClick={goBack}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                currentStep === 0
                  ? 'opacity-0 pointer-events-none'
                  : 'text-slate-500 hover:text-white hover:bg-white/10'
              }`}
            >
              <ArrowLeft size={16} />
              Back
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!canProceed()}
                className={`
                  group flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300
                  ${canProceed()
                    ? 'bg-white text-slate-900 hover:bg-blue-500 hover:text-white shadow-lg shadow-white/10 hover:shadow-blue-500/30 hover:scale-105 active:scale-95'
                    : 'bg-white/10 text-slate-600 cursor-not-allowed'
                  }
                `}
              >
                Continue
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === 'submitting' || !formState.name || !formState.email}
                className={`
                  group relative flex items-center gap-2 px-8 py-3 rounded-2xl font-bold text-sm transition-all duration-300 overflow-hidden
                  ${!formState.name || !formState.email
                    ? 'bg-white/10 text-slate-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95'
                  }
                `}
              >
                {formState.name && formState.email && status !== 'submitting' && (
                  <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                )}
                <span className="relative z-20 flex items-center gap-2">
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Request
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NaturalForm;
