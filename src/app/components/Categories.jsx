'use client';
import { Car, Home, Wrench, Briefcase } from 'lucide-react';

const categories = [
  {
    icon: <Car className="w-10 h-10 text-[#E60023]" />,
    title: 'Cars',
    description: 'Rent reliable vehicles for daily or long-term use.',
  },
  {
    icon: <Home className="w-10 h-10 text-[#E60023]" />,
    title: 'Apartments',
    description: 'Book short stays or list your space.',
  },
  {
    icon: <Wrench className="w-10 h-10 text-[#E60023]" />,
    title: 'Equipment',
    description: 'Find and rent tools, tech, and more.',
  },
  {
    icon: <Briefcase className="w-10 h-10 text-[#E60023]" />,
    title: 'Services',
    description: 'Hire local pros for cleaning, repairs, events, and more.',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="relative py-16 bg-gradient-to-br from-[#1a0007] via-[#2d0b13] to-[#E60023]/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">What Can You Rent With RentAll?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:border-[#E60023] hover:bg-[#E60023]/10">
              <div className="mb-4 flex items-center justify-center rounded-full bg-[#E60023]/10 w-16 h-16 group-hover:bg-[#E60023]/20 transition">{category.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
              <p className="text-white/70">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}