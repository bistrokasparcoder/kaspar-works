import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ChatWidget from './components/Chat/ChatWidget';
import ContactModal from './components/Contact/ContactModal';
import Home from './pages/Home';
import AppsPage from './pages/AppsPage';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar onOpenContact={() => setIsContactOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenContact={() => setIsContactOpen(true)} />} />
            <Route path="/apps" element={<AppsPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />

        {/* Contact Overlay */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;