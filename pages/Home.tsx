import React from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Flagship from '../components/Sections/Flagship';
import Dialysis from '../components/Sections/Dialysis';
import Mission from '../components/Sections/Mission';

interface HomeProps {
  onOpenContact: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenContact }) => {
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <About />
      <Flagship />
      <Dialysis />
      <Mission />
    </>
  );
};

export default Home;
