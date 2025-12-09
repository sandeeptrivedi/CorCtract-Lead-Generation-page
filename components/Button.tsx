import React from 'react';
import { ButtonProps } from '../types';

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-bold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent shadow-sm uppercase tracking-wide";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-accent hover:bg-brand-accentHover",
    secondary: "border-transparent text-brand-blue bg-white hover:bg-slate-100",
    outline: "border-brand-accent text-brand-accent bg-transparent hover:bg-brand-accent/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};