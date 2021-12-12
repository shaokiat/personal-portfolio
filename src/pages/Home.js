import React, { Component } from 'react';

import '../App.css';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export class Home extends Component {
  render() {
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
  }
}

export default Home;
