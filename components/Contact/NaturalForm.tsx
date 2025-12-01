import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, ChevronDown } from 'lucide-react';

interface NaturalFormProps {
  onClose?: () => void;
  className?: string;
}

// Helper component for dynamic width input
const AutoResizingInput = ({ 
  value, 
  onChange, 
  placeholder, 
  type = "text",
  autoFocus = false
}: { 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  placeholder: string;
  type?: string;
  autoFocus?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="inline-grid items-center justify-start relative mx-2 align-baseline min-w-[100px] my-1">
      {/* Hidden span to dictate width */}
      <span className="invisible col-start-1 row-start-1 font-sans font-bold px-1 whitespace-pre text-2xl md:text-3xl lg:text-4xl pointer-events-none">
        {value || placeholder}
      </span>
      
      {/* Actual Input */}
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={`
            col-start-1 row-start-1 w-full bg-transparent outline-none font-sans font-bold px-1 py-1
            placeholder:text-slate-300 placeholder:font-normal placeholder:opacity-50
            placeholder:transition-all placeholder:duration-300
            focus:placeholder:opacity-30 focus:placeholder:translate-x-2
            text-slate-900 caret-blue-500
            ${value ? 'drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]' : ''}
            transition-all duration-300
            text-2xl md:text-3xl lg:text-4xl
        `}
      />
      
      {/* Active Glowing Underline */}
      <div className={`
        absolute bottom-1 left-0 h-[3px] bg-blue-500 rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${isFocused || value ? 'w-full shadow-[0_0_15px_rgba(59,130,246,0.8)] opacity-100' : 'w-0 opacity-0'}
      `} />
      
      {/* Passive Dashed Underline */}
       <div className={`
        absolute bottom-1 left-0 w-full border-b-2 border-dashed border-slate-200 transition-all duration-300 -z-10
        ${isFocused || value ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}
      `} />
    </div>
  );
};

const NaturalForm: React.FC<NaturalFormProps> = ({ onClose, className = '' }) => {
  const [formState, setFormState] = useState({
    name: '',
    interest: 'Mobile App',
    email: '',
    details: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [showInterestMenu, setShowInterestMenu] = useState(false);
  
  const interestOptions = ["Mobile App", "Web Platform", "Spiritual Tool", "AI Solution", "Community Space", "Other Project"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center text-center animate-fade-in-up py-8 ${className}`}>
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-100">
          <CheckCircle className="text-green-500 w-10 h-10" />
        </div>
        <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Message Sent.</h3>
        <p className="text-slate-500 text-lg max-w-sm mb-10 leading-relaxed">
          Thank you, <span className="text-slate-900 font-semibold">{formState.name}</span>. We're excited to explore {formState.interest.toLowerCase()} solutions with you.
        </p>
        {onClose ? (
            <button 
                onClick={onClose}
                className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10"
            >
                Close
            </button>
        ) : (
             <button 
                onClick={() => {
                    setStatus('idle');
                    setFormState({ name: '', interest: 'Mobile App', email: '', details: '' });
                }}
                className="text-slate-400 hover:text-slate-900 text-sm font-medium transition-colors"
            >
                Send another message
            </button>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-8">
        <h2 className="text-xs font-bold text-blue-600 tracking-widest uppercase mb-3">Start a Project</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Let's create something meaningful.</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 relative">
        {/* Natural Language Form */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed md:leading-[1.6] lg:leading-[1.8] text-slate-500">
          <span className="transition-colors duration-300 hover:text-slate-700">Hello, my name is</span>
          
          <AutoResizingInput 
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder="Your Name"
          />

          <span className="transition-colors duration-300 hover:text-slate-700">. I'm looking to build a</span>

          {/* Custom Dropdown */}
          <div className="inline-block relative mx-2 align-baseline z-50">
            <button
              type="button"
              onClick={() => setShowInterestMenu(!showInterestMenu)}
              className={`
                group flex items-center gap-2 font-sans font-bold transition-all duration-300 border-b-2 px-1
                text-2xl md:text-3xl lg:text-4xl
                ${showInterestMenu 
                  ? 'text-blue-600 border-blue-600' 
                  : 'text-blue-500 border-blue-500/30 hover:border-blue-500 hover:text-blue-600'
                }
                ${formState.interest ? 'drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]' : ''}
              `}
            >
              {formState.interest}
              <ChevronDown size={24} className={`transition-transform duration-300 ${showInterestMenu ? 'rotate-180' : ''}`} />
            </button>

            {/* Overlay to close menu when clicking outside */}
            {showInterestMenu && (
                <div className="fixed inset-0 z-40 cursor-default" onClick={() => setShowInterestMenu(false)} />
            )}

            {/* Menu Items */}
            {showInterestMenu && (
              <div className="absolute left-0 top-full mt-4 w-72 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-2 z-50 animate-fade-in-up origin-top-left flex flex-col gap-1">
                {interestOptions.map((option, idx) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setFormState({ ...formState, interest: option });
                      setShowInterestMenu(false);
                    }}
                    className="text-left px-4 py-3 rounded-xl hover:bg-blue-50 text-slate-600 hover:text-blue-600 font-sans text-lg font-medium transition-all hover:pl-6 hover:shadow-sm"
                    style={{ animationDelay: `${idx * 40}ms` }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          <span className="transition-colors duration-300 hover:text-slate-700">. You can reach me at</span>

          <AutoResizingInput 
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            placeholder="your@email.com"
            type="email"
          />

          <span className="transition-colors duration-300 hover:text-slate-700">.</span>
        </div>

        {/* Optional Details */}
        <div className="group pt-2">
            <textarea
                rows={1}
                value={formState.details}
                onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                className="w-full bg-slate-50 border-none rounded-xl p-4 text-sm md:text-base text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all resize-none overflow-hidden min-h-[60px] focus:min-h-[100px]"
                placeholder="Any specific details? (Optional - feel free to type here)"
            />
        </div>

        {/* Submit Area */}
        <div className="flex items-center justify-end pt-2">
          <button
            type="submit"
            disabled={status === 'submitting' || !formState.name || !formState.email}
            className={`
              group relative px-10 py-4 rounded-full font-bold text-white transition-all duration-300 text-lg overflow-hidden
              ${!formState.name || !formState.email 
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                : 'bg-slate-900 hover:bg-blue-600 shadow-xl shadow-blue-900/10 hover:shadow-blue-600/20 hover:-translate-y-1'
              }
            `}
          >
            {/* Shimmer Effect */}
            {status !== 'submitting' && formState.name && formState.email && (
              <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
            )}
            
            <span className="relative z-20 flex items-center">
              {status === 'submitting' ? (
                <>
                  <Loader2 size={20} className="animate-spin mr-3" />
                  Sending...
                </>
              ) : (
                <>
                  Send Request
                  <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NaturalForm;