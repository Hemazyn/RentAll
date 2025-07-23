'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../components';
import Image from 'next/image';

const navigation = [
  { name: 'About', href: '/#about' },
  { name: 'Vendor', href: '/#how-it-works' },
  { name: 'Faq', href: '/#faq' },
];

export default function Navigation({ logoColor = 'text-white', textColor = 'text-white', androidButtonClass = 'bg-white text-primary hover:bg-white/10' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo logoColor={logoColor} />
          <div className="hidden md:flex flex-row items-center gap-10">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className={`${textColor} font-semibold cursor-pointer tracking-[0.1em] leading-8 hover:text-[#E60023] transition-colors duration-200 text-[16px] capitalize`}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden md:flex flex-row gap-3 items-center">
            <a href="#" className="bg-[#E60023] hover:bg-[#b8001a] text-white py-2 px-5 rounded-full w-30 text-center font-semibold shadow transition text-sm tracking-wide leading-6">
              iOS
            </a>
            <a href="#" className={`${androidButtonClass} py-2 px-5 rounded-full w-30 text-center font-semibold transition text-sm tracking-wide leading-6`}>
              Android
            </a>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none" aria-expanded={isOpen}>
              {isOpen ? <X className="h-7 w-7 z-50 text-gray-900 fixed" /> : <Menu className="h-7 w-7 text-primary rounded-md px-0.5" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white flex flex-col items-center justify-center backdrop-blur-2xl space-y-4 animate-slide-down fixed h-screen top-0 left-0 z-40 w-full">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} cclassName={`flex gap-4 text-gray-800 font-medium tracking-widest leading-8 py-3 hover:text-[#E60023] transition-colors text-lg capitalize ${textColor === 'text-black' ? 'text-black' : 'text-gray-800'}`}>
              {item.name}
            </a>
          ))}
          <div className="flex flex-row gap-3 sm:gap-4">
            <a href="#" className="transition-transform hover:scale-[1.03] flex-1 sm:flex-initial">
              <Image src="/store.svg" alt="App Store" width={100} height={30} className="rounded-lg cursor-pointer w-24 sm:w-[150px]" />
            </a>
            <a href="#" className="transition-transform hover:scale-[1.03] flex-1 sm:flex-initial">
              <Image src="/google.svg" alt="Google Play" width={100} height={30} className="rounded-lg cursor-pointer w-24 sm:w-[150px]" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}