'use client';
import { MessageCircle } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'I listed my camera gear and made my first rental in less than 2 days. Super easy!',
      author: 'Chidi',
      role: 'Photographer, Nigeria',
    },
    {
      quote: 'Booked a car in Accra in under 10 minutes. RentAll saved me during a work trip.',
      author: 'Ama',
      role: 'Traveler, Ghana',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#1a0007] via-[#2d0b13] to-[#E60023]/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">Hear from Our Community</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center rounded-full bg-[#E60023]/10 w-12 h-12 mr-3">
                  <MessageCircle className="w-7 h-7 text-[#E60023]" />
                </span>
                <span className="text-white/80 font-semibold">{testimonial.author}</span>
              </div>
              <p className="text-lg mb-4 text-white/90 italic">"{testimonial.quote}"</p>
              <p className="text-white/60 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}