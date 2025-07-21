'use client';
import { AppWindow, Repeat, ShieldCheck, Smartphone, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <AppWindow className="w-8 h-8 text-[#E60023]" />,
      title: 'All-in-One Access',
      description: 'One app for every rental need',
    },
    {
      icon: <Repeat className="w-8 h-8 text-[#E60023]" />,
      title: 'Guest ↔ Vendor Switching',
      description: 'Flexibility at your fingertips',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#E60023]" />,
      title: 'Secure Payments',
      description: 'Protected by local providers',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#E60023]" />,
      title: 'Mobile-First Design',
      description: 'Built for African smartphone users',
    },
    {
      icon: <Zap className="w-8 h-8 text-[#E60023]" />,
      title: 'Quick Listings',
      description: 'Go live in just a few taps',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-[#1a0007] via-[#2d0b13] to-[#E60023]/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">Why Choose RentAll?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:border-[#E60023]">
              <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#E60023]/10 w-14 h-14">{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-white mb-1">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}