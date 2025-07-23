'use client';
import { useEffect, useRef, useState } from 'react';
import 'animate.css';
import { Link } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    title: 'Rent a Car',
    description: `Beyond standard car rentals, RentAll offers unique vehicles and peer-to-peer rentals, expanding your options beyond traditional rental companies.`,
    image: '/car.png',
    bgColor: 'bg-[#f3e8ff]',
  },
  {
    title: 'Rent Equipment',
    description: `Don't just rent tools, rent specialized equipment for hobbies, events, and unique projects. RentAll is your source for rentals beyond the ordinary.`,
    image: '/equipment.png',
    bgColor: 'bg-[#fff7e6]',
  },
  {
    title: 'Become a Vendor',
    description: `RentAll empowers you to be your own boss. Set your own prices, availability, and rental terms.`,
    image: '/vendor.png',
    bgColor: 'bg-[#e6fff7]',
  },
  {
    title: 'Rent Anything, Anywhere',
    description: `RentAll's hyper-local approach means you're supporting your community while finding the perfect rental.`,
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
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-6 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-xl md:text-4xl font-extrabold text-center mb-6 md:mb-12 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
          <span className="text-black/80 font-poppins">What Can You Do With RentAll?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className={`relative h-[400px] p-4 flex flex-col justify-start lg:justify-between ${feature.bgColor} rounded-2xl shadow-lg overflow-hidden ${isVisible ? `animate__animated animate__fadeInUp animate__delay-${idx * 0.3}s` : 'opacity-0'}`}>
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold text-[#1a0007] mb-0.5">{feature.title}</h3>
                <p className="text-[#2d0b13]/50 text-xs md:text-sm mb-4">{feature.description}</p>
              </div>
              <img src={feature.image} alt={feature.title} className="object-contain fixed top-[30%] lg:top-[20%] right-0 w-full md:w-4/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
