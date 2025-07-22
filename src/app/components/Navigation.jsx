'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../components';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Vendor', href: '#how-it-works' },
  { name: 'Faq', href: '#faq' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-2xl fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <div className="hidden md:flex flex-row items-center gap-10">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-white font-semibold cursor-pointer tracking-[0.1em] leading-8 hover:text-[#E60023] transition-colors duration-200 text-[16px] capitalize">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex flex-row gap-3 items-center">
            <a href="#" className="bg-[#E60023] hover:bg-[#b8001a] text-white py-2 px-5 rounded-full w-30 text-center font-semibold shadow transition text-sm tracking-wide leading-6">
              iOS
            </a>
            <a href="#" className="bg-white text-primary hover:bg-white/10 py-2 px-5 rounded-full w-30 text-center font-semibold transition text-sm tracking-wide leading-6">
              Android
            </a>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none">
              {isOpen ? <X className="h-7 w-7 z-50" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#1a0007] via-[#E60023] to-[#2d0b13] flex flex-col items-center justify-center backdrop-blur-2xl px-4 pb-6 space-y-4 animate-slide-down fixed h-screen top-0 w-full">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="flex gap-4 text-white font-semibold tracking-widest leading-8 py-3 hover:text-[#E60023] transition-colors text-2xl capitalize">
              {item.name}
            </a>
          ))}
          <div className="flex flex-row w-full justify-center gap-4 mt-6 items-center">
            <a href="#" className="text-center bg-[#E60023] text-white px-5 py-3 rounded-full w-full font-semibold text-base tracking-wide">
              iOS
            </a>
            <a href="#" className="text-center bg-white text-primary px-5 py-3 rounded-full w-full font-semibold text-base tracking-wide">
              Android
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}