import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';

const App: React.FC = () => {
  // Ref to scroll to the primary form (Hero) when buttons are clicked
  const heroFormRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    // If on mobile where Hero form might be slightly down, this ensures it comes into view
    // Or simpler, just scroll to top for hero form
    if (window.innerWidth < 1024 && heroFormRef.current) {
        // Scroll specifically to the form element if possible, or just the section
        heroFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header onCtaClick={scrollToForm} />
      <main>
        <div ref={heroFormRef}>
          <Hero onCtaClick={() => {
             // For the mobile button inside Hero, we want to scroll specifically to the form part of the hero
             // But simpler is just to let it stay or maybe scroll slightly down. 
             // Since the form is IN the hero, we can just assume they see it or scroll a tiny bit.
             const formElement = heroFormRef.current?.querySelector('form');
             if(formElement) formElement.scrollIntoView({ behavior: 'smooth' });
          }} />
        </div>
        <Benefits />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
      <StickyMobileCTA onCtaClick={scrollToForm} />
    </div>
  );
};

export default App;