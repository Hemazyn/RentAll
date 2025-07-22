'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import 'animate.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { question: 'Can I be both a guest and a vendor?', answer: 'Yes! You can switch roles anytime in the app.' },
    { question: 'How do I get paid as a vendor?', answer: 'Via Mobile Money or Bank Transfer — fast and secure.' },
    { question: 'What does it cost to list my item?', answer: "It's free to list. We only charge a small commission on successful bookings." },
  ];
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
    <section ref={sectionRef} id="faq" className="py-10 md:py-20 bg-gradient-to-br from-white via-[#fff0f3] to-[#ffe5ea] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] opacity-80"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-10 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] bg-clip-text text-transparent">Got Questions? We've Got Answers.</span>
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div key={index} className={`bg-white/80 border border-[#E60023]/10 rounded-2xl shadow-xl transition-all duration-300 ${isVisible ? `animate__animated animate__fadeInUp ${index === 0 ? 'animate__delay-0-5s' : ''}${index === 1 ? 'animate__delay-0-7s' : ''}${index === 2 ? 'animate__delay-0-9s' : ''}` : 'opacity-0'}`} style={{ backdropFilter: 'blur(6px)' }}>
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group" aria-expanded={openIndex === index} aria-controls={`faq-answer-${index}`}>
                  <span className="font-semibold text-[#E60023] text-lg group-hover:underline">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#E60023] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div id={`faq-answer-${index}`} className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`} aria-hidden={openIndex !== index}>
                  <p className="text-slate-700 text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="inline-block text-[#E60023] font-semibold hover:underline transition-colors text-lg">See all FAQs →</a>
          </div>
        </div>
      </div>
    </section>
  );
}