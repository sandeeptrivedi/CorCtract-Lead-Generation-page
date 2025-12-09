import React, { useState } from 'react';
import { Button } from './Button';
import { Lock, Check } from 'lucide-react';

interface QuoteFormProps {
  className?: string;
  title?: string;
  id?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ 
  className = '', 
  title = "Get Your Free Estimate",
  id
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
       <div id={id} className={`bg-white rounded-2xl p-8 shadow-2xl text-slate-800 text-center ${className}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-green-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-brand-blue mb-2">Request Received!</h3>
        <p className="text-slate-600">
          Thank you, {formData.name}. We'll be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <div id={id} className={`bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-slate-800 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-brand-blue">{title}</h3>
        <p className="text-slate-500 text-sm mt-1">Fill out the form below to get started.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
            placeholder="(732) 555-0199"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="projectDetails" className="block text-sm font-semibold text-slate-700 mb-1">Project Details (Optional)</label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all resize-none"
            placeholder="I'm interested in..."
            value={formData.projectDetails}
            onChange={handleChange}
          />
        </div>
        
        <Button type="submit" fullWidth disabled={isSubmitting} className="mt-2 text-lg">
          {isSubmitting ? 'Sending...' : 'Schedule My Free Estimate'}
        </Button>

        <div className="flex items-center justify-center mt-4 text-xs text-slate-400">
          <Lock size={12} className="mr-1" />
          <span>Your information is safe. We never sell your data.</span>
        </div>
      </form>
    </div>
  );
};