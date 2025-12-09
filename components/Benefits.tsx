import React from 'react';
import { ShieldCheck, Sparkles, FileText } from 'lucide-react';
import { BenefitProps } from '../types';

const benefits: BenefitProps[] = [
  {
    id: 1,
    title: "Who is in my house?",
    description: "Your home is your sanctuary. We never use random day laborers. Our team consists of full-time, background-checked employees wearing the CorContracting uniform.",
    Icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Will it be a mess?",
    description: "We treat your home better than our own. We use HEPA air scrubbers and floor protection systems to ensure your living space remains dust-free during the remodel.",
    Icon: Sparkles,
  },
  {
    id: 3,
    title: "Will the price change?",
    description: "No surprise bills. We provide detailed, transparent quotes upfront. The price we agree on is the price you pay, barring any major structural discoveries you approve.",
    Icon: FileText,
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-accent font-bold uppercase tracking-wider mb-3 text-sm">The CorContracting Difference</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4">
            Renovate With Total Peace of Mind
          </h3>
          <p className="text-slate-600 text-lg">
            We've solved the biggest headaches homeowners face during remodeling projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-brand-blue rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.Icon className="text-brand-accent" size={32} />
              </div>
              <h4 className="text-xl font-bold text-brand-blue mb-3">{benefit.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};