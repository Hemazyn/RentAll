'use client';
import { CheckCircle2 } from 'lucide-react';

export default function Countries() {
  const countries = [
    { flag: '🇳🇬', name: 'Nigeria' },
    { flag: '🇰🇪', name: 'Kenya' },
    { flag: '🇬🇭', name: 'Ghana' },
    { flag: '🇿🇦', name: 'South Africa' },
    { flag: '🇺🇬', name: 'Uganda' },
  ];

  const paymentMethods = ['Mobile Money (M-Pesa, MTN MoMo, Airtel Money, etc.)', 'Bank Transfers'];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a0007] via-[#2d0b13] to-[#E60023]/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">Available Where You Are</h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg text-white/80 mb-8">We proudly serve:</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {countries.map((country, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center hover:border-[#E60023] transition">
                <div className="text-3xl mb-2">{country.flag}</div>
                <p className="font-semibold text-white">{country.name}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-white">Secure Payment Methods:</h3>
            <ul className="space-y-3">
              {paymentMethods.map((method, index) => (
                <li key={index} className="flex items-center text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mr-3" />
                  <span>{method}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-white/70">Fast, safe, and designed for local convenience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
