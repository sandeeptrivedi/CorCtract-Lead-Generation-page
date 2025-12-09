import React from 'react';
import { Check } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

export const LeadForm: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 skew-x-12 transform translate-x-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Ready to Love Your Kitchen Again?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Schedule your free, no-obligation design consultation. We'll listen to your vision, measure your space, and give you honest advice—not a sales pitch.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-brand-accent/20 p-2 rounded-full mr-4">
                  <Check className="text-brand-accent" size={24} />
                </div>
                <span className="font-medium text-lg">Free Initial Design Consultation</span>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-accent/20 p-2 rounded-full mr-4">
                  <Check className="text-brand-accent" size={24} />
                </div>
                <span className="font-medium text-lg">Detailed Project Timeline</span>
              </div>
              <div className="flex items-center">
                <div className="bg-brand-accent/20 p-2 rounded-full mr-4">
                  <Check className="text-brand-accent" size={24} />
                </div>
                <span className="font-medium text-lg">0% Financing Available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div>
            <QuoteForm title="Start Your Project" />
          </div>

        </div>
      </div>
    </section>
  );
};