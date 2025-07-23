'use client';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Logo } from '../components';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a0007] via-[#080405] to-[#2d0b13] text-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col items-center justify-between w-full md:flex-row gap-8 md:gap-10 mb-8 md:mb-12">
          <div className="lg:col-span-2 w-full md:w-1/2">
            <div className="flex items-center mb-4 md:mb-5">
              <Logo />
            </div>
            <p className="text-white/70 mb-6 text-sm md:text-base max-w-md">Your one-stop platform for all rental needs across Africa. Connecting communities through trusted rental experiences.</p>
            <div className="flex flex-col space-y-2 md:space-y-4 w-fit">
              <h4 className="font-semibold text-white/90 text-sm md:text-base">Download App:</h4>
              <div className="flex flex-row gap-3 sm:gap-4 items-center">
                <Link href="#" className="transition-transform hover:scale-105 w-[140px] cursor-pointer">
                  <img src="/store.svg" alt="App Store" className="rounded-lg h-12 object-cover w-full" />
                </Link>
                <Link href="#" className="transition-transform hover:scale-105 w-[140px] cursor-pointer">
                  <img src="/google.svg" alt="App Store" className="rounded-lg h-12 object-cover w-full" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full md:w-1/2 gap-2 md:gap-4">
            <div className="md:mt-0 w-full">
              <h4 className="font-bold text-base md:text-lg mb-4 md:mb-5 text-white/90 border-b border-[#E60023]/50 pb-2">Quick Links</h4>
              <div className="flex flex-col space-y-2 md:space-y-3">
                {[
                  { name: 'About', href: '/#about' },
                  { name: 'Vendor', href: '/#how-it-works' },
                  { name: 'Faq', href: '/#faq' },
                ].map((item) => (
                  <Link key={item.name} href={item.href} className="text-white/70 hover:text-[#E60023] transition-colors w-fit cursor-pointer text-sm md:text-base py-1">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:mt-0 w-full">
              <h4 className="font-bold text-base md:text-lg mb-4 md:mb-5 text-white/90 border-b border-[#E60023]/50 pb-2">Contact Us</h4>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start">
                  <Phone className="text-[#E60023] mr-3 mt-0.5 md:mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm md:text-base">+254 712 345 678</span>
                </div>
                <div className="flex items-start">
                  <Mail className="text-[#E60023] mr-3 mt-0.5 md:mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm md:text-base break-all">support@rentall.africa</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-[#E60023] mr-3 mt-0.5 md:mt-1 flex-shrink-0" size={16} />
                  <span className="text-sm md:text-base">Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 md:pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-3 md:space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <Link key={idx} href="#" className="bg-white/10 hover:bg-[#E60023] rounded-full p-2.5 md:p-3 transition-colors" aria-label={`Social media link ${idx + 1}`}>
                  <Icon size={16} className="text-white md:w-[18px] md:h-[18px]" />
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
              {[
                { name: 'Terms & Conditions', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' },
              ].map((item) => (
                <Link key={item.name} href={item.href} className="text-white/70 hover:text-white transition-colors cursor-pointer">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-6 md:mt-8 text-center text-white/50 text-xs md:text-sm">
            <p>© {currentYear} RentAll Africa. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}