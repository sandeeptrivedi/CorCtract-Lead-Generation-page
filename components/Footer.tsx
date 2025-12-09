import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-700 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-extrabold text-white tracking-tighter">
                Cor<span className="text-brand-accent">Contracting</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Middlesex County's most trusted kitchen remodeling team. We prioritize quality, safety, and reliability by using our own in-house employees.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-brand-accent mr-3 mt-1" />
                <a href="tel:7325550199" className="hover:text-white transition-colors">(732) 555-0199</a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-brand-accent mr-3 mt-1" />
                <a href="mailto:info@corcontracting.com" className="hover:text-white transition-colors">info@corcontracting.com</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-brand-accent mr-3 mt-1" />
                <span>Serving Spotswood, East Brunswick,<br/>Monroe, and surrounding areas.</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Kitchen Remodeling</li>
              <li>Bathroom Renovations</li>
              <li>Deck Construction</li>
              <li>Basement Finishing</li>
              <li>Home Additions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} CorContracting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};