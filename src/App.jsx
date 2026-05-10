import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <div className="data-line hidden lg:block"></div>
      <Hero />
      <Solutions />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
