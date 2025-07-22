'use client';
import { useEffect, useRef, useState } from 'react';
import { Car, Home, Wrench, Briefcase } from 'lucide-react';
import 'animate.css';

const categories = [
  { icon: <Car className="w-10 h-10 text-[#E60023]" />, title: 'Cars', description: 'Rent reliable vehicles for daily or long-term use.' },
  { icon: <Home className="w-10 h-10 text-[#E60023]" />, title: 'Apartments', description: 'Book short stays or list your space.' },
  { icon: <Wrench className="w-10 h-10 text-[#E60023]" />, title: 'Equipment', description: 'Find and rent tools, tech, and more.' },
  { icon: <Briefcase className="w-10 h-10 text-[#E60023]" />, title: 'Services', description: 'Hire local pros for cleaning, repairs, events, and more.' },
];

export default function Categories() {
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
    <section ref={sectionRef} id="categories" className="relative py-20 bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-4xl font-extrabold text-[#1a0007] text-center mb-12 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
          <span className="bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] bg-clip-text text-transparent">What Can You Rent With RentAll?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className={`group bg-white border-2 border-[#E60023]/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300 hover:border-[#E60023] animate__animated animate__fadeInUp ${isVisible ? `animate__delay-${index === 0 ? '0-5s' : index === 1 ? '1s' : index === 2 ? '1-5s' : '2s'}` : 'opacity-0'}`} style={{ minHeight: 260 }}>
              <div className="mb-4 flex items-center justify-center rounded-full bg-[#E60023]/10 w-16 h-16 group-hover:bg-[#E60023]/20 transition">{category.icon}</div>
              <h3 className="text-xl font-semibold text-[#E60023] mb-2">{category.title}</h3>
              <p className="text-[#2d0b13]/80">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}