'use client';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'I listed my camera gear and made my first rental in less than 2 days. Super easy and the payments were fast!',
    author: 'Chidi',
    role: 'Photographer, Nigeria',
  },
  {
    quote: 'Booked a car in Accra in under 10 minutes. RentAll saved me during a work trip. The app is incredibly user-friendly.',
    author: 'Ama',
    role: 'Traveler, Ghana',
  },
  {
    quote: 'As a small business owner, renting out my event equipment on RentAll has opened up a new, consistent revenue stream. Highly recommend!',
    author: 'David',
    role: 'Event Supplier, Kenya',
  },
];

export default function TestimonialsMarquee() {
  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-10 md:py-20 bg-white/70 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 text-black">
          <span className="text-gray-700">Hear from Our Community</span>
        </h2>
        <div className="relative">
          <div className="marquee flex gap-6 w-full">
            {marqueeTestimonials.map((testimonial, idx) => (
              <div key={idx} className="min-w-[320px] max-w-sm bg-white border border-[#E60023]/10 rounded-2xl p-6 flex flex-col shadow-sm">
                <Quote className="w-8 h-8 text-[#E60023]/10 mb-2" />
                <blockquote className="text-base md:text-lg text-slate-700 italic font-medium mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="flex items-center mt-auto">
                  <div className="ml-3">
                    <cite className="font-semibold text-black not-italic">{testimonial.author}</cite>
                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 640px) {
          .marquee {
            animation-duration: 18s;
          }
        }
      `}</style>
    </section>
  );
}
