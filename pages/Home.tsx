import React from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Products from '../components/Sections/Products';
import Mission from '../components/Sections/Mission';
import ScrollMarquee from '../components/ScrollMarquee';

interface HomeProps {
  onOpenContact: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenContact }) => {
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <About />
      <ScrollMarquee />
      <Products />
      <Mission />
    </>
  );
};

export default Home;
