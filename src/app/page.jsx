import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Categories from './components/Categories'
import HowItWorks from './components/HowItWorks'
import Countries from './components/Countries'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import About from './components/About'
import Footer from './components/Footer'
import VendorSection from './components/VendorSection'

export default function Home() {
    return (
        <>
            <Navigation />
            <main>
                <Hero />
                <Categories />
                <HowItWorks />
                <VendorSection/>
                <Countries />
                <Features />
                <Testimonials />
                <FAQ />
                <About />
            </main>
            <Footer />
        </>
    )
}
