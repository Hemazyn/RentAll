'use client';
import { useEffect, useRef, useState } from 'react';
import 'animate.css';

export default function About() {
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

  return (
    <section ref={sectionRef} id="about" className="py-10 md:py-24 bg-gradient-to-br from-[#1a0007] via-[#2d0b13] to-[#E60023]/30 relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#E60023]/20 rounded-full blur-3xl z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-extrabold text-white mb-6 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`} style={{ letterSpacing: '.03em' }}>
            <span className="bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#fff] bg-clip-text text-transparent">Empowering Access</span>
            <br />
            <span className="text-white/80 font-bold text-2xl md:text-3xl block mt-2">Through Rentals</span>
          </h2>
          <p className={`text-lg md:text-xl text-white/80 mb-12 ${isVisible ? 'animate__animated animate__fadeIn animate__delay-1s' : 'opacity-0'}`}>RentAll is a proudly African-built platform bringing flexible access to everyday needs — from transportation to housing and services. We're here to support local businesses, unlock income, and simplify life through smart rentals.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className={`bg-white/5 rounded-2xl shadow-lg p-8 flex flex-col items-center ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
              <div className="text-5xl font-extrabold text-[#E60023] mb-2 drop-shadow-lg">5</div>
              <p className="text-white/80 text-base font-medium">Countries Served</p>
            </div>
            <div className={`bg-white/5 rounded-2xl shadow-lg p-8 flex flex-col items-center ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1-5s' : 'opacity-0'}`}>
              <div className="text-5xl font-extrabold text-[#E60023] mb-2 drop-shadow-lg">50K+</div>
              <p className="text-white/80 text-base font-medium">Active Users</p>
            </div>
            <div className={`bg-white/5 rounded-2xl shadow-lg p-8 flex flex-col items-center ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-2s' : 'opacity-0'}`}>
              <div className="text-5xl font-extrabold text-[#E60023] mb-2 drop-shadow-lg">10K+</div>
              <p className="text-white/80 text-base font-medium">Listings</p>
            </div>
          </div>
          <a href="#" className={`inline-block mt-12 bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] hover:from-[#b8001a] hover:to-[#ff4d6d] text-white px-10 py-4 rounded-full font-semibold shadow-xl transition-all text-lg ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-2-5s' : 'opacity-0'}`}>Learn more →</a>
        </div>
      </div>
    </section>
  );
}