'use client';
import { useEffect, useRef, useState } from 'react';
import 'animate.css';

const features = [
  {
    title: 'Rent a Car',
    description: 'Find and rent cars for any occasion, anytime, anywhere.',
    image: '/car.png',
    bgColor: 'bg-[#f3e8ff]',
  },
  {
    title: 'Rent Equipment',
    description: 'From tools to tech, rent what you need, when you need it.',
    image: '/equipment.png',
    bgColor: 'bg-[#fff7e6]',
  },
  {
    title: 'Become a Vendor',
    description: 'List your items or services and start earning as a RentAll vendor.',
    image: '/vendor.png',
    bgColor: 'bg-[#e6fff7]',
  },
  {
    title: 'Rent Anything, Anywhere',
    description: 'Place orders and rent anything, anytime, anywhere with ease.',
    image: '/order-s.png',
    bgColor: 'bg-[#ffe6f7]',
  },
];

export default function FeaturesGrid() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-6 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-6 md:mb-12 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
          <span className="bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] bg-clip-text text-transparent font-inter">
            What Can You Do With RentAll?
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col ${feature.bgColor} rounded-2xl shadow-lg overflow-hidden ${isVisible ? `animate__animated animate__fadeInUp animate__delay-${idx * 0.3}s` : 'opacity-0'}`}>
              <div className="flex-grow">
                <img src={feature.image} alt={feature.title} className="w-full object-contain" />
              </div>
              <div className="p-6 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-[#1a0007] mb-2">{feature.title}</h3>
                  <p className="text-[#2d0b13]/80 mb-4">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}