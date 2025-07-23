'use client';
import Image from 'next/image';
import { Apple, MonitorPlay } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#1a0007] via-[#080405] to-[#2d0b13] relative overflow-hidden m-3 py-5 md:py-16 px-6 sm:px-10 md:px-20 rounded-[20px] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-10 relative z-10">
        <div className="space-y-3 md:space-y-6">
          <h1 className="text-xl md:text-5xl font-extrabold text-center md:text-start leading-tight text-white">
            Your go-to platform to rent all things <span className="text-primary/80">Anythings</span>, <span className="text-primary/80">Anytime</span> and <span className="text-primary/80">Anywhere</span>.
          </h1>
          <div className="flex flex-row gap-3 sm:gap-4 items-center">
            <Link href="#" className="transition-transform hover:scale-105 w-[140px] cursor-pointer">
              <img src="/store.svg" alt="App Store" className="rounded-lg h-12 object-cover w-full" />
            </Link>
            <Link href="#" className="transition-transform hover:scale-105 w-[140px] cursor-pointer">
              <img src="/google.svg" alt="App Store" className="rounded-lg h-12 object-cover w-full" />
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <Image src="/vendor.png" alt="Phone UI" width={300} height={600} className="relative z-20 rounded-xl" />
          <Image src="/car.png" alt="Web UI" width={500} height={300} className="absolute top-[-40px] right-[-60px] z-10 hidden md:block opacity-90" />
        </div>
      </div>
    </section>
  );
}
