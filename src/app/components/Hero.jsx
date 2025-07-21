'use client';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#1a0007] via-[#E60023] to-[#2d0b13] overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-25 md:py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
          Rent Anything.
          <br className="hidden sm:block" />
          Anytime. Anywhere.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">From cars and apartments to equipment and services—RentAll brings the world to your fingertips.</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-12">
          <a href="#" className="inline-flex items-center justify-center bg-[#E60023] hover:bg-[#b8001a] text-white px-7 py-3 rounded-full font-semibold shadow-lg transition text-base sm:text-lg">
            Download on App Store <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          <a href="#" className="inline-flex items-center justify-center border border-white text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-white/10 transition text-base sm:text-lg">
            Get it on Google Play <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-4">
          <div className="min-w-[120px]">
            <div className="text-2xl sm:text-3xl font-bold text-white">5+</div>
            <div className="text-white/70 text-sm sm:text-base">African countries</div>
          </div>
          <div className="min-w-[120px]">
            <div className="text-2xl sm:text-3xl font-bold text-white">100K+</div>
            <div className="text-white/70 text-sm sm:text-base">Happy users</div>
          </div>
          <div className="min-w-[120px]">
            <div className="text-2xl sm:text-3xl font-bold text-white">4.9/5</div>
            <div className="text-white/70 text-sm sm:text-base">App Store rating</div>
          </div>
          <div className="min-w-[120px]">
            <div className="text-2xl sm:text-3xl font-bold text-white">Secure</div>
            <div className="text-white/70 text-sm sm:text-base">Mobile money & bank payments</div>
          </div>
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 w-full h-24 sm:h-32 text-[#1a0007] opacity-40" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,122.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
      </svg>
    </section>
  );
}