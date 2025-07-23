'use client';
import { useState, useEffect } from 'react';
import { About, Categories, Countries, FAQ, Features, Footer, Hero, HowItWorks, Loader, HeroSection, Testimonials, VendorSection } from './components';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col">
          <main>
            <Hero />
            <Categories />
            <HowItWorks />
            <Countries />
            <Testimonials />
            {/* <VendorSection /> */}
            <FAQ />
            {/* <About /> */}
            <HeroSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
