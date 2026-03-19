
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-light text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Location />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
};

export default App;
