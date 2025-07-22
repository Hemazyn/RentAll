'use client';
import { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import 'animate.css';

const testimonials = [
  { quote: 'I listed my camera gear and made my first rental in less than 2 days. Super easy and the payments were fast!', author: 'Chidi', role: 'Photographer, Nigeria' },
  { quote: 'Booked a car in Accra in under 10 minutes. RentAll saved me during a work trip. The app is incredibly user-friendly.', author: 'Ama', role: 'Traveler, Ghana' },
  { quote: 'As a small business owner, renting out my event equipment on RentAll has opened up a new, consistent revenue stream. Highly recommend!', author: 'David', role: 'Event Supplier, Kenya' },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('animate__fadeInRight');
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (entry.intersectionRatio > 0.1) {
            setIsVisible(false);
            setTimeout(() => setIsVisible(true), 100);
          }
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation('animate__fadeOutLeft');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setAnimation('animate__fadeInRight');
      }, 400);
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const activeTestimonial = testimonials[currentIndex];

  const handleDotClick = (index) => {
    if (index === currentIndex) return;
    if (index > currentIndex) {
      setAnimation('animate__fadeOutLeft');
      setTimeout(() => {
        setCurrentIndex(index);
        setAnimation('animate__fadeInRight');
      }, 400);
    } else {
      setAnimation('animate__fadeOutRight');
      setTimeout(() => {
        setCurrentIndex(index);
        setAnimation('animate__fadeInLeft');
      }, 400);
    }
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-10 md:py-20 bg-gradient-to-br from-white via-[#fff0f3] to-[#ffe5ea] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] opacity-80"></div>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-12 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
          <span className="bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] bg-clip-text text-transparent">Hear from Our Community</span>
        </h2>
        <div className="relative max-w-2xl mx-auto" style={{ minHeight: '340px' }}>
          <figure key={currentIndex} className={`absolute top-0 left-0 w-full bg-white/80 border border-[#E60023]/10 rounded-2xl shadow-2xl p-10 overflow-hidden animate__animated ${isVisible ? animation : 'opacity-0'} animate__faster flex flex-col items-center min-h-[320px]`} style={{ backdropFilter: 'blur(6px)' }}>
            <Quote className="absolute top-6 right-6 w-16 h-16 text-[#E60023]/10" />
            <blockquote className="text-xl md:text-2xl text-slate-700 italic font-medium text-center mb-8 relative z-10 leading-relaxed">"{activeTestimonial.quote}"</blockquote>
            <figcaption className="flex items-center mt-auto w-full">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-tr from-[#E60023] via-[#ff4d6d] to-[#E60023] p-1 shadow-md">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-2xl text-[#E60023]">{activeTestimonial.author.charAt(0)}</div>
              </div>
              <div className="ml-4">
                <cite className="font-semibold text-[#E60023] not-italic text-lg">{activeTestimonial.author}</cite>
                <p className="text-slate-500 text-sm">{activeTestimonial.role}</p>
              </div>
            </figcaption>
          </figure>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => handleDotClick(idx)} aria-label={`Go to testimonial ${idx + 1}`} className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${idx === currentIndex ? 'bg-[#E60023] border-[#E60023]' : 'bg-[#E60023]/20 border-[#E60023]/10 hover:bg-[#E60023]/40'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}