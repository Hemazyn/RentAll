'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Can I be both a guest and a vendor?',
      answer: 'Yes! You can switch roles anytime in the app.',
    },
    {
      question: 'How do I get paid as a vendor?',
      answer: 'Via Mobile Money or Bank Transfer — fast and secure.',
    },
    {
      question: 'What does it cost to list my item?',
      answer: "It's free to list. We only charge a small commission on successful bookings.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-[#1a0007] via-[#2d0b13] to-[#E60023]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">Got Questions? We've Got Answers.</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/10 hover:rounded-2xl transition-colors">
                  <span className="font-semibold text-white">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-white transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-white/80">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="text-[#E60023] font-semibold hover:underline">
              See all FAQs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
