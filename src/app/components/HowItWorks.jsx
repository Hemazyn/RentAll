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
    <section ref={sectionRef} id="how-it-works" className="py-10 md:py-20 bg-gradient-to-br from-[#ffe5ea] via-[#fff0f3] to-[#ffe5ea]">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-extrabold text-[#E60023] text-center mb-14 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>How RentAll Works</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className={`relative bg-white border border-[#E60023]/10 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${isVisible ? 'animate__animated animate__fadeInLeft animate__delay-0-5s' : 'opacity-0'}`}>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#E60023] w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white/30"><User className="w-7 h-7 text-white" /></div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#E60023]">Guest Mode <span className="text-[#E60023]/70 text-base">(Renting)</span></h3>
            <ol className="space-y-7">{guestSteps.map((step, index) => (<li key={index} className="flex items-start"><span className="flex-shrink-0 w-9 h-9 bg-[#E60023] text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg shadow-lg">{index + 1}</span><span className="text-[#2d0b13]/90 text-base">{step}</span></li>))}</ol>
          </div>
          <div className={`relative bg-white border border-[#E60023]/10 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${isVisible ? 'animate__animated animate__fadeInRight animate__delay-1s' : 'opacity-0'}`}>
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#E60023] w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white/30"><Store className="w-7 h-7 text-white" /></div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-[#E60023]">Vendor Mode <span className="text-[#E60023]/70 text-base">(Earning)</span></h3>
            <ol className="space-y-7">{vendorSteps.map((step, index) => (<li key={index} className="flex items-start"><span className="flex-shrink-0 w-9 h-9 bg-[#E60023] text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg shadow-lg">{index + 1}</span><span className="text-[#2d0b13]/90 text-base">{step}</span></li>))}</ol>
          </div>
        </div>
        <p className={`text-center mt-14 text-lg text-[#E60023]/90 ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1-5s' : 'opacity-0'}`}>✅ Switch between Guest and Vendor modes anytime.</p>
      </div>
    </section>
  );
}