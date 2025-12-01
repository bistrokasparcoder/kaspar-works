import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 ring-1 ring-slate-900",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm hover:shadow-md",
    outline: "border border-slate-900/10 text-slate-900 hover:bg-slate-50",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50",
    glass: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 shadow-lg"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} group`}
      {...props}
    >
      {/* Shimmer effect for primary button */}
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
      )}
      <span className="relative z-20 flex items-center">{children}</span>
    </button>
  );
};

export default Button;