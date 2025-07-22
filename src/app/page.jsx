import { About, Categories, Countries, FAQ, Features, Footer, Hero, HowItWorks, Navigation, Testimonials, VendorSection } from './components';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Categories />
        <HowItWorks />
        <VendorSection />
        <Countries />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
