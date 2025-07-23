'use client';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import 'animate.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I be both a guest and a vendor?',
      answer: 'Yes! You can switch roles anytime within your RentAll app profile settings. This allows you to rent items when you need them and list your own items for rent when you want to earn.',
    },
    {
      question: 'How do I get paid as a vendor?',
      answer: 'Vendors receive payouts directly via Mobile Money or Bank Transfer, depending on your preference and region. Payments are processed quickly after a successful rental period concludes.',
    },
    {
      question: 'What does it cost to list my item?',
      answer: "It's completely free to list your items on RentAll. We only charge a small, transparent service fee on successful bookings, which is deducted from the payout amount.",
    },
    {
      question: "What is RentAll's cancellation policy?",
      answer: "Our cancellation policies are set by individual vendors and displayed clearly on each listing's detail page. We encourage both guests and vendors to review these terms before confirming a booking.",
    },
    {
      question: 'How does RentAll ensure trust and safety?',
      answer: 'We prioritize a secure community. All users (guests and vendors) undergo a verification process. We also feature a robust rating and review system, and offer secure payment processing to protect all transactions.',
    },
  ];

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
    <section ref={sectionRef} id="faq" className="py-10 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2 rounded-b-full bg-gradient-to-r from-[#E60023] via-[#ff4d6d] to-[#E60023] opacity-80"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-xl md:text-4xl font-semibold md:font-extrabold text-center mb-5 md:mb-10 ${isVisible ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}>
            <span className="text-gray-700">Got Questions? We've Got Answers.</span>
          </h2>
          <div className="space-y-2.5 md:space-y-5">
            {faqs.map((faq, index) => (
              <div key={index} className={`bg-white/80 border border-[#E60023]/10 rounded-2xl transition-all duration-300 ${isVisible ? `animate__animated animate__fadeInUp ${index === 0 ? 'animate__delay-0-5s' : index === 1 ? 'animate__delay-0-7s' : 'animate__delay-0-9s'}` : 'opacity-0'}`} style={{ backdropFilter: 'blur(6px)' }}>
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group" aria-expanded={openIndex === index} aria-controls={`faq-answer-${index}`}>
                  <span className="font-medium text-gray-800 text-base md:text-lg group-hover:underline">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#E60023] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                <div id={`faq-answer-${index}`} className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`} aria-hidden={openIndex !== index}>
                  <p className="text-gray-700 text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
