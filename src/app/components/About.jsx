'use client';
import { useEffect, useRef, useState } from 'react';
import 'animate.css';

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
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

  return (
    <section ref={sectionRef} id="about" className="py-8 md:py-16 bg-gradient-to-br from-white via-[#fff0f3] to-[#ffe5ea] relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#E60023]/10 rounded-full blur-3xl z-0" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-xl md:text-4xl font-semibold md:font-bold mb-3 md:mb-6 leading-snug tracking-tight ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'} text-black`}>
            Empowering Access
            <br />
            <span className="text-gray-800 text-lg md:text-2xl mt-1 md:mt-2 block font-bold">Through Rentals</span>
          </h2>

          <p className={`text-base sm:text-lg md:text-xl text-gray-700 mb-3 md:mb-10 leading-relaxed ${isVisible ? 'animate__animated animate__fadeIn animate__delay-1s' : 'opacity-0'}`}>RentAll is a proudly African-built platform bringing flexible access to everyday needs — from transportation to housing and services. We're here to support local businesses, unlock income, and simplify life through smart rentals.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-4 md:mt-12">
            {[
              { label: 'Countries Served', value: '5' },
              { label: 'Active Users', value: '50K+' },
              { label: 'Listings', value: '10K+' },
            ].map((item, i) => (
              <div key={i} className={`bg-white/90 rounded-2xl shadow-md p-6 sm:p-8 flex flex-col items-center ${isVisible ? `animate__animated animate__fadeInUp animate__delay-${i + 1}s` : 'opacity-0'}`}>
                <div className="text-4xl sm:text-5xl font-extrabold text-black mb-2 drop-shadow">{item.value}</div>
                <p className="text-gray-600 text-sm sm:text-base font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <a href="#" className={`inline-block mt-12 bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] hover:from-[#b8001a] hover:to-[#ff4d6d] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full font-semibold shadow-lg transition-all text-sm sm:text-base ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-3s' : 'opacity-0'}`}>
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
}