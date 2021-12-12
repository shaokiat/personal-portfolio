import React from 'react';

import '../App.css';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = function () {
  return (
    <div id="main">
      <HeroSection />
      <About />
      <Skills />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
