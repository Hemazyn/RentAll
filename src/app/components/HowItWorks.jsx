'use client';
import { useEffect, useRef, useState } from 'react';
import 'animate.css';
import { User, Store } from 'lucide-react';

export default function HowItWorks() {
  const guestSteps = ['Browse & search what you need near you', 'Book instantly or send a request', 'Pay securely with mobile money or bank transfer', 'Enjoy, return, and rate the experience'];
  const vendorSteps = ['List your item or service in minutes', 'Set your price, schedule, and availability', 'Accept bookings and receive payments directly'];
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
    <section ref={sectionRef} id="how-it-works" className="py-5 md:py-20 bg-gradient-to-br from-[#ffe5ea] via-[#fff0f3] to-[#ffe5ea] m-3 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className={`text-xl md:text-4xl font-extrabold text-gray-700 text-center mb-14 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>How RentAll Works</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className={`relative bg-white border border-[#E60023]/10 rounded-2xl px-5 pb-5 pt-10 md:p-10 transition-shadow duration-300 ${isVisible ? 'animate__animated animate__fadeInLeft animate__delay-0-5s' : 'opacity-0'}`}>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white w-14 h-14 rounded-full flex items-center justify-center border border-primary/90">
              <User className="w-5 md:w-7 h-5 md:h-7 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-8 text-center text-gray-600">
              Guest Mode <span className="text-gray-600 text-base">(Renting)</span>
            </h3>
            <ol className="space-y-7">
              {guestSteps.map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex-shrink-0 w-3 h-3 bg-gray-800 rounded-full flex items-center justify-center mr-4"></span>
                  <span className="text-[#2d0b13]/90 text-base">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className={`relative bg-white rounded-2xl px-5 pb-5 pt-10 md:p-10 transition-shadow duration-300 ${isVisible ? 'animate__animated animate__fadeInRight animate__delay-1s' : 'opacity-0'}`}>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white w-14 h-14 rounded-full flex items-center justify-center border border-primary/90">
              <Store className="w-5 md:w-7 h-5 md:h-7 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-8 text-center text-gray-600">
              Vendor Mode <span className="text-gray-600 text-base">(Earning)</span>
            </h3>
            <ol className="space-y-7">
              {vendorSteps.map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="flex-shrink-0 w-3 h-3 bg-gray-800 rounded-full flex items-center justify-center mr-4"></span>
                  <span className="text-[#2d0b13]/90 text-base">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className={`text-center mt-7 md:mt-14 text-base md:text-lg text-gray-500 ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1-5s' : 'opacity-0'}`}>✅ Switch between Guest and Vendor modes anytime.</p>
      </div>
    </section>
  );
}