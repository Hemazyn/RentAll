'use client';
import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Wallet, Globe } from 'lucide-react';
import 'animate.css';

export default function Countries() {
  const countries = [
    { flag: '🇳🇬', name: 'Nigeria' },
    { flag: '🇰🇪', name: 'Kenya' },
    { flag: '🇬🇭', name: 'Ghana' },
    { flag: '🇿🇦', name: 'South Africa' },
    { flag: '🇺🇬', name: 'Uganda' },
  ];
  const paymentMethods = ['Mobile Money (M-Pesa, MTN MoMo, Airtel Money, etc.)', 'Bank Transfers'];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

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
    <section ref={sectionRef} className="relative py-10 md:py-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full blur-3xl z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-5 md:mb-14">
          <h2 className={`text-xl md:text-4xl font-semibold md:font-extrabold text-black mb-2 md:mb-4 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>Available Where You Are</h2>
          <p className={`text-base md:text-lg text-gray-700 max-w-2xl mx-auto ${isVisible ? 'animate__animated animate__fadeInDown animate__delay-0-5s' : 'opacity-0'}`}>We're continuously expanding to bring smart rentals to more communities across Africa.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="lg:col-span-3">
            <div className={`flex items-center gap-3 mb-6 ${isVisible ? 'animate__animated animate__fadeInLeft' : 'opacity-0'}`}>
              <Globe className="w-5 md:w-7 h-5 md:h-7 text-[#E60023]" />
              <h3 className="text-lg md:-2xl font-semibold text-black">We Proudly Serve</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className={`group bg-white/90 border border-[#E60023]/10 rounded-2xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:border-[#E60023]/50 hover:bg-[#E60023]/10 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'animate__animated animate__zoomIn' : 'opacity-0'}`}
                  style={{
                    animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                  }}
                >
                  <div className="text-4xl md:text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">{country.flag}</div>
                  <p className="font-semibold text-black">{country.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`lg:col-span-2 ${isVisible ? 'animate__animated animate__fadeInRight animate__delay-1s' : 'opacity-0'}`}>
            <div className="bg-white/90 border border-[#E60023]/30 p-8 rounded-2xl shadow-xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-2.5 md:mb-5">
                <Wallet className="w-5 md:w-7 h-5 md:h-7 text-[#E60023]" />
                <h3 className="text-lg md:text-2xl font-semibold md:font-semibold text-black">Secure Payments</h3>
              </div>
              <p className="text-gray-700 mb-2.5 md:mb-6">Fast, safe, and designed for local convenience.</p>
              <ul className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}