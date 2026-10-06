import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-on-surface overflow-x-hidden selection:bg-secondary selection:text-on-secondary-fixed">
      {/* Decorative vertical glowing cyber-line on wide screens */}
      <div className="data-line hidden xl:block pointer-events-none" />

      {/* Navigation Header with full mobile drawer */}
      <Header />

      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Stats & Social Proof Bar */}
        <Stats />

        {/* Solutions Showcase */}
        <Solutions />

        {/* Core Advantages & Features */}
        <Features />

        {/* Transparent Pricing Plans */}
        <Pricing />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Interactive FAQ */}
        <FAQ />

        {/* Contact Form & WhatsApp Details */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
