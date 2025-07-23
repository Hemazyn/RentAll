'use client';
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'I listed my camera gear and made my first rental in less than 2 days. Super easy and the payments were fast!',
    author: 'Chidi',
    role: 'Photographer, Nigeria',
  },
  {
    quote: 'Booked a car in Accra in under 10 minutes. RentAll saved me during a work trip. The app is incredibly user-friendly.',
    author: 'Ama',
    role: 'Traveler, Ghana',
  },
  {
    quote: 'As a small business owner, renting out my event equipment on RentAll has opened up a new, consistent revenue stream. Highly recommend!',
    author: 'David',
    role: 'Event Supplier, Kenya',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isVisible]);

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section ref={sectionRef} id="testimonials" className="py-6 md:py-12 bg-gradient-to-br from-white via-[#fff0f3] to-[#ffe5ea] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] opacity-80" />
      <div className="container mx-auto px-6">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 md:mb-12 text-black transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-gray-700">Hear from Our Community</span>
        </h2>

        <div className="relative max-w-2xl mx-auto min-h-[320px]">
          {testimonials.map((testimonial, index) => (
            <figure key={index} className={`absolute inset-0 w-full bg-white/80 border border-[#E60023]/10 rounded-2xl shadow-2xl p-6 sm:p-10 flex flex-col items-center transition-all duration-700 ease-in-out transform ${index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'}`} style={{ backdropFilter: 'blur(6px)' }}>
              <Quote className="absolute top-5 right-5 w-14 h-14 text-[#E60023]/10" />
              <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-700 italic font-medium text-center mb-8 leading-relaxed z-10">"{testimonial.quote}"</blockquote>
              <figcaption className="flex items-center mt-auto w-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#E60023] via-[#ff4d6d] to-[#E60023] p-1 shadow-md flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-lg sm:text-xl text-[#E60023]">{testimonial.author.charAt(0)}</div>
                </div>
                <div className="ml-4">
                  <cite className="font-semibold text-black not-italic text-base sm:text-lg">{testimonial.author}</cite>
                  <p className="text-slate-500 text-sm">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${idx === currentIndex ? 'bg-[#E60023] border-[#E60023]' : 'bg-[#E60023]/20 border-[#E60023]/10 hover:bg-[#E60023]/40'}`} aria-label={`Go to testimonial ${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}