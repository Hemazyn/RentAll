import { About, Categories, Countries, FAQ, Features, Footer, Hero, HowItWorks, Testimonials, VendorSection } from './components';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <VendorSection />
        <Countries />
        <Testimonials />
        <FAQ />
        <About />
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
