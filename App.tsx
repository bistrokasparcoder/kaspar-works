import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Flagship from './components/Sections/Flagship';
import Mission from './components/Sections/Mission';
import Footer from './components/Layout/Footer';
import ChatWidget from './components/Chat/ChatWidget';
import ContactModal from './components/Contact/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <main>
        <Hero onOpenContact={() => setIsContactOpen(true)} />
        <About />
        <Flagship />
        <Mission />
      </main>
      <Footer />
      <ChatWidget />
      
      {/* Contact Overlay */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

export default App;