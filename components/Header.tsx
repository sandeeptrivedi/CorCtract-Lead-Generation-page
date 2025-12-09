import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-brand-blue tracking-tighter">
                Cor<span className="text-brand-accent">Contracting</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase -mt-1">
                Kitchens & Renovations
              </span>
            </div>
          </div>

          {/* Desktop Nav/CTA */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="tel:7325550199" className="flex items-center text-slate-600 hover:text-brand-accent font-semibold transition-colors group">
              <div className="p-2 bg-slate-100 rounded-full group-hover:bg-brand-accent/10 mr-3">
                <Phone size={18} className="text-brand-accent" />
              </div>
              (732) 555-0199
            </a>
            <Button onClick={onCtaClick}>
              Get An Estimate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-brand-accent p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col space-y-4 animate-fade-in-down">
           <a href="tel:7325550199" className="flex items-center justify-center text-slate-800 font-bold text-lg py-2">
              <Phone size={20} className="text-brand-accent mr-2" />
              (732) 555-0199
            </a>
            <Button onClick={() => {
              setMobileMenuOpen(false);
              onCtaClick();
            }} fullWidth>
              Get An Estimate
            </Button>
        </div>
      )}
    </header>
  );
};