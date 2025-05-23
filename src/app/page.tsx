'use client';

import Navbar from './components/navbar/navbar';
import HomeSection from './components/homesection/home';
import AboutSection from './components/aboutsection/about';
import ServiceSection from './components/servicesection/service';
import PortfolioSection from './components/portfoliosection/portfolio';
import Footer from './components/footer/footer';


// import ContactSection from './components/contactsection/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HomeSection />
      </section>

      <section id="about" className='bg-[#000000]'>
        <AboutSection />
      </section>

      <section id="service" className='bg-[#0e0d0d]'>
        <ServiceSection />
      </section>

      <section id="portfolio" className='bg-[#000000] min-h-screen'>
        <PortfolioSection/>
      </section>

      <section id="contact" className='bg-[#0e0d0d] max-h-screen'>
        <Footer />
      </section>
    </>
  );
}
