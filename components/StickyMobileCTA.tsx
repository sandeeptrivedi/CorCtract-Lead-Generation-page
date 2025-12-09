import React from 'react';
import { Button } from './Button';

interface StickyMobileCTAProps {
  onCtaClick: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onCtaClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] safe-pb">
      <Button 
        onClick={onCtaClick} 
        fullWidth 
        className="shadow-xl text-lg font-extrabold py-3.5 bg-brand-accent hover:bg-brand-accentHover text-white transform active:scale-95 transition-transform"
      >
        Get An Estimate
      </Button>
    </div>
  );
};