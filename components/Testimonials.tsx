import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialProps } from '../types';

const reviews: TestimonialProps[] = [
  {
    id: 1,
    name: "Sarah & Mike T.",
    location: "Spotswood, NJ",
    quote: "I was terrified of having strangers in my house while I was at work. The CorContracting crew was professional, polite, and they left the place spotless every single day. The new cabinets are flawless.",
    rating: 5,
  },
  {
    id: 2,
    name: "James D.",
    location: "East Brunswick, NJ",
    quote: "Finally a contractor who does what they say. No subcontractors, no excuses. They finished my kitchen in 3 weeks exactly as promised. The attention to detail on the backsplash tile was impressive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Linda K.",
    location: "Monroe, NJ",
    quote: "We interviewed 4 contractors. CorContracting was the only one who didn't give us a vague estimate. The price they quoted was exactly what we paid. No hidden fees, no 'surprise' change orders.",
    rating: 5,
  },
  {
    id: 4,
    name: "The Peterson Family",
    location: "Old Bridge, NJ",
    quote: "I have asthma, so dust was a huge concern. Their dust protection system is no joke. They sealed off the kitchen completely. I didn't have a single issue during the 2-week remodel.",
    rating: 5,
  },
  {
    id: 5,
    name: "Mark R.",
    location: "Sayreville, NJ",
    quote: "Quality craftsmanship. You can tell their guys take pride in their work. The crown molding cuts are perfect, and the custom island they built is the highlight of our home.",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view to adjust items per slide
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerSlide = isMobile ? 1 : 2;
  const maxIndex = Math.ceil(reviews.length / itemsPerSlide) - 1;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Get current visible reviews
  const getVisibleReviews = () => {
    const start = activeIndex * itemsPerSlide;
    // On the last slide for desktop, if we have an odd number, we might need to handle the slice carefully
    // But slice handles out of bounds gracefully.
    return reviews.slice(start, start + itemsPerSlide);
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4">
            What Your Neighbors Are Saying
          </h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-brand-accent text-brand-accent" size={24} />
              ))}
            </div>
            <span className="text-slate-600 font-semibold">5.0 Average Rating in Middlesex County</span>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {visibleReviews.map((review) => (
                <div key={review.id} className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col h-full">
                  <Quote className="absolute top-6 right-8 text-brand-accent/20" size={64} />
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="fill-brand-accent text-brand-accent w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic text-lg mb-6 relative z-10 flex-grow">"{review.quote}"</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-bold text-brand-blue">{review.name}</p>
                      <p className="text-slate-500 text-sm">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-8 bg-white border border-slate-200 text-brand-blue p-3 rounded-full shadow-lg hover:bg-slate-50 hover:text-brand-accent transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-8 bg-white border border-slate-200 text-brand-blue p-3 rounded-full shadow-lg hover:bg-slate-50 hover:text-brand-accent transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(Math.ceil(reviews.length / itemsPerSlide))].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-brand-accent w-6' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};