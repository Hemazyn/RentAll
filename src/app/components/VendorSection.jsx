'use client';
import { useEffect, useRef, useState } from 'react';
import 'animate.css';
import { BadgeDollarSign, Clock, Percent } from 'lucide-react';

export default function VendorSection() {
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
    <section ref={sectionRef} id="vendor" className="py-10 md:py-20 bg-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-10 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] bg-clip-text text-transparent">Become a Vendor</span>
          </h2>
          <div className={`bg-white border border-[#E60023]/10 p-8 md:p-12 rounded-2xl shadow-xl ${isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#E60023]">Turn Your Assets into Income</h3>
            <p className="text-lg mb-10 text-[#2d0b13]/80">Join thousands of vendors earning extra income by renting out their cars, apartments, equipment, or offering services on RentAll.</p>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className={`text-center ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-0-5s' : 'opacity-0'}`}>
                <div className="flex items-center justify-center mb-2"><Percent className="w-8 h-8 text-[#E60023] mr-2" /><span className="text-4xl font-extrabold text-[#E60023]">0%</span></div>
                <p className="text-base text-[#2d0b13]/80">Listing Fees</p>
              </div>
              <div className={`text-center ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1s' : 'opacity-0'}`}>
                <div className="flex items-center justify-center mb-2"><Clock className="w-8 h-8 text-[#E60023] mr-2" /><span className="text-4xl font-extrabold text-[#E60023]">24hr</span></div>
                <p className="text-base text-[#2d0b13]/80">Payment Transfer</p>
              </div>
              <div className={`text-center ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-1-5s' : 'opacity-0'}`}>
                <div className="flex items-center justify-center mb-2"><BadgeDollarSign className="w-8 h-8 text-[#E60023] mr-2" /><span className="text-4xl font-extrabold text-[#E60023]">100%</span></div>
                <p className="text-base text-[#2d0b13]/80">Control Your Pricing</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`bg-[#E60023] text-white px-7 py-3 rounded-full font-semibold cursor-pointer hover:bg-[#b8001a] transition-colors text-lg shadow ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-2s' : 'opacity-0'}`}>Start Earning Today</button>
              <button className={`border-2 border-[#E60023] text-[#E60023] px-7 py-3 rounded-full font-semibold cursor-pointer hover:bg-[#E60023] hover:text-white transition-all text-lg shadow ${isVisible ? 'animate__animated animate__fadeInUp animate__delay-2-5s' : 'opacity-0'}`}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}