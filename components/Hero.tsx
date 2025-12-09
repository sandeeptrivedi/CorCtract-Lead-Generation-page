import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { QuoteForm } from './QuoteForm';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Image with Overlay - Optimized for Speed */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1920"
          srcSet="
            https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=640 640w,
            https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1024 1024w,
            https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1920 1920w
          "
          sizes="100vw"
          alt="Modern luxury kitchen renovation in New Jersey" 
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/85 to-brand-blue/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-accent mr-2 animate-pulse"></span>
              <span className="text-brand-accent font-bold text-xs sm:text-sm uppercase tracking-wider">
                Serving Middlesex County, NJ
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Premium Kitchen Remodeling Without the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">"Subcontractor Roulette"</span>
            </h1>

            {/* Sub-Headline */}
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              100% In-House Employees. No Random Crews. Just Quality Craftsmanship for Your Spotswood Home.
            </p>

            {/* Trust Bullets */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-slate-100 font-medium">
              <div className="flex items-center">
                <CheckCircle2 className="text-brand-accent mr-2" size={20} />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-brand-accent mr-2" size={20} />
                <span>Background Checked Team</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-brand-accent mr-2" size={20} />
                <span>On-Time Guarantee</span>
              </div>
            </div>

            {/* Mobile-only CTA to scroll to form if needed */}
            <div className="lg:hidden">
              <Button onClick={onCtaClick} fullWidth className="shadow-xl">
                Get An Estimate
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            
            <p className="hidden lg:block text-slate-400 text-sm mt-4 italic">
              * Limited consultation slots available for {new Date().toLocaleString('default', { month: 'long' })}.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-5 w-full">
            <QuoteForm title="Get Your Free Estimate" />
          </div>

        </div>
      </div>
    </section>
  );
};