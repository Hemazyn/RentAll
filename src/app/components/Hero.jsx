'use client';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import 'animate.css';
import { Navigation } from '../components';

export default function Hero() {
  const rotatingWords = ['Anything.', 'Anytime.', 'Anywhere.'];
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % rotatingWords.length), 5000);
    return () => clearInterval(id);
  }, []);

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

  return (
    <div className="flex flex-col m-3 md:m-6 relative bg-gradient-to-br from-[#1a0007] via-[#080405] to-[#2d0b13] rounded-lg z-20">
      <Navigation />
      <section ref={sectionRef} className="relative min-h-4/5 py-10 flex flex-col justify-center w-full ">
        <div className="relative z-10 flex flex-col items-center text-center px-4 md:py-16">
          <h1 className={`text-2xl md:text-8xl font-extrabold text-white leading-tight mb-2 md:mb-6 max-w-3xl mx-auto ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
            Rent{' '}
            <span key={rotatingWords[current]} className="inline-block text-[#FFD4DB] animate__animated animate__fadeIn">
              {rotatingWords[current]}
            </span>
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl text-white/80 mb-4 md:mb-10 max-w-2xl mx-auto ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>From cars and apartments to equipment and services—RentAll brings the world to your fingertips.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-2 md:mb-6">
            <a href="#" className={`inline-flex items-center justify-center bg-[#E60023] hover:bg-[#b8001a] text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:shadow-[#E60023]/60 hover:scale-[1.05] transition text-sm md:text-base ${isVisible ? 'animate__animated animate__fadeInLeft animate__delay-2s' : 'opacity-0'}`}>
              Download on App Store <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="#" className={`inline-flex items-center justify-center border border-white text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-white/15 hover:shadow-white/50 hover:scale-[1.05] transition text-sm md:text-base ${isVisible ? 'animate__animated animate__fadeInRight animate__delay-2s' : 'opacity-0'}`}>
              Get it on Google Play <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-4">
            {[
              { value: '5+', label: 'African countries', delay: '2s' },
              { value: '100K+', label: 'Happy users', delay: '2200ms' },
              { value: '4.9/5', label: 'App Store rating', delay: '2400ms' },
              { value: 'Secure', label: 'Mobile money & bank payments', delay: '2600ms' },
            ].map(({ value, label, delay }, index) => (
              <div key={value} className={`min-w-[120px] text-white ${isVisible ? 'animate__animated animate__zoomIn' : 'opacity-0'}`} style={{ animationDelay: isVisible ? delay : '0s' }}>
                <div className="text-2xl sm:text-3xl font-bold hover:text-[#E60023] transition-colors">{value}</div>
                <div className="text-white/70 text-sm sm:text-base">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <svg className={`absolute bottom-0 left-0 w-full h-24 sm:h-32 text-[#1a0007] rounded-b-lg opacity-40 ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`} viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </section>
    </div>
  );
}