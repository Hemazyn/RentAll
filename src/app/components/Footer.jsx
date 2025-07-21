'use client';
import { Link } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a0007] via-[#2d0b13] to-[#E60023]/30 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-extrabold mb-4 text-[#E60023]">RentAll</h3>
            <p className="text-white/70">Your one-stop platform for all rental needs across Africa.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Download the App:</h4>
            <div className="flex flex-row md:flex-col gap-4">
              <a href="#" className="cursor-pointer">
                <Image src="/apple.png" alt="Download on the App Store" width={120} height={20} priority className="h-fit rounded-md" />
              </a>
              <a href="#" className="cursor-pointer">
                <Image src="/google.png" alt="Get it on Google Play" width={120} height={40} priority className="h-fit rounded-md" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white/90">Quick Links:</h4>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© {currentYear} RentAll Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
